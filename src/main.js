import * as THREE from 'three';
import { Engine } from './core/Engine.js';
import { Grid } from './core/Grid.js';
import { BlockManager } from './core/BlockManager.js';
import { InputManager } from './core/InputManager.js';
import { GhostBlock } from './blocks/GhostBlock.js';
import { BLOCK_TYPES } from './blocks/Block.js';
import { BLOCK_CATEGORIES, BLOCK_DISPLAY } from './blocks/BlockTypes.js';
import { TextureManager } from './texturing/TextureManager.js';
import { FacePainter } from './texturing/FacePainter.js';
import { History, createAddBlockAction, createRemoveBlockAction, createPaintFaceColorAction, createPaintBlockColorAction, createBatchPaintAction, createFlattenAction } from './utils/History.js';
import { Animator } from './animation/Animator.js';
import { ProjectManager } from './utils/ProjectManager.js';
import { GLTFExporter } from './export/GLTFExporter.js';
import { LightBaker } from './lighting/LightBaker.js';
import { TextureBaker } from './lighting/TextureBaker.js';
import { getTemplateList, getTemplate, getTemplateCategories } from './templates/Templates.js';
import { generateShape } from './tools/ShapeBrush.js';
import { LayerManager } from './core/LayerManager.js';
import { SymmetryTool } from './tools/SymmetryTool.js';
import { CameraBookmarks } from './core/CameraBookmarks.js';
import { CameraPathAnimator } from './core/CameraPathAnimator.js';
import { TattooRenderer } from './export/TattooRenderer.js';
import { GPUStyleRenderer } from './export/GPUStyleRenderer.js';
import { FrameSequencer } from './export/FrameSequencer.js';
import { BlockFlattener } from './tools/BlockFlattener.js';
import { GenerativeScatter, SCATTER_ALGORITHMS } from './tools/GenerativeScatter.js';
import { SCATTER_PRESETS } from './tools/ScatterPresets.js';
import JSZip from 'jszip';

// Utility: Debounce function to delay execution
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

class App {
  constructor() {
    // DOM Elements
    this.canvas = document.getElementById('viewport');
    this.gridPosEl = document.getElementById('grid-pos');
    this.blockCountEl = document.getElementById('block-count');
    this.colorInput = document.getElementById('current-color');
    this.colorPalette = document.getElementById('color-palette');
    this.selectionProps = document.getElementById('selection-props');
    this.fileInput = document.getElementById('file-input');

    // Create debounced auto-save (2 second delay)
    this.debouncedAutoSave = debounce(() => this.autoSave(), 2000);

    // Core systems
    this.engine = new Engine(this.canvas);
    this.grid = new Grid(this.engine.scene, { gridSize: 20, cellSize: 1 });
    this.blockManager = new BlockManager(this.engine.scene);
    this.ghostBlock = new GhostBlock(this.engine.scene);
    this.history = new History();

    // Texturing
    this.textureManager = new TextureManager();
    this.facePainter = new FacePainter(this.textureManager);

    // Animation
    this.animator = new Animator(this.blockManager);

    // Project management
    this.projectManager = new ProjectManager(this.blockManager, this.animator, this.textureManager);
    this.projectManager.onError = (message) => this.showNotification(message, 'error');
    this.exporter = new GLTFExporter();

    // Layer management
    this.layerManager = new LayerManager();
    this.layerManager.onLayerChange = () => this.updateLayerUI();
    this.projectManager.setLayerManager(this.layerManager);

    // Symmetry tool
    this.symmetryTool = new SymmetryTool(this.blockManager);

    // Camera bookmarks
    this.cameraBookmarks = new CameraBookmarks(this.engine.camera, this.engine.controls);
    this.cameraBookmarks.onBookmarksChange = () => this.updateCameraBookmarksUI();

    // Camera animation
    this.cameraPathAnimator = new CameraPathAnimator(
      this.engine.camera,
      this.engine.controls,
      this.cameraBookmarks
    );
    this.frameSequencer = new FrameSequencer(this.engine);

    // Make JSZip available globally for FrameSequencer
    window.JSZip = JSZip;

    this.lightBaker = new LightBaker();
    this.textureBaker = new TextureBaker();

    // Stylized renderer - GPU accelerated with CPU fallback
    this.useGPURenderer = true; // Toggle for GPU vs CPU rendering
    try {
      if (this.useGPURenderer) {
        this.tattooRenderer = new GPUStyleRenderer(this.engine, this.blockManager);
        console.log('Using GPU-accelerated style renderer');
      } else {
        this.tattooRenderer = new TattooRenderer(this.engine, this.blockManager);
        console.log('Using CPU style renderer');
      }
    } catch (e) {
      console.warn('GPU renderer failed, falling back to CPU:', e);
      this.tattooRenderer = new TattooRenderer(this.engine, this.blockManager);
    }

    // Block flattener for merging touching blocks
    this.blockFlattener = new BlockFlattener(this.blockManager);

    // Generative scatter tool for procedural structures
    this.scatterTool = new GenerativeScatter(this.blockManager);

    // Notifications container
    this.notificationsEl = document.getElementById('notifications');

    // Baked lighting data (for texture-based export)
    this.bakedTexture = null;
    this.bakedUVData = null;

    // Input
    this.inputManager = new InputManager(this.canvas, this.engine.camera);
    this.inputManager.setGridPlane(this.grid.getRaycastPlane());

    // State
    this.currentColor = '#5588cc';
    this.currentBlockType = 'cube';
    this.currentRotation = 0;
    this.clipboard = null;

    // Emissive state
    this.emissiveEnabled = false;
    this.emissiveColor = '#ffaa00';
    this.emissiveIntensity = 1.0;
    this.emissiveRadius = 3.0;

    // Edge display state
    this.showEdges = true;
    this.edgeOpacity = 0.3;

    // Shape brush state
    this.currentShape = 'sphere';
    this.shapeGhosts = []; // Array of ghost meshes for shape preview

    // Paint mode state
    this.paintMode = 'face'; // 'face' or 'block'

    // Block scale state (1 = normal, 2 = large 2x2 blocks)
    this.currentBlockScale = 1;

    // Setup
    this.setupCallbacks();
    this.setupToolbar();
    this.setupPaintMode();
    this.setupShapeBrush();
    this.setupMoveControls();
    this.setupColorPalette();
    this.setupEmissiveControls();
    this.setupEdgeControls();
    this.setupMenuBar();
    this.setupTimeline();
    this.setupLayerPanel();
    this.setupSymmetryTools();
    this.setupCameraBookmarks();
    this.setupCameraAnimation();
    this.setupTattooMode();
    this.setupScatterTool();
    this.setupKeyboardShortcuts();

    // Start render loop
    this.engine.onUpdate = (delta) => {
      this.animator.update(delta);
      // Note: GPU renderer handles its own render loop via engine.customRender
      // Only CPU renderer needs manual update() calls
      if (!this.useGPURenderer && this.tattooRenderer.update) {
        this.tattooRenderer.update();
      }
    };
    this.engine.start();

    // Load saved data from localStorage
    this.autoLoad();
  }

