/**
 * FrameSequencer - Captures frames from the canvas during camera animations
 * Supports high-resolution rendering and various output formats
 */
export class FrameSequencer {
  constructor(engine) {
    this.engine = engine;
    this.frames = [];
    this.isCapturing = false;
    this.onProgress = null;
  }

  /**
   * Capture a single frame from the canvas
   * @param {number} frameNumber - Frame index
   * @param {string} format - 'image/jpeg' or 'image/png'
   * @param {number} quality - Quality for JPEG (0-1)
   */
  async captureFrame(frameNumber, format = 'image/jpeg', quality = 0.92) {
    // Make sure scene is rendered
    this.engine.renderer.render(this.engine.scene, this.engine.camera);

    // Check if tattoo/stylized overlay is enabled
    const tattooOverlay = document.getElementById('tattoo-overlay');
    const hasTattooOverlay = tattooOverlay && tattooOverlay.style.display !== 'none';

    // If tattoo overlay is enabled, update it for current camera position
    if (hasTattooOverlay) {
      const tattooRenderer = window.appInstance?.tattooRenderer;
      if (tattooRenderer && tattooRenderer.enabled) {
        tattooRenderer.render();
      }
    }

    let canvasToCapture = this.engine.canvas;

    // If tattoo overlay is enabled, composite both canvases
    if (hasTattooOverlay) {
      const compositeCanvas = document.createElement('canvas');
      compositeCanvas.width = this.engine.canvas.width;
      compositeCanvas.height = this.engine.canvas.height;
      const compositeCtx = compositeCanvas.getContext('2d');

      // Draw main 3D canvas
      compositeCtx.drawImage(this.engine.canvas, 0, 0);

      // Draw tattoo overlay on top
      compositeCtx.drawImage(tattooOverlay, 0, 0);

      canvasToCapture = compositeCanvas;
    }

    return new Promise((resolve) => {
      canvasToCapture.toBlob(
        (blob) => {
          resolve({
            frameNumber,
            blob,
            dataUrl: URL.createObjectURL(blob),
            timestamp: Date.now()
          });
        },
        format,
        quality
      );
    });
  }

  /**
   * Capture full sequence
   * @param {Object} options - Configuration options
   * @param {CameraPathAnimator} options.animator - Camera animator instance
   * @param {Array} options.bookmarks - Bookmarks to animate through
   * @param {number} options.totalFrames - Number of frames to capture
   * @param {Function} options.onProgress - Progress callback
   * @param {string} options.format - Image format ('image/jpeg' or 'image/png')
   * @param {number} options.quality - JPEG quality (0-1)
   */
  async captureSequence(options) {
    const {
      animator,
      bookmarks,
      totalFrames,
      onProgress,
      format = 'image/jpeg',
      quality = 0.92
    } = options;

    if (bookmarks.length < 2) {
      throw new Error('Need at least 2 bookmarks to capture sequence');
    }

    this.frames = [];
    this.isCapturing = true;

    // Render and capture each frame
    await animator.renderSequence(
      bookmarks,
      totalFrames,
      async (frameNumber, total) => {
        // Capture this frame
        const frameData = await this.captureFrame(frameNumber, format, quality);
        this.frames.push(frameData);

        // Progress callback
        if (onProgress) {
          onProgress({
            current: frameNumber + 1,
            total,
            percent: ((frameNumber + 1) / total * 100).toFixed(1)
          });
        }
      },
      () => {
        this.isCapturing = false;
      }
    );

    return this.frames;
  }

  /**
   * Export frames as individual downloads
   * Note: Browsers may block multiple downloads, so ZIP export is preferred
   */
  async exportIndividualFrames(frames = null, prefix = 'frame_') {
    const framesToExport = frames || this.frames;

    for (let i = 0; i < framesToExport.length; i++) {
      const frame = framesToExport[i];
      const link = document.createElement('a');
      const frameNum = String(frame.frameNumber).padStart(4, '0');
      link.download = `${prefix}${frameNum}.jpg`;
      link.href = frame.dataUrl;
      link.click();

      // Small delay to prevent browser blocking
      await this.sleep(100);
    }
  }

