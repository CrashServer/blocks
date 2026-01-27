import * as THREE from 'three';

// Face indices for a BoxGeometry
// Three.js BoxGeometry face order: +X, -X, +Y, -Y, +Z, -Z
// Which corresponds to: east, west, top, bottom, south, north
export const FACE_DIRECTIONS = ['east', 'west', 'top', 'bottom', 'south', 'north'];

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

  // Determine which face of a block was hit by a raycast
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
    const faceIndex = FACE_INDEX_MAP[faceDirection];
    if (faceIndex === undefined) return false;

    // Update block data
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
    FACE_DIRECTIONS.forEach(dir => {
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
    const materials = FACE_DIRECTIONS.map(dir => {
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
