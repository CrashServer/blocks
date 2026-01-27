/**
 * Validation utilities for blocks and project data
 */

import { BLOCK_CATEGORIES } from '../blocks/config/categories.js';

// Get all valid block types
const VALID_BLOCK_TYPES = new Set();
for (const category of Object.values(BLOCK_CATEGORIES)) {
  for (const type of category.types) {
    VALID_BLOCK_TYPES.add(type);
  }
}

/**
 * Validate a block type string
 */
export function isValidBlockType(type) {
  return typeof type === 'string' && VALID_BLOCK_TYPES.has(type);
}

/**
 * Validate a position object
 */
export function isValidPosition(pos) {
  if (!pos || typeof pos !== 'object') return false;
  return (
    typeof pos.x === 'number' && isFinite(pos.x) &&
    typeof pos.y === 'number' && isFinite(pos.y) &&
    typeof pos.z === 'number' && isFinite(pos.z)
  );
}

/**
 * Validate dimensions object
 */
export function isValidDimensions(dims) {
  if (!dims || typeof dims !== 'object') return false;
  return (
    typeof dims.w === 'number' && dims.w > 0 && isFinite(dims.w) &&
    typeof dims.h === 'number' && dims.h > 0 && isFinite(dims.h) &&
    typeof dims.d === 'number' && dims.d > 0 && isFinite(dims.d)
  );
}

/**
 * Validate rotation object
 */
export function isValidRotation(rot) {
  if (!rot || typeof rot !== 'object') return false;
  return (
    typeof rot.x === 'number' && isFinite(rot.x) &&
    typeof rot.y === 'number' && isFinite(rot.y) &&
    typeof rot.z === 'number' && isFinite(rot.z)
  );
}

/**
 * Validate a hex color string
 */
export function isValidColor(color) {
  if (typeof color !== 'string') return false;
  return /^#[0-9A-Fa-f]{6}$/.test(color);
}

/**
 * Validate emissive settings
 */
export function isValidEmissive(emissive) {
  if (!emissive || typeof emissive !== 'object') return false;
  if (typeof emissive.enabled !== 'boolean') return false;
  if (emissive.enabled) {
    if (!isValidColor(emissive.color)) return false;
    if (typeof emissive.intensity !== 'number' || emissive.intensity < 0) return false;
    if (typeof emissive.radius !== 'number' || emissive.radius < 0) return false;
  }
  return true;
}

/**
 * Validate a single block data object
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateBlockData(blockData) {
  const errors = [];

  if (!blockData || typeof blockData !== 'object') {
    return { valid: false, errors: ['Block data must be an object'] };
  }

  // Type validation
  if (!blockData.type) {
    errors.push('Block type is required');
  } else if (!isValidBlockType(blockData.type)) {
    errors.push(`Invalid block type: ${blockData.type}`);
  }

  // Position validation
  if (!blockData.position) {
    errors.push('Block position is required');
  } else if (!isValidPosition(blockData.position)) {
    errors.push('Invalid block position');
  }

  // Optional: dimensions validation
  if (blockData.dimensions && !isValidDimensions(blockData.dimensions)) {
    errors.push('Invalid block dimensions');
  }

  // Optional: rotation validation
  if (blockData.rotation && !isValidRotation(blockData.rotation)) {
    errors.push('Invalid block rotation');
  }

  // Optional: color validation
  if (blockData.color && !isValidColor(blockData.color)) {
    errors.push('Invalid block color');
  }

  // Optional: emissive validation
  if (blockData.emissive && !isValidEmissive(blockData.emissive)) {
    errors.push('Invalid emissive settings');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate project data structure
 * @returns {{ valid: boolean, errors: string[], warnings: string[] }}
 */
export function validateProjectData(project) {
  const errors = [];
  const warnings = [];

  if (!project || typeof project !== 'object') {
    return { valid: false, errors: ['Project data must be an object'], warnings: [] };
  }

  // Check version
  if (project.version && project.version !== '1.0') {
    warnings.push(`Project version ${project.version} may not be fully compatible`);
  }

  // Validate blocks array
  if (project.blocks) {
    if (!Array.isArray(project.blocks)) {
      errors.push('Project blocks must be an array');
    } else {
      project.blocks.forEach((block, index) => {
        const result = validateBlockData(block);
        if (!result.valid) {
          errors.push(`Block ${index}: ${result.errors.join(', ')}`);
        }
      });
    }
  }

  // Validate animations
  if (project.animations) {
    if (!Array.isArray(project.animations)) {
      errors.push('Project animations must be an array');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Sanitize block data by applying defaults for missing optional fields
 */
export function sanitizeBlockData(blockData) {
  const sanitized = { ...blockData };

  // Apply defaults
  sanitized.dimensions = sanitized.dimensions || { w: 1, h: 1, d: 1 };
  sanitized.rotation = sanitized.rotation || { x: 0, y: 0, z: 0 };
  sanitized.color = sanitized.color || '#5588cc';
  sanitized.emissive = sanitized.emissive || {
    enabled: false,
    color: '#ffaa00',
    intensity: 1.0,
    radius: 3.0
  };

  // Clamp position to reasonable bounds
  if (sanitized.position) {
    const MAX_COORD = 1000;
    sanitized.position.x = Math.max(-MAX_COORD, Math.min(MAX_COORD, sanitized.position.x));
    sanitized.position.y = Math.max(-MAX_COORD, Math.min(MAX_COORD, sanitized.position.y));
    sanitized.position.z = Math.max(-MAX_COORD, Math.min(MAX_COORD, sanitized.position.z));
  }

  return sanitized;
}

/**
 * Validate and sanitize blocks array, filtering out invalid blocks
 * @returns {{ blocks: Array, invalidCount: number }}
 */
export function validateAndSanitizeBlocks(blocks) {
  if (!Array.isArray(blocks)) {
    return { blocks: [], invalidCount: 0 };
  }

  const validBlocks = [];
  let invalidCount = 0;

  for (const block of blocks) {
    const result = validateBlockData(block);
    if (result.valid) {
      validBlocks.push(sanitizeBlockData(block));
    } else {
      invalidCount++;
      console.warn('Skipping invalid block:', result.errors.join(', '));
    }
  }

  return { blocks: validBlocks, invalidCount };
}
