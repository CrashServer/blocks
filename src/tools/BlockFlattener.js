import * as THREE from 'three';
import { Brush, Evaluator, ADDITION } from 'three-bvh-csg';
import { MergedMesh } from '../blocks/MergedMesh.js';

/**
 * BlockFlattener - Merges touching blocks into single unified meshes using CSG
 *
 * Features:
 * - Finds connected "islands" of touching blocks
 * - Uses CSG boolean union to truly merge geometries
 * - Removes internal faces between any touching blocks
 * - Works with all block types (cubes, slabs, wedges, etc.)
 * - Creates clean edge outlines for tattoo/stencil exports
 */
export class BlockFlattener {
  constructor(blockManager) {
    this.blockManager = blockManager;
    this.evaluator = new Evaluator();
  }

  /**
   * Find all connected islands of blocks
   * Uses flood-fill to group touching blocks
   */
  findIslands(blocks) {
    if (blocks.length === 0) return [];

    // Build position map for fast neighbor lookup
    const posMap = new Map();
    const blockSet = new Set(blocks.map(b => b.id));

    for (const block of blocks) {
      const pos = block.gridPosition;
      const key = `${pos.x},${pos.y},${pos.z}`;
      posMap.set(key, block);
    }

    // Track which blocks have been assigned to an island
    const visited = new Set();
    const islands = [];

    // 6-connected neighbors (faces touching)
    const neighbors = [
      [1, 0, 0], [-1, 0, 0],
      [0, 1, 0], [0, -1, 0],
      [0, 0, 1], [0, 0, -1]
    ];

    // Flood fill to find connected components
    for (const block of blocks) {
      if (visited.has(block.id)) continue;

      const island = [];
      const queue = [block];

      while (queue.length > 0) {
        const current = queue.shift();
        if (visited.has(current.id)) continue;

        visited.add(current.id);
        island.push(current);

        // Check all 6 neighbors
        const pos = current.gridPosition;
        for (const [dx, dy, dz] of neighbors) {
          const neighborKey = `${pos.x + dx},${pos.y + dy},${pos.z + dz}`;
          const neighbor = posMap.get(neighborKey);

          if (neighbor && blockSet.has(neighbor.id) && !visited.has(neighbor.id)) {
            queue.push(neighbor);
          }
        }
      }

      if (island.length > 0) {
        islands.push(island);
      }
    }

    return islands;
  }

  /**
   * Create a CSG Brush from a block
   */
  createBrushFromBlock(block) {
    const mesh = block.mesh;
    mesh.updateMatrixWorld();

    // Clone geometry and apply world transform
    const geometry = mesh.geometry.clone();
    geometry.applyMatrix4(mesh.matrixWorld);

    // Ensure geometry is indexed (required for CSG)
    if (!geometry.index) {
      const positions = geometry.getAttribute('position');
      const indices = [];
      for (let i = 0; i < positions.count; i++) {
        indices.push(i);
      }
      geometry.setIndex(indices);
    }

    // Create brush
    const brush = new Brush(geometry);
    brush.updateMatrixWorld();

    return brush;
  }

  /**
   * Merge an island of blocks using CSG union
   * Preserves individual block colors using vertex colors
   */
  mergeIsland(blocks) {
    if (blocks.length === 0) return null;

    const primaryColor = blocks[0].color;

    // Single block - just clone its geometry
    if (blocks.length === 1) {
      const block = blocks[0];
      block.mesh.updateMatrixWorld();

      const geometry = block.mesh.geometry.clone();
      geometry.applyMatrix4(block.mesh.matrixWorld);

      // Add vertex colors
      this.addVertexColors(geometry, block.color);

      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        vertexColors: true,
        roughness: 0.7,
        metalness: 0.1
      });

