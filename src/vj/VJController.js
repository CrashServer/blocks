import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { AudioReactor } from '../audio/AudioReactor.js';
import { ParameterBus } from './ParameterBus.js';
import { CameraModes } from './CameraModes.js';
import { MeshReactor } from './MeshReactor.js';
import { ParticleSpawner } from './ParticleSpawner.js';
import { SceneBank } from './SceneBank.js';
import { AudioGenerative } from './AudioGenerative.js';
import { AudioBlockSpawner } from './AudioBlockSpawner.js';
import { EphemeralBlockManager } from './EphemeralBlockManager.js';
import { GenerativeScatter } from '../tools/GenerativeScatter.js';
import {
  ChromaticAberrationShader,
  GlitchShader,
  HueShiftShader,
  VignetteShader,
  FeedbackShader,
  KaleidoscopeShader,
  MirrorShader,
  PixelateShader,
  RGBSplitShader,
  InvertShader
} from './VJShaders.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

/**
 * VJController - Master orchestrator for VJ mode
 *
 * Connects audio analysis to visual parameters:
 * - Shader uniforms (edge thickness, chromatic aberration, etc.)
 * - Camera modes (orbit, drift, shake, etc.)
 * - Mesh distortion (block bounce, vertex displacement)
 * - Post-processing effects (glitch, vignette, hue shift)
 */

export class VJController {
  constructor(engine, blockManager, gpuRenderer, cameraBookmarks) {
    this.engine = engine;
    this.blockManager = blockManager;
    this.gpuRenderer = gpuRenderer;
    this.cameraBookmarks = cameraBookmarks;

    // Sub-systems
    this.audioReactor = new AudioReactor();
    this.parameterBus = new ParameterBus();
    this.cameraModes = new CameraModes(engine, cameraBookmarks);
    this.meshReactor = new MeshReactor(blockManager, engine);
    this.particleSpawner = new ParticleSpawner(engine.scene);
    this.audioBlockSpawner = new AudioBlockSpawner(blockManager);
    this.sceneBank = new SceneBank();
    this.audioGenerative = new AudioGenerative(engine.scene);

    // Generative paint mode - audio-reactive procedural generation with decay
    this.ephemeralBlockManager = new EphemeralBlockManager(blockManager);
    this.generativeScatter = new GenerativeScatter(blockManager);
    this.generativePaintEnabled = false;
    this.generativePaintDensity = 10; // Blocks per beat (3-30)
    this.lastBeatState = false; // Track beat state to detect beat triggers
    this.generativePaintBPM = 120; // Fallback BPM when no beats detected
    this.timeSinceLastSpawn = 0; // Track time for BPM-based spawning
    this.spawnRandomRadius = 15; // Random spawn radius around camera/origin

    // VJ shader passes
    this.vjPasses = {};
    this.vjPassesActive = false;

    // Feedback ping-pong targets
    this.feedbackTargetA = null;
    this.feedbackTargetB = null;
    this.feedbackFlip = false;

    // State
    this.active = false;
    this.performanceMode = false;
    this.currentPreset = 'hard';

    // Styles for cycling
    this.styles = ['clean', 'sketch', 'ink', 'crosshatch', 'blueprint', 'comic', 'saturated', 'neon', 'scifi', 'watercolor', 'noir', 'synthwave', 'ascii'];
    this.currentStyleIndex = 0;

    // Camera modes for cycling
    this.cameraModeNames = ['orbit', 'drift', 'fly', 'lock', 'rail', 'chaos'];
    this.currentCameraModeIndex = 0;

    // Fill toggle state for beat trigger
    this.fillsOn = true;

    // Master reactivity
    this.reactivity = 1.0;

    // Keyboard handler
    this._keyHandler = (e) => this._handleKeyboard(e);

    // Layer manager reference (set from main.js for scene switching)
    this._layerManager = null;

    // Callbacks
    this.onStateChange = null;
  }

