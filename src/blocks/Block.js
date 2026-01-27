import * as THREE from 'three';
import { FACE_DIRECTIONS } from '../texturing/FacePainter.js';
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
    if (options.faces) {
      // Deep copy faces
      FACE_DIRECTIONS.forEach(dir => {
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
      // Initialize default faces
      FACE_DIRECTIONS.forEach(dir => {
        this.faces[dir] = {
          direction: dir,
          materialId: null,
          color: null, // null means use block.color
          uvRotation: 0,
          uvFlip: { x: false, y: false }
        };
      });
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

    // Check if geometry supports 6-face materials (BoxGeometry has 6 groups)
    const supportsPerFaceMaterials = geometry.groups && geometry.groups.length === 6;

    let material;
    if (supportsPerFaceMaterials) {
      // Create material array (6 materials for 6 faces) to support per-face coloring
      material = FACE_DIRECTIONS.map(dir => {
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
      // Single material for non-box geometries (spheres, cylinders, etc.)
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
      this.mesh.material.forEach((m, i) => {
        const dir = FACE_DIRECTIONS[i];
        // Only update faces that don't have a specific color set
        if (!this.faces[dir] || !this.faces[dir].color) {
          m.color.set(color);
        }
      });
    } else {
      this.mesh.material.color.set(color);
    }
  }

  setFaceColor(faceDirection, color) {
    // For non-box geometries, just set the whole block color
    if (!Array.isArray(this.mesh.material)) {
      this.color = color;
      this.mesh.material.color.set(color);
      return;
    }

    const faceIndex = FACE_DIRECTIONS.indexOf(faceDirection);
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
    // For non-box geometries, return the block color
    if (!Array.isArray(this.mesh.material)) {
      return this.color;
    }
    const face = this.faces[faceDirection];
    return (face && face.color) ? face.color : this.color;
  }

  /**
   * Check if this block supports per-face painting
   * Only simple box geometries with 6 material groups support it
   */
  supportsPerFacePainting() {
    return Array.isArray(this.mesh.material) && this.mesh.material.length === 6;
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
