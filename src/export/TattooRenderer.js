import * as THREE from 'three';

/**
 * TattooRenderer - Stylized rendering for artistic outputs
 *
 * Styles:
 * - clean: Clean lines, solid fills
 * - sketch: Wobbly hand-drawn lines, multiple strokes
 * - ink: Bold variable-width lines, ink wash shading
 * - crosshatch: Hatching patterns for shading
 * - blueprint: Technical drawing style with grid
 * - comic: Bold outlines with halftone-style shading
 * - saturated: Full color, vivid fills, no grid
 * - neon: Glowing edges on dark background (Tron-style)
 * - scifi: Futuristic technical with scan lines
 * - watercolor: Soft blended edges
 * - noir: High contrast black and white
 * - synthwave: 80s retro purple/pink/cyan
 */
export class TattooRenderer {
  constructor(engine, blockManager) {
    this.engine = engine;
    this.blockManager = blockManager;

    // Settings
    this.enabled = false;
    this.style = 'clean'; // clean, sketch, ink, crosshatch, blueprint, comic
    this.inverted = false;
    this.grayscale = false;
    this.threshold = 0.5;
    this.lineWidth = 2;
    this.showFills = true;
    this.quality = 'medium'; // low, medium, high

    // Performance settings
    this.targetFPS = 30; // Target frame rate for overlay rendering
    this.lastRenderTime = 0;
    this.renderInterval = 1000 / this.targetFPS;

    // Caching
    this.sceneHash = null;
    this.cachedImageData = null;
    this.cacheValid = false;

    // Overlay canvas
    this.overlayCanvas = null;
    this.overlayCtx = null;

    // Temp vectors
    this._tempVec3 = new THREE.Vector3();
    this._tempVec3_2 = new THREE.Vector3();
    this._tempVec3_3 = new THREE.Vector3();

    // Noise seed for sketch style
    this.noiseSeed = Math.random() * 1000;

    window.addEventListener('resize', () => this.onResize());
  }