  async start() {
    if (this.active) return;

    try {
      await this.audioReactor.start();
    } catch (e) {
      console.warn('VJController: Audio start failed:', e);
      throw e;
    }

    // Load default preset
    this.parameterBus.loadPreset(this.currentPreset);

    // Enable GPU renderer if not already
    if (!this.gpuRenderer.enabled) {
      this.gpuRenderer.setEnabled(true);
    }

    // Setup VJ shader passes
    this._setupVJPasses();

    // Enable sub-systems
    this.cameraModes.setMode('orbit');
    this.cameraModes.setEnabled(true);
    this.meshReactor.setEnabled(true);
    this.particleSpawner.updateSceneBounds(this.blockManager);
    this.audioBlockSpawner.updateSpawnCenter();

    // Wire into render loop
    this.engine.onVJUpdate = (delta) => this.update(delta);

    // Keyboard
    window.addEventListener('keydown', this._keyHandler);

    this.active = true;
    if (this.onStateChange) this.onStateChange(true);
  }

  stop() {
    if (!this.active) return;

    // Stop sub-systems
    this.audioReactor.stop();
    this.cameraModes.setEnabled(false);
    this.meshReactor.setEnabled(false);
    this.particleSpawner.setEnabled(false);
    this.audioGenerative.setEnabled(false);

    // Disable generative paint spawning but keep ephemeral blocks
    this.generativePaintEnabled = false;
    this.generativeScatter.setAudioReactive(false);
    // Note: ephemeralBlockManager stays enabled so blocks continue to decay

    // Keep VJ update loop running ONLY if ephemeral blocks exist
    // This allows blocks to continue decaying even after VJ mode stops
    if (this.ephemeralBlockManager.getCount() > 0) {
      console.log(`[VJController] VJ stopped but ${this.ephemeralBlockManager.getCount()} ephemeral blocks remain, continuing decay updates`);
      this.engine.onVJUpdate = (delta) => {
        // Only update ephemeral blocks, nothing else
        this.ephemeralBlockManager.update(performance.now() / 1000);

        // Stop updates when all blocks have decayed
        if (this.ephemeralBlockManager.getCount() === 0) {
          console.log('[VJController] All ephemeral blocks decayed, stopping updates');
          this.engine.onVJUpdate = null;
        }
      };
    } else {
      // No ephemeral blocks, disconnect immediately
      this.engine.onVJUpdate = null;
    }

    // Remove VJ passes
    this._removeVJPasses();

    // Exit performance mode if active
    if (this.performanceMode) {
      this.exitPerformanceMode();
    }

    window.removeEventListener('keydown', this._keyHandler);

    this.active = false;
    if (this.onStateChange) this.onStateChange(false);
  }

  update(delta) {
    if (!this.active) return;

    // 1. Update audio analysis
    this.audioReactor.update();

    // 2. Run parameter mappings
    const params = this.parameterBus.update(this.audioReactor, delta);

    // 3. Apply mapped parameters
    this._applyParams(params, delta);

    // 4. Update camera
    this.cameraModes.update(this.audioReactor, delta);

    // 5. Update mesh distortion
    this.meshReactor.update(this.audioReactor, delta);

    // 6. Update VJ shader passes
    this._updateVJPasses(delta);

    // 7. Particle spawner (visual-only temporary particles)
    if (this.particleSpawner.enabled) {
      // Spawn more particles on beat (2-10 instead of 1-5)
      if (this.audioReactor.beat) {
        const count = 2 + Math.floor(this.audioReactor.energy * 8);
        console.log(`[VJController] Beat detected! Spawning ${count} particles (energy: ${this.audioReactor.energy.toFixed(2)})`);
        for (let i = 0; i < count; i++) {
          this.particleSpawner.spawn(this.audioReactor.energy);
        }
      }
      this.particleSpawner.update(delta);
    }

    // 7b. Audio block spawner (real persistent blocks)
    if (this.audioBlockSpawner.enabled) {
      this.audioBlockSpawner.update(this.audioReactor, delta);
    }

    // 8. Audio generative growth
    if (this.audioGenerative.enabled) {
      this.audioGenerative.update(this.audioReactor, delta);
    }

    // 9. Generative paint mode - spawn blocks on beat OR BPM timer
    if (this.generativePaintEnabled) {
      // Update ephemeral blocks (decay, removal)
      this.ephemeralBlockManager.update(performance.now() / 1000);

      // Detect beat trigger (rising edge detection)
      const beatNow = this.audioReactor.beat;
      const beatTriggered = beatNow && !this.lastBeatState;
      this.lastBeatState = beatNow;

      // BPM-based timer fallback (spawn even without beat detection)
      this.timeSinceLastSpawn += delta;
      const bpmInterval = 60 / this.generativePaintBPM; // Convert BPM to seconds per beat
      const timerTriggered = this.timeSinceLastSpawn >= bpmInterval;

      // Debug: log beat detection every 60 frames
      if (!this._beatDebugCount) this._beatDebugCount = 0;
      this._beatDebugCount++;
      if (this._beatDebugCount % 60 === 0) {
        const energyAvg = this.audioReactor.energyAverage || 0;
        console.log(`[VJController] Paint active | Beat: ${beatNow} | Timer: ${this.timeSinceLastSpawn.toFixed(2)}s/${bpmInterval.toFixed(2)}s | Energy: ${this.audioReactor.energy.toFixed(2)}`);
      }

      // Spawn on beat OR timer (whichever comes first)
      if (beatTriggered || timerTriggered) {
        // Update scatter parameters from audio (modulates density, complexity, etc.)
        this.generativeScatter.updateFromAudio(this.audioReactor);
        this._spawnGenerativePaint(beatTriggered ? 'beat' : 'timer');

        // Reset timer when spawning
        this.timeSinceLastSpawn = 0;
      }
    }
  }