  /**
   * Export frames as ZIP archive
   * Requires JSZip library
   */
  async exportAsZip(frames = null, filename = 'camera_sequence.zip') {
    const framesToExport = frames || this.frames;

    if (!window.JSZip) {
      throw new Error('JSZip library not loaded. Please include it in your project.');
    }

    const JSZip = window.JSZip;
    const zip = new JSZip();

    // Add each frame to the zip
    for (const frame of framesToExport) {
      const frameNum = String(frame.frameNumber).padStart(4, '0');
      const extension = frame.blob.type === 'image/png' ? 'png' : 'jpg';
      zip.file(`frame_${frameNum}.${extension}`, frame.blob);
    }

    // Generate zip file
    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    });

    // Download
    this.downloadBlob(zipBlob, filename);

    return zipBlob;
  }

  /**
   * Export as MP4 video using frame-by-frame capture + MediaRecorder
   * This ensures all frames are captured regardless of performance
   */
  async exportAsMP4Realtime(animator, bookmarks, durationMs = 3000, filename = 'camera_path.webm', onProgress = null) {
    // Calculate total frames based on duration and target FPS
    const targetFPS = 30;
    const totalFrames = Math.floor((durationMs / 1000) * targetFPS);

    console.log(`Exporting video: ${totalFrames} frames at ${targetFPS} FPS`);

    // Use frame-by-frame capture instead of real-time recording
    return this.exportAsMP4FrameByFrame(animator, bookmarks, totalFrames, targetFPS, filename, onProgress);
  }

  /**
   * Frame-by-frame video export for smooth results
   */
  async exportAsMP4FrameByFrame(animator, bookmarks, totalFrames, fps, filename = 'camera_path.webm', onProgress = null) {
    // Check if tattoo/stylized mode is enabled
    const tattooOverlay = document.getElementById('tattoo-overlay');
    const hasTattooOverlay = tattooOverlay && tattooOverlay.style.display !== 'none';
    const tattooRenderer = window.appInstance?.tattooRenderer;

    // Create a canvas to composite frames
    const canvas = document.createElement('canvas');
    canvas.width = this.engine.canvas.width;
    canvas.height = this.engine.canvas.height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    console.log(`Starting WebM export: ${totalFrames} frames at ${fps} FPS`);

    // Setup MediaRecorder with automatic frame capture
    const stream = canvas.captureStream(fps); // Capture at target FPS

    let mimeType = 'video/webm;codecs=vp9';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'video/webm;codecs=vp8';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
      }
    }

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 8000000 // 8 Mbps
    });

    const chunks = [];

    return new Promise((resolve, reject) => {
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
          console.log(`Chunk received: ${e.data.size} bytes (total chunks: ${chunks.length})`);
        }
      };

      mediaRecorder.onstop = () => {
        console.log(`Recording stopped. Total chunks: ${chunks.length}, total size: ${chunks.reduce((sum, c) => sum + c.size, 0)} bytes`);
        const blob = new Blob(chunks, { type: mimeType });
        console.log(`Final video blob size: ${blob.size} bytes`);

        if (blob.size < 10000) {
          console.error('Video blob is suspiciously small - recording may have failed');
          reject(new Error('Video recording failed - file too small. Try using JPG Sequence export instead.'));
          return;
        }

        this.downloadBlob(blob, filename);
        resolve(blob);
      };

      mediaRecorder.onerror = reject;

      // Start recording with timeslice to ensure frames are captured
      mediaRecorder.start(100); // Request data every 100ms

      // Render and capture each frame sequentially
      let currentFrame = 0;
      const frameInterval = 1000 / fps;
      let startTime = performance.now();

      const renderNextFrame = () => {
        if (currentFrame >= totalFrames) {
          // All frames captured, stop recording after a small delay
          setTimeout(() => {
            mediaRecorder.stop();
          }, 1000); // Wait a bit for last frames to encode
          return;
        }

        // Set camera to this frame's position
        const cameraState = animator.getCameraAtFrame(currentFrame, totalFrames, bookmarks);
        animator.setCameraState(cameraState);

        // Render the 3D scene
        this.engine.renderer.render(this.engine.scene, this.engine.camera);

        // If stylized rendering is enabled, render it too
        if (hasTattooOverlay && tattooRenderer && tattooRenderer.enabled) {
          tattooRenderer.render(true); // Force render, bypass throttling
        }

        // Composite to our recording canvas
        // Fill with a temp color first to force canvas update
        ctx.fillStyle = `rgb(${currentFrame % 255}, 0, 0)`;
        ctx.fillRect(0, 0, 1, 1);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.engine.canvas, 0, 0);

        if (hasTattooOverlay && tattooOverlay) {
          ctx.drawImage(tattooOverlay, 0, 0);
        }

        // Debug: log every 30th frame
        if (currentFrame % 30 === 0) {
          console.log(`Frame ${currentFrame}/${totalFrames} rendered, camera:`,
            animator.camera.position.x.toFixed(1),
            animator.camera.position.y.toFixed(1),
            animator.camera.position.z.toFixed(1)
          );
        }

        currentFrame++;

        // Report progress
        if (onProgress) {
          onProgress({
            current: currentFrame,
            total: totalFrames,
            percent: ((currentFrame / totalFrames) * 100).toFixed(1)
          });
        }

        // Use requestAnimationFrame for smoother frame timing
        const now = performance.now();
        const elapsed = now - startTime;
        const targetTime = currentFrame * frameInterval;
        const delay = Math.max(0, targetTime - elapsed);

        setTimeout(() => {
          requestAnimationFrame(renderNextFrame);
        }, delay);
      };

      // Start rendering frames
      requestAnimationFrame(renderNextFrame);
    });
  }

  /**
   * DEPRECATED: Old real-time recording method (kept for reference)
   * Use exportAsMP4FrameByFrame instead for better quality
   */
  async exportAsMP4RealtimeOld(animator, bookmarks, durationMs = 3000, filename = 'camera_path.webm') {

    // If we have a tattoo overlay, we need to composite both canvases
    let stream;
    let compositeCanvas;
    let compositeCtx;

    if (hasTattooOverlay) {
      // Create a composite canvas that combines both layers
      compositeCanvas = document.createElement('canvas');
      compositeCanvas.width = this.engine.canvas.width;
      compositeCanvas.height = this.engine.canvas.height;
      compositeCtx = compositeCanvas.getContext('2d');

      // We'll manually draw frames, so create stream from composite
      const fps = 30;
      stream = compositeCanvas.captureStream(fps);
    } else {
      // No overlay, use main canvas directly
      if (!this.engine.canvas.captureStream) {
        throw new Error('Canvas.captureStream() not supported in this browser');
      }
      const fps = 30;
      stream = this.engine.canvas.captureStream(fps);
    }

    // Check for supported MIME types
    let mimeType = 'video/webm;codecs=vp9';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'video/webm;codecs=vp8';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
      }
    }

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 8000000 // 8 Mbps
    });

    const chunks = [];

    return new Promise((resolve, reject) => {
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: mimeType });
        this.downloadBlob(blob, filename);
        resolve(blob);
      };

      mediaRecorder.onerror = (e) => {
        reject(e);
      };

      // Start recording
      mediaRecorder.start();

      // If using composite canvas, set up frame compositing that runs AFTER main render
      if (compositeCanvas && compositeCtx) {
        // Get tattoo renderer reference
        const tattooRenderer = window.appInstance?.tattooRenderer;

        // Hook into the engine's render loop to composite after each frame
        const originalOnUpdate = this.engine.onUpdate;

        this.engine.onUpdate = (delta) => {
          // Run original update (includes animator updates)
          if (originalOnUpdate) {
            originalOnUpdate(delta);
          }

          // After the main render, update tattoo overlay for current camera
          if (tattooRenderer && tattooRenderer.enabled) {
            tattooRenderer.render();
          }

          // Composite both canvases
          compositeCtx.clearRect(0, 0, compositeCanvas.width, compositeCanvas.height);
          compositeCtx.drawImage(this.engine.canvas, 0, 0);
          if (tattooOverlay) {
            compositeCtx.drawImage(tattooOverlay, 0, 0);
          }
        };

        // Play animation (which will trigger engine updates)
        animator.preview(bookmarks, durationMs, () => {
          // Restore original update function
          this.engine.onUpdate = originalOnUpdate;

          // Stop recording when animation completes
          setTimeout(() => {
            mediaRecorder.stop();
          }, 500);
        });
      } else {
        // No compositing needed, just play animation
        animator.preview(bookmarks, durationMs, () => {
          setTimeout(() => {
            mediaRecorder.stop();
          }, 500);
        });
      }
    });
  }

  /**
   * Helper to download a blob
   */
  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    // Clean up
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }

  /**
   * Clear captured frames and free memory
   */
  clear() {
    // Revoke object URLs to free memory
    this.frames.forEach(frame => {
      if (frame.dataUrl) {
        URL.revokeObjectURL(frame.dataUrl);
      }
    });
    this.frames = [];
  }

  /**
   * Get memory usage estimate in MB
   */
  getMemoryUsage() {
    const bytes = this.frames.reduce((sum, frame) => sum + frame.blob.size, 0);
    return (bytes / 1024 / 1024).toFixed(2);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
