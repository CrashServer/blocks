import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Re-export block configuration from organized config files
export { BLOCK_CATEGORIES, getAllBlockTypes } from './config/categories.js';
export { BLOCK_DISPLAY } from './config/display.js';

// Height multipliers for snapping (how tall the block actually is)
export const BLOCK_HEIGHT_MULTIPLIERS = {
  cube: 1,
  slab: 0.5,
  slabTop: 0.5,
  quarter: 0.5,
  quarterTall: 1,
  halfX: 1,
  halfZ: 1,
  halfCorner: 1,
  pillar: 1,
  pillar2: 1,
  pillar4: 1,
  pillarRound: 1,
  pillarRound2: 1,
  // Beams (horizontal pillars) - half height, centered vertically
  beamX: 0.5,
  beam2X: 0.25,
  beam4X: 0.125,
  beamZ: 0.5,
  beam2Z: 0.25,
  beam4Z: 0.125,
  beamDiag: 0.25,
  // Low beams - same size but sit on ground
  beamXLow: 0.5,
  beam2XLow: 0.25,
  beamZLow: 0.5,
  beam2ZLow: 0.25,
  wall: 1,
  wall4: 1,
  wall8: 1,
  panel: 1,
  wallFront: 1,
  wallBack: 1,
  wallCorner: 1,
  wallCornerInner: 1,
  wallJunction: 1,
  wedge: 1,
  wedgeLow: 0.5,
  wedgeFlat: 0.25,
  wedgeTop: 1,
  wedgeLowTop: 0.5,
  wedgeFlatTop: 0.25,
  wedgeCorner: 1,
  wedgeInner: 1,
  wedge4x2: 1,
  wedge4x2Top: 1,
  wedge2x2: 1,
  wedge2x2Top: 1,
  wedgeHalf: 1,
  wedgeHalfTop: 1,
  wedgeCornerLow: 0.5,
  wedgeCornerFlat: 0.25,
  // Ramps
  rampCurved: 1,
  rampCurvedLow: 0.5,
  rampCurvedCorner: 1,
  // Roofs
  roofPeak: 1,
  roofPeakLow: 0.5,
  roofHip: 1,
  slabSlope: 0.25,
  slabSlopeTop: 0.25,
  // Channels
  channel: 0.5,
  channelCorner: 0.5,
  channelEnd: 0.5,
  // Extra
  cubeBevel: 1,
  stairs: 1,
  stairs4: 1,
  stairs8: 1,
  stairsCorner: 1,
  stairsCornerInner: 1,
  cylinder: 1,
  cylinderHalf: 1,
  cone: 1,
  sphere: 1,
  dome: 0.5,
  pyramid: 1,
  octagon: 1,
  tube: 1,
  arch: 1,
  archLow: 0.5,
  archWide: 1,
  archHalf: 1,
  cross: 1,
  frame: 1,
  fence: 1,
  fenceZ: 1,
  fenceCorner: 1,
  fenceCornerInner: 1,
  fencePost: 1,
  fenceEnd: 1,
  fenceT: 1,
  fenceCross: 1,
  gate: 1,
  gateOpen: 1,
  gateDouble: 1,
  gateArch: 1,
  railing: 1,
  railingZ: 1,
  railingCorner: 1,
  railingCornerInner: 1,
  railingPost: 1,
  railingEnd: 1,
  railingSlope: 1,
  railingSlopeZ: 1,
  picket: 1,
  picketZ: 1,
  lattice: 1,
  latticeZ: 1,
  // Edge connectors
  edgeCorner: 0.25,
  edgeSlope: 0.25,
  edgeSlopeZ: 0.25,
  moldingCorner: 0.125,
  trim: 0.125,
  trimZ: 0.125,
  trimCorner: 0.125,
  pipeX: 1,
  pipeY: 1,
  pipeZ: 1,
  pipeElbowXZ: 1,
  pipeElbowXZ2: 1,
  pipeElbowXZ3: 1,
  pipeElbowXZ4: 1,
  pipeElbowXY: 1,
  pipeElbowXY2: 1,
  pipeElbowYZ: 1,
  pipeElbowYZ2: 1,
  pipeTZ: 1,
  pipeCross: 1,
  pipeT: 1,
  pipeTY: 1,
  prism: 1,
  lShape: 1,
  tShape: 1,
  cShape: 1,
  ledge: 0.25,
  gutter: 0.25,
  capital: 0.25,
  base: 0.25,
  windowFrame: 1,
  doorFrame: 1,
  // Architectural
  cornice: 0.25,
  column: 1,
  baluster: 1,
  windowSill: 0.25,
  shingle: 0.25,
  chimney: 1,
  buttress: 1,
  // Furniture
  bench: 0.5,
  table: 0.75,
  chair: 1,
  barrel: 1,
  planter: 0.5,
  ladder: 1,
  // Storage
  crate: 1,
  crateOpen: 1,
  crateLarge: 1,
  pallet: 0.125,
  shelfUnit: 1,
  locker: 1,
  cabinet: 1,
  cardboardBox: 0.75,
  sack: 0.5,
  // Industrial
  tank: 1,
  valve: 0.5,
  vent: 0.25,
  iBeam: 1,
  catwalk: 0.25,
  // Electrical
  transformer: 1,
  powerBox: 0.5,
  conduitX: 1,
  conduitY: 1,
  conduitZ: 1,
  conduitElbow: 1,
  conduitElbowY: 1,
  conduitT: 1,
  outlet: 0.125,
  switchBox: 0.25,
  fuseBox: 0.5,
  cableX: 1,
  cableY: 1,
  cableZ: 1,
  cableElbow: 1,
  cableElbowY: 1,
  cableT: 1,
  lightFixture: 0.25,
  cableHanging: 1,
  cableDroop: 1,
  cableLoop: 1,
  // Natural
  rock: 0.75,
  bush: 0.75,
  logX: 0.5,
  logZ: 0.5,
  stump: 0.5,
  boulder: 0.75,
  grass: 0.25,
  flower: 0.5,
  // Rock variations
  rockSmall: 0.5,
  rockLarge: 0.85,
  rockFlat: 0.3,
  rockTall: 1,
  rockJagged: 0.85,
  rockCluster: 0.6,
  rockPile: 0.5,
  pebbles: 0.15,
  slate: 0.25,
  // Crystal variations
  crystalSmall: 0.5,
  crystalLarge: 1,
  crystalCluster: 0.75,
  crystalSpike: 1,
  crystalFlat: 0.4,
  crystalShard: 0.75,
  crystalFormation: 1,
  // Cave/Nature
  stalactite: 0.8,
  stalagmite: 0.7,
  mushroom: 0.5,
  mushroomCluster: 0.5,
  moss: 0.15,
  vine: 0.8,
  coral: 0.6,
  // Modern
  acUnit: 0.75,
  solarPanel: 0.25,
  antenna: 1,
  barrier: 0.75,
  // Shapes
  quarterPipe: 1,
  bowl: 0.5,
  hexagon: 1,
  roundedCube: 1,
  chamfer: 1,
  // Medieval
  merlon: 0.5,
  arrowSlit: 1,
  torch: 0.75,
  chain: 1,
  shield: 0.125,
  banner: 1,
  portcullis: 1,
  // New basic
  step: 0.25,
  platform: 0.125,
  // New pillars
  post: 1,
  bollard: 0.75,
  // New beams
  crossBeam: 0.25,
  truss: 1,
  // New walls
  parapet: 0.5,
  crenellation: 0.5,
  // Triangles
  trianglePrism: 1,
  triangleRight: 1,
  triangleEqui: 1,
  tetrahedron: 1,
  pentahedron: 1,
  // New stairs
  stairsSingle: 0.25,
  landing: 0.25,
  spiralStep: 0.25,
  // New shapes
  torus: 0.5,
  capsule: 1,
  hemisphere: 0.5,
  egg: 1,
  // New arches
  gothicArch: 1,
  flatArch: 0.25,
  keystone: 0.5,
  // New pipes
  downspout: 1,
  // New decorative
  star: 0.25,
  heart: 0.5,
  diamond: 1,
  // New details
  cornerTrim: 1,
  edgeTrim: 0.25,
  moldingX: 0.125,
  moldingZ: 0.125,
  bracket: 0.5,
  // New architectural
  finial: 0.75,
  pediment: 0.5,
  dentil: 0.25,
  // Covers
  awning: 0.25,
  canopy: 0.125,
  pergola: 0.25,
  tarp: 0.0625,
  umbrella: 0.75,
  // New furniture
  stool: 0.5,
  shelf: 0.125,
  bed: 0.5,
  desk: 0.75,
  // New storage
  bin: 0.75,
  dumpster: 1,
  // New industrial
  grateFloor: 0.125,
  ductX: 0.5,
  ductZ: 0.5,
  ductCorner: 0.5,
  hopper: 1,
  conveyor: 0.25,
  // New electrical
  spotlight: 0.5,
  bulb: 0.25,
  // New natural
  stump: 0.5,
  boulder: 0.75,
  grass: 0.25,
  flower: 0.5,
  // New modern
  trafficCone: 0.75,
  sign: 1,
  monitor: 0.75,
  speaker: 0.5,
  // New extra shapes
  gem: 0.75,
  crystal: 1,
  pill: 0.5,
  // New ramps
  rampStraight: 1,
  rampWide: 1,
  // New roofs
  roofCorner: 1,
  roofValley: 1,
  gable: 1,
  // New channels
  drain: 0.25,
  grate: 0.125,
  // Vehicles
  wheel: 1,
  axle: 0.25,
  seat: 0.5,
  hull: 0.5,
  propeller: 0.25,
  wing: 0.125,
  // Oil & Gas
  derrickLeg: 1,
  derrickCross: 0.25,
  derrickPlatform: 0.25,
  pumpJack: 1,
  pumpBase: 0.25,
  oilTank: 1,
  oilTankSmall: 0.5,
  wellHead: 0.5,
  pipelineX: 0.5,
  pipelineZ: 0.5,
  oilBarrel: 1,
};

// Y offset for positioning (for blocks that don't start at their gridPosition.y)
export const BLOCK_Y_OFFSETS = {
  slabTop: 0.5, // Upper slab starts 0.5 units up
  // Beams are centered vertically in the grid cell
  beamX: 0.25,
  beam2X: 0.375,
  beam4X: 0.4375,
  beamZ: 0.25,
  beam2Z: 0.375,
  beam4Z: 0.4375,
  beamDiag: 0.375,
  // Upper wedges - positioned at top of cell
  wedgeTop: 0, // Full height wedge, but flipped
  wedgeLowTop: 0.5, // Half height wedge at top
  wedgeFlatTop: 0.75, // Quarter height wedge at top
  wedge4x2Top: 0,
  wedge2x2Top: 0,
  wedgeHalfTop: 0,
  // Sloped slabs
  slabSlopeTop: 0.75, // Quarter height slope at top
  // Details at top of block
  ledge: 0.75,
  capital: 0.75,
};