      return new MergedMesh({
        geometry: geometry,
        material: material,
        color: primaryColor,
        layerId: block.layerId,
        sourceBlocks: [block.toJSON()]
      });
    }

    // Group blocks by color
    const colorGroups = new Map();
    for (const block of blocks) {
      const color = block.color.toLowerCase();
      if (!colorGroups.has(color)) {
        colorGroups.set(color, []);
      }
      colorGroups.get(color).push(block);
    }

    // CSG merge each color group separately
    const colorMeshes = [];

    for (const [color, groupBlocks] of colorGroups) {
      try {
        const mergedGeometry = this.csgMergeBlocks(groupBlocks);
        if (mergedGeometry) {
          // Add vertex colors for this group
          this.addVertexColors(mergedGeometry, color);
          colorMeshes.push({ geometry: mergedGeometry, color });
        }
      } catch (error) {
        console.error(`CSG merge failed for color ${color}:`, error);
        // Fallback for this color group
        const fallbackGeom = this.simpleMergeBlocks(groupBlocks);
        this.addVertexColors(fallbackGeom, color);
        colorMeshes.push({ geometry: fallbackGeom, color });
      }
    }

    if (colorMeshes.length === 0) return null;

    // Combine all color groups into single geometry with vertex colors
    const finalGeometry = this.combineGeometriesWithColors(colorMeshes);

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      vertexColors: true,
      roughness: 0.7,
      metalness: 0.1
    });

    return new MergedMesh({
      geometry: finalGeometry,
      material: material,
      color: primaryColor,
      layerId: blocks[0].layerId,
      sourceBlocks: blocks.map(b => b.toJSON())
    });
  }

  /**
   * CSG merge a group of blocks (same color)
   */
  csgMergeBlocks(blocks) {
    if (blocks.length === 0) return null;

    if (blocks.length === 1) {
      const block = blocks[0];
      block.mesh.updateMatrixWorld();
      const geometry = block.mesh.geometry.clone();
      geometry.applyMatrix4(block.mesh.matrixWorld);
      return geometry;
    }

    // Start with first block as base
    let resultBrush = this.createBrushFromBlock(blocks[0]);

    // Union each subsequent block
    for (let i = 1; i < blocks.length; i++) {
      const brush = this.createBrushFromBlock(blocks[i]);

      // Perform CSG union
      const newResult = this.evaluator.evaluate(resultBrush, brush, ADDITION);

      // Clean up old brushes
      if (resultBrush.geometry) resultBrush.geometry.dispose();
      if (brush.geometry) brush.geometry.dispose();

      resultBrush = newResult;
    }

    const finalGeometry = resultBrush.geometry;

    // Compute normals if needed
    if (!finalGeometry.getAttribute('normal')) {
      finalGeometry.computeVertexNormals();
    }

    return finalGeometry;
  }

  /**
   * Simple merge without CSG (fallback)
   */
  simpleMergeBlocks(blocks) {
    const geometries = [];

    for (const block of blocks) {
      const mesh = block.mesh;
      mesh.updateMatrixWorld();

      const geom = mesh.geometry.clone();
      geom.applyMatrix4(mesh.matrixWorld);
      geometries.push(geom);
    }

    const merged = this.mergeGeometries(geometries);
    geometries.forEach(g => g.dispose());

    return merged;
  }

  /**
   * Add vertex colors to a geometry
   */
  addVertexColors(geometry, hexColor) {
    const color = new THREE.Color(hexColor);
    const posAttr = geometry.getAttribute('position');
    const colors = new Float32Array(posAttr.count * 3);

    for (let i = 0; i < posAttr.count; i++) {
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  }

  /**
   * Combine multiple geometries that already have vertex colors
   */
  combineGeometriesWithColors(colorMeshes) {
    const allPositions = [];
    const allNormals = [];
    const allColors = [];
    const allIndices = [];
    let vertexOffset = 0;

    for (const { geometry } of colorMeshes) {
      const posAttr = geometry.getAttribute('position');
      const normAttr = geometry.getAttribute('normal');
      const colorAttr = geometry.getAttribute('color');
      const idx = geometry.getIndex();

      // Add positions, normals, colors
      for (let i = 0; i < posAttr.count; i++) {
        allPositions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));

        if (normAttr) {
          allNormals.push(normAttr.getX(i), normAttr.getY(i), normAttr.getZ(i));
        }

        if (colorAttr) {
          allColors.push(colorAttr.getX(i), colorAttr.getY(i), colorAttr.getZ(i));
        }
      }

      // Add indices
      if (idx) {
        for (let i = 0; i < idx.count; i++) {
          allIndices.push(idx.getX(i) + vertexOffset);
        }
      } else {
        for (let i = 0; i < posAttr.count; i++) {
          allIndices.push(i + vertexOffset);
        }
      }

      vertexOffset += posAttr.count;
      geometry.dispose();
    }

    const combined = new THREE.BufferGeometry();
    combined.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));

    if (allNormals.length > 0) {
      combined.setAttribute('normal', new THREE.Float32BufferAttribute(allNormals, 3));
    } else {
      combined.computeVertexNormals();
    }

    if (allColors.length > 0) {
      combined.setAttribute('color', new THREE.Float32BufferAttribute(allColors, 3));
    }

    combined.setIndex(allIndices);

    return combined;
  }

  /**
   * Simple geometry merge helper
   */
  mergeGeometries(geometries) {
    const positions = [];
    const normals = [];
    const indices = [];
    let vertexOffset = 0;

    for (const geom of geometries) {
      const posAttr = geom.getAttribute('position');
      const normAttr = geom.getAttribute('normal');
      const idx = geom.getIndex();

      // Add positions
      for (let i = 0; i < posAttr.count; i++) {
        positions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
        if (normAttr) {
          normals.push(normAttr.getX(i), normAttr.getY(i), normAttr.getZ(i));
        }
      }

      // Add indices
      if (idx) {
        for (let i = 0; i < idx.count; i++) {
          indices.push(idx.getX(i) + vertexOffset);
        }
      } else {
        for (let i = 0; i < posAttr.count; i++) {
          indices.push(i + vertexOffset);
        }
      }

      vertexOffset += posAttr.count;
    }

    const merged = new THREE.BufferGeometry();
    merged.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    if (normals.length > 0) {
      merged.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    } else {
      merged.computeVertexNormals();
    }
    merged.setIndex(indices);

    return merged;
  }

  /**
   * Flatten all blocks (or selected blocks) into merged meshes
   * Returns { mergedMeshes, removedBlockIds }
   */
  flatten(blocks = null) {
    // Use all blocks if none specified
    const targetBlocks = blocks || this.blockManager.getAllBlocks();

    if (targetBlocks.length === 0) {
      return { mergedMeshes: [], removedBlockIds: [] };
    }

    // Find connected islands
    const islands = this.findIslands(targetBlocks);

    // Merge each island
    const mergedMeshes = [];
    const removedBlockIds = [];

    for (const island of islands) {
      const merged = this.mergeIsland(island);
      if (merged) {
        mergedMeshes.push(merged);
        removedBlockIds.push(...island.map(b => b.id));
      }
    }

    return { mergedMeshes, removedBlockIds };
  }

  /**
   * Flatten and apply to the scene
   * Removes original blocks and adds merged meshes
   */
  flattenAndApply(blocks = null) {
    const { mergedMeshes, removedBlockIds } = this.flatten(blocks);

    // Remove original blocks
    for (const id of removedBlockIds) {
      this.blockManager.removeBlock(id);
    }

    // Add merged meshes to scene
    for (const merged of mergedMeshes) {
      this.blockManager.addMergedMesh(merged);
    }

    return {
      mergedCount: mergedMeshes.length,
      blocksRemoved: removedBlockIds.length,
      mergedMeshes
    };
  }
}
