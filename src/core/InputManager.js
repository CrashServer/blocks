import * as THREE from 'three';
import { BLOCK_HEIGHT_MULTIPLIERS } from '../blocks/Block.js';
import { BLOCK_Y_OFFSETS } from '../blocks/BlockTypes.js';

export class InputManager {
  constructor(canvas, camera) {
    this.canvas = canvas;
    this.camera = camera;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.currentTool = 'place';
    this.onPlace = null;
    this.onDelete = null;
    this.onSelect = null;
    this.onPaint = null;
    this.onPick = null;
    this.onMouseMove = null;
    this.onReplace = null;
    this.onPickBlock = null; // Alt+click to pick block type and color

    // Shape brush callbacks
    this.onShapeDrag = null;
    this.onShapePlace = null;

    // Scatter tool callback
    this.onScatterPlace = null;

    // Drag state for shape brush
    this.isDragging = false;
    this.dragStartPos = null;
    this.dragStartResult = null;

    // Paint drag state
    this.isPainting = false;
    this.lastPaintedBlock = null;

    this.raycastTargets = [];
    this.gridPlane = null;

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
    this.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.canvas.addEventListener('mouseup', this.handleMouseUp);
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('keydown', this.handleKeyDown);
  }

  setGridPlane(plane) {
    this.gridPlane = plane;
  }

  setRaycastTargets(targets) {
    this.raycastTargets = targets;
  }

  setTool(tool) {
    this.currentTool = tool;
  }

  handleMouseMove = (event) => {
    this.updateMouse(event);

    const result = this.raycast();

    // Handle shape brush dragging
    if (this.isDragging && this.currentTool === 'shape' && this.onShapeDrag) {
      if (result && this.dragStartPos) {
        const endPos = result.placementPosition;
        this.onShapeDrag(this.dragStartPos, endPos);
      }
      return; // Don't call normal onMouseMove during shape drag
    }

    // Handle continuous painting while mouse is held down
    if (this.isPainting && this.currentTool === 'paint' && this.onPaint) {
      if (result && result.block) {
        // Only paint if we moved to a different block or face
        const blockId = result.block.id;
        const faceKey = `${blockId}_${result.normal.x}_${result.normal.y}_${result.normal.z}`;
        if (faceKey !== this.lastPaintedBlock) {
          this.onPaint(result, false); // continuous paint, no shift
          this.lastPaintedBlock = faceKey;
        }
      }
    }

    if (this.onMouseMove) {
      this.onMouseMove(result);
    }
  }

  handleMouseDown = (event) => {
    // Handle left click (0) and middle click (1)
    if (event.button !== 0 && event.button !== 1) return;

    this.updateMouse(event);
    const result = this.raycast();

    if (!result) return;

    // Middle mouse button always deletes
    if (event.button === 1) {
      if (this.onDelete && result.block) {
        this.onDelete(result.block);
      }
      return;
    }

    // Ctrl+click replaces block with current type/color
    if (event.ctrlKey && result.block) {
      if (this.onReplace) {
        this.onReplace(result.block);
      }
      return;
    }

    // Alt+click picks block type and color
    if (event.altKey && result.block) {
      if (this.onPickBlock) {
        this.onPickBlock(result.block);
      }
      return;
    }

    switch (this.currentTool) {
      case 'place':
        if (this.onPlace) {
          this.onPlace(result, event.shiftKey);
        }
        break;

      case 'delete':
        if (this.onDelete && result.block) {
          this.onDelete(result.block);
        }
        break;

      case 'select':
        if (this.onSelect) {
          this.onSelect(result.block || null, event.shiftKey);
        }
        break;

      case 'paint':
        if (this.onPaint && result.block) {
          this.isPainting = true;
          const blockId = result.block.id;
          const faceKey = `${blockId}_${result.normal.x}_${result.normal.y}_${result.normal.z}`;
          this.lastPaintedBlock = faceKey;
          this.onPaint(result, event.shiftKey);
        }
        break;

      case 'pick':
        if (this.onPick && result.block) {
          this.onPick(result);
        }
        break;

      case 'shape':
        // Start drag for shape brush
        this.isDragging = true;
        this.dragStartPos = result.placementPosition;
        this.dragStartResult = result;
        // Initial preview at start position
        if (this.onShapeDrag) {
          this.onShapeDrag(this.dragStartPos, this.dragStartPos);
        }
        break;

      case 'scatter':
        // Scatter tool - generate from click point
        if (this.onScatterPlace) {
          this.onScatterPlace(result);
        }
        break;
    }
  }

