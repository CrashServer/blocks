/**
 * SymmetryTool - Provides symmetry and mirroring operations for blocks
 */

/**
 * Mirror a position across an axis relative to a center point
 */
export function mirrorPosition(position, axis, center) {
  const result = { ...position };
  switch (axis) {
    case 'x':
      result.x = 2 * center.x - position.x - 1;
      break;
    case 'y':
      result.y = 2 * center.y - position.y - 1;
      break;
    case 'z':
      result.z = 2 * center.z - position.z - 1;
      break;
  }
  return result;
}

/**
 * Mirror rotation across an axis
 */
export function mirrorRotation(rotation, axis) {
  const result = { ...rotation };
  switch (axis) {
    case 'x':
      // Mirror across X: flip Y and Z rotations
      result.y = (360 - result.y) % 360;
      result.z = (360 - result.z) % 360;
      break;
    case 'y':
      // Mirror across Y: flip X and Z rotations
      result.x = (360 - result.x) % 360;
      result.z = (360 - result.z) % 360;
      break;
    case 'z':
      // Mirror across Z: flip X and Y rotations
      result.x = (360 - result.x) % 360;
      result.y = (360 - result.y) % 360;
      break;
  }
  return result;
}

/**
 * Calculate the center of a group of blocks
 */
export function calculateCenter(blocks) {
  if (blocks.length === 0) {
    return { x: 0, y: 0, z: 0 };
  }

  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

  for (const block of blocks) {
    const pos = block.gridPosition;
    minX = Math.min(minX, pos.x);
    minY = Math.min(minY, pos.y);
    minZ = Math.min(minZ, pos.z);
    maxX = Math.max(maxX, pos.x + 1);
    maxY = Math.max(maxY, pos.y + 1);
    maxZ = Math.max(maxZ, pos.z + 1);
  }

  return {
    x: (minX + maxX) / 2,
    y: (minY + maxY) / 2,
    z: (minZ + maxZ) / 2
  };
}

/**
 * Generate mirrored block data from a source block
 */
export function mirrorBlock(block, axis, center) {
  const mirroredPos = mirrorPosition(block.gridPosition, axis, center);
  const mirroredRot = mirrorRotation(block.rotation, axis);

  return {
    type: block.type,
    position: mirroredPos,
    dimensions: { ...block.dimensions },
    rotation: mirroredRot,
    color: block.color,
    emissive: block.emissive ? { ...block.emissive } : null,
    faces: block.faces ? JSON.parse(JSON.stringify(block.faces)) : null,
    layerId: block.layerId
  };
}

/**
 * Mirror a group of blocks across an axis
 * @param {Array} blocks - Array of block objects
 * @param {string} axis - 'x', 'y', or 'z'
 * @param {object} center - Optional center point, calculated automatically if not provided
 * @returns {Array} Array of mirrored block data
 */
export function mirrorBlocks(blocks, axis, center = null) {
  if (blocks.length === 0) return [];

  const mirrorCenter = center || calculateCenter(blocks);
  const mirroredData = [];

  for (const block of blocks) {
    mirroredData.push(mirrorBlock(block, axis, mirrorCenter));
  }

  return mirroredData;
}

/**
 * Duplicate and mirror blocks (creates copies on the other side)
 */
export function duplicateAndMirror(blocks, axis, center = null) {
  const mirroredData = mirrorBlocks(blocks, axis, center);
  return mirroredData;
}

export class SymmetryTool {
  constructor(blockManager) {
    this.blockManager = blockManager;
    this.symmetryMode = null; // null, 'x', 'y', 'z'
    this.symmetryCenter = { x: 0, y: 0, z: 0 };
  }

  setSymmetryMode(axis) {
    this.symmetryMode = axis;
  }

  setSymmetryCenter(center) {
    this.symmetryCenter = { ...center };
  }

  /**
   * If symmetry mode is active, returns mirrored block data for placement
   */
  getSymmetricBlockData(blockData) {
    if (!this.symmetryMode) return null;

    return {
      ...blockData,
      position: mirrorPosition(blockData.position, this.symmetryMode, this.symmetryCenter),
      rotation: mirrorRotation(blockData.rotation || { x: 0, y: 0, z: 0 }, this.symmetryMode)
    };
  }

  /**
   * Mirror selected blocks and add the mirrored copies
   */
  mirrorSelectedBlocks(axis, addCopies = true) {
    const selectedBlocks = this.blockManager.getSelectedBlocks();
    if (selectedBlocks.length === 0) return [];

    const center = calculateCenter(selectedBlocks);
    const mirroredData = mirrorBlocks(selectedBlocks, axis, center);

    if (addCopies) {
      const addedBlocks = [];
      for (const data of mirroredData) {
        // Skip if position would overlap
        if (!this.blockManager.wouldOverlapAt(data.type, data.position, data.dimensions)) {
          const block = this.blockManager.addBlock(data);
          if (block) addedBlocks.push(block);
        }
      }
      return addedBlocks;
    }

    return mirroredData;
  }
}
