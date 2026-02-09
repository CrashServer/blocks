import * as THREE from 'three';

/**
 * AudioGenerative - Builds structures in real-time driven by audio
 *
 * Uses THREE.InstancedMesh for single-draw-call rendering.
 * Growth cursors advance on beat, branching based on frequency bands.
 *
 * Bass → vertical growth (stack up)
 * Mid → horizontal branching
 * High → detail blocks (smaller scale)
 * Energy → growth speed (blocks per beat)
 * Onset → triggers new growth branches
 */

const MAX_INSTANCES = 512;

// Reusable objects
const _matrix = new THREE.Matrix4();
const _position = new THREE.Vector3();
const _scale = new THREE.Vector3();
const _quaternion = new THREE.Quaternion();
const _color = new THREE.Color();

export class AudioGenerative {
  constructor(scene) {
    this.scene = scene;
    this.enabled = false;

    // Instance tracking
    this.count = 0;        // Current number of active instances
    this.maxInstances = MAX_INSTANCES;
    this.headIndex = 0;    // Ring buffer write position

    // Per-instance metadata
    this.instanceData = new Array(MAX_INSTANCES);
    for (let i = 0; i < MAX_INSTANCES; i++) {
      this.instanceData[i] = { birthTime: 0, ttl: 0, alive: false, baseY: 0 };
    }

    // Growth cursors — active positions where blocks can grow
    this.cursors = [];
    this.maxCursors = 8;

    // Growth parameters
    this.growthRate = 3;      // max blocks per beat
    this.branchProb = 0.25;   // chance of horizontal branch on mid
    this.ttl = 20;            // seconds before block recycles
    this.blockScale = 1.0;
    this.verticalBias = 0.7;  // preference for upward growth vs sideways

    // Timing
    this.time = 0;
    this.lastBeat = false;

    // Mesh
    this.mesh = null;
    this._built = false;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (enabled && !this._built) {
      this._build();
    }
    if (enabled) {
      this._resetCursors();
    }
    if (this.mesh) {
      this.mesh.visible = enabled;
    }
  }

  setMaxInstances(n) {
    if (n === this.maxInstances && this._built) return;
    this.maxInstances = Math.min(n, MAX_INSTANCES);
  }

  setTTL(seconds) {
    this.ttl = seconds;
  }

  setGrowthRate(rate) {
    this.growthRate = rate;
  }

  /**
   * Center cursors around the existing scene or origin
   */
  initFromScene(blockManager) {
    const blocks = blockManager.getAllBlocks();
    if (blocks.length === 0) {
      this._resetCursors();
      return;
    }

    // Find top-most blocks as starting cursors
    const topBlocks = [];
    const posMap = new Map();
    for (const block of blocks) {
      const key = `${block.gridPosition.x},${block.gridPosition.z}`;
      const existing = posMap.get(key);
      if (!existing || block.gridPosition.y > existing.gridPosition.y) {
        posMap.set(key, block);
      }
    }

    // Take up to maxCursors top positions
    const tops = Array.from(posMap.values())
      .sort((a, b) => b.gridPosition.y - a.gridPosition.y)
      .slice(0, this.maxCursors);

    this.cursors = tops.map(b => ({
      x: b.gridPosition.x,
      y: b.gridPosition.y + 1,
      z: b.gridPosition.z,
      direction: 'up',
      energy: 1
    }));

    // Fill remaining with origin-based cursors if needed
    while (this.cursors.length < 3) {
      this.cursors.push({
        x: Math.floor(Math.random() * 6 - 3),
        y: 0,
        z: Math.floor(Math.random() * 6 - 3),
        direction: 'up',
        energy: 1
      });
    }
  }

  update(audioData, delta) {
    if (!this.enabled || !this.mesh) return;
    this.time += delta;

    const beat = audioData.beat && !this.lastBeat;
    this.lastBeat = audioData.beat;

    // Grow on beat
    if (beat) {
      this._grow(audioData);
    }

    // Animate existing instances
    this._animate(audioData, delta);

    // Expire old instances
    this._expire();

    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.instanceColor.needsUpdate = true;
  }

