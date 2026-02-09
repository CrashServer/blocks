/**
 * AudioReactor - Real-time audio analysis for VJ reactivity
 *
 * Wraps Web Audio API to produce normalized signals every frame:
 * - 5 frequency bands (sub, bass, mid, high, presence)
 * - Overall energy (RMS)
 * - Beat detection (spectral flux in low frequencies)
 * - Onset/attack envelope for transient detection
 */

export class AudioReactor {
  constructor() {
    this.context = null;
    this.analyser = null;
    this.source = null;
    this.gainNode = null;
    this.stream = null;

    // FFT data
    this.fftSize = 1024;
    this.freqData = null;
    this.timeData = null;

    // Output signals (0-1 normalized)
    this.bands = { sub: 0, bass: 0, mid: 0, high: 0, presence: 0 };
    this.energy = 0;
    this.beat = false;
    this.onset = 0;

    // Beat detection state
    this.beatThreshold = 1.4;
    this.beatDecay = 0.98;
    this.beatAverage = 0;
    this.beatHoldFrames = 0;
    this.beatHoldMax = 8; // frames to hold beat=true

    // Onset envelope
    this.prevEnergy = 0;
    this.onsetDecay = 0.92;

    // Gain
    this.gain = 1.0;
    this.sensitivity = 1.0;

    // State
    this.running = false;
  }

  async start() {
    if (this.running) return;

    try {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
      this.analyser = this.context.createAnalyser();
      this.analyser.fftSize = this.fftSize;
      this.analyser.smoothingTimeConstant = 0.8;

      this.gainNode = this.context.createGain();
      this.gainNode.gain.value = this.gain;

      // Request microphone
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.source = this.context.createMediaStreamSource(this.stream);
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.analyser);
      // Don't connect to destination — we don't want to hear the mic

      this.freqData = new Uint8Array(this.analyser.frequencyBinCount);
      this.timeData = new Uint8Array(this.analyser.fftSize);

      this.running = true;
    } catch (e) {
      console.warn('AudioReactor: Failed to start mic capture:', e);
      throw e;
    }
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    if (this.source) {
      this.source.disconnect();
      this.source = null;
    }
    if (this.context && this.context.state !== 'closed') {
      this.context.close();
    }
    this.context = null;
    this.analyser = null;
    this.running = false;

    // Reset outputs
    this.bands = { sub: 0, bass: 0, mid: 0, high: 0, presence: 0 };
    this.energy = 0;
    this.beat = false;
    this.onset = 0;
  }

  setGain(value) {
    this.gain = value;
    if (this.gainNode) {
      this.gainNode.gain.value = value;
    }
  }

  setSensitivity(value) {
    this.sensitivity = Math.max(0.1, value);
  }

  update() {
    if (!this.running || !this.analyser) return;

    this.analyser.getByteFrequencyData(this.freqData);
    this.analyser.getByteTimeDomainData(this.timeData);

    const binCount = this.analyser.frequencyBinCount;
    const nyquist = this.context.sampleRate / 2;
    const binWidth = nyquist / binCount;

    // Split FFT into 5 bands
    // sub: 20-60Hz, bass: 60-250Hz, mid: 250-2kHz, high: 2k-6kHz, presence: 6k-20kHz
    this.bands.sub = this._bandEnergy(20, 60, binWidth, binCount);
    this.bands.bass = this._bandEnergy(60, 250, binWidth, binCount);
    this.bands.mid = this._bandEnergy(250, 2000, binWidth, binCount);
    this.bands.high = this._bandEnergy(2000, 6000, binWidth, binCount);
    this.bands.presence = this._bandEnergy(6000, 20000, binWidth, binCount);

    // Apply sensitivity
    for (const key in this.bands) {
      this.bands[key] = Math.min(1, this.bands[key] * this.sensitivity);
    }

    // Overall RMS energy from time domain
    let sumSquares = 0;
    for (let i = 0; i < this.timeData.length; i++) {
      const normalized = (this.timeData[i] - 128) / 128;
      sumSquares += normalized * normalized;
    }
    this.energy = Math.min(1, Math.sqrt(sumSquares / this.timeData.length) * 3 * this.sensitivity);

    // Beat detection: spectral flux in sub+bass
    const lowEnergy = (this.bands.sub + this.bands.bass) * 0.5;
    this.beatAverage = this.beatAverage * this.beatDecay + lowEnergy * (1 - this.beatDecay);

    if (this.beatHoldFrames > 0) {
      this.beatHoldFrames--;
      this.beat = true;
    } else if (lowEnergy > this.beatAverage * this.beatThreshold && lowEnergy > 0.15) {
      this.beat = true;
      this.beatHoldFrames = this.beatHoldMax;
    } else {
      this.beat = false;
    }

    // Onset envelope: spikes on transients, decays
    const energyDelta = Math.max(0, this.energy - this.prevEnergy);
    this.onset = Math.max(this.onset * this.onsetDecay, energyDelta * 3);
    this.onset = Math.min(1, this.onset);
    this.prevEnergy = this.energy;
  }

  _bandEnergy(freqLow, freqHigh, binWidth, binCount) {
    const startBin = Math.max(0, Math.floor(freqLow / binWidth));
    const endBin = Math.min(binCount - 1, Math.floor(freqHigh / binWidth));

    if (startBin >= endBin) return 0;

    let sum = 0;
    let count = 0;
    for (let i = startBin; i <= endBin; i++) {
      sum += this.freqData[i];
      count++;
    }

    // Normalize: freqData is 0-255, we want 0-1
    return count > 0 ? (sum / count / 255) : 0;
  }

  /**
   * Get a specific source value by name
   */
  getSource(name) {
    switch (name) {
      case 'sub': return this.bands.sub;
      case 'bass': return this.bands.bass;
      case 'mid': return this.bands.mid;
      case 'high': return this.bands.high;
      case 'presence': return this.bands.presence;
      case 'energy': return this.energy;
      case 'beat': return this.beat ? 1 : 0;
      case 'onset': return this.onset;
      default: return 0;
    }
  }

  dispose() {
    this.stop();
  }
}
