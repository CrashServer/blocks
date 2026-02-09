import * as THREE from 'three';

/**
 * MeshReactor - Audio-reactive mesh distortion and color
 *
 * Three layers:
 * 1. Block-level (CPU): position bounce/jump/wave/scatter, scale breathing, emissive pulse
 * 2. Color-level (CPU): HSL shifting driven by audio bands with spatial phase offset
 * 3. Vertex-level (GPU): simplex noise displacement via material patching
 */

// Reusable THREE objects to avoid per-frame allocation
const _color = new THREE.Color();
const _hsl = { h: 0, s: 0, l: 0 };

export class MeshReactor {
  constructor(blockManager, engine) {
    this.blockManager = blockManager;
    this.engine = engine;
    this.enabled = false;
    this.time = 0;

    // Distortion amounts (0-1)
    this.blockDistortion = 0.5;
    this.vertexDistortion = 0.5;
    this.colorReactivity = 0.5;

    // Movement mode: 'bounce' (default), 'jump', 'wave', 'scatter'
    this.movementMode = 'bounce';

    // Store original state per block to reset
    this.originalState = new Map();

    // Beat impulse tracking (for jump/scatter modes)
    this.lastBeat = false;
    this.beatTime = 0;

    // GPU vertex distortion uniforms (shared across all patched materials)
    this.vertexUniforms = {
      uBass: { value: 0 },
      uEnergy: { value: 0 },
      uTime: { value: 0 },
      uDistortAmount: { value: 0 }
    };

    // Track patched materials to avoid re-patching
    this.patchedMaterials = new WeakSet();
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (enabled) {
      this._captureOriginalState();
      this._patchExistingMaterials();
    } else {
      this._restoreOriginalState();
    }
  }

  setBlockDistortion(amount) {
    this.blockDistortion = amount;
  }

  setVertexDistortion(amount) {
    this.vertexDistortion = amount;
  }

  setColorReactivity(amount) {
    this.colorReactivity = amount;
  }

  setMovementMode(mode) {
    this.movementMode = mode;
    // Reset per-block dynamics when switching modes
    for (const [id, state] of this.originalState) {
      state.impulseY = 0;
      state.velX = 0;
      state.velZ = 0;
      state.pushX = 0;
      state.pushZ = 0;
      state.rotImpulse = 0;
    }
  }

  update(audioData, delta) {
    if (!this.enabled) return;
    this.time += delta;

    // Detect beat edge (rising)
    const beatNow = audioData.beat;
    if (beatNow && !this.lastBeat) {
      this.beatTime = this.time;
    }
    this.lastBeat = beatNow;

    // Update vertex shader uniforms
    this.vertexUniforms.uBass.value = audioData.bands.bass;
    this.vertexUniforms.uEnergy.value = audioData.energy;
    this.vertexUniforms.uTime.value = this.time;
    this.vertexUniforms.uDistortAmount.value = this.vertexDistortion;

    // Block-level distortion
    if (this.blockDistortion > 0.01) {
      this._updateBlocks(audioData, delta);
    }

    // Color variation
    if (this.colorReactivity > 0.01) {
      this._updateBlockColors(audioData, delta);
    }

    // Patch any new materials (blocks added since last frame)
    if (this.vertexDistortion > 0.01) {
      this._patchNewMaterials();
    }
  }

  _captureOriginalState() {
    this.originalState.clear();
    const blocks = this.blockManager.getAllBlocks();
    for (const block of blocks) {
      this._captureBlock(block);
    }
  }

  _captureBlock(block) {
    // Collect original colors from all materials
    const materials = Array.isArray(block.mesh.material) ? block.mesh.material : [block.mesh.material];
    const colors = materials.map(mat => mat.color.getHex());

    this.originalState.set(block.id, {
      y: block.mesh.position.y,
      x: block.mesh.position.x,
      z: block.mesh.position.z,
      scaleX: block.mesh.scale.x,
      scaleY: block.mesh.scale.y,
      scaleZ: block.mesh.scale.z,
      rotY: block.mesh.rotation.y,
      colors,
      // Dynamic state for movement modes
      impulseY: 0,
      velX: 0,
      velZ: 0,
      pushX: 0,
      pushZ: 0,
      rotImpulse: 0,
    });
  }

  _restoreOriginalState() {
    const blocks = this.blockManager.getAllBlocks();
    for (const block of blocks) {
      const orig = this.originalState.get(block.id);
      if (orig) {
        block.mesh.position.set(orig.x, orig.y, orig.z);
        block.mesh.scale.set(orig.scaleX, orig.scaleY, orig.scaleZ);
        block.mesh.rotation.y = orig.rotY;
        // Restore original colors
        const materials = Array.isArray(block.mesh.material) ? block.mesh.material : [block.mesh.material];
        for (let i = 0; i < materials.length; i++) {
          if (orig.colors[i] !== undefined) {
            materials[i].color.setHex(orig.colors[i]);
          }
        }
      }
    }
    this.originalState.clear();
  }

