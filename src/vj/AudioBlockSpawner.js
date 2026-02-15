import * as THREE from 'three';

/**
 * AudioBlockSpawner - Spawns REAL blocks into BlockManager based on audio
 *
 * Unlike ParticleSpawner (visual-only) or AudioGenerative (instanced, temporary),
 * this creates actual persistent blocks in the scene that are added to BlockManager.
 *
 * Audio mapping:
 * - Bass → larger blocks, lower Y positions
 * - Mid → medium blocks, mid-range Y
 * - High → smaller blocks, higher Y positions
 * - Energy → spawn rate multiplier
 * - Beat → triggers spawn bursts
 */

export class AudioBlockSpawner {
  constructor(blockManager) {
    this.blockManager = blockManager;
    this.enabled = false;

    // Spawn parameters
    this.spawnRate = 3; // Max blocks per beat
    this.spawnRadius = 8; // Radius around center to spawn
    this.maxHeight = 12; // Max Y position
    this.spawnCenter = new THREE.Vector3(0, 0, 0);

    // Block type pools by frequency
    this.bassTypes = ['cube', 'slab', 'cylinder', 'prism', 'wedge'];
    this.midTypes = ['cube', 'sphere', 'capsule', 'torus', 'arch'];
    this.highTypes = ['crystal', 'sphere', 'pipe', 'cone', 'pyramid'];

    // Color palettes based on frequency
    this.bassColors = ['#8B0000', '#4B0082', '#2F4F4F', '#0D4D4D'];
    this.midColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];
    this.highColors = ['#FFD700', '#00CED1', '#FF69B4', '#7FFFD4'];

    // Timing
    this.lastBeat = false;
    this.spawnCooldown = 0; // Prevent too-frequent spawning
    this.minCooldown = 0.05; // Min 50ms between spawns
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }

  setSpawnRate(rate) {
    this.spawnRate = Math.max(1, Math.min(10, rate));
  }

  setSpawnRadius(radius) {
    this.spawnRadius = Math.max(5, Math.min(30, radius));
  }

  /**
   * Update scene center based on existing blocks
   */
  updateSpawnCenter() {
    const blocks = this.blockManager.getAllBlocks();
    if (blocks.length === 0) {
      this.spawnCenter.set(0, 0, 0);
      return;
    }

    let sumX = 0, sumZ = 0;
    for (const block of blocks) {
      sumX += block.gridPosition.x;
      sumZ += block.gridPosition.z;
    }

    this.spawnCenter.set(
      Math.round(sumX / blocks.length),
      0,
      Math.round(sumZ / blocks.length)
    );
  }

  update(audioData, delta) {
    if (!this.enabled) return;

    this.spawnCooldown -= delta;

    // Spawn on beat
    const beat = audioData.beat && !this.lastBeat;
    this.lastBeat = audioData.beat;

    if (beat && this.spawnCooldown <= 0) {
      this._spawnBurst(audioData);
      this.spawnCooldown = this.minCooldown;
    }
  }

  _spawnBurst(audioData) {
    const bass = audioData.bands.bass;
    const mid = audioData.bands.mid;
    const high = audioData.bands.high;
    const energy = audioData.energy;

    // Number of blocks to spawn based on energy
    const count = Math.ceil(this.spawnRate * energy);

    for (let i = 0; i < count; i++) {
      // Determine dominant frequency
      const dominant = Math.max(bass, mid, high);
      let blockType, color, scale, yOffset;

      if (dominant === bass && bass > 0.3) {
        // Bass: large, low blocks
        blockType = this.bassTypes[Math.floor(Math.random() * this.bassTypes.length)];
        color = this.bassColors[Math.floor(Math.random() * this.bassColors.length)];
        scale = 1 + bass * 2; // 1-3 scale
        yOffset = Math.floor(bass * 3); // 0-3 height
      } else if (dominant === mid && mid > 0.3) {
        // Mid: medium blocks
        blockType = this.midTypes[Math.floor(Math.random() * this.midTypes.length)];
        color = this.midColors[Math.floor(Math.random() * this.midColors.length)];
        scale = 1 + mid * 1; // 1-2 scale
        yOffset = 2 + Math.floor(mid * 4); // 2-6 height
      } else if (dominant === high && high > 0.3) {
        // High: small, high blocks
        blockType = this.highTypes[Math.floor(Math.random() * this.highTypes.length)];
        color = this.highColors[Math.floor(Math.random() * this.highColors.length)];
        scale = 0.5 + high * 0.5; // 0.5-1 scale
        yOffset = 4 + Math.floor(high * 8); // 4-12 height
      } else {
        // Fallback: random
        blockType = 'cube';
        color = '#808080';
        scale = 1;
        yOffset = Math.floor(Math.random() * 6);
      }

      // Random position around spawn center
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * this.spawnRadius;
      const x = Math.round(this.spawnCenter.x + Math.cos(angle) * dist);
      const z = Math.round(this.spawnCenter.z + Math.sin(angle) * dist);
      const y = Math.max(0, yOffset);

      // Check if position is free
      if (this.blockManager.getBlockAtPosition({ x, y, z })) {
        continue; // Skip if occupied
      }

      // Add block to scene
      try {
        this.blockManager.addBlock({
          type: blockType,
          position: { x, y, z },
          color: color,
          scale: scale
        });
      } catch (err) {
        console.warn(`[AudioBlockSpawner] Failed to spawn block at (${x},${y},${z}):`, err.message);
      }
    }
  }

  /**
   * Clear all spawned blocks (optional - for cleanup)
   */
  clear() {
    // This would require tracking which blocks were spawned
    // For now, users can manually delete if needed
  }

  dispose() {
    this.enabled = false;
  }
}
