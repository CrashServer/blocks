import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * MeshOptimizer - Optimizes block geometry for export
 *
 * Optimization techniques:
 * 1. Face culling - Remove faces between adjacent solid blocks
 * 2. Greedy meshing - Merge adjacent same-color cubes into larger quads
 * 3. Material batching - Group geometry by material/color
 * 4. Vertex deduplication - Remove duplicate vertices and use indexed geometry
 * 5. Merge all - Combine everything into a single mesh with vertex colors
 * 6. Instancing - Use GPU instancing for identical block types (for GLTF export)
 */

// Block types that are considered "solid" for face culling
const SOLID_BLOCK_TYPES = [
  'cube', 'slab', 'slabTop', 'quarter', 'quarterTall',
  'halfX', 'halfZ', 'halfCorner'
];

// Face directions and their opposites
const FACE_DIRS = {
  east:   { axis: 'x', sign:  1, opposite: 'west' },
  west:   { axis: 'x', sign: -1, opposite: 'east' },
  top:    { axis: 'y', sign:  1, opposite: 'bottom' },
  bottom: { axis: 'y', sign: -1, opposite: 'top' },
  south:  { axis: 'z', sign:  1, opposite: 'north' },
  north:  { axis: 'z', sign: -1, opposite: 'south' }
};

export class MeshOptimizer {
  constructor() {
    this.stats = {
      originalFaces: 0,
      optimizedFaces: 0,
      culledFaces: 0,
      mergedQuads: 0
    };
  }

  /**
   * Main optimization entry point
   */
  optimize(blocks, options = {}) {
    const {
      cullFaces = true,
      mergeCubes = true,
      batchMaterials = true,
      mergeAll = false,
      deduplicateVertices = true
    } = options;

    this.resetStats();

    // Convert blocks to position map for neighbor lookups
    const blockMap = this.buildBlockMap(blocks);

    // Separate blocks by type for different optimization strategies
    const cubeBlocks = [];
    const otherBlocks = [];

    for (const block of blocks) {
      if (block.type === 'cube') {
        cubeBlocks.push(block);
      } else {
        otherBlocks.push(block);
      }
    }

    let meshes = [];

    // Process cube blocks with greedy meshing
    if (cubeBlocks.length > 0) {
      if (mergeCubes) {
        const mergedMeshes = this.greedyMeshCubes(cubeBlocks, blockMap, cullFaces, batchMaterials);
        meshes.push(...mergedMeshes);
      } else if (cullFaces) {
        const culledMeshes = this.cullCubeFaces(cubeBlocks, blockMap, batchMaterials);
        meshes.push(...culledMeshes);
      } else {
        // No optimization, just batch by material
        const simpleMeshes = this.createSimpleMeshes(cubeBlocks, batchMaterials);
        meshes.push(...simpleMeshes);
      }
    }

    // Process non-cube blocks (less optimization possible)
    if (otherBlocks.length > 0) {
      const otherMeshes = this.processNonCubeBlocks(otherBlocks, blockMap, cullFaces, batchMaterials);
      meshes.push(...otherMeshes);
    }

    // Merge all meshes into a single mesh with vertex colors
    if (mergeAll && meshes.length > 1) {
      meshes = this.mergeAllMeshes(meshes);
    }

    // Deduplicate vertices in each mesh
    if (deduplicateVertices) {
      meshes = meshes.map(mesh => {
        const optimizedGeom = this.deduplicateGeometryVertices(mesh.geometry);
        mesh.geometry.dispose();
        mesh.geometry = optimizedGeom;
        return mesh;
      });
    }

    // Update final stats
    this.stats.finalMeshCount = meshes.length;
    this.stats.finalVertexCount = meshes.reduce((sum, m) => {
      return sum + (m.geometry.getAttribute('position')?.count || 0);
    }, 0);
    this.stats.finalTriangleCount = meshes.reduce((sum, m) => {
      const idx = m.geometry.getIndex();
      if (idx) return sum + idx.count / 3;
      return sum + (m.geometry.getAttribute('position')?.count || 0) / 3;
    }, 0);

    return {
      meshes,
      stats: { ...this.stats }
    };
  }

  resetStats() {
    this.stats = {
      originalFaces: 0,
      optimizedFaces: 0,
      culledFaces: 0,
      mergedQuads: 0
    };
  }

  /**
   * Build a map of position -> block for fast neighbor lookups
   */
  buildBlockMap(blocks) {
    const map = new Map();
    for (const block of blocks) {
      const pos = block.gridPosition;
      const key = `${pos.x},${pos.y},${pos.z}`;
      map.set(key, block);
    }
    return map;
  }

  /**
   * Check if a neighbor exists at the given position
   */
  hasNeighbor(blockMap, x, y, z) {
    return blockMap.has(`${x},${y},${z}`);
  }

  /**
   * Get neighbor block at position
   */
  getNeighbor(blockMap, x, y, z) {
    return blockMap.get(`${x},${y},${z}`);
  }

  /**
   * Check if a face should be culled (neighbor is solid and covers the face)
   */
  shouldCullFace(block, face, blockMap) {
    const pos = block.gridPosition;
    const dir = FACE_DIRS[face];

    const neighborPos = {
      x: pos.x + (dir.axis === 'x' ? dir.sign : 0),
      y: pos.y + (dir.axis === 'y' ? dir.sign : 0),
      z: pos.z + (dir.axis === 'z' ? dir.sign : 0)
    };

    const neighbor = this.getNeighbor(blockMap, neighborPos.x, neighborPos.y, neighborPos.z);

    if (!neighbor) return false;

    // Only cull if neighbor is a solid full block (cube)
    // Other block types may not fully cover the face
    return neighbor.type === 'cube';
  }

