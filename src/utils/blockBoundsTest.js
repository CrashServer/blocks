/**
 * Block Bounds Diagnostic Tool
 * Identifies blocks with mismatched geometry vs bounds that cause gaps
 *
 * Run this in the browser console to see which blocks need bounds fixes
 */

import { GEOMETRY_CREATORS, BLOCK_HEIGHT_MULTIPLIERS, BLOCK_Y_OFFSETS, getBlockBounds } from '../blocks/BlockTypes.js';

/**
 * Analyze geometry to estimate its actual bounds
 * Returns the geometry's bounding box dimensions
 */
function getGeometryDimensions(type, d = { w: 1, h: 1, d: 1 }) {
  const creator = GEOMETRY_CREATORS[type];
  if (!creator) return null;

  try {
    const geo = creator(d);
    geo.computeBoundingBox();
    const box = geo.boundingBox;
    geo.dispose();

    return {
      sizeX: box.max.x - box.min.x,
      sizeY: box.max.y - box.min.y,
      sizeZ: box.max.z - box.min.z,
      minX: box.min.x,
      maxX: box.max.x,
      minY: box.min.y,
      maxY: box.max.y,
      minZ: box.min.z,
      maxZ: box.max.z
    };
  } catch (e) {
    console.error(`Error analyzing ${type}:`, e);
    return null;
  }
}

/**
 * Get the bounds for a block type
 */
function getBoundsInfo(type, d = { w: 1, h: 1, d: 1 }) {
  const bounds = getBlockBounds(type, d);
  return {
    sizeX: bounds.max.x - bounds.min.x,
    sizeY: bounds.max.y - bounds.min.y,
    sizeZ: bounds.max.z - bounds.min.z,
    minX: bounds.min.x,
    maxX: bounds.max.x,
    minY: bounds.min.y,
    maxY: bounds.max.y,
    minZ: bounds.min.z,
    maxZ: bounds.max.z
  };
}

/**
 * Compare geometry to bounds and identify issues
 */
function analyzeBlock(type) {
  const geo = getGeometryDimensions(type);
  const bounds = getBoundsInfo(type);

  if (!geo) return { type, error: 'Could not create geometry' };

  // Calculate how much of the bounds the geometry fills
  const fillX = geo.sizeX / bounds.sizeX;
  const fillY = geo.sizeY / bounds.sizeY;
  const fillZ = geo.sizeZ / bounds.sizeZ;

  // Identify issues
  const issues = [];

  // If geometry is significantly smaller than bounds, there will be gaps
  // (threshold: geometry fills less than 90% of bounds dimension)
  if (fillX < 0.9) {
    issues.push(`X: geometry ${geo.sizeX.toFixed(3)} vs bounds ${bounds.sizeX.toFixed(3)} (${(fillX * 100).toFixed(0)}%)`);
  }
  if (fillY < 0.9) {
    issues.push(`Y: geometry ${geo.sizeY.toFixed(3)} vs bounds ${bounds.sizeY.toFixed(3)} (${(fillY * 100).toFixed(0)}%)`);
  }
  if (fillZ < 0.9) {
    issues.push(`Z: geometry ${geo.sizeZ.toFixed(3)} vs bounds ${bounds.sizeZ.toFixed(3)} (${(fillZ * 100).toFixed(0)}%)`);
  }

  // Check if bounds are using default full-block when geometry is small
  const isDefaultBounds = bounds.sizeX === 1 && bounds.sizeY === 1 && bounds.sizeZ === 1;
  const geoIsSmall = geo.sizeX < 0.8 || geo.sizeY < 0.8 || geo.sizeZ < 0.8;

  if (isDefaultBounds && geoIsSmall) {
    issues.push('USES DEFAULT FULL BOUNDS with small geometry - needs custom bounds');
  }

  // Check for center offset issues (geometry not centered where bounds expect)
  const geoCenterX = (geo.minX + geo.maxX) / 2;
  const geoCenterZ = (geo.minZ + geo.maxZ) / 2;
  const boundsCenterX = (bounds.minX + bounds.maxX) / 2;
  const boundsCenterZ = (bounds.minZ + bounds.maxZ) / 2;

  if (Math.abs(geoCenterX - boundsCenterX) > 0.05) {
    issues.push(`X center mismatch: geo ${geoCenterX.toFixed(3)} vs bounds ${boundsCenterX.toFixed(3)}`);
  }
  if (Math.abs(geoCenterZ - boundsCenterZ) > 0.05) {
    issues.push(`Z center mismatch: geo ${geoCenterZ.toFixed(3)} vs bounds ${boundsCenterZ.toFixed(3)}`);
  }

  return {
    type,
    geometry: geo,
    bounds,
    fill: { x: fillX, y: fillY, z: fillZ },
    issues,
    hasIssues: issues.length > 0,
    needsBoundsFix: isDefaultBounds && geoIsSmall
  };
}

