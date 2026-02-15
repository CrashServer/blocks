import * as THREE from 'three';

/**
 * ParticleSpawner - Audio-driven visual-only block particles
 *
 * Pre-allocates a fixed pool of meshes. On beat/onset, activates meshes
 * at positions around the scene. They animate (scale up, float, fade)
 * then return to pool. Visual-only — not added to BlockManager.
 */

export class ParticleSpawner {
  constructor(scene) {
    this.scene = scene;
    this.enabled = false;
    this.poolSize = 64;

    // Pool arrays
    this.pool = [];
    this.active = [];

    // Shared geometry and material template
    this.geometry = new THREE.BoxGeometry(1, 1, 1);

    // Scene bounds (computed from blocks)
    this.sceneCenter = new THREE.Vector3(0, 2, 0);
    this.sceneRadius = 8;

    this._built = false;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (enabled && !this._built) {
      this._buildPool();
    }
    if (!enabled) {
      this._returnAll();
    }
  }

  setPoolSize(size) {
    if (size === this.poolSize && this._built) return;
    this._dispose();
    this.poolSize = size;
    if (this.enabled) {
      this._buildPool();
    }
  }

  updateSceneBounds(blockManager) {
    const blocks = blockManager.getAllBlocks();
    if (blocks.length === 0) return;

    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;

    for (const block of blocks) {
      const p = block.gridPosition;
      minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
      minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z);
    }

    this.sceneCenter.set(
      (minX + maxX) / 2,
      (minY + maxY) / 2 + 1,
      (minZ + maxZ) / 2
    );
    this.sceneRadius = Math.max(3, Math.sqrt(
      Math.pow(maxX - minX, 2) + Math.pow(maxZ - minZ, 2)
    ) / 2 + 2);
  }

  spawn(energy, color) {
    if (!this.enabled) {
      console.warn('[ParticleSpawner] spawn() called but spawner is disabled');
      return;
    }
    if (this.pool.length === 0) {
      console.warn('[ParticleSpawner] spawn() called but pool is empty (all particles active)');
      return;
    }

    const mesh = this.pool.pop();
    mesh.visible = true;

    // Random position around scene center
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * this.sceneRadius;
    mesh.position.set(
      this.sceneCenter.x + Math.cos(angle) * dist,
      this.sceneCenter.y + Math.random() * 3,
      this.sceneCenter.z + Math.sin(angle) * dist
    );

    console.log(`[ParticleSpawner] Spawned particle at (${mesh.position.x.toFixed(1)}, ${mesh.position.y.toFixed(1)}, ${mesh.position.z.toFixed(1)}), pool: ${this.pool.length}, active: ${this.active.length + 1}`);

    // Initial scale based on energy
    const baseScale = 0.3 + energy * 0.7;
    mesh.scale.set(0.01, 0.01, 0.01);

    // Set color
    mesh.material.color.setHex(color || this._randomColor());
    mesh.material.opacity = 0.9;

    // Store animation state on mesh
    mesh.userData.life = 0;
    mesh.userData.maxLife = 0.8 + Math.random() * 0.8; // 0.8-1.6s
    mesh.userData.targetScale = baseScale;
    mesh.userData.velocityY = 1.5 + energy * 2;
    mesh.userData.rotSpeed = (Math.random() - 0.5) * 4;

    this.active.push(mesh);
  }

  update(delta) {
    if (!this.enabled) return;

    for (let i = this.active.length - 1; i >= 0; i--) {
      const mesh = this.active[i];
      const ud = mesh.userData;
      ud.life += delta;

      const progress = ud.life / ud.maxLife;

      if (progress >= 1) {
        // Return to pool
        mesh.visible = false;
        this.pool.push(mesh);
        this.active.splice(i, 1);
        continue;
      }

      // Scale: quick grow then shrink
      const scaleCurve = progress < 0.2
        ? progress / 0.2 // grow
        : 1 - (progress - 0.2) / 0.8; // shrink
      const s = ud.targetScale * scaleCurve;
      mesh.scale.set(s, s, s);

      // Float upward
      mesh.position.y += ud.velocityY * delta * (1 - progress * 0.5);

      // Rotate
      mesh.rotation.y += ud.rotSpeed * delta;
      mesh.rotation.x += ud.rotSpeed * 0.5 * delta;

      // Fade out
      mesh.material.opacity = Math.max(0, 0.9 * (1 - progress));
    }
  }

  _buildPool() {
    this._dispose();
    for (let i = 0; i < this.poolSize; i++) {
      const material = new THREE.MeshStandardMaterial({
        roughness: 0.6,
        metalness: 0.2,
        transparent: true,
        opacity: 0.9
      });
      const mesh = new THREE.Mesh(this.geometry, material);
      mesh.visible = false;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.pool.push(mesh);
    }
    this._built = true;
    console.log(`ParticleSpawner: Built pool of ${this.poolSize} particles`);
  }

  _returnAll() {
    for (const mesh of this.active) {
      mesh.visible = false;
      this.pool.push(mesh);
    }
    this.active.length = 0;
  }

  _randomColor() {
    const hue = Math.random();
    const color = new THREE.Color();
    color.setHSL(hue, 0.8, 0.6);
    return color.getHex();
  }

  _dispose() {
    for (const mesh of [...this.pool, ...this.active]) {
      this.scene.remove(mesh);
      mesh.material.dispose();
    }
    this.pool.length = 0;
    this.active.length = 0;
    this._built = false;
  }

  dispose() {
    this._dispose();
    this.geometry.dispose();
  }
}
