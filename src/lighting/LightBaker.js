import * as THREE from 'three';
import { BLOCK_HEIGHT_MULTIPLIERS, BLOCK_Y_OFFSETS } from '../blocks/BlockTypes.js';

export class LightBaker {
  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.ambientLight = new THREE.Color(0.15, 0.15, 0.15);
  }

  /**
   * Bake lighting from emissive blocks into vertex colors
   * @param {BlockManager} blockManager - The block manager containing all blocks
   * @returns {Map} Map of blockId -> Float32Array of vertex colors
   */
  bake(blockManager) {
    const blocks = blockManager.getAllBlocks();
    const emissiveBlocks = blocks.filter(b => b.emissive?.enabled);
    const meshes = blocks.map(b => b.mesh);

    console.log(`Baking lighting: ${emissiveBlocks.length} emissive blocks, ${blocks.length} total blocks`);

    const vertexColors = new Map();

    // For each block, calculate lighting at each vertex
    for (const block of blocks) {
      const colors = this.bakeBlockVertices(block, emissiveBlocks, meshes);
      vertexColors.set(block.id, colors);
    }

    return vertexColors;
  }

  /**
   * Apply baked vertex colors to block meshes
   * @param {BlockManager} blockManager
   * @param {Map} vertexColors - Map from bake()
   */
  apply(blockManager, vertexColors) {
    for (const [blockId, colors] of vertexColors) {
      const block = blockManager.getBlockById(blockId);
      if (!block) continue;

      const geometry = block.mesh.geometry;

      // Add or update vertex colors
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Update material to use vertex colors
      const updateMaterial = (mat) => {
        mat.vertexColors = true;
        mat.needsUpdate = true;
      };

      if (Array.isArray(block.mesh.material)) {
        block.mesh.material.forEach(updateMaterial);
      } else {
        updateMaterial(block.mesh.material);
      }
    }
  }

  /**
   * Calculate vertex colors for a single block
   */
  bakeBlockVertices(block, emissiveBlocks, allMeshes) {
    const geometry = block.mesh.geometry;
    const positionAttr = geometry.getAttribute('position');
    const normalAttr = geometry.getAttribute('normal');
    const vertexCount = positionAttr.count;

    const colors = new Float32Array(vertexCount * 3);
    const worldPos = new THREE.Vector3();
    const worldNormal = new THREE.Vector3();
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(block.mesh.matrixWorld);

    // Ensure world matrix is up to date
    block.mesh.updateMatrixWorld();

    for (let i = 0; i < vertexCount; i++) {
      // Get vertex position in world space
      worldPos.fromBufferAttribute(positionAttr, i);
      worldPos.applyMatrix4(block.mesh.matrixWorld);

      // Get vertex normal in world space
      if (normalAttr) {
        worldNormal.fromBufferAttribute(normalAttr, i);
        worldNormal.applyMatrix3(normalMatrix).normalize();
      } else {
        worldNormal.set(0, 1, 0);
      }

      // Calculate lighting at this vertex
      const light = this.calculateLightAtPoint(
        worldPos,
        worldNormal,
        emissiveBlocks,
        allMeshes,
        block.mesh
      );

      // Store color (multiply with block's base color for final result)
      const baseColor = new THREE.Color(block.color);
      colors[i * 3] = Math.min(1, baseColor.r * light.r);
      colors[i * 3 + 1] = Math.min(1, baseColor.g * light.g);
      colors[i * 3 + 2] = Math.min(1, baseColor.b * light.b);
    }

    return colors;
  }

  /**
   * Calculate light contribution at a point from all emissive sources
   */
  calculateLightAtPoint(point, normal, emissiveBlocks, allMeshes, excludeMesh) {
    // Start with ambient light
    const totalLight = this.ambientLight.clone();

    for (const emissiveBlock of emissiveBlocks) {
      const emissiveCenter = this.getBlockCenter(emissiveBlock);
      const toLight = new THREE.Vector3().subVectors(emissiveCenter, point);
      const distance = toLight.length();

      // Skip if beyond light radius
      if (distance > emissiveBlock.emissive.radius) continue;

      // Normalize direction
      toLight.normalize();

      // Check if surface faces the light (dot product with normal)
      const facingFactor = Math.max(0, normal.dot(toLight));
      if (facingFactor <= 0) continue;

      // Check for occlusion (raycast from point towards light)
      const occluded = this.isOccluded(point, emissiveCenter, allMeshes, excludeMesh, emissiveBlock.mesh);
      if (occluded) continue;

      // Calculate falloff (inverse square with radius clamping)
      const normalizedDist = distance / emissiveBlock.emissive.radius;
      const falloff = Math.pow(1 - normalizedDist, 2);

      // Calculate light contribution
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

    // Offset the start point slightly along the direction to avoid self-intersection
    const startPoint = point.clone().addScaledVector(direction, 0.01);

    this.raycaster.set(startPoint, direction);
    this.raycaster.far = distance - 0.02; // Stop just before the target

    // Filter out source and target meshes
    const testMeshes = allMeshes.filter(m => m !== excludeSource && m !== excludeTarget);

    const intersects = this.raycaster.intersectObjects(testMeshes, false);
    return intersects.length > 0;
  }

  /**
   * Clear baked vertex colors from all blocks
   */
  clear(blockManager) {
    for (const block of blockManager.getAllBlocks()) {
      const geometry = block.mesh.geometry;

      // Remove vertex colors
      if (geometry.hasAttribute('color')) {
        geometry.deleteAttribute('color');
      }

      // Update material to not use vertex colors
      const updateMaterial = (mat) => {
        mat.vertexColors = false;
        mat.needsUpdate = true;
      };

      if (Array.isArray(block.mesh.material)) {
        block.mesh.material.forEach(updateMaterial);
      } else {
        updateMaterial(block.mesh.material);
      }
    }
  }

  /**
   * Generate a debug texture showing block colors and baked lighting
   * Returns a canvas element that can be exported as PNG
   */
  generateDebugTexture(blockManager, options = {}) {
    const {
      cellSize = 32,
      columns = 8,
      showLighting = true,
      showBaseColors = true
    } = options;

    const blocks = blockManager.getAllBlocks();
    const rows = Math.ceil(blocks.length / columns);
    const width = columns * cellSize;
    const height = Math.max(rows * cellSize * (showLighting && showBaseColors ? 2 : 1), cellSize);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    blocks.forEach((block, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      const x = col * cellSize;

      // Draw base color
      if (showBaseColors) {
        const y = row * cellSize;
        ctx.fillStyle = block.color;
        ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

        // Label
        ctx.fillStyle = '#ffffff';
        ctx.font = '8px monospace';
        ctx.fillText(block.type.slice(0, 4), x + 2, y + 10);
      }

      // Draw baked color (average vertex color)
      if (showLighting) {
        const y = (showBaseColors ? rows + row : row) * cellSize;
        const geometry = block.mesh.geometry;

        if (geometry.hasAttribute('color')) {
          const colorAttr = geometry.getAttribute('color');
          let avgR = 0, avgG = 0, avgB = 0;

          for (let i = 0; i < colorAttr.count; i++) {
            avgR += colorAttr.getX(i);
            avgG += colorAttr.getY(i);
            avgB += colorAttr.getZ(i);
          }

          avgR /= colorAttr.count;
          avgG /= colorAttr.count;
          avgB /= colorAttr.count;

          const r = Math.round(avgR * 255);
          const g = Math.round(avgG * 255);
          const b = Math.round(avgB * 255);
          ctx.fillStyle = `rgb(${r},${g},${b})`;
        } else {
          ctx.fillStyle = block.color;
        }

        ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

        // Emissive indicator
        if (block.emissive?.enabled) {
          ctx.strokeStyle = block.emissive.color;
          ctx.lineWidth = 2;
          ctx.strokeRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
        }
      }
    });

    // Add legend
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px monospace';
    if (showBaseColors && showLighting) {
      ctx.fillText('Base Colors', 4, rows * cellSize - 4);
      ctx.fillText('Baked', 4, height - 4);
    }

    return canvas;
  }

  /**
   * Generate a lightmap-only texture (light contribution without base color)
   */
  generateLightmapTexture(blockManager, options = {}) {
    const {
      cellSize = 32,
      columns = 8
    } = options;

    const blocks = blockManager.getAllBlocks();
    const rows = Math.ceil(blocks.length / columns);
    const width = columns * cellSize;
    const height = Math.max(rows * cellSize, cellSize);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Fill with neutral gray (no light contribution)
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, width, height);

    blocks.forEach((block, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      const x = col * cellSize;
      const y = row * cellSize;

      const geometry = block.mesh.geometry;

      if (geometry.hasAttribute('color')) {
        const colorAttr = geometry.getAttribute('color');
        const baseColor = new THREE.Color(block.color);

        // Calculate average light contribution by dividing baked color by base color
        let avgLight = new THREE.Color(0, 0, 0);
        let validSamples = 0;

        for (let i = 0; i < colorAttr.count; i++) {
          const bakedR = colorAttr.getX(i);
          const bakedG = colorAttr.getY(i);
          const bakedB = colorAttr.getZ(i);

          // Avoid division by zero
          const lightR = baseColor.r > 0.01 ? bakedR / baseColor.r : bakedR;
          const lightG = baseColor.g > 0.01 ? bakedG / baseColor.g : bakedG;
          const lightB = baseColor.b > 0.01 ? bakedB / baseColor.b : bakedB;

          avgLight.r += lightR;
          avgLight.g += lightG;
          avgLight.b += lightB;
          validSamples++;
        }

        if (validSamples > 0) {
          avgLight.r /= validSamples;
          avgLight.g /= validSamples;
          avgLight.b /= validSamples;
        }

        const r = Math.round(Math.min(1, avgLight.r) * 255);
        const g = Math.round(Math.min(1, avgLight.g) * 255);
        const b = Math.round(Math.min(1, avgLight.b) * 255);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
      } else {
        // No baking, show ambient level
        ctx.fillStyle = '#262626'; // ~0.15 ambient
      }

      ctx.fillRect(x, y, cellSize, cellSize);

      // Grid lines
      ctx.strokeStyle = '#333333';
      ctx.strokeRect(x, y, cellSize, cellSize);
    });

    return canvas;
  }

  /**
   * Download a canvas as PNG
   */
  downloadCanvasAsPNG(canvas, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
}
