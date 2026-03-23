import * as THREE from 'three';

// Face definitions for different geometry types
// Maps block type patterns to their face definitions

// BoxGeometry faces (cubes, slabs, etc.)
export const BOX_FACES = ['east', 'west', 'top', 'bottom', 'south', 'north'];

// CylinderGeometry faces (cylinders, pipes, columns)
export const CYLINDER_FACES = ['top', 'bottom', 'sides'];

// ConeGeometry faces
export const CONE_FACES = ['base', 'cone'];

// Wedge/ramp faces
export const WEDGE_FACES = ['front', 'back', 'left', 'right', 'slope'];

/**
 * Get face names for a block type
 * Returns array of face names or null if not supported
 */
export function getFaceNamesForBlockType(blockType) {
  // Box-like blocks
  if (blockType.includes('cube') || blockType.includes('slab') ||
      blockType.includes('quarter') || blockType.includes('half')) {
    return BOX_FACES;
  }

  // Cylinder-like blocks
  if (blockType.includes('cylinder') || blockType.includes('pipe') ||
      blockType.includes('pillar') || blockType.includes('column') ||
      blockType.includes('barrel') || blockType.includes('tube')) {
    return CYLINDER_FACES;
  }

  // Cone-like blocks
  if (blockType.includes('cone') || blockType.includes('pyramid')) {
    return CONE_FACES;
  }

  // Wedge/ramp blocks
  if (blockType.includes('wedge') || blockType.includes('ramp') || blockType.includes('slope')) {
    return WEDGE_FACES;
  }

  // Default: single material (spheres, complex merged geometries)
  return null;
}

// Legacy exports for backward compatibility
export const FACE_DIRECTIONS = BOX_FACES;

export const FACE_INDEX_MAP = {
  east: 0,   // +X
  west: 1,   // -X
  top: 2,    // +Y
  bottom: 3, // -Y
  south: 4,  // +Z
  north: 5   // -Z
};

export class FacePainter {
  constructor(textureManager) {
    this.textureManager = textureManager;
    this.selectedFace = null;
  }

  /**
   * Determine which face of a block was hit by a raycast
   * Works with different block types by checking geometry groups
   */
  getFaceFromIntersect(block, intersect) {
    const faceNames = getFaceNamesForBlockType(block.type);

    if (!faceNames) {
      return null; // Block doesn't support per-face painting
    }

    const geometry = block.mesh.geometry;
    const groups = geometry.groups;

    // If geometry has groups, use faceIndex to determine which group was hit
    if (groups && groups.length > 0 && intersect.faceIndex !== undefined) {
      // Find which group this face belongs to
      const faceIndexInGeometry = intersect.faceIndex * 3; // Each face has 3 vertices in the index

      for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        if (faceIndexInGeometry >= group.start &&
            faceIndexInGeometry < group.start + group.count) {
          // This face belongs to this group
          const materialIndex = group.materialIndex !== undefined ? group.materialIndex : i;
          return faceNames[materialIndex] || faceNames[0];
        }
      }
    }

    // Fallback to normal-based detection (for box geometries)
    if (faceNames === BOX_FACES) {
      return this.getFaceFromNormal(intersect.face.normal);
    }

    // Default to first face
    return faceNames[0];
  }

  // Legacy method: Determine which face of a block was hit by normal (for box geometries)
  getFaceFromNormal(normal) {
    const absX = Math.abs(normal.x);
    const absY = Math.abs(normal.y);
    const absZ = Math.abs(normal.z);

    if (absX > absY && absX > absZ) {
      return normal.x > 0 ? 'east' : 'west';
    } else if (absY > absX && absY > absZ) {
      return normal.y > 0 ? 'top' : 'bottom';
    } else {
      return normal.z > 0 ? 'south' : 'north';
    }
  }

  // Apply a material to a specific face of a block
  applyMaterialToFace(block, faceDirection, materialId) {
    const faceNames = getFaceNamesForBlockType(block.type);
    if (!faceNames) return false;

    const faceIndex = faceNames.indexOf(faceDirection);
    if (faceIndex === -1) return false;

    // Update block data
    if (!block.faces[faceDirection]) {
      block.faces[faceDirection] = {};
    }

    block.faces[faceDirection] = {
      direction: faceDirection,
      materialId: materialId,
      uvRotation: 0,
      uvFlip: { x: false, y: false }
    };

    // Update the mesh material
    this.updateBlockMaterials(block);
    return true;
  }

  // Apply a material to all faces of a block
  applyMaterialToAllFaces(block, materialId) {
    const faceNames = getFaceNamesForBlockType(block.type);
    if (!faceNames) {
      // Single material block - just update block color
      return;
    }

    faceNames.forEach(dir => {
      if (!block.faces[dir]) {
        block.faces[dir] = {};
      }
      block.faces[dir] = {
        direction: dir,
        materialId: materialId,
        uvRotation: 0,
        uvFlip: { x: false, y: false }
      };
    });

    this.updateBlockMaterials(block);
  }

  // Update the Three.js materials array for a block
  updateBlockMaterials(block) {
    const faceNames = getFaceNamesForBlockType(block.type);
    if (!faceNames) {
      // Single material block - not supported
      return;
    }

    const materials = faceNames.map(dir => {
      const face = block.faces[dir];
      if (face && face.materialId) {
        const mat = this.textureManager.createThreeMaterial(face.materialId);
        if (mat) return mat;
      }
      // Fallback to block color
      return new THREE.MeshStandardMaterial({
        color: block.color,
        roughness: 0.7,
        metalness: 0.1
      });
    });

    // Dispose old materials
    if (Array.isArray(block.mesh.material)) {
      block.mesh.material.forEach(m => m.dispose());
    } else if (block.mesh.material) {
      block.mesh.material.dispose();
    }

    block.mesh.material = materials;
  }

  // Rotate UV on a face
  rotateFaceUV(block, faceDirection, degrees = 90) {
    const face = block.faces[faceDirection];
    if (!face) return;

    face.uvRotation = (face.uvRotation + degrees) % 360;
    this.updateBlockMaterials(block);
  }

  // Flip UV on a face
  flipFaceUV(block, faceDirection, axis = 'x') {
    const face = block.faces[faceDirection];
    if (!face) return;

    face.uvFlip[axis] = !face.uvFlip[axis];
    this.updateBlockMaterials(block);
  }

  // Pick material from a face
  pickMaterialFromFace(block, faceDirection) {
    const face = block.faces[faceDirection];
    return face ? face.materialId : null;
  }
}