  _grow(audioData) {
    const bass = audioData.bands.bass;
    const mid = audioData.bands.mid;
    const high = audioData.bands.high;
    const energy = audioData.energy;
    const onset = audioData.onset;

    // How many blocks to place this beat
    const numBlocks = Math.min(
      Math.ceil(energy * this.growthRate),
      this.growthRate
    );

    for (let i = 0; i < numBlocks; i++) {
      if (this.cursors.length === 0) break;

      // Pick a random active cursor
      const ci = Math.floor(Math.random() * this.cursors.length);
      const cursor = this.cursors[ci];

      // Place a block at cursor position
      this._placeInstance(cursor.x, cursor.y, cursor.z, audioData);

      // Advance cursor
      this._advanceCursor(cursor, bass, mid, high, onset);

      // Branch on mid-frequency or onset
      if (mid > 0.3 && Math.random() < this.branchProb * mid) {
        this._branchCursor(cursor, mid);
      }

      // Onset can spawn a new cursor entirely
      if (onset > 0.5 && this.cursors.length < this.maxCursors && Math.random() < 0.4) {
        this.cursors.push({
          x: cursor.x + Math.floor(Math.random() * 5 - 2),
          y: 0,
          z: cursor.z + Math.floor(Math.random() * 5 - 2),
          direction: 'up',
          energy: onset
        });
      }
    }

    // Prune dead cursors (gone too high or too far)
    this.cursors = this.cursors.filter(c =>
      c.y < 30 && Math.abs(c.x) < 20 && Math.abs(c.z) < 20
    );

    // Ensure at least one cursor
    if (this.cursors.length === 0) {
      this._resetCursors();
    }
  }

  _advanceCursor(cursor, bass, mid, high, onset) {
    // Bass drives vertical growth
    if (Math.random() < this.verticalBias * (0.5 + bass * 0.5)) {
      cursor.y += 1;
    } else {
      // Horizontal step
      const dir = Math.floor(Math.random() * 4);
      switch (dir) {
        case 0: cursor.x += 1; break;
        case 1: cursor.x -= 1; break;
        case 2: cursor.z += 1; break;
        case 3: cursor.z -= 1; break;
      }
    }
  }

  _branchCursor(cursor, mid) {
    if (this.cursors.length >= this.maxCursors) return;

    // New cursor branches sideways from current
    const dir = Math.floor(Math.random() * 4);
    const branch = {
      x: cursor.x,
      y: cursor.y,
      z: cursor.z,
      direction: 'side',
      energy: mid
    };

    switch (dir) {
      case 0: branch.x += 1; break;
      case 1: branch.x -= 1; break;
      case 2: branch.z += 1; break;
      case 3: branch.z -= 1; break;
    }

    this.cursors.push(branch);
  }

  _placeInstance(x, y, z, audioData) {
    const idx = this.headIndex;
    this.headIndex = (this.headIndex + 1) % this.maxInstances;
    if (this.count < this.maxInstances) this.count++;

    // Scale: high frequency → smaller detail blocks
    const high = audioData.bands.high;
    const scale = this.blockScale * (0.6 + (1 - high) * 0.6);

    _position.set(x, y, z);
    _scale.set(scale, scale, scale);
    _quaternion.identity();
    _matrix.compose(_position, _quaternion, _scale);
    this.mesh.setMatrixAt(idx, _matrix);

    // Color from frequency bands — hue cycles with bass, saturation from energy
    const hue = (audioData.bands.bass * 0.3 + audioData.bands.mid * 0.4 + this.time * 0.02) % 1;
    const sat = 0.5 + audioData.energy * 0.4;
    const lit = 0.35 + audioData.bands.bass * 0.25;
    _color.setHSL(hue, sat, lit);
    this.mesh.setColorAt(idx, _color);

    // Metadata
    this.instanceData[idx].birthTime = this.time;
    this.instanceData[idx].ttl = this.ttl;
    this.instanceData[idx].alive = true;
    this.instanceData[idx].baseY = y;

    this.mesh.count = this.count;
  }

