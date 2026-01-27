import * as THREE from 'three';
import { Animation } from './Animation.js';

export class Animator {
  constructor(blockManager) {
    this.blockManager = blockManager;
    this.animations = new Map(); // id -> Animation
    this.currentAnimation = null;
    this.isPlaying = false;
    this.currentTime = 0;
    this.playbackSpeed = 1;

    // Store original block states for reset
    this.originalStates = new Map();

    // Callbacks
    this.onTimeUpdate = null;
    this.onPlayStateChange = null;
  }

  createAnimation(name = 'New Animation', duration = 2000) {
    const anim = new Animation({ name, duration });
    this.animations.set(anim.id, anim);
    return anim;
  }

  deleteAnimation(id) {
    this.animations.delete(id);
    if (this.currentAnimation?.id === id) {
      this.currentAnimation = null;
      this.stop();
    }
  }

  setCurrentAnimation(id) {
    this.stop();
    this.currentAnimation = this.animations.get(id) || null;
    this.currentTime = 0;
  }

  // Store current block states as keyframe at time 0
  captureInitialState() {
    if (!this.currentAnimation) return;

    this.originalStates.clear();
    for (const block of this.blockManager.blocks.values()) {
      this.originalStates.set(block.id, {
        position: { ...block.gridPosition },
        rotation: { ...block.rotation },
        scale: { ...block.dimensions },
        color: block.color,
        emissive: block.emissive ? { ...block.emissive } : null
      });
    }
  }

  // Add keyframe for a single block at current time
  addKeyframe(block) {
    if (!this.currentAnimation || !block) return 0;

    this.currentAnimation.addKeyframe(this.currentTime, block.id, {
      position: { ...block.gridPosition },
      rotation: { ...block.rotation },
      scale: { ...block.dimensions },
      color: block.color,
      emissive: block.emissive ? { ...block.emissive } : null
    });
    return 1;
  }

  // Add keyframes for multiple selected blocks at current time
  addKeyframesForSelection(blocks) {
    if (!this.currentAnimation || !blocks || blocks.length === 0) return 0;

    let count = 0;
    for (const block of blocks) {
      this.currentAnimation.addKeyframe(this.currentTime, block.id, {
        position: { ...block.gridPosition },
        rotation: { ...block.rotation },
        scale: { ...block.dimensions },
        color: block.color,
        emissive: block.emissive ? { ...block.emissive } : null
      });
      count++;
    }
    return count;
  }

  // Remove keyframe at current time for a single block
  removeKeyframe(blockId) {
    if (!this.currentAnimation) return 0;
    const before = this.currentAnimation.keyframes.length;
    this.currentAnimation.removeKeyframe(this.currentTime, blockId);
    return before - this.currentAnimation.keyframes.length;
  }

  // Remove keyframes at current time for multiple blocks
  removeKeyframesForSelection(blockIds) {
    if (!this.currentAnimation || !blockIds || blockIds.length === 0) return 0;

    let count = 0;
    for (const blockId of blockIds) {
      const before = this.currentAnimation.keyframes.length;
      this.currentAnimation.removeKeyframe(this.currentTime, blockId);
      if (this.currentAnimation.keyframes.length < before) count++;
    }
    return count;
  }

  // Check if there are keyframes at current time for the given blocks
  hasKeyframesAtCurrentTime(blockIds) {
    if (!this.currentAnimation) return false;
    const kfsAtTime = this.currentAnimation.getKeyframesAtTime(this.currentTime);
    return kfsAtTime.some(kf => blockIds.includes(kf.blockId));
  }

  play() {
    if (!this.currentAnimation) return;

    this.captureInitialState();
    this.isPlaying = true;
    this.lastTime = performance.now();

    if (this.onPlayStateChange) {
      this.onPlayStateChange(true);
    }
  }

  pause() {
    this.isPlaying = false;
    if (this.onPlayStateChange) {
      this.onPlayStateChange(false);
    }
  }

  stop() {
    this.isPlaying = false;
    this.currentTime = 0;
    this.restoreOriginalStates();

    if (this.onPlayStateChange) {
      this.onPlayStateChange(false);
    }
    if (this.onTimeUpdate) {
      this.onTimeUpdate(0);
    }
  }

  restoreOriginalStates() {
    for (const [blockId, state] of this.originalStates) {
      const block = this.blockManager.blocks.get(blockId);
      if (block) {
        block.setPosition(state.position);
        block.setRotation(state.rotation);
        block.setColor(state.color);
        if (state.emissive && block.setEmissive) {
          block.setEmissive(state.emissive);
        }
      }
    }
  }

  setTime(time) {
    this.currentTime = Math.max(0, Math.min(time, this.currentAnimation?.duration || 0));
    this.updateBlocks();

    if (this.onTimeUpdate) {
      this.onTimeUpdate(this.currentTime);
    }
  }

  update(delta) {
    if (!this.isPlaying || !this.currentAnimation) return;

    this.currentTime += delta * 1000 * this.playbackSpeed;

    if (this.currentTime >= this.currentAnimation.duration) {
      if (this.currentAnimation.loop) {
        this.currentTime = this.currentTime % this.currentAnimation.duration;
      } else {
        this.currentTime = this.currentAnimation.duration;
        this.pause();
      }
    }

    this.updateBlocks();

    if (this.onTimeUpdate) {
      this.onTimeUpdate(this.currentTime);
    }
  }

