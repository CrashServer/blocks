import * as THREE from 'three';
import { Block } from '../blocks/Block.js';
import { getWorldBounds, boundsOverlap, getBlockBounds } from '../blocks/BlockTypes.js';
import { validateAndSanitizeBlocks } from '../utils/validation.js';

// Define block orientations for crossing logic
// Y = vertical (pillars), X = horizontal along X (beams), Z = horizontal along Z
const BLOCK_ORIENTATION = {
  // Vertical blocks (extend in Y) - these are narrow and can cross beams
  pillar: 'Y',
  pillar2: 'Y',
  pillar4: 'Y',
  pillarRound: 'Y',
  pillarRound2: 'Y',
  post: 'Y',
  bollard: 'Y',
  downspout: 'Y',
  antenna: 'Y',
  torch: 'Y',
  chain: 'Y',
  finial: 'Y',
  banner: 'Y',
  derrickLeg: 'Y',
  wellHead: 'Y',
  // Horizontal beams along X
  beamX: 'X',
  beam2X: 'X',
  beam4X: 'X',
  beamXLow: 'X',
  beam2XLow: 'X',
  pipeX: 'X',
  conduit: 'X',
  cableX: 'X',
  pipelineX: 'X',
  ductX: 'X',
  moldingX: 'X',
  // Horizontal beams along Z
  beamZ: 'Z',
  beam2Z: 'Z',
  beam4Z: 'Z',
  beamZLow: 'Z',
  beam2ZLow: 'Z',
  pipeZ: 'Z',
  cableZ: 'Z',
  pipelineZ: 'Z',
  ductZ: 'Z',
  moldingZ: 'Z',
  // Vertical pipes (extend in Y but are thin in X and Z)
  pipeY: 'Y',
  cableY: 'Y',
  cableDroop: 'Y',
  cableLoop: 'Y',
  // Diagonal is special - no crossing
  beamDiag: 'XZ',
};

// Blocks that occupy the lower part of a grid cell (height < 1)
const LOWER_BLOCKS = [
  'slab', 'quarter', 'wedgeLow', 'wedgeFlat', 'wedgeCornerLow', 'wedgeCornerFlat',
  'slabSlope', 'ledge', 'gutter', 'capital', 'base', 'channel', 'channelCorner', 'channelEnd',
  'rampCurvedLow', 'roofPeakLow',
  // Additional low blocks
  'step', 'platform', 'landing', 'stairsSingle', 'spiralStep',
  'drain', 'grate', 'grateFloor', 'pallet', 'derrickPlatform', 'pumpBase',
  'awning', 'canopy', 'tarp', 'lightFixture', 'shelf'
];

// Blocks that occupy the upper part of a grid cell (beams with Y offset, slabTop)
const UPPER_BLOCKS = [
  'beamX', 'beam2X', 'beam4X', 'beamZ', 'beam2Z', 'beam4Z', 'beamDiag',
  'slabTop', 'wedgeLowTop', 'wedgeFlatTop', 'slabSlopeTop',
  // Additional upper blocks
  'crossBeam', 'derrickCross'
];

// Blocks that are narrow/centered and don't fill the full cell (can coexist with lower blocks)
const NARROW_BLOCKS = [
  'pillar', 'pillar2', 'pillar4', 'pillarRound', 'pillarRound2',
  'fence', 'fenceZ', 'railing', 'railingZ',
  'wall', 'wall4', 'wall8', 'panel',
  // Additional narrow blocks
  'post', 'bollard', 'downspout', 'antenna', 'torch', 'chain', 'finial', 'banner',
  'conduit', 'conduitCorner', 'cable', 'cableX', 'cableY', 'cableZ',
  'cableElbow', 'cableElbowY', 'cableT', 'cableHanging', 'cableDroop', 'cableLoop',
  'pipeX', 'pipeY', 'pipeZ', 'pipeElbowXZ', 'pipeElbowXZ2', 'pipeElbowXZ3', 'pipeElbowXZ4',
  'pipeElbowXY', 'pipeElbowXY2', 'pipeElbowYZ', 'pipeElbowYZ2', 'pipeCross', 'pipeT', 'pipeTY', 'pipeTZ',
  'derrickLeg', 'wellHead', 'pipelineX', 'pipelineZ'
];