// Geometry creators for all block types
export const GEOMETRY_CREATORS = {
  // === BASIC ===
  cube: (d) => new THREE.BoxGeometry(d.w, d.h, d.d),

  slab: (d) => new THREE.BoxGeometry(d.w, d.h / 2, d.d),

  slabTop: (d) => new THREE.BoxGeometry(d.w, d.h / 2, d.d),

  // === PILLARS (vertical, centered) ===
  pillar: (d) => new THREE.BoxGeometry(d.w / 2, d.h, d.d / 2),

  pillar2: (d) => new THREE.BoxGeometry(d.w / 4, d.h, d.d / 4),

  pillar4: (d) => new THREE.BoxGeometry(d.w / 8, d.h, d.d / 8),

  // === BEAMS (horizontal pillars along X axis) ===
  beamX: (d) => new THREE.BoxGeometry(d.w, d.h / 2, d.d / 2),

  beam2X: (d) => new THREE.BoxGeometry(d.w, d.h / 4, d.d / 4),

  beam4X: (d) => new THREE.BoxGeometry(d.w, d.h / 8, d.d / 8),

  // === BEAMS (horizontal pillars along Z axis) ===
  beamZ: (d) => new THREE.BoxGeometry(d.w / 2, d.h / 2, d.d),

  beam2Z: (d) => new THREE.BoxGeometry(d.w / 4, d.h / 4, d.d),

  beam4Z: (d) => new THREE.BoxGeometry(d.w / 8, d.h / 8, d.d),

  // === WALLS ===
  wall: (d) => new THREE.BoxGeometry(d.w, d.h, d.d / 2),

  wall4: (d) => new THREE.BoxGeometry(d.w, d.h, d.d / 4),

  wall8: (d) => new THREE.BoxGeometry(d.w, d.h, d.d / 8),

  panel: (d) => new THREE.BoxGeometry(d.w, d.h, d.d / 16),

  // Walls flush to front (positive Z)
  wallFront: (d) => {
    const geo = new THREE.BoxGeometry(d.w, d.h, d.d / 4);
    geo.translate(0, 0, d.d / 2 - d.d / 8);
    return geo;
  },

  // Walls flush to back (negative Z)
  wallBack: (d) => {
    const geo = new THREE.BoxGeometry(d.w, d.h, d.d / 4);
    geo.translate(0, 0, -d.d / 2 + d.d / 8);
    return geo;
  },

  // === WEDGES ===
  wedge: (d) => createWedge(d.w, d.h, d.d, 1.0),      // 45 degree

  wedgeLow: (d) => createWedge(d.w, d.h / 2, d.d, 1.0),   // Half height 45 degree

  wedgeFlat: (d) => createWedge(d.w, d.h / 4, d.d, 1.0),  // Quarter height (gentle slope)

  // Upper wedges (flipped - slope goes down instead of up)
  wedgeTop: (d) => createWedgeTop(d.w, d.h, d.d, 1.0),

  wedgeLowTop: (d) => createWedgeTop(d.w, d.h / 2, d.d, 1.0),

  wedgeFlatTop: (d) => createWedgeTop(d.w, d.h / 4, d.d, 1.0),

  wedgeCorner: (d) => createCornerWedge(d.w, d.h, d.d),

  // Wide/long wedge variants (4x2 = 4 wide, 2 deep)
  wedge4x2: (d) => createWedge(d.w * 4, d.h, d.d * 2, 1.0),
  wedge4x2Top: (d) => createWedgeTop(d.w * 4, d.h, d.d * 2, 1.0),
  wedge2x2: (d) => createWedge(d.w * 2, d.h, d.d * 2, 1.0),
  wedge2x2Top: (d) => createWedgeTop(d.w * 2, d.h, d.d * 2, 1.0),

  // Half-width wedges
  wedgeHalf: (d) => createWedge(d.w / 2, d.h, d.d, 1.0),
  wedgeHalfTop: (d) => createWedgeTop(d.w / 2, d.h, d.d, 1.0),

  // Corner wedge height variants
  wedgeCornerLow: (d) => createCornerWedge(d.w, d.h / 2, d.d),
  wedgeCornerFlat: (d) => createCornerWedge(d.w, d.h / 4, d.d),

  // === STAIRS ===
  stairs: (d) => createStairs(d.w, d.h, d.d, 2),   // 2 steps

  stairs4: (d) => createStairs(d.w, d.h, d.d, 4),  // 4 steps

  stairs8: (d) => createStairs(d.w, d.h, d.d, 8),  // 8 steps

  // === SHAPES ===
  cylinder: (d) => {
    const radius = Math.min(d.w, d.d) / 2;
    return new THREE.CylinderGeometry(radius, radius, d.h, 16);
  },

  cylinderHalf: (d) => {
    const radius = Math.min(d.w, d.d) / 2;
    return new THREE.CylinderGeometry(radius, radius, d.h, 16, 1, false, 0, Math.PI);
  },

  cone: (d) => {
    const radius = Math.min(d.w, d.d) / 2;
    return new THREE.ConeGeometry(radius, d.h, 16);
  },

  sphere: (d) => {
    const radius = Math.min(d.w, d.h, d.d) / 2;
    return new THREE.SphereGeometry(radius, 16, 12);
  },

  dome: (d) => {
    const radius = Math.min(d.w, d.d) / 2;
    return new THREE.SphereGeometry(radius, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  },

  // === QUARTER BLOCKS ===
  quarter: (d) => new THREE.BoxGeometry(d.w / 2, d.h / 2, d.d / 2),

  quarterTall: (d) => new THREE.BoxGeometry(d.w / 2, d.h, d.d / 2),

  // === HALF BLOCKS ===
  halfX: (d) => new THREE.BoxGeometry(d.w / 2, d.h, d.d),

  halfZ: (d) => new THREE.BoxGeometry(d.w, d.h, d.d / 2),

  halfCorner: (d) => new THREE.BoxGeometry(d.w / 2, d.h, d.d / 2),

  // === ROUND PILLARS ===
  pillarRound: (d) => {
    const radius = Math.min(d.w, d.d) / 4;
    return new THREE.CylinderGeometry(radius, radius, d.h, 12);
  },

  pillarRound2: (d) => {
    const radius = Math.min(d.w, d.d) / 8;
    return new THREE.CylinderGeometry(radius, radius, d.h, 8);
  },

  // === DIAGONAL BEAM ===
  beamDiag: (d) => createDiagonalBeam(d.w, d.h / 4, d.d / 4),

  // === LOW BEAMS (sit on ground, no Y offset) ===
  beamXLow: (d) => new THREE.BoxGeometry(d.w, d.h / 2, d.d / 2),
  beam2XLow: (d) => new THREE.BoxGeometry(d.w, d.h / 4, d.d / 4),
  beamZLow: (d) => new THREE.BoxGeometry(d.w / 2, d.h / 2, d.d),
  beam2ZLow: (d) => new THREE.BoxGeometry(d.w / 4, d.h / 4, d.d),

  // === ARCHES ===
  arch: (d) => createArch(d.w, d.h, d.d, 1.0),      // Full semicircle arch

  archLow: (d) => createArch(d.w, d.h, d.d, 0.5),   // Flatter arch

  archWide: (d) => createArch(d.w, d.h, d.d, 0.3),  // Very flat arch

  archHalf: (d) => createArchHalf(d.w, d.h, d.d),   // One-sided arch

  // === WALL CORNERS ===
  wallCorner: (d) => createWallCorner(d.w, d.h, d.d, false),

  wallCornerInner: (d) => createWallCorner(d.w, d.h, d.d, true),

  // 45-degree corner filler for wall junctions
  wallJunction: (d) => createWallJunction(d.w, d.h, d.d),

  // === WEDGE INNER ===
  wedgeInner: (d) => createWedgeInner(d.w, d.h, d.d),

  // === STAIR CORNERS ===
  stairsCorner: (d) => createStairsCorner(d.w, d.h, d.d, false),

  stairsCornerInner: (d) => createStairsCorner(d.w, d.h, d.d, true),

  // === MORE SHAPES ===
  pyramid: (d) => createPyramid(d.w, d.h, d.d),

  octagon: (d) => {
    const radius = Math.min(d.w, d.d) / 2;
    return new THREE.CylinderGeometry(radius, radius, d.h, 8);
  },

  tube: (d) => createTube(d.w, d.h, d.d),

  // === DECORATIVE ===
  cross: (d) => createCross(d.w, d.h, d.d),

  frame: (d) => createFrame(d.w, d.h, d.d),

  fence: (d) => createFence(d.w, d.h, d.d),
  fenceZ: (d) => createFenceZ(d.w, d.h, d.d),
  fenceCorner: (d) => createFenceCorner(d.w, d.h, d.d),
  fenceCornerInner: (d) => createFenceCornerInner(d.w, d.h, d.d),
  fencePost: (d) => createFencePost(d.w, d.h, d.d),
  fenceEnd: (d) => createFenceEnd(d.w, d.h, d.d),
  fenceT: (d) => createFenceT(d.w, d.h, d.d),
  fenceCross: (d) => createFenceCross(d.w, d.h, d.d),
  gate: (d) => createGate(d.w, d.h, d.d),
  gateOpen: (d) => createGateOpen(d.w, d.h, d.d),
  gateDouble: (d) => createGateDouble(d.w, d.h, d.d),
  gateArch: (d) => createGateArch(d.w, d.h, d.d),
  railing: (d) => createRailing(d.w, d.h, d.d),
  railingZ: (d) => createRailingZ(d.w, d.h, d.d),
  railingCorner: (d) => createRailingCorner(d.w, d.h, d.d),
  railingCornerInner: (d) => createRailingCornerInner(d.w, d.h, d.d),
  railingPost: (d) => createRailingPost(d.w, d.h, d.d),
  railingEnd: (d) => createRailingEnd(d.w, d.h, d.d),
  railingSlope: (d) => createRailingSlope(d.w, d.h, d.d),
  railingSlopeZ: (d) => createRailingSlopeZ(d.w, d.h, d.d),
  picket: (d) => createPicket(d.w, d.h, d.d),
  picketZ: (d) => createPicketZ(d.w, d.h, d.d),
  lattice: (d) => createLattice(d.w, d.h, d.d),
  latticeZ: (d) => createLatticeZ(d.w, d.h, d.d),

  // === EDGE CONNECTORS ===
  edgeCorner: (d) => createEdgeCorner(d.w, d.h, d.d),
  edgeSlope: (d) => createEdgeSlope(d.w, d.h, d.d),
  edgeSlopeZ: (d) => createEdgeSlopeZ(d.w, d.h, d.d),
  moldingCorner: (d) => createMoldingCorner(d.w, d.h, d.d),
  trim: (d) => createTrim(d.w, d.h, d.d),
  trimZ: (d) => createTrimZ(d.w, d.h, d.d),
  trimCorner: (d) => createTrimCorner(d.w, d.h, d.d),

  // === PIPES ===
  pipeX: (d) => createPipe(d.w, d.h, d.d, 'X'),
  pipeY: (d) => createPipe(d.w, d.h, d.d, 'Y'),
  pipeZ: (d) => createPipe(d.w, d.h, d.d, 'Z'),
  // Horizontal elbows (XZ plane) - 4 corner variants
  pipeElbowXZ: (d) => createPipeElbow(d.w, d.h, d.d, 'XZ', 0),   // -X to -Z
  pipeElbowXZ2: (d) => createPipeElbow(d.w, d.h, d.d, 'XZ', 1),  // +X to -Z
  pipeElbowXZ3: (d) => createPipeElbow(d.w, d.h, d.d, 'XZ', 2),  // +X to +Z
  pipeElbowXZ4: (d) => createPipeElbow(d.w, d.h, d.d, 'XZ', 3),  // -X to +Z
  // Vertical elbows - X to Y and Y to Z
  pipeElbowXY: (d) => createPipeElbow(d.w, d.h, d.d, 'XY', 0),   // +X to +Y
  pipeElbowXY2: (d) => createPipeElbow(d.w, d.h, d.d, 'XY', 1),  // -X to +Y
  pipeElbowYZ: (d) => createPipeElbow(d.w, d.h, d.d, 'YZ', 0),   // +Y to +Z
  pipeElbowYZ2: (d) => createPipeElbow(d.w, d.h, d.d, 'YZ', 1),  // +Y to -Z
  pipeCross: (d) => createPipeCross(d.w, d.h, d.d),
  pipeT: (d) => createPipeT(d.w, d.h, d.d, 'XZ'),          // T in XZ plane
  pipeTY: (d) => createPipeT(d.w, d.h, d.d, 'XY'),         // X pipe with Y branch
  pipeTZ: (d) => createPipeT(d.w, d.h, d.d, 'YZ'),         // Z pipe with Y branch

  prism: (d) => createPrism(d.w, d.h, d.d),

  lShape: (d) => createLShape(d.w, d.h, d.d),

  tShape: (d) => createTShape(d.w, d.h, d.d),

  cShape: (d) => createCShape(d.w, d.h, d.d),

  // === DETAILS ===
  ledge: (d) => createLedge(d.w, d.h * 0.25, d.d),

  gutter: (d) => createGutter(d.w, d.h * 0.25, d.d),

  capital: (d) => createCapital(d.w, d.h * 0.25, d.d),

  base: (d) => createBase(d.w, d.h * 0.25, d.d),

  windowFrame: (d) => createWindowFrame(d.w, d.h, d.d),

  doorFrame: (d) => createDoorFrame(d.w, d.h, d.d),

  // === ARCHITECTURAL ===
  cornice: (d) => createCornice(d.w, d.h, d.d),
  column: (d) => createColumn(d.w, d.h, d.d),
  baluster: (d) => createBaluster(d.w, d.h, d.d),
  windowSill: (d) => createWindowSill(d.w, d.h, d.d),
  shingle: (d) => createShingle(d.w, d.h, d.d),
  chimney: (d) => createChimney(d.w, d.h, d.d),
  buttress: (d) => createButtress(d.w, d.h, d.d),

  // === FURNITURE ===
  bench: (d) => createBench(d.w, d.h, d.d),
  table: (d) => createTable(d.w, d.h, d.d),
  chair: (d) => createChair(d.w, d.h, d.d),
  barrel: (d) => createBarrel(d.w, d.h, d.d),
  planter: (d) => createPlanter(d.w, d.h, d.d),
  ladder: (d) => createLadder(d.w, d.h, d.d),

  // === STORAGE ===
  crate: (d) => createCrate(d.w, d.h, d.d),
  crateOpen: (d) => createCrateOpen(d.w, d.h, d.d),
  crateLarge: (d) => createCrateLarge(d.w, d.h, d.d),
  pallet: (d) => createPallet(d.w, d.h, d.d),
  shelfUnit: (d) => createShelfUnit(d.w, d.h, d.d),
  locker: (d) => createLocker(d.w, d.h, d.d),
  cabinet: (d) => createCabinet(d.w, d.h, d.d),
  cardboardBox: (d) => createCardboardBox(d.w, d.h, d.d),
  sack: (d) => createSack(d.w, d.h, d.d),

  // === INDUSTRIAL ===
  tank: (d) => createTank(d.w, d.h, d.d),
  valve: (d) => createValve(d.w, d.h, d.d),
  vent: (d) => createVent(d.w, d.h, d.d),
  iBeam: (d) => createIBeam(d.w, d.h, d.d),
  catwalk: (d) => createCatwalk(d.w, d.h, d.d),

  // === ELECTRICAL ===
  transformer: (d) => createTransformer(d.w, d.h, d.d),
  powerBox: (d) => createPowerBox(d.w, d.h, d.d),
  conduit: (d) => createConduit(d.w, d.h, d.d),
  conduitCorner: (d) => createConduitCorner(d.w, d.h, d.d),
  outlet: (d) => createOutlet(d.w, d.h, d.d),
  switchBox: (d) => createSwitchBox(d.w, d.h, d.d),
  fuseBox: (d) => createFuseBox(d.w, d.h, d.d),
  cable: (d) => createCable(d.w, d.h, d.d),
  lightFixture: (d) => createLightFixture(d.w, d.h, d.d),
  cableHanging: (d) => createCableHanging(d.w, d.h, d.d),
  cableDroop: (d) => createCableDroop(d.w, d.h, d.d),
  cableLoop: (d) => createCableLoop(d.w, d.h, d.d),
  // Directional cables for seamless connections
  cableX: (d) => createCableX(d.w, d.h, d.d),
  cableY: (d) => createCableY(d.w, d.h, d.d),
  cableZ: (d) => createCableZ(d.w, d.h, d.d),
  cableElbow: (d) => createCableElbow(d.w, d.h, d.d),
  cableElbowY: (d) => createCableElbowY(d.w, d.h, d.d),
  cableT: (d) => createCableT(d.w, d.h, d.d),

  // === NATURAL ===
  rock: (d) => createRock(d.w, d.h, d.d),
  bush: (d) => createBush(d.w, d.h, d.d),
  logX: (d) => createLog(d.w, d.h, d.d, 'X'),
  logZ: (d) => createLog(d.w, d.h, d.d, 'Z'),

  // === MODERN ===
  acUnit: (d) => createACUnit(d.w, d.h, d.d),
  solarPanel: (d) => createSolarPanel(d.w, d.h, d.d),
  antenna: (d) => createAntenna(d.w, d.h, d.d),
  barrier: (d) => createBarrier(d.w, d.h, d.d),

  // === SHAPES ===
  quarterPipe: (d) => createQuarterPipe(d.w, d.h, d.d),
  bowl: (d) => createBowl(d.w, d.h, d.d),
  hexagon: (d) => createHexagon(d.w, d.h, d.d),
  roundedCube: (d) => createRoundedCube(d.w, d.h, d.d),
  chamfer: (d) => createChamfer(d.w, d.h, d.d),

  // === MEDIEVAL ===
  merlon: (d) => createMerlon(d.w, d.h, d.d),
  arrowSlit: (d) => createArrowSlit(d.w, d.h, d.d),
  torch: (d) => createTorch(d.w, d.h, d.d),
  chain: (d) => createChain(d.w, d.h, d.d),

  // === RAMPS (curved) ===
  rampCurved: (d) => createCurvedRamp(d.w, d.h, d.d),
  rampCurvedLow: (d) => createCurvedRamp(d.w, d.h / 2, d.d),
  rampCurvedCorner: (d) => createCurvedRampCorner(d.w, d.h, d.d),

  // === ROOFS ===
  roofPeak: (d) => createRoofPeak(d.w, d.h, d.d),
  roofPeakLow: (d) => createRoofPeak(d.w, d.h / 2, d.d),
  roofHip: (d) => createRoofHip(d.w, d.h, d.d),
  slabSlope: (d) => createWedge(d.w, d.h / 4, d.d, 1.0),
  slabSlopeTop: (d) => createWedgeTop(d.w, d.h / 4, d.d, 1.0),

  // === CHANNELS ===
  channel: (d) => createChannel(d.w, d.h / 2, d.d),
  channelCorner: (d) => createChannelCorner(d.w, d.h / 2, d.d),
  channelEnd: (d) => createChannelEnd(d.w, d.h / 2, d.d),

  // === BEVEL ===
  cubeBevel: (d) => createBeveledCube(d.w, d.h, d.d),

  // === NEW BASIC ===
  step: (d) => new THREE.BoxGeometry(d.w, d.h * 0.25, d.d),
  platform: (d) => new THREE.BoxGeometry(d.w, d.h * 0.125, d.d),

  // === NEW PILLARS ===
  post: (d) => new THREE.BoxGeometry(d.w * 0.25, d.h, d.d * 0.25),
  bollard: (d) => new THREE.CylinderGeometry(d.w * 0.2, d.w * 0.25, d.h * 0.75, 8),

  // === NEW BEAMS ===
  crossBeam: (d) => createCrossBeam(d.w, d.h, d.d),
  truss: (d) => createTruss(d.w, d.h, d.d),

  // === NEW WALLS ===
  parapet: (d) => new THREE.BoxGeometry(d.w, d.h * 0.5, d.d * 0.25),
  crenellation: (d) => createCrenellation(d.w, d.h, d.d),

  // === TRIANGLES ===
  trianglePrism: (d) => createTrianglePrism(d.w, d.h, d.d),
  triangleRight: (d) => createTriangleRight(d.w, d.h, d.d),
  triangleEqui: (d) => createTriangleEqui(d.w, d.h, d.d),
  tetrahedron: (d) => new THREE.TetrahedronGeometry(Math.min(d.w, d.h, d.d) * 0.6),
  pentahedron: (d) => createPentahedron(d.w, d.h, d.d),

  // === NEW STAIRS ===
  stairsSingle: (d) => new THREE.BoxGeometry(d.w, d.h * 0.25, d.d * 0.5),
  landing: (d) => new THREE.BoxGeometry(d.w, d.h * 0.25, d.d),
  spiralStep: (d) => createSpiralStep(d.w, d.h, d.d),

  // === NEW SHAPES ===
  torus: (d) => new THREE.TorusGeometry(Math.min(d.w, d.d) * 0.35, Math.min(d.w, d.d) * 0.1, 8, 16),
  capsule: (d) => new THREE.CapsuleGeometry(Math.min(d.w, d.d) * 0.3, d.h * 0.5, 4, 8),
  hemisphere: (d) => createHemisphere(d.w, d.h, d.d),
  egg: (d) => createEgg(d.w, d.h, d.d),

  // === NEW ARCHES ===
  gothicArch: (d) => createGothicArch(d.w, d.h, d.d),
  flatArch: (d) => createFlatArch(d.w, d.h, d.d),
  keystone: (d) => createKeystone(d.w, d.h, d.d),

  // === NEW PIPES ===
  downspout: (d) => new THREE.CylinderGeometry(d.w * 0.15, d.w * 0.15, d.h, 8),

  // === NEW DECORATIVE ===
  star: (d) => createStar(d.w, d.h, d.d),
  heart: (d) => createHeart(d.w, d.h, d.d),
  diamond: (d) => new THREE.OctahedronGeometry(Math.min(d.w, d.h, d.d) * 0.5),

  // === NEW DETAILS ===
  cornerTrim: (d) => createCornerTrim(d.w, d.h, d.d),
  edgeTrim: (d) => new THREE.BoxGeometry(d.w, d.h * 0.25, d.d * 0.125),
  moldingX: (d) => createMolding(d.w, d.h * 0.125, d.d * 0.125),
  moldingZ: (d) => createMolding(d.d, d.h * 0.125, d.w * 0.125),
  bracket: (d) => createBracket(d.w, d.h, d.d),

  // === NEW ARCHITECTURAL ===
  finial: (d) => createFinial(d.w, d.h, d.d),
  pediment: (d) => createPediment(d.w, d.h, d.d),
  dentil: (d) => new THREE.BoxGeometry(d.w * 0.2, d.h * 0.25, d.d * 0.5),

  // === COVERS ===
  awning: (d) => createAwning(d.w, d.h, d.d),
  canopy: (d) => new THREE.BoxGeometry(d.w, d.h * 0.125, d.d),
  pergola: (d) => createPergola(d.w, d.h, d.d),
  tarp: (d) => new THREE.PlaneGeometry(d.w, d.d),
  umbrella: (d) => createUmbrella(d.w, d.h, d.d),

  // === NEW FURNITURE ===
  stool: (d) => createStool(d.w, d.h, d.d),
  shelf: (d) => new THREE.BoxGeometry(d.w, d.h * 0.125, d.d * 0.8),
  bed: (d) => createBed(d.w, d.h, d.d),
  desk: (d) => createDesk(d.w, d.h, d.d),

  // === NEW STORAGE ===
  bin: (d) => createBin(d.w, d.h, d.d),
  dumpster: (d) => createDumpster(d.w, d.h, d.d),

  // === NEW INDUSTRIAL ===
  grateFloor: (d) => createGrateFloor(d.w, d.h, d.d),
  ductX: (d) => new THREE.BoxGeometry(d.w, d.h * 0.5, d.d * 0.5),
  ductZ: (d) => new THREE.BoxGeometry(d.w * 0.5, d.h * 0.5, d.d),
  ductCorner: (d) => createDuctCorner(d.w, d.h, d.d),
  hopper: (d) => createHopper(d.w, d.h, d.d),
  conveyor: (d) => createConveyor(d.w, d.h, d.d),

  // === NEW ELECTRICAL ===
  spotlight: (d) => createSpotlight(d.w, d.h, d.d),
  bulb: (d) => new THREE.SphereGeometry(Math.min(d.w, d.d) * 0.3, 8, 6),

  // === NEW NATURAL ===
  stump: (d) => new THREE.CylinderGeometry(d.w * 0.35, d.w * 0.4, d.h * 0.5, 8),
  boulder: (d) => createBoulder(d.w, d.h, d.d),
  grass: (d) => createGrass(d.w, d.h, d.d),
  flower: (d) => createFlower(d.w, d.h, d.d),

  // === ROCK VARIATIONS ===
  rockSmall: (d) => createRockSmall(d.w, d.h, d.d),
  rockLarge: (d) => createRockLarge(d.w, d.h, d.d),
  rockFlat: (d) => createRockFlat(d.w, d.h, d.d),
  rockTall: (d) => createRockTall(d.w, d.h, d.d),
  rockJagged: (d) => createRockJagged(d.w, d.h, d.d),
  rockCluster: (d) => createRockCluster(d.w, d.h, d.d),
  rockPile: (d) => createRockPile(d.w, d.h, d.d),
  pebbles: (d) => createPebbles(d.w, d.h, d.d),
  slate: (d) => createSlate(d.w, d.h, d.d),

  // === CRYSTAL VARIATIONS ===
  crystalSmall: (d) => createCrystalSmall(d.w, d.h, d.d),
  crystalLarge: (d) => createCrystalLarge(d.w, d.h, d.d),
  crystalCluster: (d) => createCrystalCluster(d.w, d.h, d.d),
  crystalSpike: (d) => createCrystalSpike(d.w, d.h, d.d),
  crystalFlat: (d) => createCrystalFlat(d.w, d.h, d.d),
  crystalShard: (d) => createCrystalShard(d.w, d.h, d.d),
  crystalFormation: (d) => createCrystalFormation(d.w, d.h, d.d),

  // === CAVE/NATURE ===
  stalactite: (d) => createStalactite(d.w, d.h, d.d),
  stalagmite: (d) => createStalagmite(d.w, d.h, d.d),
  mushroom: (d) => createMushroom(d.w, d.h, d.d),
  mushroomCluster: (d) => createMushroomCluster(d.w, d.h, d.d),
  moss: (d) => createMoss(d.w, d.h, d.d),
  vine: (d) => createVineBlock(d.w, d.h, d.d),
  coral: (d) => createCoral(d.w, d.h, d.d),

  // === NEW MODERN ===
  trafficCone: (d) => new THREE.ConeGeometry(d.w * 0.3, d.h * 0.75, 8),
  sign: (d) => createSign(d.w, d.h, d.d),
  monitor: (d) => createMonitor(d.w, d.h, d.d),
  speaker: (d) => createSpeaker(d.w, d.h, d.d),

  // === NEW EXTRA SHAPES ===
  gem: (d) => createGem(d.w, d.h, d.d),
  crystal: (d) => createCrystal(d.w, d.h, d.d),
  pill: (d) => new THREE.CapsuleGeometry(Math.min(d.w, d.d) * 0.25, d.h * 0.25, 4, 8),

  // === NEW RAMPS ===
  rampStraight: (d) => createWedge(d.w, d.h, d.d, 1.0),
  rampWide: (d) => createWedge(d.w * 2, d.h, d.d, 1.0),

  // === NEW ROOFS ===
  roofCorner: (d) => createRoofCorner(d.w, d.h, d.d),
  roofValley: (d) => createRoofValley(d.w, d.h, d.d),
  gable: (d) => createGable(d.w, d.h, d.d),

  // === NEW CHANNELS ===
  drain: (d) => createDrain(d.w, d.h, d.d),
  grate: (d) => createGrate(d.w, d.h, d.d),

  // === NEW MEDIEVAL ===
  shield: (d) => createShield(d.w, d.h, d.d),
  banner: (d) => createBanner(d.w, d.h, d.d),
  portcullis: (d) => createPortcullis(d.w, d.h, d.d),

  // === VEHICLES ===
  wheel: (d) => new THREE.TorusGeometry(Math.min(d.w, d.d) * 0.4, Math.min(d.w, d.d) * 0.1, 8, 16),
  axle: (d) => new THREE.CylinderGeometry(d.w * 0.05, d.w * 0.05, d.d, 8),
  seat: (d) => createSeat(d.w, d.h, d.d),
  hull: (d) => createHull(d.w, d.h, d.d),
  propeller: (d) => createPropeller(d.w, d.h, d.d),
  wing: (d) => createWing(d.w, d.h, d.d),

  // === OIL & GAS ===
  derrickLeg: (d) => createDerrickLeg(d.w, d.h, d.d),
  derrickCross: (d) => createDerrickCross(d.w, d.h, d.d),
  derrickPlatform: (d) => createDerrickPlatform(d.w, d.h, d.d),
  pumpJack: (d) => createPumpJack(d.w, d.h, d.d),
  pumpBase: (d) => new THREE.BoxGeometry(d.w * 0.8, d.h * 0.25, d.d * 0.6),
  oilTank: (d) => createOilTank(d.w, d.h, d.d),
  oilTankSmall: (d) => createOilTankSmall(d.w, d.h, d.d),
  wellHead: (d) => createWellHead(d.w, d.h, d.d),
  pipelineX: (d) => new THREE.CylinderGeometry(d.h * 0.3, d.h * 0.3, d.w, 12).rotateZ(Math.PI / 2),
  pipelineZ: (d) => new THREE.CylinderGeometry(d.h * 0.3, d.h * 0.3, d.d, 12).rotateX(Math.PI / 2),
  oilBarrel: (d) => createOilBarrel(d.w, d.h, d.d),
};

// Helper: Create wedge/ramp geometry with material groups for per-face painting
// Face order matches BoxGeometry: east(+X), west(-X), top(+Y), bottom(-Y), south(+Z), north(-Z)
function createWedge(w, h, d, slope = 1.0) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  // Organize vertices by face direction for consistent material mapping
  const vertices = new Float32Array([
    // East face (+X) - right side triangle (3 verts)
    hw, -hh, hd,   hw, -hh, -hd,   hw, hh, -hd,
    // West face (-X) - left side triangle (3 verts)
    -hw, -hh, -hd,   -hw, -hh, hd,   -hw, hh, -hd,
    // Top face (+Y) - empty for wedge, add degenerate triangle (3 verts)
    0, hh, 0,   0, hh, 0,   0, hh, 0,
    // Bottom face (-Y) - 2 triangles (6 verts)
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh, hd,
    -hw, -hh, -hd,   hw, -hh, hd,   -hw, -hh, hd,
    // South face (+Z) - slope face, 2 triangles (6 verts)
    -hw, -hh, hd,   hw, -hh, hd,   hw, hh, -hd,
    -hw, -hh, hd,   hw, hh, -hd,   -hw, hh, -hd,
    // North face (-Z) - back (tall side), 2 triangles (6 verts)
    -hw, -hh, -hd,   -hw, hh, -hd,   hw, -hh, -hd,
    hw, -hh, -hd,   -hw, hh, -hd,   hw, hh, -hd,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  // Add material groups: [startIndex, count, materialIndex]
  // Matches FACE_DIRECTIONS order: east, west, top, bottom, south, north
  geo.addGroup(0, 3, 0);    // East (1 tri)
  geo.addGroup(3, 3, 1);    // West (1 tri)
  geo.addGroup(6, 3, 2);    // Top (degenerate)
  geo.addGroup(9, 6, 3);    // Bottom (2 tris)
  geo.addGroup(15, 6, 4);   // South/slope (2 tris)
  geo.addGroup(21, 6, 5);   // North/back (2 tris)

  geo.computeVertexNormals();
  return geo;
}

// Helper: Create inverted wedge (upper slab counterpart - slope goes down)
// Face order matches BoxGeometry: east(+X), west(-X), top(+Y), bottom(-Y), south(+Z), north(-Z)
function createWedgeTop(w, h, d, slope = 1.0) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  // Organize vertices by face direction for consistent material mapping
  const vertices = new Float32Array([
    // East face (+X) - right side triangle (3 verts)
    hw, hh, hd,   hw, -hh, hd,   hw, hh, -hd,
    // West face (-X) - left side triangle (3 verts)
    -hw, hh, -hd,   -hw, hh, hd,   -hw, -hh, hd,
    // Top face (+Y) - 2 triangles (6 verts)
    -hw, hh, -hd,   hw, hh, hd,   hw, hh, -hd,
    -hw, hh, -hd,   -hw, hh, hd,   hw, hh, hd,
    // Bottom face (-Y) - degenerate for inverted wedge (3 verts)
    0, -hh, 0,   0, -hh, 0,   0, -hh, 0,
    // South face (+Z) - front (tall side), 2 triangles (6 verts)
    -hw, -hh, hd,   hw, -hh, hd,   hw, hh, hd,
    -hw, -hh, hd,   hw, hh, hd,   -hw, hh, hd,
    // North face (-Z) - slope face, 2 triangles (6 verts)
    -hw, hh, -hd,   -hw, -hh, hd,   hw, -hh, hd,
    -hw, hh, -hd,   hw, -hh, hd,   hw, hh, -hd,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  // Add material groups: [startIndex, count, materialIndex]
  // Matches FACE_DIRECTIONS order: east, west, top, bottom, south, north
  geo.addGroup(0, 3, 0);    // East (1 tri)
  geo.addGroup(3, 3, 1);    // West (1 tri)
  geo.addGroup(6, 6, 2);    // Top (2 tris)
  geo.addGroup(12, 3, 3);   // Bottom (degenerate)
  geo.addGroup(15, 6, 4);   // South/front (2 tris)
  geo.addGroup(21, 6, 5);   // North/slope (2 tris)

  geo.computeVertexNormals();
  return geo;
}

// Helper: Create corner wedge (pyramid-like)
// Face order matches BoxGeometry: east(+X), west(-X), top(+Y), bottom(-Y), south(+Z), north(-Z)
function createCornerWedge(w, h, d) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  // Organize vertices by face direction for consistent material mapping
  const vertices = new Float32Array([
    // East face (+X) - right face triangle (3 verts)
    hw, -hh, -hd,   hw, hh, -hd,   hw, -hh, hd,
    // West face (-X) - degenerate (3 verts)
    0, 0, 0,   0, 0, 0,   0, 0, 0,
    // Top face (+Y) - degenerate (3 verts)
    0, hh, 0,   0, hh, 0,   0, hh, 0,
    // Bottom face (-Y) - 2 triangles (6 verts)
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh, hd,
    -hw, -hh, -hd,   hw, -hh, hd,   -hw, -hh, hd,
    // South face (+Z) - slope diagonal, 2 triangles (6 verts)
    -hw, -hh, -hd,   -hw, -hh, hd,   hw, hh, -hd,
    -hw, -hh, hd,   hw, -hh, hd,   hw, hh, -hd,
    // North face (-Z) - back triangle (3 verts)
    -hw, -hh, -hd,   hw, hh, -hd,   hw, -hh, -hd,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  // Add material groups: [startIndex, count, materialIndex]
  // Matches FACE_DIRECTIONS order: east, west, top, bottom, south, north
  geo.addGroup(0, 3, 0);    // East (1 tri)
  geo.addGroup(3, 3, 1);    // West (degenerate)
  geo.addGroup(6, 3, 2);    // Top (degenerate)
  geo.addGroup(9, 6, 3);    // Bottom (2 tris)
  geo.addGroup(15, 6, 4);   // South/slope (2 tris)
  geo.addGroup(21, 3, 5);   // North/back (1 tri)

  geo.computeVertexNormals();
  return geo;
}

// Helper: Create stairs with N steps
function createStairs(w, h, d, numSteps) {
  const stepHeight = h / numSteps;
  const stepDepth = d / numSteps;
  const geometries = [];

  for (let i = 0; i < numSteps; i++) {
    const stepH = stepHeight * (i + 1);
    const stepGeo = new THREE.BoxGeometry(w, stepH, stepDepth);

    // Position: back steps are taller, front steps are shorter
    const yOffset = (stepH / 2) - (h / 2);
    const zOffset = (d / 2) - (stepDepth / 2) - (i * stepDepth);

    stepGeo.translate(0, yOffset, zOffset);
    geometries.push(stepGeo);
  }

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());

  return merged;
}

// Helper: Safely merge geometries by normalizing attributes
function safeMergeGeometries(geometries) {
  if (!geometries || geometries.length === 0) {
    return new THREE.BoxGeometry(1, 1, 1); // Fallback
  }

  try {
    // Convert all to non-indexed and ensure consistent attributes
    const normalized = geometries.map(g => {
      if (!g) return new THREE.BoxGeometry(0.1, 0.1, 0.1).toNonIndexed();

      // Convert to non-indexed
      let geo = g.index ? g.toNonIndexed() : g.clone();

      // Ensure uv attribute exists (some geometries might not have it)
      if (!geo.attributes.uv) {
        const posCount = geo.attributes.position.count;
        const uvArray = new Float32Array(posCount * 2);
        geo.setAttribute('uv', new THREE.BufferAttribute(uvArray, 2));
      }

      return geo;
    });

    const merged = mergeGeometries(normalized);
    normalized.forEach(g => g.dispose());

    if (!merged) {
      console.warn('mergeGeometries returned null, using fallback');
      return new THREE.BoxGeometry(1, 1, 1);
    }

    return merged;
  } catch (e) {
    console.warn('safeMergeGeometries error:', e);
    return new THREE.BoxGeometry(1, 1, 1); // Fallback
  }
}

// Helper: Create arch (doorway/window arch shape)
function createArch(w, h, d, archRatio = 1.0) {
  const thickness = w * 0.15; // Wall thickness

  // Outer arch - spans full width
  const outerArchRadius = w / 2;
  const outerArchHeight = outerArchRadius * archRatio;
  // Clamp arch height so pillars have some height
  const clampedOuterArchHeight = Math.min(outerArchHeight, h * 0.8);
  const pillarHeight = h - clampedOuterArchHeight;

  // Inner arch - smaller by thickness on each side
  const innerW = w - thickness * 2;
  const innerArchRadius = innerW / 2;
  // Inner arch is also shorter vertically by thickness
  const innerArchHeight = Math.max(0, clampedOuterArchHeight - thickness);

  // Create 2D arch profile shape
  const shape = new THREE.Shape();
  const segments = 12;

  // Start bottom left outside
  shape.moveTo(-w / 2, -h / 2);
  // Go up left side
  shape.lineTo(-w / 2, -h / 2 + pillarHeight);

  // Draw outer arch curve (left to right) - semicircle
  for (let i = 0; i <= segments; i++) {
    const angle = Math.PI - (i / segments) * Math.PI;
    const x = Math.cos(angle) * outerArchRadius;
    const y = -h / 2 + pillarHeight + Math.sin(angle) * clampedOuterArchHeight;
    shape.lineTo(x, y);
  }

  // Go down right side
  shape.lineTo(w / 2, -h / 2);
  // Close the shape
  shape.lineTo(-w / 2, -h / 2);

  // Create hole (inner arch) - only if there's room
  if (innerW > 0 && innerArchHeight > 0) {
    const hole = new THREE.Path();

    // Start bottom left inside
    hole.moveTo(-innerArchRadius, -h / 2);
    // Go up left side
    hole.lineTo(-innerArchRadius, -h / 2 + pillarHeight);

    // Draw inner arch curve
    for (let i = 0; i <= segments; i++) {
      const angle = Math.PI - (i / segments) * Math.PI;
      const x = Math.cos(angle) * innerArchRadius;
      const y = -h / 2 + pillarHeight + Math.sin(angle) * innerArchHeight;
      hole.lineTo(x, y);
    }

    // Go down right side and close
    hole.lineTo(innerArchRadius, -h / 2);
    hole.lineTo(-innerArchRadius, -h / 2);

    shape.holes.push(hole);
  }

  // Extrude the shape
  const extrudeSettings = {
    steps: 1,
    depth: d,
    bevelEnabled: false
  };

  const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geo.translate(0, 0, -d / 2);

  return geo;
}

// Helper: Create cross/plus shape
function createCross(w, h, d) {
  const armWidth = w / 3;
  const geometries = [];

  // Vertical arm (along X)
  const armX = new THREE.BoxGeometry(w, h, armWidth);
  geometries.push(armX);

  // Horizontal arm (along Z)
  const armZ = new THREE.BoxGeometry(armWidth, h, d);
  geometries.push(armZ);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());

  return merged;
}

// Helper: Create frame/border (hollow rectangle)
function createFrame(w, h, d) {
  const thickness = Math.min(w, d) / 8;
  const geometries = [];

  // Top bar
  const top = new THREE.BoxGeometry(w, thickness, d);
  top.translate(0, (h - thickness) / 2, 0);
  geometries.push(top);

  // Bottom bar
  const bottom = new THREE.BoxGeometry(w, thickness, d);
  bottom.translate(0, -(h - thickness) / 2, 0);
  geometries.push(bottom);

  // Left bar
  const left = new THREE.BoxGeometry(thickness, h - thickness * 2, d);
  left.translate(-(w - thickness) / 2, 0, 0);
  geometries.push(left);

  // Right bar
  const right = new THREE.BoxGeometry(thickness, h - thickness * 2, d);
  right.translate((w - thickness) / 2, 0, 0);
  geometries.push(right);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());

  return merged;
}

// Helper: Create fence (vertical bars)
function createFence(w, h, d) {
  const barWidth = w / 16;
  const barSpacing = w / 4;
  const geometries = [];

  // Top rail
  const topRail = new THREE.BoxGeometry(w, h / 8, d / 4);
  topRail.translate(0, h * 0.375, 0);
  geometries.push(topRail);

  // Bottom rail
  const bottomRail = new THREE.BoxGeometry(w, h / 8, d / 4);
  bottomRail.translate(0, -h * 0.125, 0);
  geometries.push(bottomRail);

  // Vertical bars
  const numBars = Math.floor(w / barSpacing) + 1;
  for (let i = 0; i < numBars; i++) {
    const x = -w / 2 + barWidth / 2 + i * barSpacing;
    if (x > w / 2 - barWidth / 2) break;

    const bar = new THREE.BoxGeometry(barWidth, h, d / 4);
    bar.translate(x, 0, 0);
    geometries.push(bar);
  }

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());

  return merged;
}

