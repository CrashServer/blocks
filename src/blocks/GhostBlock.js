import * as THREE from 'three';
import {
  GEOMETRY_CREATORS,
  BLOCK_HEIGHT_MULTIPLIERS,
  BLOCK_Y_OFFSETS
} from './BlockTypes.js';

export class GhostBlock {
  constructor(scene) {
    this.scene = scene;
    this.visible = false;
    this.currentType = 'cube';
    this.currentScale = 1;

    // Container for the ghost mesh
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.mesh = null;
    this.wireframe = null;

    this.createMesh('cube');
  }

  createMesh(type) {
    // Remove old mesh
    if (this.mesh) {
      this.group.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
      if (this.wireframe) {
        this.wireframe.geometry.dispose();
        this.wireframe.material.dispose();
      }
    }

    const geometry = this.createGeometry(type);

    const material = new THREE.MeshBasicMaterial({
      color: 0x5588cc,
      transparent: true,
      opacity: 0.4,
      depthWrite: false
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.visible = this.visible;

    // Wireframe outline
    const wireGeometry = new THREE.EdgesGeometry(geometry);
    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6
    });
    this.wireframe = new THREE.LineSegments(wireGeometry, wireMaterial);
    this.mesh.add(this.wireframe);

    this.group.add(this.mesh);
    this.currentType = type;
  }

  createGeometry(type) {
    // Use the centralized geometry creator
    const creator = GEOMETRY_CREATORS[type] || GEOMETRY_CREATORS.cube;
    const geometry = creator({ w: 1, h: 1, d: 1 });

    // Apply scale to geometry if using large block mode
    if (this.currentScale > 1) {
      geometry.scale(this.currentScale, this.currentScale, this.currentScale);
    }

    return geometry;
  }

  show() {
    this.mesh.visible = true;
    this.visible = true;
  }

  hide() {
    this.mesh.visible = false;
    this.visible = false;
  }

  setPosition(gridPos) {
    // Use centralized height multipliers and offsets, accounting for scale
    const heightMultiplier = BLOCK_HEIGHT_MULTIPLIERS[this.currentType] || 1;
    const baseYOffset = BLOCK_Y_OFFSETS[this.currentType] || 0;
    const actualHeight = heightMultiplier * this.currentScale; // dimensions.h is 1, scaled
    const yOffset = (baseYOffset * this.currentScale) + actualHeight / 2;

    // Position accounts for scale - center of scaled block
    const halfScale = this.currentScale / 2;
    this.group.position.set(
      gridPos.x + halfScale,
      gridPos.y + yOffset,
      gridPos.z + halfScale
    );
  }

  setBlockType(type) {
    if (type !== this.currentType) {
      this.createMesh(type);
      this.mesh.visible = this.visible;
    }
  }

  setScale(scale) {
    if (scale !== this.currentScale) {
      this.currentScale = scale;
      // Recreate mesh with new scale
      this.createMesh(this.currentType);
      this.mesh.visible = this.visible;
    }
  }

  setRotation(degrees) {
    this.group.rotation.y = THREE.MathUtils.degToRad(degrees);
  }

  setColor(color) {
    this.mesh.material.color.set(color);
  }

  setValid(valid) {
    if (valid) {
      this.mesh.material.color.set(0x5588cc);
      this.mesh.material.opacity = 0.4;
    } else {
      this.mesh.material.color.set(0xff4444);
      this.mesh.material.opacity = 0.6;
    }
  }

  dispose() {
    this.scene.remove(this.group);
    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
    }
    if (this.wireframe) {
      this.wireframe.geometry.dispose();
      this.wireframe.material.dispose();
    }
  }
}