  _applyParams(params, delta) {
    for (const [target, data] of params) {
      const { value, trigger } = data;
      const scaled = trigger ? value : value * this.reactivity;

      switch (target) {
        // Shader params
        case 'shader.thickness':
          this.gpuRenderer.setLineWidth(scaled);
          break;
        case 'shader.threshold':
          this.gpuRenderer.setThreshold(scaled);
          break;
        case 'shader.fills':
          if (trigger) {
            this.fillsOn = !this.fillsOn;
            this.gpuRenderer.setShowFills(this.fillsOn);
          }
          break;
        case 'shader.chromatic':
          if (this.vjPasses.chromatic) {
            this.vjPasses.chromatic.uniforms.uAmount.value = scaled;
          }
          break;
        case 'shader.glitch':
          if (this.vjPasses.glitch) {
            this.vjPasses.glitch.uniforms.uGlitch.value = scaled;
          }
          break;
        case 'shader.hueShift':
          if (this.vjPasses.hueShift) {
            this.vjPasses.hueShift.uniforms.uShift.value = scaled;
          }
          break;
        case 'shader.vignette':
          if (this.vjPasses.vignette) {
            this.vjPasses.vignette.uniforms.uIntensity.value = scaled;
          }
          break;
        case 'shader.feedback':
          if (this.vjPasses.feedback) {
            this.vjPasses.feedback.uniforms.uFeedback.value = scaled;
          }
          break;
        case 'shader.kaleidoscope':
          if (this.vjPasses.kaleidoscope) {
            this.vjPasses.kaleidoscope.uniforms.uSegments.value = 3 + Math.floor(scaled * 9); // 3-12 segments
          }
          break;
        case 'shader.mirror':
          if (this.vjPasses.mirror && trigger) {
            // Cycle mirror modes on beat: 0→1→2→3→0
            const current = this.vjPasses.mirror.uniforms.uMode.value;
            this.vjPasses.mirror.uniforms.uMode.value = (current + 1) % 4;
          }
          break;
        case 'shader.pixelate':
          if (this.vjPasses.pixelate) {
            this.vjPasses.pixelate.uniforms.uPixelSize.value = 1 + scaled * 20; // 1-21 pixel size
          }
          break;
        case 'shader.rgbSplit':
          if (this.vjPasses.rgbSplit) {
            this.vjPasses.rgbSplit.uniforms.uAmount.value = scaled * 0.02; // Stronger split
          }
          break;
        case 'shader.invert':
          if (this.vjPasses.invert && trigger) {
            // Toggle inversion on beat
            const current = this.vjPasses.invert.uniforms.uAmount.value;
            this.vjPasses.invert.uniforms.uAmount.value = current > 0.5 ? 0.0 : 1.0;
          }
          break;
        case 'shader.bloom':
          if (this.vjPasses.bloom) {
            this.vjPasses.bloom.strength = scaled * 2.0; // 0-2.0 range
          }
          break;

        // Camera params
        case 'camera.shake':
          this.cameraModes.shake = scaled;
          break;
        case 'camera.orbitSpeed':
          this.cameraModes.orbitSpeed = scaled;
          break;

        // Mesh params
        case 'mesh.vertexDistort':
          this.meshReactor.setVertexDistortion(scaled);
          break;
        case 'mesh.blockBounce':
          this.meshReactor.setBlockDistortion(scaled);
          break;

        // Emissive
        case 'emissive.intensity':
          this._setGlobalEmissiveIntensity(scaled);
          break;

        // Bloom
        case 'bloom.strength':
          this._setBloomStrength(scaled);
          break;
      }
    }
  }

