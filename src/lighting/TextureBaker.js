import * as THREE from 'three';
import { BLOCK_HEIGHT_MULTIPLIERS, BLOCK_Y_OFFSETS } from '../blocks/BlockTypes.js';

/**
 * Bakes lighting into a texture atlas instead of vertex colors.
 * Each face of each block gets a pixel in the atlas.
 * More compatible with GLTF importers like Blender.
 */
export class TextureBaker {
  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.ambientLight = new THREE.Color(0.15, 0.15, 0.15);

    // Face order matches Three.js BoxGeometry face order
    this.faceOrder = ['east', 'west', 'top', 'bottom', 'south', 'north'];
    this.faceNormals = {
      east:   new THREE.Vector3(1, 0, 0),
      west:   new THREE.Vector3(-1, 0, 0),
      top:    new THREE.Vector3(0, 1, 0),
      bottom: new THREE.Vector3(0, -1, 0),
      south:  new THREE.Vector3(0, 0, 1),
      north:  new THREE.Vector3(0, 0, -1)
    };
  }

  /**
   * Bake lighting into a texture atlas
   * @param {BlockManager} blockManager
   * @returns {{ texture: HTMLCanvasElement, uvData: Map<string, object> }}
   */
  bake(blockManager) {
    const blocks = blockManager.getAllBlocks();
    const emissiveBlocks = blocks.filter(b => b.emissive?.enabled);
    const meshes = blocks.map(b => b.mesh);

    if (emissiveBlocks.length === 0) {
      console.warn('No emissive blocks found for texture baking');
    }

    console.log(`Texture baking: ${emissiveBlocks.length} emissive blocks, ${blocks.length} total blocks`);

    // Calculate atlas dimensions
    // 6 pixels per block (one per face), arranged in rows
    const pixelsPerBlock = 6;
    const totalPixels = blocks.length * pixelsPerBlock;
    const atlasWidth = Math.ceil(Math.sqrt(totalPixels));
    const atlasHeight = Math.ceil(totalPixels / atlasWidth);

    console.log(`Atlas size: ${atlasWidth}x${atlasHeight} (${totalPixels} pixels for ${blocks.length} blocks)`);

    // Create canvas for the texture
    const canvas = document.createElement('canvas');
    canvas.width = atlasWidth;
    canvas.height = atlasHeight;
    const ctx = canvas.getContext('2d');

    // Fill with black (ambient)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, atlasWidth, atlasHeight);

    // UV data for each block: maps blockId -> { faceUVs: { faceName: {u, v} } }
    const uvData = new Map();

    // Process each block
    let pixelIndex = 0;
    for (const block of blocks) {
      const blockUVs = {};

      for (const faceName of this.faceOrder) {
        // Calculate pixel position in atlas
        const px = pixelIndex % atlasWidth;
        const py = Math.floor(pixelIndex / atlasWidth);

        // Calculate lighting for this face
        const faceColor = this.calculateFaceLighting(
          block,
          faceName,
          emissiveBlocks,
          meshes
        );

        // Draw pixel
        const r = Math.round(Math.min(1, faceColor.r) * 255);
        const g = Math.round(Math.min(1, faceColor.g) * 255);
        const b = Math.round(Math.min(1, faceColor.b) * 255);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(px, py, 1, 1);

        // Store UV coordinates (center of pixel, normalized)
        blockUVs[faceName] = {
          u: (px + 0.5) / atlasWidth,
          v: 1 - (py + 0.5) / atlasHeight  // Flip Y for texture coordinates
        };

        pixelIndex++;
      }

      uvData.set(block.id, { faceUVs: blockUVs });
    }

    return { texture: canvas, uvData, atlasWidth, atlasHeight };
  }

  /**
   * Calculate average lighting for a block face
   */
  calculateFaceLighting(block, faceName, emissiveBlocks, allMeshes) {
    const baseColor = new THREE.Color(block.color);
    const normal = this.faceNormals[faceName].clone();

    // Apply block rotation to normal
    const euler = new THREE.Euler(
      THREE.MathUtils.degToRad(block.rotation?.x || 0),
      THREE.MathUtils.degToRad(block.rotation?.y || 0),
      THREE.MathUtils.degToRad(block.rotation?.z || 0)
    );
    normal.applyEuler(euler);

    // Get face center in world space
    const faceCenter = this.getFaceCenter(block, faceName);

    // Calculate lighting at face center
    const light = this.calculateLightAtPoint(
      faceCenter,
      normal,
      emissiveBlocks,
      allMeshes,
      block.mesh
    );

    // Multiply base color by light
    return new THREE.Color(
      Math.min(1, baseColor.r * light.r),
      Math.min(1, baseColor.g * light.g),
      Math.min(1, baseColor.b * light.b)
    );
  }

  /**
   * Get the world-space center of a block face
   */
  getFaceCenter(block, faceName) {
    const pos = block.gridPosition;
    const dims = block.dimensions;
    const heightMult = BLOCK_HEIGHT_MULTIPLIERS[block.type] || 1;
    const yOffset = BLOCK_Y_OFFSETS[block.type] || 0;
    const actualHeight = dims.h * heightMult;

    // Block center
    const center = new THREE.Vector3(
      pos.x + dims.w / 2,
      pos.y + yOffset + actualHeight / 2,
      pos.z + dims.d / 2
    );

    // Offset to face center based on face direction
    const offset = new THREE.Vector3();
    switch (faceName) {
      case 'east':   offset.set(dims.w / 2, 0, 0); break;
      case 'west':   offset.set(-dims.w / 2, 0, 0); break;
      case 'top':    offset.set(0, actualHeight / 2, 0); break;
      case 'bottom': offset.set(0, -actualHeight / 2, 0); break;
      case 'south':  offset.set(0, 0, dims.d / 2); break;
      case 'north':  offset.set(0, 0, -dims.d / 2); break;
    }

    // Apply block rotation to offset
    const euler = new THREE.Euler(
      THREE.MathUtils.degToRad(block.rotation?.x || 0),
      THREE.MathUtils.degToRad(block.rotation?.y || 0),
      THREE.MathUtils.degToRad(block.rotation?.z || 0)
    );
    offset.applyEuler(euler);

    return center.add(offset);
  }

  /**
   * Calculate light contribution at a point from all emissive sources
   */
  calculateLightAtPoint(point, normal, emissiveBlocks, allMeshes, excludeMesh) {
    const totalLight = this.ambientLight.clone();

    for (const emissiveBlock of emissiveBlocks) {
      const emissiveCenter = this.getBlockCenter(emissiveBlock);
      const toLight = new THREE.Vector3().subVectors(emissiveCenter, point);
      const distance = toLight.length();

      if (distance > emissiveBlock.emissive.radius) continue;

      toLight.normalize();

      const facingFactor = Math.max(0, normal.dot(toLight));
      if (facingFactor <= 0) continue;

      const occluded = this.isOccluded(point, emissiveCenter, allMeshes, excludeMesh, emissiveBlock.mesh);
      if (occluded) continue;

      const normalizedDist = distance / emissiveBlock.emissive.radius;
      const falloff = Math.pow(1 - normalizedDist, 2);

      const emissiveColor = new THREE.Color(emissiveBlock.emissive.color);
      const intensity = emissiveBlock.emissive.intensity * facingFactor * falloff;

      totalLight.r += emissiveColor.r * intensity;
      totalLight.g += emissiveColor.g * intensity;
      totalLight.b += emissiveColor.b * intensity;
    }

    return totalLight;
  }

  /**
   * Get the world-space center of a block
   */
  getBlockCenter(block) {
    const pos = block.gridPosition;
    const dims = block.dimensions;
    const heightMult = BLOCK_HEIGHT_MULTIPLIERS[block.type] || 1;
    const yOffset = BLOCK_Y_OFFSETS[block.type] || 0;
    const actualHeight = dims.h * heightMult;

    return new THREE.Vector3(
      pos.x + dims.w / 2,
      pos.y + yOffset + actualHeight / 2,
      pos.z + dims.d / 2
    );
  }

  /**
   * Check if a ray from point to target is blocked by any mesh
   */
  isOccluded(point, target, allMeshes, excludeSource, excludeTarget) {
    const direction = new THREE.Vector3().subVectors(target, point);
    const distance = direction.length();
    direction.normalize();

    const startPoint = point.clone().addScaledVector(direction, 0.01);

    this.raycaster.set(startPoint, direction);
    this.raycaster.far = distance - 0.02;

    const testMeshes = allMeshes.filter(m => m !== excludeSource && m !== excludeTarget);
    const intersects = this.raycaster.intersectObjects(testMeshes, false);
    return intersects.length > 0;
  }

  /**
   * Apply baked texture UVs to block geometries
   * This modifies the UV coordinates to point to the atlas
   */
  applyUVs(blockManager, uvData) {
    for (const [blockId, data] of uvData) {
      const block = blockManager.getBlockById(blockId);
      if (!block) continue;

      const geometry = block.mesh.geometry;
      const uvAttr = geometry.getAttribute('uv');

      if (!uvAttr) {
        console.warn(`Block ${blockId} has no UV attribute`);
        continue;
      }

      // BoxGeometry has 24 vertices (4 per face)
      // Face order in BoxGeometry: +X, -X, +Y, -Y, +Z, -Z
      // Which maps to: east, west, top, bottom, south, north
      const faceVertexCount = 4;

      for (let faceIdx = 0; faceIdx < 6; faceIdx++) {
        const faceName = this.faceOrder[faceIdx];
        const faceUV = data.faceUVs[faceName];

        // Set all 4 vertices of this face to the same UV (center of pixel)
        for (let v = 0; v < faceVertexCount; v++) {
          const vertexIdx = faceIdx * faceVertexCount + v;
          uvAttr.setXY(vertexIdx, faceUV.u, faceUV.v);
        }
      }

      uvAttr.needsUpdate = true;
    }
  }

  /**
   * Create a Three.js texture from the baked canvas
   */
  createTexture(canvas) {
    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;  // No interpolation
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.flipY = false;  // We already flipped in UV calculation
    return texture;
  }
}
