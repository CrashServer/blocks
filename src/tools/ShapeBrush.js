// Shape generation functions for the Shape Brush tool
// Each function returns an array of {x, y, z} positions

export const SHAPE_TYPES = {
  sphere: { label: 'Sphere', icon: '●' },
  cube: { label: 'Cube', icon: '■' },
  hollowCube: { label: 'Hollow Cube', icon: '□' },
  cylinder: { label: 'Cylinder', icon: '◯' },
  circle: { label: 'Circle', icon: '○' },
  disc: { label: 'Disc', icon: '◉' },
  dome: { label: 'Dome', icon: '◠' },
  line3d: { label: 'Line 3D', icon: '╱' },
  wall: { label: 'Wall', icon: '▭' }
};

// Generate a filled sphere of positions
export function generateSphere(centerX, centerY, centerZ, radius) {
  const positions = [];
  const r = Math.round(radius);

  for (let x = -r; x <= r; x++) {
    for (let y = -r; y <= r; y++) {
      for (let z = -r; z <= r; z++) {
        // Check if point is inside sphere (using squared distance)
        if (x*x + y*y + z*z <= r*r) {
          positions.push({
            x: Math.floor(centerX) + x,
            y: Math.floor(centerY) + y,
            z: Math.floor(centerZ) + z
          });
        }
      }
    }
  }

  return positions;
}

// Generate a filled cube of positions
export function generateCube(centerX, centerY, centerZ, size) {
  const positions = [];
  const halfSize = Math.floor(size / 2);

  for (let x = -halfSize; x <= halfSize; x++) {
    for (let y = -halfSize; y <= halfSize; y++) {
      for (let z = -halfSize; z <= halfSize; z++) {
        positions.push({
          x: Math.floor(centerX) + x,
          y: Math.floor(centerY) + y,
          z: Math.floor(centerZ) + z
        });
      }
    }
  }

  return positions;
}

// Generate a hollow cube (just the shell)
export function generateHollowCube(centerX, centerY, centerZ, size) {
  const positions = [];
  const halfSize = Math.floor(size / 2);

  for (let x = -halfSize; x <= halfSize; x++) {
    for (let y = -halfSize; y <= halfSize; y++) {
      for (let z = -halfSize; z <= halfSize; z++) {
        // Only include if on the surface
        if (Math.abs(x) === halfSize || Math.abs(y) === halfSize || Math.abs(z) === halfSize) {
          positions.push({
            x: Math.floor(centerX) + x,
            y: Math.floor(centerY) + y,
            z: Math.floor(centerZ) + z
          });
        }
      }
    }
  }

  return positions;
}

// Generate a vertical cylinder
export function generateCylinder(centerX, centerY, centerZ, radius, height) {
  const positions = [];
  const r = Math.round(radius);
  const h = Math.round(height);

  for (let y = 0; y < h; y++) {
    for (let x = -r; x <= r; x++) {
      for (let z = -r; z <= r; z++) {
        // Check if point is inside circle (XZ plane)
        if (x*x + z*z <= r*r) {
          positions.push({
            x: Math.floor(centerX) + x,
            y: Math.floor(centerY) + y,
            z: Math.floor(centerZ) + z
          });
        }
      }
    }
  }

  return positions;
}

// Generate a circle (ring, 1 block thick) in XZ plane
export function generateCircle(centerX, centerY, centerZ, radius) {
  const positions = [];
  const r = Math.round(radius);

  for (let x = -r; x <= r; x++) {
    for (let z = -r; z <= r; z++) {
      const distSq = x*x + z*z;
      // Include if on the edge of the circle (between r-1 and r)
      if (distSq <= r*r && distSq > (r-1)*(r-1)) {
        positions.push({
          x: Math.floor(centerX) + x,
          y: Math.floor(centerY),
          z: Math.floor(centerZ) + z
        });
      }
    }
  }

  return positions;
}

// Generate a filled disc in XZ plane
export function generateDisc(centerX, centerY, centerZ, radius) {
  const positions = [];
  const r = Math.round(radius);

  for (let x = -r; x <= r; x++) {
    for (let z = -r; z <= r; z++) {
      if (x*x + z*z <= r*r) {
        positions.push({
          x: Math.floor(centerX) + x,
          y: Math.floor(centerY),
          z: Math.floor(centerZ) + z
        });
      }
    }
  }

  return positions;
}

