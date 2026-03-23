import * as THREE from 'three';
import { getFaceNamesForBlockType } from '../texturing/FacePainter.js';
import {
  GEOMETRY_CREATORS,
  BLOCK_HEIGHT_MULTIPLIERS,
  BLOCK_Y_OFFSETS,
  getAllBlockTypes
} from './BlockTypes.js';

let blockIdCounter = 0;

// Re-export for backwards compatibility
export { BLOCK_HEIGHT_MULTIPLIERS } from './BlockTypes.js';

export class Block {
  constructor(options = {}) {
    this.id = options.id || `block_${++blockIdCounter}`;
    this.type = options.type || 'cube';
    this.gridPosition = options.position || { x: 0, y: 0, z: 0 };
    this.dimensions = options.dimensions || { w: 1, h: 1, d: 1 };
    this.rotation = options.rotation || { x: 0, y: 0, z: 0 };
    this.color = options.color || '#5588cc';
    this.layerId = options.layerId || 'default';
    this.scale = options.scale || 1; // 1 = normal, 2 = 2x2 large block mode

    // Emissive properties for light-emitting blocks
    this.emissive = options.emissive || {
      enabled: false,
      color: '#ffaa00',
      intensity: 1.0,
      radius: 3.0
    };

    // Per-face materials and colors
    this.faces = {};
    const faceNames = getFaceNamesForBlockType(this.type);

    if (faceNames) {
      if (options.faces) {
        // Deep copy faces from options
        faceNames.forEach(dir => {
          if (options.faces[dir]) {
            this.faces[dir] = { ...options.faces[dir] };
          } else {
            this.faces[dir] = {
              direction: dir,
              materialId: null,
              color: null, // null means use block.color
              uvRotation: 0,
              uvFlip: { x: false, y: false }
            };
          }
        });
      } else {
        // Initialize default faces for this block type
        faceNames.forEach(dir => {
          this.faces[dir] = {
            direction: dir,
            materialId: null,
            color: null, // null means use block.color
            uvRotation: 0,
            uvFlip: { x: false, y: false }
          };
        });
      }
    } else {
      // Single-material block (spheres, complex merged geometries)
      // No per-face support
      this.faces = {};
    }

    this.mesh = null;
    this.light = null; // PointLight for emissive blocks
    this.createMesh();
  }

  createMesh() {
    const createGeometry = GEOMETRY_CREATORS[this.type] || GEOMETRY_CREATORS.cube;
    const geometry = createGeometry(this.dimensions);

    // Apply scale to geometry if using large block mode
    if (this.scale > 1) {
      geometry.scale(this.scale, this.scale, this.scale);
    }

    // Get face names for this block type
    const faceNames = getFaceNamesForBlockType(this.type);

    // Add material groups if this geometry type supports per-face painting but doesn't have groups yet
    if (faceNames && faceNames.length > 1 && (!geometry.groups || geometry.groups.length === 0)) {
      console.log(`Adding groups for ${this.type}, expected faces:`, faceNames);
      this.addGeometryGroups(geometry, this.type, faceNames);
      console.log(`Groups created:`, geometry.groups.length, geometry.groups);
    } else if (faceNames && faceNames.length > 1) {
      console.log(`${this.type} already has groups:`, geometry.groups.length);
    }

    let material;
    if (faceNames && faceNames.length > 0) {
      // Create material array for per-face painting support
      material = faceNames.map(dir => {
        const face = this.faces[dir];
        const faceColor = (face && face.color) ? face.color : this.color;

        const mat = new THREE.MeshStandardMaterial({
          color: faceColor,
          roughness: 0.7,
          metalness: 0.1,
          side: THREE.DoubleSide
        });

        if (this.emissive.enabled) {
          mat.emissive = new THREE.Color(this.emissive.color);
          mat.emissiveIntensity = this.emissive.intensity;
        }

        return mat;
      });
    } else {
      // Single material for blocks that don't support per-face painting
      material = new THREE.MeshStandardMaterial({
        color: this.color,
        roughness: 0.7,
        metalness: 0.1,
        side: THREE.DoubleSide
      });

      if (this.emissive.enabled) {
        material.emissive = new THREE.Color(this.emissive.color);
        material.emissiveIntensity = this.emissive.intensity;
      }
    }

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.userData.blockId = this.id;
    this.mesh.userData.block = this;

    // Add edge wireframe for better visibility
    this.createEdges(geometry);

    // Add point light if emissive
    if (this.emissive.enabled) {
      this.createLight();
    }

    this.updateTransform();
  }

