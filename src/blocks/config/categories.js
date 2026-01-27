// Block categories for UI organization
export const BLOCK_CATEGORIES = {
  basic: {
    label: 'Basic',
    types: ['cube', 'slab', 'slabTop', 'quarter', 'quarterTall', 'halfX', 'halfZ', 'halfCorner', 'step', 'platform']
  },
  pillars: {
    label: 'Pillars',
    types: ['pillar', 'pillar2', 'pillar4', 'pillarRound', 'pillarRound2', 'post', 'bollard']
  },
  beams: {
    label: 'Beams',
    types: ['beamX', 'beam2X', 'beamZ', 'beam2Z', 'beamXLow', 'beam2XLow', 'beamZLow', 'beam2ZLow', 'beamDiag', 'crossBeam', 'truss']
  },
  walls: {
    label: 'Walls',
    types: ['wall', 'wall4', 'wall8', 'panel', 'wallFront', 'wallBack', 'wallCorner', 'wallCornerInner', 'wallJunction', 'parapet', 'crenellation']
  },
  wedges: {
    label: 'Wedges',
    types: ['wedge', 'wedgeLow', 'wedgeFlat', 'wedgeTop', 'wedgeLowTop', 'wedgeFlatTop', 'wedgeCorner', 'wedgeInner', 'wedge4x2', 'wedge4x2Top', 'wedge2x2', 'wedge2x2Top', 'wedgeHalf', 'wedgeHalfTop', 'wedgeCornerLow', 'wedgeCornerFlat']
  },
  triangles: {
    label: 'Triangles',
    types: ['trianglePrism', 'triangleRight', 'triangleEqui', 'tetrahedron', 'pentahedron']
  },
  stairs: {
    label: 'Stairs',
    types: ['stairs', 'stairs4', 'stairs8', 'stairsCorner', 'stairsCornerInner', 'stairsSingle', 'landing', 'spiralStep']
  },
  shapes: {
    label: 'Shapes',
    types: ['cylinder', 'cylinderHalf', 'cone', 'sphere', 'dome', 'pyramid', 'octagon', 'tube', 'torus', 'capsule', 'hemisphere', 'egg']
  },
  arches: {
    label: 'Arches',
    types: ['arch', 'archLow', 'archWide', 'archHalf', 'gothicArch', 'flatArch', 'keystone']
  },
  pipes: {
    label: 'Pipes',
    types: ['pipeX', 'pipeY', 'pipeZ', 'pipeElbowXZ', 'pipeElbowXZ2', 'pipeElbowXZ3', 'pipeElbowXZ4', 'pipeElbowXY', 'pipeElbowXY2', 'pipeElbowYZ', 'pipeElbowYZ2', 'pipeCross', 'pipeT', 'pipeTY', 'pipeTZ', 'downspout']
  },
  fences: {
    label: 'Fences & Gates',
    types: ['fence', 'fenceZ', 'fenceCorner', 'fenceCornerInner', 'fencePost', 'fenceEnd', 'fenceT', 'fenceCross', 'gate', 'gateOpen', 'gateDouble', 'gateArch', 'railing', 'railingZ', 'railingCorner', 'railingCornerInner', 'railingPost', 'railingEnd', 'railingSlope', 'railingSlopeZ', 'picket', 'picketZ', 'lattice', 'latticeZ']
  },
  decorative: {
    label: 'Decorative',
    types: ['cross', 'frame', 'prism', 'lShape', 'tShape', 'cShape', 'star', 'heart', 'diamond']
  },
  details: {
    label: 'Details',
    types: ['ledge', 'gutter', 'capital', 'base', 'windowFrame', 'doorFrame', 'cornerTrim', 'edgeTrim', 'edgeCorner', 'edgeSlope', 'edgeSlopeZ', 'moldingX', 'moldingZ', 'moldingCorner', 'bracket', 'trim', 'trimZ', 'trimCorner']
  },
  architectural: {
    label: 'Architectural',
    types: ['cornice', 'column', 'baluster', 'windowSill', 'shingle', 'chimney', 'buttress', 'finial', 'pediment', 'dentil']
  },
  covers: {
    label: 'Covers',
    types: ['awning', 'canopy', 'pergola', 'tarp', 'umbrella']
  },
  furniture: {
    label: 'Furniture',
    types: ['bench', 'table', 'chair', 'barrel', 'planter', 'ladder', 'stool', 'shelf', 'bed', 'desk']
  },
  storage: {
    label: 'Storage',
    types: ['crate', 'crateOpen', 'crateLarge', 'pallet', 'shelfUnit', 'locker', 'cabinet', 'cardboardBox', 'sack', 'bin', 'dumpster']
  },
  industrial: {
    label: 'Industrial',
    types: ['tank', 'valve', 'vent', 'iBeam', 'catwalk', 'grateFloor', 'ductX', 'ductZ', 'ductCorner', 'hopper', 'conveyor']
  },
  electrical: {
    label: 'Electrical',
    types: ['transformer', 'powerBox', 'conduitX', 'conduitY', 'conduitZ', 'conduitElbow', 'conduitElbowY', 'conduitT', 'outlet', 'switchBox', 'fuseBox', 'cableX', 'cableY', 'cableZ', 'cableElbow', 'cableElbowY', 'cableT', 'lightFixture', 'cableHanging', 'cableDroop', 'cableLoop', 'spotlight', 'bulb']
  },
  natural: {
    label: 'Natural',
    types: ['rock', 'bush', 'logX', 'logZ', 'stump', 'boulder', 'grass', 'flower', 'mushroom', 'mushroomCluster', 'moss', 'vine', 'coral']
  },
  rocks: {
    label: 'Rocks',
    types: ['rock', 'boulder', 'rockSmall', 'rockLarge', 'rockFlat', 'rockTall', 'rockJagged', 'rockCluster', 'rockPile', 'pebbles', 'slate']
  },
  crystals: {
    label: 'Crystals',
    types: ['crystal', 'gem', 'crystalSmall', 'crystalLarge', 'crystalCluster', 'crystalSpike', 'crystalFlat', 'crystalShard', 'crystalFormation']
  },
  cave: {
    label: 'Cave',
    types: ['stalactite', 'stalagmite', 'mushroom', 'mushroomCluster', 'moss', 'crystalCluster', 'crystalFormation']
  },
  modern: {
    label: 'Modern',
    types: ['acUnit', 'solarPanel', 'antenna', 'barrier', 'trafficCone', 'sign', 'monitor', 'speaker']
  },
  extraShapes: {
    label: 'Extra Shapes',
    types: ['quarterPipe', 'bowl', 'hexagon', 'roundedCube', 'chamfer', 'cubeBevel', 'gem', 'crystal', 'pill']
  },
  ramps: {
    label: 'Ramps',
    types: ['rampCurved', 'rampCurvedLow', 'rampCurvedCorner', 'rampStraight', 'rampWide']
  },
  roofs: {
    label: 'Roofs',
    types: ['roofPeak', 'roofPeakLow', 'roofHip', 'slabSlope', 'slabSlopeTop', 'roofCorner', 'roofValley', 'gable']
  },
  channels: {
    label: 'Channels',
    types: ['channel', 'channelCorner', 'channelEnd', 'drain', 'grate']
  },
  medieval: {
    label: 'Medieval',
    types: ['merlon', 'arrowSlit', 'torch', 'chain', 'shield', 'banner', 'portcullis']
  },
  vehicles: {
    label: 'Vehicles',
    types: ['wheel', 'axle', 'seat', 'hull', 'propeller', 'wing']
  },
  oil: {
    label: 'Oil & Gas',
    types: ['derrickLeg', 'derrickCross', 'derrickPlatform', 'pumpJack', 'pumpBase', 'oilTank', 'oilTankSmall', 'wellHead', 'pipelineX', 'pipelineZ', 'oilBarrel']
  }
};

// Get all block types from all categories
export function getAllBlockTypes() {
  const types = new Set();
  for (const category of Object.values(BLOCK_CATEGORIES)) {
    for (const type of category.types) {
      types.add(type);
    }
  }
  return Array.from(types);
}