// Generate a dome (half sphere, bottom half)
export function generateDome(centerX, centerY, centerZ, radius) {
  const positions = [];
  const r = Math.round(radius);

  for (let x = -r; x <= r; x++) {
    for (let y = 0; y <= r; y++) {
      for (let z = -r; z <= r; z++) {
        if (x*x + y*y + z*z <= r*r) {
          positions.push({
            x: Math.floor(centerX) + x,
            y: Math.floor(centerY) + y,
            z: Math.floor(centerZ) + z
          });
        }
      }
    }
  }

  return positions;
}

// Generate a 3D line using Bresenham's algorithm
export function generateLine3D(x1, y1, z1, x2, y2, z2) {
  const positions = [];

  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  const dz = Math.abs(z2 - z1);

  const sx = x1 < x2 ? 1 : -1;
  const sy = y1 < y2 ? 1 : -1;
  const sz = z1 < z2 ? 1 : -1;

  const maxDelta = Math.max(dx, dy, dz);

  let x = Math.floor(x1);
  let y = Math.floor(y1);
  let z = Math.floor(z1);

  let errX = maxDelta / 2;
  let errY = maxDelta / 2;
  let errZ = maxDelta / 2;

  for (let i = 0; i <= maxDelta; i++) {
    positions.push({ x, y, z });

    errX -= dx;
    errY -= dy;
    errZ -= dz;

    if (errX < 0) {
      errX += maxDelta;
      x += sx;
    }
    if (errY < 0) {
      errY += maxDelta;
      y += sy;
    }
    if (errZ < 0) {
      errZ += maxDelta;
      z += sz;
    }
  }

  return positions;
}

// Generate a wall (flat plane between two corners)
export function generateWall(x1, y1, z1, x2, y2, z2) {
  const positions = [];

  const minX = Math.min(Math.floor(x1), Math.floor(x2));
  const maxX = Math.max(Math.floor(x1), Math.floor(x2));
  const minY = Math.min(Math.floor(y1), Math.floor(y2));
  const maxY = Math.max(Math.floor(y1), Math.floor(y2));
  const minZ = Math.min(Math.floor(z1), Math.floor(z2));
  const maxZ = Math.max(Math.floor(z1), Math.floor(z2));

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      for (let z = minZ; z <= maxZ; z++) {
        positions.push({ x, y, z });
      }
    }
  }

  return positions;
}

// Main function to generate shape based on type
export function generateShape(shapeType, startPos, endPos) {
  const dx = endPos.x - startPos.x;
  const dy = endPos.y - startPos.y;
  const dz = endPos.z - startPos.z;
  const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
  const radius = Math.max(1, Math.round(distance));

  switch (shapeType) {
    case 'sphere':
      return generateSphere(startPos.x, startPos.y, startPos.z, radius);

    case 'cube':
      return generateCube(startPos.x, startPos.y, startPos.z, radius * 2);

    case 'hollowCube':
      return generateHollowCube(startPos.x, startPos.y, startPos.z, radius * 2);

    case 'cylinder':
      // Horizontal distance = radius, vertical distance = height
      const hDist = Math.sqrt(dx*dx + dz*dz);
      const cylRadius = Math.max(1, Math.round(hDist));
      const cylHeight = Math.max(1, Math.abs(Math.round(dy)) || cylRadius);
      return generateCylinder(startPos.x, startPos.y, startPos.z, cylRadius, cylHeight);

    case 'circle':
      return generateCircle(startPos.x, startPos.y, startPos.z, radius);

    case 'disc':
      return generateDisc(startPos.x, startPos.y, startPos.z, radius);

    case 'dome':
      return generateDome(startPos.x, startPos.y, startPos.z, radius);

    case 'line3d':
      return generateLine3D(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z);

    case 'wall':
      return generateWall(startPos.x, startPos.y, startPos.z, endPos.x, endPos.y, endPos.z);

    default:
      return [];
  }
}