/**
 * Run full diagnostic and return results
 */
export function runBlockBoundsDiagnostic() {
  const allTypes = Object.keys(GEOMETRY_CREATORS);
  const results = allTypes.map(type => analyzeBlock(type));

  // Sort by severity (blocks needing fixes first)
  results.sort((a, b) => {
    if (a.needsBoundsFix && !b.needsBoundsFix) return -1;
    if (!a.needsBoundsFix && b.needsBoundsFix) return 1;
    return b.issues.length - a.issues.length;
  });

  return results;
}

/**
 * Print formatted diagnostic report to console
 */
export function printDiagnosticReport() {
  const results = runBlockBoundsDiagnostic();

  console.log('=== BLOCK BOUNDS DIAGNOSTIC REPORT ===\n');

  // Count issues
  const needsFix = results.filter(r => r.needsBoundsFix);
  const hasIssues = results.filter(r => r.hasIssues && !r.needsBoundsFix);
  const noIssues = results.filter(r => !r.hasIssues);

  console.log(`Total blocks: ${results.length}`);
  console.log(`Needs custom bounds: ${needsFix.length}`);
  console.log(`Minor issues: ${hasIssues.length}`);
  console.log(`OK: ${noIssues.length}\n`);

  if (needsFix.length > 0) {
    console.log('=== BLOCKS NEEDING CUSTOM BOUNDS ===');
    console.log('These blocks use default full bounds but have small geometry:\n');

    for (const r of needsFix) {
      console.log(`${r.type}:`);
      console.log(`  Geometry size: ${r.geometry.sizeX.toFixed(3)} x ${r.geometry.sizeY.toFixed(3)} x ${r.geometry.sizeZ.toFixed(3)}`);
      console.log(`  Bounds size: ${r.bounds.sizeX.toFixed(3)} x ${r.bounds.sizeY.toFixed(3)} x ${r.bounds.sizeZ.toFixed(3)}`);
      for (const issue of r.issues) {
        console.log(`  - ${issue}`);
      }
      console.log('');
    }
  }

  if (hasIssues.length > 0) {
    console.log('\n=== BLOCKS WITH MINOR ISSUES ===\n');
    for (const r of hasIssues) {
      console.log(`${r.type}:`);
      for (const issue of r.issues) {
        console.log(`  - ${issue}`);
      }
    }
  }

  return results;
}

/**
 * Get blocks that need bounds fixes, formatted for easy copying
 */
export function getBlocksNeedingFixes() {
  const results = runBlockBoundsDiagnostic();
  const needsFix = results.filter(r => r.needsBoundsFix);

  console.log('// Blocks needing custom bounds in getBlockBounds():');
  console.log('// Copy these case statements:\n');

  for (const r of needsFix) {
    const g = r.geometry;
    // Calculate what the bounds should be based on geometry
    const minX = g.minX + 0.5; // Convert from geometry space (-0.5 to 0.5) to bounds space (0 to 1)
    const maxX = g.maxX + 0.5;
    const minZ = g.minZ + 0.5;
    const maxZ = g.maxZ + 0.5;

    console.log(`case '${r.type}':`);
    if (minX > 0.01 || maxX < 0.99) {
      console.log(`  bounds.min.x = w * ${minX.toFixed(4)}; bounds.max.x = w * ${maxX.toFixed(4)};`);
    }
    if (minZ > 0.01 || maxZ < 0.99) {
      console.log(`  bounds.min.z = d * ${minZ.toFixed(4)}; bounds.max.z = d * ${maxZ.toFixed(4)};`);
    }
    console.log('  break;');
  }

  return needsFix;
}

// Export for use in main app
export { analyzeBlock, getGeometryDimensions, getBoundsInfo };