  handleMouseUp = (event) => {
    if (event.button !== 0) return;

    // Handle shape brush drag end
    if (this.isDragging && this.currentTool === 'shape') {
      this.updateMouse(event);
      const result = this.raycast();

      if (result && this.dragStartPos && this.onShapePlace) {
        const endPos = result.placementPosition;
        this.onShapePlace(this.dragStartPos, endPos);
      }

      this.isDragging = false;
      this.dragStartPos = null;
      this.dragStartResult = null;
    }

    // End paint dragging
    if (this.isPainting) {
      this.isPainting = false;
      this.lastPaintedBlock = null;
    }
  }

  handleKeyDown = (event) => {
    // Tool shortcuts are now handled in main.js for better organization
  }

  updateMouse(event) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  raycast() {
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // First check against blocks
    const blockIntersects = this.raycaster.intersectObjects(this.raycastTargets, false);

    if (blockIntersects.length > 0) {
      const hit = blockIntersects[0];
      const block = hit.object.userData.block;
      const merged = hit.object.userData.merged;

      // Get the normal in world space
      const normal = hit.face.normal.clone();
      normal.transformDirection(hit.object.matrixWorld);

      // Round normal to axis-aligned (handles floating point)
      normal.x = Math.abs(normal.x) > 0.5 ? Math.sign(normal.x) : 0;
      normal.y = Math.abs(normal.y) > 0.5 ? Math.sign(normal.y) : 0;
      normal.z = Math.abs(normal.z) > 0.5 ? Math.sign(normal.z) : 0;

      // Handle merged meshes - calculate placement from hit point
      if (merged && !block) {
        const hitPoint = hit.point;
        let placementPos = {
          x: Math.floor(hitPoint.x + normal.x * 0.5),
          y: Math.floor(hitPoint.y + normal.y * 0.5),
          z: Math.floor(hitPoint.z + normal.z * 0.5)
        };

        // For top faces, place on top of the surface
        if (normal.y > 0) {
          placementPos.y = Math.floor(hitPoint.y);
          placementPos.surfaceY = hitPoint.y;
        }

        return {
          type: 'merged',
          point: hit.point,
          normal: normal,
          block: null,
          merged: merged,
          placementPosition: placementPos,
          faceIndex: hit.faceIndex
        };
      }

      // Safety check: if no block reference, fall through to grid plane check
      if (!block) {
        // Continue to grid plane check below
      } else {
      // Get the hit block's actual bounds
      const hitBlock = block;
      const hitPos = hitBlock.gridPosition;
      const hitDims = hitBlock.dimensions;
      const hitScale = hitBlock.scale || 1;

      // Calculate block's actual height using the multiplier, Y offset, and scale
      const heightMultiplier = BLOCK_HEIGHT_MULTIPLIERS[hitBlock.type] || 1;
      const yOffset = (BLOCK_Y_OFFSETS[hitBlock.type] || 0) * hitScale;
      const actualHeight = hitDims.h * heightMultiplier * hitScale;

      // Calculate placement position based on which face was hit
      let placementPos = {
        x: hitPos.x,
        y: hitPos.y,
        z: hitPos.z
      };

      if (normal.y > 0) {
        // Top face - calculate surface height, let main.js decide final Y based on block type
        const topSurface = hitPos.y + yOffset + actualHeight;
        placementPos.y = Math.floor(topSurface);
        placementPos.surfaceY = topSurface; // Pass actual surface for smart placement
      } else if (normal.y < 0) {
        // Bottom face - place below (assuming new block is 1 unit, adjust in main.js if needed)
        placementPos.y = hitPos.y - 1;
      } else if (normal.x !== 0) {
        // Side face X - move by the hit block's scaled width
        placementPos.x = hitPos.x + normal.x * hitDims.w * hitScale;
      } else if (normal.z !== 0) {
        // Side face Z - move by the hit block's scaled depth
        placementPos.z = hitPos.z + normal.z * hitDims.d * hitScale;
      }

      return {
        type: 'block',
        point: hit.point,
        normal: normal,
        block: block,
        placementPosition: placementPos,
        faceIndex: hit.faceIndex
      };
      } // End of else block for valid block reference
    }

    // Then check against grid plane
    if (this.gridPlane) {
      const planeIntersects = this.raycaster.intersectObject(this.gridPlane, false);

      if (planeIntersects.length > 0) {
        const hit = planeIntersects[0];
        const placementPos = {
          x: Math.floor(hit.point.x),
          y: 0,
          z: Math.floor(hit.point.z)
        };

        return {
          type: 'grid',
          point: hit.point,
          normal: new THREE.Vector3(0, 1, 0),
          block: null,
          placementPosition: placementPos
        };
      }
    }

    return null;
  }

  dispose() {
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.canvas.removeEventListener('mousedown', this.handleMouseDown);
    this.canvas.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('keydown', this.handleKeyDown);
  }
}