// Fence along Z axis
function createFenceZ(w, h, d) {
  const barWidth = d / 16;
  const barSpacing = d / 4;
  const geometries = [];

  // Top rail
  const topRail = new THREE.BoxGeometry(w / 4, h / 8, d);
  topRail.translate(0, h * 0.375, 0);
  geometries.push(topRail);

  // Bottom rail
  const bottomRail = new THREE.BoxGeometry(w / 4, h / 8, d);
  bottomRail.translate(0, -h * 0.125, 0);
  geometries.push(bottomRail);

  // Vertical bars
  const numBars = Math.floor(d / barSpacing) + 1;
  for (let i = 0; i < numBars; i++) {
    const z = -d / 2 + barWidth / 2 + i * barSpacing;
    if (z > d / 2 - barWidth / 2) break;

    const bar = new THREE.BoxGeometry(w / 4, h, barWidth);
    bar.translate(0, 0, z);
    geometries.push(bar);
  }

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Simple railing (top rail + posts at ends) along X
function createRailing(w, h, d) {
  const geometries = [];
  const postSize = w / 10;

  // Top rail
  const rail = new THREE.BoxGeometry(w, h / 6, d / 4);
  rail.translate(0, h * 0.4, 0);
  geometries.push(rail);

  // Left post
  const leftPost = new THREE.BoxGeometry(postSize, h, postSize);
  leftPost.translate(-w / 2 + postSize / 2, 0, 0);
  geometries.push(leftPost);

  // Right post
  const rightPost = new THREE.BoxGeometry(postSize, h, postSize);
  rightPost.translate(w / 2 - postSize / 2, 0, 0);
  geometries.push(rightPost);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Simple railing along Z
function createRailingZ(w, h, d) {
  const geometries = [];
  const postSize = d / 10;

  // Top rail
  const rail = new THREE.BoxGeometry(w / 4, h / 6, d);
  rail.translate(0, h * 0.4, 0);
  geometries.push(rail);

  // Front post
  const frontPost = new THREE.BoxGeometry(postSize, h, postSize);
  frontPost.translate(0, 0, -d / 2 + postSize / 2);
  geometries.push(frontPost);

  // Back post
  const backPost = new THREE.BoxGeometry(postSize, h, postSize);
  backPost.translate(0, 0, d / 2 - postSize / 2);
  geometries.push(backPost);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Fence corner (outer corner where two fences meet)
function createFenceCorner(w, h, d) {
  const barWidth = Math.min(w, d) / 16;
  const geometries = [];

  // Top rail X
  const topRailX = new THREE.BoxGeometry(w / 2, h / 8, d / 4);
  topRailX.translate(w / 4, h * 0.375, 0);
  geometries.push(topRailX);

  // Top rail Z
  const topRailZ = new THREE.BoxGeometry(w / 4, h / 8, d / 2);
  topRailZ.translate(0, h * 0.375, d / 4);
  geometries.push(topRailZ);

  // Corner post
  const post = new THREE.BoxGeometry(barWidth * 2, h, barWidth * 2);
  geometries.push(post);

  return safeMergeGeometries(geometries);
}

function createFenceCornerInner(w, h, d) {
  const barWidth = Math.min(w, d) / 16;
  const geometries = [];

  // Top rail X (from center to -X)
  const topRailX = new THREE.BoxGeometry(w / 2, h / 8, d / 4);
  topRailX.translate(-w / 4, h * 0.375, 0);
  geometries.push(topRailX);

  // Top rail Z (from center to -Z)
  const topRailZ = new THREE.BoxGeometry(w / 4, h / 8, d / 2);
  topRailZ.translate(0, h * 0.375, -d / 4);
  geometries.push(topRailZ);

  // Corner post
  const post = new THREE.BoxGeometry(barWidth * 2, h, barWidth * 2);
  geometries.push(post);

  return safeMergeGeometries(geometries);
}

function createFencePost(w, h, d) {
  const postSize = Math.min(w, d) / 4;
  return new THREE.BoxGeometry(postSize, h, postSize);
}

function createFenceEnd(w, h, d) {
  const barWidth = w / 16;
  const geometries = [];

  // Top rail (half length)
  const topRail = new THREE.BoxGeometry(w / 2, h / 8, d / 4);
  topRail.translate(-w / 4, h * 0.375, 0);
  geometries.push(topRail);

  // End post
  const post = new THREE.BoxGeometry(barWidth * 2, h, barWidth * 2);
  geometries.push(post);

  return safeMergeGeometries(geometries);
}

function createFenceT(w, h, d) {
  const barWidth = Math.min(w, d) / 16;
  const geometries = [];

  // Full X rail
  const railX = new THREE.BoxGeometry(w, h / 8, d / 4);
  railX.translate(0, h * 0.375, 0);
  geometries.push(railX);

  // Z rail (half)
  const railZ = new THREE.BoxGeometry(w / 4, h / 8, d / 2);
  railZ.translate(0, h * 0.375, d / 4);
  geometries.push(railZ);

  // Center post
  const post = new THREE.BoxGeometry(barWidth * 2, h, barWidth * 2);
  geometries.push(post);

  return safeMergeGeometries(geometries);
}

function createFenceCross(w, h, d) {
  const barWidth = Math.min(w, d) / 16;
  const geometries = [];

  // Full X rail
  const railX = new THREE.BoxGeometry(w, h / 8, d / 4);
  railX.translate(0, h * 0.375, 0);
  geometries.push(railX);

  // Full Z rail
  const railZ = new THREE.BoxGeometry(w / 4, h / 8, d);
  railZ.translate(0, h * 0.375, 0);
  geometries.push(railZ);

  // Center post
  const post = new THREE.BoxGeometry(barWidth * 2, h, barWidth * 2);
  geometries.push(post);

  return safeMergeGeometries(geometries);
}

function createGate(w, h, d) {
  const frameWidth = w / 10;
  const geometries = [];

  // Left frame
  geometries.push(new THREE.BoxGeometry(frameWidth, h, d / 4).translate(-w / 2 + frameWidth / 2, 0, 0));
  // Right frame
  geometries.push(new THREE.BoxGeometry(frameWidth, h, d / 4).translate(w / 2 - frameWidth / 2, 0, 0));
  // Top frame
  geometries.push(new THREE.BoxGeometry(w - frameWidth * 2, frameWidth, d / 4).translate(0, h / 2 - frameWidth / 2, 0));
  // Bottom frame
  geometries.push(new THREE.BoxGeometry(w - frameWidth * 2, frameWidth, d / 4).translate(0, -h / 2 + frameWidth / 2, 0));
  // Cross bar
  geometries.push(new THREE.BoxGeometry(w - frameWidth * 2, frameWidth / 2, d / 8).translate(0, 0, 0));

  return safeMergeGeometries(geometries);
}

function createGateOpen(w, h, d) {
  const frameWidth = w / 10;
  const geometries = [];

  // Left frame (gate hinged here)
  geometries.push(new THREE.BoxGeometry(frameWidth, h, d / 4).translate(-w / 2 + frameWidth / 2, 0, 0));
  // Gate panel (rotated open 90 degrees along Z axis)
  geometries.push(new THREE.BoxGeometry(w - frameWidth, h, d / 4).translate(-w / 2 + frameWidth + (w - frameWidth) / 2, 0, -d / 2 + d / 8));

  return safeMergeGeometries(geometries);
}

function createGateDouble(w, h, d) {
  const frameWidth = w / 12;
  const geometries = [];

  // Left frame
  geometries.push(new THREE.BoxGeometry(frameWidth, h, d / 4).translate(-w / 2 + frameWidth / 2, 0, 0));
  // Right frame
  geometries.push(new THREE.BoxGeometry(frameWidth, h, d / 4).translate(w / 2 - frameWidth / 2, 0, 0));
  // Center meeting point
  geometries.push(new THREE.BoxGeometry(frameWidth / 2, h, d / 4).translate(0, 0, 0));
  // Top frame
  geometries.push(new THREE.BoxGeometry(w, frameWidth, d / 4).translate(0, h / 2 - frameWidth / 2, 0));

  return safeMergeGeometries(geometries);
}

function createGateArch(w, h, d) {
  const frameWidth = w / 10;
  const geometries = [];

  // Left frame
  geometries.push(new THREE.BoxGeometry(frameWidth, h * 0.7, d / 4).translate(-w / 2 + frameWidth / 2, -h * 0.15, 0));
  // Right frame
  geometries.push(new THREE.BoxGeometry(frameWidth, h * 0.7, d / 4).translate(w / 2 - frameWidth / 2, -h * 0.15, 0));
  // Arch top (simplified as curved segments)
  const archGeom = new THREE.TorusGeometry((w - frameWidth) / 2, frameWidth / 2, 4, 8, Math.PI);
  archGeom.rotateX(Math.PI / 2);
  archGeom.translate(0, h * 0.2, 0);
  geometries.push(archGeom);

  return safeMergeGeometries(geometries);
}

function createRailingCorner(w, h, d) {
  const postSize = Math.min(w, d) / 10;
  const geometries = [];

  // Rail X
  geometries.push(new THREE.BoxGeometry(w / 2, h / 6, d / 4).translate(w / 4, h * 0.4, 0));
  // Rail Z
  geometries.push(new THREE.BoxGeometry(w / 4, h / 6, d / 2).translate(0, h * 0.4, d / 4));
  // Corner post
  geometries.push(new THREE.BoxGeometry(postSize, h, postSize));

  return safeMergeGeometries(geometries);
}

function createRailingCornerInner(w, h, d) {
  const postSize = Math.min(w, d) / 10;
  const geometries = [];

  // Rail X
  geometries.push(new THREE.BoxGeometry(w / 2, h / 6, d / 4).translate(-w / 4, h * 0.4, 0));
  // Rail Z
  geometries.push(new THREE.BoxGeometry(w / 4, h / 6, d / 2).translate(0, h * 0.4, -d / 4));
  // Corner post
  geometries.push(new THREE.BoxGeometry(postSize, h, postSize));

  return safeMergeGeometries(geometries);
}

function createRailingPost(w, h, d) {
  const postSize = Math.min(w, d) / 6;
  const geometries = [];

  // Post
  geometries.push(new THREE.BoxGeometry(postSize, h, postSize));
  // Cap
  geometries.push(new THREE.BoxGeometry(postSize * 1.5, h / 10, postSize * 1.5).translate(0, h / 2 + h / 20, 0));

  return safeMergeGeometries(geometries);
}

function createRailingEnd(w, h, d) {
  const postSize = w / 10;
  const geometries = [];

  // Rail (half)
  geometries.push(new THREE.BoxGeometry(w / 2, h / 6, d / 4).translate(-w / 4, h * 0.4, 0));
  // End post
  geometries.push(new THREE.BoxGeometry(postSize, h, postSize));

  return safeMergeGeometries(geometries);
}

function createRailingSlope(w, h, d) {
  const postSize = w / 10;
  const geometries = [];

  // Sloped rail
  const rail = new THREE.BoxGeometry(w * 1.1, h / 6, d / 4);
  rail.rotateZ(Math.atan2(h * 0.3, w));
  geometries.push(rail);

  // Left post (lower)
  geometries.push(new THREE.BoxGeometry(postSize, h * 0.7, postSize).translate(-w / 2 + postSize / 2, -h * 0.15, 0));
  // Right post (higher)
  geometries.push(new THREE.BoxGeometry(postSize, h, postSize).translate(w / 2 - postSize / 2, 0, 0));

  return safeMergeGeometries(geometries);
}

function createRailingSlopeZ(w, h, d) {
  const postSize = d / 10;
  const geometries = [];

  // Sloped rail
  const rail = new THREE.BoxGeometry(w / 4, h / 6, d * 1.1);
  rail.rotateX(-Math.atan2(h * 0.3, d));
  geometries.push(rail);

  // Front post (lower)
  geometries.push(new THREE.BoxGeometry(postSize, h * 0.7, postSize).translate(0, -h * 0.15, -d / 2 + postSize / 2));
  // Back post (higher)
  geometries.push(new THREE.BoxGeometry(postSize, h, postSize).translate(0, 0, d / 2 - postSize / 2));

  return safeMergeGeometries(geometries);
}

function createPicket(w, h, d) {
  const picketWidth = w / 8;
  const spacing = w / 4;
  const geometries = [];

  const numPickets = Math.floor(w / spacing) + 1;
  for (let i = 0; i < numPickets; i++) {
    const x = -w / 2 + picketWidth / 2 + i * spacing;
    if (x > w / 2 - picketWidth / 2) break;
    // Pointed top picket
    const picket = new THREE.BoxGeometry(picketWidth, h * 0.9, d / 4);
    picket.translate(x, -h * 0.05, 0);
    geometries.push(picket);
    // Point
    const point = new THREE.ConeGeometry(picketWidth / 2, h * 0.15, 4);
    point.translate(x, h * 0.425, 0);
    geometries.push(point);
  }

  return safeMergeGeometries(geometries);
}

function createPicketZ(w, h, d) {
  const picketWidth = d / 8;
  const spacing = d / 4;
  const geometries = [];

  const numPickets = Math.floor(d / spacing) + 1;
  for (let i = 0; i < numPickets; i++) {
    const z = -d / 2 + picketWidth / 2 + i * spacing;
    if (z > d / 2 - picketWidth / 2) break;
    const picket = new THREE.BoxGeometry(w / 4, h * 0.9, picketWidth);
    picket.translate(0, -h * 0.05, z);
    geometries.push(picket);
    const point = new THREE.ConeGeometry(picketWidth / 2, h * 0.15, 4);
    point.translate(0, h * 0.425, z);
    geometries.push(point);
  }

  return safeMergeGeometries(geometries);
}

function createLattice(w, h, d) {
  const barWidth = w / 20;
  const spacing = w / 6;
  const geometries = [];

  // Diagonal bars one way
  for (let i = -2; i <= 2; i++) {
    const bar = new THREE.BoxGeometry(barWidth, h * 1.4, d / 8);
    bar.rotateZ(Math.PI / 4);
    bar.translate(i * spacing * 0.7, 0, 0);
    geometries.push(bar);
  }
  // Diagonal bars other way
  for (let i = -2; i <= 2; i++) {
    const bar = new THREE.BoxGeometry(barWidth, h * 1.4, d / 8);
    bar.rotateZ(-Math.PI / 4);
    bar.translate(i * spacing * 0.7, 0, 0);
    geometries.push(bar);
  }
  // Frame
  geometries.push(new THREE.BoxGeometry(w, barWidth * 2, d / 8).translate(0, h / 2 - barWidth, 0));
  geometries.push(new THREE.BoxGeometry(w, barWidth * 2, d / 8).translate(0, -h / 2 + barWidth, 0));

  return safeMergeGeometries(geometries);
}

function createLatticeZ(w, h, d) {
  const barWidth = d / 20;
  const spacing = d / 6;
  const geometries = [];

  for (let i = -2; i <= 2; i++) {
    const bar = new THREE.BoxGeometry(w / 8, h * 1.4, barWidth);
    bar.rotateX(Math.PI / 4);
    bar.translate(0, 0, i * spacing * 0.7);
    geometries.push(bar);
  }
  for (let i = -2; i <= 2; i++) {
    const bar = new THREE.BoxGeometry(w / 8, h * 1.4, barWidth);
    bar.rotateX(-Math.PI / 4);
    bar.translate(0, 0, i * spacing * 0.7);
    geometries.push(bar);
  }
  geometries.push(new THREE.BoxGeometry(w / 8, barWidth * 2, d).translate(0, h / 2 - barWidth, 0));
  geometries.push(new THREE.BoxGeometry(w / 8, barWidth * 2, d).translate(0, -h / 2 + barWidth, 0));

  return safeMergeGeometries(geometries);
}

// Edge connector blocks
function createEdgeCorner(w, h, d) {
  const size = Math.min(w, d) / 4;
  const geometries = [];

  geometries.push(new THREE.BoxGeometry(w / 2, h * 0.25, size).translate(w / 4, 0, -d / 2 + size / 2));
  geometries.push(new THREE.BoxGeometry(size, h * 0.25, d / 2).translate(-w / 2 + size / 2, 0, d / 4));

  return safeMergeGeometries(geometries);
}

function createEdgeSlope(w, h, d) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, h * 0.25);
  shape.lineTo(w / 2, 0);
  shape.lineTo(-w / 2, 0);

  const extrudeSettings = { steps: 1, depth: d / 4, bevelEnabled: false };
  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.translate(0, -h * 0.125, -d / 8);

  return geom;
}

function createEdgeSlopeZ(w, h, d) {
  const shape = new THREE.Shape();
  shape.moveTo(-d / 2, 0);
  shape.lineTo(d / 2, h * 0.25);
  shape.lineTo(d / 2, 0);
  shape.lineTo(-d / 2, 0);

  const extrudeSettings = { steps: 1, depth: w / 4, bevelEnabled: false };
  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.rotateY(Math.PI / 2);
  geom.translate(-w / 8, -h * 0.125, 0);

  return geom;
}

function createMoldingCorner(w, h, d) {
  const size = Math.min(w, d) / 4;
  const geometries = [];

  geometries.push(new THREE.BoxGeometry(w / 2, h * 0.125, size / 2).translate(w / 4, 0, -d / 2 + size / 4));
  geometries.push(new THREE.BoxGeometry(size / 2, h * 0.125, d / 2).translate(-w / 2 + size / 4, 0, d / 4));

  return safeMergeGeometries(geometries);
}

function createTrim(w, h, d) {
  return new THREE.BoxGeometry(w, h * 0.125, d / 8);
}

function createTrimZ(w, h, d) {
  return new THREE.BoxGeometry(w / 8, h * 0.125, d);
}

function createTrimCorner(w, h, d) {
  const geometries = [];
  geometries.push(new THREE.BoxGeometry(w / 2, h * 0.125, d / 8).translate(w / 4, 0, -d / 2 + d / 16));
  geometries.push(new THREE.BoxGeometry(w / 8, h * 0.125, d / 2).translate(-w / 2 + w / 16, 0, d / 4));

  return safeMergeGeometries(geometries);
}

// Pipe in specified direction
function createPipe(w, h, d, axis) {
  const radius = Math.min(w, h, d) / 4;
  const segments = 8;

  switch (axis) {
    case 'X':
      return new THREE.CylinderGeometry(radius, radius, w, segments)
        .rotateZ(Math.PI / 2);
    case 'Y':
      return new THREE.CylinderGeometry(radius, radius, h, segments);
    case 'Z':
      return new THREE.CylinderGeometry(radius, radius, d, segments)
        .rotateX(Math.PI / 2);
    default:
      return new THREE.CylinderGeometry(radius, radius, h, segments);
  }
}

// Unified pipe elbow function for all planes
// plane: 'XZ' (horizontal), 'XY' (vertical X to Y), 'YZ' (vertical Y to Z)
// variant: different corner orientations within each plane
function createPipeElbow(w, h, d, plane, variant) {
  const size = Math.min(w, h, d);
  const tubeRadius = size / 4;
  const bendRadius = size / 2;
  const tubularSegments = 12;
  const radialSegments = 8;

  // Create 90-degree torus arc (starts in XY plane, +X to +Y)
  const torus = new THREE.TorusGeometry(bendRadius, tubeRadius, radialSegments, tubularSegments, Math.PI / 2);

  if (plane === 'XZ') {
    // Horizontal elbow in XZ plane
    torus.rotateX(Math.PI / 2); // Lay flat
    // Rotate for different corners
    const angles = [Math.PI, -Math.PI / 2, 0, Math.PI / 2];
    torus.rotateY(angles[variant] || 0);
  } else if (plane === 'XY') {
    // Vertical elbow connecting X and Y axes
    // Default connects +X to +Y, variant 1 connects -X to +Y
    if (variant === 1) {
      torus.rotateY(Math.PI); // Flip to connect -X to +Y
    }
  } else if (plane === 'YZ') {
    // Vertical elbow connecting Y and Z axes
    torus.rotateY(Math.PI / 2); // Rotate to YZ plane
    if (variant === 1) {
      torus.rotateY(Math.PI); // Flip for -Z direction
    }
  }

  return torus;
}

// Pipe elbow in XZ plane (horizontal) - 4 corner variants
// variant: 0 = -X to -Z, 1 = +X to -Z, 2 = +X to +Z, 3 = -X to +Z
function createPipeElbowXZ(w, h, d, variant) {
  return createPipeElbow(w, h, d, 'XZ', variant);
}

// Pipe cross (4-way intersection)
function createPipeCross(w, h, d) {
  const radius = Math.min(w, h, d) / 4;
  const segments = 8;
  const geometries = [];

  // Horizontal pipe along X
  const pipeX = new THREE.CylinderGeometry(radius, radius, w, segments);
  pipeX.rotateZ(Math.PI / 2);
  geometries.push(pipeX);

  // Horizontal pipe along Z
  const pipeZ = new THREE.CylinderGeometry(radius, radius, d, segments);
  pipeZ.rotateX(Math.PI / 2);
  geometries.push(pipeZ);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Pipe T-junction
// T-junction in XZ plane (horizontal T)
function createPipeT(w, h, d) {
  const radius = Math.min(w, h, d) / 4;
  const segments = 8;
  const geometries = [];

  // Main pipe along X
  const pipeX = new THREE.CylinderGeometry(radius, radius, w, segments);
  pipeX.rotateZ(Math.PI / 2);
  geometries.push(pipeX);

  // Branch pipe along Z (only half, in +Z direction)
  const pipeZ = new THREE.CylinderGeometry(radius, radius, d / 2, segments);
  pipeZ.rotateX(Math.PI / 2);
  pipeZ.translate(0, 0, d / 4);
  geometries.push(pipeZ);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// T-junction with vertical branch (pipe along X with Y branch going up)
function createPipeTY(w, h, d) {
  const radius = Math.min(w, h, d) / 4;
  const segments = 8;
  const geometries = [];

  // Main pipe along X
  const pipeX = new THREE.CylinderGeometry(radius, radius, w, segments);
  pipeX.rotateZ(Math.PI / 2);
  geometries.push(pipeX);

  // Branch pipe along Y (only half, going up)
  const pipeY = new THREE.CylinderGeometry(radius, radius, h / 2, segments);
  pipeY.translate(0, h / 4, 0);
  geometries.push(pipeY);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// =====================
// ARCHITECTURAL BLOCKS
// =====================

function createCornice(w, h, d) {
  const geometries = [];
  // Main horizontal piece
  const main = new THREE.BoxGeometry(w, h * 0.5, d * 0.6);
  main.translate(0, h * 0.25, d * 0.2);
  geometries.push(main);
  // Overhang
  const overhang = new THREE.BoxGeometry(w, h * 0.3, d * 0.3);
  overhang.translate(0, h * 0.1, -d * 0.35);
  geometries.push(overhang);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createColumn(w, h, d) {
  const geometries = [];
  const radius = Math.min(w, d) / 3;
  // Base
  const base = new THREE.CylinderGeometry(radius * 1.2, radius * 1.3, h * 0.1, 12);
  base.translate(0, -h * 0.45, 0);
  geometries.push(base);
  // Shaft
  const shaft = new THREE.CylinderGeometry(radius, radius, h * 0.75, 12);
  geometries.push(shaft);
  // Capital
  const capital = new THREE.CylinderGeometry(radius * 1.3, radius * 1.1, h * 0.15, 12);
  capital.translate(0, h * 0.425, 0);
  geometries.push(capital);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createBaluster(w, h, d) {
  const geometries = [];
  const radius = Math.min(w, d) / 4;
  // Base
  const base = new THREE.CylinderGeometry(radius * 1.5, radius * 1.5, h * 0.1, 8);
  base.translate(0, -h * 0.45, 0);
  geometries.push(base);
  // Lower bulb
  const lower = new THREE.SphereGeometry(radius * 1.3, 8, 6);
  lower.translate(0, -h * 0.25, 0);
  geometries.push(lower);
  // Shaft
  const shaft = new THREE.CylinderGeometry(radius * 0.6, radius * 0.6, h * 0.5, 8);
  geometries.push(shaft);
  // Upper bulb
  const upper = new THREE.SphereGeometry(radius * 1.1, 8, 6);
  upper.translate(0, h * 0.25, 0);
  geometries.push(upper);
  // Top
  const top = new THREE.CylinderGeometry(radius * 1.5, radius * 1.5, h * 0.1, 8);
  top.translate(0, h * 0.45, 0);
  geometries.push(top);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createWindowSill(w, h, d) {
  const sill = new THREE.BoxGeometry(w * 1.1, h, d * 0.4);
  sill.translate(0, 0, -d * 0.3);
  return sill;
}

function createShingle(w, h, d) {
  // Angled roof tile
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const vertices = new Float32Array([
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, hh, -hd,
    -hw, -hh, -hd,   hw, hh, -hd,   -hw, hh, -hd,
    -hw, -hh, hd,   hw, -hh, hd,   hw, -hh, -hd,
    -hw, -hh, hd,   hw, -hh, -hd,   -hw, -hh, -hd,
    -hw, hh, -hd,   hw, hh, -hd,   hw, -hh, hd,
    -hw, hh, -hd,   hw, -hh, hd,   -hw, -hh, hd,
    -hw, -hh, hd,   -hw, -hh, -hd,   -hw, hh, -hd,
    hw, -hh, -hd,   hw, -hh, hd,   hw, hh, -hd,
  ]);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function createChimney(w, h, d) {
  const geometries = [];
  // Main stack
  const stack = new THREE.BoxGeometry(w * 0.7, h * 0.9, d * 0.7);
  stack.translate(0, -h * 0.05, 0);
  geometries.push(stack);
  // Cap
  const cap = new THREE.BoxGeometry(w * 0.9, h * 0.1, d * 0.9);
  cap.translate(0, h * 0.45, 0);
  geometries.push(cap);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createButtress(w, h, d) {
  // Angled support
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const vertices = new Float32Array([
    // Bottom
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh, hd,
    -hw, -hh, -hd,   hw, -hh, hd,   -hw, -hh, hd,
    // Back
    -hw, -hh, -hd,   -hw, hh, -hd,   hw, hh, -hd,
    -hw, -hh, -hd,   hw, hh, -hd,   hw, -hh, -hd,
    // Slope
    -hw, -hh, hd,   hw, -hh, hd,   hw, hh, -hd,
    -hw, -hh, hd,   hw, hh, -hd,   -hw, hh, -hd,
    // Sides
    -hw, -hh, -hd,   -hw, -hh, hd,   -hw, hh, -hd,
    hw, -hh, hd,   hw, -hh, -hd,   hw, hh, -hd,
  ]);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();
  return geometry;
}

// =====================
// FURNITURE BLOCKS
// =====================

function createBench(w, h, d) {
  const geometries = [];
  // Seat
  const seat = new THREE.BoxGeometry(w, h * 0.2, d);
  seat.translate(0, h * 0.4, 0);
  geometries.push(seat);
  // Legs
  const legW = w * 0.1, legH = h * 0.8;
  const leg1 = new THREE.BoxGeometry(legW, legH, d * 0.8);
  leg1.translate(-w * 0.4, -h * 0.1, 0);
  geometries.push(leg1);
  const leg2 = new THREE.BoxGeometry(legW, legH, d * 0.8);
  leg2.translate(w * 0.4, -h * 0.1, 0);
  geometries.push(leg2);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createTable(w, h, d) {
  const geometries = [];
  // Top
  const top = new THREE.BoxGeometry(w, h * 0.1, d);
  top.translate(0, h * 0.45, 0);
  geometries.push(top);
  // Legs
  const legSize = Math.min(w, d) * 0.1;
  const legH = h * 0.9;
  const positions = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  positions.forEach(([px, pz]) => {
    const leg = new THREE.BoxGeometry(legSize, legH, legSize);
    leg.translate(px * (w * 0.4), -h * 0.05, pz * (d * 0.4));
    geometries.push(leg);
  });
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createChair(w, h, d) {
  const geometries = [];
  // Seat
  const seat = new THREE.BoxGeometry(w * 0.9, h * 0.1, d * 0.9);
  seat.translate(0, -h * 0.1, 0);
  geometries.push(seat);
  // Back
  const back = new THREE.BoxGeometry(w * 0.9, h * 0.5, d * 0.1);
  back.translate(0, h * 0.2, -d * 0.4);
  geometries.push(back);
  // Legs
  const legSize = w * 0.08, legH = h * 0.4;
  const positions = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  positions.forEach(([px, pz]) => {
    const leg = new THREE.BoxGeometry(legSize, legH, legSize);
    leg.translate(px * (w * 0.35), -h * 0.35, pz * (d * 0.35));
    geometries.push(leg);
  });
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createBarrel(w, h, d) {
  const radius = Math.min(w, d) / 2.2;
  return new THREE.CylinderGeometry(radius * 0.85, radius * 0.85, h, 12);
}

function createCrate(w, h, d) {
  const geometries = [];
  // Main box
  const box = new THREE.BoxGeometry(w * 0.95, h * 0.95, d * 0.95);
  geometries.push(box);
  // Slats
  const slat = new THREE.BoxGeometry(w, h * 0.08, d * 0.08);
  slat.translate(0, h * 0.3, d * 0.45);
  geometries.push(slat);
  const slat2 = slat.clone();
  slat2.translate(0, -h * 0.3, 0);
  geometries.push(slat2);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createCrateOpen(w, h, d) {
  const geometries = [];
  const thickness = 0.06;
  // Bottom
  const bottom = new THREE.BoxGeometry(w * 0.9, h * thickness, d * 0.9);
  bottom.translate(0, -h * 0.45, 0);
  geometries.push(bottom);
  // Walls
  const wallFront = new THREE.BoxGeometry(w * 0.9, h * 0.9, thickness * w);
  wallFront.translate(0, 0, d * 0.4);
  geometries.push(wallFront);
  const wallBack = wallFront.clone();
  wallBack.translate(0, 0, -d * 0.8);
  geometries.push(wallBack);
  const wallLeft = new THREE.BoxGeometry(thickness * w, h * 0.9, d * 0.9);
  wallLeft.translate(-w * 0.4, 0, 0);
  geometries.push(wallLeft);
  const wallRight = wallLeft.clone();
  wallRight.translate(w * 0.8, 0, 0);
  geometries.push(wallRight);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createCrateLarge(w, h, d) {
  // Large shipping crate with reinforced corners
  const geometries = [];
  const box = new THREE.BoxGeometry(w, h, d);
  geometries.push(box);
  // Corner reinforcements
  const cornerSize = 0.15;
  const corners = [
    [-1, -1, -1], [1, -1, -1], [-1, -1, 1], [1, -1, 1],
    [-1, 1, -1], [1, 1, -1], [-1, 1, 1], [1, 1, 1]
  ];
  corners.forEach(([cx, cy, cz]) => {
    const corner = new THREE.BoxGeometry(w * cornerSize, h * cornerSize, d * cornerSize);
    corner.translate(cx * w * 0.45, cy * h * 0.45, cz * d * 0.45);
    geometries.push(corner);
  });
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createPallet(w, h, d) {
  const geometries = [];
  const boardH = h * 0.3;
  const gapW = w * 0.15;
  // Top boards
  for (let i = -1; i <= 1; i++) {
    const board = new THREE.BoxGeometry(w * 0.28, boardH, d);
    board.translate(i * gapW * 2, h * 0.35, 0);
    geometries.push(board);
  }
  // Bottom supports
  for (let i = -1; i <= 1; i++) {
    const support = new THREE.BoxGeometry(w * 0.15, h * 0.5, d * 0.15);
    support.translate(i * w * 0.35, -h * 0.1, 0);
    geometries.push(support);
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createShelfUnit(w, h, d) {
  const geometries = [];
  const shelfThickness = 0.05;
  // Shelves
  for (let i = 0; i < 4; i++) {
    const shelf = new THREE.BoxGeometry(w * 0.95, h * shelfThickness, d * 0.9);
    shelf.translate(0, -h * 0.4 + i * h * 0.3, 0);
    geometries.push(shelf);
  }
  // Sides
  const side1 = new THREE.BoxGeometry(w * 0.05, h, d * 0.1);
  side1.translate(-w * 0.45, 0, d * 0.4);
  geometries.push(side1);
  const side2 = side1.clone();
  side2.translate(w * 0.9, 0, 0);
  geometries.push(side2);
  const side3 = side1.clone();
  side3.translate(0, 0, -d * 0.8);
  geometries.push(side3);
  const side4 = side3.clone();
  side4.translate(w * 0.9, 0, 0);
  geometries.push(side4);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createLocker(w, h, d) {
  const geometries = [];
  // Main body
  const body = new THREE.BoxGeometry(w * 0.95, h, d * 0.95);
  geometries.push(body);
  // Door panel
  const door = new THREE.BoxGeometry(w * 0.02, h * 0.9, d * 0.85);
  door.translate(w * 0.48, 0, 0);
  geometries.push(door);
  // Handle
  const handle = new THREE.BoxGeometry(w * 0.05, h * 0.15, d * 0.05);
  handle.translate(w * 0.5, h * 0.1, d * 0.3);
  geometries.push(handle);
  // Vent slots (decorative)
  for (let i = -1; i <= 1; i++) {
    const vent = new THREE.BoxGeometry(w * 0.03, h * 0.05, d * 0.4);
    vent.translate(w * 0.5, h * 0.35 + i * h * 0.08, 0);
    geometries.push(vent);
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createCabinet(w, h, d) {
  const geometries = [];
  // Main body
  const body = new THREE.BoxGeometry(w, h, d);
  geometries.push(body);
  // Doors (two)
  const doorW = w * 0.48;
  const door1 = new THREE.BoxGeometry(w * 0.02, h * 0.95, doorW);
  door1.translate(w * 0.5, 0, d * 0.2);
  geometries.push(door1);
  const door2 = door1.clone();
  door2.translate(0, 0, -d * 0.4);
  geometries.push(door2);
  // Handles
  const handle1 = new THREE.BoxGeometry(w * 0.05, h * 0.1, d * 0.03);
  handle1.translate(w * 0.52, 0, d * 0.05);
  geometries.push(handle1);
  const handle2 = handle1.clone();
  handle2.translate(0, 0, -d * 0.1);
  geometries.push(handle2);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createCardboardBox(w, h, d) {
  // Simple box with top flaps
  const geometries = [];
  const body = new THREE.BoxGeometry(w * 0.95, h * 0.85, d * 0.95);
  body.translate(0, -h * 0.075, 0);
  geometries.push(body);
  // Top flaps
  const flapFront = new THREE.BoxGeometry(w * 0.9, h * 0.02, d * 0.35);
  flapFront.translate(0, h * 0.35, d * 0.25);
  geometries.push(flapFront);
  const flapBack = flapFront.clone();
  flapBack.translate(0, 0, -d * 0.5);
  geometries.push(flapBack);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createSack(w, h, d) {
  // Rounded sack shape using a sphere segment
  const radius = Math.min(w, d) / 2;
  const geo = new THREE.SphereGeometry(radius, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.6);
  geo.scale(1, h / radius * 0.7, 1);
  geo.translate(0, -h * 0.15, 0);
  return geo;
}

function createPlanter(w, h, d) {
  return new THREE.BoxGeometry(w, h, d);
}

function createLadder(w, h, d) {
  const geometries = [];
  const railW = w * 0.1;
  // Rails
  const rail1 = new THREE.BoxGeometry(railW, h, d * 0.1);
  rail1.translate(-w * 0.35, 0, 0);
  geometries.push(rail1);
  const rail2 = new THREE.BoxGeometry(railW, h, d * 0.1);
  rail2.translate(w * 0.35, 0, 0);
  geometries.push(rail2);
  // Rungs
  const numRungs = 5;
  for (let i = 0; i < numRungs; i++) {
    const rung = new THREE.BoxGeometry(w * 0.6, h * 0.06, d * 0.08);
    rung.translate(0, -h * 0.4 + (i * h * 0.2), 0);
    geometries.push(rung);
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// =====================
// INDUSTRIAL BLOCKS
// =====================

function createTank(w, h, d) {
  const radius = Math.min(w, d) / 2.5;
  return new THREE.CylinderGeometry(radius, radius, h * 0.9, 16);
}

function createValve(w, h, d) {
  const geometries = [];
  const radius = Math.min(w, d) / 3;
  // Wheel
  const wheel = new THREE.TorusGeometry(radius, radius * 0.15, 8, 16);
  wheel.rotateX(Math.PI / 2);
  geometries.push(wheel);
  // Spokes
  for (let i = 0; i < 4; i++) {
    const spoke = new THREE.BoxGeometry(radius * 2, radius * 0.12, radius * 0.12);
    spoke.rotateY((i * Math.PI) / 4);
    geometries.push(spoke);
  }
  // Stem
  const stem = new THREE.CylinderGeometry(radius * 0.2, radius * 0.2, h * 0.5, 8);
  stem.translate(0, -h * 0.25, 0);
  geometries.push(stem);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createVent(w, h, d) {
  const geometries = [];
  // Frame
  const frame = new THREE.BoxGeometry(w, h, d * 0.1);
  geometries.push(frame);
  // Slats
  const numSlats = 5;
  for (let i = 0; i < numSlats; i++) {
    const slat = new THREE.BoxGeometry(w * 0.9, h * 0.08, d * 0.3);
    slat.rotateX(Math.PI * 0.15);
    slat.translate(0, -h * 0.35 + (i * h * 0.18), d * 0.1);
    geometries.push(slat);
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createIBeam(w, h, d) {
  const geometries = [];
  const flangeH = h * 0.15;
  const webW = w * 0.3;
  // Top flange
  const topFlange = new THREE.BoxGeometry(w, flangeH, d);
  topFlange.translate(0, h * 0.425, 0);
  geometries.push(topFlange);
  // Bottom flange
  const bottomFlange = new THREE.BoxGeometry(w, flangeH, d);
  bottomFlange.translate(0, -h * 0.425, 0);
  geometries.push(bottomFlange);
  // Web
  const web = new THREE.BoxGeometry(webW, h * 0.7, d);
  geometries.push(web);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createCatwalk(w, h, d) {
  const geometries = [];
  // Main platform
  const platform = new THREE.BoxGeometry(w, h * 0.1, d);
  platform.translate(0, h * 0.45, 0);
  geometries.push(platform);
  // Cross beams
  const beam1 = new THREE.BoxGeometry(w, h * 0.15, d * 0.1);
  beam1.translate(0, h * 0.35, -d * 0.35);
  geometries.push(beam1);
  const beam2 = new THREE.BoxGeometry(w, h * 0.15, d * 0.1);
  beam2.translate(0, h * 0.35, d * 0.35);
  geometries.push(beam2);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// =====================
// ELECTRICAL BLOCKS
// =====================

function createTransformer(w, h, d) {
  const geometries = [];
  // Main body
  const body = new THREE.BoxGeometry(w * 0.8, h * 0.7, d * 0.8);
  body.translate(0, -h * 0.15, 0);
  geometries.push(body);
  // Top insulators
  for (let i = -1; i <= 1; i += 2) {
    const insulator = new THREE.CylinderGeometry(w * 0.08, w * 0.1, h * 0.3, 8);
    insulator.translate(i * w * 0.25, h * 0.3, 0);
    geometries.push(insulator);
  }
  // Cooling fins
  for (let i = -2; i <= 2; i++) {
    const fin = new THREE.BoxGeometry(w * 0.05, h * 0.5, d * 0.9);
    fin.translate(w * 0.45, -h * 0.15, i * d * 0.15);
    geometries.push(fin);
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createPowerBox(w, h, d) {
  const geometries = [];
  // Main box
  const body = new THREE.BoxGeometry(w * 0.9, h, d * 0.5);
  geometries.push(body);
  // Door outline
  const door = new THREE.BoxGeometry(w * 0.02, h * 0.85, d * 0.4);
  door.translate(w * 0.45, 0, 0);
  geometries.push(door);
  // Warning label area
  const label = new THREE.BoxGeometry(w * 0.03, h * 0.3, d * 0.3);
  label.translate(w * 0.47, h * 0.2, 0);
  geometries.push(label);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createConduit(w, h, d) {
  // Horizontal electrical conduit
  const radius = Math.min(w, d) * 0.15;
  const geo = new THREE.CylinderGeometry(radius, radius, w, 8);
  geo.rotateZ(Math.PI / 2);
  return geo;
}

function createConduitCorner(w, h, d) {
  const geometries = [];
  const radius = Math.min(w, d) * 0.15;
  // Horizontal segment
  const horiz = new THREE.CylinderGeometry(radius, radius, w * 0.4, 8);
  horiz.rotateZ(Math.PI / 2);
  horiz.translate(-w * 0.3, 0, 0);
  geometries.push(horiz);
  // Vertical segment
  const vert = new THREE.CylinderGeometry(radius, radius, h * 0.4, 8);
  vert.translate(0, h * 0.2, 0);
  geometries.push(vert);
  // Corner junction
  const junction = new THREE.SphereGeometry(radius * 1.2, 8, 8);
  geometries.push(junction);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createOutlet(w, h, d) {
  const geometries = [];
  // Base plate
  const plate = new THREE.BoxGeometry(w * 0.6, h, d * 0.1);
  geometries.push(plate);
  // Socket holes (decorative)
  for (let i = -1; i <= 1; i += 2) {
    const hole = new THREE.BoxGeometry(w * 0.08, h * 0.15, d * 0.05);
    hole.translate(i * w * 0.12, h * 0.15, d * 0.05);
    geometries.push(hole);
    const hole2 = hole.clone();
    hole2.translate(0, -h * 0.3, 0);
    geometries.push(hole2);
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createSwitchBox(w, h, d) {
  const geometries = [];
  // Main box
  const body = new THREE.BoxGeometry(w * 0.7, h, d * 0.4);
  geometries.push(body);
  // Switch lever
  const lever = new THREE.BoxGeometry(w * 0.15, h * 0.4, d * 0.1);
  lever.translate(0, h * 0.1, d * 0.25);
  geometries.push(lever);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createFuseBox(w, h, d) {
  const geometries = [];
  // Main cabinet
  const body = new THREE.BoxGeometry(w * 0.9, h, d * 0.5);
  geometries.push(body);
  // Door
  const door = new THREE.BoxGeometry(w * 0.02, h * 0.9, d * 0.45);
  door.translate(w * 0.46, 0, 0);
  geometries.push(door);
  // Breaker rows (decorative)
  for (let row = -1; row <= 1; row++) {
    for (let col = -1; col <= 1; col++) {
      const breaker = new THREE.BoxGeometry(w * 0.15, h * 0.12, d * 0.08);
      breaker.translate(col * w * 0.2, row * h * 0.2, d * 0.22);
      geometries.push(breaker);
    }
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createCable(w, h, d) {
  // Simple cable/wire along X axis
  const radius = Math.min(w, d) * 0.08;
  const geo = new THREE.CylinderGeometry(radius, radius, w, 6);
  geo.rotateZ(Math.PI / 2);
  return geo;
}

// Directional cables that span full cell edges for seamless connection
function createCableX(w, h, d) {
  const radius = Math.min(w, d) * 0.06;
  const geo = new THREE.CylinderGeometry(radius, radius, w, 6);
  geo.rotateZ(Math.PI / 2);
  return geo;
}

function createCableY(w, h, d) {
  const radius = Math.min(w, d) * 0.06;
  const geo = new THREE.CylinderGeometry(radius, radius, h, 6);
  return geo;
}

function createCableZ(w, h, d) {
  const radius = Math.min(w, d) * 0.06;
  const geo = new THREE.CylinderGeometry(radius, radius, d, 6);
  geo.rotateX(Math.PI / 2);
  return geo;
}

// Cable elbow (90 degree bend in XZ plane)
function createCableElbow(w, h, d) {
  const size = Math.min(w, h, d);
  const tubeRadius = size * 0.06;
  const bendRadius = size / 2;
  const torus = new THREE.TorusGeometry(bendRadius, tubeRadius, 6, 12, Math.PI / 2);
  torus.rotateX(Math.PI / 2); // Lay flat in XZ plane
  return torus;
}

// Cable elbow vertical (XY plane - X to Y)
function createCableElbowY(w, h, d) {
  const size = Math.min(w, h, d);
  const tubeRadius = size * 0.06;
  const bendRadius = size / 2;
  const torus = new THREE.TorusGeometry(bendRadius, tubeRadius, 6, 12, Math.PI / 2);
  // Default is XY plane, connects +X to +Y
  return torus;
}

// Cable T-junction (main along X, branch in +Z)
function createCableT(w, h, d) {
  const radius = Math.min(w, d) * 0.06;
  const geometries = [];

  // Main cable along X
  const mainCable = new THREE.CylinderGeometry(radius, radius, w, 6);
  mainCable.rotateZ(Math.PI / 2);
  geometries.push(mainCable);

  // Branch cable in +Z direction (half length)
  const branchCable = new THREE.CylinderGeometry(radius, radius, d / 2, 6);
  branchCable.rotateX(Math.PI / 2);
  branchCable.translate(0, 0, d / 4);
  geometries.push(branchCable);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createLightFixture(w, h, d) {
  const geometries = [];
  // Base mount
  const mount = new THREE.BoxGeometry(w * 0.3, h * 0.3, d * 0.3);
  mount.translate(0, h * 0.35, 0);
  geometries.push(mount);
  // Light housing
  const housing = new THREE.CylinderGeometry(w * 0.35, w * 0.25, h * 0.5, 8);
  housing.translate(0, 0, 0);
  geometries.push(housing);
  // Lens/diffuser
  const lens = new THREE.CylinderGeometry(w * 0.3, w * 0.3, h * 0.1, 8);
  lens.translate(0, -h * 0.3, 0);
  geometries.push(lens);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createCableHanging(w, h, d) {
  // Sagging cable spanning full block edge to edge along Z axis
  const radius = Math.min(w, d) * 0.05;
  const sagAmount = h * 0.4;

  class CatenaryCurve extends THREE.Curve {
    getPoint(t) {
      // Full edge to edge: z goes from -d/2 to +d/2
      const z = (t - 0.5) * d;
      // Sag down from center, ends at y=0
      const y = sagAmount * (Math.pow(2 * t - 1, 2) - 1);
      return new THREE.Vector3(0, y, z);
    }
  }

  const path = new CatenaryCurve();
  const geo = new THREE.TubeGeometry(path, 16, radius, 6, false);
  return geo;
}

function createCableDroop(w, h, d) {
  // Vertical cable spanning full height, slight curve
  const radius = Math.min(w, d) * 0.05;

  class DroopCurve extends THREE.Curve {
    getPoint(t) {
      // Full height: y goes from +h/2 to -h/2
      const y = h * 0.5 - t * h;
      // Slight swing outward in middle
      const z = Math.sin(t * Math.PI) * d * 0.1;
      return new THREE.Vector3(0, y, z);
    }
  }

  const path = new DroopCurve();
  const geo = new THREE.TubeGeometry(path, 12, radius, 6, false);
  return geo;
}

function createCableLoop(w, h, d) {
  // Actual coiled cable - helix/spiral shape
  const radius = Math.min(w, d) * 0.04;
  const coilRadius = Math.min(w, d) * 0.15;
  const turns = 4;

  class CoilCurve extends THREE.Curve {
    getPoint(t) {
      // Helix spiral going down
      const angle = t * Math.PI * 2 * turns;
      const x = Math.cos(angle) * coilRadius;
      const z = Math.sin(angle) * coilRadius;
      // Span full height
      const y = h * 0.4 - t * h * 0.8;
      return new THREE.Vector3(x, y, z);
    }
  }

  const path = new CoilCurve();
  const geo = new THREE.TubeGeometry(path, 32, radius, 6, false);
  return geo;
}

// =====================
// NATURAL BLOCKS
// =====================

function createRock(w, h, d) {
  const hw = w * 0.4;
  const hh = h * 0.35;
  const hd = d * 0.4;

  // Hand-crafted irregular rock vertices for a natural angular look
  const vertices = new Float32Array([
    // Top cluster - irregular peak
    0, hh, 0,  -hw*0.3, hh*0.7, -hd*0.4,  hw*0.4, hh*0.6, -hd*0.2,
    0, hh, 0,  hw*0.4, hh*0.6, -hd*0.2,  hw*0.5, hh*0.5, hd*0.3,
    0, hh, 0,  hw*0.5, hh*0.5, hd*0.3,  -hw*0.2, hh*0.65, hd*0.5,
    0, hh, 0,  -hw*0.2, hh*0.65, hd*0.5,  -hw*0.6, hh*0.4, 0,
    0, hh, 0,  -hw*0.6, hh*0.4, 0,  -hw*0.3, hh*0.7, -hd*0.4,

    // Upper-middle faces
    -hw*0.3, hh*0.7, -hd*0.4,  -hw*0.8, -hh*0.2, -hd*0.6,  hw*0.4, hh*0.6, -hd*0.2,
    hw*0.4, hh*0.6, -hd*0.2,  -hw*0.8, -hh*0.2, -hd*0.6,  hw*0.9, -hh*0.1, -hd*0.5,
    hw*0.4, hh*0.6, -hd*0.2,  hw*0.9, -hh*0.1, -hd*0.5,  hw*0.5, hh*0.5, hd*0.3,
    hw*0.5, hh*0.5, hd*0.3,  hw*0.9, -hh*0.1, -hd*0.5,  hw*0.85, -hh*0.15, hd*0.7,
    hw*0.5, hh*0.5, hd*0.3,  hw*0.85, -hh*0.15, hd*0.7,  -hw*0.2, hh*0.65, hd*0.5,
    -hw*0.2, hh*0.65, hd*0.5,  hw*0.85, -hh*0.15, hd*0.7,  -hw*0.5, -hh*0.1, hd*0.8,
    -hw*0.2, hh*0.65, hd*0.5,  -hw*0.5, -hh*0.1, hd*0.8,  -hw*0.6, hh*0.4, 0,
    -hw*0.6, hh*0.4, 0,  -hw*0.5, -hh*0.1, hd*0.8,  -hw*0.95, -hh*0.2, hd*0.2,
    -hw*0.6, hh*0.4, 0,  -hw*0.95, -hh*0.2, hd*0.2,  -hw*0.3, hh*0.7, -hd*0.4,
    -hw*0.3, hh*0.7, -hd*0.4,  -hw*0.95, -hh*0.2, hd*0.2,  -hw*0.8, -hh*0.2, -hd*0.6,

    // Bottom faces connecting to base
    -hw*0.8, -hh*0.2, -hd*0.6,  -hw*0.6, -hh, -hd*0.4,  hw*0.9, -hh*0.1, -hd*0.5,
    hw*0.9, -hh*0.1, -hd*0.5,  -hw*0.6, -hh, -hd*0.4,  hw*0.7, -hh, -hd*0.3,
    hw*0.9, -hh*0.1, -hd*0.5,  hw*0.7, -hh, -hd*0.3,  hw*0.85, -hh*0.15, hd*0.7,
    hw*0.85, -hh*0.15, hd*0.7,  hw*0.7, -hh, -hd*0.3,  hw*0.6, -hh, hd*0.5,
    hw*0.85, -hh*0.15, hd*0.7,  hw*0.6, -hh, hd*0.5,  -hw*0.5, -hh*0.1, hd*0.8,
    -hw*0.5, -hh*0.1, hd*0.8,  hw*0.6, -hh, hd*0.5,  -hw*0.4, -hh, hd*0.6,
    -hw*0.5, -hh*0.1, hd*0.8,  -hw*0.4, -hh, hd*0.6,  -hw*0.95, -hh*0.2, hd*0.2,
    -hw*0.95, -hh*0.2, hd*0.2,  -hw*0.4, -hh, hd*0.6,  -hw*0.7, -hh, 0,
    -hw*0.95, -hh*0.2, hd*0.2,  -hw*0.7, -hh, 0,  -hw*0.8, -hh*0.2, -hd*0.6,
    -hw*0.8, -hh*0.2, -hd*0.6,  -hw*0.7, -hh, 0,  -hw*0.6, -hh, -hd*0.4,

    // Bottom face (irregular)
    -hw*0.6, -hh, -hd*0.4,  -hw*0.7, -hh, 0,  0, -hh, 0,
    -hw*0.7, -hh, 0,  -hw*0.4, -hh, hd*0.6,  0, -hh, 0,
    -hw*0.4, -hh, hd*0.6,  hw*0.6, -hh, hd*0.5,  0, -hh, 0,
    hw*0.6, -hh, hd*0.5,  hw*0.7, -hh, -hd*0.3,  0, -hh, 0,
    hw*0.7, -hh, -hd*0.3,  -hw*0.6, -hh, -hd*0.4,  0, -hh, 0,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

function createBush(w, h, d) {
  const geometries = [];
  const r = Math.min(w, d) / 3;
  const positions = [[0, 0, 0], [-r*0.5, -r*0.3, 0], [r*0.5, -r*0.3, 0], [0, -r*0.3, -r*0.5], [0, -r*0.3, r*0.5]];
  positions.forEach(([x, y, z], i) => {
    const sphere = new THREE.SphereGeometry(r * (0.8 + i * 0.05), 8, 6);
    sphere.translate(x, y, z);
    geometries.push(sphere);
  });
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createLog(w, h, d, axis) {
  const radius = Math.min(h, axis === 'X' ? d : w) / 3;
  const length = axis === 'X' ? w : d;
  const log = new THREE.CylinderGeometry(radius, radius * 0.9, length, 8);
  if (axis === 'X') {
    log.rotateZ(Math.PI / 2);
  } else {
    log.rotateX(Math.PI / 2);
  }
  return log;
}

// =====================
// MODERN BLOCKS
// =====================

function createACUnit(w, h, d) {
  const geometries = [];
  const box = new THREE.BoxGeometry(w * 0.95, h * 0.9, d * 0.95);
  geometries.push(box);
  for (let i = 0; i < 4; i++) {
    const vent = new THREE.BoxGeometry(w * 0.8, h * 0.05, d * 0.02);
    vent.translate(0, h * 0.2 - i * h * 0.15, d * 0.48);
    geometries.push(vent);
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createSolarPanel(w, h, d) {
  const geometries = [];
  const frame = new THREE.BoxGeometry(w, h * 0.1, d);
  geometries.push(frame);
  const panel = new THREE.BoxGeometry(w * 0.95, h * 0.05, d * 0.95);
  panel.translate(0, h * 0.1, 0);
  geometries.push(panel);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createAntenna(w, h, d) {
  const geometries = [];
  const radius = Math.min(w, d) / 10;
  const pole = new THREE.CylinderGeometry(radius, radius, h * 0.9, 6);
  geometries.push(pole);
  const bar1 = new THREE.CylinderGeometry(radius * 0.5, radius * 0.5, w * 0.8, 4);
  bar1.rotateZ(Math.PI / 2);
  bar1.translate(0, h * 0.3, 0);
  geometries.push(bar1);
  const bar2 = new THREE.CylinderGeometry(radius * 0.5, radius * 0.5, w * 0.5, 4);
  bar2.rotateZ(Math.PI / 2);
  bar2.translate(0, h * 0.1, 0);
  geometries.push(bar2);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createBarrier(w, h, d) {
  const geometries = [];
  const body = new THREE.BoxGeometry(w, h * 0.6, d * 0.5);
  body.translate(0, -h * 0.1, 0);
  geometries.push(body);
  const stripe = new THREE.BoxGeometry(w, h * 0.15, d * 0.55);
  stripe.translate(0, h * 0.25, 0);
  geometries.push(stripe);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// =====================
// SHAPE BLOCKS
// =====================

function createQuarterPipe(w, h, d) {
  const segments = 12;
  const vertices = [];
  const indices = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI / 2;
    const x = Math.cos(angle) * w / 2;
    const y = Math.sin(angle) * h - h / 2;
    vertices.push(x, y, d / 2);
    vertices.push(x, y, -d / 2);
  }
  for (let i = 0; i < segments; i++) {
    const a = i * 2, b = i * 2 + 1, c = i * 2 + 2, e = i * 2 + 3;
    indices.push(a, c, b, b, c, e);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createBowl(w, h, d) {
  const bowl = new THREE.SphereGeometry(Math.min(w, d) / 2.2, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  bowl.rotateX(Math.PI);
  bowl.translate(0, h * 0.25, 0);
  return bowl;
}

function createHexagon(w, h, d) {
  const radius = Math.min(w, d) / 2;
  return new THREE.CylinderGeometry(radius, radius, h, 6);
}

function createRoundedCube(w, h, d) {
  return new THREE.BoxGeometry(w * 0.9, h * 0.9, d * 0.9, 2, 2, 2);
}

function createChamfer(w, h, d) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const c = Math.min(w, d) * 0.3;
  const vertices = new Float32Array([
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, hh, -hd,
    -hw, -hh, -hd,   hw, hh, -hd,   -hw, hh, -hd,
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh, hd-c,
    -hw, -hh, -hd,   hw, -hh, hd-c,   -hw, -hh, hd-c,
    -hw, -hh, hd-c,   hw, -hh, hd-c,   hw-c, -hh, hd,
    -hw, -hh, hd-c,   hw-c, -hh, hd,   -hw, -hh, hd,
    -hw, hh, -hd,   hw, hh, -hd,   hw, hh, hd-c,
    -hw, hh, -hd,   hw, hh, hd-c,   -hw, hh, hd-c,
    -hw, hh, hd-c,   hw, hh, hd-c,   hw-c, hh, hd,
    -hw, hh, hd-c,   hw-c, hh, hd,   -hw, hh, hd,
    hw, -hh, hd-c,   hw, hh, hd-c,   hw-c, hh, hd,
    hw, -hh, hd-c,   hw-c, hh, hd,   hw-c, -hh, hd,
    -hw, -hh, hd,   hw-c, -hh, hd,   hw-c, hh, hd,
    -hw, -hh, hd,   hw-c, hh, hd,   -hw, hh, hd,
    hw, -hh, -hd,   hw, hh, -hd,   hw, hh, hd-c,
    hw, -hh, -hd,   hw, hh, hd-c,   hw, -hh, hd-c,
    -hw, -hh, hd,   -hw, hh, hd,   -hw, hh, -hd,
    -hw, -hh, hd,   -hw, hh, -hd,   -hw, -hh, -hd,
  ]);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();
  return geometry;
}

// =====================
// MEDIEVAL BLOCKS
// =====================

function createMerlon(w, h, d) {
  return new THREE.BoxGeometry(w * 0.8, h, d * 0.8);
}

function createArrowSlit(w, h, d) {
  const geometries = [];
  const left = new THREE.BoxGeometry(w * 0.4, h, d);
  left.translate(-w * 0.3, 0, 0);
  geometries.push(left);
  const right = new THREE.BoxGeometry(w * 0.4, h, d);
  right.translate(w * 0.3, 0, 0);
  geometries.push(right);
  const top = new THREE.BoxGeometry(w * 0.2, h * 0.3, d);
  top.translate(0, h * 0.35, 0);
  geometries.push(top);
  const bottom = new THREE.BoxGeometry(w * 0.2, h * 0.3, d);
  bottom.translate(0, -h * 0.35, 0);
  geometries.push(bottom);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createTorch(w, h, d) {
  const geometries = [];
  const radius = Math.min(w, d) / 6;
  const bracket = new THREE.BoxGeometry(w * 0.3, h * 0.1, d * 0.5);
  bracket.translate(0, -h * 0.1, -d * 0.25);
  geometries.push(bracket);
  const handle = new THREE.CylinderGeometry(radius, radius * 0.8, h * 0.5, 6);
  geometries.push(handle);
  const holder = new THREE.CylinderGeometry(radius * 1.5, radius, h * 0.15, 6);
  holder.translate(0, h * 0.3, 0);
  geometries.push(holder);
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

function createChain(w, h, d) {
  const geometries = [];
  const linkSize = Math.min(w, d) / 4;
  const numLinks = 4;
  for (let i = 0; i < numLinks; i++) {
    const link = new THREE.TorusGeometry(linkSize, linkSize * 0.3, 6, 8);
    link.rotateX(i % 2 === 0 ? 0 : Math.PI / 2);
    link.translate(0, h * 0.4 - i * (h / numLinks), 0);
    geometries.push(link);
  }
  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create triangular prism
function createPrism(w, h, d) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  const vertices = new Float32Array([
    // Bottom face (triangle)
    -hw, -hh, -hd,   hw, -hh, -hd,   0, -hh, hd,
    // Front left face
    -hw, -hh, -hd,   0, -hh, hd,   0, hh, 0,
    -hw, -hh, -hd,   0, hh, 0,   -hw, hh, -hd,
    // Front right face
    hw, -hh, -hd,   0, hh, 0,   0, -hh, hd,
    hw, -hh, -hd,   hw, hh, -hd,   0, hh, 0,
    // Back face
    -hw, -hh, -hd,   -hw, hh, -hd,   hw, hh, -hd,
    -hw, -hh, -hd,   hw, hh, -hd,   hw, -hh, -hd,
    // Top face (triangle)
    -hw, hh, -hd,   0, hh, 0,   hw, hh, -hd,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

// Helper: Create diagonal beam
function createDiagonalBeam(w, h, d) {
  const geo = new THREE.BoxGeometry(w * Math.SQRT2, h, d);
  geo.rotateY(Math.PI / 4);
  return geo;
}

// Helper: Create wall corner (L-shaped in top view)
function createWallCorner(w, h, d, inner = false) {
  const thickness = d / 4;
  const geometries = [];

  if (inner) {
    // Inner corner - fills the corner
    const arm1 = new THREE.BoxGeometry(w, h, thickness);
    arm1.translate(0, 0, -d / 2 + thickness / 2);
    geometries.push(arm1);

    const arm2 = new THREE.BoxGeometry(thickness, h, d - thickness);
    arm2.translate(-w / 2 + thickness / 2, 0, thickness / 2);
    geometries.push(arm2);
  } else {
    // Outer corner
    const arm1 = new THREE.BoxGeometry(w, h, thickness);
    arm1.translate(0, 0, d / 2 - thickness / 2);
    geometries.push(arm1);

    const arm2 = new THREE.BoxGeometry(thickness, h, d - thickness);
    arm2.translate(w / 2 - thickness / 2, 0, -thickness / 2);
    geometries.push(arm2);
  }

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create wall junction (45-degree corner filler for centered walls)
// Face order matches BoxGeometry: east(+X), west(-X), top(+Y), bottom(-Y), south(+Z), north(-Z)
function createWallJunction(w, h, d) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  // Small triangular prism at 45 degrees to fill corner gap
  // Size matches wall thickness (1/4 of block)
  const size = Math.min(w, d) / 4;

  // Organize vertices by face direction for consistent material mapping
  const vertices = new Float32Array([
    // East face (+X) - diagonal face (hypotenuse), 2 triangles (6 verts)
    size, -hh, -size,    size, hh, -size,    -size, hh, size,
    size, -hh, -size,    -size, hh, size,    -size, -hh, size,
    // West face (-X) - left face (rectangle), 2 triangles (6 verts)
    -size, -hh, -size,   -size, -hh, size,   -size, hh, size,
    -size, -hh, -size,   -size, hh, size,    -size, hh, -size,
    // Top face (+Y) - triangle (3 verts)
    -size, hh, -size,    -size, hh, size,    size, hh, -size,
    // Bottom face (-Y) - triangle (3 verts)
    -size, -hh, -size,    size, -hh, -size,    -size, -hh, size,
    // South face (+Z) - degenerate (3 verts)
    0, 0, size,   0, 0, size,   0, 0, size,
    // North face (-Z) - back face (rectangle), 2 triangles (6 verts)
    -size, -hh, -size,   -size, hh, -size,    size, hh, -size,
    -size, -hh, -size,    size, hh, -size,    size, -hh, -size,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  // Add material groups: [startIndex, count, materialIndex]
  // Matches FACE_DIRECTIONS order: east, west, top, bottom, south, north
  geo.addGroup(0, 6, 0);    // East/diagonal (2 tris)
  geo.addGroup(6, 6, 1);    // West (2 tris)
  geo.addGroup(12, 3, 2);   // Top (1 tri)
  geo.addGroup(15, 3, 3);   // Bottom (1 tri)
  geo.addGroup(18, 3, 4);   // South (degenerate)
  geo.addGroup(21, 6, 5);   // North (2 tris)

  geo.computeVertexNormals();
  return geo;
}

// Helper: Create inner wedge (fills corner)
// Face order matches BoxGeometry: east(+X), west(-X), top(+Y), bottom(-Y), south(+Z), north(-Z)
function createWedgeInner(w, h, d) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  // Organize vertices by face direction for consistent material mapping
  const vertices = new Float32Array([
    // East face (+X) - right vertical face triangle (3 verts)
    hw, -hh, -hd,   hw, hh, -hd,   hw, -hh, hd,
    // West face (-X) - left face triangle (3 verts)
    -hw, -hh, -hd,   -hw, -hh, hd,   -hw, hh, -hd,
    // Top face (+Y) - degenerate (3 verts)
    0, hh, 0,   0, hh, 0,   0, hh, 0,
    // Bottom face (-Y) - 2 triangles (6 verts)
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh, hd,
    -hw, -hh, -hd,   hw, -hh, hd,   -hw, -hh, hd,
    // South face (+Z) - slope face, 2 triangles (6 verts)
    -hw, hh, -hd,   -hw, -hh, hd,   hw, -hh, hd,
    -hw, hh, -hd,   hw, -hh, hd,   hw, hh, -hd,
    // North face (-Z) - back face, 2 triangles (6 verts)
    -hw, -hh, -hd,   -hw, hh, -hd,   hw, hh, -hd,
    -hw, -hh, -hd,   hw, hh, -hd,   hw, -hh, -hd,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  // Add material groups: [startIndex, count, materialIndex]
  // Matches FACE_DIRECTIONS order: east, west, top, bottom, south, north
  geo.addGroup(0, 3, 0);    // East (1 tri)
  geo.addGroup(3, 3, 1);    // West (1 tri)
  geo.addGroup(6, 3, 2);    // Top (degenerate)
  geo.addGroup(9, 6, 3);    // Bottom (2 tris)
  geo.addGroup(15, 6, 4);   // South/slope (2 tris)
  geo.addGroup(21, 6, 5);   // North/back (2 tris)

  geo.computeVertexNormals();
  return geo;
}

// Helper: Create corner stairs
function createStairsCorner(w, h, d, inner = false) {
  const numSteps = 4;
  const stepHeight = h / numSteps;
  const geometries = [];

  for (let i = 0; i < numSteps; i++) {
    const stepH = stepHeight * (i + 1);
    const stepSize = (numSteps - i) / numSteps;

    if (inner) {
      // Inner corner - L-shaped steps getting smaller
      const stepGeo = new THREE.BoxGeometry(w * stepSize, stepH, d * stepSize);
      stepGeo.translate(
        w * (1 - stepSize) / 2,
        (stepH / 2) - (h / 2),
        d * (1 - stepSize) / 2
      );
      geometries.push(stepGeo);
    } else {
      // Outer corner - steps in corner
      const stepGeo = new THREE.BoxGeometry(w * stepSize, stepH, d * stepSize);
      stepGeo.translate(
        -w * (1 - stepSize) / 2,
        (stepH / 2) - (h / 2),
        -d * (1 - stepSize) / 2
      );
      geometries.push(stepGeo);
    }
  }

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create pyramid
function createPyramid(w, h, d) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  const vertices = new Float32Array([
    // Bottom face
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh, hd,
    -hw, -hh, -hd,   hw, -hh, hd,   -hw, -hh, hd,
    // Front face
    -hw, -hh, hd,   hw, -hh, hd,   0, hh, 0,
    // Back face
    hw, -hh, -hd,   -hw, -hh, -hd,   0, hh, 0,
    // Left face
    -hw, -hh, -hd,   -hw, -hh, hd,   0, hh, 0,
    // Right face
    hw, -hh, hd,   hw, -hh, -hd,   0, hh, 0,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

// Helper: Create tube (hollow cylinder)
function createTube(w, h, d) {
  const outerRadius = Math.min(w, d) / 2;
  const innerRadius = outerRadius * 0.7;
  const shape = new THREE.Shape();

  // Outer circle
  shape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);

  // Inner circle (hole)
  const hole = new THREE.Path();
  hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
  shape.holes.push(hole);

  const extrudeSettings = {
    steps: 1,
    depth: h,
    bevelEnabled: false
  };

  const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, -h / 2, 0);
  return geo;
}

// Helper: Create half arch (flying buttress style - pillar on left, arch curving to ground on right)
function createArchHalf(w, h, d) {
  const thickness = w * 0.2;
  const segments = 10;

  // Create 2D profile - L-shaped with curved inner corner
  const shape = new THREE.Shape();

  // Outer profile: start bottom-left, go up, across top, down right side
  shape.moveTo(-w / 2, -h / 2);
  shape.lineTo(-w / 2, h / 2);  // Up left side
  shape.lineTo(w / 2, h / 2);   // Across top
  shape.lineTo(w / 2, -h / 2);  // Down right side
  shape.lineTo(-w / 2, -h / 2); // Close

  // Inner hole: rectangular with curved corner (quarter circle)
  const hole = new THREE.Path();
  const innerLeft = -w / 2 + thickness;
  const innerTop = h / 2 - thickness;
  const innerRight = w / 2 - thickness;
  const innerBottom = -h / 2;
  const curveRadius = Math.min(w - thickness * 2, h - thickness) * 0.8;

  // Start at bottom-left of hole
  hole.moveTo(innerLeft, innerBottom);
  // Up to where curve starts
  hole.lineTo(innerLeft, innerTop - curveRadius);

  // Quarter circle curve from left pillar to top
  for (let i = 0; i <= segments; i++) {
    const angle = Math.PI - (i / segments) * (Math.PI / 2);
    const x = innerLeft + curveRadius + Math.cos(angle) * curveRadius;
    const y = innerTop - curveRadius + Math.sin(angle) * curveRadius;
    hole.lineTo(x, y);
  }

  // Continue across to right
  hole.lineTo(innerRight, innerTop);
  // Down right side
  hole.lineTo(innerRight, innerBottom);
  // Close hole
  hole.lineTo(innerLeft, innerBottom);

  shape.holes.push(hole);

  const geo = new THREE.ExtrudeGeometry(shape, { steps: 1, depth: d, bevelEnabled: false });
  geo.translate(0, 0, -d / 2);

  return geo;
}

// Helper: Create L-shape
function createLShape(w, h, d) {
  const thickness = w / 3;
  const geometries = [];

  const arm1 = new THREE.BoxGeometry(w, h, thickness);
  arm1.translate(0, 0, d / 2 - thickness / 2);
  geometries.push(arm1);

  const arm2 = new THREE.BoxGeometry(thickness, h, d - thickness);
  arm2.translate(-w / 2 + thickness / 2, 0, -thickness / 2);
  geometries.push(arm2);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create T-shape
function createTShape(w, h, d) {
  const thickness = w / 3;
  const geometries = [];

  const top = new THREE.BoxGeometry(w, h, thickness);
  top.translate(0, 0, d / 2 - thickness / 2);
  geometries.push(top);

  const stem = new THREE.BoxGeometry(thickness, h, d - thickness);
  stem.translate(0, 0, -thickness / 2);
  geometries.push(stem);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create C-shape (U-shape)
function createCShape(w, h, d) {
  const thickness = w / 4;
  const geometries = [];

  // Back
  const back = new THREE.BoxGeometry(w, h, thickness);
  back.translate(0, 0, -d / 2 + thickness / 2);
  geometries.push(back);

  // Left arm
  const left = new THREE.BoxGeometry(thickness, h, d - thickness);
  left.translate(-w / 2 + thickness / 2, 0, thickness / 2);
  geometries.push(left);

  // Right arm
  const right = new THREE.BoxGeometry(thickness, h, d - thickness);
  right.translate(w / 2 - thickness / 2, 0, thickness / 2);
  geometries.push(right);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create ledge (overhanging lip)
function createLedge(w, h, d) {
  const geometries = [];

  // Main overhang
  const overhang = new THREE.BoxGeometry(w, h / 2, d * 0.3);
  overhang.translate(0, h / 4, d * 0.35);
  geometries.push(overhang);

  // Back support
  const support = new THREE.BoxGeometry(w, h, d * 0.4);
  support.translate(0, 0, -d * 0.3);
  geometries.push(support);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create gutter (channel)
function createGutter(w, h, d) {
  const thickness = d / 6;
  const geometries = [];

  // Bottom
  const bottom = new THREE.BoxGeometry(w, h / 2, d);
  bottom.translate(0, -h / 4, 0);
  geometries.push(bottom);

  // Front lip
  const front = new THREE.BoxGeometry(w, h, thickness);
  front.translate(0, 0, d / 2 - thickness / 2);
  geometries.push(front);

  // Back lip
  const back = new THREE.BoxGeometry(w, h, thickness);
  back.translate(0, 0, -d / 2 + thickness / 2);
  geometries.push(back);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create capital (decorative pillar top)
function createCapital(w, h, d) {
  const geometries = [];

  // Top plate (wider)
  const top = new THREE.BoxGeometry(w, h / 3, d);
  top.translate(0, h / 3, 0);
  geometries.push(top);

  // Middle transition
  const mid = new THREE.BoxGeometry(w * 0.85, h / 3, d * 0.85);
  mid.translate(0, 0, 0);
  geometries.push(mid);

  // Bottom (connects to pillar)
  const bottom = new THREE.BoxGeometry(w * 0.7, h / 3, d * 0.7);
  bottom.translate(0, -h / 3, 0);
  geometries.push(bottom);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create base (decorative pillar bottom)
function createBase(w, h, d) {
  const geometries = [];

  // Bottom plate (wider)
  const bottom = new THREE.BoxGeometry(w, h / 3, d);
  bottom.translate(0, -h / 3, 0);
  geometries.push(bottom);

  // Middle transition
  const mid = new THREE.BoxGeometry(w * 0.85, h / 3, d * 0.85);
  mid.translate(0, 0, 0);
  geometries.push(mid);

  // Top (connects to pillar)
  const top = new THREE.BoxGeometry(w * 0.7, h / 3, d * 0.7);
  top.translate(0, h / 3, 0);
  geometries.push(top);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create window frame
function createWindowFrame(w, h, d) {
  const frameWidth = w / 8;
  const geometries = [];

  // Top
  const top = new THREE.BoxGeometry(w, frameWidth, d);
  top.translate(0, h / 2 - frameWidth / 2, 0);
  geometries.push(top);

  // Bottom
  const bottom = new THREE.BoxGeometry(w, frameWidth * 1.5, d);
  bottom.translate(0, -h / 2 + frameWidth * 0.75, 0);
  geometries.push(bottom);

  // Left
  const left = new THREE.BoxGeometry(frameWidth, h - frameWidth * 2.5, d);
  left.translate(-w / 2 + frameWidth / 2, frameWidth * 0.25, 0);
  geometries.push(left);

  // Right
  const right = new THREE.BoxGeometry(frameWidth, h - frameWidth * 2.5, d);
  right.translate(w / 2 - frameWidth / 2, frameWidth * 0.25, 0);
  geometries.push(right);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create door frame
function createDoorFrame(w, h, d) {
  const frameWidth = w / 8;
  const geometries = [];

  // Top
  const top = new THREE.BoxGeometry(w, frameWidth, d);
  top.translate(0, h / 2 - frameWidth / 2, 0);
  geometries.push(top);

  // Left
  const left = new THREE.BoxGeometry(frameWidth, h - frameWidth, d);
  left.translate(-w / 2 + frameWidth / 2, -frameWidth / 2, 0);
  geometries.push(left);

  // Right
  const right = new THREE.BoxGeometry(frameWidth, h - frameWidth, d);
  right.translate(w / 2 - frameWidth / 2, -frameWidth / 2, 0);
  geometries.push(right);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create curved ramp (quarter-pipe style)
function createCurvedRamp(w, h, d) {
  const segments = 8;
  const vertices = [];

  // Create curved surface from front-bottom to back-top
  for (let i = 0; i < segments; i++) {
    const angle1 = (i / segments) * Math.PI / 2;
    const angle2 = ((i + 1) / segments) * Math.PI / 2;

    const y1 = -h / 2 + h * Math.sin(angle1);
    const z1 = d / 2 - d * (1 - Math.cos(angle1));
    const y2 = -h / 2 + h * Math.sin(angle2);
    const z2 = d / 2 - d * (1 - Math.cos(angle2));

    // Left quad
    vertices.push(
      -w / 2, y1, z1,  -w / 2, y2, z2,  w / 2, y2, z2,
      -w / 2, y1, z1,  w / 2, y2, z2,   w / 2, y1, z1
    );
  }

  // Bottom face
  vertices.push(
    -w / 2, -h / 2, -d / 2,   w / 2, -h / 2, -d / 2,   w / 2, -h / 2, d / 2,
    -w / 2, -h / 2, -d / 2,   w / 2, -h / 2, d / 2,   -w / 2, -h / 2, d / 2
  );

  // Back face (tall side)
  vertices.push(
    -w / 2, -h / 2, -d / 2,   -w / 2, h / 2, -d / 2,   w / 2, h / 2, -d / 2,
    -w / 2, -h / 2, -d / 2,   w / 2, h / 2, -d / 2,   w / 2, -h / 2, -d / 2
  );

  // Left side
  for (let i = 0; i < segments; i++) {
    const angle1 = (i / segments) * Math.PI / 2;
    const angle2 = ((i + 1) / segments) * Math.PI / 2;
    const y1 = -h / 2 + h * Math.sin(angle1);
    const z1 = d / 2 - d * (1 - Math.cos(angle1));
    const y2 = -h / 2 + h * Math.sin(angle2);
    const z2 = d / 2 - d * (1 - Math.cos(angle2));
    vertices.push(
      -w / 2, -h / 2, -d / 2,   -w / 2, y1, z1,   -w / 2, y2, z2
    );
  }
  vertices.push(-w / 2, -h / 2, -d / 2,   -w / 2, h / 2, -d / 2,   -w / 2, -h / 2 + h * Math.sin(Math.PI / 2 * (segments - 1) / segments), d / 2 - d * (1 - Math.cos(Math.PI / 2 * (segments - 1) / segments)));

  // Right side (mirror of left)
  for (let i = 0; i < segments; i++) {
    const angle1 = (i / segments) * Math.PI / 2;
    const angle2 = ((i + 1) / segments) * Math.PI / 2;
    const y1 = -h / 2 + h * Math.sin(angle1);
    const z1 = d / 2 - d * (1 - Math.cos(angle1));
    const y2 = -h / 2 + h * Math.sin(angle2);
    const z2 = d / 2 - d * (1 - Math.cos(angle2));
    vertices.push(
      w / 2, y2, z2,   w / 2, y1, z1,   w / 2, -h / 2, -d / 2
    );
  }
  vertices.push(w / 2, -h / 2 + h * Math.sin(Math.PI / 2 * (segments - 1) / segments), d / 2 - d * (1 - Math.cos(Math.PI / 2 * (segments - 1) / segments)),   w / 2, h / 2, -d / 2,   w / 2, -h / 2, -d / 2);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
  geo.computeVertexNormals();
  return geo;
}

// Helper: Create curved ramp corner
function createCurvedRampCorner(w, h, d) {
  const segments = 8;
  const vertices = [];

  // Create curved corner surface
  for (let i = 0; i < segments; i++) {
    const angle1 = (i / segments) * Math.PI / 2;
    const angle2 = ((i + 1) / segments) * Math.PI / 2;

    const y1 = -h / 2 + h * Math.sin(angle1);
    const r1 = 1 - Math.cos(angle1);
    const y2 = -h / 2 + h * Math.sin(angle2);
    const r2 = 1 - Math.cos(angle2);

    // Create radial segments
    for (let j = 0; j < segments; j++) {
      const theta1 = (j / segments) * Math.PI / 2;
      const theta2 = ((j + 1) / segments) * Math.PI / 2;

      const x1_r1 = w / 2 - w * r1 * Math.cos(theta1);
      const z1_r1 = d / 2 - d * r1 * Math.sin(theta1);
      const x2_r1 = w / 2 - w * r1 * Math.cos(theta2);
      const z2_r1 = d / 2 - d * r1 * Math.sin(theta2);

      const x1_r2 = w / 2 - w * r2 * Math.cos(theta1);
      const z1_r2 = d / 2 - d * r2 * Math.sin(theta1);
      const x2_r2 = w / 2 - w * r2 * Math.cos(theta2);
      const z2_r2 = d / 2 - d * r2 * Math.sin(theta2);

      vertices.push(
        x1_r1, y1, z1_r1,   x1_r2, y2, z1_r2,   x2_r2, y2, z2_r2,
        x1_r1, y1, z1_r1,   x2_r2, y2, z2_r2,   x2_r1, y1, z2_r1
      );
    }
  }

  // Bottom face
  vertices.push(
    -w / 2, -h / 2, -d / 2,   w / 2, -h / 2, -d / 2,   w / 2, -h / 2, d / 2,
    -w / 2, -h / 2, -d / 2,   w / 2, -h / 2, d / 2,   -w / 2, -h / 2, d / 2
  );

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
  geo.computeVertexNormals();
  return geo;
}

// Helper: Create roof peak (inverted V shape)
function createRoofPeak(w, h, d) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  const vertices = new Float32Array([
    // Bottom face
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh, hd,
    -hw, -hh, -hd,   hw, -hh, hd,   -hw, -hh, hd,
    // Left slope
    -hw, -hh, -hd,   0, hh, -hd,   0, hh, hd,
    -hw, -hh, -hd,   0, hh, hd,   -hw, -hh, hd,
    // Right slope
    hw, -hh, hd,   0, hh, hd,   0, hh, -hd,
    hw, -hh, hd,   0, hh, -hd,   hw, -hh, -hd,
    // Front triangle
    -hw, -hh, hd,   0, hh, hd,   hw, -hh, hd,
    // Back triangle
    hw, -hh, -hd,   0, hh, -hd,   -hw, -hh, -hd,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

// Helper: Create hip roof (pyramid top with flat sides)
function createRoofHip(w, h, d) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;
  const inset = Math.min(w, d) / 4; // Ridge inset

  const vertices = new Float32Array([
    // Bottom face
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh, hd,
    -hw, -hh, -hd,   hw, -hh, hd,   -hw, -hh, hd,
    // Front slope (trapezoid)
    -hw, -hh, hd,   -hw + inset, hh, hd - inset,   hw - inset, hh, hd - inset,
    -hw, -hh, hd,   hw - inset, hh, hd - inset,   hw, -hh, hd,
    // Back slope (trapezoid)
    hw, -hh, -hd,   hw - inset, hh, -hd + inset,   -hw + inset, hh, -hd + inset,
    hw, -hh, -hd,   -hw + inset, hh, -hd + inset,   -hw, -hh, -hd,
    // Left slope (triangle)
    -hw, -hh, -hd,   -hw + inset, hh, -hd + inset,   -hw + inset, hh, hd - inset,
    -hw, -hh, -hd,   -hw + inset, hh, hd - inset,   -hw, -hh, hd,
    // Right slope (triangle)
    hw, -hh, hd,   hw - inset, hh, hd - inset,   hw - inset, hh, -hd + inset,
    hw, -hh, hd,   hw - inset, hh, -hd + inset,   hw, -hh, -hd,
    // Top face (flat ridge)
    -hw + inset, hh, -hd + inset,   hw - inset, hh, -hd + inset,   hw - inset, hh, hd - inset,
    -hw + inset, hh, -hd + inset,   hw - inset, hh, hd - inset,   -hw + inset, hh, hd - inset,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

// Helper: Create channel (U-shaped gutter)
function createChannel(w, h, d) {
  const wallThickness = w / 8;
  const geometries = [];

  // Bottom
  const bottom = new THREE.BoxGeometry(w, wallThickness, d);
  bottom.translate(0, -h / 2 + wallThickness / 2, 0);
  geometries.push(bottom);

  // Left wall
  const left = new THREE.BoxGeometry(wallThickness, h, d);
  left.translate(-w / 2 + wallThickness / 2, 0, 0);
  geometries.push(left);

  // Right wall
  const right = new THREE.BoxGeometry(wallThickness, h, d);
  right.translate(w / 2 - wallThickness / 2, 0, 0);
  geometries.push(right);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create channel corner
function createChannelCorner(w, h, d) {
  const wallThickness = Math.min(w, d) / 8;
  const geometries = [];

  // Bottom (L-shaped)
  const bottom1 = new THREE.BoxGeometry(w, wallThickness, wallThickness * 2);
  bottom1.translate(0, -h / 2 + wallThickness / 2, d / 2 - wallThickness);
  geometries.push(bottom1);

  const bottom2 = new THREE.BoxGeometry(wallThickness * 2, wallThickness, d - wallThickness * 2);
  bottom2.translate(-w / 2 + wallThickness, -h / 2 + wallThickness / 2, -wallThickness);
  geometries.push(bottom2);

  // Outer wall (L-shaped)
  const outer1 = new THREE.BoxGeometry(w, h, wallThickness);
  outer1.translate(0, 0, d / 2 - wallThickness / 2);
  geometries.push(outer1);

  const outer2 = new THREE.BoxGeometry(wallThickness, h, d - wallThickness);
  outer2.translate(-w / 2 + wallThickness / 2, 0, -wallThickness / 2);
  geometries.push(outer2);

  // Inner corner wall
  const inner = new THREE.BoxGeometry(wallThickness, h, wallThickness);
  inner.translate(w / 2 - wallThickness / 2, 0, -d / 2 + wallThickness / 2);
  geometries.push(inner);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create channel end cap
function createChannelEnd(w, h, d) {
  const wallThickness = w / 8;
  const geometries = [];

  // Bottom
  const bottom = new THREE.BoxGeometry(w, wallThickness, d);
  bottom.translate(0, -h / 2 + wallThickness / 2, 0);
  geometries.push(bottom);

  // Left wall
  const left = new THREE.BoxGeometry(wallThickness, h, d);
  left.translate(-w / 2 + wallThickness / 2, 0, 0);
  geometries.push(left);

  // Right wall
  const right = new THREE.BoxGeometry(wallThickness, h, d);
  right.translate(w / 2 - wallThickness / 2, 0, 0);
  geometries.push(right);

  // Back wall (end cap)
  const back = new THREE.BoxGeometry(w - wallThickness * 2, h, wallThickness);
  back.translate(0, 0, -d / 2 + wallThickness / 2);
  geometries.push(back);

  const merged = mergeGeometries(geometries);
  geometries.forEach(g => g.dispose());
  return merged;
}

// Helper: Create beveled cube (chamfered edges)
function createBeveledCube(w, h, d) {
  const bevel = Math.min(w, h, d) / 8;
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  const vertices = [];

  // Top face (smaller)
  vertices.push(
    -hw + bevel, hh, -hd + bevel,   hw - bevel, hh, -hd + bevel,   hw - bevel, hh, hd - bevel,
    -hw + bevel, hh, -hd + bevel,   hw - bevel, hh, hd - bevel,   -hw + bevel, hh, hd - bevel
  );

  // Bottom face (smaller)
  vertices.push(
    -hw + bevel, -hh, hd - bevel,   hw - bevel, -hh, hd - bevel,   hw - bevel, -hh, -hd + bevel,
    -hw + bevel, -hh, hd - bevel,   hw - bevel, -hh, -hd + bevel,   -hw + bevel, -hh, -hd + bevel
  );

  // Front face
  vertices.push(
    -hw + bevel, -hh + bevel, hd,   hw - bevel, -hh + bevel, hd,   hw - bevel, hh - bevel, hd,
    -hw + bevel, -hh + bevel, hd,   hw - bevel, hh - bevel, hd,   -hw + bevel, hh - bevel, hd
  );

  // Back face
  vertices.push(
    hw - bevel, -hh + bevel, -hd,   -hw + bevel, -hh + bevel, -hd,   -hw + bevel, hh - bevel, -hd,
    hw - bevel, -hh + bevel, -hd,   -hw + bevel, hh - bevel, -hd,   hw - bevel, hh - bevel, -hd
  );

  // Left face
  vertices.push(
    -hw, -hh + bevel, -hd + bevel,   -hw, -hh + bevel, hd - bevel,   -hw, hh - bevel, hd - bevel,
    -hw, -hh + bevel, -hd + bevel,   -hw, hh - bevel, hd - bevel,   -hw, hh - bevel, -hd + bevel
  );

  // Right face
  vertices.push(
    hw, -hh + bevel, hd - bevel,   hw, -hh + bevel, -hd + bevel,   hw, hh - bevel, -hd + bevel,
    hw, -hh + bevel, hd - bevel,   hw, hh - bevel, -hd + bevel,   hw, hh - bevel, hd - bevel
  );

  // Top bevels
  // Top-front bevel
  vertices.push(
    -hw + bevel, hh, hd - bevel,   hw - bevel, hh, hd - bevel,   hw - bevel, hh - bevel, hd,
    -hw + bevel, hh, hd - bevel,   hw - bevel, hh - bevel, hd,   -hw + bevel, hh - bevel, hd
  );
  // Top-back bevel
  vertices.push(
    hw - bevel, hh, -hd + bevel,   -hw + bevel, hh, -hd + bevel,   -hw + bevel, hh - bevel, -hd,
    hw - bevel, hh, -hd + bevel,   -hw + bevel, hh - bevel, -hd,   hw - bevel, hh - bevel, -hd
  );
  // Top-left bevel
  vertices.push(
    -hw + bevel, hh, -hd + bevel,   -hw + bevel, hh, hd - bevel,   -hw, hh - bevel, hd - bevel,
    -hw + bevel, hh, -hd + bevel,   -hw, hh - bevel, hd - bevel,   -hw, hh - bevel, -hd + bevel
  );
  // Top-right bevel
  vertices.push(
    hw - bevel, hh, hd - bevel,   hw - bevel, hh, -hd + bevel,   hw, hh - bevel, -hd + bevel,
    hw - bevel, hh, hd - bevel,   hw, hh - bevel, -hd + bevel,   hw, hh - bevel, hd - bevel
  );

  // Bottom bevels
  // Bottom-front bevel
  vertices.push(
    -hw + bevel, -hh + bevel, hd,   hw - bevel, -hh + bevel, hd,   hw - bevel, -hh, hd - bevel,
    -hw + bevel, -hh + bevel, hd,   hw - bevel, -hh, hd - bevel,   -hw + bevel, -hh, hd - bevel
  );
  // Bottom-back bevel
  vertices.push(
    hw - bevel, -hh + bevel, -hd,   -hw + bevel, -hh + bevel, -hd,   -hw + bevel, -hh, -hd + bevel,
    hw - bevel, -hh + bevel, -hd,   -hw + bevel, -hh, -hd + bevel,   hw - bevel, -hh, -hd + bevel
  );
  // Bottom-left bevel
  vertices.push(
    -hw, -hh + bevel, hd - bevel,   -hw, -hh + bevel, -hd + bevel,   -hw + bevel, -hh, -hd + bevel,
    -hw, -hh + bevel, hd - bevel,   -hw + bevel, -hh, -hd + bevel,   -hw + bevel, -hh, hd - bevel
  );
  // Bottom-right bevel
  vertices.push(
    hw, -hh + bevel, -hd + bevel,   hw, -hh + bevel, hd - bevel,   hw - bevel, -hh, hd - bevel,
    hw, -hh + bevel, -hd + bevel,   hw - bevel, -hh, hd - bevel,   hw - bevel, -hh, -hd + bevel
  );

  // Vertical edge bevels
  // Front-left
  vertices.push(
    -hw + bevel, -hh + bevel, hd,   -hw, -hh + bevel, hd - bevel,   -hw, hh - bevel, hd - bevel,
    -hw + bevel, -hh + bevel, hd,   -hw, hh - bevel, hd - bevel,   -hw + bevel, hh - bevel, hd
  );
  // Front-right
  vertices.push(
    hw, -hh + bevel, hd - bevel,   hw - bevel, -hh + bevel, hd,   hw - bevel, hh - bevel, hd,
    hw, -hh + bevel, hd - bevel,   hw - bevel, hh - bevel, hd,   hw, hh - bevel, hd - bevel
  );
  // Back-left
  vertices.push(
    -hw, -hh + bevel, -hd + bevel,   -hw + bevel, -hh + bevel, -hd,   -hw + bevel, hh - bevel, -hd,
    -hw, -hh + bevel, -hd + bevel,   -hw + bevel, hh - bevel, -hd,   -hw, hh - bevel, -hd + bevel
  );
  // Back-right
  vertices.push(
    hw - bevel, -hh + bevel, -hd,   hw, -hh + bevel, -hd + bevel,   hw, hh - bevel, -hd + bevel,
    hw - bevel, -hh + bevel, -hd,   hw, hh - bevel, -hd + bevel,   hw - bevel, hh - bevel, -hd
  );

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
  geo.computeVertexNormals();
  return geo;
}

/**
 * Get the local bounding box for a block type relative to its grid position.
 * Returns { min: {x,y,z}, max: {x,y,z} } where grid position is at origin.
 */
export function getBlockBounds(type, dimensions = { w: 1, h: 1, d: 1 }) {
  const w = dimensions.w;
  const h = dimensions.h;
  const d = dimensions.d;
  const heightMult = BLOCK_HEIGHT_MULTIPLIERS[type] || 1;
  const yOffset = BLOCK_Y_OFFSETS[type] || 0;
  const actualHeight = h * heightMult;

  // Default full block
  let bounds = {
    min: { x: 0, y: yOffset, z: 0 },
    max: { x: w, y: yOffset + actualHeight, z: d }
  };

  // Adjust for specific block types
  switch (type) {
    // Pillars - centered in X and Z
    case 'pillar':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'pillar2':
      bounds.min.x = w * 0.375; bounds.max.x = w * 0.625;
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;
    case 'pillar4':
      bounds.min.x = w * 0.4375; bounds.max.x = w * 0.5625;
      bounds.min.z = d * 0.4375; bounds.max.z = d * 0.5625;
      break;

    // Beams X - centered in Y and Z, full X
    case 'beamX':
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'beam2X':
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;
    case 'beam4X':
      bounds.min.z = d * 0.4375; bounds.max.z = d * 0.5625;
      break;

    // Beams Z - centered in X and Y, full Z
    case 'beamZ':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      break;
    case 'beam2Z':
      bounds.min.x = w * 0.375; bounds.max.x = w * 0.625;
      break;
    case 'beam4Z':
      bounds.min.x = w * 0.4375; bounds.max.x = w * 0.5625;
      break;

    // Low beams X - same as regular but no Y offset (handled by lack of BLOCK_Y_OFFSETS entry)
    case 'beamXLow':
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'beam2XLow':
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;

    // Low beams Z
    case 'beamZLow':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      break;
    case 'beam2ZLow':
      bounds.min.x = w * 0.375; bounds.max.x = w * 0.625;
      break;

    // Walls - centered in Z
    case 'wall':
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'wall4':
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;
    case 'wall8':
      bounds.min.z = d * 0.4375; bounds.max.z = d * 0.5625;
      break;
    case 'panel':
      bounds.min.z = d * 0.46875; bounds.max.z = d * 0.53125;
      break;

    // Walls flush to sides
    case 'wallFront':
      bounds.min.z = d * 0.75; bounds.max.z = d;
      break;
    case 'wallBack':
      bounds.min.z = 0; bounds.max.z = d * 0.25;
      break;

    // Cylinder - approximate as inscribed square
    case 'cylinder':
    case 'cylinderHalf':
      const inset = (1 - Math.SQRT1_2) / 2; // ~0.146
      bounds.min.x = w * inset; bounds.max.x = w * (1 - inset);
      bounds.min.z = d * inset; bounds.max.z = d * (1 - inset);
      break;

    // Quarter blocks - half size in X and Z, positioned at corner
    case 'quarter':
    case 'quarterTall':
      bounds.max.x = w * 0.5;
      bounds.max.z = d * 0.5;
      break;

    // Cone and sphere - inscribed in a cylinder
    case 'cone':
    case 'sphere':
    case 'dome':
      const inset2 = (1 - Math.SQRT1_2) / 2;
      bounds.min.x = w * inset2; bounds.max.x = w * (1 - inset2);
      bounds.min.z = d * inset2; bounds.max.z = d * (1 - inset2);
      break;

    // Arches - use full bounds (complex geometry)
    case 'arch':
    case 'archLow':
    case 'archWide':
      // Full bounds
      break;

    // Cross - full bounds (arms extend in both directions)
    case 'cross':
      // Full bounds
      break;

    // Frame - full bounds (outer dimensions)
    case 'frame':
      // Full bounds
      break;

    // Fence - thin in Z
    case 'fence':
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;
    case 'fenceZ':
      bounds.min.x = w * 0.375; bounds.max.x = w * 0.625;
      break;
    case 'railing':
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;
    case 'railingZ':
      bounds.min.x = w * 0.375; bounds.max.x = w * 0.625;
      break;

    // Pipes - centered, quarter size in cross-section
    case 'pipeX':
      bounds.min.y = h * 0.25; bounds.max.y = h * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'pipeY':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'pipeZ':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.y = h * 0.25; bounds.max.y = h * 0.75;
      break;
    case 'pipeElbow':
    case 'pipeElbow2':
    case 'pipeElbow3':
    case 'pipeElbow4':
    case 'pipeCross':
    case 'pipeT':
    case 'pipeTY':
      // Approximate bounds for pipe fittings - centered in Y
      bounds.min.y = h * 0.25; bounds.max.y = h * 0.75;
      break;

    // Prism - full bounds
    case 'prism':
      // Full bounds
      break;

    // Half blocks
    case 'halfX':
      bounds.max.x = w * 0.5;
      break;
    case 'halfZ':
      bounds.max.z = d * 0.5;
      break;
    case 'halfCorner':
      bounds.max.x = w * 0.5;
      bounds.max.z = d * 0.5;
      break;

    // Round pillars
    case 'pillarRound':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'pillarRound2':
      bounds.min.x = w * 0.375; bounds.max.x = w * 0.625;
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;

    // Diagonal beam - approximate
    case 'beamDiag':
      // Full bounds (diagonal fills the space)
      break;

    // Wall corners
    case 'wallCorner':
    case 'wallCornerInner':
      // L-shaped, use full bounds
      break;

    // Wedge inner
    case 'wedgeInner':
      // Full bounds
      break;

    // Stair corners
    case 'stairsCorner':
    case 'stairsCornerInner':
      // Full bounds
      break;

    // Pyramid
    case 'pyramid':
      // Full bounds
      break;

    // Octagon - inscribed
    case 'octagon':
      const inset3 = (1 - Math.SQRT1_2) / 2;
      bounds.min.x = w * inset3; bounds.max.x = w * (1 - inset3);
      bounds.min.z = d * inset3; bounds.max.z = d * (1 - inset3);
      break;

    // Tube - same as cylinder
    case 'tube':
      const inset4 = (1 - Math.SQRT1_2) / 2;
      bounds.min.x = w * inset4; bounds.max.x = w * (1 - inset4);
      bounds.min.z = d * inset4; bounds.max.z = d * (1 - inset4);
      break;

    // Arch half
    case 'archHalf':
      // Full bounds
      break;

    // Decorative shapes
    case 'lShape':
    case 'tShape':
    case 'cShape':
      // Full bounds
      break;

    // Details
    case 'ledge':
    case 'gutter':
    case 'capital':
    case 'base':
      // Full bounds
      break;

    // Frames
    case 'windowFrame':
    case 'doorFrame':
      // Full bounds
      break;

    // Architectural - various bounds
    case 'cornice':
      bounds.max.y = h * 0.25;
      bounds.max.z = d * 0.5;
      break;
    case 'column':
      bounds.min.x = w * 0.15; bounds.max.x = w * 0.85;
      bounds.min.z = d * 0.15; bounds.max.z = d * 0.85;
      break;
    case 'baluster':
      bounds.min.x = w * 0.35; bounds.max.x = w * 0.65;
      bounds.min.z = d * 0.35; bounds.max.z = d * 0.65;
      break;
    case 'windowSill':
      bounds.max.y = h * 0.25;
      break;
    case 'shingle':
      bounds.max.y = h * 0.25;
      break;
    case 'chimney':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'buttress':
      // Wedge shape - full bounds
      break;

    // Furniture
    case 'bench':
      bounds.max.y = h * 0.5;
      break;
    case 'table':
      // Full bounds (legs extend to corners)
      break;
    case 'chair':
      bounds.max.z = d * 0.6;
      break;
    case 'barrel':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'crate':
      // Full bounds
      break;
    case 'planter':
      // Full bounds
      break;
    case 'ladder':
      bounds.min.z = d * 0.35; bounds.max.z = d * 0.65;
      break;

    // Industrial
    case 'tank':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'valve':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'vent':
      bounds.max.y = h * 0.25;
      break;
    case 'iBeam':
      bounds.min.z = d * 0.35; bounds.max.z = d * 0.65;
      break;
    case 'catwalk':
      bounds.max.y = h * 0.125;
      break;

    // Natural
    case 'rock':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      bounds.max.y = h * 0.7;
      break;
    case 'bush':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'logX':
      bounds.min.y = 0; bounds.max.y = h * 0.5;
      bounds.min.z = d * 0.15; bounds.max.z = d * 0.85;
      break;
    case 'logZ':
      bounds.min.y = 0; bounds.max.y = h * 0.5;
      bounds.min.x = w * 0.15; bounds.max.x = w * 0.85;
      break;

    // Modern
    case 'acUnit':
      // Full bounds
      break;
    case 'solarPanel':
      bounds.max.y = h * 0.15;
      break;
    case 'antenna':
      bounds.min.x = w * 0.4; bounds.max.x = w * 0.6;
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;
    case 'barrier':
      bounds.max.y = h * 0.5;
      break;

    // Extra Shapes
    case 'quarterPipe':
      // Quarter cylinder - full bounds
      break;
    case 'bowl':
      // Bowl shape - full bounds
      break;
    case 'hexagon':
      bounds.min.x = w * 0.07; bounds.max.x = w * 0.93;
      bounds.min.z = d * 0.07; bounds.max.z = d * 0.93;
      break;
    case 'roundedCube':
      // Full bounds
      break;
    case 'chamfer':
      // Full bounds
      break;

    // Medieval
    case 'merlon':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'arrowSlit':
      bounds.max.z = d * 0.25;
      break;
    case 'torch':
      bounds.min.x = w * 0.35; bounds.max.x = w * 0.65;
      bounds.min.z = d * 0.35; bounds.max.z = d * 0.65;
      break;
    case 'chain':
      bounds.min.x = w * 0.4; bounds.max.x = w * 0.6;
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;

    // === BLOCKS ADDED FOR BETTER CONNECTION ===

    // Posts and bollards - thin vertical elements
    case 'post':
      bounds.min.x = w * 0.375; bounds.max.x = w * 0.625;
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;
    case 'bollard':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      bounds.max.y = h * 0.75;
      break;

    // Electrical conduits and cables - very thin, minimal bounds
    case 'conduit':
      bounds.min.y = h * 0.35; bounds.max.y = h * 0.65;
      bounds.min.z = d * 0.35; bounds.max.z = d * 0.65;
      break;
    case 'conduitCorner':
      bounds.min.x = w * 0.3; bounds.max.x = w * 0.7;
      bounds.min.z = d * 0.3; bounds.max.z = d * 0.7;
      break;
    case 'cable':
    case 'cableX':
      bounds.min.y = h * 0.44; bounds.max.y = h * 0.56;
      bounds.min.z = d * 0.44; bounds.max.z = d * 0.56;
      break;
    case 'cableY':
      bounds.min.x = w * 0.44; bounds.max.x = w * 0.56;
      bounds.min.z = d * 0.44; bounds.max.z = d * 0.56;
      break;
    case 'cableZ':
      bounds.min.x = w * 0.44; bounds.max.x = w * 0.56;
      bounds.min.y = h * 0.44; bounds.max.y = h * 0.56;
      break;
    case 'cableElbow':
    case 'cableElbowY':
    case 'cableT':
      bounds.min.x = w * 0.3; bounds.max.x = w * 0.7;
      bounds.min.y = h * 0.4; bounds.max.y = h * 0.6;
      bounds.min.z = d * 0.3; bounds.max.z = d * 0.7;
      break;
    case 'cableHanging':
    case 'cableDroop':
    case 'cableLoop':
      bounds.min.x = w * 0.35; bounds.max.x = w * 0.65;
      bounds.min.z = d * 0.35; bounds.max.z = d * 0.65;
      break;

    // Structural - crossBeam and truss
    case 'crossBeam':
      bounds.min.y = h * 0.375; bounds.max.y = h * 0.625;
      break;
    case 'truss':
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;
    case 'parapet':
      bounds.max.y = h * 0.5;
      bounds.min.z = d * 0.375; bounds.max.z = d * 0.625;
      break;
    case 'crenellation':
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;

    // Triangles and geometric shapes
    case 'trianglePrism':
    case 'triangleRight':
    case 'triangleEqui':
    case 'pentahedron':
      // Full bounds - these fill the space
      break;
    case 'tetrahedron':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;

    // Stair variants
    case 'stairsSingle':
      bounds.max.y = h * 0.25;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'landing':
      bounds.max.y = h * 0.25;
      break;
    case 'spiralStep':
      bounds.max.y = h * 0.25;
      break;
    case 'step':
      bounds.max.y = h * 0.25;
      break;
    case 'platform':
      bounds.max.y = h * 0.125;
      break;

    // Rounded shapes
    case 'torus':
      bounds.min.x = w * 0.15; bounds.max.x = w * 0.85;
      bounds.min.y = h * 0.4; bounds.max.y = h * 0.6;
      bounds.min.z = d * 0.15; bounds.max.z = d * 0.85;
      break;
    case 'capsule':
    case 'pill':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;
    case 'hemisphere':
      const insetH = (1 - Math.SQRT1_2) / 2;
      bounds.min.x = w * insetH; bounds.max.x = w * (1 - insetH);
      bounds.min.z = d * insetH; bounds.max.z = d * (1 - insetH);
      bounds.max.y = h * 0.5;
      break;
    case 'egg':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;

    // Architectural arches
    case 'gothicArch':
    case 'flatArch':
      // Full bounds - arches fill the frame
      break;
    case 'keystone':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;

    // Downspout - thin vertical pipe
    case 'downspout':
      bounds.min.x = w * 0.35; bounds.max.x = w * 0.65;
      bounds.min.z = d * 0.35; bounds.max.z = d * 0.65;
      break;

    // Decorative shapes
    case 'star':
    case 'heart':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'diamond':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'gem':
    case 'crystal':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;

    // Trim and molding
    case 'cornerTrim':
      bounds.max.x = w * 0.5;
      bounds.max.z = d * 0.5;
      break;
    case 'edgeTrim':
      bounds.max.y = h * 0.25;
      bounds.min.z = d * 0.4375; bounds.max.z = d * 0.5625;
      break;
    case 'moldingX':
      bounds.min.y = h * 0.4375; bounds.max.y = h * 0.5625;
      bounds.min.z = d * 0.4375; bounds.max.z = d * 0.5625;
      break;
    case 'moldingZ':
      bounds.min.x = w * 0.4375; bounds.max.x = w * 0.5625;
      bounds.min.y = h * 0.4375; bounds.max.y = h * 0.5625;
      break;
    case 'bracket':
      bounds.max.x = w * 0.5;
      bounds.max.z = d * 0.5;
      break;

    // Decorative tops
    case 'finial':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;
    case 'pediment':
      bounds.max.y = h * 0.5;
      break;
    case 'dentil':
      bounds.min.x = w * 0.4; bounds.max.x = w * 0.6;
      bounds.max.y = h * 0.25;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;

    // Coverings
    case 'awning':
      bounds.max.y = h * 0.25;
      break;
    case 'canopy':
      bounds.max.y = h * 0.125;
      break;
    case 'pergola':
      // Open structure, use full bounds for legs
      break;
    case 'tarp':
      bounds.max.y = h * 0.05;
      break;
    case 'umbrella':
      bounds.min.x = w * 0.4; bounds.max.x = w * 0.6;
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;

    // Furniture
    case 'stool':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;
    case 'shelf':
      bounds.max.y = h * 0.125;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'bed':
    case 'desk':
      // Full bounds - large furniture
      break;

    // Industrial storage
    case 'crateOpen':
    case 'crateLarge':
      // Full bounds
      break;
    case 'pallet':
      bounds.max.y = h * 0.15;
      break;
    case 'shelfUnit':
    case 'locker':
    case 'cabinet':
      // Full bounds - these fill the space
      break;
    case 'cardboardBox':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'sack':
      bounds.min.x = w * 0.15; bounds.max.x = w * 0.85;
      bounds.min.z = d * 0.15; bounds.max.z = d * 0.85;
      bounds.max.y = h * 0.7;
      break;
    case 'bin':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'dumpster':
      // Full bounds
      break;

    // Industrial/HVAC
    case 'grateFloor':
      bounds.max.y = h * 0.1;
      break;
    case 'ductX':
      bounds.min.y = h * 0.25; bounds.max.y = h * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'ductZ':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.y = h * 0.25; bounds.max.y = h * 0.75;
      break;
    case 'ductCorner':
      bounds.min.y = h * 0.25; bounds.max.y = h * 0.75;
      break;
    case 'hopper':
    case 'conveyor':
      // Full bounds
      break;

    // Lighting
    case 'spotlight':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'bulb':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.y = h * 0.2; bounds.max.y = h * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;
    case 'lightFixture':
      bounds.max.y = h * 0.3;
      break;

    // Natural elements
    case 'stump':
      bounds.min.x = w * 0.15; bounds.max.x = w * 0.85;
      bounds.min.z = d * 0.15; bounds.max.z = d * 0.85;
      bounds.max.y = h * 0.5;
      break;
    case 'boulder':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'grass':
    case 'flower':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;

    // Signs and electronics
    case 'trafficCone':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      bounds.max.y = h * 0.75;
      break;
    case 'sign':
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;
    case 'monitor':
      bounds.min.z = d * 0.3; bounds.max.z = d * 0.7;
      break;
    case 'speaker':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;

    // Electrical boxes
    case 'transformer':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'powerBox':
    case 'fuseBox':
      bounds.min.z = d * 0.3; bounds.max.z = d;
      break;
    case 'outlet':
    case 'switchBox':
      bounds.min.x = w * 0.3; bounds.max.x = w * 0.7;
      bounds.min.z = d * 0.4; bounds.max.z = d;
      bounds.min.y = h * 0.3; bounds.max.y = h * 0.7;
      break;

    // Ramps and roofs
    case 'rampStraight':
    case 'rampWide':
      // Full bounds - wedge shapes
      break;
    case 'roofCorner':
    case 'roofValley':
    case 'gable':
      // Full bounds - roof pieces fill their space
      break;

    // Utility
    case 'drain':
    case 'grate':
      bounds.max.y = h * 0.15;
      break;

    // Medieval/castle
    case 'shield':
      bounds.min.z = d * 0.3; bounds.max.z = d * 0.7;
      break;
    case 'banner':
      bounds.min.x = w * 0.4; bounds.max.x = w * 0.6;
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;
    case 'portcullis':
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;

    // Vehicle parts
    case 'wheel':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.y = h * 0.1; bounds.max.y = h * 0.9;
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;
    case 'axle':
      bounds.min.x = w * 0.45; bounds.max.x = w * 0.55;
      bounds.min.y = h * 0.45; bounds.max.y = h * 0.55;
      break;
    case 'seat':
      bounds.max.y = h * 0.6;
      break;
    case 'hull':
    case 'wing':
      // Full bounds
      break;
    case 'propeller':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.z = d * 0.4; bounds.max.z = d * 0.6;
      break;

    // Oil field equipment
    case 'derrickLeg':
      bounds.min.x = w * 0.3; bounds.max.x = w * 0.7;
      bounds.min.z = d * 0.3; bounds.max.z = d * 0.7;
      break;
    case 'derrickCross':
      bounds.min.y = h * 0.4; bounds.max.y = h * 0.6;
      break;
    case 'derrickPlatform':
      bounds.max.y = h * 0.2;
      break;
    case 'pumpJack':
      // Full bounds - complex moving structure
      break;
    case 'pumpBase':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      bounds.max.y = h * 0.25;
      break;
    case 'oilTank':
    case 'oilTankSmall':
      bounds.min.x = w * 0.1; bounds.max.x = w * 0.9;
      bounds.min.z = d * 0.1; bounds.max.z = d * 0.9;
      break;
    case 'wellHead':
      bounds.min.x = w * 0.25; bounds.max.x = w * 0.75;
      bounds.min.z = d * 0.25; bounds.max.z = d * 0.75;
      break;
    case 'pipelineX':
      bounds.min.y = h * 0.2; bounds.max.y = h * 0.8;
      bounds.min.z = d * 0.2; bounds.max.z = d * 0.8;
      break;
    case 'pipelineZ':
      bounds.min.x = w * 0.2; bounds.max.x = w * 0.8;
      bounds.min.y = h * 0.2; bounds.max.y = h * 0.8;
      break;
    case 'oilBarrel':
      bounds.min.x = w * 0.15; bounds.max.x = w * 0.85;
      bounds.min.z = d * 0.15; bounds.max.z = d * 0.85;
      break;
  }

  return bounds;
}

/**
 * Check if two axis-aligned bounding boxes overlap
 */
export function boundsOverlap(a, b) {
  // Add epsilon for floating point tolerance
  // Using larger epsilon to better handle fractional block heights
  const eps = 0.01;
  return (
    a.min.x < b.max.x - eps && a.max.x > b.min.x + eps &&
    a.min.y < b.max.y - eps && a.max.y > b.min.y + eps &&
    a.min.z < b.max.z - eps && a.max.z > b.min.z + eps
  );
}

/**
 * Get world-space bounds for a block, accounting for scale and rotation
 */
export function getWorldBounds(block) {
  const local = getBlockBounds(block.type, block.dimensions);
  const pos = block.gridPosition;
  const scale = block.scale || 1;
  const rotation = block.rotation || { x: 0, y: 0, z: 0 };

  // Get scaled local bounds relative to block center (0.5, 0.5, 0.5 in grid units)
  const dims = block.dimensions || { w: 1, h: 1, d: 1 };
  const centerX = dims.w * scale / 2;
  const centerY = dims.h * scale / 2;
  const centerZ = dims.d * scale / 2;

  // Local bounds scaled and centered
  const minX = local.min.x * scale - centerX;
  const maxX = local.max.x * scale - centerX;
  const minY = local.min.y * scale - centerY;
  const maxY = local.max.y * scale - centerY;
  const minZ = local.min.z * scale - centerZ;
  const maxZ = local.max.z * scale - centerZ;

  // 8 corners of the local bounding box
  const corners = [
    { x: minX, y: minY, z: minZ },
    { x: maxX, y: minY, z: minZ },
    { x: minX, y: maxY, z: minZ },
    { x: maxX, y: maxY, z: minZ },
    { x: minX, y: minY, z: maxZ },
    { x: maxX, y: minY, z: maxZ },
    { x: minX, y: maxY, z: maxZ },
    { x: maxX, y: maxY, z: maxZ }
  ];

  // Rotate corners around Y axis (most common rotation in block building)
  // Normalize rotation to 0, 90, 180, 270
  const yRot = ((rotation.y % 360) + 360) % 360;
  const radY = yRot * Math.PI / 180;
  const cosY = Math.cos(radY);
  const sinY = Math.sin(radY);

  // Also handle X and Z rotation for completeness
  const xRot = ((rotation.x % 360) + 360) % 360;
  const radX = xRot * Math.PI / 180;
  const cosX = Math.cos(radX);
  const sinX = Math.sin(radX);

  const zRot = ((rotation.z % 360) + 360) % 360;
  const radZ = zRot * Math.PI / 180;
  const cosZ = Math.cos(radZ);
  const sinZ = Math.sin(radZ);

  // Find min/max of rotated corners
  let rMinX = Infinity, rMaxX = -Infinity;
  let rMinY = Infinity, rMaxY = -Infinity;
  let rMinZ = Infinity, rMaxZ = -Infinity;

  for (const c of corners) {
    // Apply rotation: Y first, then X, then Z (matching Three.js default order XYZ applied in reverse)
    // Actually Three.js applies in XYZ order, so we do X, then Y, then Z
    let x = c.x, y = c.y, z = c.z;

    // Rotate around X
    if (xRot !== 0) {
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;
      y = y1; z = z1;
    }

    // Rotate around Y
    if (yRot !== 0) {
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;
      x = x1; z = z1;
    }

    // Rotate around Z
    if (zRot !== 0) {
      const x1 = x * cosZ - y * sinZ;
      const y1 = x * sinZ + y * cosZ;
      x = x1; y = y1;
    }

    rMinX = Math.min(rMinX, x);
    rMaxX = Math.max(rMaxX, x);
    rMinY = Math.min(rMinY, y);
    rMaxY = Math.max(rMaxY, y);
    rMinZ = Math.min(rMinZ, z);
    rMaxZ = Math.max(rMaxZ, z);
  }

  // Translate back from center to world position
  const worldCenterX = pos.x + centerX;
  const worldCenterY = pos.y + centerY;
  const worldCenterZ = pos.z + centerZ;

  return {
    min: {
      x: worldCenterX + rMinX,
      y: worldCenterY + rMinY,
      z: worldCenterZ + rMinZ
    },
    max: {
      x: worldCenterX + rMaxX,
      y: worldCenterY + rMaxY,
      z: worldCenterZ + rMaxZ
    }
  };
}

// =====================
// NEW HELPER FUNCTIONS
// =====================

function createCrossBeam(w, h, d) {
  const geometries = [];
  const beamX = new THREE.BoxGeometry(w, h * 0.25, d * 0.25);
  geometries.push(beamX);
  const beamZ = new THREE.BoxGeometry(w * 0.25, h * 0.25, d);
  geometries.push(beamZ);
  return safeMergeGeometries(geometries);
}

function createTruss(w, h, d) {
  const geometries = [];
  const thickness = Math.min(w, d) * 0.1;
  // Top and bottom rails
  const topRail = new THREE.BoxGeometry(w, thickness, thickness);
  topRail.translate(0, h * 0.4, 0);
  geometries.push(topRail);
  const bottomRail = new THREE.BoxGeometry(w, thickness, thickness);
  bottomRail.translate(0, -h * 0.4, 0);
  geometries.push(bottomRail);
  // Diagonal supports
  const numDiags = 3;
  for (let i = 0; i < numDiags; i++) {
    const x = -w * 0.35 + i * (w * 0.35);
    const diag = new THREE.BoxGeometry(thickness, h * 0.9, thickness);
    diag.rotateZ(i % 2 === 0 ? 0.5 : -0.5);
    diag.translate(x, 0, 0);
    geometries.push(diag);
  }
  return safeMergeGeometries(geometries);
}

function createCrenellation(w, h, d) {
  const geometries = [];
  const merlonW = w * 0.3;
  const gap = w * 0.2;
  // Base wall
  const base = new THREE.BoxGeometry(w, h * 0.3, d * 0.25);
  base.translate(0, -h * 0.1, 0);
  geometries.push(base);
  // Merlons
  const positions = [-w * 0.35, 0, w * 0.35];
  positions.forEach(x => {
    const merlon = new THREE.BoxGeometry(merlonW, h * 0.5, d * 0.25);
    merlon.translate(x, h * 0.15, 0);
    geometries.push(merlon);
  });
  return safeMergeGeometries(geometries);
}

function createTrianglePrism(w, h, d) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const vertices = new Float32Array([
    // Front triangle
    -hw, -hh, hd,  hw, -hh, hd,  0, hh, hd,
    // Back triangle
    hw, -hh, -hd,  -hw, -hh, -hd,  0, hh, -hd,
    // Bottom
    -hw, -hh, -hd,  hw, -hh, -hd,  hw, -hh, hd,
    -hw, -hh, -hd,  hw, -hh, hd,  -hw, -hh, hd,
    // Left slope
    -hw, -hh, hd,  0, hh, hd,  0, hh, -hd,
    -hw, -hh, hd,  0, hh, -hd,  -hw, -hh, -hd,
    // Right slope
    hw, -hh, hd,  hw, -hh, -hd,  0, hh, -hd,
    hw, -hh, hd,  0, hh, -hd,  0, hh, hd,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

function createTriangleRight(w, h, d) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const vertices = new Float32Array([
    // Front
    -hw, -hh, hd,  hw, -hh, hd,  -hw, hh, hd,
    // Back
    hw, -hh, -hd,  -hw, -hh, -hd,  -hw, hh, -hd,
    // Bottom
    -hw, -hh, -hd,  hw, -hh, -hd,  hw, -hh, hd,
    -hw, -hh, -hd,  hw, -hh, hd,  -hw, -hh, hd,
    // Left
    -hw, -hh, hd,  -hw, hh, hd,  -hw, hh, -hd,
    -hw, -hh, hd,  -hw, hh, -hd,  -hw, -hh, -hd,
    // Slope
    hw, -hh, hd,  hw, -hh, -hd,  -hw, hh, -hd,
    hw, -hh, hd,  -hw, hh, -hd,  -hw, hh, hd,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

function createTriangleEqui(w, h, d) {
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const apex = h * 0.866; // sqrt(3)/2
  const vertices = new Float32Array([
    // Front
    -hw, -hh, hd,  hw, -hh, hd,  0, hh, 0,
    // Back left
    -hw, -hh, hd,  0, hh, 0,  -hw, -hh, -hd,
    // Back right
    hw, -hh, hd,  hw, -hh, -hd,  0, hh, 0,
    // Back
    -hw, -hh, -hd,  0, hh, 0,  hw, -hh, -hd,
    // Bottom
    -hw, -hh, -hd,  hw, -hh, -hd,  hw, -hh, hd,
    -hw, -hh, -hd,  hw, -hh, hd,  -hw, -hh, hd,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

function createPentahedron(w, h, d) {
  // Square-based pyramid
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const vertices = new Float32Array([
    // Bottom
    -hw, -hh, -hd,  hw, -hh, -hd,  hw, -hh, hd,
    -hw, -hh, -hd,  hw, -hh, hd,  -hw, -hh, hd,
    // Front
    -hw, -hh, hd,  hw, -hh, hd,  0, hh, 0,
    // Right
    hw, -hh, hd,  hw, -hh, -hd,  0, hh, 0,
    // Back
    hw, -hh, -hd,  -hw, -hh, -hd,  0, hh, 0,
    // Left
    -hw, -hh, -hd,  -hw, -hh, hd,  0, hh, 0,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

function createSpiralStep(w, h, d) {
  const geo = new THREE.CylinderGeometry(w * 0.5, w * 0.5, h * 0.25, 8, 1, false, 0, Math.PI / 2);
  return geo;
}

function createHemisphere(w, h, d) {
  const radius = Math.min(w, d) / 2;
  return new THREE.SphereGeometry(radius, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
}

function createEgg(w, h, d) {
  const geo = new THREE.SphereGeometry(Math.min(w, d) * 0.4, 12, 8);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y > 0) {
      pos.setY(i, y * 1.3);
    }
  }
  geo.computeVertexNormals();
  return geo;
}

function createGothicArch(w, h, d) {
  const geometries = [];
  const thickness = d * 0.25;
  // Left pillar
  const leftPillar = new THREE.BoxGeometry(w * 0.2, h * 0.6, thickness);
  leftPillar.translate(-w * 0.4, -h * 0.2, 0);
  geometries.push(leftPillar);
  // Right pillar
  const rightPillar = new THREE.BoxGeometry(w * 0.2, h * 0.6, thickness);
  rightPillar.translate(w * 0.4, -h * 0.2, 0);
  geometries.push(rightPillar);
  // Pointed arch top (simplified as triangular)
  const archTop = createTrianglePrism(w * 0.6, h * 0.4, thickness);
  archTop.translate(0, h * 0.3, 0);
  geometries.push(archTop);
  return safeMergeGeometries(geometries);
}

function createFlatArch(w, h, d) {
  const geo = new THREE.BoxGeometry(w, h * 0.25, d * 0.25);
  return geo;
}

function createKeystone(w, h, d) {
  const hw = w * 0.3, hh = h * 0.5, hd = d * 0.3;
  const vertices = new Float32Array([
    // Front (trapezoid)
    -hw, -hh, hd,  hw, -hh, hd,  hw * 0.7, hh, hd,
    -hw, -hh, hd,  hw * 0.7, hh, hd,  -hw * 0.7, hh, hd,
    // Back
    hw, -hh, -hd,  -hw, -hh, -hd,  -hw * 0.7, hh, -hd,
    hw, -hh, -hd,  -hw * 0.7, hh, -hd,  hw * 0.7, hh, -hd,
    // Top
    -hw * 0.7, hh, hd,  hw * 0.7, hh, hd,  hw * 0.7, hh, -hd,
    -hw * 0.7, hh, hd,  hw * 0.7, hh, -hd,  -hw * 0.7, hh, -hd,
    // Bottom
    -hw, -hh, -hd,  hw, -hh, -hd,  hw, -hh, hd,
    -hw, -hh, -hd,  hw, -hh, hd,  -hw, -hh, hd,
    // Left
    -hw, -hh, hd,  -hw * 0.7, hh, hd,  -hw * 0.7, hh, -hd,
    -hw, -hh, hd,  -hw * 0.7, hh, -hd,  -hw, -hh, -hd,
    // Right
    hw, -hh, hd,  hw, -hh, -hd,  hw * 0.7, hh, -hd,
    hw, -hh, hd,  hw * 0.7, hh, -hd,  hw * 0.7, hh, hd,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

function createStar(w, h, d) {
  const geo = new THREE.CylinderGeometry(w * 0.4, w * 0.4, h * 0.25, 5, 1);
  return geo;
}

function createHeart(w, h, d) {
  // Simplified heart shape using spheres
  const geometries = [];
  const leftLobe = new THREE.SphereGeometry(w * 0.25, 8, 6);
  leftLobe.translate(-w * 0.15, h * 0.1, 0);
  geometries.push(leftLobe);
  const rightLobe = new THREE.SphereGeometry(w * 0.25, 8, 6);
  rightLobe.translate(w * 0.15, h * 0.1, 0);
  geometries.push(rightLobe);
  const cone = new THREE.ConeGeometry(w * 0.35, h * 0.4, 8);
  cone.rotateZ(Math.PI);
  cone.translate(0, -h * 0.15, 0);
  geometries.push(cone);
  return safeMergeGeometries(geometries);
}

function createCornerTrim(w, h, d) {
  const geometries = [];
  const trim1 = new THREE.BoxGeometry(w * 0.15, h, d * 0.15);
  trim1.translate(-w * 0.425, 0, -d * 0.425);
  geometries.push(trim1);
  return safeMergeGeometries(geometries);
}

function createMolding(w, h, d) {
  const geo = new THREE.BoxGeometry(w, h, d);
  return geo;
}

function createBracket(w, h, d) {
  const geometries = [];
  // Vertical part
  const vert = new THREE.BoxGeometry(w * 0.2, h * 0.5, d * 0.2);
  vert.translate(0, h * 0.25, -d * 0.15);
  geometries.push(vert);
  // Horizontal part
  const horiz = new THREE.BoxGeometry(w * 0.2, h * 0.2, d * 0.5);
  horiz.translate(0, 0, d * 0.0);
  geometries.push(horiz);
  // Diagonal
  const diag = new THREE.BoxGeometry(w * 0.15, h * 0.5, d * 0.1);
  diag.rotateX(-Math.PI / 4);
  diag.translate(0, h * 0.1, -d * 0.05);
  geometries.push(diag);
  return safeMergeGeometries(geometries);
}

function createFinial(w, h, d) {
  const geometries = [];
  // Base
  const base = new THREE.CylinderGeometry(w * 0.25, w * 0.3, h * 0.2, 8);
  base.translate(0, -h * 0.3, 0);
  geometries.push(base);
  // Sphere top
  const sphere = new THREE.SphereGeometry(w * 0.2, 8, 6);
  sphere.translate(0, h * 0.1, 0);
  geometries.push(sphere);
  // Point
  const point = new THREE.ConeGeometry(w * 0.1, h * 0.3, 8);
  point.translate(0, h * 0.35, 0);
  geometries.push(point);
  return safeMergeGeometries(geometries);
}

function createPediment(w, h, d) {
  return createTrianglePrism(w, h * 0.5, d * 0.3);
}

function createAwning(w, h, d) {
  return createWedge(w, h * 0.25, d, 1.0);
}

function createPergola(w, h, d) {
  const geometries = [];
  const beamW = w * 0.1;
  // Cross beams
  for (let i = -1; i <= 1; i++) {
    const beam = new THREE.BoxGeometry(w, h * 0.1, beamW);
    beam.translate(0, 0, i * d * 0.35);
    geometries.push(beam);
  }
  return safeMergeGeometries(geometries);
}

function createUmbrella(w, h, d) {
  const geometries = [];
  // Pole
  const pole = new THREE.CylinderGeometry(w * 0.03, w * 0.03, h * 0.7, 8);
  pole.translate(0, -h * 0.1, 0);
  geometries.push(pole);
  // Canopy
  const canopy = new THREE.ConeGeometry(w * 0.45, h * 0.3, 8);
  canopy.rotateZ(Math.PI);
  canopy.translate(0, h * 0.25, 0);
  geometries.push(canopy);
  return safeMergeGeometries(geometries);
}

function createStool(w, h, d) {
  const geometries = [];
  // Seat
  const seat = new THREE.CylinderGeometry(w * 0.35, w * 0.3, h * 0.1, 8);
  seat.translate(0, h * 0.2, 0);
  geometries.push(seat);
  // Legs
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI / 2) + Math.PI / 4;
    const leg = new THREE.CylinderGeometry(w * 0.05, w * 0.05, h * 0.4, 6);
    leg.translate(Math.cos(angle) * w * 0.2, -h * 0.05, Math.sin(angle) * d * 0.2);
    geometries.push(leg);
  }
  return safeMergeGeometries(geometries);
}

function createBed(w, h, d) {
  const geometries = [];
  // Mattress
  const mattress = new THREE.BoxGeometry(w * 0.9, h * 0.25, d * 0.9);
  mattress.translate(0, h * 0.05, 0);
  geometries.push(mattress);
  // Headboard
  const headboard = new THREE.BoxGeometry(w * 0.9, h * 0.4, d * 0.1);
  headboard.translate(0, h * 0.1, -d * 0.45);
  geometries.push(headboard);
  // Frame
  const frame = new THREE.BoxGeometry(w, h * 0.15, d);
  frame.translate(0, -h * 0.15, 0);
  geometries.push(frame);
  return safeMergeGeometries(geometries);
}

function createDesk(w, h, d) {
  const geometries = [];
  // Top
  const top = new THREE.BoxGeometry(w, h * 0.1, d);
  top.translate(0, h * 0.35, 0);
  geometries.push(top);
  // Legs
  const legW = w * 0.08;
  const legH = h * 0.7;
  const positions = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  positions.forEach(([px, pz]) => {
    const leg = new THREE.BoxGeometry(legW, legH, legW);
    leg.translate(px * (w * 0.42), -h * 0.05, pz * (d * 0.42));
    geometries.push(leg);
  });
  // Drawer
  const drawer = new THREE.BoxGeometry(w * 0.4, h * 0.2, d * 0.8);
  drawer.translate(w * 0.25, h * 0.1, 0);
  geometries.push(drawer);
  return safeMergeGeometries(geometries);
}

function createBin(w, h, d) {
  const geometries = [];
  const thickness = 0.05;
  // Bottom
  const bottom = new THREE.BoxGeometry(w * 0.85, h * thickness, d * 0.85);
  bottom.translate(0, -h * 0.35, 0);
  geometries.push(bottom);
  // Walls
  const wallF = new THREE.BoxGeometry(w * 0.9, h * 0.7, thickness * w);
  wallF.translate(0, 0, d * 0.4);
  geometries.push(wallF);
  const wallB = wallF.clone();
  wallB.translate(0, 0, -d * 0.8);
  geometries.push(wallB);
  const wallL = new THREE.BoxGeometry(thickness * w, h * 0.7, d * 0.85);
  wallL.translate(-w * 0.42, 0, 0);
  geometries.push(wallL);
  const wallR = wallL.clone();
  wallR.translate(w * 0.84, 0, 0);
  geometries.push(wallR);
  return safeMergeGeometries(geometries);
}

function createDumpster(w, h, d) {
  const geometries = [];
  // Main body
  const body = new THREE.BoxGeometry(w * 0.95, h * 0.8, d * 0.95);
  body.translate(0, -h * 0.1, 0);
  geometries.push(body);
  // Lid
  const lid = new THREE.BoxGeometry(w, h * 0.1, d * 0.5);
  lid.translate(0, h * 0.35, -d * 0.25);
  geometries.push(lid);
  return safeMergeGeometries(geometries);
}

function createGrateFloor(w, h, d) {
  const geometries = [];
  const barW = w * 0.05;
  const spacing = w * 0.15;
  const numBars = Math.floor(w / spacing);
  for (let i = 0; i <= numBars; i++) {
    const bar = new THREE.BoxGeometry(barW, h * 0.125, d);
    bar.translate(-w * 0.4 + i * spacing, 0, 0);
    geometries.push(bar);
  }
  return safeMergeGeometries(geometries);
}

function createDuctCorner(w, h, d) {
  const geometries = [];
  const ductH = h * 0.5;
  const ductX = new THREE.BoxGeometry(w * 0.5, ductH, d * 0.5);
  ductX.translate(w * 0.25, 0, 0);
  geometries.push(ductX);
  const ductZ = new THREE.BoxGeometry(w * 0.5, ductH, d * 0.5);
  ductZ.translate(0, 0, d * 0.25);
  geometries.push(ductZ);
  return safeMergeGeometries(geometries);
}

function createHopper(w, h, d) {
  const geo = new THREE.CylinderGeometry(w * 0.2, w * 0.4, h, 8);
  return geo;
}

function createConveyor(w, h, d) {
  const geometries = [];
  // Belt
  const belt = new THREE.BoxGeometry(w, h * 0.1, d * 0.8);
  belt.translate(0, h * 0.05, 0);
  geometries.push(belt);
  // Rollers
  const roller1 = new THREE.CylinderGeometry(h * 0.1, h * 0.1, d * 0.9, 8);
  roller1.rotateX(Math.PI / 2);
  roller1.translate(-w * 0.4, -h * 0.05, 0);
  geometries.push(roller1);
  const roller2 = roller1.clone();
  roller2.translate(w * 0.8, 0, 0);
  geometries.push(roller2);
  return safeMergeGeometries(geometries);
}

function createSpotlight(w, h, d) {
  const geometries = [];
  // Housing
  const housing = new THREE.CylinderGeometry(w * 0.2, w * 0.15, h * 0.3, 8);
  housing.translate(0, h * 0.1, 0);
  geometries.push(housing);
  // Mount
  const mount = new THREE.BoxGeometry(w * 0.1, h * 0.2, d * 0.1);
  mount.translate(0, -h * 0.15, 0);
  geometries.push(mount);
  return safeMergeGeometries(geometries);
}

function createBoulder(w, h, d) {
  const geo = new THREE.DodecahedronGeometry(Math.min(w, h, d) * 0.4, 0);
  return geo;
}

function createGrass(w, h, d) {
  const geometries = [];
  for (let i = 0; i < 5; i++) {
    const blade = new THREE.ConeGeometry(w * 0.05, h * 0.25, 4);
    const x = (Math.random() - 0.5) * w * 0.6;
    const z = (Math.random() - 0.5) * d * 0.6;
    blade.translate(x, 0, z);
    geometries.push(blade);
  }
  return safeMergeGeometries(geometries);
}

function createFlower(w, h, d) {
  const geometries = [];
  // Stem
  const stem = new THREE.CylinderGeometry(w * 0.02, w * 0.02, h * 0.4, 6);
  stem.translate(0, -h * 0.05, 0);
  geometries.push(stem);
  // Flower head
  const head = new THREE.SphereGeometry(w * 0.15, 8, 6);
  head.translate(0, h * 0.2, 0);
  geometries.push(head);
  return safeMergeGeometries(geometries);
}

function createSign(w, h, d) {
  const geometries = [];
  // Post
  const post = new THREE.BoxGeometry(w * 0.1, h * 0.7, d * 0.1);
  post.translate(0, -h * 0.15, 0);
  geometries.push(post);
  // Sign face
  const face = new THREE.BoxGeometry(w * 0.8, h * 0.5, d * 0.05);
  face.translate(0, h * 0.25, 0);
  geometries.push(face);
  return safeMergeGeometries(geometries);
}

function createMonitor(w, h, d) {
  const geometries = [];
  // Screen
  const screen = new THREE.BoxGeometry(w * 0.9, h * 0.6, d * 0.1);
  screen.translate(0, h * 0.1, 0);
  geometries.push(screen);
  // Stand
  const stand = new THREE.BoxGeometry(w * 0.2, h * 0.3, d * 0.3);
  stand.translate(0, -h * 0.25, 0);
  geometries.push(stand);
  return safeMergeGeometries(geometries);
}

function createSpeaker(w, h, d) {
  const geometries = [];
  // Box
  const box = new THREE.BoxGeometry(w * 0.8, h * 0.5, d * 0.6);
  geometries.push(box);
  // Cone
  const cone = new THREE.CylinderGeometry(w * 0.25, w * 0.15, d * 0.2, 12);
  cone.rotateX(Math.PI / 2);
  cone.translate(0, 0, d * 0.35);
  geometries.push(cone);
  return safeMergeGeometries(geometries);
}

function createGem(w, h, d) {
  const geo = new THREE.OctahedronGeometry(Math.min(w, h, d) * 0.4, 0);
  geo.scale(1, 1.3, 1);
  return geo;
}

function createCrystal(w, h, d) {
  const geometries = [];
  // Main crystal
  const main = new THREE.ConeGeometry(w * 0.25, h * 0.8, 6);
  main.translate(0, h * 0.1, 0);
  geometries.push(main);
  // Smaller crystals
  const small1 = new THREE.ConeGeometry(w * 0.12, h * 0.4, 6);
  small1.translate(w * 0.2, -h * 0.1, d * 0.1);
  geometries.push(small1);
  const small2 = new THREE.ConeGeometry(w * 0.1, h * 0.3, 6);
  small2.translate(-w * 0.15, -h * 0.15, -d * 0.15);
  geometries.push(small2);
  return safeMergeGeometries(geometries);
}

function createRoofCorner(w, h, d) {
  // Corner piece where two roof slopes meet
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const vertices = new Float32Array([
    // Bottom
    -hw, -hh, -hd,  hw, -hh, -hd,  hw, -hh, hd,
    -hw, -hh, -hd,  hw, -hh, hd,  -hw, -hh, hd,
    // Front slope
    -hw, -hh, hd,  hw, -hh, hd,  hw, hh, -hd,
    // Right slope
    hw, -hh, hd,  hw, -hh, -hd,  hw, hh, -hd,
    // Back
    -hw, -hh, -hd,  hw, hh, -hd,  hw, -hh, -hd,
    // Left
    -hw, -hh, -hd,  -hw, -hh, hd,  hw, hh, -hd,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

function createRoofValley(w, h, d) {
  // Valley where two roof slopes meet (inverted peak)
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const vertices = new Float32Array([
    // Top left slope
    -hw, hh, -hd,  0, -hh, 0,  -hw, hh, hd,
    // Top right slope
    hw, hh, -hd,  hw, hh, hd,  0, -hh, 0,
    // Front
    -hw, hh, hd,  0, -hh, 0,  hw, hh, hd,
    // Back
    hw, hh, -hd,  0, -hh, 0,  -hw, hh, -hd,
    // Left
    -hw, hh, -hd,  -hw, hh, hd,  0, -hh, 0,
    // Right
    hw, hh, hd,  hw, hh, -hd,  0, -hh, 0,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

function createGable(w, h, d) {
  return createTrianglePrism(w, h, d * 0.25);
}

function createDrain(w, h, d) {
  const geometries = [];
  // Drain body
  const body = new THREE.CylinderGeometry(w * 0.3, w * 0.35, h * 0.25, 8);
  geometries.push(body);
  // Grate top
  const grate = new THREE.CylinderGeometry(w * 0.32, w * 0.32, h * 0.05, 8);
  grate.translate(0, h * 0.1, 0);
  geometries.push(grate);
  return safeMergeGeometries(geometries);
}

function createGrate(w, h, d) {
  const geometries = [];
  const barW = w * 0.08;
  const numBars = 4;
  for (let i = 0; i < numBars; i++) {
    const bar = new THREE.BoxGeometry(w * 0.9, h * 0.125, barW);
    bar.translate(0, 0, -d * 0.3 + i * d * 0.2);
    geometries.push(bar);
  }
  return safeMergeGeometries(geometries);
}

function createShield(w, h, d) {
  const geo = new THREE.BoxGeometry(w * 0.7, h * 0.125, d * 0.5);
  return geo;
}

function createBanner(w, h, d) {
  const geometries = [];
  // Pole
  const pole = new THREE.CylinderGeometry(w * 0.03, w * 0.03, h, 6);
  pole.translate(-w * 0.4, 0, 0);
  geometries.push(pole);
  // Banner cloth
  const cloth = new THREE.BoxGeometry(w * 0.7, h * 0.8, d * 0.02);
  cloth.translate(0, -h * 0.05, 0);
  geometries.push(cloth);
  return safeMergeGeometries(geometries);
}

function createPortcullis(w, h, d) {
  const geometries = [];
  const barW = w * 0.05;
  // Vertical bars
  for (let i = 0; i < 5; i++) {
    const bar = new THREE.BoxGeometry(barW, h, barW);
    bar.translate(-w * 0.4 + i * w * 0.2, 0, 0);
    geometries.push(bar);
  }
  // Horizontal bars
  for (let i = 0; i < 4; i++) {
    const bar = new THREE.BoxGeometry(w, barW, barW);
    bar.translate(0, -h * 0.35 + i * h * 0.25, 0);
    geometries.push(bar);
  }
  return safeMergeGeometries(geometries);
}

function createSeat(w, h, d) {
  const geometries = [];
  // Seat
  const seat = new THREE.BoxGeometry(w * 0.8, h * 0.15, d * 0.7);
  seat.translate(0, 0, 0);
  geometries.push(seat);
  // Back
  const back = new THREE.BoxGeometry(w * 0.8, h * 0.4, d * 0.1);
  back.translate(0, h * 0.2, -d * 0.3);
  geometries.push(back);
  return safeMergeGeometries(geometries);
}

function createHull(w, h, d) {
  // Boat hull shape
  const geo = new THREE.CylinderGeometry(w * 0.3, w * 0.4, d, 8, 1, false, 0, Math.PI);
  geo.rotateZ(Math.PI / 2);
  geo.rotateY(Math.PI / 2);
  return geo;
}

function createPropeller(w, h, d) {
  const geometries = [];
  // Hub
  const hub = new THREE.CylinderGeometry(w * 0.1, w * 0.1, h * 0.25, 8);
  geometries.push(hub);
  // Blades
  for (let i = 0; i < 3; i++) {
    const blade = new THREE.BoxGeometry(w * 0.4, h * 0.05, d * 0.1);
    blade.rotateY(i * Math.PI * 2 / 3);
    blade.translate(w * 0.2, 0, 0);
    blade.rotateY(i * Math.PI * 2 / 3);
    geometries.push(blade);
  }
  return safeMergeGeometries(geometries);
}

function createWing(w, h, d) {
  const hw = w / 2, hh = h * 0.125 / 2, hd = d / 2;
  const vertices = new Float32Array([
    // Top
    -hw, hh, -hd,  hw * 0.3, hh, -hd,  hw, hh, hd,
    -hw, hh, -hd,  hw, hh, hd,  -hw, hh, hd,
    // Bottom
    -hw, -hh, hd,  hw, -hh, hd,  hw * 0.3, -hh, -hd,
    -hw, -hh, hd,  hw * 0.3, -hh, -hd,  -hw, -hh, -hd,
    // Front
    -hw, hh, hd,  hw, hh, hd,  hw, -hh, hd,
    -hw, hh, hd,  hw, -hh, hd,  -hw, -hh, hd,
    // Back
    hw * 0.3, hh, -hd,  -hw, hh, -hd,  -hw, -hh, -hd,
    hw * 0.3, hh, -hd,  -hw, -hh, -hd,  hw * 0.3, -hh, -hd,
    // Tip
    hw, hh, hd,  hw * 0.3, hh, -hd,  hw * 0.3, -hh, -hd,
    hw, hh, hd,  hw * 0.3, -hh, -hd,  hw, -hh, hd,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

// === OIL & GAS HELPERS ===

// Derrick leg - vertical lattice leg with cross bracing
function createDerrickLeg(w, h, d) {
  const beamSize = Math.min(w, d) * 0.1;
  const parts = [];

  // Main vertical beam
  const mainBeam = new THREE.BoxGeometry(beamSize, h, beamSize);
  parts.push(mainBeam);

  // Small horizontal braces pointing outward
  const braceLen = w * 0.35;
  for (let i = 0; i < 3; i++) {
    const yPos = -h * 0.35 + i * h * 0.35;
    const brace = new THREE.BoxGeometry(braceLen, beamSize * 0.6, beamSize * 0.6);
    brace.translate(braceLen * 0.5, yPos, 0);
    parts.push(brace);
  }

  // Diagonal brace
  const diagLen = Math.sqrt(h * h * 0.25 + braceLen * braceLen * 0.25) * 0.8;
  const diagAngle = Math.atan2(h * 0.35, braceLen * 0.5);
  const diag = new THREE.BoxGeometry(beamSize * 0.5, diagLen, beamSize * 0.5);
  diag.rotateZ(-diagAngle);
  diag.translate(braceLen * 0.25, 0, 0);
  parts.push(diag);

  return mergeGeometries(parts, false) || parts[0];
}

// Derrick cross bracing - X-shaped brace
function createDerrickCross(w, h, d) {
  const beamSize = Math.min(w, d) * 0.08;
  const parts = [];

  // Diagonal braces forming an X
  const brace1 = new THREE.BoxGeometry(beamSize, Math.sqrt(w * w + h * h) * 0.5, beamSize);
  brace1.rotateZ(Math.PI * 0.25);
  parts.push(brace1);

  const brace2 = new THREE.BoxGeometry(beamSize, Math.sqrt(w * w + h * h) * 0.5, beamSize);
  brace2.rotateZ(-Math.PI * 0.25);
  parts.push(brace2);

  return mergeGeometries(parts, false) || parts[0];
}

// Derrick platform - grated platform
function createDerrickPlatform(w, h, d) {
  const parts = [];

  // Main platform
  const platform = new THREE.BoxGeometry(w * 0.9, h * 0.25, d * 0.9);
  parts.push(platform);

  // Support frame
  const frame1 = new THREE.BoxGeometry(w * 0.95, h * 0.1, d * 0.05);
  frame1.translate(0, -h * 0.08, d * 0.45);
  parts.push(frame1);

  const frame2 = new THREE.BoxGeometry(w * 0.95, h * 0.1, d * 0.05);
  frame2.translate(0, -h * 0.08, -d * 0.45);
  parts.push(frame2);

  return mergeGeometries(parts, false) || parts[0];
}

// Pump jack - nodding donkey oil pump
function createPumpJack(w, h, d) {
  const parts = [];

  // Base platform
  const basePlate = new THREE.BoxGeometry(w * 0.7, h * 0.08, d * 0.5);
  basePlate.translate(0, -h * 0.46, 0);
  parts.push(basePlate);

  // Motor/gearbox housing
  const motor = new THREE.BoxGeometry(w * 0.25, h * 0.2, d * 0.3);
  motor.translate(-w * 0.15, -h * 0.32, 0);
  parts.push(motor);

  // Samson post (A-frame support)
  const postLeft = new THREE.BoxGeometry(w * 0.08, h * 0.55, d * 0.08);
  postLeft.translate(-w * 0.05, -h * 0.125, d * 0.12);
  parts.push(postLeft);

  const postRight = new THREE.BoxGeometry(w * 0.08, h * 0.55, d * 0.08);
  postRight.translate(-w * 0.05, -h * 0.125, -d * 0.12);
  parts.push(postRight);

  // Cross beam on samson post
  const crossBeam = new THREE.BoxGeometry(w * 0.1, h * 0.08, d * 0.35);
  crossBeam.translate(-w * 0.05, h * 0.15, 0);
  parts.push(crossBeam);

  // Walking beam (the rocking arm)
  const beam = new THREE.BoxGeometry(w * 0.85, h * 0.08, d * 0.1);
  beam.translate(w * 0.1, h * 0.22, 0);
  parts.push(beam);

  // Horse head (curved end)
  const horseHead = new THREE.BoxGeometry(w * 0.1, h * 0.15, d * 0.08);
  horseHead.translate(w * 0.48, h * 0.15, 0);
  parts.push(horseHead);

  // Bridle (hanging cable guide)
  const bridle = new THREE.BoxGeometry(w * 0.04, h * 0.12, d * 0.04);
  bridle.translate(w * 0.48, h * 0.02, 0);
  parts.push(bridle);

  // Pitman arm (connects beam to crank)
  const pitman = new THREE.BoxGeometry(w * 0.05, h * 0.25, d * 0.05);
  pitman.rotateZ(Math.PI * 0.15);
  pitman.translate(-w * 0.25, h * 0.0, 0);
  parts.push(pitman);

  // Crank/counterweight
  const crank = new THREE.CylinderGeometry(d * 0.12, d * 0.12, w * 0.08, 12);
  crank.rotateZ(Math.PI / 2);
  crank.translate(-w * 0.28, -h * 0.15, 0);
  parts.push(crank);

  // Counter weights (on crank)
  const weight1 = new THREE.BoxGeometry(w * 0.06, h * 0.18, d * 0.08);
  weight1.translate(-w * 0.28, -h * 0.06, d * 0.1);
  parts.push(weight1);

  const weight2 = new THREE.BoxGeometry(w * 0.06, h * 0.18, d * 0.08);
  weight2.translate(-w * 0.28, -h * 0.06, -d * 0.1);
  parts.push(weight2);

  return mergeGeometries(parts, false) || parts[0];
}

// Horizontal oil storage tank
function createOilTank(w, h, d) {
  const parts = [];
  const radius = Math.min(h, d) * 0.4;

  // Main tank body (horizontal cylinder)
  const tank = new THREE.CylinderGeometry(radius, radius, w * 0.8, 16, 1, false);
  tank.rotateZ(Math.PI / 2);
  parts.push(tank);

  // End caps using hemispheres (proper orientation)
  const cap1 = new THREE.SphereGeometry(radius, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  cap1.rotateZ(Math.PI / 2);
  cap1.translate(w * 0.4, 0, 0);
  parts.push(cap1);

  const cap2 = new THREE.SphereGeometry(radius, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  cap2.rotateZ(-Math.PI / 2);
  cap2.translate(-w * 0.4, 0, 0);
  parts.push(cap2);

  // Support saddles (curved supports)
  const saddle1 = new THREE.BoxGeometry(w * 0.1, h * 0.15, d * 0.5);
  saddle1.translate(-w * 0.25, -radius - h * 0.075, 0);
  parts.push(saddle1);

  const saddle2 = new THREE.BoxGeometry(w * 0.1, h * 0.15, d * 0.5);
  saddle2.translate(w * 0.25, -radius - h * 0.075, 0);
  parts.push(saddle2);

  // Legs under saddles
  const leg1 = new THREE.BoxGeometry(w * 0.08, h * 0.2, d * 0.08);
  leg1.translate(-w * 0.25, -radius - h * 0.25, d * 0.2);
  parts.push(leg1);

  const leg2 = new THREE.BoxGeometry(w * 0.08, h * 0.2, d * 0.08);
  leg2.translate(-w * 0.25, -radius - h * 0.25, -d * 0.2);
  parts.push(leg2);

  const leg3 = new THREE.BoxGeometry(w * 0.08, h * 0.2, d * 0.08);
  leg3.translate(w * 0.25, -radius - h * 0.25, d * 0.2);
  parts.push(leg3);

  const leg4 = new THREE.BoxGeometry(w * 0.08, h * 0.2, d * 0.08);
  leg4.translate(w * 0.25, -radius - h * 0.25, -d * 0.2);
  parts.push(leg4);

  return mergeGeometries(parts, false) || parts[0];
}

// Smaller vertical oil tank
function createOilTankSmall(w, h, d) {
  const parts = [];

  // Main tank body
  const tank = new THREE.CylinderGeometry(Math.min(w, d) * 0.35, Math.min(w, d) * 0.35, h * 0.45, 12);
  parts.push(tank);

  // Top dome
  const dome = new THREE.SphereGeometry(Math.min(w, d) * 0.35, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  dome.translate(0, h * 0.225, 0);
  parts.push(dome);

  // Pipe on top
  const pipe = new THREE.CylinderGeometry(w * 0.05, w * 0.05, h * 0.15, 8);
  pipe.translate(0, h * 0.35, 0);
  parts.push(pipe);

  return mergeGeometries(parts, false) || parts[0];
}

// Well head
function createWellHead(w, h, d) {
  const parts = [];

  // Base flange
  const base = new THREE.CylinderGeometry(w * 0.35, w * 0.4, h * 0.15, 8);
  base.translate(0, -h * 0.175, 0);
  parts.push(base);

  // Christmas tree (valve assembly)
  const tree = new THREE.BoxGeometry(w * 0.3, h * 0.25, d * 0.3);
  tree.translate(0, h * 0.025, 0);
  parts.push(tree);

  // Main valve
  const valve = new THREE.CylinderGeometry(w * 0.12, w * 0.12, h * 0.15, 8);
  valve.translate(0, h * 0.175, 0);
  parts.push(valve);

  // Side outlet
  const outlet = new THREE.CylinderGeometry(w * 0.08, w * 0.08, d * 0.25, 8);
  outlet.rotateX(Math.PI / 2);
  outlet.translate(0, 0, d * 0.25);
  parts.push(outlet);

  return mergeGeometries(parts, false) || parts[0];
}

// Oil barrel (55 gallon drum)
function createOilBarrel(w, h, d) {
  const r = Math.min(w, d) * 0.4;
  const parts = [];

  // Main barrel with slight bulge
  const barrel = new THREE.CylinderGeometry(r * 0.95, r * 0.95, h * 0.9, 12);
  parts.push(barrel);

  // Top rim
  const topRim = new THREE.TorusGeometry(r * 0.85, r * 0.08, 6, 12);
  topRim.rotateX(Math.PI / 2);
  topRim.translate(0, h * 0.45, 0);
  parts.push(topRim);

  // Bottom rim
  const bottomRim = new THREE.TorusGeometry(r * 0.85, r * 0.08, 6, 12);
  bottomRim.rotateX(Math.PI / 2);
  bottomRim.translate(0, -h * 0.45, 0);
  parts.push(bottomRim);

  // Middle band
  const midBand = new THREE.TorusGeometry(r * 0.95, r * 0.05, 6, 12);
  midBand.rotateX(Math.PI / 2);
  parts.push(midBand);

  return mergeGeometries(parts, false) || parts[0];
}

// ============================================
// ROCK VARIATIONS
// ============================================

function createRockSmall(w, h, d) {
  const geo = new THREE.DodecahedronGeometry(Math.min(w, h, d) * 0.25, 0);
  geo.translate(0, -h * 0.15, 0);
  return geo;
}

function createRockLarge(w, h, d) {
  const parts = [];
  // Main boulder
  const main = new THREE.DodecahedronGeometry(Math.min(w, d) * 0.45, 1);
  main.scale(1, 0.7, 1);
  parts.push(main);
  // Secondary bump
  const bump = new THREE.DodecahedronGeometry(Math.min(w, d) * 0.25, 0);
  bump.translate(w * 0.2, h * 0.1, d * 0.15);
  parts.push(bump);
  return mergeGeometries(parts, false) || parts[0];
}

function createRockFlat(w, h, d) {
  const geo = new THREE.DodecahedronGeometry(Math.min(w, d) * 0.4, 1);
  geo.scale(1, 0.3, 1);
  geo.translate(0, -h * 0.2, 0);
  return geo;
}

function createRockTall(w, h, d) {
  const geo = new THREE.DodecahedronGeometry(Math.min(w, d) * 0.3, 1);
  geo.scale(0.7, 1.5, 0.7);
  return geo;
}

function createRockJagged(w, h, d) {
  const parts = [];
  // Base
  const base = new THREE.DodecahedronGeometry(Math.min(w, d) * 0.35, 0);
  base.scale(1, 0.6, 1);
  base.translate(0, -h * 0.15, 0);
  parts.push(base);
  // Jagged spike 1
  const spike1 = new THREE.ConeGeometry(w * 0.15, h * 0.4, 4);
  spike1.translate(-w * 0.1, h * 0.1, -d * 0.05);
  spike1.rotateZ(0.2);
  parts.push(spike1);
  // Jagged spike 2
  const spike2 = new THREE.ConeGeometry(w * 0.12, h * 0.35, 4);
  spike2.translate(w * 0.1, h * 0.05, d * 0.1);
  spike2.rotateZ(-0.15);
  parts.push(spike2);
  return mergeGeometries(parts, false) || parts[0];
}

function createRockCluster(w, h, d) {
  const parts = [];
  const count = 4 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const size = Math.min(w, d) * (0.15 + Math.random() * 0.2);
    const rock = new THREE.DodecahedronGeometry(size, 0);
    const x = (Math.random() - 0.5) * w * 0.6;
    const z = (Math.random() - 0.5) * d * 0.6;
    const y = -h * 0.25 + size;
    rock.translate(x, y, z);
    parts.push(rock);
  }
  return mergeGeometries(parts, false) || parts[0];
}

function createRockPile(w, h, d) {
  const parts = [];
  // Bottom layer - larger rocks
  for (let i = 0; i < 3; i++) {
    const size = Math.min(w, d) * (0.2 + Math.random() * 0.15);
    const rock = new THREE.DodecahedronGeometry(size, 0);
    const angle = (i / 3) * Math.PI * 2;
    rock.translate(Math.cos(angle) * w * 0.2, -h * 0.2, Math.sin(angle) * d * 0.2);
    parts.push(rock);
  }
  // Top layer - smaller rocks
  for (let i = 0; i < 2; i++) {
    const size = Math.min(w, d) * (0.12 + Math.random() * 0.1);
    const rock = new THREE.DodecahedronGeometry(size, 0);
    rock.translate((Math.random() - 0.5) * w * 0.3, h * 0.05, (Math.random() - 0.5) * d * 0.3);
    parts.push(rock);
  }
  return mergeGeometries(parts, false) || parts[0];
}

function createPebbles(w, h, d) {
  const parts = [];
  const count = 8 + Math.floor(Math.random() * 5);
  for (let i = 0; i < count; i++) {
    const size = Math.min(w, d) * (0.05 + Math.random() * 0.08);
    const pebble = new THREE.SphereGeometry(size, 5, 4);
    pebble.scale(1, 0.6, 1);
    const x = (Math.random() - 0.5) * w * 0.7;
    const z = (Math.random() - 0.5) * d * 0.7;
    pebble.translate(x, -h * 0.35, z);
    parts.push(pebble);
  }
  return mergeGeometries(parts, false) || parts[0];
}

function createSlate(w, h, d) {
  const parts = [];
  // Stack of flat slate pieces
  for (let i = 0; i < 3; i++) {
    const slate = new THREE.BoxGeometry(
      w * (0.6 + Math.random() * 0.3),
      h * 0.08,
      d * (0.5 + Math.random() * 0.3)
    );
    slate.translate(
      (Math.random() - 0.5) * w * 0.15,
      -h * 0.25 + i * h * 0.1,
      (Math.random() - 0.5) * d * 0.15
    );
    slate.rotateY(Math.random() * 0.3);
    parts.push(slate);
  }
  return mergeGeometries(parts, false) || parts[0];
}

// ============================================
// CRYSTAL VARIATIONS
// ============================================

function createCrystalSmall(w, h, d) {
  const geo = new THREE.OctahedronGeometry(Math.min(w, d) * 0.2, 0);
  geo.scale(0.6, 1, 0.6);
  geo.translate(0, -h * 0.15, 0);
  return geo;
}

function createCrystalLarge(w, h, d) {
  const parts = [];
  // Main crystal
  const main = new THREE.OctahedronGeometry(Math.min(w, d) * 0.35, 0);
  main.scale(0.7, 1.3, 0.7);
  parts.push(main);
  // Side crystal
  const side = new THREE.OctahedronGeometry(Math.min(w, d) * 0.2, 0);
  side.scale(0.6, 1, 0.6);
  side.translate(w * 0.25, -h * 0.1, d * 0.15);
  side.rotateZ(0.3);
  parts.push(side);
  return mergeGeometries(parts, false) || parts[0];
}

function createCrystalCluster(w, h, d) {
  const parts = [];
  const count = 5 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const size = Math.min(w, d) * (0.1 + Math.random() * 0.15);
    const crystal = new THREE.OctahedronGeometry(size, 0);
    crystal.scale(0.5, 1 + Math.random() * 0.5, 0.5);
    const x = (Math.random() - 0.5) * w * 0.5;
    const z = (Math.random() - 0.5) * d * 0.5;
    const y = -h * 0.2 + size * 0.5;
    crystal.translate(x, y, z);
    crystal.rotateZ((Math.random() - 0.5) * 0.4);
    crystal.rotateX((Math.random() - 0.5) * 0.4);
    parts.push(crystal);
  }
  return mergeGeometries(parts, false) || parts[0];
}

function createCrystalSpike(w, h, d) {
  const geo = new THREE.OctahedronGeometry(Math.min(w, d) * 0.25, 0);
  geo.scale(0.4, 2, 0.4);
  return geo;
}

function createCrystalFlat(w, h, d) {
  const parts = [];
  // Flat hexagonal base
  const base = new THREE.CylinderGeometry(Math.min(w, d) * 0.35, Math.min(w, d) * 0.4, h * 0.15, 6);
  base.translate(0, -h * 0.3, 0);
  parts.push(base);
  // Small crystals on top
  for (let i = 0; i < 3; i++) {
    const crystal = new THREE.OctahedronGeometry(Math.min(w, d) * 0.1, 0);
    crystal.scale(0.5, 1, 0.5);
    const angle = (i / 3) * Math.PI * 2;
    crystal.translate(Math.cos(angle) * w * 0.15, -h * 0.1, Math.sin(angle) * d * 0.15);
    parts.push(crystal);
  }
  return mergeGeometries(parts, false) || parts[0];
}

function createCrystalShard(w, h, d) {
  const parts = [];
  // Main shard - elongated and angular
  const main = new THREE.OctahedronGeometry(Math.min(w, d) * 0.2, 0);
  main.scale(0.3, 1.8, 0.5);
  main.rotateZ(0.2);
  parts.push(main);
  // Broken piece
  const piece = new THREE.OctahedronGeometry(Math.min(w, d) * 0.1, 0);
  piece.scale(0.4, 0.8, 0.3);
  piece.translate(w * 0.15, -h * 0.2, d * 0.1);
  piece.rotateZ(-0.5);
  parts.push(piece);
  return mergeGeometries(parts, false) || parts[0];
}

function createCrystalFormation(w, h, d) {
  const parts = [];
  // Central large crystal
  const center = new THREE.OctahedronGeometry(Math.min(w, d) * 0.25, 0);
  center.scale(0.6, 1.5, 0.6);
  parts.push(center);
  // Surrounding crystals at angles
  const angles = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
  for (let i = 0; i < angles.length; i++) {
    const crystal = new THREE.OctahedronGeometry(Math.min(w, d) * 0.15, 0);
    crystal.scale(0.5, 1 + Math.random() * 0.3, 0.5);
    const dist = Math.min(w, d) * 0.25;
    crystal.translate(Math.cos(angles[i]) * dist, -h * 0.1, Math.sin(angles[i]) * dist);
    crystal.rotateZ((Math.random() - 0.5) * 0.5);
    parts.push(crystal);
  }
  return mergeGeometries(parts, false) || parts[0];
}

// ============================================
// CAVE/NATURE ELEMENTS
// ============================================

function createStalactite(w, h, d) {
  const geo = new THREE.ConeGeometry(Math.min(w, d) * 0.25, h * 0.8, 6);
  geo.rotateX(Math.PI); // Point downward
  geo.translate(0, h * 0.1, 0);
  return geo;
}

function createStalagmite(w, h, d) {
  const parts = [];
  // Main spike
  const main = new THREE.ConeGeometry(Math.min(w, d) * 0.2, h * 0.7, 6);
  main.translate(0, -h * 0.15, 0);
  parts.push(main);
  // Wider base
  const base = new THREE.ConeGeometry(Math.min(w, d) * 0.3, h * 0.2, 6);
  base.translate(0, -h * 0.4, 0);
  parts.push(base);
  return mergeGeometries(parts, false) || parts[0];
}

function createMushroom(w, h, d) {
  const parts = [];
  // Stem
  const stem = new THREE.CylinderGeometry(w * 0.08, w * 0.1, h * 0.4, 8);
  stem.translate(0, -h * 0.1, 0);
  parts.push(stem);
  // Cap
  const cap = new THREE.SphereGeometry(Math.min(w, d) * 0.25, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.6);
  cap.translate(0, h * 0.15, 0);
  parts.push(cap);
  return mergeGeometries(parts, false) || parts[0];
}

function createMushroomCluster(w, h, d) {
  const parts = [];
  const positions = [
    { x: 0, z: 0, scale: 1 },
    { x: w * 0.2, z: d * 0.15, scale: 0.7 },
    { x: -w * 0.15, z: d * 0.2, scale: 0.6 },
    { x: w * 0.1, z: -d * 0.2, scale: 0.5 }
  ];
  for (const pos of positions) {
    // Stem
    const stem = new THREE.CylinderGeometry(w * 0.05 * pos.scale, w * 0.06 * pos.scale, h * 0.3 * pos.scale, 6);
    stem.translate(pos.x, -h * 0.2 + h * 0.15 * pos.scale, pos.z);
    parts.push(stem);
    // Cap
    const cap = new THREE.SphereGeometry(Math.min(w, d) * 0.15 * pos.scale, 6, 5, 0, Math.PI * 2, 0, Math.PI * 0.6);
    cap.translate(pos.x, -h * 0.05 + h * 0.15 * pos.scale, pos.z);
    parts.push(cap);
  }
  return mergeGeometries(parts, false) || parts[0];
}

function createMoss(w, h, d) {
  const parts = [];
  // Lumpy moss covering
  const count = 6 + Math.floor(Math.random() * 4);
  for (let i = 0; i < count; i++) {
    const size = Math.min(w, d) * (0.1 + Math.random() * 0.15);
    const moss = new THREE.SphereGeometry(size, 5, 4);
    moss.scale(1, 0.4, 1);
    const x = (Math.random() - 0.5) * w * 0.7;
    const z = (Math.random() - 0.5) * d * 0.7;
    moss.translate(x, -h * 0.35, z);
    parts.push(moss);
  }
  return mergeGeometries(parts, false) || parts[0];
}

function createVineBlock(w, h, d) {
  const parts = [];
  // Vertical hanging vines
  for (let i = 0; i < 4; i++) {
    const x = (Math.random() - 0.5) * w * 0.6;
    const z = (Math.random() - 0.5) * d * 0.6;
    const length = h * (0.5 + Math.random() * 0.4);
    const vine = new THREE.CylinderGeometry(w * 0.02, w * 0.015, length, 4);
    vine.translate(x, -length * 0.3, z);
    parts.push(vine);
    // Add some leaves
    if (Math.random() > 0.5) {
      const leaf = new THREE.SphereGeometry(w * 0.06, 4, 3);
      leaf.scale(1, 0.3, 0.6);
      leaf.translate(x + w * 0.05, -length * 0.2 + h * 0.1, z);
      parts.push(leaf);
    }
  }
  return mergeGeometries(parts, false) || parts[0];
}

function createCoral(w, h, d) {
  const parts = [];
  // Branching coral structure
  const branchCount = 4 + Math.floor(Math.random() * 3);
  for (let i = 0; i < branchCount; i++) {
    const angle = (i / branchCount) * Math.PI * 2 + Math.random() * 0.5;
    const length = h * (0.3 + Math.random() * 0.3);
    const branch = new THREE.CylinderGeometry(w * 0.04, w * 0.06, length, 5);
    branch.translate(0, length * 0.3, 0);
    branch.rotateZ((Math.random() - 0.5) * 0.8);
    branch.rotateY(angle);
    branch.translate(0, -h * 0.2, 0);
    parts.push(branch);
    // Tips
    const tip = new THREE.SphereGeometry(w * 0.06, 5, 4);
    tip.translate(
      Math.sin(angle) * length * 0.3,
      length * 0.4 - h * 0.2,
      Math.cos(angle) * length * 0.3
    );
    parts.push(tip);
  }
  return mergeGeometries(parts, false) || parts[0];
}

