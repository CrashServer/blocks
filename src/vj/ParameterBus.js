/**
 * ParameterBus - Maps audio signals to visual parameters
 *
 * Each mapping defines: source (audio band) -> target (visual param)
 * with range scaling, smoothing, response curves, and trigger modes.
 */

export class ParameterBus {
  constructor() {
    this.mappings = [];
    this.smoothedValues = new Map();
    this.triggerStates = new Map(); // track previous beat state for edge detection
  }

  addMapping(mapping) {
    const m = {
      id: mapping.id || `map_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      source: mapping.source || 'energy',
      target: mapping.target || '',
      range: mapping.range || [0, 1],
      smooth: mapping.smooth ?? 0.15,
      curve: mapping.curve || 'linear',
      trigger: mapping.trigger || false,
      enabled: mapping.enabled ?? true
    };
    this.mappings.push(m);
    this.smoothedValues.set(m.id, m.range[0]);
    return m;
  }

  removeMapping(id) {
    this.mappings = this.mappings.filter(m => m.id !== id);
    this.smoothedValues.delete(id);
  }

  setMapping(id, updates) {
    const m = this.mappings.find(m => m.id === id);
    if (m) Object.assign(m, updates);
  }

  /**
   * Update all mappings and return target->value map
   */
  update(audioReactor, delta) {
    const results = new Map();

    for (const m of this.mappings) {
      if (!m.enabled) continue;

      const raw = audioReactor.getSource(m.source);

      if (m.trigger) {
        // Trigger mode: fire on rising edge of beat
        const prevState = this.triggerStates.get(m.id) || false;
        const currentState = raw > 0.5;
        this.triggerStates.set(m.id, currentState);

        if (currentState && !prevState) {
          results.set(m.target, { value: 1, trigger: true });
        }
        continue;
      }

      // Apply response curve
      const curved = this._applyCurve(raw, m.curve);

      // Scale to range
      const [min, max] = m.range;
      const target = min + curved * (max - min);

      // Exponential smoothing
      const prev = this.smoothedValues.get(m.id) ?? target;
      const smoothFactor = 1 - Math.pow(1 - m.smooth, delta * 60); // frame-rate independent
      const smoothed = prev + (target - prev) * smoothFactor;
      this.smoothedValues.set(m.id, smoothed);

      results.set(m.target, { value: smoothed, trigger: false });
    }

    return results;
  }

  _applyCurve(value, curve) {
    switch (curve) {
      case 'exponential':
        return value * value;
      case 'step':
        return value > 0.5 ? 1 : 0;
      case 'sqrt':
        return Math.sqrt(value);
      case 'linear':
      default:
        return value;
    }
  }

  /**
   * Load a preset mapping configuration
   */
  loadPreset(name) {
    this.mappings = [];
    this.smoothedValues.clear();
    this.triggerStates.clear();

    const presets = this._getPresets();
    const preset = presets[name];
    if (!preset) return;

    for (const m of preset) {
      this.addMapping(m);
    }
  }

  savePreset(name) {
    // Store in localStorage
    const key = `vj_preset_${name}`;
    localStorage.setItem(key, JSON.stringify(this.mappings));
  }

  loadCustomPreset(name) {
    const key = `vj_preset_${name}`;
    const data = localStorage.getItem(key);
    if (!data) return false;

    this.mappings = [];
    this.smoothedValues.clear();
    this.triggerStates.clear();

    const parsed = JSON.parse(data);
    for (const m of parsed) {
      this.addMapping(m);
    }
    return true;
  }

  _getPresets() {
    return {
      chill: [
        { source: 'bass', target: 'shader.thickness', range: [1, 3], smooth: 0.08, curve: 'sqrt' },
        { source: 'energy', target: 'emissive.intensity', range: [0.5, 2.0], smooth: 0.1 },
        { source: 'energy', target: 'camera.orbitSpeed', range: [0.3, 1.5], smooth: 0.05 },
        { source: 'bass', target: 'mesh.vertexDistort', range: [0, 0.08], smooth: 0.06 },
        { source: 'mid', target: 'shader.chromatic', range: [0, 0.002], smooth: 0.08 },
        { source: 'high', target: 'shader.vignette', range: [0, 0.4], smooth: 0.1 },
        { source: 'energy', target: 'bloom.strength', range: [0.2, 0.7], smooth: 0.08 },
      ],
      hard: [
        { source: 'bass', target: 'shader.thickness', range: [1, 6], smooth: 0.25, curve: 'exponential' },
        { source: 'energy', target: 'emissive.intensity', range: [0.5, 4.0], smooth: 0.3 },
        { source: 'onset', target: 'camera.shake', range: [0, 0.5], smooth: 0.05 },
        { source: 'energy', target: 'camera.orbitSpeed', range: [0.5, 4.0], smooth: 0.2 },
        { source: 'bass', target: 'mesh.vertexDistort', range: [0, 0.2], smooth: 0.2 },
        { source: 'bass', target: 'mesh.blockBounce', range: [0, 0.5], smooth: 0.15 },
        { source: 'mid', target: 'shader.chromatic', range: [0, 0.008], smooth: 0.15 },
        { source: 'beat', target: 'shader.fills', range: [0, 1], trigger: true },
        { source: 'high', target: 'shader.vignette', range: [0, 1.0], smooth: 0.2 },
        { source: 'energy', target: 'bloom.strength', range: [0.3, 1.5], smooth: 0.2 },
      ],
      psychedelic: [
        { source: 'bass', target: 'shader.thickness', range: [1, 8], smooth: 0.2, curve: 'exponential' },
        { source: 'energy', target: 'emissive.intensity', range: [1.0, 5.0], smooth: 0.25 },
        { source: 'onset', target: 'camera.shake', range: [0, 0.4], smooth: 0.05 },
        { source: 'energy', target: 'camera.orbitSpeed', range: [1.0, 5.0], smooth: 0.15 },
        { source: 'bass', target: 'mesh.vertexDistort', range: [0, 0.25], smooth: 0.15 },
        { source: 'bass', target: 'mesh.blockBounce', range: [0, 0.6], smooth: 0.12 },
        { source: 'mid', target: 'shader.chromatic', range: [0, 0.012], smooth: 0.12 },
        { source: 'beat', target: 'shader.fills', range: [0, 1], trigger: true },
        { source: 'high', target: 'shader.vignette', range: [0, 1.2], smooth: 0.15 },
        { source: 'energy', target: 'bloom.strength', range: [0.5, 2.0], smooth: 0.15 },
        { source: 'mid', target: 'shader.hueShift', range: [0, 1.0], smooth: 0.05 },
        { source: 'onset', target: 'shader.glitch', range: [0, 0.5], smooth: 0.03 },
        { source: 'energy', target: 'shader.feedback', range: [0, 0.7], smooth: 0.1 },
      ]
    };
  }

  /**
   * Set master reactivity multiplier on all range maxes
   */
  setReactivity(multiplier) {
    // Adjust all ranges proportionally
    for (const m of this.mappings) {
      // Keep original range info if needed — for now just scale smoothing
      m.smooth = Math.min(0.5, m.smooth * multiplier);
    }
  }

  dispose() {
    this.mappings = [];
    this.smoothedValues.clear();
    this.triggerStates.clear();
  }
}