// Pipe and conduit blocks that can connect/overlap at same grid position
const PIPE_BLOCKS = [
  'pipeX', 'pipeY', 'pipeZ',
  'pipeElbowXZ', 'pipeElbowXZ2', 'pipeElbowXZ3', 'pipeElbowXZ4',
  'pipeElbowXY', 'pipeElbowXY2', 'pipeElbowYZ', 'pipeElbowYZ2',
  'pipeCross', 'pipeT', 'pipeTY', 'pipeTZ',
  'conduit', 'conduitCorner', 'conduitElbow', 'conduitElbowY', 'conduitT',
  'cableX', 'cableY', 'cableZ', 'cableElbow', 'cableElbowY', 'cableT'
];

/**
 * Check if two block types can cross/intersect without collision
 * Blocks can cross if they have perpendicular orientations or occupy different vertical spaces
 */
function canBlocksCross(typeA, typeB) {
  const orientA = BLOCK_ORIENTATION[typeA];
  const orientB = BLOCK_ORIENTATION[typeB];

  const aIsLower = LOWER_BLOCKS.includes(typeA);
  const bIsLower = LOWER_BLOCKS.includes(typeB);
  const aIsUpper = UPPER_BLOCKS.includes(typeA);
  const bIsUpper = UPPER_BLOCKS.includes(typeB);
  const aIsNarrow = NARROW_BLOCKS.includes(typeA);
  const bIsNarrow = NARROW_BLOCKS.includes(typeB);
  const aIsPipe = PIPE_BLOCKS.includes(typeA);
  const bIsPipe = PIPE_BLOCKS.includes(typeB);

  // Pipe blocks can connect/overlap at the same grid position
  // This allows building pipe junctions, connections, etc.
  if (aIsPipe && bIsPipe) {
    return true;
  }

  // Lower blocks can coexist with upper blocks (they use different Y ranges)
  if ((aIsLower && bIsUpper) || (bIsLower && aIsUpper)) {
    return true;
  }

  // Lower blocks can coexist with narrow blocks (narrow blocks don't fill the full floor)
  if ((aIsLower && bIsNarrow) || (bIsLower && aIsNarrow)) {
    return true;
  }

  // Pipes can coexist with lower blocks
  if ((aIsPipe && bIsLower) || (bIsPipe && aIsLower)) {
    return true;
  }

  // Upper blocks with upper blocks - not allowed (they'd overlap)
  if (aIsUpper && bIsUpper) {
    return false;
  }

  // Lower blocks with other lower blocks at same position - not allowed
  if (aIsLower && bIsLower) {
    return false;
  }

  // If either block doesn't have a defined orientation, no crossing allowed
  if (!orientA || !orientB) return false;

  // Same orientation = can't cross
  if (orientA === orientB) return false;

  // Special cases that can't cross
  if (orientA === 'XZ' || orientB === 'XZ') return false;

  // Y can cross X or Z, X can cross Y or Z, Z can cross X or Y
  return true;
}

export class BlockManager {
  constructor(scene) {
    this.scene = scene;
    this.blocks = new Map(); // id -> Block
    this.mergedMeshes = new Map(); // id -> MergedMesh
    this.blockGroup = new THREE.Group();
    this.blockGroup.name = 'blocks';
    this.scene.add(this.blockGroup);

    this.selectedBlocks = new Set(); // Multi-selection support
    this.onBlockCountChange = null;
    this.onSelectionChange = null; // Callback when selection changes

    // Free Placement Mode - allows overlapping blocks
    this.freePlacementMode = false;
  }

  // Backward compatibility getter for single selection
  get selectedBlock() {
    if (this.selectedBlocks.size === 0) return null;
    return this.selectedBlocks.values().next().value;
  }

  // Backward compatibility setter
  set selectedBlock(block) {
    this.deselectAll();
    if (block) {
      this.selectedBlocks.add(block);
      block.setSelected(true);
    }
  }