  createEdges(geometry) {
    // Create edges geometry for outline
    const edgesGeometry = new THREE.EdgesGeometry(geometry, 30); // 30 degree threshold
    const edgesMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3
    });
    this.edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    this.mesh.add(this.edges);
  }

  setEdgesVisible(visible) {
    if (this.edges) {
      this.edges.visible = visible;
    }
  }

  setEdgesOpacity(opacity) {
    if (this.edges) {
      this.edges.material.opacity = opacity;
    }
  }

  createLight() {
    if (this.light) {
      this.mesh.remove(this.light);
      this.light.dispose();
    }

    this.light = new THREE.PointLight(
      new THREE.Color(this.emissive.color),
      this.emissive.intensity * 2, // Multiply for visible effect
      this.emissive.radius * 2,    // Distance
      1                             // Decay
    );
    this.light.castShadow = false; // Shadows can be expensive
    this.mesh.add(this.light);
  }

  removeLight() {
    if (this.light) {
      this.mesh.remove(this.light);
      this.light.dispose();
      this.light = null;
    }
  }

  updateTransform() {
    // Get height multiplier and Y offset for this block type
    const heightMultiplier = BLOCK_HEIGHT_MULTIPLIERS[this.type] || 1;
    const baseYOffset = BLOCK_Y_OFFSETS[this.type] || 0;

    // Calculate actual height and center offset, accounting for scale
    const actualHeight = this.dimensions.h * heightMultiplier * this.scale;
    const yOffset = (baseYOffset * this.scale) + actualHeight / 2;

    // Position accounts for scale - center of scaled block
    this.mesh.position.set(
      this.gridPosition.x + (this.dimensions.w * this.scale) / 2,
      this.gridPosition.y + yOffset,
      this.gridPosition.z + (this.dimensions.d * this.scale) / 2
    );

    this.mesh.rotation.set(
      THREE.MathUtils.degToRad(this.rotation.x),
      THREE.MathUtils.degToRad(this.rotation.y),
      THREE.MathUtils.degToRad(this.rotation.z)
    );
  }

  setPosition(gridPos) {
    this.gridPosition = { ...gridPos };
    this.updateTransform();
  }

  setRotation(rotation) {
    this.rotation = { ...rotation };
    this.updateTransform();
  }

  rotateY(degrees) {
    this.rotation.y = (this.rotation.y + degrees) % 360;
    this.updateTransform();
  }

  setColor(color) {
    this.color = color;
    if (Array.isArray(this.mesh.material)) {
      const faceNames = getFaceNamesForBlockType(this.type);
      if (faceNames) {
        this.mesh.material.forEach((m, i) => {
          const dir = faceNames[i];
          // Only update faces that don't have a specific color set
          if (!this.faces[dir] || !this.faces[dir].color) {
            m.color.set(color);
          }
        });
      }
    } else {
      this.mesh.material.color.set(color);
    }
  }

  setFaceColor(faceDirection, color) {
    // For blocks that don't support per-face painting, set whole block color
    if (!Array.isArray(this.mesh.material)) {
      this.color = color;
      this.mesh.material.color.set(color);
      return;
    }

    const faceNames = getFaceNamesForBlockType(this.type);
    if (!faceNames) return;

    const faceIndex = faceNames.indexOf(faceDirection);
    if (faceIndex === -1) return;

    // Store the color in face data
    if (!this.faces[faceDirection]) {
      this.faces[faceDirection] = {
        direction: faceDirection,
        materialId: null,
        color: null,
        uvRotation: 0,
        uvFlip: { x: false, y: false }
      };
    }
    this.faces[faceDirection].color = color;

    // Update the material
    this.mesh.material[faceIndex].color.set(color);
  }

  getFaceColor(faceDirection) {
    // For blocks that don't support per-face painting, return block color
    if (!Array.isArray(this.mesh.material)) {
      return this.color;
    }
    const face = this.faces[faceDirection];
    return (face && face.color) ? face.color : this.color;
  }

  /**
   * Add material groups to geometry for per-face painting support
   */
  addGeometryGroups(geometry, blockType, faceNames) {
    const index = geometry.getIndex();
    if (!index) {
      console.warn('Cannot add groups to non-indexed geometry:', blockType);
      return;
    }

    const totalIndices = index.count;

    // Clear existing groups
    geometry.clearGroups();

    // Cylinder-like geometries (cylinder, pipe, pillar, barrel, tube)
    if (blockType.includes('cylinder') || blockType.includes('pipe') ||
        blockType.includes('pillar') || blockType.includes('column') ||
        blockType.includes('barrel') || blockType.includes('tube')) {

      // CylinderGeometry structure (with caps):
      // Indices are organized as: sides, top cap, bottom cap
      // For radialSegments = N:
      //   Sides: N * 2 triangles * 3 indices = N * 6 indices
      //   Top cap: N triangles * 3 indices = N * 3 indices
      //   Bottom cap: N triangles * 3 indices = N * 3 indices

      // Try to infer radial segments from index count
      // Total = N*6 + N*3 + N*3 = N*12
      const radialSegments = totalIndices / 12;

      if (Number.isInteger(radialSegments)) {
        const sidesCount = radialSegments * 6;
        const capCount = radialSegments * 3;

        // Groups: [top, bottom, sides] - matching CYLINDER_FACES order
        geometry.addGroup(sidesCount, capCount, 0); // top
        geometry.addGroup(sidesCount + capCount, capCount, 1); // bottom
        geometry.addGroup(0, sidesCount, 2); // sides
      } else {
        console.warn('Could not determine cylinder structure for:', blockType);
      }
    }
    // Cone-like geometries
    else if (blockType.includes('cone') || blockType.includes('pyramid')) {
      // ConeGeometry structure:
      // Indices organized as: cone surface, base cap
      const radialSegments = Math.sqrt(totalIndices / 6); // Rough estimate

      if (Number.isInteger(radialSegments)) {
        const coneCount = radialSegments * 3;
        const baseCount = radialSegments * 3;

        // Groups: [base, cone] - matching CONE_FACES order
        geometry.addGroup(coneCount, baseCount, 0); // base
        geometry.addGroup(0, coneCount, 1); // cone surface
      } else {
        // Fallback: split in half
        const half = Math.floor(totalIndices / 2);
        geometry.addGroup(half, totalIndices - half, 0); // base
        geometry.addGroup(0, half, 1); // cone
      }
    }
    // Wedge geometries - these are typically merged geometries
    else if (blockType.includes('wedge') || blockType.includes('ramp') || blockType.includes('slope')) {
      // For wedges, we need to analyze the geometry more carefully
      // For now, create even splits for 5 faces
      const indicesPerFace = Math.floor(totalIndices / 5);
      for (let i = 0; i < 5; i++) {
        const start = i * indicesPerFace;
        const count = i === 4 ? totalIndices - start : indicesPerFace;
        geometry.addGroup(start, count, i);
      }
    }
  }

  /**
   * Check if this block supports per-face painting
   * Works for cubes, cylinders, cones, wedges, and other supported types
   */
  supportsPerFacePainting() {
    const faceNames = getFaceNamesForBlockType(this.type);
    return faceNames !== null && Array.isArray(this.mesh.material);
  }

  setEmissive(enabled, color = null, intensity = null, radius = null) {
    this.emissive.enabled = enabled;
    if (color !== null) this.emissive.color = color;
    if (intensity !== null) this.emissive.intensity = intensity;
    if (radius !== null) this.emissive.radius = radius;

    // Update material emissive
    const applyEmissive = (mat) => {
      if (enabled) {
        mat.emissive = new THREE.Color(this.emissive.color);
        mat.emissiveIntensity = this.emissive.intensity;
      } else {
        mat.emissive = new THREE.Color(0x000000);
        mat.emissiveIntensity = 0;
      }
    };

    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach(applyEmissive);
    } else {
      applyEmissive(this.mesh.material);
    }

    // Manage point light
    if (enabled) {
      this.createLight();
    } else {
      this.removeLight();
    }
  }

  updateLight() {
    if (this.light) {
      this.light.color.set(this.emissive.color);
      this.light.intensity = this.emissive.intensity * 2;
      this.light.distance = this.emissive.radius * 2;
    }
  }

  setSelected(selected) {
    // Don't override emissive for light-emitting blocks
    if (this.emissive.enabled) {
      // Use outline or other selection indicator for emissive blocks
      const adjustIntensity = (mat) => {
        mat.emissiveIntensity = selected
          ? this.emissive.intensity * 1.5
          : this.emissive.intensity;
      };
      if (Array.isArray(this.mesh.material)) {
        this.mesh.material.forEach(adjustIntensity);
      } else {
        adjustIntensity(this.mesh.material);
      }
      return;
    }

    const setEmissiveColor = (mat, value) => {
      if (mat.emissive) mat.emissive.set(value);
    };

    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach(m => setEmissiveColor(m, selected ? 0x333333 : 0x000000));
    } else {
      setEmissiveColor(this.mesh.material, selected ? 0x333333 : 0x000000);
    }
  }

  clone() {
    return new Block({
      type: this.type,
      position: { ...this.gridPosition },
      dimensions: { ...this.dimensions },
      rotation: { ...this.rotation },
      color: this.color,
      emissive: { ...this.emissive },
      faces: JSON.parse(JSON.stringify(this.faces)),
      layerId: this.layerId,
      scale: this.scale
    });
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      position: this.gridPosition,
      dimensions: this.dimensions,
      rotation: this.rotation,
      color: this.color,
      emissive: this.emissive,
      faces: this.faces,
      layerId: this.layerId,
      scale: this.scale
    };
  }

  dispose() {
    this.removeLight();
    // Dispose edges
    if (this.edges) {
      this.edges.geometry.dispose();
      this.edges.material.dispose();
    }
    this.mesh.geometry.dispose();
    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach(m => m.dispose());
    } else {
      this.mesh.material.dispose();
    }
  }
}

// Export all block types as flat array (for backwards compatibility)
export const BLOCK_TYPES = getAllBlockTypes();
