/**
 * SpatialIndex - Octree-based spatial indexing for efficient block queries
 */

class OctreeNode {
  constructor(bounds, depth = 0, maxDepth = 8, maxItems = 8) {
    this.bounds = bounds; // { min: {x,y,z}, max: {x,y,z} }
    this.depth = depth;
    this.maxDepth = maxDepth;
    this.maxItems = maxItems;
    this.items = []; // Array of { id, bounds }
    this.children = null; // Array of 8 children when subdivided
  }

  /**
   * Check if a point is inside bounds
   */
  containsPoint(point) {
    return (
      point.x >= this.bounds.min.x && point.x < this.bounds.max.x &&
      point.y >= this.bounds.min.y && point.y < this.bounds.max.y &&
      point.z >= this.bounds.min.z && point.z < this.bounds.max.z
    );
  }

  /**
   * Check if bounds intersect
   */
  intersectsBounds(bounds) {
    return !(
      bounds.max.x <= this.bounds.min.x || bounds.min.x >= this.bounds.max.x ||
      bounds.max.y <= this.bounds.min.y || bounds.min.y >= this.bounds.max.y ||
      bounds.max.z <= this.bounds.min.z || bounds.min.z >= this.bounds.max.z
    );
  }

  /**
   * Subdivide this node into 8 children
   */
  subdivide() {
    const mid = {
      x: (this.bounds.min.x + this.bounds.max.x) / 2,
      y: (this.bounds.min.y + this.bounds.max.y) / 2,
      z: (this.bounds.min.z + this.bounds.max.z) / 2
    };

    this.children = [];

    // Create 8 child nodes
    for (let i = 0; i < 8; i++) {
      const xMin = (i & 1) ? mid.x : this.bounds.min.x;
      const xMax = (i & 1) ? this.bounds.max.x : mid.x;
      const yMin = (i & 2) ? mid.y : this.bounds.min.y;
      const yMax = (i & 2) ? this.bounds.max.y : mid.y;
      const zMin = (i & 4) ? mid.z : this.bounds.min.z;
      const zMax = (i & 4) ? this.bounds.max.z : mid.z;

      this.children.push(new OctreeNode(
        { min: { x: xMin, y: yMin, z: zMin }, max: { x: xMax, y: yMax, z: zMax } },
        this.depth + 1,
        this.maxDepth,
        this.maxItems
      ));
    }

    // Re-insert existing items into children
    for (const item of this.items) {
      this.insertIntoChildren(item);
    }
    this.items = [];
  }

  /**
   * Insert item into appropriate child nodes
   */
  insertIntoChildren(item) {
    for (const child of this.children) {
      if (child.intersectsBounds(item.bounds)) {
        child.insert(item);
      }
    }
  }

  /**
   * Insert an item into the octree
   */
  insert(item) {
    // If we have children, insert into them
    if (this.children) {
      this.insertIntoChildren(item);
      return;
    }

    // Add to this node
    this.items.push(item);

    // Subdivide if we have too many items and haven't reached max depth
    if (this.items.length > this.maxItems && this.depth < this.maxDepth) {
      this.subdivide();
    }
  }

  /**
   * Remove an item by id
   */
  remove(id) {
    if (this.children) {
      for (const child of this.children) {
        child.remove(id);
      }
    } else {
      this.items = this.items.filter(item => item.id !== id);
    }
  }

  /**
   * Query items that intersect with bounds
   */
  query(bounds, results = []) {
    if (!this.intersectsBounds(bounds)) {
      return results;
    }

    if (this.children) {
      for (const child of this.children) {
        child.query(bounds, results);
      }
    } else {
      for (const item of this.items) {
        if (this.boundsIntersect(item.bounds, bounds)) {
          results.push(item);
        }
      }
    }

    return results;
  }