  setupCallbacks() {
    // Update raycast targets when blocks change and auto-save
    this.blockManager.onBlockCountChange = (count) => {
      this.blockCountEl.textContent = `Blocks: ${count}`;
      this.inputManager.setRaycastTargets(this.blockManager.getBlockMeshes());
      // Auto-save to localStorage (debounced to avoid excessive writes)
      this.debouncedAutoSave();
    };

    // History state change
    this.history.onChange = ({ canUndo, canRedo }) => {
      document.getElementById('btn-undo').disabled = !canUndo;
      document.getElementById('btn-redo').disabled = !canRedo;
    };
    this.history.notify();

    // Lower blocks that occupy bottom half of grid cell
    const LOWER_BLOCK_TYPES = ['slab', 'quarter', 'wedgeLow', 'wedgeFlat', 'wedgeCornerLow', 'wedgeCornerFlat', 'slabSlope', 'ledge', 'gutter', 'capital', 'base', 'channel', 'channelCorner', 'channelEnd'];

    // Adjust placement position based on block type and surface
    const getSmartPosition = (result, blockType) => {
      const pos = { x: result.placementPosition.x, y: result.placementPosition.y, z: result.placementPosition.z };

      // If placing on a fractional surface (like slab top at 0.5),
      // adjust Y so the new block sits ON TOP, not overlapping
      if (result.placementPosition.surfaceY !== undefined) {
        const surfaceY = result.placementPosition.surfaceY;
        const isFractional = surfaceY % 1 !== 0;

        if (isFractional) {
          // Always place on top of fractional surfaces
          pos.y = Math.ceil(surfaceY);
        }
      }
      return pos;
    };

    // Snap position to even coordinates for 2x scale mode
    const snapForScale = (pos, scale) => {
      if (scale <= 1) return pos;
      // For 2x blocks, snap to even coordinates so blocks align properly
      return {
        x: Math.floor(pos.x / scale) * scale,
        y: pos.y,  // Y stays the same for vertical stacking
        z: Math.floor(pos.z / scale) * scale
      };
    };

    // Handle mouse movement for ghost preview
    this.inputManager.onMouseMove = (result) => {
      if ((this.inputManager.currentTool === 'place') && result) {
        let pos = getSmartPosition(result, this.currentBlockType);
        pos = snapForScale(pos, this.currentBlockScale);

        this.ghostBlock.show();
        this.ghostBlock.setPosition(pos);
        this.ghostBlock.setBlockType(this.currentBlockType);
        this.ghostBlock.setRotation(this.currentRotation);

        // Check actual bounding box overlap instead of just grid position
        const wouldOverlap = this.blockManager.wouldOverlapAt(
          this.currentBlockType,
          pos,
          { w: 1, h: 1, d: 1 },
          null,
          this.currentBlockScale
        );
        this.ghostBlock.setValid(!wouldOverlap);

        this.gridPosEl.textContent = `Grid: ${pos.x}, ${pos.y}, ${pos.z}`;
      } else {
        this.ghostBlock.hide();
      }
    };

    // Track last placed position for shift-click line fill
    let lastPlacedPosition = null;

    // Get all grid positions - line for aligned points, rectangle for non-aligned
    const getFillPositions = (start, end) => {
      const positions = [];
      const dx = Math.abs(end.x - start.x);
      const dy = Math.abs(end.y - start.y);
      const dz = Math.abs(end.z - start.z);

      // Check if points are aligned on any axis (line fill)
      const alignedX = start.x === end.x;
      const alignedY = start.y === end.y;
      const alignedZ = start.z === end.z;

      // If at least 2 axes are aligned, do line fill (simple case)
      if ((alignedX && alignedY) || (alignedX && alignedZ) || (alignedY && alignedZ)) {
        // Line fill along the non-aligned axis
        const sx = start.x < end.x ? 1 : (start.x > end.x ? -1 : 0);
        const sy = start.y < end.y ? 1 : (start.y > end.y ? -1 : 0);
        const sz = start.z < end.z ? 1 : (start.z > end.z ? -1 : 0);
        const maxDist = Math.max(dx, dy, dz);

        for (let i = 0; i <= maxDist; i++) {
          positions.push({
            x: start.x + sx * i,
            y: start.y + sy * i,
            z: start.z + sz * i
          });
        }
      } else {
        // Rectangle/volume fill - iterate all positions in the bounding box
        const minX = Math.min(start.x, end.x);
        const maxX = Math.max(start.x, end.x);
        const minY = Math.min(start.y, end.y);
        const maxY = Math.max(start.y, end.y);
        const minZ = Math.min(start.z, end.z);
        const maxZ = Math.max(start.z, end.z);

        for (let x = minX; x <= maxX; x++) {
          for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
              positions.push({ x, y, z });
            }
          }
        }
      }
      return positions;
    };

    // Handle block placement
    this.inputManager.onPlace = (result, shiftKey) => {
      if (!result) return;

      // Check if current layer allows editing
      if (!this.canEditCurrentLayer()) {
        this.showNotification('Layer is locked or hidden', 'warning');
        return;
      }

      let pos = getSmartPosition(result, this.currentBlockType);
      pos = snapForScale(pos, this.currentBlockScale);

      // Shift-click: fill from last position to current (line or rectangle)
      if (shiftKey && lastPlacedPosition) {
        const positions = getFillPositions(lastPlacedPosition, pos);
        let placedAny = false;

        for (const linePos of positions) {
          // Skip if block already exists or would overlap
          if (this.blockManager.wouldOverlapAt(this.currentBlockType, linePos, { w: 1, h: 1, d: 1 }, null, this.currentBlockScale)) continue;

          const blockData = {
            type: this.currentBlockType,
            position: { ...linePos },
            color: this.currentColor,
            rotation: { x: 0, y: this.currentRotation, z: 0 },
            layerId: this.getActiveLayerId(),
            scale: this.currentBlockScale,
            emissive: {
              enabled: this.emissiveEnabled,
              color: this.emissiveColor,
              intensity: this.emissiveIntensity,
              radius: this.emissiveRadius
            }
          };

          const block = this.blockManager.addBlock(blockData);
          if (block) {
            this.history.push(createAddBlockAction(this.blockManager, blockData, block));
            placedAny = true;
          }
        }

        if (placedAny) {
          lastPlacedPosition = { ...pos };
        }
        return;
      }

      // Normal single block placement
      if (this.blockManager.wouldOverlapAt(this.currentBlockType, pos, { w: 1, h: 1, d: 1 }, null, this.currentBlockScale)) return;

      const blockData = {
        type: this.currentBlockType,
        position: pos,
        color: this.currentColor,
        rotation: { x: 0, y: this.currentRotation, z: 0 },
        layerId: this.getActiveLayerId(),
        scale: this.currentBlockScale,
        emissive: {
          enabled: this.emissiveEnabled,
          color: this.emissiveColor,
          intensity: this.emissiveIntensity,
          radius: this.emissiveRadius
        }
      };

      const block = this.blockManager.addBlock(blockData);
      if (block) {
        this.history.push(createAddBlockAction(this.blockManager, blockData, block));
        lastPlacedPosition = { ...pos };
      }
    };

    // Handle block deletion
    this.inputManager.onDelete = (block) => {
      if (block) {
        this.history.push(createRemoveBlockAction(this.blockManager, block));
        this.blockManager.removeBlock(block.id);
      }
    };

    // Handle block selection
    this.inputManager.onSelect = (block, shiftKey) => {
      if (shiftKey && block) {
        // Shift+click: toggle selection (add/remove from multi-selection)
        this.blockManager.toggleSelection(block);
      } else {
        // Normal click: replace selection
        this.blockManager.selectBlock(block);
      }
      this.updateSelectionUI();
    };

    // Helper to transform world normal to block's local space (accounting for rotation)
    const getLocalFaceDirection = (worldNormal, block) => {
      // Create inverse rotation quaternion from block's rotation
      const euler = new THREE.Euler(
        THREE.MathUtils.degToRad(block.rotation.x),
        THREE.MathUtils.degToRad(block.rotation.y),
        THREE.MathUtils.degToRad(block.rotation.z)
      );
      const quat = new THREE.Quaternion().setFromEuler(euler);
      const invQuat = quat.clone().invert();

      // Transform world normal to local space
      const localNormal = worldNormal.clone().applyQuaternion(invQuat);

      return this.facePainter.getFaceFromNormal(localNormal);
    };

    // Track last painted position for shift+click line painting
    let lastPaintedPosition = null;
    let lastPaintedNormal = null;

    // Track paint actions during drag for batching into single undo
    let currentPaintActions = [];
    let isPaintDragging = false;

    // Track when we last showed the complex block notification
    let lastComplexBlockNotification = 0;

    // Helper to paint a single block/face and return history action
    const paintBlockOrFace = (block, normal) => {
      // Check if face mode but block doesn't support per-face painting
      const forceBlockMode = this.paintMode === 'face' && !block.supportsPerFacePainting();

      if (forceBlockMode) {
        // Show notification that this block only supports block painting (throttled)
        const now = Date.now();
        if (now - lastComplexBlockNotification > 2000) {
          lastComplexBlockNotification = now;
          const hint = document.getElementById('tool-hint');
          const originalText = hint.textContent;
          hint.textContent = `Complex block "${block.type}" - painting entire block (face mode not supported)`;
          hint.style.color = '#ffaa00';
          setTimeout(() => {
            hint.textContent = originalText;
            hint.style.color = '';
          }, 2000);
        }
      }

      if (this.paintMode === 'block' || forceBlockMode) {
        const oldColor = block.color;
        // Deep copy old face colors
        const oldFaces = {};
        Object.entries(block.faces).forEach(([dir, face]) => {
          if (face && face.color) {
            oldFaces[dir] = { color: face.color };
          }
        });
        block.setColor(this.currentColor);
        return createPaintBlockColorAction(block, oldColor, this.currentColor, oldFaces);
      } else {
        const faceDirection = getLocalFaceDirection(normal, block);
        const oldColor = block.getFaceColor(faceDirection);
        // Check if face had explicit color or was using block color
        const hadExplicitColor = block.faces[faceDirection] && block.faces[faceDirection].color !== null;
        block.setFaceColor(faceDirection, this.currentColor);
        return createPaintFaceColorAction(block, faceDirection, hadExplicitColor ? oldColor : null, this.currentColor);
      }
    };

    // Get blocks along a line for painting
    const getBlocksAlongLine = (startPos, endPos, normal) => {
      const blocks = [];
      const dx = Math.abs(endPos.x - startPos.x);
      const dy = Math.abs(endPos.y - startPos.y);
      const dz = Math.abs(endPos.z - startPos.z);

      // Determine primary axis (the one with largest difference)
      let steps, sx, sy, sz;
      if (dx >= dy && dx >= dz) {
        steps = dx;
        sx = startPos.x < endPos.x ? 1 : -1;
        sy = 0;
        sz = 0;
      } else if (dy >= dx && dy >= dz) {
        steps = dy;
        sx = 0;
        sy = startPos.y < endPos.y ? 1 : -1;
        sz = 0;
      } else {
        steps = dz;
        sx = 0;
        sy = 0;
        sz = startPos.z < endPos.z ? 1 : -1;
      }

      for (let i = 0; i <= steps; i++) {
        const pos = {
          x: startPos.x + sx * i,
          y: startPos.y + sy * i,
          z: startPos.z + sz * i
        };
        const block = this.blockManager.getBlockAtPosition(pos);
        if (block) {
          blocks.push({ block, normal });
        }
      }
      return blocks;
    };

    // Handle painting - either single face or entire block based on paintMode
    this.inputManager.onPaint = (result, shiftKey) => {
      if (!result || !result.block) return;

      const currentPos = result.block.gridPosition;

      // Shift+click: paint line from last position to current
      if (shiftKey && lastPaintedPosition) {
        const blocksToPoint = getBlocksAlongLine(lastPaintedPosition, currentPos, result.normal);
        const actions = [];
        blocksToPoint.forEach(({ block, normal }) => {
          const action = paintBlockOrFace(block, normal);
          actions.push(action);
        });
        if (actions.length > 0) {
          this.history.push(createBatchPaintAction(actions));
        }
      } else {
        // Normal single block/face paint
        const action = paintBlockOrFace(result.block, result.normal);

        // If we're dragging, collect actions for batch undo
        if (this.inputManager.isPainting && !isPaintDragging) {
          // First paint of a drag session
          isPaintDragging = true;
          currentPaintActions = [action];
        } else if (this.inputManager.isPainting && isPaintDragging) {
          // Continuing drag session
          currentPaintActions.push(action);
        } else {
          // Single click paint
          this.history.push(action);
        }
      }

      // Update last painted position
      lastPaintedPosition = { ...currentPos };
      lastPaintedNormal = result.normal.clone();
    };

    // Listen for paint drag end to batch actions
    const originalOnMouseUp = this.canvas.onmouseup;
    this.canvas.addEventListener('mouseup', () => {
      if (isPaintDragging && currentPaintActions.length > 0) {
        if (currentPaintActions.length === 1) {
          this.history.push(currentPaintActions[0]);
        } else {
          this.history.push(createBatchPaintAction(currentPaintActions));
        }
        currentPaintActions = [];
      }
      isPaintDragging = false;
    });

    // Handle color picking - picks from the clicked face
    this.inputManager.onPick = (result) => {
      if (result && result.block) {
        const faceDirection = getLocalFaceDirection(result.normal, result.block);
        this.currentColor = result.block.getFaceColor(faceDirection);
        this.colorInput.value = this.currentColor;
        this.updateColorSwatchSelection();
      }
    };

    // Handle Alt+click to pick block type and color
    this.inputManager.onPickBlock = (block) => {
      this.pickBlock(block);
    };

    // Handle block replacement (ctrl+click) - replace with current type/color
    this.inputManager.onReplace = (block) => {
      if (!block) return;

      const pos = block.gridPosition;

      // Remove old block
      this.history.push(createRemoveBlockAction(this.blockManager, block));
      this.blockManager.removeBlock(block.id);

      // Create emissive settings if enabled
      const emissive = this.emissiveEnabled ? {
        enabled: true,
        color: this.emissiveColor,
        intensity: this.emissiveIntensity,
        radius: this.emissiveRadius
      } : null;

      // Add new block with current type/color at same position
      const blockData = {
        type: this.currentBlockType,
        position: { x: pos.x, y: pos.y, z: pos.z },
        color: this.currentColor,
        rotation: { x: 0, y: this.currentRotation, z: 0 },
        emissive: emissive
      };
      const newBlock = this.blockManager.addBlock(blockData);
      if (newBlock) {
        this.history.push(createAddBlockAction(this.blockManager, blockData, newBlock));
      }
    };
  }

  findMaterialIdByColor(color) {
    for (const mat of this.textureManager.getColorMaterials()) {
      if (mat.baseColor.toLowerCase() === color.toLowerCase()) {
        return mat.id;
      }
    }
    return null;
  }

  setupToolbar() {
    // Tool buttons
    document.querySelectorAll('.tool').forEach(btn => {
      btn.addEventListener('click', () => {
        const tool = btn.dataset.tool;
        this.setTool(tool);
      });
    });

    // Generate block palette from categories
    this.generateBlockPalette();

    // Setup block search
    this.setupBlockSearch();

    // Rotate button
    document.getElementById('btn-rotate').addEventListener('click', () => {
      this.rotateBlock();
    });

    // Scale toggle buttons (1x / 2x / 4x block size)
    const scale1xBtn = document.getElementById('btn-scale-1x');
    const scale2xBtn = document.getElementById('btn-scale-2x');
    const scale4xBtn = document.getElementById('btn-scale-4x');
    const scaleBtns = [scale1xBtn, scale2xBtn, scale4xBtn];

    const setActiveScaleBtn = (activeBtn) => {
      scaleBtns.forEach(btn => btn.classList.remove('active'));
      activeBtn.classList.add('active');
    };

    scale1xBtn.addEventListener('click', () => {
      this.setBlockScale(1);
      setActiveScaleBtn(scale1xBtn);
    });

    scale2xBtn.addEventListener('click', () => {
      this.setBlockScale(2);
      setActiveScaleBtn(scale2xBtn);
    });

    scale4xBtn.addEventListener('click', () => {
      this.setBlockScale(4);
      setActiveScaleBtn(scale4xBtn);
    });
  }

  setBlockScale(scale) {
    this.currentBlockScale = scale;
    // Update ghost block to reflect scale
    this.ghostBlock.setScale(scale);
  }

  generateBlockPalette() {
    const palette = document.getElementById('block-palette');
    if (!palette) return;

    palette.innerHTML = '';

    // Track which categories should start collapsed (less common ones)
    const collapsedByDefault = [
      'decorative', 'details', 'architectural', 'furniture', 'storage',
      'industrial', 'electrical', 'natural', 'modern', 'medieval'
    ];

    for (const [categoryId, category] of Object.entries(BLOCK_CATEGORIES)) {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'block-category';
      if (collapsedByDefault.includes(categoryId)) {
        categoryDiv.classList.add('collapsed');
      }

      // Category header
      const header = document.createElement('div');
      header.className = 'block-category-header';
      header.innerHTML = `
        <span class="arrow">▼</span>
        <span class="label">${category.label}</span>
        <span class="count">${category.types.length}</span>
      `;
      header.addEventListener('click', () => {
        categoryDiv.classList.toggle('collapsed');
      });
      categoryDiv.appendChild(header);

      // Block buttons container
      const content = document.createElement('div');
      content.className = 'block-category-content';

      for (const type of category.types) {
        const display = BLOCK_DISPLAY[type] || { icon: '?', label: type };
        const btn = document.createElement('button');
        btn.className = 'block-type';
        btn.dataset.type = type;
        btn.title = display.label;
        btn.textContent = display.icon;

        // Set cube as active by default
        if (type === 'cube') {
          btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
          this.setBlockType(type);
        });

        content.appendChild(btn);
      }

      categoryDiv.appendChild(content);
      palette.appendChild(categoryDiv);
    }
  }

  setupBlockSearch() {
    const searchInput = document.getElementById('block-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      this.filterBlocks(e.target.value);
    });

    // Clear search on Escape
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        this.filterBlocks('');
        searchInput.blur();
      }
    });
  }

  filterBlocks(query) {
    const normalizedQuery = query.toLowerCase().trim();
    const categories = document.querySelectorAll('.block-category');

    categories.forEach(category => {
      const blockButtons = category.querySelectorAll('.block-type');
      let hasVisibleBlocks = false;

      blockButtons.forEach(btn => {
        const type = btn.dataset.type;
        const display = BLOCK_DISPLAY[type] || { label: type };
        const label = display.label.toLowerCase();

        // Match against type name and display label
        const matches = !normalizedQuery ||
          type.toLowerCase().includes(normalizedQuery) ||
          label.includes(normalizedQuery);

        btn.classList.toggle('search-hidden', !matches);
        if (matches) hasVisibleBlocks = true;
      });

      // Hide category if no blocks match, show and expand if there are matches
      category.classList.toggle('search-hidden', !hasVisibleBlocks);
      category.classList.toggle('search-match', hasVisibleBlocks && normalizedQuery.length > 0);
    });
  }

  setTool(tool) {
    this.inputManager.setTool(tool);
    document.querySelectorAll('.tool').forEach(b => {
      b.classList.toggle('active', b.dataset.tool === tool);
    });

    if (tool !== 'place' && tool !== 'shape') {
      this.ghostBlock.hide();
    }

    // Show/hide shape section
    const shapeSection = document.getElementById('shape-section');
    if (shapeSection) {
      shapeSection.style.display = tool === 'shape' ? '' : 'none';
    }

    // Show/hide paint section
    const paintSection = document.getElementById('paint-section');
    if (paintSection) {
      paintSection.style.display = tool === 'paint' ? '' : 'none';
    }

    // Show/hide scatter section
    const scatterSection = document.getElementById('scatter-section');
    if (scatterSection) {
      scatterSection.style.display = tool === 'scatter' ? '' : 'none';
    }

    // Clear shape ghosts when switching away from shape tool
    if (tool !== 'shape') {
      this.clearShapeGhosts();
    }

    // Update hint
    const paintModeHint = this.paintMode === 'block' ? 'paint block' : 'paint face';
    const hints = {
      place: 'Left-click: place | Alt+click: pick block | Ctrl+click: replace',
      delete: 'Left-click: delete | Alt+click: pick block',
      select: 'Left-click: select | Shift+click: add | +/-: keyframe | Space: play',
      paint: `Click+drag: ${paintModeHint} | Shift+click: paint line | Alt+click: pick block`,
      pick: 'Left-click: pick color | Alt+click: pick block',
      shape: 'Click+drag: define shape size | Release: place blocks',
      scatter: 'Click: generate organic structure from point'
    };
    document.getElementById('tool-hint').textContent = hints[tool] || '';
  }

  setBlockType(type) {
    this.currentBlockType = type;
    document.querySelectorAll('.block-type').forEach(b => {
      b.classList.toggle('active', b.dataset.type === type);
    });
  }

  rotateBlock() {
    this.currentRotation = (this.currentRotation + 90) % 360;

    // Also rotate all selected blocks
    const selectedBlocks = this.blockManager.getSelectedBlocks();
    for (const block of selectedBlocks) {
      block.rotateY(90);
    }
    if (selectedBlocks.length > 0) {
      this.updateSelectionUI();
    }
  }

  setupPaintMode() {
    // Paint mode buttons
    document.querySelectorAll('.paint-mode').forEach(btn => {
      btn.addEventListener('click', () => {
        this.paintMode = btn.dataset.mode;
        document.querySelectorAll('.paint-mode').forEach(b => {
          b.classList.toggle('active', b.dataset.mode === this.paintMode);
        });
        // Update hint
        this.setTool('paint');
      });
    });
  }

  // Pick block type and color from clicked block (Alt+click)
  pickBlock(block) {
    if (!block) return;

    // Switch to place mode
    this.setTool('place');

    // Set the block type
    this.setBlockType(block.type);

    // Set the color
    this.currentColor = block.color;
    this.colorInput.value = block.color;

    // Update rotation to match
    this.currentRotation = block.rotation.y;

    // Update ghost block
    this.ghostBlock.setBlockType(block.type);
    this.ghostBlock.setColor(block.color);
    this.ghostBlock.setRotation(this.currentRotation);
  }

  setupShapeBrush() {
    // Shape type buttons
    document.querySelectorAll('.shape-type').forEach(btn => {
      btn.addEventListener('click', () => {
        const shape = btn.dataset.shape;
        this.currentShape = shape;
        document.querySelectorAll('.shape-type').forEach(b => {
          b.classList.toggle('active', b.dataset.shape === shape);
        });
      });
    });

    // Shape brush drag preview
    this.inputManager.onShapeDrag = (startPos, endPos) => {
      this.updateShapePreview(startPos, endPos);
    };

    // Shape brush place
    this.inputManager.onShapePlace = (startPos, endPos) => {
      this.placeShape(startPos, endPos);
      this.clearShapeGhosts();
    };
  }

  updateShapePreview(startPos, endPos) {
    // Clear existing ghosts
    this.clearShapeGhosts();

    // Generate positions for current shape
    const positions = generateShape(this.currentShape, startPos, endPos);

    // Limit preview to prevent performance issues
    const maxPreview = 500;
    const previewPositions = positions.slice(0, maxPreview);

    // Create ghost blocks for preview
    const ghostMaterial = new THREE.MeshBasicMaterial({
      color: this.currentColor,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });

    const ghostGeometry = new THREE.BoxGeometry(0.95, 0.95, 0.95);

    previewPositions.forEach(pos => {
      const ghost = new THREE.Mesh(ghostGeometry, ghostMaterial);
      ghost.position.set(pos.x + 0.5, pos.y + 0.5, pos.z + 0.5);
      this.engine.scene.add(ghost);
      this.shapeGhosts.push(ghost);
    });

    // Show count in hint
    const hint = document.getElementById('tool-hint');
    if (positions.length > maxPreview) {
      hint.textContent = `Shape: ${positions.length} blocks (showing ${maxPreview}) | Release to place`;
    } else {
      hint.textContent = `Shape: ${positions.length} blocks | Release to place`;
    }
  }

  clearShapeGhosts() {
    this.shapeGhosts.forEach(ghost => {
      this.engine.scene.remove(ghost);
      ghost.geometry.dispose();
      ghost.material.dispose();
    });
    this.shapeGhosts = [];
  }

  placeShape(startPos, endPos) {
    // Check if current layer allows editing
    if (!this.canEditCurrentLayer()) {
      this.showNotification('Layer is locked or hidden', 'warning');
      return;
    }

    const positions = generateShape(this.currentShape, startPos, endPos);

    // Limit to prevent browser freeze
    const maxBlocks = 1000;
    if (positions.length > maxBlocks) {
      alert(`Shape too large (${positions.length} blocks). Maximum is ${maxBlocks}.`);
      return;
    }

    // Create emissive settings if enabled
    const emissive = this.emissiveEnabled ? {
      color: this.emissiveColor,
      intensity: this.emissiveIntensity,
      radius: this.emissiveRadius
    } : null;

    // Place all blocks
    const placedBlocks = [];
    positions.forEach(pos => {
      // Skip if position would overlap existing block
      if (!this.blockManager.wouldOverlapAt(this.currentBlockType, pos, { w: 1, h: 1, d: 1 })) {
        const blockData = {
          type: this.currentBlockType,
          position: { ...pos },
          color: this.currentColor,
          rotation: { x: 0, y: this.currentRotation, z: 0 },
          layerId: this.getActiveLayerId(),
          emissive: emissive
        };
        const block = this.blockManager.addBlock(blockData);
        if (block) {
          placedBlocks.push(block);
        }
      }
    });

    // Add to history as batch (simplified - just track we can undo the whole shape)
    if (placedBlocks.length > 0) {
      // Create a compound action for undo
      const blockIds = placedBlocks.map(b => b.id);
      this.history.push({
        undo: () => {
          blockIds.forEach(id => this.blockManager.removeBlock(id));
        },
        redo: () => {
          positions.forEach(pos => {
            if (!this.blockManager.wouldOverlapAt(this.currentBlockType, pos, { w: 1, h: 1, d: 1 })) {
              this.blockManager.addBlock({
                type: this.currentBlockType,
                position: { ...pos },
                color: this.currentColor,
                rotation: { x: 0, y: this.currentRotation, z: 0 },
                emissive: emissive
              });
            }
          });
        }
      });
    }
  }

  setupScatterTool() {
    // Populate preset dropdown
    const presetSelect = document.getElementById('scatter-preset');
    Object.keys(SCATTER_PRESETS).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = SCATTER_PRESETS[key].label || key;
      presetSelect.appendChild(option);
    });

    // Preset change handler
    presetSelect.addEventListener('change', (e) => {
      this.scatterTool.setPreset(e.target.value);
    });

    // Populate algorithm dropdown
    const algorithmSelect = document.getElementById('scatter-algorithm');
    Object.keys(SCATTER_ALGORITHMS).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = SCATTER_ALGORITHMS[key].label;
      option.title = SCATTER_ALGORITHMS[key].description;
      algorithmSelect.appendChild(option);
    });

    // Algorithm change handler
    algorithmSelect.addEventListener('change', (e) => {
      this.scatterTool.setAlgorithm(e.target.value);
    });

    // Count slider
    const countSlider = document.getElementById('scatter-count');
    const countLabel = document.getElementById('scatter-count-val');
    countSlider.addEventListener('input', (e) => {
      const value = parseInt(e.target.value);
      this.scatterTool.setMaxBlocks(value);
      countLabel.textContent = value;
    });

    // Branch chance slider
    const branchSlider = document.getElementById('scatter-branch');
    const branchLabel = document.getElementById('scatter-branch-val');
    branchSlider.addEventListener('input', (e) => {
      const value = parseFloat(e.target.value);
      this.scatterTool.setBranchChance(value);
      branchLabel.textContent = Math.round(value * 100) + '%';
    });

    // Scale ratio slider (controls size distribution)
    const scaleSlider = document.getElementById('scatter-scale-ratio');
    const scaleLabel = document.getElementById('scatter-scale-ratio-val');
    scaleSlider.addEventListener('input', (e) => {
      const value = parseFloat(e.target.value);
      this.scatterTool.setScaleRatio(value);
      // Calculate approximate distribution
      const prob1x = Math.round((0.3 + value * 0.7) * 100);
      const prob4x = Math.round(Math.max(0, (1 - value) * 0.3) * 100);
      const prob2x = 100 - prob1x - prob4x;
      if (prob4x > 0) {
        scaleLabel.textContent = `${prob1x}% 1× / ${prob2x}% 2× / ${prob4x}% 4×`;
      } else {
        scaleLabel.textContent = `${prob1x}% 1× / ${prob2x}% 2×`;
      }
    });

    // Color harmony dropdown
    const harmonySelect = document.getElementById('scatter-harmony');
    harmonySelect.addEventListener('change', (e) => {
      this.scatterTool.setColorHarmony(e.target.value);
    });

    // Scatter placement callback
    this.inputManager.onScatterPlace = (result) => {
      this.executeScatter(result);
    };
  }

  executeScatter(result) {
    // Check if current layer allows editing
    if (!this.canEditCurrentLayer()) {
      this.showNotification('Layer is locked or hidden', 'warning');
      return;
    }

    const origin = result.placementPosition;

    // Generate blocks using scatter tool
    const generatedBlocks = this.scatterTool.generate(origin, {
      baseColor: this.currentColor
    });

    if (generatedBlocks.length === 0) {
      this.showNotification('No blocks generated', 'warning');
      return;
    }

    // Place all generated blocks
    const placedBlocks = [];
    const placedData = [];

    generatedBlocks.forEach(blockDef => {
      // Check overlap (respecting scale)
      if (!this.blockManager.wouldOverlapAt(blockDef.type, blockDef.position, { w: 1, h: 1, d: 1 }, null, blockDef.scale)) {
        const blockData = {
          type: blockDef.type,
          position: { ...blockDef.position },
          color: blockDef.color,
          rotation: blockDef.rotation,
          scale: blockDef.scale,
          layerId: this.getActiveLayerId()
        };
        const block = this.blockManager.addBlock(blockData);
        if (block) {
          placedBlocks.push(block);
          placedData.push(blockData);
        }
      }
    });

    // Add to history as compound action
    if (placedBlocks.length > 0) {
      const blockIds = placedBlocks.map(b => b.id);
      this.history.push({
        undo: () => {
          blockIds.forEach(id => this.blockManager.removeBlock(id));
        },
        redo: () => {
          placedData.forEach(data => {
            if (!this.blockManager.wouldOverlapAt(data.type, data.position, { w: 1, h: 1, d: 1 }, null, data.scale)) {
              this.blockManager.addBlock(data);
            }
          });
        }
      });

      this.showNotification(`Scattered ${placedBlocks.length} blocks`, 'success');
    }
  }

  moveSelectedBlocks(dx, dy, dz) {
    const selectedBlocks = this.blockManager.getSelectedBlocks();
    if (selectedBlocks.length === 0) return;

    // Get IDs of all selected blocks (to exclude from overlap check)
    const selectedIds = new Set(selectedBlocks.map(b => b.id));

    // Check if all blocks can move to new positions
    for (const block of selectedBlocks) {
      const newPos = {
        x: block.gridPosition.x + dx,
        y: block.gridPosition.y + dy,
        z: block.gridPosition.z + dz
      };

      // Check overlap, excluding ALL selected blocks from the check
      const wouldOverlap = this.blockManager.wouldOverlapAt(
        block.type,
        newPos,
        block.dimensions,
        selectedIds  // Pass the full set of selected IDs to exclude
      );
      if (wouldOverlap) return; // Abort if any block would overlap
    }

    // Move all selected blocks
    for (const block of selectedBlocks) {
      const newPos = {
        x: block.gridPosition.x + dx,
        y: block.gridPosition.y + dy,
        z: block.gridPosition.z + dz
      };
      block.setPosition(newPos);
    }
    this.updateSelectionUI();
  }

  // Alias for backward compatibility
  moveSelectedBlock(dx, dy, dz) {
    this.moveSelectedBlocks(dx, dy, dz);
  }

  setupMoveControls() {
    document.querySelectorAll('.move-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const dir = btn.dataset.dir;
        switch (dir) {
          case 'up': this.moveSelectedBlock(0, 0, -1); break;
          case 'down': this.moveSelectedBlock(0, 0, 1); break;
          case 'left': this.moveSelectedBlock(-1, 0, 0); break;
          case 'right': this.moveSelectedBlock(1, 0, 0); break;
          case 'raise': this.moveSelectedBlock(0, 1, 0); break;
          case 'lower': this.moveSelectedBlock(0, -1, 0); break;
        }
      });
    });
  }

  setupColorPalette() {
    const colors = [
      // Grayscale
      '#ffffff', '#d0d0d0', '#a0a0a0', '#707070', '#404040', '#1a1a1a', '#000000',
      // Reds
      '#ffcccc', '#ff6666', '#e74c3c', '#c0392b', '#8b0000', '#4a0000',
      // Oranges
      '#ffe0cc', '#ffaa66', '#e67e22', '#d35400', '#a04000', '#602800',
      // Yellows
      '#ffffcc', '#ffff66', '#f1c40f', '#d4ac0d', '#b8860b', '#806000',
      // Greens
      '#ccffcc', '#66ff66', '#2ecc71', '#27ae60', '#1e8449', '#145a32',
      // Teals
      '#ccffff', '#66ffff', '#1abc9c', '#16a085', '#0e6655', '#0a4a3a',
      // Blues
      '#cce0ff', '#66b3ff', '#3498db', '#2980b9', '#1a5276', '#0d2840',
      // Purples
      '#e0ccff', '#b366ff', '#9b59b6', '#8e44ad', '#6c3483', '#4a235a',
      // Pinks
      '#ffccee', '#ff66cc', '#e91e63', '#c2185b', '#880e4f', '#4a0728',
      // Browns
      '#e6d5c3', '#c4a484', '#a0522d', '#795548', '#5d4037', '#3e2723',
      // Special
      '#ffd700', '#c0c0c0', '#cd7f32', '#b87333', '#4682b4', '#708090'
    ];

    colors.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'color-swatch';
      swatch.style.background = color;
      swatch.addEventListener('click', () => {
        this.currentColor = color;
        this.colorInput.value = color;
        this.updateColorSwatchSelection();
      });
      this.colorPalette.appendChild(swatch);
    });

    this.colorInput.addEventListener('input', (e) => {
      this.currentColor = e.target.value;
      this.updateColorSwatchSelection();
    });

    this.updateColorSwatchSelection();
  }

  setupEmissiveControls() {
    const enabledCheckbox = document.getElementById('emissive-enabled');
    const colorInput = document.getElementById('emissive-color');
    const intensitySlider = document.getElementById('emissive-intensity');
    const intensityVal = document.getElementById('emissive-intensity-val');
    const radiusSlider = document.getElementById('emissive-radius');
    const radiusVal = document.getElementById('emissive-radius-val');

    enabledCheckbox.addEventListener('change', (e) => {
      this.emissiveEnabled = e.target.checked;
      // Update ghost block color to indicate emissive mode
      this.ghostBlock.setColor(this.emissiveEnabled ? this.emissiveColor : this.currentColor);
    });

    colorInput.addEventListener('input', (e) => {
      this.emissiveColor = e.target.value;
      if (this.emissiveEnabled) {
        this.ghostBlock.setColor(this.emissiveColor);
      }
    });

    intensitySlider.addEventListener('input', (e) => {
      this.emissiveIntensity = parseFloat(e.target.value);
      intensityVal.textContent = this.emissiveIntensity.toFixed(1);
    });

    radiusSlider.addEventListener('input', (e) => {
      this.emissiveRadius = parseFloat(e.target.value);
      radiusVal.textContent = this.emissiveRadius.toFixed(1);
    });
  }

  setupEdgeControls() {
    const showEdgesCheckbox = document.getElementById('show-edges');
    const edgeOpacitySlider = document.getElementById('edge-opacity');

    showEdgesCheckbox.addEventListener('change', (e) => {
      this.showEdges = e.target.checked;
      this.updateAllBlockEdges();
    });

    edgeOpacitySlider.addEventListener('input', (e) => {
      this.edgeOpacity = parseFloat(e.target.value);
      this.updateAllBlockEdges();
    });
  }

  updateAllBlockEdges() {
    for (const block of this.blockManager.getAllBlocks()) {
      block.setEdgesVisible(this.showEdges);
      block.setEdgesOpacity(this.edgeOpacity);
    }
  }

  setupLayerPanel() {
    const addBtn = document.getElementById('btn-add-layer');

    addBtn.addEventListener('click', () => {
      const name = prompt('Layer name:', `Layer ${this.layerManager.layers.size}`);
      if (name) {
        const id = this.layerManager.generateLayerId();
        this.layerManager.createLayer(id, name);
        this.layerManager.setActiveLayer(id);
      }
    });

    // Initial render
    this.updateLayerUI();
  }

  updateLayerUI() {
    const layerList = document.getElementById('layer-list');
    if (!layerList) return;

    layerList.innerHTML = '';
    const layers = this.layerManager.getAllLayers();
    const activeId = this.layerManager.activeLayerId;

    layers.forEach(layer => {
      const item = document.createElement('div');
      item.className = 'layer-item' + (layer.id === activeId ? ' active' : '');
      item.innerHTML = `
        <div class="layer-color" style="background: ${layer.color}"></div>
        <span class="layer-name">${layer.name}</span>
        <div class="layer-controls">
          <button class="layer-btn ${layer.visible ? '' : 'off'}" data-action="visibility" title="Toggle Visibility">
            ${layer.visible ? '👁' : '○'}
          </button>
          <button class="layer-btn ${layer.locked ? 'locked' : ''}" data-action="lock" title="Toggle Lock">
            ${layer.locked ? '🔒' : '🔓'}
          </button>
        </div>
      `;

      // Click to select layer
      item.addEventListener('click', (e) => {
        if (e.target.closest('.layer-btn')) return;
        this.layerManager.setActiveLayer(layer.id);
      });

      // Double-click to rename
      item.addEventListener('dblclick', (e) => {
        if (e.target.closest('.layer-btn')) return;
        const newName = prompt('Rename layer:', layer.name);
        if (newName) {
          this.layerManager.setLayerName(layer.id, newName);
        }
      });

      // Visibility toggle
      item.querySelector('[data-action="visibility"]').addEventListener('click', (e) => {
        e.stopPropagation();
        this.layerManager.setLayerVisible(layer.id, !layer.visible);
        this.updateBlockVisibility();
      });

      // Lock toggle
      item.querySelector('[data-action="lock"]').addEventListener('click', (e) => {
        e.stopPropagation();
        this.layerManager.setLayerLocked(layer.id, !layer.locked);
      });

      layerList.appendChild(item);
    });
  }

  updateBlockVisibility() {
    for (const block of this.blockManager.getAllBlocks()) {
      const layerVisible = this.layerManager.isLayerVisible(block.layerId);
      block.mesh.visible = layerVisible;
    }
  }

  getActiveLayerId() {
    return this.layerManager.activeLayerId;
  }

  canEditCurrentLayer() {
    return this.layerManager.canEditLayer(this.layerManager.activeLayerId);
  }

  setupSymmetryTools() {
    // Mirror buttons
    document.getElementById('btn-mirror-x').addEventListener('click', () => {
      this.mirrorSelectedBlocks('x');
    });

    document.getElementById('btn-mirror-y').addEventListener('click', () => {
      this.mirrorSelectedBlocks('y');
    });

    document.getElementById('btn-mirror-z').addEventListener('click', () => {
      this.mirrorSelectedBlocks('z');
    });
  }

  mirrorSelectedBlocks(axis) {
    const selectedBlocks = this.blockManager.getSelectedBlocks();
    if (selectedBlocks.length === 0) {
      this.showNotification('Select blocks to mirror', 'warning');
      return;
    }

    const addedBlocks = this.symmetryTool.mirrorSelectedBlocks(axis, true);

    if (addedBlocks.length > 0) {
      this.showNotification(`Mirrored ${addedBlocks.length} block(s) across ${axis.toUpperCase()} axis`, 'success');

      // Create history action for undo
      const blockIds = addedBlocks.map(b => b.id);
      this.history.push({
        undo: () => {
          blockIds.forEach(id => this.blockManager.removeBlock(id));
        },
        redo: () => {
          this.symmetryTool.mirrorSelectedBlocks(axis, true);
        }
      });
    } else {
      this.showNotification('Could not mirror - blocks may overlap', 'warning');
    }
  }

  setupCameraBookmarks() {
    // Preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.dataset.preset;
        this.cameraBookmarks.goToPreset(preset);
      });
    });

    // Save view button
    document.getElementById('btn-save-view').addEventListener('click', () => {
      const name = prompt('Bookmark name:', `View ${this.cameraBookmarks.bookmarks.size + 1}`);
      if (name) {
        this.cameraBookmarks.saveBookmark(name);
        this.showNotification(`View "${name}" saved`, 'success');
      }
    });

    // Initial render
    this.updateCameraBookmarksUI();
  }

  updateCameraBookmarksUI() {
    const container = document.getElementById('camera-bookmarks');
    if (!container) return;

    container.innerHTML = '';
    const bookmarks = this.cameraBookmarks.getAllBookmarks();

    bookmarks.forEach(bookmark => {
      const item = document.createElement('div');
      item.className = 'bookmark-item';
      item.innerHTML = `
        <span class="bookmark-name">${bookmark.name}</span>
        <button class="bookmark-delete" title="Delete">&times;</button>
      `;

      // Click to restore
      item.addEventListener('click', (e) => {
        if (e.target.closest('.bookmark-delete')) return;
        this.cameraBookmarks.restoreBookmark(bookmark.id);
      });

      // Double-click to rename
      item.addEventListener('dblclick', (e) => {
        if (e.target.closest('.bookmark-delete')) return;
        const newName = prompt('Rename bookmark:', bookmark.name);
        if (newName) {
          this.cameraBookmarks.renameBookmark(bookmark.id, newName);
        }
      });

      // Delete button
      item.querySelector('.bookmark-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        this.cameraBookmarks.deleteBookmark(bookmark.id);
      });

      container.appendChild(item);
    });
  }

  setupCameraAnimation() {
    const framesInput = document.getElementById('camera-anim-frames');
    const fpsInput = document.getElementById('camera-anim-fps');
    const curveSelect = document.getElementById('camera-anim-curve');
    const durationDisplay = document.getElementById('camera-anim-duration');
    const previewBtn = document.getElementById('btn-camera-preview');
    const exportJpgBtn = document.getElementById('btn-camera-export-jpg');
    const exportMp4Btn = document.getElementById('btn-camera-export-mp4');
    const progressContainer = document.getElementById('camera-anim-progress');
    const progressBar = document.getElementById('camera-anim-progress-bar');
    const progressText = document.getElementById('camera-anim-progress-text');

    // Update duration display when frames or fps changes
    const updateDuration = () => {
      const frames = parseInt(framesInput.value);
      const fps = parseInt(fpsInput.value);
      const duration = (frames / fps).toFixed(1);
      durationDisplay.textContent = `${duration}s`;
    };

    framesInput.addEventListener('input', updateDuration);
    fpsInput.addEventListener('input', updateDuration);

    // Curve type change
    curveSelect.addEventListener('change', () => {
      this.cameraPathAnimator.curveType = curveSelect.value;
    });

    // Preview animation
    previewBtn.addEventListener('click', () => {
      const bookmarks = this.cameraBookmarks.getAllBookmarks();

      if (bookmarks.length < 2) {
        this.showNotification('Save at least 2 camera views to preview animation', 'warning', 3000);
        return;
      }

      const frames = parseInt(framesInput.value);
      const fps = parseInt(fpsInput.value);
      const durationMs = (frames / fps) * 1000;

      this.showNotification('Previewing camera animation...', 'info', 2000);
      this.cameraPathAnimator.preview(bookmarks, durationMs, () => {
        this.showNotification('Preview complete', 'success', 2000);
      });
    });

    // Export as JPG sequence (ZIP)
    exportJpgBtn.addEventListener('click', async () => {
      const bookmarks = this.cameraBookmarks.getAllBookmarks();

      if (bookmarks.length < 2) {
        this.showNotification('Save at least 2 camera views to export animation', 'warning', 3000);
        return;
      }

      const totalFrames = parseInt(framesInput.value);
      const fps = parseInt(fpsInput.value);

      // Disable buttons during export
      exportJpgBtn.disabled = true;
      exportMp4Btn.disabled = true;
      previewBtn.disabled = true;
      progressContainer.style.display = 'block';
      progressBar.style.width = '0%';
      progressText.textContent = '0%';

      try {
        this.showNotification(`Rendering ${totalFrames} frames...`, 'info');

        // Capture sequence
        const frames = await this.frameSequencer.captureSequence({
          animator: this.cameraPathAnimator,
          bookmarks,
          totalFrames,
          onProgress: (progress) => {
            progressBar.style.width = `${progress.percent}%`;
            progressText.textContent = `${progress.percent}% (${progress.current}/${progress.total})`;
          }
        });

        this.showNotification('Creating ZIP archive...', 'info');

        // Export as ZIP
        await this.frameSequencer.exportAsZip(frames);

        const memoryUsage = this.frameSequencer.getMemoryUsage();
        this.showNotification(`Exported ${totalFrames} frames (${memoryUsage}MB)`, 'success', 4000);

        // Clean up
        this.frameSequencer.clear();

      } catch (error) {
        console.error('Export failed:', error);
        this.showNotification(`Export failed: ${error.message}`, 'error', 4000);
      } finally {
        // Re-enable buttons
        exportJpgBtn.disabled = false;
        exportMp4Btn.disabled = false;
        previewBtn.disabled = false;
        progressContainer.style.display = 'none';
      }
    });

    // Export as MP4/WebM video
    exportMp4Btn.addEventListener('click', async () => {
      const bookmarks = this.cameraBookmarks.getAllBookmarks();

      if (bookmarks.length < 2) {
        this.showNotification('Save at least 2 camera views to export video', 'warning', 3000);
        return;
      }

      const frames = parseInt(framesInput.value);
      const fps = parseInt(fpsInput.value);
      const durationMs = (frames / fps) * 1000;

      // Disable buttons during export
      exportJpgBtn.disabled = true;
      exportMp4Btn.disabled = true;
      previewBtn.disabled = true;
      progressContainer.style.display = 'block';
      progressBar.style.width = '0%';
      progressText.textContent = 'Starting...';

      try {
        const totalFrames = Math.floor((durationMs / 1000) * fps);
        this.showNotification(`Rendering ${totalFrames} frames for video...`, 'info');

        await this.frameSequencer.exportAsMP4Realtime(
          this.cameraPathAnimator,
          bookmarks,
          durationMs,
          'camera_path.webm',
          (progress) => {
            progressBar.style.width = `${progress.percent}%`;
            progressText.textContent = `${progress.percent}% (${progress.current}/${progress.total})`;
          }
        );

        this.showNotification('Video exported successfully', 'success', 3000);

      } catch (error) {
        console.error('Video export failed:', error);
        this.showNotification(`Video export failed: ${error.message}`, 'error', 4000);
      } finally {
        // Re-enable buttons
        exportJpgBtn.disabled = false;
        exportMp4Btn.disabled = false;
        previewBtn.disabled = false;
        progressContainer.style.display = 'none';
      }
    });
  }

  setupTattooMode() {
    const enabledCheckbox = document.getElementById('tattoo-enabled');
    const gpuCheckbox = document.getElementById('gpu-acceleration');
    const styleSelect = document.getElementById('render-style');
    const invertedCheckbox = document.getElementById('tattoo-inverted');
    const grayscaleCheckbox = document.getElementById('tattoo-grayscale');
    const fillsCheckbox = document.getElementById('tattoo-fills');
    const qualitySelect = document.getElementById('render-quality');
    const thresholdSlider = document.getElementById('tattoo-threshold');
    const thresholdVal = document.getElementById('tattoo-threshold-val');
    const lineWidthSlider = document.getElementById('tattoo-line-width');
    const lineWidthVal = document.getElementById('tattoo-line-width-val');
    const pngBtn = document.getElementById('btn-tattoo-png');
    const svgBtn = document.getElementById('btn-tattoo-svg');

    // Sync GPU checkbox with initial state
    gpuCheckbox.checked = this.useGPURenderer;

    // GPU acceleration toggle
    gpuCheckbox.addEventListener('change', (e) => {
      const wasEnabled = this.tattooRenderer.enabled;

      // Disable current renderer
      if (wasEnabled) {
        this.tattooRenderer.setEnabled(false);
      }

      // Dispose old renderer if it has dispose method
      if (this.tattooRenderer.dispose) {
        this.tattooRenderer.dispose();
      }

      // Create new renderer
      this.useGPURenderer = e.target.checked;
      try {
        if (this.useGPURenderer) {
          this.tattooRenderer = new GPUStyleRenderer(this.engine, this.blockManager);
          this.showNotification('GPU acceleration enabled', 'success', 2000);
        } else {
          this.tattooRenderer = new TattooRenderer(this.engine, this.blockManager);
          this.showNotification('CPU rendering enabled', 'info', 2000);
        }
      } catch (err) {
        console.warn('Renderer switch failed:', err);
        this.tattooRenderer = new TattooRenderer(this.engine, this.blockManager);
        gpuCheckbox.checked = false;
        this.useGPURenderer = false;
        this.showNotification('GPU not available, using CPU', 'warning', 3000);
      }

      // Restore enabled state and current settings
      if (wasEnabled) {
        this.tattooRenderer.setStyle(styleSelect.value);
        this.tattooRenderer.setInverted(invertedCheckbox.checked);
        this.tattooRenderer.setGrayscale(grayscaleCheckbox.checked);
        this.tattooRenderer.setShowFills(fillsCheckbox.checked);
        this.tattooRenderer.setQuality(qualitySelect.value);
        this.tattooRenderer.setEnabled(true);
      }
    });

    // Enable/disable tattoo mode
    enabledCheckbox.addEventListener('change', (e) => {
      this.tattooRenderer.setEnabled(e.target.checked);
      if (e.target.checked) {
        const mode = this.useGPURenderer ? 'GPU' : 'CPU';
        this.showNotification(`Stylized view enabled (${mode})`, 'info', 2000);
      }
    });

    // Style selector
    styleSelect.addEventListener('change', (e) => {
      this.tattooRenderer.setStyle(e.target.value);
    });

    // Inversion toggle
    invertedCheckbox.addEventListener('change', (e) => {
      this.tattooRenderer.setInverted(e.target.checked);
    });

    // Grayscale toggle
    grayscaleCheckbox.addEventListener('change', (e) => {
      this.tattooRenderer.setGrayscale(e.target.checked);
    });

    // Show fills toggle
    fillsCheckbox.addEventListener('change', (e) => {
      this.tattooRenderer.setShowFills(e.target.checked);
    });

    // Quality selector
    qualitySelect.addEventListener('change', (e) => {
      this.tattooRenderer.setQuality(e.target.value);
    });

    // Threshold slider
    thresholdSlider.addEventListener('input', (e) => {
      const value = parseFloat(e.target.value);
      this.tattooRenderer.setThreshold(value);
      thresholdVal.textContent = value.toFixed(2);
    });

    // Line width slider
    lineWidthSlider.addEventListener('input', (e) => {
      const value = parseFloat(e.target.value);
      this.tattooRenderer.setLineWidth(value);
      lineWidthVal.textContent = value.toFixed(1);
    });

    // PNG export
    pngBtn.addEventListener('click', () => {
      this.tattooRenderer.capturePNG('tattoo-design.png');
      this.showNotification('PNG saved', 'success', 2000);
    });

    // SVG export
    svgBtn.addEventListener('click', () => {
      this.tattooRenderer.exportSVG('tattoo-design.svg');
      this.showNotification('SVG exported', 'success', 2000);
    });

    // Flatten blocks button
    const flattenBtn = document.getElementById('btn-flatten');
    flattenBtn.addEventListener('click', () => {
      this.flattenBlocks();
    });
  }

  flattenBlocks() {
    const blocks = this.blockManager.getAllBlocks();
    if (blocks.length === 0) {
      this.showNotification('No blocks to flatten', 'warning', 2000);
      return;
    }

    // Save block data for undo
    const sourceBlocksData = blocks.map(b => b.toJSON());

    // Perform flatten
    const result = this.blockFlattener.flattenAndApply();

    if (result.mergedCount > 0) {
      // Get the IDs of the merged meshes that were created
      const mergedMeshIds = result.mergedMeshes.map(m => m.id);

      // Create undo action
      this.history.push(createFlattenAction(
        this.blockManager,
        sourceBlocksData,
        mergedMeshIds
      ));

      this.showNotification(
        `Flattened ${result.blocksRemoved} blocks into ${result.mergedCount} merged mesh(es)`,
        'success',
        3000
      );

      // Update block count display
      this.updateBlockCount();

      // Trigger auto-save
      this.debouncedAutoSave();

      // Re-render tattoo mode if enabled
      if (this.tattooRenderer.enabled) {
        this.tattooRenderer.render();
      }
    } else {
      this.showNotification('No blocks were flattened', 'info', 2000);
    }
  }

  updateColorSwatchSelection() {
    document.querySelectorAll('.color-swatch').forEach(s => {
      const swatchColor = this.rgbToHex(s.style.background);
      s.classList.toggle('active', swatchColor === this.currentColor.toLowerCase());
    });
  }

  rgbToHex(rgb) {
    if (rgb.startsWith('#')) return rgb.toLowerCase();
    const match = rgb.match(/\d+/g);
    if (!match) return rgb;
    return '#' + match.slice(0, 3).map(x => {
      const hex = parseInt(x).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }

  generateColorPalette() {
    // Get unique colors from all blocks
    const colorSet = new Set();
    for (const block of this.blockManager.getAllBlocks()) {
      colorSet.add(block.color.toLowerCase());
      if (block.emissive?.enabled) {
        colorSet.add(block.emissive.color.toLowerCase());
      }
    }

    const colors = Array.from(colorSet);
    const cellSize = 32;
    const columns = 8;
    const rows = Math.ceil(colors.length / columns);
    const width = columns * cellSize;
    const height = Math.max(rows * cellSize + 20, cellSize + 20);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px monospace';
    ctx.fillText(`Color Palette (${colors.length} colors)`, 4, 14);

    // Draw colors
    colors.forEach((color, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      const x = col * cellSize;
      const y = 20 + row * cellSize;

      ctx.fillStyle = color;
      ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);

      // Border
      ctx.strokeStyle = '#333333';
      ctx.strokeRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
    });

    return canvas;
  }

  updateSelectionUI(block = null) {
    const selectedBlocks = this.blockManager.getSelectedBlocks();
    const count = selectedBlocks.length;

    if (count === 0) {
      this.selectionProps.style.display = 'none';
      return;
    }

    this.selectionProps.style.display = 'block';

    if (count === 1) {
      // Single selection - show detailed info
      const singleBlock = selectedBlocks[0];
      document.getElementById('prop-type').textContent = singleBlock.type;
      document.getElementById('prop-position').textContent =
        `${singleBlock.gridPosition.x}, ${singleBlock.gridPosition.y}, ${singleBlock.gridPosition.z}`;
      document.getElementById('prop-rotation').textContent = `${singleBlock.rotation.y}°`;
    } else {
      // Multi-selection - show summary
      document.getElementById('prop-type').textContent = `${count} blocks`;
      document.getElementById('prop-position').textContent = 'multiple';
      document.getElementById('prop-rotation').textContent = 'various';
    }

    // Copy button - copy all selected blocks
    document.getElementById('btn-copy').onclick = () => {
      if (count === 1) {
        this.clipboard = selectedBlocks[0].toJSON();
      } else {
        // For multi-selection, store array of blocks
        this.clipboard = selectedBlocks.map(b => b.toJSON());
      }
    };

    // Delete button - delete all selected blocks
    document.getElementById('btn-delete-sel').onclick = () => {
      this.deleteSelectedBlocks();
    };

    // Update keyframe markers to highlight selected blocks
    this.updateKeyframeMarkers();
  }

  deleteSelectedBlocks() {
    const selectedBlocks = this.blockManager.getSelectedBlocks();
    if (selectedBlocks.length === 0) return;

    // Create history actions for all blocks
    for (const block of selectedBlocks) {
      this.history.push(createRemoveBlockAction(this.blockManager, block));
      this.blockManager.removeBlock(block.id);
    }
    this.updateSelectionUI();
  }

  setupMenuBar() {
    // New project
    document.getElementById('btn-new').addEventListener('click', () => {
      if (confirm('Create new project? Unsaved changes will be lost.')) {
        this.projectManager.newProject();
        this.updateAnimationSelect();
        this.updateLayerUI();
      }
    });

    // Save project
    document.getElementById('btn-save').addEventListener('click', () => {
      this.projectManager.save();
    });

    // Load project
    document.getElementById('btn-load').addEventListener('click', () => {
      this.fileInput.click();
    });

    // Clear project
    document.getElementById('btn-clear').addEventListener('click', () => {
      this.clearProject();
    });

    // Templates
    this.setupTemplateMenu();

    this.fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          await this.projectManager.load(file);
          this.updateAnimationSelect();
          this.updateLayerUI();
          this.updateBlockVisibility();
          this.showNotification(`Project "${this.projectManager.currentProjectName}" loaded successfully`, 'success');
        } catch (err) {
          // Error notification is handled by ProjectManager's onError callback
        }
      }
      this.fileInput.value = '';
    });

    // Export - open modal
    document.getElementById('btn-export').addEventListener('click', () => {
      this.showExportModal();
    });

    // Setup export modal handlers
    this.setupExportModal();

    // Bake lighting (texture-based for better compatibility)
    document.getElementById('btn-bake').addEventListener('click', () => {
      const emissiveBlocks = this.blockManager.getAllBlocks().filter(b => b.emissive?.enabled);
      if (emissiveBlocks.length === 0) {
        alert('No emissive blocks found. Add blocks with "Enable Glow" checked to bake lighting.');
        return;
      }

      console.log('Starting texture-based light bake...');
      const startTime = performance.now();

      // Bake to texture atlas
      const { texture, uvData, atlasWidth, atlasHeight } = this.textureBaker.bake(this.blockManager);
      this.bakedTexture = texture;
      this.bakedUVData = uvData;

      // Also apply vertex colors for preview in editor
      const vertexColors = this.lightBaker.bake(this.blockManager);
      this.lightBaker.apply(this.blockManager, vertexColors);

      const elapsed = (performance.now() - startTime).toFixed(1);
      console.log(`Light bake completed in ${elapsed}ms (atlas: ${atlasWidth}x${atlasHeight})`);
      alert(`Lighting baked from ${emissiveBlocks.length} emissive block(s) in ${elapsed}ms.\nTexture atlas: ${atlasWidth}x${atlasHeight}\nExport to see the result in Blender/Godot.`);
    });

    // Clear baked lighting
    document.getElementById('btn-clear-bake').addEventListener('click', () => {
      this.lightBaker.clear(this.blockManager);
      this.bakedTexture = null;
      this.bakedUVData = null;
      console.log('Baked lighting cleared');
    });

    // Undo/Redo
    document.getElementById('btn-undo').addEventListener('click', () => {
      this.history.undo();
    });

    document.getElementById('btn-redo').addEventListener('click', () => {
      this.history.redo();
    });

    // Toggle timeline visibility with persistence
    const timelinePanel = document.getElementById('timeline-panel');
    const toggleBtn = document.getElementById('btn-toggle-timeline');

    // Restore saved state
    const timelineHidden = localStorage.getItem('timelineHidden') === 'true';
    if (timelineHidden) {
      timelinePanel.style.display = 'none';
      toggleBtn.classList.remove('active');
    } else {
      toggleBtn.classList.add('active');
    }

    toggleBtn.addEventListener('click', () => {
      const isHidden = timelinePanel.style.display === 'none';
      timelinePanel.style.display = isHidden ? '' : 'none';
      toggleBtn.classList.toggle('active', isHidden);
      localStorage.setItem('timelineHidden', !isHidden);
    });
  }

  toggleUIVisibility() {
    // Initialize state if not set
    if (this.uiHidden === undefined) {
      this.uiHidden = false;
    }

    this.uiHidden = !this.uiHidden;
    const display = this.uiHidden ? 'none' : '';

    // Hide/show all UI panels
    const uiElements = [
      'menubar',
      'toolbar',
      'right-panel',
      'timeline-panel',
      'info'
    ];

    uiElements.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.display = display;
      }
    });

    // Save state to localStorage
    localStorage.setItem('uiHidden', this.uiHidden);

    // Show a temporary message when hiding UI
    if (this.uiHidden) {
      this.showNotification('UI hidden. Press U to restore.', 'info', 3000);
    }
  }

  setupTimeline() {
    const animSelect = document.getElementById('anim-select');
    const slider = document.getElementById('timeline-slider');
    const timeDisplay = document.getElementById('time-display');
    const loopCheckbox = document.getElementById('anim-loop');
    const keyframesContainer = document.getElementById('keyframes-container');

    const durationInput = document.getElementById('anim-duration');
    const speedSelect = document.getElementById('anim-speed');
    const curveSelect = document.getElementById('anim-curve');

    // Add animation
    document.getElementById('btn-add-anim').addEventListener('click', () => {
      const name = prompt('Animation name:', 'Animation');
      if (name) {
        const duration = parseInt(durationInput.value) || 2000;
        const anim = this.animator.createAnimation(name, duration);
        this.updateAnimationSelect();
        animSelect.value = anim.id;
        this.animator.setCurrentAnimation(anim.id);
        slider.max = anim.duration;
        this.showNotification(`Created animation "${name}"`, 'success', 2000);
      }
    });

    // Delete animation
    document.getElementById('btn-delete-anim').addEventListener('click', () => {
      if (this.animator.currentAnimation) {
        const name = this.animator.currentAnimation.name;
        if (confirm(`Delete animation "${name}"?`)) {
          this.animator.deleteAnimation(this.animator.currentAnimation.id);
          this.updateAnimationSelect();
          animSelect.value = '';
          this.updateKeyframeMarkers();
          this.showNotification(`Deleted animation "${name}"`, 'info', 2000);
        }
      } else {
        this.showNotification('No animation selected', 'warning', 2000);
      }
    });

    // Select animation
    animSelect.addEventListener('change', () => {
      const id = animSelect.value;
      if (id) {
        this.animator.setCurrentAnimation(id);
        const anim = this.animator.currentAnimation;
        slider.max = anim.duration;
        durationInput.value = anim.duration;
        loopCheckbox.checked = anim.loop;
        curveSelect.value = anim.curve || 'easeInOut';
        this.updateKeyframeMarkers();
      } else {
        this.animator.currentAnimation = null;
        this.updateKeyframeMarkers();
      }
    });

    // Duration change
    durationInput.addEventListener('change', () => {
      if (this.animator.currentAnimation) {
        const newDuration = Math.max(100, parseInt(durationInput.value) || 2000);
        durationInput.value = newDuration;
        this.animator.currentAnimation.duration = newDuration;
        slider.max = newDuration;
        this.updateKeyframeMarkers();
      }
    });

    // Playback speed change
    speedSelect.addEventListener('change', () => {
      this.animator.playbackSpeed = parseFloat(speedSelect.value);
    });

    // Play/Pause
    document.getElementById('btn-play').addEventListener('click', () => {
      if (this.animator.isPlaying) {
        this.animator.pause();
      } else {
        this.animator.play();
      }
    });

    // Stop
    document.getElementById('btn-stop').addEventListener('click', () => {
      this.animator.stop();
    });

    // Loop toggle
    loopCheckbox.addEventListener('change', () => {
      if (this.animator.currentAnimation) {
        this.animator.currentAnimation.loop = loopCheckbox.checked;
      }
    });

    // Curve type change
    curveSelect.addEventListener('change', () => {
      if (this.animator.currentAnimation) {
        this.animator.currentAnimation.curve = curveSelect.value;
      }
    });

    // Timeline slider
    slider.addEventListener('input', () => {
      this.animator.setTime(parseInt(slider.value));
    });

    // Add keyframe
    document.getElementById('btn-add-keyframe').addEventListener('click', () => {
      if (this.animator.currentAnimation) {
        const selectedBlocks = this.blockManager.getSelectedBlocks();
        if (selectedBlocks.length > 0) {
          const count = this.animator.addKeyframesForSelection(selectedBlocks);
          this.updateKeyframeMarkers();
          const time = (this.animator.currentTime / 1000).toFixed(2);
          this.showNotification(`Added keyframe${count > 1 ? 's' : ''} for ${count} block${count > 1 ? 's' : ''} at ${time}s`, 'success', 2000);
        } else {
          this.showNotification('Select blocks to add keyframes', 'warning', 2000);
        }
      } else {
        this.showNotification('Create an animation first', 'warning', 2000);
      }
    });

    // Remove keyframe
    document.getElementById('btn-remove-keyframe').addEventListener('click', () => {
      if (this.animator.currentAnimation) {
        const selectedBlocks = this.blockManager.getSelectedBlocks();
        if (selectedBlocks.length > 0) {
          const blockIds = selectedBlocks.map(b => b.id);
          const count = this.animator.removeKeyframesForSelection(blockIds);
          this.updateKeyframeMarkers();
          if (count > 0) {
            const time = (this.animator.currentTime / 1000).toFixed(2);
            this.showNotification(`Removed ${count} keyframe${count > 1 ? 's' : ''} at ${time}s`, 'info', 2000);
          } else {
            this.showNotification('No keyframes at current time for selected blocks', 'warning', 2000);
          }
        } else {
          this.showNotification('Select blocks to remove keyframes', 'warning', 2000);
        }
      }
    });

    // Time update callback
    this.animator.onTimeUpdate = (time) => {
      slider.value = time;
      timeDisplay.textContent = (time / 1000).toFixed(2) + 's';
    };

    // Play state callback
    this.animator.onPlayStateChange = (playing) => {
      document.getElementById('btn-play').textContent = playing ? '❚❚' : '▶';
    };
  }

  updateAnimationSelect() {
    const select = document.getElementById('anim-select');
    select.innerHTML = '<option value="">-- No Animation --</option>';

    for (const anim of this.animator.getAllAnimations()) {
      const option = document.createElement('option');
      option.value = anim.id;
      option.textContent = anim.name;
      select.appendChild(option);
    }
  }

  updateKeyframeMarkers() {
    const container = document.getElementById('keyframes-container');
    container.innerHTML = '';

    if (!this.animator.currentAnimation) return;

    const duration = this.animator.currentAnimation.duration;
    const keyframes = this.animator.currentAnimation.keyframes;
    const selectedBlockIds = new Set(this.blockManager.getSelectedBlocks().map(b => b.id));

    // Group keyframes by time
    const timeMap = new Map();
    for (const kf of keyframes) {
      if (!timeMap.has(kf.time)) {
        timeMap.set(kf.time, { total: 0, selected: 0 });
      }
      const entry = timeMap.get(kf.time);
      entry.total++;
      if (selectedBlockIds.has(kf.blockId)) {
        entry.selected++;
      }
    }

    // Create markers
    for (const [time, info] of timeMap) {
      const marker = document.createElement('div');
      marker.className = 'keyframe-marker';
      if (info.selected > 0) {
        marker.classList.add('selected');
      }
      marker.style.left = `${(time / duration) * 100}%`;
      marker.title = `${time}ms - ${info.total} block${info.total > 1 ? 's' : ''}${info.selected > 0 ? ` (${info.selected} selected)` : ''}`;

      // Click to jump to time
      marker.addEventListener('click', () => {
        this.animator.setTime(time);
      });

      container.appendChild(marker);
    }
  }

  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Don't trigger shortcuts when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key.toLowerCase()) {
        // Tools
        case '1': this.setTool('place'); break;
        case '2': this.setTool('delete'); break;
        case '3': this.setTool('select'); break;
        case '4': this.setTool('paint'); break;
        case '5': this.setTool('pick'); break;
        case '6': this.setTool('shape'); break;

        // Rotate
        case 'r': this.rotateBlock(); break;

        // Toggle UI visibility
        case 'u':
          this.toggleUIVisibility();
          break;

        // Undo/Redo
        case 'z':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            this.history.undo();
          }
          break;
        case 'y':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            this.history.redo();
          }
          break;

        // Copy/Paste
        case 'c':
          if ((e.ctrlKey || e.metaKey) && this.blockManager.getSelectionCount() > 0) {
            const selectedBlocks = this.blockManager.getSelectedBlocks();
            if (selectedBlocks.length === 1) {
              this.clipboard = selectedBlocks[0].toJSON();
            } else {
              this.clipboard = selectedBlocks.map(b => b.toJSON());
            }
          }
          break;
        case 'v':
          if ((e.ctrlKey || e.metaKey) && this.clipboard) {
            if (Array.isArray(this.clipboard)) {
              // Paste multiple blocks
              for (const blockData of this.clipboard) {
                const data = { ...blockData };
                data.position = {
                  x: data.position.x + 1,
                  y: data.position.y,
                  z: data.position.z + 1
                };
                delete data.id;
                const block = this.blockManager.addBlock(data);
                if (block) {
                  this.history.push(createAddBlockAction(this.blockManager, data, block));
                }
              }
            } else {
              // Paste single block
              const data = { ...this.clipboard };
              data.position = {
                x: data.position.x + 1,
                y: data.position.y,
                z: data.position.z + 1
              };
              delete data.id;
              const block = this.blockManager.addBlock(data);
              if (block) {
                this.history.push(createAddBlockAction(this.blockManager, data, block));
              }
            }
          }
          break;

        // Delete
        case 'delete':
        case 'backspace':
          if (this.blockManager.getSelectionCount() > 0) {
            e.preventDefault();
            this.deleteSelectedBlocks();
          }
          break;

        // Animation
        case ' ':
          e.preventDefault();
          if (this.animator.currentAnimation) {
            if (this.animator.isPlaying) {
              this.animator.pause();
            } else {
              this.animator.play();
            }
          }
          break;
        case 'k':
        case '+':
        case '=': // = key (unshifted + on most keyboards)
          if (this.animator.currentAnimation) {
            const selectedBlocks = this.blockManager.getSelectedBlocks();
            if (selectedBlocks.length > 0) {
              const count = this.animator.addKeyframesForSelection(selectedBlocks);
              this.updateKeyframeMarkers();
              const time = (this.animator.currentTime / 1000).toFixed(2);
              this.showNotification(`Added keyframe${count > 1 ? 's' : ''} for ${count} block${count > 1 ? 's' : ''} at ${time}s`, 'success', 2000);
            } else {
              this.showNotification('Select blocks to add keyframes', 'warning', 2000);
            }
          } else {
            this.showNotification('Create an animation first (+ Anim button)', 'warning', 2000);
          }
          break;
        case '-':
        case '_':
          if (this.animator.currentAnimation) {
            const selectedBlocks = this.blockManager.getSelectedBlocks();
            if (selectedBlocks.length > 0) {
              const blockIds = selectedBlocks.map(b => b.id);
              const count = this.animator.removeKeyframesForSelection(blockIds);
              this.updateKeyframeMarkers();
              if (count > 0) {
                const time = (this.animator.currentTime / 1000).toFixed(2);
                this.showNotification(`Removed ${count} keyframe${count > 1 ? 's' : ''} at ${time}s`, 'info', 2000);
              } else {
                this.showNotification('No keyframes at current time for selected blocks', 'warning', 2000);
              }
            } else {
              this.showNotification('Select blocks to remove keyframes', 'warning', 2000);
            }
          }
          break;
      }

      // Arrow keys for movement (check separately to handle e.key properly)
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          this.moveSelectedBlock(0, 0, -1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          this.moveSelectedBlock(0, 0, 1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.moveSelectedBlock(-1, 0, 0);
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.moveSelectedBlock(1, 0, 0);
          break;
        case 'PageUp':
          e.preventDefault();
          this.moveSelectedBlock(0, 1, 0);
          break;
        case 'PageDown':
          e.preventDefault();
          this.moveSelectedBlock(0, -1, 0);
          break;
      }
    });
  }

  // Auto-save project to localStorage
  autoSave() {
    try {
      const data = {
        blocks: this.blockManager.toJSON(),
        animations: this.animator.toJSON(),
        layers: this.layerManager.toJSON(),
        cameraBookmarks: this.cameraBookmarks.toJSON(),
        currentColor: this.currentColor,
        currentBlockType: this.currentBlockType,
        currentRotation: this.currentRotation
      };
      localStorage.setItem('blocksProject', JSON.stringify(data));
    } catch (e) {
      console.warn('Auto-save failed:', e);
    }
  }

  // Auto-load project from localStorage
  autoLoad() {
    try {
      const saved = localStorage.getItem('blocksProject');
      if (!saved) return;

      const data = JSON.parse(saved);

      // Load layers first (so blocks can reference them)
      if (data.layers) {
        this.layerManager.fromJSON(data.layers);
        this.updateLayerUI();
      }

      // Load blocks
      if (data.blocks && data.blocks.length > 0) {
        this.blockManager.fromJSON(data.blocks);
        this.updateBlockVisibility();
      }

      // Load animations
      if (data.animations) {
        this.animator.fromJSON(data.animations);
        this.updateAnimationSelect();
      }

      // Load camera bookmarks
      if (data.cameraBookmarks) {
        this.cameraBookmarks.fromJSON(data.cameraBookmarks);
        this.updateCameraBookmarksUI();
      }

      // Restore state
      if (data.currentColor) {
        this.currentColor = data.currentColor;
        this.colorInput.value = data.currentColor;
      }
      if (data.currentBlockType) {
        this.currentBlockType = data.currentBlockType;
        this.setBlockType(data.currentBlockType);
      }
      if (data.currentRotation !== undefined) {
        this.currentRotation = data.currentRotation;
      }

      console.log('Project loaded from localStorage');
    } catch (e) {
      console.warn('Auto-load failed:', e);
    }
  }

  showNotification(message, type = 'info', duration = 5000) {
    if (!this.notificationsEl) return;

    const icons = {
      info: 'i',
      success: '✓',
      warning: '!',
      error: '✕'
    };

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <span class="icon">${icons[type] || icons.info}</span>
      <span class="message">${message}</span>
      <button class="close-btn">&times;</button>
    `;

    // Close button handler
    const closeBtn = notification.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      this.dismissNotification(notification);
    });

    this.notificationsEl.appendChild(notification);

    // Auto dismiss after duration
    if (duration > 0) {
      setTimeout(() => {
        this.dismissNotification(notification);
      }, duration);
    }

    return notification;
  }

  dismissNotification(notification) {
    if (!notification || !notification.parentNode) return;

    notification.classList.add('fade-out');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  // Clear project and localStorage
  clearProject() {
    if (confirm('Clear all blocks? This cannot be undone.')) {
      this.blockManager.clear();
      this.animator.clear();
      this.layerManager.clear();
      this.cameraBookmarks.clear();
      this.history.clear();
      localStorage.removeItem('blocksProject');
      this.updateAnimationSelect();
      this.updateLayerUI();
      this.updateCameraBookmarksUI();
      this.updateSelectionUI(null);
    }
  }

  setupTemplateMenu() {
    const modal = document.getElementById('templates-modal');
    const templatesList = document.getElementById('templates-list');
    const categories = getTemplateCategories();

    // Build the templates list with collapsible categories
    categories.forEach((category, index) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'template-category';
      // Collapse all except first few categories by default
      if (index > 2) {
        categoryDiv.classList.add('collapsed');
      }

      // Category header
      const header = document.createElement('div');
      header.className = 'template-category-header';
      header.innerHTML = `
        <span class="arrow">▼</span>
        <span class="label">${category.label}</span>
        <span class="count">${category.templates.length}</span>
      `;
      header.addEventListener('click', () => {
        categoryDiv.classList.toggle('collapsed');
      });
      categoryDiv.appendChild(header);

      // Template items container
      const content = document.createElement('div');
      content.className = 'template-category-content';

      category.templates.forEach(template => {
        const item = document.createElement('button');
        item.className = 'template-item';
        item.innerHTML = `
          <span class="template-name">${template.name}</span>
          <span class="template-desc">${template.description}</span>
        `;
        item.addEventListener('click', () => {
          this.loadTemplate(template.id);
          this.hideTemplatesModal();
        });
        content.appendChild(item);
      });

      categoryDiv.appendChild(content);
      templatesList.appendChild(categoryDiv);
    });

    // Open modal button
    document.getElementById('btn-templates').addEventListener('click', () => {
      this.showTemplatesModal();
    });

    // Close modal handlers
    document.getElementById('templates-modal-close').addEventListener('click', () => {
      this.hideTemplatesModal();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.hideTemplatesModal();
      }
    });
  }

  showTemplatesModal() {
    document.getElementById('templates-modal').style.display = 'flex';
  }

  hideTemplatesModal() {
    document.getElementById('templates-modal').style.display = 'none';
  }

  loadTemplate(templateId) {
    const template = getTemplate(templateId);
    if (!template) return;

    const addToExisting = this.blockManager.getBlockCount() > 0
      ? confirm(`Add "${template.name}" to existing blocks?\n\nClick OK to add, Cancel to replace all.`)
      : false;

    if (!addToExisting) {
      this.blockManager.clear();
      this.history.clear();
    }

    // Place template blocks
    let placedCount = 0;
    for (const blockDef of template.blocks) {
      const blockData = {
        type: blockDef.type || 'cube',
        position: { ...blockDef.position },
        color: blockDef.color || this.currentColor,
        rotation: blockDef.rotation || { x: 0, y: 0, z: 0 },
        emissive: blockDef.emissive || null
      };

      // Check for overlap before placing
      if (!this.blockManager.wouldOverlapAt(blockData.type, blockData.position)) {
        const block = this.blockManager.addBlock(blockData);
        if (block) placedCount++;
      }
    }

    console.log(`Placed ${placedCount}/${template.blocks.length} blocks from template "${template.name}"`);
  }

  showExportModal() {
    const modal = document.getElementById('export-modal');
    modal.style.display = 'flex';

    // Update statistics
    this.updateExportStats();
  }

  hideExportModal() {
    const modal = document.getElementById('export-modal');
    modal.style.display = 'none';
  }

  updateExportStats() {
    const cullFaces = document.getElementById('opt-face-cull').checked;
    const mergeCubes = document.getElementById('opt-merge-cubes').checked;

    const stats = this.exporter.getOptimizationStats(this.blockManager, {
      cullFaces,
      mergeCubes
    });

    document.getElementById('stat-blocks').textContent = stats.blockCount;
    document.getElementById('stat-faces').textContent = stats.originalFaces;
    document.getElementById('stat-optimized').textContent =
      `${stats.optimizedFaces} (-${stats.reduction}%)`;
  }

  setupExportModal() {
    const modal = document.getElementById('export-modal');

    // Close handlers
    document.getElementById('export-modal-close').addEventListener('click', () => {
      this.hideExportModal();
    });

    document.getElementById('export-cancel').addEventListener('click', () => {
      this.hideExportModal();
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.hideExportModal();
      }
    });

    // Update stats when options change
    document.getElementById('opt-face-cull').addEventListener('change', () => {
      this.updateExportStats();
    });

    document.getElementById('opt-merge-cubes').addEventListener('change', () => {
      this.updateExportStats();
    });

    // Export confirm
    document.getElementById('export-confirm').addEventListener('click', async () => {
      await this.performExport();
    });
  }

  async performExport() {
    // Gather options from modal
    const formatGLB = document.querySelector('input[name="export-format"][value="glb"]').checked;
    const cullFaces = document.getElementById('opt-face-cull').checked;
    const mergeCubes = document.getElementById('opt-merge-cubes').checked;
    const batchMaterials = document.getElementById('opt-material-batch').checked;
    const deduplicateVertices = document.getElementById('opt-deduplicate').checked;
    const mergeAll = document.getElementById('opt-merge-all').checked;
    const useInstancing = document.getElementById('opt-instancing').checked;
    const includeAnimations = document.getElementById('inc-animations').checked;
    const includeBakedLighting = document.getElementById('inc-baked-lighting').checked;
    const exportLightmap = document.getElementById('dbg-lightmap').checked;
    const exportDebugColors = document.getElementById('dbg-colors').checked;
    const exportPalette = document.getElementById('dbg-palette').checked;
    const exportJson = document.getElementById('dbg-json').checked;

    const exportBtn = document.getElementById('export-confirm');
    const originalText = exportBtn.textContent;
    exportBtn.textContent = 'Exporting...';
    exportBtn.disabled = true;

    try {
      // Main export
      const data = await this.exporter.exportScene(this.blockManager, {
        binary: formatGLB,
        includeAnimations,
        animator: this.animator,
        bakedTexture: includeBakedLighting ? this.bakedTexture : null,
        uvData: includeBakedLighting ? this.bakedUVData : null,
        cullFaces,
        mergeCubes,
        batchMaterials,
        deduplicateVertices,
        mergeAll,
        useInstancing
      });

      const filename = formatGLB ? 'model.glb' : 'model.gltf';
      this.exporter.downloadFile(data, filename, formatGLB);

      // Debug exports
      if (exportJson && formatGLB) {
        // Also export GLTF JSON for inspection
        const jsonData = await this.exporter.exportScene(this.blockManager, {
          binary: false,
          includeAnimations,
          animator: this.animator,
          bakedTexture: includeBakedLighting ? this.bakedTexture : null,
          uvData: includeBakedLighting ? this.bakedUVData : null
        });
        this.exporter.downloadFile(jsonData, 'model.gltf', false);
      }

      if (exportLightmap && this.bakedTexture) {
        this.lightBaker.downloadCanvasAsPNG(this.bakedTexture, 'baked_lightmap.png');
      }

      if (exportDebugColors) {
        const debugCanvas = this.lightBaker.generateDebugTexture(this.blockManager);
        this.lightBaker.downloadCanvasAsPNG(debugCanvas, 'debug_colors.png');
      }

      if (exportPalette) {
        const paletteCanvas = this.generateColorPalette();
        this.lightBaker.downloadCanvasAsPNG(paletteCanvas, 'color_palette.png');
      }

      console.log('Export completed successfully');
      this.hideExportModal();
      this.showNotification('Export completed successfully', 'success');

    } catch (err) {
      this.showNotification('Export failed: ' + err.message, 'error');
      console.error('Export error:', err);
    } finally {
      exportBtn.textContent = originalText;
      exportBtn.disabled = false;
    }
  }
}

// Start the application
const app = new App();

// Make app instance globally available for video export with stylized rendering
window.appInstance = app;
