/**
 * InstancedRenderer - Optimizes rendering using instanced meshes
 * Groups blocks by type and color to minimize draw calls
 */

import * as THREE from 'three';

export class InstancedRenderer {
  constructor(scene) {
    this.scene = scene;
    this.instancedMeshes = new Map(); // key -> InstancedMesh
    this.blockInstances = new Map(); // blockId -> { key, instanceIndex }
    this.instanceGroup = new THREE.Group();
    this.instanceGroup.name = 'instanced-blocks';
    this.scene.add(this.instanceGroup);

    this.enabled = false;
    this.maxInstancesPerMesh = 1000;

    // Shared geometries cache
    this.geometryCache = new Map();

    // Temp objects for matrix operations
    this.tempMatrix = new THREE.Matrix4();
    this.tempPosition = new THREE.Vector3();
    this.tempQuaternion = new THREE.Quaternion();
    this.tempScale = new THREE.Vector3(1, 1, 1);
  }

  /**
   * Generate a key for grouping blocks by type and color
   */
  getInstanceKey(block) {
    return `${block.type}_${block.color}`;
  }

  /**
   * Get or create geometry for a block type
   */
  getGeometry(type) {
    if (this.geometryCache.has(type)) {
      return this.geometryCache.get(type);
    }

    // For simplicity, we use BoxGeometry for cubes
    // In a full implementation, you'd import GEOMETRY_CREATORS from BlockTypes
    let geometry;
    switch (type) {
      case 'cube':
      default:
        geometry = new THREE.BoxGeometry(1, 1, 1);
        break;
    }

    this.geometryCache.set(type, geometry);
    return geometry;
  }

  /**
   * Create or get an instanced mesh for a given key
   */
  getOrCreateInstancedMesh(key, type, color) {
    if (this.instancedMeshes.has(key)) {
      return this.instancedMeshes.get(key);
    }

    const geometry = this.getGeometry(type);
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.7,
      metalness: 0.1
    });

    const instancedMesh = new THREE.InstancedMesh(
      geometry,
      material,
      this.maxInstancesPerMesh
    );
    instancedMesh.count = 0; // Start with no visible instances
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;
    instancedMesh.userData.key = key;
    instancedMesh.userData.blockIds = [];

    this.instanceGroup.add(instancedMesh);
    this.instancedMeshes.set(key, instancedMesh);

    return instancedMesh;
  }

  /**
   * Add a block to the instanced rendering system
   */
  addBlock(block) {
    if (!this.enabled) return;

    // Only handle simple cube blocks for now
    if (block.type !== 'cube') return;

    const key = this.getInstanceKey(block);
    const instancedMesh = this.getOrCreateInstancedMesh(key, block.type, block.color);

    if (instancedMesh.count >= this.maxInstancesPerMesh) {
      console.warn(`Max instances reached for ${key}`);
      return;
    }

    const instanceIndex = instancedMesh.count;

    // Calculate transform matrix
    this.tempPosition.set(
      block.gridPosition.x + 0.5,
      block.gridPosition.y + 0.5,
      block.gridPosition.z + 0.5
    );
    this.tempQuaternion.setFromEuler(new THREE.Euler(
      THREE.MathUtils.degToRad(block.rotation.x),
      THREE.MathUtils.degToRad(block.rotation.y),
      THREE.MathUtils.degToRad(block.rotation.z)
    ));
    this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);

    instancedMesh.setMatrixAt(instanceIndex, this.tempMatrix);
    instancedMesh.count++;
    instancedMesh.instanceMatrix.needsUpdate = true;
    instancedMesh.userData.blockIds.push(block.id);

    this.blockInstances.set(block.id, { key, instanceIndex });
  }

  /**
   * Remove a block from instanced rendering
   */
  removeBlock(blockId) {
    if (!this.enabled) return;

    const instanceData = this.blockInstances.get(blockId);
    if (!instanceData) return;

    const instancedMesh = this.instancedMeshes.get(instanceData.key);
    if (!instancedMesh) return;

    // Swap with last instance and decrease count
    const lastIndex = instancedMesh.count - 1;
    if (instanceData.instanceIndex !== lastIndex) {
      // Copy last instance to the removed position
      const matrix = new THREE.Matrix4();
      instancedMesh.getMatrixAt(lastIndex, matrix);
      instancedMesh.setMatrixAt(instanceData.instanceIndex, matrix);

      // Update the moved block's instance index
      const movedBlockId = instancedMesh.userData.blockIds[lastIndex];
      const movedData = this.blockInstances.get(movedBlockId);
      if (movedData) {
        movedData.instanceIndex = instanceData.instanceIndex;
      }

      // Update blockIds array
      instancedMesh.userData.blockIds[instanceData.instanceIndex] = movedBlockId;
    }

    instancedMesh.count--;
    instancedMesh.instanceMatrix.needsUpdate = true;
    instancedMesh.userData.blockIds.pop();

    this.blockInstances.delete(blockId);
  }

  /**
   * Update a block's transform
   */
  updateBlock(block) {
    if (!this.enabled) return;

    const instanceData = this.blockInstances.get(block.id);
    if (!instanceData) return;

    const instancedMesh = this.instancedMeshes.get(instanceData.key);
    if (!instancedMesh) return;

    // Recalculate transform
    this.tempPosition.set(
      block.gridPosition.x + 0.5,
      block.gridPosition.y + 0.5,
      block.gridPosition.z + 0.5
    );
    this.tempQuaternion.setFromEuler(new THREE.Euler(
      THREE.MathUtils.degToRad(block.rotation.x),
      THREE.MathUtils.degToRad(block.rotation.y),
      THREE.MathUtils.degToRad(block.rotation.z)
    ));
    this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);

    instancedMesh.setMatrixAt(instanceData.instanceIndex, this.tempMatrix);
    instancedMesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Rebuild all instanced meshes from block manager
   */
  rebuild(blockManager) {
    this.clear();

    if (!this.enabled) return;

    for (const block of blockManager.getAllBlocks()) {
      this.addBlock(block);
    }
  }

  /**
   * Enable or disable instanced rendering
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    this.instanceGroup.visible = enabled;
  }

  /**
   * Clear all instanced meshes
   */
  clear() {
    for (const [key, instancedMesh] of this.instancedMeshes) {
      this.instanceGroup.remove(instancedMesh);
      instancedMesh.geometry.dispose();
      instancedMesh.material.dispose();
    }
    this.instancedMeshes.clear();
    this.blockInstances.clear();
  }

  /**
   * Get statistics about instanced rendering
   */
  getStats() {
    let totalInstances = 0;
    let drawCalls = 0;

    for (const [key, mesh] of this.instancedMeshes) {
      if (mesh.count > 0) {
        totalInstances += mesh.count;
        drawCalls++;
      }
    }

    return {
      enabled: this.enabled,
      totalInstances,
      drawCalls,
      meshGroups: this.instancedMeshes.size
    };
  }

  dispose() {
    this.clear();
    this.geometryCache.forEach(geo => geo.dispose());
    this.geometryCache.clear();
    this.scene.remove(this.instanceGroup);
  }
}
