import * as THREE from 'three';

/**
 * EphemeralBlockManager - Manages temporary blocks with lifetime/decay
 *
 * Creates "living" blocks that:
 * - Spawn based on audio/user input
 * - Have a time-to-live (TTL)
 * - Decay visually before disappearing
 * - Auto-cleanup to keep scene performant
 *
 * Perfect for generative paint / performance mode
 */

export class EphemeralBlockManager {
  constructor(blockManager) {
    this.blockManager = blockManager;
    this.blocks = new Map(); // id -> {block, birthTime, ttl, decayMode}
    this.enabled = false;

    // Configuration
    this.baseTTL = 30; // Base lifetime in seconds
    this.maxEphemeralBlocks = 1000;
    this.decayDuration = 0.3; // Last 30% of life is decay

    // Decay modes
    this.decayMode = 'fadeAndShrink'; // fadeAndShrink, floatUp, dissolve
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) {
      this.clear();
    }
  }

  setBaseTTL(seconds) {
    this.baseTTL = Math.max(5, Math.min(120, seconds));
  }

  setDecayMode(mode) {
    this.decayMode = mode;
  }

  /**
   * Spawn an ephemeral block
   * @param {Object} blockDef - Block definition {type, position, color, rotation, scale}
   * @param {number} energyMultiplier - Audio energy to modify TTL (0-1)
   */
  spawn(blockDef, energyMultiplier = 1) {
    if (!this.enabled) return null;

    // Check limits
    if (this.blocks.size >= this.maxEphemeralBlocks) {
      // Remove oldest block to make room
      this._removeOldest();
    }

    // Add block to BlockManager
    const block = this.blockManager.addBlock(blockDef);
    if (!block) return null;

    // Store ephemeral metadata
    const ttl = this.baseTTL * (0.5 + energyMultiplier * 1.5); // 0.5x to 2x base TTL
    this.blocks.set(block.id, {
      block,
      birthTime: performance.now() / 1000,
      ttl,
      decayMode: this.decayMode,
      originalScale: block.scale,
      originalOpacity: block.mesh.material.opacity || 1
    });

    return block;
  }

  /**
   * Update all ephemeral blocks - handle decay and removal
   */
  update(currentTime) {
    if (!this.enabled) return;

    const toRemove = [];

    for (const [id, data] of this.blocks) {
      const age = currentTime - data.birthTime;
      const progress = age / data.ttl;

      if (progress >= 1) {
        // Block expired
        toRemove.push(id);
      } else if (progress > (1 - this.decayDuration)) {
        // In decay phase
        const decayProgress = (progress - (1 - this.decayDuration)) / this.decayDuration;
        this._applyDecay(data, decayProgress);
      }
    }

    // Batch remove expired blocks
    for (const id of toRemove) {
      const data = this.blocks.get(id);
      this.blockManager.removeBlock(data.block.id);
      this.blocks.delete(id);
    }
  }

  /**
   * Apply visual decay effects based on decay mode
   */
  _applyDecay(data, progress) {
    const { block, decayMode, originalScale, originalOpacity } = data;

    switch (decayMode) {
      case 'fadeAndShrink': {
        // Fade opacity + shrink scale
        const opacity = originalOpacity * (1 - progress);
        const scale = originalScale * (1 - progress * 0.5); // Shrink to 50%

        if (Array.isArray(block.mesh.material)) {
          block.mesh.material.forEach(m => {
            m.opacity = opacity;
            m.transparent = true;
            m.needsUpdate = true;
          });
        } else {
          block.mesh.material.opacity = opacity;
          block.mesh.material.transparent = true;
          block.mesh.material.needsUpdate = true;
        }

        block.mesh.scale.setScalar(scale);
        break;
      }

      case 'floatUp': {
        // Float upward + fade
        const floatHeight = progress * 3; // Float up 3 blocks
        const opacity = originalOpacity * (1 - progress);

        block.mesh.position.y = block.gridPosition.y + floatHeight;

        if (Array.isArray(block.mesh.material)) {
          block.mesh.material.forEach(m => {
            m.opacity = opacity;
            m.transparent = true;
            m.needsUpdate = true;
          });
        } else {
          block.mesh.material.opacity = opacity;
          block.mesh.material.transparent = true;
          block.mesh.material.needsUpdate = true;
        }
        break;
      }

      case 'dissolve': {
        // Pixelate/glitch effect via scale distortion + fade
        const opacity = originalOpacity * (1 - progress);
        const glitchFactor = progress * 0.5;

        const sx = originalScale * (1 + (Math.random() - 0.5) * glitchFactor);
        const sy = originalScale * (1 + (Math.random() - 0.5) * glitchFactor);
        const sz = originalScale * (1 + (Math.random() - 0.5) * glitchFactor);
        block.mesh.scale.set(sx, sy, sz);

        if (Array.isArray(block.mesh.material)) {
          block.mesh.material.forEach(m => {
            m.opacity = opacity;
            m.transparent = true;
            m.needsUpdate = true;
          });
        } else {
          block.mesh.material.opacity = opacity;
          block.mesh.material.transparent = true;
          block.mesh.material.needsUpdate = true;
        }
        break;
      }

      case 'shrink': {
        // Only shrink
        const scale = originalScale * (1 - progress);
        block.mesh.scale.setScalar(scale);
        break;
      }

      case 'fade': {
        // Only fade
        const opacity = originalOpacity * (1 - progress);
        if (Array.isArray(block.mesh.material)) {
          block.mesh.material.forEach(m => {
            m.opacity = opacity;
            m.transparent = true;
            m.needsUpdate = true;
          });
        } else {
          block.mesh.material.opacity = opacity;
          block.mesh.material.transparent = true;
          block.mesh.material.needsUpdate = true;
        }
        break;
      }
    }
  }

  /**
   * Remove oldest ephemeral block
   */
  _removeOldest() {
    let oldest = null;
    let oldestTime = Infinity;

    for (const [id, data] of this.blocks) {
      if (data.birthTime < oldestTime) {
        oldestTime = data.birthTime;
        oldest = id;
      }
    }

    if (oldest) {
      const data = this.blocks.get(oldest);
      this.blockManager.removeBlock(data.block.id);
      this.blocks.delete(oldest);
    }
  }

  /**
   * Clear all ephemeral blocks
   */
  clear() {
    for (const [id, data] of this.blocks) {
      this.blockManager.removeBlock(data.block.id);
    }
    this.blocks.clear();
  }

  /**
   * Get count of active ephemeral blocks
   */
  getCount() {
    return this.blocks.size;
  }

  dispose() {
    this.clear();
    this.enabled = false;
  }
}