  _setGlobalEmissiveIntensity(intensity) {
    const blocks = this.blockManager.getAllBlocks();
    for (const block of blocks) {
      if (block.emissive && block.emissive.enabled) {
        const materials = Array.isArray(block.mesh.material) ? block.mesh.material : [block.mesh.material];
        for (const mat of materials) {
          mat.emissiveIntensity = intensity;
        }
      }
    }
  }

  _setBloomStrength(strength) {
    if (!this.gpuRenderer.composer) return;
    const passes = this.gpuRenderer.composer.passes;
    for (const pass of passes) {
      if (pass.strength !== undefined) {
        pass.strength = strength;
      }
    }
  }

  // --- VJ Shader Pass Management ---

  _setupVJPasses() {
    if (this.vjPassesActive) return;

    // Core VJ shader passes
    this.vjPasses.chromatic = new ShaderPass(ChromaticAberrationShader);
    this.vjPasses.glitch = new ShaderPass(GlitchShader);
    this.vjPasses.hueShift = new ShaderPass(HueShiftShader);
    this.vjPasses.vignette = new ShaderPass(VignetteShader);
    this.vjPasses.feedback = new ShaderPass(FeedbackShader);

    // New trippy VJ effects
    this.vjPasses.kaleidoscope = new ShaderPass(KaleidoscopeShader);
    this.vjPasses.mirror = new ShaderPass(MirrorShader);
    this.vjPasses.pixelate = new ShaderPass(PixelateShader);
    this.vjPasses.rgbSplit = new ShaderPass(RGBSplitShader);
    this.vjPasses.invert = new ShaderPass(InvertShader);

    // Bloom/glow effect
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.vjPasses.bloom = new UnrealBloomPass(
      new THREE.Vector2(w, h),
      0.0, // strength (start at 0, controlled by audio)
      0.4, // radius
      0.85 // threshold
    );

    // Setup feedback render targets
    const params = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat };
    this.feedbackTargetA = new THREE.WebGLRenderTarget(w, h, params);
    this.feedbackTargetB = new THREE.WebGLRenderTarget(w, h, params);

    // Initialize pixelate resolution
    this.vjPasses.pixelate.uniforms.uResolution.value.set(w, h);

    // Disable all effects by default (manual control only)
    this.vjPasses.chromatic.enabled = false;
    this.vjPasses.glitch.enabled = false;
    this.vjPasses.hueShift.enabled = false;
    this.vjPasses.vignette.enabled = false;
    this.vjPasses.feedback.enabled = false;
    this.vjPasses.kaleidoscope.enabled = false;
    this.vjPasses.mirror.enabled = false;
    this.vjPasses.pixelate.enabled = false;
    this.vjPasses.rgbSplit.enabled = false;
    this.vjPasses.invert.enabled = false;
    this.vjPasses.bloom.enabled = false;

    this.vjPassesActive = true;

