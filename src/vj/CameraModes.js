import * as THREE from 'three';

/**
 * CameraModes - Dynamic camera behaviors driven by audio
 *
 * Modes: orbit, drift, lock, rail, chaos, fly, still, follow
 * - still: Calm slow orbit, no audio reactivity
 * - follow: Smoothly tracks generative paint spawn positions
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

    // Beat-reactive rotation
    this.beatRotationH = 0; // Horizontal rotation (around Y axis)
    this.beatRotationV = 0; // Vertical rotation (pitch)
    this.beatRotationTargetH = 0;
    this.beatRotationTargetV = 0;

    // Orbit mode - direction changes
    this.orbitDirection = 1; // 1 or -1
    this.orbitChangeTimer = 0;
    this.orbitChangeDuration = 3; // seconds between direction changes

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

    // Fly mode - traveling through 3D space
    this.flyVelocity = new THREE.Vector3();
    this.flyDirection = new THREE.Vector3(1, 0, 0.5).normalize();
    this.flySpeed = 5;
    this.flyTurnTimer = 0;
    this.flyTurnDuration = 3;

    // Still mode - calm, slow orbit
    this.stillOrbitSpeed = 0.1; // Very slow rotation speed

    // Follow mode - tracks generative paint spawn positions
    this.followTarget = new THREE.Vector3(0, 5, 0);
    this.followDistance = 20; // Distance from spawn point
    this.followHeight = 10; // Height above spawn point
    this.followOrbitAngle = 0; // Current orbit angle
    this.followOrbitSpeed = 0.3; // Slow orbit speed
    this.lastSpawnPosition = null; // Will be set by VJController
  }

  setMode(mode) {
    this.mode = mode;

    // Capture base state on mode change
    this.baseDistance = this.camera.position.distanceTo(this.controls.target);
    this.baseFov = this.camera.fov;

    // Allow full 360° rotation for all camera modes
    this.controls.maxPolarAngle = Math.PI;
    this.controls.minPolarAngle = 0;

    if (mode === 'orbit') {
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 2.0; // Normal speed
    } else if (mode === 'still') {
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = this.stillOrbitSpeed; // Very slow
    } else {
      this.controls.autoRotate = false;
    }

    if (mode === 'drift') {
      this._pickDriftTarget();
    }

    if (mode === 'follow') {
      this.followOrbitAngle = 0;
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

    // Still mode: skip ALL audio reactivity (pure calm orbit)
    if (this.mode === 'still') {
      this.controls.update();
      return;
    }

    // Apply beat-reactive rotation FIRST (on every beat) - EXCEPT for still and follow
    if (this.mode !== 'follow') {
      this._applyBeatRotation(audioData, delta);
    }

    // Apply shared effects (skip for follow mode - it has its own smooth movement)
    if (this.mode !== 'follow') {
      this._applyShake(delta);
      this._applyFOVBreathing(audioData, delta);
      this._applyZoomPulse(audioData, delta);
    }

    // Mode-specific logic
    switch (this.mode) {
      case 'orbit': this._updateOrbit(audioData, delta); break;
      case 'drift': this._updateDrift(audioData, delta); break;
      case 'lock': break; // no camera movement, only shared effects
      case 'rail': this._updateRail(audioData, delta); break;
      case 'chaos': this._updateChaos(audioData, delta); break;
      case 'fly': this._updateFly(audioData, delta); break;
      case 'still': break; // handled above (pure autoRotate)
      case 'follow': this._updateFollow(audioData, delta); break;
    }
  }

  // --- Shared effects ---

  _applyBeatRotation(audioData, delta) {
    // On beat: add 40-90° rotation impulse in BOTH axes for JUMPY VJ movement
    if (audioData.beat) {
      const energy = audioData.energy;
      const rotationDegrees = 40 + Math.random() * 50 + energy * 40; // 40-130° based on energy
      const directionH = Math.random() > 0.5 ? 1 : -1; // Horizontal direction
      const directionV = Math.random() > 0.5 ? 1 : -1; // Vertical direction

      // MORE vertical movement (was 0.5, now 0.8 for more dynamic angles)
      this.beatRotationTargetH = rotationDegrees * directionH;
      this.beatRotationTargetV = (rotationDegrees * 0.8) * directionV;
    }

    // FASTER transitions for snappier feel (was 8, now 12)
    this.beatRotationH += (this.beatRotationTargetH - this.beatRotationH) * delta * 12;
    this.beatRotationV += (this.beatRotationTargetV - this.beatRotationV) * delta * 12;
    this.beatRotationTargetH *= Math.pow(0.03, delta); // Faster decay (was 0.05)
    this.beatRotationTargetV *= Math.pow(0.03, delta);

    // Apply 3D orbital rotation around target
    if (Math.abs(this.beatRotationH) > 0.1 || Math.abs(this.beatRotationV) > 0.1) {
      const target = this.controls.target;
      const offset = new THREE.Vector3().subVectors(this.camera.position, target);
      const radius = offset.length();

      // Convert to spherical coordinates
      const phi = Math.atan2(offset.z, offset.x); // Horizontal angle
      const theta = Math.acos(Math.max(-1, Math.min(1, offset.y / radius))); // Vertical angle

      // Apply beat rotations (in radians)
      const newPhi = phi + (this.beatRotationH * Math.PI / 180) * delta * 2;
      const newTheta = Math.max(0.1, Math.min(Math.PI - 0.1,
        theta + (this.beatRotationV * Math.PI / 180) * delta * 2
      )); // Clamp to avoid gimbal lock

      // Convert back to Cartesian
      this.camera.position.x = target.x + radius * Math.sin(newTheta) * Math.cos(newPhi);
      this.camera.position.y = target.y + radius * Math.cos(newTheta);
      this.camera.position.z = target.z + radius * Math.sin(newTheta) * Math.sin(newPhi);

      this.camera.lookAt(target);
    }
  }

  _applyShake(delta) {
    if (this.shake < 0.001) return;

    // More intense shake (3x stronger)
    this.shakeOffset.set(
      (Math.random() - 0.5) * this.shake * 3,
      (Math.random() - 0.5) * this.shake * 3,
      (Math.random() - 0.5) * this.shake * 3
    );
    this.camera.position.add(this.shakeOffset);
  }

  _applyFOVBreathing(audioData, delta) {
    // EXTREME dynamic FOV: 30-110 range based on bass + energy
    // Bass provides base range, energy adds spikes
    const bassRange = audioData.bands.bass * 50; // 0-50
    const energySpike = audioData.energy * audioData.energy * 30; // 0-30 (squared for more impact)
    const targetFov = 30 + bassRange + energySpike; // 30-110 range

    // Very fast transitions for reactive feel
    const speed = 8 + audioData.energy * 12; // 8-20 speed based on energy
    this.camera.fov += (targetFov - this.camera.fov) * delta * speed;
    this.camera.updateProjectionMatrix();
  }

  _applyZoomPulse(audioData, delta) {
    if (!audioData.beat) return;

    // On beat, bigger zoom pulse (3x stronger)
    const dir = new THREE.Vector3()
      .subVectors(this.controls.target, this.camera.position)
      .normalize();
    const pulseStrength = 0.8 + audioData.energy * 1.2; // 0.8-2.0
    this.camera.position.addScaledVector(dir, pulseStrength);
  }

  // --- Mode: Orbit ---

  _updateOrbit(audioData, delta) {
    this.orbitChangeTimer += delta;

    // Change direction on strong beats OR every 2-4 seconds
    const changeDuration = 2 + Math.random() * 2; // 2-4s
    if ((audioData.beat && audioData.energy > 0.6) || this.orbitChangeTimer >= changeDuration) {
      this.orbitDirection *= -1; // Reverse direction
      this.orbitChangeTimer = 0;
    }

    // MUCH faster rotation: 5-12x base speed depending on energy
    const energyMultiplier = 5 + audioData.energy * 7;
    this.controls.autoRotateSpeed = this.orbitSpeed * energyMultiplier * this.orbitDirection;
    this.controls.update();
  }

  // --- Mode: Drift ---

  _updateDrift(audioData, delta) {
    this.driftTimer += delta;

    // Change target only when timer expires (smooth, chill mode - no beat triggers)
    if (this.driftTimer >= this.driftDuration) {
      this._pickDriftTarget();
      this.driftTimer = 0;
    }

    // SMOOTH, slow interpolation for chill drift (no jitter)
    const baseSpeed = 0.3; // Very slow, smooth movement
    const t = delta * baseSpeed;
    this.camera.position.lerp(this.driftTarget, Math.min(t, 1));
    this.controls.target.lerp(this.driftLookAt, Math.min(t, 1));
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
      // Moderate random distances for chill drift
      const angle = Math.random() * Math.PI * 2;
      const dist = 15 + Math.random() * 20; // 15-35 (less extreme)
      const height = 8 + Math.random() * 12; // 8-20 (more moderate)
      this.driftTarget.set(
        Math.cos(angle) * dist,
        height,
        Math.sin(angle) * dist
      );
      this.driftLookAt.set(0, 2, 0);
    }

    // Long duration for smooth, chill movement
    this.driftDuration = 8 + Math.random() * 8; // 8-16s for slow, relaxed changes
  }

  // --- Mode: Rail ---

  _updateRail(audioData, delta) {
    const bookmarkArray = this.bookmarks ? Array.from(this.bookmarks.bookmarks.values()) : [];
    if (bookmarkArray.length < 2) return;

    // On strong beats, JUMP to next bookmark for VJ feel
    if (audioData.beat && audioData.energy > 0.6) {
      this.railProgress = Math.floor(this.railProgress) + 1;
    }

    // Advance along path FASTER, speed modulated by energy
    this.railProgress += delta * this.railSpeed * (1.5 + audioData.energy * 2); // Much faster (was 0.5 + energy)

    if (this.railProgress >= bookmarkArray.length - 1) {
      this.railProgress = 0; // loop
    }

    const idx = Math.floor(this.railProgress);
    const t = this.railProgress - idx;
    const bm1 = bookmarkArray[idx];
    const bm2 = bookmarkArray[Math.min(idx + 1, bookmarkArray.length - 1)];

    // More aggressive easing for snappier transitions
    const et = t * t * t * (t * (t * 6 - 15) + 10); // Smoothstep5 for sharper acceleration

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

    // EXTREME chaos: jump on EVERY beat or very frequently (0.3-0.8s)
    const chaosInterval = 0.3 + Math.random() * 0.5; // 0.3-0.8s for CONSTANT movement
    if (audioData.beat || this.chaosTimer >= chaosInterval) {
      this.chaosTimer = 0;

      // EXTREME random positions: 10-80 units for maximum chaos
      const angle = Math.random() * Math.PI * 2;
      const dist = 10 + Math.random() * 70; // 10-80 units
      const height = -10 + Math.random() * 50; // -10 to 40 (can go below scene!)

      // OFTEN look at random offsets for disorienting angles (60% of time)
      const lookAtOffset = Math.random() > 0.4 ? {
        x: (Math.random() - 0.5) * 20,
        y: Math.random() * 15 - 5, // -5 to 10
        z: (Math.random() - 0.5) * 20
      } : { x: 0, y: 2, z: 0 };

      this.camera.position.set(
        Math.cos(angle) * dist,
        height,
        Math.sin(angle) * dist
      );
      this.camera.lookAt(lookAtOffset.x, lookAtOffset.y, lookAtOffset.z);
      this.controls.target.set(lookAtOffset.x, lookAtOffset.y, lookAtOffset.z);
      this.controls.update();
    }
  }

  // --- Mode: Fly (Traveling) ---

  _updateFly(audioData, delta) {
    this.flyTurnTimer += delta;

    // Change direction FREQUENTLY on beats or short timer (MUCH more dynamic)
    if (this.flyTurnTimer >= this.flyTurnDuration || (audioData.beat && audioData.energy > 0.5)) {
      this.flyTurnTimer = 0;

      // Pick new random direction in 3D space with MORE vertical variation
      const theta = Math.random() * Math.PI * 2; // Horizontal angle
      const phi = (Math.random() - 0.5) * Math.PI * 0.9; // Vertical angle (-81° to +81° for dramatic swoops)

      this.flyDirection.set(
        Math.cos(phi) * Math.cos(theta),
        Math.sin(phi),
        Math.cos(phi) * Math.sin(theta)
      ).normalize();

      // SHORTER turn duration for more erratic flight
      this.flyTurnDuration = 1 + Math.random() * 2; // 1-3 seconds (was 2-6)
    }

    // MUCH faster speed, more energy-reactive
    const speed = this.flySpeed * (1.5 + audioData.energy * 2.5); // 1.5x to 4x base speed

    // Move camera in fly direction
    this.flyVelocity.copy(this.flyDirection).multiplyScalar(speed * delta);
    this.camera.position.add(this.flyVelocity);

    // Look ahead in the direction of travel
    const lookAhead = new THREE.Vector3()
      .copy(this.camera.position)
      .add(this.flyDirection.clone().multiplyScalar(10));

    this.camera.lookAt(lookAhead);
    this.controls.target.copy(lookAhead);
    this.controls.update();

    // Keep camera from going too far from origin (wrap around)
    const distFromOrigin = this.camera.position.length();
    if (distFromOrigin > 100) {
      // Reverse direction to fly back toward origin
      this.flyDirection.negate();
      this.flyTurnTimer = 0;
    }
  }

  // --- Mode: Follow (Tracks Generative Paint Spawns) ---

  _updateFollow(audioData, delta) {
    // Update target position if we have a recent spawn
    if (this.lastSpawnPosition) {
      // Smoothly interpolate followTarget toward lastSpawnPosition
      this.followTarget.lerp(
        new THREE.Vector3(
          this.lastSpawnPosition.x,
          this.lastSpawnPosition.y,
          this.lastSpawnPosition.z
        ),
        delta * 0.5 // Smooth following
      );
    }

    // Orbit around the target
    this.followOrbitAngle += this.followOrbitSpeed * delta;

    // Calculate camera position in orbit
    const x = this.followTarget.x + Math.cos(this.followOrbitAngle) * this.followDistance;
    const z = this.followTarget.z + Math.sin(this.followOrbitAngle) * this.followDistance;
    const y = this.followTarget.y + this.followHeight;

    // Smoothly move camera to orbit position
    this.camera.position.lerp(
      new THREE.Vector3(x, y, z),
      delta * 2.0 // Smooth camera movement
    );

    // Look at the spawn target (slightly above for better view)
    const lookAtPos = new THREE.Vector3(
      this.followTarget.x,
      this.followTarget.y + 2,
      this.followTarget.z
    );
    this.controls.target.lerp(lookAtPos, delta * 2.0);

    this.camera.lookAt(this.controls.target);
    this.controls.update();
  }

  /**
   * Called by VJController when a new spawn occurs
   */
  setFollowTarget(position) {
    this.lastSpawnPosition = { x: position.x, y: position.y, z: position.z };
  }

  dispose() {
    this.setEnabled(false);
  }
}
