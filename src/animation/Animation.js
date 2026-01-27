export class Animation {
  constructor(options = {}) {
    this.id = options.id || `anim_${Date.now()}`;
    this.name = options.name || 'Animation';
    this.duration = options.duration || 1000; // ms
    this.loop = options.loop || false;
    this.curve = options.curve || 'easeInOut'; // interpolation curve type
    this.keyframes = options.keyframes || []; // { time, blockId, properties }
  }

  addKeyframe(time, blockId, properties) {
    // Remove existing keyframe at same time for same block
    this.keyframes = this.keyframes.filter(
      kf => !(kf.time === time && kf.blockId === blockId)
    );

    this.keyframes.push({ time, blockId, properties });
    this.keyframes.sort((a, b) => a.time - b.time);
  }

  removeKeyframe(time, blockId) {
    this.keyframes = this.keyframes.filter(
      kf => !(kf.time === time && kf.blockId === blockId)
    );
  }

  getKeyframesForBlock(blockId) {
    return this.keyframes.filter(kf => kf.blockId === blockId);
  }

  getKeyframesAtTime(time) {
    return this.keyframes.filter(kf => kf.time === time);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      duration: this.duration,
      loop: this.loop,
      curve: this.curve,
      keyframes: this.keyframes
    };
  }

  static fromJSON(data) {
    return new Animation(data);
  }
}