    // Inject passes into GPU renderer's composer
    this._injectVJPasses();
  }

  _injectVJPasses() {
    if (!this.gpuRenderer.composer || !this.vjPassesActive) return;

    const composer = this.gpuRenderer.composer;
    const passes = composer.passes;

    // Find OutputPass index (always last)
    const outputIdx = passes.length - 1;

    // Insert VJ passes before OutputPass
    // Order matters: feedback → distortions → color effects → bloom → composite
    const vjPassList = [
      this.vjPasses.feedback,        // Trails/echoes first
      this.vjPasses.kaleidoscope,    // Geometric distortion
      this.vjPasses.mirror,          // Mirror effects
      this.vjPasses.pixelate,        // Pixelation
      this.vjPasses.rgbSplit,        // RGB separation
      this.vjPasses.chromatic,       // Chromatic aberration
      this.vjPasses.glitch,          // Glitch
      this.vjPasses.hueShift,        // Color shift
      this.vjPasses.bloom,           // Glow (before vignette)
      this.vjPasses.vignette,        // Vignette
      this.vjPasses.invert,          // Color inversion (last)
    ];

    // Remove OutputPass, add VJ passes, re-add OutputPass
    const outputPass = passes[outputIdx];
    passes.splice(outputIdx, 1);

    for (const pass of vjPassList) {
      composer.addPass(pass);
    }

    composer.addPass(outputPass);
    console.log('[VJController] Injected VJ post-processing passes:', vjPassList.length);
  }

  _removeVJPasses() {
    if (!this.vjPassesActive) return;

    // Dispose feedback targets
    if (this.feedbackTargetA) this.feedbackTargetA.dispose();
    if (this.feedbackTargetB) this.feedbackTargetB.dispose();
    this.feedbackTargetA = null;
    this.feedbackTargetB = null;

    // Dispose bloom pass render targets
    if (this.vjPasses.bloom) {
      this.vjPasses.bloom.dispose();
    }

    this.vjPasses = {};
    this.vjPassesActive = false;

    // Rebuild GPU renderer without VJ passes
    if (this.gpuRenderer.enabled) {
      this.gpuRenderer.updateStyle();
    }
  }

  _updateVJPasses(delta) {
    if (!this.vjPassesActive) return;

    const time = performance.now() * 0.001; // Time in seconds

    // Update glitch time
    if (this.vjPasses.glitch) {
      this.vjPasses.glitch.uniforms.uTime.value += delta;
    }

    // Animate kaleidoscope rotation
    if (this.vjPasses.kaleidoscope) {
      this.vjPasses.kaleidoscope.uniforms.uAngle.value = time * 0.5;
    }

    // Animate RGB split angle
    if (this.vjPasses.rgbSplit) {
      this.vjPasses.rgbSplit.uniforms.uAngle.value = time * 2.0;
    }

    // Animate feedback effects for trippy video feedback
    if (this.vjPasses.feedback) {
      const feedbackAmount = this.vjPasses.feedback.uniforms.uFeedback.value;

      // Only animate feedback if it's active
      if (feedbackAmount > 0.01) {
        // Subtle zoom and rotation for classic video feedback look
        const energy = this.audioReactor?.energy || 0;
        this.vjPasses.feedback.uniforms.uZoom.value = 1.0 + energy * 0.02; // 1.0-1.02 zoom
        this.vjPasses.feedback.uniforms.uRotation.value = Math.sin(time * 0.5) * 0.01; // Subtle rotation

        // Feedback buffer ping-pong (swap render targets each frame)
        const currentTarget = this.feedbackFlip ? this.feedbackTargetA : this.feedbackTargetB;
        const prevTarget = this.feedbackFlip ? this.feedbackTargetB : this.feedbackTargetA;

        this.vjPasses.feedback.uniforms.tPrevFrame.value = prevTarget.texture;

        // Note: Actual rendering to targets would happen in render loop
        // This is just uniform management
        this.feedbackFlip = !this.feedbackFlip;
      }
    }
  }

  /**
   * Called when GPU renderer rebuilds its pipeline (style change).
   * Re-inject our VJ passes.
   */
  onStyleChanged() {
    if (this.vjPassesActive) {
      this._injectVJPasses();
    }
  }

  // --- Performance Mode ---

  enterPerformanceMode() {
    this.performanceMode = true;

    // Fullscreen
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();

    // Hide UI panels
    document.querySelectorAll('#right-panel, #bottom-toolbar, #top-menu, #timeline-panel, .modal').forEach(el => {
      el.dataset.vjHidden = el.style.display;
      el.style.display = 'none';
    });

    // Show performance overlay
    const overlay = document.getElementById('vj-overlay');
    if (overlay) overlay.style.display = 'flex';
  }

  exitPerformanceMode() {
    this.performanceMode = false;

    // Exit fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    // Restore UI panels
    document.querySelectorAll('#right-panel, #bottom-toolbar, #top-menu, #timeline-panel').forEach(el => {
      el.style.display = el.dataset.vjHidden || '';
      delete el.dataset.vjHidden;
    });

    // Hide performance overlay
    const overlay = document.getElementById('vj-overlay');
    if (overlay) overlay.style.display = 'none';
  }

  // --- Keyboard Controls ---

  _handleKeyboard(e) {
    if (!this.active) return;

    // Don't capture if typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      // 1-9: switch styles
      case '1': case '2': case '3': case '4': case '5':
      case '6': case '7': case '8': case '9': {
        const idx = parseInt(e.key) - 1;
        if (idx < this.styles.length) {
          this.currentStyleIndex = idx;
          this.gpuRenderer.setStyle(this.styles[idx]);
          // Re-inject VJ passes after style change rebuilds composer
          setTimeout(() => this.onStyleChanged(), 50);
        }
        e.preventDefault();
        break;
      }

      case ' ': // Space: toggle fills
        this.fillsOn = !this.fillsOn;
        this.gpuRenderer.setShowFills(this.fillsOn);
        this._showOverlayMessage(this.fillsOn ? 'Fills ON' : 'Fills OFF');
        e.preventDefault();
        break;

      case 'g': // Grayscale
        this.gpuRenderer.grayscale = !this.gpuRenderer.grayscale;
        this.gpuRenderer.updateStyleUniforms();
        this._showOverlayMessage(this.gpuRenderer.grayscale ? 'Grayscale' : 'Color');
        break;

      case 'i': // Invert
        this.gpuRenderer.setInverted(!this.gpuRenderer.inverted);
        this._showOverlayMessage(this.gpuRenderer.inverted ? 'Inverted' : 'Normal');
        break;

      case 'c': // Cycle camera mode
        this.currentCameraModeIndex = (this.currentCameraModeIndex + 1) % this.cameraModeNames.length;
        const modeName = this.cameraModeNames[this.currentCameraModeIndex];
        this.cameraModes.setMode(modeName);
        this._showOverlayMessage(`Camera: ${modeName}`);
        break;

      case 'f': // Fullscreen / performance mode
        if (this.performanceMode) {
          this.exitPerformanceMode();
        } else {
          this.enterPerformanceMode();
        }
        break;

      case 'm': // Mute audio
        if (this.audioReactor.running) {
          this.audioReactor.setGain(this.audioReactor.gain > 0 ? 0 : 1);
          this._showOverlayMessage(this.audioReactor.gain > 0 ? 'Audio ON' : 'Audio MUTED');
        }
        break;

      case 'r': // Randomize style
        this.currentStyleIndex = Math.floor(Math.random() * this.styles.length);
        this.gpuRenderer.setStyle(this.styles[this.currentStyleIndex]);
        setTimeout(() => this.onStyleChanged(), 50);
        break;

      case '+': case '=': // Increase reactivity
        this.reactivity = Math.min(3, this.reactivity + 0.1);
        this._showOverlayMessage(`Reactivity: ${this.reactivity.toFixed(1)}`);
        break;

      case '-': // Decrease reactivity
        this.reactivity = Math.max(0.1, this.reactivity - 0.1);
        this._showOverlayMessage(`Reactivity: ${this.reactivity.toFixed(1)}`);
        break;

      case '[': // Decrease smoothing
        this._adjustAllSmoothing(-0.02);
        this._showOverlayMessage('Smoother');
        break;

      case ']': // Increase smoothing
        this._adjustAllSmoothing(0.02);
        this._showOverlayMessage('Snappier');
        break;

      case '0': // Reset
        this.reactivity = 1.0;
        this.parameterBus.loadPreset(this.currentPreset);
        this._showOverlayMessage('Reset');
        break;

      case 'p': // Cycle presets
        const presetNames = ['chill', 'hard', 'psychedelic'];
        const pidx = presetNames.indexOf(this.currentPreset);
        this.currentPreset = presetNames[(pidx + 1) % presetNames.length];
        this.parameterBus.loadPreset(this.currentPreset);
        this._showOverlayMessage(`Preset: ${this.currentPreset}`);
        break;

      case 'n': // Next scene
        if (this.sceneBank.count > 0) {
          this.sceneBank.next(this.blockManager, this._layerManager);
          this.meshReactor.setEnabled(true); // Re-capture after scene switch
          this.particleSpawner.updateSceneBounds(this.blockManager);
          this.audioBlockSpawner.updateSpawnCenter();
          this._showOverlayMessage(`Scene: ${this.sceneBank.currentName} (${this.sceneBank.currentIndex + 1}/${this.sceneBank.count})`);
        }
        break;

      case 'b': // Previous scene
        if (this.sceneBank.count > 0) {
          this.sceneBank.previous(this.blockManager, this._layerManager);
          this.meshReactor.setEnabled(true);
          this.particleSpawner.updateSceneBounds(this.blockManager);
          this.audioBlockSpawner.updateSpawnCenter();
          this._showOverlayMessage(`Scene: ${this.sceneBank.currentName} (${this.sceneBank.currentIndex + 1}/${this.sceneBank.count})`);
        }
        break;

      case 'v': { // Cycle movement modes
        const modes = ['bounce', 'jump', 'wave', 'scatter'];
        const mi = modes.indexOf(this.meshReactor.movementMode);
        const nextMode = modes[(mi + 1) % modes.length];
        this.meshReactor.setMovementMode(nextMode);
        this._showOverlayMessage(`Move: ${nextMode}`);
        break;
      }

      case 'x': { // Toggle generative mode
        const gen = this.audioGenerative;
        if (gen.enabled) {
          gen.setEnabled(false);
          this._showOverlayMessage('Generative OFF');
        } else {
          gen.initFromScene(this.blockManager);
          gen.setEnabled(true);
          this._showOverlayMessage('Generative ON');
        }
        break;
      }

      case 'g': { // Toggle generative paint mode
        this.setGenerativePaintEnabled(!this.generativePaintEnabled);
        this._showOverlayMessage(this.generativePaintEnabled ? 'Generative Paint ON' : 'Generative Paint OFF');
        break;
      }

      case 't': { // Test spawn (manual trigger for debugging)
        if (this.generativePaintEnabled) {
          console.log('[VJController] Manual test spawn triggered');
          this.generativeScatter.updateFromAudio(this.audioReactor);
          this._spawnGenerativePaint();
          this._showOverlayMessage('Test Spawn');
        }
        break;
      }
    }
  }

  _adjustAllSmoothing(delta) {
    for (const m of this.parameterBus.mappings) {
      m.smooth = Math.max(0.01, Math.min(0.5, m.smooth + delta));
    }
  }

  _showOverlayMessage(msg) {
    const el = document.getElementById('vj-message');
    if (!el) return;
    el.textContent = msg;
    el.style.opacity = '1';
    clearTimeout(this._messageTimeout);
    this._messageTimeout = setTimeout(() => {
      el.style.opacity = '0';
    }, 1200);
  }

  // --- Public getters for UI ---

  getAudioData() {
    return {
      bands: { ...this.audioReactor.bands },
      energy: this.audioReactor.energy,
      beat: this.audioReactor.beat,
      onset: this.audioReactor.onset
    };
  }

  setPreset(name) {
    this.currentPreset = name;
    this.parameterBus.loadPreset(name);
  }

  setCameraMode(mode) {
    const idx = this.cameraModeNames.indexOf(mode);
    if (idx >= 0) this.currentCameraModeIndex = idx;
    this.cameraModes.setMode(mode);
  }

  // --- Generative Paint Mode ---

  /**
   * Enable/disable generative paint mode
   */
  setGenerativePaintEnabled(enabled) {
    this.generativePaintEnabled = enabled;

    if (enabled) {
      // Enable audio-reactive mode for scatter
      this.generativeScatter.setAudioReactive(true);
      this.ephemeralBlockManager.setEnabled(true);
      this.lastBeatState = false; // Reset beat state
      this.timeSinceLastSpawn = 0; // Reset timer

      // Set density
      this.generativeScatter.setMaxBlocks(this.generativePaintDensity);

      console.log(`[VJController] Generative Paint ENABLED (density: ${this.generativePaintDensity} blocks/beat, BPM: ${this.generativePaintBPM}, preset: ${this.generativeScatter.preset}, algorithm: ${this.generativeScatter.algorithm})`);
    } else {
      // Disable but DON'T clear - blocks persist after disabling
      this.generativeScatter.setAudioReactive(false);
      // Note: ephemeralBlockManager stays enabled so blocks continue to decay naturally
      console.log('[VJController] Generative Paint DISABLED (blocks will continue to decay)');
    }
  }

  /**
   * Set blocks per beat (density)
   */
  setGenerativePaintDensity(blocks) {
    this.generativePaintDensity = Math.max(3, Math.min(30, blocks));
    this.generativeScatter.setMaxBlocks(this.generativePaintDensity);
    console.log(`[VJController] Generative density: ${this.generativePaintDensity} blocks/beat`);
  }

  /**
   * Set generative paint preset (pipes, cables, rocks, crystals, etc.)
   */
  setGenerativePreset(presetName) {
    this.generativeScatter.setPreset(presetName);
    console.log(`[VJController] Generative preset: ${presetName}`);
  }

  /**
   * Set generative paint algorithm (walk, cluster, spiral, etc.)
   */
  setGenerativeAlgorithm(algorithm) {
    this.generativeScatter.setAlgorithm(algorithm);
    console.log(`[VJController] Generative algorithm: ${algorithm}`);
  }

  /**
   * Set ephemeral block lifetime (TTL in seconds)
   */
  setEphemeralLifetime(seconds) {
    this.ephemeralBlockManager.setBaseTTL(seconds);
    console.log(`[VJController] Ephemeral lifetime: ${seconds}s`);
  }

  /**
   * Set ephemeral decay mode (fadeAndShrink, floatUp, dissolve, etc.)
   */
  setEphemeralDecayMode(mode) {
    this.ephemeralBlockManager.setDecayMode(mode);
    console.log(`[VJController] Decay mode: ${mode}`);
  }

  /**
   * Spawn a generative paint structure at random position
   * @param {string} trigger - 'beat' or 'timer'
   */
  _spawnGenerativePaint(trigger = 'beat') {
    try {
      // Get spawn origin - randomize around camera target or scene center
      const origin = { x: 0, y: 0, z: 0 };

      // Base position: camera target or scene center
      if (this.cameraModes.target) {
        origin.x = this.cameraModes.target.x;
        origin.y = this.cameraModes.target.y;
        origin.z = this.cameraModes.target.z;
      } else {
        // Use center of existing blocks if available
        const blocks = this.blockManager.getAllBlocks();
        if (blocks.length > 0) {
          let sumX = 0, sumY = 0, sumZ = 0;
          for (const block of blocks) {
            sumX += block.gridPosition.x;
            sumY += block.gridPosition.y;
            sumZ += block.gridPosition.z;
          }
          origin.x = sumX / blocks.length;
          origin.y = sumY / blocks.length;
          origin.z = sumZ / blocks.length;
        }
      }

      // Add random offset in a sphere around the base position
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * this.spawnRandomRadius;
      const heightOffset = (Math.random() - 0.5) * 10; // -5 to +5 vertical variation

      origin.x = Math.round(origin.x + Math.cos(angle) * distance);
      origin.z = Math.round(origin.z + Math.sin(angle) * distance);
      origin.y = Math.max(0, Math.round(origin.y + heightOffset));

      // Generate blocks using audio-reactive scatter
      const blockDefs = this.generativeScatter.generate(origin);

      if (blockDefs.length === 0) {
        console.warn('[VJController] GenerativeScatter returned 0 blocks!');
        return;
      }

      // Spawn each block as ephemeral (with lifetime and decay)
      const energy = this.audioReactor.energy;
      let spawnedCount = 0;
      for (const def of blockDefs) {
        try {
          this.ephemeralBlockManager.spawn(def, energy);
          spawnedCount++;
        } catch (err) {
          console.error('[VJController] Failed to spawn ephemeral block:', err);
        }
      }

      const triggerIcon = trigger === 'beat' ? '🎵' : '⏱️';
      console.log(`[VJController] ${triggerIcon} Spawned ${spawnedCount} blocks at (${origin.x},${origin.y},${origin.z}) | Active: ${this.ephemeralBlockManager.getCount()}`);
    } catch (error) {
      console.error('[VJController] Error in _spawnGenerativePaint:', error);
    }
  }

  dispose() {
    this.stop();
    this.audioReactor.dispose();
    this.meshReactor.dispose();
    this.cameraModes.dispose();
    this.parameterBus.dispose();
    this.particleSpawner.dispose();
    this.audioBlockSpawner.dispose();
    this.audioGenerative.dispose();
    this.ephemeralBlockManager.dispose();
  }
}
