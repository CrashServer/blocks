import * as THREE from 'three';

export class Grid {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.cellSize = options.cellSize || 1;
    this.gridSize = options.gridSize || 20;

    // Snap increment: 1.0 (default), 0.5, 0.25, or 0 (free placement)
    this.snapIncrement = 1.0;

    this.gridGroup = new THREE.Group();
    this.gridGroup.name = 'grid';
    this.scene.add(this.gridGroup);

    this.createGridPlane();
    this.createMultiLevelGrid();
  }

  createGridPlane() {
    // Invisible plane for raycasting
    const geometry = new THREE.PlaneGeometry(
      this.gridSize * this.cellSize * 2,
      this.gridSize * this.cellSize * 2
    );
    const material = new THREE.MeshBasicMaterial({
      visible: false,
      side: THREE.DoubleSide
    });

    this.plane = new THREE.Mesh(geometry, material);
    this.plane.rotation.x = -Math.PI / 2;
    this.plane.position.y = 0;
    this.plane.name = 'gridPlane';
    this.scene.add(this.plane);
  }

  createMultiLevelGrid() {
    const size = this.gridSize * this.cellSize;
    const halfSize = size;

    // Create three grid levels with different intervals
    // Level 1: Every 1 unit - fine grid
    this.fineGrid = this.createGridLevel(halfSize, 1, 0x3a3a4a, 0.6);
    this.fineGrid.position.y = 0.001;
    this.gridGroup.add(this.fineGrid);

    // Level 2: Every 5 units - medium grid (brighter)
    this.mediumGrid = this.createGridLevel(halfSize, 5, 0x4a4a6a, 0.6);
    this.mediumGrid.position.y = 0.002;
    this.gridGroup.add(this.mediumGrid);

    // Level 3: Every 10 units - major grid (brightest)
    this.majorGrid = this.createGridLevel(halfSize, 10, 0x6a6a9a, 0.8);
    this.majorGrid.position.y = 0.003;
    this.gridGroup.add(this.majorGrid);

    // Origin axes (X = red, Z = blue)
    this.createOriginAxes(halfSize);
  }

  createGridLevel(halfSize, interval, color, opacity) {
    const points = [];

    // Create lines at the specified interval
    for (let i = -halfSize; i <= halfSize; i += interval) {
      // Skip if this line will be drawn by a higher-level grid
      // (e.g., skip multiples of 5 for fine grid, skip multiples of 10 for medium grid)
      const skipForMedium = interval < 5 && i % 5 === 0;
      const skipForMajor = interval < 10 && i % 10 === 0;

      if (skipForMedium || skipForMajor) continue;

      // Line along X axis
      points.push(new THREE.Vector3(-halfSize, 0, i));
      points.push(new THREE.Vector3(halfSize, 0, i));

      // Line along Z axis
      points.push(new THREE.Vector3(i, 0, -halfSize));
      points.push(new THREE.Vector3(i, 0, halfSize));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: opacity
    });

    return new THREE.LineSegments(geometry, material);
  }

  createOriginAxes(halfSize) {
    // X axis (red)
    const xPoints = [
      new THREE.Vector3(-halfSize, 0, 0),
      new THREE.Vector3(halfSize, 0, 0)
    ];
    const xGeometry = new THREE.BufferGeometry().setFromPoints(xPoints);
    const xMaterial = new THREE.LineBasicMaterial({ color: 0x884444, transparent: true, opacity: 0.7 });
    this.xAxis = new THREE.LineSegments(xGeometry, xMaterial);
    this.xAxis.position.y = 0.004;
    this.gridGroup.add(this.xAxis);

    // Z axis (blue)
    const zPoints = [
      new THREE.Vector3(0, 0, -halfSize),
      new THREE.Vector3(0, 0, halfSize)
    ];
    const zGeometry = new THREE.BufferGeometry().setFromPoints(zPoints);
    const zMaterial = new THREE.LineBasicMaterial({ color: 0x444488, transparent: true, opacity: 0.7 });
    this.zAxis = new THREE.LineSegments(zGeometry, zMaterial);
    this.zAxis.position.y = 0.004;
    this.gridGroup.add(this.zAxis);
  }

  // Snap a world position to grid coordinates
  snapToGrid(position) {
    // Free placement: no snapping
    if (this.snapIncrement === 0) {
      return position.clone();
    }

    // Snap to the specified increment
    const snap = this.snapIncrement;
    return new THREE.Vector3(
      Math.round(position.x / snap) * snap,
      Math.round(position.y / snap) * snap,
      Math.round(position.z / snap) * snap
    );
  }

  // Get grid coordinates from world position
  worldToGrid(position) {
    // Use snap increment instead of cellSize for grid calculations
    const snap = this.snapIncrement === 0 ? 0.01 : this.snapIncrement;
    return {
      x: Math.round(position.x / snap) * snap,
      y: Math.round(position.y / snap) * snap,
      z: Math.round(position.z / snap) * snap
    };
  }

  // Get world position from grid coordinates
  gridToWorld(gridPos) {
    return new THREE.Vector3(
      gridPos.x * this.cellSize,
      gridPos.y * this.cellSize,
      gridPos.z * this.cellSize
    );
  }

  // Get the raycast plane
  getRaycastPlane() {
    return this.plane;
  }

  dispose() {
    this.scene.remove(this.plane);
    this.scene.remove(this.gridGroup);
    this.plane.geometry.dispose();
    this.plane.material.dispose();

    // Dispose grid levels
    [this.fineGrid, this.mediumGrid, this.majorGrid, this.xAxis, this.zAxis].forEach(grid => {
      if (grid) {
        grid.geometry.dispose();
        grid.material.dispose();
      }
    });
  }
}
