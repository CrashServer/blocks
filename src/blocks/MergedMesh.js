import * as THREE from 'three';

/**
 * MergedMesh - Represents a group of blocks that have been flattened/merged
 * into a single non-editable mesh. Used for clean exports and tattoo stencils.
 */

let mergedIdCounter = 0;

export class MergedMesh {
  constructor(options = {}) {
    this.id = options.id || `merged_${++mergedIdCounter}`;
    this.type = 'merged';
    this.color = options.color || '#888888';
    this.layerId = options.layerId || 'default';

    // Store original block data for potential "unmerge" or serialization
    this.sourceBlocks = options.sourceBlocks || [];

    // The merged mesh and edges
    this.mesh = null;
    this.edges = null;

    // Bounding box for the merged group
    this.boundingBox = new THREE.Box3();

    if (options.geometry) {
      this.createFromGeometry(options.geometry, options.material);
    }
  }

  createFromGeometry(geometry, material) {
    // Create the mesh
    this.mesh = new THREE.Mesh(
      geometry,
      material || new THREE.MeshStandardMaterial({
        color: this.color,
        roughness: 0.7,
        metalness: 0.1,
        vertexColors: geometry.hasAttribute('color')
      })
    );

    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.userData.mergedId = this.id;
    this.mesh.userData.merged = this;

    // Create edge wireframe
    this.createEdges(geometry);

    // Compute bounding box
    geometry.computeBoundingBox();
    this.boundingBox.copy(geometry.boundingBox);
  }

  createEdges(geometry) {
    const edgesGeometry = new THREE.EdgesGeometry(geometry, 30);
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

  setSelected(selected) {
    if (this.mesh.material.emissive) {
      this.mesh.material.emissive.set(selected ? 0x333333 : 0x000000);
    }
  }

  /**
   * Get the grid position (approximate center)
   */
  get gridPosition() {
    const center = new THREE.Vector3();
    this.boundingBox.getCenter(center);
    return {
      x: Math.floor(center.x),
      y: Math.floor(center.y),
      z: Math.floor(center.z)
    };
  }

  toJSON() {
    return {
      id: this.id,
      type: 'merged',
      color: this.color,
      layerId: this.layerId,
      sourceBlocks: this.sourceBlocks
    };
  }

  dispose() {
    if (this.edges) {
      this.edges.geometry.dispose();
      this.edges.material.dispose();
    }
    if (this.mesh) {
      this.mesh.geometry.dispose();
      if (Array.isArray(this.mesh.material)) {
        this.mesh.material.forEach(m => m.dispose());
      } else {
        this.mesh.material.dispose();
      }
    }
  }
}