  _animate(audioData, delta) {
    const bass = audioData.bands.bass;
    const energy = audioData.energy;

    for (let i = 0; i < this.maxInstances; i++) {
      const d = this.instanceData[i];
      if (!d.alive) continue;

      const age = this.time - d.birthTime;
      const lifeRatio = Math.min(1, age / d.ttl);

      this.mesh.getMatrixAt(i, _matrix);
      _matrix.decompose(_position, _quaternion, _scale);

      // Gentle float upward as they age
      _position.y = d.baseY + age * 0.15;

      // Breathing pulse on bass
      const breathe = 1 + Math.sin(this.time * 3 + i * 0.5) * bass * 0.3;

      // Fade scale near end of life
      const fadeFactor = lifeRatio > 0.7 ? (1 - lifeRatio) / 0.3 : 1;
      // Pop-in at birth
      const popIn = Math.min(1, age * 4);
      const s = this.blockScale * breathe * fadeFactor * popIn;
      _scale.set(s, s, s);

      _matrix.compose(_position, _quaternion, _scale);
      this.mesh.setMatrixAt(i, _matrix);

      // Shift color over lifetime
      this.mesh.getColorAt(i, _color);
      const hsl = {};
      _color.getHSL(hsl);
      hsl.h = (hsl.h + delta * 0.05) % 1;
      hsl.l = Math.max(0.1, hsl.l * (0.99 + energy * 0.01));
      _color.setHSL(hsl.h, hsl.s, hsl.l);
      this.mesh.setColorAt(i, _color);
    }
  }

  _expire() {
    for (let i = 0; i < this.maxInstances; i++) {
      const d = this.instanceData[i];
      if (!d.alive) continue;

      if (this.time - d.birthTime > d.ttl) {
        d.alive = false;
        // Scale to zero
        _scale.set(0, 0, 0);
        _position.set(0, -100, 0); // move off-screen
        _quaternion.identity();
        _matrix.compose(_position, _quaternion, _scale);
        this.mesh.setMatrixAt(i, _matrix);
      }
    }
  }

  _resetCursors() {
    this.cursors = [];
    for (let i = 0; i < 3; i++) {
      this.cursors.push({
        x: Math.floor(Math.random() * 4 - 2),
        y: 0,
        z: Math.floor(Math.random() * 4 - 2),
        direction: 'up',
        energy: 1
      });
    }
  }

  _build() {
    if (this._built) return;

    const geometry = new THREE.BoxGeometry(0.95, 0.95, 0.95);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.5,
      metalness: 0.3,
    });

    this.mesh = new THREE.InstancedMesh(geometry, material, MAX_INSTANCES);
    this.mesh.count = 0;
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(MAX_INSTANCES * 3), 3
    );
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;

    // Initialize all matrices to zero scale off-screen
    for (let i = 0; i < MAX_INSTANCES; i++) {
      _position.set(0, -100, 0);
      _scale.set(0, 0, 0);
      _quaternion.identity();
      _matrix.compose(_position, _quaternion, _scale);
      this.mesh.setMatrixAt(i, _matrix);
      _color.set(0, 0, 0);
      this.mesh.setColorAt(i, _color);
    }

    this.scene.add(this.mesh);
    this._built = true;
  }

  clear() {
    this.count = 0;
    this.headIndex = 0;
    for (let i = 0; i < MAX_INSTANCES; i++) {
      this.instanceData[i].alive = false;
      _position.set(0, -100, 0);
      _scale.set(0, 0, 0);
      _quaternion.identity();
      _matrix.compose(_position, _quaternion, _scale);
      if (this.mesh) this.mesh.setMatrixAt(i, _matrix);
    }
    if (this.mesh) {
      this.mesh.count = 0;
      this.mesh.instanceMatrix.needsUpdate = true;
    }
    this._resetCursors();
  }

  dispose() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
      this.mesh = null;
    }
    this._built = false;
  }
}
