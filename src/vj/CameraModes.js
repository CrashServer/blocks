import * as THREE from 'three';

/**
 * CameraModes - Dynamic camera behaviors driven by audio
 *
 * Modes: orbit, drift, lock, rail, chaos
 * Each mode has its own update logic plus shared effects:
 * zoom pulse, FOV breathing, shake
 */

export class CameraModes {
  constructor(engine, cameraBookmarks) {
    this.engine = engine;
    this.camera = engine.camera;
    this.controls = engine.controls;
    this.bookmarks = cameraBookmarks;

    this.mode = 'orbit';
    this.enabled = false;
    this.time = 0;

    // Shared reactive params (set externally by VJController)
    this.shake = 0;
    this.orbitSpeed = 1.0;
    this.zoomPulse = 0;
    this.fovTarget = 60;

    // Internal state
    this.baseDistance = 0;
    this.baseFov = 60;
    this.shakeOffset = new THREE.Vector3();

    // Drift mode
    this.driftTarget = new THREE.Vector3(10, 10, 10);
    this.driftLookAt = new THREE.Vector3(0, 0, 0);
    this.driftTimer = 0;
    this.driftDuration = 5;

    // Rail mode
    this.railProgress = 0;
    this.railSpeed = 0.1;

    // Chaos mode
    this.chaosTimer = 0;
    this.chaosInterval = 2; // seconds between jumps
  }

  setMode(mode) {
    this.mode = mode;

    // Capture base state on mode change
    this.baseDistance = this.camera.position.distanceTo(this.controls.target);
    this.baseFov = this.camera.fov;

    if (mode === 'orbit') {
      this.controls.autoRotate = true;
    } else {
      this.controls.autoRotate = false;
    }

    if (mode === 'drift') {
      this._pickDriftTarget();
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) {
      this.controls.autoRotate = false;
      // Restore camera FOV
      this.camera.fov = this.baseFov;
      this.camera.updateProjectionMatrix();
    }
  }

  update(audioData, delta) {
    if (!this.enabled) return;
    this.time += delta;

    // Apply shared effects first
    this._applyShake(delta);
    this._applyFOVBreathing(audioData, delta);
    this._applyZoomPulse(audioData, delta);

    // Mode-specific logic
    switch (this.mode) {
      case 'orbit': this._updateOrbit(audioData, delta); break;
      case 'drift': this._updateDrift(audioData, delta); break;
      case 'lock': break; // no camera movement, only shared effects
      case 'rail': this._updateRail(audioData, delta); break;
      case 'chaos': this._updateChaos(audioData, delta); break;
    }
  }

  // --- Shared effects ---

  _applyShake(delta) {
    if (this.shake < 0.001) return;

    // Random offset that decays
    this.shakeOffset.set(
      (Math.random() - 0.5) * this.shake,
      (Math.random() - 0.5) * this.shake,
      (Math.random() - 0.5) * this.shake
    );
    this.camera.position.add(this.shakeOffset);
  }

  _applyFOVBreathing(audioData, delta) {
    // Bass drives FOV between 50-70
    const targetFov = 55 + audioData.bands.bass * 20;
    this.camera.fov += (targetFov - this.camera.fov) * delta * 3;
    this.camera.updateProjectionMatrix();
  }

  _applyZoomPulse(audioData, delta) {
    if (!audioData.beat) return;

    // On beat, push camera slightly closer to target
    const dir = new THREE.Vector3()
      .subVectors(this.controls.target, this.camera.position)
      .normalize();
    this.camera.position.addScaledVector(dir, 0.3);
  }

  // --- Mode: Orbit ---

  _updateOrbit(audioData, delta) {
    this.controls.autoRotateSpeed = this.orbitSpeed * 2;
    this.controls.update();
  }

  // --- Mode: Drift ---

  _updateDrift(audioData, delta) {
    this.driftTimer += delta;

    if (this.driftTimer >= this.driftDuration) {
      this._pickDriftTarget();
      this.driftTimer = 0;
    }

    // Smooth interpolation toward drift target
    const t = delta * 0.8;
    this.camera.position.lerp(this.driftTarget, t);
    this.controls.target.lerp(this.driftLookAt, t);
    this.controls.update();
  }

  _pickDriftTarget() {
    const bookmarkArray = this.bookmarks ? Array.from(this.bookmarks.bookmarks.values()) : [];

    if (bookmarkArray.length > 1) {
      // Pick random bookmark
      const bm = bookmarkArray[Math.floor(Math.random() * bookmarkArray.length)];
      this.driftTarget.set(bm.position.x, bm.position.y, bm.position.z);
      this.driftLookAt.set(bm.target.x, bm.target.y, bm.target.z);
    } else {
      // Random position around origin
      const angle = Math.random() * Math.PI * 2;
      const dist = 8 + Math.random() * 12;
      const height = 3 + Math.random() * 10;
      this.driftTarget.set(
        Math.cos(angle) * dist,
        height,
        Math.sin(angle) * dist
      );
      this.driftLookAt.set(0, 2, 0);
    }

    this.driftDuration = 3 + Math.random() * 5;
  }

  // --- Mode: Rail ---

  _updateRail(audioData, delta) {
    const bookmarkArray = this.bookmarks ? Array.from(this.bookmarks.bookmarks.values()) : [];
    if (bookmarkArray.length < 2) return;

    // Advance along path, speed modulated by energy
    this.railProgress += delta * this.railSpeed * (0.5 + audioData.energy);

    if (this.railProgress >= bookmarkArray.length - 1) {
      this.railProgress = 0; // loop
    }

    const idx = Math.floor(this.railProgress);
    const t = this.railProgress - idx;
    const bm1 = bookmarkArray[idx];
    const bm2 = bookmarkArray[Math.min(idx + 1, bookmarkArray.length - 1)];

    // Smooth easing
    const et = t * t * (3 - 2 * t);

    this.camera.position.set(
      bm1.position.x + (bm2.position.x - bm1.position.x) * et,
      bm1.position.y + (bm2.position.y - bm1.position.y) * et,
      bm1.position.z + (bm2.position.z - bm1.position.z) * et
    );
    this.controls.target.set(
      bm1.target.x + (bm2.target.x - bm1.target.x) * et,
      bm1.target.y + (bm2.target.y - bm1.target.y) * et,
      bm1.target.z + (bm2.target.z - bm1.target.z) * et
    );
    this.controls.update();
  }

  // --- Mode: Chaos ---

  _updateChaos(audioData, delta) {
    this.chaosTimer += delta;

    // Jump on beat or on timer
    if (audioData.beat || this.chaosTimer >= this.chaosInterval) {
      this.chaosTimer = 0;

      const angle = Math.random() * Math.PI * 2;
      const dist = 5 + Math.random() * 15;
      const height = 2 + Math.random() * 12;

      this.camera.position.set(
        Math.cos(angle) * dist,
        height,
        Math.sin(angle) * dist
      );
      this.camera.lookAt(0, 2, 0);
      this.controls.target.set(0, 2, 0);
      this.controls.update();
    }
  }

  dispose() {
    this.setEnabled(false);
  }
}
