/**
 * CameraPathAnimator - Creates smooth camera animations between saved bookmarks
 * Uses existing CameraBookmarks system as waypoints
 */
export class CameraPathAnimator {
  constructor(camera, controls, cameraBookmarks) {
    this.camera = camera;
    this.controls = controls;
    this.cameraBookmarks = cameraBookmarks;
    this.isPlaying = false;
    this.currentFrame = 0;
    this.animationFrameId = null;
    this.curveType = 'easeInOut'; // Default curve type
  }

  /**
   * Get camera state interpolated between two bookmarks
   * @param {Object} bookmark1 - Start bookmark
   * @param {Object} bookmark2 - End bookmark
   * @param {number} t - Progress from 0 to 1
   * @param {string} easingType - 'linear', 'ease-in-out', or 'cubic'
   */
  interpolate(bookmark1, bookmark2, t, easingType = null) {
    // Use instance curve type if not specified
    const curveType = easingType || this.curveType;

    // Apply easing
    let eased = t;
    switch (curveType) {
      case 'linear':
        eased = t;
        break;
      case 'easeIn':
        eased = t * t;
        break;
      case 'easeOut':
        eased = 1 - Math.pow(1 - t, 2);
        break;
      case 'easeInOut':
        eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        break;
      case 'smoothstep':
        eased = t * t * (3 - 2 * t);
        break;
      default:
        eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // Default to easeInOut
        break;
    }

    // Interpolate position
    const position = {
      x: bookmark1.position.x + (bookmark2.position.x - bookmark1.position.x) * eased,
      y: bookmark1.position.y + (bookmark2.position.y - bookmark1.position.y) * eased,
      z: bookmark1.position.z + (bookmark2.position.z - bookmark1.position.z) * eased
    };

    // Interpolate target (lookAt)
    const target = {
      x: bookmark1.target.x + (bookmark2.target.x - bookmark1.target.x) * eased,
      y: bookmark1.target.y + (bookmark2.target.y - bookmark1.target.y) * eased,
      z: bookmark1.target.z + (bookmark2.target.z - bookmark1.target.z) * eased
    };

    return { position, target };
  }

  /**
   * Get camera state at a specific frame
   * @param {number} frame - Current frame number
   * @param {number} totalFrames - Total frames in animation
   * @param {Array} bookmarks - Array of bookmarks (must have at least 2)
   */
  getCameraAtFrame(frame, totalFrames, bookmarks) {
    if (bookmarks.length < 2) {
      throw new Error('Need at least 2 bookmarks for camera path');
    }

    // Clamp frame to valid range
    frame = Math.max(0, Math.min(frame, totalFrames - 1));

    // Calculate progress (0 to 1)
    const progress = frame / (totalFrames - 1);

    // If only 2 bookmarks, simple interpolation
    if (bookmarks.length === 2) {
      return this.interpolate(bookmarks[0], bookmarks[1], progress);
    }

    // For multiple bookmarks, divide animation into segments
    const segments = bookmarks.length - 1;
    const segmentProgress = progress * segments;
    const currentSegment = Math.floor(segmentProgress);
    const segmentT = segmentProgress - currentSegment;

    // Handle last frame edge case
    if (currentSegment >= segments) {
      return {
        position: { ...bookmarks[bookmarks.length - 1].position },
        target: { ...bookmarks[bookmarks.length - 1].target }
      };
    }

    // Interpolate between current segment bookmarks
    return this.interpolate(
      bookmarks[currentSegment],
      bookmarks[currentSegment + 1],
      segmentT
    );
  }

  /**
   * Set camera to a specific state
   */
  setCameraState(state) {
    this.camera.position.set(state.position.x, state.position.y, state.position.z);
    this.controls.target.set(state.target.x, state.target.y, state.target.z);
    this.controls.update();
  }

  /**
   * Preview animation in real-time
   * @param {Array} bookmarks - Array of bookmarks to animate through
   * @param {number} durationMs - Total duration in milliseconds
   * @param {Function} onComplete - Callback when animation completes
   */
  preview(bookmarks, durationMs = 3000, onComplete = null) {
    if (bookmarks.length < 2) {
      console.warn('Need at least 2 bookmarks to preview');
      return;
    }

    this.stop(); // Stop any existing animation

    const startTime = performance.now();
    const fps = 60;
    const totalFrames = Math.floor((durationMs / 1000) * fps);

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const frame = Math.floor(progress * totalFrames);

      const cameraState = this.getCameraAtFrame(frame, totalFrames, bookmarks);
      this.setCameraState(cameraState);

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.isPlaying = false;
        if (onComplete) onComplete();
      }
    };

    this.isPlaying = true;
    this.animationFrameId = requestAnimationFrame(animate);
  }

  /**
   * Stop current preview animation
   */
  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.isPlaying = false;
  }

  /**
   * Render full sequence (for frame capture)
   * @param {Array} bookmarks - Array of bookmarks
   * @param {number} totalFrames - Number of frames to render
   * @param {Function} onFrameReady - Callback(frameNumber, totalFrames) called for each frame
   * @param {Function} onComplete - Callback when all frames are ready
   */
  async renderSequence(bookmarks, totalFrames, onFrameReady, onComplete) {
    if (bookmarks.length < 2) {
      throw new Error('Need at least 2 bookmarks to render sequence');
    }

    this.stop(); // Stop any preview

    for (let frame = 0; frame < totalFrames; frame++) {
      // Set camera to this frame's position
      const cameraState = this.getCameraAtFrame(frame, totalFrames, bookmarks);
      this.setCameraState(cameraState);

      // Call frame ready callback (renderer will capture this)
      if (onFrameReady) {
        await onFrameReady(frame, totalFrames);
      }

      // Small delay to let rendering complete
      await this.sleep(1);
    }

    if (onComplete) {
      onComplete();
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