  /**
   * Greedy meshing for cube blocks
   * Groups same-color cubes and merges their faces into larger quads
   */
  greedyMeshCubes(cubes, blockMap, cullFaces, batchMaterials) {
    // Group cubes by color
    const colorGroups = new Map();
    for (const cube of cubes) {
      const color = cube.color.toLowerCase();
      if (!colorGroups.has(color)) {
        colorGroups.set(color, []);
      }
      colorGroups.get(color).push(cube);
    }

    const meshes = [];

    for (const [color, groupCubes] of colorGroups) {
      // Build a set of occupied positions for this color group
      const occupied = new Set();
      for (const cube of groupCubes) {
        const pos = cube.gridPosition;
        occupied.add(`${pos.x},${pos.y},${pos.z}`);
      }

      // Generate optimized faces for each direction
      const faces = [];

      for (const [faceName, faceDir] of Object.entries(FACE_DIRS)) {
        const faceQuads = this.greedyMeshFace(groupCubes, faceName, faceDir, occupied, blockMap, cullFaces);
        faces.push(...faceQuads);
      }

      this.stats.originalFaces += groupCubes.length * 6;

      if (faces.length > 0) {
        const geometry = this.createGeometryFromQuads(faces);
        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.1
          })
        );
        mesh.name = `merged_cubes_${color}`;
        meshes.push(mesh);
        this.stats.optimizedFaces += faces.length;
        this.stats.mergedQuads += faces.length;
      }
    }

    return meshes;
  }

  /**
   * Greedy mesh a single face direction
   * Uses a 2D greedy algorithm to merge adjacent faces into larger rectangles
   */
  greedyMeshFace(cubes, faceName, faceDir, occupied, blockMap, cullFaces) {
    const quads = [];

    // Determine the two axes we'll be iterating over
    const axes = ['x', 'y', 'z'].filter(a => a !== faceDir.axis);
    const [axis1, axis2] = axes;

    // Build a 2D slice for each position along the face axis
    // Key: "u,v" where u and v are the two perpendicular axes
    // Value: true if this face is visible

    // Group cubes by their position on the face axis
    const slices = new Map();

    for (const cube of cubes) {
      const pos = cube.gridPosition;
      const sliceKey = pos[faceDir.axis];

      if (!slices.has(sliceKey)) {
        slices.set(sliceKey, new Map());
      }

      // Check if this face is visible (not culled)
      let visible = true;
      if (cullFaces) {
        const neighborPos = {
          x: pos.x + (faceDir.axis === 'x' ? faceDir.sign : 0),
          y: pos.y + (faceDir.axis === 'y' ? faceDir.sign : 0),
          z: pos.z + (faceDir.axis === 'z' ? faceDir.sign : 0)
        };

        // Check if neighbor is same color (merge across) or different block (cull)
        const neighborKey = `${neighborPos.x},${neighborPos.y},${neighborPos.z}`;
        if (occupied.has(neighborKey)) {
          // Same color neighbor - cull this face
          visible = false;
          this.stats.culledFaces++;
        } else if (blockMap.has(neighborKey)) {
          // Different block neighbor - cull this face
          visible = false;
          this.stats.culledFaces++;
        }
      }

      if (visible) {
        const u = pos[axis1];
        const v = pos[axis2];
        slices.get(sliceKey).set(`${u},${v}`, { pos, cube });
      }
    }

    // For each slice, apply 2D greedy meshing
    for (const [slicePos, slice] of slices) {
      const processed = new Set();

      // Sort positions for consistent iteration
      const positions = Array.from(slice.keys()).map(k => {
        const [u, v] = k.split(',').map(Number);
        return { u, v, key: k };
      }).sort((a, b) => a.v - b.v || a.u - b.u);

      for (const { u, v, key } of positions) {
        if (processed.has(key)) continue;

        // Try to expand this quad as far as possible
        let width = 1;
        let height = 1;

        // Expand in u direction
        while (slice.has(`${u + width},${v}`) && !processed.has(`${u + width},${v}`)) {
          width++;
        }

        // Expand in v direction (checking entire width)
        expandHeight: while (true) {
          for (let du = 0; du < width; du++) {
            const checkKey = `${u + du},${v + height}`;
            if (!slice.has(checkKey) || processed.has(checkKey)) {
              break expandHeight;
            }
          }
          height++;
        }

        // Mark all cells in this quad as processed
        for (let du = 0; du < width; du++) {
          for (let dv = 0; dv < height; dv++) {
            processed.add(`${u + du},${v + dv}`);
          }
        }

        // Create the quad
        const quad = this.createQuad(
          faceName,
          faceDir,
          slicePos,
          u, v,
          width, height,
          axis1, axis2
        );
        quads.push(quad);
      }
    }

    return quads;
  }

  /**
   * Create a quad (4 vertices) for a merged face
   */
  createQuad(faceName, faceDir, slicePos, u, v, width, height, axis1, axis2) {
    // Calculate the 4 corners of the quad
    const corners = [];

    // Offset based on face direction (0 or 1)
    const offset = faceDir.sign > 0 ? 1 : 0;

    // The four corners in CCW order when looking at the face from outside
    const cornerOffsets = [
      [0, 0],
      [width, 0],
      [width, height],
      [0, height]
    ];

    // Reverse winding for back-facing
    if (faceDir.sign < 0) {
      cornerOffsets.reverse();
    }

    for (const [du, dv] of cornerOffsets) {
      const corner = { x: 0, y: 0, z: 0 };
      corner[faceDir.axis] = slicePos + offset;
      corner[axis1] = u + du;
      corner[axis2] = v + dv;
      corners.push(corner);
    }

    return {
      vertices: corners,
      normal: {
        x: faceDir.axis === 'x' ? faceDir.sign : 0,
        y: faceDir.axis === 'y' ? faceDir.sign : 0,
        z: faceDir.axis === 'z' ? faceDir.sign : 0
      }
    };
  }

  /**
   * Create a BufferGeometry from an array of quads
   */
  createGeometryFromQuads(quads) {
    const vertices = [];
    const normals = [];
    const indices = [];

    let vertexIndex = 0;

    for (const quad of quads) {
      // Add 4 vertices
      for (const v of quad.vertices) {
        vertices.push(v.x, v.y, v.z);
        normals.push(quad.normal.x, quad.normal.y, quad.normal.z);
      }

      // Add 2 triangles (6 indices)
      indices.push(
        vertexIndex, vertexIndex + 1, vertexIndex + 2,
        vertexIndex, vertexIndex + 2, vertexIndex + 3
      );

      vertexIndex += 4;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setIndex(indices);

    return geometry;
  }

  /**
   * Simple face culling without greedy meshing
   */
  cullCubeFaces(cubes, blockMap, batchMaterials) {
    const colorGroups = batchMaterials ? new Map() : null;
    const meshes = [];

    for (const cube of cubes) {
      const pos = cube.gridPosition;
      const visibleFaces = [];

      this.stats.originalFaces += 6;

      for (const [faceName, faceDir] of Object.entries(FACE_DIRS)) {
        if (!this.shouldCullFace(cube, faceName, blockMap)) {
          visibleFaces.push(faceName);
          this.stats.optimizedFaces++;
        } else {
          this.stats.culledFaces++;
        }
      }

      if (visibleFaces.length === 0) continue;

      const geometry = this.createCubeWithFaces(pos, visibleFaces);
      const color = cube.color.toLowerCase();

      if (batchMaterials) {
        if (!colorGroups.has(color)) {
          colorGroups.set(color, []);
        }
        colorGroups.get(color).push(geometry);
      } else {
        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.1
          })
        );
        meshes.push(mesh);
      }
    }

    // Merge geometries by color
    if (batchMaterials && colorGroups) {
      for (const [color, geometries] of colorGroups) {
        const merged = this.mergeGeometries(geometries);
        const mesh = new THREE.Mesh(
          merged,
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.1
          })
        );
        mesh.name = `culled_cubes_${color}`;
        meshes.push(mesh);
      }
    }

    return meshes;
  }

  /**
   * Create a cube geometry with only specified faces
   */
  createCubeWithFaces(pos, visibleFaces) {
    const quads = [];

    for (const faceName of visibleFaces) {
      const faceDir = FACE_DIRS[faceName];
      const axes = ['x', 'y', 'z'].filter(a => a !== faceDir.axis);

      quads.push(this.createQuad(
        faceName,
        faceDir,
        pos[faceDir.axis],
        pos[axes[0]], pos[axes[1]],
        1, 1,
        axes[0], axes[1]
      ));
    }

    return this.createGeometryFromQuads(quads);
  }

  /**
   * Merge multiple geometries into one
   */
  mergeGeometries(geometries) {
    const vertices = [];
    const normals = [];
    const indices = [];
    let vertexOffset = 0;

    for (const geom of geometries) {
      const posAttr = geom.getAttribute('position');
      const normAttr = geom.getAttribute('normal');
      const idx = geom.getIndex();

      for (let i = 0; i < posAttr.count; i++) {
        vertices.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
        normals.push(normAttr.getX(i), normAttr.getY(i), normAttr.getZ(i));
      }

      for (let i = 0; i < idx.count; i++) {
        indices.push(idx.getX(i) + vertexOffset);
      }

      vertexOffset += posAttr.count;
      geom.dispose();
    }

    const merged = new THREE.BufferGeometry();
    merged.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    merged.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    merged.setIndex(indices);

    return merged;
  }

  /**
   * Process non-cube blocks (minimal optimization)
   */
  processNonCubeBlocks(blocks, blockMap, cullFaces, batchMaterials) {
    const meshes = [];
    const colorGroups = batchMaterials ? new Map() : null;

    for (const block of blocks) {
      // Clone the block's geometry
      const geometry = block.mesh.geometry.clone();

      // Apply block's transform to geometry
      const matrix = new THREE.Matrix4();
      matrix.compose(
        block.mesh.position,
        block.mesh.quaternion,
        block.mesh.scale
      );
      geometry.applyMatrix4(matrix);

      const color = block.color.toLowerCase();

      // Estimate faces (triangles / 2 for quads)
      const indexCount = geometry.index ? geometry.index.count : geometry.attributes.position.count;
      this.stats.originalFaces += Math.floor(indexCount / 6);
      this.stats.optimizedFaces += Math.floor(indexCount / 6);

      if (batchMaterials) {
        if (!colorGroups.has(color)) {
          colorGroups.set(color, []);
        }
        colorGroups.get(color).push(geometry);
      } else {
        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.1
          })
        );
        meshes.push(mesh);
      }
    }

    // Merge by color
    if (batchMaterials && colorGroups) {
      for (const [color, geometries] of colorGroups) {
        const merged = this.mergeNonIndexedGeometries(geometries);
        const mesh = new THREE.Mesh(
          merged,
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.1
          })
        );
        mesh.name = `other_blocks_${color}`;
        meshes.push(mesh);
      }
    }

    return meshes;
  }

  /**
   * Merge geometries that may or may not be indexed
   */
  mergeNonIndexedGeometries(geometries) {
    const allPositions = [];
    const allNormals = [];
    const allUVs = [];
    let hasUVs = false;

    for (const geom of geometries) {
      const posAttr = geom.getAttribute('position');
      const normAttr = geom.getAttribute('normal');
      const uvAttr = geom.getAttribute('uv');

      if (uvAttr) hasUVs = true;

      if (geom.index) {
        // Indexed geometry - expand to non-indexed
        const idx = geom.index;
        for (let i = 0; i < idx.count; i++) {
          const vi = idx.getX(i);
          allPositions.push(posAttr.getX(vi), posAttr.getY(vi), posAttr.getZ(vi));
          if (normAttr) {
            allNormals.push(normAttr.getX(vi), normAttr.getY(vi), normAttr.getZ(vi));
          }
          if (uvAttr) {
            allUVs.push(uvAttr.getX(vi), uvAttr.getY(vi));
          }
        }
      } else {
        // Non-indexed geometry
        for (let i = 0; i < posAttr.count; i++) {
          allPositions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
          if (normAttr) {
            allNormals.push(normAttr.getX(i), normAttr.getY(i), normAttr.getZ(i));
          }
          if (uvAttr) {
            allUVs.push(uvAttr.getX(i), uvAttr.getY(i));
          }
        }
      }

      geom.dispose();
    }

    const merged = new THREE.BufferGeometry();
    merged.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));

    if (allNormals.length > 0) {
      merged.setAttribute('normal', new THREE.Float32BufferAttribute(allNormals, 3));
    } else {
      merged.computeVertexNormals();
    }

    if (hasUVs && allUVs.length > 0) {
      merged.setAttribute('uv', new THREE.Float32BufferAttribute(allUVs, 2));
    }

    return merged;
  }

  /**
   * Create simple meshes without optimization (for comparison)
   */
  createSimpleMeshes(blocks, batchMaterials) {
    const colorGroups = batchMaterials ? new Map() : null;
    const meshes = [];

    for (const block of blocks) {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      geometry.translate(
        block.gridPosition.x + 0.5,
        block.gridPosition.y + 0.5,
        block.gridPosition.z + 0.5
      );

      this.stats.originalFaces += 6;
      this.stats.optimizedFaces += 6;

      const color = block.color.toLowerCase();

      if (batchMaterials) {
        if (!colorGroups.has(color)) {
          colorGroups.set(color, []);
        }
        colorGroups.get(color).push(geometry);
      } else {
        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.1
          })
        );
        meshes.push(mesh);
      }
    }

    if (batchMaterials && colorGroups) {
      for (const [color, geometries] of colorGroups) {
        const merged = this.mergeGeometries(geometries);
        const mesh = new THREE.Mesh(
          merged,
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            roughness: 0.7,
            metalness: 0.1
          })
        );
        mesh.name = `simple_cubes_${color}`;
        meshes.push(mesh);
      }
    }

    return meshes;
  }

  /**
   * Estimate unique material count for material consolidation
   */
  estimateUniqueMaterials(blocks) {
    const materialSet = new Set();

    const getMaterialSignature = (color, emissive) => {
      const emissiveKey = emissive?.enabled
        ? `_e${emissive.color}_${emissive.intensity}`
        : '';
      return `${color.toLowerCase()}${emissiveKey}`;
    };

    for (const block of blocks) {
      // Check if block has per-face materials
      const hasFaceMaterials = Array.isArray(block.mesh.material) && block.mesh.material.length === 6;

      if (hasFaceMaterials) {
        // Count unique materials per face
        for (const mat of block.mesh.material) {
          const color = mat.color.getStyle();
          const sig = getMaterialSignature(color, block.emissive?.enabled ? block.emissive : null);
          materialSet.add(sig);
        }
      } else {
        // Single material for block
        const sig = getMaterialSignature(block.color, block.emissive?.enabled ? block.emissive : null);
        materialSet.add(sig);
      }
    }

    return materialSet.size;
  }

  /**
   * Estimate face count for statistics before optimization
   */
  estimateFaceCount(blocks) {
    let faces = 0;
    for (const block of blocks) {
      if (block.type === 'cube') {
        faces += 6;
      } else {
        // Estimate based on geometry complexity
        const geom = block.mesh.geometry;
        const indexCount = geom.index ? geom.index.count : geom.attributes.position.count;
        faces += Math.floor(indexCount / 6);
      }
    }
    return faces;
  }

  /**
   * Create instanced meshes grouped by block type
   * Each unique block type becomes one InstancedMesh with transforms for all blocks of that type
   * Colors are applied via instance attributes
   */
  createInstancedExport(blocks) {
    // Group blocks by type
    const typeGroups = new Map();

    for (const block of blocks) {
      if (!typeGroups.has(block.type)) {
        typeGroups.set(block.type, []);
      }
      typeGroups.get(block.type).push(block);
    }

    const meshes = [];
    const tempMatrix = new THREE.Matrix4();
    const tempPosition = new THREE.Vector3();
    const tempQuaternion = new THREE.Quaternion();
    const tempScale = new THREE.Vector3(1, 1, 1);
    const tempEuler = new THREE.Euler();

    for (const [blockType, groupBlocks] of typeGroups) {
      if (groupBlocks.length === 0) continue;

      // Get base geometry from first block
      const baseBlock = groupBlocks[0];
      const baseGeometry = baseBlock.mesh.geometry.clone();

      // Create instanced mesh
      const instancedMesh = new THREE.InstancedMesh(
        baseGeometry,
        new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: 0.7,
          metalness: 0.1
        }),
        groupBlocks.length
      );

      // Add per-instance colors
      const instanceColors = new Float32Array(groupBlocks.length * 3);

      // Set up each instance
      groupBlocks.forEach((block, index) => {
        // Calculate transform matrix
        tempPosition.copy(block.mesh.position);
        tempEuler.set(
          THREE.MathUtils.degToRad(block.rotation.x),
          THREE.MathUtils.degToRad(block.rotation.y),
          THREE.MathUtils.degToRad(block.rotation.z)
        );
        tempQuaternion.setFromEuler(tempEuler);
        tempMatrix.compose(tempPosition, tempQuaternion, tempScale);

        instancedMesh.setMatrixAt(index, tempMatrix);

        // Set instance color
        const color = new THREE.Color(block.color);
        instanceColors[index * 3] = color.r;
        instanceColors[index * 3 + 1] = color.g;
        instanceColors[index * 3 + 2] = color.b;
      });

      // Add instance color attribute
      instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(instanceColors, 3);
      instancedMesh.instanceMatrix.needsUpdate = true;
      instancedMesh.name = `instanced_${blockType}`;
      instancedMesh.castShadow = true;
      instancedMesh.receiveShadow = true;

      meshes.push(instancedMesh);
    }

    return {
      meshes,
      stats: {
        totalBlocks: blocks.length,
        uniqueTypes: typeGroups.size,
        drawCalls: meshes.length
      }
    };
  }

  /**
   * Estimate optimized face count
   */
  estimateOptimizedCount(blocks, options = {}) {
    const { cullFaces = true, mergeCubes = true } = options;

    if (!cullFaces && !mergeCubes) {
      return this.estimateFaceCount(blocks);
    }

    const blockMap = this.buildBlockMap(blocks);
    let visibleFaces = 0;

    for (const block of blocks) {
      if (block.type === 'cube') {
        for (const faceName of Object.keys(FACE_DIRS)) {
          if (!cullFaces || !this.shouldCullFace(block, faceName, blockMap)) {
            visibleFaces++;
          }
        }
      } else {
        const geom = block.mesh.geometry;
        const indexCount = geom.index ? geom.index.count : geom.attributes.position.count;
        visibleFaces += Math.floor(indexCount / 6);
      }
    }

    // Greedy meshing typically reduces by 50-80% for large structures
    if (mergeCubes) {
      const cubeCount = blocks.filter(b => b.type === 'cube').length;
      const otherFaces = visibleFaces - (cubeCount > 0 ? blocks.filter(b => b.type === 'cube').reduce((sum, b) => {
        let visible = 0;
        for (const faceName of Object.keys(FACE_DIRS)) {
          if (!cullFaces || !this.shouldCullFace(b, faceName, blockMap)) {
            visible++;
          }
        }
        return sum + visible;
      }, 0) : 0);

      // Rough estimate: greedy meshing reduces visible cube faces by ~60%
      const cubeFaces = visibleFaces - otherFaces;
      visibleFaces = Math.floor(cubeFaces * 0.4) + otherFaces;
    }

    return visibleFaces;
  }

  /**
   * Merge all meshes into a single mesh using vertex colors
   * This creates the most optimized output (1 draw call)
   */
  mergeAllMeshes(meshes) {
    if (meshes.length === 0) return [];
    if (meshes.length === 1) return meshes;

    const geometries = [];

    for (const mesh of meshes) {
      const geom = mesh.geometry.clone();

      // Get the color from the material
      const color = mesh.material.color || new THREE.Color(0x808080);

      // Add vertex colors to this geometry
      const posCount = geom.getAttribute('position').count;
      const colors = new Float32Array(posCount * 3);

      for (let i = 0; i < posCount; i++) {
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometries.push(geom);

      // Dispose old mesh
      mesh.geometry.dispose();
      mesh.material.dispose();
    }

    // Merge all geometries
    const mergedGeometry = mergeGeometries(geometries, false);

    // Dispose temporary geometries
    geometries.forEach(g => g.dispose());

    // Create single mesh with vertex colors
    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.7,
      metalness: 0.1
    });

    const mergedMesh = new THREE.Mesh(mergedGeometry, material);
    mergedMesh.name = 'merged_all';

    return [mergedMesh];
  }

  /**
   * Consolidate materials - creates ONE mesh with multiple material slots
   * Each unique color/material becomes a material slot, making it easy to swap materials in Godot
   * Returns single mesh with material groups + array of materials
   */
  consolidateMaterials(blocks) {
    console.log('Consolidating materials for', blocks.length, 'blocks');

    // Count block types for debugging
    const blockTypeCounts = new Map();
    for (const block of blocks) {
      const count = blockTypeCounts.get(block.type) || 0;
      blockTypeCounts.set(block.type, count + 1);
    }
    console.log('Block types:', Object.fromEntries(blockTypeCounts));

    // Step 1: Build material palette (unique material signatures)
    const materialPalette = new Map(); // signature -> { index, color, roughness, metalness, emissive }
    const materialSignatures = []; // Array of material data for export

    const getMaterialSignature = (color, roughness = 0.7, metalness = 0.1, emissive = null) => {
      // Normalize color to hex format for consistent signatures
      const normalizedColor = new THREE.Color(color).getHexString();
      const emissiveKey = emissive?.enabled
        ? `_e${new THREE.Color(emissive.color).getHexString()}_${emissive.intensity.toFixed(2)}`
        : '';
      return `${normalizedColor}_r${roughness.toFixed(2)}_m${metalness.toFixed(2)}${emissiveKey}`;
    };

    const getOrCreateMaterial = (color, roughness, metalness, emissive) => {
      const sig = getMaterialSignature(color, roughness, metalness, emissive);

      if (!materialPalette.has(sig)) {
        const index = materialSignatures.length;
        const matData = {
          index,
          signature: sig,
          color: new THREE.Color(color),
          roughness,
          metalness,
          emissive: emissive?.enabled ? {
            color: new THREE.Color(emissive.color),
            intensity: emissive.intensity
          } : null
        };
        materialSignatures.push(matData);
        materialPalette.set(sig, matData);
      }

      return materialPalette.get(sig);
    };

    // Step 2: Group geometry by material index
    const geometryGroups = new Map(); // materialIndex -> array of {geometry, matrix}

    for (const block of blocks) {
      const srcMat = Array.isArray(block.mesh.material)
        ? block.mesh.material[0]
        : block.mesh.material;

      const baseRoughness = srcMat.roughness || 0.7;
      const baseMetalness = srcMat.metalness || 0.1;

      // Create world transform matrix for this block
      const matrix = new THREE.Matrix4();
      matrix.compose(
        block.mesh.position,
        block.mesh.quaternion,
        block.mesh.scale
      );

      const groups = block.mesh.geometry.groups;
      const hasMultipleMaterials = Array.isArray(block.mesh.material) && block.mesh.material.length > 1;

      // Check if this geometry has groups defined
      const hasGroups = groups && groups.length > 0;

      // Debug first block of each type
      const logKey = `logged_${block.type}`;
      if (!this[logKey]) {
        this[logKey] = true;
        console.log(`Block type "${block.type}":`, {
          hasGroups,
          groupCount: groups?.length || 0,
          hasMultipleMaterials,
          materialCount: Array.isArray(block.mesh.material) ? block.mesh.material.length : 1,
          indexed: !!block.mesh.geometry.getIndex()
        });
      }

      if (hasGroups) {
        // Geometry has groups - extract per group
        // This handles: cubes, wedges, slabs, pipes, cylinders with groups, etc.

        for (const group of groups) {
          // Get material for this group
          const matIndex = group.materialIndex !== undefined ? group.materialIndex : 0;

          let groupMat, groupColor;

          if (hasMultipleMaterials) {
            groupMat = block.mesh.material[matIndex];
            if (!groupMat) {
              console.warn('No material at index', matIndex, 'for block', block.id);
              continue;
            }
            groupColor = groupMat.color.getStyle();
          } else {
            // Single material - use block color
            groupMat = block.mesh.material;
            groupColor = block.color;
          }

          // Get emissive data
          const groupEmissive = block.emissive?.enabled ? {
            enabled: true,
            color: block.emissive.color,
            intensity: block.emissive.intensity
          } : null;

          const material = getOrCreateMaterial(
            groupColor,
            groupMat.roughness || baseRoughness,
            groupMat.metalness || baseMetalness,
            groupEmissive
          );

          // Extract geometry for this group
          const groupGeometry = this.extractGroupGeometry(block.mesh.geometry, group);

          if (!groupGeometry) {
            console.warn('Failed to extract geometry for block', block.id, 'group', group);
            continue;
          }

          if (!geometryGroups.has(material.index)) {
            geometryGroups.set(material.index, []);
          }

          geometryGroups.get(material.index).push({
            geometry: groupGeometry,
            matrix
          });
        }
      } else {
        // No groups - extract entire geometry
        // This handles: spheres, custom geometries without groups, etc.

        const blockColor = hasMultipleMaterials
          ? block.mesh.material[0].color.getStyle()
          : block.color;

        const material = getOrCreateMaterial(
          blockColor,
          baseRoughness,
          baseMetalness,
          block.emissive?.enabled ? block.emissive : null
        );

        // Extract all geometry as non-indexed
        const extractedGeometry = this.extractAllGeometry(block.mesh.geometry);

        if (!extractedGeometry) {
          console.warn('Failed to extract geometry for block', block.id);
          continue;
        }

        if (!geometryGroups.has(material.index)) {
          geometryGroups.set(material.index, []);
        }

        geometryGroups.get(material.index).push({
          geometry: extractedGeometry,
          matrix
        });
      }
    }

    console.log('Material consolidation - Created', materialSignatures.length, 'unique materials');
    console.log('Material consolidation - Processing', geometryGroups.size, 'material groups');

    // Debug: log geometry group details
    let totalGeomPieces = 0;
    for (const [matIdx, geoms] of geometryGroups) {
      totalGeomPieces += geoms.length;
      console.log(`  Material ${matIdx}: ${geoms.length} geometry pieces`);
    }
    console.log(`Total geometry pieces: ${totalGeomPieces}`);

    // Step 3: Build consolidated geometry with material groups
    const allPositions = [];
    const allNormals = [];
    const allUVs = [];
    const groups = [];

    let indexOffset = 0;

    for (const [materialIndex, geometries] of geometryGroups) {
      const groupStart = indexOffset;

      for (const { geometry, matrix } of geometries) {
        const posAttr = geometry.getAttribute('position');
        const normAttr = geometry.getAttribute('normal');
        const uvAttr = geometry.getAttribute('uv');

        // Create temporary vectors for transformation
        const position = new THREE.Vector3();
        const normal = new THREE.Vector3();

        // Extract vertices
        const vertexCount = posAttr.count;

        for (let i = 0; i < vertexCount; i++) {
          // Position - apply full transform
          position.set(
            posAttr.getX(i),
            posAttr.getY(i),
            posAttr.getZ(i)
          );
          position.applyMatrix4(matrix);
          allPositions.push(position.x, position.y, position.z);

          // Normal - apply rotation only (no translation, uniform scale)
          if (normAttr) {
            normal.set(
              normAttr.getX(i),
              normAttr.getY(i),
              normAttr.getZ(i)
            );
            normal.transformDirection(matrix);
            normal.normalize();
            allNormals.push(normal.x, normal.y, normal.z);
          }

          // UV
          if (uvAttr) {
            allUVs.push(uvAttr.getX(i), uvAttr.getY(i));
          } else {
            allUVs.push(0, 0); // Default UVs
          }
        }

        indexOffset += vertexCount;
        geometry.dispose();
      }

      const groupCount = indexOffset - groupStart;

      if (groupCount > 0) {
        groups.push({
          start: groupStart,
          count: groupCount,
          materialIndex
        });
      }
    }

    // Step 4: Create consolidated geometry
    const consolidatedGeometry = new THREE.BufferGeometry();
    consolidatedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));

    if (allNormals.length > 0) {
      consolidatedGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(allNormals, 3));
    } else {
      // If no normals, compute them
      consolidatedGeometry.computeVertexNormals();
    }

    if (allUVs.length > 0) {
      consolidatedGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(allUVs, 2));
    }

    // Clear any existing groups
    consolidatedGeometry.clearGroups();

    // Add material groups
    for (const group of groups) {
      consolidatedGeometry.addGroup(group.start, group.count, group.materialIndex);
    }

    console.log('Consolidated geometry created:', {
      totalVertices: allPositions.length / 3,
      materialGroups: groups.length,
      uniqueMaterials: materialSignatures.length
    });

    // Step 5: Create materials array
    const materials = materialSignatures.map(matData => {
      const mat = new THREE.MeshStandardMaterial({
        color: matData.color,
        roughness: matData.roughness,
        metalness: matData.metalness
      });

      if (matData.emissive) {
        mat.emissive = matData.emissive.color;
        mat.emissiveIntensity = matData.emissive.intensity;
      }

      // Set material name for easy identification in Godot
      const colorHex = matData.color.getHexString();
      const emissiveSuffix = matData.emissive ? '_Emissive' : '';
      mat.name = `Material_${colorHex}${emissiveSuffix}`;

      return mat;
    });

    // Step 6: Create single mesh
    const mesh = new THREE.Mesh(consolidatedGeometry, materials);
    mesh.name = 'ConsolidatedMesh';
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    const stats = {
      totalBlocks: blocks.length,
      uniqueMaterials: materials.length,
      totalVertices: allPositions.length / 3,
      materialGroups: groups.length
    };

    console.log('Material consolidation stats:', stats);

    return {
      mesh,
      materials,
      stats
    };
  }

  /**
   * Extract entire geometry as non-indexed triangles
   * Converts indexed geometry to non-indexed for merging
   */
  extractAllGeometry(geometry) {
    const posAttr = geometry.getAttribute('position');
    const normAttr = geometry.getAttribute('normal');
    const uvAttr = geometry.getAttribute('uv');
    const index = geometry.getIndex();

    const positions = [];
    const normals = [];
    const uvs = [];

    if (index) {
      // Indexed geometry - expand all indices
      for (let i = 0; i < index.count; i++) {
        const idx = index.getX(i);

        positions.push(
          posAttr.getX(idx),
          posAttr.getY(idx),
          posAttr.getZ(idx)
        );

        if (normAttr) {
          normals.push(
            normAttr.getX(idx),
            normAttr.getY(idx),
            normAttr.getZ(idx)
          );
        }

        if (uvAttr) {
          uvs.push(
            uvAttr.getX(idx),
            uvAttr.getY(idx)
          );
        }
      }
    } else {
      // Non-indexed geometry - copy all vertices
      for (let i = 0; i < posAttr.count; i++) {
        positions.push(
          posAttr.getX(i),
          posAttr.getY(i),
          posAttr.getZ(i)
        );

        if (normAttr) {
          normals.push(
            normAttr.getX(i),
            normAttr.getY(i),
            normAttr.getZ(i)
          );
        }

        if (uvAttr) {
          uvs.push(
            uvAttr.getX(i),
            uvAttr.getY(i)
          );
        }
      }
    }

    if (positions.length === 0) {
      console.error('No positions extracted from geometry');
      return null;
    }

    const extractedGeometry = new THREE.BufferGeometry();
    extractedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    if (normals.length > 0) {
      extractedGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    } else {
      extractedGeometry.computeVertexNormals();
    }

    if (uvs.length > 0) {
      extractedGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    }

    return extractedGeometry;
  }

  /**
   * Extract geometry for a specific material group
   * Works with ANY geometry type - cubes, wedges, pipes, etc.
   */
  extractGroupGeometry(geometry, group) {
    const posAttr = geometry.getAttribute('position');
    const normAttr = geometry.getAttribute('normal');
    const uvAttr = geometry.getAttribute('uv');
    const index = geometry.getIndex();

    if (!group || typeof group.count === 'undefined' || typeof group.start === 'undefined') {
      console.error('Invalid group:', group);
      return null;
    }

    const positions = [];
    const normals = [];
    const uvs = [];

    if (index) {
      // Indexed geometry - extract via indices
      for (let i = 0; i < group.count; i++) {
        const indexValue = index.getX(group.start + i);

        positions.push(
          posAttr.getX(indexValue),
          posAttr.getY(indexValue),
          posAttr.getZ(indexValue)
        );

        if (normAttr) {
          normals.push(
            normAttr.getX(indexValue),
            normAttr.getY(indexValue),
            normAttr.getZ(indexValue)
          );
        }

        if (uvAttr) {
          uvs.push(
            uvAttr.getX(indexValue),
            uvAttr.getY(indexValue)
          );
        }
      }
    } else {
      // Non-indexed geometry - extract directly
      for (let i = 0; i < group.count; i++) {
        const vertexIdx = group.start + i;

        positions.push(
          posAttr.getX(vertexIdx),
          posAttr.getY(vertexIdx),
          posAttr.getZ(vertexIdx)
        );

        if (normAttr) {
          normals.push(
            normAttr.getX(vertexIdx),
            normAttr.getY(vertexIdx),
            normAttr.getZ(vertexIdx)
          );
        }

        if (uvAttr) {
          uvs.push(
            uvAttr.getX(vertexIdx),
            uvAttr.getY(vertexIdx)
          );
        }
      }
    }

    if (positions.length === 0) {
      console.error('No positions extracted for group');
      return null;
    }

    const groupGeometry = new THREE.BufferGeometry();
    groupGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    if (normals.length > 0) {
      groupGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    } else {
      groupGeometry.computeVertexNormals();
    }

    if (uvs.length > 0) {
      groupGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    }

    return groupGeometry;
  }

  /**
   * Deduplicate vertices in a geometry
   * Vertices at the same position with same normal are merged
   */
  deduplicateGeometryVertices(geometry) {
    const posAttr = geometry.getAttribute('position');
    const normAttr = geometry.getAttribute('normal');
    const colorAttr = geometry.getAttribute('color');
    const uvAttr = geometry.getAttribute('uv');
    const indexAttr = geometry.getIndex();

    if (!posAttr) return geometry;

    // Build vertex data array
    const vertices = [];
    const vertexMap = new Map(); // key -> new index
    const newPositions = [];
    const newNormals = [];
    const newColors = [];
    const newUVs = [];
    const newIndices = [];

    const precision = 1000; // For snapping floats to avoid floating point issues

    const getVertexKey = (i) => {
      const x = Math.round(posAttr.getX(i) * precision);
      const y = Math.round(posAttr.getY(i) * precision);
      const z = Math.round(posAttr.getZ(i) * precision);

      let key = `${x},${y},${z}`;

      if (normAttr) {
        const nx = Math.round(normAttr.getX(i) * 100);
        const ny = Math.round(normAttr.getY(i) * 100);
        const nz = Math.round(normAttr.getZ(i) * 100);
        key += `|${nx},${ny},${nz}`;
      }

      if (colorAttr) {
        const r = Math.round(colorAttr.getX(i) * 255);
        const g = Math.round(colorAttr.getY(i) * 255);
        const b = Math.round(colorAttr.getZ(i) * 255);
        key += `|${r},${g},${b}`;
      }

      return key;
    };

    const addVertex = (i) => {
      const key = getVertexKey(i);

      if (vertexMap.has(key)) {
        return vertexMap.get(key);
      }

      const newIndex = newPositions.length / 3;
      vertexMap.set(key, newIndex);

      newPositions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));

      if (normAttr) {
        newNormals.push(normAttr.getX(i), normAttr.getY(i), normAttr.getZ(i));
      }

      if (colorAttr) {
        newColors.push(colorAttr.getX(i), colorAttr.getY(i), colorAttr.getZ(i));
      }

      if (uvAttr) {
        newUVs.push(uvAttr.getX(i), uvAttr.getY(i));
      }

      return newIndex;
    };

    // Process all vertices/indices
    if (indexAttr) {
      // Indexed geometry
      for (let i = 0; i < indexAttr.count; i++) {
        const oldIndex = indexAttr.getX(i);
        const newIndex = addVertex(oldIndex);
        newIndices.push(newIndex);
      }
    } else {
      // Non-indexed geometry
      for (let i = 0; i < posAttr.count; i++) {
        const newIndex = addVertex(i);
        newIndices.push(newIndex);
      }
    }

    // Create new optimized geometry
    const optimized = new THREE.BufferGeometry();
    optimized.setAttribute('position', new THREE.Float32BufferAttribute(newPositions, 3));

    if (newNormals.length > 0) {
      optimized.setAttribute('normal', new THREE.Float32BufferAttribute(newNormals, 3));
    }

    if (newColors.length > 0) {
      optimized.setAttribute('color', new THREE.Float32BufferAttribute(newColors, 3));
    }

    if (newUVs.length > 0) {
      optimized.setAttribute('uv', new THREE.Float32BufferAttribute(newUVs, 2));
    }

    optimized.setIndex(newIndices);

    // Track stats
    const originalVertCount = posAttr.count;
    const newVertCount = newPositions.length / 3;
    this.stats.verticesRemoved = (this.stats.verticesRemoved || 0) + (originalVertCount - newVertCount);

    return optimized;
  }
}