  onResize() {
    if (this.overlayCanvas) {
      this.overlayCanvas.width = window.innerWidth;
      this.overlayCanvas.height = window.innerHeight;
      if (this.enabled) this.render();
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (enabled) {
      this.createOverlay();
      this.render();
    } else {
      this.removeOverlay();
    }
  }

  setStyle(style) {
    this.style = style;
    if (this.enabled) this.render();
  }

  setInverted(inverted) {
    this.inverted = inverted;
    if (this.enabled) this.render();
  }

  setGrayscale(grayscale) {
    this.grayscale = grayscale;
    this.invalidateCache();
    if (this.enabled) this.render();
  }

  setThreshold(threshold) {
    this.threshold = Math.max(0, Math.min(1, threshold));
    if (this.enabled) this.render();
  }

  setLineWidth(width) {
    this.lineWidth = width;
    if (this.enabled) this.render();
  }

  setShowFills(show) {
    this.showFills = show;
    if (this.enabled) this.render();
  }

  setQuality(quality) {
    this.quality = quality;
    this.invalidateCache();
    if (this.enabled) this.render();
  }

  invalidateCache() {
    this.cacheValid = false;
    this.sceneHash = null;
  }

  generateSceneHash() {
    // Create a hash based on camera position, block count, and settings
    const camera = this.engine.camera;
    const camPos = `${camera.position.x.toFixed(1)},${camera.position.y.toFixed(1)},${camera.position.z.toFixed(1)}`;
    const camRot = `${camera.rotation.x.toFixed(2)},${camera.rotation.y.toFixed(2)},${camera.rotation.z.toFixed(2)}`;

    const blockCount = this.blockManager.getAllBlocks().length;
    const mergedCount = this.blockManager.getMergedMeshes ? this.blockManager.getMergedMeshes().length : 0;

    // Include style settings in hash
    const settings = `${this.style}-${this.inverted}-${this.grayscale}-${this.threshold}-${this.quality}`;

    return `${camPos}|${camRot}|${blockCount}|${mergedCount}|${settings}`;
  }

  getQualityMultiplier() {
    switch (this.quality) {
      case 'low': return 0.5;
      case 'high': return 1.5;
      default: return 1.0; // medium
    }
  }

  createOverlay() {
    if (this.overlayCanvas) return;

    this.overlayCanvas = document.createElement('canvas');
    this.overlayCanvas.id = 'tattoo-overlay';
    this.overlayCanvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10;
    `;
    this.overlayCanvas.width = window.innerWidth;
    this.overlayCanvas.height = window.innerHeight;
    this.overlayCtx = this.overlayCanvas.getContext('2d');

    document.getElementById('app').appendChild(this.overlayCanvas);
  }

  removeOverlay() {
    if (this.overlayCanvas && this.overlayCanvas.parentNode) {
      this.overlayCanvas.parentNode.removeChild(this.overlayCanvas);
    }
    this.overlayCanvas = null;
    this.overlayCtx = null;
  }

  // Get colors based on style
  getColors() {
    const styles = {
      clean: { bg: '#ffffff', fg: '#000000', accent: '#000000' },
      sketch: { bg: '#f5f5dc', fg: '#2c2c2c', accent: '#4a4a4a' }, // Beige paper
      ink: { bg: '#fffef0', fg: '#1a1a1a', accent: '#000000' }, // Cream paper
      crosshatch: { bg: '#ffffff', fg: '#000000', accent: '#444444' },
      blueprint: { bg: '#1e3a5f', fg: '#87ceeb', accent: '#add8e6' }, // Blue technical
      comic: { bg: '#ffffff', fg: '#000000', accent: '#ff0000' },
      saturated: { bg: '#ffffff', fg: '#000000', accent: '#333333', preserveColor: true },
      neon: { bg: '#0a0a0f', fg: '#00ffff', accent: '#ff00ff', glow: true }, // Cyan/magenta on dark
      scifi: { bg: '#0d1117', fg: '#58a6ff', accent: '#238636', grid: true }, // GitHub dark colors
      watercolor: { bg: '#faf8f5', fg: '#2c4a52', accent: '#8b4513', soft: true },
      noir: { bg: '#000000', fg: '#ffffff', accent: '#808080', highContrast: true },
      synthwave: { bg: '#1a1a2e', fg: '#ff6ec7', accent: '#00fff7', gradient: true }, // 80s retro
      ascii: { bg: '#000000', fg: '#00ff00', accent: '#00aa00', monospace: true } // Terminal ASCII art
    };

    let colors = styles[this.style] || styles.clean;

    if (this.inverted) {
      colors = { ...colors, bg: colors.fg, fg: colors.bg };
    }

    return colors;
  }

  render(forceRender = false) {
    if (!this.enabled || !this.overlayCanvas) return;

    // Frame rate throttling (skip if too soon since last render)
    const now = performance.now();
    if (!forceRender && (now - this.lastRenderTime) < this.renderInterval) {
      return; // Skip this frame
    }
    this.lastRenderTime = now;

    const width = this.overlayCanvas.width;
    const height = this.overlayCanvas.height;
    const ctx = this.overlayCtx;
    const colors = this.getColors();

    // Generate scene hash for caching
    const currentHash = this.generateSceneHash();

    // Use cached render if scene hasn't changed
    if (this.cacheValid && this.sceneHash === currentHash && this.cachedImageData) {
      ctx.putImageData(this.cachedImageData, 0, 0);
      return;
    }

    // Clear and fill background
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    // Style-specific background
    if (this.style === 'blueprint') {
      this.drawBlueprintGrid(ctx, width, height, colors);
    } else if (this.style === 'sketch') {
      this.drawPaperTexture(ctx, width, height);
    } else if (this.style === 'scifi') {
      this.drawScifiBackground(ctx, width, height, colors);
    } else if (this.style === 'synthwave') {
      this.drawSynthwaveBackground(ctx, width, height, colors);
    } else if (this.style === 'neon') {
      this.drawNeonBackground(ctx, width, height, colors);
    } else if (this.style === 'watercolor') {
      this.drawWatercolorBackground(ctx, width, height, colors);
    } else if (this.style === 'ascii') {
      this.drawAsciiBackground(ctx, width, height, colors);
    }

    // Get camera
    const camera = this.engine.camera;
    camera.updateMatrixWorld();

    // Special rendering for ASCII mode
    if (this.style === 'ascii') {
      const blocks = this.blockManager.getAllBlocks();
      const mergedMeshes = this.blockManager.getMergedMeshes ? this.blockManager.getMergedMeshes() : [];
      this.renderAsciiMode(ctx, blocks, mergedMeshes, camera, width, height, colors);

      // Cache the rendered frame
      this.cacheRenderedFrame(ctx, width, height, currentHash);
      return;
    }

    // Collect triangles
    const triangles = [];
    const blocks = this.blockManager.getAllBlocks();
    const mergedMeshes = this.blockManager.getMergedMeshes ? this.blockManager.getMergedMeshes() : [];

    for (const block of blocks) {
      if (!block.mesh.visible) continue;
      this.collectTriangles(block, camera, triangles);
    }

    for (const merged of mergedMeshes) {
      if (!merged.mesh.visible) continue;
      this.collectTrianglesFromMesh(merged.mesh, merged.color, camera, triangles);
    }

    // Sort by depth
    triangles.sort((a, b) => b.depth - a.depth);

    // Render fills
    if (this.showFills) {
      this.renderFills(ctx, triangles, colors);
    }

    // Render edges based on style
    this.renderStyledEdges(ctx, blocks, mergedMeshes, camera, width, height, colors);

    // Cache the rendered frame
    this.cacheRenderedFrame(ctx, width, height, currentHash);
  }

  cacheRenderedFrame(ctx, width, height, hash) {
    // Store the rendered image for future use
    this.cachedImageData = ctx.getImageData(0, 0, width, height);
    this.sceneHash = hash;
    this.cacheValid = true;
  }

  renderFills(ctx, triangles, colors) {
    for (const tri of triangles) {
      const luminance = this.calculateLuminance(tri.color);
      let fillColor;

      if (this.style === 'crosshatch') {
        // Crosshatch uses patterns instead of solid fills
        this.drawCrosshatchTriangle(ctx, tri, luminance, colors);
        continue;
      } else if (this.style === 'comic') {
        // Comic uses halftone-style dots
        this.drawComicTriangle(ctx, tri, luminance, colors);
        continue;
      } else if (this.style === 'saturated') {
        // Saturated: preserve and boost original colors
        this.drawSaturatedTriangle(ctx, tri, colors);
        continue;
      } else if (this.style === 'neon') {
        // Neon: dark fills with glowing effect
        this.drawNeonTriangle(ctx, tri, luminance, colors);
        continue;
      } else if (this.style === 'watercolor') {
        // Watercolor: soft blended fills
        this.drawWatercolorTriangle(ctx, tri, colors);
        continue;
      } else if (this.style === 'noir') {
        // Noir: high contrast black and white
        this.drawNoirTriangle(ctx, tri, luminance, colors);
        continue;
      } else if (this.style === 'synthwave') {
        // Synthwave: gradient-style fills
        this.drawSynthwaveTriangle(ctx, tri, colors);
        continue;
      } else if (this.style === 'scifi') {
        // Scifi: tech-style fills with slight transparency
        this.drawScifiTriangle(ctx, tri, luminance, colors);
        continue;
      }

      if (this.grayscale) {
        let gray = Math.round(luminance * 255);
        if (this.inverted) gray = 255 - gray;
        fillColor = `rgb(${gray}, ${gray}, ${gray})`;
      } else {
        const isBright = luminance > this.threshold;
        fillColor = isBright ? colors.bg : colors.fg;
      }

      ctx.fillStyle = fillColor;
      ctx.beginPath();
      ctx.moveTo(tri.points[0].x, tri.points[0].y);
      ctx.lineTo(tri.points[1].x, tri.points[1].y);
      ctx.lineTo(tri.points[2].x, tri.points[2].y);
      ctx.closePath();
      ctx.fill();
    }
  }

  renderStyledEdges(ctx, blocks, mergedMeshes, camera, width, height, colors) {
    ctx.strokeStyle = colors.fg;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const allEdges = [];

    // Collect all edges
    for (const block of blocks) {
      if (!block.mesh.visible) continue;
      allEdges.push(...this.getEdgesFromBlock(block, camera, width, height));
    }

    for (const merged of mergedMeshes) {
      if (!merged.mesh.visible) continue;
      allEdges.push(...this.getEdgesFromMerged(merged, camera, width, height));
    }

    // Render based on style
    switch (this.style) {
      case 'sketch':
        this.drawSketchEdges(ctx, allEdges, colors);
        break;
      case 'ink':
        this.drawInkEdges(ctx, allEdges, colors);
        break;
      case 'blueprint':
        this.drawBlueprintEdges(ctx, allEdges, colors);
        break;
      case 'comic':
        this.drawComicEdges(ctx, allEdges, colors);
        break;
      case 'saturated':
        this.drawSaturatedEdges(ctx, allEdges, colors);
        break;
      case 'neon':
        this.drawNeonEdges(ctx, allEdges, colors);
        break;
      case 'scifi':
        this.drawScifiEdges(ctx, allEdges, colors);
        break;
      case 'watercolor':
        this.drawWatercolorEdges(ctx, allEdges, colors);
        break;
      case 'noir':
        this.drawNoirEdges(ctx, allEdges, colors);
        break;
      case 'synthwave':
        this.drawSynthwaveEdges(ctx, allEdges, colors);
        break;
      default:
        this.drawCleanEdges(ctx, allEdges, colors);
    }
  }

  // Clean style - simple solid lines
  drawCleanEdges(ctx, edges, colors) {
    ctx.strokeStyle = colors.fg;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();
  }

  // Sketch style - wobbly hand-drawn lines
  drawSketchEdges(ctx, edges, colors) {
    ctx.strokeStyle = colors.fg;

    for (const edge of edges) {
      // Draw multiple slightly offset strokes
      for (let pass = 0; pass < 2; pass++) {
        ctx.lineWidth = this.lineWidth * (0.8 + Math.random() * 0.4);
        ctx.beginPath();

        const segments = 8;
        const dx = (edge.x2 - edge.x1) / segments;
        const dy = (edge.y2 - edge.y1) / segments;

        ctx.moveTo(
          edge.x1 + this.sketchNoise(edge.x1, edge.y1, pass) * 2,
          edge.y1 + this.sketchNoise(edge.y1, edge.x1, pass) * 2
        );

        for (let i = 1; i <= segments; i++) {
          const x = edge.x1 + dx * i;
          const y = edge.y1 + dy * i;
          const wobble = this.lineWidth * 0.5;

          ctx.lineTo(
            x + this.sketchNoise(x, y, pass + i) * wobble,
            y + this.sketchNoise(y, x, pass + i) * wobble
          );
        }

        ctx.stroke();
      }
    }
  }

  // Ink style - variable width, bold strokes
  drawInkEdges(ctx, edges, colors) {
    ctx.strokeStyle = colors.fg;
    ctx.fillStyle = colors.fg;

    for (const edge of edges) {
      const length = Math.sqrt(
        Math.pow(edge.x2 - edge.x1, 2) + Math.pow(edge.y2 - edge.y1, 2)
      );

      // Variable width based on position
      const segments = Math.max(4, Math.floor(length / 10));
      const dx = (edge.x2 - edge.x1) / segments;
      const dy = (edge.y2 - edge.y1) / segments;

      ctx.beginPath();

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = edge.x1 + dx * i;
        const y = edge.y1 + dy * i;

        // Width varies - thicker in middle, tapered at ends
        const widthMod = Math.sin(t * Math.PI);
        const width = this.lineWidth * (0.5 + widthMod * 1.5);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineWidth = width;
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y);
        }
      }
    }
  }

  // Blueprint style - technical drawing
  drawBlueprintEdges(ctx, edges, colors) {
    // Draw edges with slight glow effect
    ctx.shadowColor = colors.fg;
    ctx.shadowBlur = 2;
    ctx.strokeStyle = colors.fg;
    ctx.lineWidth = this.lineWidth * 0.8;

    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();

    ctx.shadowBlur = 0;

    // Draw vertex dots
    ctx.fillStyle = colors.accent;
    const vertices = new Set();
    for (const edge of edges) {
      vertices.add(`${Math.round(edge.x1)},${Math.round(edge.y1)}`);
      vertices.add(`${Math.round(edge.x2)},${Math.round(edge.y2)}`);
    }

    for (const v of vertices) {
      const [x, y] = v.split(',').map(Number);
      ctx.beginPath();
      ctx.arc(x, y, this.lineWidth, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Comic style - bold outlines
  drawComicEdges(ctx, edges, colors) {
    // Outer thick stroke
    ctx.strokeStyle = colors.fg;
    ctx.lineWidth = this.lineWidth * 2;
    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();

    // Inner highlight
    ctx.strokeStyle = colors.bg;
    ctx.lineWidth = this.lineWidth * 0.5;
    ctx.beginPath();
    for (const edge of edges) {
      const offsetX = 1;
      const offsetY = -1;
      ctx.moveTo(edge.x1 + offsetX, edge.y1 + offsetY);
      ctx.lineTo(edge.x2 + offsetX, edge.y2 + offsetY);
    }
    ctx.stroke();
  }

  // Saturated style - thin clean lines, full color preserved
  drawSaturatedEdges(ctx, edges, colors) {
    ctx.strokeStyle = colors.fg;
    ctx.lineWidth = this.lineWidth * 0.75;
    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();
  }

  // Neon style - glowing edges
  drawNeonEdges(ctx, edges, colors) {
    // Outer glow
    ctx.shadowColor = colors.fg;
    ctx.shadowBlur = 15;
    ctx.strokeStyle = colors.fg;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();

    // Inner bright core
    ctx.shadowBlur = 8;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = this.lineWidth * 0.3;
    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();

    // Accent glow on some edges
    ctx.shadowColor = colors.accent;
    ctx.shadowBlur = 12;
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = this.lineWidth * 0.8;
    ctx.beginPath();
    let count = 0;
    for (const edge of edges) {
      if (count++ % 3 === 0) { // Every 3rd edge in accent color
        ctx.moveTo(edge.x1, edge.y1);
        ctx.lineTo(edge.x2, edge.y2);
      }
    }
    ctx.stroke();

    ctx.shadowBlur = 0;
  }

  // Sci-fi style - technical with circuit-like appearance
  drawScifiEdges(ctx, edges, colors) {
    // Main edges with slight glow
    ctx.shadowColor = colors.fg;
    ctx.shadowBlur = 3;
    ctx.strokeStyle = colors.fg;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw small circles at vertices (circuit nodes)
    ctx.fillStyle = colors.accent;
    const vertices = new Set();
    for (const edge of edges) {
      vertices.add(`${Math.round(edge.x1)},${Math.round(edge.y1)}`);
      vertices.add(`${Math.round(edge.x2)},${Math.round(edge.y2)}`);
    }
    for (const v of vertices) {
      const [x, y] = v.split(',').map(Number);
      ctx.beginPath();
      ctx.arc(x, y, this.lineWidth * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Watercolor style - soft, feathered edges
  drawWatercolorEdges(ctx, edges, colors) {
    // Multiple soft passes
    for (let pass = 0; pass < 3; pass++) {
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = colors.fg;
      ctx.lineWidth = this.lineWidth * (2 - pass * 0.5);
      ctx.beginPath();
      for (const edge of edges) {
        const wobble = 2;
        ctx.moveTo(
          edge.x1 + (Math.random() - 0.5) * wobble,
          edge.y1 + (Math.random() - 0.5) * wobble
        );
        ctx.lineTo(
          edge.x2 + (Math.random() - 0.5) * wobble,
          edge.y2 + (Math.random() - 0.5) * wobble
        );
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  // Noir style - high contrast stark lines
  drawNoirEdges(ctx, edges, colors) {
    // Thick dramatic strokes
    ctx.strokeStyle = colors.fg;
    ctx.lineWidth = this.lineWidth * 1.5;
    ctx.beginPath();
    for (const edge of edges) {
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
    }
    ctx.stroke();
  }

  // Synthwave style - 80s retro gradient lines
  drawSynthwaveEdges(ctx, edges, colors) {
    // Glow effect
    ctx.shadowColor = colors.fg;
    ctx.shadowBlur = 8;

    for (const edge of edges) {
      // Create gradient along edge
      const gradient = ctx.createLinearGradient(edge.x1, edge.y1, edge.x2, edge.y2);
      gradient.addColorStop(0, colors.fg);
      gradient.addColorStop(0.5, colors.accent);
      gradient.addColorStop(1, colors.fg);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.moveTo(edge.x1, edge.y1);
      ctx.lineTo(edge.x2, edge.y2);
      ctx.stroke();
    }

    ctx.shadowBlur = 0;
  }

  // Draw crosshatch shading for a triangle
  drawCrosshatchTriangle(ctx, tri, luminance, colors) {
    // Fill with background first
    ctx.fillStyle = colors.bg;
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.fill();

    // Clip to triangle
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.clip();

    // Density based on darkness
    const density = Math.floor((1 - luminance) * 4); // 0-4 levels

    ctx.strokeStyle = colors.fg;
    ctx.lineWidth = 1;

    // Get bounding box
    const minX = Math.min(tri.points[0].x, tri.points[1].x, tri.points[2].x);
    const maxX = Math.max(tri.points[0].x, tri.points[1].x, tri.points[2].x);
    const minY = Math.min(tri.points[0].y, tri.points[1].y, tri.points[2].y);
    const maxY = Math.max(tri.points[0].y, tri.points[1].y, tri.points[2].y);

    const spacing = 8 - density * 1.5;

    // First direction hatching (/)
    if (density >= 1) {
      ctx.beginPath();
      for (let i = minX - (maxY - minY); i < maxX + (maxY - minY); i += spacing) {
        ctx.moveTo(i, maxY);
        ctx.lineTo(i + (maxY - minY), minY);
      }
      ctx.stroke();
    }

    // Second direction hatching (\)
    if (density >= 2) {
      ctx.beginPath();
      for (let i = minX - (maxY - minY); i < maxX + (maxY - minY); i += spacing) {
        ctx.moveTo(i, minY);
        ctx.lineTo(i + (maxY - minY), maxY);
      }
      ctx.stroke();
    }

    // Horizontal hatching
    if (density >= 3) {
      ctx.beginPath();
      for (let y = minY; y < maxY; y += spacing * 1.5) {
        ctx.moveTo(minX, y);
        ctx.lineTo(maxX, y);
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  // Draw comic-style halftone shading
  drawComicTriangle(ctx, tri, luminance, colors) {
    // Fill background
    ctx.fillStyle = colors.bg;
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.fill();

    // If dark enough, add dots
    if (luminance < 0.7) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(tri.points[0].x, tri.points[0].y);
      ctx.lineTo(tri.points[1].x, tri.points[1].y);
      ctx.lineTo(tri.points[2].x, tri.points[2].y);
      ctx.closePath();
      ctx.clip();

      ctx.fillStyle = colors.fg;

      const minX = Math.min(tri.points[0].x, tri.points[1].x, tri.points[2].x);
      const maxX = Math.max(tri.points[0].x, tri.points[1].x, tri.points[2].x);
      const minY = Math.min(tri.points[0].y, tri.points[1].y, tri.points[2].y);
      const maxY = Math.max(tri.points[0].y, tri.points[1].y, tri.points[2].y);

      const dotSize = 2 + (1 - luminance) * 3;
      const spacing = 8;

      for (let x = minX; x < maxX; x += spacing) {
        for (let y = minY; y < maxY; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    }
  }

  // Saturated triangle - preserve and boost original colors
  drawSaturatedTriangle(ctx, tri, colors) {
    // Parse hex color and boost saturation
    const hex = tri.color.replace('#', '');
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    // Boost saturation by increasing difference from gray
    const gray = (r + g + b) / 3;
    const boost = 1.3;
    r = Math.min(255, Math.max(0, Math.round(gray + (r - gray) * boost)));
    g = Math.min(255, Math.max(0, Math.round(gray + (g - gray) * boost)));
    b = Math.min(255, Math.max(0, Math.round(gray + (b - gray) * boost)));

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.fill();
  }

  // Neon triangle - dark fill with edge emphasis
  drawNeonTriangle(ctx, tri, luminance, colors) {
    // Dark tinted version of original color
    const hex = tri.color.replace('#', '');
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    // Darken significantly
    r = Math.round(r * 0.15);
    g = Math.round(g * 0.15);
    b = Math.round(b * 0.15);

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.fill();
  }

  // Watercolor triangle - soft blended fill
  drawWatercolorTriangle(ctx, tri, colors) {
    const hex = tri.color.replace('#', '');
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    // Soften colors (desaturate slightly, lighten)
    const gray = (r + g + b) / 3;
    r = Math.round(r * 0.7 + gray * 0.3 + 30);
    g = Math.round(g * 0.7 + gray * 0.3 + 30);
    b = Math.round(b * 0.7 + gray * 0.3 + 30);
    r = Math.min(255, r);
    g = Math.min(255, g);
    b = Math.min(255, b);

    ctx.globalAlpha = 0.7;
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Noir triangle - stark black and white
  drawNoirTriangle(ctx, tri, luminance, colors) {
    // High contrast threshold
    const threshold = 0.45;
    ctx.fillStyle = luminance > threshold ? colors.bg : colors.fg;
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.fill();
  }

  // Synthwave triangle - retro gradient tint
  drawSynthwaveTriangle(ctx, tri, colors) {
    const hex = tri.color.replace('#', '');
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    // Shift colors toward purple/cyan palette
    const luminance = (r + g + b) / 3 / 255;
    if (luminance > 0.5) {
      // Bright: shift toward pink/cyan
      r = Math.min(255, Math.round(r * 0.7 + 100));
      g = Math.round(g * 0.5);
      b = Math.min(255, Math.round(b * 0.7 + 80));
    } else {
      // Dark: shift toward deep purple
      r = Math.round(r * 0.4 + 40);
      g = Math.round(g * 0.3);
      b = Math.min(255, Math.round(b * 0.5 + 60));
    }

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.fill();
  }

  // Scifi triangle - tech-style fill
  drawScifiTriangle(ctx, tri, luminance, colors) {
    const hex = tri.color.replace('#', '');
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    // Shift toward blue-green tech colors
    r = Math.round(r * 0.4);
    g = Math.min(255, Math.round(g * 0.6 + 30));
    b = Math.min(255, Math.round(b * 0.7 + 50));

    ctx.globalAlpha = 0.85;
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.beginPath();
    ctx.moveTo(tri.points[0].x, tri.points[0].y);
    ctx.lineTo(tri.points[1].x, tri.points[1].y);
    ctx.lineTo(tri.points[2].x, tri.points[2].y);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  }


  // Draw blueprint grid background
  drawBlueprintGrid(ctx, width, height, colors) {
    ctx.strokeStyle = colors.accent;
    ctx.globalAlpha = 0.3;
    ctx.lineWidth = 0.5;

    const gridSize = 20;

    ctx.beginPath();
    for (let x = 0; x < width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Major grid
    ctx.globalAlpha = 0.5;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < width; x += gridSize * 5) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y < height; y += gridSize * 5) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    ctx.globalAlpha = 1;
  }

  // Draw paper texture for sketch
  drawPaperTexture(ctx, width, height) {
    ctx.globalAlpha = 0.03;
    ctx.fillStyle = '#000000';

    for (let i = 0; i < 5000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.fillRect(x, y, 1, 1);
    }

    ctx.globalAlpha = 1;
  }

  // Scifi background - scan lines and tech grid
  drawScifiBackground(ctx, width, height, colors) {
    // Horizontal scan lines
    ctx.strokeStyle = colors.fg;
    ctx.globalAlpha = 0.05;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let y = 0; y < height; y += 3) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Subtle grid
    ctx.globalAlpha = 0.1;
    ctx.lineWidth = 0.5;
    const gridSize = 40;
    ctx.beginPath();
    for (let x = 0; x < width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Corner HUD elements
    ctx.globalAlpha = 0.3;
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 2;
    const cornerSize = 50;

    // Top-left corner
    ctx.beginPath();
    ctx.moveTo(10, 10 + cornerSize);
    ctx.lineTo(10, 10);
    ctx.lineTo(10 + cornerSize, 10);
    ctx.stroke();

    // Top-right corner
    ctx.beginPath();
    ctx.moveTo(width - 10 - cornerSize, 10);
    ctx.lineTo(width - 10, 10);
    ctx.lineTo(width - 10, 10 + cornerSize);
    ctx.stroke();

    // Bottom-left corner
    ctx.beginPath();
    ctx.moveTo(10, height - 10 - cornerSize);
    ctx.lineTo(10, height - 10);
    ctx.lineTo(10 + cornerSize, height - 10);
    ctx.stroke();

    // Bottom-right corner
    ctx.beginPath();
    ctx.moveTo(width - 10 - cornerSize, height - 10);
    ctx.lineTo(width - 10, height - 10);
    ctx.lineTo(width - 10, height - 10 - cornerSize);
    ctx.stroke();

    ctx.globalAlpha = 1;
  }

  // Synthwave background - retro grid and gradient
  drawSynthwaveBackground(ctx, width, height, colors) {
    // Gradient sky
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#0f0f23');
    gradient.addColorStop(0.5, '#1a1a2e');
    gradient.addColorStop(1, '#16213e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Perspective grid on bottom half
    ctx.strokeStyle = colors.accent;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1;

    const horizon = height * 0.6;
    const gridLines = 15;

    // Horizontal lines (receding)
    for (let i = 0; i <= gridLines; i++) {
      const t = i / gridLines;
      const y = horizon + (height - horizon) * Math.pow(t, 0.7);
      ctx.globalAlpha = 0.2 + t * 0.3;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Vertical lines (converging)
    ctx.globalAlpha = 0.3;
    const vanishX = width / 2;
    for (let i = -gridLines; i <= gridLines; i++) {
      const baseX = vanishX + i * 80;
      ctx.beginPath();
      ctx.moveTo(vanishX, horizon);
      ctx.lineTo(baseX, height);
      ctx.stroke();
    }

    // Sun/circle
    const sunY = horizon - 60;
    const sunRadius = 50;
    const sunGradient = ctx.createRadialGradient(
      width / 2, sunY, 0,
      width / 2, sunY, sunRadius
    );
    sunGradient.addColorStop(0, '#ff6ec7');
    sunGradient.addColorStop(0.7, '#ff6ec7');
    sunGradient.addColorStop(1, 'transparent');
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = sunGradient;
    ctx.beginPath();
    ctx.arc(width / 2, sunY, sunRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
  }

  // Neon background - dark with ambient glow
  drawNeonBackground(ctx, width, height, colors) {
    // Very dark base
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    // Subtle vignette
    const vignette = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, Math.max(width, height) * 0.7
    );
    vignette.addColorStop(0, 'transparent');
    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);

    // Random small glow spots
    ctx.globalAlpha = 0.05;
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = 20 + Math.random() * 40;
      const spotGrad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      spotGrad.addColorStop(0, i % 2 === 0 ? colors.fg : colors.accent);
      spotGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = spotGrad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }

  // ASCII background - terminal-like CRT effect
  drawAsciiBackground(ctx, width, height, colors) {
    // Subtle scanlines
    ctx.globalAlpha = 0.05;
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 1;

    for (let y = 0; y < height; y += 4) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // CRT edge vignette
    const vignette = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, Math.max(width, height) * 0.6
    );
    vignette.addColorStop(0, 'transparent');
    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
    ctx.globalAlpha = 1;
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
  }

  // Render ASCII mode - VLC-style ASCII art filter
  renderAsciiMode(ctx, blocks, mergedMeshes, camera, width, height, colors) {
    // ASCII character ramp from dark to light (like VLC)
    // Using characters with more visual density variation
    const asciiRamp = ' .:-=+*#%@';

    // Apply quality settings to character size
    const qualityMult = this.getQualityMultiplier();
    const charWidth = Math.max(6, Math.floor(12 / qualityMult));
    const charHeight = Math.max(8, Math.floor(16 / qualityMult));
    const fontSize = Math.max(8, Math.floor(14 / qualityMult));

    // Setup text rendering
    ctx.font = `bold ${fontSize}px monospace`;
    ctx.fillStyle = colors.fg;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Create an offscreen canvas to render the 3D scene
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;
    const offscreenCtx = offscreenCanvas.getContext('2d');

    // Render triangles to offscreen canvas first
    const triangles = [];

    for (const block of blocks) {
      if (!block.mesh.visible) continue;
      this.collectTriangles(block, camera, triangles);
    }

    for (const merged of mergedMeshes) {
      if (!merged.mesh.visible) continue;
      this.collectTrianglesFromMesh(merged.mesh, merged.color, camera, triangles);
    }

    // Sort triangles by depth (back to front)
    triangles.sort((a, b) => b.depth - a.depth);

    // Draw triangles to offscreen canvas
    for (const tri of triangles) {
      const luminance = this.calculateLuminance(tri.color);
      const gray = Math.round(luminance * 255);

      offscreenCtx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      offscreenCtx.beginPath();
      offscreenCtx.moveTo(tri.points[0].x, tri.points[0].y);
      offscreenCtx.lineTo(tri.points[1].x, tri.points[1].y);
      offscreenCtx.lineTo(tri.points[2].x, tri.points[2].y);
      offscreenCtx.closePath();
      offscreenCtx.fill();
    }

    // Get pixel data from offscreen canvas
    const imageData = offscreenCtx.getImageData(0, 0, width, height);
    const pixels = imageData.data;

    // Process each character cell
    const cols = Math.floor(width / charWidth);
    const rows = Math.floor(height / charHeight);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cellX = col * charWidth;
        const cellY = row * charHeight;
        const x = cellX + charWidth / 2;
        const y = cellY + charHeight / 2;

        // Calculate average brightness and color in this cell
        let totalBrightness = 0;
        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        let pixelCount = 0;

        for (let dy = 0; dy < charHeight && (cellY + dy) < height; dy++) {
          for (let dx = 0; dx < charWidth && (cellX + dx) < width; dx++) {
            const pixelIndex = ((cellY + dy) * width + (cellX + dx)) * 4;
            const r = pixels[pixelIndex];
            const g = pixels[pixelIndex + 1];
            const b = pixels[pixelIndex + 2];

            totalR += r;
            totalG += g;
            totalB += b;

            // Calculate luminance
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            totalBrightness += luminance;
            pixelCount++;
          }
        }

        const avgBrightness = totalBrightness / pixelCount;

        // Skip completely dark areas
        if (avgBrightness < 0.01) continue;

        // Enhance contrast - apply power curve to make variations more visible
        const enhancedBrightness = Math.pow(avgBrightness, 0.7);

        // Map brightness to ASCII character
        const charIndex = Math.floor(enhancedBrightness * (asciiRamp.length - 1));
        const char = asciiRamp[charIndex];

        // Determine character color based on grayscale setting
        if (this.grayscale) {
          // Grayscale mode: use terminal green
          ctx.fillStyle = colors.fg;
        } else {
          // Color mode: use average color from the cell
          const avgR = Math.round(totalR / pixelCount);
          const avgG = Math.round(totalG / pixelCount);
          const avgB = Math.round(totalB / pixelCount);

          // Boost saturation for more vibrant colors
          const gray = (avgR + avgG + avgB) / 3;
          const boost = 1.3;
          const boostedR = Math.min(255, Math.max(0, Math.round(gray + (avgR - gray) * boost)));
          const boostedG = Math.min(255, Math.max(0, Math.round(gray + (avgG - gray) * boost)));
          const boostedB = Math.min(255, Math.max(0, Math.round(gray + (avgB - gray) * boost)));

          ctx.fillStyle = `rgb(${boostedR}, ${boostedG}, ${boostedB})`;
        }

        // Draw the character
        ctx.fillText(char, x, y);
      }
    }
  }


  // Watercolor background - subtle texture
  drawWatercolorBackground(ctx, width, height, colors) {
    // Soft paper-like noise
    ctx.globalAlpha = 0.02;
    ctx.fillStyle = colors.fg;

    for (let i = 0; i < 3000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Subtle color washes
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = 100 + Math.random() * 200;
      const washGrad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      washGrad.addColorStop(0, colors.accent);
      washGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = washGrad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }

  // Noise function for sketch wobble
  sketchNoise(x, y, seed) {
    const n = Math.sin(x * 12.9898 + y * 78.233 + seed + this.noiseSeed) * 43758.5453;
    return (n - Math.floor(n)) * 2 - 1;
  }

  // Get edges from a block
  getEdgesFromBlock(block, camera, width, height) {
    const edges = [];
    const mesh = block.mesh;

    if (block.edges) {
      return this.extractEdges(block.edges.geometry, mesh.matrixWorld, camera, width, height);
    } else {
      const edgesGeom = new THREE.EdgesGeometry(mesh.geometry, 30);
      const result = this.extractEdges(edgesGeom, mesh.matrixWorld, camera, width, height);
      edgesGeom.dispose();
      return result;
    }
  }

  // Get edges from merged mesh
  getEdgesFromMerged(merged, camera, width, height) {
    if (merged.edges) {
      return this.extractEdges(merged.edges.geometry, merged.mesh.matrixWorld, camera, width, height);
    } else {
      const edgesGeom = new THREE.EdgesGeometry(merged.mesh.geometry, 30);
      const result = this.extractEdges(edgesGeom, merged.mesh.matrixWorld, camera, width, height);
      edgesGeom.dispose();
      return result;
    }
  }

  extractEdges(geometry, matrixWorld, camera, width, height) {
    const edges = [];
    const posAttr = geometry.getAttribute('position');
    if (!posAttr) return edges;

    for (let i = 0; i < posAttr.count; i += 2) {
      const v0 = new THREE.Vector3(
        posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)
      ).applyMatrix4(matrixWorld);

      const v1 = new THREE.Vector3(
        posAttr.getX(i + 1), posAttr.getY(i + 1), posAttr.getZ(i + 1)
      ).applyMatrix4(matrixWorld);

      const p0 = v0.project(camera);
      const p1 = v1.project(camera);

      if (p0.z > 1 && p1.z > 1) continue;

      edges.push({
        x1: (p0.x + 1) * width / 2,
        y1: (-p0.y + 1) * height / 2,
        x2: (p1.x + 1) * width / 2,
        y2: (-p1.y + 1) * height / 2
      });
    }

    return edges;
  }

  collectTriangles(block, camera, triangles) {
    const mesh = block.mesh;
    mesh.updateMatrixWorld();

    const geometry = mesh.geometry;
    const posAttr = geometry.getAttribute('position');
    if (!posAttr) return;

    const index = geometry.index;
    const matrixWorld = mesh.matrixWorld;

    const cameraDir = new THREE.Vector3();
    camera.getWorldDirection(cameraDir);

    const getColor = (faceIndex) => {
      if (Array.isArray(mesh.material)) {
        const groups = geometry.groups;
        if (groups && groups.length > 0) {
          for (const group of groups) {
            if (faceIndex * 3 >= group.start && faceIndex * 3 < group.start + group.count) {
              const mat = mesh.material[group.materialIndex];
              return '#' + mat.color.getHexString();
            }
          }
        }
        return block.color;
      } else {
        return block.color;
      }
    };

    const processTriangle = (i0, i1, i2, faceIndex) => {
      const v0 = this._tempVec3.set(
        posAttr.getX(i0), posAttr.getY(i0), posAttr.getZ(i0)
      ).applyMatrix4(matrixWorld);

      const v1 = this._tempVec3_2.set(
        posAttr.getX(i1), posAttr.getY(i1), posAttr.getZ(i1)
      ).applyMatrix4(matrixWorld);

      const v2 = this._tempVec3_3.set(
        posAttr.getX(i2), posAttr.getY(i2), posAttr.getZ(i2)
      ).applyMatrix4(matrixWorld);

      const edge1 = new THREE.Vector3().subVectors(v1, v0);
      const edge2 = new THREE.Vector3().subVectors(v2, v0);
      const normal = new THREE.Vector3().crossVectors(edge1, edge2).normalize();

      if (normal.dot(cameraDir) > 0.1) return;

      const p0 = v0.clone().project(camera);
      const p1 = new THREE.Vector3().copy(v1).project(camera);
      const p2 = new THREE.Vector3().copy(v2).project(camera);

      if (p0.z > 1 || p1.z > 1 || p2.z > 1) return;

      const centerDepth = (v0.z + v1.z + v2.z) / 3;

      triangles.push({
        points: [
          { x: (p0.x + 1) * window.innerWidth / 2, y: (-p0.y + 1) * window.innerHeight / 2 },
          { x: (p1.x + 1) * window.innerWidth / 2, y: (-p1.y + 1) * window.innerHeight / 2 },
          { x: (p2.x + 1) * window.innerWidth / 2, y: (-p2.y + 1) * window.innerHeight / 2 }
        ],
        depth: centerDepth,
        color: getColor(faceIndex),
        normal: normal.clone()
      });
    };

    if (index) {
      for (let i = 0; i < index.count; i += 3) {
        const faceIndex = Math.floor(i / 3);
        processTriangle(index.getX(i), index.getX(i + 1), index.getX(i + 2), faceIndex);
      }
    } else {
      for (let i = 0; i < posAttr.count; i += 3) {
        const faceIndex = Math.floor(i / 3);
        processTriangle(i, i + 1, i + 2, faceIndex);
      }
    }
  }

  collectTrianglesFromMesh(mesh, defaultColor, camera, triangles) {
    mesh.updateMatrixWorld();

    const geometry = mesh.geometry;
    const posAttr = geometry.getAttribute('position');
    const colorAttr = geometry.getAttribute('color');
    if (!posAttr) return;

    const index = geometry.index;
    const matrixWorld = mesh.matrixWorld;

    const cameraDir = new THREE.Vector3();
    camera.getWorldDirection(cameraDir);

    const processTriangle = (i0, i1, i2) => {
      const v0 = this._tempVec3.set(
        posAttr.getX(i0), posAttr.getY(i0), posAttr.getZ(i0)
      ).applyMatrix4(matrixWorld);

      const v1 = this._tempVec3_2.set(
        posAttr.getX(i1), posAttr.getY(i1), posAttr.getZ(i1)
      ).applyMatrix4(matrixWorld);

      const v2 = this._tempVec3_3.set(
        posAttr.getX(i2), posAttr.getY(i2), posAttr.getZ(i2)
      ).applyMatrix4(matrixWorld);

      const edge1 = new THREE.Vector3().subVectors(v1, v0);
      const edge2 = new THREE.Vector3().subVectors(v2, v0);
      const normal = new THREE.Vector3().crossVectors(edge1, edge2).normalize();

      if (normal.dot(cameraDir) > 0.1) return;

      const p0 = v0.clone().project(camera);
      const p1 = new THREE.Vector3().copy(v1).project(camera);
      const p2 = new THREE.Vector3().copy(v2).project(camera);

      if (p0.z > 1 || p1.z > 1 || p2.z > 1) return;

      const centerDepth = (v0.z + v1.z + v2.z) / 3;

      let color = defaultColor;
      if (colorAttr) {
        const r = Math.round(colorAttr.getX(i0) * 255);
        const g = Math.round(colorAttr.getY(i0) * 255);
        const b = Math.round(colorAttr.getZ(i0) * 255);
        color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      }

      triangles.push({
        points: [
          { x: (p0.x + 1) * window.innerWidth / 2, y: (-p0.y + 1) * window.innerHeight / 2 },
          { x: (p1.x + 1) * window.innerWidth / 2, y: (-p1.y + 1) * window.innerHeight / 2 },
          { x: (p2.x + 1) * window.innerWidth / 2, y: (-p2.y + 1) * window.innerHeight / 2 }
        ],
        depth: centerDepth,
        color: color,
        normal: normal.clone()
      });
    };

    if (index) {
      for (let i = 0; i < index.count; i += 3) {
        processTriangle(index.getX(i), index.getX(i + 1), index.getX(i + 2));
      }
    } else {
      for (let i = 0; i < posAttr.count; i += 3) {
        processTriangle(i, i + 1, i + 2);
      }
    }
  }

  calculateLuminance(hexColor) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    return 0.299 * r + 0.587 * g + 0.114 * b;
  }

  capturePNG(filename = 'render.png') {
    const wasEnabled = this.enabled;
    if (!wasEnabled) {
      this.createOverlay();
      this.render();
    }

    const canvas = this.overlayCanvas;
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();

    if (!wasEnabled) {
      this.removeOverlay();
    }
  }

  exportSVG(filename = 'render.svg') {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const colors = this.getColors();

    // Basic SVG with edges only (complex styles don't translate well to SVG)
    let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${colors.bg}"/>
  <g stroke="${colors.fg}" stroke-width="${this.lineWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none">
`;

    const camera = this.engine.camera;
    camera.updateMatrixWorld();

    const blocks = this.blockManager.getAllBlocks();
    const mergedMeshes = this.blockManager.getMergedMeshes ? this.blockManager.getMergedMeshes() : [];

    for (const block of blocks) {
      if (!block.mesh.visible) continue;
      const edges = this.getEdgesFromBlock(block, camera, width, height);
      for (const edge of edges) {
        svg += `    <line x1="${edge.x1.toFixed(2)}" y1="${edge.y1.toFixed(2)}" x2="${edge.x2.toFixed(2)}" y2="${edge.y2.toFixed(2)}"/>\n`;
      }
    }

    for (const merged of mergedMeshes) {
      if (!merged.mesh.visible) continue;
      const edges = this.getEdgesFromMerged(merged, camera, width, height);
      for (const edge of edges) {
        svg += `    <line x1="${edge.x1.toFixed(2)}" y1="${edge.y1.toFixed(2)}" x2="${edge.x2.toFixed(2)}" y2="${edge.y2.toFixed(2)}"/>\n`;
      }
    }

    svg += `  </g>\n</svg>`;

    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }

  update() {
    if (this.enabled) {
      this.render();
    }
  }
}