  addBlock(options) {
    const block = new Block(options);

    // Check if the new block would overlap with any existing block (unless free placement mode)
    if (!this.freePlacementMode && this.wouldOverlap(block)) {
      block.dispose();
      return null;
    }

    this.blocks.set(block.id, block);
    this.blockGroup.add(block.mesh);

    this.notifyBlockCountChange();
    return block;
  }

  /**
   * Check if a block would overlap with any existing blocks
   */
  wouldOverlap(newBlock, excludeId = null) {
    const newBounds = getWorldBounds(newBlock);

    for (const existing of this.blocks.values()) {
      if (excludeId && existing.id === excludeId) continue;

      const existingBounds = getWorldBounds(existing);
      if (boundsOverlap(newBounds, existingBounds)) {
        // Check if these block types can cross each other
        if (canBlocksCross(newBlock.type, existing.type)) {
          continue; // Allow crossing
        }
        return true;
      }
    }
    return false;
  }

  /**
   * Check if placing a block type at a position would overlap
   * @param {string} type - Block type
   * @param {Object} position - Position {x, y, z}
   * @param {Object} dimensions - Dimensions {w, h, d}
   * @param {string|Set} excludeIds - Single ID or Set of IDs to exclude from check
   * @param {number} scale - Block scale (1 = normal, 2 = large)
   * @param {Object} rotation - Rotation {x, y, z} in degrees
   */
  wouldOverlapAt(type, position, dimensions = { w: 1, h: 1, d: 1 }, excludeIds = null, scale = 1, rotation = { x: 0, y: 0, z: 0 }) {
    // Free placement mode bypasses all collision checks
    if (this.freePlacementMode) return false;

    // Create a temporary block-like object for getWorldBounds
    const tempBlock = {
      type,
      gridPosition: position,
      dimensions,
      scale,
      rotation
    };
    const newBounds = getWorldBounds(tempBlock);

    // Normalize excludeIds to a Set for consistent checking
    const excludeSet = excludeIds instanceof Set ? excludeIds :
                       (excludeIds ? new Set([excludeIds]) : new Set());

    for (const existing of this.blocks.values()) {
      if (excludeSet.has(existing.id)) continue;

      const existingBounds = getWorldBounds(existing);
      if (boundsOverlap(newBounds, existingBounds)) {
        // Check if these block types can cross each other
        if (canBlocksCross(type, existing.type)) {
          continue; // Allow crossing
        }
        // Debug logging for collision detection
        if (window.DEBUG_COLLISIONS) {
          console.log('[Collision] Cannot place', type, 'at', position, '(scale:', scale + ')');
          console.log('  New bounds:', newBounds);
          console.log('  Conflicts with:', existing.type, 'at', existing.gridPosition, '(scale:', existing.scale + ')');
          console.log('  Existing bounds:', existingBounds);
        }
        return true;
      }
    }
    return false;
  }

  removeBlock(blockId) {
    const block = this.blocks.get(blockId);
    if (!block) return false;

    this.blockGroup.remove(block.mesh);
    block.dispose();
    this.blocks.delete(blockId);

    // Remove from selection if selected
    if (this.selectedBlocks.has(block)) {
      this.selectedBlocks.delete(block);
      this.notifySelectionChange();
    }

    this.notifyBlockCountChange();
    return true;
  }

  removeBlockAtPosition(gridPos) {
    const block = this.getBlockAtPosition(gridPos);
    if (block) {
      return this.removeBlock(block.id);
    }
    return false;
  }

  getBlockAtPosition(gridPos) {
    for (const block of this.blocks.values()) {
      const bp = block.gridPosition;
      if (bp.x === gridPos.x && bp.y === gridPos.y && bp.z === gridPos.z) {
        return block;
      }
    }
    return null;
  }

  getBlockByMesh(mesh) {
    if (mesh.userData.block) {
      return mesh.userData.block;
    }
    return null;
  }

  selectBlock(block, addToSelection = false) {
    if (!addToSelection) {
      // Clear existing selection
      this.deselectAll();
    }

    if (block) {
      this.selectedBlocks.add(block);
      block.setSelected(true);
    }

    this.notifySelectionChange();
  }

  addToSelection(block) {
    if (block && !this.selectedBlocks.has(block)) {
      this.selectedBlocks.add(block);
      block.setSelected(true);
      this.notifySelectionChange();
    }
  }