  _updateBlocks(audioData, delta) {
    const blocks = this.blockManager.getAllBlocks();
    const bass = audioData.bands.bass;
    const energy = audioData.energy;
    const onset = audioData.onset;
    const beat = audioData.beat && !this.lastBeat; // rising edge handled above
    const amount = this.blockDistortion;

    for (const block of blocks) {
      let orig = this.originalState.get(block.id);
      if (!orig) {
        this._captureBlock(block);
        continue;
      }

      // Movement based on mode
      switch (this.movementMode) {
        case 'bounce':
          this._moveBounce(block, orig, bass, energy, amount);
          break;
        case 'jump':
          this._moveJump(block, orig, bass, energy, onset, amount, delta);
          break;
        case 'wave':
          this._moveWave(block, orig, bass, energy, amount);
          break;
        case 'scatter':
          this._moveScatter(block, orig, bass, energy, onset, amount, delta);
          break;
      }

      // Scale breathing (all modes) — bass pumps Y, energy pumps all
      const breathAll = 1 + energy * amount * 0.25;
      const breathY = 1 + bass * amount * 0.4;
      block.mesh.scale.set(
        orig.scaleX * breathAll,
        orig.scaleY * breathY,
        orig.scaleZ * breathAll
      );

      // Emissive pulse on onset (all modes)
      if (block.emissive && block.emissive.enabled) {
        const materials = Array.isArray(block.mesh.material) ? block.mesh.material : [block.mesh.material];
        for (const mat of materials) {
          mat.emissiveIntensity = block.emissive.intensity * (1 + onset * amount * 4);
        }
      }
    }
  }

  // --- Movement modes ---

  _moveBounce(block, orig, bass, energy, amount) {
    // Y bounce — strong sinusoidal driven by bass
    const phase = block.gridPosition.x * 0.7 + block.gridPosition.z * 0.5 + this.time * 3;
    const bounce = Math.sin(phase) * bass * amount * 1.5;
    block.mesh.position.y = orig.y + bounce;

    // XZ sway on energy
    const swayPhase = block.gridPosition.x * 0.5 - block.gridPosition.z * 0.3 + this.time * 2;
    block.mesh.position.x = orig.x + Math.sin(swayPhase) * energy * amount * 0.3;
    block.mesh.position.z = orig.z + Math.cos(swayPhase * 0.7) * energy * amount * 0.3;
  }

  _moveJump(block, orig, bass, energy, onset, amount, delta) {
    // Strong upward impulse on onset
    if (onset > 0.2) {
      const phaseDelay = (block.gridPosition.x * 0.3 + block.gridPosition.z * 0.2) % 1;
      if (Math.random() < onset * 0.6 + (1 - phaseDelay) * 0.3) {
        orig.impulseY = Math.max(orig.impulseY, onset * amount * 3.5);
      }
    }
    orig.impulseY *= 0.85;
    block.mesh.position.y = orig.y + orig.impulseY;

    // XZ jitter on bass
    block.mesh.position.x = orig.x + (Math.random() - 0.5) * bass * amount * 0.4;
    block.mesh.position.z = orig.z + (Math.random() - 0.5) * bass * amount * 0.4;

    // Strong rotation pulse on onset
    if (onset > 0.25) {
      orig.rotImpulse += onset * amount * 0.6;
    }
    orig.rotImpulse *= 0.88;
    block.mesh.rotation.y = orig.rotY + orig.rotImpulse;
  }

  _moveWave(block, orig, bass, energy, amount) {
    // Strong ripple outward from center on each beat
    const dx = block.gridPosition.x;
    const dz = block.gridPosition.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    const delay = dist * 0.1;
    const timeSinceBeat = this.time - this.beatTime;
    const wavePhase = (timeSinceBeat - delay) * 6;
    const decay = Math.max(0, 1 - timeSinceBeat * 0.5);
    const wave = Math.sin(wavePhase) * decay * bass * amount * 2.5;
    block.mesh.position.y = orig.y + (timeSinceBeat > delay ? wave : 0);

    // XZ push outward during wave
    if (timeSinceBeat > delay && decay > 0.1) {
      const pushDir = dist > 0.1 ? 1 / dist : 0;
      const push = Math.sin(wavePhase) * decay * amount * 0.4;
      block.mesh.position.x = orig.x + dx * pushDir * push;
      block.mesh.position.z = orig.z + dz * pushDir * push;
    }
  }

