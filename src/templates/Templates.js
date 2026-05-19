// Predefined templates for quick building - organized by category

export const TEMPLATE_CATEGORIES = {
  city: {
    label: 'City',
    templates: ['cityBlock', 'skyscraper', 'apartmentBuilding', 'shoppingMall', 'trainStation']
  },
  buildings: {
    label: 'Buildings',
    templates: ['cottage', 'townhouse', 'officeBuilding', 'warehouse']
  },
  medieval: {
    label: 'Medieval',
    templates: ['castleWall', 'guardTower', 'dungeon', 'tavern']
  },
  nature: {
    label: 'Nature',
    templates: ['oakTree', 'rockGarden', 'pond', 'campsite']
  },
  industrial: {
    label: 'Industrial',
    templates: ['factory', 'pipeNetwork', 'storageYard', 'refinery', 'industrialComplex', 'powerPlant', 'warehouseDistrict']
  },
  energy: {
    label: 'Energy',
    templates: ['solarArrayLarge', 'windTurbine', 'substationYard', 'coolingTowers']
  },
  modern: {
    label: 'Modern',
    templates: ['rooftopTerrace', 'parkingLot', 'busStop', 'solarFarm', 'gasStation', 'helipad']
  },
  furniture: {
    label: 'Furniture',
    templates: ['diningRoom', 'livingRoom', 'workshop', 'cellar']
  },
  infrastructure: {
    label: 'Infrastructure',
    templates: ['stoneBridge', 'streetCorner', 'plaza', 'stairway', 'highway', 'harbor']
  },
  oil: {
    label: 'Oil & Gas',
    templates: ['oilDerrick', 'pumpJackStation', 'oilStorageFacility', 'oilFieldSite', 'offshorePlatform', 'oilRefinery', 'tankerLoadingStation']
  },
  alien: {
    label: 'Alien Structures',
    templates: ['nexusSpire', 'hiveNode', 'energyPylon', 'growthChamber', 'scoutWisp', 'sentinel', 'construct']
  },
  ammo: {
    label: 'Ammo Factory',
    templates: ['ammoFactoryHall', 'assemblyLine', 'ammoStorageBunker', 'gunpowderDepot', 'artilleryAssembly', 'shippingDock', 'munitionsRack', 'tankFactory', 'productionComplex', 'missileBay', 'radarStation', 'energyNode', 'antennaArray', 'ammoFactoryOpen', 'materialRefinery']
  },
  ruins: {
    label: 'Ruins & Huts',
    templates: ['decayedTenement', 'ancientTemple', 'hutVillage', 'triumphalArch', 'aqueductRuin', 'watchtower']
  }
};

export const TEMPLATES = {
  // =====================
  // BUILDINGS
  // =====================
  cottage: {
    name: 'Cozy Cottage',
    category: 'buildings',
    description: 'A charming rustic cottage with detailed architecture',
    blocks: [
      // === FOUNDATION & STONE BASE ===
      ...makeFloor(-1, 0, -1, 6, 6, '#5D4037'),
      // Stone foundation visible at edges
      { type: 'slab', position: { x: -1, y: 0, z: -1 }, color: '#696969' },
      { type: 'slab', position: { x: -1, y: 0, z: 4 }, color: '#696969' },
      { type: 'slab', position: { x: 4, y: 0, z: -1 }, color: '#696969' },
      { type: 'slab', position: { x: 4, y: 0, z: 4 }, color: '#696969' },

      // === WALLS - Timber Frame Style ===
      // Front wall (Z=0)
      { type: 'cube', position: { x: 0, y: 1, z: 0 }, color: '#DEB887' },
      { type: 'cube', position: { x: 1, y: 1, z: 0 }, color: '#F5DEB3' },
      { type: 'cube', position: { x: 2, y: 1, z: 0 }, color: '#F5DEB3' },
      { type: 'cube', position: { x: 3, y: 1, z: 0 }, color: '#DEB887' },
      { type: 'cube', position: { x: 0, y: 2, z: 0 }, color: '#DEB887' },
      { type: 'cube', position: { x: 3, y: 2, z: 0 }, color: '#DEB887' },
      // Back wall (Z=3)
      { type: 'cube', position: { x: 0, y: 1, z: 3 }, color: '#DEB887' },
      { type: 'cube', position: { x: 3, y: 1, z: 3 }, color: '#DEB887' },
      { type: 'cube', position: { x: 0, y: 2, z: 3 }, color: '#DEB887' },
      { type: 'cube', position: { x: 1, y: 2, z: 3 }, color: '#F5DEB3' },
      { type: 'cube', position: { x: 2, y: 2, z: 3 }, color: '#F5DEB3' },
      { type: 'cube', position: { x: 3, y: 2, z: 3 }, color: '#DEB887' },
      // Side walls
      { type: 'cube', position: { x: 0, y: 1, z: 1 }, color: '#DEB887' },
      { type: 'cube', position: { x: 0, y: 1, z: 2 }, color: '#DEB887' },
      { type: 'cube', position: { x: 0, y: 2, z: 1 }, color: '#F5DEB3' },
      { type: 'cube', position: { x: 0, y: 2, z: 2 }, color: '#F5DEB3' },
      { type: 'cube', position: { x: 3, y: 1, z: 1 }, color: '#DEB887' },
      { type: 'cube', position: { x: 3, y: 1, z: 2 }, color: '#DEB887' },
      { type: 'cube', position: { x: 3, y: 2, z: 1 }, color: '#F5DEB3' },
      { type: 'cube', position: { x: 3, y: 2, z: 2 }, color: '#F5DEB3' },

      // === TIMBER FRAME DETAILS ===
      { type: 'beam2X', position: { x: 0, y: 1, z: 0 }, color: '#5D4037' },
      { type: 'beam2X', position: { x: 2, y: 1, z: 0 }, color: '#5D4037' },
      { type: 'beam2Z', position: { x: 0, y: 1, z: 0 }, color: '#5D4037' },
      { type: 'beam2Z', position: { x: 0, y: 1, z: 2 }, color: '#5D4037' },
      { type: 'beam2Z', position: { x: 3, y: 1, z: 0 }, color: '#5D4037' },
      { type: 'beam2Z', position: { x: 3, y: 1, z: 2 }, color: '#5D4037' },

      // === WINDOWS ===
      // Front windows with shutters
      { type: 'windowFrame', position: { x: 1, y: 2, z: 0 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 2, y: 2, z: 0 }, color: '#8B4513' },
      { type: 'windowSill', position: { x: 1, y: 1, z: -1 }, color: '#5D4037' },
      { type: 'windowSill', position: { x: 2, y: 1, z: -1 }, color: '#5D4037' },
      // Side window
      { type: 'windowFrame', position: { x: 0, y: 2, z: 2 }, color: '#8B4513', rotation: { x: 0, y: 90, z: 0 } },

      // === DOOR (Back) ===
      { type: 'doorFrame', position: { x: 1, y: 1, z: 3 }, color: '#654321' },
      { type: 'doorFrame', position: { x: 2, y: 1, z: 3 }, color: '#654321' },
      // Door step
      { type: 'step', position: { x: 1, y: 0, z: 4 }, color: '#808080' },
      { type: 'step', position: { x: 2, y: 0, z: 4 }, color: '#808080' },

      // === ROOF - Peaked with Gable ===
      // Front slope
      { type: 'wedge', position: { x: 0, y: 3, z: 0 }, color: '#8B0000' },
      { type: 'wedge', position: { x: 1, y: 3, z: 0 }, color: '#8B0000' },
      { type: 'wedge', position: { x: 2, y: 3, z: 0 }, color: '#8B0000' },
      { type: 'wedge', position: { x: 3, y: 3, z: 0 }, color: '#8B0000' },
      // Back slope
      { type: 'wedge', position: { x: 0, y: 3, z: 3 }, color: '#8B0000', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'wedge', position: { x: 1, y: 3, z: 3 }, color: '#8B0000', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'wedge', position: { x: 2, y: 3, z: 3 }, color: '#8B0000', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'wedge', position: { x: 3, y: 3, z: 3 }, color: '#8B0000', rotation: { x: 0, y: 180, z: 0 } },
      // Ridge row
      ...makeRow(0, 3, 1, 4, 'X', 'slab', '#8B0000'),
      ...makeRow(0, 3, 2, 4, 'X', 'slab', '#8B0000'),
      // Roof overhang
      { type: 'wedgeFlat', position: { x: -1, y: 3, z: 0 }, color: '#8B0000' },
      { type: 'wedgeFlat', position: { x: 4, y: 3, z: 0 }, color: '#8B0000' },
      { type: 'wedgeFlat', position: { x: -1, y: 3, z: 3 }, color: '#8B0000', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'wedgeFlat', position: { x: 4, y: 3, z: 3 }, color: '#8B0000', rotation: { x: 0, y: 180, z: 0 } },

      // === CHIMNEY ===
      { type: 'chimney', position: { x: 3, y: 3, z: 1 }, color: '#8B4513' },
      { type: 'chimney', position: { x: 3, y: 4, z: 1 }, color: '#704214' },
      { type: 'chimney', position: { x: 3, y: 5, z: 1 }, color: '#5D3A1A' },

      // === PORCH ===
      { type: 'slab', position: { x: 1, y: 0, z: -1 }, color: '#5D4037' },
      { type: 'slab', position: { x: 2, y: 0, z: -1 }, color: '#5D4037' },
      { type: 'pillar2', position: { x: 1, y: 0, z: -1 }, color: '#5D4037' },
      { type: 'pillar2', position: { x: 2, y: 0, z: -1 }, color: '#5D4037' },
      { type: 'beam2X', position: { x: 1, y: 1, z: -1 }, color: '#5D4037' },

      // === GARDEN ELEMENTS ===
      { type: 'planter', position: { x: -1, y: 0, z: 1 }, color: '#8B4513' },
      { type: 'flower', position: { x: -1, y: 1, z: 1 }, color: '#FF69B4' },
      { type: 'planter', position: { x: -1, y: 0, z: 2 }, color: '#8B4513' },
      { type: 'bush', position: { x: -1, y: 1, z: 2 }, color: '#228B22' },
      { type: 'barrel', position: { x: 4, y: 0, z: 2 }, color: '#8B4513' },
      { type: 'rock', position: { x: 4, y: 0, z: 0 }, color: '#696969' },

      // === FENCE ===
      { type: 'fence', position: { x: -1, y: 0, z: -1 }, color: '#DEB887' },
      { type: 'fence', position: { x: 0, y: 0, z: -1 }, color: '#DEB887' },
      { type: 'fence', position: { x: 3, y: 0, z: -1 }, color: '#DEB887' },
      { type: 'fence', position: { x: 4, y: 0, z: -1 }, color: '#DEB887' },
    ]
  },

  townhouse: {
    name: 'Town House',
    category: 'buildings',
    description: 'A tall narrow townhouse with baluster railings',
    blocks: [
      // Base
      ...makeFloor(0, 0, 0, 3, 3, '#696969'),
      // Floor 1
      ...makeHollowFloor(0, 1, 0, 3, 3, '#F5F5DC'),
      // Floor 2
      ...makeHollowFloor(0, 2, 0, 3, 3, '#F5F5DC'),
      // Floor 3
      ...makeHollowFloor(0, 3, 0, 3, 3, '#F5F5DC'),
      // Balcony on floor 2
      { type: 'slab', position: { x: 0, y: 2, z: -1 }, color: '#808080' },
      { type: 'slab', position: { x: 1, y: 2, z: -1 }, color: '#808080' },
      { type: 'slab', position: { x: 2, y: 2, z: -1 }, color: '#808080' },
      { type: 'baluster', position: { x: 0, y: 2, z: -1 }, color: '#F5F5DC' },
      { type: 'baluster', position: { x: 2, y: 2, z: -1 }, color: '#F5F5DC' },
      { type: 'railing', position: { x: 0, y: 3, z: -1 }, color: '#F5F5DC' },
      { type: 'railing', position: { x: 1, y: 3, z: -1 }, color: '#F5F5DC' },
      { type: 'railing', position: { x: 2, y: 3, z: -1 }, color: '#F5F5DC' },
      // Cornice
      { type: 'cornice', position: { x: 0, y: 4, z: 0 }, color: '#D3D3D3' },
      { type: 'cornice', position: { x: 1, y: 4, z: 0 }, color: '#D3D3D3' },
      { type: 'cornice', position: { x: 2, y: 4, z: 0 }, color: '#D3D3D3' },
      // Roof
      ...makeFloor(0, 4, 0, 3, 3, '#2F4F4F'),
      // Entrance foundation (extends from main base)
      { type: 'slab', position: { x: 0, y: 0, z: -1 }, color: '#696969' },
      { type: 'slab', position: { x: 1, y: 0, z: -1 }, color: '#696969' },
      { type: 'slab', position: { x: 2, y: 0, z: -1 }, color: '#696969' },
      // Column bases
      { type: 'base', position: { x: 0, y: 0, z: -1 }, color: '#F5F5DC' },
      { type: 'base', position: { x: 2, y: 0, z: -1 }, color: '#F5F5DC' },
      // Columns at entrance
      { type: 'column', position: { x: 0, y: 1, z: -1 }, color: '#F5F5DC' },
      { type: 'column', position: { x: 2, y: 1, z: -1 }, color: '#F5F5DC' },
      // Capital on columns
      { type: 'capital', position: { x: 0, y: 2, z: -1 }, color: '#F5F5DC' },
      { type: 'capital', position: { x: 2, y: 2, z: -1 }, color: '#F5F5DC' },
    ]
  },

  officeBuilding: {
    name: 'Office Building',
    category: 'buildings',
    description: 'Modern office with AC units and antenna',
    blocks: [
      // Foundation
      ...makeFloor(0, 0, 0, 5, 5, '#333333'),
      // Floors with glass
      ...makeGlassFloor(0, 1, 0, 5, 5, '#E0E0E0', '#4169E1'),
      ...makeGlassFloor(0, 2, 0, 5, 5, '#E0E0E0', '#4169E1'),
      ...makeGlassFloor(0, 3, 0, 5, 5, '#E0E0E0', '#4169E1'),
      ...makeGlassFloor(0, 4, 0, 5, 5, '#E0E0E0', '#4169E1'),
      // Roof
      ...makeFloor(0, 5, 0, 5, 5, '#404040'),
      // Rooftop equipment
      { type: 'acUnit', position: { x: 1, y: 5, z: 1 }, color: '#C0C0C0' },
      { type: 'acUnit', position: { x: 3, y: 5, z: 1 }, color: '#C0C0C0' },
      { type: 'acUnit', position: { x: 1, y: 5, z: 3 }, color: '#C0C0C0' },
      { type: 'acUnit', position: { x: 3, y: 5, z: 3 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 2, y: 5, z: 2 }, color: '#808080' },
      { type: 'antenna', position: { x: 2, y: 6, z: 2 }, color: '#808080' },
      // Vent
      { type: 'vent', position: { x: 0, y: 5, z: 2 }, color: '#696969' },
    ]
  },

  warehouse: {
    name: 'Warehouse',
    category: 'buildings',
    description: 'Industrial warehouse with crates and barrels',
    blocks: [
      // Floor
      ...makeFloor(0, 0, 0, 6, 4, '#808080'),
      // Walls
      ...makeWallX(0, 1, 0, 6, 2, '#A9A9A9'),
      ...makeWallX(0, 1, 3, 6, 2, '#A9A9A9'),
      ...makeWallZ(0, 1, 1, 2, 2, '#A9A9A9'),
      ...makeWallZ(5, 1, 1, 2, 2, '#A9A9A9'),
      // I-Beam supports
      { type: 'iBeam', position: { x: 2, y: 1, z: 1 }, color: '#696969' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 1 }, color: '#696969' },
      { type: 'iBeam', position: { x: 2, y: 1, z: 2 }, color: '#696969' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 2 }, color: '#696969' },
      // Roof with catwalks
      ...makeFloor(0, 3, 0, 6, 4, '#708090'),
      { type: 'catwalk', position: { x: 1, y: 3, z: 1 }, color: '#4A4A4A' },
      { type: 'catwalk', position: { x: 1, y: 3, z: 2 }, color: '#4A4A4A' },
      // Storage items
      { type: 'crate', position: { x: 4, y: 1, z: 1 }, color: '#8B4513' },
      { type: 'crate', position: { x: 4, y: 1, z: 2 }, color: '#8B4513' },
      { type: 'crate', position: { x: 4, y: 2, z: 1 }, color: '#A0522D' },
      { type: 'barrel', position: { x: 3, y: 1, z: 1 }, color: '#654321' },
      { type: 'barrel', position: { x: 3, y: 1, z: 2 }, color: '#654321' },
    ]
  },

  // =====================
  // MEDIEVAL
  // =====================
  castleWall: {
    name: 'Castle Wall',
    category: 'medieval',
    description: 'Fortified wall with merlons and arrow slits',
    blocks: [
      // Base wall
      ...makeWallX(0, 0, 0, 8, 3, '#808080'),
      // Merlons on top
      { type: 'merlon', position: { x: 0, y: 3, z: 0 }, color: '#696969' },
      { type: 'merlon', position: { x: 2, y: 3, z: 0 }, color: '#696969' },
      { type: 'merlon', position: { x: 4, y: 3, z: 0 }, color: '#696969' },
      { type: 'merlon', position: { x: 6, y: 3, z: 0 }, color: '#696969' },
      // Arrow slits
      { type: 'arrowSlit', position: { x: 1, y: 1, z: 0 }, color: '#505050' },
      { type: 'arrowSlit', position: { x: 3, y: 1, z: 0 }, color: '#505050' },
      { type: 'arrowSlit', position: { x: 5, y: 1, z: 0 }, color: '#505050' },
      { type: 'arrowSlit', position: { x: 7, y: 1, z: 0 }, color: '#505050' },
      // Walkway behind
      ...makeRow(0, 2, 1, 8, 'X', 'slab', '#707070'),
      // Torches
      { type: 'torch', position: { x: 1, y: 2, z: 1 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 1.5, radius: 4 } },
      { type: 'torch', position: { x: 5, y: 2, z: 1 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 1.5, radius: 4 } },
      // Buttresses
      { type: 'buttress', position: { x: 0, y: 0, z: 1 }, color: '#606060' },
      { type: 'buttress', position: { x: 4, y: 0, z: 1 }, color: '#606060' },
      { type: 'buttress', position: { x: 7, y: 0, z: 1 }, color: '#606060' },
    ]
  },

  guardTower: {
    name: 'Guard Tower',
    category: 'medieval',
    description: 'Imposing medieval watchtower with battlements, arrow slits, and defensive features',
    blocks: [
      // === STONE FOUNDATION ===
      ...makeFloor(0, 0, 0, 5, 5, '#505050'),

      // === MAIN TOWER (Round) ===
      // Ground floor
      { type: 'cylinder', position: { x: 2, y: 1, z: 2 }, color: '#606060' },
      // First floor
      { type: 'cylinder', position: { x: 2, y: 2, z: 2 }, color: '#606060' },
      // Second floor
      { type: 'cylinder', position: { x: 2, y: 3, z: 2 }, color: '#606060' },
      // Third floor
      { type: 'cylinder', position: { x: 2, y: 4, z: 2 }, color: '#606060' },
      // Fourth floor
      { type: 'cylinder', position: { x: 2, y: 5, z: 2 }, color: '#606060' },
      // Top platform (wider)
      { type: 'cylinder', position: { x: 2, y: 6, z: 2 }, color: '#505050' },

      // === ARROW SLITS ===
      { type: 'arrowSlit', position: { x: 2, y: 2, z: 0 }, color: '#3A3A3A' },
      { type: 'arrowSlit', position: { x: 0, y: 3, z: 2 }, color: '#3A3A3A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'arrowSlit', position: { x: 4, y: 3, z: 2 }, color: '#3A3A3A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'arrowSlit', position: { x: 2, y: 4, z: 4 }, color: '#3A3A3A', rotation: { x: 0, y: 180, z: 0 } },

      // === BATTLEMENTS/CRENELLATIONS ===
      { type: 'merlon', position: { x: 1, y: 6, z: 1 }, color: '#505050' },
      { type: 'merlon', position: { x: 3, y: 6, z: 1 }, color: '#505050' },
      { type: 'merlon', position: { x: 1, y: 6, z: 3 }, color: '#505050' },
      { type: 'merlon', position: { x: 3, y: 6, z: 3 }, color: '#505050' },
      // Crenellations on edges
      { type: 'crenellation', position: { x: 0, y: 6, z: 2 }, color: '#505050' },
      { type: 'crenellation', position: { x: 4, y: 6, z: 2 }, color: '#505050' },
      { type: 'crenellation', position: { x: 2, y: 6, z: 0 }, color: '#505050' },
      { type: 'crenellation', position: { x: 2, y: 6, z: 4 }, color: '#505050' },

      // === CONICAL ROOF ===
      { type: 'cone', position: { x: 2, y: 7, z: 2 }, color: '#2F4F4F' },
      // Finial at top
      { type: 'finial', position: { x: 2, y: 8, z: 2 }, color: '#8B4513' },

      // === ENTRY DOOR ===
      { type: 'doorFrame', position: { x: 2, y: 1, z: 0 }, color: '#5D4037' },
      // Stone door arch
      { type: 'archLow', position: { x: 2, y: 2, z: 0 }, color: '#606060' },

      // === DECORATIVE ELEMENTS ===
      // Torches flanking door
      { type: 'torch', position: { x: 1, y: 2, z: 0 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 2, radius: 4 } },
      { type: 'torch', position: { x: 3, y: 2, z: 0 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 2, radius: 4 } },
      // Torch at top
      { type: 'torch', position: { x: 2, y: 6, z: 2 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 3, radius: 8 } },

      // === CHAINS & BANNERS ===
      { type: 'chain', position: { x: 0, y: 5, z: 1 }, color: '#4A4A4A' },
      { type: 'chain', position: { x: 4, y: 5, z: 1 }, color: '#4A4A4A' },
      { type: 'chain', position: { x: 0, y: 4, z: 1 }, color: '#4A4A4A' },
      { type: 'chain', position: { x: 4, y: 4, z: 1 }, color: '#4A4A4A' },
      // Banner on wall
      { type: 'banner', position: { x: 2, y: 5, z: 0 }, color: '#8B0000' },

      // === SHIELD EMBLEMS ===
      { type: 'shield', position: { x: 1, y: 4, z: 0 }, color: '#DAA520' },
      { type: 'shield', position: { x: 3, y: 4, z: 0 }, color: '#DAA520' },

      // === EXTERIOR BUTTRESSES ===
      { type: 'buttress', position: { x: 0, y: 0, z: 1 }, color: '#606060' },
      { type: 'buttress', position: { x: 0, y: 0, z: 3 }, color: '#606060' },
      { type: 'buttress', position: { x: 4, y: 0, z: 1 }, color: '#606060' },
      { type: 'buttress', position: { x: 4, y: 0, z: 3 }, color: '#606060' },

      // === LADDER (Interior access) ===
      { type: 'ladder', position: { x: 1, y: 1, z: 1 }, color: '#8B4513' },
      { type: 'ladder', position: { x: 1, y: 2, z: 1 }, color: '#8B4513' },
      { type: 'ladder', position: { x: 1, y: 3, z: 1 }, color: '#8B4513' },
      { type: 'ladder', position: { x: 1, y: 4, z: 1 }, color: '#8B4513' },
      { type: 'ladder', position: { x: 1, y: 5, z: 1 }, color: '#8B4513' },

      // === SURROUNDING TERRAIN ===
      { type: 'rock', position: { x: 0, y: 0, z: 0 }, color: '#696969' },
      { type: 'rock', position: { x: 4, y: 0, z: 4 }, color: '#707070' },
      { type: 'boulder', position: { x: -1, y: 0, z: 3 }, color: '#5A5A5A' },
    ]
  },

  dungeon: {
    name: 'Dungeon Complex',
    category: 'medieval',
    description: 'Medieval dungeon with cells, torture chamber, guard post, and treasure room',
    blocks: [
      // === MAIN CORRIDOR ===
      ...makeFloor(0, 0, 4, 12, 3, '#3A3A3A'),
      // Corridor walls
      ...makeWallX(0, 1, 4, 12, 3, '#4A4A4A'),
      ...makeWallX(0, 1, 6, 12, 3, '#4A4A4A'),
      // Corridor ceiling
      ...makeFloor(0, 4, 4, 12, 3, '#3A3A3A'),
      // Corridor torches
      { type: 'torch', position: { x: 2, y: 3, z: 4 }, color: '#5C4033', emissive: { enabled: true, color: '#FF4500', intensity: 1.2, radius: 4 } },
      { type: 'torch', position: { x: 6, y: 3, z: 4 }, color: '#5C4033', emissive: { enabled: true, color: '#FF4500', intensity: 1.2, radius: 4 } },
      { type: 'torch', position: { x: 10, y: 3, z: 4 }, color: '#5C4033', emissive: { enabled: true, color: '#FF4500', intensity: 1.2, radius: 4 } },

      // === CELL 1 (Left side) ===
      ...makeFloor(0, 0, 0, 4, 4, '#3A3A3A'),
      ...makeWallX(0, 1, 0, 4, 3, '#4A4A4A'),
      ...makeWallZ(0, 1, 1, 3, 3, '#4A4A4A'),
      ...makeWallZ(3, 1, 1, 3, 3, '#4A4A4A'),
      ...makeFloor(0, 4, 0, 4, 4, '#3A3A3A'),
      // Cell 1 bars
      { type: 'fence', position: { x: 0, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 1, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 2, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 3, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 0, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 1, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 2, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 3, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 0, y: 3, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 1, y: 3, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 2, y: 3, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 3, y: 3, z: 3 }, color: '#2F2F2F' },
      // Cell 1 chains
      { type: 'chain', position: { x: 1, y: 2, z: 0 }, color: '#4A4A4A' },
      { type: 'chain', position: { x: 2, y: 2, z: 0 }, color: '#4A4A4A' },
      { type: 'chain', position: { x: 1, y: 1, z: 0 }, color: '#4A4A4A' },
      { type: 'chain', position: { x: 2, y: 1, z: 0 }, color: '#4A4A4A' },
      // Cell 1 straw pile (crate as makeshift bed)
      { type: 'slab', position: { x: 0, y: 1, z: 1 }, color: '#8B7355' },

      // === CELL 2 (Middle) ===
      ...makeFloor(4, 0, 0, 4, 4, '#3A3A3A'),
      ...makeWallX(4, 1, 0, 4, 3, '#4A4A4A'),
      ...makeWallZ(4, 1, 1, 3, 3, '#4A4A4A'),
      ...makeWallZ(7, 1, 1, 3, 3, '#4A4A4A'),
      ...makeFloor(4, 4, 0, 4, 4, '#3A3A3A'),
      // Cell 2 bars
      { type: 'fence', position: { x: 4, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 5, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 6, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 7, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 4, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 5, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 6, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 7, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 4, y: 3, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 5, y: 3, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 6, y: 3, z: 3 }, color: '#2F2F2F' },
      { type: 'fence', position: { x: 7, y: 3, z: 3 }, color: '#2F2F2F' },
      // Cell 2 barrel
      { type: 'barrel', position: { x: 4, y: 1, z: 1 }, color: '#3D2914' },
      { type: 'chain', position: { x: 6, y: 2, z: 0 }, color: '#4A4A4A' },

      // === TORTURE CHAMBER (Right side of corridor) ===
      ...makeFloor(8, 0, 0, 4, 4, '#2F2F2F'),
      ...makeWallX(8, 1, 0, 4, 3, '#4A4A4A'),
      ...makeWallZ(8, 1, 1, 3, 3, '#4A4A4A'),
      ...makeWallZ(11, 1, 1, 3, 3, '#4A4A4A'),
      ...makeFloor(8, 4, 0, 4, 4, '#3A3A3A'),
      // Torture chamber entrance (arched)
      { type: 'arch', position: { x: 9, y: 1, z: 3 }, color: '#4A4A4A' },
      { type: 'arch', position: { x: 10, y: 1, z: 3 }, color: '#4A4A4A' },
      // Torture devices
      { type: 'cross', position: { x: 9, y: 1, z: 0 }, color: '#3D2914' },
      { type: 'chain', position: { x: 9, y: 2, z: 0 }, color: '#4A4A4A' },
      { type: 'chain', position: { x: 9, y: 3, z: 0 }, color: '#4A4A4A' },
      // Brazier for hot irons
      { type: 'barrel', position: { x: 11, y: 1, z: 1 }, color: '#2F2F2F' },
      { type: 'cube', position: { x: 11, y: 2, z: 1 }, color: '#FF4500', emissive: { enabled: true, color: '#FF2200', intensity: 1.5, radius: 3 } },
      // Tools rack
      { type: 'shelf', position: { x: 8, y: 2, z: 1 }, color: '#3D2914' },
      // Torch
      { type: 'torch', position: { x: 10, y: 3, z: 0 }, color: '#5C4033', emissive: { enabled: true, color: '#FF4500', intensity: 1.2, radius: 4 } },

      // === GUARD ROOM (South side of corridor) ===
      ...makeFloor(0, 0, 7, 5, 5, '#4A4A3A'),
      ...makeWallX(0, 1, 11, 5, 3, '#5A5A4A'),
      ...makeWallZ(0, 1, 7, 4, 3, '#5A5A4A'),
      ...makeWallZ(4, 1, 8, 3, 3, '#5A5A4A'),
      ...makeFloor(0, 4, 7, 5, 5, '#3A3A3A'),
      // Guard room doorway
      { type: 'doorFrame', position: { x: 1, y: 1, z: 7 }, color: '#3D2914' },
      { type: 'doorFrame', position: { x: 1, y: 2, z: 7 }, color: '#3D2914' },
      // Guard table
      { type: 'table', position: { x: 1, y: 1, z: 9 }, color: '#5C4033' },
      { type: 'stool', position: { x: 0, y: 1, z: 9 }, color: '#5C4033' },
      { type: 'stool', position: { x: 2, y: 1, z: 9 }, color: '#5C4033' },
      // Weapon rack
      { type: 'shelf', position: { x: 0, y: 2, z: 11 }, color: '#3D2914' },
      { type: 'shelf', position: { x: 1, y: 2, z: 11 }, color: '#3D2914' },
      // Shield on wall
      { type: 'shield', position: { x: 3, y: 2, z: 11 }, color: '#8B0000' },
      // Torch
      { type: 'torch', position: { x: 2, y: 3, z: 11 }, color: '#5C4033', emissive: { enabled: true, color: '#FF4500', intensity: 1.2, radius: 4 } },
      // Barrel of ale
      { type: 'barrel', position: { x: 4, y: 1, z: 10 }, color: '#5C4033' },
      // Keys on hook (using chain)
      { type: 'chain', position: { x: 4, y: 2, z: 8 }, color: '#B8860B' },

      // === TREASURE ROOM (End of corridor) ===
      ...makeFloor(8, 0, 7, 4, 5, '#3A3A3A'),
      ...makeWallX(8, 1, 11, 4, 3, '#4A4A4A'),
      ...makeWallZ(8, 1, 7, 4, 3, '#4A4A4A'),
      ...makeWallZ(11, 1, 7, 4, 3, '#4A4A4A'),
      ...makeFloor(8, 4, 7, 4, 5, '#3A3A3A'),
      // Heavy door (portcullis)
      { type: 'portcullis', position: { x: 9, y: 1, z: 7 }, color: '#2F2F2F' },
      { type: 'portcullis', position: { x: 10, y: 1, z: 7 }, color: '#2F2F2F' },
      { type: 'portcullis', position: { x: 9, y: 2, z: 7 }, color: '#2F2F2F' },
      { type: 'portcullis', position: { x: 10, y: 2, z: 7 }, color: '#2F2F2F' },
      // Treasure chests
      { type: 'crate', position: { x: 9, y: 1, z: 10 }, color: '#8B4513' },
      { type: 'crate', position: { x: 10, y: 1, z: 10 }, color: '#8B4513' },
      // Gold pile (using slabs as gold)
      { type: 'slab', position: { x: 9, y: 1, z: 9 }, color: '#FFD700' },
      { type: 'slab', position: { x: 10, y: 1, z: 9 }, color: '#FFD700' },
      { type: 'quarter', position: { x: 9, y: 2, z: 9 }, color: '#FFD700' },
      // Sacks of coins
      { type: 'sack', position: { x: 8, y: 1, z: 9 }, color: '#8B7355' },
      { type: 'sack', position: { x: 11, y: 1, z: 9 }, color: '#8B7355' },
      // Torch
      { type: 'torch', position: { x: 9, y: 3, z: 11 }, color: '#5C4033', emissive: { enabled: true, color: '#FF4500', intensity: 1.2, radius: 4 } },

      // === CORRIDOR DETAILS ===
      // Arrow slits in corridor walls
      { type: 'arrowSlit', position: { x: 4, y: 2, z: 6 }, color: '#4A4A4A' },
      { type: 'arrowSlit', position: { x: 8, y: 2, z: 6 }, color: '#4A4A4A' },
      // Drains in floor
      { type: 'grate', position: { x: 3, y: 0, z: 5 }, color: '#2F2F2F' },
      { type: 'grate', position: { x: 7, y: 0, z: 5 }, color: '#2F2F2F' },
    ]
  },

  tavern: {
    name: 'Tavern Interior',
    category: 'medieval',
    description: 'Cozy medieval tavern with bar, fireplace, sleeping quarters, and rustic charm',
    blocks: [
      // === STONE & WOOD FLOOR ===
      ...makeFloor(0, 0, 0, 7, 6, '#8B4513'),
      // Stone hearth area
      { type: 'slab', position: { x: 6, y: 0, z: 0 }, color: '#505050' },
      { type: 'slab', position: { x: 6, y: 0, z: 1 }, color: '#505050' },
      { type: 'slab', position: { x: 6, y: 0, z: 2 }, color: '#505050' },

      // === WALLS ===
      // Back wall (stone)
      ...makeWallX(0, 1, -1, 7, 3, '#606060'),
      // Side walls (timber)
      ...makeWallZ(-1, 1, 0, 6, 3, '#8B4513'),
      ...makeWallZ(7, 1, 0, 6, 3, '#8B4513'),

      // === BAR AREA ===
      // Long bar counter
      { type: 'slab', position: { x: 0, y: 1, z: 0 }, color: '#5D4037' },
      { type: 'slab', position: { x: 1, y: 1, z: 0 }, color: '#5D4037' },
      { type: 'slab', position: { x: 2, y: 1, z: 0 }, color: '#5D4037' },
      { type: 'slab', position: { x: 3, y: 1, z: 0 }, color: '#5D4037' },
      // Bar top trim
      { type: 'ledge', position: { x: 0, y: 1, z: 1 }, color: '#654321' },
      { type: 'ledge', position: { x: 1, y: 1, z: 1 }, color: '#654321' },
      { type: 'ledge', position: { x: 2, y: 1, z: 1 }, color: '#654321' },
      { type: 'ledge', position: { x: 3, y: 1, z: 1 }, color: '#654321' },
      // Back bar shelving
      { type: 'shelf', position: { x: 0, y: 2, z: -1 }, color: '#5D4037' },
      { type: 'shelf', position: { x: 1, y: 2, z: -1 }, color: '#5D4037' },
      { type: 'shelf', position: { x: 2, y: 2, z: -1 }, color: '#5D4037' },
      { type: 'shelf', position: { x: 3, y: 2, z: -1 }, color: '#5D4037' },

      // === BARREL STORAGE ===
      // Behind bar
      { type: 'barrel', position: { x: 0, y: 1, z: -1 }, color: '#5C4033' },
      { type: 'barrel', position: { x: 1, y: 1, z: -1 }, color: '#4A3728' },
      { type: 'barrel', position: { x: 2, y: 1, z: -1 }, color: '#5C4033' },
      { type: 'barrel', position: { x: 3, y: 1, z: -1 }, color: '#4A3728' },
      { type: 'barrel', position: { x: 0, y: 2, z: -1 }, color: '#4A3728' },
      { type: 'barrel', position: { x: 2, y: 2, z: -1 }, color: '#5C4033' },
      // Corner storage
      { type: 'barrel', position: { x: 0, y: 0, z: 5 }, color: '#5C4033' },
      { type: 'barrel', position: { x: 0, y: 1, z: 5 }, color: '#4A3728' },

      // === FIREPLACE ===
      // Stone surround
      { type: 'cube', position: { x: 6, y: 1, z: 0 }, color: '#505050' },
      { type: 'cube', position: { x: 6, y: 1, z: 2 }, color: '#505050' },
      { type: 'cube', position: { x: 6, y: 2, z: 0 }, color: '#404040' },
      { type: 'cube', position: { x: 6, y: 2, z: 2 }, color: '#404040' },
      { type: 'arch', position: { x: 6, y: 2, z: 1 }, color: '#505050', rotation: { x: 0, y: 90, z: 0 } },
      // Fire
      { type: 'pillar4', position: { x: 6, y: 1, z: 1 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 4, radius: 5 } },
      // Chimney
      { type: 'chimney', position: { x: 6, y: 3, z: 1 }, color: '#505050' },
      { type: 'chimney', position: { x: 6, y: 4, z: 1 }, color: '#404040' },
      // Mantle decorations
      { type: 'slab', position: { x: 6, y: 3, z: 0 }, color: '#5D4037' },
      { type: 'slab', position: { x: 6, y: 3, z: 2 }, color: '#5D4037' },

      // === SEATING AREA ===
      // Main table with chairs
      { type: 'table', position: { x: 2, y: 1, z: 3 }, color: '#8B4513' },
      { type: 'chair', position: { x: 1, y: 1, z: 3 }, color: '#654321', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'chair', position: { x: 3, y: 1, z: 3 }, color: '#654321', rotation: { x: 0, y: 270, z: 0 } },
      { type: 'stool', position: { x: 2, y: 1, z: 2 }, color: '#654321' },
      { type: 'stool', position: { x: 2, y: 1, z: 4 }, color: '#654321' },
      // Corner booth
      { type: 'bench', position: { x: 4, y: 1, z: 4 }, color: '#654321' },
      { type: 'bench', position: { x: 5, y: 1, z: 5 }, color: '#654321', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'table', position: { x: 5, y: 1, z: 4 }, color: '#8B4513' },
      // Bar stools
      { type: 'stool', position: { x: 1, y: 1, z: 1 }, color: '#5D4037' },
      { type: 'stool', position: { x: 2, y: 1, z: 1 }, color: '#5D4037' },
      { type: 'stool', position: { x: 3, y: 1, z: 1 }, color: '#5D4037' },

      // === CEILING BEAMS ===
      { type: 'beamX', position: { x: 0, y: 3, z: 2 }, color: '#5D4037' },
      { type: 'beamX', position: { x: 2, y: 3, z: 2 }, color: '#5D4037' },
      { type: 'beamX', position: { x: 4, y: 3, z: 2 }, color: '#5D4037' },
      { type: 'beamX', position: { x: 0, y: 3, z: 4 }, color: '#5D4037' },
      { type: 'beamX', position: { x: 2, y: 3, z: 4 }, color: '#5D4037' },
      { type: 'beamX', position: { x: 4, y: 3, z: 4 }, color: '#5D4037' },

      // === LIGHTING ===
      // Wall torches
      { type: 'torch', position: { x: -1, y: 2, z: 1 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 2, radius: 4 } },
      { type: 'torch', position: { x: -1, y: 2, z: 4 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 2, radius: 4 } },
      { type: 'torch', position: { x: 4, y: 2, z: -1 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 2, radius: 4 } },
      // Hanging chandelier (chains + candles)
      { type: 'chain', position: { x: 3, y: 3, z: 3 }, color: '#2F2F2F' },
      { type: 'sphere', position: { x: 3, y: 2, z: 3 }, color: '#FFD700', emissive: { enabled: true, color: '#FFAA00', intensity: 2, radius: 3 } },

      // === DECORATIVE ELEMENTS ===
      // Mounted shield on wall
      { type: 'shield', position: { x: 2, y: 3, z: -1 }, color: '#8B0000' },
      // Mounted weapons
      { type: 'beamDiag', position: { x: 5, y: 3, z: -1 }, color: '#C0C0C0' },
      // Banner
      { type: 'banner', position: { x: 0, y: 3, z: -1 }, color: '#006400' },
      // Crate of supplies
      { type: 'crate', position: { x: 0, y: 0, z: 4 }, color: '#8B4513' },

      // === DOOR ===
      { type: 'doorFrame', position: { x: 3, y: 1, z: 5 }, color: '#5D4037' },
    ]
  },

  // =====================
  // NATURE
  // =====================
  oakTree: {
    name: 'Oak Tree',
    category: 'nature',
    description: 'Majestic oak tree with detailed bark, branches, and forest floor',
    blocks: [
      // === FOREST FLOOR BASE ===
      { type: 'slab', position: { x: 0, y: 0, z: 0 }, color: '#4A3728' },
      { type: 'slab', position: { x: 1, y: 0, z: 0 }, color: '#3D2914' },
      { type: 'slab', position: { x: 2, y: 0, z: 0 }, color: '#4A3728' },
      { type: 'slab', position: { x: 3, y: 0, z: 0 }, color: '#3D2914' },
      { type: 'slab', position: { x: 0, y: 0, z: 1 }, color: '#3D2914' },
      { type: 'slab', position: { x: 3, y: 0, z: 1 }, color: '#4A3728' },
      { type: 'slab', position: { x: 0, y: 0, z: 2 }, color: '#4A3728' },
      { type: 'slab', position: { x: 3, y: 0, z: 2 }, color: '#3D2914' },
      { type: 'slab', position: { x: 0, y: 0, z: 3 }, color: '#3D2914' },
      { type: 'slab', position: { x: 1, y: 0, z: 3 }, color: '#4A3728' },
      { type: 'slab', position: { x: 2, y: 0, z: 3 }, color: '#3D2914' },
      { type: 'slab', position: { x: 3, y: 0, z: 3 }, color: '#4A3728' },

      // === TRUNK - Thick base tapering up ===
      // Root flares
      { type: 'rock', position: { x: 1, y: 0, z: 1 }, color: '#5D4037' },
      { type: 'rock', position: { x: 2, y: 0, z: 1 }, color: '#5D4037' },
      { type: 'rock', position: { x: 1, y: 0, z: 2 }, color: '#5D4037' },
      { type: 'rock', position: { x: 2, y: 0, z: 2 }, color: '#5D4037' },
      // Main trunk
      { type: 'pillar', position: { x: 1, y: 1, z: 1 }, color: '#5D4037' },
      { type: 'pillar', position: { x: 2, y: 1, z: 1 }, color: '#4A3728' },
      { type: 'pillar', position: { x: 1, y: 1, z: 2 }, color: '#4A3728' },
      { type: 'pillar', position: { x: 2, y: 1, z: 2 }, color: '#5D4037' },
      // Upper trunk
      { type: 'pillar', position: { x: 1, y: 2, z: 1 }, color: '#5D4037' },
      { type: 'pillar', position: { x: 2, y: 2, z: 2 }, color: '#5D4037' },
      { type: 'pillar', position: { x: 1, y: 3, z: 2 }, color: '#5D4037' },
      { type: 'pillar', position: { x: 2, y: 3, z: 1 }, color: '#5D4037' },

      // === BRANCHES ===
      { type: 'logX', position: { x: 0, y: 3, z: 1 }, color: '#5D4037' },
      { type: 'logX', position: { x: 3, y: 3, z: 2 }, color: '#5D4037' },
      { type: 'logZ', position: { x: 1, y: 4, z: 0 }, color: '#5D4037' },
      { type: 'logZ', position: { x: 2, y: 4, z: 3 }, color: '#5D4037' },

      // === CANOPY - Dense foliage ===
      // Lower canopy layer
      { type: 'sphere', position: { x: 0, y: 4, z: 1 }, color: '#228B22' },
      { type: 'sphere', position: { x: 3, y: 4, z: 1 }, color: '#2E8B2E' },
      { type: 'sphere', position: { x: 0, y: 4, z: 2 }, color: '#2E8B2E' },
      { type: 'sphere', position: { x: 3, y: 4, z: 2 }, color: '#228B22' },
      { type: 'sphere', position: { x: 1, y: 4, z: 0 }, color: '#228B22' },
      { type: 'sphere', position: { x: 2, y: 4, z: 0 }, color: '#2E8B2E' },
      { type: 'sphere', position: { x: 1, y: 4, z: 3 }, color: '#2E8B2E' },
      { type: 'sphere', position: { x: 2, y: 4, z: 3 }, color: '#228B22' },
      // Middle canopy
      { type: 'sphere', position: { x: 1, y: 5, z: 1 }, color: '#32CD32' },
      { type: 'sphere', position: { x: 2, y: 5, z: 1 }, color: '#228B22' },
      { type: 'sphere', position: { x: 1, y: 5, z: 2 }, color: '#228B22' },
      { type: 'sphere', position: { x: 2, y: 5, z: 2 }, color: '#32CD32' },
      { type: 'sphere', position: { x: 0, y: 5, z: 1 }, color: '#2E8B2E' },
      { type: 'sphere', position: { x: 3, y: 5, z: 2 }, color: '#2E8B2E' },
      // Top canopy
      { type: 'sphere', position: { x: 1, y: 6, z: 1 }, color: '#32CD32' },
      { type: 'sphere', position: { x: 2, y: 6, z: 2 }, color: '#32CD32' },
      { type: 'sphere', position: { x: 1, y: 6, z: 2 }, color: '#228B22' },
      { type: 'sphere', position: { x: 2, y: 6, z: 1 }, color: '#228B22' },
      // Crown
      { type: 'sphere', position: { x: 1, y: 7, z: 1 }, color: '#90EE90' },
      { type: 'sphere', position: { x: 2, y: 7, z: 2 }, color: '#90EE90' },

      // === UNDERSTORY ===
      // Bushes at base
      { type: 'bush', position: { x: 0, y: 0, z: 0 }, color: '#228B22' },
      { type: 'bush', position: { x: 3, y: 0, z: 3 }, color: '#2E8B2E' },
      { type: 'bush', position: { x: 3, y: 0, z: 0 }, color: '#006400' },
      // Grass patches
      { type: 'grass', position: { x: 0, y: 0, z: 3 }, color: '#7CFC00' },
      { type: 'grass', position: { x: 3, y: 0, z: 1 }, color: '#90EE90' },
      // Flowers
      { type: 'flower', position: { x: 0, y: 0, z: 2 }, color: '#FFD700' },
      { type: 'flower', position: { x: 2, y: 0, z: 3 }, color: '#FF69B4' },

      // === FOREST DEBRIS ===
      // Fallen log
      { type: 'logX', position: { x: -1, y: 0, z: 0 }, color: '#5D4037' },
      { type: 'stump', position: { x: -1, y: 0, z: 3 }, color: '#5D4037' },
      // Rocks
      { type: 'rock', position: { x: 4, y: 0, z: 1 }, color: '#696969' },
      { type: 'rock', position: { x: -1, y: 0, z: 1 }, color: '#707070' },
    ]
  },

  rockGarden: {
    name: 'Rock Garden',
    category: 'nature',
    description: 'Zen garden with rocks and plants',
    blocks: [
      // Sand/gravel base
      ...makeFloor(0, 0, 0, 4, 4, '#C2B280'),
      // Rocks - various sizes using rotation
      { type: 'rock', position: { x: 0, y: 0, z: 0 }, color: '#696969' },
      { type: 'rock', position: { x: 3, y: 0, z: 1 }, color: '#808080', rotation: { x: 0, y: 45, z: 0 } },
      { type: 'rock', position: { x: 1, y: 0, z: 3 }, color: '#707070', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'rock', position: { x: 2, y: 0, z: 2 }, color: '#606060' },
      // Bushes
      { type: 'bush', position: { x: 0, y: 0, z: 2 }, color: '#228B22' },
      { type: 'bush', position: { x: 3, y: 0, z: 3 }, color: '#2E8B2E' },
      // Planter
      { type: 'planter', position: { x: 2, y: 0, z: 0 }, color: '#8B4513' },
    ]
  },

  pond: {
    name: 'Pond',
    category: 'nature',
    description: 'Small pond with rocks and plants',
    blocks: [
      // Water (blue floor)
      { type: 'slab', position: { x: 1, y: 0, z: 1 }, color: '#1E90FF' },
      { type: 'slab', position: { x: 2, y: 0, z: 1 }, color: '#1E90FF' },
      { type: 'slab', position: { x: 1, y: 0, z: 2 }, color: '#1E90FF' },
      { type: 'slab', position: { x: 2, y: 0, z: 2 }, color: '#1E90FF' },
      // Surrounding rocks
      { type: 'rock', position: { x: 0, y: 0, z: 1 }, color: '#696969' },
      { type: 'rock', position: { x: 0, y: 0, z: 2 }, color: '#606060' },
      { type: 'rock', position: { x: 3, y: 0, z: 1 }, color: '#707070' },
      { type: 'rock', position: { x: 3, y: 0, z: 2 }, color: '#808080' },
      { type: 'rock', position: { x: 1, y: 0, z: 0 }, color: '#656565' },
      { type: 'rock', position: { x: 2, y: 0, z: 0 }, color: '#757575' },
      { type: 'rock', position: { x: 1, y: 0, z: 3 }, color: '#858585' },
      { type: 'rock', position: { x: 2, y: 0, z: 3 }, color: '#959595' },
      // Plants
      { type: 'bush', position: { x: 0, y: 0, z: 0 }, color: '#228B22' },
      { type: 'bush', position: { x: 3, y: 0, z: 3 }, color: '#2E8B2E' },
      // Log bridge
      { type: 'logX', position: { x: 1, y: 1, z: 1 }, color: '#5D4037' },
      { type: 'logX', position: { x: 2, y: 1, z: 1 }, color: '#5D4037' },
    ]
  },

  campsite: {
    name: 'Campsite',
    category: 'nature',
    description: 'Cozy wilderness campsite with tent, campfire, and outdoor gear',
    blocks: [
      // === GROUND/CLEARING ===
      ...makeFloor(0, 0, 0, 6, 6, '#654321'),
      { type: 'slab', position: { x: 2, y: 0, z: 2 }, color: '#4A3728' },
      { type: 'slab', position: { x: 3, y: 0, z: 2 }, color: '#4A3728' },
      { type: 'slab', position: { x: 2, y: 0, z: 3 }, color: '#4A3728' },
      { type: 'slab', position: { x: 3, y: 0, z: 3 }, color: '#4A3728' },

      // === TENT ===
      // Tent floor
      { type: 'slab', position: { x: 0, y: 0, z: 4 }, color: '#2F4F4F' },
      { type: 'slab', position: { x: 1, y: 0, z: 4 }, color: '#2F4F4F' },
      { type: 'slab', position: { x: 0, y: 0, z: 5 }, color: '#2F4F4F' },
      { type: 'slab', position: { x: 1, y: 0, z: 5 }, color: '#2F4F4F' },
      // Tent walls (canvas style using wedges)
      { type: 'wedge', position: { x: 0, y: 1, z: 4 }, color: '#3CB371' },
      { type: 'wedge', position: { x: 1, y: 1, z: 4 }, color: '#3CB371' },
      { type: 'wedge', position: { x: 0, y: 1, z: 5 }, color: '#2E8B57', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'wedge', position: { x: 1, y: 1, z: 5 }, color: '#2E8B57', rotation: { x: 0, y: 180, z: 0 } },
      // Tent pole
      { type: 'pillar4', position: { x: 0, y: 1, z: 4 }, color: '#8B4513' },
      { type: 'pillar4', position: { x: 1, y: 1, z: 5 }, color: '#8B4513' },

      // === CAMPFIRE RING ===
      // Stone ring around fire
      { type: 'rock', position: { x: 2, y: 0, z: 2 }, color: '#404040' },
      { type: 'rock', position: { x: 3, y: 0, z: 2 }, color: '#505050' },
      { type: 'rock', position: { x: 2, y: 0, z: 3 }, color: '#505050' },
      { type: 'rock', position: { x: 3, y: 0, z: 3 }, color: '#404040' },
      // Flames (glowing)
      { type: 'pillar4', position: { x: 2, y: 0, z: 2 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 4, radius: 6 } },
      { type: 'pillar4', position: { x: 3, y: 0, z: 3 }, color: '#FF8C00', emissive: { enabled: true, color: '#FF4500', intensity: 3, radius: 4 } },
      // Smoke effect (dark sphere above)
      { type: 'sphere', position: { x: 2, y: 1, z: 2 }, color: '#3A3A3A' },

      // === LOG SEATS ===
      { type: 'logX', position: { x: 1, y: 0, z: 1 }, color: '#5D4037' },
      { type: 'logZ', position: { x: 4, y: 0, z: 2 }, color: '#5D4037' },
      { type: 'logZ', position: { x: 4, y: 0, z: 3 }, color: '#5D4037' },
      { type: 'logX', position: { x: 1, y: 0, z: 4 }, color: '#5D4037' },

      // === COOKING AREA ===
      // Cooking tripod
      { type: 'pillar4', position: { x: 3, y: 1, z: 2 }, color: '#2F2F2F' },
      // Pot/kettle (barrel shape)
      { type: 'barrel', position: { x: 3, y: 0, z: 2 }, color: '#1A1A1A' },

      // === SUPPLIES ===
      // Supply crates
      { type: 'crate', position: { x: 5, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'crate', position: { x: 5, y: 0, z: 1 }, color: '#A0522D' },
      { type: 'crate', position: { x: 5, y: 1, z: 0 }, color: '#CD853F' },
      // Water barrel
      { type: 'barrel', position: { x: 5, y: 0, z: 2 }, color: '#4169E1' },
      // Lantern on crate (with glow)
      { type: 'sphere', position: { x: 5, y: 1, z: 1 }, color: '#FFD700', emissive: { enabled: true, color: '#FFAA00', intensity: 2, radius: 3 } },

      // === FISHING AREA ===
      // Fishing rod (pillar leaning)
      { type: 'pillar4', position: { x: 0, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'pillar4', position: { x: 0, y: 1, z: 0 }, color: '#8B4513' },
      // Bucket with fish
      { type: 'barrel', position: { x: 1, y: 0, z: 0 }, color: '#696969' },

      // === NATURE SURROUNDINGS ===
      // Rocks
      { type: 'boulder', position: { x: 0, y: 0, z: 2 }, color: '#696969' },
      { type: 'rock', position: { x: 4, y: 0, z: 5 }, color: '#707070' },
      // Bushes
      { type: 'bush', position: { x: 5, y: 0, z: 4 }, color: '#228B22' },
      { type: 'bush', position: { x: 5, y: 0, z: 5 }, color: '#2E8B2E' },
      // Tree nearby
      { type: 'pillar', position: { x: -1, y: 0, z: 3 }, color: '#5D4037' },
      { type: 'pillar', position: { x: -1, y: 1, z: 3 }, color: '#5D4037' },
      { type: 'sphere', position: { x: -1, y: 2, z: 3 }, color: '#228B22' },
      // Grass patches
      { type: 'grass', position: { x: 0, y: 0, z: 1 }, color: '#7CFC00' },
      { type: 'grass', position: { x: 4, y: 0, z: 0 }, color: '#90EE90' },
      // Flowers
      { type: 'flower', position: { x: 3, y: 0, z: 5 }, color: '#FFFF00' },
    ]
  },

  // =====================
  // INDUSTRIAL
  // =====================
  factory: {
    name: 'Factory Building',
    category: 'industrial',
    description: 'Detailed industrial facility with machinery, pipes, and electrical systems',
    blocks: [
      // === FOUNDATION & FLOOR ===
      ...makeFloor(0, 0, 0, 8, 6, '#505050'),
      // Drain grates
      { type: 'grate', position: { x: 3, y: 0, z: 3 }, color: '#404040' },
      { type: 'grate', position: { x: 4, y: 0, z: 3 }, color: '#404040' },

      // === MAIN STRUCTURE ===
      // Steel frame walls
      ...makeWallX(0, 1, 0, 8, 3, '#606060'),
      ...makeWallX(0, 1, 5, 8, 3, '#606060'),
      ...makeWallZ(0, 1, 1, 4, 3, '#606060'),
      ...makeWallZ(7, 1, 1, 4, 3, '#606060'),
      // Roof structure
      ...makeFloor(0, 4, 0, 8, 6, '#505050'),

      // === STRUCTURAL I-BEAMS ===
      { type: 'iBeam', position: { x: 2, y: 1, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 3, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 1, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 2, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 3, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 1, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 3, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 1, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 2, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 3, z: 4 }, color: '#8B0000' },

      // === LOADING BAY DOORS ===
      { type: 'doorFrame', position: { x: 3, y: 1, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 4, y: 1, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 3, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 4, y: 2, z: 0 }, color: '#FFD700' },

      // === INDUSTRIAL WINDOWS ===
      { type: 'windowFrame', position: { x: 1, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 6, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 1, y: 2, z: 5 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 6, y: 2, z: 5 }, color: '#4682B4' },

      // === ROOFTOP EQUIPMENT ===
      // Large tanks
      { type: 'tank', position: { x: 1, y: 4, z: 1 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 1, y: 5, z: 1 }, color: '#B0B0B0' },
      { type: 'tank', position: { x: 6, y: 4, z: 1 }, color: '#808080' },
      { type: 'tank', position: { x: 6, y: 5, z: 1 }, color: '#707070' },
      // Vents and AC
      { type: 'vent', position: { x: 3, y: 4, z: 3 }, color: '#4A4A4A' },
      { type: 'vent', position: { x: 4, y: 4, z: 3 }, color: '#4A4A4A' },
      { type: 'acUnit', position: { x: 1, y: 4, z: 4 }, color: '#909090' },
      { type: 'acUnit', position: { x: 6, y: 4, z: 4 }, color: '#909090' },
      // Smokestack
      { type: 'chimney', position: { x: 0, y: 4, z: 2 }, color: '#8B4513' },
      { type: 'chimney', position: { x: 0, y: 5, z: 2 }, color: '#704214' },
      { type: 'chimney', position: { x: 0, y: 6, z: 2 }, color: '#5D3A1A' },

      // === PIPE SYSTEM ===
      // Horizontal run connecting tanks
      { type: 'pipeX', position: { x: 2, y: 5, z: 1 }, color: '#696969' },
      { type: 'pipeX', position: { x: 3, y: 5, z: 1 }, color: '#696969' },
      { type: 'pipeX', position: { x: 4, y: 5, z: 1 }, color: '#696969' },
      { type: 'pipeX', position: { x: 5, y: 5, z: 1 }, color: '#696969' },
      { type: 'valve', position: { x: 3, y: 5, z: 1 }, color: '#B22222' },
      // Vertical pipe down
      { type: 'pipeY', position: { x: 4, y: 4, z: 1 }, color: '#696969' },

      // === ELECTRICAL SYSTEM ===
      // Fuse boxes
      { type: 'fuseBox', position: { x: 0, y: 1, z: 3 }, color: '#404040' },
      { type: 'powerBox', position: { x: 7, y: 1, z: 3 }, color: '#2F4F4F' },
      // Conduit running up wall (using cableY which is a valid type)
      { type: 'cableY', position: { x: 0, y: 2, z: 3 }, color: '#696969' },
      { type: 'cableY', position: { x: 0, y: 3, z: 3 }, color: '#696969' },
      // Cables with beam mounting
      { type: 'beamX', position: { x: 1, y: 3, z: 3 }, color: '#404040' },
      { type: 'beamX', position: { x: 2, y: 3, z: 3 }, color: '#404040' },
      { type: 'beamX', position: { x: 3, y: 3, z: 3 }, color: '#404040' },
      { type: 'beamX', position: { x: 4, y: 3, z: 3 }, color: '#404040' },
      { type: 'cableX', position: { x: 1, y: 3, z: 3 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 2, y: 3, z: 3 }, color: '#1A1A1A' },
      // Light fixture (mounted on beam)
      { type: 'lightFixture', position: { x: 3, y: 3, z: 3 }, color: '#FFFF00' },
      { type: 'lightFixture', position: { x: 4, y: 3, z: 3 }, color: '#FFFF00' },

      // === CATWALK ===
      // Catwalk supports
      { type: 'pillar2', position: { x: 3, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 1, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 4, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 4, y: 1, z: 2 }, color: '#4A4A4A' },
      { type: 'catwalk', position: { x: 3, y: 2, z: 2 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 4, y: 2, z: 2 }, color: '#3A3A3A' },
      { type: 'railing', position: { x: 3, y: 3, z: 2 }, color: '#505050' },
      { type: 'railing', position: { x: 4, y: 3, z: 2 }, color: '#505050' },
      // Ladder
      { type: 'ladder', position: { x: 2, y: 1, z: 3 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 2, y: 2, z: 3 }, color: '#FFD700' },

      // === STORAGE AREA ===
      { type: 'crate', position: { x: 6, y: 0, z: 2 }, color: '#8B4513' },
      { type: 'crate', position: { x: 6, y: 0, z: 3 }, color: '#A0522D' },
      { type: 'crate', position: { x: 6, y: 1, z: 2 }, color: '#CD853F' },
      { type: 'barrel', position: { x: 1, y: 0, z: 3 }, color: '#006400' },
      { type: 'barrel', position: { x: 1, y: 0, z: 4 }, color: '#2F4F4F' },

      // === EXTERIOR ===
      // Barriers at loading dock
      { type: 'barrier', position: { x: 3, y: 0, z: -1 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 4, y: 0, z: -1 }, color: '#FFD700' },
      // Traffic cone
      { type: 'trafficCone', position: { x: 2, y: 0, z: -1 }, color: '#FF4500' },
    ]
  },

  pipeNetwork: {
    name: 'Pipe Network',
    category: 'industrial',
    description: 'Industrial pipe and cable network showcase with all junction types',
    blocks: [
      // === CONCRETE BASE PLATFORM ===
      ...makeFloor(0, 0, 0, 8, 8, '#505050'),

      // === MAIN PIPE SYSTEM (Blue - Water) ===
      // Horizontal run along X axis
      { type: 'pipeX', position: { x: 0, y: 2, z: 2 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 1, y: 2, z: 2 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 2, y: 2, z: 2 }, color: '#4682B4' },
      { type: 'valve', position: { x: 1, y: 2, z: 2 }, color: '#B22222' },
      // 90° elbow down to +Z
      { type: 'pipeElbowXZ4', position: { x: 3, y: 2, z: 2 }, color: '#4682B4' },
      // Continue along Z
      { type: 'pipeZ', position: { x: 3, y: 2, z: 3 }, color: '#4682B4' },
      { type: 'pipeZ', position: { x: 3, y: 2, z: 4 }, color: '#4682B4' },
      // T-junction splitting east-west
      { type: 'pipeT', position: { x: 3, y: 2, z: 5 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 2, y: 2, z: 5 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 4, y: 2, z: 5 }, color: '#4682B4' },
      { type: 'valve', position: { x: 4, y: 2, z: 5 }, color: '#B22222' },

      // === VERTICAL PIPE SECTION (Gray - Steam) ===
      // Rising from ground
      { type: 'pipeY', position: { x: 6, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 6, y: 1, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 6, y: 2, z: 2 }, color: '#708090' },
      // Elbow XY connecting vertical to horizontal
      { type: 'pipeElbowXY', position: { x: 6, y: 3, z: 2 }, color: '#708090' },
      { type: 'pipeX', position: { x: 7, y: 3, z: 2 }, color: '#708090' },
      // T-junction with Y branch
      { type: 'pipeTY', position: { x: 5, y: 2, z: 2 }, color: '#708090' },
      { type: 'pipeX', position: { x: 4, y: 2, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 5, y: 3, z: 2 }, color: '#708090' },
      { type: 'vent', position: { x: 5, y: 4, z: 2 }, color: '#606060' },

      // === CROSS JUNCTION (Orange - Gas) ===
      { type: 'pipeCross', position: { x: 5, y: 2, z: 5 }, color: '#FF8C00' },
      { type: 'pipeX', position: { x: 6, y: 2, z: 5 }, color: '#FF8C00' },
      { type: 'pipeZ', position: { x: 5, y: 2, z: 6 }, color: '#FF8C00' },
      { type: 'valve', position: { x: 5, y: 2, z: 6 }, color: '#B22222' },

      // === CABLE SYSTEM (Black - Electrical) ===
      // Horizontal cable run parallel to pipes
      { type: 'cableX', position: { x: 0, y: 1, z: 1 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 1, y: 1, z: 1 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 2, y: 1, z: 1 }, color: '#1A1A1A' },
      // Cable elbow (90° in XZ plane)
      { type: 'cableElbow', position: { x: 3, y: 1, z: 1 }, color: '#1A1A1A' },
      // Continue along Z
      { type: 'cableZ', position: { x: 3, y: 1, z: 2 }, color: '#1A1A1A' },
      { type: 'cableZ', position: { x: 3, y: 1, z: 3 }, color: '#1A1A1A' },
      // T-junction in cable
      { type: 'cableT', position: { x: 3, y: 1, z: 4 }, color: '#1A1A1A' },
      { type: 'cableZ', position: { x: 3, y: 1, z: 5 }, color: '#1A1A1A' },

      // === VERTICAL CABLE (Red - Signal) ===
      { type: 'cableY', position: { x: 1, y: 0, z: 6 }, color: '#8B0000' },
      { type: 'cableY', position: { x: 1, y: 1, z: 6 }, color: '#8B0000' },
      { type: 'cableY', position: { x: 1, y: 2, z: 6 }, color: '#8B0000' },
      // Elbow connecting vertical to horizontal (XY plane)
      { type: 'cableElbowY', position: { x: 1, y: 3, z: 6 }, color: '#8B0000' },
      { type: 'cableX', position: { x: 2, y: 3, z: 6 }, color: '#8B0000' },
      { type: 'cableX', position: { x: 3, y: 3, z: 6 }, color: '#8B0000' },

      // === CONDUIT SYSTEM (Gray - Protected Cable) ===
      { type: 'conduitX', position: { x: 5, y: 0, z: 0 }, color: '#696969' },
      { type: 'conduitX', position: { x: 6, y: 0, z: 0 }, color: '#696969' },
      { type: 'conduitElbow', position: { x: 7, y: 0, z: 0 }, color: '#696969' },
      { type: 'conduitZ', position: { x: 7, y: 0, z: 1 }, color: '#696969' },
      { type: 'conduitT', position: { x: 7, y: 0, z: 2 }, color: '#696969' },
      { type: 'conduitZ', position: { x: 7, y: 0, z: 3 }, color: '#696969' },

      // === PIPE SUPPORTS ===
      { type: 'pillar2', position: { x: 0, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 0, y: 1, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 1, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 0, z: 5 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 1, z: 5 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 5, y: 0, z: 5 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 5, y: 1, z: 5 }, color: '#4A4A4A' },

      // === ELECTRICAL BOXES ===
      { type: 'fuseBox', position: { x: 0, y: 0, z: 1 }, color: '#404040' },
      { type: 'switchBox', position: { x: 1, y: 0, z: 0 }, color: '#505050' },
      { type: 'powerBox', position: { x: 0, y: 0, z: 6 }, color: '#2F4F4F' },

      // === TANKS ===
      { type: 'tank', position: { x: 0, y: 0, z: 4 }, color: '#4682B4' },
      { type: 'tank', position: { x: 0, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'tank', position: { x: 7, y: 0, z: 5 }, color: '#FF8C00' },
      { type: 'tank', position: { x: 7, y: 1, z: 5 }, color: '#FF8C00' },

      // === LABELS/SIGNS ===
      { type: 'sign', position: { x: 0, y: 2, z: 4 }, color: '#FFFF00' },
      { type: 'sign', position: { x: 7, y: 2, z: 5 }, color: '#FF4500' },
    ]
  },

  storageYard: {
    name: 'Storage Yard',
    category: 'industrial',
    description: 'Outdoor storage with crates and barrels',
    blocks: [
      // Concrete floor
      ...makeFloor(0, 0, 0, 5, 4, '#808080'),
      // Stacked crates
      { type: 'crate', position: { x: 0, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'crate', position: { x: 1, y: 0, z: 0 }, color: '#A0522D' },
      { type: 'crate', position: { x: 0, y: 0, z: 1 }, color: '#8B4513' },
      { type: 'crate', position: { x: 1, y: 0, z: 1 }, color: '#A0522D' },
      { type: 'crate', position: { x: 0, y: 1, z: 0 }, color: '#CD853F' },
      { type: 'crate', position: { x: 1, y: 1, z: 0 }, color: '#8B4513' },
      // Barrels
      { type: 'barrel', position: { x: 3, y: 0, z: 0 }, color: '#2F4F4F' },
      { type: 'barrel', position: { x: 4, y: 0, z: 0 }, color: '#2F4F4F' },
      { type: 'barrel', position: { x: 3, y: 0, z: 1 }, color: '#006400' },
      { type: 'barrel', position: { x: 4, y: 0, z: 1 }, color: '#006400' },
      { type: 'barrel', position: { x: 3, y: 1, z: 0 }, color: '#2F4F4F' },
      // Barriers
      { type: 'barrier', position: { x: 0, y: 0, z: 3 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 1, y: 0, z: 3 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 2, y: 0, z: 3 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 3, y: 0, z: 3 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 4, y: 0, z: 3 }, color: '#FFD700' },
    ]
  },

  refinery: {
    name: 'Refinery',
    category: 'industrial',
    description: 'Oil refinery with tanks and pipes',
    blocks: [
      // Base platform
      ...makeFloor(0, 0, 0, 5, 5, '#404040'),
      // Large tanks
      { type: 'tank', position: { x: 0, y: 0, z: 0 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 0, y: 1, z: 0 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 0, y: 2, z: 0 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 4, y: 0, z: 0 }, color: '#808080' },
      { type: 'tank', position: { x: 4, y: 1, z: 0 }, color: '#808080' },
      { type: 'tank', position: { x: 4, y: 2, z: 0 }, color: '#808080' },
      // Connecting pipes
      { type: 'pipeX', position: { x: 1, y: 2, z: 0 }, color: '#696969' },
      { type: 'pipeX', position: { x: 2, y: 2, z: 0 }, color: '#696969' },
      { type: 'pipeX', position: { x: 3, y: 2, z: 0 }, color: '#696969' },
      // Valves
      { type: 'valve', position: { x: 2, y: 2, z: 0 }, color: '#B22222' },
      // Processing unit
      { type: 'cube', position: { x: 2, y: 0, z: 2 }, color: '#505050' },
      { type: 'cube', position: { x: 2, y: 1, z: 2 }, color: '#505050' },
      { type: 'vent', position: { x: 2, y: 2, z: 2 }, color: '#404040' },
      // Catwalk with supports
      { type: 'pillar2', position: { x: 1, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 1, y: 1, z: 2 }, color: '#4A4A4A' },
      { type: 'catwalk', position: { x: 1, y: 2, z: 2 }, color: '#3A3A3A' },
      { type: 'pillar2', position: { x: 3, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 1, z: 2 }, color: '#4A4A4A' },
      { type: 'catwalk', position: { x: 3, y: 2, z: 2 }, color: '#3A3A3A' },
      // Ladder
      { type: 'ladder', position: { x: 0, y: 0, z: 1 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 0, y: 1, z: 1 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 0, y: 2, z: 1 }, color: '#FFD700' },
    ]
  },

  industrialComplex: {
    name: 'Industrial Complex',
    category: 'industrial',
    description: 'Large industrial facility with buildings, tanks, and pipe network',
    blocks: [
      // === MAIN GROUND ===
      ...makeFloor(0, 0, 0, 12, 10, '#505050'),

      // === MAIN FACTORY BUILDING (left side) ===
      // Walls
      ...makeWallX(0, 1, 0, 5, 3, '#606060'),
      ...makeWallX(0, 1, 4, 5, 3, '#606060'),
      ...makeWallZ(0, 1, 1, 3, 3, '#606060'),
      ...makeWallZ(4, 1, 1, 3, 3, '#606060'),
      // Roof
      ...makeFloor(0, 4, 0, 5, 5, '#404040'),
      // Large door opening
      { type: 'doorFrame', position: { x: 1, y: 1, z: 4 }, color: '#333333' },
      { type: 'doorFrame', position: { x: 2, y: 1, z: 4 }, color: '#333333' },
      { type: 'doorFrame', position: { x: 1, y: 2, z: 4 }, color: '#333333' },
      { type: 'doorFrame', position: { x: 2, y: 2, z: 4 }, color: '#333333' },
      // Windows
      { type: 'windowFrame', position: { x: 1, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 2, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 3, y: 2, z: 0 }, color: '#4682B4' },
      // Interior I-beams
      { type: 'iBeam', position: { x: 1, y: 1, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 2, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 3, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 3, y: 1, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 3, y: 2, z: 2 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 3, y: 3, z: 2 }, color: '#8B0000' },
      // Roof vents
      { type: 'vent', position: { x: 1, y: 4, z: 1 }, color: '#3A3A3A' },
      { type: 'vent', position: { x: 3, y: 4, z: 1 }, color: '#3A3A3A' },
      { type: 'vent', position: { x: 2, y: 4, z: 3 }, color: '#3A3A3A' },
      // Smokestack
      { type: 'chimney', position: { x: 0, y: 4, z: 0 }, color: '#8B4513' },
      { type: 'chimney', position: { x: 0, y: 5, z: 0 }, color: '#8B4513' },
      { type: 'chimney', position: { x: 0, y: 6, z: 0 }, color: '#8B4513' },
      { type: 'chimney', position: { x: 0, y: 7, z: 0 }, color: '#704214' },

      // === TANK FARM (right side) ===
      // Large tank 1
      { type: 'tank', position: { x: 8, y: 0, z: 1 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 8, y: 1, z: 1 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 8, y: 2, z: 1 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 8, y: 3, z: 1 }, color: '#B0B0B0' },
      // Large tank 2
      { type: 'tank', position: { x: 10, y: 0, z: 1 }, color: '#A0A0A0' },
      { type: 'tank', position: { x: 10, y: 1, z: 1 }, color: '#A0A0A0' },
      { type: 'tank', position: { x: 10, y: 2, z: 1 }, color: '#A0A0A0' },
      { type: 'tank', position: { x: 10, y: 3, z: 1 }, color: '#909090' },
      // Small tanks
      { type: 'tank', position: { x: 8, y: 0, z: 4 }, color: '#708090' },
      { type: 'tank', position: { x: 8, y: 1, z: 4 }, color: '#708090' },
      { type: 'tank', position: { x: 10, y: 0, z: 4 }, color: '#708090' },
      { type: 'tank', position: { x: 10, y: 1, z: 4 }, color: '#708090' },
      // Ladders on tanks
      { type: 'ladder', position: { x: 8, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 1, z: 0 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 3, z: 0 }, color: '#FFD700' },

      // === PIPE NETWORK ===
      // Main horizontal pipe from factory to tanks
      { type: 'pipeX', position: { x: 5, y: 2, z: 2 }, color: '#696969' },
      { type: 'pipeX', position: { x: 6, y: 2, z: 2 }, color: '#696969' },
      { type: 'pipeX', position: { x: 7, y: 2, z: 2 }, color: '#696969' },
      // Elbow to tank 1
      { type: 'pipeElbowXZ4', position: { x: 8, y: 2, z: 2 }, color: '#696969' },
      { type: 'pipeZ', position: { x: 8, y: 2, z: 1 }, color: '#696969' },
      // T-junction for second tank
      { type: 'pipeT', position: { x: 7, y: 2, z: 2 }, color: '#696969' },
      { type: 'pipeZ', position: { x: 7, y: 2, z: 3 }, color: '#696969' },
      { type: 'pipeZ', position: { x: 7, y: 2, z: 4 }, color: '#696969' },
      // Cross junction
      { type: 'pipeCross', position: { x: 9, y: 1, z: 4 }, color: '#696969' },
      { type: 'pipeX', position: { x: 8, y: 1, z: 4 }, color: '#696969' },
      { type: 'pipeX', position: { x: 10, y: 1, z: 4 }, color: '#696969' },
      // Vertical pipes to small tanks
      { type: 'pipeY', position: { x: 9, y: 0, z: 4 }, color: '#696969' },
      { type: 'pipeTY', position: { x: 9, y: 2, z: 4 }, color: '#696969' },
      // Valves
      { type: 'valve', position: { x: 6, y: 2, z: 2 }, color: '#B22222' },
      { type: 'valve', position: { x: 9, y: 1, z: 4 }, color: '#B22222' },
      // Pipe supports
      { type: 'pillar2', position: { x: 5, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 5, y: 1, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 7, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 7, y: 1, z: 2 }, color: '#4A4A4A' },

      // === CATWALK BETWEEN TANKS ===
      { type: 'catwalk', position: { x: 9, y: 3, z: 1 }, color: '#3A3A3A' },
      { type: 'railing', position: { x: 9, y: 4, z: 1 }, color: '#505050' },
      // Support columns
      { type: 'pillar', position: { x: 9, y: 0, z: 1 }, color: '#4A4A4A' },
      { type: 'pillar', position: { x: 9, y: 1, z: 1 }, color: '#4A4A4A' },
      { type: 'pillar', position: { x: 9, y: 2, z: 1 }, color: '#4A4A4A' },

      // === STORAGE AREA (front) ===
      // Crates
      { type: 'crate', position: { x: 0, y: 0, z: 6 }, color: '#8B4513' },
      { type: 'crate', position: { x: 1, y: 0, z: 6 }, color: '#A0522D' },
      { type: 'crate', position: { x: 0, y: 0, z: 7 }, color: '#8B4513' },
      { type: 'crate', position: { x: 1, y: 0, z: 7 }, color: '#CD853F' },
      { type: 'crate', position: { x: 0, y: 1, z: 6 }, color: '#A0522D' },
      // Barrels
      { type: 'barrel', position: { x: 3, y: 0, z: 6 }, color: '#2F4F4F' },
      { type: 'barrel', position: { x: 4, y: 0, z: 6 }, color: '#006400' },
      { type: 'barrel', position: { x: 3, y: 0, z: 7 }, color: '#8B0000' },
      { type: 'barrel', position: { x: 4, y: 0, z: 7 }, color: '#2F4F4F' },

      // === CONTROL BUILDING (small) ===
      { type: 'cube', position: { x: 6, y: 0, z: 7 }, color: '#D3D3D3' },
      { type: 'cube', position: { x: 7, y: 0, z: 7 }, color: '#D3D3D3' },
      { type: 'cube', position: { x: 6, y: 0, z: 8 }, color: '#D3D3D3' },
      { type: 'cube', position: { x: 7, y: 0, z: 8 }, color: '#D3D3D3' },
      { type: 'cube', position: { x: 6, y: 1, z: 7 }, color: '#C0C0C0' },
      { type: 'cube', position: { x: 7, y: 1, z: 7 }, color: '#C0C0C0' },
      { type: 'cube', position: { x: 6, y: 1, z: 8 }, color: '#C0C0C0' },
      { type: 'cube', position: { x: 7, y: 1, z: 8 }, color: '#C0C0C0' },
      { type: 'slab', position: { x: 6, y: 2, z: 7 }, color: '#808080' },
      { type: 'slab', position: { x: 7, y: 2, z: 7 }, color: '#808080' },
      { type: 'slab', position: { x: 6, y: 2, z: 8 }, color: '#808080' },
      { type: 'slab', position: { x: 7, y: 2, z: 8 }, color: '#808080' },
      { type: 'acUnit', position: { x: 7, y: 2, z: 8 }, color: '#909090' },
      { type: 'antenna', position: { x: 6, y: 2, z: 7 }, color: '#606060' },
      // Door
      { type: 'doorFrame', position: { x: 6, y: 0, z: 6 }, color: '#333333' },

      // === LOADING DOCK ===
      { type: 'slab', position: { x: 10, y: 0, z: 7 }, color: '#707070' },
      { type: 'slab', position: { x: 11, y: 0, z: 7 }, color: '#707070' },
      { type: 'slab', position: { x: 10, y: 0, z: 8 }, color: '#707070' },
      { type: 'slab', position: { x: 11, y: 0, z: 8 }, color: '#707070' },
      { type: 'barrier', position: { x: 10, y: 0, z: 6 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 11, y: 0, z: 6 }, color: '#FFD700' },

      // === FENCE LINE ===
      { type: 'fence', position: { x: 0, y: 0, z: 9 }, color: '#696969' },
      { type: 'fence', position: { x: 1, y: 0, z: 9 }, color: '#696969' },
      { type: 'fence', position: { x: 2, y: 0, z: 9 }, color: '#696969' },
      { type: 'fence', position: { x: 3, y: 0, z: 9 }, color: '#696969' },
      { type: 'fence', position: { x: 4, y: 0, z: 9 }, color: '#696969' },
      { type: 'fence', position: { x: 5, y: 0, z: 9 }, color: '#696969' },
      // Gap for entrance
      { type: 'fence', position: { x: 8, y: 0, z: 9 }, color: '#696969' },
      { type: 'fence', position: { x: 9, y: 0, z: 9 }, color: '#696969' },
      { type: 'fence', position: { x: 10, y: 0, z: 9 }, color: '#696969' },
      { type: 'fence', position: { x: 11, y: 0, z: 9 }, color: '#696969' },
    ]
  },

  // =====================
  // MODERN
  // =====================
  rooftopTerrace: {
    name: 'Rooftop Terrace',
    category: 'modern',
    description: 'Modern rooftop with furniture and plants',
    blocks: [
      // Floor
      ...makeFloor(0, 0, 0, 5, 4, '#D2B48C'),
      // Planters with bushes
      { type: 'planter', position: { x: 0, y: 0, z: 0 }, color: '#696969' },
      { type: 'bush', position: { x: 0, y: 1, z: 0 }, color: '#228B22' },
      { type: 'planter', position: { x: 4, y: 0, z: 0 }, color: '#696969' },
      { type: 'bush', position: { x: 4, y: 1, z: 0 }, color: '#2E8B2E' },
      { type: 'planter', position: { x: 0, y: 0, z: 3 }, color: '#696969' },
      { type: 'bush', position: { x: 0, y: 1, z: 3 }, color: '#32CD32' },
      { type: 'planter', position: { x: 4, y: 0, z: 3 }, color: '#696969' },
      { type: 'bush', position: { x: 4, y: 1, z: 3 }, color: '#228B22' },
      // Seating area
      { type: 'bench', position: { x: 1, y: 0, z: 1 }, color: '#8B4513' },
      { type: 'table', position: { x: 2, y: 0, z: 1 }, color: '#A0522D' },
      { type: 'chair', position: { x: 3, y: 0, z: 1 }, color: '#8B4513' },
      // AC units
      { type: 'acUnit', position: { x: 2, y: 0, z: 3 }, color: '#C0C0C0' },
      // Solar panel
      { type: 'solarPanel', position: { x: 1, y: 0, z: 3 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 3, y: 0, z: 3 }, color: '#1a1a2e' },
    ]
  },

  parkingLot: {
    name: 'Parking Lot',
    category: 'modern',
    description: 'Parking area with barriers and lights',
    blocks: [
      // Asphalt floor
      ...makeFloor(0, 0, 0, 6, 4, '#2F2F2F'),
      // Parking lines (using slab)
      { type: 'slab', position: { x: 1, y: 0, z: 0 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 3, y: 0, z: 0 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 5, y: 0, z: 0 }, color: '#FFFFFF' },
      // Barriers
      { type: 'barrier', position: { x: 0, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 0, y: 0, z: 1 }, color: '#FF0000' },
      { type: 'barrier', position: { x: 0, y: 0, z: 2 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 0, y: 0, z: 3 }, color: '#FF0000' },
      // Light poles
      { type: 'pillar2', position: { x: 2, y: 0, z: 3 }, color: '#808080' },
      { type: 'pillar2', position: { x: 2, y: 1, z: 3 }, color: '#808080' },
      { type: 'pillar2', position: { x: 2, y: 2, z: 3 }, color: '#808080' },
      { type: 'solarPanel', position: { x: 2, y: 3, z: 3 }, color: '#404040' },
      { type: 'quarter', position: { x: 2, y: 2, z: 3 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFAA', intensity: 2, radius: 6 } },
      // Second light
      { type: 'pillar2', position: { x: 5, y: 0, z: 3 }, color: '#808080' },
      { type: 'pillar2', position: { x: 5, y: 1, z: 3 }, color: '#808080' },
      { type: 'pillar2', position: { x: 5, y: 2, z: 3 }, color: '#808080' },
      { type: 'quarter', position: { x: 5, y: 2, z: 3 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFAA', intensity: 2, radius: 6 } },
    ]
  },

  busStop: {
    name: 'Bus Stop',
    category: 'modern',
    description: 'Modern bus shelter with bench',
    blocks: [
      // Platform
      { type: 'slab', position: { x: 0, y: 0, z: 0 }, color: '#808080' },
      { type: 'slab', position: { x: 1, y: 0, z: 0 }, color: '#808080' },
      { type: 'slab', position: { x: 2, y: 0, z: 0 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 1 }, color: '#808080' },
      { type: 'slab', position: { x: 1, y: 0, z: 1 }, color: '#808080' },
      { type: 'slab', position: { x: 2, y: 0, z: 1 }, color: '#808080' },
      // Shelter pillars
      { type: 'pillar2', position: { x: 0, y: 0, z: 0 }, color: '#4169E1' },
      { type: 'pillar2', position: { x: 0, y: 1, z: 0 }, color: '#4169E1' },
      { type: 'pillar2', position: { x: 2, y: 0, z: 0 }, color: '#4169E1' },
      { type: 'pillar2', position: { x: 2, y: 1, z: 0 }, color: '#4169E1' },
      // Roof
      { type: 'slab', position: { x: 0, y: 2, z: 0 }, color: '#4169E1' },
      { type: 'slab', position: { x: 1, y: 2, z: 0 }, color: '#4169E1' },
      { type: 'slab', position: { x: 2, y: 2, z: 0 }, color: '#4169E1' },
      { type: 'slab', position: { x: 0, y: 2, z: 1 }, color: '#4169E1' },
      { type: 'slab', position: { x: 1, y: 2, z: 1 }, color: '#4169E1' },
      { type: 'slab', position: { x: 2, y: 2, z: 1 }, color: '#4169E1' },
      // Bench
      { type: 'bench', position: { x: 1, y: 0, z: 0 }, color: '#8B4513' },
      // Light
      { type: 'quarter', position: { x: 1, y: 2, z: 0 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.5, radius: 4 } },
    ]
  },

  solarFarm: {
    name: 'Solar Farm',
    category: 'modern',
    description: 'Array of solar panels',
    blocks: [
      // Ground
      ...makeFloor(0, 0, 0, 5, 4, '#90EE90'),
      // Solar panel arrays
      { type: 'solarPanel', position: { x: 0, y: 0, z: 0 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 1, y: 0, z: 0 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 2, y: 0, z: 0 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 3, y: 0, z: 0 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 4, y: 0, z: 0 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 0, y: 0, z: 2 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 1, y: 0, z: 2 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 2, y: 0, z: 2 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 3, y: 0, z: 2 }, color: '#1a1a2e' },
      { type: 'solarPanel', position: { x: 4, y: 0, z: 2 }, color: '#1a1a2e' },
      // Control unit
      { type: 'cube', position: { x: 2, y: 0, z: 3 }, color: '#808080' },
      { type: 'vent', position: { x: 2, y: 1, z: 3 }, color: '#696969' },
      // Fencing
      { type: 'fence', position: { x: 0, y: 0, z: 3 }, color: '#C0C0C0' },
      { type: 'fence', position: { x: 1, y: 0, z: 3 }, color: '#C0C0C0' },
      { type: 'fence', position: { x: 3, y: 0, z: 3 }, color: '#C0C0C0' },
      { type: 'fence', position: { x: 4, y: 0, z: 3 }, color: '#C0C0C0' },
    ]
  },

  // =====================
  // FURNITURE
  // =====================
  diningRoom: {
    name: 'Dining Room',
    category: 'furniture',
    description: 'Dining set with table and chairs',
    blocks: [
      // Wood floor
      ...makeFloor(0, 0, 0, 4, 4, '#DEB887'),
      // Dining table
      { type: 'table', position: { x: 1, y: 0, z: 1 }, color: '#8B4513' },
      { type: 'table', position: { x: 2, y: 0, z: 1 }, color: '#8B4513' },
      { type: 'table', position: { x: 1, y: 0, z: 2 }, color: '#8B4513' },
      { type: 'table', position: { x: 2, y: 0, z: 2 }, color: '#8B4513' },
      // Chairs around table
      { type: 'chair', position: { x: 0, y: 0, z: 1 }, color: '#654321', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'chair', position: { x: 0, y: 0, z: 2 }, color: '#654321', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'chair', position: { x: 3, y: 0, z: 1 }, color: '#654321', rotation: { x: 0, y: 270, z: 0 } },
      { type: 'chair', position: { x: 3, y: 0, z: 2 }, color: '#654321', rotation: { x: 0, y: 270, z: 0 } },
      { type: 'chair', position: { x: 1, y: 0, z: 0 }, color: '#654321', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'chair', position: { x: 2, y: 0, z: 0 }, color: '#654321', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'chair', position: { x: 1, y: 0, z: 3 }, color: '#654321' },
      { type: 'chair', position: { x: 2, y: 0, z: 3 }, color: '#654321' },
    ]
  },

  livingRoom: {
    name: 'Living Room',
    category: 'furniture',
    description: 'Cozy living room with sofa, fireplace, entertainment center, and decorations',
    blocks: [
      // === HARDWOOD FLOOR ===
      ...makeFloor(0, 0, 0, 8, 7, '#DEB887'),
      // Area rug (darker center)
      { type: 'slab', position: { x: 2, y: 0, z: 2 }, color: '#8B0000' },
      { type: 'slab', position: { x: 3, y: 0, z: 2 }, color: '#8B0000' },
      { type: 'slab', position: { x: 4, y: 0, z: 2 }, color: '#8B0000' },
      { type: 'slab', position: { x: 2, y: 0, z: 3 }, color: '#A52A2A' },
      { type: 'slab', position: { x: 3, y: 0, z: 3 }, color: '#A52A2A' },
      { type: 'slab', position: { x: 4, y: 0, z: 3 }, color: '#A52A2A' },
      { type: 'slab', position: { x: 2, y: 0, z: 4 }, color: '#8B0000' },
      { type: 'slab', position: { x: 3, y: 0, z: 4 }, color: '#8B0000' },
      { type: 'slab', position: { x: 4, y: 0, z: 4 }, color: '#8B0000' },

      // === WALLS (partial, to show it's indoors) ===
      ...makeWallZ(0, 1, 0, 7, 3, '#F5F5DC'),
      ...makeWallX(0, 1, 0, 8, 3, '#F5F5DC'),

      // === FIREPLACE (Back wall) ===
      // Stone surround
      { type: 'cube', position: { x: 3, y: 1, z: 0 }, color: '#696969' },
      { type: 'cube', position: { x: 4, y: 1, z: 0 }, color: '#696969' },
      { type: 'cube', position: { x: 2, y: 1, z: 0 }, color: '#808080' },
      { type: 'cube', position: { x: 5, y: 1, z: 0 }, color: '#808080' },
      { type: 'cube', position: { x: 2, y: 2, z: 0 }, color: '#808080' },
      { type: 'cube', position: { x: 5, y: 2, z: 0 }, color: '#808080' },
      // Mantle
      { type: 'slab', position: { x: 2, y: 3, z: 0 }, color: '#654321' },
      { type: 'slab', position: { x: 3, y: 3, z: 0 }, color: '#654321' },
      { type: 'slab', position: { x: 4, y: 3, z: 0 }, color: '#654321' },
      { type: 'slab', position: { x: 5, y: 3, z: 0 }, color: '#654321' },
      // Fire opening
      { type: 'doorFrame', position: { x: 3, y: 1, z: 0 }, color: '#1A1A1A' },
      { type: 'doorFrame', position: { x: 4, y: 1, z: 0 }, color: '#1A1A1A' },
      // Fire
      { type: 'cube', position: { x: 3, y: 1, z: 0 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 2.0, radius: 4 } },
      // Chimney
      { type: 'chimney', position: { x: 3, y: 3, z: 0 }, color: '#696969' },
      { type: 'chimney', position: { x: 4, y: 3, z: 0 }, color: '#696969' },
      // Mantle decorations
      { type: 'pillar2', position: { x: 2, y: 3, z: 0 }, color: '#FFD700' },  // Candle
      { type: 'pillar2', position: { x: 5, y: 3, z: 0 }, color: '#FFD700' },  // Candle

      // === SOFA (L-shaped sectional) ===
      // Main section facing fireplace
      { type: 'bench', position: { x: 2, y: 0, z: 5 }, color: '#4169E1' },
      { type: 'bench', position: { x: 3, y: 0, z: 5 }, color: '#4169E1' },
      { type: 'bench', position: { x: 4, y: 0, z: 5 }, color: '#4169E1' },
      // Back cushions
      { type: 'halfZ', position: { x: 2, y: 1, z: 6 }, color: '#3A5FCD' },
      { type: 'halfZ', position: { x: 3, y: 1, z: 6 }, color: '#3A5FCD' },
      { type: 'halfZ', position: { x: 4, y: 1, z: 6 }, color: '#3A5FCD' },
      // Armrests
      { type: 'halfX', position: { x: 1, y: 0, z: 5 }, color: '#3A5FCD' },
      { type: 'halfX', position: { x: 5, y: 0, z: 5 }, color: '#3A5FCD', rotation: { x: 0, y: 180, z: 0 } },
      // Throw pillows
      { type: 'slab', position: { x: 2, y: 0, z: 5 }, color: '#FFD700' },
      { type: 'slab', position: { x: 4, y: 0, z: 5 }, color: '#DC143C' },

      // === COFFEE TABLE ===
      { type: 'table', position: { x: 3, y: 0, z: 3 }, color: '#8B4513' },
      // Items on coffee table
      { type: 'slab', position: { x: 3, y: 1, z: 3 }, color: '#228B22' },  // Book

      // === ENTERTAINMENT CENTER (Side wall) ===
      // TV stand
      { type: 'shelf', position: { x: 0, y: 0, z: 2 }, color: '#2F2F2F' },
      { type: 'shelf', position: { x: 0, y: 0, z: 3 }, color: '#2F2F2F' },
      { type: 'shelf', position: { x: 0, y: 0, z: 4 }, color: '#2F2F2F' },
      // TV (using monitor)
      { type: 'monitor', position: { x: 0, y: 1, z: 3 }, color: '#1A1A1A' },
      // Speakers
      { type: 'speaker', position: { x: 0, y: 1, z: 2 }, color: '#2F2F2F' },
      { type: 'speaker', position: { x: 0, y: 1, z: 4 }, color: '#2F2F2F' },

      // === BOOKSHELF (Corner) ===
      { type: 'shelfUnit', position: { x: 7, y: 0, z: 0 }, color: '#654321' },
      { type: 'shelfUnit', position: { x: 7, y: 1, z: 0 }, color: '#654321' },
      { type: 'shelfUnit', position: { x: 7, y: 2, z: 0 }, color: '#654321' },

      // === ARMCHAIR ===
      { type: 'chair', position: { x: 6, y: 0, z: 3 }, color: '#8B4513', rotation: { x: 0, y: 90, z: 0 } },

      // === SIDE TABLE with LAMP ===
      { type: 'table', position: { x: 6, y: 0, z: 5 }, color: '#A0522D' },
      { type: 'pillar2', position: { x: 6, y: 1, z: 5 }, color: '#B87333' },
      { type: 'dome', position: { x: 6, y: 2, z: 5 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFE0', intensity: 1.5, radius: 4 } },

      // === INDOOR PLANT ===
      { type: 'planter', position: { x: 7, y: 0, z: 5 }, color: '#8B4513' },
      { type: 'bush', position: { x: 7, y: 1, z: 5 }, color: '#228B22' },
      { type: 'bush', position: { x: 7, y: 2, z: 5 }, color: '#2E8B57' },

      // === WINDOW (Side wall) ===
      { type: 'windowFrame', position: { x: 0, y: 2, z: 5 }, color: '#F5F5DC' },
      { type: 'windowFrame', position: { x: 0, y: 2, z: 6 }, color: '#F5F5DC' },
      // Window sill
      { type: 'windowSill', position: { x: 0, y: 1, z: 5 }, color: '#F5F5DC' },
      { type: 'windowSill', position: { x: 0, y: 1, z: 6 }, color: '#F5F5DC' },

      // === CEILING LIGHT ===
      { type: 'lightFixture', position: { x: 3, y: 3, z: 3 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.0, radius: 5 } },
    ]
  },

  workshop: {
    name: 'Workshop',
    category: 'furniture',
    description: 'Crafting workshop with tools',
    blocks: [
      // Floor
      ...makeFloor(0, 0, 0, 4, 4, '#696969'),
      // Workbench
      { type: 'table', position: { x: 0, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'table', position: { x: 1, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'table', position: { x: 2, y: 0, z: 0 }, color: '#8B4513' },
      // Tools on bench (small items)
      { type: 'valve', position: { x: 0, y: 1, z: 0 }, color: '#B22222' },
      { type: 'valve', position: { x: 2, y: 1, z: 0 }, color: '#4169E1' },
      // Stool
      { type: 'chair', position: { x: 1, y: 0, z: 1 }, color: '#654321' },
      // Storage
      { type: 'crate', position: { x: 3, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'crate', position: { x: 3, y: 0, z: 1 }, color: '#A0522D' },
      { type: 'crate', position: { x: 3, y: 1, z: 0 }, color: '#CD853F' },
      // Barrel
      { type: 'barrel', position: { x: 0, y: 0, z: 3 }, color: '#2F4F4F' },
      { type: 'barrel', position: { x: 1, y: 0, z: 3 }, color: '#006400' },
      // Ladder to loft
      { type: 'ladder', position: { x: 3, y: 0, z: 3 }, color: '#8B4513' },
      { type: 'ladder', position: { x: 3, y: 1, z: 3 }, color: '#8B4513' },
    ]
  },

  cellar: {
    name: 'Wine Cellar',
    category: 'furniture',
    description: 'Underground cellar with barrels',
    blocks: [
      // Stone floor
      ...makeFloor(0, 0, 0, 4, 3, '#505050'),
      // Barrel storage
      { type: 'barrel', position: { x: 0, y: 0, z: 0 }, color: '#5C4033', rotation: { x: 90, y: 0, z: 0 } },
      { type: 'barrel', position: { x: 1, y: 0, z: 0 }, color: '#5C4033', rotation: { x: 90, y: 0, z: 0 } },
      { type: 'barrel', position: { x: 2, y: 0, z: 0 }, color: '#5C4033', rotation: { x: 90, y: 0, z: 0 } },
      { type: 'barrel', position: { x: 0, y: 1, z: 0 }, color: '#4A3728', rotation: { x: 90, y: 0, z: 0 } },
      { type: 'barrel', position: { x: 1, y: 1, z: 0 }, color: '#4A3728', rotation: { x: 90, y: 0, z: 0 } },
      { type: 'barrel', position: { x: 2, y: 1, z: 0 }, color: '#4A3728', rotation: { x: 90, y: 0, z: 0 } },
      // Wine rack (crates)
      { type: 'crate', position: { x: 3, y: 0, z: 0 }, color: '#654321' },
      { type: 'crate', position: { x: 3, y: 1, z: 0 }, color: '#654321' },
      { type: 'crate', position: { x: 3, y: 0, z: 1 }, color: '#654321' },
      { type: 'crate', position: { x: 3, y: 1, z: 1 }, color: '#654321' },
      // Table
      { type: 'table', position: { x: 1, y: 0, z: 2 }, color: '#8B4513' },
      // Torch
      { type: 'torch', position: { x: 0, y: 1, z: 2 }, color: '#8B4513', emissive: { enabled: true, color: '#FF6600', intensity: 1.5, radius: 4 } },
    ]
  },

  // =====================
  // INFRASTRUCTURE
  // =====================
  stoneBridge: {
    name: 'Stone Bridge',
    category: 'infrastructure',
    description: 'Grand arched stone bridge with decorative pillars, lanterns, and water below',
    blocks: [
      // === WATER BELOW ===
      { type: 'slab', position: { x: 1, y: -1, z: 0 }, color: '#4169E1' },
      { type: 'slab', position: { x: 2, y: -1, z: 0 }, color: '#4682B4' },
      { type: 'slab', position: { x: 3, y: -1, z: 0 }, color: '#4169E1' },
      { type: 'slab', position: { x: 4, y: -1, z: 0 }, color: '#4682B4' },
      { type: 'slab', position: { x: 5, y: -1, z: 0 }, color: '#4169E1' },
      { type: 'slab', position: { x: 1, y: -1, z: 1 }, color: '#4682B4' },
      { type: 'slab', position: { x: 2, y: -1, z: 1 }, color: '#4169E1' },
      { type: 'slab', position: { x: 3, y: -1, z: 1 }, color: '#4682B4' },
      { type: 'slab', position: { x: 4, y: -1, z: 1 }, color: '#4169E1' },
      { type: 'slab', position: { x: 5, y: -1, z: 1 }, color: '#4682B4' },
      { type: 'slab', position: { x: 1, y: -1, z: -1 }, color: '#4682B4' },
      { type: 'slab', position: { x: 2, y: -1, z: -1 }, color: '#4169E1' },
      { type: 'slab', position: { x: 3, y: -1, z: -1 }, color: '#4682B4' },
      { type: 'slab', position: { x: 4, y: -1, z: -1 }, color: '#4169E1' },
      { type: 'slab', position: { x: 5, y: -1, z: -1 }, color: '#4682B4' },

      // === MAIN SUPPORT PILLARS ===
      // Left pillar (full stone column)
      { type: 'column', position: { x: 0, y: -1, z: 0 }, color: '#505050' },
      { type: 'column', position: { x: 0, y: 0, z: 0 }, color: '#606060' },
      { type: 'column', position: { x: 0, y: 1, z: 0 }, color: '#696969' },
      { type: 'base', position: { x: 0, y: -1, z: 0 }, color: '#404040' },
      // Right pillar
      { type: 'column', position: { x: 8, y: -1, z: 0 }, color: '#505050' },
      { type: 'column', position: { x: 8, y: 0, z: 0 }, color: '#606060' },
      { type: 'column', position: { x: 8, y: 1, z: 0 }, color: '#696969' },
      { type: 'base', position: { x: 8, y: -1, z: 0 }, color: '#404040' },
      // Center support pier
      { type: 'column', position: { x: 4, y: -1, z: 0 }, color: '#505050' },
      { type: 'buttress', position: { x: 4, y: 0, z: 0 }, color: '#606060' },

      // === ARCHES ===
      { type: 'arch', position: { x: 2, y: 0, z: 0 }, color: '#707070', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'arch', position: { x: 6, y: 0, z: 0 }, color: '#707070', rotation: { x: 0, y: 90, z: 0 } },

      // === BRIDGE DECK ===
      // Main road surface
      ...makeRow(0, 2, 0, 9, 'X', 'slab', '#808080'),
      // Wider deck with curbs
      ...makeRow(0, 2, -1, 9, 'X', 'slab', '#909090'),
      ...makeRow(0, 2, 1, 9, 'X', 'slab', '#909090'),
      // Cobblestone pattern (alternating colors)
      { type: 'slab', position: { x: 1, y: 2, z: 0 }, color: '#707070' },
      { type: 'slab', position: { x: 3, y: 2, z: 0 }, color: '#707070' },
      { type: 'slab', position: { x: 5, y: 2, z: 0 }, color: '#707070' },
      { type: 'slab', position: { x: 7, y: 2, z: 0 }, color: '#707070' },

      // === BALUSTERS ===
      // Left side
      { type: 'baluster', position: { x: 0, y: 2, z: -2 }, color: '#909090' },
      { type: 'baluster', position: { x: 2, y: 2, z: -2 }, color: '#909090' },
      { type: 'baluster', position: { x: 4, y: 2, z: -2 }, color: '#909090' },
      { type: 'baluster', position: { x: 6, y: 2, z: -2 }, color: '#909090' },
      { type: 'baluster', position: { x: 8, y: 2, z: -2 }, color: '#909090' },
      // Right side
      { type: 'baluster', position: { x: 0, y: 2, z: 2 }, color: '#909090' },
      { type: 'baluster', position: { x: 2, y: 2, z: 2 }, color: '#909090' },
      { type: 'baluster', position: { x: 4, y: 2, z: 2 }, color: '#909090' },
      { type: 'baluster', position: { x: 6, y: 2, z: 2 }, color: '#909090' },
      { type: 'baluster', position: { x: 8, y: 2, z: 2 }, color: '#909090' },

      // === RAILINGS ===
      ...makeRow(0, 3, -2, 9, 'X', 'railing', '#808080'),
      ...makeRow(0, 3, 2, 9, 'X', 'railing', '#808080'),

      // === DECORATIVE PILLAR CAPS ===
      // Entrance pillars with finials
      { type: 'cube', position: { x: 0, y: 2, z: -2 }, color: '#707070' },
      { type: 'cube', position: { x: 0, y: 2, z: 2 }, color: '#707070' },
      { type: 'cube', position: { x: 8, y: 2, z: -2 }, color: '#707070' },
      { type: 'cube', position: { x: 8, y: 2, z: 2 }, color: '#707070' },
      { type: 'finial', position: { x: 0, y: 3, z: -2 }, color: '#606060' },
      { type: 'finial', position: { x: 0, y: 3, z: 2 }, color: '#606060' },
      { type: 'finial', position: { x: 8, y: 3, z: -2 }, color: '#606060' },
      { type: 'finial', position: { x: 8, y: 3, z: 2 }, color: '#606060' },

      // === LANTERNS ===
      { type: 'pillar4', position: { x: 0, y: 3, z: 0 }, color: '#2F2F2F' },
      { type: 'sphere', position: { x: 0, y: 4, z: 0 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFD700', intensity: 2, radius: 4 } },
      { type: 'pillar4', position: { x: 8, y: 3, z: 0 }, color: '#2F2F2F' },
      { type: 'sphere', position: { x: 8, y: 4, z: 0 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFD700', intensity: 2, radius: 4 } },
      // Center lantern
      { type: 'pillar4', position: { x: 4, y: 3, z: 0 }, color: '#2F2F2F' },
      { type: 'sphere', position: { x: 4, y: 4, z: 0 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFD700', intensity: 2, radius: 4 } },

      // === EMBANKMENTS/APPROACH ===
      // Left approach
      { type: 'wedge', position: { x: -1, y: 1, z: 0 }, color: '#505050', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'wedge', position: { x: -1, y: 1, z: -1 }, color: '#606060', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'wedge', position: { x: -1, y: 1, z: 1 }, color: '#606060', rotation: { x: 0, y: 90, z: 0 } },
      // Right approach
      { type: 'wedge', position: { x: 9, y: 1, z: 0 }, color: '#505050', rotation: { x: 0, y: -90, z: 0 } },
      { type: 'wedge', position: { x: 9, y: 1, z: -1 }, color: '#606060', rotation: { x: 0, y: -90, z: 0 } },
      { type: 'wedge', position: { x: 9, y: 1, z: 1 }, color: '#606060', rotation: { x: 0, y: -90, z: 0 } },

      // === VEGETATION ===
      { type: 'bush', position: { x: -1, y: 0, z: -2 }, color: '#228B22' },
      { type: 'bush', position: { x: 9, y: 0, z: 2 }, color: '#2E8B2E' },
    ]
  },

  streetCorner: {
    name: 'Street Corner',
    category: 'infrastructure',
    description: 'Urban street corner with lamp',
    blocks: [
      // Sidewalk
      ...makeFloor(0, 0, 0, 4, 4, '#D3D3D3'),
      // Road (darker)
      { type: 'slab', position: { x: 0, y: 0, z: -1 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: 1, y: 0, z: -1 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: 2, y: 0, z: -1 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: 3, y: 0, z: -1 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: -1, y: 0, z: 0 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: -1, y: 0, z: 1 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: -1, y: 0, z: 2 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: -1, y: 0, z: 3 }, color: '#2F2F2F' },
      // Street lamp
      { type: 'pillar2', position: { x: 0, y: 0, z: 0 }, color: '#2F2F2F' },
      { type: 'pillar2', position: { x: 0, y: 1, z: 0 }, color: '#2F2F2F' },
      { type: 'pillar2', position: { x: 0, y: 2, z: 0 }, color: '#2F2F2F' },
      { type: 'dome', position: { x: 0, y: 3, z: 0 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFE0', intensity: 2, radius: 6 } },
      // Bench
      { type: 'bench', position: { x: 2, y: 0, z: 0 }, color: '#228B22' },
      // Planter
      { type: 'planter', position: { x: 3, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'bush', position: { x: 3, y: 1, z: 0 }, color: '#228B22' },
      // Barrier
      { type: 'barrier', position: { x: 0, y: 0, z: 3 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 1, y: 0, z: 3 }, color: '#FFD700' },
    ]
  },

  plaza: {
    name: 'Plaza',
    category: 'infrastructure',
    description: 'Grand public plaza with tiered fountain, outdoor seating, landscaping, and decorative lighting',
    blocks: [
      // === PATTERNED STONE PAVEMENT ===
      // Main plaza floor (alternating pattern)
      ...makeFloor(0, 0, 0, 12, 12, '#B8B8B8'),
      // Decorative darker stone borders
      ...makeRow(0, 0, 0, 12, 'X', 'slab', '#808080'),
      ...makeRow(0, 0, 11, 12, 'X', 'slab', '#808080'),
      { type: 'slab', position: { x: 0, y: 0, z: 1 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 2 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 3 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 4 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 5 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 6 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 7 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 8 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 9 }, color: '#808080' },
      { type: 'slab', position: { x: 0, y: 0, z: 10 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 1 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 2 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 3 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 4 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 5 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 6 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 7 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 8 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 9 }, color: '#808080' },
      { type: 'slab', position: { x: 11, y: 0, z: 10 }, color: '#808080' },

      // === GRAND TIERED FOUNTAIN (Center) ===
      // Outer pool edge
      { type: 'slab', position: { x: 4, y: 0, z: 4 }, color: '#606060' },
      { type: 'slab', position: { x: 5, y: 0, z: 4 }, color: '#606060' },
      { type: 'slab', position: { x: 6, y: 0, z: 4 }, color: '#606060' },
      { type: 'slab', position: { x: 7, y: 0, z: 4 }, color: '#606060' },
      { type: 'slab', position: { x: 4, y: 0, z: 7 }, color: '#606060' },
      { type: 'slab', position: { x: 5, y: 0, z: 7 }, color: '#606060' },
      { type: 'slab', position: { x: 6, y: 0, z: 7 }, color: '#606060' },
      { type: 'slab', position: { x: 7, y: 0, z: 7 }, color: '#606060' },
      { type: 'slab', position: { x: 4, y: 0, z: 5 }, color: '#606060' },
      { type: 'slab', position: { x: 4, y: 0, z: 6 }, color: '#606060' },
      { type: 'slab', position: { x: 7, y: 0, z: 5 }, color: '#606060' },
      { type: 'slab', position: { x: 7, y: 0, z: 6 }, color: '#606060' },
      // Water pool
      { type: 'quarter', position: { x: 5, y: 0, z: 5 }, color: '#4169E1' },
      { type: 'quarter', position: { x: 6, y: 0, z: 5 }, color: '#4682B4' },
      { type: 'quarter', position: { x: 5, y: 0, z: 6 }, color: '#4682B4' },
      { type: 'quarter', position: { x: 6, y: 0, z: 6 }, color: '#4169E1' },
      // Inner pedestal
      { type: 'cylinder', position: { x: 5, y: 0, z: 5 }, color: '#A0A0A0' },
      { type: 'cylinder', position: { x: 5, y: 1, z: 5 }, color: '#909090' },
      // Fountain bowl
      { type: 'bowl', position: { x: 5, y: 2, z: 5 }, color: '#B0B0B0' },
      // Top spire
      { type: 'pillar2', position: { x: 5, y: 2, z: 5 }, color: '#C0C0C0' },
      { type: 'finial', position: { x: 5, y: 3, z: 5 }, color: '#D4AF37' },

      // === DECORATIVE COLUMNS (4 corners around fountain) ===
      { type: 'base', position: { x: 3, y: 0, z: 3 }, color: '#808080' },
      { type: 'column', position: { x: 3, y: 1, z: 3 }, color: '#D3D3D3' },
      { type: 'capital', position: { x: 3, y: 2, z: 3 }, color: '#D3D3D3' },
      { type: 'base', position: { x: 8, y: 0, z: 3 }, color: '#808080' },
      { type: 'column', position: { x: 8, y: 1, z: 3 }, color: '#D3D3D3' },
      { type: 'capital', position: { x: 8, y: 2, z: 3 }, color: '#D3D3D3' },
      { type: 'base', position: { x: 3, y: 0, z: 8 }, color: '#808080' },
      { type: 'column', position: { x: 3, y: 1, z: 8 }, color: '#D3D3D3' },
      { type: 'capital', position: { x: 3, y: 2, z: 8 }, color: '#D3D3D3' },
      { type: 'base', position: { x: 8, y: 0, z: 8 }, color: '#808080' },
      { type: 'column', position: { x: 8, y: 1, z: 8 }, color: '#D3D3D3' },
      { type: 'capital', position: { x: 8, y: 2, z: 8 }, color: '#D3D3D3' },

      // === SEATING AREAS ===
      // North benches with planters
      { type: 'bench', position: { x: 3, y: 0, z: 1 }, color: '#8B4513', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'bench', position: { x: 5, y: 0, z: 1 }, color: '#8B4513', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'bench', position: { x: 7, y: 0, z: 1 }, color: '#8B4513', rotation: { x: 0, y: 180, z: 0 } },
      // South benches
      { type: 'bench', position: { x: 3, y: 0, z: 10 }, color: '#8B4513' },
      { type: 'bench', position: { x: 5, y: 0, z: 10 }, color: '#8B4513' },
      { type: 'bench', position: { x: 7, y: 0, z: 10 }, color: '#8B4513' },
      // East benches
      { type: 'bench', position: { x: 10, y: 0, z: 4 }, color: '#8B4513', rotation: { x: 0, y: 270, z: 0 } },
      { type: 'bench', position: { x: 10, y: 0, z: 6 }, color: '#8B4513', rotation: { x: 0, y: 270, z: 0 } },
      // West benches
      { type: 'bench', position: { x: 1, y: 0, z: 4 }, color: '#8B4513', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'bench', position: { x: 1, y: 0, z: 6 }, color: '#8B4513', rotation: { x: 0, y: 90, z: 0 } },

      // === OUTDOOR CAFE AREA (Southeast corner) ===
      { type: 'table', position: { x: 9, y: 0, z: 9 }, color: '#8B4513' },
      { type: 'chair', position: { x: 9, y: 0, z: 8 }, color: '#8B4513', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'chair', position: { x: 9, y: 0, z: 10 }, color: '#8B4513' },
      { type: 'chair', position: { x: 8, y: 0, z: 9 }, color: '#8B4513', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'chair', position: { x: 10, y: 0, z: 9 }, color: '#8B4513', rotation: { x: 0, y: 270, z: 0 } },
      // Umbrella
      { type: 'umbrella', position: { x: 9, y: 1, z: 9 }, color: '#DC143C' },

      // === LANDSCAPING ===
      // Large planters with trees (corners)
      { type: 'planter', position: { x: 1, y: 0, z: 1 }, color: '#696969' },
      { type: 'planter', position: { x: 2, y: 0, z: 1 }, color: '#696969' },
      { type: 'planter', position: { x: 1, y: 0, z: 2 }, color: '#696969' },
      { type: 'logZ', position: { x: 1, y: 1, z: 1 }, color: '#654321' },
      { type: 'logZ', position: { x: 1, y: 2, z: 1 }, color: '#654321' },
      { type: 'bush', position: { x: 1, y: 3, z: 1 }, color: '#228B22' },
      { type: 'bush', position: { x: 0, y: 3, z: 1 }, color: '#2E8B57' },
      { type: 'bush', position: { x: 1, y: 3, z: 0 }, color: '#2E8B57' },
      { type: 'bush', position: { x: 1, y: 4, z: 1 }, color: '#228B22' },

      { type: 'planter', position: { x: 9, y: 0, z: 1 }, color: '#696969' },
      { type: 'planter', position: { x: 10, y: 0, z: 1 }, color: '#696969' },
      { type: 'planter', position: { x: 10, y: 0, z: 2 }, color: '#696969' },
      { type: 'logZ', position: { x: 10, y: 1, z: 1 }, color: '#654321' },
      { type: 'logZ', position: { x: 10, y: 2, z: 1 }, color: '#654321' },
      { type: 'bush', position: { x: 10, y: 3, z: 1 }, color: '#228B22' },
      { type: 'bush', position: { x: 10, y: 3, z: 0 }, color: '#32CD32' },
      { type: 'bush', position: { x: 10, y: 4, z: 1 }, color: '#228B22' },

      // Flower planters
      { type: 'planter', position: { x: 2, y: 0, z: 5 }, color: '#696969' },
      { type: 'flower', position: { x: 2, y: 1, z: 5 }, color: '#FF6B6B' },
      { type: 'planter', position: { x: 2, y: 0, z: 6 }, color: '#696969' },
      { type: 'flower', position: { x: 2, y: 1, z: 6 }, color: '#FFD700' },
      { type: 'planter', position: { x: 9, y: 0, z: 5 }, color: '#696969' },
      { type: 'flower', position: { x: 9, y: 1, z: 5 }, color: '#DA70D6' },
      { type: 'planter', position: { x: 9, y: 0, z: 6 }, color: '#696969' },
      { type: 'flower', position: { x: 9, y: 1, z: 6 }, color: '#FF69B4' },

      // === STREET LAMPS ===
      { type: 'pillar', position: { x: 2, y: 0, z: 2 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 2, y: 1, z: 2 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 2, y: 2, z: 2 }, color: '#2F4F4F' },
      { type: 'lightFixture', position: { x: 2, y: 3, z: 2 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.2, radius: 4 } },

      { type: 'pillar', position: { x: 9, y: 0, z: 2 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 9, y: 1, z: 2 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 9, y: 2, z: 2 }, color: '#2F4F4F' },
      { type: 'lightFixture', position: { x: 9, y: 3, z: 2 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.2, radius: 4 } },

      { type: 'pillar', position: { x: 2, y: 0, z: 9 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 2, y: 1, z: 9 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 2, y: 2, z: 9 }, color: '#2F4F4F' },
      { type: 'lightFixture', position: { x: 2, y: 3, z: 9 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.2, radius: 4 } },

      // === TRASH BINS ===
      { type: 'bin', position: { x: 4, y: 0, z: 2 }, color: '#2F4F4F' },
      { type: 'bin', position: { x: 7, y: 0, z: 9 }, color: '#2F4F4F' },

      // === DECORATIVE STATUE (Southwest) ===
      { type: 'pediment', position: { x: 1, y: 0, z: 9 }, color: '#808080' },
      { type: 'pillar2', position: { x: 1, y: 1, z: 9 }, color: '#A0A0A0' },
      { type: 'sphere', position: { x: 1, y: 2, z: 9 }, color: '#B87333' },

      // === GROUND DETAILS ===
      // Drain grates
      { type: 'grate', position: { x: 3, y: 0, z: 5 }, color: '#404040' },
      { type: 'grate', position: { x: 8, y: 0, z: 6 }, color: '#404040' },
    ]
  },

  stairway: {
    name: 'Grand Stairway',
    category: 'infrastructure',
    description: 'Elegant staircase with balusters',
    blocks: [
      // Stairs
      { type: 'stairs', position: { x: 1, y: 0, z: 0 }, color: '#D3D3D3' },
      { type: 'stairs', position: { x: 1, y: 1, z: 1 }, color: '#D3D3D3' },
      { type: 'stairs', position: { x: 1, y: 2, z: 2 }, color: '#D3D3D3' },
      { type: 'stairs', position: { x: 1, y: 3, z: 3 }, color: '#D3D3D3' },
      // Side walls with balusters
      { type: 'baluster', position: { x: 0, y: 0, z: 0 }, color: '#F5F5DC' },
      { type: 'baluster', position: { x: 0, y: 1, z: 1 }, color: '#F5F5DC' },
      { type: 'baluster', position: { x: 0, y: 2, z: 2 }, color: '#F5F5DC' },
      { type: 'baluster', position: { x: 0, y: 3, z: 3 }, color: '#F5F5DC' },
      { type: 'baluster', position: { x: 2, y: 0, z: 0 }, color: '#F5F5DC' },
      { type: 'baluster', position: { x: 2, y: 1, z: 1 }, color: '#F5F5DC' },
      { type: 'baluster', position: { x: 2, y: 2, z: 2 }, color: '#F5F5DC' },
      { type: 'baluster', position: { x: 2, y: 3, z: 3 }, color: '#F5F5DC' },
      // Handrails
      { type: 'railing', position: { x: 0, y: 1, z: 0 }, color: '#DAA520' },
      { type: 'railing', position: { x: 0, y: 2, z: 1 }, color: '#DAA520' },
      { type: 'railing', position: { x: 0, y: 3, z: 2 }, color: '#DAA520' },
      { type: 'railing', position: { x: 0, y: 4, z: 3 }, color: '#DAA520' },
      { type: 'railing', position: { x: 2, y: 1, z: 0 }, color: '#DAA520' },
      { type: 'railing', position: { x: 2, y: 2, z: 1 }, color: '#DAA520' },
      { type: 'railing', position: { x: 2, y: 3, z: 2 }, color: '#DAA520' },
      { type: 'railing', position: { x: 2, y: 4, z: 3 }, color: '#DAA520' },
      // Bottom newel posts
      { type: 'capital', position: { x: 0, y: 1, z: 0 }, color: '#F5F5DC' },
      { type: 'capital', position: { x: 2, y: 1, z: 0 }, color: '#F5F5DC' },
      // Top landing
      { type: 'slab', position: { x: 0, y: 4, z: 4 }, color: '#D3D3D3' },
      { type: 'slab', position: { x: 1, y: 4, z: 4 }, color: '#D3D3D3' },
      { type: 'slab', position: { x: 2, y: 4, z: 4 }, color: '#D3D3D3' },
    ]
  },

  // =====================
  // CITY
  // =====================
  cityBlock: {
    name: 'City Block',
    category: 'city',
    description: 'Detailed urban block with shops, apartments, offices, street furniture, and traffic elements',
    blocks: [
      // === STREETS ===
      // Main streets (asphalt)
      ...makeFloor(-2, 0, -2, 16, 2, '#2F2F2F'),
      ...makeFloor(-2, 0, 12, 16, 2, '#2F2F2F'),
      ...makeFloor(-2, 0, 0, 2, 12, '#2F2F2F'),
      ...makeFloor(12, 0, 0, 2, 12, '#2F2F2F'),
      // Road markings (white center line)
      { type: 'slab', position: { x: 3, y: 0, z: -1 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 5, y: 0, z: -1 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 7, y: 0, z: -1 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 9, y: 0, z: -1 }, color: '#FFFFFF' },

      // === SIDEWALKS ===
      ...makeFloor(0, 0, 0, 12, 12, '#B0B0B0'),

      // === CROSSWALKS ===
      { type: 'slab', position: { x: 0, y: 0, z: -1 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 1, y: 0, z: -1 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 0, z: -1 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 11, y: 0, z: -1 }, color: '#FFFFFF' },

      // === BUILDING 1 - OFFICE TOWER (Northwest corner) ===
      ...makeFloor(0, 0, 0, 4, 5, '#404040'),
      ...makeGlassFloor(0, 1, 0, 4, 5, '#303030', '#4169E1'),
      ...makeGlassFloor(0, 2, 0, 4, 5, '#303030', '#4682B4'),
      ...makeGlassFloor(0, 3, 0, 4, 5, '#303030', '#4169E1'),
      ...makeGlassFloor(0, 4, 0, 4, 5, '#303030', '#4682B4'),
      ...makeGlassFloor(0, 5, 0, 4, 5, '#303030', '#4169E1'),
      ...makeGlassFloor(0, 6, 0, 4, 5, '#303030', '#4682B4'),
      ...makeFloor(0, 7, 0, 4, 5, '#353535'),
      // Rooftop equipment
      { type: 'acUnit', position: { x: 1, y: 7, z: 1 }, color: '#C0C0C0' },
      { type: 'acUnit', position: { x: 2, y: 7, z: 2 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 1, y: 7, z: 3 }, color: '#808080' },
      // Main entrance
      { type: 'doorFrame', position: { x: 1, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 2, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'awning', position: { x: 1, y: 2, z: -1 }, color: '#2F2F2F' },
      { type: 'awning', position: { x: 2, y: 2, z: -1 }, color: '#2F2F2F' },

      // === BUILDING 2 - RETAIL SHOPS (Northeast corner) ===
      ...makeFloor(5, 0, 0, 4, 4, '#696969'),
      ...makeHollowFloor(5, 1, 0, 4, 4, '#DEB887'),
      ...makeHollowFloor(5, 2, 0, 4, 4, '#F5DEB3'),
      ...makeFloor(5, 3, 0, 4, 4, '#8B4513'),
      // Shop front with awning
      { type: 'doorFrame', position: { x: 6, y: 1, z: 0 }, color: '#654321' },
      { type: 'awning', position: { x: 5, y: 2, z: -1 }, color: '#DC143C' },
      { type: 'awning', position: { x: 6, y: 2, z: -1 }, color: '#DC143C' },
      { type: 'awning', position: { x: 7, y: 2, z: -1 }, color: '#DC143C' },
      // Shop windows
      { type: 'windowFrame', position: { x: 5, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 7, y: 1, z: 0 }, color: '#4682B4' },
      // Shop sign
      { type: 'sign', position: { x: 6, y: 2, z: 0 }, color: '#FFD700' },
      // Outdoor seating
      { type: 'table', position: { x: 5, y: 0, z: -1 }, color: '#8B4513' },
      { type: 'chair', position: { x: 5, y: 0, z: -2 }, color: '#8B4513' },

      // === BUILDING 3 - APARTMENTS (East side) ===
      ...makeFloor(9, 0, 0, 3, 5, '#505050'),
      ...makeHollowFloor(9, 1, 0, 3, 5, '#CD853F'),
      ...makeHollowFloor(9, 2, 0, 3, 5, '#CD853F'),
      ...makeHollowFloor(9, 3, 0, 3, 5, '#D2B48C'),
      ...makeHollowFloor(9, 4, 0, 3, 5, '#D2B48C'),
      ...makeHollowFloor(9, 5, 0, 3, 5, '#CD853F'),
      ...makeFloor(9, 6, 0, 3, 5, '#8B0000'),
      // Windows
      { type: 'windowFrame', position: { x: 10, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 10, y: 2, z: 0 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 10, y: 3, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 10, y: 4, z: 0 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 10, y: 5, z: 0 }, color: '#4682B4' },
      // Entrance
      { type: 'doorFrame', position: { x: 9, y: 1, z: 0 }, color: '#654321' },
      { type: 'step', position: { x: 9, y: 0, z: -1 }, color: '#808080' },
      // Balconies
      { type: 'slab', position: { x: 10, y: 3, z: -1 }, color: '#808080' },
      { type: 'railing', position: { x: 10, y: 4, z: -1 }, color: '#404040' },
      { type: 'slab', position: { x: 10, y: 5, z: -1 }, color: '#808080' },
      { type: 'railing', position: { x: 10, y: 6, z: -1 }, color: '#404040' },

      // === BUILDING 4 - WAREHOUSE/GARAGE (Back) ===
      ...makeFloor(0, 0, 7, 7, 5, '#606060'),
      ...makeWallX(0, 1, 7, 7, 3, '#808080'),
      ...makeWallX(0, 1, 11, 7, 3, '#808080'),
      ...makeWallZ(0, 1, 8, 3, 3, '#808080'),
      ...makeWallZ(6, 1, 8, 3, 3, '#808080'),
      ...makeFloor(0, 4, 7, 7, 5, '#505050'),
      // Loading bay door
      { type: 'doorFrame', position: { x: 2, y: 1, z: 7 }, color: '#4A4A4A' },
      { type: 'doorFrame', position: { x: 3, y: 1, z: 7 }, color: '#4A4A4A' },
      { type: 'doorFrame', position: { x: 2, y: 2, z: 7 }, color: '#4A4A4A' },
      { type: 'doorFrame', position: { x: 3, y: 2, z: 7 }, color: '#4A4A4A' },
      // Barrel storage
      { type: 'barrel', position: { x: 5, y: 1, z: 9 }, color: '#2F4F4F' },
      { type: 'barrel', position: { x: 5, y: 1, z: 10 }, color: '#006400' },

      // === PARKING LOT (Southeast) ===
      ...makeFloor(8, 0, 6, 4, 6, '#3A3A3A'),
      // Parking space lines
      { type: 'slab', position: { x: 8, y: 0, z: 7 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 8, y: 0, z: 9 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 0, z: 7 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 0, z: 9 }, color: '#FFFFFF' },
      // Entrance barriers
      { type: 'barrier', position: { x: 8, y: 0, z: 6 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 11, y: 0, z: 6 }, color: '#FFD700' },

      // === STREET FURNITURE ===
      // Street lamps
      { type: 'pillar', position: { x: -1, y: 0, z: 3 }, color: '#2F2F2F' },
      { type: 'pillar', position: { x: -1, y: 1, z: 3 }, color: '#2F2F2F' },
      { type: 'pillar', position: { x: -1, y: 2, z: 3 }, color: '#2F2F2F' },
      { type: 'lightFixture', position: { x: -1, y: 3, z: 3 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFE0', intensity: 1.5, radius: 5 } },
      { type: 'pillar', position: { x: -1, y: 0, z: 8 }, color: '#2F2F2F' },
      { type: 'pillar', position: { x: -1, y: 1, z: 8 }, color: '#2F2F2F' },
      { type: 'pillar', position: { x: -1, y: 2, z: 8 }, color: '#2F2F2F' },
      { type: 'lightFixture', position: { x: -1, y: 3, z: 8 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFE0', intensity: 1.5, radius: 5 } },
      { type: 'pillar', position: { x: 12, y: 0, z: 5 }, color: '#2F2F2F' },
      { type: 'pillar', position: { x: 12, y: 1, z: 5 }, color: '#2F2F2F' },
      { type: 'pillar', position: { x: 12, y: 2, z: 5 }, color: '#2F2F2F' },
      { type: 'lightFixture', position: { x: 12, y: 3, z: 5 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFE0', intensity: 1.5, radius: 5 } },

      // Fire hydrant
      { type: 'bollard', position: { x: 4, y: 0, z: -1 }, color: '#FF0000' },

      // Trash bins
      { type: 'bin', position: { x: 0, y: 0, z: -1 }, color: '#2F4F4F' },
      { type: 'bin', position: { x: 8, y: 0, z: -1 }, color: '#2F4F4F' },

      // Benches
      { type: 'bench', position: { x: 4, y: 0, z: 5 }, color: '#8B4513' },

      // === TRAFFIC LIGHT ===
      { type: 'pillar', position: { x: -1, y: 0, z: -1 }, color: '#2F2F2F' },
      { type: 'pillar', position: { x: -1, y: 1, z: -1 }, color: '#2F2F2F' },
      { type: 'pillar', position: { x: -1, y: 2, z: -1 }, color: '#2F2F2F' },
      { type: 'bulb', position: { x: -1, y: 3, z: -1 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 1.0, radius: 2 } },

      // === BUS STOP ===
      { type: 'pillar', position: { x: 12, y: 0, z: 10 }, color: '#4169E1' },
      { type: 'pillar', position: { x: 12, y: 1, z: 10 }, color: '#4169E1' },
      { type: 'sign', position: { x: 12, y: 2, z: 10 }, color: '#FFD700' },
      { type: 'bench', position: { x: 11, y: 0, z: 10 }, color: '#808080', rotation: { x: 0, y: 90, z: 0 } },

      // === TREES ===
      { type: 'planter', position: { x: 4, y: 0, z: 4 }, color: '#505050' },
      { type: 'logZ', position: { x: 4, y: 1, z: 4 }, color: '#654321' },
      { type: 'bush', position: { x: 4, y: 2, z: 4 }, color: '#228B22' },
      { type: 'bush', position: { x: 4, y: 3, z: 4 }, color: '#2E8B57' },

      { type: 'planter', position: { x: 7, y: 0, z: 5 }, color: '#505050' },
      { type: 'logZ', position: { x: 7, y: 1, z: 5 }, color: '#654321' },
      { type: 'bush', position: { x: 7, y: 2, z: 5 }, color: '#228B22' },
      { type: 'bush', position: { x: 7, y: 3, z: 5 }, color: '#32CD32' },
    ]
  },

  skyscraper: {
    name: 'Skyscraper',
    category: 'city',
    description: 'Modern glass tower with helipad, observation deck, and detailed infrastructure',
    blocks: [
      // === FOUNDATION & PLAZA ===
      ...makeFloor(-1, 0, -1, 8, 8, '#2F2F2F'),
      // Decorative plaza elements
      { type: 'planter', position: { x: -1, y: 0, z: 2 }, color: '#505050' },
      { type: 'bush', position: { x: -1, y: 1, z: 2 }, color: '#228B22' },
      { type: 'planter', position: { x: -1, y: 0, z: 4 }, color: '#505050' },
      { type: 'bush', position: { x: -1, y: 1, z: 4 }, color: '#228B22' },
      { type: 'bench', position: { x: 6, y: 0, z: 2 }, color: '#808080' },

      // === MAIN TOWER - Lower Section ===
      ...makeGlassFloor(0, 1, 0, 6, 6, '#303030', '#4169E1'),
      ...makeGlassFloor(0, 2, 0, 6, 6, '#303030', '#4682B4'),
      ...makeGlassFloor(0, 3, 0, 6, 6, '#303030', '#4169E1'),
      ...makeGlassFloor(0, 4, 0, 6, 6, '#303030', '#4682B4'),
      ...makeGlassFloor(0, 5, 0, 6, 6, '#303030', '#4169E1'),
      // Mechanical floor (darker)
      ...makeHollowFloor(0, 6, 0, 6, 6, '#252525'),

      // === MAIN TOWER - Upper Section ===
      ...makeGlassFloor(0, 7, 0, 6, 6, '#303030', '#4682B4'),
      ...makeGlassFloor(0, 8, 0, 6, 6, '#303030', '#4169E1'),
      ...makeGlassFloor(0, 9, 0, 6, 6, '#303030', '#4682B4'),
      ...makeGlassFloor(0, 10, 0, 6, 6, '#303030', '#4169E1'),

      // === SETBACK FLOORS ===
      ...makeGlassFloor(1, 11, 1, 4, 4, '#404040', '#4169E1'),
      ...makeGlassFloor(1, 12, 1, 4, 4, '#404040', '#4682B4'),
      // Observation deck
      ...makeFloor(1, 13, 1, 4, 4, '#252525'),
      // Railing around observation deck
      { type: 'railing', position: { x: 1, y: 13, z: 0 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 2, y: 13, z: 0 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 3, y: 13, z: 0 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 4, y: 13, z: 0 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 0, y: 13, z: 1 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 0, y: 13, z: 2 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 0, y: 13, z: 3 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 0, y: 13, z: 4 }, color: '#C0C0C0' },

      // === HELIPAD LEVEL ===
      ...makeFloor(1, 14, 1, 4, 4, '#404040'),
      // Helipad marking (using different color cubes)
      { type: 'slab', position: { x: 2, y: 14, z: 2 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 3, y: 14, z: 2 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 2, y: 14, z: 3 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 3, y: 14, z: 3 }, color: '#FFFF00' },
      // Warning lights
      { type: 'sphere', position: { x: 1, y: 14, z: 1 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2, radius: 2 } },
      { type: 'sphere', position: { x: 4, y: 14, z: 1 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2, radius: 2 } },
      { type: 'sphere', position: { x: 1, y: 14, z: 4 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2, radius: 2 } },
      { type: 'sphere', position: { x: 4, y: 14, z: 4 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2, radius: 2 } },

      // === SPIRE/ANTENNA ===
      { type: 'pillar2', position: { x: 2, y: 15, z: 2 }, color: '#C0C0C0' },
      { type: 'pillar2', position: { x: 2, y: 16, z: 2 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 2, y: 17, z: 2 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 2, y: 18, z: 2 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 2, y: 19, z: 2 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 3, radius: 5 } },

      // === ROOFTOP EQUIPMENT ===
      { type: 'acUnit', position: { x: 5, y: 11, z: 1 }, color: '#808080' },
      { type: 'acUnit', position: { x: 5, y: 11, z: 3 }, color: '#808080' },
      { type: 'acUnit', position: { x: 5, y: 11, z: 5 }, color: '#808080' },
      { type: 'vent', position: { x: 0, y: 11, z: 2 }, color: '#606060' },
      { type: 'vent', position: { x: 0, y: 11, z: 4 }, color: '#606060' },
      // Satellite dish
      { type: 'dome', position: { x: 0, y: 11, z: 0 }, color: '#E0E0E0' },

      // === GRAND ENTRANCE ===
      // Revolving door frame
      { type: 'doorFrame', position: { x: 2, y: 1, z: 0 }, color: '#B8860B' },
      { type: 'doorFrame', position: { x: 3, y: 1, z: 0 }, color: '#B8860B' },
      // Entrance canopy
      { type: 'slab', position: { x: 1, y: 2, z: -1 }, color: '#303030' },
      { type: 'slab', position: { x: 2, y: 2, z: -1 }, color: '#303030' },
      { type: 'slab', position: { x: 3, y: 2, z: -1 }, color: '#303030' },
      { type: 'slab', position: { x: 4, y: 2, z: -1 }, color: '#303030' },
      // Lobby columns (gold/brass)
      { type: 'column', position: { x: 1, y: 1, z: 0 }, color: '#D4AF37' },
      { type: 'column', position: { x: 4, y: 1, z: 0 }, color: '#D4AF37' },
      { type: 'capital', position: { x: 1, y: 2, z: 0 }, color: '#D4AF37' },
      { type: 'capital', position: { x: 4, y: 2, z: 0 }, color: '#D4AF37' },

      // === EXTERIOR LIGHTING ===
      // Ground level spotlights
      { type: 'spotlight', position: { x: 0, y: 0, z: -1 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 2, radius: 3 } },
      { type: 'spotlight', position: { x: 5, y: 0, z: -1 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 2, radius: 3 } },

      // === WINDOW WASHING RAILS ===
      { type: 'beam4X', position: { x: 0, y: 10, z: -1 }, color: '#404040' },
      { type: 'beam4X', position: { x: 2, y: 10, z: -1 }, color: '#404040' },
      { type: 'beam4X', position: { x: 4, y: 10, z: -1 }, color: '#404040' },
    ]
  },

  apartmentBuilding: {
    name: 'Apartment Building',
    category: 'city',
    description: 'Residential apartment with balconies, fire escape, rooftop amenities, and urban details',
    blocks: [
      // === FOUNDATION & SIDEWALK ===
      ...makeFloor(-1, 0, -2, 10, 8, '#707070'),  // Sidewalk
      ...makeFloor(0, 0, 0, 8, 5, '#505050'),     // Building base

      // === MAIN BUILDING STRUCTURE ===
      // Ground floor - lobby/commercial (brick)
      ...makeHollowFloor(0, 1, 0, 8, 5, '#8B4513'),
      // Upper residential floors (lighter brick)
      ...makeHollowFloor(0, 2, 0, 8, 5, '#DEB887'),
      ...makeHollowFloor(0, 3, 0, 8, 5, '#DEB887'),
      ...makeHollowFloor(0, 4, 0, 8, 5, '#DEB887'),
      ...makeHollowFloor(0, 5, 0, 8, 5, '#E8D8B8'),
      ...makeHollowFloor(0, 6, 0, 8, 5, '#E8D8B8'),
      ...makeHollowFloor(0, 7, 0, 8, 5, '#E8D8B8'),

      // === ROOF ===
      ...makeFloor(0, 8, 0, 8, 5, '#404040'),
      // Roof edge/parapet
      ...makeRow(0, 8, 0, 8, 'X', 'ledge', '#505050'),
      ...makeRow(0, 8, 4, 8, 'X', 'ledge', '#505050'),
      { type: 'ledge', position: { x: 0, y: 8, z: 1 }, color: '#505050', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'ledge', position: { x: 0, y: 8, z: 2 }, color: '#505050', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'ledge', position: { x: 0, y: 8, z: 3 }, color: '#505050', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'ledge', position: { x: 7, y: 8, z: 1 }, color: '#505050', rotation: { x: 0, y: 270, z: 0 } },
      { type: 'ledge', position: { x: 7, y: 8, z: 2 }, color: '#505050', rotation: { x: 0, y: 270, z: 0 } },
      { type: 'ledge', position: { x: 7, y: 8, z: 3 }, color: '#505050', rotation: { x: 0, y: 270, z: 0 } },

      // === ROOFTOP EQUIPMENT ===
      // Water tank
      { type: 'tank', position: { x: 1, y: 8, z: 2 }, color: '#2F4F4F' },
      { type: 'tank', position: { x: 1, y: 9, z: 2 }, color: '#2F4F4F' },
      // AC units
      { type: 'acUnit', position: { x: 5, y: 8, z: 1 }, color: '#C0C0C0' },
      { type: 'acUnit', position: { x: 6, y: 8, z: 1 }, color: '#C0C0C0' },
      { type: 'acUnit', position: { x: 5, y: 8, z: 3 }, color: '#C0C0C0' },
      // Antenna/TV aerial
      { type: 'antenna', position: { x: 3, y: 8, z: 2 }, color: '#808080' },
      // Roof access stairwell
      { type: 'cube', position: { x: 4, y: 8, z: 2 }, color: '#606060' },
      { type: 'slab', position: { x: 4, y: 9, z: 2 }, color: '#505050' },
      { type: 'doorFrame', position: { x: 4, y: 8, z: 1 }, color: '#404040' },

      // === FRONT BALCONIES (Z=-1) ===
      // Floor 2-3 balconies (left unit)
      { type: 'slab', position: { x: 1, y: 2, z: -1 }, color: '#808080' },
      { type: 'slab', position: { x: 2, y: 2, z: -1 }, color: '#808080' },
      { type: 'railing', position: { x: 1, y: 3, z: -1 }, color: '#303030' },
      { type: 'railing', position: { x: 2, y: 3, z: -1 }, color: '#303030' },
      { type: 'planter', position: { x: 1, y: 2, z: -1 }, color: '#8B4513' },
      { type: 'flower', position: { x: 1, y: 3, z: -1 }, color: '#FF6B6B' },
      // Floor 2-3 balconies (right unit)
      { type: 'slab', position: { x: 5, y: 2, z: -1 }, color: '#808080' },
      { type: 'slab', position: { x: 6, y: 2, z: -1 }, color: '#808080' },
      { type: 'railing', position: { x: 5, y: 3, z: -1 }, color: '#303030' },
      { type: 'railing', position: { x: 6, y: 3, z: -1 }, color: '#303030' },
      { type: 'chair', position: { x: 6, y: 2, z: -1 }, color: '#8B4513' },
      // Floor 4-5 balconies
      { type: 'slab', position: { x: 1, y: 4, z: -1 }, color: '#808080' },
      { type: 'slab', position: { x: 2, y: 4, z: -1 }, color: '#808080' },
      { type: 'railing', position: { x: 1, y: 5, z: -1 }, color: '#303030' },
      { type: 'railing', position: { x: 2, y: 5, z: -1 }, color: '#303030' },
      { type: 'slab', position: { x: 5, y: 4, z: -1 }, color: '#808080' },
      { type: 'slab', position: { x: 6, y: 4, z: -1 }, color: '#808080' },
      { type: 'railing', position: { x: 5, y: 5, z: -1 }, color: '#303030' },
      { type: 'railing', position: { x: 6, y: 5, z: -1 }, color: '#303030' },
      { type: 'planter', position: { x: 5, y: 4, z: -1 }, color: '#8B4513' },
      { type: 'bush', position: { x: 5, y: 5, z: -1 }, color: '#228B22' },
      // Floor 6-7 balconies
      { type: 'slab', position: { x: 1, y: 6, z: -1 }, color: '#808080' },
      { type: 'slab', position: { x: 2, y: 6, z: -1 }, color: '#808080' },
      { type: 'railing', position: { x: 1, y: 7, z: -1 }, color: '#303030' },
      { type: 'railing', position: { x: 2, y: 7, z: -1 }, color: '#303030' },
      { type: 'slab', position: { x: 5, y: 6, z: -1 }, color: '#808080' },
      { type: 'slab', position: { x: 6, y: 6, z: -1 }, color: '#808080' },
      { type: 'railing', position: { x: 5, y: 7, z: -1 }, color: '#303030' },
      { type: 'railing', position: { x: 6, y: 7, z: -1 }, color: '#303030' },
      { type: 'planter', position: { x: 6, y: 6, z: -1 }, color: '#8B4513' },
      { type: 'flower', position: { x: 6, y: 7, z: -1 }, color: '#FFD700' },

      // === FIRE ESCAPE (Side - X=7) ===
      // Platforms and stairs
      { type: 'grateFloor', position: { x: 8, y: 2, z: 1 }, color: '#303030' },
      { type: 'grateFloor', position: { x: 8, y: 2, z: 2 }, color: '#303030' },
      { type: 'railing', position: { x: 8, y: 3, z: 1 }, color: '#404040' },
      { type: 'stairs', position: { x: 8, y: 3, z: 2 }, color: '#303030', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'grateFloor', position: { x: 8, y: 4, z: 1 }, color: '#303030' },
      { type: 'grateFloor', position: { x: 8, y: 4, z: 2 }, color: '#303030' },
      { type: 'railing', position: { x: 8, y: 5, z: 1 }, color: '#404040' },
      { type: 'stairs', position: { x: 8, y: 5, z: 2 }, color: '#303030', rotation: { x: 0, y: 270, z: 0 } },
      { type: 'grateFloor', position: { x: 8, y: 6, z: 1 }, color: '#303030' },
      { type: 'grateFloor', position: { x: 8, y: 6, z: 2 }, color: '#303030' },
      { type: 'railing', position: { x: 8, y: 7, z: 1 }, color: '#404040' },
      // Fire escape ladder to ground
      { type: 'ladder', position: { x: 8, y: 0, z: 1 }, color: '#404040' },
      { type: 'ladder', position: { x: 8, y: 1, z: 1 }, color: '#404040' },

      // === WINDOWS (Front facade) ===
      // Ground floor - commercial/lobby
      { type: 'windowFrame', position: { x: 1, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 2, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 5, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 6, y: 1, z: 0 }, color: '#4682B4' },
      // Upper floors
      { type: 'windowFrame', position: { x: 1, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 3, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 5, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 1, y: 4, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 3, y: 4, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 5, y: 4, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 1, y: 6, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 3, y: 6, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 5, y: 6, z: 0 }, color: '#4682B4' },

      // === MAIN ENTRANCE ===
      { type: 'doorFrame', position: { x: 3, y: 1, z: 0 }, color: '#654321' },
      { type: 'doorFrame', position: { x: 4, y: 1, z: 0 }, color: '#654321' },
      // Entrance awning
      { type: 'awning', position: { x: 3, y: 2, z: -1 }, color: '#8B0000' },
      { type: 'awning', position: { x: 4, y: 2, z: -1 }, color: '#8B0000' },
      // Steps
      { type: 'step', position: { x: 3, y: 0, z: -1 }, color: '#606060' },
      { type: 'step', position: { x: 4, y: 0, z: -1 }, color: '#606060' },

      // === GROUND LEVEL DETAILS ===
      // Mailboxes
      { type: 'locker', position: { x: 0, y: 1, z: -1 }, color: '#C0C0C0' },
      // Street lamp
      { type: 'pillar', position: { x: -1, y: 0, z: -1 }, color: '#404040' },
      { type: 'pillar', position: { x: -1, y: 1, z: -1 }, color: '#404040' },
      { type: 'pillar', position: { x: -1, y: 2, z: -1 }, color: '#404040' },
      { type: 'lightFixture', position: { x: -1, y: 3, z: -1 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.2, radius: 4 } },
      // Trash cans
      { type: 'bin', position: { x: 7, y: 0, z: -1 }, color: '#2F4F4F' },
      // Fire hydrant
      { type: 'bollard', position: { x: 8, y: 0, z: -1 }, color: '#FF0000' },
      // Bike rack
      { type: 'railing', position: { x: 6, y: 0, z: -1 }, color: '#808080' },

      // === CONDUITS & UTILITIES ===
      // Gas meter on side
      { type: 'powerBox', position: { x: 0, y: 1, z: 1 }, color: '#808080' },
      // AC conduit running up (using cableY which is a valid type)
      { type: 'cableY', position: { x: 7, y: 3, z: 4 }, color: '#FFFFFF' },
      { type: 'cableY', position: { x: 7, y: 4, z: 4 }, color: '#FFFFFF' },
      { type: 'cableY', position: { x: 7, y: 5, z: 4 }, color: '#FFFFFF' },
      { type: 'cableY', position: { x: 7, y: 6, z: 4 }, color: '#FFFFFF' },
      { type: 'cableY', position: { x: 7, y: 7, z: 4 }, color: '#FFFFFF' },

      // === DECORATIVE CORNICES ===
      { type: 'cornice', position: { x: 0, y: 2, z: 0 }, color: '#D3D3D3' },
      { type: 'cornice', position: { x: 1, y: 2, z: 0 }, color: '#D3D3D3' },
      { type: 'cornice', position: { x: 2, y: 2, z: 0 }, color: '#D3D3D3' },
      { type: 'cornice', position: { x: 5, y: 2, z: 0 }, color: '#D3D3D3' },
      { type: 'cornice', position: { x: 6, y: 2, z: 0 }, color: '#D3D3D3' },
      { type: 'cornice', position: { x: 7, y: 2, z: 0 }, color: '#D3D3D3' },
    ]
  },

  shoppingMall: {
    name: 'Shopping Mall',
    category: 'city',
    description: 'Two-story shopping center with stores, food court, escalators, and glass atrium',
    blocks: [
      // === GROUND FLOOR ===
      ...makeFloor(0, 0, 0, 18, 14, '#D8D8D8'),
      // Main central walkway (polished)
      ...makeFloor(7, 0, 0, 4, 14, '#E8E8E8'),

      // === EXTERIOR WALLS ===
      ...makeWallX(0, 1, 0, 18, 6, '#E0E0E0'),
      ...makeWallX(0, 1, 13, 18, 6, '#E0E0E0'),
      ...makeWallZ(0, 1, 1, 12, 6, '#E0E0E0'),
      ...makeWallZ(17, 1, 1, 12, 6, '#E0E0E0'),

      // === MAIN ENTRANCE (South) ===
      { type: 'doorFrame', position: { x: 7, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 8, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 9, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 10, y: 1, z: 0 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 7, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 8, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 9, y: 2, z: 0 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 10, y: 2, z: 0 }, color: '#4682B4' },
      // Entrance canopy
      { type: 'awning', position: { x: 7, y: 3, z: -1 }, color: '#E0E0E0' },
      { type: 'awning', position: { x: 8, y: 3, z: -1 }, color: '#E0E0E0' },
      { type: 'awning', position: { x: 9, y: 3, z: -1 }, color: '#E0E0E0' },
      { type: 'awning', position: { x: 10, y: 3, z: -1 }, color: '#E0E0E0' },

      // === STORE 1: CLOTHING (Left front) ===
      ...makeWallZ(1, 1, 1, 3, 3, '#F5F5DC'),
      ...makeWallZ(5, 1, 1, 3, 3, '#F5F5DC'),
      { type: 'windowFrame', position: { x: 2, y: 1, z: 1 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 3, y: 1, z: 1 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 4, y: 1, z: 1 }, color: '#4682B4' },
      { type: 'sign', position: { x: 3, y: 3, z: 1 }, color: '#FF69B4' },
      // Display shelves
      { type: 'shelf', position: { x: 2, y: 1, z: 2 }, color: '#D2B48C' },
      { type: 'shelf', position: { x: 3, y: 1, z: 2 }, color: '#D2B48C' },
      { type: 'shelf', position: { x: 4, y: 1, z: 2 }, color: '#D2B48C' },

      // === STORE 2: ELECTRONICS (Left middle) ===
      ...makeWallZ(1, 1, 4, 3, 3, '#1E1E1E'),
      ...makeWallZ(5, 1, 4, 3, 3, '#1E1E1E'),
      { type: 'windowFrame', position: { x: 2, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 3, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 4, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'sign', position: { x: 3, y: 3, z: 4 }, color: '#00BFFF' },
      // TV display
      { type: 'monitor', position: { x: 2, y: 1, z: 5 }, color: '#1E1E1E' },
      { type: 'monitor', position: { x: 4, y: 1, z: 5 }, color: '#1E1E1E' },
      { type: 'table', position: { x: 3, y: 1, z: 6 }, color: '#2F2F2F' },

      // === STORE 3: BOOKSTORE (Right front) ===
      ...makeWallZ(12, 1, 1, 3, 3, '#8B4513'),
      ...makeWallZ(16, 1, 1, 3, 3, '#8B4513'),
      { type: 'windowFrame', position: { x: 13, y: 1, z: 1 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 14, y: 1, z: 1 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 15, y: 1, z: 1 }, color: '#4682B4' },
      { type: 'sign', position: { x: 14, y: 3, z: 1 }, color: '#228B22' },
      // Bookshelves
      { type: 'shelfUnit', position: { x: 13, y: 1, z: 2 }, color: '#8B4513' },
      { type: 'shelfUnit', position: { x: 14, y: 1, z: 2 }, color: '#8B4513' },
      { type: 'shelfUnit', position: { x: 15, y: 1, z: 2 }, color: '#8B4513' },

      // === STORE 4: SPORTS (Right middle) ===
      ...makeWallZ(12, 1, 4, 3, 3, '#FF4500'),
      ...makeWallZ(16, 1, 4, 3, 3, '#FF4500'),
      { type: 'windowFrame', position: { x: 13, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 14, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 15, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'sign', position: { x: 14, y: 3, z: 4 }, color: '#FF4500' },
      // Displays
      { type: 'shelf', position: { x: 13, y: 1, z: 5 }, color: '#E0E0E0' },
      { type: 'shelf', position: { x: 15, y: 1, z: 5 }, color: '#E0E0E0' },

      // === CENTRAL FOUNTAIN ===
      { type: 'cylinder', position: { x: 8, y: 0, z: 3 }, color: '#708090' },
      { type: 'cylinder', position: { x: 9, y: 0, z: 3 }, color: '#708090' },
      { type: 'cylinder', position: { x: 8, y: 0, z: 4 }, color: '#708090' },
      { type: 'cylinder', position: { x: 9, y: 0, z: 4 }, color: '#708090' },
      // Water (light blue slabs)
      { type: 'slab', position: { x: 8, y: 0, z: 3 }, color: '#87CEEB' },
      { type: 'slab', position: { x: 9, y: 0, z: 3 }, color: '#87CEEB' },
      { type: 'slab', position: { x: 8, y: 0, z: 4 }, color: '#87CEEB' },
      { type: 'slab', position: { x: 9, y: 0, z: 4 }, color: '#87CEEB' },
      // Fountain center spout
      { type: 'pillar', position: { x: 8, y: 1, z: 3 }, color: '#708090' },
      { type: 'dome', position: { x: 8, y: 2, z: 3 }, color: '#87CEEB' },

      // === ESCALATORS (Center) ===
      { type: 'stairs', position: { x: 7, y: 1, z: 6 }, color: '#808080' },
      { type: 'stairs', position: { x: 7, y: 2, z: 7 }, color: '#808080' },
      { type: 'stairs', position: { x: 7, y: 3, z: 8 }, color: '#808080' },
      { type: 'railing', position: { x: 6, y: 1, z: 6 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 6, y: 2, z: 7 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 6, y: 3, z: 8 }, color: '#C0C0C0' },
      // Down escalator
      { type: 'stairs', position: { x: 10, y: 1, z: 8 }, color: '#808080', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'stairs', position: { x: 10, y: 2, z: 7 }, color: '#808080', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'stairs', position: { x: 10, y: 3, z: 6 }, color: '#808080', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'railing', position: { x: 11, y: 1, z: 8 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 11, y: 2, z: 7 }, color: '#C0C0C0' },
      { type: 'railing', position: { x: 11, y: 3, z: 6 }, color: '#C0C0C0' },

      // === SECOND FLOOR / MEZZANINE ===
      ...makeFloor(0, 4, 0, 6, 6, '#D8D8D8'),
      ...makeFloor(12, 4, 0, 6, 6, '#D8D8D8'),
      ...makeFloor(0, 4, 8, 18, 6, '#D8D8D8'),
      // Mezzanine railings
      ...makeRow(6, 4, 0, 6, 'Z', 'railing', '#C0C0C0'),
      ...makeRow(11, 4, 0, 6, 'Z', 'railing', '#C0C0C0'),
      ...makeRow(0, 4, 8, 6, 'X', 'railing', '#C0C0C0'),
      ...makeRow(12, 4, 8, 6, 'X', 'railing', '#C0C0C0'),

      // === FOOD COURT (Back area) ===
      ...makeFloor(0, 0, 8, 18, 5, '#C0A080'),
      // Food court tables
      { type: 'table', position: { x: 2, y: 1, z: 10 }, color: '#FFFFFF' },
      { type: 'chair', position: { x: 1, y: 1, z: 10 }, color: '#FF6347' },
      { type: 'chair', position: { x: 3, y: 1, z: 10 }, color: '#FF6347' },
      { type: 'table', position: { x: 5, y: 1, z: 10 }, color: '#FFFFFF' },
      { type: 'chair', position: { x: 4, y: 1, z: 10 }, color: '#4169E1' },
      { type: 'chair', position: { x: 6, y: 1, z: 10 }, color: '#4169E1' },
      { type: 'table', position: { x: 12, y: 1, z: 10 }, color: '#FFFFFF' },
      { type: 'chair', position: { x: 11, y: 1, z: 10 }, color: '#32CD32' },
      { type: 'chair', position: { x: 13, y: 1, z: 10 }, color: '#32CD32' },
      { type: 'table', position: { x: 15, y: 1, z: 10 }, color: '#FFFFFF' },
      { type: 'chair', position: { x: 14, y: 1, z: 10 }, color: '#FFD700' },
      { type: 'chair', position: { x: 16, y: 1, z: 10 }, color: '#FFD700' },
      // Food counter
      ...makeRow(1, 1, 12, 6, 'X', 'slab', '#808080'),
      ...makeRow(11, 1, 12, 6, 'X', 'slab', '#808080'),
      // Menu signs
      { type: 'sign', position: { x: 2, y: 2, z: 13 }, color: '#FF0000' },
      { type: 'sign', position: { x: 5, y: 2, z: 13 }, color: '#FFD700' },
      { type: 'sign', position: { x: 12, y: 2, z: 13 }, color: '#228B22' },
      { type: 'sign', position: { x: 15, y: 2, z: 13 }, color: '#FF69B4' },

      // === DIRECTORY KIOSK ===
      { type: 'pillar', position: { x: 8, y: 1, z: 1 }, color: '#404040' },
      { type: 'monitor', position: { x: 8, y: 2, z: 1 }, color: '#1E1E1E', emissive: { enabled: true, color: '#4169E1', intensity: 0.5, radius: 2 } },

      // === STRUCTURAL COLUMNS ===
      { type: 'column', position: { x: 4, y: 1, z: 3 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 4, y: 2, z: 3 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 4, y: 3, z: 3 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 13, y: 1, z: 3 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 13, y: 2, z: 3 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 13, y: 3, z: 3 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 4, y: 1, z: 10 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 4, y: 2, z: 10 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 4, y: 3, z: 10 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 13, y: 1, z: 10 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 13, y: 2, z: 10 }, color: '#C0C0C0' },
      { type: 'column', position: { x: 13, y: 3, z: 10 }, color: '#C0C0C0' },

      // === GLASS ATRIUM ROOF ===
      ...makeFloor(6, 7, 1, 6, 12, '#87CEEB'),
      // Roof frame
      ...makeRow(6, 7, 0, 6, 'X', 'iBeam', '#404040'),
      ...makeRow(6, 7, 13, 6, 'X', 'iBeam', '#404040'),
      ...makeRow(6, 7, 0, 14, 'Z', 'iBeam', '#404040'),
      ...makeRow(11, 7, 0, 14, 'Z', 'iBeam', '#404040'),
      // Solid roof over stores
      ...makeFloor(0, 7, 0, 6, 14, '#A0A0A0'),
      ...makeFloor(12, 7, 0, 6, 14, '#A0A0A0'),

      // === PLANTERS & SEATING ===
      { type: 'planter', position: { x: 3, y: 0, z: 3 }, color: '#8B4513' },
      { type: 'bush', position: { x: 3, y: 1, z: 3 }, color: '#228B22' },
      { type: 'planter', position: { x: 14, y: 0, z: 3 }, color: '#8B4513' },
      { type: 'bush', position: { x: 14, y: 1, z: 3 }, color: '#228B22' },
      { type: 'bench', position: { x: 5, y: 0, z: 5 }, color: '#A0522D' },
      { type: 'bench', position: { x: 12, y: 0, z: 5 }, color: '#A0522D' },
      // Trash bins
      { type: 'bin', position: { x: 6, y: 0, z: 1 }, color: '#2F2F2F' },
      { type: 'bin', position: { x: 11, y: 0, z: 1 }, color: '#2F2F2F' },
      { type: 'bin', position: { x: 8, y: 0, z: 9 }, color: '#2F2F2F' },

      // === LIGHTING ===
      // Light poles extending from columns (columns end at y:3)
      { type: 'pillar4', position: { x: 4, y: 4, z: 3 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 4, y: 5, z: 3 }, color: '#C0C0C0' },
      { type: 'lightFixture', position: { x: 4, y: 6, z: 3 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 1.0, radius: 5 } },
      { type: 'pillar4', position: { x: 13, y: 4, z: 3 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 13, y: 5, z: 3 }, color: '#C0C0C0' },
      { type: 'lightFixture', position: { x: 13, y: 6, z: 3 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 1.0, radius: 5 } },
      { type: 'pillar4', position: { x: 4, y: 4, z: 10 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 4, y: 5, z: 10 }, color: '#C0C0C0' },
      { type: 'lightFixture', position: { x: 4, y: 6, z: 10 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 1.0, radius: 5 } },
      { type: 'pillar4', position: { x: 13, y: 4, z: 10 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 13, y: 5, z: 10 }, color: '#C0C0C0' },
      { type: 'lightFixture', position: { x: 13, y: 6, z: 10 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 1.0, radius: 5 } },
    ]
  },

  trainStation: {
    name: 'Train Station',
    category: 'city',
    description: 'Grand railway station with platforms, canopy, clock tower, ticket hall, and period details',
    blocks: [
      // === TRACK BED & BALLAST ===
      ...makeFloor(0, -1, 3, 18, 4, '#4A4A4A'),  // Ballast
      // Rails (using beams)
      ...makeRow(0, 0, 3, 18, 'X', 'beamX', '#505050'),
      ...makeRow(0, 0, 4, 18, 'X', 'beamX', '#505050'),
      ...makeRow(0, 0, 5, 18, 'X', 'beamX', '#505050'),
      ...makeRow(0, 0, 6, 18, 'X', 'beamX', '#505050'),
      // Wooden sleepers/ties
      { type: 'beam2Z', position: { x: 1, y: 0, z: 3 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 3, y: 0, z: 3 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 5, y: 0, z: 3 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 7, y: 0, z: 3 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 9, y: 0, z: 3 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 11, y: 0, z: 3 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 13, y: 0, z: 3 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 15, y: 0, z: 3 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 1, y: 0, z: 5 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 3, y: 0, z: 5 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 5, y: 0, z: 5 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 7, y: 0, z: 5 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 9, y: 0, z: 5 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 11, y: 0, z: 5 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 13, y: 0, z: 5 }, color: '#654321' },
      { type: 'beam2Z', position: { x: 15, y: 0, z: 5 }, color: '#654321' },

      // === PLATFORM 1 (North) ===
      ...makeFloor(0, 0, 0, 18, 3, '#A0A0A0'),
      // Platform edge (yellow safety line)
      ...makeRow(0, 0, 2, 18, 'X', 'ledge', '#FFD700'),
      // Platform surface texture
      { type: 'grate', position: { x: 8, y: 0, z: 1 }, color: '#606060' },
      { type: 'grate', position: { x: 9, y: 0, z: 1 }, color: '#606060' },

      // === PLATFORM 2 (South) ===
      ...makeFloor(0, 0, 7, 18, 3, '#A0A0A0'),
      // Platform edge
      ...makeRow(0, 0, 7, 18, 'X', 'ledge', '#FFD700'),

      // === GRAND CANOPY STRUCTURE ===
      // Iron columns - Platform 1 side
      { type: 'column', position: { x: 2, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 2, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 2, y: 2, z: 1 }, color: '#2F4F4F' },
      { type: 'capital', position: { x: 2, y: 3, z: 1 }, color: '#3A5A5A' },
      { type: 'column', position: { x: 7, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 7, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 7, y: 2, z: 1 }, color: '#2F4F4F' },
      { type: 'capital', position: { x: 7, y: 3, z: 1 }, color: '#3A5A5A' },
      { type: 'column', position: { x: 12, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 12, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 12, y: 2, z: 1 }, color: '#2F4F4F' },
      { type: 'capital', position: { x: 12, y: 3, z: 1 }, color: '#3A5A5A' },
      // Iron columns - Platform 2 side
      { type: 'column', position: { x: 2, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 2, y: 1, z: 8 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 2, y: 2, z: 8 }, color: '#2F4F4F' },
      { type: 'capital', position: { x: 2, y: 3, z: 8 }, color: '#3A5A5A' },
      { type: 'column', position: { x: 7, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 7, y: 1, z: 8 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 7, y: 2, z: 8 }, color: '#2F4F4F' },
      { type: 'capital', position: { x: 7, y: 3, z: 8 }, color: '#3A5A5A' },
      { type: 'column', position: { x: 12, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 12, y: 1, z: 8 }, color: '#2F4F4F' },
      { type: 'column', position: { x: 12, y: 2, z: 8 }, color: '#2F4F4F' },
      { type: 'capital', position: { x: 12, y: 3, z: 8 }, color: '#3A5A5A' },

      // Main canopy roof with arched trusses
      ...makeFloor(1, 4, 0, 16, 10, '#2F4F4F'),
      // Arched trusses over tracks
      { type: 'archWide', position: { x: 2, y: 4, z: 4 }, color: '#3A5A5A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'archWide', position: { x: 7, y: 4, z: 4 }, color: '#3A5A5A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'archWide', position: { x: 12, y: 4, z: 4 }, color: '#3A5A5A', rotation: { x: 0, y: 90, z: 0 } },
      // Decorative ironwork beams
      { type: 'truss', position: { x: 3, y: 3, z: 4 }, color: '#2F4F4F' },
      { type: 'truss', position: { x: 8, y: 3, z: 4 }, color: '#2F4F4F' },
      { type: 'truss', position: { x: 13, y: 3, z: 4 }, color: '#2F4F4F' },

      // === STATION BUILDING (Main Hall) ===
      ...makeFloor(0, 0, 10, 8, 5, '#606060'),
      // Ground floor - ticket hall
      ...makeHollowFloor(0, 1, 10, 8, 5, '#DEB887'),
      ...makeHollowFloor(0, 2, 10, 8, 5, '#DEB887'),
      // First floor
      ...makeHollowFloor(0, 3, 10, 8, 5, '#C9B896'),
      // Roof
      ...makeFloor(0, 4, 10, 8, 5, '#8B4513'),
      // Roof ridge detail
      { type: 'wedge', position: { x: 2, y: 4, z: 11 }, color: '#704214' },
      { type: 'wedge', position: { x: 3, y: 4, z: 11 }, color: '#704214' },
      { type: 'wedge', position: { x: 4, y: 4, z: 11 }, color: '#704214' },
      { type: 'wedge', position: { x: 5, y: 4, z: 11 }, color: '#704214' },
      { type: 'wedge', position: { x: 2, y: 4, z: 13 }, color: '#704214', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'wedge', position: { x: 3, y: 4, z: 13 }, color: '#704214', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'wedge', position: { x: 4, y: 4, z: 13 }, color: '#704214', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'wedge', position: { x: 5, y: 4, z: 13 }, color: '#704214', rotation: { x: 0, y: 180, z: 0 } },
      // Main entrance
      { type: 'doorFrame', position: { x: 3, y: 1, z: 10 }, color: '#654321' },
      { type: 'doorFrame', position: { x: 4, y: 1, z: 10 }, color: '#654321' },
      { type: 'arch', position: { x: 3, y: 2, z: 10 }, color: '#DEB887' },
      { type: 'arch', position: { x: 4, y: 2, z: 10 }, color: '#DEB887' },
      // Windows
      { type: 'windowFrame', position: { x: 1, y: 2, z: 10 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 6, y: 2, z: 10 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 1, y: 3, z: 10 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 6, y: 3, z: 10 }, color: '#4682B4' },

      // === CLOCK TOWER ===
      { type: 'cube', position: { x: 3, y: 4, z: 12 }, color: '#8B4513' },
      { type: 'cube', position: { x: 4, y: 4, z: 12 }, color: '#8B4513' },
      { type: 'cube', position: { x: 3, y: 5, z: 12 }, color: '#704214' },
      { type: 'cube', position: { x: 4, y: 5, z: 12 }, color: '#704214' },
      // Clock face (using windowFrame)
      { type: 'windowFrame', position: { x: 3, y: 5, z: 11 }, color: '#F5F5DC' },
      { type: 'windowFrame', position: { x: 4, y: 5, z: 11 }, color: '#F5F5DC' },
      // Tower roof
      { type: 'pyramid', position: { x: 3, y: 6, z: 12 }, color: '#2F4F4F' },
      { type: 'finial', position: { x: 3, y: 7, z: 12 }, color: '#FFD700' },

      // === PLATFORM AMENITIES ===
      // Benches - Platform 1
      { type: 'bench', position: { x: 4, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'bench', position: { x: 9, y: 0, z: 0 }, color: '#8B4513' },
      { type: 'bench', position: { x: 14, y: 0, z: 0 }, color: '#8B4513' },
      // Benches - Platform 2
      { type: 'bench', position: { x: 4, y: 0, z: 9 }, color: '#8B4513' },
      { type: 'bench', position: { x: 9, y: 0, z: 9 }, color: '#8B4513' },
      { type: 'bench', position: { x: 14, y: 0, z: 9 }, color: '#8B4513' },

      // Platform lamps (Victorian style)
      { type: 'pillar', position: { x: 5, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 5, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'lightFixture', position: { x: 5, y: 2, z: 1 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.0, radius: 3 } },
      { type: 'pillar', position: { x: 10, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 10, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'lightFixture', position: { x: 10, y: 2, z: 1 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.0, radius: 3 } },
      { type: 'pillar', position: { x: 5, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 5, y: 1, z: 8 }, color: '#2F4F4F' },
      { type: 'lightFixture', position: { x: 5, y: 2, z: 8 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.0, radius: 3 } },
      { type: 'pillar', position: { x: 10, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'pillar', position: { x: 10, y: 1, z: 8 }, color: '#2F4F4F' },
      { type: 'lightFixture', position: { x: 10, y: 2, z: 8 }, color: '#FFD700', emissive: { enabled: true, color: '#FFFACD', intensity: 1.0, radius: 3 } },

      // Ticket machine / Vending
      { type: 'locker', position: { x: 1, y: 0, z: 0 }, color: '#2F4F4F' },
      { type: 'locker', position: { x: 16, y: 0, z: 9 }, color: '#2F4F4F' },

      // Trash bins
      { type: 'bin', position: { x: 6, y: 0, z: 0 }, color: '#404040' },
      { type: 'bin', position: { x: 11, y: 0, z: 9 }, color: '#404040' },

      // Platform signs (using sign block)
      { type: 'sign', position: { x: 3, y: 2, z: 1 }, color: '#000080' },
      { type: 'sign', position: { x: 3, y: 2, z: 8 }, color: '#000080' },

      // === SIGNAL LIGHTS ===
      { type: 'pillar', position: { x: 17, y: 0, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 17, y: 1, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 17, y: 2, z: 4 }, color: '#404040' },
      { type: 'bulb', position: { x: 17, y: 3, z: 4 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 1.5, radius: 2 } },

      // === LUGGAGE CART ===
      { type: 'crate', position: { x: 15, y: 0, z: 1 }, color: '#8B4513' },
      { type: 'crate', position: { x: 15, y: 1, z: 1 }, color: '#A0522D' },

      // === ENTRANCE STAIRS ===
      { type: 'stairs', position: { x: 3, y: 0, z: 9 }, color: '#808080', rotation: { x: 0, y: 180, z: 0 } },
      { type: 'stairs', position: { x: 4, y: 0, z: 9 }, color: '#808080', rotation: { x: 0, y: 180, z: 0 } },
    ]
  },

  // =====================
  // ENERGY
  // =====================
  solarArrayLarge: {
    name: 'Large Solar Array',
    category: 'energy',
    description: 'Industrial solar panel installation',
    blocks: [
      // Ground
      ...makeFloor(0, 0, 0, 12, 10, '#808080'),
      // Solar panel rows (angled using wedges)
      // Row 1
      { type: 'solarPanel', position: { x: 0, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 1, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 2, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 3, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 4, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 5, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 6, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 7, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 8, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 9, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 10, y: 0, z: 0 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 11, y: 0, z: 0 }, color: '#1a237e' },
      // Row 2
      { type: 'solarPanel', position: { x: 0, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 1, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 2, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 3, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 4, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 5, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 6, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 7, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 8, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 9, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 10, y: 0, z: 2 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 11, y: 0, z: 2 }, color: '#283593' },
      // Row 3
      { type: 'solarPanel', position: { x: 0, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 1, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 2, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 3, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 4, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 5, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 6, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 7, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 8, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 9, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 10, y: 0, z: 4 }, color: '#1a237e' },
      { type: 'solarPanel', position: { x: 11, y: 0, z: 4 }, color: '#1a237e' },
      // Row 4
      { type: 'solarPanel', position: { x: 0, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 1, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 2, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 3, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 4, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 5, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 6, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 7, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 8, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 9, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 10, y: 0, z: 6 }, color: '#283593' },
      { type: 'solarPanel', position: { x: 11, y: 0, z: 6 }, color: '#283593' },
      // Inverter station
      { type: 'cube', position: { x: 0, y: 0, z: 8 }, color: '#606060' },
      { type: 'cube', position: { x: 1, y: 0, z: 8 }, color: '#606060' },
      { type: 'cube', position: { x: 0, y: 1, z: 8 }, color: '#505050' },
      { type: 'cube', position: { x: 1, y: 1, z: 8 }, color: '#505050' },
      { type: 'vent', position: { x: 0, y: 2, z: 8 }, color: '#404040' },
      { type: 'vent', position: { x: 1, y: 2, z: 8 }, color: '#404040' },
      // Fence
      ...makeRow(0, 0, 9, 12, 'X', 'fence', '#808080'),
    ]
  },

  windTurbine: {
    name: 'Wind Turbine',
    category: 'energy',
    description: 'Modern wind turbine with detailed nacelle, blades, and electrical infrastructure',
    blocks: [
      // === CONCRETE FOUNDATION ===
      ...makeFloor(-1, 0, -1, 5, 5, '#808080'),
      // Foundation bolts (visible)
      { type: 'cylinder', position: { x: 0, y: 0, z: 0 }, color: '#606060' },
      { type: 'cylinder', position: { x: 2, y: 0, z: 0 }, color: '#606060' },
      { type: 'cylinder', position: { x: 0, y: 0, z: 2 }, color: '#606060' },
      { type: 'cylinder', position: { x: 2, y: 0, z: 2 }, color: '#606060' },

      // === TOWER - Tapered white sections ===
      // Base section (wider)
      { type: 'cylinder', position: { x: 1, y: 1, z: 1 }, color: '#E8E8E8' },
      { type: 'cylinder', position: { x: 1, y: 2, z: 1 }, color: '#E8E8E8' },
      { type: 'cylinder', position: { x: 1, y: 3, z: 1 }, color: '#E8E8E8' },
      // Middle section
      { type: 'cylinder', position: { x: 1, y: 4, z: 1 }, color: '#F0F0F0' },
      { type: 'cylinder', position: { x: 1, y: 5, z: 1 }, color: '#F0F0F0' },
      { type: 'cylinder', position: { x: 1, y: 6, z: 1 }, color: '#F0F0F0' },
      { type: 'cylinder', position: { x: 1, y: 7, z: 1 }, color: '#F0F0F0' },
      // Upper section
      { type: 'cylinder', position: { x: 1, y: 8, z: 1 }, color: '#F5F5F5' },
      { type: 'cylinder', position: { x: 1, y: 9, z: 1 }, color: '#F5F5F5' },
      { type: 'cylinder', position: { x: 1, y: 10, z: 1 }, color: '#F5F5F5' },
      { type: 'cylinder', position: { x: 1, y: 11, z: 1 }, color: '#F5F5F5' },

      // === NACELLE (Generator housing) ===
      { type: 'cube', position: { x: 1, y: 12, z: 1 }, color: '#E0E0E0' },
      { type: 'cube', position: { x: 1, y: 12, z: 0 }, color: '#E0E0E0' },
      { type: 'slab', position: { x: 1, y: 12, z: -1 }, color: '#D0D0D0' },
      // Nacelle dome/cowling
      { type: 'dome', position: { x: 1, y: 13, z: 0 }, color: '#E8E8E8' },

      // === ROTOR HUB ===
      { type: 'sphere', position: { x: 1, y: 12, z: -2 }, color: '#D0D0D0' },

      // === BLADES (3 blade design) ===
      // Blade 1 - pointing up-left
      { type: 'wedgeFlat', position: { x: 0, y: 13, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: -1, y: 14, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: -2, y: 15, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: -3, y: 16, z: -2 }, color: '#FFFFFF' },
      // Blade 2 - pointing up-right
      { type: 'wedgeFlat', position: { x: 2, y: 13, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: 3, y: 14, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: 4, y: 15, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: 5, y: 16, z: -2 }, color: '#FFFFFF' },
      // Blade 3 - pointing down
      { type: 'wedgeFlat', position: { x: 1, y: 11, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: 1, y: 10, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: 1, y: 9, z: -2 }, color: '#FFFFFF' },
      { type: 'wedgeFlat', position: { x: 1, y: 8, z: -2 }, color: '#FFFFFF' },

      // === SAFETY LIGHTING ===
      // Red aviation warning light on top
      { type: 'sphere', position: { x: 1, y: 13, z: 1 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 3, radius: 8 } },
      // Additional mid-tower warning light
      { type: 'sphere', position: { x: 1, y: 6, z: 0 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 1, radius: 3 } },

      // === ACCESS & ELECTRICAL ===
      // Access door at base
      { type: 'doorFrame', position: { x: 1, y: 1, z: -1 }, color: '#606060' },
      // Transformer/converter unit
      { type: 'transformer', position: { x: 3, y: 0, z: 1 }, color: '#556B2F' },
      // Cable conduits from base
      { type: 'conduitX', position: { x: 2, y: 0, z: 1 }, color: '#505050' },
      { type: 'conduitX', position: { x: 3, y: 0, z: 1 }, color: '#505050' },
      // Power box
      { type: 'powerBox', position: { x: 3, y: 0, z: 2 }, color: '#404040' },

      // === EXTERIOR ELEMENTS ===
      // Service ladder (internal access indicated)
      { type: 'ladder', position: { x: 0, y: 1, z: 1 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 0, y: 2, z: 1 }, color: '#FFD700' },
      // Grounding rod
      { type: 'pillar4', position: { x: -1, y: 0, z: -1 }, color: '#CD7F32' },
      // Wind measurement anemometer on nacelle
      { type: 'antenna', position: { x: 1, y: 13, z: 2 }, color: '#808080' },

      // === SURROUNDING AREA ===
      // Gravel access path
      { type: 'slab', position: { x: 1, y: 0, z: 3 }, color: '#A0A0A0' },
      { type: 'slab', position: { x: 1, y: 0, z: 4 }, color: '#909090' },
      // Safety fence posts
      { type: 'post', position: { x: -1, y: 0, z: 3 }, color: '#FFFF00' },
      { type: 'post', position: { x: 3, y: 0, z: 3 }, color: '#FFFF00' },
    ]
  },

  substationYard: {
    name: 'Electrical Substation',
    category: 'energy',
    description: 'High-voltage power substation with transformers, insulators, bus bars, and control building',
    blocks: [
      // === GRAVEL YARD ===
      ...makeFloor(0, 0, 0, 14, 10, '#A0A0A0'),

      // === MAIN POWER TRANSFORMERS (3 units) ===
      // Transformer 1 - with radiator fins
      { type: 'tank', position: { x: 2, y: 0, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 2, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 3, y: 0, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 3, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'vent', position: { x: 2, y: 2, z: 2 }, color: '#708090' },
      { type: 'vent', position: { x: 3, y: 2, z: 2 }, color: '#708090' },
      // Radiator fins
      { type: 'panel', position: { x: 1, y: 0, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 1, y: 1, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 4, y: 0, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 4, y: 1, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      // HV bushings (insulators)
      { type: 'pillar2', position: { x: 2, y: 2, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 2, y: 3, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 3, y: 2, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 3, y: 3, z: 2 }, color: '#E8DCC8' },

      // Transformer 2
      { type: 'tank', position: { x: 6, y: 0, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 6, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 7, y: 0, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 7, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'vent', position: { x: 6, y: 2, z: 2 }, color: '#708090' },
      { type: 'vent', position: { x: 7, y: 2, z: 2 }, color: '#708090' },
      { type: 'panel', position: { x: 5, y: 0, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 5, y: 1, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 8, y: 0, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 8, y: 1, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'pillar2', position: { x: 6, y: 2, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 6, y: 3, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 7, y: 2, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 7, y: 3, z: 2 }, color: '#E8DCC8' },

      // Transformer 3
      { type: 'tank', position: { x: 10, y: 0, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 10, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 11, y: 0, z: 2 }, color: '#556B2F' },
      { type: 'tank', position: { x: 11, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'vent', position: { x: 10, y: 2, z: 2 }, color: '#708090' },
      { type: 'vent', position: { x: 11, y: 2, z: 2 }, color: '#708090' },
      { type: 'panel', position: { x: 9, y: 0, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 9, y: 1, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 12, y: 0, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'panel', position: { x: 12, y: 1, z: 2 }, color: '#4A5A4A', rotation: { x: 0, y: 90, z: 0 } },
      { type: 'pillar2', position: { x: 10, y: 2, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 10, y: 3, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 11, y: 2, z: 2 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 11, y: 3, z: 2 }, color: '#E8DCC8' },

      // === BUS BAR STRUCTURE (Steel lattice) ===
      // Support towers
      { type: 'iBeam', position: { x: 2, y: 0, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 2, y: 1, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 2, y: 3, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 6, y: 0, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 6, y: 1, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 6, y: 2, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 6, y: 3, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 10, y: 0, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 10, y: 1, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 10, y: 2, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 10, y: 3, z: 5 }, color: '#708090' },

      // Cross arms with insulators
      { type: 'beamX', position: { x: 1, y: 4, z: 5 }, color: '#708090' },
      { type: 'beamX', position: { x: 2, y: 4, z: 5 }, color: '#708090' },
      { type: 'beamX', position: { x: 3, y: 4, z: 5 }, color: '#708090' },
      { type: 'beamX', position: { x: 5, y: 4, z: 5 }, color: '#708090' },
      { type: 'beamX', position: { x: 6, y: 4, z: 5 }, color: '#708090' },
      { type: 'beamX', position: { x: 7, y: 4, z: 5 }, color: '#708090' },
      { type: 'beamX', position: { x: 9, y: 4, z: 5 }, color: '#708090' },
      { type: 'beamX', position: { x: 10, y: 4, z: 5 }, color: '#708090' },
      { type: 'beamX', position: { x: 11, y: 4, z: 5 }, color: '#708090' },

      // String insulators (ceramic)
      { type: 'pillar2', position: { x: 2, y: 4, z: 5 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 6, y: 4, z: 5 }, color: '#E8DCC8' },
      { type: 'pillar2', position: { x: 10, y: 4, z: 5 }, color: '#E8DCC8' },

      // Bus bar conductors (horizontal)
      ...makeRow(2, 5, 5, 10, 'X', 'pipeX', '#C0C0C0'),

      // === CIRCUIT BREAKERS ===
      { type: 'transformer', position: { x: 2, y: 0, z: 4 }, color: '#4682B4' },
      { type: 'transformer', position: { x: 6, y: 0, z: 4 }, color: '#4682B4' },
      { type: 'transformer', position: { x: 10, y: 0, z: 4 }, color: '#4682B4' },

      // === DISCONNECT SWITCHES ===
      { type: 'switchBox', position: { x: 3, y: 0, z: 4 }, color: '#FF4500' },
      { type: 'switchBox', position: { x: 7, y: 0, z: 4 }, color: '#FF4500' },
      { type: 'switchBox', position: { x: 11, y: 0, z: 4 }, color: '#FF4500' },

      // === LIGHTNING ARRESTERS ===
      { type: 'pillar', position: { x: 1, y: 0, z: 3 }, color: '#4682B4' },
      { type: 'pillar', position: { x: 1, y: 1, z: 3 }, color: '#E8DCC8' },
      { type: 'pillar', position: { x: 5, y: 0, z: 3 }, color: '#4682B4' },
      { type: 'pillar', position: { x: 5, y: 1, z: 3 }, color: '#E8DCC8' },
      { type: 'pillar', position: { x: 9, y: 0, z: 3 }, color: '#4682B4' },
      { type: 'pillar', position: { x: 9, y: 1, z: 3 }, color: '#E8DCC8' },

      // === CONTROL BUILDING ===
      ...makeFloor(0, 0, 7, 5, 3, '#606060'),
      ...makeHollowFloor(0, 1, 7, 5, 3, '#D3D3D3'),
      ...makeHollowFloor(0, 2, 5, 5, 3, '#D3D3D3'),
      ...makeFloor(0, 3, 7, 5, 3, '#505050'),
      // Door
      { type: 'doorFrame', position: { x: 2, y: 1, z: 7 }, color: '#404040' },
      // Windows
      { type: 'windowFrame', position: { x: 0, y: 2, z: 7 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 4, y: 2, z: 7 }, color: '#4682B4' },
      // AC unit
      { type: 'acUnit', position: { x: 4, y: 1, z: 9 }, color: '#C0C0C0' },
      // Electrical panels inside (visible from window)
      { type: 'fuseBox', position: { x: 1, y: 1, z: 8 }, color: '#404040' },
      { type: 'fuseBox', position: { x: 3, y: 1, z: 8 }, color: '#404040' },

      // === INCOMING/OUTGOING POWER LINES ===
      // Tall transmission towers
      { type: 'iBeam', position: { x: 0, y: 0, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 0, y: 1, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 0, y: 2, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 0, y: 3, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 0, y: 4, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 0, y: 5, z: 5 }, color: '#708090' },
      { type: 'crossBeam', position: { x: 0, y: 6, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 13, y: 0, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 13, y: 1, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 13, y: 2, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 13, y: 3, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 13, y: 4, z: 5 }, color: '#708090' },
      { type: 'iBeam', position: { x: 13, y: 5, z: 5 }, color: '#708090' },
      { type: 'crossBeam', position: { x: 13, y: 6, z: 5 }, color: '#708090' },

      // === CABLE TRENCHES ===
      { type: 'channel', position: { x: 2, y: 0, z: 3 }, color: '#505050' },
      { type: 'channel', position: { x: 3, y: 0, z: 3 }, color: '#505050' },
      { type: 'channel', position: { x: 6, y: 0, z: 3 }, color: '#505050' },
      { type: 'channel', position: { x: 7, y: 0, z: 3 }, color: '#505050' },
      { type: 'channel', position: { x: 10, y: 0, z: 3 }, color: '#505050' },
      { type: 'channel', position: { x: 11, y: 0, z: 3 }, color: '#505050' },

      // === SECURITY FENCE (Chain-link with barbed wire) ===
      // North fence
      ...makeRow(0, 0, 0, 14, 'X', 'fence', '#808080'),
      ...makeRow(0, 1, 0, 14, 'X', 'railing', '#404040'),  // Barbed wire
      // South fence
      ...makeRow(0, 0, 9, 14, 'X', 'fence', '#808080'),
      ...makeRow(0, 1, 9, 14, 'X', 'railing', '#404040'),
      // East fence
      { type: 'fenceZ', position: { x: 0, y: 0, z: 1 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 2 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 3 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 4 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 5 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 6 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 7 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 8 }, color: '#808080' },
      { type: 'railingZ', position: { x: 0, y: 1, z: 1 }, color: '#404040' },
      { type: 'railingZ', position: { x: 0, y: 1, z: 3 }, color: '#404040' },
      { type: 'railingZ', position: { x: 0, y: 1, z: 5 }, color: '#404040' },
      { type: 'railingZ', position: { x: 0, y: 1, z: 7 }, color: '#404040' },
      // West fence
      { type: 'fenceZ', position: { x: 13, y: 0, z: 1 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 13, y: 0, z: 2 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 13, y: 0, z: 3 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 13, y: 0, z: 4 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 13, y: 0, z: 5 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 13, y: 0, z: 6 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 13, y: 0, z: 7 }, color: '#808080' },
      { type: 'fenceZ', position: { x: 13, y: 0, z: 8 }, color: '#808080' },
      { type: 'railingZ', position: { x: 13, y: 1, z: 2 }, color: '#404040' },
      { type: 'railingZ', position: { x: 13, y: 1, z: 4 }, color: '#404040' },
      { type: 'railingZ', position: { x: 13, y: 1, z: 6 }, color: '#404040' },
      { type: 'railingZ', position: { x: 13, y: 1, z: 8 }, color: '#404040' },

      // === WARNING SIGNS & SAFETY ===
      { type: 'sign', position: { x: 6, y: 1, z: 0 }, color: '#FFD700' },  // High Voltage
      { type: 'sign', position: { x: 7, y: 1, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 4, y: 0, z: 1 }, color: '#FF0000' },
      { type: 'barrier', position: { x: 8, y: 0, z: 1 }, color: '#FF0000' },
      // Ground rods
      { type: 'post', position: { x: 1, y: 0, z: 1 }, color: '#B87333' },
      { type: 'post', position: { x: 12, y: 0, z: 1 }, color: '#B87333' },
      { type: 'post', position: { x: 1, y: 0, z: 6 }, color: '#B87333' },
      { type: 'post', position: { x: 12, y: 0, z: 6 }, color: '#B87333' },

      // === YARD LIGHTING ===
      { type: 'pillar', position: { x: 4, y: 0, z: 6 }, color: '#505050' },
      { type: 'pillar', position: { x: 4, y: 1, z: 6 }, color: '#505050' },
      { type: 'pillar', position: { x: 4, y: 2, z: 6 }, color: '#505050' },
      { type: 'spotlight', position: { x: 4, y: 3, z: 6 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.5, radius: 5 } },
      { type: 'pillar', position: { x: 9, y: 0, z: 6 }, color: '#505050' },
      { type: 'pillar', position: { x: 9, y: 1, z: 6 }, color: '#505050' },
      { type: 'pillar', position: { x: 9, y: 2, z: 6 }, color: '#505050' },
      { type: 'spotlight', position: { x: 9, y: 3, z: 6 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.5, radius: 5 } },
    ]
  },

  coolingTowers: {
    name: 'Cooling Towers',
    category: 'energy',
    description: 'Industrial cooling tower complex with basins, pump house, and control building',
    blocks: [
      // === GROUND & FOUNDATION ===
      ...makeFloor(0, 0, 0, 16, 16, '#505050'),
      // Cooling basin / pond area (darker to indicate water)
      ...makeFloor(1, -1, 1, 5, 5, '#2F4F4F'),
      ...makeFloor(10, -1, 1, 5, 5, '#2F4F4F'),
      ...makeFloor(1, -1, 10, 5, 5, '#2F4F4F'),
      ...makeFloor(10, -1, 10, 5, 5, '#2F4F4F'),

      // === TOWER 1 (Front Left) ===
      { type: 'cylinder', position: { x: 3, y: 0, z: 3 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 3, y: 1, z: 3 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 3, y: 2, z: 3 }, color: '#B8B8B8' },
      { type: 'cylinder', position: { x: 3, y: 3, z: 3 }, color: '#B0B0B0' },
      { type: 'cylinder', position: { x: 3, y: 4, z: 3 }, color: '#A8A8A8' },
      { type: 'cylinder', position: { x: 3, y: 5, z: 3 }, color: '#A0A0A0' },
      { type: 'cylinder', position: { x: 3, y: 6, z: 3 }, color: '#989898' },
      { type: 'tube', position: { x: 3, y: 7, z: 3 }, color: '#909090' },
      // Steam effect at top
      { type: 'dome', position: { x: 3, y: 8, z: 3 }, color: '#E0E0E0', emissive: { enabled: true, color: '#FFFFFF', intensity: 0.3, radius: 2 } },

      // === TOWER 2 (Front Right) ===
      { type: 'cylinder', position: { x: 12, y: 0, z: 3 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 12, y: 1, z: 3 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 12, y: 2, z: 3 }, color: '#B8B8B8' },
      { type: 'cylinder', position: { x: 12, y: 3, z: 3 }, color: '#B0B0B0' },
      { type: 'cylinder', position: { x: 12, y: 4, z: 3 }, color: '#A8A8A8' },
      { type: 'cylinder', position: { x: 12, y: 5, z: 3 }, color: '#A0A0A0' },
      { type: 'cylinder', position: { x: 12, y: 6, z: 3 }, color: '#989898' },
      { type: 'tube', position: { x: 12, y: 7, z: 3 }, color: '#909090' },
      { type: 'dome', position: { x: 12, y: 8, z: 3 }, color: '#E0E0E0', emissive: { enabled: true, color: '#FFFFFF', intensity: 0.3, radius: 2 } },

      // === TOWER 3 (Back Left) ===
      { type: 'cylinder', position: { x: 3, y: 0, z: 12 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 3, y: 1, z: 12 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 3, y: 2, z: 12 }, color: '#B8B8B8' },
      { type: 'cylinder', position: { x: 3, y: 3, z: 12 }, color: '#B0B0B0' },
      { type: 'cylinder', position: { x: 3, y: 4, z: 12 }, color: '#A8A8A8' },
      { type: 'cylinder', position: { x: 3, y: 5, z: 12 }, color: '#A0A0A0' },
      { type: 'cylinder', position: { x: 3, y: 6, z: 12 }, color: '#989898' },
      { type: 'tube', position: { x: 3, y: 7, z: 12 }, color: '#909090' },
      { type: 'dome', position: { x: 3, y: 8, z: 12 }, color: '#E0E0E0', emissive: { enabled: true, color: '#FFFFFF', intensity: 0.3, radius: 2 } },

      // === TOWER 4 (Back Right) ===
      { type: 'cylinder', position: { x: 12, y: 0, z: 12 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 12, y: 1, z: 12 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 12, y: 2, z: 12 }, color: '#B8B8B8' },
      { type: 'cylinder', position: { x: 12, y: 3, z: 12 }, color: '#B0B0B0' },
      { type: 'cylinder', position: { x: 12, y: 4, z: 12 }, color: '#A8A8A8' },
      { type: 'cylinder', position: { x: 12, y: 5, z: 12 }, color: '#A0A0A0' },
      { type: 'cylinder', position: { x: 12, y: 6, z: 12 }, color: '#989898' },
      { type: 'tube', position: { x: 12, y: 7, z: 12 }, color: '#909090' },
      { type: 'dome', position: { x: 12, y: 8, z: 12 }, color: '#E0E0E0', emissive: { enabled: true, color: '#FFFFFF', intensity: 0.3, radius: 2 } },

      // === MAIN PIPE MANIFOLD (Center) ===
      // Pipe supports (pillars)
      { type: 'pillar2', position: { x: 5, y: 0, z: 3 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 7, y: 0, z: 3 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 10, y: 0, z: 3 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 5, y: 0, z: 12 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 7, y: 0, z: 12 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 10, y: 0, z: 12 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 7, y: 0, z: 7 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 8, y: 0, z: 8 }, color: '#4A4A4A' },
      // East-West pipes connecting towers
      ...makeRow(4, 1, 3, 8, 'X', 'pipeX', '#708090'),
      ...makeRow(4, 1, 12, 8, 'X', 'pipeX', '#708090'),
      // North-South pipes connecting rows
      ...makeRow(7, 1, 4, 8, 'Z', 'pipeZ', '#708090'),
      ...makeRow(8, 1, 4, 8, 'Z', 'pipeZ', '#708090'),
      // Pipe junctions
      { type: 'pipeCross', position: { x: 7, y: 1, z: 3 }, color: '#708090' },
      { type: 'pipeCross', position: { x: 8, y: 1, z: 3 }, color: '#708090' },
      { type: 'pipeCross', position: { x: 7, y: 1, z: 12 }, color: '#708090' },
      { type: 'pipeCross', position: { x: 8, y: 1, z: 12 }, color: '#708090' },
      // Main valves (red)
      { type: 'valve', position: { x: 5, y: 1, z: 3 }, color: '#B22222' },
      { type: 'valve', position: { x: 10, y: 1, z: 3 }, color: '#B22222' },
      { type: 'valve', position: { x: 5, y: 1, z: 12 }, color: '#B22222' },
      { type: 'valve', position: { x: 10, y: 1, z: 12 }, color: '#B22222' },
      // Central valve station
      { type: 'valve', position: { x: 7, y: 1, z: 7 }, color: '#FFD700' },
      { type: 'valve', position: { x: 8, y: 1, z: 8 }, color: '#FFD700' },

      // === PUMP HOUSE (East side) ===
      ...makeFloor(14, 0, 6, 3, 4, '#606060'),
      ...makeWallZ(14, 1, 6, 4, 2, '#708090'),
      ...makeWallZ(16, 1, 6, 4, 2, '#708090'),
      ...makeWallX(14, 1, 6, 3, 2, '#708090'),
      ...makeWallX(14, 1, 9, 3, 2, '#708090'),
      ...makeFloor(14, 3, 6, 3, 4, '#606060'),
      // Pump equipment
      { type: 'tank', position: { x: 15, y: 1, z: 7 }, color: '#4682B4' },
      { type: 'tank', position: { x: 15, y: 2, z: 7 }, color: '#4682B4' },
      { type: 'tank', position: { x: 15, y: 1, z: 8 }, color: '#4682B4' },
      { type: 'tank', position: { x: 15, y: 2, z: 8 }, color: '#4682B4' },
      // Pipes to pump house
      ...makeRow(12, 1, 7, 3, 'X', 'pipeX', '#708090'),
      { type: 'pipeElbowXZ', position: { x: 12, y: 1, z: 7 }, color: '#708090' },

      // === CONTROL BUILDING (West side) ===
      ...makeFloor(-3, 0, 6, 4, 5, '#505050'),
      ...makeWallZ(-3, 1, 6, 5, 3, '#808080'),
      ...makeWallZ(0, 1, 6, 5, 3, '#808080'),
      ...makeWallX(-3, 1, 6, 4, 3, '#808080'),
      ...makeWallX(-3, 1, 10, 4, 3, '#808080'),
      ...makeFloor(-3, 4, 6, 4, 5, '#606060'),
      // Door
      { type: 'doorFrame', position: { x: -1, y: 1, z: 6 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: -1, y: 2, z: 6 }, color: '#4682B4' },
      // Windows
      { type: 'windowFrame', position: { x: -2, y: 2, z: 6 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: -3, y: 2, z: 8 }, color: '#87CEEB' },
      // Equipment inside
      { type: 'desk', position: { x: -2, y: 1, z: 8 }, color: '#8B4513' },
      { type: 'monitor', position: { x: -2, y: 2, z: 8 }, color: '#1E1E1E', emissive: { enabled: true, color: '#00FF00', intensity: 0.5, radius: 2 } },
      { type: 'switchBox', position: { x: -1, y: 2, z: 10 }, color: '#808080' },
      // AC unit on roof
      { type: 'acUnit', position: { x: -2, y: 4, z: 8 }, color: '#C0C0C0' },

      // === CATWALKS ===
      // Catwalk supports (posts at y:0 and y:1)
      { type: 'post', position: { x: 1, y: 0, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 1, y: 1, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 4, y: 0, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 4, y: 1, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 6, y: 0, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 6, y: 1, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 9, y: 0, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 9, y: 1, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 12, y: 0, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 12, y: 1, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 14, y: 0, z: 0 }, color: '#505050' },
      { type: 'post', position: { x: 14, y: 1, z: 0 }, color: '#505050' },
      // Side catwalk supports
      { type: 'post', position: { x: 0, y: 0, z: 1 }, color: '#505050' },
      { type: 'post', position: { x: 0, y: 1, z: 1 }, color: '#505050' },
      { type: 'post', position: { x: 0, y: 0, z: 3 }, color: '#505050' },
      { type: 'post', position: { x: 0, y: 1, z: 3 }, color: '#505050' },
      { type: 'post', position: { x: 0, y: 0, z: 5 }, color: '#505050' },
      { type: 'post', position: { x: 0, y: 1, z: 5 }, color: '#505050' },
      { type: 'post', position: { x: 15, y: 0, z: 1 }, color: '#505050' },
      { type: 'post', position: { x: 15, y: 1, z: 1 }, color: '#505050' },
      { type: 'post', position: { x: 15, y: 0, z: 3 }, color: '#505050' },
      { type: 'post', position: { x: 15, y: 1, z: 3 }, color: '#505050' },
      { type: 'post', position: { x: 15, y: 0, z: 5 }, color: '#505050' },
      { type: 'post', position: { x: 15, y: 1, z: 5 }, color: '#505050' },
      // Catwalk around towers
      ...makeRow(1, 2, 0, 6, 'X', 'catwalk', '#404040'),
      ...makeRow(9, 2, 0, 6, 'X', 'catwalk', '#404040'),
      ...makeRow(0, 2, 1, 5, 'Z', 'catwalk', '#404040'),
      ...makeRow(15, 2, 1, 5, 'Z', 'catwalk', '#404040'),
      // Catwalk railings
      ...makeRow(1, 2, 0, 6, 'X', 'railing', '#606060'),
      ...makeRow(9, 2, 0, 6, 'X', 'railing', '#606060'),
      // Access ladder to tower 1
      { type: 'ladder', position: { x: 2, y: 0, z: 3 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 2, y: 1, z: 3 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 2, y: 2, z: 3 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 2, y: 3, z: 3 }, color: '#FFD700' },

      // === ELECTRICAL EQUIPMENT ===
      // Transformer station
      { type: 'transformer', position: { x: 0, y: 0, z: 0 }, color: '#505050' },
      { type: 'powerBox', position: { x: 0, y: 1, z: 0 }, color: '#404040' },
      // Cable conduits
      ...makeRow(1, 0, 0, 7, 'X', 'conduitX', '#404040'),
      { type: 'conduitElbow', position: { x: 7, y: 0, z: 0 }, color: '#404040' },
      ...makeRow(7, 0, 1, 5, 'Z', 'conduitZ', '#404040'),

      // === PERIMETER FENCE ===
      ...makeRow(-4, 0, 5, 1, 'Z', 'fence', '#808080'),
      ...makeRow(-4, 0, 11, 5, 'Z', 'fence', '#808080'),
      ...makeRow(-4, 0, 16, 21, 'X', 'fence', '#808080'),
      ...makeRow(16, 0, 0, 16, 'Z', 'fence', '#808080'),
      ...makeRow(0, 0, -1, 16, 'X', 'fence', '#808080'),
      // Gate
      { type: 'barrier', position: { x: 7, y: 0, z: -1 }, color: '#FF0000' },
      { type: 'barrier', position: { x: 8, y: 0, z: -1 }, color: '#FF0000' },

      // === WARNING SIGNS & SAFETY ===
      { type: 'sign', position: { x: 7, y: 1, z: -1 }, color: '#FFD700' },
      { type: 'sign', position: { x: 15, y: 1, z: 6 }, color: '#FFD700' },

      // === LIGHTING ===
      // Tower warning lights (on top of tower domes at y:8)
      { type: 'sphere', position: { x: 3, y: 9, z: 3 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2.0, radius: 3 } },
      { type: 'sphere', position: { x: 12, y: 9, z: 3 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2.0, radius: 3 } },
      { type: 'sphere', position: { x: 3, y: 9, z: 12 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2.0, radius: 3 } },
      { type: 'sphere', position: { x: 12, y: 9, z: 12 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2.0, radius: 3 } },
      // Ground lights with support pole
      { type: 'post', position: { x: 7, y: 0, z: 7 }, color: '#404040' },
      { type: 'post', position: { x: 7, y: 1, z: 7 }, color: '#404040' },
      { type: 'post', position: { x: 7, y: 2, z: 7 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 7, y: 3, z: 7 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 1.0, radius: 5 } },
    ]
  },

  // Additional Industrial
  powerPlant: {
    name: 'Power Plant',
    category: 'industrial',
    description: 'Complete power generation facility with boiler house, turbine hall, control room, and transformer yard',
    blocks: [
      // === MAIN FOUNDATION ===
      ...makeFloor(0, 0, 0, 20, 16, '#505050'),

      // === BOILER HOUSE (Left section) ===
      ...makeFloor(0, 0, 4, 8, 8, '#404040'),
      ...makeWallX(0, 1, 4, 8, 6, '#606060'),
      ...makeWallX(0, 1, 11, 8, 6, '#606060'),
      ...makeWallZ(0, 1, 5, 6, 6, '#606060'),
      ...makeWallZ(7, 1, 5, 6, 6, '#606060'),
      ...makeFloor(0, 7, 4, 8, 8, '#505050'),
      // Boiler units
      { type: 'tank', position: { x: 2, y: 1, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 2, y: 2, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 2, y: 3, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 2, y: 4, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 2, y: 5, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 5, y: 1, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 5, y: 2, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 5, y: 3, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 5, y: 4, z: 6 }, color: '#8B0000' },
      { type: 'tank', position: { x: 5, y: 5, z: 6 }, color: '#8B0000' },
      // Smokestacks on boiler house
      { type: 'cylinder', position: { x: 2, y: 7, z: 6 }, color: '#A0522D' },
      { type: 'cylinder', position: { x: 2, y: 8, z: 6 }, color: '#A0522D' },
      { type: 'cylinder', position: { x: 2, y: 9, z: 6 }, color: '#8B4513' },
      { type: 'cylinder', position: { x: 2, y: 10, z: 6 }, color: '#8B4513' },
      { type: 'cylinder', position: { x: 2, y: 11, z: 6 }, color: '#704214' },
      // Stack emission glow
      { type: 'dome', position: { x: 2, y: 12, z: 6 }, color: '#808080', emissive: { enabled: true, color: '#AAAAAA', intensity: 0.4, radius: 2 } },
      { type: 'cylinder', position: { x: 5, y: 7, z: 6 }, color: '#A0522D' },
      { type: 'cylinder', position: { x: 5, y: 8, z: 6 }, color: '#A0522D' },
      { type: 'cylinder', position: { x: 5, y: 9, z: 6 }, color: '#8B4513' },
      { type: 'cylinder', position: { x: 5, y: 10, z: 6 }, color: '#8B4513' },
      { type: 'cylinder', position: { x: 5, y: 11, z: 6 }, color: '#704214' },
      { type: 'dome', position: { x: 5, y: 12, z: 6 }, color: '#808080', emissive: { enabled: true, color: '#AAAAAA', intensity: 0.4, radius: 2 } },
      // Boiler pipes
      ...makeRow(3, 3, 6, 2, 'X', 'pipeX', '#708090'),
      { type: 'valve', position: { x: 3, y: 3, z: 6 }, color: '#B22222' },
      { type: 'valve', position: { x: 4, y: 3, z: 6 }, color: '#B22222' },
      // Steam pipes going to turbine
      ...makeRow(2, 4, 7, 4, 'Z', 'pipeZ', '#C0C0C0'),
      ...makeRow(5, 4, 7, 4, 'Z', 'pipeZ', '#C0C0C0'),

      // === TURBINE HALL (Center section) ===
      ...makeFloor(8, 0, 4, 8, 8, '#454545'),
      ...makeWallX(8, 1, 4, 8, 5, '#707070'),
      ...makeWallX(8, 1, 11, 8, 5, '#707070'),
      ...makeWallZ(8, 1, 5, 6, 5, '#707070'),
      ...makeWallZ(15, 1, 5, 6, 5, '#707070'),
      ...makeFloor(8, 6, 4, 8, 8, '#505050'),
      // Turbine generators
      { type: 'cylinder', position: { x: 10, y: 1, z: 6 }, color: '#4682B4', rotation: { x: 0, y: 0, z: 90 } },
      { type: 'cylinder', position: { x: 10, y: 1, z: 7 }, color: '#4682B4', rotation: { x: 0, y: 0, z: 90 } },
      { type: 'cylinder', position: { x: 10, y: 1, z: 8 }, color: '#4682B4', rotation: { x: 0, y: 0, z: 90 } },
      { type: 'cylinder', position: { x: 10, y: 2, z: 7 }, color: '#4169E1' },
      { type: 'cylinder', position: { x: 13, y: 1, z: 6 }, color: '#4682B4', rotation: { x: 0, y: 0, z: 90 } },
      { type: 'cylinder', position: { x: 13, y: 1, z: 7 }, color: '#4682B4', rotation: { x: 0, y: 0, z: 90 } },
      { type: 'cylinder', position: { x: 13, y: 1, z: 8 }, color: '#4682B4', rotation: { x: 0, y: 0, z: 90 } },
      { type: 'cylinder', position: { x: 13, y: 2, z: 7 }, color: '#4169E1' },
      // Generator housings
      { type: 'cube', position: { x: 11, y: 1, z: 7 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 11, y: 2, z: 7 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 14, y: 1, z: 7 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 14, y: 2, z: 7 }, color: '#2F4F4F' },
      // Turbine hall crane
      { type: 'iBeam', position: { x: 9, y: 5, z: 5 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 10, y: 5, z: 5 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 11, y: 5, z: 5 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 12, y: 5, z: 5 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 13, y: 5, z: 5 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 14, y: 5, z: 5 }, color: '#FFD700' },

      // === CONTROL ROOM (Adjacent to turbine hall) ===
      ...makeFloor(16, 0, 4, 5, 6, '#505050'),
      ...makeWallZ(16, 1, 4, 6, 3, '#708090'),
      ...makeWallZ(20, 1, 4, 6, 3, '#708090'),
      ...makeWallX(16, 1, 4, 5, 3, '#708090'),
      ...makeWallX(16, 1, 9, 5, 3, '#708090'),
      ...makeFloor(16, 4, 4, 5, 6, '#505050'),
      // Control room door
      { type: 'doorFrame', position: { x: 16, y: 1, z: 6 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 16, y: 2, z: 6 }, color: '#4682B4' },
      // Windows overlooking turbine hall
      { type: 'windowFrame', position: { x: 16, y: 2, z: 5 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 16, y: 2, z: 7 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 16, y: 2, z: 8 }, color: '#87CEEB' },
      // Control panels
      { type: 'switchBox', position: { x: 18, y: 1, z: 5 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 18, y: 2, z: 5 }, color: '#1E1E1E', emissive: { enabled: true, color: '#00FF00', intensity: 0.5, radius: 2 } },
      { type: 'switchBox', position: { x: 19, y: 1, z: 5 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 19, y: 2, z: 5 }, color: '#1E1E1E', emissive: { enabled: true, color: '#00BFFF', intensity: 0.5, radius: 2 } },
      { type: 'desk', position: { x: 17, y: 1, z: 7 }, color: '#4A4A4A' },
      { type: 'chair', position: { x: 17, y: 1, z: 6 }, color: '#2F2F2F' },
      // AC unit on roof
      { type: 'acUnit', position: { x: 18, y: 4, z: 7 }, color: '#C0C0C0' },

      // === COAL STORAGE & HANDLING ===
      ...makeFloor(0, 0, 12, 8, 4, '#3A3A3A'),
      // Coal pile (dark cubes)
      { type: 'cube', position: { x: 1, y: 0, z: 13 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 2, y: 0, z: 13 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 3, y: 0, z: 13 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 2, y: 0, z: 14 }, color: '#1A1A1A' },
      { type: 'wedge', position: { x: 1, y: 1, z: 13 }, color: '#1A1A1A' },
      { type: 'wedge', position: { x: 2, y: 1, z: 13 }, color: '#1A1A1A' },
      // Conveyor system
      { type: 'conveyor', position: { x: 4, y: 1, z: 13 }, color: '#505050' },
      { type: 'conveyor', position: { x: 5, y: 1, z: 13 }, color: '#505050' },
      { type: 'conveyor', position: { x: 6, y: 2, z: 13 }, color: '#505050' },
      { type: 'conveyor', position: { x: 6, y: 2, z: 12 }, color: '#505050' },
      // Hopper
      { type: 'hopper', position: { x: 6, y: 3, z: 12 }, color: '#696969' },

      // === TRANSFORMER YARD (Right side) ===
      ...makeFloor(16, 0, 10, 6, 6, '#606060'),
      // Main transformers
      { type: 'transformer', position: { x: 17, y: 0, z: 11 }, color: '#505050' },
      { type: 'transformer', position: { x: 17, y: 1, z: 11 }, color: '#505050' },
      { type: 'transformer', position: { x: 19, y: 0, z: 11 }, color: '#505050' },
      { type: 'transformer', position: { x: 19, y: 1, z: 11 }, color: '#505050' },
      // HV bushings
      { type: 'pillar4', position: { x: 17, y: 2, z: 11 }, color: '#8B4513' },
      { type: 'pillar4', position: { x: 19, y: 2, z: 11 }, color: '#8B4513' },
      // Bus bars (using I-beams)
      { type: 'iBeam', position: { x: 17, y: 3, z: 11 }, color: '#C0C0C0' },
      { type: 'iBeam', position: { x: 18, y: 3, z: 11 }, color: '#C0C0C0' },
      { type: 'iBeam', position: { x: 19, y: 3, z: 11 }, color: '#C0C0C0' },
      // Circuit breakers
      { type: 'switchBox', position: { x: 17, y: 0, z: 13 }, color: '#808080' },
      { type: 'switchBox', position: { x: 19, y: 0, z: 13 }, color: '#808080' },
      // HV power lines out (using cables)
      { type: 'cableX', position: { x: 20, y: 3, z: 11 }, color: '#1E1E1E' },
      { type: 'cableX', position: { x: 21, y: 3, z: 11 }, color: '#1E1E1E' },
      // Warning signs
      { type: 'sign', position: { x: 16, y: 1, z: 10 }, color: '#FFD700' },
      // Transformer yard fence
      ...makeRow(16, 0, 15, 6, 'X', 'fence', '#808080'),
      ...makeRow(21, 0, 10, 5, 'Z', 'fence', '#808080'),

      // === COOLING WATER SYSTEM ===
      // Cooling pond (dark blue floor)
      ...makeFloor(8, -1, 12, 6, 4, '#2F4F4F'),
      // Pump house
      { type: 'cube', position: { x: 10, y: 0, z: 13 }, color: '#708090' },
      { type: 'cube', position: { x: 11, y: 0, z: 13 }, color: '#708090' },
      { type: 'cube', position: { x: 10, y: 1, z: 13 }, color: '#708090' },
      { type: 'cube', position: { x: 11, y: 1, z: 13 }, color: '#708090' },
      // Cooling pipes
      ...makeRow(8, 1, 14, 4, 'X', 'pipeX', '#708090'),
      { type: 'valve', position: { x: 9, y: 1, z: 14 }, color: '#B22222' },

      // === PERIMETER & SECURITY ===
      ...makeRow(0, 0, 0, 22, 'X', 'fence', '#808080'),
      ...makeRow(0, 0, 0, 16, 'Z', 'fence', '#808080'),
      ...makeRow(0, 0, 16, 16, 'X', 'fence', '#808080'),
      // Main gate
      { type: 'barrier', position: { x: 10, y: 0, z: 0 }, color: '#FF0000' },
      { type: 'barrier', position: { x: 11, y: 0, z: 0 }, color: '#FF0000' },
      // Guard booth
      { type: 'cube', position: { x: 9, y: 0, z: 1 }, color: '#808080' },
      { type: 'cube', position: { x: 9, y: 1, z: 1 }, color: '#808080' },
      { type: 'windowFrame', position: { x: 9, y: 1, z: 1 }, color: '#87CEEB' },

      // === LIGHTING ===
      // Stack warning lights
      { type: 'sphere', position: { x: 2, y: 13, z: 6 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2.0, radius: 3 } },
      { type: 'sphere', position: { x: 5, y: 13, z: 6 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2.0, radius: 3 } },
      // Yard lights with poles
      { type: 'pillar4', position: { x: 4, y: 0, z: 2 }, color: '#404040' },
      { type: 'pillar4', position: { x: 4, y: 1, z: 2 }, color: '#404040' },
      { type: 'pillar4', position: { x: 4, y: 2, z: 2 }, color: '#404040' },
      { type: 'pillar4', position: { x: 4, y: 3, z: 2 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 4, y: 4, z: 2 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 1.0, radius: 5 } },
      { type: 'pillar4', position: { x: 12, y: 0, z: 2 }, color: '#404040' },
      { type: 'pillar4', position: { x: 12, y: 1, z: 2 }, color: '#404040' },
      { type: 'pillar4', position: { x: 12, y: 2, z: 2 }, color: '#404040' },
      { type: 'pillar4', position: { x: 12, y: 3, z: 2 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 12, y: 4, z: 2 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 1.0, radius: 5 } },
      { type: 'pillar4', position: { x: 18, y: 0, z: 12 }, color: '#404040' },
      { type: 'pillar4', position: { x: 18, y: 1, z: 12 }, color: '#404040' },
      { type: 'pillar4', position: { x: 18, y: 2, z: 12 }, color: '#404040' },
      { type: 'pillar4', position: { x: 18, y: 3, z: 12 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 18, y: 4, z: 12 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 1.0, radius: 5 } },
    ]
  },

  warehouseDistrict: {
    name: 'Warehouse District',
    category: 'industrial',
    description: 'Multiple warehouses with loading docks',
    blocks: [
      // Ground/roads
      ...makeFloor(0, 0, 0, 15, 12, '#3A3A3A'),
      // Warehouse 1
      ...makeFloor(0, 0, 0, 5, 4, '#708090'),
      ...makeWallX(0, 1, 0, 5, 2, '#808080'),
      ...makeWallX(0, 1, 3, 5, 2, '#808080'),
      ...makeWallZ(0, 1, 1, 2, 2, '#808080'),
      ...makeWallZ(4, 1, 1, 2, 2, '#808080'),
      ...makeFloor(0, 3, 0, 5, 4, '#606060'),
      { type: 'doorFrame', position: { x: 2, y: 1, z: 0 }, color: '#FFD700' },
      // Warehouse 2
      ...makeFloor(7, 0, 0, 5, 4, '#708090'),
      ...makeWallX(7, 1, 0, 5, 2, '#909090'),
      ...makeWallX(7, 1, 3, 5, 2, '#909090'),
      ...makeWallZ(7, 1, 1, 2, 2, '#909090'),
      ...makeWallZ(11, 1, 1, 2, 2, '#909090'),
      ...makeFloor(7, 3, 0, 5, 4, '#707070'),
      { type: 'doorFrame', position: { x: 9, y: 1, z: 0 }, color: '#FFD700' },
      // Warehouse 3 (larger)
      ...makeFloor(0, 0, 6, 7, 5, '#708090'),
      ...makeWallX(0, 1, 6, 7, 3, '#808080'),
      ...makeWallX(0, 1, 10, 7, 3, '#808080'),
      ...makeWallZ(0, 1, 7, 3, 3, '#808080'),
      ...makeWallZ(6, 1, 7, 3, 3, '#808080'),
      ...makeFloor(0, 4, 6, 7, 5, '#606060'),
      { type: 'doorFrame', position: { x: 2, y: 1, z: 6 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 3, y: 1, z: 6 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 4, y: 1, z: 6 }, color: '#FFD700' },
      // Loading docks
      { type: 'slab', position: { x: 2, y: 0, z: 5 }, color: '#505050' },
      { type: 'slab', position: { x: 3, y: 0, z: 5 }, color: '#505050' },
      { type: 'slab', position: { x: 4, y: 0, z: 5 }, color: '#505050' },
      // Forklift area
      { type: 'crate', position: { x: 9, y: 0, z: 6 }, color: '#8B4513' },
      { type: 'crate', position: { x: 10, y: 0, z: 6 }, color: '#A0522D' },
      { type: 'crate', position: { x: 9, y: 1, z: 6 }, color: '#CD853F' },
      { type: 'barrel', position: { x: 12, y: 0, z: 6 }, color: '#2F4F4F' },
      { type: 'barrel', position: { x: 13, y: 0, z: 6 }, color: '#006400' },
      // Street lights
      { type: 'pillar2', position: { x: 5, y: 0, z: 4 }, color: '#2F2F2F' },
      { type: 'pillar2', position: { x: 5, y: 1, z: 4 }, color: '#2F2F2F' },
      { type: 'pillar2', position: { x: 5, y: 2, z: 4 }, color: '#2F2F2F' },
      { type: 'sphere', position: { x: 5, y: 3, z: 4 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFE0', intensity: 2, radius: 5 } },
    ]
  },

  // Modern additions
  gasStation: {
    name: 'Gas Station',
    category: 'modern',
    description: 'Modern fuel station with pumps, convenience store, car wash, and detailed infrastructure',
    blocks: [
      // === ASPHALT LOT ===
      ...makeFloor(0, 0, 0, 12, 10, '#2F2F2F'),
      // Lane markings (yellow)
      { type: 'slab', position: { x: 0, y: 0, z: 4 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 1, y: 0, z: 4 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: 2, y: 0, z: 4 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 3, y: 0, z: 4 }, color: '#2F2F2F' },
      { type: 'slab', position: { x: 4, y: 0, z: 4 }, color: '#FFFF00' },

      // === FUEL PUMP ISLANDS ===
      // Island 1
      { type: 'slab', position: { x: 2, y: 0, z: 2 }, color: '#808080' },
      { type: 'slab', position: { x: 3, y: 0, z: 2 }, color: '#808080' },
      { type: 'pillar2', position: { x: 2, y: 0, z: 2 }, color: '#FF0000' },
      { type: 'pillar2', position: { x: 2, y: 1, z: 2 }, color: '#C0C0C0' },
      { type: 'pillar2', position: { x: 3, y: 0, z: 2 }, color: '#FF0000' },
      { type: 'pillar2', position: { x: 3, y: 1, z: 2 }, color: '#C0C0C0' },
      // Island 2
      { type: 'slab', position: { x: 2, y: 0, z: 6 }, color: '#808080' },
      { type: 'slab', position: { x: 3, y: 0, z: 6 }, color: '#808080' },
      { type: 'pillar2', position: { x: 2, y: 0, z: 6 }, color: '#FF0000' },
      { type: 'pillar2', position: { x: 2, y: 1, z: 6 }, color: '#C0C0C0' },
      { type: 'pillar2', position: { x: 3, y: 0, z: 6 }, color: '#FF0000' },
      { type: 'pillar2', position: { x: 3, y: 1, z: 6 }, color: '#C0C0C0' },
      // Bollards protecting pumps
      { type: 'bollard', position: { x: 1, y: 0, z: 2 }, color: '#FFFF00' },
      { type: 'bollard', position: { x: 4, y: 0, z: 2 }, color: '#FFFF00' },
      { type: 'bollard', position: { x: 1, y: 0, z: 6 }, color: '#FFFF00' },
      { type: 'bollard', position: { x: 4, y: 0, z: 6 }, color: '#FFFF00' },

      // === CANOPY STRUCTURE ===
      // Steel support columns
      { type: 'pillar', position: { x: 0, y: 0, z: 1 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 0, y: 1, z: 1 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 0, y: 2, z: 1 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 5, y: 0, z: 1 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 5, y: 1, z: 1 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 5, y: 2, z: 1 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 0, y: 0, z: 7 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 0, y: 1, z: 7 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 0, y: 2, z: 7 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 5, y: 0, z: 7 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 5, y: 1, z: 7 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: 5, y: 2, z: 7 }, color: '#E0E0E0' },
      // Canopy roof with brand color stripe
      ...makeFloor(0, 3, 0, 6, 9, '#F0F0F0'),
      { type: 'slab', position: { x: 0, y: 3, z: 4 }, color: '#FF0000' },
      { type: 'slab', position: { x: 1, y: 3, z: 4 }, color: '#FF0000' },
      { type: 'slab', position: { x: 2, y: 3, z: 4 }, color: '#FF0000' },
      { type: 'slab', position: { x: 3, y: 3, z: 4 }, color: '#FF0000' },
      { type: 'slab', position: { x: 4, y: 3, z: 4 }, color: '#FF0000' },
      { type: 'slab', position: { x: 5, y: 3, z: 4 }, color: '#FF0000' },
      // Recessed lights under canopy
      { type: 'lightFixture', position: { x: 1, y: 3, z: 2 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFFF', intensity: 3, radius: 5 } },
      { type: 'lightFixture', position: { x: 4, y: 3, z: 2 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFFF', intensity: 3, radius: 5 } },
      { type: 'lightFixture', position: { x: 1, y: 3, z: 6 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFFF', intensity: 3, radius: 5 } },
      { type: 'lightFixture', position: { x: 4, y: 3, z: 6 }, color: '#FFFACD', emissive: { enabled: true, color: '#FFFFFF', intensity: 3, radius: 5 } },

      // === CONVENIENCE STORE ===
      // Foundation
      ...makeFloor(7, 0, 1, 5, 7, '#505050'),
      // Walls
      ...makeHollowFloor(7, 1, 1, 5, 7, '#DEB887'),
      ...makeHollowFloor(7, 2, 1, 5, 7, '#DEB887'),
      // Roof
      ...makeFloor(7, 3, 1, 5, 7, '#8B0000'),
      // AC units on roof
      { type: 'acUnit', position: { x: 8, y: 3, z: 3 }, color: '#909090' },
      { type: 'acUnit', position: { x: 10, y: 3, z: 5 }, color: '#909090' },
      // Store entrance (automatic doors)
      { type: 'doorFrame', position: { x: 7, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 7, y: 2, z: 4 }, color: '#4682B4' },
      // Large windows
      { type: 'windowFrame', position: { x: 7, y: 1, z: 2 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 7, y: 1, z: 3 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 7, y: 1, z: 5 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 7, y: 1, z: 6 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 7, y: 2, z: 2 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 7, y: 2, z: 6 }, color: '#4682B4' },
      // Store sign
      { type: 'sign', position: { x: 7, y: 2, z: 4 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 1, radius: 2 } },

      // === AIR/VACUUM STATION ===
      { type: 'cube', position: { x: 0, y: 0, z: 9 }, color: '#4169E1' },
      { type: 'pillar2', position: { x: 0, y: 1, z: 9 }, color: '#C0C0C0' },
      // Coiled hoses
      { type: 'cableLoop', position: { x: 1, y: 0, z: 9 }, color: '#1A1A1A' },

      // === UNDERGROUND FUEL TANKS (visible caps) ===
      { type: 'cylinder', position: { x: 1, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'cylinder', position: { x: 3, y: 0, z: 0 }, color: '#FFD700' },
      // Vent pipes
      { type: 'pipeY', position: { x: 0, y: 0, z: 0 }, color: '#808080' },
      { type: 'pipeY', position: { x: 0, y: 1, z: 0 }, color: '#808080' },
      { type: 'pipeY', position: { x: 0, y: 2, z: 0 }, color: '#808080' },

      // === CAR WASH BAY ===
      // Structure
      { type: 'cube', position: { x: 9, y: 0, z: 9 }, color: '#4682B4' },
      { type: 'cube', position: { x: 10, y: 0, z: 9 }, color: '#4682B4' },
      { type: 'cube', position: { x: 11, y: 0, z: 9 }, color: '#4682B4' },
      { type: 'cube', position: { x: 9, y: 1, z: 9 }, color: '#87CEEB' },
      { type: 'cube', position: { x: 10, y: 1, z: 9 }, color: '#87CEEB' },
      { type: 'cube', position: { x: 11, y: 1, z: 9 }, color: '#87CEEB' },
      { type: 'slab', position: { x: 9, y: 2, z: 9 }, color: '#4682B4' },
      { type: 'slab', position: { x: 10, y: 2, z: 9 }, color: '#4682B4' },
      { type: 'slab', position: { x: 11, y: 2, z: 9 }, color: '#4682B4' },
      // Brush rollers
      { type: 'pillarRound', position: { x: 9, y: 0, z: 9 }, color: '#0000CD' },
      { type: 'pillarRound', position: { x: 11, y: 0, z: 9 }, color: '#0000CD' },

      // === EXTERIOR ELEMENTS ===
      // Price sign
      { type: 'pillar', position: { x: -1, y: 0, z: 4 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: -1, y: 1, z: 4 }, color: '#E0E0E0' },
      { type: 'pillar', position: { x: -1, y: 2, z: 4 }, color: '#E0E0E0' },
      { type: 'cube', position: { x: -1, y: 3, z: 4 }, color: '#FFFFFF' },
      { type: 'cube', position: { x: -1, y: 4, z: 4 }, color: '#FF0000' },
      // Trash cans
      { type: 'barrel', position: { x: 6, y: 0, z: 2 }, color: '#006400' },
      { type: 'barrel', position: { x: 6, y: 0, z: 6 }, color: '#006400' },
      // Ice machine outside store
      { type: 'cube', position: { x: 6, y: 0, z: 4 }, color: '#FFFFFF' },
      { type: 'cube', position: { x: 6, y: 1, z: 4 }, color: '#4169E1' },
      // Propane cage
      { type: 'fence', position: { x: 11, y: 0, z: 1 }, color: '#C0C0C0' },
      { type: 'barrel', position: { x: 11, y: 0, z: 2 }, color: '#87CEEB' },
      { type: 'barrel', position: { x: 11, y: 0, z: 3 }, color: '#87CEEB' },
    ]
  },

  helipad: {
    name: 'Helipad',
    category: 'modern',
    description: 'Complete heliport with control room, fuel station, fire safety, and service area',
    blocks: [
      // === MAIN LANDING PLATFORM ===
      ...makeFloor(4, 0, 2, 10, 10, '#404040'),
      // Touchdown/Liftoff Area (TLOF) - darker center
      ...makeFloor(6, 0, 4, 6, 6, '#353535'),

      // === LANDING CIRCLE (Yellow) ===
      { type: 'slab', position: { x: 7, y: 0, z: 4 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 8, y: 0, z: 4 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 9, y: 0, z: 4 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 10, y: 0, z: 4 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 6, y: 0, z: 5 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 11, y: 0, z: 5 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 6, y: 0, z: 6 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 11, y: 0, z: 6 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 6, y: 0, z: 7 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 11, y: 0, z: 7 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 6, y: 0, z: 8 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 11, y: 0, z: 8 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 7, y: 0, z: 9 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 8, y: 0, z: 9 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 9, y: 0, z: 9 }, color: '#FFFF00' },
      { type: 'slab', position: { x: 10, y: 0, z: 9 }, color: '#FFFF00' },

      // === H MARKING (White) ===
      { type: 'slab', position: { x: 7, y: 0, z: 5 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 7, y: 0, z: 6 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 7, y: 0, z: 7 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 7, y: 0, z: 8 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 8, y: 0, z: 6 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 8, y: 0, z: 7 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 9, y: 0, z: 6 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 9, y: 0, z: 7 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 0, z: 5 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 0, z: 6 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 0, z: 7 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 0, z: 8 }, color: '#FFFFFF' },

      // === PERIMETER LIGHTS (Green) ===
      { type: 'sphere', position: { x: 4, y: 0, z: 2 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 8, y: 0, z: 2 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 13, y: 0, z: 2 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 4, y: 0, z: 11 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 8, y: 0, z: 11 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 13, y: 0, z: 11 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 4, y: 0, z: 6 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 13, y: 0, z: 6 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },

      // === CONTROL TOWER / OPERATIONS BUILDING ===
      ...makeFloor(0, 0, 4, 4, 6, '#606060'),
      ...makeWallZ(0, 1, 4, 6, 3, '#808080'),
      ...makeWallZ(3, 1, 4, 6, 3, '#808080'),
      ...makeWallX(0, 1, 4, 4, 3, '#808080'),
      ...makeWallX(0, 1, 9, 4, 3, '#808080'),
      ...makeFloor(0, 4, 4, 4, 6, '#505050'),
      // Control room door
      { type: 'doorFrame', position: { x: 3, y: 1, z: 6 }, color: '#4682B4' },
      { type: 'doorFrame', position: { x: 3, y: 2, z: 6 }, color: '#4682B4' },
      // Control room windows (facing helipad)
      { type: 'windowFrame', position: { x: 3, y: 2, z: 5 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 3, y: 2, z: 7 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 3, y: 2, z: 8 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 3, y: 3, z: 5 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 3, y: 3, z: 6 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 3, y: 3, z: 7 }, color: '#87CEEB' },
      { type: 'windowFrame', position: { x: 3, y: 3, z: 8 }, color: '#87CEEB' },
      // Control room equipment
      { type: 'desk', position: { x: 1, y: 1, z: 6 }, color: '#4A4A4A' },
      { type: 'monitor', position: { x: 1, y: 2, z: 6 }, color: '#1E1E1E', emissive: { enabled: true, color: '#00BFFF', intensity: 0.5, radius: 2 } },
      { type: 'desk', position: { x: 1, y: 1, z: 7 }, color: '#4A4A4A' },
      { type: 'monitor', position: { x: 1, y: 2, z: 7 }, color: '#1E1E1E', emissive: { enabled: true, color: '#00FF00', intensity: 0.5, radius: 2 } },
      { type: 'chair', position: { x: 2, y: 1, z: 6 }, color: '#2F2F2F' },
      { type: 'chair', position: { x: 2, y: 1, z: 7 }, color: '#2F2F2F' },
      // Radio antenna on roof
      { type: 'antenna', position: { x: 1, y: 4, z: 6 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 1, y: 5, z: 6 }, color: '#C0C0C0' },
      // AC unit
      { type: 'acUnit', position: { x: 2, y: 4, z: 8 }, color: '#A0A0A0' },

      // === FUEL STATION ===
      ...makeFloor(0, 0, 0, 4, 4, '#505050'),
      // Fuel tank
      { type: 'tank', position: { x: 1, y: 0, z: 1 }, color: '#FF4500' },
      { type: 'tank', position: { x: 1, y: 1, z: 1 }, color: '#FF4500' },
      { type: 'tank', position: { x: 2, y: 0, z: 1 }, color: '#FF4500' },
      { type: 'tank', position: { x: 2, y: 1, z: 1 }, color: '#FF4500' },
      // Fuel pump
      { type: 'pillar', position: { x: 1, y: 0, z: 2 }, color: '#FFD700' },
      { type: 'powerBox', position: { x: 1, y: 1, z: 2 }, color: '#FFD700' },
      // Fuel hose reel
      { type: 'cylinder', position: { x: 2, y: 0, z: 2 }, color: '#2F2F2F' },
      // Warning signs
      { type: 'sign', position: { x: 0, y: 1, z: 0 }, color: '#FF0000' },
      // Fuel spill containment
      { type: 'drain', position: { x: 1, y: 0, z: 3 }, color: '#404040' },

      // === FIRE SAFETY EQUIPMENT ===
      ...makeFloor(0, 0, 10, 4, 4, '#505050'),
      // Fire extinguisher cabinet
      { type: 'locker', position: { x: 1, y: 0, z: 11 }, color: '#FF0000' },
      { type: 'locker', position: { x: 1, y: 1, z: 11 }, color: '#FF0000' },
      // Foam tank
      { type: 'tank', position: { x: 2, y: 0, z: 12 }, color: '#FFFF00' },
      { type: 'tank', position: { x: 2, y: 1, z: 12 }, color: '#FFFF00' },
      // Fire hose reel
      { type: 'cylinder', position: { x: 1, y: 0, z: 12 }, color: '#B22222' },
      // First aid station
      { type: 'cabinet', position: { x: 3, y: 0, z: 11 }, color: '#FFFFFF' },
      { type: 'cross', position: { x: 3, y: 1, z: 11 }, color: '#FF0000' },
      // Safety stretcher
      { type: 'bench', position: { x: 3, y: 0, z: 12 }, color: '#FF8C00' },

      // === WIND INDICATOR ===
      { type: 'pillar4', position: { x: 14, y: 0, z: 7 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 14, y: 1, z: 7 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 14, y: 2, z: 7 }, color: '#C0C0C0' },
      { type: 'pillar4', position: { x: 14, y: 3, z: 7 }, color: '#C0C0C0' },
      // Wind sock (orange/white stripes)
      { type: 'cone', position: { x: 14, y: 4, z: 7 }, color: '#FF6600', rotation: { x: 0, y: 0, z: 90 } },

      // === APPROACH LIGHTING ===
      { type: 'sphere', position: { x: 8, y: 0, z: 0 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 9, y: 0, z: 0 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.5, radius: 3 } },
      { type: 'sphere', position: { x: 8, y: 0, z: 1 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.0, radius: 2 } },
      { type: 'sphere', position: { x: 9, y: 0, z: 1 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.0, radius: 2 } },

      // === FLOODLIGHTS ===
      { type: 'pillar', position: { x: 4, y: 0, z: 0 }, color: '#404040' },
      { type: 'pillar', position: { x: 4, y: 1, z: 0 }, color: '#404040' },
      { type: 'pillar', position: { x: 4, y: 2, z: 0 }, color: '#404040' },
      { type: 'spotlight', position: { x: 4, y: 3, z: 0 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 2.0, radius: 6 } },
      { type: 'pillar', position: { x: 13, y: 0, z: 0 }, color: '#404040' },
      { type: 'pillar', position: { x: 13, y: 1, z: 0 }, color: '#404040' },
      { type: 'pillar', position: { x: 13, y: 2, z: 0 }, color: '#404040' },
      { type: 'spotlight', position: { x: 13, y: 3, z: 0 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 2.0, radius: 6 } },

      // === SAFETY BARRIERS ===
      ...makeRow(4, 0, 12, 10, 'X', 'barrier', '#FF0000'),
      ...makeRow(14, 0, 2, 10, 'Z', 'barrier', '#FF0000'),

      // === GROUND SERVICE EQUIPMENT ===
      // Tow tractor
      { type: 'cube', position: { x: 14, y: 0, z: 10 }, color: '#FFD700' },
      { type: 'seat', position: { x: 14, y: 1, z: 10 }, color: '#2F2F2F' },
      // Ground power unit
      { type: 'crate', position: { x: 14, y: 0, z: 11 }, color: '#4682B4' },
      // Tool cart
      { type: 'crate', position: { x: 14, y: 0, z: 12 }, color: '#B22222' },
    ]
  },

  // Infrastructure additions
  highway: {
    name: 'Highway Interchange',
    category: 'infrastructure',
    description: 'Elevated highway with exit ramp, signage, lighting, and sound barriers',
    blocks: [
      // === GROUND LEVEL ===
      ...makeFloor(0, 0, 0, 24, 16, '#3D5C3D'),  // Grass/landscape
      // Service road underneath
      ...makeFloor(2, 0, 6, 20, 4, '#2F2F2F'),
      // Service road lane markings
      ...makeRow(4, 0, 8, 16, 'X', 'slab', '#FFFFFF'),

      // === MAIN SUPPORT COLUMNS ===
      // Column set 1
      { type: 'column', position: { x: 4, y: 0, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 4, y: 1, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 4, y: 2, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 4, y: 3, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 4, y: 0, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 4, y: 1, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 4, y: 2, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 4, y: 3, z: 13 }, color: '#808080' },
      // Column set 2
      { type: 'column', position: { x: 11, y: 0, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 11, y: 1, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 11, y: 2, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 11, y: 3, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 11, y: 0, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 11, y: 1, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 11, y: 2, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 11, y: 3, z: 13 }, color: '#808080' },
      // Column set 3
      { type: 'column', position: { x: 18, y: 0, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 18, y: 1, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 18, y: 2, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 18, y: 3, z: 2 }, color: '#808080' },
      { type: 'column', position: { x: 18, y: 0, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 18, y: 1, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 18, y: 2, z: 13 }, color: '#808080' },
      { type: 'column', position: { x: 18, y: 3, z: 13 }, color: '#808080' },

      // === MAIN HIGHWAY DECK (4 lanes) ===
      ...makeFloor(0, 4, 0, 24, 6, '#2A2A2A'),  // Left lanes (2)
      ...makeFloor(0, 4, 10, 24, 6, '#2A2A2A'), // Right lanes (2)
      // Median
      ...makeFloor(0, 4, 6, 24, 4, '#404040'),

      // === LANE MARKINGS ===
      // Left side - dashed white center line
      { type: 'slab', position: { x: 2, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 4, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 6, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 8, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 12, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 14, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 16, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 18, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 20, y: 4, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 22, y: 4, z: 2 }, color: '#FFFFFF' },
      // Right side - dashed white center line
      { type: 'slab', position: { x: 2, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 4, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 6, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 8, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 10, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 12, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 14, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 16, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 18, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 20, y: 4, z: 13 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 22, y: 4, z: 13 }, color: '#FFFFFF' },
      // Edge lines (solid yellow)
      ...makeRow(0, 4, 5, 24, 'X', 'slab', '#FFD700'),
      ...makeRow(0, 4, 10, 24, 'X', 'slab', '#FFD700'),

      // === CONCRETE BARRIERS ===
      // Outer barriers
      ...makeRow(0, 4, 0, 24, 'X', 'barrier', '#C0C0C0'),
      ...makeRow(0, 4, 15, 24, 'X', 'barrier', '#C0C0C0'),
      // Median barriers
      ...makeRow(0, 4, 6, 24, 'X', 'barrier', '#C0C0C0'),
      ...makeRow(0, 4, 9, 24, 'X', 'barrier', '#C0C0C0'),

      // === EXIT RAMP (Right side, curving down) ===
      // Ramp deck descending
      ...makeFloor(16, 4, 16, 4, 4, '#2A2A2A'),
      ...makeFloor(18, 3, 18, 4, 4, '#2A2A2A'),
      ...makeFloor(20, 2, 20, 4, 4, '#2A2A2A'),
      ...makeFloor(20, 1, 22, 4, 4, '#2A2A2A'),
      // Ramp barriers
      ...makeRow(16, 4, 19, 4, 'X', 'barrier', '#C0C0C0'),
      ...makeRow(18, 3, 21, 4, 'X', 'barrier', '#C0C0C0'),
      ...makeRow(20, 2, 23, 4, 'X', 'barrier', '#C0C0C0'),
      // Ramp support column
      { type: 'column', position: { x: 19, y: 0, z: 19 }, color: '#808080' },
      { type: 'column', position: { x: 19, y: 1, z: 19 }, color: '#808080' },
      { type: 'column', position: { x: 19, y: 2, z: 19 }, color: '#808080' },

      // === HIGHWAY SIGNS ===
      // Overhead sign gantry
      { type: 'column', position: { x: 8, y: 4, z: -1 }, color: '#2F4F2F' },
      { type: 'column', position: { x: 8, y: 5, z: -1 }, color: '#2F4F2F' },
      { type: 'column', position: { x: 8, y: 6, z: -1 }, color: '#2F4F2F' },
      { type: 'column', position: { x: 8, y: 7, z: -1 }, color: '#2F4F2F' },
      { type: 'column', position: { x: 8, y: 4, z: 16 }, color: '#2F4F2F' },
      { type: 'column', position: { x: 8, y: 5, z: 16 }, color: '#2F4F2F' },
      { type: 'column', position: { x: 8, y: 6, z: 16 }, color: '#2F4F2F' },
      { type: 'column', position: { x: 8, y: 7, z: 16 }, color: '#2F4F2F' },
      // Gantry beam
      ...makeRow(8, 7, 0, 16, 'Z', 'iBeam', '#2F4F2F'),
      // Signs on gantry
      { type: 'sign', position: { x: 8, y: 6, z: 3 }, color: '#006400' },
      { type: 'sign', position: { x: 8, y: 6, z: 4 }, color: '#006400' },
      { type: 'sign', position: { x: 8, y: 6, z: 12 }, color: '#006400' },
      { type: 'sign', position: { x: 8, y: 6, z: 13 }, color: '#006400' },
      // Exit sign
      { type: 'sign', position: { x: 14, y: 5, z: 15 }, color: '#228B22' },
      // Mile marker
      { type: 'pillar4', position: { x: 1, y: 4, z: 0 }, color: '#FFFFFF' },
      { type: 'sign', position: { x: 1, y: 5, z: 0 }, color: '#228B22' },

      // === HIGHWAY LIGHTING ===
      // Light poles on median
      { type: 'pillar4', position: { x: 3, y: 4, z: 7 }, color: '#404040' },
      { type: 'pillar4', position: { x: 3, y: 5, z: 7 }, color: '#404040' },
      { type: 'pillar4', position: { x: 3, y: 6, z: 7 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 3, y: 7, z: 7 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFCC', intensity: 1.5, radius: 6 } },
      { type: 'pillar4', position: { x: 10, y: 4, z: 7 }, color: '#404040' },
      { type: 'pillar4', position: { x: 10, y: 5, z: 7 }, color: '#404040' },
      { type: 'pillar4', position: { x: 10, y: 6, z: 7 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 10, y: 7, z: 7 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFCC', intensity: 1.5, radius: 6 } },
      { type: 'pillar4', position: { x: 17, y: 4, z: 7 }, color: '#404040' },
      { type: 'pillar4', position: { x: 17, y: 5, z: 7 }, color: '#404040' },
      { type: 'pillar4', position: { x: 17, y: 6, z: 7 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 17, y: 7, z: 7 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFCC', intensity: 1.5, radius: 6 } },

      // === SOUND BARRIERS (on right side) ===
      // Support posts for sound barriers
      { type: 'post', position: { x: 0, y: 0, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 0, y: 1, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 0, y: 2, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 0, y: 3, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 4, y: 0, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 4, y: 1, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 4, y: 2, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 4, y: 3, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 8, y: 0, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 8, y: 1, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 8, y: 2, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 8, y: 3, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 12, y: 0, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 12, y: 1, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 12, y: 2, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 12, y: 3, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 15, y: 0, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 15, y: 1, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 15, y: 2, z: 16 }, color: '#606060' },
      { type: 'post', position: { x: 15, y: 3, z: 16 }, color: '#606060' },
      // Sound barrier panels
      ...makeRow(0, 4, 16, 16, 'X', 'panel', '#A0A0A0'),
      ...makeRow(0, 5, 16, 16, 'X', 'panel', '#909090'),
      ...makeRow(0, 6, 16, 16, 'X', 'panel', '#808080'),

      // === EMERGENCY EQUIPMENT ===
      // Emergency call box
      { type: 'pillar4', position: { x: 6, y: 4, z: 0 }, color: '#4169E1' },
      { type: 'powerBox', position: { x: 6, y: 5, z: 0 }, color: '#4169E1' },
      // Fire extinguisher cabinet
      { type: 'locker', position: { x: 12, y: 4, z: 0 }, color: '#FF0000' },

      // === UNDERPASS DETAILS ===
      // Underpass lighting with mounting beams (attached to deck underside)
      { type: 'beamZ', position: { x: 8, y: 3, z: 6 }, color: '#404040' },
      { type: 'beamZ', position: { x: 8, y: 3, z: 7 }, color: '#404040' },
      { type: 'beamZ', position: { x: 8, y: 3, z: 8 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 8, y: 3, z: 7 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 0.8, radius: 4 } },
      { type: 'beamZ', position: { x: 14, y: 3, z: 6 }, color: '#404040' },
      { type: 'beamZ', position: { x: 14, y: 3, z: 7 }, color: '#404040' },
      { type: 'beamZ', position: { x: 14, y: 3, z: 8 }, color: '#404040' },
      { type: 'lightFixture', position: { x: 14, y: 3, z: 7 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFEE', intensity: 0.8, radius: 4 } },
      // Drainage grates
      { type: 'grate', position: { x: 6, y: 0, z: 7 }, color: '#2F2F2F' },
      { type: 'grate', position: { x: 12, y: 0, z: 7 }, color: '#2F2F2F' },
      { type: 'grate', position: { x: 18, y: 0, z: 7 }, color: '#2F2F2F' },
    ]
  },

  harbor: {
    name: 'Harbor',
    category: 'infrastructure',
    description: 'Busy shipping harbor with crane, warehouse, lighthouse, boat, and cargo containers',
    blocks: [
      // === WATER ===
      ...makeFloor(0, -1, 0, 16, 6, '#1E4D6B'),  // Deep water
      ...makeFloor(0, 0, 0, 16, 1, '#1E90FF'),   // Surface water effect

      // === MAIN DOCK PLATFORM ===
      ...makeFloor(0, 0, 6, 16, 8, '#696969'),
      // Dock edge with concrete lip
      ...makeRow(0, 0, 6, 16, 'X', 'ledge', '#505050'),
      // Wooden deck section
      ...makeFloor(0, 0, 6, 6, 3, '#8B4513'),

      // === PIER EXTENDING INTO WATER ===
      ...makeFloor(6, 0, 2, 4, 4, '#654321'),
      // Pier support posts
      { type: 'pillar', position: { x: 6, y: -1, z: 2 }, color: '#3A2A1A' },
      { type: 'pillar', position: { x: 9, y: -1, z: 2 }, color: '#3A2A1A' },
      { type: 'pillar', position: { x: 6, y: -1, z: 5 }, color: '#3A2A1A' },
      { type: 'pillar', position: { x: 9, y: -1, z: 5 }, color: '#3A2A1A' },

      // === GANTRY CRANE (Larger) ===
      // Base rails
      { type: 'beamX', position: { x: 2, y: 0, z: 8 }, color: '#505050' },
      { type: 'beamX', position: { x: 3, y: 0, z: 8 }, color: '#505050' },
      { type: 'beamX', position: { x: 4, y: 0, z: 8 }, color: '#505050' },
      { type: 'beamX', position: { x: 2, y: 0, z: 11 }, color: '#505050' },
      { type: 'beamX', position: { x: 3, y: 0, z: 11 }, color: '#505050' },
      { type: 'beamX', position: { x: 4, y: 0, z: 11 }, color: '#505050' },
      // Crane legs
      { type: 'iBeam', position: { x: 2, y: 1, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 3, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 4, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 5, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 1, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 2, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 3, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 4, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 5, z: 8 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 1, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 3, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 4, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 2, y: 5, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 1, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 2, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 3, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 4, z: 11 }, color: '#FFD700' },
      { type: 'iBeam', position: { x: 4, y: 5, z: 11 }, color: '#FFD700' },
      // Crane gantry (top)
      { type: 'beamZ', position: { x: 2, y: 6, z: 8 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 2, y: 6, z: 9 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 2, y: 6, z: 10 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 2, y: 6, z: 11 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 4, y: 6, z: 8 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 4, y: 6, z: 9 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 4, y: 6, z: 10 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 4, y: 6, z: 11 }, color: '#FFD700' },
      // Cross beam
      { type: 'beamX', position: { x: 2, y: 6, z: 9 }, color: '#FF8C00' },
      { type: 'beamX', position: { x: 3, y: 6, z: 9 }, color: '#FF8C00' },
      { type: 'beamX', position: { x: 4, y: 6, z: 9 }, color: '#FF8C00' },
      // Boom arm extending over water
      { type: 'beamZ', position: { x: 3, y: 6, z: 7 }, color: '#FF8C00' },
      { type: 'beamZ', position: { x: 3, y: 6, z: 6 }, color: '#FF8C00' },
      { type: 'beamZ', position: { x: 3, y: 6, z: 5 }, color: '#FF8C00' },
      { type: 'beamZ', position: { x: 3, y: 6, z: 4 }, color: '#FF8C00' },
      // Cable and hook
      { type: 'chain', position: { x: 3, y: 5, z: 5 }, color: '#404040' },
      { type: 'chain', position: { x: 3, y: 4, z: 5 }, color: '#404040' },
      { type: 'chain', position: { x: 3, y: 3, z: 5 }, color: '#404040' },
      { type: 'valve', position: { x: 3, y: 2, z: 5 }, color: '#808080' },  // Hook

      // === WAREHOUSE ===
      ...makeFloor(10, 0, 7, 6, 6, '#505050'),
      // Walls
      ...makeWallX(10, 1, 7, 6, 3, '#A0522D'),
      ...makeWallX(10, 1, 12, 6, 3, '#A0522D'),
      ...makeWallZ(10, 1, 8, 4, 3, '#A0522D'),
      ...makeWallZ(15, 1, 8, 4, 3, '#A0522D'),
      // Roof
      ...makeFloor(10, 4, 7, 6, 6, '#8B4513'),
      // Loading doors
      { type: 'doorFrame', position: { x: 12, y: 1, z: 7 }, color: '#8B4513' },
      { type: 'doorFrame', position: { x: 13, y: 1, z: 7 }, color: '#8B4513' },
      { type: 'doorFrame', position: { x: 12, y: 2, z: 7 }, color: '#8B4513' },
      { type: 'doorFrame', position: { x: 13, y: 2, z: 7 }, color: '#8B4513' },
      // Windows
      { type: 'windowFrame', position: { x: 11, y: 2, z: 7 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 14, y: 2, z: 7 }, color: '#4682B4' },
      // Warehouse sign
      { type: 'sign', position: { x: 12, y: 3, z: 7 }, color: '#FFD700' },

      // === LIGHTHOUSE ===
      { type: 'cylinder', position: { x: 0, y: 0, z: 0 }, color: '#F5F5F5' },
      { type: 'cylinder', position: { x: 0, y: 1, z: 0 }, color: '#DC143C' },
      { type: 'cylinder', position: { x: 0, y: 2, z: 0 }, color: '#F5F5F5' },
      { type: 'cylinder', position: { x: 0, y: 3, z: 0 }, color: '#DC143C' },
      { type: 'cylinder', position: { x: 0, y: 4, z: 0 }, color: '#F5F5F5' },
      // Light chamber
      { type: 'windowFrame', position: { x: 0, y: 5, z: 0 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 0, y: 5, z: 0 }, color: '#FFFF00', emissive: { enabled: true, color: '#FFFF00', intensity: 3.0, radius: 8 } },
      // Dome roof
      { type: 'dome', position: { x: 0, y: 6, z: 0 }, color: '#DC143C' },

      // === SMALL BOAT (in water) ===
      // Hull
      { type: 'hull', position: { x: 12, y: 0, z: 2 }, color: '#F5F5F5' },
      { type: 'hull', position: { x: 13, y: 0, z: 2 }, color: '#F5F5F5' },
      { type: 'hull', position: { x: 14, y: 0, z: 2 }, color: '#F5F5F5' },
      // Cabin
      { type: 'cube', position: { x: 13, y: 1, z: 2 }, color: '#E6E6FA' },
      // Mast
      { type: 'pillar2', position: { x: 12, y: 1, z: 2 }, color: '#8B4513' },
      { type: 'pillar2', position: { x: 12, y: 2, z: 2 }, color: '#8B4513' },

      // === SHIPPING CONTAINERS ===
      // Red container stack
      { type: 'crateLarge', position: { x: 6, y: 0, z: 7 }, color: '#B22222' },
      { type: 'crateLarge', position: { x: 6, y: 1, z: 7 }, color: '#B22222' },
      // Blue container
      { type: 'crateLarge', position: { x: 6, y: 0, z: 9 }, color: '#4169E1' },
      // Green container
      { type: 'crateLarge', position: { x: 6, y: 0, z: 11 }, color: '#228B22' },
      { type: 'crateLarge', position: { x: 6, y: 1, z: 11 }, color: '#FFD700' },

      // === CARGO CRATES ===
      { type: 'crate', position: { x: 8, y: 0, z: 8 }, color: '#8B4513' },
      { type: 'crate', position: { x: 8, y: 0, z: 9 }, color: '#A0522D' },
      { type: 'crate', position: { x: 8, y: 1, z: 8 }, color: '#CD853F' },
      { type: 'barrel', position: { x: 8, y: 0, z: 10 }, color: '#2F4F4F' },
      { type: 'barrel', position: { x: 8, y: 0, z: 11 }, color: '#006400' },

      // === DOCK FURNITURE ===
      // Bollards (for mooring)
      { type: 'bollard', position: { x: 0, y: 0, z: 6 }, color: '#404040' },
      { type: 'bollard', position: { x: 4, y: 0, z: 6 }, color: '#404040' },
      { type: 'bollard', position: { x: 8, y: 0, z: 6 }, color: '#404040' },
      { type: 'bollard', position: { x: 12, y: 0, z: 6 }, color: '#404040' },
      // Pier bollards
      { type: 'bollard', position: { x: 6, y: 0, z: 2 }, color: '#404040' },
      { type: 'bollard', position: { x: 9, y: 0, z: 2 }, color: '#404040' },

      // === DOCK LIGHTING ===
      { type: 'pillar', position: { x: 2, y: 0, z: 12 }, color: '#404040' },
      { type: 'pillar', position: { x: 2, y: 1, z: 12 }, color: '#404040' },
      { type: 'pillar', position: { x: 2, y: 2, z: 12 }, color: '#404040' },
      { type: 'spotlight', position: { x: 2, y: 3, z: 12 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.5, radius: 5 } },

      { type: 'pillar', position: { x: 10, y: 0, z: 12 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 1, z: 12 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 2, z: 12 }, color: '#404040' },
      { type: 'spotlight', position: { x: 10, y: 3, z: 12 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 1.5, radius: 5 } },

      // === SAFETY EQUIPMENT ===
      // Life ring
      { type: 'torus', position: { x: 5, y: 1, z: 6 }, color: '#FF4500' },
      // Safety railing on pier
      { type: 'railing', position: { x: 6, y: 0, z: 2 }, color: '#FFD700' },
      { type: 'railing', position: { x: 7, y: 0, z: 2 }, color: '#FFD700' },
      { type: 'railing', position: { x: 8, y: 0, z: 2 }, color: '#FFD700' },
      { type: 'railing', position: { x: 9, y: 0, z: 2 }, color: '#FFD700' },

      // === FORKLIFT ===
      { type: 'wheel', position: { x: 9, y: 0, z: 9 }, color: '#1A1A1A' },
      { type: 'seat', position: { x: 9, y: 0, z: 10 }, color: '#FFD700' },
    ]
  },

  // =====================
  // OIL & GAS
  // =====================
  oilDerrick: {
    name: 'Oil Derrick',
    category: 'oil',
    description: 'Classic oil drilling tower with lattice structure and drilling equipment',
    blocks: [
      // === MAIN WORK AREA - Gravel/dirt pad ===
      ...makeFloor(0, 0, 0, 8, 7, '#8B7355'),

      // === DERRICK FOUNDATION - Reinforced concrete pad ===
      ...makeFloor(2, 0, 1, 4, 4, '#606060'),

      // === DERRICK TOWER (7 stories tall) ===
      // Corner posts - 4 legs going up
      { type: 'iBeam', position: { x: 2, y: 1, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 3, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 4, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 5, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 6, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 7, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 1, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 2, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 3, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 4, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 5, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 6, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 7, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 1, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 2, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 3, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 4, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 5, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 6, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 2, y: 7, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 1, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 2, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 3, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 4, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 5, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 6, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 7, z: 4 }, color: '#8B0000' },

      // Horizontal cross braces at multiple levels
      { type: 'beamX', position: { x: 3, y: 2, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 4, y: 2, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 4, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 4, y: 4, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 6, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 4, y: 6, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 2, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 4, y: 2, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 4, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 4, y: 4, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 6, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 4, y: 6, z: 4 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 2, y: 2, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 2, y: 2, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 2, y: 4, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 2, y: 4, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 2, y: 6, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 2, y: 6, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 2, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 2, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 4, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 4, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 6, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 6, z: 3 }, color: '#B22222' },

      // Diagonal bracing (using crossBeam)
      { type: 'crossBeam', position: { x: 3, y: 1, z: 1 }, color: '#A52A2A' },
      { type: 'crossBeam', position: { x: 4, y: 3, z: 1 }, color: '#A52A2A' },
      { type: 'crossBeam', position: { x: 3, y: 5, z: 1 }, color: '#A52A2A' },
      { type: 'crossBeam', position: { x: 3, y: 1, z: 4 }, color: '#A52A2A' },
      { type: 'crossBeam', position: { x: 4, y: 3, z: 4 }, color: '#A52A2A' },
      { type: 'crossBeam', position: { x: 3, y: 5, z: 4 }, color: '#A52A2A' },

      // Crown block platform at top
      { type: 'grateFloor', position: { x: 3, y: 8, z: 2 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 4, y: 8, z: 2 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 3, y: 8, z: 3 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 4, y: 8, z: 3 }, color: '#404040' },
      // Crown block (pulley system)
      { type: 'cylinder', position: { x: 3, y: 8, z: 2 }, color: '#505050' },
      { type: 'cylinder', position: { x: 4, y: 8, z: 3 }, color: '#505050' },

      // Monkey board (mid-level work platform) with support beams
      { type: 'beamZ', position: { x: 2, y: 5, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 2, y: 5, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 5, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 5, z: 3 }, color: '#B22222' },
      { type: 'catwalk', position: { x: 3, y: 5, z: 2 }, color: '#404040' },
      { type: 'catwalk', position: { x: 4, y: 5, z: 2 }, color: '#404040' },
      { type: 'catwalk', position: { x: 3, y: 5, z: 3 }, color: '#404040' },
      { type: 'catwalk', position: { x: 4, y: 5, z: 3 }, color: '#404040' },
      { type: 'railing', position: { x: 3, y: 5, z: 1 }, color: '#FFD700' },
      { type: 'railing', position: { x: 4, y: 5, z: 1 }, color: '#FFD700' },

      // === DRILLING EQUIPMENT ===
      // Well head (BOP - Blowout Preventer) at center
      { type: 'wellHead', position: { x: 3, y: 0, z: 2 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 4, y: 0, z: 2 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 3, y: 0, z: 3 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 4, y: 0, z: 3 }, color: '#B22222' },

      // Drill string (pipes going up through derrick)
      { type: 'pipeY', position: { x: 3, y: 1, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 3, y: 2, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 3, y: 3, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 3, y: 4, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 3, y: 5, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 3, y: 6, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 3, y: 7, z: 2 }, color: '#708090' },

      // === DRAW WORKS / ENGINE HOUSE ===
      ...makeFloor(0, 0, 1, 2, 3, '#505050'),
      { type: 'cube', position: { x: 0, y: 1, z: 1 }, color: '#404040' },
      { type: 'cube', position: { x: 1, y: 1, z: 1 }, color: '#404040' },
      { type: 'cube', position: { x: 0, y: 1, z: 2 }, color: '#404040' },
      { type: 'cube', position: { x: 1, y: 1, z: 2 }, color: '#404040' },
      { type: 'cube', position: { x: 0, y: 1, z: 3 }, color: '#404040' },
      { type: 'cube', position: { x: 1, y: 1, z: 3 }, color: '#404040' },
      { type: 'slab', position: { x: 0, y: 2, z: 1 }, color: '#303030' },
      { type: 'slab', position: { x: 1, y: 2, z: 1 }, color: '#303030' },
      { type: 'slab', position: { x: 0, y: 2, z: 2 }, color: '#303030' },
      { type: 'slab', position: { x: 1, y: 2, z: 2 }, color: '#303030' },
      { type: 'slab', position: { x: 0, y: 2, z: 3 }, color: '#303030' },
      { type: 'slab', position: { x: 1, y: 2, z: 3 }, color: '#303030' },
      // Exhaust pipe
      { type: 'pipeY', position: { x: 0, y: 2, z: 1 }, color: '#2F2F2F' },
      { type: 'pipeY', position: { x: 0, y: 3, z: 1 }, color: '#2F2F2F' },

      // === MUD TANKS ===
      { type: 'tank', position: { x: 6, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'tank', position: { x: 6, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'tank', position: { x: 7, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'tank', position: { x: 7, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'tank', position: { x: 6, y: 0, z: 3 }, color: '#4A6B4A' },
      { type: 'tank', position: { x: 6, y: 1, z: 3 }, color: '#4A6B4A' },
      { type: 'tank', position: { x: 7, y: 0, z: 3 }, color: '#4A6B4A' },
      { type: 'tank', position: { x: 7, y: 1, z: 3 }, color: '#4A6B4A' },
      // Mud pump piping
      { type: 'pipeX', position: { x: 5, y: 0, z: 1 }, color: '#708090' },
      { type: 'pipeX', position: { x: 5, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 5, y: 0, z: 2 }, color: '#708090' },

      // === PIPE RACK ===
      { type: 'catwalk', position: { x: 0, y: 0, z: 5 }, color: '#606060' },
      { type: 'catwalk', position: { x: 1, y: 0, z: 5 }, color: '#606060' },
      { type: 'catwalk', position: { x: 2, y: 0, z: 5 }, color: '#606060' },
      { type: 'catwalk', position: { x: 3, y: 0, z: 5 }, color: '#606060' },
      { type: 'pipeX', position: { x: 0, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 1, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 2, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 3, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 0, y: 0, z: 6 }, color: '#708090' },
      { type: 'pipeX', position: { x: 1, y: 0, z: 6 }, color: '#708090' },
      { type: 'pipeX', position: { x: 2, y: 0, z: 6 }, color: '#708090' },
      { type: 'pipeX', position: { x: 3, y: 0, z: 6 }, color: '#708090' },

      // === CONTROL VALVES ===
      { type: 'valve', position: { x: 2, y: 1, z: 2 }, color: '#B22222' },
      { type: 'valve', position: { x: 2, y: 1, z: 3 }, color: '#B22222' },
      { type: 'valve', position: { x: 5, y: 0, z: 2 }, color: '#FF4500' },

      // === SAFETY EQUIPMENT ===
      { type: 'barrier', position: { x: 0, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 7, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'trafficCone', position: { x: 6, y: 0, z: 5 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 7, y: 0, z: 5 }, color: '#FF6600' },

      // === LIGHTING ===
      { type: 'spotlight', position: { x: 2, y: 4, z: 1 }, color: '#FFFF99' },
      { type: 'spotlight', position: { x: 5, y: 4, z: 4 }, color: '#FFFF99' },
    ]
  },

  pumpJackStation: {
    name: 'Pump Jack Station',
    category: 'oil',
    description: 'Oil production site with multiple pump jacks, storage, and control systems',
    blocks: [
      // === SITE GROUND ===
      ...makeFloor(0, 0, 0, 10, 8, '#8B7355'),

      // === PUMP JACK #1 (Primary well) ===
      // Concrete pad
      { type: 'slab', position: { x: 1, y: 0, z: 1 }, color: '#606060' },
      { type: 'slab', position: { x: 2, y: 0, z: 1 }, color: '#606060' },
      { type: 'slab', position: { x: 1, y: 0, z: 2 }, color: '#606060' },
      { type: 'slab', position: { x: 2, y: 0, z: 2 }, color: '#606060' },
      // Pump jack
      { type: 'pumpJack', position: { x: 1, y: 0, z: 1 }, color: '#CD5C5C' },
      // Well head
      { type: 'wellHead', position: { x: 2, y: 0, z: 2 }, color: '#505050' },

      // === PUMP JACK #2 (Secondary well) ===
      // Concrete pad
      { type: 'slab', position: { x: 1, y: 0, z: 5 }, color: '#606060' },
      { type: 'slab', position: { x: 2, y: 0, z: 5 }, color: '#606060' },
      { type: 'slab', position: { x: 1, y: 0, z: 6 }, color: '#606060' },
      { type: 'slab', position: { x: 2, y: 0, z: 6 }, color: '#606060' },
      // Pump jack
      { type: 'pumpJack', position: { x: 1, y: 0, z: 5 }, color: '#B22222' },
      // Well head
      { type: 'wellHead', position: { x: 2, y: 0, z: 6 }, color: '#505050' },

      // === STORAGE TANKS ===
      // Tank battery (multiple tanks)
      { type: 'oilTankSmall', position: { x: 7, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 8, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 9, y: 0, z: 1 }, color: '#4A6B4A' },
      { type: 'oilTankSmall', position: { x: 7, y: 0, z: 3 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 8, y: 0, z: 3 }, color: '#2F4F4F' },
      // Water tank (for produced water)
      { type: 'tank', position: { x: 9, y: 0, z: 3 }, color: '#4682B4' },
      { type: 'tank', position: { x: 9, y: 1, z: 3 }, color: '#4682B4' },

      // === SEPARATOR/HEATER TREATER ===
      { type: 'oilTank', position: { x: 5, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 5, y: 1, z: 2 }, color: '#505050' },

      // === PIPELINE NETWORK ===
      // From pump 1 to separator
      { type: 'pipeX', position: { x: 3, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeX', position: { x: 4, y: 0, z: 2 }, color: '#708090' },
      { type: 'valve', position: { x: 3, y: 0, z: 2 }, color: '#B22222' },
      // From pump 2 to separator
      { type: 'pipeX', position: { x: 3, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 4, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 4, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 4, y: 0, z: 4 }, color: '#708090' },
      { type: 'valve', position: { x: 3, y: 0, z: 5 }, color: '#B22222' },
      // From separator to tanks
      { type: 'pipeX', position: { x: 6, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 6, y: 0, z: 1 }, color: '#708090' },
      { type: 'valve', position: { x: 6, y: 0, z: 2 }, color: '#FF4500' },

      // === CONTROL BUILDING ===
      { type: 'cube', position: { x: 7, y: 0, z: 5 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 8, y: 0, z: 5 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 7, y: 0, z: 6 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 8, y: 0, z: 6 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 7, y: 1, z: 5 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 8, y: 1, z: 5 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 7, y: 1, z: 6 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 8, y: 1, z: 6 }, color: '#F5F5DC' },
      { type: 'slab', position: { x: 7, y: 2, z: 5 }, color: '#696969' },
      { type: 'slab', position: { x: 8, y: 2, z: 5 }, color: '#696969' },
      { type: 'slab', position: { x: 7, y: 2, z: 6 }, color: '#696969' },
      { type: 'slab', position: { x: 8, y: 2, z: 6 }, color: '#696969' },
      { type: 'doorFrame', position: { x: 7, y: 0, z: 5 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 8, y: 1, z: 5 }, color: '#8B4513' },
      // AC unit
      { type: 'acUnit', position: { x: 7, y: 2, z: 6 }, color: '#C0C0C0' },

      // === ELECTRICAL EQUIPMENT ===
      // Transformer
      { type: 'transformer', position: { x: 5, y: 0, z: 6 }, color: '#505050' },
      // Power box
      { type: 'powerBox', position: { x: 5, y: 0, z: 5 }, color: '#2F4F4F' },
      // Conduit to pumps
      { type: 'conduitX', position: { x: 4, y: 0, z: 6 }, color: '#505050' },
      { type: 'conduitX', position: { x: 3, y: 0, z: 6 }, color: '#505050' },

      // === METERING STATION ===
      { type: 'slab', position: { x: 5, y: 0, z: 0 }, color: '#606060' },
      { type: 'valve', position: { x: 5, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'pipeX', position: { x: 6, y: 0, z: 0 }, color: '#708090' },
      { type: 'pipeX', position: { x: 7, y: 0, z: 0 }, color: '#708090' },

      // === FENCING ===
      // Front fence
      { type: 'fence', position: { x: 0, y: 0, z: 0 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 1, y: 0, z: 0 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 2, y: 0, z: 0 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 3, y: 0, z: 0 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 4, y: 0, z: 0 }, color: '#8B8B8B' },
      // Back fence
      { type: 'fence', position: { x: 0, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 1, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 2, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 3, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 4, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 5, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 6, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 7, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 8, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 9, y: 0, z: 7 }, color: '#8B8B8B' },
      // Side fences
      { type: 'fenceZ', position: { x: 0, y: 0, z: 1 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 2 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 3 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 4 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 5 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 0, y: 0, z: 6 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 9, y: 0, z: 5 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 9, y: 0, z: 6 }, color: '#8B8B8B' },

      // === SAFETY EQUIPMENT ===
      { type: 'barrier', position: { x: 8, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 9, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'trafficCone', position: { x: 3, y: 0, z: 3 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 3, y: 0, z: 4 }, color: '#FF6600' },
      { type: 'sign', position: { x: 0, y: 0, z: 0 }, color: '#FFD700' },

      // === OIL BARRELS ===
      { type: 'oilBarrel', position: { x: 9, y: 0, z: 5 }, color: '#1a1a1a' },
      { type: 'oilBarrel', position: { x: 9, y: 0, z: 6 }, color: '#B22222' },
    ]
  },

  oilStorageFacility: {
    name: 'Oil Storage Facility',
    category: 'oil',
    description: 'Tank farm with containment, truck loading, and fire suppression systems',
    blocks: [
      // === MAIN SITE PAD ===
      ...makeFloor(0, 0, 0, 14, 12, '#707070'),

      // === TANK FARM - ROW 1 (Large horizontal tanks) ===
      // Containment berm (raised concrete wall)
      { type: 'slab', position: { x: 1, y: 0, z: 1 }, color: '#505050' },
      { type: 'slab', position: { x: 2, y: 0, z: 1 }, color: '#505050' },
      { type: 'slab', position: { x: 3, y: 0, z: 1 }, color: '#505050' },
      { type: 'slab', position: { x: 4, y: 0, z: 1 }, color: '#505050' },
      { type: 'slab', position: { x: 1, y: 0, z: 4 }, color: '#505050' },
      { type: 'slab', position: { x: 2, y: 0, z: 4 }, color: '#505050' },
      { type: 'slab', position: { x: 3, y: 0, z: 4 }, color: '#505050' },
      { type: 'slab', position: { x: 4, y: 0, z: 4 }, color: '#505050' },
      // Tank 1 - Crude Oil
      { type: 'oilTank', position: { x: 2, y: 0, z: 2 }, color: '#1a1a1a' },
      // Tank 2 - Crude Oil
      { type: 'oilTank', position: { x: 2, y: 0, z: 3 }, color: '#1a1a1a' },

      // === TANK FARM - ROW 2 (Large vertical tanks) ===
      // Containment berm
      { type: 'slab', position: { x: 6, y: 0, z: 1 }, color: '#505050' },
      { type: 'slab', position: { x: 7, y: 0, z: 1 }, color: '#505050' },
      { type: 'slab', position: { x: 8, y: 0, z: 1 }, color: '#505050' },
      { type: 'slab', position: { x: 6, y: 0, z: 4 }, color: '#505050' },
      { type: 'slab', position: { x: 7, y: 0, z: 4 }, color: '#505050' },
      { type: 'slab', position: { x: 8, y: 0, z: 4 }, color: '#505050' },
      // Tanks
      { type: 'tank', position: { x: 6, y: 0, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 6, y: 1, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 6, y: 2, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 8, y: 0, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 8, y: 1, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 8, y: 2, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 6, y: 0, z: 3 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 6, y: 1, z: 3 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 6, y: 2, z: 3 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 8, y: 0, z: 3 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 8, y: 1, z: 3 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 8, y: 2, z: 3 }, color: '#C0C0C0' },
      // Stairways around tanks
      { type: 'stairs', position: { x: 7, y: 0, z: 2 }, color: '#FFD700' },
      { type: 'stairs', position: { x: 7, y: 1, z: 2 }, color: '#FFD700' },

      // === TANK FARM - ROW 3 (Smaller product tanks) ===
      { type: 'oilTankSmall', position: { x: 10, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 11, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 12, y: 0, z: 1 }, color: '#4A6B4A' },
      { type: 'oilTankSmall', position: { x: 10, y: 0, z: 3 }, color: '#4682B4' },
      { type: 'oilTankSmall', position: { x: 11, y: 0, z: 3 }, color: '#4682B4' },
      { type: 'oilTankSmall', position: { x: 12, y: 0, z: 3 }, color: '#B8860B' },

      // === PIPELINE MANIFOLD ===
      // Main header pipe
      { type: 'pipeX', position: { x: 3, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 4, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 5, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 6, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 7, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 8, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 9, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeX', position: { x: 10, y: 0, z: 5 }, color: '#708090' },
      // Branch pipes to tanks
      { type: 'pipeZ', position: { x: 3, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 6, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 10, y: 0, z: 4 }, color: '#708090' },
      // Valves at branches
      { type: 'valve', position: { x: 3, y: 0, z: 5 }, color: '#B22222' },
      { type: 'valve', position: { x: 6, y: 0, z: 5 }, color: '#B22222' },
      { type: 'valve', position: { x: 8, y: 0, z: 5 }, color: '#B22222' },
      { type: 'valve', position: { x: 10, y: 0, z: 5 }, color: '#B22222' },

      // === PUMP HOUSE ===
      ...makeFloor(1, 0, 6, 3, 2, '#606060'),
      { type: 'cube', position: { x: 1, y: 1, z: 6 }, color: '#8B8B8B' },
      { type: 'cube', position: { x: 2, y: 1, z: 6 }, color: '#8B8B8B' },
      { type: 'cube', position: { x: 3, y: 1, z: 6 }, color: '#8B8B8B' },
      { type: 'cube', position: { x: 1, y: 1, z: 7 }, color: '#8B8B8B' },
      { type: 'cube', position: { x: 2, y: 1, z: 7 }, color: '#8B8B8B' },
      { type: 'cube', position: { x: 3, y: 1, z: 7 }, color: '#8B8B8B' },
      { type: 'slab', position: { x: 1, y: 2, z: 6 }, color: '#505050' },
      { type: 'slab', position: { x: 2, y: 2, z: 6 }, color: '#505050' },
      { type: 'slab', position: { x: 3, y: 2, z: 6 }, color: '#505050' },
      { type: 'slab', position: { x: 1, y: 2, z: 7 }, color: '#505050' },
      { type: 'slab', position: { x: 2, y: 2, z: 7 }, color: '#505050' },
      { type: 'slab', position: { x: 3, y: 2, z: 7 }, color: '#505050' },
      { type: 'doorFrame', position: { x: 2, y: 1, z: 6 }, color: '#8B4513' },
      // Pumps inside
      { type: 'cylinder', position: { x: 1, y: 0, z: 6 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: 3, y: 0, z: 7 }, color: '#2F4F4F' },
      // Piping from pump house
      { type: 'pipeX', position: { x: 0, y: 0, z: 6 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 2, y: 0, z: 5 }, color: '#708090' },

      // === TRUCK LOADING AREA ===
      ...makeFloor(1, 0, 9, 6, 3, '#404040'),
      // Loading bays
      { type: 'pipeY', position: { x: 2, y: 0, z: 10 }, color: '#708090' },
      { type: 'pipeY', position: { x: 2, y: 1, z: 10 }, color: '#708090' },
      { type: 'pipeElbowXY', position: { x: 2, y: 2, z: 10 }, color: '#708090' },
      { type: 'pipeY', position: { x: 5, y: 0, z: 10 }, color: '#708090' },
      { type: 'pipeY', position: { x: 5, y: 1, z: 10 }, color: '#708090' },
      { type: 'pipeElbowXY', position: { x: 5, y: 2, z: 10 }, color: '#708090' },
      // Metering
      { type: 'valve', position: { x: 2, y: 1, z: 10 }, color: '#FFD700' },
      { type: 'valve', position: { x: 5, y: 1, z: 10 }, color: '#FFD700' },
      // Canopy over loading
      { type: 'pillar', position: { x: 1, y: 0, z: 9 }, color: '#505050' },
      { type: 'pillar', position: { x: 1, y: 1, z: 9 }, color: '#505050' },
      { type: 'pillar', position: { x: 1, y: 2, z: 9 }, color: '#505050' },
      { type: 'pillar', position: { x: 6, y: 0, z: 9 }, color: '#505050' },
      { type: 'pillar', position: { x: 6, y: 1, z: 9 }, color: '#505050' },
      { type: 'pillar', position: { x: 6, y: 2, z: 9 }, color: '#505050' },
      { type: 'pillar', position: { x: 1, y: 0, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 1, y: 1, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 1, y: 2, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 6, y: 0, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 6, y: 1, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 6, y: 2, z: 11 }, color: '#505050' },
      { type: 'beamX', position: { x: 2, y: 3, z: 9 }, color: '#505050' },
      { type: 'beamX', position: { x: 3, y: 3, z: 9 }, color: '#505050' },
      { type: 'beamX', position: { x: 4, y: 3, z: 9 }, color: '#505050' },
      { type: 'beamX', position: { x: 5, y: 3, z: 9 }, color: '#505050' },
      { type: 'beamX', position: { x: 2, y: 3, z: 11 }, color: '#505050' },
      { type: 'beamX', position: { x: 3, y: 3, z: 11 }, color: '#505050' },
      { type: 'beamX', position: { x: 4, y: 3, z: 11 }, color: '#505050' },
      { type: 'beamX', position: { x: 5, y: 3, z: 11 }, color: '#505050' },

      // === OFFICE/CONTROL BUILDING ===
      ...makeFloor(10, 0, 7, 4, 4, '#808080'),
      ...makeHollowFloor(10, 1, 7, 4, 4, '#F5F5DC'),
      ...makeHollowFloor(10, 2, 7, 4, 4, '#F5F5DC'),
      ...makeFloor(10, 3, 7, 4, 4, '#696969'),
      { type: 'doorFrame', position: { x: 11, y: 1, z: 7 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 12, y: 2, z: 7 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 10, y: 2, z: 8 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 13, y: 2, z: 9 }, color: '#8B4513' },
      { type: 'acUnit', position: { x: 12, y: 3, z: 9 }, color: '#C0C0C0' },

      // === FIRE SUPPRESSION SYSTEM ===
      // Fire water tank
      { type: 'tank', position: { x: 10, y: 0, z: 5 }, color: '#B22222' },
      { type: 'tank', position: { x: 10, y: 1, z: 5 }, color: '#B22222' },
      { type: 'tank', position: { x: 10, y: 2, z: 5 }, color: '#B22222' },
      // Fire monitors
      { type: 'pipeY', position: { x: 4, y: 0, z: 0 }, color: '#B22222' },
      { type: 'valve', position: { x: 4, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'pipeY', position: { x: 9, y: 0, z: 0 }, color: '#B22222' },
      { type: 'valve', position: { x: 9, y: 0, z: 0 }, color: '#FFD700' },
      // Hydrants
      { type: 'pipeY', position: { x: 0, y: 0, z: 5 }, color: '#B22222' },
      { type: 'pipeY', position: { x: 13, y: 0, z: 5 }, color: '#B22222' },

      // === SAFETY & SECURITY ===
      // Perimeter barriers
      { type: 'barrier', position: { x: 0, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 13, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 0, y: 0, z: 11 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 13, y: 0, z: 11 }, color: '#FFD700' },
      // Traffic cones at loading area
      { type: 'trafficCone', position: { x: 0, y: 0, z: 9 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 0, y: 0, z: 10 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 7, y: 0, z: 10 }, color: '#FF6600' },
      // Warning signs
      { type: 'sign', position: { x: 1, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'sign', position: { x: 12, y: 0, z: 0 }, color: '#FFD700' },

      // === ELECTRICAL ===
      { type: 'transformer', position: { x: 12, y: 0, z: 5 }, color: '#505050' },
      { type: 'powerBox', position: { x: 13, y: 0, z: 6 }, color: '#2F4F4F' },
      { type: 'lightFixture', position: { x: 5, y: 0, z: 0 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 8, y: 0, z: 0 }, color: '#FFFF99' },

      // === OIL BARREL STORAGE ===
      { type: 'oilBarrel', position: { x: 12, y: 0, z: 10 }, color: '#1a1a1a' },
      { type: 'oilBarrel', position: { x: 13, y: 0, z: 10 }, color: '#1a1a1a' },
      { type: 'oilBarrel', position: { x: 12, y: 0, z: 11 }, color: '#B22222' },
      { type: 'oilBarrel', position: { x: 13, y: 0, z: 11 }, color: '#4682B4' },
      { type: 'oilBarrel', position: { x: 12, y: 1, z: 10 }, color: '#1a1a1a' },
    ]
  },

  oilFieldSite: {
    name: 'Oil Field Site',
    category: 'oil',
    description: 'Large-scale oil production facility with drilling, pumps, processing and storage',
    blocks: [
      // === MAIN SITE GROUND ===
      ...makeFloor(0, 0, 0, 18, 16, '#8B7355'),

      // === ACCESS ROAD ===
      ...makeFloor(0, 0, 7, 4, 2, '#404040'),

      // === DERRICK AREA ===
      // Foundation
      ...makeFloor(1, 0, 1, 4, 4, '#606060'),
      // Derrick tower - 6 stories
      { type: 'iBeam', position: { x: 1, y: 1, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 2, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 3, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 4, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 5, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 6, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 1, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 2, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 3, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 4, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 5, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 6, z: 1 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 1, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 2, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 3, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 4, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 5, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 1, y: 6, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 1, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 2, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 3, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 4, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 5, z: 4 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 4, y: 6, z: 4 }, color: '#8B0000' },
      // Cross braces
      { type: 'beamX', position: { x: 2, y: 2, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 2, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 2, y: 4, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 4, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 2, y: 6, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 6, z: 1 }, color: '#B22222' },
      { type: 'beamX', position: { x: 2, y: 2, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 2, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 2, y: 4, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 4, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 2, y: 6, z: 4 }, color: '#B22222' },
      { type: 'beamX', position: { x: 3, y: 6, z: 4 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 1, y: 2, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 1, y: 2, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 1, y: 4, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 1, y: 4, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 4, y: 2, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 4, y: 2, z: 3 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 4, y: 4, z: 2 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 4, y: 4, z: 3 }, color: '#B22222' },
      // Crown block platform
      { type: 'grateFloor', position: { x: 2, y: 7, z: 2 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 3, y: 7, z: 2 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 2, y: 7, z: 3 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 3, y: 7, z: 3 }, color: '#404040' },
      // Blowout preventer
      { type: 'wellHead', position: { x: 2, y: 0, z: 2 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 3, y: 0, z: 2 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 2, y: 0, z: 3 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 3, y: 0, z: 3 }, color: '#B22222' },
      // Drill string
      { type: 'pipeY', position: { x: 2, y: 1, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 2, y: 2, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 2, y: 3, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 2, y: 4, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 2, y: 5, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 2, y: 6, z: 2 }, color: '#708090' },

      // === MUD SYSTEM ===
      { type: 'tank', position: { x: 0, y: 0, z: 5 }, color: '#2F4F4F' },
      { type: 'tank', position: { x: 0, y: 1, z: 5 }, color: '#2F4F4F' },
      { type: 'tank', position: { x: 0, y: 0, z: 6 }, color: '#4A6B4A' },
      { type: 'tank', position: { x: 0, y: 1, z: 6 }, color: '#4A6B4A' },

      // === PUMP JACK FIELD (4 wells) ===
      // Well 1
      { type: 'slab', position: { x: 6, y: 0, z: 2 }, color: '#606060' },
      { type: 'slab', position: { x: 7, y: 0, z: 2 }, color: '#606060' },
      { type: 'pumpJack', position: { x: 6, y: 0, z: 2 }, color: '#CD5C5C' },
      { type: 'wellHead', position: { x: 7, y: 0, z: 2 }, color: '#505050' },
      // Well 2
      { type: 'slab', position: { x: 6, y: 0, z: 5 }, color: '#606060' },
      { type: 'slab', position: { x: 7, y: 0, z: 5 }, color: '#606060' },
      { type: 'pumpJack', position: { x: 6, y: 0, z: 5 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 7, y: 0, z: 5 }, color: '#505050' },
      // Well 3
      { type: 'slab', position: { x: 6, y: 0, z: 10 }, color: '#606060' },
      { type: 'slab', position: { x: 7, y: 0, z: 10 }, color: '#606060' },
      { type: 'pumpJack', position: { x: 6, y: 0, z: 10 }, color: '#CD5C5C' },
      { type: 'wellHead', position: { x: 7, y: 0, z: 10 }, color: '#505050' },
      // Well 4
      { type: 'slab', position: { x: 6, y: 0, z: 13 }, color: '#606060' },
      { type: 'slab', position: { x: 7, y: 0, z: 13 }, color: '#606060' },
      { type: 'pumpJack', position: { x: 6, y: 0, z: 13 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 7, y: 0, z: 13 }, color: '#505050' },

      // === SEPARATION/PROCESSING AREA ===
      ...makeFloor(9, 0, 1, 4, 5, '#707070'),
      // Separator vessels
      { type: 'oilTank', position: { x: 10, y: 0, z: 2 }, color: '#708090' },
      { type: 'oilTank', position: { x: 10, y: 0, z: 4 }, color: '#708090' },
      // Heater treater
      { type: 'tank', position: { x: 12, y: 0, z: 2 }, color: '#505050' },
      { type: 'tank', position: { x: 12, y: 1, z: 2 }, color: '#505050' },
      { type: 'pipeY', position: { x: 12, y: 2, z: 2 }, color: '#2F2F2F' },
      // Piping
      { type: 'pipeX', position: { x: 11, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 11, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 11, y: 0, z: 4 }, color: '#708090' },
      { type: 'valve', position: { x: 11, y: 0, z: 3 }, color: '#B22222' },

      // === FLARE STACK ===
      { type: 'pipeY', position: { x: 17, y: 0, z: 1 }, color: '#505050' },
      { type: 'pipeY', position: { x: 17, y: 1, z: 1 }, color: '#505050' },
      { type: 'pipeY', position: { x: 17, y: 2, z: 1 }, color: '#505050' },
      { type: 'pipeY', position: { x: 17, y: 3, z: 1 }, color: '#505050' },
      { type: 'pipeY', position: { x: 17, y: 4, z: 1 }, color: '#505050' },
      { type: 'cone', position: { x: 17, y: 5, z: 1 }, color: '#FF4500' },

      // === TANK BATTERY ===
      ...makeFloor(13, 0, 7, 5, 6, '#707070'),
      // Large storage tanks
      { type: 'tank', position: { x: 14, y: 0, z: 8 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 14, y: 1, z: 8 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 14, y: 2, z: 8 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 16, y: 0, z: 8 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 16, y: 1, z: 8 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 16, y: 2, z: 8 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 14, y: 0, z: 11 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 14, y: 1, z: 11 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 14, y: 2, z: 11 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 16, y: 0, z: 11 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 16, y: 1, z: 11 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 16, y: 2, z: 11 }, color: '#C0C0C0' },
      // Stairs
      { type: 'stairs', position: { x: 15, y: 0, z: 8 }, color: '#FFD700' },
      { type: 'stairs', position: { x: 15, y: 1, z: 8 }, color: '#FFD700' },
      // Water tank
      { type: 'oilTankSmall', position: { x: 13, y: 0, z: 8 }, color: '#4682B4' },
      { type: 'oilTankSmall', position: { x: 13, y: 0, z: 11 }, color: '#4682B4' },

      // === MAIN PIPELINE NETWORK ===
      // From wells to separator
      { type: 'pipeX', position: { x: 8, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeX', position: { x: 8, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeX', position: { x: 9, y: 0, z: 3 }, color: '#708090' },
      // From wells 3,4
      { type: 'pipeX', position: { x: 8, y: 0, z: 10 }, color: '#708090' },
      { type: 'pipeX', position: { x: 8, y: 0, z: 13 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 11 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 12 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 6 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 7 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 8 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 8, y: 0, z: 9 }, color: '#708090' },
      // From separator to tanks
      { type: 'pipeX', position: { x: 13, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 13, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 13, y: 0, z: 5 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 13, y: 0, z: 6 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 13, y: 0, z: 7 }, color: '#708090' },
      // Valves
      { type: 'valve', position: { x: 8, y: 0, z: 2 }, color: '#B22222' },
      { type: 'valve', position: { x: 8, y: 0, z: 5 }, color: '#B22222' },
      { type: 'valve', position: { x: 8, y: 0, z: 10 }, color: '#B22222' },
      { type: 'valve', position: { x: 8, y: 0, z: 13 }, color: '#B22222' },
      { type: 'valve', position: { x: 13, y: 0, z: 3 }, color: '#FF4500' },

      // === OFFICE/CONTROL BUILDING ===
      ...makeFloor(1, 0, 10, 4, 4, '#808080'),
      ...makeHollowFloor(1, 1, 10, 4, 4, '#F5F5DC'),
      ...makeHollowFloor(1, 2, 10, 4, 4, '#F5F5DC'),
      ...makeFloor(1, 3, 10, 4, 4, '#696969'),
      { type: 'doorFrame', position: { x: 2, y: 1, z: 10 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 3, y: 2, z: 10 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 1, y: 2, z: 11 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 4, y: 2, z: 12 }, color: '#8B4513' },
      { type: 'acUnit', position: { x: 3, y: 3, z: 12 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 1, y: 3, z: 10 }, color: '#505050' },

      // === GENERATOR/POWER AREA ===
      ...makeFloor(1, 0, 14, 3, 2, '#505050'),
      { type: 'cube', position: { x: 1, y: 1, z: 14 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 2, y: 1, z: 14 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 1, y: 1, z: 15 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 2, y: 1, z: 15 }, color: '#2F4F4F' },
      { type: 'pipeY', position: { x: 1, y: 2, z: 14 }, color: '#2F2F2F' },
      { type: 'transformer', position: { x: 3, y: 0, z: 14 }, color: '#505050' },
      { type: 'powerBox', position: { x: 3, y: 0, z: 15 }, color: '#2F4F4F' },

      // === OIL BARREL STORAGE ===
      { type: 'oilBarrel', position: { x: 10, y: 0, z: 13 }, color: '#1a1a1a' },
      { type: 'oilBarrel', position: { x: 11, y: 0, z: 13 }, color: '#1a1a1a' },
      { type: 'oilBarrel', position: { x: 12, y: 0, z: 13 }, color: '#B22222' },
      { type: 'oilBarrel', position: { x: 10, y: 0, z: 14 }, color: '#2F4F4F' },
      { type: 'oilBarrel', position: { x: 11, y: 0, z: 14 }, color: '#1a1a1a' },
      { type: 'oilBarrel', position: { x: 12, y: 0, z: 14 }, color: '#4682B4' },
      { type: 'oilBarrel', position: { x: 10, y: 1, z: 13 }, color: '#B22222' },
      { type: 'oilBarrel', position: { x: 11, y: 1, z: 13 }, color: '#1a1a1a' },

      // === SAFETY & SECURITY ===
      // Perimeter barriers
      { type: 'barrier', position: { x: 0, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 17, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 0, y: 0, z: 15 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 17, y: 0, z: 15 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 5, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 12, y: 0, z: 0 }, color: '#FFD700' },
      // Traffic cones
      { type: 'trafficCone', position: { x: 5, y: 0, z: 3 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 5, y: 0, z: 6 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 5, y: 0, z: 9 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 5, y: 0, z: 12 }, color: '#FF6600' },
      // Signs
      { type: 'sign', position: { x: 0, y: 0, z: 7 }, color: '#FFD700' },
      { type: 'sign', position: { x: 9, y: 0, z: 0 }, color: '#FFD700' },

      // === LIGHTING ===
      { type: 'lightFixture', position: { x: 5, y: 0, z: 0 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 12, y: 0, z: 0 }, color: '#FFFF99' },
      { type: 'spotlight', position: { x: 1, y: 4, z: 1 }, color: '#FFFF99' },
      { type: 'spotlight', position: { x: 4, y: 4, z: 4 }, color: '#FFFF99' },

      // === FENCING (partial) ===
      { type: 'fence', position: { x: 13, y: 0, z: 13 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 14, y: 0, z: 13 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 15, y: 0, z: 13 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 16, y: 0, z: 13 }, color: '#8B8B8B' },
      { type: 'fence', position: { x: 17, y: 0, z: 13 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 17, y: 0, z: 7 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 17, y: 0, z: 8 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 17, y: 0, z: 9 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 17, y: 0, z: 10 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 17, y: 0, z: 11 }, color: '#8B8B8B' },
      { type: 'fenceZ', position: { x: 17, y: 0, z: 12 }, color: '#8B8B8B' },
    ]
  },

  offshorePlatform: {
    name: 'Offshore Oil Platform',
    category: 'oil',
    description: 'Deep-water oil platform with helideck, crane, and living quarters',
    blocks: [
      // === WATER/BASE (simulated) ===
      ...makeFloor(0, 0, 0, 16, 14, '#1E4D6B'),

      // === PLATFORM LEGS (4 massive pillars) ===
      // Leg 1 (front-left)
      { type: 'pillar', position: { x: 2, y: 0, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 1, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 2, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 0, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 1, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 2, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 0, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 1, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 2, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 0, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 1, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 2, z: 3 }, color: '#505050' },
      // Leg 2 (front-right)
      { type: 'pillar', position: { x: 12, y: 0, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 1, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 2, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 0, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 1, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 2, z: 2 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 0, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 1, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 2, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 0, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 1, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 2, z: 3 }, color: '#505050' },
      // Leg 3 (back-left)
      { type: 'pillar', position: { x: 2, y: 0, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 1, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 2, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 0, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 1, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 2, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 0, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 1, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 2, y: 2, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 0, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 1, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 3, y: 2, z: 11 }, color: '#505050' },
      // Leg 4 (back-right)
      { type: 'pillar', position: { x: 12, y: 0, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 1, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 2, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 0, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 1, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 2, z: 10 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 0, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 1, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 12, y: 2, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 0, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 1, z: 11 }, color: '#505050' },
      { type: 'pillar', position: { x: 13, y: 2, z: 11 }, color: '#505050' },

      // === MAIN DECK ===
      ...makeFloor(1, 3, 1, 14, 12, '#707070'),

      // === DRILLING DERRICK ===
      // Foundation
      ...makeFloor(5, 3, 5, 4, 4, '#606060'),
      // Tower legs
      { type: 'iBeam', position: { x: 5, y: 4, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 5, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 6, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 7, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 8, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 4, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 5, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 6, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 7, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 8, z: 5 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 4, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 5, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 6, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 7, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 8, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 4, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 5, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 6, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 7, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 8, y: 8, z: 8 }, color: '#8B0000' },
      // Cross braces
      { type: 'beamX', position: { x: 6, y: 5, z: 5 }, color: '#B22222' },
      { type: 'beamX', position: { x: 7, y: 5, z: 5 }, color: '#B22222' },
      { type: 'beamX', position: { x: 6, y: 7, z: 5 }, color: '#B22222' },
      { type: 'beamX', position: { x: 7, y: 7, z: 5 }, color: '#B22222' },
      { type: 'beamX', position: { x: 6, y: 5, z: 8 }, color: '#B22222' },
      { type: 'beamX', position: { x: 7, y: 5, z: 8 }, color: '#B22222' },
      { type: 'beamX', position: { x: 6, y: 7, z: 8 }, color: '#B22222' },
      { type: 'beamX', position: { x: 7, y: 7, z: 8 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 5, z: 6 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 5, z: 7 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 7, z: 6 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 5, y: 7, z: 7 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 8, y: 5, z: 6 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 8, y: 5, z: 7 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 8, y: 7, z: 6 }, color: '#B22222' },
      { type: 'beamZ', position: { x: 8, y: 7, z: 7 }, color: '#B22222' },
      // Crown platform
      { type: 'grateFloor', position: { x: 6, y: 9, z: 6 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 7, y: 9, z: 6 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 6, y: 9, z: 7 }, color: '#404040' },
      { type: 'grateFloor', position: { x: 7, y: 9, z: 7 }, color: '#404040' },
      // Drill pipe
      { type: 'wellHead', position: { x: 6, y: 3, z: 6 }, color: '#B22222' },
      { type: 'wellHead', position: { x: 7, y: 3, z: 7 }, color: '#B22222' },
      { type: 'pipeY', position: { x: 6, y: 4, z: 6 }, color: '#708090' },
      { type: 'pipeY', position: { x: 6, y: 5, z: 6 }, color: '#708090' },
      { type: 'pipeY', position: { x: 6, y: 6, z: 6 }, color: '#708090' },
      { type: 'pipeY', position: { x: 6, y: 7, z: 6 }, color: '#708090' },
      { type: 'pipeY', position: { x: 6, y: 8, z: 6 }, color: '#708090' },

      // === HELIDECK ===
      ...makeFloor(10, 3, 1, 4, 4, '#2F4F2F'),
      // H marking (using slabs)
      { type: 'slab', position: { x: 11, y: 3, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 12, y: 3, z: 2 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 11, y: 3, z: 3 }, color: '#FFFFFF' },
      { type: 'slab', position: { x: 12, y: 3, z: 3 }, color: '#FFFFFF' },
      // Safety lights
      { type: 'lightFixture', position: { x: 10, y: 3, z: 1 }, color: '#FF0000' },
      { type: 'lightFixture', position: { x: 13, y: 3, z: 1 }, color: '#FF0000' },
      { type: 'lightFixture', position: { x: 10, y: 3, z: 4 }, color: '#FF0000' },
      { type: 'lightFixture', position: { x: 13, y: 3, z: 4 }, color: '#FF0000' },

      // === LIVING QUARTERS ===
      ...makeFloor(1, 3, 1, 3, 4, '#808080'),
      ...makeHollowFloor(1, 4, 1, 3, 4, '#F5F5DC'),
      ...makeHollowFloor(1, 5, 1, 3, 4, '#F5F5DC'),
      ...makeFloor(1, 6, 1, 3, 4, '#696969'),
      { type: 'doorFrame', position: { x: 2, y: 4, z: 4 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 1, y: 5, z: 1 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 3, y: 5, z: 1 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 1, y: 5, z: 3 }, color: '#8B4513' },
      { type: 'acUnit', position: { x: 2, y: 6, z: 3 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 1, y: 6, z: 1 }, color: '#505050' },

      // === CRANE ===
      // Crane base
      { type: 'cylinder', position: { x: 14, y: 3, z: 7 }, color: '#FFD700' },
      // Crane tower
      { type: 'pillar', position: { x: 14, y: 4, z: 7 }, color: '#FFD700' },
      { type: 'pillar', position: { x: 14, y: 5, z: 7 }, color: '#FFD700' },
      { type: 'pillar', position: { x: 14, y: 6, z: 7 }, color: '#FFD700' },
      // Crane boom (horizontal)
      { type: 'beamZ', position: { x: 14, y: 6, z: 5 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 14, y: 6, z: 6 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 14, y: 6, z: 8 }, color: '#FFD700' },
      { type: 'beamZ', position: { x: 14, y: 6, z: 9 }, color: '#FFD700' },
      // Hook
      { type: 'chain', position: { x: 14, y: 5, z: 5 }, color: '#505050' },

      // === PROCESS EQUIPMENT ===
      // Separator
      { type: 'oilTank', position: { x: 10, y: 3, z: 6 }, color: '#708090' },
      { type: 'oilTank', position: { x: 10, y: 3, z: 8 }, color: '#708090' },
      // Small tanks
      { type: 'oilTankSmall', position: { x: 10, y: 3, z: 10 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 11, y: 3, z: 10 }, color: '#4682B4' },
      // Piping
      { type: 'pipeX', position: { x: 9, y: 3, z: 7 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 9, y: 3, z: 8 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 9, y: 3, z: 9 }, color: '#708090' },
      { type: 'valve', position: { x: 9, y: 3, z: 7 }, color: '#B22222' },

      // === FLARE BOOM ===
      { type: 'beamX', position: { x: 0, y: 3, z: 7 }, color: '#505050' },
      { type: 'pipeY', position: { x: 0, y: 4, z: 7 }, color: '#505050' },
      { type: 'pipeY', position: { x: 0, y: 5, z: 7 }, color: '#505050' },
      { type: 'cone', position: { x: 0, y: 6, z: 7 }, color: '#FF4500' },

      // === LIFEBOAT STATIONS ===
      { type: 'hull', position: { x: 1, y: 3, z: 10 }, color: '#FF6600' },
      { type: 'hull', position: { x: 1, y: 3, z: 12 }, color: '#FF6600' },

      // === SAFETY RAILINGS ===
      { type: 'railing', position: { x: 1, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railing', position: { x: 2, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railing', position: { x: 3, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railing', position: { x: 4, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railing', position: { x: 5, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railing', position: { x: 6, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railing', position: { x: 7, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railing', position: { x: 8, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railing', position: { x: 9, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 0, y: 3, z: 1 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 0, y: 3, z: 2 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 0, y: 3, z: 3 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 0, y: 3, z: 4 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 0, y: 3, z: 5 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 0, y: 3, z: 6 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 15, y: 3, z: 6 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 15, y: 3, z: 7 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 15, y: 3, z: 8 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 15, y: 3, z: 9 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 15, y: 3, z: 10 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 15, y: 3, z: 11 }, color: '#FFD700' },
      { type: 'railingZ', position: { x: 15, y: 3, z: 12 }, color: '#FFD700' },

      // === LIGHTING ===
      { type: 'spotlight', position: { x: 5, y: 6, z: 5 }, color: '#FFFF99' },
      { type: 'spotlight', position: { x: 8, y: 6, z: 8 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 14, y: 3, z: 12 }, color: '#FFFF99' },
    ]
  },

  oilRefinery: {
    name: 'Oil Refinery',
    category: 'oil',
    description: 'Petroleum refinery with distillation columns, cooling towers, and storage',
    blocks: [
      // === MAIN SITE ===
      ...makeFloor(0, 0, 0, 18, 14, '#707070'),

      // === DISTILLATION COLUMN AREA ===
      ...makeFloor(1, 0, 1, 5, 6, '#606060'),
      // Primary distillation column
      { type: 'tank', position: { x: 2, y: 0, z: 2 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 2, y: 1, z: 2 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 2, y: 2, z: 2 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 2, y: 3, z: 2 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 2, y: 4, z: 2 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 2, y: 5, z: 2 }, color: '#C0C0C0' },
      { type: 'dome', position: { x: 2, y: 6, z: 2 }, color: '#C0C0C0' },
      // Secondary column
      { type: 'tank', position: { x: 4, y: 0, z: 2 }, color: '#B0B0B0' },
      { type: 'tank', position: { x: 4, y: 1, z: 2 }, color: '#B0B0B0' },
      { type: 'tank', position: { x: 4, y: 2, z: 2 }, color: '#B0B0B0' },
      { type: 'tank', position: { x: 4, y: 3, z: 2 }, color: '#B0B0B0' },
      { type: 'tank', position: { x: 4, y: 4, z: 2 }, color: '#B0B0B0' },
      { type: 'dome', position: { x: 4, y: 5, z: 2 }, color: '#B0B0B0' },
      // Tertiary column
      { type: 'tank', position: { x: 2, y: 0, z: 5 }, color: '#A0A0A0' },
      { type: 'tank', position: { x: 2, y: 1, z: 5 }, color: '#A0A0A0' },
      { type: 'tank', position: { x: 2, y: 2, z: 5 }, color: '#A0A0A0' },
      { type: 'tank', position: { x: 2, y: 3, z: 5 }, color: '#A0A0A0' },
      { type: 'dome', position: { x: 2, y: 4, z: 5 }, color: '#A0A0A0' },
      // Smaller reactor
      { type: 'tank', position: { x: 4, y: 0, z: 5 }, color: '#909090' },
      { type: 'tank', position: { x: 4, y: 1, z: 5 }, color: '#909090' },
      { type: 'tank', position: { x: 4, y: 2, z: 5 }, color: '#909090' },
      { type: 'dome', position: { x: 4, y: 3, z: 5 }, color: '#909090' },
      // Catwalks and platforms with support pillars
      { type: 'pillar2', position: { x: 3, y: 0, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 1, z: 2 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 0, z: 5 }, color: '#4A4A4A' },
      { type: 'pillar2', position: { x: 3, y: 1, z: 5 }, color: '#4A4A4A' },
      { type: 'catwalk', position: { x: 3, y: 2, z: 2 }, color: '#404040' },
      { type: 'catwalk', position: { x: 3, y: 2, z: 3 }, color: '#404040' },
      { type: 'catwalk', position: { x: 3, y: 2, z: 4 }, color: '#404040' },
      { type: 'catwalk', position: { x: 3, y: 2, z: 5 }, color: '#404040' },
      { type: 'stairs', position: { x: 1, y: 0, z: 3 }, color: '#FFD700' },
      { type: 'stairs', position: { x: 1, y: 1, z: 3 }, color: '#FFD700' },
      // Piping between columns
      { type: 'pipeZ', position: { x: 3, y: 1, z: 3 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 3, y: 1, z: 4 }, color: '#708090' },
      { type: 'pipeX', position: { x: 3, y: 3, z: 2 }, color: '#708090' },
      { type: 'valve', position: { x: 3, y: 3, z: 2 }, color: '#B22222' },

      // === COOLING TOWERS ===
      ...makeFloor(7, 0, 1, 4, 4, '#505050'),
      // Tower 1
      { type: 'cylinder', position: { x: 8, y: 0, z: 2 }, color: '#808080' },
      { type: 'cylinder', position: { x: 8, y: 1, z: 2 }, color: '#808080' },
      { type: 'cylinder', position: { x: 8, y: 2, z: 2 }, color: '#909090' },
      { type: 'cylinder', position: { x: 8, y: 3, z: 2 }, color: '#A0A0A0' },
      // Tower 2
      { type: 'cylinder', position: { x: 8, y: 0, z: 4 }, color: '#808080' },
      { type: 'cylinder', position: { x: 8, y: 1, z: 4 }, color: '#808080' },
      { type: 'cylinder', position: { x: 8, y: 2, z: 4 }, color: '#909090' },
      { type: 'cylinder', position: { x: 8, y: 3, z: 4 }, color: '#A0A0A0' },
      // Water piping
      { type: 'pipeZ', position: { x: 7, y: 0, z: 2 }, color: '#4682B4' },
      { type: 'pipeZ', position: { x: 7, y: 0, z: 3 }, color: '#4682B4' },
      { type: 'pipeZ', position: { x: 7, y: 0, z: 4 }, color: '#4682B4' },

      // === STORAGE TANK FARM ===
      ...makeFloor(12, 0, 1, 6, 6, '#606060'),
      // Large storage tanks
      { type: 'tank', position: { x: 13, y: 0, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 13, y: 1, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 13, y: 2, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 16, y: 0, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 16, y: 1, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 16, y: 2, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 13, y: 0, z: 5 }, color: '#D8D8D8' },
      { type: 'tank', position: { x: 13, y: 1, z: 5 }, color: '#D8D8D8' },
      { type: 'tank', position: { x: 13, y: 2, z: 5 }, color: '#D8D8D8' },
      { type: 'tank', position: { x: 16, y: 0, z: 5 }, color: '#D8D8D8' },
      { type: 'tank', position: { x: 16, y: 1, z: 5 }, color: '#D8D8D8' },
      { type: 'tank', position: { x: 16, y: 2, z: 5 }, color: '#D8D8D8' },
      // Stairs
      { type: 'stairs', position: { x: 14, y: 0, z: 2 }, color: '#FFD700' },
      { type: 'stairs', position: { x: 14, y: 1, z: 2 }, color: '#FFD700' },

      // === PIPE RACK ===
      // Supports
      { type: 'pillar', position: { x: 6, y: 0, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 6, y: 1, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 11, y: 0, z: 3 }, color: '#505050' },
      { type: 'pillar', position: { x: 11, y: 1, z: 3 }, color: '#505050' },
      // Horizontal pipes on rack
      { type: 'pipeX', position: { x: 5, y: 1, z: 3 }, color: '#708090' },
      { type: 'pipeX', position: { x: 6, y: 1, z: 3 }, color: '#708090' },
      { type: 'pipeX', position: { x: 7, y: 1, z: 3 }, color: '#2F4F4F' },
      { type: 'pipeX', position: { x: 8, y: 1, z: 3 }, color: '#2F4F4F' },
      { type: 'pipeX', position: { x: 9, y: 1, z: 3 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 10, y: 1, z: 3 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 11, y: 1, z: 3 }, color: '#708090' },
      { type: 'pipeX', position: { x: 12, y: 1, z: 3 }, color: '#708090' },

      // === FLARE STACK ===
      { type: 'pillar', position: { x: 0, y: 0, z: 7 }, color: '#505050' },
      { type: 'pillar', position: { x: 0, y: 1, z: 7 }, color: '#505050' },
      { type: 'pillar', position: { x: 0, y: 2, z: 7 }, color: '#505050' },
      { type: 'pillar', position: { x: 0, y: 3, z: 7 }, color: '#505050' },
      { type: 'pillar', position: { x: 0, y: 4, z: 7 }, color: '#505050' },
      { type: 'pillar', position: { x: 0, y: 5, z: 7 }, color: '#505050' },
      { type: 'pillar', position: { x: 0, y: 6, z: 7 }, color: '#505050' },
      { type: 'cone', position: { x: 0, y: 7, z: 7 }, color: '#FF4500' },
      // Knockout drum
      { type: 'oilTank', position: { x: 1, y: 0, z: 8 }, color: '#708090' },
      { type: 'pipeX', position: { x: 0, y: 0, z: 8 }, color: '#505050' },

      // === CONTROL ROOM ===
      ...makeFloor(1, 0, 10, 5, 4, '#808080'),
      ...makeHollowFloor(1, 1, 10, 5, 4, '#F5F5DC'),
      ...makeHollowFloor(1, 2, 10, 5, 4, '#F5F5DC'),
      ...makeFloor(1, 3, 10, 5, 4, '#696969'),
      { type: 'doorFrame', position: { x: 3, y: 1, z: 10 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 2, y: 2, z: 10 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 4, y: 2, z: 10 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 1, y: 2, z: 12 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 5, y: 2, z: 12 }, color: '#8B4513' },
      { type: 'acUnit', position: { x: 3, y: 3, z: 12 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 1, y: 3, z: 10 }, color: '#505050' },

      // === LOADING AREA ===
      ...makeFloor(8, 0, 9, 6, 5, '#404040'),
      // Loading arms
      { type: 'pipeY', position: { x: 9, y: 0, z: 11 }, color: '#708090' },
      { type: 'pipeY', position: { x: 9, y: 1, z: 11 }, color: '#708090' },
      { type: 'pipeElbowXY', position: { x: 9, y: 2, z: 11 }, color: '#708090' },
      { type: 'pipeY', position: { x: 12, y: 0, z: 11 }, color: '#708090' },
      { type: 'pipeY', position: { x: 12, y: 1, z: 11 }, color: '#708090' },
      { type: 'pipeElbowXY', position: { x: 12, y: 2, z: 11 }, color: '#708090' },
      // Metering
      { type: 'valve', position: { x: 9, y: 1, z: 11 }, color: '#FFD700' },
      { type: 'valve', position: { x: 12, y: 1, z: 11 }, color: '#FFD700' },

      // === PRODUCT TANKS ===
      { type: 'oilTankSmall', position: { x: 15, y: 0, z: 9 }, color: '#B22222' },
      { type: 'oilTankSmall', position: { x: 16, y: 0, z: 9 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 17, y: 0, z: 9 }, color: '#4A6B4A' },
      { type: 'oilTankSmall', position: { x: 15, y: 0, z: 11 }, color: '#B8860B' },
      { type: 'oilTankSmall', position: { x: 16, y: 0, z: 11 }, color: '#4682B4' },
      { type: 'oilTankSmall', position: { x: 17, y: 0, z: 11 }, color: '#1a1a1a' },

      // === ELECTRICAL SUBSTATION ===
      { type: 'transformer', position: { x: 15, y: 0, z: 13 }, color: '#505050' },
      { type: 'transformer', position: { x: 16, y: 0, z: 13 }, color: '#505050' },
      { type: 'powerBox', position: { x: 17, y: 0, z: 13 }, color: '#2F4F4F' },
      { type: 'conduitX', position: { x: 14, y: 0, z: 13 }, color: '#505050' },
      { type: 'conduitX', position: { x: 13, y: 0, z: 13 }, color: '#505050' },

      // === SAFETY EQUIPMENT ===
      { type: 'barrier', position: { x: 0, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 17, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 0, y: 0, z: 13 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 7, y: 0, z: 13 }, color: '#FFD700' },
      { type: 'trafficCone', position: { x: 8, y: 0, z: 8 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 13, y: 0, z: 8 }, color: '#FF6600' },
      { type: 'sign', position: { x: 6, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'sign', position: { x: 11, y: 0, z: 0 }, color: '#FFD700' },

      // Fire hydrants
      { type: 'pipeY', position: { x: 6, y: 0, z: 6 }, color: '#B22222' },
      { type: 'pipeY', position: { x: 11, y: 0, z: 6 }, color: '#B22222' },

      // === LIGHTING ===
      { type: 'lightFixture', position: { x: 3, y: 0, z: 0 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 9, y: 0, z: 0 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 15, y: 0, z: 0 }, color: '#FFFF99' },
      { type: 'spotlight', position: { x: 2, y: 4, z: 2 }, color: '#FFFF99' },
      { type: 'spotlight', position: { x: 4, y: 3, z: 5 }, color: '#FFFF99' },
    ]
  },

  tankerLoadingStation: {
    name: 'Tanker Loading Station',
    category: 'oil',
    description: 'Truck and rail tanker loading facility with metering and safety systems',
    blocks: [
      // === MAIN SITE ===
      ...makeFloor(0, 0, 0, 14, 10, '#707070'),

      // === APPROACH ROAD ===
      ...makeFloor(0, 0, 4, 3, 2, '#404040'),

      // === TRUCK LOADING BAYS (3 bays) ===
      ...makeFloor(3, 0, 1, 8, 4, '#505050'),
      // Bay 1
      { type: 'pillar', position: { x: 4, y: 0, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 4, y: 1, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 4, y: 2, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 4, y: 0, z: 4 }, color: '#606060' },
      { type: 'pillar', position: { x: 4, y: 1, z: 4 }, color: '#606060' },
      { type: 'pillar', position: { x: 4, y: 2, z: 4 }, color: '#606060' },
      { type: 'beamZ', position: { x: 4, y: 3, z: 2 }, color: '#505050' },
      { type: 'beamZ', position: { x: 4, y: 3, z: 3 }, color: '#505050' },
      // Loading arm 1
      { type: 'pipeY', position: { x: 4, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 4, y: 1, z: 2 }, color: '#708090' },
      { type: 'pipeElbowXY', position: { x: 4, y: 2, z: 2 }, color: '#708090' },
      { type: 'valve', position: { x: 4, y: 1, z: 2 }, color: '#B22222' },
      // Bay 2
      { type: 'pillar', position: { x: 7, y: 0, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 7, y: 1, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 7, y: 2, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 7, y: 0, z: 4 }, color: '#606060' },
      { type: 'pillar', position: { x: 7, y: 1, z: 4 }, color: '#606060' },
      { type: 'pillar', position: { x: 7, y: 2, z: 4 }, color: '#606060' },
      { type: 'beamZ', position: { x: 7, y: 3, z: 2 }, color: '#505050' },
      { type: 'beamZ', position: { x: 7, y: 3, z: 3 }, color: '#505050' },
      // Loading arm 2
      { type: 'pipeY', position: { x: 7, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 7, y: 1, z: 2 }, color: '#708090' },
      { type: 'pipeElbowXY', position: { x: 7, y: 2, z: 2 }, color: '#708090' },
      { type: 'valve', position: { x: 7, y: 1, z: 2 }, color: '#B22222' },
      // Bay 3
      { type: 'pillar', position: { x: 10, y: 0, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 10, y: 1, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 10, y: 2, z: 1 }, color: '#606060' },
      { type: 'pillar', position: { x: 10, y: 0, z: 4 }, color: '#606060' },
      { type: 'pillar', position: { x: 10, y: 1, z: 4 }, color: '#606060' },
      { type: 'pillar', position: { x: 10, y: 2, z: 4 }, color: '#606060' },
      { type: 'beamZ', position: { x: 10, y: 3, z: 2 }, color: '#505050' },
      { type: 'beamZ', position: { x: 10, y: 3, z: 3 }, color: '#505050' },
      // Loading arm 3
      { type: 'pipeY', position: { x: 10, y: 0, z: 2 }, color: '#708090' },
      { type: 'pipeY', position: { x: 10, y: 1, z: 2 }, color: '#708090' },
      { type: 'pipeElbowXY', position: { x: 10, y: 2, z: 2 }, color: '#708090' },
      { type: 'valve', position: { x: 10, y: 1, z: 2 }, color: '#B22222' },
      // Canopy roof
      { type: 'slab', position: { x: 4, y: 3, z: 1 }, color: '#404040' },
      { type: 'slab', position: { x: 5, y: 3, z: 1 }, color: '#404040' },
      { type: 'slab', position: { x: 6, y: 3, z: 1 }, color: '#404040' },
      { type: 'slab', position: { x: 7, y: 3, z: 1 }, color: '#404040' },
      { type: 'slab', position: { x: 8, y: 3, z: 1 }, color: '#404040' },
      { type: 'slab', position: { x: 9, y: 3, z: 1 }, color: '#404040' },
      { type: 'slab', position: { x: 10, y: 3, z: 1 }, color: '#404040' },
      { type: 'slab', position: { x: 4, y: 3, z: 4 }, color: '#404040' },
      { type: 'slab', position: { x: 5, y: 3, z: 4 }, color: '#404040' },
      { type: 'slab', position: { x: 6, y: 3, z: 4 }, color: '#404040' },
      { type: 'slab', position: { x: 7, y: 3, z: 4 }, color: '#404040' },
      { type: 'slab', position: { x: 8, y: 3, z: 4 }, color: '#404040' },
      { type: 'slab', position: { x: 9, y: 3, z: 4 }, color: '#404040' },
      { type: 'slab', position: { x: 10, y: 3, z: 4 }, color: '#404040' },

      // === METERING SKID ===
      ...makeFloor(3, 0, 5, 4, 2, '#606060'),
      { type: 'cylinder', position: { x: 4, y: 0, z: 5 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: 5, y: 0, z: 5 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: 4, y: 0, z: 6 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: 5, y: 0, z: 6 }, color: '#2F4F4F' },
      { type: 'valve', position: { x: 4, y: 0, z: 5 }, color: '#FFD700' },
      { type: 'valve', position: { x: 5, y: 0, z: 6 }, color: '#FFD700' },
      // Piping to bays
      { type: 'pipeZ', position: { x: 4, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 4, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeX', position: { x: 5, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeX', position: { x: 6, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeX', position: { x: 8, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeX', position: { x: 9, y: 0, z: 3 }, color: '#708090' },

      // === STORAGE TANKS ===
      { type: 'oilTankSmall', position: { x: 8, y: 0, z: 6 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 9, y: 0, z: 6 }, color: '#2F4F4F' },
      { type: 'oilTankSmall', position: { x: 10, y: 0, z: 6 }, color: '#4A6B4A' },
      { type: 'tank', position: { x: 12, y: 0, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 12, y: 1, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 12, y: 2, z: 2 }, color: '#E8E8E8' },
      { type: 'tank', position: { x: 12, y: 0, z: 5 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 12, y: 1, z: 5 }, color: '#C0C0C0' },
      { type: 'tank', position: { x: 12, y: 2, z: 5 }, color: '#C0C0C0' },
      // Piping from tanks
      { type: 'pipeZ', position: { x: 11, y: 0, z: 3 }, color: '#708090' },
      { type: 'pipeZ', position: { x: 11, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeX', position: { x: 10, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeX', position: { x: 9, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeX', position: { x: 8, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeX', position: { x: 7, y: 0, z: 4 }, color: '#708090' },
      { type: 'pipeX', position: { x: 6, y: 0, z: 4 }, color: '#708090' },
      { type: 'valve', position: { x: 11, y: 0, z: 3 }, color: '#B22222' },
      { type: 'valve', position: { x: 11, y: 0, z: 4 }, color: '#B22222' },

      // === CONTROL BOOTH ===
      { type: 'cube', position: { x: 1, y: 0, z: 1 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 2, y: 0, z: 1 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 1, y: 0, z: 2 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 2, y: 0, z: 2 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 1, y: 1, z: 1 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 2, y: 1, z: 1 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 1, y: 1, z: 2 }, color: '#F5F5DC' },
      { type: 'cube', position: { x: 2, y: 1, z: 2 }, color: '#F5F5DC' },
      { type: 'slab', position: { x: 1, y: 2, z: 1 }, color: '#696969' },
      { type: 'slab', position: { x: 2, y: 2, z: 1 }, color: '#696969' },
      { type: 'slab', position: { x: 1, y: 2, z: 2 }, color: '#696969' },
      { type: 'slab', position: { x: 2, y: 2, z: 2 }, color: '#696969' },
      { type: 'doorFrame', position: { x: 1, y: 0, z: 1 }, color: '#8B4513' },
      { type: 'windowFrame', position: { x: 2, y: 1, z: 1 }, color: '#8B4513' },
      { type: 'acUnit', position: { x: 1, y: 2, z: 2 }, color: '#C0C0C0' },

      // === PUMP STATION ===
      ...makeFloor(8, 0, 8, 3, 2, '#606060'),
      { type: 'cylinder', position: { x: 8, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: 9, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: 10, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'pipeX', position: { x: 7, y: 0, z: 8 }, color: '#708090' },
      { type: 'pipeX', position: { x: 11, y: 0, z: 8 }, color: '#708090' },
      { type: 'valve', position: { x: 7, y: 0, z: 8 }, color: '#FF4500' },

      // === ELECTRICAL ===
      { type: 'transformer', position: { x: 1, y: 0, z: 8 }, color: '#505050' },
      { type: 'powerBox', position: { x: 2, y: 0, z: 8 }, color: '#2F4F4F' },
      { type: 'conduitX', position: { x: 3, y: 0, z: 8 }, color: '#505050' },
      { type: 'conduitX', position: { x: 4, y: 0, z: 8 }, color: '#505050' },
      { type: 'conduitX', position: { x: 5, y: 0, z: 8 }, color: '#505050' },
      { type: 'conduitX', position: { x: 6, y: 0, z: 8 }, color: '#505050' },

      // === SAFETY EQUIPMENT ===
      // Barriers at entry/exit
      { type: 'barrier', position: { x: 0, y: 0, z: 3 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 0, y: 0, z: 6 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 13, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 13, y: 0, z: 9 }, color: '#FFD700' },
      // Traffic cones at bays
      { type: 'trafficCone', position: { x: 3, y: 0, z: 2 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 3, y: 0, z: 3 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 11, y: 0, z: 2 }, color: '#FF6600' },
      { type: 'trafficCone', position: { x: 11, y: 0, z: 3 }, color: '#FF6600' },
      // Signs
      { type: 'sign', position: { x: 0, y: 0, z: 4 }, color: '#FFD700' },
      { type: 'sign', position: { x: 6, y: 0, z: 0 }, color: '#FFD700' },
      // Fire extinguisher locations
      { type: 'pipeY', position: { x: 3, y: 0, z: 1 }, color: '#B22222' },
      { type: 'pipeY', position: { x: 11, y: 0, z: 1 }, color: '#B22222' },

      // === SPILL CONTAINMENT ===
      { type: 'drain', position: { x: 5, y: 0, z: 2 }, color: '#404040' },
      { type: 'drain', position: { x: 8, y: 0, z: 2 }, color: '#404040' },
      { type: 'grate', position: { x: 6, y: 0, z: 2 }, color: '#505050' },
      { type: 'grate', position: { x: 9, y: 0, z: 2 }, color: '#505050' },

      // === LIGHTING ===
      // Light mounting beams
      { type: 'beamZ', position: { x: 4, y: 3, z: 2 }, color: '#505050' },
      { type: 'beamZ', position: { x: 4, y: 3, z: 3 }, color: '#505050' },
      { type: 'beamZ', position: { x: 7, y: 3, z: 2 }, color: '#505050' },
      { type: 'beamZ', position: { x: 7, y: 3, z: 3 }, color: '#505050' },
      // Lights on beams
      { type: 'lightFixture', position: { x: 4, y: 3, z: 2 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 7, y: 3, z: 2 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 10, y: 3, z: 2 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 0, y: 0, z: 0 }, color: '#FFFF99' },
      { type: 'lightFixture', position: { x: 13, y: 0, z: 5 }, color: '#FFFF99' },

      // === OIL BARRELS ===
      { type: 'oilBarrel', position: { x: 1, y: 0, z: 6 }, color: '#1a1a1a' },
      { type: 'oilBarrel', position: { x: 2, y: 0, z: 6 }, color: '#B22222' },
      { type: 'oilBarrel', position: { x: 1, y: 0, z: 7 }, color: '#2F4F4F' },
    ]
  },

  // =====================
  // ALIEN STRUCTURES - Escher/Giger Biomechanical Architecture
  // =====================

  // Spine Cathedral - Massive vertebrae tower (Giger-inspired)
  nexusSpire: {
    name: 'Spine Cathedral',
    category: 'alien',
    description: 'Towering biomechanical spine with ribcage arches and pulsing core',
    blocks: [
      // === FOUNDATION BASE (Organic ground anchors) ===
      ...makeFloor(-3, 0, -3, 7, 7, '#1a1a1a'),
      { type: 'sphere', position: { x: -2, y: 0, z: -2 }, color: '#0D4D4D' },
      { type: 'sphere', position: { x: 2, y: 0, z: -2 }, color: '#0D4D4D' },
      { type: 'sphere', position: { x: -2, y: 0, z: 2 }, color: '#0D4D4D' },
      { type: 'sphere', position: { x: 2, y: 0, z: 2 }, color: '#0D4D4D' },

      // === VERTEBRAE COLUMN (Central spine) ===
      { type: 'cylinder', position: { x: 0, y: 1, z: 0 }, color: '#2a2a2a' },
      { type: 'torus', position: { x: 0, y: 1, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 2, z: 0 }, color: '#2a2a2a' },
      { type: 'torus', position: { x: 0, y: 2, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 3, z: 0 }, color: '#2a2a2a' },
      { type: 'torus', position: { x: 0, y: 3, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 4, z: 0 }, color: '#2a2a2a' },
      { type: 'torus', position: { x: 0, y: 4, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 5, z: 0 }, color: '#2a2a2a' },
      { type: 'torus', position: { x: 0, y: 5, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 6, z: 0 }, color: '#2a2a2a' },

      // === RIBCAGE LEVEL 1 (Arching ribs) ===
      { type: 'arch', position: { x: -2, y: 2, z: 0 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 2, y: 2, z: 0 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 0, y: 2, z: -2 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 0, y: 2, z: 2 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: -1, y: 2, z: -1 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 1, y: 2, z: -1 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: -1, y: 2, z: 1 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 1, y: 2, z: 1 }, color: '#0D4D4D' },

      // === RIBCAGE LEVEL 2 ===
      { type: 'arch', position: { x: -2, y: 4, z: 0 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 2, y: 4, z: 0 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 0, y: 4, z: -2 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 0, y: 4, z: 2 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: -1, y: 4, z: -1 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 1, y: 4, z: -1 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: -1, y: 4, z: 1 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 1, y: 4, z: 1 }, color: '#0D4D4D' },

      // === GLOWING CORE (Pulsing energy channels) ===
      { type: 'cylinder', position: { x: 0, y: 1, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.8, radius: 5 } },
      { type: 'cylinder', position: { x: 0, y: 3, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.8, radius: 5 } },
      { type: 'cylinder', position: { x: 0, y: 5, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.8, radius: 5 } },

      // === SKULL CROWN (Top structure) ===
      { type: 'sphere', position: { x: 0, y: 7, z: 0 }, color: '#0D4D4D' },
      { type: 'pyramid', position: { x: -1, y: 7, z: 0 }, color: '#1A5C5C' },
      { type: 'pyramid', position: { x: 1, y: 7, z: 0 }, color: '#1A5C5C' },
      { type: 'pyramid', position: { x: 0, y: 7, z: -1 }, color: '#1A5C5C' },
      { type: 'pyramid', position: { x: 0, y: 7, z: 1 }, color: '#1A5C5C' },
      { type: 'crystal', position: { x: 0, y: 8, z: 0 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 3.0, radius: 8 } },

      // === TENDRILS (Reaching outward) ===
      { type: 'pipe', position: { x: -3, y: 3, z: 0 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 3, y: 3, z: 0 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 0, y: 3, z: -3 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 0, y: 3, z: 3 }, color: '#1A5C5C' },
      { type: 'crystal', position: { x: -3, y: 3, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 3 } },
      { type: 'crystal', position: { x: 3, y: 3, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 3 } },
      { type: 'crystal', position: { x: 0, y: 3, z: -3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 3 } },
      { type: 'crystal', position: { x: 0, y: 3, z: 3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 3 } },
    ]
  },

  // Penrose Lattice - Impossible staircase structure (Escher-inspired)
  hiveNode: {
    name: 'Penrose Lattice',
    category: 'alien',
    description: 'Impossible geometry with interlocking stairs and recursive arches',
    blocks: [
      // === BASE PLATFORM (Tessellated floor) ===
      ...makeFloor(-4, 0, -4, 9, 9, '#2a2a2a'),
      { type: 'slab', position: { x: -3, y: 0, z: -3 }, color: '#0D4D4D' },
      { type: 'slab', position: { x: 3, y: 0, z: -3 }, color: '#0D4D4D' },
      { type: 'slab', position: { x: -3, y: 0, z: 3 }, color: '#0D4D4D' },
      { type: 'slab', position: { x: 3, y: 0, z: 3 }, color: '#0D4D4D' },

      // === ASCENDING STAIRCASE (Impossible loop) ===
      // North stairs
      { type: 'stairsNorth', position: { x: 0, y: 1, z: -3 }, color: '#1A5C5C' },
      { type: 'stairsNorth', position: { x: 0, y: 2, z: -2 }, color: '#1A5C5C' },
      { type: 'stairsNorth', position: { x: 0, y: 3, z: -1 }, color: '#1A5C5C' },

      // East stairs
      { type: 'stairsEast', position: { x: 1, y: 4, z: 0 }, color: '#1A5C5C' },
      { type: 'stairsEast', position: { x: 2, y: 3, z: 0 }, color: '#1A5C5C' },
      { type: 'stairsEast', position: { x: 3, y: 2, z: 0 }, color: '#1A5C5C' },

      // South stairs (descending)
      { type: 'stairsSouth', position: { x: 0, y: 1, z: 3 }, color: '#1A5C5C' },
      { type: 'stairsSouth', position: { x: 0, y: 2, z: 2 }, color: '#1A5C5C' },
      { type: 'stairsSouth', position: { x: 0, y: 3, z: 1 }, color: '#1A5C5C' },

      // West stairs
      { type: 'stairsWest', position: { x: -1, y: 4, z: 0 }, color: '#1A5C5C' },
      { type: 'stairsWest', position: { x: -2, y: 3, z: 0 }, color: '#1A5C5C' },
      { type: 'stairsWest', position: { x: -3, y: 2, z: 0 }, color: '#1A5C5C' },

      // === INTERLOCKING ARCHES (Recursive pattern) ===
      { type: 'arch', position: { x: -2, y: 2, z: 0 }, color: '#2F4F4F' },
      { type: 'arch', position: { x: 2, y: 2, z: 0 }, color: '#2F4F4F' },
      { type: 'arch', position: { x: 0, y: 2, z: -2 }, color: '#2F4F4F' },
      { type: 'arch', position: { x: 0, y: 2, z: 2 }, color: '#2F4F4F' },

      { type: 'arch', position: { x: -1, y: 4, z: -1 }, color: '#0D4D4D' },
      { type: 'arch', position: { x: 1, y: 4, z: -1 }, color: '#0D4D4D' },
      { type: 'arch', position: { x: -1, y: 4, z: 1 }, color: '#0D4D4D' },
      { type: 'arch', position: { x: 1, y: 4, z: 1 }, color: '#0D4D4D' },

      // === CENTER VOID (Glowing portal) ===
      { type: 'torus', position: { x: 0, y: 3, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 2.0, radius: 6 } },
      { type: 'sphere', position: { x: 0, y: 3, z: 0 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 3.0, radius: 5 } },

      // === TESSELLATED PILLARS (Corner supports) ===
      { type: 'cylinder', position: { x: -3, y: 1, z: -3 }, color: '#2a2a2a' },
      { type: 'cylinder', position: { x: -3, y: 2, z: -3 }, color: '#2a2a2a' },
      { type: 'cylinder', position: { x: 3, y: 1, z: -3 }, color: '#2a2a2a' },
      { type: 'cylinder', position: { x: 3, y: 2, z: -3 }, color: '#2a2a2a' },
      { type: 'cylinder', position: { x: -3, y: 1, z: 3 }, color: '#2a2a2a' },
      { type: 'cylinder', position: { x: -3, y: 2, z: 3 }, color: '#2a2a2a' },
      { type: 'cylinder', position: { x: 3, y: 1, z: 3 }, color: '#2a2a2a' },
      { type: 'cylinder', position: { x: 3, y: 2, z: 3 }, color: '#2a2a2a' },

      // === CAPSTONES (Crowned pillars with emissive crystals) ===
      { type: 'pyramid', position: { x: -3, y: 3, z: -3 }, color: '#0D4D4D' },
      { type: 'crystal', position: { x: -3, y: 4, z: -3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 3 } },
      { type: 'pyramid', position: { x: 3, y: 3, z: -3 }, color: '#0D4D4D' },
      { type: 'crystal', position: { x: 3, y: 4, z: -3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 3 } },
      { type: 'pyramid', position: { x: -3, y: 3, z: 3 }, color: '#0D4D4D' },
      { type: 'crystal', position: { x: -3, y: 4, z: 3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 3 } },
      { type: 'pyramid', position: { x: 3, y: 3, z: 3 }, color: '#0D4D4D' },
      { type: 'crystal', position: { x: 3, y: 4, z: 3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 3 } },

      // === CONNECTING BEAMS (Structural webbing) ===
      { type: 'pipe', position: { x: -2, y: 3, z: -2 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 2, y: 3, z: -2 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: -2, y: 3, z: 2 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 2, y: 3, z: 2 }, color: '#1A5C5C' },
    ]
  },

  // Bio-Cathedral Generator - Towering energy harvester
  energyPylon: {
    name: 'Bio-Cathedral Generator',
    category: 'alien',
    description: 'Towering biomechanical energy cathedral with nested arches and pulsing conduits',
    blocks: [
      // === FOUNDATION (9x9 base) ===
      ...makeFloor(-4, 0, -4, 9, 9, '#1a1a1a'),

      // === CORNER PYLONS (4 support towers) ===
      // NW corner
      { type: 'cylinder', position: { x: -3, y: 1, z: -3 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: -3, y: 2, z: -3 }, color: '#2F4F4F' },
      { type: 'torus', position: { x: -3, y: 3, z: -3 }, color: '#0D4D4D' },
      { type: 'crystal', position: { x: -3, y: 4, z: -3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 3 } },

      // NE corner
      { type: 'cylinder', position: { x: 3, y: 1, z: -3 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: 3, y: 2, z: -3 }, color: '#2F4F4F' },
      { type: 'torus', position: { x: 3, y: 3, z: -3 }, color: '#0D4D4D' },
      { type: 'crystal', position: { x: 3, y: 4, z: -3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 3 } },

      // SW corner
      { type: 'cylinder', position: { x: -3, y: 1, z: 3 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: -3, y: 2, z: 3 }, color: '#2F4F4F' },
      { type: 'torus', position: { x: -3, y: 3, z: 3 }, color: '#0D4D4D' },
      { type: 'crystal', position: { x: -3, y: 4, z: 3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 3 } },

      // SE corner
      { type: 'cylinder', position: { x: 3, y: 1, z: 3 }, color: '#2F4F4F' },
      { type: 'cylinder', position: { x: 3, y: 2, z: 3 }, color: '#2F4F4F' },
      { type: 'torus', position: { x: 3, y: 3, z: 3 }, color: '#0D4D4D' },
      { type: 'crystal', position: { x: 3, y: 4, z: 3 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 3 } },

      // === CENTRAL ENERGY SHAFT (towering column) ===
      { type: 'cylinder', position: { x: 0, y: 1, z: 0 }, color: '#0D4D4D' },
      { type: 'torus', position: { x: 0, y: 1, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.8, radius: 4 } },
      { type: 'cylinder', position: { x: 0, y: 2, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 3, z: 0 }, color: '#0D4D4D' },
      { type: 'torus', position: { x: 0, y: 3, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.8, radius: 4 } },
      { type: 'cylinder', position: { x: 0, y: 4, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 5, z: 0 }, color: '#0D4D4D' },
      { type: 'torus', position: { x: 0, y: 5, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.8, radius: 4 } },
      { type: 'cylinder', position: { x: 0, y: 6, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 7, z: 0 }, color: '#0D4D4D' },
      { type: 'torus', position: { x: 0, y: 7, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 2.0, radius: 5 } },
      { type: 'cylinder', position: { x: 0, y: 8, z: 0 }, color: '#0D4D4D' },
      { type: 'cylinder', position: { x: 0, y: 9, z: 0 }, color: '#0D4D4D' },
      { type: 'torus', position: { x: 0, y: 9, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 2.0, radius: 5 } },
      { type: 'cylinder', position: { x: 0, y: 10, z: 0 }, color: '#0D4D4D' },

      // === NESTED ARCHES (cathedral structure) - Level 2 ===
      { type: 'arch', position: { x: -2, y: 2, z: 0 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 2, y: 2, z: 0 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 0, y: 2, z: -2 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 0, y: 2, z: 2 }, color: '#1A5C5C' },

      // === NESTED ARCHES - Level 5 ===
      { type: 'arch', position: { x: -2, y: 5, z: 0 }, color: '#2F4F4F' },
      { type: 'arch', position: { x: 2, y: 5, z: 0 }, color: '#2F4F4F' },
      { type: 'arch', position: { x: 0, y: 5, z: -2 }, color: '#2F4F4F' },
      { type: 'arch', position: { x: 0, y: 5, z: 2 }, color: '#2F4F4F' },

      // === NESTED ARCHES - Level 8 ===
      { type: 'arch', position: { x: -1, y: 8, z: 0 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 1, y: 8, z: 0 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 0, y: 8, z: -1 }, color: '#1A5C5C' },
      { type: 'arch', position: { x: 0, y: 8, z: 1 }, color: '#1A5C5C' },

      // === PIPE NETWORK (biomechanical conduits) ===
      // Horizontal connections at level 3
      { type: 'pipe', position: { x: -1, y: 3, z: 0 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 1, y: 3, z: 0 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 0, y: 3, z: -1 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 0, y: 3, z: 1 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: -2, y: 3, z: -2 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 2, y: 3, z: -2 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: -2, y: 3, z: 2 }, color: '#0D4D4D' },
      { type: 'pipe', position: { x: 2, y: 3, z: 2 }, color: '#0D4D4D' },

      // Horizontal connections at level 6
      { type: 'pipe', position: { x: -1, y: 6, z: 0 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 1, y: 6, z: 0 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 0, y: 6, z: -1 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 0, y: 6, z: 1 }, color: '#1A5C5C' },

      // === APEX EMITTER (crackling crown) ===
      { type: 'sphere', position: { x: 0, y: 11, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 2.5, radius: 8 } },
      { type: 'crystal', position: { x: 0, y: 12, z: 0 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 3.0, radius: 10 } },
      { type: 'crystal', position: { x: -1, y: 11, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 4 } },
      { type: 'crystal', position: { x: 1, y: 11, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 4 } },
      { type: 'crystal', position: { x: 0, y: 11, z: -1 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 4 } },
      { type: 'crystal', position: { x: 0, y: 11, z: 1 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 4 } },
    ]
  },

  // Growth Chamber - Horizontal bio-structure
  growthChamber: {
    name: 'Growth Chamber',
    category: 'alien',
    description: 'Organic growth pod with membrane-like surfaces',
    blocks: [
      // === MAIN POD (Horizontal elongated) ===
      { type: 'capsule', position: { x: 0, y: 1, z: 0 }, color: '#1A5C5C' },
      { type: 'capsule', position: { x: 1, y: 1, z: 0 }, color: '#1A5C5C' },
      { type: 'capsule', position: { x: 2, y: 1, z: 0 }, color: '#1A5C5C' },

      // === GLOWING INTERIOR ===
      { type: 'sphere', position: { x: 1, y: 1, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 4 } },

      // === MEMBRANE SUPPORTS ===
      { type: 'pipe', position: { x: 0, y: 0, z: 0 }, color: '#2F4F4F' },
      { type: 'pipe', position: { x: 2, y: 0, z: 0 }, color: '#2F4F4F' },
      { type: 'pipe', position: { x: 0, y: 1, z: 0 }, color: '#2F4F4F' },
      { type: 'pipe', position: { x: 2, y: 1, z: 0 }, color: '#2F4F4F' },

      // === NUTRIENT TENDRILS ===
      { type: 'pipeY', position: { x: 0, y: 0, z: 0 }, color: '#0D4D4D' },
      { type: 'pipeY', position: { x: 2, y: 0, z: 0 }, color: '#0D4D4D' },

      // === GROWTH NODES ===
      { type: 'crystal', position: { x: 0, y: 2, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 0.8, radius: 2 } },
      { type: 'crystal', position: { x: 1, y: 2, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 0.8, radius: 2 } },
      { type: 'crystal', position: { x: 2, y: 2, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 0.8, radius: 2 } },
    ]
  },

  // Scout Wisp - Small alien unit
  scoutWisp: {
    name: 'Scout Wisp',
    category: 'alien',
    description: 'Tiny floating bio-mechanical scout with energy trail',
    blocks: [
      // === CORE BODY ===
      { type: 'sphere', position: { x: 0, y: 1, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 2.0, radius: 3 } },

      // === SENSOR ARRAY ===
      { type: 'crystal', position: { x: 0, y: 2, z: 0 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 2 } },

      // === PROPULSION TENDRILS ===
      { type: 'pipe', position: { x: 1, y: 1, z: 0 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: -1, y: 1, z: 0 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 0, y: 1, z: 1 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 0, y: 1, z: -1 }, color: '#1A5C5C' },

      // === BASE ANCHOR ===
      { type: 'prism', position: { x: 0, y: 0, z: 0 }, color: '#0D4D4D' },
    ]
  },

  // Sentinel - Defensive unit
  sentinel: {
    name: 'Sentinel',
    category: 'alien',
    description: 'Bio-mechanical guardian with armored plating and weapon nodes',
    blocks: [
      // === ARMORED BASE ===
      { type: 'cube', position: { x: 0, y: 0, z: 0 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 1, y: 0, z: 0 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 0, y: 0, z: 1 }, color: '#2F4F4F' },
      { type: 'cube', position: { x: 1, y: 0, z: 1 }, color: '#2F4F4F' },

      // === ORGANIC CORE ===
      { type: 'sphere', position: { x: 0, y: 1, z: 0 }, color: '#1A5C5C' },
      { type: 'sphere', position: { x: 1, y: 1, z: 0 }, color: '#1A5C5C' },

      // === SENSOR EYE ===
      { type: 'sphere', position: { x: 0, y: 2, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.8, radius: 4 } },

      // === WEAPON EMITTERS ===
      { type: 'crystal', position: { x: -1, y: 1, z: 0 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 2 } },
      { type: 'crystal', position: { x: 2, y: 1, z: 0 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 1.2, radius: 2 } },

      // === ARMOR PLATING ===
      { type: 'wedge', position: { x: 0, y: 1, z: -1 }, color: '#0D4D4D' },
      { type: 'wedge', position: { x: 1, y: 1, z: 2 }, color: '#0D4D4D' },

      // === SUPPORT LEGS ===
      { type: 'pipe', position: { x: -1, y: 0, z: 0 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 2, y: 0, z: 0 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 0, y: 0, z: -1 }, color: '#1A5C5C' },
      { type: 'pipe', position: { x: 1, y: 0, z: 2 }, color: '#1A5C5C' },
    ]
  },

  // Construct - Worker/builder unit
  construct: {
    name: 'Construct',
    category: 'alien',
    description: 'Bio-mechanical worker with manipulator appendages',
    blocks: [
      // === CENTRAL BODY ===
      { type: 'cylinder', position: { x: 0, y: 1, z: 0 }, color: '#1A5C5C' },

      // === PROCESSOR NODE ===
      { type: 'cube', position: { x: 0, y: 2, z: 0 }, color: '#2F4F4F' },
      { type: 'crystal', position: { x: 0, y: 3, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 1.0, radius: 2 } },

      // === MANIPULATOR ARMS ===
      { type: 'pipe', position: { x: 1, y: 1, z: 0 }, color: '#0D4D4D' },
      { type: 'prism', position: { x: 2, y: 1, z: 0 }, color: '#2F4F4F' },
      { type: 'pipe', position: { x: -1, y: 1, z: 0 }, color: '#0D4D4D' },
      { type: 'prism', position: { x: -2, y: 1, z: 0 }, color: '#2F4F4F' },

      // === TOOL NODES (Glowing) ===
      { type: 'sphere', position: { x: 2, y: 1, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 0.8, radius: 1 } },
      { type: 'sphere', position: { x: -2, y: 1, z: 0 }, color: '#00CED1', emissive: { enabled: true, color: '#00FFFF', intensity: 0.8, radius: 1 } },

      // === MOBILITY BASE ===
      { type: 'torus', position: { x: 0, y: 0, z: 0 }, color: '#0D4D4D' },
      { type: 'sphere', position: { x: 0, y: 0, z: 0 }, color: '#1A5C5C' },
    ]
  },

  // =====================
  // AMMO FACTORY
  // =====================
  ammoFactoryHall: {
    name: 'Ammo Factory Hall',
    category: 'ammo',
    description: 'Industrial ammunition production hall with assembly lines, presses, robotic arms and storage',
    blocks: [
      // === FOUNDATION & CONCRETE FLOOR ===
      ...makeFloor(0, 0, 0, 12, 9, '#4A4A4A'),
      // Drainage grates
      { type: 'grate', position: { x: 5, y: 0, z: 4 }, color: '#2A2A2A' },
      { type: 'grate', position: { x: 6, y: 0, z: 4 }, color: '#2A2A2A' },
      // Yellow safety lines
      { type: 'panel', position: { x: 1, y: 0, z: 1 }, color: '#FFD700' },
      { type: 'panel', position: { x: 10, y: 0, z: 1 }, color: '#FFD700' },
      { type: 'panel', position: { x: 1, y: 0, z: 7 }, color: '#FFD700' },
      { type: 'panel', position: { x: 10, y: 0, z: 7 }, color: '#FFD700' },

      // === STEEL FRAME WALLS (corrugated) ===
      ...makeWallX(0, 1, 0, 12, 4, '#5A6678'),
      ...makeWallX(0, 1, 8, 12, 4, '#5A6678'),
      ...makeWallZ(0, 1, 1, 7, 4, '#5A6678'),
      ...makeWallZ(11, 1, 1, 7, 4, '#5A6678'),

      // === ROOF ===
      ...makeFloor(0, 5, 0, 12, 9, '#3F3F3F'),
      // Skylights
      { type: 'panel', position: { x: 3, y: 5, z: 4 }, color: '#87CEEB' },
      { type: 'panel', position: { x: 5, y: 5, z: 4 }, color: '#87CEEB' },
      { type: 'panel', position: { x: 7, y: 5, z: 4 }, color: '#87CEEB' },
      { type: 'panel', position: { x: 9, y: 5, z: 4 }, color: '#87CEEB' },

      // === STRUCTURAL I-BEAMS (column grid) ===
      { type: 'iBeam', position: { x: 0, y: 1, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 0, y: 2, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 0, y: 3, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 0, y: 4, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 11, y: 1, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 11, y: 2, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 11, y: 3, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 11, y: 4, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 0, y: 1, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 0, y: 2, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 0, y: 3, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 0, y: 4, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 11, y: 1, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 11, y: 2, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 11, y: 3, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 11, y: 4, z: 8 }, color: '#8B0000' },
      // Mid columns
      { type: 'iBeam', position: { x: 5, y: 1, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 2, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 3, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 4, z: 0 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 1, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 2, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 3, z: 8 }, color: '#8B0000' },
      { type: 'iBeam', position: { x: 5, y: 4, z: 8 }, color: '#8B0000' },

      // === LOADING BAY DOOR ===
      { type: 'doorFrame', position: { x: 5, y: 1, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 6, y: 1, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 5, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 6, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 5, y: 3, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 6, y: 3, z: 0 }, color: '#FFD700' },

      // === INDUSTRIAL WINDOWS (high) ===
      { type: 'windowFrame', position: { x: 2, y: 3, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 9, y: 3, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 2, y: 3, z: 8 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 9, y: 3, z: 8 }, color: '#4682B4' },

      // === ASSEMBLY LINE 1 (bullet production) ===
      // Stamper press at start
      { type: 'stamperPress', position: { x: 1, y: 1, z: 2 }, color: '#3A3A3A' },
      // Conveyor flowing right with cartridges
      { type: 'conveyorAmmo', position: { x: 2, y: 1, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 3, y: 1, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 4, y: 1, z: 2 }, color: '#2A2A2A' },
      // Robotic arm picking
      { type: 'assemblyArm', position: { x: 3, y: 2, z: 2 }, color: '#FFA500' },
      // More conveyor
      { type: 'conveyor', position: { x: 5, y: 1, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 6, y: 1, z: 2 }, color: '#2A2A2A' },
      // Output crate at end
      { type: 'cartridgeBox', position: { x: 7, y: 1, z: 2 }, color: '#8B4513' },
      { type: 'ammoCrate', position: { x: 8, y: 1, z: 2 }, color: '#556B2F' },
      // Hopper feeding the line from above
      { type: 'hopper', position: { x: 1, y: 3, z: 2 }, color: '#606060' },
      { type: 'pipeY', position: { x: 1, y: 2, z: 2 }, color: '#808080' },

      // === ASSEMBLY LINE 2 (shell casing forming) ===
      { type: 'stamperPress', position: { x: 1, y: 1, z: 6 }, color: '#3A3A3A' },
      { type: 'conveyor', position: { x: 2, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'shellCasing', position: { x: 2, y: 2, z: 6 }, color: '#DAA520' },
      { type: 'conveyor', position: { x: 3, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'shellCasing', position: { x: 3, y: 2, z: 6 }, color: '#DAA520' },
      { type: 'conveyor', position: { x: 4, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'assemblyArm', position: { x: 4, y: 2, z: 6 }, color: '#FFA500' },
      { type: 'conveyor', position: { x: 5, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 6, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'cartridgeBox', position: { x: 7, y: 1, z: 6 }, color: '#8B4513' },
      { type: 'ammoCrate', position: { x: 8, y: 1, z: 6 }, color: '#556B2F' },

      // === STORAGE / FINISHED GOODS (right side) ===
      { type: 'pallet', position: { x: 9, y: 1, z: 2 }, color: '#A0522D' },
      { type: 'ammoCrate', position: { x: 9, y: 1, z: 3 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 9, y: 2, z: 3 }, color: '#556B2F' },
      { type: 'ammoCan', position: { x: 9, y: 1, z: 4 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 9, y: 1, z: 5 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 9, y: 2, z: 4 }, color: '#3F4A2A' },
      { type: 'pallet', position: { x: 9, y: 1, z: 6 }, color: '#A0522D' },
      { type: 'ammoCrate', position: { x: 9, y: 2, z: 6 }, color: '#556B2F' },

      // === CONTROL PANELS along walls ===
      { type: 'controlPanel', position: { x: 4, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'controlPanel', position: { x: 7, y: 1, z: 1 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 0, y: 3, z: 4 }, color: '#1A1A1A' },

      // === HAZARD SIGNAGE ===
      { type: 'hazardSign', position: { x: 0, y: 1, z: 4 }, color: '#FFD700' },
      { type: 'hazardSign', position: { x: 11, y: 1, z: 4 }, color: '#FFD700' },
      { type: 'sign', position: { x: 5, y: 4, z: 1 }, color: '#FF4500' },

      // === CATWALK overhead ===
      { type: 'catwalk', position: { x: 2, y: 4, z: 4 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 3, y: 4, z: 4 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 4, y: 4, z: 4 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 5, y: 4, z: 4 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 6, y: 4, z: 4 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 7, y: 4, z: 4 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 8, y: 4, z: 4 }, color: '#3A3A3A' },
      ...makeRow(2, 5, 4, 7, 'X', 'railing', '#505050'),

      // === DUCTING along ceiling ===
      ...makeRow(0, 4, 0, 12, 'X', 'ductX', '#909090'),
      ...makeRow(0, 4, 8, 12, 'X', 'ductX', '#909090'),

      // === LIGHTING ===
      { type: 'lightFixture', position: { x: 2, y: 4, z: 2 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },
      { type: 'lightFixture', position: { x: 6, y: 4, z: 2 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },
      { type: 'lightFixture', position: { x: 9, y: 4, z: 2 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },
      { type: 'lightFixture', position: { x: 2, y: 4, z: 6 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },
      { type: 'lightFixture', position: { x: 6, y: 4, z: 6 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },
      { type: 'lightFixture', position: { x: 9, y: 4, z: 6 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },

      // === FANS for ventilation ===
      { type: 'industrialFan', position: { x: 0, y: 3, z: 2 }, color: '#404040' },
      { type: 'industrialFan', position: { x: 0, y: 3, z: 6 }, color: '#404040' },

      // === FUSE BOX ===
      { type: 'fuseBox', position: { x: 11, y: 1, z: 2 }, color: '#404040' },
      { type: 'powerBox', position: { x: 11, y: 1, z: 6 }, color: '#2F4F4F' },

      // === CHIMNEY / EXHAUST ===
      { type: 'chimney', position: { x: 1, y: 5, z: 1 }, color: '#3A3A3A' },
      { type: 'chimney', position: { x: 1, y: 6, z: 1 }, color: '#3A3A3A' },
      { type: 'chimney', position: { x: 1, y: 7, z: 1 }, color: '#2A2A2A' },

      // === ROOFTOP TANKS (cooling/water) ===
      { type: 'tank', position: { x: 9, y: 5, z: 1 }, color: '#A8B8C8' },
      { type: 'tank', position: { x: 9, y: 6, z: 1 }, color: '#A8B8C8' },
      { type: 'pipeY', position: { x: 9, y: 5, z: 7 }, color: '#909090' },
    ]
  },

  assemblyLine: {
    name: 'Ammo Assembly Line',
    category: 'ammo',
    description: 'Compact bullet production line with stamper, robotic arm and conveyor',
    blocks: [
      // === FLOOR ===
      ...makeFloor(0, 0, 0, 9, 4, '#4A4A4A'),
      // Yellow line
      { type: 'panel', position: { x: 1, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'panel', position: { x: 7, y: 0, z: 0 }, color: '#FFD700' },

      // === STATION 1: BRASS HOPPER + STAMPER ===
      { type: 'pillar', position: { x: 1, y: 1, z: 1 }, color: '#505050' },
      { type: 'pillar', position: { x: 1, y: 2, z: 1 }, color: '#505050' },
      { type: 'hopper', position: { x: 1, y: 3, z: 1 }, color: '#707070' },
      { type: 'shellCasing', position: { x: 1, y: 4, z: 1 }, color: '#DAA520' },
      { type: 'stamperPress', position: { x: 1, y: 1, z: 2 }, color: '#3A3A3A' },
      { type: 'pipeY', position: { x: 1, y: 2, z: 2 }, color: '#808080' },

      // === CONVEYOR DOWN THE LINE ===
      { type: 'conveyorAmmo', position: { x: 2, y: 1, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 3, y: 1, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 4, y: 1, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 5, y: 1, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 6, y: 1, z: 2 }, color: '#2A2A2A' },

      // === STATION 2: ROBOTIC ARM (powder filling) ===
      { type: 'pillar', position: { x: 3, y: 1, z: 3 }, color: '#505050' },
      { type: 'assemblyArm', position: { x: 3, y: 2, z: 2 }, color: '#FFA500' },
      // Powder source
      { type: 'gunpowderBarrel', position: { x: 3, y: 1, z: 3 }, color: '#1C1C1C' },
      { type: 'pipeY', position: { x: 3, y: 2, z: 3 }, color: '#808080' },

      // === STATION 3: PRIMER INSERT ===
      { type: 'primerBox', position: { x: 5, y: 1, z: 3 }, color: '#8B4513' },
      { type: 'assemblyArm', position: { x: 5, y: 2, z: 2 }, color: '#FFA500' },

      // === STATION 4: PACKAGING ===
      { type: 'cartridgeBox', position: { x: 6, y: 2, z: 2 }, color: '#8B4513' },
      { type: 'ammoCrate', position: { x: 7, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 7, y: 2, z: 2 }, color: '#556B2F' },
      { type: 'pallet', position: { x: 8, y: 1, z: 2 }, color: '#A0522D' },
      { type: 'ammoCan', position: { x: 8, y: 1, z: 1 }, color: '#3F4A2A' },

      // === CONTROL PANEL ===
      { type: 'controlPanel', position: { x: 4, y: 1, z: 0 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 5, y: 1, z: 0 }, color: '#1A1A1A' },

      // === SAFETY ===
      { type: 'hazardSign', position: { x: 0, y: 1, z: 2 }, color: '#FFD700' },
      { type: 'fuseBox', position: { x: 8, y: 1, z: 0 }, color: '#404040' },
      { type: 'cableY', position: { x: 8, y: 2, z: 0 }, color: '#1A1A1A' },
      ...makeRow(2, 3, 0, 6, 'X', 'cableX', '#1A1A1A'),
      ...makeRow(2, 3, 0, 6, 'X', 'beamX', '#404040'),

      // === LIGHTING ===
      { type: 'lightFixture', position: { x: 2, y: 3, z: 2 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.6, radius: 4 } },
      { type: 'lightFixture', position: { x: 5, y: 3, z: 2 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.6, radius: 4 } },

      // === SCRAP CASING BIN ===
      { type: 'bin', position: { x: 0, y: 1, z: 3 }, color: '#5A5A5A' },
      { type: 'shellCasing', position: { x: 0, y: 2, z: 3 }, color: '#B8860B' },
    ]
  },

  ammoStorageBunker: {
    name: 'Ammo Storage Bunker',
    category: 'ammo',
    description: 'Reinforced concrete bunker with stacks of ammo crates and ammo cans',
    blocks: [
      // === REINFORCED FOUNDATION ===
      ...makeFloor(0, 0, 0, 9, 7, '#5A5A5A'),

      // === THICK CONCRETE WALLS ===
      ...makeWallX(0, 1, 0, 9, 3, '#707070'),
      ...makeWallX(0, 1, 6, 9, 3, '#707070'),
      ...makeWallZ(0, 1, 1, 5, 3, '#707070'),
      ...makeWallZ(8, 1, 1, 5, 3, '#707070'),
      // Reinforcement (inner liner)
      ...makeWallX(0, 1, 1, 9, 3, '#5A5A5A'),
      ...makeWallX(0, 1, 5, 9, 3, '#5A5A5A'),

      // === REINFORCED ROOF (3 layers) ===
      ...makeFloor(0, 4, 0, 9, 7, '#606060'),
      ...makeFloor(0, 5, 0, 9, 7, '#4A4A4A'),

      // === BLAST DOOR ENTRY ===
      { type: 'arch', position: { x: 4, y: 1, z: 0 }, color: '#3A3A3A' },
      { type: 'doorFrame', position: { x: 4, y: 1, z: 0 }, color: '#7A2A2A' },
      { type: 'doorFrame', position: { x: 4, y: 2, z: 0 }, color: '#7A2A2A' },

      // === STACKED AMMO CRATES (rows) ===
      // Row 1
      { type: 'ammoCrate', position: { x: 1, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 2, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 3, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 1, y: 2, z: 2 }, color: '#4F5F40' },
      { type: 'ammoCrate', position: { x: 2, y: 2, z: 2 }, color: '#4F5F40' },
      { type: 'ammoCrate', position: { x: 3, y: 2, z: 2 }, color: '#4F5F40' },
      // Row 2
      { type: 'ammoCrate', position: { x: 1, y: 1, z: 3 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 2, y: 1, z: 3 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 3, y: 1, z: 3 }, color: '#556B2F' },

      // === AMMO CANS STACKED ===
      { type: 'pallet', position: { x: 5, y: 1, z: 2 }, color: '#A0522D' },
      { type: 'ammoCan', position: { x: 5, y: 1, z: 2 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 5, y: 1, z: 3 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 6, y: 1, z: 2 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 6, y: 1, z: 3 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 5, y: 2, z: 2 }, color: '#4F5F40' },
      { type: 'ammoCan', position: { x: 5, y: 2, z: 3 }, color: '#4F5F40' },
      { type: 'ammoCan', position: { x: 6, y: 2, z: 2 }, color: '#4F5F40' },
      { type: 'ammoCan', position: { x: 6, y: 2, z: 3 }, color: '#4F5F40' },

      // === ARTILLERY SHELL RACK ===
      { type: 'pallet', position: { x: 1, y: 1, z: 4 }, color: '#A0522D' },
      { type: 'artilleryShell', position: { x: 1, y: 1, z: 4 }, color: '#4F5F40' },
      { type: 'artilleryShell', position: { x: 2, y: 1, z: 4 }, color: '#4F5F40' },
      { type: 'artilleryShell', position: { x: 3, y: 1, z: 4 }, color: '#4F5F40' },

      // === ROCKETS / MISSILES ===
      { type: 'rocketShell', position: { x: 5, y: 1, z: 4 }, color: '#3F3F3F' },
      { type: 'rocketShell', position: { x: 6, y: 1, z: 4 }, color: '#3F3F3F' },

      // === GRENADE BOX ===
      { type: 'crateOpen', position: { x: 7, y: 1, z: 4 }, color: '#556B2F' },
      { type: 'grenade', position: { x: 7, y: 2, z: 4 }, color: '#3D4D2D' },

      // === SHELVING ===
      { type: 'shelfUnit', position: { x: 7, y: 1, z: 2 }, color: '#404040' },
      { type: 'cartridgeBox', position: { x: 7, y: 2, z: 2 }, color: '#8B4513' },
      { type: 'shelfUnit', position: { x: 7, y: 1, z: 3 }, color: '#404040' },
      { type: 'cartridgeBox', position: { x: 7, y: 2, z: 3 }, color: '#8B4513' },

      // === HAZARD SIGNS ===
      { type: 'hazardSign', position: { x: 0, y: 1, z: 3 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 8, y: 1, z: 3 }, color: '#FF4500' },
      { type: 'sign', position: { x: 3, y: 3, z: 0 }, color: '#FFD700' },

      // === LIGHTING ===
      { type: 'bulb', position: { x: 2, y: 3, z: 3 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.7, radius: 4 } },
      { type: 'bulb', position: { x: 5, y: 3, z: 3 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.7, radius: 4 } },
      { type: 'bulb', position: { x: 7, y: 3, z: 3 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.7, radius: 4 } },

      // === SANDBAGS OUTSIDE ENTRY ===
      { type: 'sack', position: { x: 3, y: 0, z: -1 }, color: '#8B7355' },
      { type: 'sack', position: { x: 4, y: 0, z: -1 }, color: '#8B7355' },
      { type: 'sack', position: { x: 5, y: 0, z: -1 }, color: '#8B7355' },
      { type: 'sack', position: { x: 3, y: 1, z: -1 }, color: '#9C8466' },
      { type: 'sack', position: { x: 5, y: 1, z: -1 }, color: '#9C8466' },

      // === SECURITY CAMERA ===
      { type: 'spotlight', position: { x: 0, y: 4, z: 0 }, color: '#3A3A3A' },
      { type: 'spotlight', position: { x: 8, y: 4, z: 0 }, color: '#3A3A3A' },

      // === CABLES along ceiling ===
      ...makeRow(1, 3, 1, 7, 'X', 'cableX', '#1A1A1A'),
      ...makeRow(1, 3, 5, 7, 'X', 'cableX', '#1A1A1A'),
    ]
  },

  gunpowderDepot: {
    name: 'Gunpowder Depot',
    category: 'ammo',
    description: 'Outdoor hazard yard with rows of gunpowder barrels and explosives',
    blocks: [
      // === CONCRETE PAD ===
      ...makeFloor(0, 0, 0, 10, 8, '#7A7A7A'),
      // Hazard stripe pattern
      { type: 'panel', position: { x: 0, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'panel', position: { x: 1, y: 0, z: 0 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 2, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'panel', position: { x: 3, y: 0, z: 0 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 4, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'panel', position: { x: 5, y: 0, z: 0 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 6, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'panel', position: { x: 7, y: 0, z: 0 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 8, y: 0, z: 0 }, color: '#FFD700' },
      { type: 'panel', position: { x: 9, y: 0, z: 0 }, color: '#1A1A1A' },

      // === FENCED PERIMETER ===
      ...makeRow(0, 1, 7, 10, 'X', 'fence', '#3A3A3A'),
      ...makeRow(0, 1, 0, 8, 'Z', 'fenceZ', '#3A3A3A'),
      ...makeRow(9, 1, 0, 8, 'Z', 'fenceZ', '#3A3A3A'),
      // Gate
      { type: 'gateDouble', position: { x: 4, y: 1, z: 7 }, color: '#5A2A2A' },
      { type: 'gateDouble', position: { x: 5, y: 1, z: 7 }, color: '#5A2A2A' },

      // === ROW 1: GUNPOWDER BARRELS (3 across) ===
      { type: 'gunpowderBarrel', position: { x: 1, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 2, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 3, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 4, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 5, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 6, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 7, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 8, y: 1, z: 2 }, color: '#1C1C1C' },

      // === ROW 2: EXPLOSIVE BARRELS ===
      { type: 'explosiveBarrel', position: { x: 1, y: 1, z: 4 }, color: '#C70039' },
      { type: 'explosiveBarrel', position: { x: 2, y: 1, z: 4 }, color: '#C70039' },
      { type: 'explosiveBarrel', position: { x: 3, y: 1, z: 4 }, color: '#C70039' },
      { type: 'explosiveBarrel', position: { x: 6, y: 1, z: 4 }, color: '#C70039' },
      { type: 'explosiveBarrel', position: { x: 7, y: 1, z: 4 }, color: '#C70039' },
      { type: 'explosiveBarrel', position: { x: 8, y: 1, z: 4 }, color: '#C70039' },

      // === ROW 3: STACKED BARRELS ===
      { type: 'gunpowderBarrel', position: { x: 1, y: 1, z: 6 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 1, y: 2, z: 6 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 2, y: 1, z: 6 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 2, y: 2, z: 6 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 7, y: 1, z: 6 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 7, y: 2, z: 6 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 8, y: 1, z: 6 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 8, y: 2, z: 6 }, color: '#1C1C1C' },

      // === GUARD TOWER ===
      { type: 'pillar', position: { x: 0, y: 1, z: 7 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 0, y: 2, z: 7 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 0, y: 3, z: 7 }, color: '#5A5A5A' },
      { type: 'platform', position: { x: 0, y: 4, z: 7 }, color: '#3A3A3A' },
      { type: 'spotlight', position: { x: 0, y: 4, z: 7 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.2, radius: 8 } },
      { type: 'pillar', position: { x: 9, y: 1, z: 7 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 9, y: 2, z: 7 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 9, y: 3, z: 7 }, color: '#5A5A5A' },
      { type: 'platform', position: { x: 9, y: 4, z: 7 }, color: '#3A3A3A' },
      { type: 'spotlight', position: { x: 9, y: 4, z: 7 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.2, radius: 8 } },

      // === HAZARD SIGNS ===
      { type: 'hazardSign', position: { x: 2, y: 1, z: 7 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 7, y: 1, z: 7 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 4, y: 1, z: 1 }, color: '#FF4500' },

      // === FIRE EXTINGUISHER STATIONS (use cylinder + post) ===
      { type: 'pillar2', position: { x: 0, y: 1, z: 3 }, color: '#3A3A3A' },
      { type: 'cylinder', position: { x: 0, y: 1, z: 3 }, color: '#C70039' },
      { type: 'pillar2', position: { x: 9, y: 1, z: 3 }, color: '#3A3A3A' },
      { type: 'cylinder', position: { x: 9, y: 1, z: 3 }, color: '#C70039' },

      // === BARRIER POSTS ===
      { type: 'bollard', position: { x: 3, y: 1, z: 1 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 6, y: 1, z: 1 }, color: '#FFD700' },

      // === A SCATTERED GRENADE ON GROUND (as detail) ===
      { type: 'grenade', position: { x: 4, y: 1, z: 5 }, color: '#3D4D2D' },
      { type: 'grenade', position: { x: 5, y: 1, z: 5 }, color: '#3D4D2D' },
    ]
  },

  artilleryAssembly: {
    name: 'Artillery Assembly',
    category: 'ammo',
    description: 'Heavy munitions workshop assembling artillery shells, mortars and rockets',
    blocks: [
      // === FLOOR ===
      ...makeFloor(0, 0, 0, 10, 6, '#4A4A4A'),
      { type: 'grateFloor', position: { x: 4, y: 0, z: 2 }, color: '#2A2A2A' },
      { type: 'grateFloor', position: { x: 5, y: 0, z: 2 }, color: '#2A2A2A' },

      // === BACK WALL ===
      ...makeWallX(0, 1, 0, 10, 4, '#5A6678'),
      // Side walls
      ...makeWallZ(0, 1, 1, 5, 4, '#5A6678'),
      ...makeWallZ(9, 1, 1, 5, 4, '#5A6678'),
      // Roof
      ...makeFloor(0, 5, 0, 10, 6, '#3F3F3F'),

      // === COLUMNS ===
      { type: 'iBeam', position: { x: 0, y: 1, z: 0 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 2, z: 0 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 3, z: 0 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 4, z: 0 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 9, y: 1, z: 0 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 9, y: 2, z: 0 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 9, y: 3, z: 0 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 9, y: 4, z: 0 }, color: '#7A2A2A' },

      // === ARTILLERY SHELL RACK (back row) ===
      { type: 'platform', position: { x: 1, y: 1, z: 1 }, color: '#3A3A3A' },
      { type: 'platform', position: { x: 2, y: 1, z: 1 }, color: '#3A3A3A' },
      { type: 'platform', position: { x: 3, y: 1, z: 1 }, color: '#3A3A3A' },
      { type: 'platform', position: { x: 4, y: 1, z: 1 }, color: '#3A3A3A' },
      { type: 'artilleryShell', position: { x: 1, y: 1, z: 1 }, color: '#4F5F40' },
      { type: 'artilleryShell', position: { x: 2, y: 1, z: 1 }, color: '#4F5F40' },
      { type: 'artilleryShell', position: { x: 3, y: 1, z: 1 }, color: '#4F5F40' },
      { type: 'artilleryShell', position: { x: 4, y: 1, z: 1 }, color: '#4F5F40' },

      // === MORTAR SHELL ROW ===
      { type: 'platform', position: { x: 5, y: 1, z: 1 }, color: '#3A3A3A' },
      { type: 'platform', position: { x: 6, y: 1, z: 1 }, color: '#3A3A3A' },
      { type: 'platform', position: { x: 7, y: 1, z: 1 }, color: '#3A3A3A' },
      { type: 'mortarShell', position: { x: 5, y: 1, z: 1 }, color: '#3D4D2D' },
      { type: 'mortarShell', position: { x: 6, y: 1, z: 1 }, color: '#3D4D2D' },
      { type: 'mortarShell', position: { x: 7, y: 1, z: 1 }, color: '#3D4D2D' },

      // === ROCKET ASSEMBLY (vertical mount) ===
      { type: 'rocketShell', position: { x: 8, y: 1, z: 1 }, color: '#3F3F3F' },
      { type: 'rocketShell', position: { x: 8, y: 2, z: 1 }, color: '#3F3F3F' },

      // === ASSEMBLY BENCH (long table) ===
      ...makeRow(1, 1, 3, 7, 'X', 'table', '#4A4A4A'),
      // Tools / pieces on bench
      { type: 'shellCasing', position: { x: 1, y: 2, z: 3 }, color: '#DAA520' },
      { type: 'primerBox', position: { x: 2, y: 2, z: 3 }, color: '#8B4513' },
      { type: 'mortarShell', position: { x: 4, y: 2, z: 3 }, color: '#3D4D2D' },
      { type: 'valve', position: { x: 5, y: 2, z: 3 }, color: '#B22222' },
      { type: 'cartridgeBox', position: { x: 6, y: 2, z: 3 }, color: '#8B4513' },

      // === ROBOTIC ARMS ===
      { type: 'assemblyArm', position: { x: 2, y: 1, z: 4 }, color: '#FFA500' },
      { type: 'assemblyArm', position: { x: 5, y: 1, z: 4 }, color: '#FFA500' },

      // === STAMPER PRESS (shell forming) ===
      { type: 'stamperPress', position: { x: 7, y: 1, z: 4 }, color: '#3A3A3A' },

      // === GUNPOWDER BARRELS (propellant) ===
      { type: 'gunpowderBarrel', position: { x: 1, y: 1, z: 4 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 1, y: 1, z: 5 }, color: '#1C1C1C' },

      // === CONTROL PANEL & MONITORS ===
      { type: 'controlPanel', position: { x: 8, y: 1, z: 4 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 8, y: 1, z: 5 }, color: '#1A1A1A' },

      // === OVERHEAD CRANE (using chains and beam) ===
      ...makeRow(2, 4, 2, 6, 'X', 'iBeam', '#404040'),
      { type: 'chain', position: { x: 4, y: 3, z: 2 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 4, y: 2, z: 2 }, color: '#5A5A5A' },

      // === HAZARD ZONE ===
      { type: 'hazardSign', position: { x: 0, y: 1, z: 3 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 9, y: 1, z: 3 }, color: '#FF4500' },

      // === LIGHTING ===
      { type: 'lightFixture', position: { x: 2, y: 4, z: 2 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },
      { type: 'lightFixture', position: { x: 5, y: 4, z: 2 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },
      { type: 'lightFixture', position: { x: 7, y: 4, z: 2 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.8, radius: 5 } },

      // === CABLES ===
      ...makeRow(1, 3, 0, 8, 'X', 'cableX', '#1A1A1A'),

      // === FAN ===
      { type: 'industrialFan', position: { x: 0, y: 3, z: 4 }, color: '#404040' },
    ]
  },

  shippingDock: {
    name: 'Ammo Shipping Dock',
    category: 'ammo',
    description: 'Loading dock with stacked ammo crates, conveyors, and forklift area',
    blocks: [
      // === RAISED DOCK PLATFORM ===
      ...makeFloor(0, 0, 0, 10, 4, '#5A5A5A'),
      ...makeFloor(0, 1, 0, 10, 4, '#6A6A6A'),
      // Edge curb (yellow)
      ...makeRow(0, 2, 0, 10, 'X', 'step', '#FFD700'),

      // === BACK WAREHOUSE WALL ===
      ...makeWallX(0, 2, 4, 10, 3, '#5A6678'),
      // Roof overhang
      ...makeFloor(0, 5, 0, 10, 5, '#3A3A3A'),

      // === LOADING DOORS ===
      { type: 'doorFrame', position: { x: 2, y: 2, z: 4 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 3, y: 2, z: 4 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 2, y: 3, z: 4 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 3, y: 3, z: 4 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 6, y: 2, z: 4 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 7, y: 2, z: 4 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 6, y: 3, z: 4 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 7, y: 3, z: 4 }, color: '#FFD700' },

      // === STACKS OF AMMO CRATES ===
      // Stack 1 (3 high pyramid)
      { type: 'pallet', position: { x: 0, y: 2, z: 0 }, color: '#A0522D' },
      { type: 'ammoCrate', position: { x: 0, y: 2, z: 0 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 0, y: 2, z: 1 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 0, y: 3, z: 0 }, color: '#4F5F40' },
      { type: 'ammoCrate', position: { x: 0, y: 3, z: 1 }, color: '#4F5F40' },
      { type: 'ammoCrate', position: { x: 0, y: 4, z: 0 }, color: '#4F5F40' },

      // Stack 2 (mixed)
      { type: 'pallet', position: { x: 4, y: 2, z: 0 }, color: '#A0522D' },
      { type: 'ammoCan', position: { x: 4, y: 2, z: 0 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 4, y: 2, z: 1 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 5, y: 2, z: 0 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 5, y: 2, z: 1 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 4, y: 3, z: 0 }, color: '#4F5F40' },
      { type: 'ammoCan', position: { x: 4, y: 3, z: 1 }, color: '#4F5F40' },
      { type: 'ammoCan', position: { x: 5, y: 3, z: 0 }, color: '#4F5F40' },
      { type: 'cartridgeBox', position: { x: 5, y: 3, z: 1 }, color: '#8B4513' },

      // Stack 3 (large crate stack)
      { type: 'pallet', position: { x: 8, y: 2, z: 0 }, color: '#A0522D' },
      { type: 'crateLarge', position: { x: 8, y: 2, z: 0 }, color: '#556B2F' },
      { type: 'crateLarge', position: { x: 8, y: 2, z: 1 }, color: '#556B2F' },
      { type: 'crateLarge', position: { x: 8, y: 3, z: 0 }, color: '#4F5F40' },
      { type: 'crateLarge', position: { x: 9, y: 2, z: 0 }, color: '#556B2F' },
      { type: 'crateLarge', position: { x: 9, y: 2, z: 1 }, color: '#556B2F' },

      // === CONVEYOR INTO WAREHOUSE ===
      { type: 'conveyor', position: { x: 2, y: 2, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 2, y: 2, z: 3 }, color: '#2A2A2A' },
      { type: 'cartridgeBox', position: { x: 2, y: 3, z: 3 }, color: '#8B4513' },
      { type: 'conveyor', position: { x: 6, y: 2, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 6, y: 2, z: 3 }, color: '#2A2A2A' },
      { type: 'ammoCrate', position: { x: 6, y: 3, z: 3 }, color: '#556B2F' },

      // === BARRIERS / FORKLIFT LANE ===
      { type: 'barrier', position: { x: 1, y: 2, z: 2 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 1, y: 2, z: 3 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 5, y: 2, z: 2 }, color: '#FFD700' },
      { type: 'barrier', position: { x: 5, y: 2, z: 3 }, color: '#FFD700' },

      // === BOLLARDS edge of dock ===
      { type: 'bollard', position: { x: 0, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 5, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 9, y: 2, z: 0 }, color: '#FFD700' },

      // === SIGNAGE ===
      { type: 'sign', position: { x: 0, y: 4, z: 4 }, color: '#FFD700' },
      { type: 'sign', position: { x: 9, y: 4, z: 4 }, color: '#FFD700' },
      { type: 'hazardSign', position: { x: 4, y: 2, z: 0 }, color: '#FF4500' },

      // === DOCK LIGHTING ===
      { type: 'spotlight', position: { x: 0, y: 5, z: 0 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },
      { type: 'spotlight', position: { x: 4, y: 5, z: 0 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },
      { type: 'spotlight', position: { x: 9, y: 5, z: 0 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },

      // === STAIRS DOWN FROM DOCK ===
      { type: 'stairs', position: { x: 4, y: 1, z: -1 }, color: '#5A5A5A' },
      { type: 'stairs', position: { x: 5, y: 1, z: -1 }, color: '#5A5A5A' },
    ]
  },

  munitionsRack: {
    name: 'Munitions Display Rack',
    category: 'ammo',
    description: 'Compact showcase of every munitions block - perfect reference rack',
    blocks: [
      // === FLOOR / BASE ===
      ...makeFloor(0, 0, 0, 8, 3, '#4A4A4A'),

      // === SHELF UNIT ===
      ...makeRow(0, 1, 0, 8, 'X', 'shelfUnit', '#3A3A3A'),
      ...makeRow(0, 1, 2, 8, 'X', 'shelfUnit', '#3A3A3A'),

      // === ROW 1: SMALL ARMS AMMO ===
      { type: 'bullet', position: { x: 0, y: 1, z: 0 }, color: '#DAA520' },
      { type: 'bulletTip', position: { x: 1, y: 1, z: 0 }, color: '#B8860B' },
      { type: 'shellCasing', position: { x: 2, y: 1, z: 0 }, color: '#DAA520' },
      { type: 'cartridgeBox', position: { x: 3, y: 1, z: 0 }, color: '#8B4513' },
      { type: 'magazine', position: { x: 4, y: 1, z: 0 }, color: '#1C1C1C' },
      { type: 'magazineDrum', position: { x: 5, y: 1, z: 0 }, color: '#1C1C1C' },
      { type: 'primerBox', position: { x: 6, y: 1, z: 0 }, color: '#8B4513' },
      { type: 'grenade', position: { x: 7, y: 1, z: 0 }, color: '#3D4D2D' },

      // === ROW 2: STORAGE & EXPLOSIVES ===
      { type: 'ammoCan', position: { x: 0, y: 1, z: 2 }, color: '#3F4A2A' },
      { type: 'ammoCrate', position: { x: 1, y: 1, z: 2 }, color: '#556B2F' },
      { type: 'gunpowderBarrel', position: { x: 2, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'explosiveBarrel', position: { x: 3, y: 1, z: 2 }, color: '#C70039' },
      { type: 'mortarShell', position: { x: 4, y: 1, z: 2 }, color: '#3D4D2D' },
      { type: 'artilleryShell', position: { x: 5, y: 1, z: 2 }, color: '#4F5F40' },
      { type: 'rocketShell', position: { x: 6, y: 1, z: 2 }, color: '#3F3F3F' },
      { type: 'hazardSign', position: { x: 7, y: 1, z: 2 }, color: '#FFD700' },

      // === LABELS (signs above each row) ===
      { type: 'sign', position: { x: 0, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'sign', position: { x: 0, y: 2, z: 2 }, color: '#FF4500' },

      // === LIGHTING ===
      { type: 'lightFixture', position: { x: 3, y: 2, z: 1 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.7, radius: 4 } },
      { type: 'lightFixture', position: { x: 5, y: 2, z: 1 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.7, radius: 4 } },
    ]
  },

  tankFactory: {
    name: 'Tank Factory',
    category: 'ammo',
    description: 'Open-roof tank assembly hall with a large multi-color MBT under construction, gantry chain hoists, and robotic arms',
    blocks: [
      // ====================================================
      // CONCRETE FLOOR (18 wide x 14 deep)
      // ====================================================
      ...makeFloor(0, 0, 0, 18, 14, '#5A5A5A'),
      // Yellow safety stripes around tank work zone
      ...makeRow(2, 0, 2, 14, 'X', 'panel', '#FFD700'),
      ...makeRow(2, 0, 11, 14, 'X', 'panel', '#FFD700'),
      // Drainage grates
      { type: 'grateFloor', position: { x: 8, y: 0, z: 6 }, color: '#2A2A2A' },
      { type: 'grateFloor', position: { x: 9, y: 0, z: 6 }, color: '#2A2A2A' },
      { type: 'grateFloor', position: { x: 8, y: 0, z: 7 }, color: '#2A2A2A' },
      { type: 'grateFloor', position: { x: 9, y: 0, z: 7 }, color: '#2A2A2A' },

      // ====================================================
      // PERIMETER WALLS (no roof, 4 high) - brick + steel
      // ====================================================
      ...makeWallX(0, 1, 0, 18, 4, '#8B6F47'),
      ...makeWallX(0, 1, 13, 18, 4, '#8B6F47'),
      ...makeWallZ(0, 1, 1, 12, 4, '#8B6F47'),
      ...makeWallZ(17, 1, 1, 12, 4, '#8B6F47'),
      // Top trim band of walls (steel)
      ...makeRow(0, 4, 0, 18, 'X', 'cube', '#5A6678'),
      ...makeRow(0, 4, 13, 18, 'X', 'cube', '#5A6678'),
      // Wall windows (factory clerestory)
      { type: 'windowFrame', position: { x: 3, y: 3, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 6, y: 3, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 11, y: 3, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 14, y: 3, z: 0 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 3, y: 3, z: 13 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 6, y: 3, z: 13 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 11, y: 3, z: 13 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 14, y: 3, z: 13 }, color: '#4682B4' },
      // Loading bay doors (large, double)
      { type: 'doorFrame', position: { x: 8, y: 1, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 9, y: 1, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 8, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 9, y: 2, z: 0 }, color: '#FFD700' },
      { type: 'doorFrame', position: { x: 8, y: 3, z: 0 }, color: '#B8860B' },
      { type: 'doorFrame', position: { x: 9, y: 3, z: 0 }, color: '#B8860B' },

      // ====================================================
      // GANTRY CRANE STRUCTURE
      // ====================================================
      // 4 corner support columns (I-beams, full height to wall top)
      { type: 'iBeam', position: { x: 4, y: 1, z: 2 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 4, y: 2, z: 2 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 4, y: 3, z: 2 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 4, y: 4, z: 2 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 1, z: 2 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 2, z: 2 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 3, z: 2 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 4, z: 2 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 4, y: 1, z: 11 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 4, y: 2, z: 11 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 4, y: 3, z: 11 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 4, y: 4, z: 11 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 1, z: 11 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 2, z: 11 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 3, z: 11 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 4, z: 11 }, color: '#7A2A2A' },
      // Horizontal gantry rails (run along X) sitting on top of columns
      ...makeRow(4, 5, 2, 10, 'X', 'beamX', '#404040'),
      ...makeRow(4, 5, 11, 10, 'X', 'beamX', '#404040'),
      // Crossbeam over the tank (runs along Z, connects the two rails)
      ...makeRow(8, 5, 3, 8, 'Z', 'beamZ', '#404040'),
      ...makeRow(11, 5, 3, 8, 'Z', 'beamZ', '#404040'),

      // ====================================================
      // CHAIN HOISTS (factory style, hanging from gantry)
      // ====================================================
      // Main hook over tank turret
      { type: 'chain', position: { x: 8, y: 4, z: 6 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 8, y: 4, z: 7 }, color: '#5A5A5A' },
      { type: 'hopper', position: { x: 8, y: 4, z: 8 }, color: '#404040' },
      // Side chains along front rail
      { type: 'chain', position: { x: 6, y: 4, z: 2 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 6, y: 3, z: 2 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 9, y: 4, z: 2 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 9, y: 3, z: 2 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 12, y: 4, z: 2 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 12, y: 3, z: 2 }, color: '#5A5A5A' },
      // Side chains along back rail
      { type: 'chain', position: { x: 5, y: 4, z: 11 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 5, y: 3, z: 11 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 9, y: 4, z: 11 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 9, y: 3, z: 11 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 12, y: 4, z: 11 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 12, y: 3, z: 11 }, color: '#5A5A5A' },
      // Crossbeam chains
      { type: 'chain', position: { x: 11, y: 4, z: 5 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 11, y: 3, z: 5 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 11, y: 4, z: 9 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 11, y: 3, z: 9 }, color: '#5A5A5A' },

      // ====================================================
      // THE TANK (large MBT, multi-colored)
      // Tank zone: x=4..12, z=4..9, points +X
      // ====================================================
      // --- Track bands (dark, sit on floor) ---
      ...makeRow(4, 1, 4, 9, 'X', 'cube', '#1A1A1A'),
      ...makeRow(4, 1, 9, 9, 'X', 'cube', '#1A1A1A'),
      // Drive sprocket / idler wheels (rounded ends of tracks)
      { type: 'wheel', position: { x: 4, y: 1, z: 4 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 12, y: 1, z: 4 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 4, y: 1, z: 9 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 12, y: 1, z: 9 }, color: '#3A3A3A' },
      // Road wheels (small, between sprockets)
      { type: 'wheel', position: { x: 6, y: 1, z: 4 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 8, y: 1, z: 4 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 10, y: 1, z: 4 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 6, y: 1, z: 9 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 8, y: 1, z: 9 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 10, y: 1, z: 9 }, color: '#3A3A3A' },

      // --- Hull belly (between tracks, dark olive) ---
      ...makeFloor(4, 1, 5, 9, 4, '#2F3F1F'),

      // --- Upper hull (narrower, olive green) ---
      ...makeFloor(5, 2, 5, 7, 4, '#4F5F40'),

      // --- Side fenders (above tracks, slightly different green) ---
      ...makeRow(5, 2, 4, 7, 'X', 'halfZ', '#3D4D2D'),
      ...makeRow(5, 2, 9, 7, 'X', 'halfZ', '#3D4D2D'),

      // --- Sloped front glacis plate (front of tank) ---
      // Note: wedge at x=12 sloping shape adds visual interest
      { type: 'wedge', position: { x: 12, y: 2, z: 5 }, color: '#3D4D2D' },
      { type: 'wedge', position: { x: 12, y: 2, z: 6 }, color: '#3D4D2D' },
      { type: 'wedge', position: { x: 12, y: 2, z: 7 }, color: '#3D4D2D' },
      { type: 'wedge', position: { x: 12, y: 2, z: 8 }, color: '#3D4D2D' },
      // Headlights on front
      { type: 'bulb', position: { x: 12, y: 2, z: 5 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.6, radius: 3 } },
      { type: 'bulb', position: { x: 12, y: 2, z: 8 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.6, radius: 3 } },

      // --- Rear engine deck details ---
      { type: 'vent', position: { x: 5, y: 3, z: 6 }, color: '#3A3A3A' },
      { type: 'vent', position: { x: 5, y: 3, z: 7 }, color: '#3A3A3A' },
      // Exhaust pipe poking out the side
      { type: 'pipeY', position: { x: 5, y: 3, z: 4 }, color: '#2A2A2A' },

      // --- Turret (5 wide x 4 deep, lighter olive) ---
      ...makeFloor(6, 3, 5, 5, 4, '#5A6A45'),

      // --- Turret armor accents (different shade for variety) ---
      { type: 'cube', position: { x: 6, y: 3, z: 5 }, color: '#6A7A55' },
      { type: 'cube', position: { x: 6, y: 3, z: 8 }, color: '#6A7A55' },
      { type: 'cube', position: { x: 10, y: 3, z: 5 }, color: '#6A7A55' },
      { type: 'cube', position: { x: 10, y: 3, z: 8 }, color: '#6A7A55' },

      // --- Turret stowage bins on sides ---
      { type: 'crate', position: { x: 6, y: 3, z: 4 }, color: '#3D4D2D' },
      { type: 'crate', position: { x: 10, y: 3, z: 4 }, color: '#3D4D2D' },
      { type: 'crate', position: { x: 6, y: 3, z: 9 }, color: '#3D4D2D' },
      { type: 'crate', position: { x: 10, y: 3, z: 9 }, color: '#3D4D2D' },

      // --- Commander's cupola (top center of turret) ---
      { type: 'cylinder', position: { x: 8, y: 4, z: 6 }, color: '#3D4D2D' },
      { type: 'dome', position: { x: 8, y: 4, z: 6 }, color: '#2A3A1A' },
      // Hatch
      { type: 'cube', position: { x: 8, y: 4, z: 7 }, color: '#3D4D2D' },
      // Antenna
      { type: 'antenna', position: { x: 8, y: 4, z: 7 }, color: '#1A1A1A' },
      // Loader's hatch
      { type: 'cylinder', position: { x: 9, y: 4, z: 6 }, color: '#3D4D2D' },
      // Searchlight on turret
      { type: 'spotlight', position: { x: 7, y: 4, z: 5 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 0.7, radius: 4 } },
      // Smoke launchers (small tubes on turret front)
      { type: 'pipeY', position: { x: 10, y: 4, z: 5 }, color: '#2A2A2A' },
      { type: 'pipeY', position: { x: 10, y: 4, z: 8 }, color: '#2A2A2A' },

      // --- Mantlet (cannon base, horizontal block at front of turret) ---
      { type: 'cube', position: { x: 11, y: 3, z: 6 }, color: '#3F4A2A' },
      { type: 'cube', position: { x: 11, y: 3, z: 7 }, color: '#3F4A2A' },

      // --- Main cannon barrel (extends forward in +X) ---
      { type: 'pipeX', position: { x: 12, y: 3, z: 6 }, color: '#2A2A2A' },
      { type: 'pipeX', position: { x: 13, y: 3, z: 6 }, color: '#2A2A2A' },
      { type: 'pipeX', position: { x: 14, y: 3, z: 6 }, color: '#2A2A2A' },
      { type: 'pipeX', position: { x: 15, y: 3, z: 6 }, color: '#2A2A2A' },
      // Muzzle brake at the end
      { type: 'octagon', position: { x: 16, y: 3, z: 6 }, color: '#1A1A1A' },
      // Bore evacuator (mid-barrel bulge)
      { type: 'sphere', position: { x: 14, y: 3, z: 6 }, color: '#3A3A3A' },

      // --- Coaxial machine gun (smaller cannon next to main) ---
      { type: 'pipeX', position: { x: 12, y: 3, z: 7 }, color: '#1A1A1A' },
      { type: 'pipeX', position: { x: 13, y: 3, z: 7 }, color: '#1A1A1A' },

      // ====================================================
      // ROBOTIC ARMS WORKING ON THE TANK
      // ====================================================
      { type: 'assemblyArm', position: { x: 3, y: 1, z: 5 }, color: '#FFA500' },
      { type: 'assemblyArm', position: { x: 3, y: 1, z: 8 }, color: '#FFA500' },
      { type: 'assemblyArm', position: { x: 14, y: 1, z: 5 }, color: '#FFA500' },
      { type: 'assemblyArm', position: { x: 14, y: 1, z: 8 }, color: '#FFA500' },
      // Welding sparks (emissive points where arms touch tank)
      { type: 'bulb', position: { x: 4, y: 2, z: 5 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.6, radius: 3 } },
      { type: 'bulb', position: { x: 12, y: 2, z: 8 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.6, radius: 3 } },

      // ====================================================
      // SPARE PARTS / WORKSHOP DETAILS (around tank)
      // ====================================================
      // Spare track section
      { type: 'cube', position: { x: 1, y: 1, z: 4 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 2, y: 1, z: 4 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 3, y: 1, z: 4 }, color: '#1A1A1A' },
      { type: 'wheel', position: { x: 1, y: 1, z: 4 }, color: '#3A3A3A' },
      { type: 'wheel', position: { x: 3, y: 1, z: 4 }, color: '#3A3A3A' },
      // Spare turret being machined (round shape, light olive)
      { type: 'pallet', position: { x: 2, y: 1, z: 7 }, color: '#A0522D' },
      { type: 'octagon', position: { x: 2, y: 1, z: 7 }, color: '#5A6A45' },
      { type: 'cylinder', position: { x: 2, y: 2, z: 7 }, color: '#3D4D2D' },
      // Spare cannon barrel on rack
      { type: 'pallet', position: { x: 14, y: 1, z: 11 }, color: '#A0522D' },
      { type: 'pipeX', position: { x: 14, y: 1, z: 11 }, color: '#2A2A2A' },
      { type: 'pipeX', position: { x: 15, y: 1, z: 11 }, color: '#2A2A2A' },
      { type: 'pipeX', position: { x: 16, y: 1, z: 11 }, color: '#2A2A2A' },
      // Armor plates stacked
      { type: 'pallet', position: { x: 1, y: 1, z: 9 }, color: '#A0522D' },
      { type: 'crateLarge', position: { x: 1, y: 1, z: 9 }, color: '#3F4A2A' },
      { type: 'crateLarge', position: { x: 1, y: 2, z: 9 }, color: '#4F5F40' },
      { type: 'pallet', position: { x: 1, y: 1, z: 10 }, color: '#A0522D' },
      { type: 'crateLarge', position: { x: 1, y: 1, z: 10 }, color: '#3F4A2A' },

      // ====================================================
      // STORAGE / BARRELS / TOOLBOXES
      // ====================================================
      { type: 'barrel', position: { x: 1, y: 1, z: 2 }, color: '#1C1C1C' },
      { type: 'barrel', position: { x: 1, y: 1, z: 3 }, color: '#7A4A2A' },
      { type: 'oilBarrel', position: { x: 16, y: 1, z: 2 }, color: '#7A2A2A' },
      { type: 'oilBarrel', position: { x: 16, y: 1, z: 3 }, color: '#3A6A8A' },
      { type: 'crate', position: { x: 1, y: 1, z: 11 }, color: '#5A4A2A' },
      { type: 'crate', position: { x: 2, y: 1, z: 11 }, color: '#6A5A3A' },
      { type: 'cabinet', position: { x: 16, y: 1, z: 6 }, color: '#3F4F5F' },
      { type: 'cabinet', position: { x: 16, y: 1, z: 7 }, color: '#3F4F5F' },
      { type: 'shelfUnit', position: { x: 16, y: 1, z: 4 }, color: '#404040' },
      { type: 'ammoCrate', position: { x: 16, y: 2, z: 4 }, color: '#556B2F' },

      // ====================================================
      // CONTROL & SAFETY
      // ====================================================
      { type: 'controlPanel', position: { x: 16, y: 1, z: 8 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 16, y: 1, z: 9 }, color: '#1A1A1A' },
      { type: 'fuseBox', position: { x: 16, y: 1, z: 10 }, color: '#404040' },
      { type: 'hazardSign', position: { x: 1, y: 1, z: 6 }, color: '#FFD700' },
      { type: 'hazardSign', position: { x: 16, y: 1, z: 11 }, color: '#FF4500' },
      { type: 'sign', position: { x: 8, y: 4, z: 1 }, color: '#FFD700' },
      // Bollards along walking path
      { type: 'bollard', position: { x: 3, y: 1, z: 11 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 7, y: 1, z: 11 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 11, y: 1, z: 11 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 14, y: 1, z: 11 }, color: '#FFD700' },

      // ====================================================
      // LIGHTING (perimeter spotlights & overhead)
      // ====================================================
      { type: 'spotlight', position: { x: 4, y: 5, z: 2 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 8 } },
      { type: 'spotlight', position: { x: 13, y: 5, z: 2 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 8 } },
      { type: 'spotlight', position: { x: 4, y: 5, z: 11 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 8 } },
      { type: 'spotlight', position: { x: 13, y: 5, z: 11 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 8 } },
      { type: 'lightFixture', position: { x: 8, y: 5, z: 6 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.2, radius: 6 } },
      { type: 'lightFixture', position: { x: 8, y: 5, z: 7 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.2, radius: 6 } },

      // ====================================================
      // INDUSTRIAL FANS on walls
      // ====================================================
      { type: 'industrialFan', position: { x: 0, y: 2, z: 4 }, color: '#404040' },
      { type: 'industrialFan', position: { x: 0, y: 2, z: 9 }, color: '#404040' },
      { type: 'industrialFan', position: { x: 17, y: 2, z: 4 }, color: '#404040' },
      { type: 'industrialFan', position: { x: 17, y: 2, z: 9 }, color: '#404040' },
    ]
  },

  productionComplex: {
    name: 'Production Complex',
    category: 'ammo',
    description: 'Sprawling industrial complex: material refinery + ammo factory + energy/antenna node + radar array, all linked by conveyors and cables',
    blocks: [
      // ====================================================
      // GROUND PAD (24 wide x 14 deep)
      // ====================================================
      ...makeFloor(0, 0, 0, 24, 14, '#5A5A5A'),
      // Safety stripes around perimeter
      ...makeRow(0, 0, 0, 24, 'X', 'panel', '#FFD700'),
      ...makeRow(0, 0, 13, 24, 'X', 'panel', '#FFD700'),
      // Section dividers (yellow stripes between sections)
      { type: 'panel', position: { x: 7, y: 0, z: 5 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 7, y: 0, z: 6 }, color: '#FFD700' },
      { type: 'panel', position: { x: 7, y: 0, z: 7 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 14, y: 0, z: 5 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 14, y: 0, z: 6 }, color: '#FFD700' },
      { type: 'panel', position: { x: 14, y: 0, z: 7 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 19, y: 0, z: 5 }, color: '#1A1A1A' },
      { type: 'panel', position: { x: 19, y: 0, z: 6 }, color: '#FFD700' },
      { type: 'panel', position: { x: 19, y: 0, z: 7 }, color: '#1A1A1A' },

      // ====================================================
      // SECTION 1: MATERIAL REFINERY (x=0..6)
      // ====================================================
      // Smelter building: 3x3 base, brick walls
      ...makeWallX(2, 1, 4, 3, 3, '#8B4513'),
      ...makeWallX(2, 1, 6, 3, 3, '#8B4513'),
      ...makeWallZ(2, 1, 4, 3, 3, '#8B4513'),
      ...makeWallZ(4, 1, 4, 3, 3, '#8B4513'),
      // Furnace opening (front, dark with glow)
      { type: 'archLow', position: { x: 3, y: 1, z: 4 }, color: '#1A1A1A' },
      // Furnace interior glow (emissive)
      { type: 'cube', position: { x: 3, y: 1, z: 5 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 1.8, radius: 5 } },
      // Roof of smelter
      ...makeFloor(2, 4, 4, 3, 3, '#5A2A2A'),
      // Smokestack (rising chimney)
      { type: 'chimney', position: { x: 3, y: 5, z: 5 }, color: '#3A3A3A' },
      { type: 'chimney', position: { x: 3, y: 6, z: 5 }, color: '#2A2A2A' },
      { type: 'chimney', position: { x: 3, y: 7, z: 5 }, color: '#1A1A1A' },
      // Smoke (small emissive sphere at top)
      { type: 'sphere', position: { x: 3, y: 8, z: 5 }, color: '#5A5A5A', emissive: { enabled: true, color: '#404040', intensity: 0.4, radius: 2 } },

      // Material hopper feeding into smelter (top-left)
      { type: 'pillar', position: { x: 1, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 1, y: 2, z: 5 }, color: '#5A5A5A' },
      { type: 'hopper', position: { x: 1, y: 3, z: 5 }, color: '#707070' },
      { type: 'rockPile', position: { x: 1, y: 4, z: 5 }, color: '#5A4A3A' },

      // Conveyor input (raw ore from outside)
      { type: 'conveyor', position: { x: 1, y: 1, z: 4 }, color: '#2A2A2A' },
      { type: 'rockSmall', position: { x: 1, y: 2, z: 4 }, color: '#5A4A3A' },
      { type: 'conveyor', position: { x: 1, y: 1, z: 3 }, color: '#2A2A2A' },
      { type: 'rockSmall', position: { x: 1, y: 2, z: 3 }, color: '#4A3A2A' },

      // Output conveyor (carries molten ingots eastward to ammo factory)
      { type: 'conveyor', position: { x: 5, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'cube', position: { x: 5, y: 2, z: 5 }, color: '#DAA520' },
      { type: 'conveyor', position: { x: 6, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'cube', position: { x: 6, y: 2, z: 5 }, color: '#DAA520' },

      // Cooling tank (water-blue)
      { type: 'oilTank', position: { x: 5, y: 1, z: 8 }, color: '#4682B4' },
      { type: 'oilTank', position: { x: 5, y: 2, z: 8 }, color: '#5A92C4' },
      { type: 'pipeY', position: { x: 5, y: 3, z: 8 }, color: '#909090' },
      { type: 'valve', position: { x: 5, y: 3, z: 8 }, color: '#B22222' },
      // Pipe arching back to smelter
      { type: 'pipeElbowXY', position: { x: 4, y: 3, z: 8 }, color: '#909090' },
      { type: 'pipeX', position: { x: 4, y: 3, z: 8 }, color: '#909090' },

      // Raw material storage piles
      { type: 'rockPile', position: { x: 1, y: 1, z: 9 }, color: '#5A4A3A' },
      { type: 'rockPile', position: { x: 2, y: 1, z: 9 }, color: '#4A3A2A' },
      { type: 'rockPile', position: { x: 1, y: 1, z: 10 }, color: '#3A3A2A' },
      { type: 'crateLarge', position: { x: 5, y: 1, z: 10 }, color: '#5A4A2A' },
      { type: 'crateLarge', position: { x: 6, y: 1, z: 10 }, color: '#5A4A2A' },
      // Sand/ore sacks
      { type: 'sack', position: { x: 1, y: 1, z: 12 }, color: '#8B7355' },
      { type: 'sack', position: { x: 2, y: 1, z: 12 }, color: '#8B7355' },
      { type: 'sack', position: { x: 5, y: 1, z: 12 }, color: '#8B7355' },

      // Worker control panel
      { type: 'controlPanel', position: { x: 6, y: 1, z: 12 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 6, y: 1, z: 11 }, color: '#1A1A1A' },
      // Smelter operator stand
      { type: 'platform', position: { x: 0, y: 1, z: 4 }, color: '#3A3A3A' },
      { type: 'fuseBox', position: { x: 0, y: 1, z: 4 }, color: '#404040' },
      { type: 'cableY', position: { x: 0, y: 2, z: 4 }, color: '#1A1A1A' },

      // Hazard signage
      { type: 'hazardSign', position: { x: 1, y: 1, z: 1 }, color: '#FF4500' },
      { type: 'sign', position: { x: 6, y: 1, z: 1 }, color: '#FFD700' },

      // ====================================================
      // CONVEYOR LINK 1->2 (material to ammo factory)
      // ====================================================
      { type: 'conveyor', position: { x: 7, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'cube', position: { x: 7, y: 2, z: 5 }, color: '#DAA520' },

      // ====================================================
      // SECTION 2: AMMO FACTORY (x=8..13)
      // ====================================================
      // Stamper press (forms casings from incoming brass)
      { type: 'stamperPress', position: { x: 8, y: 1, z: 5 }, color: '#3A3A3A' },
      { type: 'shellCasing', position: { x: 8, y: 2, z: 5 }, color: '#DAA520' },
      // Hot output indicator
      { type: 'bulb', position: { x: 8, y: 3, z: 5 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.2, radius: 3 } },

      // Conveyor with cartridges riding
      { type: 'conveyorAmmo', position: { x: 9, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 10, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 11, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 12, y: 1, z: 5 }, color: '#2A2A2A' },

      // Robotic arm 1 - shaping
      { type: 'assemblyArm', position: { x: 9, y: 1, z: 4 }, color: '#FFA500' },
      // Robotic arm 2 - filling
      { type: 'assemblyArm', position: { x: 11, y: 1, z: 4 }, color: '#FFA500' },

      // Gunpowder feed (above conveyor)
      { type: 'pillar', position: { x: 11, y: 1, z: 6 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 11, y: 2, z: 6 }, color: '#5A5A5A' },
      { type: 'gunpowderBarrel', position: { x: 11, y: 3, z: 6 }, color: '#1C1C1C' },
      { type: 'pipeY', position: { x: 11, y: 2, z: 5 }, color: '#808080' },
      { type: 'valve', position: { x: 11, y: 2, z: 5 }, color: '#B22222' },

      // Boxing area (output of line)
      { type: 'cartridgeBox', position: { x: 13, y: 1, z: 5 }, color: '#8B4513' },
      // Output stack
      { type: 'pallet', position: { x: 13, y: 1, z: 6 }, color: '#A0522D' },
      { type: 'ammoCrate', position: { x: 13, y: 1, z: 6 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 13, y: 2, z: 6 }, color: '#4F5F40' },

      // Storage - finished ammo cans/crates
      { type: 'ammoCan', position: { x: 9, y: 1, z: 8 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 10, y: 1, z: 8 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 9, y: 2, z: 8 }, color: '#4F5F40' },
      { type: 'ammoCan', position: { x: 10, y: 2, z: 8 }, color: '#4F5F40' },
      { type: 'ammoCrate', position: { x: 11, y: 1, z: 8 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 12, y: 1, z: 8 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 13, y: 1, z: 8 }, color: '#556B2F' },
      // Heavy munitions storage
      { type: 'artilleryShell', position: { x: 9, y: 1, z: 10 }, color: '#4F5F40' },
      { type: 'artilleryShell', position: { x: 10, y: 1, z: 10 }, color: '#4F5F40' },
      { type: 'rocketShell', position: { x: 12, y: 1, z: 10 }, color: '#3F3F3F' },
      { type: 'rocketShell', position: { x: 13, y: 1, z: 10 }, color: '#3F3F3F' },
      { type: 'pallet', position: { x: 9, y: 1, z: 10 }, color: '#A0522D' },
      { type: 'pallet', position: { x: 10, y: 1, z: 10 }, color: '#A0522D' },

      // Control & safety for ammo line
      { type: 'controlPanel', position: { x: 9, y: 1, z: 12 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 10, y: 1, z: 12 }, color: '#1A1A1A' },
      { type: 'hazardSign', position: { x: 13, y: 1, z: 12 }, color: '#FFD700' },
      { type: 'industrialFan', position: { x: 9, y: 2, z: 12 }, color: '#404040' },
      // Cable runs
      { type: 'cableX', position: { x: 8, y: 1, z: 0 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 9, y: 1, z: 0 }, color: '#1A1A1A' },

      // ====================================================
      // CABLE LINK 2->3 (power feed to energy node)
      // ====================================================
      { type: 'pillar2', position: { x: 14, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'pillar2', position: { x: 14, y: 2, z: 5 }, color: '#5A5A5A' },
      { type: 'cableY', position: { x: 14, y: 3, z: 5 }, color: '#FFA500', emissive: { enabled: true, color: '#FFAA00', intensity: 0.6, radius: 2 } },

      // ====================================================
      // SECTION 3: ENERGY / NODE / ANTENNAS (x=15..18)
      // ====================================================
      // Octagonal foundation pad
      { type: 'octagon', position: { x: 16, y: 1, z: 6 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 17, y: 1, z: 6 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 16, y: 1, z: 7 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 17, y: 1, z: 7 }, color: '#3A3A3A' },

      // Central energy core (2 stacked emissive spheres)
      { type: 'cylinder', position: { x: 16, y: 2, z: 6 }, color: '#1A1A2A' },
      { type: 'cylinder', position: { x: 17, y: 2, z: 6 }, color: '#1A1A2A' },
      { type: 'cylinder', position: { x: 16, y: 2, z: 7 }, color: '#1A1A2A' },
      { type: 'cylinder', position: { x: 17, y: 2, z: 7 }, color: '#1A1A2A' },
      { type: 'sphere', position: { x: 16, y: 3, z: 6 }, color: '#00FFFF', emissive: { enabled: true, color: '#00DDFF', intensity: 2.0, radius: 6 } },
      { type: 'sphere', position: { x: 17, y: 3, z: 7 }, color: '#FF00FF', emissive: { enabled: true, color: '#DD00FF', intensity: 2.0, radius: 6 } },
      { type: 'crystal', position: { x: 16, y: 4, z: 6 }, color: '#00FFAA', emissive: { enabled: true, color: '#00FFAA', intensity: 1.8, radius: 5 } },

      // 4 corner antenna spires (each 4 high + antenna)
      // Front-left corner antenna
      { type: 'pillar', position: { x: 15, y: 1, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 15, y: 2, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 15, y: 3, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 15, y: 4, z: 4 }, color: '#5A5A5A' },
      { type: 'antenna', position: { x: 15, y: 5, z: 4 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 15, y: 6, z: 4 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.5, radius: 3 } },
      // Front-right
      { type: 'pillar', position: { x: 18, y: 1, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 18, y: 2, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 18, y: 3, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 18, y: 4, z: 4 }, color: '#5A5A5A' },
      { type: 'antenna', position: { x: 18, y: 5, z: 4 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 18, y: 6, z: 4 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.5, radius: 3 } },
      // Back-left
      { type: 'pillar', position: { x: 15, y: 1, z: 9 }, color: '#404040' },
      { type: 'pillar', position: { x: 15, y: 2, z: 9 }, color: '#404040' },
      { type: 'pillar', position: { x: 15, y: 3, z: 9 }, color: '#404040' },
      { type: 'pillar', position: { x: 15, y: 4, z: 9 }, color: '#5A5A5A' },
      { type: 'antenna', position: { x: 15, y: 5, z: 9 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 15, y: 6, z: 9 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.5, radius: 3 } },
      // Back-right
      { type: 'pillar', position: { x: 18, y: 1, z: 9 }, color: '#404040' },
      { type: 'pillar', position: { x: 18, y: 2, z: 9 }, color: '#404040' },
      { type: 'pillar', position: { x: 18, y: 3, z: 9 }, color: '#404040' },
      { type: 'pillar', position: { x: 18, y: 4, z: 9 }, color: '#5A5A5A' },
      { type: 'antenna', position: { x: 18, y: 5, z: 9 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 18, y: 6, z: 9 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.5, radius: 3 } },

      // Capacitor banks around the core
      { type: 'cylinder', position: { x: 15, y: 1, z: 6 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 15, y: 1, z: 7 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 18, y: 1, z: 6 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 18, y: 1, z: 7 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 16, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 17, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 16, y: 1, z: 8 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 17, y: 1, z: 8 }, color: '#5A5A5A' },

      // Transformers around the perimeter
      { type: 'transformer', position: { x: 15, y: 1, z: 12 }, color: '#3F4F5F' },
      { type: 'transformer', position: { x: 18, y: 1, z: 12 }, color: '#3F4F5F' },
      { type: 'transformer', position: { x: 15, y: 1, z: 1 }, color: '#3F4F5F' },
      { type: 'transformer', position: { x: 18, y: 1, z: 1 }, color: '#3F4F5F' },

      // Power lines connecting antennas to core (cables along Z direction)
      { type: 'cableY', position: { x: 16, y: 4, z: 6 }, color: '#FFA500', emissive: { enabled: true, color: '#FFAA00', intensity: 0.8, radius: 2 } },
      { type: 'cableY', position: { x: 17, y: 4, z: 7 }, color: '#FFA500', emissive: { enabled: true, color: '#FFAA00', intensity: 0.8, radius: 2 } },

      // Lightning arrestor rods on top of core platform
      { type: 'pillarRound2', position: { x: 16, y: 5, z: 6 }, color: '#C0C0C0' },
      { type: 'pillarRound2', position: { x: 17, y: 4, z: 7 }, color: '#C0C0C0' },

      // Control hub
      { type: 'controlPanel', position: { x: 15, y: 1, z: 11 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 16, y: 1, z: 11 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.6, radius: 2 } },
      { type: 'fuseBox', position: { x: 18, y: 1, z: 11 }, color: '#404040' },

      // ====================================================
      // CABLE LINK 3->4 (energy to radar)
      // ====================================================
      { type: 'pillar2', position: { x: 19, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'pillar2', position: { x: 19, y: 2, z: 5 }, color: '#5A5A5A' },
      { type: 'cableY', position: { x: 19, y: 3, z: 5 }, color: '#FFA500', emissive: { enabled: true, color: '#FFAA00', intensity: 0.6, radius: 2 } },

      // ====================================================
      // SECTION 4: RADAR ARRAY (x=20..23)
      // ====================================================
      // Control building under tower (3x3 footprint at x=20..22, z=5..7)
      ...makeWallX(20, 1, 5, 3, 2, '#5A6678'),
      ...makeWallX(20, 1, 7, 3, 2, '#5A6678'),
      ...makeWallZ(20, 1, 6, 1, 2, '#5A6678'),
      ...makeWallZ(22, 1, 6, 1, 2, '#5A6678'),
      // Door (front)
      { type: 'doorFrame', position: { x: 21, y: 1, z: 5 }, color: '#7A2A2A' },
      // Window
      { type: 'windowFrame', position: { x: 21, y: 1, z: 7 }, color: '#4682B4' },
      // Roof = 1st level platform
      ...makeFloor(20, 3, 5, 3, 3, '#3A3A3A'),

      // 4 corner pillars rising from roof to platform top
      { type: 'pillar', position: { x: 20, y: 4, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 20, y: 5, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 22, y: 4, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 22, y: 5, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 20, y: 4, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 20, y: 5, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 22, y: 4, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 22, y: 5, z: 7 }, color: '#404040' },

      // Truss bracing (X-cross between pillars)
      { type: 'truss', position: { x: 21, y: 4, z: 5 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 21, y: 4, z: 7 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 21, y: 5, z: 5 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 21, y: 5, z: 7 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 20, y: 4, z: 6 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 22, y: 4, z: 6 }, color: '#5A5A5A' },

      // Top platform (radar mounting deck)
      ...makeFloor(20, 6, 5, 3, 3, '#3A3A3A'),
      // Railing around platform
      { type: 'railing', position: { x: 20, y: 7, z: 5 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 21, y: 7, z: 5 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 22, y: 7, z: 5 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 20, y: 7, z: 7 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 22, y: 7, z: 7 }, color: '#5A5A5A' },

      // Radar dish mount (cone base)
      { type: 'cone', position: { x: 21, y: 7, z: 6 }, color: '#5A5A5A' },
      // Big radar dish (bowl, faces up)
      { type: 'bowl', position: { x: 21, y: 8, z: 6 }, color: '#C0C0C0' },
      // Dish feed horn (small antenna in center)
      { type: 'antenna', position: { x: 21, y: 8, z: 6 }, color: '#1A1A1A' },

      // Secondary smaller antennas on top deck
      { type: 'pillarRound2', position: { x: 20, y: 7, z: 6 }, color: '#C0C0C0' },
      { type: 'pillarRound2', position: { x: 22, y: 7, z: 6 }, color: '#C0C0C0' },

      // Warning beacon on top
      { type: 'bulb', position: { x: 21, y: 9, z: 6 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 2.0, radius: 4 } },

      // Satellite dish (smaller, ground-mounted) for variety
      { type: 'pillar', position: { x: 23, y: 1, z: 10 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 23, y: 2, z: 10 }, color: '#5A5A5A' },
      { type: 'cone', position: { x: 23, y: 3, z: 10 }, color: '#5A5A5A' },
      { type: 'bowl', position: { x: 23, y: 4, z: 10 }, color: '#E0E0E0' },
      { type: 'antenna', position: { x: 23, y: 4, z: 10 }, color: '#1A1A1A' },

      // Ground-level radar controls
      { type: 'controlPanel', position: { x: 20, y: 1, z: 10 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 21, y: 1, z: 10 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.5, radius: 2 } },
      { type: 'monitor', position: { x: 22, y: 1, z: 10 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.5, radius: 2 } },

      // Backup power (generator-like)
      { type: 'oilTank', position: { x: 20, y: 1, z: 12 }, color: '#3F4F5F' },
      { type: 'powerBox', position: { x: 21, y: 1, z: 12 }, color: '#2F4F4F' },
      { type: 'fuseBox', position: { x: 22, y: 1, z: 12 }, color: '#404040' },

      // Small antenna farm on right edge
      { type: 'pillar', position: { x: 23, y: 1, z: 1 }, color: '#404040' },
      { type: 'pillar', position: { x: 23, y: 2, z: 1 }, color: '#404040' },
      { type: 'pillar', position: { x: 23, y: 3, z: 1 }, color: '#404040' },
      { type: 'antenna', position: { x: 23, y: 4, z: 1 }, color: '#1A1A1A' },
      { type: 'pillar', position: { x: 23, y: 1, z: 3 }, color: '#404040' },
      { type: 'pillar', position: { x: 23, y: 2, z: 3 }, color: '#404040' },
      { type: 'antenna', position: { x: 23, y: 3, z: 3 }, color: '#1A1A1A' },

      // Radar warning sign
      { type: 'hazardSign', position: { x: 20, y: 1, z: 1 }, color: '#FF4500' },

      // ====================================================
      // GLOBAL DETAILS
      // ====================================================
      // Industrial fans on edges (mounted on smelter wall)
      { type: 'industrialFan', position: { x: 2, y: 2, z: 7 }, color: '#404040' },
      // Spotlights on tall posts at corners
      { type: 'pillar2', position: { x: 0, y: 1, z: 0 }, color: '#404040' },
      { type: 'pillar2', position: { x: 0, y: 2, z: 0 }, color: '#404040' },
      { type: 'pillar2', position: { x: 0, y: 3, z: 0 }, color: '#404040' },
      { type: 'spotlight', position: { x: 0, y: 4, z: 0 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 8 } },
      { type: 'pillar2', position: { x: 23, y: 1, z: 13 }, color: '#404040' },
      { type: 'pillar2', position: { x: 23, y: 2, z: 13 }, color: '#404040' },
      { type: 'pillar2', position: { x: 23, y: 3, z: 13 }, color: '#404040' },
      { type: 'spotlight', position: { x: 23, y: 4, z: 13 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 8 } },
    ]
  },

  missileBay: {
    name: 'Missile Production Bay',
    category: 'ammo',
    description: 'Open assembly bay with a massive multi-stage missile and strap-on boosters, gantry scaffolding, fuel tanks, and a crew control tower',
    blocks: [
      // ====================================================
      // GROUND PAD (22 wide x 14 deep)
      // ====================================================
      ...makeFloor(0, 0, 0, 22, 14, '#5A5A5A'),
      // Hazard stripes around launch pad
      ...makeRow(8, 0, 4, 7, 'X', 'panel', '#FFD700'),
      ...makeRow(8, 0, 10, 7, 'X', 'panel', '#FFD700'),
      ...makeRow(8, 0, 5, 5, 'Z', 'panel', '#FFD700'),
      ...makeRow(14, 0, 5, 5, 'Z', 'panel', '#FFD700'),
      // Drainage / blast trench grates around pad
      { type: 'grateFloor', position: { x: 9, y: 0, z: 7 }, color: '#1A1A1A' },
      { type: 'grateFloor', position: { x: 13, y: 0, z: 7 }, color: '#1A1A1A' },
      { type: 'grateFloor', position: { x: 11, y: 0, z: 5 }, color: '#1A1A1A' },
      { type: 'grateFloor', position: { x: 11, y: 0, z: 9 }, color: '#1A1A1A' },

      // ====================================================
      // REINFORCED LAUNCH PAD (octagonal blocks at base)
      // ====================================================
      { type: 'octagon', position: { x: 10, y: 1, z: 6 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 10, y: 1, z: 7 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 10, y: 1, z: 8 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 11, y: 1, z: 6 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 11, y: 1, z: 8 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 12, y: 1, z: 6 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 12, y: 1, z: 7 }, color: '#3A3A3A' },
      { type: 'octagon', position: { x: 12, y: 1, z: 8 }, color: '#3A3A3A' },

      // ====================================================
      // THE MISSILE (vertical column at x=11, z=7) — 12 cells tall
      // ====================================================
      // Engine nozzle (dark gunmetal)
      { type: 'cylinder', position: { x: 11, y: 1, z: 7 }, color: '#2A2A2A' },
      // Engine bell flare detail
      { type: 'cone', position: { x: 11, y: 1, z: 7 }, color: '#3A3A3A' },
      // Stage 1 (lower, white with red band)
      { type: 'cylinder', position: { x: 11, y: 2, z: 7 }, color: '#F0F0F0' },
      { type: 'cylinder', position: { x: 11, y: 3, z: 7 }, color: '#F0F0F0' },
      { type: 'cylinder', position: { x: 11, y: 4, z: 7 }, color: '#F0F0F0' },
      { type: 'cylinder', position: { x: 11, y: 5, z: 7 }, color: '#C70039' }, // red separator band
      // Interstage (dark)
      { type: 'cylinder', position: { x: 11, y: 6, z: 7 }, color: '#3A3A3A' },
      // Stage 2 (white)
      { type: 'cylinder', position: { x: 11, y: 7, z: 7 }, color: '#F0F0F0' },
      { type: 'cylinder', position: { x: 11, y: 8, z: 7 }, color: '#F0F0F0' },
      // Payload band (red/white striped section)
      { type: 'cylinder', position: { x: 11, y: 9, z: 7 }, color: '#C70039' },
      // Warhead body
      { type: 'cylinder', position: { x: 11, y: 10, z: 7 }, color: '#F0F0F0' },
      // Nose cone
      { type: 'cone', position: { x: 11, y: 11, z: 7 }, color: '#C70039' },
      // Aerospike tip (yellow tip)
      { type: 'pillarRound2', position: { x: 11, y: 12, z: 7 }, color: '#FFFF00' },

      // ====================================================
      // STRAP-ON BOOSTERS (4, around base of missile)
      // ====================================================
      // West booster (x=10, z=7)
      { type: 'cylinder', position: { x: 10, y: 2, z: 7 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 10, y: 3, z: 7 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 10, y: 4, z: 7 }, color: '#C0C0C0' },
      { type: 'cone', position: { x: 10, y: 5, z: 7 }, color: '#C70039' },
      // Engine bell at the base
      { type: 'cone', position: { x: 10, y: 1, z: 7 }, color: '#1A1A1A' },

      // East booster (x=12, z=7)
      { type: 'cylinder', position: { x: 12, y: 2, z: 7 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 12, y: 3, z: 7 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 12, y: 4, z: 7 }, color: '#C0C0C0' },
      { type: 'cone', position: { x: 12, y: 5, z: 7 }, color: '#C70039' },
      { type: 'cone', position: { x: 12, y: 1, z: 7 }, color: '#1A1A1A' },

      // North booster (x=11, z=6)
      { type: 'cylinder', position: { x: 11, y: 2, z: 6 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 11, y: 3, z: 6 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 11, y: 4, z: 6 }, color: '#C0C0C0' },
      { type: 'cone', position: { x: 11, y: 5, z: 6 }, color: '#C70039' },
      { type: 'cone', position: { x: 11, y: 1, z: 6 }, color: '#1A1A1A' },

      // South booster (x=11, z=8)
      { type: 'cylinder', position: { x: 11, y: 2, z: 8 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 11, y: 3, z: 8 }, color: '#C0C0C0' },
      { type: 'cylinder', position: { x: 11, y: 4, z: 8 }, color: '#C0C0C0' },
      { type: 'cone', position: { x: 11, y: 5, z: 8 }, color: '#C70039' },
      { type: 'cone', position: { x: 11, y: 1, z: 8 }, color: '#1A1A1A' },

      // Stage 2 ring decorations (small bumps for guidance computer/RCS)
      { type: 'cube', position: { x: 10, y: 8, z: 7 }, color: '#3A3A3A' },
      { type: 'cube', position: { x: 12, y: 8, z: 7 }, color: '#3A3A3A' },

      // ====================================================
      // SCAFFOLDING GANTRY (4 corner columns, 12 high)
      // ====================================================
      // NW column (x=8, z=4)
      { type: 'iBeam', position: { x: 8, y: 1, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 2, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 3, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 4, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 5, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 6, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 7, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 8, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 9, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 10, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 11, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 12, z: 4 }, color: '#5A2A2A' },
      // SW column (x=8, z=10)
      { type: 'iBeam', position: { x: 8, y: 1, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 2, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 3, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 4, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 5, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 6, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 7, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 8, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 9, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 10, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 11, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 8, y: 12, z: 10 }, color: '#5A2A2A' },
      // NE column (x=14, z=4)
      { type: 'iBeam', position: { x: 14, y: 1, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 2, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 3, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 4, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 5, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 6, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 7, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 8, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 9, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 10, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 11, z: 4 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 12, z: 4 }, color: '#5A2A2A' },
      // SE column (x=14, z=10)
      { type: 'iBeam', position: { x: 14, y: 1, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 2, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 3, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 4, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 5, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 6, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 7, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 8, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 9, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 10, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 11, z: 10 }, color: '#5A2A2A' },
      { type: 'iBeam', position: { x: 14, y: 12, z: 10 }, color: '#5A2A2A' },

      // ====================================================
      // CROSS-BEAMS at y=4 (lower service level)
      // ====================================================
      ...makeRow(9, 4, 4, 5, 'X', 'beamX', '#404040'),
      ...makeRow(9, 4, 10, 5, 'X', 'beamX', '#404040'),
      ...makeRow(8, 4, 5, 5, 'Z', 'beamZ', '#404040'),
      ...makeRow(14, 4, 5, 5, 'Z', 'beamZ', '#404040'),
      // CROSS-BEAMS at y=8 (upper service level)
      ...makeRow(9, 8, 4, 5, 'X', 'beamX', '#404040'),
      ...makeRow(9, 8, 10, 5, 'X', 'beamX', '#404040'),
      ...makeRow(8, 8, 5, 5, 'Z', 'beamZ', '#404040'),
      ...makeRow(14, 8, 5, 5, 'Z', 'beamZ', '#404040'),
      // CROSS-BEAMS at y=12 (top crane rails)
      ...makeRow(9, 12, 4, 5, 'X', 'beamX', '#3A3A3A'),
      ...makeRow(9, 12, 10, 5, 'X', 'beamX', '#3A3A3A'),
      ...makeRow(8, 12, 5, 5, 'Z', 'beamZ', '#3A3A3A'),
      ...makeRow(14, 12, 5, 5, 'Z', 'beamZ', '#3A3A3A'),

      // ====================================================
      // SERVICE CATWALKS (around the missile)
      // ====================================================
      // Lower service ring at y=4
      { type: 'catwalk', position: { x: 9, y: 4, z: 7 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 13, y: 4, z: 7 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 11, y: 4, z: 5 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 11, y: 4, z: 9 }, color: '#3A3A3A' },
      { type: 'railing', position: { x: 9, y: 5, z: 7 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 13, y: 5, z: 7 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 11, y: 5, z: 5 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 11, y: 5, z: 9 }, color: '#5A5A5A' },
      // Upper service ring at y=8
      { type: 'catwalk', position: { x: 9, y: 8, z: 7 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 13, y: 8, z: 7 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 11, y: 8, z: 5 }, color: '#3A3A3A' },
      { type: 'catwalk', position: { x: 11, y: 8, z: 9 }, color: '#3A3A3A' },
      { type: 'railing', position: { x: 9, y: 9, z: 7 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 13, y: 9, z: 7 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 11, y: 9, z: 5 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 11, y: 9, z: 9 }, color: '#5A5A5A' },

      // Access ladder up the side of NW column
      { type: 'ladder', position: { x: 8, y: 1, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 2, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 3, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 5, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 6, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 7, z: 5 }, color: '#FFD700' },

      // ====================================================
      // ROBOTIC ARMS (working on missile at multiple levels)
      // ====================================================
      { type: 'assemblyArm', position: { x: 9, y: 4, z: 7 }, color: '#FFA500' },
      { type: 'assemblyArm', position: { x: 13, y: 4, z: 7 }, color: '#FFA500' },
      { type: 'assemblyArm', position: { x: 9, y: 8, z: 7 }, color: '#FFA500' },
      { type: 'assemblyArm', position: { x: 13, y: 8, z: 7 }, color: '#FFA500' },
      // Welding sparks (emissive)
      { type: 'bulb', position: { x: 10, y: 4, z: 7 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.6, radius: 3 } },
      { type: 'bulb', position: { x: 12, y: 8, z: 7 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.6, radius: 3 } },

      // ====================================================
      // OVERHEAD CRANE HOOK (top of gantry)
      // ====================================================
      { type: 'chain', position: { x: 11, y: 11, z: 7 }, color: '#5A5A5A' },
      { type: 'hopper', position: { x: 11, y: 11, z: 6 }, color: '#404040' },
      { type: 'chain', position: { x: 11, y: 11, z: 5 }, color: '#5A5A5A' },

      // ====================================================
      // FUEL TANKS (large, west of bay)
      // ====================================================
      // Tank 1 (oxidizer, blue)
      { type: 'oilTank', position: { x: 1, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'oilTank', position: { x: 1, y: 2, z: 4 }, color: '#5A92C4' },
      { type: 'oilTank', position: { x: 1, y: 3, z: 4 }, color: '#5A92C4' },
      { type: 'dome', position: { x: 1, y: 4, z: 4 }, color: '#4682B4' },
      // Tank 2 (fuel, red)
      { type: 'oilTank', position: { x: 1, y: 1, z: 6 }, color: '#7A2A2A' },
      { type: 'oilTank', position: { x: 1, y: 2, z: 6 }, color: '#9A2A2A' },
      { type: 'oilTank', position: { x: 1, y: 3, z: 6 }, color: '#9A2A2A' },
      { type: 'dome', position: { x: 1, y: 4, z: 6 }, color: '#7A2A2A' },
      // Tank 3 (cryogenic, white with frost)
      { type: 'oilTank', position: { x: 1, y: 1, z: 8 }, color: '#E0E0E0' },
      { type: 'oilTank', position: { x: 1, y: 2, z: 8 }, color: '#F0F0F0' },
      { type: 'oilTank', position: { x: 1, y: 3, z: 8 }, color: '#F0F0F0' },
      { type: 'dome', position: { x: 1, y: 4, z: 8 }, color: '#E0E0E0' },
      // Cryogenic vapor (emissive cool)
      { type: 'sphere', position: { x: 2, y: 4, z: 8 }, color: '#B0E0E6', emissive: { enabled: true, color: '#B0E0E6', intensity: 0.6, radius: 3 } },

      // Fuel feed pipes (running from tanks toward missile, along ground)
      { type: 'pipeX', position: { x: 2, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 3, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 4, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 5, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 6, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 7, y: 1, z: 4 }, color: '#4682B4' },
      { type: 'valve', position: { x: 4, y: 1, z: 4 }, color: '#B22222' },
      // Fuel pipe rising up the gantry (along NW column)
      { type: 'pipeY', position: { x: 8, y: 1, z: 5 }, color: '#4682B4' },
      // Fuel umbilical reaching out to missile at lower stage
      { type: 'pipeX', position: { x: 9, y: 2, z: 5 }, color: '#4682B4' },
      { type: 'pipeX', position: { x: 10, y: 2, z: 5 }, color: '#4682B4' },

      { type: 'pipeX', position: { x: 2, y: 1, z: 6 }, color: '#9A2A2A' },
      { type: 'pipeX', position: { x: 3, y: 1, z: 6 }, color: '#9A2A2A' },
      { type: 'pipeX', position: { x: 4, y: 1, z: 6 }, color: '#9A2A2A' },
      { type: 'pipeX', position: { x: 5, y: 1, z: 6 }, color: '#9A2A2A' },
      { type: 'pipeX', position: { x: 6, y: 1, z: 6 }, color: '#9A2A2A' },
      { type: 'pipeX', position: { x: 7, y: 1, z: 6 }, color: '#9A2A2A' },
      { type: 'valve', position: { x: 4, y: 1, z: 6 }, color: '#B22222' },

      { type: 'pipeX', position: { x: 2, y: 1, z: 8 }, color: '#E0E0E0' },
      { type: 'pipeX', position: { x: 3, y: 1, z: 8 }, color: '#E0E0E0' },
      { type: 'pipeX', position: { x: 4, y: 1, z: 8 }, color: '#E0E0E0' },
      { type: 'pipeX', position: { x: 5, y: 1, z: 8 }, color: '#E0E0E0' },
      { type: 'pipeX', position: { x: 6, y: 1, z: 8 }, color: '#E0E0E0' },
      { type: 'pipeX', position: { x: 7, y: 1, z: 8 }, color: '#E0E0E0' },
      { type: 'valve', position: { x: 4, y: 1, z: 8 }, color: '#B22222' },

      // ====================================================
      // CONTROL TOWER (east side)
      // ====================================================
      // 2-story tower at x=17..19, z=5..7
      ...makeWallX(17, 1, 5, 3, 2, '#5A6678'),
      ...makeWallX(17, 1, 7, 3, 2, '#5A6678'),
      ...makeWallZ(17, 1, 6, 1, 2, '#5A6678'),
      ...makeWallZ(19, 1, 6, 1, 2, '#5A6678'),
      // Door
      { type: 'doorFrame', position: { x: 18, y: 1, z: 7 }, color: '#7A2A2A' },
      // 1st floor ceiling / 2nd floor
      ...makeFloor(17, 3, 5, 3, 3, '#3A3A3A'),
      // 2nd floor walls (with windows facing missile)
      ...makeWallZ(17, 4, 5, 3, 2, '#5A6678'), // back wall
      ...makeWallX(17, 4, 7, 3, 2, '#5A6678'), // side
      ...makeWallX(17, 4, 5, 3, 2, '#5A6678'), // side
      // Big observation window facing missile (west side)
      { type: 'windowFrame', position: { x: 17, y: 4, z: 5 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 17, y: 4, z: 6 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 17, y: 4, z: 7 }, color: '#4682B4' },
      // Roof
      ...makeFloor(17, 6, 5, 3, 3, '#2A2A2A'),
      // Antenna on roof
      { type: 'antenna', position: { x: 18, y: 7, z: 6 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 18, y: 8, z: 6 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.5, radius: 3 } },
      // Satellite dish on roof
      { type: 'cone', position: { x: 17, y: 7, z: 5 }, color: '#5A5A5A' },
      { type: 'bowl', position: { x: 17, y: 8, z: 5 }, color: '#E0E0E0' },

      // Inside 2nd floor: control panels and monitors
      { type: 'controlPanel', position: { x: 18, y: 4, z: 5 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 17, y: 4, z: 6 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.6, radius: 2 } },
      { type: 'monitor', position: { x: 19, y: 4, z: 6 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.6, radius: 2 } },
      // Inside 1st floor: equipment
      { type: 'fuseBox', position: { x: 17, y: 1, z: 6 }, color: '#404040' },
      { type: 'powerBox', position: { x: 19, y: 1, z: 6 }, color: '#2F4F4F' },

      // ====================================================
      // SPARE MISSILES (horizontal storage, east edge)
      // ====================================================
      // Rack pallet
      { type: 'pallet', position: { x: 17, y: 1, z: 11 }, color: '#A0522D' },
      { type: 'pallet', position: { x: 18, y: 1, z: 11 }, color: '#A0522D' },
      { type: 'pallet', position: { x: 19, y: 1, z: 11 }, color: '#A0522D' },
      { type: 'pallet', position: { x: 20, y: 1, z: 11 }, color: '#A0522D' },
      // Missile body laid on its side (using pipeX cylinders)
      { type: 'pipeX', position: { x: 17, y: 1, z: 11 }, color: '#F0F0F0' },
      { type: 'pipeX', position: { x: 18, y: 1, z: 11 }, color: '#F0F0F0' },
      { type: 'pipeX', position: { x: 19, y: 1, z: 11 }, color: '#F0F0F0' },
      { type: 'pipeX', position: { x: 20, y: 1, z: 11 }, color: '#C70039' },
      // Second spare missile
      { type: 'pallet', position: { x: 17, y: 1, z: 12 }, color: '#A0522D' },
      { type: 'pallet', position: { x: 18, y: 1, z: 12 }, color: '#A0522D' },
      { type: 'pallet', position: { x: 19, y: 1, z: 12 }, color: '#A0522D' },
      { type: 'pallet', position: { x: 20, y: 1, z: 12 }, color: '#A0522D' },
      { type: 'pipeX', position: { x: 17, y: 1, z: 12 }, color: '#F0F0F0' },
      { type: 'pipeX', position: { x: 18, y: 1, z: 12 }, color: '#F0F0F0' },
      { type: 'pipeX', position: { x: 19, y: 1, z: 12 }, color: '#F0F0F0' },
      { type: 'pipeX', position: { x: 20, y: 1, z: 12 }, color: '#C70039' },

      // Spare nose cones in a pile
      { type: 'cone', position: { x: 16, y: 1, z: 11 }, color: '#C70039' },
      { type: 'cone', position: { x: 16, y: 1, z: 12 }, color: '#C70039' },

      // ====================================================
      // PARTS / WORKSHOP DETAILS (around the bay edges)
      // ====================================================
      // Toolbox / spare engines pile
      { type: 'crateLarge', position: { x: 5, y: 1, z: 11 }, color: '#3F4F5F' },
      { type: 'crateLarge', position: { x: 5, y: 1, z: 12 }, color: '#3F4F5F' },
      { type: 'crateLarge', position: { x: 6, y: 1, z: 11 }, color: '#3F4F5F' },
      { type: 'crateLarge', position: { x: 6, y: 1, z: 12 }, color: '#3F4F5F' },
      // Booster engines on pallets
      { type: 'pallet', position: { x: 7, y: 1, z: 11 }, color: '#A0522D' },
      { type: 'cone', position: { x: 7, y: 1, z: 11 }, color: '#1A1A1A' },
      { type: 'pallet', position: { x: 7, y: 1, z: 12 }, color: '#A0522D' },
      { type: 'cone', position: { x: 7, y: 1, z: 12 }, color: '#1A1A1A' },
      // Gunpowder/propellant barrels
      { type: 'gunpowderBarrel', position: { x: 4, y: 1, z: 11 }, color: '#1C1C1C' },
      { type: 'gunpowderBarrel', position: { x: 4, y: 1, z: 12 }, color: '#1C1C1C' },
      { type: 'explosiveBarrel', position: { x: 3, y: 1, z: 11 }, color: '#C70039' },

      // ====================================================
      // SAFETY & SIGNAGE
      // ====================================================
      { type: 'hazardSign', position: { x: 7, y: 1, z: 7 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 15, y: 1, z: 7 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 11, y: 1, z: 4 }, color: '#FFD700' },
      { type: 'hazardSign', position: { x: 11, y: 1, z: 10 }, color: '#FFD700' },
      // Bollards along walking path
      { type: 'bollard', position: { x: 7, y: 1, z: 11 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 15, y: 1, z: 11 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 7, y: 1, z: 2 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 15, y: 1, z: 2 }, color: '#FFD700' },

      // ====================================================
      // LIGHTING
      // ====================================================
      // Spotlights on top of gantry corners
      { type: 'spotlight', position: { x: 8, y: 12, z: 4 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.5, radius: 10 } },
      { type: 'spotlight', position: { x: 14, y: 12, z: 4 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.5, radius: 10 } },
      { type: 'spotlight', position: { x: 8, y: 12, z: 10 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.5, radius: 10 } },
      { type: 'spotlight', position: { x: 14, y: 12, z: 10 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.5, radius: 10 } },
      // Hanging fixtures at upper service level
      { type: 'lightFixture', position: { x: 11, y: 8, z: 4 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 5 } },
      { type: 'lightFixture', position: { x: 11, y: 8, z: 10 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 5 } },
      // Aviation warning lights on top of missile gantry
      { type: 'bulb', position: { x: 8, y: 13, z: 4 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2.0, radius: 4 } },
      { type: 'bulb', position: { x: 14, y: 13, z: 10 }, color: '#FF0000', emissive: { enabled: true, color: '#FF0000', intensity: 2.0, radius: 4 } },
    ]
  },

  // =====================
  // STANDALONE FACILITIES (no roofs, open-air)
  // =====================
  radarStation: {
    name: 'Radar Station',
    category: 'ammo',
    description: 'Tall radar dish on a truss tower with control bunker below, antenna farm and warning lights',
    blocks: [
      // === GROUND PAD ===
      ...makeFloor(0, 0, 0, 14, 12, '#5A5A5A'),
      ...makeRow(0, 0, 0, 14, 'X', 'panel', '#FFD700'),
      ...makeRow(0, 0, 11, 14, 'X', 'panel', '#FFD700'),

      // === ROOFLESS CONTROL BUNKER (4 walls, no top) ===
      ...makeWallX(2, 1, 3, 5, 3, '#5A6678'),
      ...makeWallX(2, 1, 7, 5, 3, '#5A6678'),
      ...makeWallZ(2, 1, 4, 3, 3, '#5A6678'),
      ...makeWallZ(6, 1, 4, 3, 3, '#5A6678'),
      // Door (front gap)
      { type: 'doorFrame', position: { x: 4, y: 1, z: 3 }, color: '#7A2A2A' },
      { type: 'doorFrame', position: { x: 4, y: 2, z: 3 }, color: '#7A2A2A' },
      // Observation windows
      { type: 'windowFrame', position: { x: 2, y: 2, z: 5 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 6, y: 2, z: 5 }, color: '#4682B4' },
      { type: 'windowFrame', position: { x: 4, y: 3, z: 7 }, color: '#4682B4' },
      // Inside (no roof, open to sky)
      { type: 'controlPanel', position: { x: 3, y: 1, z: 6 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 4, y: 1, z: 6 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.6, radius: 2 } },
      { type: 'monitor', position: { x: 5, y: 1, z: 6 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.6, radius: 2 } },
      { type: 'cabinet', position: { x: 3, y: 1, z: 4 }, color: '#3F4F5F' },
      { type: 'cabinet', position: { x: 5, y: 1, z: 4 }, color: '#3F4F5F' },

      // === RADAR TOWER (4 truss columns) ===
      // 4 corner pillars rising 7 high
      { type: 'pillar', position: { x: 8, y: 1, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 2, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 3, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 4, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 5, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 6, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 7, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 1, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 2, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 3, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 4, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 5, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 6, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 7, z: 4 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 1, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 2, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 3, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 4, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 5, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 6, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 8, y: 7, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 1, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 2, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 3, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 4, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 5, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 6, z: 8 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 7, z: 8 }, color: '#404040' },

      // X-cross truss bracing between pillars (multiple levels)
      { type: 'truss', position: { x: 9, y: 2, z: 4 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 11, y: 2, z: 4 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 9, y: 4, z: 4 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 11, y: 4, z: 4 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 9, y: 6, z: 4 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 11, y: 6, z: 4 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 9, y: 2, z: 8 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 11, y: 2, z: 8 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 9, y: 4, z: 8 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 11, y: 4, z: 8 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 9, y: 6, z: 8 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 11, y: 6, z: 8 }, color: '#5A5A5A' },
      // Side bracing (adjacent to pillars)
      { type: 'truss', position: { x: 8, y: 3, z: 5 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 8, y: 3, z: 7 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 12, y: 3, z: 5 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 12, y: 3, z: 7 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 8, y: 5, z: 5 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 8, y: 5, z: 7 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 12, y: 5, z: 5 }, color: '#5A5A5A' },
      { type: 'truss', position: { x: 12, y: 5, z: 7 }, color: '#5A5A5A' },

      // Top deck/platform
      ...makeFloor(8, 8, 4, 5, 5, '#3A3A3A'),
      // Railings around deck
      { type: 'railing', position: { x: 8, y: 9, z: 4 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 9, y: 9, z: 4 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 11, y: 9, z: 4 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 12, y: 9, z: 4 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 8, y: 9, z: 8 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 9, y: 9, z: 8 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 11, y: 9, z: 8 }, color: '#5A5A5A' },
      { type: 'railing', position: { x: 12, y: 9, z: 8 }, color: '#5A5A5A' },
      { type: 'railingZ', position: { x: 8, y: 9, z: 5 }, color: '#5A5A5A' },
      { type: 'railingZ', position: { x: 8, y: 9, z: 7 }, color: '#5A5A5A' },
      { type: 'railingZ', position: { x: 12, y: 9, z: 5 }, color: '#5A5A5A' },
      { type: 'railingZ', position: { x: 12, y: 9, z: 7 }, color: '#5A5A5A' },

      // === MAIN RADAR DISH (huge bowl) ===
      // Pivot/mount cone
      { type: 'cone', position: { x: 10, y: 9, z: 6 }, color: '#5A5A5A' },
      // Big silver dish
      { type: 'bowl', position: { x: 10, y: 10, z: 6 }, color: '#D0D0D0' },
      { type: 'bowl', position: { x: 10, y: 11, z: 6 }, color: '#E0E0E0' },
      // Feed horn at center
      { type: 'antenna', position: { x: 10, y: 11, z: 6 }, color: '#1A1A1A' },
      // Counterweight balancing arm
      { type: 'beamX', position: { x: 9, y: 9, z: 6 }, color: '#404040' },
      { type: 'cube', position: { x: 9, y: 9, z: 6 }, color: '#1A1A1A' },

      // Side dishes (smaller, on edges of platform)
      { type: 'cone', position: { x: 8, y: 9, z: 6 }, color: '#5A5A5A' },
      { type: 'bowl', position: { x: 8, y: 10, z: 6 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 8, y: 10, z: 6 }, color: '#1A1A1A' },
      { type: 'cone', position: { x: 12, y: 9, z: 6 }, color: '#5A5A5A' },
      { type: 'bowl', position: { x: 12, y: 10, z: 6 }, color: '#C0C0C0' },
      { type: 'antenna', position: { x: 12, y: 10, z: 6 }, color: '#1A1A1A' },

      // Warning beacons on top
      { type: 'bulb', position: { x: 10, y: 12, z: 6 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 2.0, radius: 5 } },
      { type: 'bulb', position: { x: 9, y: 9, z: 4 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.0, radius: 3 } },
      { type: 'bulb', position: { x: 11, y: 9, z: 8 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.0, radius: 3 } },

      // === ACCESS LADDER UP THE TOWER ===
      { type: 'ladder', position: { x: 8, y: 1, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 2, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 3, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 4, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 5, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 6, z: 5 }, color: '#FFD700' },
      { type: 'ladder', position: { x: 8, y: 7, z: 5 }, color: '#FFD700' },

      // === GROUND-LEVEL DETAILS ===
      // Cable runs leading from bunker to tower
      { type: 'cableX', position: { x: 7, y: 1, z: 5 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 7, y: 1, z: 6 }, color: '#1A1A1A' },
      // Generator
      { type: 'transformer', position: { x: 1, y: 1, z: 9 }, color: '#3F4F5F' },
      { type: 'fuseBox', position: { x: 2, y: 1, z: 9 }, color: '#404040' },
      { type: 'cableX', position: { x: 1, y: 2, z: 9 }, color: '#1A1A1A' },
      // Hazard signs
      { type: 'hazardSign', position: { x: 7, y: 1, z: 1 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 13, y: 1, z: 1 }, color: '#FF4500' },
      // Fuel tank for generator
      { type: 'oilTank', position: { x: 1, y: 1, z: 10 }, color: '#7A2A2A' },
      // Bollards
      { type: 'bollard', position: { x: 8, y: 1, z: 2 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 12, y: 1, z: 2 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 8, y: 1, z: 10 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 12, y: 1, z: 10 }, color: '#FFD700' },
      // Spotlights
      { type: 'spotlight', position: { x: 1, y: 1, z: 1 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },
      { type: 'spotlight', position: { x: 13, y: 1, z: 11 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },
    ]
  },

  energyNode: {
    name: 'Energy Node',
    category: 'ammo',
    description: 'Power core with capacitor banks, transformers and emissive crystal energy spire — open-air',
    blocks: [
      // === GROUND PAD (octagonal-styled) ===
      ...makeFloor(0, 0, 0, 14, 14, '#3A3A3A'),
      // Hexagonal/circular highlight pattern using panels
      { type: 'panel', position: { x: 6, y: 0, z: 5 }, color: '#FFAA00' },
      { type: 'panel', position: { x: 7, y: 0, z: 5 }, color: '#FFAA00' },
      { type: 'panel', position: { x: 5, y: 0, z: 6 }, color: '#FFAA00' },
      { type: 'panel', position: { x: 8, y: 0, z: 6 }, color: '#FFAA00' },
      { type: 'panel', position: { x: 5, y: 0, z: 7 }, color: '#FFAA00' },
      { type: 'panel', position: { x: 8, y: 0, z: 7 }, color: '#FFAA00' },
      { type: 'panel', position: { x: 6, y: 0, z: 8 }, color: '#FFAA00' },
      { type: 'panel', position: { x: 7, y: 0, z: 8 }, color: '#FFAA00' },

      // === CENTRAL CORE PLATFORM ===
      { type: 'octagon', position: { x: 6, y: 1, z: 6 }, color: '#1A1A2A' },
      { type: 'octagon', position: { x: 7, y: 1, z: 6 }, color: '#1A1A2A' },
      { type: 'octagon', position: { x: 6, y: 1, z: 7 }, color: '#1A1A2A' },
      { type: 'octagon', position: { x: 7, y: 1, z: 7 }, color: '#1A1A2A' },
      // Inner core ring (raised)
      { type: 'cylinder', position: { x: 6, y: 2, z: 6 }, color: '#2A2A3A' },
      { type: 'cylinder', position: { x: 7, y: 2, z: 6 }, color: '#2A2A3A' },
      { type: 'cylinder', position: { x: 6, y: 2, z: 7 }, color: '#2A2A3A' },
      { type: 'cylinder', position: { x: 7, y: 2, z: 7 }, color: '#2A2A3A' },

      // === STACKED ENERGY ORBS (emissive, vertical) ===
      { type: 'sphere', position: { x: 6, y: 3, z: 6 }, color: '#00FFFF', emissive: { enabled: true, color: '#00DDFF', intensity: 2.5, radius: 7 } },
      { type: 'sphere', position: { x: 7, y: 3, z: 7 }, color: '#FF00FF', emissive: { enabled: true, color: '#DD00FF', intensity: 2.5, radius: 7 } },
      { type: 'sphere', position: { x: 7, y: 3, z: 6 }, color: '#FFFF00', emissive: { enabled: true, color: '#FFDD00', intensity: 2.5, radius: 7 } },
      { type: 'sphere', position: { x: 6, y: 3, z: 7 }, color: '#00FF00', emissive: { enabled: true, color: '#00DD00', intensity: 2.5, radius: 7 } },
      // Crystal energy spire above orbs (multi-color stack)
      { type: 'crystal', position: { x: 6, y: 4, z: 6 }, color: '#00FFAA', emissive: { enabled: true, color: '#00FFAA', intensity: 2.0, radius: 5 } },
      { type: 'crystalSpike', position: { x: 7, y: 4, z: 7 }, color: '#FF66FF', emissive: { enabled: true, color: '#FF66FF', intensity: 2.0, radius: 5 } },
      { type: 'crystalLarge', position: { x: 6, y: 5, z: 6 }, color: '#00CCFF', emissive: { enabled: true, color: '#00CCFF', intensity: 2.5, radius: 6 } },
      { type: 'crystalSpike', position: { x: 6, y: 6, z: 6 }, color: '#FFFFFF', emissive: { enabled: true, color: '#FFFFFF', intensity: 3.0, radius: 8 } },

      // === CAPACITOR BANKS (around the core, 8 cylinders) ===
      { type: 'cylinder', position: { x: 5, y: 1, z: 6 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 5, y: 2, z: 6 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 5, y: 1, z: 7 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 5, y: 2, z: 7 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 8, y: 1, z: 6 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 8, y: 2, z: 6 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 8, y: 1, z: 7 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 8, y: 2, z: 7 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 6, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 7, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 6, y: 1, z: 8 }, color: '#5A5A5A' },
      { type: 'cylinder', position: { x: 7, y: 1, z: 8 }, color: '#5A5A5A' },
      // Capacitor warning glow on top
      { type: 'bulb', position: { x: 5, y: 3, z: 6 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.0, radius: 3 } },
      { type: 'bulb', position: { x: 5, y: 3, z: 7 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.0, radius: 3 } },
      { type: 'bulb', position: { x: 8, y: 3, z: 6 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.0, radius: 3 } },
      { type: 'bulb', position: { x: 8, y: 3, z: 7 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.0, radius: 3 } },

      // === 4 LIGHTNING ROD TOWERS (corners of the pad) ===
      // NW
      { type: 'pillarRound', position: { x: 2, y: 1, z: 2 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 2, y: 2, z: 2 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 2, y: 3, z: 2 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 2, y: 4, z: 2 }, color: '#5A5A5A' },
      { type: 'pillarRound2', position: { x: 2, y: 5, z: 2 }, color: '#C0C0C0' },
      { type: 'pillarRound2', position: { x: 2, y: 6, z: 2 }, color: '#C0C0C0' },
      // Cable arc to core
      { type: 'cableY', position: { x: 2, y: 7, z: 2 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 1.5, radius: 3 } },
      // NE
      { type: 'pillarRound', position: { x: 11, y: 1, z: 2 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 11, y: 2, z: 2 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 11, y: 3, z: 2 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 11, y: 4, z: 2 }, color: '#5A5A5A' },
      { type: 'pillarRound2', position: { x: 11, y: 5, z: 2 }, color: '#C0C0C0' },
      { type: 'pillarRound2', position: { x: 11, y: 6, z: 2 }, color: '#C0C0C0' },
      { type: 'cableY', position: { x: 11, y: 7, z: 2 }, color: '#FF00FF', emissive: { enabled: true, color: '#FF00FF', intensity: 1.5, radius: 3 } },
      // SW
      { type: 'pillarRound', position: { x: 2, y: 1, z: 11 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 2, y: 2, z: 11 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 2, y: 3, z: 11 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 2, y: 4, z: 11 }, color: '#5A5A5A' },
      { type: 'pillarRound2', position: { x: 2, y: 5, z: 11 }, color: '#C0C0C0' },
      { type: 'pillarRound2', position: { x: 2, y: 6, z: 11 }, color: '#C0C0C0' },
      { type: 'cableY', position: { x: 2, y: 7, z: 11 }, color: '#FFFF00', emissive: { enabled: true, color: '#FFFF00', intensity: 1.5, radius: 3 } },
      // SE
      { type: 'pillarRound', position: { x: 11, y: 1, z: 11 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 11, y: 2, z: 11 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 11, y: 3, z: 11 }, color: '#5A5A5A' },
      { type: 'pillarRound', position: { x: 11, y: 4, z: 11 }, color: '#5A5A5A' },
      { type: 'pillarRound2', position: { x: 11, y: 5, z: 11 }, color: '#C0C0C0' },
      { type: 'pillarRound2', position: { x: 11, y: 6, z: 11 }, color: '#C0C0C0' },
      { type: 'cableY', position: { x: 11, y: 7, z: 11 }, color: '#00FF00', emissive: { enabled: true, color: '#00FF00', intensity: 1.5, radius: 3 } },

      // === TRANSFORMERS (around perimeter) ===
      { type: 'transformer', position: { x: 4, y: 1, z: 1 }, color: '#3F4F5F' },
      { type: 'transformer', position: { x: 9, y: 1, z: 1 }, color: '#3F4F5F' },
      { type: 'transformer', position: { x: 4, y: 1, z: 12 }, color: '#3F4F5F' },
      { type: 'transformer', position: { x: 9, y: 1, z: 12 }, color: '#3F4F5F' },
      // Cable runs along ground
      ...makeRow(4, 1, 0, 6, 'X', 'cableX', '#1A1A1A'),
      ...makeRow(4, 1, 13, 6, 'X', 'cableX', '#1A1A1A'),

      // === COOLING TANKS ===
      { type: 'oilTank', position: { x: 1, y: 1, z: 6 }, color: '#4682B4' },
      { type: 'dome', position: { x: 1, y: 2, z: 6 }, color: '#4682B4' },
      { type: 'oilTank', position: { x: 12, y: 1, z: 6 }, color: '#4682B4' },
      { type: 'dome', position: { x: 12, y: 2, z: 6 }, color: '#4682B4' },
      // Pipes between tanks and core
      { type: 'pipeX', position: { x: 2, y: 1, z: 6 }, color: '#909090' },
      { type: 'pipeX', position: { x: 3, y: 1, z: 6 }, color: '#909090' },
      { type: 'valve', position: { x: 3, y: 1, z: 6 }, color: '#B22222' },

      // === GROUND CONTROL ===
      { type: 'controlPanel', position: { x: 6, y: 1, z: 12 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 7, y: 1, z: 12 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.6, radius: 2 } },
      { type: 'fuseBox', position: { x: 5, y: 1, z: 12 }, color: '#404040' },
      { type: 'powerBox', position: { x: 8, y: 1, z: 12 }, color: '#2F4F4F' },

      // === HAZARD SIGNAGE & FENCING ===
      { type: 'hazardSign', position: { x: 1, y: 1, z: 1 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 12, y: 1, z: 1 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 1, y: 1, z: 12 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 12, y: 1, z: 12 }, color: '#FF4500' },
      // Bollards
      { type: 'bollard', position: { x: 4, y: 1, z: 4 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 9, y: 1, z: 4 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 4, y: 1, z: 9 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 9, y: 1, z: 9 }, color: '#FFD700' },
    ]
  },

  antennaArray: {
    name: 'Antenna Array',
    category: 'ammo',
    description: 'Tall communication antenna array — multiple spires of varying heights with warning lights',
    blocks: [
      // === GROUND PAD ===
      ...makeFloor(0, 0, 0, 14, 10, '#5A5A5A'),

      // === SMALL OPEN BUNKER (no roof) for control ===
      ...makeWallX(1, 1, 1, 4, 2, '#5A6678'),
      ...makeWallZ(1, 1, 2, 1, 2, '#5A6678'),
      ...makeWallZ(4, 1, 2, 1, 2, '#5A6678'),
      // Door gap (no door for open bunker)
      { type: 'doorFrame', position: { x: 2, y: 1, z: 3 }, color: '#7A2A2A' },
      // Inside equipment
      { type: 'controlPanel', position: { x: 2, y: 1, z: 2 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 3, y: 1, z: 2 }, color: '#00FFFF', emissive: { enabled: true, color: '#00FFFF', intensity: 0.5, radius: 2 } },
      { type: 'fuseBox', position: { x: 2, y: 2, z: 1 }, color: '#404040' },

      // === MAIN ANTENNA (tallest, 10 high) ===
      { type: 'pillar', position: { x: 7, y: 1, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 2, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 3, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 4, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 5, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 6, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 7, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 8, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 9, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 7, y: 10, z: 5 }, color: '#5A5A5A' },
      { type: 'antenna', position: { x: 7, y: 11, z: 5 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 7, y: 12, z: 5 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 2.5, radius: 6 } },
      // Cross arms (signal repeaters mid-tower)
      { type: 'beamX', position: { x: 6, y: 6, z: 5 }, color: '#5A5A5A' },
      { type: 'beamX', position: { x: 8, y: 6, z: 5 }, color: '#5A5A5A' },
      { type: 'beamX', position: { x: 6, y: 8, z: 5 }, color: '#5A5A5A' },
      { type: 'beamX', position: { x: 8, y: 8, z: 5 }, color: '#5A5A5A' },
      // Lights at the cross arm tips
      { type: 'bulb', position: { x: 6, y: 6, z: 5 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.0, radius: 3 } },
      { type: 'bulb', position: { x: 8, y: 6, z: 5 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.0, radius: 3 } },
      // Guy wires (cables down to ground)
      { type: 'cableY', position: { x: 7, y: 9, z: 4 }, color: '#5A5A5A' },
      { type: 'cableY', position: { x: 7, y: 9, z: 6 }, color: '#5A5A5A' },

      // === MEDIUM ANTENNA #1 (left side, 7 high) ===
      { type: 'pillar', position: { x: 4, y: 1, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 4, y: 2, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 4, y: 3, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 4, y: 4, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 4, y: 5, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 4, y: 6, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 4, y: 7, z: 7 }, color: '#5A5A5A' },
      { type: 'antenna', position: { x: 4, y: 8, z: 7 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 4, y: 9, z: 7 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.5, radius: 4 } },

      // === MEDIUM ANTENNA #2 (right side, 8 high) ===
      { type: 'pillar', position: { x: 10, y: 1, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 2, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 3, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 4, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 5, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 6, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 7, z: 7 }, color: '#404040' },
      { type: 'pillar', position: { x: 10, y: 8, z: 7 }, color: '#5A5A5A' },
      { type: 'antenna', position: { x: 10, y: 9, z: 7 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 10, y: 10, z: 7 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.5, radius: 4 } },

      // === SHORT ANTENNAS (5 high) ===
      { type: 'pillar', position: { x: 2, y: 1, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 2, y: 2, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 2, y: 3, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 2, y: 4, z: 5 }, color: '#404040' },
      { type: 'antenna', position: { x: 2, y: 5, z: 5 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 2, y: 6, z: 5 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.0, radius: 3 } },

      { type: 'pillar', position: { x: 12, y: 1, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 2, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 3, z: 5 }, color: '#404040' },
      { type: 'pillar', position: { x: 12, y: 4, z: 5 }, color: '#404040' },
      { type: 'antenna', position: { x: 12, y: 5, z: 5 }, color: '#1A1A1A' },
      { type: 'bulb', position: { x: 12, y: 6, z: 5 }, color: '#FF0000', emissive: { enabled: true, color: '#FF2222', intensity: 1.0, radius: 3 } },

      // === SATELLITE DISH (small, ground-mounted) ===
      { type: 'pillar', position: { x: 7, y: 1, z: 1 }, color: '#5A5A5A' },
      { type: 'cone', position: { x: 7, y: 2, z: 1 }, color: '#5A5A5A' },
      { type: 'bowl', position: { x: 7, y: 3, z: 1 }, color: '#E0E0E0' },
      { type: 'antenna', position: { x: 7, y: 3, z: 1 }, color: '#1A1A1A' },

      // === ANOTHER DISH ===
      { type: 'pillar', position: { x: 7, y: 1, z: 9 }, color: '#5A5A5A' },
      { type: 'cone', position: { x: 7, y: 2, z: 9 }, color: '#5A5A5A' },
      { type: 'bowl', position: { x: 7, y: 3, z: 9 }, color: '#D0D0D0' },
      { type: 'antenna', position: { x: 7, y: 3, z: 9 }, color: '#1A1A1A' },

      // === TRANSFORMERS / POWER ===
      { type: 'transformer', position: { x: 1, y: 1, z: 8 }, color: '#3F4F5F' },
      { type: 'transformer', position: { x: 12, y: 1, z: 1 }, color: '#3F4F5F' },
      { type: 'cableX', position: { x: 6, y: 1, z: 5 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 8, y: 1, z: 5 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 5, y: 1, z: 7 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 9, y: 1, z: 7 }, color: '#1A1A1A' },

      // === HAZARD & DETAILS ===
      { type: 'hazardSign', position: { x: 1, y: 1, z: 5 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 13, y: 1, z: 5 }, color: '#FF4500' },
      { type: 'spotlight', position: { x: 1, y: 1, z: 1 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },
      { type: 'spotlight', position: { x: 13, y: 1, z: 9 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },
      // Fence around outer perimeter
      { type: 'fence', position: { x: 0, y: 1, z: 0 }, color: '#3A3A3A' },
      { type: 'fence', position: { x: 6, y: 1, z: 0 }, color: '#3A3A3A' },
      { type: 'fence', position: { x: 13, y: 1, z: 0 }, color: '#3A3A3A' },
      { type: 'fence', position: { x: 0, y: 1, z: 9 }, color: '#3A3A3A' },
      { type: 'fence', position: { x: 6, y: 1, z: 9 }, color: '#3A3A3A' },
      { type: 'fence', position: { x: 13, y: 1, z: 9 }, color: '#3A3A3A' },
    ]
  },

  ammoFactoryOpen: {
    name: 'Ammo Factory (Open)',
    category: 'ammo',
    description: 'Roofless ammunition assembly line under steel framework — visible from above',
    blocks: [
      // === FLOOR ===
      ...makeFloor(0, 0, 0, 14, 10, '#4A4A4A'),
      // Drainage
      { type: 'grate', position: { x: 5, y: 0, z: 5 }, color: '#2A2A2A' },
      { type: 'grate', position: { x: 8, y: 0, z: 5 }, color: '#2A2A2A' },
      // Yellow safety lines
      ...makeRow(0, 0, 0, 14, 'X', 'panel', '#FFD700'),
      ...makeRow(0, 0, 9, 14, 'X', 'panel', '#FFD700'),

      // === STEEL FRAME (open frame, no roof) ===
      // Corner I-beam columns
      { type: 'iBeam', position: { x: 0, y: 1, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 2, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 3, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 4, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 1, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 2, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 3, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 4, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 1, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 2, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 3, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 0, y: 4, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 1, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 2, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 3, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 13, y: 4, z: 8 }, color: '#7A2A2A' },
      // Mid-span columns
      { type: 'iBeam', position: { x: 7, y: 1, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 7, y: 2, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 7, y: 3, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 7, y: 4, z: 1 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 7, y: 1, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 7, y: 2, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 7, y: 3, z: 8 }, color: '#7A2A2A' },
      { type: 'iBeam', position: { x: 7, y: 4, z: 8 }, color: '#7A2A2A' },
      // Top crossbeams (gantry rails — not a roof, just open beams)
      ...makeRow(1, 5, 1, 12, 'X', 'beamX', '#404040'),
      ...makeRow(1, 5, 8, 12, 'X', 'beamX', '#404040'),
      ...makeRow(0, 5, 2, 6, 'Z', 'beamZ', '#404040'),
      ...makeRow(7, 5, 2, 6, 'Z', 'beamZ', '#404040'),
      ...makeRow(13, 5, 2, 6, 'Z', 'beamZ', '#404040'),

      // === ASSEMBLY LINE 1 (front) ===
      // Brass hopper
      { type: 'pillar', position: { x: 1, y: 1, z: 3 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 1, y: 2, z: 3 }, color: '#5A5A5A' },
      { type: 'hopper', position: { x: 1, y: 3, z: 3 }, color: '#707070' },
      { type: 'shellCasing', position: { x: 1, y: 4, z: 3 }, color: '#DAA520' },
      // Stamper press
      { type: 'stamperPress', position: { x: 2, y: 1, z: 3 }, color: '#3A3A3A' },
      // Conveyor belt run with cartridges riding
      { type: 'conveyorAmmo', position: { x: 3, y: 1, z: 3 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 4, y: 1, z: 3 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 5, y: 1, z: 3 }, color: '#2A2A2A' },
      { type: 'conveyorAmmo', position: { x: 6, y: 1, z: 3 }, color: '#2A2A2A' },
      // Robotic arms over the line
      { type: 'assemblyArm', position: { x: 4, y: 1, z: 2 }, color: '#FFA500' },
      { type: 'assemblyArm', position: { x: 5, y: 1, z: 4 }, color: '#FFA500' },
      // Powder feed
      { type: 'pillar', position: { x: 5, y: 1, z: 4 }, color: '#5A5A5A' },
      { type: 'gunpowderBarrel', position: { x: 5, y: 2, z: 4 }, color: '#1C1C1C' },
      { type: 'pipeY', position: { x: 5, y: 2, z: 3 }, color: '#808080' },
      { type: 'valve', position: { x: 5, y: 2, z: 3 }, color: '#B22222' },
      // Output crates
      { type: 'cartridgeBox', position: { x: 8, y: 1, z: 3 }, color: '#8B4513' },
      { type: 'pallet', position: { x: 9, y: 1, z: 3 }, color: '#A0522D' },
      { type: 'ammoCrate', position: { x: 9, y: 1, z: 3 }, color: '#556B2F' },
      { type: 'ammoCrate', position: { x: 9, y: 2, z: 3 }, color: '#4F5F40' },
      { type: 'ammoCan', position: { x: 10, y: 1, z: 3 }, color: '#3F4A2A' },
      { type: 'ammoCan', position: { x: 11, y: 1, z: 3 }, color: '#3F4A2A' },

      // === ASSEMBLY LINE 2 (back, shells) ===
      { type: 'pillar', position: { x: 1, y: 1, z: 6 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 1, y: 2, z: 6 }, color: '#5A5A5A' },
      { type: 'hopper', position: { x: 1, y: 3, z: 6 }, color: '#707070' },
      { type: 'stamperPress', position: { x: 2, y: 1, z: 6 }, color: '#3A3A3A' },
      { type: 'conveyor', position: { x: 3, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 4, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 5, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'mortarShell', position: { x: 4, y: 2, z: 6 }, color: '#3D4D2D' },
      { type: 'conveyor', position: { x: 6, y: 1, z: 6 }, color: '#2A2A2A' },
      { type: 'mortarShell', position: { x: 6, y: 2, z: 6 }, color: '#3D4D2D' },
      { type: 'assemblyArm', position: { x: 6, y: 1, z: 5 }, color: '#FFA500' },
      // Output: artillery shells on rack
      { type: 'pallet', position: { x: 8, y: 1, z: 6 }, color: '#A0522D' },
      { type: 'artilleryShell', position: { x: 8, y: 1, z: 6 }, color: '#4F5F40' },
      { type: 'pallet', position: { x: 9, y: 1, z: 6 }, color: '#A0522D' },
      { type: 'artilleryShell', position: { x: 9, y: 1, z: 6 }, color: '#4F5F40' },
      { type: 'pallet', position: { x: 10, y: 1, z: 6 }, color: '#A0522D' },
      { type: 'artilleryShell', position: { x: 10, y: 1, z: 6 }, color: '#4F5F40' },
      { type: 'rocketShell', position: { x: 11, y: 1, z: 6 }, color: '#3F3F3F' },

      // === CHAIN HOIST OVER LINE 1 (factory atmosphere) ===
      { type: 'chain', position: { x: 4, y: 4, z: 3 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 4, y: 3, z: 3 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 9, y: 4, z: 6 }, color: '#5A5A5A' },
      { type: 'chain', position: { x: 9, y: 3, z: 6 }, color: '#5A5A5A' },

      // === CONTROL & SAFETY ===
      { type: 'controlPanel', position: { x: 12, y: 1, z: 3 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 12, y: 1, z: 4 }, color: '#1A1A1A' },
      { type: 'controlPanel', position: { x: 12, y: 1, z: 6 }, color: '#2F4F4F' },
      { type: 'fuseBox', position: { x: 12, y: 2, z: 3 }, color: '#404040' },
      { type: 'powerBox', position: { x: 12, y: 2, z: 6 }, color: '#2F4F4F' },
      { type: 'hazardSign', position: { x: 0, y: 1, z: 5 }, color: '#FFD700' },
      { type: 'hazardSign', position: { x: 13, y: 1, z: 5 }, color: '#FF4500' },
      // Bin for scrap shells
      { type: 'bin', position: { x: 0, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'shellCasing', position: { x: 0, y: 2, z: 5 }, color: '#B8860B' },

      // === LIGHTING (hanging from gantry rails) ===
      { type: 'lightFixture', position: { x: 4, y: 4, z: 1 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 5 } },
      { type: 'lightFixture', position: { x: 9, y: 4, z: 1 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 5 } },
      { type: 'lightFixture', position: { x: 4, y: 4, z: 8 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 5 } },
      { type: 'lightFixture', position: { x: 9, y: 4, z: 8 }, color: '#FFFF99', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 5 } },
      { type: 'industrialFan', position: { x: 7, y: 3, z: 1 }, color: '#404040' },
      { type: 'industrialFan', position: { x: 7, y: 3, z: 8 }, color: '#404040' },
    ]
  },

  materialRefinery: {
    name: 'Material Refinery',
    category: 'ammo',
    description: 'Open-air ore refinery: smelter with glowing furnace, smokestack, ingot conveyor, raw material yard',
    blocks: [
      // === GROUND PAD ===
      ...makeFloor(0, 0, 0, 14, 12, '#4A4A4A'),
      // Yellow stripes
      ...makeRow(0, 0, 0, 14, 'X', 'panel', '#FFD700'),
      ...makeRow(0, 0, 11, 14, 'X', 'panel', '#FFD700'),

      // === MAIN SMELTER (3x3, brick, no roof) ===
      // Brick walls (3 high)
      ...makeWallX(4, 1, 4, 4, 3, '#8B4513'),
      ...makeWallX(4, 1, 7, 4, 3, '#8B4513'),
      ...makeWallZ(4, 1, 5, 2, 3, '#8B4513'),
      ...makeWallZ(7, 1, 5, 2, 3, '#8B4513'),
      // Furnace opening with arch
      { type: 'archLow', position: { x: 5, y: 1, z: 4 }, color: '#1A1A1A' },
      { type: 'archLow', position: { x: 6, y: 1, z: 4 }, color: '#1A1A1A' },
      // Glowing molten interior (visible because no roof and front is open)
      { type: 'cube', position: { x: 5, y: 1, z: 5 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 2.0, radius: 6 } },
      { type: 'cube', position: { x: 6, y: 1, z: 5 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 2.0, radius: 6 } },
      { type: 'cube', position: { x: 5, y: 1, z: 6 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 2.0, radius: 6 } },
      { type: 'cube', position: { x: 6, y: 1, z: 6 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 2.0, radius: 6 } },
      // Decorative band of slabs at top of brick wall
      { type: 'slab', position: { x: 4, y: 4, z: 4 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 5, y: 4, z: 4 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 6, y: 4, z: 4 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 7, y: 4, z: 4 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 4, y: 4, z: 7 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 5, y: 4, z: 7 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 6, y: 4, z: 7 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 7, y: 4, z: 7 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 4, y: 4, z: 5 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 4, y: 4, z: 6 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 7, y: 4, z: 5 }, color: '#5A2A2A' },
      { type: 'slab', position: { x: 7, y: 4, z: 6 }, color: '#5A2A2A' },

      // === SMOKESTACK (rises from inside the smelter) ===
      { type: 'chimney', position: { x: 5, y: 4, z: 5 }, color: '#3A3A3A' },
      { type: 'chimney', position: { x: 5, y: 5, z: 5 }, color: '#3A3A3A' },
      { type: 'chimney', position: { x: 5, y: 6, z: 5 }, color: '#2A2A2A' },
      { type: 'chimney', position: { x: 5, y: 7, z: 5 }, color: '#1A1A1A' },
      // Smoke (emissive cloud)
      { type: 'sphere', position: { x: 5, y: 8, z: 5 }, color: '#5A5A5A', emissive: { enabled: true, color: '#404040', intensity: 0.4, radius: 3 } },
      // Pipe outlet (steam vent)
      { type: 'pipeY', position: { x: 6, y: 4, z: 6 }, color: '#909090' },
      { type: 'pipeY', position: { x: 6, y: 5, z: 6 }, color: '#909090' },
      { type: 'vent', position: { x: 6, y: 6, z: 6 }, color: '#606060' },

      // === MATERIAL FEED FROM ABOVE (hopper on tower) ===
      { type: 'pillar', position: { x: 1, y: 1, z: 5 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 1, y: 2, z: 5 }, color: '#5A5A5A' },
      { type: 'pillar', position: { x: 1, y: 3, z: 5 }, color: '#5A5A5A' },
      { type: 'hopper', position: { x: 1, y: 4, z: 5 }, color: '#707070' },
      { type: 'rockPile', position: { x: 1, y: 5, z: 5 }, color: '#5A4A3A' },
      // Conveyor feeding ore into hopper from outside
      { type: 'conveyor', position: { x: 1, y: 1, z: 1 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 1, y: 1, z: 2 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 1, y: 1, z: 3 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 1, y: 1, z: 4 }, color: '#2A2A2A' },
      { type: 'rockSmall', position: { x: 1, y: 2, z: 2 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 1, y: 2, z: 3 }, color: '#4A3A2A' },
      // Pipe from hopper to smelter
      { type: 'pipeX', position: { x: 2, y: 4, z: 5 }, color: '#909090' },
      { type: 'pipeX', position: { x: 3, y: 4, z: 5 }, color: '#909090' },
      { type: 'pipeElbowXY', position: { x: 4, y: 4, z: 5 }, color: '#909090' },

      // === MOLTEN INGOT OUTPUT CONVEYOR (east-bound) ===
      { type: 'conveyor', position: { x: 8, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 9, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 10, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 11, y: 1, z: 5 }, color: '#2A2A2A' },
      { type: 'conveyor', position: { x: 12, y: 1, z: 5 }, color: '#2A2A2A' },
      // Hot ingots (emissive)
      { type: 'cube', position: { x: 8, y: 2, z: 5 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.5, radius: 3 } },
      { type: 'cube', position: { x: 9, y: 2, z: 5 }, color: '#FF8800', emissive: { enabled: true, color: '#FF8800', intensity: 1.0, radius: 2 } },
      { type: 'cube', position: { x: 10, y: 2, z: 5 }, color: '#DAA520' },
      { type: 'cube', position: { x: 11, y: 2, z: 5 }, color: '#DAA520' },
      { type: 'cube', position: { x: 12, y: 2, z: 5 }, color: '#B8860B' },

      // === COOLING TANK (water for quenching ingots) ===
      { type: 'oilTank', position: { x: 8, y: 1, z: 8 }, color: '#4682B4' },
      { type: 'oilTank', position: { x: 8, y: 2, z: 8 }, color: '#5A92C4' },
      { type: 'dome', position: { x: 8, y: 3, z: 8 }, color: '#4682B4' },
      // Pipe from tank to conveyor
      { type: 'pipeY', position: { x: 8, y: 3, z: 7 }, color: '#909090' },
      { type: 'pipeZ', position: { x: 8, y: 3, z: 6 }, color: '#909090' },
      { type: 'valve', position: { x: 8, y: 3, z: 7 }, color: '#B22222' },
      // Steam from quenching
      { type: 'sphere', position: { x: 9, y: 3, z: 7 }, color: '#D0D0D0', emissive: { enabled: true, color: '#A0A0A0', intensity: 0.4, radius: 2 } },

      // === RAW MATERIAL YARD (left side, ore piles & sacks) ===
      { type: 'rockPile', position: { x: 11, y: 1, z: 1 }, color: '#5A4A3A' },
      { type: 'rockPile', position: { x: 11, y: 1, z: 2 }, color: '#4A3A2A' },
      { type: 'rockPile', position: { x: 11, y: 1, z: 3 }, color: '#5A4A3A' },
      { type: 'rockLarge', position: { x: 12, y: 1, z: 2 }, color: '#3A3A2A' },
      { type: 'boulder', position: { x: 12, y: 1, z: 3 }, color: '#4A3A2A' },
      { type: 'sack', position: { x: 12, y: 1, z: 1 }, color: '#8B7355' },
      { type: 'sack', position: { x: 13, y: 1, z: 1 }, color: '#8B7355' },
      { type: 'sack', position: { x: 13, y: 1, z: 2 }, color: '#8B7355' },
      // Crate of refined ingots stacked
      { type: 'pallet', position: { x: 12, y: 1, z: 8 }, color: '#A0522D' },
      { type: 'crateLarge', position: { x: 12, y: 1, z: 8 }, color: '#5A4A2A' },
      { type: 'crateLarge', position: { x: 12, y: 2, z: 8 }, color: '#5A4A2A' },
      { type: 'pallet', position: { x: 12, y: 1, z: 9 }, color: '#A0522D' },
      { type: 'crateLarge', position: { x: 12, y: 1, z: 9 }, color: '#5A4A2A' },
      { type: 'pallet', position: { x: 13, y: 1, z: 8 }, color: '#A0522D' },
      { type: 'cube', position: { x: 13, y: 1, z: 8 }, color: '#DAA520' },
      { type: 'cube', position: { x: 13, y: 2, z: 8 }, color: '#DAA520' },
      { type: 'cube', position: { x: 13, y: 1, z: 9 }, color: '#B8860B' },

      // === CONTROL OPERATOR STATION ===
      { type: 'platform', position: { x: 0, y: 1, z: 9 }, color: '#3A3A3A' },
      { type: 'controlPanel', position: { x: 1, y: 1, z: 9 }, color: '#2F4F4F' },
      { type: 'monitor', position: { x: 2, y: 1, z: 9 }, color: '#FF6600', emissive: { enabled: true, color: '#FF6600', intensity: 0.5, radius: 2 } },
      { type: 'fuseBox', position: { x: 0, y: 2, z: 9 }, color: '#404040' },
      { type: 'cableX', position: { x: 1, y: 2, z: 9 }, color: '#1A1A1A' },
      { type: 'cableX', position: { x: 2, y: 2, z: 9 }, color: '#1A1A1A' },

      // === HAZARD & DETAILS ===
      { type: 'hazardSign', position: { x: 0, y: 1, z: 5 }, color: '#FF4500' },
      { type: 'hazardSign', position: { x: 13, y: 1, z: 5 }, color: '#FF4500' },
      { type: 'sign', position: { x: 7, y: 1, z: 1 }, color: '#FFD700' },
      // Fire extinguisher
      { type: 'pillar2', position: { x: 0, y: 1, z: 4 }, color: '#3A3A3A' },
      { type: 'cylinder', position: { x: 0, y: 1, z: 4 }, color: '#C70039' },
      // Bollards
      { type: 'bollard', position: { x: 3, y: 1, z: 4 }, color: '#FFD700' },
      { type: 'bollard', position: { x: 8, y: 1, z: 4 }, color: '#FFD700' },
      // Industrial fan
      { type: 'industrialFan', position: { x: 7, y: 2, z: 1 }, color: '#404040' },
      { type: 'industrialFan', position: { x: 7, y: 2, z: 8 }, color: '#404040' },
      // Spotlight
      { type: 'spotlight', position: { x: 1, y: 1, z: 1 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },
      { type: 'spotlight', position: { x: 13, y: 1, z: 11 }, color: '#FFFFAA', emissive: { enabled: true, color: '#FFFFAA', intensity: 1.0, radius: 6 } },
    ]
  },

  // =====================
  // RUINS & HUTS
  // =====================
  decayedTenement: {
    name: 'Decayed Tenement',
    category: 'ruins',
    description: 'Abandoned urban tenement with partially collapsed floors, broken windows, graffiti and rubble',
    blocks: [
      // === STREET / SIDEWALK ===
      ...makeFloor(0, 0, 0, 9, 9, '#4A4A4A'),
      // Cracks
      { type: 'panel', position: { x: 1, y: 0, z: 5 }, color: '#2A2A2A' },
      { type: 'panel', position: { x: 7, y: 0, z: 3 }, color: '#2A2A2A' },
      { type: 'panel', position: { x: 4, y: 0, z: 8 }, color: '#2A2A2A' },
      // Broken curb
      { type: 'step', position: { x: 0, y: 0, z: 3 }, color: '#5A5A5A' },
      { type: 'step', position: { x: 0, y: 0, z: 4 }, color: '#5A5A5A' },

      // === GROUND FLOOR (intact, faded brick #7A6655) ===
      // Front wall (z=2) with broken doorway
      { type: 'cube', position: { x: 2, y: 1, z: 2 }, color: '#7A6655' },
      { type: 'cube', position: { x: 3, y: 1, z: 2 }, color: '#7A6655' },
      { type: 'doorFrame', position: { x: 4, y: 1, z: 2 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 5, y: 1, z: 2 }, color: '#7A6655' },
      { type: 'cube', position: { x: 6, y: 1, z: 2 }, color: '#5A4A3A' }, // darker decay
      // Back wall (z=6)
      ...makeRow(2, 1, 6, 5, 'X', 'cube', '#7A6655'),
      // Left wall (x=2)
      { type: 'cube', position: { x: 2, y: 1, z: 3 }, color: '#7A6655' },
      { type: 'cube', position: { x: 2, y: 1, z: 4 }, color: '#5A4A3A' },
      { type: 'cube', position: { x: 2, y: 1, z: 5 }, color: '#7A6655' },
      // Right wall (x=6)
      { type: 'cube', position: { x: 6, y: 1, z: 3 }, color: '#7A6655' },
      { type: 'cube', position: { x: 6, y: 1, z: 4 }, color: '#7A6655' },
      { type: 'cube', position: { x: 6, y: 1, z: 5 }, color: '#5A4A3A' },

      // === 2ND FLOOR (some windows broken) ===
      // Front wall
      { type: 'cube', position: { x: 2, y: 2, z: 2 }, color: '#7A6655' },
      { type: 'windowFrame', position: { x: 3, y: 2, z: 2 }, color: '#1A1A1A' }, // broken (no glass)
      { type: 'cube', position: { x: 4, y: 2, z: 2 }, color: '#7A6655' },
      { type: 'windowFrame', position: { x: 5, y: 2, z: 2 }, color: '#3F4F5F' }, // intact
      { type: 'cube', position: { x: 6, y: 2, z: 2 }, color: '#7A6655' },
      // Back wall
      { type: 'cube', position: { x: 2, y: 2, z: 6 }, color: '#7A6655' },
      { type: 'cube', position: { x: 3, y: 2, z: 6 }, color: '#7A6655' },
      { type: 'cube', position: { x: 4, y: 2, z: 6 }, color: '#7A6655' },
      { type: 'cube', position: { x: 5, y: 2, z: 6 }, color: '#5A4A3A' },
      { type: 'cube', position: { x: 6, y: 2, z: 6 }, color: '#7A6655' },
      // Left wall (with missing chunk)
      { type: 'cube', position: { x: 2, y: 2, z: 3 }, color: '#7A6655' },
      // gap at z=4 (collapse)
      { type: 'cube', position: { x: 2, y: 2, z: 5 }, color: '#7A6655' },
      // Right wall (intact)
      ...makeRow(6, 2, 3, 3, 'Z', 'cube', '#7A6655'),

      // 2nd floor interior floor (partial - center missing)
      { type: 'cube', position: { x: 3, y: 2, z: 3 }, color: '#5A4A3A' },
      { type: 'cube', position: { x: 5, y: 2, z: 3 }, color: '#5A4A3A' },
      { type: 'cube', position: { x: 3, y: 2, z: 5 }, color: '#5A4A3A' },
      { type: 'cube', position: { x: 5, y: 2, z: 5 }, color: '#5A4A3A' },
      // Hole in floor (broken - leave empty)

      // === 3RD FLOOR (partially collapsed) ===
      // Front wall - missing right side
      { type: 'cube', position: { x: 2, y: 3, z: 2 }, color: '#7A6655' },
      { type: 'cube', position: { x: 3, y: 3, z: 2 }, color: '#7A6655' },
      { type: 'cube', position: { x: 4, y: 3, z: 2 }, color: '#5A4A3A' },
      // gap (collapsed)
      // Back wall
      { type: 'cube', position: { x: 2, y: 3, z: 6 }, color: '#7A6655' },
      { type: 'cube', position: { x: 3, y: 3, z: 6 }, color: '#7A6655' },
      { type: 'cube', position: { x: 4, y: 3, z: 6 }, color: '#5A4A3A' },
      // Left wall
      { type: 'cube', position: { x: 2, y: 3, z: 3 }, color: '#7A6655' },
      { type: 'cube', position: { x: 2, y: 3, z: 4 }, color: '#7A6655' },
      { type: 'cube', position: { x: 2, y: 3, z: 5 }, color: '#5A4A3A' },
      // Exposed I-beams from collapse
      { type: 'iBeam', position: { x: 5, y: 3, z: 3 }, color: '#3A3A3A' },
      { type: 'iBeam', position: { x: 5, y: 3, z: 5 }, color: '#3A3A3A' },

      // === 4TH FLOOR (mostly gone — only fragments remain) ===
      { type: 'cube', position: { x: 2, y: 4, z: 2 }, color: '#5A4A3A' },
      { type: 'cube', position: { x: 2, y: 4, z: 3 }, color: '#5A4A3A' },
      { type: 'cube', position: { x: 2, y: 4, z: 6 }, color: '#5A4A3A' },
      { type: 'iBeam', position: { x: 3, y: 4, z: 2 }, color: '#3A3A3A' },
      // Lonely remnant chunk
      { type: 'cube', position: { x: 2, y: 5, z: 2 }, color: '#5A4A3A' },

      // === EXPOSED REBAR / TWISTED METAL on top ===
      { type: 'pillar2', position: { x: 4, y: 4, z: 4 }, color: '#3A3A3A' },
      { type: 'pillar2', position: { x: 5, y: 4, z: 5 }, color: '#3A3A3A' },
      { type: 'pillarRound2', position: { x: 4, y: 5, z: 4 }, color: '#5A4A3A' },

      // === GRAFFITI (colored panels on walls) ===
      { type: 'panel', position: { x: 3, y: 1, z: 2 }, color: '#FF00FF' }, // pink tag
      { type: 'panel', position: { x: 5, y: 1, z: 2 }, color: '#00FF00' }, // green tag
      { type: 'panel', position: { x: 2, y: 1, z: 4 }, color: '#FFFF00' }, // yellow tag

      // === BROKEN WINDOWS (boarded up) ===
      { type: 'panel', position: { x: 4, y: 1, z: 6 }, color: '#5A4A3A' },
      { type: 'panel', position: { x: 5, y: 2, z: 6 }, color: '#5A4A3A' },

      // === RUBBLE PILE (in front from collapse) ===
      { type: 'rockPile', position: { x: 7, y: 1, z: 2 }, color: '#7A6655' },
      { type: 'rockPile', position: { x: 7, y: 1, z: 3 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 8, y: 1, z: 2 }, color: '#7A6655' },
      { type: 'cube', position: { x: 7, y: 1, z: 4 }, color: '#7A6655' },
      { type: 'rockSmall', position: { x: 7, y: 2, z: 4 }, color: '#5A4A3A' },
      // Broken brick chunks (small cubes)
      { type: 'quarter', position: { x: 8, y: 1, z: 5 }, color: '#7A6655' },
      { type: 'quarter', position: { x: 7, y: 1, z: 6 }, color: '#5A4A3A' },

      // === ABANDONED OBJECTS ===
      // Dumpster
      { type: 'dumpster', position: { x: 1, y: 1, z: 1 }, color: '#3A5A3A' },
      // Trash can
      { type: 'bin', position: { x: 1, y: 1, z: 7 }, color: '#3A3A3A' },
      // Barrel fire (homeless camp)
      { type: 'oilBarrel', position: { x: 8, y: 1, z: 7 }, color: '#5A2A2A' },
      { type: 'sphere', position: { x: 8, y: 2, z: 7 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 1.5, radius: 4 } },
      // Cardboard box
      { type: 'cardboardBox', position: { x: 1, y: 1, z: 8 }, color: '#A0826D' },
      { type: 'cardboardBox', position: { x: 2, y: 1, z: 8 }, color: '#8B7355' },

      // === VINES & GROWTH (nature reclaiming) ===
      { type: 'vine', position: { x: 6, y: 2, z: 6 }, color: '#3A5A2A' },
      { type: 'vine', position: { x: 2, y: 3, z: 4 }, color: '#3A5A2A' },
      { type: 'moss', position: { x: 7, y: 1, z: 5 }, color: '#5A7A3A' },
      { type: 'moss', position: { x: 6, y: 1, z: 6 }, color: '#5A7A3A' },
      { type: 'bush', position: { x: 8, y: 1, z: 4 }, color: '#3A5A2A' },

      // === STREET LAMP (broken, hanging) ===
      { type: 'pillar2', position: { x: 0, y: 1, z: 1 }, color: '#3A3A3A' },
      { type: 'pillar2', position: { x: 0, y: 2, z: 1 }, color: '#3A3A3A' },
      { type: 'pillar2', position: { x: 0, y: 3, z: 1 }, color: '#3A3A3A' },
      { type: 'lightFixture', position: { x: 0, y: 4, z: 1 }, color: '#3A3A3A' }, // broken, not emissive

      // === STREET DEBRIS ===
      { type: 'trafficCone', position: { x: 4, y: 1, z: 0 }, color: '#FF4500' },
      { type: 'crate', position: { x: 1, y: 1, z: 5 }, color: '#5A4A3A' },
    ]
  },

  ancientTemple: {
    name: 'Ancient Temple Ruins',
    category: 'ruins',
    description: 'Classical stone temple in ruin — broken columns, fallen pediment, overgrown with moss and vines',
    blocks: [
      // === GROUND (dirt/grass) ===
      ...makeFloor(0, 0, 0, 11, 9, '#5A6A3A'),
      // Stone path
      ...makeRow(2, 0, 4, 7, 'X', 'panel', '#A09080'),

      // === STONE STEPS UP TO TEMPLE (south side) ===
      ...makeRow(3, 1, 1, 5, 'X', 'stairs', '#A09080'),
      ...makeRow(3, 1, 2, 5, 'X', 'cube', '#A09080'),

      // === TEMPLE PODIUM (raised stone base) ===
      ...makeFloor(3, 1, 3, 5, 5, '#A09080'),
      ...makeFloor(3, 2, 3, 5, 5, '#B0A090'),

      // === COLUMN BASES (perimeter) ===
      // 6 columns front (z=3), some intact, some broken
      { type: 'base', position: { x: 3, y: 3, z: 3 }, color: '#A09080' },
      { type: 'base', position: { x: 4, y: 3, z: 3 }, color: '#A09080' },
      { type: 'base', position: { x: 5, y: 3, z: 3 }, color: '#A09080' },
      { type: 'base', position: { x: 6, y: 3, z: 3 }, color: '#A09080' },
      { type: 'base', position: { x: 7, y: 3, z: 3 }, color: '#A09080' },
      // Back (z=7)
      { type: 'base', position: { x: 3, y: 3, z: 7 }, color: '#A09080' },
      { type: 'base', position: { x: 4, y: 3, z: 7 }, color: '#A09080' },
      { type: 'base', position: { x: 5, y: 3, z: 7 }, color: '#A09080' },
      { type: 'base', position: { x: 6, y: 3, z: 7 }, color: '#A09080' },
      { type: 'base', position: { x: 7, y: 3, z: 7 }, color: '#A09080' },

      // === COLUMNS (some intact, some broken) ===
      // Front column 1 - intact (3 segments + capital)
      { type: 'column', position: { x: 3, y: 3, z: 3 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 3, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 3, y: 5, z: 3 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 3, y: 6, z: 3 }, color: '#A09080' },
      // Front column 2 - broken at top (only 2 segments)
      { type: 'column', position: { x: 4, y: 3, z: 3 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 4, y: 4, z: 3 }, color: '#B0A090' },
      // Top broken off
      // Front column 3 - just stub
      { type: 'column', position: { x: 5, y: 3, z: 3 }, color: '#A09080' },
      // Front column 4 - intact
      { type: 'column', position: { x: 6, y: 3, z: 3 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 6, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 6, y: 5, z: 3 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 6, y: 6, z: 3 }, color: '#A09080' },
      // Front column 5 - broken (1 segment + capital fallen)
      { type: 'column', position: { x: 7, y: 3, z: 3 }, color: '#D0C0B0' },

      // Back columns (some intact)
      { type: 'column', position: { x: 3, y: 3, z: 7 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 3, y: 4, z: 7 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 3, y: 5, z: 7 }, color: '#B0A090' },
      // Capital missing
      { type: 'column', position: { x: 5, y: 3, z: 7 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 5, y: 4, z: 7 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 5, y: 5, z: 7 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 5, y: 6, z: 7 }, color: '#A09080' },
      { type: 'column', position: { x: 7, y: 3, z: 7 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 7, y: 4, z: 7 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 7, y: 5, z: 7 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 7, y: 6, z: 7 }, color: '#A09080' },

      // === FALLEN COLUMN (toppled on the ground) ===
      { type: 'pipeX', position: { x: 4, y: 1, z: 1 }, color: '#D0C0B0' },
      { type: 'pipeX', position: { x: 5, y: 1, z: 1 }, color: '#D0C0B0' },
      { type: 'pipeX', position: { x: 6, y: 1, z: 1 }, color: '#B0A090' },
      // Capital end
      { type: 'cylinder', position: { x: 7, y: 1, z: 1 }, color: '#A09080' },

      // Another fallen column on north side
      { type: 'pipeX', position: { x: 8, y: 1, z: 5 }, color: '#D0C0B0' },
      { type: 'pipeX', position: { x: 9, y: 1, z: 5 }, color: '#B0A090' },
      { type: 'cylinder', position: { x: 10, y: 1, z: 5 }, color: '#A09080' },

      // === REMAINING PEDIMENT FRAGMENT (over intact columns) ===
      // Architrave (cross beam)
      { type: 'beamX', position: { x: 3, y: 7, z: 3 }, color: '#A09080' },
      // Triangular pediment (just one wedge fragment)
      { type: 'wedge', position: { x: 3, y: 7, z: 3 }, color: '#B0A090' },
      // Back side architrave
      { type: 'beamX', position: { x: 5, y: 7, z: 7 }, color: '#A09080' },
      { type: 'beamX', position: { x: 6, y: 7, z: 7 }, color: '#A09080' },
      { type: 'beamX', position: { x: 7, y: 7, z: 7 }, color: '#A09080' },

      // === FALLEN PEDIMENT PIECES on ground ===
      { type: 'wedge', position: { x: 4, y: 1, z: 8 }, color: '#A09080' },
      { type: 'wedge', position: { x: 5, y: 1, z: 8 }, color: '#B0A090' },

      // === INNER SANCTUARY (small enclosed cell at center) ===
      // Walls (low, partly ruined)
      ...makeRow(4, 3, 4, 3, 'X', 'cube', '#B0A090'),
      ...makeRow(4, 3, 6, 3, 'X', 'cube', '#B0A090'),
      { type: 'cube', position: { x: 4, y: 3, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 6, y: 3, z: 5 }, color: '#A09080' },
      // Stone altar in middle
      { type: 'cube', position: { x: 5, y: 3, z: 5 }, color: '#A09080' },
      { type: 'slabTop', position: { x: 5, y: 3, z: 5 }, color: '#D0C0B0' },

      // === TOPPLED STATUE ===
      { type: 'sphere', position: { x: 1, y: 1, z: 5 }, color: '#A09080' }, // head
      { type: 'pipeX', position: { x: 2, y: 1, z: 5 }, color: '#A09080' }, // body
      // Statue base
      { type: 'cube', position: { x: 2, y: 1, z: 6 }, color: '#A09080' },

      // === MOSS & VINES & OVERGROWTH ===
      { type: 'moss', position: { x: 3, y: 3, z: 3 }, color: '#5A7A3A' },
      { type: 'moss', position: { x: 7, y: 3, z: 7 }, color: '#5A7A3A' },
      { type: 'moss', position: { x: 4, y: 1, z: 1 }, color: '#5A7A3A' },
      { type: 'vine', position: { x: 3, y: 5, z: 3 }, color: '#3A5A2A' },
      { type: 'vine', position: { x: 6, y: 4, z: 3 }, color: '#3A5A2A' },
      { type: 'vine', position: { x: 7, y: 5, z: 7 }, color: '#3A5A2A' },
      { type: 'grass', position: { x: 1, y: 1, z: 2 }, color: '#5A7A3A' },
      { type: 'grass', position: { x: 9, y: 1, z: 8 }, color: '#5A7A3A' },
      { type: 'flower', position: { x: 0, y: 1, z: 5 }, color: '#FFAA00' },
      { type: 'flower', position: { x: 10, y: 1, z: 2 }, color: '#FF66AA' },
      { type: 'bush', position: { x: 1, y: 1, z: 8 }, color: '#3A5A2A' },
      { type: 'bush', position: { x: 9, y: 1, z: 1 }, color: '#3A5A2A' },

      // === SCATTERED RUBBLE ===
      { type: 'rockPile', position: { x: 8, y: 1, z: 2 }, color: '#A09080' },
      { type: 'rockSmall', position: { x: 9, y: 1, z: 4 }, color: '#A09080' },
      { type: 'rockJagged', position: { x: 0, y: 1, z: 7 }, color: '#A09080' },
      { type: 'pebbles', position: { x: 7, y: 1, z: 8 }, color: '#A09080' },

      // === A LONE TREE growing through ruins ===
      { type: 'logZ', position: { x: 9, y: 1, z: 7 }, color: '#5A4A3A' },
      { type: 'logZ', position: { x: 9, y: 2, z: 7 }, color: '#5A4A3A' },
      { type: 'sphere', position: { x: 9, y: 3, z: 7 }, color: '#3A5A2A' },
    ]
  },

  hutVillage: {
    name: 'Tribal Hut Village',
    category: 'ruins',
    description: 'Cluster of primitive thatched huts with totem pole, fire pit, and drying rack',
    blocks: [
      // === GROUND (dirt) ===
      ...makeFloor(0, 0, 0, 14, 12, '#7A5A3A'),
      // Patches of grass
      { type: 'grass', position: { x: 1, y: 1, z: 1 }, color: '#5A7A3A' },
      { type: 'grass', position: { x: 12, y: 1, z: 11 }, color: '#5A7A3A' },
      { type: 'grass', position: { x: 1, y: 1, z: 11 }, color: '#5A7A3A' },
      { type: 'grass', position: { x: 12, y: 1, z: 1 }, color: '#5A7A3A' },

      // ====================================================
      // HUT 1 (large, central) - x=4..6, z=3..5
      // ====================================================
      // Stone foundation ring
      { type: 'cube', position: { x: 4, y: 1, z: 3 }, color: '#7A6655' },
      { type: 'cube', position: { x: 5, y: 1, z: 3 }, color: '#7A6655' },
      { type: 'cube', position: { x: 6, y: 1, z: 3 }, color: '#7A6655' },
      { type: 'cube', position: { x: 4, y: 1, z: 5 }, color: '#7A6655' },
      // doorway at (5,1,5) - skip
      { type: 'cube', position: { x: 6, y: 1, z: 5 }, color: '#7A6655' },
      { type: 'cube', position: { x: 4, y: 1, z: 4 }, color: '#7A6655' },
      { type: 'cube', position: { x: 6, y: 1, z: 4 }, color: '#7A6655' },
      // Doorway frame (open)
      { type: 'gateOpen', position: { x: 5, y: 1, z: 5 }, color: '#5A4A3A' },
      // Wood walls (2nd level - log style)
      { type: 'logZ', position: { x: 4, y: 2, z: 3 }, color: '#8B6F47' },
      { type: 'logX', position: { x: 5, y: 2, z: 3 }, color: '#8B6F47' },
      { type: 'logZ', position: { x: 6, y: 2, z: 3 }, color: '#8B6F47' },
      { type: 'logZ', position: { x: 4, y: 2, z: 4 }, color: '#A0826D' },
      { type: 'logZ', position: { x: 6, y: 2, z: 4 }, color: '#A0826D' },
      { type: 'logZ', position: { x: 4, y: 2, z: 5 }, color: '#8B6F47' },
      { type: 'logX', position: { x: 5, y: 2, z: 5 }, color: '#8B6F47' },
      { type: 'logZ', position: { x: 6, y: 2, z: 5 }, color: '#8B6F47' },
      // Conical thatched roof
      { type: 'wedge', position: { x: 4, y: 3, z: 3 }, color: '#A06840' },
      { type: 'wedge', position: { x: 5, y: 3, z: 3 }, color: '#A06840' },
      { type: 'wedge', position: { x: 6, y: 3, z: 3 }, color: '#A06840' },
      { type: 'wedgeTop', position: { x: 4, y: 3, z: 5 }, color: '#A06840' },
      { type: 'wedgeTop', position: { x: 5, y: 3, z: 5 }, color: '#A06840' },
      { type: 'wedgeTop', position: { x: 6, y: 3, z: 5 }, color: '#A06840' },
      // Roof peak (cone)
      { type: 'cone', position: { x: 5, y: 4, z: 4 }, color: '#8B5A30' },
      // Smoke hole (small cylinder at peak)
      { type: 'sphere', position: { x: 5, y: 5, z: 4 }, color: '#5A5A5A', emissive: { enabled: true, color: '#404040', intensity: 0.4, radius: 2 } },

      // ====================================================
      // HUT 2 (smaller, west) - x=1..2, z=7..8
      // ====================================================
      { type: 'cube', position: { x: 1, y: 1, z: 7 }, color: '#7A6655' },
      { type: 'cube', position: { x: 2, y: 1, z: 7 }, color: '#7A6655' },
      { type: 'cube', position: { x: 1, y: 1, z: 8 }, color: '#7A6655' },
      // Door
      { type: 'logZ', position: { x: 1, y: 2, z: 7 }, color: '#A0826D' },
      { type: 'logX', position: { x: 2, y: 2, z: 7 }, color: '#A0826D' },
      { type: 'logZ', position: { x: 1, y: 2, z: 8 }, color: '#A0826D' },
      // Conical roof
      { type: 'cone', position: { x: 1, y: 3, z: 7 }, color: '#A06840' },
      { type: 'cone', position: { x: 2, y: 3, z: 7 }, color: '#A06840' },
      { type: 'cone', position: { x: 1, y: 3, z: 8 }, color: '#A06840' },
      { type: 'cone', position: { x: 2, y: 3, z: 8 }, color: '#A06840' },

      // ====================================================
      // HUT 3 (small, east) - x=10..11, z=2..3
      // ====================================================
      { type: 'cube', position: { x: 10, y: 1, z: 2 }, color: '#7A6655' },
      { type: 'cube', position: { x: 11, y: 1, z: 2 }, color: '#7A6655' },
      { type: 'cube', position: { x: 10, y: 1, z: 3 }, color: '#7A6655' },
      { type: 'cube', position: { x: 11, y: 1, z: 3 }, color: '#7A6655' },
      { type: 'logZ', position: { x: 10, y: 2, z: 2 }, color: '#A0826D' },
      { type: 'logX', position: { x: 11, y: 2, z: 2 }, color: '#A0826D' },
      { type: 'logZ', position: { x: 10, y: 2, z: 3 }, color: '#A0826D' },
      { type: 'logZ', position: { x: 11, y: 2, z: 3 }, color: '#A0826D' },
      { type: 'cone', position: { x: 10, y: 3, z: 2 }, color: '#A06840' },
      { type: 'cone', position: { x: 11, y: 3, z: 2 }, color: '#A06840' },
      { type: 'cone', position: { x: 10, y: 3, z: 3 }, color: '#A06840' },
      { type: 'cone', position: { x: 11, y: 3, z: 3 }, color: '#A06840' },

      // ====================================================
      // HUT 4 (storage hut, west-back) - x=2..3, z=10
      // ====================================================
      { type: 'cube', position: { x: 2, y: 1, z: 10 }, color: '#7A6655' },
      { type: 'cube', position: { x: 3, y: 1, z: 10 }, color: '#7A6655' },
      { type: 'logX', position: { x: 2, y: 2, z: 10 }, color: '#A0826D' },
      { type: 'logX', position: { x: 3, y: 2, z: 10 }, color: '#A0826D' },
      { type: 'wedge', position: { x: 2, y: 3, z: 10 }, color: '#A06840' },
      { type: 'wedge', position: { x: 3, y: 3, z: 10 }, color: '#A06840' },

      // ====================================================
      // CENTRAL FIRE PIT
      // ====================================================
      // Stone ring
      { type: 'rockSmall', position: { x: 7, y: 1, z: 7 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 8, y: 1, z: 7 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 9, y: 1, z: 7 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 7, y: 1, z: 8 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 9, y: 1, z: 8 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 7, y: 1, z: 9 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 8, y: 1, z: 9 }, color: '#5A4A3A' },
      { type: 'rockSmall', position: { x: 9, y: 1, z: 9 }, color: '#5A4A3A' },
      // Logs in the center
      { type: 'logX', position: { x: 8, y: 1, z: 8 }, color: '#5A4A3A' },
      // Fire (emissive)
      { type: 'cone', position: { x: 8, y: 2, z: 8 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 2.5, radius: 6 } },
      { type: 'sphere', position: { x: 8, y: 3, z: 8 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 2.0, radius: 4 } },

      // ====================================================
      // TOTEM POLE (center of village)
      // ====================================================
      { type: 'logZ', position: { x: 6, y: 1, z: 8 }, color: '#5A4A3A' },
      { type: 'logZ', position: { x: 6, y: 2, z: 8 }, color: '#5A4A3A' },
      { type: 'cube', position: { x: 6, y: 3, z: 8 }, color: '#C70039' }, // red carved face
      { type: 'cube', position: { x: 6, y: 4, z: 8 }, color: '#FFAA00' }, // yellow face
      { type: 'cube', position: { x: 6, y: 5, z: 8 }, color: '#3A5A2A' }, // green face
      // Wings/arms on top
      { type: 'beamX', position: { x: 6, y: 6, z: 8 }, color: '#5A4A3A' },
      // Crown/feathers (cones)
      { type: 'cone', position: { x: 6, y: 6, z: 8 }, color: '#FFFFFF' },
      { type: 'cone', position: { x: 5, y: 6, z: 8 }, color: '#C70039' },
      { type: 'cone', position: { x: 7, y: 6, z: 8 }, color: '#FFAA00' },

      // ====================================================
      // DRYING RACK (with hides)
      // ====================================================
      { type: 'pillar', position: { x: 11, y: 1, z: 8 }, color: '#5A4A3A' },
      { type: 'pillar', position: { x: 11, y: 2, z: 8 }, color: '#5A4A3A' },
      { type: 'pillar', position: { x: 12, y: 1, z: 8 }, color: '#5A4A3A' },
      { type: 'pillar', position: { x: 12, y: 2, z: 8 }, color: '#5A4A3A' },
      { type: 'beamX', position: { x: 11, y: 3, z: 8 }, color: '#5A4A3A' },
      { type: 'beamX', position: { x: 12, y: 3, z: 8 }, color: '#5A4A3A' },
      // Hides hanging
      { type: 'tarp', position: { x: 11, y: 2, z: 8 }, color: '#A0826D' },
      { type: 'tarp', position: { x: 12, y: 2, z: 8 }, color: '#8B6F47' },

      // ====================================================
      // PALISADE (defensive log fence around perimeter)
      // ====================================================
      // Front (south)
      { type: 'fencePost', position: { x: 0, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 1, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 2, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fencePost', position: { x: 3, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 4, y: 1, z: 0 }, color: '#5A4A3A' },
      // Gate gap at x=5,6
      { type: 'gateDouble', position: { x: 6, y: 1, z: 0 }, color: '#8B6F47' },
      { type: 'fence', position: { x: 8, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 9, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fencePost', position: { x: 10, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 11, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 12, y: 1, z: 0 }, color: '#5A4A3A' },
      { type: 'fencePost', position: { x: 13, y: 1, z: 0 }, color: '#5A4A3A' },

      // ====================================================
      // BARRELS / POTS / BASKETS
      // ====================================================
      { type: 'barrel', position: { x: 4, y: 1, z: 7 }, color: '#5A4A3A' },
      { type: 'barrel', position: { x: 5, y: 1, z: 7 }, color: '#5A4A3A' },
      { type: 'planter', position: { x: 7, y: 1, z: 5 }, color: '#7A6655' },
      { type: 'planter', position: { x: 9, y: 1, z: 5 }, color: '#7A6655' },
      { type: 'sack', position: { x: 3, y: 1, z: 8 }, color: '#A0826D' },
      { type: 'sack', position: { x: 12, y: 1, z: 5 }, color: '#A0826D' },

      // ====================================================
      // FIREWOOD STACK
      // ====================================================
      { type: 'logX', position: { x: 0, y: 1, z: 4 }, color: '#5A4A3A' },
      { type: 'logX', position: { x: 0, y: 2, z: 4 }, color: '#5A4A3A' },
      { type: 'logX', position: { x: 0, y: 1, z: 5 }, color: '#5A4A3A' },

      // ====================================================
      // VEGETATION
      // ====================================================
      { type: 'bush', position: { x: 13, y: 1, z: 6 }, color: '#3A5A2A' },
      { type: 'bush', position: { x: 0, y: 1, z: 6 }, color: '#3A5A2A' },
      { type: 'flower', position: { x: 13, y: 1, z: 9 }, color: '#FFAA00' },
      { type: 'flower', position: { x: 13, y: 1, z: 11 }, color: '#FF66AA' },
      { type: 'mushroom', position: { x: 0, y: 1, z: 9 }, color: '#C70039' },
      // Tree (single)
      { type: 'logZ', position: { x: 13, y: 1, z: 4 }, color: '#5A4A3A' },
      { type: 'logZ', position: { x: 13, y: 2, z: 4 }, color: '#5A4A3A' },
      { type: 'sphere', position: { x: 13, y: 3, z: 4 }, color: '#3A5A2A' },
      { type: 'sphere', position: { x: 13, y: 4, z: 4 }, color: '#5A7A3A' },
    ]
  },

  triumphalArch: {
    name: 'Triumphal Arch',
    category: 'ruins',
    description: 'Monumental Roman-style triple arch with columns, decorative pediment, statues and bronze gates',
    blocks: [
      // === GROUND ===
      ...makeFloor(0, 0, 0, 13, 8, '#A09080'),
      // Stone path
      ...makeRow(0, 0, 4, 13, 'X', 'panel', '#B0A090'),

      // ====================================================
      // BASE / STYLOBATE (raised platform under arch)
      // ====================================================
      ...makeFloor(0, 1, 2, 13, 5, '#B0A090'),
      ...makeRow(0, 2, 2, 13, 'X', 'cube', '#A09080'),
      ...makeRow(0, 2, 6, 13, 'X', 'cube', '#A09080'),

      // ====================================================
      // SIDE COLUMNS (decorative, not structural)
      // ====================================================
      // Front facing columns (z=2)
      { type: 'base', position: { x: 1, y: 2, z: 2 }, color: '#A09080' },
      { type: 'column', position: { x: 1, y: 2, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 1, y: 3, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 1, y: 4, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 1, y: 5, z: 2 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 1, y: 6, z: 2 }, color: '#A09080' },

      { type: 'base', position: { x: 4, y: 2, z: 2 }, color: '#A09080' },
      { type: 'column', position: { x: 4, y: 2, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 4, y: 3, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 4, y: 4, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 4, y: 5, z: 2 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 4, y: 6, z: 2 }, color: '#A09080' },

      { type: 'base', position: { x: 8, y: 2, z: 2 }, color: '#A09080' },
      { type: 'column', position: { x: 8, y: 2, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 8, y: 3, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 8, y: 4, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 8, y: 5, z: 2 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 8, y: 6, z: 2 }, color: '#A09080' },

      { type: 'base', position: { x: 11, y: 2, z: 2 }, color: '#A09080' },
      { type: 'column', position: { x: 11, y: 2, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 11, y: 3, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 11, y: 4, z: 2 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 11, y: 5, z: 2 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 11, y: 6, z: 2 }, color: '#A09080' },

      // Back facing columns (z=6) - mirror front
      { type: 'base', position: { x: 1, y: 2, z: 6 }, color: '#A09080' },
      { type: 'column', position: { x: 1, y: 2, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 1, y: 3, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 1, y: 4, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 1, y: 5, z: 6 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 1, y: 6, z: 6 }, color: '#A09080' },
      { type: 'column', position: { x: 4, y: 2, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 4, y: 3, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 4, y: 4, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 4, y: 5, z: 6 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 4, y: 6, z: 6 }, color: '#A09080' },
      { type: 'column', position: { x: 8, y: 2, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 8, y: 3, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 8, y: 4, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 8, y: 5, z: 6 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 8, y: 6, z: 6 }, color: '#A09080' },
      { type: 'column', position: { x: 11, y: 2, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 11, y: 3, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 11, y: 4, z: 6 }, color: '#D0C0B0' },
      { type: 'column', position: { x: 11, y: 5, z: 6 }, color: '#D0C0B0' },
      { type: 'capital', position: { x: 11, y: 6, z: 6 }, color: '#A09080' },

      // ====================================================
      // ARCH WALL / PASSAGE STRUCTURE
      // ====================================================
      // Main arch piers (large supports between arches)
      { type: 'cube', position: { x: 0, y: 2, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 2, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 2, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 3, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 3, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 3, z: 5 }, color: '#A09080' },

      // Arch piers between large central arch and side arches
      { type: 'cube', position: { x: 3, y: 2, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 3, y: 2, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 3, y: 2, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 3, y: 3, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 3, y: 3, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 3, y: 3, z: 5 }, color: '#A09080' },

      { type: 'cube', position: { x: 9, y: 2, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 9, y: 2, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 9, y: 2, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 9, y: 3, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 9, y: 3, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 9, y: 3, z: 5 }, color: '#A09080' },

      { type: 'cube', position: { x: 12, y: 2, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 12, y: 2, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 12, y: 2, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 12, y: 3, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 12, y: 3, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 12, y: 3, z: 5 }, color: '#A09080' },

      // === SMALL SIDE ARCHES (left & right) ===
      { type: 'arch', position: { x: 1, y: 4, z: 3 }, color: '#B0A090' },
      { type: 'arch', position: { x: 1, y: 4, z: 4 }, color: '#B0A090' },
      { type: 'arch', position: { x: 1, y: 4, z: 5 }, color: '#B0A090' },
      { type: 'arch', position: { x: 2, y: 4, z: 3 }, color: '#B0A090' },
      { type: 'arch', position: { x: 2, y: 4, z: 4 }, color: '#B0A090' },
      { type: 'arch', position: { x: 2, y: 4, z: 5 }, color: '#B0A090' },

      { type: 'arch', position: { x: 10, y: 4, z: 3 }, color: '#B0A090' },
      { type: 'arch', position: { x: 10, y: 4, z: 4 }, color: '#B0A090' },
      { type: 'arch', position: { x: 10, y: 4, z: 5 }, color: '#B0A090' },
      { type: 'arch', position: { x: 11, y: 4, z: 3 }, color: '#B0A090' },
      { type: 'arch', position: { x: 11, y: 4, z: 4 }, color: '#B0A090' },
      { type: 'arch', position: { x: 11, y: 4, z: 5 }, color: '#B0A090' },

      // === BIG CENTRAL ARCH (taller) ===
      { type: 'arch', position: { x: 4, y: 5, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 4, y: 5, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 4, y: 5, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 5, y: 5, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 5, y: 5, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 5, y: 5, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 6, y: 5, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 6, y: 5, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 6, y: 5, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 7, y: 5, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 7, y: 5, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 7, y: 5, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 8, y: 5, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 8, y: 5, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 8, y: 5, z: 5 }, color: '#D0C0B0' },

      // Central arch lower part (open passage)
      { type: 'cube', position: { x: 4, y: 2, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 8, y: 2, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 4, y: 2, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 8, y: 2, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 4, y: 3, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 8, y: 3, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 4, y: 3, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 8, y: 3, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 4, y: 4, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 8, y: 4, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 4, y: 4, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 8, y: 4, z: 5 }, color: '#A09080' },

      // === ENTABLATURE (band above all arches) ===
      ...makeRow(0, 7, 2, 13, 'X', 'cube', '#D0C0B0'),
      ...makeRow(0, 7, 6, 13, 'X', 'cube', '#D0C0B0'),
      // Cornice molding
      ...makeRow(0, 8, 2, 13, 'X', 'cornice', '#A09080'),
      ...makeRow(0, 8, 6, 13, 'X', 'cornice', '#A09080'),
      // Top wall
      ...makeRow(0, 8, 3, 13, 'X', 'cube', '#B0A090'),
      ...makeRow(0, 8, 4, 13, 'X', 'cube', '#B0A090'),
      ...makeRow(0, 8, 5, 13, 'X', 'cube', '#B0A090'),

      // === STATUES on top corners ===
      { type: 'pillar', position: { x: 1, y: 9, z: 4 }, color: '#D0C0B0' },
      { type: 'pillar', position: { x: 1, y: 10, z: 4 }, color: '#D0C0B0' },
      { type: 'sphere', position: { x: 1, y: 11, z: 4 }, color: '#D0C0B0' }, // head

      { type: 'pillar', position: { x: 11, y: 9, z: 4 }, color: '#D0C0B0' },
      { type: 'pillar', position: { x: 11, y: 10, z: 4 }, color: '#D0C0B0' },
      { type: 'sphere', position: { x: 11, y: 11, z: 4 }, color: '#D0C0B0' },

      // === CENTRAL CROWNING STATUE / QUADRIGA ===
      { type: 'cube', position: { x: 5, y: 9, z: 4 }, color: '#A09080' }, // base
      { type: 'cube', position: { x: 6, y: 9, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 7, y: 9, z: 4 }, color: '#A09080' },
      // Horse statues (stylized as cubes + sphere heads)
      { type: 'cube', position: { x: 5, y: 10, z: 4 }, color: '#B89968' }, // bronze
      { type: 'cube', position: { x: 6, y: 10, z: 4 }, color: '#B89968' },
      { type: 'cube', position: { x: 7, y: 10, z: 4 }, color: '#B89968' },
      { type: 'sphere', position: { x: 5, y: 11, z: 4 }, color: '#B89968' },
      { type: 'sphere', position: { x: 7, y: 11, z: 4 }, color: '#B89968' },
      // Charioteer center
      { type: 'pillarRound', position: { x: 6, y: 11, z: 4 }, color: '#B89968' },

      // === BRONZE GATES (under main arch) ===
      { type: 'gateDouble', position: { x: 5, y: 2, z: 4 }, color: '#7A5A30' },
      { type: 'gateDouble', position: { x: 7, y: 2, z: 4 }, color: '#7A5A30' },
      { type: 'gate', position: { x: 6, y: 2, z: 4 }, color: '#7A5A30' },
      { type: 'gate', position: { x: 6, y: 3, z: 4 }, color: '#7A5A30' },

      // === DECORATIVE FRIEZE (between columns y=6) ===
      { type: 'cube', position: { x: 5, y: 6, z: 2 }, color: '#A09080' },
      { type: 'cube', position: { x: 6, y: 6, z: 2 }, color: '#A09080' },
      { type: 'cube', position: { x: 7, y: 6, z: 2 }, color: '#A09080' },
      // Inscription details
      { type: 'panel', position: { x: 5, y: 6, z: 2 }, color: '#5A4A3A' },
      { type: 'panel', position: { x: 6, y: 6, z: 2 }, color: '#5A4A3A' },
      { type: 'panel', position: { x: 7, y: 6, z: 2 }, color: '#5A4A3A' },

      // === STEPS LEADING UP (front and back) ===
      ...makeRow(0, 1, 1, 13, 'X', 'stairs', '#A09080'),
      ...makeRow(0, 1, 7, 13, 'X', 'stairs', '#A09080'),

      // === DETAILS / WEATHERING ===
      { type: 'moss', position: { x: 0, y: 2, z: 3 }, color: '#5A7A3A' },
      { type: 'vine', position: { x: 0, y: 4, z: 4 }, color: '#3A5A2A' },
      { type: 'vine', position: { x: 12, y: 4, z: 4 }, color: '#3A5A2A' },
      { type: 'flower', position: { x: 0, y: 1, z: 0 }, color: '#FFAA00' },
      { type: 'bush', position: { x: 12, y: 1, z: 0 }, color: '#3A5A2A' },
    ]
  },

  aqueductRuin: {
    name: 'Aqueduct Ruin',
    category: 'ruins',
    description: 'Roman-style stone aqueduct in partial ruin — row of arches carrying a water channel, overgrown',
    blocks: [
      // === GROUND (grass with stone scatter) ===
      ...makeFloor(0, 0, 0, 22, 8, '#5A6A3A'),
      // Stone path beneath aqueduct
      ...makeRow(0, 0, 4, 22, 'X', 'panel', '#A09080'),

      // ====================================================
      // PIER 1 (intact, leftmost) - x=0..1, z=3..5
      // ====================================================
      { type: 'cube', position: { x: 0, y: 1, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 1, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 1, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 1, y: 1, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 1, y: 1, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 1, y: 1, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 2, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 2, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 2, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 1, y: 2, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 1, y: 2, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 1, y: 2, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 0, y: 3, z: 3 }, color: '#B0A090' },
      { type: 'cube', position: { x: 0, y: 3, z: 4 }, color: '#B0A090' },
      { type: 'cube', position: { x: 0, y: 3, z: 5 }, color: '#B0A090' },
      { type: 'cube', position: { x: 1, y: 3, z: 3 }, color: '#B0A090' },
      { type: 'cube', position: { x: 1, y: 3, z: 4 }, color: '#B0A090' },
      { type: 'cube', position: { x: 1, y: 3, z: 5 }, color: '#B0A090' },

      // ====================================================
      // PIER 2 - x=5..6
      // ====================================================
      ...makeRow(5, 1, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(6, 1, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(5, 2, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(6, 2, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(5, 3, 3, 3, 'Z', 'cube', '#B0A090'),
      ...makeRow(6, 3, 3, 3, 'Z', 'cube', '#B0A090'),

      // ====================================================
      // PIER 3 - x=10..11
      // ====================================================
      ...makeRow(10, 1, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(11, 1, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(10, 2, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(11, 2, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(10, 3, 3, 3, 'Z', 'cube', '#B0A090'),
      ...makeRow(11, 3, 3, 3, 'Z', 'cube', '#B0A090'),

      // ====================================================
      // PIER 4 (PARTIALLY COLLAPSED) - x=15..16
      // ====================================================
      ...makeRow(15, 1, 3, 3, 'Z', 'cube', '#A09080'),
      // Right side broken
      { type: 'cube', position: { x: 16, y: 1, z: 3 }, color: '#A09080' },
      { type: 'cube', position: { x: 16, y: 1, z: 5 }, color: '#A09080' },
      // Middle gone (rubble below)
      { type: 'rockPile', position: { x: 16, y: 1, z: 4 }, color: '#A09080' },
      ...makeRow(15, 2, 3, 3, 'Z', 'cube', '#A09080'),
      { type: 'cube', position: { x: 16, y: 2, z: 3 }, color: '#5A4A3A' },
      // Top crumbled
      { type: 'cube', position: { x: 15, y: 3, z: 3 }, color: '#5A4A3A' },
      // Rest collapsed

      // ====================================================
      // PIER 5 (rightmost, intact) - x=20..21
      // ====================================================
      ...makeRow(20, 1, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(21, 1, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(20, 2, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(21, 2, 3, 3, 'Z', 'cube', '#A09080'),
      ...makeRow(20, 3, 3, 3, 'Z', 'cube', '#B0A090'),
      ...makeRow(21, 3, 3, 3, 'Z', 'cube', '#B0A090'),

      // ====================================================
      // ARCHES (between piers, lower tier)
      // ====================================================
      // Arch 1: x=2..4 between piers 1 & 2
      { type: 'arch', position: { x: 2, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 2, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 2, y: 4, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 3, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 3, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 3, y: 4, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 4, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 4, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 4, y: 4, z: 5 }, color: '#D0C0B0' },

      // Arch 2: x=7..9
      { type: 'arch', position: { x: 7, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 7, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 7, y: 4, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 8, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 8, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 8, y: 4, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 9, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 9, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 9, y: 4, z: 5 }, color: '#D0C0B0' },

      // Arch 3: x=12..14
      { type: 'arch', position: { x: 12, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 12, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 12, y: 4, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 13, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 13, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 13, y: 4, z: 5 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 14, y: 4, z: 3 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 14, y: 4, z: 4 }, color: '#D0C0B0' },
      { type: 'arch', position: { x: 14, y: 4, z: 5 }, color: '#D0C0B0' },

      // Arch 4 (between collapsed pier 4 and pier 5): partially collapsed
      { type: 'arch', position: { x: 17, y: 4, z: 3 }, color: '#B0A090' },
      { type: 'arch', position: { x: 17, y: 4, z: 4 }, color: '#B0A090' },
      { type: 'arch', position: { x: 17, y: 4, z: 5 }, color: '#B0A090' },
      // Middle of arch broken (gap at x=18)
      { type: 'arch', position: { x: 19, y: 4, z: 3 }, color: '#B0A090' },
      { type: 'arch', position: { x: 19, y: 4, z: 4 }, color: '#B0A090' },
      { type: 'arch', position: { x: 19, y: 4, z: 5 }, color: '#B0A090' },

      // ====================================================
      // UPPER WALKWAY / CHANNEL ON TOP
      // ====================================================
      // Top span (intact section: x=0..14)
      ...makeRow(0, 5, 3, 15, 'X', 'cube', '#B0A090'),
      ...makeRow(0, 5, 5, 15, 'X', 'cube', '#B0A090'),
      // Water channel in middle (channel block)
      ...makeRow(0, 5, 4, 15, 'X', 'channel', '#4682B4'),
      // Water (flowing, slightly emissive blue)
      { type: 'panel', position: { x: 0, y: 5, z: 4 }, color: '#4682B4', emissive: { enabled: true, color: '#4682B4', intensity: 0.4, radius: 1 } },
      { type: 'panel', position: { x: 5, y: 5, z: 4 }, color: '#4682B4', emissive: { enabled: true, color: '#4682B4', intensity: 0.4, radius: 1 } },
      { type: 'panel', position: { x: 10, y: 5, z: 4 }, color: '#4682B4', emissive: { enabled: true, color: '#4682B4', intensity: 0.4, radius: 1 } },

      // Top span partial (x=20..21 right section)
      ...makeRow(20, 5, 3, 2, 'X', 'cube', '#B0A090'),
      ...makeRow(20, 5, 3, 2, 'X', 'cube', '#B0A090'),
      ...makeRow(20, 5, 5, 2, 'X', 'cube', '#B0A090'),
      ...makeRow(20, 5, 4, 2, 'X', 'channel', '#4682B4'),

      // Gap in upper walkway (x=15..19) due to collapsed pier
      // Show some fallen channel pieces
      { type: 'channelEnd', position: { x: 14, y: 5, z: 4 }, color: '#4682B4' },
      { type: 'channelEnd', position: { x: 20, y: 5, z: 4 }, color: '#4682B4' },

      // === RUBBLE FROM COLLAPSE (under broken arch) ===
      { type: 'rockPile', position: { x: 17, y: 1, z: 4 }, color: '#A09080' },
      { type: 'rockPile', position: { x: 18, y: 1, z: 4 }, color: '#A09080' },
      { type: 'rockSmall', position: { x: 18, y: 1, z: 3 }, color: '#A09080' },
      { type: 'rockSmall', position: { x: 18, y: 1, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 18, y: 1, z: 4 }, color: '#A09080' },
      { type: 'rockJagged', position: { x: 18, y: 2, z: 4 }, color: '#5A4A3A' },
      { type: 'pebbles', position: { x: 17, y: 1, z: 6 }, color: '#A09080' },

      // === RAILING ALONG TOP CHANNEL ===
      { type: 'railing', position: { x: 0, y: 6, z: 3 }, color: '#A09080' },
      { type: 'railing', position: { x: 5, y: 6, z: 3 }, color: '#A09080' },
      { type: 'railing', position: { x: 10, y: 6, z: 3 }, color: '#A09080' },
      { type: 'railing', position: { x: 14, y: 6, z: 3 }, color: '#A09080' },
      { type: 'railing', position: { x: 0, y: 6, z: 5 }, color: '#A09080' },
      { type: 'railing', position: { x: 5, y: 6, z: 5 }, color: '#A09080' },
      { type: 'railing', position: { x: 10, y: 6, z: 5 }, color: '#A09080' },
      { type: 'railing', position: { x: 14, y: 6, z: 5 }, color: '#A09080' },

      // ====================================================
      // OVERGROWTH & DETAILS
      // ====================================================
      // Vines hanging off arches
      { type: 'vine', position: { x: 3, y: 4, z: 3 }, color: '#3A5A2A' },
      { type: 'vine', position: { x: 8, y: 4, z: 5 }, color: '#3A5A2A' },
      { type: 'vine', position: { x: 13, y: 4, z: 3 }, color: '#3A5A2A' },
      { type: 'vine', position: { x: 17, y: 3, z: 5 }, color: '#3A5A2A' },
      // Moss
      { type: 'moss', position: { x: 0, y: 1, z: 3 }, color: '#5A7A3A' },
      { type: 'moss', position: { x: 5, y: 1, z: 5 }, color: '#5A7A3A' },
      { type: 'moss', position: { x: 21, y: 1, z: 3 }, color: '#5A7A3A' },
      { type: 'moss', position: { x: 18, y: 1, z: 4 }, color: '#5A7A3A' },
      // Bushes near piers
      { type: 'bush', position: { x: 0, y: 1, z: 7 }, color: '#3A5A2A' },
      { type: 'bush', position: { x: 21, y: 1, z: 7 }, color: '#3A5A2A' },
      { type: 'bush', position: { x: 11, y: 1, z: 0 }, color: '#3A5A2A' },
      // Grass tufts
      { type: 'grass', position: { x: 3, y: 1, z: 1 }, color: '#5A7A3A' },
      { type: 'grass', position: { x: 9, y: 1, z: 7 }, color: '#5A7A3A' },
      { type: 'grass', position: { x: 16, y: 1, z: 1 }, color: '#5A7A3A' },
      // Flowers
      { type: 'flower', position: { x: 4, y: 1, z: 0 }, color: '#FFAA00' },
      { type: 'flower', position: { x: 14, y: 1, z: 7 }, color: '#FF66AA' },
      // Tree sprouting from a collapsed pier
      { type: 'logZ', position: { x: 18, y: 2, z: 7 }, color: '#5A4A3A' },
      { type: 'logZ', position: { x: 18, y: 3, z: 7 }, color: '#5A4A3A' },
      { type: 'sphere', position: { x: 18, y: 4, z: 7 }, color: '#3A5A2A' },
    ]
  },

  watchtower: {
    name: 'Classic Watchtower',
    category: 'ruins',
    description: 'Stone watchtower with ladders, arrow slits, crenellated battlement, and pointed roof flag',
    blocks: [
      // ====================================================
      // GROUND (grass with stone path)
      // ====================================================
      ...makeFloor(0, 0, 0, 10, 10, '#5A6A3A'),
      // Stone path to the door
      { type: 'panel', position: { x: 4, y: 0, z: 0 }, color: '#A09080' },
      { type: 'panel', position: { x: 5, y: 0, z: 0 }, color: '#A09080' },
      { type: 'panel', position: { x: 4, y: 0, z: 1 }, color: '#A09080' },
      { type: 'panel', position: { x: 5, y: 0, z: 1 }, color: '#A09080' },
      { type: 'panel', position: { x: 4, y: 0, z: 2 }, color: '#A09080' },
      { type: 'panel', position: { x: 5, y: 0, z: 2 }, color: '#A09080' },

      // ====================================================
      // STONE FOUNDATION (raised plinth, slightly wider than tower)
      // ====================================================
      ...makeFloor(2, 1, 2, 6, 6, '#5A5A5A'),
      // Foundation trim (slightly lighter top edge)
      { type: 'slabTop', position: { x: 2, y: 1, z: 2 }, color: '#7A7A7A' },
      { type: 'slabTop', position: { x: 7, y: 1, z: 2 }, color: '#7A7A7A' },
      { type: 'slabTop', position: { x: 2, y: 1, z: 7 }, color: '#7A7A7A' },
      { type: 'slabTop', position: { x: 7, y: 1, z: 7 }, color: '#7A7A7A' },

      // ====================================================
      // TOWER FOOTPRINT — 4x4 at x=3..6, z=3..6
      // Stone walls (#7A6A55 weathered), rises y=2..6 (5 stories)
      // ====================================================

      // === LEVEL 1 (y=2) - ground floor with door ===
      // Front wall (z=3) with door opening at x=4
      { type: 'cube', position: { x: 3, y: 2, z: 3 }, color: '#7A6A55' },
      // door opening at (4, 2, 3)
      { type: 'doorFrame', position: { x: 4, y: 2, z: 3 }, color: '#5A3A1A' },
      { type: 'cube', position: { x: 5, y: 2, z: 3 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 6, y: 2, z: 3 }, color: '#7A6A55' },
      // Back wall (z=6)
      ...makeRow(3, 2, 6, 4, 'X', 'cube', '#7A6A55'),
      // Left wall (x=3)
      { type: 'cube', position: { x: 3, y: 2, z: 4 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 3, y: 2, z: 5 }, color: '#7A6A55' },
      // Right wall (x=6)
      { type: 'cube', position: { x: 6, y: 2, z: 4 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 6, y: 2, z: 5 }, color: '#7A6A55' },
      // Floor inside (wood planks)
      { type: 'cube', position: { x: 4, y: 2, z: 4 }, color: '#8B6F47' },
      { type: 'cube', position: { x: 5, y: 2, z: 4 }, color: '#8B6F47' },
      { type: 'cube', position: { x: 4, y: 2, z: 5 }, color: '#8B6F47' },
      { type: 'cube', position: { x: 5, y: 2, z: 5 }, color: '#8B6F47' },
      // Wait - those replace the empty interior, but actually we want OPEN interior.
      // Removing those - the ground is the foundation.

      // === LEVEL 2 (y=3) - first upper level with arrow slits ===
      // Front wall
      { type: 'cube', position: { x: 3, y: 3, z: 3 }, color: '#7A6A55' },
      { type: 'arrowSlit', position: { x: 4, y: 3, z: 3 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 5, y: 3, z: 3 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 6, y: 3, z: 3 }, color: '#7A6A55' },
      // Back wall
      { type: 'cube', position: { x: 3, y: 3, z: 6 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 4, y: 3, z: 6 }, color: '#7A6A55' },
      { type: 'arrowSlit', position: { x: 5, y: 3, z: 6 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 6, y: 3, z: 6 }, color: '#7A6A55' },
      // Left wall
      { type: 'arrowSlit', position: { x: 3, y: 3, z: 4 }, color: '#1A1A1A' },
      { type: 'cube', position: { x: 3, y: 3, z: 5 }, color: '#7A6A55' },
      // Right wall
      { type: 'cube', position: { x: 6, y: 3, z: 4 }, color: '#7A6A55' },
      { type: 'arrowSlit', position: { x: 6, y: 3, z: 5 }, color: '#1A1A1A' },
      // Interior wood floor at this level (partial, with ladder hole)
      { type: 'slab', position: { x: 5, y: 3, z: 4 }, color: '#8B6F47' },
      { type: 'slab', position: { x: 5, y: 3, z: 5 }, color: '#8B6F47' },
      { type: 'slab', position: { x: 4, y: 3, z: 5 }, color: '#8B6F47' },
      // ladder hole at (4, 3, 4)

      // === LEVEL 3 (y=4) - second upper level ===
      ...makeRow(3, 4, 3, 4, 'X', 'cube', '#7A6A55'),
      ...makeRow(3, 4, 6, 4, 'X', 'cube', '#7A6A55'),
      { type: 'cube', position: { x: 3, y: 4, z: 4 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 3, y: 4, z: 5 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 6, y: 4, z: 4 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 6, y: 4, z: 5 }, color: '#7A6A55' },
      // Arrow slits replacing some cubes (overwrite with narrow blocks)
      { type: 'arrowSlit', position: { x: 4, y: 4, z: 3 }, color: '#1A1A1A' },
      { type: 'arrowSlit', position: { x: 5, y: 4, z: 6 }, color: '#1A1A1A' },
      // Floor at level 3 (partial)
      { type: 'slab', position: { x: 5, y: 4, z: 4 }, color: '#8B6F47' },
      { type: 'slab', position: { x: 5, y: 4, z: 5 }, color: '#8B6F47' },
      { type: 'slab', position: { x: 4, y: 4, z: 5 }, color: '#8B6F47' },

      // === LEVEL 4 (y=5) - third upper level (near top) ===
      ...makeRow(3, 5, 3, 4, 'X', 'cube', '#7A6A55'),
      ...makeRow(3, 5, 6, 4, 'X', 'cube', '#7A6A55'),
      { type: 'cube', position: { x: 3, y: 5, z: 4 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 3, y: 5, z: 5 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 6, y: 5, z: 4 }, color: '#7A6A55' },
      { type: 'cube', position: { x: 6, y: 5, z: 5 }, color: '#7A6A55' },
      // Bigger windows (window frames)
      { type: 'windowFrame', position: { x: 4, y: 5, z: 3 }, color: '#3A3A3A' },
      { type: 'windowFrame', position: { x: 5, y: 5, z: 6 }, color: '#3A3A3A' },
      { type: 'windowFrame', position: { x: 3, y: 5, z: 4 }, color: '#3A3A3A' },
      { type: 'windowFrame', position: { x: 6, y: 5, z: 5 }, color: '#3A3A3A' },
      // Floor for the observation deck above
      { type: 'slab', position: { x: 4, y: 5, z: 4 }, color: '#8B6F47' },
      { type: 'slab', position: { x: 5, y: 5, z: 4 }, color: '#8B6F47' },
      { type: 'slab', position: { x: 4, y: 5, z: 5 }, color: '#8B6F47' },
      { type: 'slab', position: { x: 5, y: 5, z: 5 }, color: '#8B6F47' },

      // === LEVEL 5 (y=6) - corbel / overhang course ===
      // Slightly wider parapet base extending out (corbel ring)
      { type: 'cornice', position: { x: 3, y: 6, z: 3 }, color: '#A09080' },
      { type: 'cornice', position: { x: 4, y: 6, z: 3 }, color: '#A09080' },
      { type: 'cornice', position: { x: 5, y: 6, z: 3 }, color: '#A09080' },
      { type: 'cornice', position: { x: 6, y: 6, z: 3 }, color: '#A09080' },
      { type: 'cornice', position: { x: 3, y: 6, z: 6 }, color: '#A09080' },
      { type: 'cornice', position: { x: 4, y: 6, z: 6 }, color: '#A09080' },
      { type: 'cornice', position: { x: 5, y: 6, z: 6 }, color: '#A09080' },
      { type: 'cornice', position: { x: 6, y: 6, z: 6 }, color: '#A09080' },
      // Side corbels (use cubes since cornice is X-aligned)
      { type: 'cube', position: { x: 3, y: 6, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 3, y: 6, z: 5 }, color: '#A09080' },
      { type: 'cube', position: { x: 6, y: 6, z: 4 }, color: '#A09080' },
      { type: 'cube', position: { x: 6, y: 6, z: 5 }, color: '#A09080' },

      // === LEVEL 6 (y=7) - OBSERVATION DECK with CRENELLATIONS ===
      // Floor of the deck
      ...makeFloor(3, 7, 3, 4, 4, '#8B6F47'),
      // Crenellated battlement perimeter (alternating merlons)
      { type: 'merlon', position: { x: 3, y: 8, z: 3 }, color: '#A09080' },
      // gap (crenel)
      { type: 'merlon', position: { x: 5, y: 8, z: 3 }, color: '#A09080' },
      // gap
      { type: 'merlon', position: { x: 3, y: 8, z: 6 }, color: '#A09080' },
      { type: 'merlon', position: { x: 5, y: 8, z: 6 }, color: '#A09080' },
      { type: 'merlon', position: { x: 3, y: 8, z: 4 }, color: '#A09080' },
      { type: 'merlon', position: { x: 6, y: 8, z: 3 }, color: '#A09080' },
      { type: 'merlon', position: { x: 6, y: 8, z: 5 }, color: '#A09080' },
      { type: 'merlon', position: { x: 4, y: 8, z: 6 }, color: '#A09080' },
      // Some additional merlons for symmetry
      { type: 'merlon', position: { x: 4, y: 8, z: 3 }, color: '#A09080' }, // extra fill
      { type: 'merlon', position: { x: 6, y: 8, z: 4 }, color: '#A09080' },
      { type: 'merlon', position: { x: 3, y: 8, z: 5 }, color: '#A09080' },
      { type: 'merlon', position: { x: 6, y: 8, z: 6 }, color: '#A09080' },

      // === ROOF - pointed wooden cap on a small inner sentinel post ===
      // Central post
      { type: 'logZ', position: { x: 4, y: 8, z: 4 }, color: '#5A3A1A' },
      { type: 'logZ', position: { x: 4, y: 9, z: 4 }, color: '#5A3A1A' },
      { type: 'logZ', position: { x: 4, y: 10, z: 4 }, color: '#5A3A1A' },
      // Wooden conical/pyramidal cap roof
      { type: 'cube', position: { x: 4, y: 8, z: 5 }, color: '#7A4A1A' },
      { type: 'cube', position: { x: 5, y: 8, z: 4 }, color: '#7A4A1A' },
      { type: 'cube', position: { x: 5, y: 8, z: 5 }, color: '#7A4A1A' },
      { type: 'roofPeak', position: { x: 4, y: 9, z: 5 }, color: '#7A4A1A' },
      { type: 'roofPeak', position: { x: 5, y: 9, z: 4 }, color: '#7A4A1A' },
      { type: 'roofPeak', position: { x: 5, y: 9, z: 5 }, color: '#7A4A1A' },
      { type: 'pyramid', position: { x: 4, y: 9, z: 4 }, color: '#7A4A1A' },
      // Finial on the very top
      { type: 'finial', position: { x: 4, y: 10, z: 4 }, color: '#A09080' },
      // Flag pole + banner
      { type: 'pillarRound2', position: { x: 4, y: 11, z: 4 }, color: '#5A3A1A' },
      { type: 'banner', position: { x: 4, y: 11, z: 4 }, color: '#C70039' },

      // === LADDERS - external (outside the tower, against back wall) ===
      // Outside ladder running up the back wall (z=7, just outside the foundation)
      { type: 'ladder', position: { x: 4, y: 2, z: 7 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 3, z: 7 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 4, z: 7 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 5, z: 7 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 6, z: 7 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 7, z: 7 }, color: '#8B6F47' },

      // === INTERIOR LADDERS - between floors (in the ladder hole position) ===
      // Ground -> Level 2 ladder at (4, 4)
      { type: 'ladder', position: { x: 4, y: 2, z: 4 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 3, z: 4 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 4, z: 4 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 5, z: 4 }, color: '#8B6F47' },
      { type: 'ladder', position: { x: 4, y: 6, z: 4 }, color: '#8B6F47' },

      // === DOOR (heavy wooden) ===
      { type: 'doorFrame', position: { x: 4, y: 3, z: 3 }, color: '#5A3A1A' },
      // Torches flanking the door
      { type: 'torch', position: { x: 3, y: 3, z: 3 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.4, radius: 4 } },
      { type: 'torch', position: { x: 5, y: 3, z: 3 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.4, radius: 4 } },

      // === BRAZIER ON ROOF DECK (signal fire) ===
      { type: 'barrel', position: { x: 5, y: 7, z: 5 }, color: '#3A3A3A' },
      { type: 'cone', position: { x: 5, y: 8, z: 5 }, color: '#FF4500', emissive: { enabled: true, color: '#FF6600', intensity: 2.5, radius: 6 } },
      { type: 'sphere', position: { x: 5, y: 9, z: 5 }, color: '#FFAA00', emissive: { enabled: true, color: '#FFAA00', intensity: 1.5, radius: 3 } },

      // === BUTTRESSES (decorative diagonal supports at corners) ===
      { type: 'buttress', position: { x: 2, y: 2, z: 3 }, color: '#7A6A55' },
      { type: 'buttress', position: { x: 7, y: 2, z: 3 }, color: '#7A6A55' },
      { type: 'buttress', position: { x: 2, y: 2, z: 6 }, color: '#7A6A55' },
      { type: 'buttress', position: { x: 7, y: 2, z: 6 }, color: '#7A6A55' },

      // === SURROUNDING DETAIL ===
      // Wooden palisade fence around tower (partial, gap at front)
      { type: 'fence', position: { x: 1, y: 1, z: 1 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 2, y: 1, z: 1 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 7, y: 1, z: 1 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 8, y: 1, z: 1 }, color: '#5A4A3A' },
      { type: 'fenceZ', position: { x: 1, y: 1, z: 2 }, color: '#5A4A3A' },
      { type: 'fenceZ', position: { x: 1, y: 1, z: 3 }, color: '#5A4A3A' },
      { type: 'fenceZ', position: { x: 1, y: 1, z: 6 }, color: '#5A4A3A' },
      { type: 'fenceZ', position: { x: 1, y: 1, z: 7 }, color: '#5A4A3A' },
      { type: 'fenceZ', position: { x: 8, y: 1, z: 2 }, color: '#5A4A3A' },
      { type: 'fenceZ', position: { x: 8, y: 1, z: 3 }, color: '#5A4A3A' },
      { type: 'fenceZ', position: { x: 8, y: 1, z: 6 }, color: '#5A4A3A' },
      { type: 'fenceZ', position: { x: 8, y: 1, z: 7 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 1, y: 1, z: 8 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 2, y: 1, z: 8 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 7, y: 1, z: 8 }, color: '#5A4A3A' },
      { type: 'fence', position: { x: 8, y: 1, z: 8 }, color: '#5A4A3A' },
      // Gate at front
      { type: 'gateDouble', position: { x: 4, y: 1, z: 0 }, color: '#5A3A1A' },
      { type: 'gateDouble', position: { x: 5, y: 1, z: 0 }, color: '#5A3A1A' },

      // Firewood stack near tower
      { type: 'logX', position: { x: 8, y: 1, z: 5 }, color: '#5A4A3A' },
      { type: 'logX', position: { x: 8, y: 2, z: 5 }, color: '#5A4A3A' },
      { type: 'logX', position: { x: 8, y: 1, z: 6 }, color: '#5A4A3A' },
      // Barrel of water
      { type: 'barrel', position: { x: 1, y: 1, z: 5 }, color: '#4682B4' },
      // Crate of supplies
      { type: 'crate', position: { x: 8, y: 1, z: 2 }, color: '#5A4A3A' },
      // Hay bale (using slab + sack)
      { type: 'sack', position: { x: 1, y: 1, z: 6 }, color: '#D4A95B' },
      { type: 'sack', position: { x: 1, y: 1, z: 7 }, color: '#D4A95B' },

      // === VEGETATION around the tower ===
      { type: 'bush', position: { x: 0, y: 1, z: 0 }, color: '#3A5A2A' },
      { type: 'bush', position: { x: 9, y: 1, z: 0 }, color: '#3A5A2A' },
      { type: 'bush', position: { x: 0, y: 1, z: 9 }, color: '#3A5A2A' },
      { type: 'bush', position: { x: 9, y: 1, z: 9 }, color: '#3A5A2A' },
      { type: 'grass', position: { x: 6, y: 1, z: 0 }, color: '#5A7A3A' },
      { type: 'grass', position: { x: 3, y: 1, z: 9 }, color: '#5A7A3A' },
      { type: 'flower', position: { x: 9, y: 1, z: 4 }, color: '#FFAA00' },
      { type: 'flower', position: { x: 0, y: 1, z: 4 }, color: '#FF66AA' },
      // Vines climbing stone
      { type: 'vine', position: { x: 3, y: 4, z: 3 }, color: '#3A5A2A' },
      { type: 'vine', position: { x: 6, y: 5, z: 6 }, color: '#3A5A2A' },
      { type: 'moss', position: { x: 2, y: 1, z: 5 }, color: '#5A7A3A' },
    ]
  }
};

// Helper functions to generate block patterns

function makeFloor(startX, y, startZ, width, depth, color) {
  const blocks = [];
  for (let x = 0; x < width; x++) {
    for (let z = 0; z < depth; z++) {
      blocks.push({
        type: 'cube',
        position: { x: startX + x, y, z: startZ + z },
        color
      });
    }
  }
  return blocks;
}

function makeHollowFloor(startX, y, startZ, width, depth, color) {
  const blocks = [];
  for (let x = 0; x < width; x++) {
    for (let z = 0; z < depth; z++) {
      if (x === 0 || x === width - 1 || z === 0 || z === depth - 1) {
        blocks.push({
          type: 'cube',
          position: { x: startX + x, y, z: startZ + z },
          color
        });
      }
    }
  }
  return blocks;
}

function makeGlassFloor(startX, y, startZ, width, depth, wallColor, glassColor) {
  const blocks = [];
  for (let x = 0; x < width; x++) {
    for (let z = 0; z < depth; z++) {
      if (x === 0 || x === width - 1 || z === 0 || z === depth - 1) {
        // Alternate glass and wall
        const isGlass = (x + z) % 2 === 0;
        blocks.push({
          type: 'cube',
          position: { x: startX + x, y, z: startZ + z },
          color: isGlass ? glassColor : wallColor
        });
      }
    }
  }
  return blocks;
}

function makeWallX(startX, startY, z, length, height, color) {
  const blocks = [];
  for (let x = 0; x < length; x++) {
    for (let y = 0; y < height; y++) {
      blocks.push({
        type: 'cube',
        position: { x: startX + x, y: startY + y, z },
        color
      });
    }
  }
  return blocks;
}

function makeWallZ(x, startY, startZ, length, height, color) {
  const blocks = [];
  for (let z = 0; z < length; z++) {
    for (let y = 0; y < height; y++) {
      blocks.push({
        type: 'cube',
        position: { x, y: startY + y, z: startZ + z },
        color
      });
    }
  }
  return blocks;
}

function makeRow(startX, y, z, length, axis, type, color) {
  const blocks = [];
  for (let i = 0; i < length; i++) {
    const pos = axis === 'X'
      ? { x: startX + i, y, z }
      : { x: startX, y, z: z + i };
    blocks.push({ type, position: pos, color });
  }
  return blocks;
}

// Get list of template categories
export function getTemplateCategories() {
  return Object.entries(TEMPLATE_CATEGORIES).map(([id, category]) => ({
    id,
    label: category.label,
    templates: category.templates.map(templateId => ({
      id: templateId,
      name: TEMPLATES[templateId]?.name || templateId,
      description: TEMPLATES[templateId]?.description || ''
    }))
  }));
}

// Get list of all templates (flat list for backwards compatibility)
export function getTemplateList() {
  return Object.entries(TEMPLATES).map(([id, template]) => ({
    id,
    name: template.name,
    description: template.description,
    category: template.category
  }));
}

// Get a specific template's blocks
export function getTemplate(id) {
  return TEMPLATES[id] || null;
}