  /**
   * Query items at a specific point
   */
  queryPoint(point, results = []) {
    if (!this.containsPoint(point)) {
      return results;
    }

    if (this.children) {
      for (const child of this.children) {
        child.queryPoint(point, results);
      }
    } else {
      for (const item of this.items) {
        if (this.pointInBounds(point, item.bounds)) {
          results.push(item);
        }
      }
    }

    return results;
  }

  /**
   * Check if two bounds intersect
   */
  boundsIntersect(a, b) {
    return !(
      a.max.x <= b.min.x || a.min.x >= b.max.x ||
      a.max.y <= b.min.y || a.min.y >= b.max.y ||
      a.max.z <= b.min.z || a.min.z >= b.max.z
    );
  }

  /**
   * Check if point is inside bounds
   */
  pointInBounds(point, bounds) {
    return (
      point.x >= bounds.min.x && point.x < bounds.max.x &&
      point.y >= bounds.min.y && point.y < bounds.max.y &&
      point.z >= bounds.min.z && point.z < bounds.max.z
    );
  }

  /**
   * Get all items in the tree
   */
  getAllItems(results = []) {
    if (this.children) {
      for (const child of this.children) {
        child.getAllItems(results);
      }
    } else {
      results.push(...this.items);
    }
    return results;
  }

  /**
   * Clear the tree
   */
  clear() {
    this.items = [];
    this.children = null;
  }
}

export class SpatialIndex {
  constructor(worldSize = 100) {
    this.worldSize = worldSize;
    this.halfSize = worldSize / 2;

    // Create root octree node
    this.root = new OctreeNode({
      min: { x: -this.halfSize, y: -this.halfSize, z: -this.halfSize },
      max: { x: this.halfSize, y: this.halfSize, z: this.halfSize }
    });

    // Quick lookup by id
    this.itemsById = new Map();
  }

  /**
   * Add a block to the spatial index
   */
  addBlock(block) {
    const bounds = this.getBlockBounds(block);
    const item = { id: block.id, bounds, block };

    this.root.insert(item);
    this.itemsById.set(block.id, item);
  }

  /**
   * Remove a block from the spatial index
   */
  removeBlock(blockId) {
    this.root.remove(blockId);
    this.itemsById.delete(blockId);
  }

  /**
   * Update a block's position in the index
   */
  updateBlock(block) {
    this.removeBlock(block.id);
    this.addBlock(block);
  }

  /**
   * Get bounds for a block
   */
  getBlockBounds(block) {
    const pos = block.gridPosition;
    const dims = block.dimensions || { w: 1, h: 1, d: 1 };

    return {
      min: { x: pos.x, y: pos.y, z: pos.z },
      max: { x: pos.x + dims.w, y: pos.y + dims.h, z: pos.z + dims.d }
    };
  }

  /**
   * Find blocks that might overlap with bounds
   */
  queryBounds(bounds) {
    const results = this.root.query(bounds);
    // Deduplicate results
    const seen = new Set();
    return results.filter(item => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }

  /**
   * Find blocks at a specific grid position
   */
  queryPosition(position) {
    const point = {
      x: position.x + 0.5,
      y: position.y + 0.5,
      z: position.z + 0.5
    };
    const results = this.root.queryPoint(point);
    const seen = new Set();
    return results.filter(item => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }

  /**
   * Find nearby blocks within a radius
   */
  queryRadius(center, radius) {
    const bounds = {
      min: { x: center.x - radius, y: center.y - radius, z: center.z - radius },
      max: { x: center.x + radius, y: center.y + radius, z: center.z + radius }
    };
    return this.queryBounds(bounds);
  }

  /**
   * Rebuild the index from a block manager
   */
  rebuild(blockManager) {
    this.clear();
    for (const block of blockManager.getAllBlocks()) {
      this.addBlock(block);
    }
  }

  /**
   * Clear the spatial index
   */
  clear() {
    this.root.clear();
    this.itemsById.clear();
  }

  /**
   * Get statistics about the index
   */
  getStats() {
    const allItems = this.root.getAllItems();
    return {
      totalItems: allItems.length,
      uniqueItems: this.itemsById.size
    };
  }
}