  removeFromSelection(block) {
    if (block && this.selectedBlocks.has(block)) {
      this.selectedBlocks.delete(block);
      block.setSelected(false);
      this.notifySelectionChange();
    }
  }

  toggleSelection(block) {
    if (this.selectedBlocks.has(block)) {
      this.removeFromSelection(block);
    } else {
      this.addToSelection(block);
    }
  }

  isSelected(block) {
    return this.selectedBlocks.has(block);
  }

  getSelectedBlocks() {
    return Array.from(this.selectedBlocks);
  }

  getSelectionCount() {
    return this.selectedBlocks.size;
  }

  selectBlocksInBox(minPos, maxPos) {
    for (const block of this.blocks.values()) {
      const pos = block.gridPosition;
      if (pos.x >= minPos.x && pos.x <= maxPos.x &&
          pos.y >= minPos.y && pos.y <= maxPos.y &&
          pos.z >= minPos.z && pos.z <= maxPos.z) {
        this.selectedBlocks.add(block);
        block.setSelected(true);
      }
    }
    this.notifySelectionChange();
  }

  deselectAll() {
    for (const block of this.selectedBlocks) {
      block.setSelected(false);
    }
    this.selectedBlocks.clear();
    this.notifySelectionChange();
  }

  notifySelectionChange() {
    if (this.onSelectionChange) {
      this.onSelectionChange(this.getSelectedBlocks());
    }
  }

  getBlockMeshes() {
    return this.blockGroup.children;
  }

  getAllBlocks() {
    return Array.from(this.blocks.values());
  }

  getBlockById(blockId) {
    return this.blocks.get(blockId) || null;
  }

  positionKey(pos) {
    return `${pos.x},${pos.y},${pos.z}`;
  }

  getBlockCount() {
    return this.blocks.size;
  }

  notifyBlockCountChange() {
    if (this.onBlockCountChange) {
      this.onBlockCountChange(this.blocks.size);
    }
  }

  clear() {
    for (const block of this.blocks.values()) {
      this.blockGroup.remove(block.mesh);
      block.dispose();
    }
    this.blocks.clear();

    // Clear merged meshes
    for (const merged of this.mergedMeshes.values()) {
      this.blockGroup.remove(merged.mesh);
      merged.dispose();
    }
    this.mergedMeshes.clear();

    this.selectedBlocks.clear();
    this.notifyBlockCountChange();
    this.notifySelectionChange();
  }

  // Merged mesh methods
  addMergedMesh(mergedMesh) {
    this.mergedMeshes.set(mergedMesh.id, mergedMesh);
    this.blockGroup.add(mergedMesh.mesh);
    this.notifyBlockCountChange();
    return mergedMesh;
  }

  removeMergedMesh(mergedId) {
    const merged = this.mergedMeshes.get(mergedId);
    if (!merged) return false;

    this.blockGroup.remove(merged.mesh);
    merged.dispose();
    this.mergedMeshes.delete(mergedId);
    this.notifyBlockCountChange();
    return true;
  }

  getMergedMeshes() {
    return Array.from(this.mergedMeshes.values());
  }

  getMergedMeshByMesh(mesh) {
    if (mesh.userData.merged) {
      return mesh.userData.merged;
    }
    return null;
  }

  toJSON() {
    return Array.from(this.blocks.values()).map(b => b.toJSON());
  }

  fromJSON(data) {
    this.clear();

    // Validate and sanitize input data
    const { blocks, invalidCount } = validateAndSanitizeBlocks(data);

    if (invalidCount > 0) {
      console.warn(`Skipped ${invalidCount} invalid block(s) during load`);
    }

    for (const blockData of blocks) {
      this.addBlock({
        type: blockData.type,
        position: blockData.position,
        dimensions: blockData.dimensions,
        rotation: blockData.rotation,
        color: blockData.color,
        emissive: blockData.emissive,
        faces: blockData.faces,
        layerId: blockData.layerId || 'default',
        scale: blockData.scale || 1
      });
    }

    return { loadedCount: blocks.length, invalidCount };
  }
}
