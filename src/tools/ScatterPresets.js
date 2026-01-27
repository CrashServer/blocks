// Block set definitions with directional pieces and connection rules
// for the generative scatter tool

export const SCATTER_PRESETS = {
  pipes: {
    label: 'Pipes',
    straight: {
      X: 'pipeX',
      Y: 'pipeY',
      Z: 'pipeZ'
    },
    elbows: {
      // XZ plane (horizontal turns) - from_to format
      'X+_Z+': { type: 'pipeElbowXZ3', rotation: 0 },
      'X+_Z-': { type: 'pipeElbowXZ2', rotation: 0 },
      'X-_Z+': { type: 'pipeElbowXZ4', rotation: 0 },
      'X-_Z-': { type: 'pipeElbowXZ', rotation: 0 },
      // Reverse (same elbows work both ways)
      'Z+_X+': { type: 'pipeElbowXZ3', rotation: 0 },
      'Z+_X-': { type: 'pipeElbowXZ4', rotation: 0 },
      'Z-_X+': { type: 'pipeElbowXZ2', rotation: 0 },
      'Z-_X-': { type: 'pipeElbowXZ', rotation: 0 },
      // XY plane (vertical from X)
      'X+_Y+': { type: 'pipeElbowXY', rotation: 0 },
      'X+_Y-': { type: 'pipeElbowXY', rotation: 180 },
      'X-_Y+': { type: 'pipeElbowXY2', rotation: 0 },
      'X-_Y-': { type: 'pipeElbowXY2', rotation: 180 },
      'Y+_X+': { type: 'pipeElbowXY', rotation: 0 },
      'Y+_X-': { type: 'pipeElbowXY2', rotation: 0 },
      'Y-_X+': { type: 'pipeElbowXY', rotation: 180 },
      'Y-_X-': { type: 'pipeElbowXY2', rotation: 180 },
      // YZ plane (vertical from Z)
      'Z+_Y+': { type: 'pipeElbowYZ', rotation: 0 },
      'Z+_Y-': { type: 'pipeElbowYZ', rotation: 180 },
      'Z-_Y+': { type: 'pipeElbowYZ2', rotation: 0 },
      'Z-_Y-': { type: 'pipeElbowYZ2', rotation: 180 },
      'Y+_Z+': { type: 'pipeElbowYZ', rotation: 0 },
      'Y+_Z-': { type: 'pipeElbowYZ2', rotation: 0 },
      'Y-_Z+': { type: 'pipeElbowYZ', rotation: 180 },
      'Y-_Z-': { type: 'pipeElbowYZ2', rotation: 180 }
    },
    junctions: {
      cross: 'pipeCross',
      tXZ: 'pipeT',
      tXY: 'pipeTY',
      tYZ: 'pipeTZ'
    },
    decorative: ['downspout'],
    allowedScales: [1, 2, 4],
    clusterBased: false
  },

  cables: {
    label: 'Cables',
    straight: {
      X: 'cableX',
      Y: 'cableY',
      Z: 'cableZ'
    },
    elbows: {
      // Cables have simpler elbow types
      'X+_Z+': { type: 'cableElbow', rotation: 180 },
      'X+_Z-': { type: 'cableElbow', rotation: 90 },
      'X-_Z+': { type: 'cableElbow', rotation: 270 },
      'X-_Z-': { type: 'cableElbow', rotation: 0 },
      'Z+_X+': { type: 'cableElbow', rotation: 180 },
      'Z+_X-': { type: 'cableElbow', rotation: 270 },
      'Z-_X+': { type: 'cableElbow', rotation: 90 },
      'Z-_X-': { type: 'cableElbow', rotation: 0 },
      // Vertical
      'X+_Y+': { type: 'cableElbowY', rotation: 0 },
      'X-_Y+': { type: 'cableElbowY', rotation: 180 },
      'Z+_Y+': { type: 'cableElbowY', rotation: 90 },
      'Z-_Y+': { type: 'cableElbowY', rotation: 270 },
      'Y+_X+': { type: 'cableElbowY', rotation: 0 },
      'Y+_X-': { type: 'cableElbowY', rotation: 180 },
      'Y+_Z+': { type: 'cableElbowY', rotation: 90 },
      'Y+_Z-': { type: 'cableElbowY', rotation: 270 }
    },
    junctions: {
      tXZ: 'cableT'
    },
    decorative: ['cableHanging', 'cableDroop', 'cableLoop'],
    allowedScales: [1, 2, 4],
    clusterBased: false
  },

  conduits: {
    label: 'Conduits',
    straight: {
      X: 'conduitX',
      Y: 'conduitY',
      Z: 'conduitZ'
    },
    elbows: {
      'X+_Z+': { type: 'conduitElbow', rotation: 180 },
      'X+_Z-': { type: 'conduitElbow', rotation: 90 },
      'X-_Z+': { type: 'conduitElbow', rotation: 270 },
      'X-_Z-': { type: 'conduitElbow', rotation: 0 },
      'Z+_X+': { type: 'conduitElbow', rotation: 180 },
      'Z+_X-': { type: 'conduitElbow', rotation: 270 },
      'Z-_X+': { type: 'conduitElbow', rotation: 90 },
      'Z-_X-': { type: 'conduitElbow', rotation: 0 },
      'X+_Y+': { type: 'conduitElbowY', rotation: 0 },
      'X-_Y+': { type: 'conduitElbowY', rotation: 180 },
      'Z+_Y+': { type: 'conduitElbowY', rotation: 90 },
      'Z-_Y+': { type: 'conduitElbowY', rotation: 270 },
      'Y+_X+': { type: 'conduitElbowY', rotation: 0 },
      'Y+_X-': { type: 'conduitElbowY', rotation: 180 },
      'Y+_Z+': { type: 'conduitElbowY', rotation: 90 },
      'Y+_Z-': { type: 'conduitElbowY', rotation: 270 }
    },
    junctions: {
      tXZ: 'conduitT'
    },
    decorative: [],
    allowedScales: [1, 2, 4],
    clusterBased: false
  },

  industrial: {
    label: 'Industrial',
    straight: {
      X: 'ductX',
      Y: 'iBeam',
      Z: 'ductZ'
    },
    elbows: {
      'X+_Z+': { type: 'ductCorner', rotation: 180 },
      'X+_Z-': { type: 'ductCorner', rotation: 90 },
      'X-_Z+': { type: 'ductCorner', rotation: 270 },
      'X-_Z-': { type: 'ductCorner', rotation: 0 },
      'Z+_X+': { type: 'ductCorner', rotation: 180 },
      'Z+_X-': { type: 'ductCorner', rotation: 270 },
      'Z-_X+': { type: 'ductCorner', rotation: 90 },
      'Z-_X-': { type: 'ductCorner', rotation: 0 }
    },
    junctions: {},
    decorative: ['tank', 'valve', 'vent', 'catwalk', 'grateFloor'],
    allowedScales: [1, 2, 4],
    clusterBased: false
  },

  natural: {
    label: 'Natural',
    blocks: [
      // Original
      'rock', 'bush', 'logX', 'logZ', 'stump', 'boulder', 'grass', 'flower',
      // Rock variations
      'rockSmall', 'rockLarge', 'rockFlat', 'rockTall', 'rockJagged', 'rockCluster', 'rockPile', 'pebbles', 'slate',
      // Crystal variations
      'crystalSmall', 'crystalLarge', 'crystalCluster', 'crystalSpike', 'crystalFlat', 'crystalShard', 'crystalFormation',
      // Cave/Nature
      'stalactite', 'stalagmite', 'mushroom', 'mushroomCluster', 'moss', 'vine', 'coral'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true
  },

  abstract: {
    label: 'Abstract',
    blocks: ['cube', 'sphere', 'cylinder', 'cone', 'pyramid', 'octagon', 'gem', 'crystal', 'prism'],
    allowedScales: [1, 2, 4],
    clusterBased: true
  },

  beams: {
    label: 'Beams',
    straight: {
      X: 'beamX',
      Y: 'pillar',
      Z: 'beamZ'
    },
    elbows: {},
    junctions: {
      cross: 'crossBeam'
    },
    decorative: ['truss', 'post'],
    allowedScales: [1, 2, 4],
    clusterBased: false
  },

  fences: {
    label: 'Fences',
    straight: {
      X: 'fence',
      Y: 'fencePost',
      Z: 'fenceZ'
    },
    elbows: {
      'X+_Z+': { type: 'fenceCorner', rotation: 180 },
      'X+_Z-': { type: 'fenceCorner', rotation: 90 },
      'X-_Z+': { type: 'fenceCorner', rotation: 270 },
      'X-_Z-': { type: 'fenceCorner', rotation: 0 },
      'Z+_X+': { type: 'fenceCorner', rotation: 180 },
      'Z+_X-': { type: 'fenceCorner', rotation: 270 },
      'Z-_X+': { type: 'fenceCorner', rotation: 90 },
      'Z-_X-': { type: 'fenceCorner', rotation: 0 }
    },
    junctions: {
      tXZ: 'fenceT',
      cross: 'fenceCross'
    },
    decorative: ['gate', 'gateArch'],
    allowedScales: [1, 2, 4],
    clusterBased: false
  },

  // ========== MIXED PRESETS ==========

  mixedTech: {
    label: 'Tech Mix',
    blocks: [
      // Pipes
      'pipeX', 'pipeY', 'pipeZ', 'pipeElbowXZ', 'pipeCross', 'pipeT',
      // Cables
      'cableX', 'cableY', 'cableZ', 'cableHanging', 'cableLoop',
      // Conduits
      'conduitX', 'conduitY', 'conduitZ',
      // Industrial
      'tank', 'valve', 'vent', 'antenna', 'ductX', 'ductZ'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true,
    mixed: true
  },

  mixedOrganic: {
    label: 'Organic Mix',
    blocks: [
      // Natural
      'rock', 'bush', 'logX', 'logZ', 'stump', 'boulder', 'grass', 'flower',
      // Rock variations
      'rockSmall', 'rockLarge', 'rockFlat', 'rockJagged', 'rockCluster', 'pebbles',
      // Crystal variations
      'crystalSmall', 'crystalLarge', 'crystalCluster', 'crystalFormation',
      // Cave/Nature
      'mushroom', 'mushroomCluster', 'moss', 'vine', 'coral',
      // Organic shapes
      'sphere', 'crystal', 'gem', 'prism',
      // Pillars as tree trunks
      'pillar', 'pillarRound', 'post'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true,
    mixed: true
  },

  mixedArchitecture: {
    label: 'Architecture Mix',
    blocks: [
      // Structural
      'cube', 'slab', 'slabTop', 'pillar', 'pillarRound', 'arch', 'archHalf',
      // Beams
      'beamX', 'beamZ', 'crossBeam', 'truss',
      // Decorative
      'stairs', 'stairsCorner', 'ramp', 'dome', 'domeLow',
      // Walls
      'halfX', 'halfZ', 'quarter', 'wedge'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true,
    mixed: true
  },

  mixedGeometric: {
    label: 'Geometric Mix',
    blocks: [
      // Basic shapes
      'cube', 'sphere', 'cylinder', 'cone', 'pyramid',
      // Angular
      'octagon', 'prism', 'gem', 'crystal',
      // Wedges
      'wedge', 'wedgeCorner', 'wedgeInner',
      // Slabs
      'slab', 'slabTop', 'quarter'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true,
    mixed: true
  },

  mixedChaos: {
    label: 'Chaos Mix',
    blocks: [
      // Everything mixed together
      'cube', 'sphere', 'cylinder', 'cone', 'pyramid', 'gem',
      'pipeX', 'pipeY', 'pipeZ', 'tank', 'valve',
      'rock', 'bush', 'crystal',
      'pillar', 'arch', 'dome', 'stairs',
      'beamX', 'beamZ', 'truss',
      'wedge', 'slab', 'octagon'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true,
    mixed: true
  },

  mixedSciFi: {
    label: 'Sci-Fi Mix',
    blocks: [
      // Tech
      'pipeX', 'pipeY', 'pipeZ', 'pipeCross',
      'antenna', 'tank', 'vent', 'valve',
      // Geometric
      'octagon', 'cylinder', 'dome', 'domeLow',
      // Panels
      'slab', 'slabTop', 'grateFloor', 'catwalk',
      // Structural
      'pillar', 'pillar2', 'iBeam'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true,
    mixed: true
  },

  mixedRuins: {
    label: 'Ruins Mix',
    blocks: [
      // Broken architecture
      'cube', 'slab', 'quarter', 'wedge', 'wedgeCorner',
      'pillar', 'arch', 'archHalf', 'stairs',
      // Natural overgrowth
      'rock', 'boulder', 'bush', 'grass', 'moss', 'vine',
      // Rock debris
      'rockSmall', 'rockFlat', 'rockCluster', 'pebbles', 'slate',
      // Debris
      'halfX', 'halfZ', 'stump'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true,
    mixed: true
  },

  cave: {
    label: 'Cave',
    blocks: [
      // Rocks
      'rock', 'boulder', 'rockSmall', 'rockLarge', 'rockFlat', 'rockTall', 'rockJagged', 'rockCluster', 'rockPile', 'pebbles', 'slate',
      // Crystals
      'crystalSmall', 'crystalLarge', 'crystalCluster', 'crystalSpike', 'crystalFlat', 'crystalShard', 'crystalFormation',
      // Cave formations
      'stalactite', 'stalagmite', 'mushroom', 'mushroomCluster', 'moss'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true
  },

  crystals: {
    label: 'Crystals',
    blocks: [
      'crystal', 'gem', 'prism',
      'crystalSmall', 'crystalLarge', 'crystalCluster', 'crystalSpike', 'crystalFlat', 'crystalShard', 'crystalFormation'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true
  },

  rocks: {
    label: 'Rocks',
    blocks: [
      'rock', 'boulder', 'rockSmall', 'rockLarge', 'rockFlat', 'rockTall', 'rockJagged', 'rockCluster', 'rockPile', 'pebbles', 'slate'
    ],
    allowedScales: [1, 2, 4],
    clusterBased: true
  }
};

/**
 * Get elbow block type and rotation for a direction change
 * @param {Object} preset - The preset configuration
 * @param {string} fromDir - Direction coming from (e.g., 'X+', 'Z-')
 * @param {string} toDir - Direction going to
 * @returns {Object|null} - { type, rotation } or null if no elbow exists
 */
export function getElbowType(preset, fromDir, toDir) {
  if (!preset.elbows) return null;
  const key = `${fromDir}_${toDir}`;
  return preset.elbows[key] || null;
}

/**
 * Get straight piece block type for an axis
 * @param {Object} preset - The preset configuration
 * @param {string} axis - 'X', 'Y', or 'Z'
 * @returns {string|null} - Block type or null
 */
export function getStraightType(preset, axis) {
  if (!preset.straight) return null;
  return preset.straight[axis] || null;
}

/**
 * Get a random decorative block from preset
 * @param {Object} preset - The preset configuration
 * @returns {string|null} - Block type or null
 */
export function getDecorativeType(preset) {
  if (!preset.decorative || preset.decorative.length === 0) return null;
  return preset.decorative[Math.floor(Math.random() * preset.decorative.length)];
}

/**
 * Get a random block from cluster-based preset
 * @param {Object} preset - The preset configuration
 * @returns {string|null} - Block type or null
 */
export function getClusterBlock(preset) {
  if (!preset.blocks || preset.blocks.length === 0) return null;
  return preset.blocks[Math.floor(Math.random() * preset.blocks.length)];
}