  _moveScatter(block, orig, bass, energy, onset, amount, delta) {
    const dx = block.gridPosition.x;
    const dz = block.gridPosition.z;
    const dist = Math.max(0.5, Math.sqrt(dx * dx + dz * dz));

    // Strong outward push on onset
    if (onset > 0.2) {
      const pushStrength = onset * amount * 1.5;
      orig.velX += (dx / dist) * pushStrength;
      orig.velZ += (dz / dist) * pushStrength;
    }

    // Spring back — softer spring for longer travel
    const spring = 5.0;
    const damping = 3.0;
    orig.velX += -orig.pushX * spring * delta;
    orig.velZ += -orig.pushZ * spring * delta;
    orig.velX *= Math.max(0, 1 - damping * delta);
    orig.velZ *= Math.max(0, 1 - damping * delta);

    orig.pushX += orig.velX * delta;
    orig.pushZ += orig.velZ * delta;

    block.mesh.position.x = orig.x + orig.pushX;
    block.mesh.position.z = orig.z + orig.pushZ;

    // Y slam on bass
    const slam = bass * amount * 1.2;
    block.mesh.position.y = orig.y + slam;

    // Rotation from velocity
    block.mesh.rotation.y = orig.rotY + orig.pushX * 0.3;
  }

  // --- Color variation ---

  _updateBlockColors(audioData, delta) {
    const blocks = this.blockManager.getAllBlocks();
    const mid = audioData.bands.mid;
    const energy = audioData.energy;
    const bass = audioData.bands.bass;
    const high = audioData.bands.high;
    const amount = this.colorReactivity;

    for (const block of blocks) {
      let orig = this.originalState.get(block.id);
      if (!orig) {
        // Capture any block not yet tracked (added after VJ started, or scene switch)
        this._captureBlock(block);
        orig = this.originalState.get(block.id);
        if (!orig) continue;
      }

      const materials = Array.isArray(block.mesh.material) ? block.mesh.material : [block.mesh.material];

      // Per-block phase offset for spatial color ripple
      const phase = (block.gridPosition.x * 0.4 + block.gridPosition.z * 0.3 + block.gridPosition.y * 0.2);

      for (let i = 0; i < materials.length; i++) {
        if (orig.colors[i] === undefined) continue;

        _color.setHex(orig.colors[i]);
        _color.getHSL(_hsl);

        // Hue shift: mid-frequency drives rotation + spatial offset
        _hsl.h = (_hsl.h + mid * amount * 0.3 + Math.sin(this.time * 0.5 + phase) * amount * 0.1) % 1;
        if (_hsl.h < 0) _hsl.h += 1;

        // Saturation boost on energy
        _hsl.s = Math.min(1, _hsl.s + energy * amount * 0.2);

        // Lightness pump on bass
        _hsl.l = Math.min(0.9, Math.max(0.1, _hsl.l + bass * amount * 0.15 - high * amount * 0.05));

        materials[i].color.setHSL(_hsl.h, _hsl.s, _hsl.l);
      }
    }
  }

  // --- Vertex-level GPU distortion ---

  _patchExistingMaterials() {
    const blocks = this.blockManager.getAllBlocks();
    for (const block of blocks) {
      this._patchBlockMaterial(block);
    }
  }

  _patchNewMaterials() {
    const blocks = this.blockManager.getAllBlocks();
    for (const block of blocks) {
      const materials = Array.isArray(block.mesh.material) ? block.mesh.material : [block.mesh.material];
      for (const mat of materials) {
        if (!this.patchedMaterials.has(mat)) {
          this._patchMaterial(mat);
        }
      }
    }
  }

  _patchBlockMaterial(block) {
    const materials = Array.isArray(block.mesh.material) ? block.mesh.material : [block.mesh.material];
    for (const mat of materials) {
      this._patchMaterial(mat);
    }
  }

  _patchMaterial(material) {
    if (this.patchedMaterials.has(material)) return;
    this.patchedMaterials.add(material);

    const uniforms = this.vertexUniforms;

    material.onBeforeCompile = (shader) => {
      // Add our uniforms
      shader.uniforms.uBass = uniforms.uBass;
      shader.uniforms.uEnergy = uniforms.uEnergy;
      shader.uniforms.uTime = uniforms.uTime;
      shader.uniforms.uDistortAmount = uniforms.uDistortAmount;

      // Inject uniform declarations
      shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        `#include <common>
        uniform float uBass;
        uniform float uEnergy;
        uniform float uTime;
        uniform float uDistortAmount;

        // Simplex-style hash noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }
        `
      );

      // Inject vertex displacement before project_vertex
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        if (uDistortAmount > 0.001) {
          // Radial breathing on bass
          float breath = sin(uTime * 2.0) * uBass * uDistortAmount * 0.5;
          transformed *= 1.0 + breath;

          // Noise displacement along normal
          float noise = snoise(transformed * 2.0 + uTime * 0.5);
          transformed += normal * noise * uBass * uDistortAmount * 0.6;

          // Energy-driven expansion
          transformed *= 1.0 + uEnergy * uDistortAmount * 0.15;
        }
        `
      );
    };

    // Force recompile
    material.needsUpdate = true;
  }

  dispose() {
    if (this.enabled) {
      this._restoreOriginalState();
    }
    this.enabled = false;
    this.patchedMaterials = new WeakSet();
  }
}