  updateBlocks() {
    if (!this.currentAnimation) return;

    // Group keyframes by block
    const blockKeyframes = new Map();
    for (const kf of this.currentAnimation.keyframes) {
      if (!blockKeyframes.has(kf.blockId)) {
        blockKeyframes.set(kf.blockId, []);
      }
      blockKeyframes.get(kf.blockId).push(kf);
    }

    // Interpolate each block
    for (const [blockId, keyframes] of blockKeyframes) {
      const block = this.blockManager.blocks.get(blockId);
      if (!block || keyframes.length === 0) continue;

      // Find surrounding keyframes
      let prevKf = null;
      let nextKf = null;

      for (const kf of keyframes) {
        if (kf.time <= this.currentTime) {
          prevKf = kf;
        } else if (!nextKf) {
          nextKf = kf;
        }
      }

      // Apply interpolated values
      if (prevKf && nextKf) {
        const t = (this.currentTime - prevKf.time) / (nextKf.time - prevKf.time);
        this.interpolateBlock(block, prevKf.properties, nextKf.properties, t);
      } else if (prevKf) {
        this.applyProperties(block, prevKf.properties);
      } else if (nextKf) {
        // Before first keyframe - use original state
        const original = this.originalStates.get(blockId);
        if (original) {
          block.setPosition(original.position);
          block.setRotation(original.rotation);
        }
      }
    }
  }

  interpolateBlock(block, from, to, t) {
    // Apply easing curve
    const et = this.applyCurve(t);

    // Interpolate position
    if (from.position && to.position) {
      block.setPosition({
        x: Math.round(this.lerp(from.position.x, to.position.x, et)),
        y: Math.round(this.lerp(from.position.y, to.position.y, et)),
        z: Math.round(this.lerp(from.position.z, to.position.z, et))
      });
    }

    // Interpolate rotation
    if (from.rotation && to.rotation) {
      block.setRotation({
        x: this.lerp(from.rotation.x, to.rotation.x, et),
        y: this.lerp(from.rotation.y, to.rotation.y, et),
        z: this.lerp(from.rotation.z, to.rotation.z, et)
      });
    }

    // Interpolate color
    if (from.color && to.color) {
      const c1 = new THREE.Color(from.color);
      const c2 = new THREE.Color(to.color);
      c1.lerp(c2, et);
      block.setColor('#' + c1.getHexString());
    }

    // Interpolate emissive properties
    if (from.emissive && to.emissive && block.setEmissive) {
      const ec1 = new THREE.Color(from.emissive.color || '#000000');
      const ec2 = new THREE.Color(to.emissive.color || '#000000');
      ec1.lerp(ec2, et);

      block.setEmissive({
        enabled: to.emissive.enabled, // Use target enabled state
        color: '#' + ec1.getHexString(),
        intensity: this.lerp(from.emissive.intensity || 0, to.emissive.intensity || 0, et),
        radius: this.lerp(from.emissive.radius || 0, to.emissive.radius || 0, et)
      });
    } else if (to.emissive && block.setEmissive) {
      // Transitioning from no emissive to emissive
      block.setEmissive(to.emissive);
    } else if (from.emissive && !to.emissive && block.setEmissive) {
      // Transitioning from emissive to no emissive - fade out
      const ec1 = new THREE.Color(from.emissive.color || '#000000');
      block.setEmissive({
        enabled: et < 0.5 ? from.emissive.enabled : false,
        color: '#' + ec1.getHexString(),
        intensity: this.lerp(from.emissive.intensity || 0, 0, et),
        radius: from.emissive.radius || 0
      });
    }
  }

  applyProperties(block, props) {
    if (props.position) block.setPosition(props.position);
    if (props.rotation) block.setRotation(props.rotation);
    if (props.color) block.setColor(props.color);
    if (props.emissive && block.setEmissive) block.setEmissive(props.emissive);
  }

  lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // Apply easing curve based on animation's curve type
  applyCurve(t) {
    if (!this.currentAnimation) return t;

    const curveType = this.currentAnimation.curve || 'easeInOut';

    switch (curveType) {
      case 'linear':
        return t;

      case 'easeIn':
        return t * t;

      case 'easeOut':
        return 1 - Math.pow(1 - t, 2);

      case 'easeInOut':
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      case 'smoothstep':
        return t * t * (3 - 2 * t);

      default:
        return t;
    }
  }

  getAllAnimations() {
    return Array.from(this.animations.values());
  }

  toJSON() {
    return {
      animations: Array.from(this.animations.values()).map(a => a.toJSON()),
      currentAnimationId: this.currentAnimation?.id || null
    };
  }

  fromJSON(data) {
    this.animations.clear();
    for (const animData of data.animations || []) {
      const anim = Animation.fromJSON(animData);
      this.animations.set(anim.id, anim);
    }
    if (data.currentAnimationId) {
      this.setCurrentAnimation(data.currentAnimationId);
    }
  }

  clear() {
    this.stop();
    this.animations.clear();
    this.currentAnimation = null;
    this.originalStates.clear();
  }
}
