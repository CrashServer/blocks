import * as THREE from 'three';
import { GLTFExporter as ThreeGLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { MeshOptimizer } from './MeshOptimizer.js';

export class GLTFExporter {
  constructor() {
    this.exporter = new ThreeGLTFExporter();
    this.optimizer = new MeshOptimizer();
  }

  async exportScene(blockManager, options = {}) {
    const {
      binary = true,
      includeAnimations = false,
      animator = null,
      bakedTexture = null,
      uvData = null,
      // Optimization options
      cullFaces = false,
      mergeCubes = false,
      batchMaterials = false,
      useInstancing = false,
      mergeAll = false,
      consolidateMaterials = false,
      deduplicateVertices = true
    } = options;

    if (blockManager.blocks.size === 0) {
      throw new Error('No blocks to export');
    }

    const exportScene = new THREE.Scene();
    const blocks = blockManager.getAllBlocks();

    // Determine if we should use optimization
    const useOptimization = cullFaces || mergeCubes || batchMaterials || mergeAll;

    // Material consolidation takes priority (creates single mesh with material slots)
    if (consolidateMaterials && !bakedTexture) {
      const result = this.optimizer.consolidateMaterials(blocks);
      exportScene.add(result.mesh);
      console.log('Material consolidation stats:', result.stats);
    } else if (useInstancing && !bakedTexture) {
      // Use instancing export path (best for many identical block types)
      const result = this.optimizer.createInstancedExport(blocks);

      for (const mesh of result.meshes) {
        exportScene.add(mesh);
      }

      console.log('Instancing stats:', result.stats);
    } else if (useOptimization && !bakedTexture) {
      // Use optimized export path
      const result = this.optimizer.optimize(blocks, {
        cullFaces,
        mergeCubes,
        batchMaterials,
        mergeAll,
        deduplicateVertices
      });

      // Add optimized meshes to scene
      for (const mesh of result.meshes) {
        exportScene.add(mesh);
      }

      console.log('Optimization stats:', result.stats);
    } else {
      // Use original export path (for baked textures or no optimization)
      let sharedBakedTexture = null;
      if (bakedTexture) {
        sharedBakedTexture = new THREE.CanvasTexture(bakedTexture);
        sharedBakedTexture.magFilter = THREE.NearestFilter;
        sharedBakedTexture.minFilter = THREE.NearestFilter;
        sharedBakedTexture.generateMipmaps = false;
        sharedBakedTexture.flipY = false;
        sharedBakedTexture.colorSpace = THREE.SRGBColorSpace;
      }

      const faceOrder = ['east', 'west', 'top', 'bottom', 'south', 'north'];

      for (const block of blocks) {
        const clone = block.mesh.clone();
        clone.name = block.id;
        clone.geometry = block.mesh.geometry.clone();

        const srcMat = Array.isArray(block.mesh.material)
          ? block.mesh.material[0]
          : block.mesh.material;

        let exportMat;

        if (sharedBakedTexture && uvData && uvData.has(block.id)) {
          const blockUVData = uvData.get(block.id);
          const uvAttr = clone.geometry.getAttribute('uv');

          if (uvAttr && blockUVData.faceUVs) {
            const faceVertexCount = 4;
            for (let faceIdx = 0; faceIdx < 6; faceIdx++) {
              const faceName = faceOrder[faceIdx];
              const faceUV = blockUVData.faceUVs[faceName];
              if (faceUV) {
                for (let v = 0; v < faceVertexCount; v++) {
                  const vertexIdx = faceIdx * faceVertexCount + v;
                  uvAttr.setXY(vertexIdx, faceUV.u, faceUV.v);
                }
              }
            }
            uvAttr.needsUpdate = true;
          }

          exportMat = new THREE.MeshStandardMaterial({
            map: sharedBakedTexture,
            roughness: srcMat.roughness || 0.7,
            metalness: srcMat.metalness || 0.1,
          });
        } else {
          exportMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color(block.color),
            roughness: srcMat.roughness || 0.7,
            metalness: srcMat.metalness || 0.1,
          });
        }

        if (block.emissive?.enabled) {
          exportMat.emissive = new THREE.Color(block.emissive.color);
          exportMat.emissiveIntensity = block.emissive.intensity;
        }

        clone.material = exportMat;
        exportScene.add(clone);
      }
    }

    // Build animation clips if requested
    const animations = [];
    if (includeAnimations && animator && animator.getAllAnimations().length > 0) {
      for (const anim of animator.getAllAnimations()) {
        const clip = this.buildAnimationClip(anim, blockManager);
        if (clip) {
          animations.push(clip);
        }
      }
    }

    try {
      const result = await this.exporter.parseAsync(exportScene, {
        binary,
        animations: animations
      });

      this.disposeScene(exportScene);
      return result;
    } catch (err) {
      this.disposeScene(exportScene);
      throw err;
    }
  }

  disposeScene(scene) {
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        } else {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      }
    });
  }

  buildAnimationClip(animation, blockManager) {
    const tracks = [];
    const blockKeyframes = new Map();

    for (const kf of animation.keyframes) {
      if (!blockKeyframes.has(kf.blockId)) {
        blockKeyframes.set(kf.blockId, []);
      }
      blockKeyframes.get(kf.blockId).push(kf);
    }

    for (const [blockId, keyframes] of blockKeyframes) {
      const block = blockManager.blocks.get(blockId);
      if (!block) continue;

      const objectName = block.id;
      const positionTimes = [];
      const positionValues = [];
      const rotationTimes = [];
      const rotationValues = [];

      for (const kf of keyframes) {
        const time = kf.time / 1000;

        if (kf.properties.position) {
          positionTimes.push(time);
          const pos = kf.properties.position;
          positionValues.push(pos.x + 0.5, pos.y + 0.5, pos.z + 0.5);
        }

        if (kf.properties.rotation) {
          rotationTimes.push(time);
          const euler = new THREE.Euler(
            THREE.MathUtils.degToRad(kf.properties.rotation.x),
            THREE.MathUtils.degToRad(kf.properties.rotation.y),
            THREE.MathUtils.degToRad(kf.properties.rotation.z)
          );
          const quat = new THREE.Quaternion().setFromEuler(euler);
          rotationValues.push(quat.x, quat.y, quat.z, quat.w);
        }
      }

      if (positionTimes.length > 0) {
        tracks.push(new THREE.VectorKeyframeTrack(
          `${objectName}.position`,
          positionTimes,
          positionValues
        ));
      }

      if (rotationTimes.length > 0) {
        tracks.push(new THREE.QuaternionKeyframeTrack(
          `${objectName}.quaternion`,
          rotationTimes,
          rotationValues
        ));
      }
    }

    if (tracks.length === 0) return null;

    return new THREE.AnimationClip(
      animation.name,
      animation.duration / 1000,
      tracks
    );
  }

  downloadFile(data, filename, binary = true) {
    const blob = binary
      ? new Blob([data], { type: 'application/octet-stream' })
      : new Blob([JSON.stringify(data)], { type: 'application/json' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  /**
   * Get optimization statistics estimate
   */
  getOptimizationStats(blockManager, options = {}) {
    const blocks = blockManager.getAllBlocks();
    const originalFaces = this.optimizer.estimateFaceCount(blocks);
    const optimizedFaces = this.optimizer.estimateOptimizedCount(blocks, options);
    const uniqueMaterials = this.optimizer.estimateUniqueMaterials(blocks);

    return {
      blockCount: blocks.length,
      originalFaces,
      optimizedFaces,
      uniqueMaterials,
      reduction: originalFaces > 0
        ? Math.round((1 - optimizedFaces / originalFaces) * 100)
        : 0
    };
  }
}
