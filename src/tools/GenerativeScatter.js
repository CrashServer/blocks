import * as THREE from 'three';
import { SCATTER_PRESETS, getElbowType, getStraightType, getClusterBlock, getDecorativeType } from './ScatterPresets.js';

/**
 * Generative scatter tool for creating organic, procedural block structures
 * using random walk/growth algorithms
 */
// Available generation algorithms
export const SCATTER_ALGORITHMS = {
  walk: { label: 'Random Walk', description: 'Connected directional growth' },
  cluster: { label: 'Cluster', description: 'Organic blob spreading' },
  lsystem: { label: 'L-System', description: 'Fractal rule-based growth' },
  spiral: { label: 'Spiral', description: 'Spiral tower patterns' },
  tree: { label: 'Tree', description: 'Branching tree structures' },
  wave: { label: 'Wave', description: 'Sine wave patterns' },
  drunk: { label: "Drunkard's Walk", description: 'Chaotic random movement' },
  crystal: { label: 'Crystal', description: 'Geometric crystalline growth' },
  vine: { label: 'Vine', description: 'Climbing vine patterns' },
  // Fusion algorithms for mixed presets
  layers: { label: 'Layered', description: 'Stacked layers of different blocks' },
  scatter3d: { label: 'Scatter 3D', description: 'Random 3D cloud of mixed blocks' },
  radial: { label: 'Radial Burst', description: 'Exploding outward pattern' },
  gradient: { label: 'Gradient', description: 'Block types change with distance' },
  terrain: { label: 'Terrain', description: 'Heightmap-based mixed terrain' },
  galaxy: { label: 'Galaxy', description: 'Spiral arms with mixed blocks' },
  // Nature-specific algorithms
  cavern: { label: 'Cavern', description: 'Cave with stalactites and stalagmites' },
  rockField: { label: 'Rock Field', description: 'Scattered rock landscape' },
  mushroomGrove: { label: 'Mushroom Grove', description: 'Forest of mushrooms' },
  crystalCave: { label: 'Crystal Cave', description: 'Crystalline cave formation' },
  coralReef: { label: 'Coral Reef', description: 'Underwater coral structures' },
  boulderPile: { label: 'Boulder Pile', description: 'Piled rocks and stones' }
};

export class GenerativeScatter {
  constructor(blockManager) {
    this.blockManager = blockManager;

    // Configuration defaults
    this.preset = 'pipes';
    this.algorithm = 'walk'; // Default algorithm
    this.maxBlocks = 50;
    this.branchChance = 0.2;
    this.turnChance = 0.3;
    this.scaleRatio = 0.8; // 80% 1x, 20% 2x
    this.colorHarmony = 'analogous';
    this.verticalBias = 0.1; // Probability of going vertical
    this.decorativeChance = 0.05; // Chance to add decorative pieces

    // Growth state
    this.placedPositions = new Set();

    // Audio-reactive mode
    this.audioReactive = false;
    this.baseMaxBlocks = 50; // Store base values for audio modulation
    this.baseBranchChance = 0.2;
    this.baseTurnChance = 0.3;
    this.baseVerticalBias = 0.1;
    this.baseDecorativeChance = 0.05;
    this.baseScaleRatio = 0.8;
  }

  /**
   * Update generation parameters based on audio data (for VJ mode)
   * @param {Object} audioData - Audio analysis data { bands: {bass, mid, high}, energy, beat }
   * @returns {boolean} - Whether to trigger generation (on beat)
   */
  updateFromAudio(audioData) {
    if (!this.audioReactive) return false;

    const bass = audioData.bands.bass;
    const mid = audioData.bands.mid;
    const high = audioData.bands.high;
    const energy = audioData.energy;

    // Bass → density & scale (larger structures, more blocks)
    // Map bass (0-1) to maxBlocks multiplier (0.5x - 2.5x)
    const densityMultiplier = 0.5 + bass * 2.0;
    // Ensure minimum of 20 blocks and maximum of 200
    this.maxBlocks = Math.max(20, Math.min(200, Math.round(this.baseMaxBlocks * densityMultiplier * (0.5 + energy * 1.5))));

    // Bass also affects scale ratio - more bass = bigger blocks
    // Map bass to scaleRatio (0.3 = lots of big blocks, 0.9 = mostly small blocks)
    this.scaleRatio = 0.9 - bass * 0.6;

    // Mid → complexity & branching (more intricate patterns)
    // Map mid (0-1) to branchChance (0.1 - 0.6)
    this.branchChance = this.baseBranchChance + mid * 0.4;

    // Map mid to turnChance (0.2 - 0.7) for more dynamic paths
    this.turnChance = this.baseTurnChance + mid * 0.4;

    // High → vertical movement & detail
    // Map high (0-1) to verticalBias (0 - 0.5) - higher sounds go upward
    this.verticalBias = high * 0.5;

    // Map high to decorativeChance (0.02 - 0.2) - more high-freq details
    this.decorativeChance = 0.02 + high * 0.18;

    // Debug log every 100 calls (to avoid spam)
    if (!this._audioUpdateCount) this._audioUpdateCount = 0;
    this._audioUpdateCount++;
    if (this._audioUpdateCount % 100 === 0) {
      console.log(`[GenerativeScatter] Audio params: maxBlocks=${this.maxBlocks}, bass=${bass.toFixed(2)}, mid=${mid.toFixed(2)}, high=${high.toFixed(2)}, energy=${energy.toFixed(2)}`);
    }

    // Return true on beat to trigger generation bursts
    return audioData.beat;
  }

  /**
   * Enable/disable audio-reactive mode
   */
  setAudioReactive(enabled) {
    this.audioReactive = enabled;

    // Store current values as base when enabling
    if (enabled) {
      this.baseMaxBlocks = this.maxBlocks;
      this.baseBranchChance = this.branchChance;
      this.baseTurnChance = this.turnChance;
      this.baseVerticalBias = this.verticalBias;
      this.baseDecorativeChance = this.decorativeChance;
      this.baseScaleRatio = this.scaleRatio;
    }
  }

  /**
   * Main generation function - generates blocks from an origin point
   * @param {Object} origin - Starting position { x, y, z }
   * @param {Object} options - Override configuration options
   * @returns {Array} - Array of block definitions to place
   */
  generate(origin, options = {}) {
    const presetConfig = SCATTER_PRESETS[this.preset];
    if (!presetConfig) {
      console.warn(`Unknown scatter preset: ${this.preset}`);
      return [];
    }

    // Merge options with defaults
    const config = {
      maxBlocks: options.maxBlocks ?? this.maxBlocks,
      branchChance: options.branchChance ?? this.branchChance,
      turnChance: options.turnChance ?? this.turnChance,
      scaleRatio: options.scaleRatio ?? this.scaleRatio,
      baseColor: options.baseColor || '#5588cc',
      colorHarmony: options.colorHarmony ?? this.colorHarmony,
      verticalBias: options.verticalBias ?? this.verticalBias,
      decorativeChance: options.decorativeChance ?? this.decorativeChance
    };

    // Generate color palette from base color
    const colors = this.generateColorPalette(config.baseColor, config.colorHarmony);

    // Reset state
    this.placedPositions.clear();

    // Choose generation method based on algorithm (override preset's default if set)
    switch (this.algorithm) {
      case 'walk':
        return this.generateDirectional(origin, presetConfig, config, colors);
      case 'cluster':
        return this.generateCluster(origin, presetConfig, config, colors);
      case 'lsystem':
        return this.generateLSystem(origin, presetConfig, config, colors);
      case 'spiral':
        return this.generateSpiral(origin, presetConfig, config, colors);
      case 'tree':
        return this.generateTree(origin, presetConfig, config, colors);
      case 'wave':
        return this.generateWave(origin, presetConfig, config, colors);
      case 'drunk':
        return this.generateDrunkard(origin, presetConfig, config, colors);
      case 'crystal':
        return this.generateCrystal(origin, presetConfig, config, colors);
      case 'vine':
        return this.generateVine(origin, presetConfig, config, colors);
      // Fusion algorithms for mixed presets
      case 'layers':
        return this.generateLayers(origin, presetConfig, config, colors);
      case 'scatter3d':
        return this.generateScatter3D(origin, presetConfig, config, colors);
      case 'radial':
        return this.generateRadial(origin, presetConfig, config, colors);
      case 'gradient':
        return this.generateGradient(origin, presetConfig, config, colors);
      case 'terrain':
        return this.generateTerrain(origin, presetConfig, config, colors);
      case 'galaxy':
        return this.generateGalaxy(origin, presetConfig, config, colors);
      // Nature-specific algorithms
      case 'cavern':
        return this.generateCavern(origin, presetConfig, config, colors);
      case 'rockField':
        return this.generateRockField(origin, presetConfig, config, colors);
      case 'mushroomGrove':
        return this.generateMushroomGrove(origin, presetConfig, config, colors);
      case 'crystalCave':
        return this.generateCrystalCave(origin, presetConfig, config, colors);
      case 'coralReef':
        return this.generateCoralReef(origin, presetConfig, config, colors);
      case 'boulderPile':
        return this.generateBoulderPile(origin, presetConfig, config, colors);
      default:
        // Fallback to preset's default
        if (presetConfig.clusterBased) {
          return this.generateCluster(origin, presetConfig, config, colors);
        } else {
          return this.generateDirectional(origin, presetConfig, config, colors);
        }
    }
  }

  /**
   * Directional growth algorithm for connected pieces (pipes, cables, etc.)
   */
  generateDirectional(origin, preset, config, colors) {
    const placedBlocks = [];

    // Queue: { position, direction, previousDirection, depth }
    const queue = [];

    // Start with random horizontal direction
    const startDirections = ['X+', 'X-', 'Z+', 'Z-'];
    const startDir = startDirections[Math.floor(Math.random() * startDirections.length)];

    queue.push({
      position: { ...origin },
      direction: startDir,
      previousDirection: null,
      depth: 0
    });

    while (queue.length > 0 && placedBlocks.length < config.maxBlocks) {
      const current = queue.shift();
      const posKey = this.posKey(current.position);

      // Skip if already occupied
      if (this.placedPositions.has(posKey)) continue;

      // Determine scale for this block
      const scale = this.pickScale(preset, config.scaleRatio);

      // For scaled blocks, snap to appropriate grid
      if (scale > 1) {
        current.position.x = Math.floor(current.position.x / scale) * scale;
        current.position.z = Math.floor(current.position.z / scale) * scale;
      }

      // Check overlap with existing blocks
      if (this.blockManager.wouldOverlapAt('cube', current.position, { w: 1, h: 1, d: 1 }, null, scale)) {
        continue;
      }

      // Determine block type
      let blockType = null;
      let rotation = 0;

      const directionChanged = current.previousDirection &&
        current.previousDirection !== current.direction &&
        this.getAxisFromDirection(current.previousDirection) !== this.getAxisFromDirection(current.direction);

      if (directionChanged) {
        // Need an elbow for direction change
        const elbowInfo = getElbowType(preset, current.previousDirection, current.direction);
        if (elbowInfo) {
          blockType = elbowInfo.type;
          rotation = elbowInfo.rotation;
        } else {
          // No elbow available, use straight piece
          const axis = this.getAxisFromDirection(current.direction);
          blockType = getStraightType(preset, axis);
        }
      } else {
        // Straight piece along current direction
        const axis = this.getAxisFromDirection(current.direction);
        blockType = getStraightType(preset, axis);
      }

      // Fallback to decorative if no block type found
      if (!blockType) {
        blockType = getDecorativeType(preset);
        if (!blockType) continue;
      }

      // Pick color from palette
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Add block to results
      placedBlocks.push({
        type: blockType,
        position: { ...current.position },
        color,
        rotation: { x: 0, y: rotation, z: 0 },
        scale
      });

      this.placedPositions.add(posKey);

      // Calculate next position
      const nextPos = this.moveInDirection(current.position, current.direction, scale);

      // Determine next direction
      let nextDirection = current.direction;

      // Random chance to turn
      if (Math.random() < config.turnChance) {
        // Choose perpendicular direction
        if (Math.random() < config.verticalBias && current.direction.charAt(0) !== 'Y') {
          // Go vertical
          nextDirection = 'Y+';
        } else {
          nextDirection = this.getPerpendicularDirection(current.direction, config.verticalBias);
        }
      }

      // Add continuation to queue
      queue.push({
        position: nextPos,
        direction: nextDirection,
        previousDirection: current.direction,
        depth: current.depth + 1
      });

      // Random branching
      if (Math.random() < config.branchChance && placedBlocks.length < config.maxBlocks - 5) {
        const branchDir = this.getPerpendicularDirection(current.direction, config.verticalBias);
        const branchPos = this.moveInDirection(current.position, branchDir, scale);

        queue.push({
          position: branchPos,
          direction: branchDir,
          previousDirection: current.direction,
          depth: current.depth + 1
        });
      }

      // Small chance to add decorative piece nearby
      if (Math.random() < config.decorativeChance) {
        const decoType = getDecorativeType(preset);
        if (decoType) {
          const decoDir = this.getPerpendicularDirection(current.direction, 0);
          const decoPos = this.moveInDirection(current.position, decoDir, 1);
          const decoKey = this.posKey(decoPos);

          if (!this.placedPositions.has(decoKey) &&
              !this.blockManager.wouldOverlapAt(decoType, decoPos)) {
            placedBlocks.push({
              type: decoType,
              position: decoPos,
              color: colors[Math.floor(Math.random() * colors.length)],
              rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
              scale: 1
            });
            this.placedPositions.add(decoKey);
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Cluster growth algorithm for non-directional blocks (natural, abstract)
   */
  generateCluster(origin, preset, config, colors) {
    const placedBlocks = [];
    const queue = [{ ...origin }];

    while (queue.length > 0 && placedBlocks.length < config.maxBlocks) {
      const pos = queue.shift();
      const key = this.posKey(pos);

      if (this.placedPositions.has(key)) continue;

      // Determine scale
      const scale = this.pickScale(preset, config.scaleRatio);

      // For scaled blocks, snap to appropriate grid
      const adjustedPos = { ...pos };
      if (scale > 1) {
        adjustedPos.x = Math.floor(pos.x / scale) * scale;
        adjustedPos.z = Math.floor(pos.z / scale) * scale;
      }

      // Check overlap
      if (this.blockManager.wouldOverlapAt('cube', adjustedPos, { w: 1, h: 1, d: 1 }, null, scale)) {
        continue;
      }

      // Pick random block from preset
      const blockType = getClusterBlock(preset);
      if (!blockType) continue;

      // Pick color from palette
      const color = colors[Math.floor(Math.random() * colors.length)];

      placedBlocks.push({
        type: blockType,
        position: adjustedPos,
        color,
        rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
        scale
      });

      this.placedPositions.add(key);

      // Add neighbors with decreasing probability based on distance
      const neighbors = this.getNeighbors(pos);
      for (const neighbor of neighbors) {
        // Spread probability decreases with number of blocks placed
        const spreadProb = 0.7 - (placedBlocks.length / config.maxBlocks) * 0.4;
        if (Math.random() < spreadProb) {
          queue.push(neighbor);
        }
      }
    }

    return placedBlocks;
  }

  /**
   * L-System algorithm - rule-based fractal growth
   * Uses simple production rules for branching structures
   */
  generateLSystem(origin, preset, config, colors) {
    const placedBlocks = [];

    // L-System rules: F = forward, + = turn right, - = turn left, [ = push, ] = pop
    const axiom = 'F';
    const rules = {
      'F': 'F[+F]F[-F]F'  // Classic tree-like pattern
    };
    const iterations = Math.min(4, Math.floor(Math.log2(config.maxBlocks / 5)));

    // Generate L-System string
    let current = axiom;
    for (let i = 0; i < iterations; i++) {
      let next = '';
      for (const char of current) {
        next += rules[char] || char;
      }
      current = next;
    }

    // Interpret the string
    const stack = [];
    let pos = { ...origin };
    let angle = 0; // Current direction in degrees (0 = +Z)
    const turnAngle = 25 + Math.random() * 20; // 25-45 degrees

    for (const char of current) {
      if (placedBlocks.length >= config.maxBlocks) break;

      switch (char) {
        case 'F': {
          const key = this.posKey(pos);
          if (!this.placedPositions.has(key)) {
            const scale = this.pickScale(preset, config.scaleRatio);
            const blockType = this.getBlockForPreset(preset, 'straight');

            if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
              placedBlocks.push({
                type: blockType,
                position: { ...pos },
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: { x: 0, y: Math.round(angle / 90) * 90, z: 0 },
                scale
              });
              this.placedPositions.add(key);
            }
          }
          // Move forward
          const rad = angle * Math.PI / 180;
          pos = {
            x: pos.x + Math.round(Math.sin(rad)),
            y: pos.y + (Math.random() < config.verticalBias ? 1 : 0),
            z: pos.z + Math.round(Math.cos(rad))
          };
          break;
        }
        case '+':
          angle += turnAngle;
          break;
        case '-':
          angle -= turnAngle;
          break;
        case '[':
          stack.push({ pos: { ...pos }, angle });
          break;
        case ']':
          if (stack.length > 0) {
            const state = stack.pop();
            pos = state.pos;
            angle = state.angle;
          }
          break;
      }
    }

    return placedBlocks;
  }

  /**
   * Spiral algorithm - creates spiral tower patterns
   */
  generateSpiral(origin, preset, config, colors) {
    const placedBlocks = [];
    const radius = 3 + Math.random() * 4; // 3-7 blocks radius
    const heightPerRevolution = 2 + Math.random() * 3; // 2-5 blocks per full turn
    const revolutions = config.maxBlocks / (2 * Math.PI * radius);

    for (let i = 0; i < config.maxBlocks; i++) {
      const t = (i / config.maxBlocks) * revolutions * 2 * Math.PI;
      const currentRadius = radius * (1 - i / config.maxBlocks * 0.3); // Taper

      const pos = {
        x: Math.round(origin.x + Math.cos(t) * currentRadius),
        y: Math.round(origin.y + (t / (2 * Math.PI)) * heightPerRevolution),
        z: Math.round(origin.z + Math.sin(t) * currentRadius)
      };

      const key = this.posKey(pos);
      if (this.placedPositions.has(key)) continue;

      const scale = this.pickScale(preset, config.scaleRatio);
      const blockType = this.getBlockForPreset(preset, 'any');

      if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
        placedBlocks.push({
          type: blockType,
          position: pos,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: { x: 0, y: Math.round(t * 180 / Math.PI) % 360, z: 0 },
          scale
        });
        this.placedPositions.add(key);
      }
    }

    return placedBlocks;
  }

  /**
   * Tree algorithm - branching tree structures with trunk and canopy
   */
  generateTree(origin, preset, config, colors) {
    const placedBlocks = [];
    const trunkHeight = 3 + Math.floor(Math.random() * 5); // 3-7 blocks tall
    const branchLength = 2 + Math.floor(Math.random() * 3);

    // Build trunk
    for (let y = 0; y < trunkHeight && placedBlocks.length < config.maxBlocks; y++) {
      const pos = { x: origin.x, y: origin.y + y, z: origin.z };
      const key = this.posKey(pos);

      if (!this.placedPositions.has(key)) {
        const blockType = this.getBlockForPreset(preset, 'vertical');
        placedBlocks.push({
          type: blockType,
          position: pos,
          color: colors[0], // Trunk color
          rotation: { x: 0, y: 0, z: 0 },
          scale: 1
        });
        this.placedPositions.add(key);
      }
    }

    // Branch out at top
    const branchStart = origin.y + trunkHeight;
    const directions = [
      { dx: 1, dz: 0 }, { dx: -1, dz: 0 },
      { dx: 0, dz: 1 }, { dx: 0, dz: -1 },
      { dx: 1, dz: 1 }, { dx: -1, dz: 1 },
      { dx: 1, dz: -1 }, { dx: -1, dz: -1 }
    ];

    // Main branches
    for (const dir of directions) {
      if (Math.random() > config.branchChance * 2 + 0.3) continue;
      if (placedBlocks.length >= config.maxBlocks) break;

      for (let i = 1; i <= branchLength; i++) {
        const pos = {
          x: origin.x + dir.dx * i,
          y: branchStart + Math.floor(i * 0.5) - 1,
          z: origin.z + dir.dz * i
        };
        const key = this.posKey(pos);

        if (!this.placedPositions.has(key) && placedBlocks.length < config.maxBlocks) {
          const blockType = this.getBlockForPreset(preset, 'any');
          if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
            placedBlocks.push({
              type: blockType,
              position: pos,
              color: colors[Math.floor(Math.random() * colors.length)],
              rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
              scale: 1
            });
            this.placedPositions.add(key);
          }
        }

        // Sub-branches
        if (Math.random() < config.branchChance && placedBlocks.length < config.maxBlocks) {
          const subPos = { ...pos, y: pos.y + 1 };
          const subKey = this.posKey(subPos);
          if (!this.placedPositions.has(subKey)) {
            const blockType = this.getBlockForPreset(preset, 'any');
            if (!this.blockManager.wouldOverlapAt(blockType, subPos)) {
              placedBlocks.push({
                type: blockType,
                position: subPos,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
                scale: 1
              });
              this.placedPositions.add(subKey);
            }
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Wave algorithm - creates sine wave patterns along ground
   */
  generateWave(origin, preset, config, colors) {
    const placedBlocks = [];
    const wavelength = 4 + Math.random() * 4; // 4-8 blocks
    const amplitude = 2 + Math.random() * 3; // 2-5 blocks
    const width = Math.ceil(Math.sqrt(config.maxBlocks));
    const length = Math.ceil(config.maxBlocks / width);

    for (let x = 0; x < length && placedBlocks.length < config.maxBlocks; x++) {
      for (let z = 0; z < width && placedBlocks.length < config.maxBlocks; z++) {
        // Two perpendicular waves combined
        const wave1 = Math.sin((x / wavelength) * 2 * Math.PI);
        const wave2 = Math.sin((z / wavelength) * 2 * Math.PI) * 0.5;
        const height = Math.round((wave1 + wave2) * amplitude);

        const pos = {
          x: origin.x + x - Math.floor(length / 2),
          y: origin.y + height + Math.round(amplitude),
          z: origin.z + z - Math.floor(width / 2)
        };

        const key = this.posKey(pos);
        if (this.placedPositions.has(key)) continue;

        const scale = this.pickScale(preset, config.scaleRatio);
        const blockType = this.getBlockForPreset(preset, 'any');

        if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
          placedBlocks.push({
            type: blockType,
            position: pos,
            color: colors[Math.floor((height + amplitude) / (2 * amplitude) * colors.length) % colors.length],
            rotation: { x: 0, y: 0, z: 0 },
            scale
          });
          this.placedPositions.add(key);
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Drunkard's Walk - chaotic random movement
   */
  generateDrunkard(origin, preset, config, colors) {
    const placedBlocks = [];
    let pos = { ...origin };

    const directions = [
      { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
      { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
      { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 }
    ];

    let stuckCount = 0;
    const maxStuck = 50;

    while (placedBlocks.length < config.maxBlocks && stuckCount < maxStuck) {
      const key = this.posKey(pos);

      if (!this.placedPositions.has(key)) {
        const scale = this.pickScale(preset, config.scaleRatio);
        const blockType = this.getBlockForPreset(preset, 'any');

        if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
          placedBlocks.push({
            type: blockType,
            position: { ...pos },
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
            scale
          });
          this.placedPositions.add(key);
          stuckCount = 0;
        } else {
          stuckCount++;
        }
      }

      // Random walk - pick random direction
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const stepSize = Math.random() < 0.3 ? 2 : 1; // Occasionally larger steps

      pos = {
        x: pos.x + dir.dx * stepSize,
        y: Math.max(0, pos.y + dir.dy * stepSize), // Don't go below ground
        z: pos.z + dir.dz * stepSize
      };
    }

    return placedBlocks;
  }

  /**
   * Crystal algorithm - geometric crystalline growth
   */
  generateCrystal(origin, preset, config, colors) {
    const placedBlocks = [];
    const faces = 4 + Math.floor(Math.random() * 4); // 4-7 faces
    const height = 5 + Math.floor(Math.random() * 8); // 5-12 blocks tall
    const baseRadius = 3 + Math.random() * 3; // 3-6 blocks

    // Build crystal spire
    for (let y = 0; y < height && placedBlocks.length < config.maxBlocks; y++) {
      const progress = y / height;
      const radius = baseRadius * (1 - progress * 0.8); // Taper to point

      for (let f = 0; f < faces; f++) {
        const angle = (f / faces) * 2 * Math.PI;
        const r = radius * (0.8 + Math.random() * 0.4); // Slightly irregular

        const pos = {
          x: Math.round(origin.x + Math.cos(angle) * r),
          y: origin.y + y,
          z: Math.round(origin.z + Math.sin(angle) * r)
        };

        const key = this.posKey(pos);
        if (this.placedPositions.has(key)) continue;
        if (placedBlocks.length >= config.maxBlocks) break;

        const blockType = this.getBlockForPreset(preset, 'any');

        if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
          // Color gradient from base to tip
          const colorIndex = Math.floor(progress * (colors.length - 1));
          placedBlocks.push({
            type: blockType,
            position: pos,
            color: colors[colorIndex],
            rotation: { x: 0, y: Math.round(angle * 180 / Math.PI), z: 0 },
            scale: 1
          });
          this.placedPositions.add(key);
        }
      }

      // Fill center for lower portion
      if (progress < 0.5 && placedBlocks.length < config.maxBlocks) {
        const centerKey = this.posKey({ ...origin, y: origin.y + y });
        if (!this.placedPositions.has(centerKey)) {
          const blockType = this.getBlockForPreset(preset, 'any');
          if (!this.blockManager.wouldOverlapAt(blockType, { ...origin, y: origin.y + y })) {
            placedBlocks.push({
              type: blockType,
              position: { ...origin, y: origin.y + y },
              color: colors[0],
              rotation: { x: 0, y: 0, z: 0 },
              scale: 1
            });
            this.placedPositions.add(centerKey);
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Vine algorithm - climbing vine patterns that grow upward
   */
  generateVine(origin, preset, config, colors) {
    const placedBlocks = [];
    const vines = 2 + Math.floor(Math.random() * 3); // 2-4 vines

    for (let v = 0; v < vines; v++) {
      let pos = {
        x: origin.x + Math.floor(Math.random() * 3) - 1,
        y: origin.y,
        z: origin.z + Math.floor(Math.random() * 3) - 1
      };

      const blocksPerVine = Math.floor(config.maxBlocks / vines);
      let vineBlocks = 0;
      let direction = Math.floor(Math.random() * 4) * 90; // 0, 90, 180, 270

      while (vineBlocks < blocksPerVine && placedBlocks.length < config.maxBlocks) {
        const key = this.posKey(pos);

        if (!this.placedPositions.has(key)) {
          const blockType = this.getBlockForPreset(preset, 'vertical');

          if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
            placedBlocks.push({
              type: blockType,
              position: { ...pos },
              color: colors[Math.floor(Math.random() * colors.length)],
              rotation: { x: 0, y: direction, z: 0 },
              scale: 1
            });
            this.placedPositions.add(key);
            vineBlocks++;
          }
        }

        // Grow mostly upward with some horizontal drift
        if (Math.random() < 0.7) {
          pos.y++;
        } else {
          // Random horizontal movement
          const rad = direction * Math.PI / 180;
          if (Math.random() < 0.5) {
            pos.x += Math.round(Math.cos(rad));
            pos.z += Math.round(Math.sin(rad));
          }
          // Occasionally change direction
          if (Math.random() < config.turnChance) {
            direction = (direction + (Math.random() < 0.5 ? 90 : -90) + 360) % 360;
          }
        }

        // Random branching
        if (Math.random() < config.branchChance * 0.5 && placedBlocks.length < config.maxBlocks) {
          const branchDir = (direction + (Math.random() < 0.5 ? 90 : -90)) % 360;
          const branchRad = branchDir * Math.PI / 180;
          const branchPos = {
            x: pos.x + Math.round(Math.cos(branchRad)),
            y: pos.y,
            z: pos.z + Math.round(Math.sin(branchRad))
          };
          const branchKey = this.posKey(branchPos);

          if (!this.placedPositions.has(branchKey)) {
            const branchType = this.getBlockForPreset(preset, 'any');
            if (!this.blockManager.wouldOverlapAt(branchType, branchPos)) {
              placedBlocks.push({
                type: branchType,
                position: branchPos,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: { x: 0, y: branchDir, z: 0 },
                scale: 1
              });
              this.placedPositions.add(branchKey);
            }
          }
        }
      }
    }

    return placedBlocks;
  }

  // ========== FUSION ALGORITHMS (for mixed presets) ==========

  /**
   * Layered algorithm - creates stacked horizontal layers with different blocks per layer
   */
  generateLayers(origin, preset, config, colors) {
    const placedBlocks = [];
    const blockTypes = this.getBlockList(preset);
    const layerHeight = Math.ceil(config.maxBlocks / blockTypes.length);
    const radius = Math.ceil(Math.sqrt(layerHeight / Math.PI));

    for (let layer = 0; layer < blockTypes.length && placedBlocks.length < config.maxBlocks; layer++) {
      const blockType = blockTypes[layer];
      const layerY = origin.y + layer;

      // Create circular layer
      for (let dx = -radius; dx <= radius && placedBlocks.length < config.maxBlocks; dx++) {
        for (let dz = -radius; dz <= radius && placedBlocks.length < config.maxBlocks; dz++) {
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist > radius) continue;

          // Add some noise to make it organic
          if (Math.random() > 0.7 + 0.3 * (1 - dist / radius)) continue;

          const pos = { x: origin.x + dx, y: layerY, z: origin.z + dz };
          const key = this.posKey(pos);

          if (!this.placedPositions.has(key) && !this.blockManager.wouldOverlapAt(blockType, pos)) {
            placedBlocks.push({
              type: blockType,
              position: pos,
              color: colors[layer % colors.length],
              rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
              scale: 1
            });
            this.placedPositions.add(key);
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Scatter 3D - random 3D cloud of mixed blocks in a spherical volume
   */
  generateScatter3D(origin, preset, config, colors) {
    const placedBlocks = [];
    const blockTypes = this.getBlockList(preset);
    const radius = Math.cbrt(config.maxBlocks) * 1.5;

    let attempts = 0;
    const maxAttempts = config.maxBlocks * 3;

    while (placedBlocks.length < config.maxBlocks && attempts < maxAttempts) {
      attempts++;

      // Random position in sphere
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * radius; // Cube root for uniform distribution

      const pos = {
        x: Math.round(origin.x + r * Math.sin(phi) * Math.cos(theta)),
        y: Math.round(origin.y + r * Math.cos(phi)),
        z: Math.round(origin.z + r * Math.sin(phi) * Math.sin(theta))
      };

      if (pos.y < 0) continue; // Don't go below ground

      const key = this.posKey(pos);
      if (this.placedPositions.has(key)) continue;

      const blockType = blockTypes[Math.floor(Math.random() * blockTypes.length)];
      const scale = this.pickScale(preset, config.scaleRatio);

      if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
        placedBlocks.push({
          type: blockType,
          position: pos,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
          scale
        });
        this.placedPositions.add(key);
      }
    }

    return placedBlocks;
  }

  /**
   * Radial Burst - blocks explode outward from center with different types at different distances
   */
  generateRadial(origin, preset, config, colors) {
    const placedBlocks = [];
    const blockTypes = this.getBlockList(preset);
    const maxRadius = Math.cbrt(config.maxBlocks) * 2;
    const rays = 8 + Math.floor(Math.random() * 8); // 8-16 rays

    for (let ray = 0; ray < rays && placedBlocks.length < config.maxBlocks; ray++) {
      const angle = (ray / rays) * 2 * Math.PI;
      const elevation = (Math.random() - 0.3) * Math.PI * 0.5; // Mostly horizontal, some up

      for (let r = 0; r <= maxRadius && placedBlocks.length < config.maxBlocks; r++) {
        // Block type changes with distance
        const typeIndex = Math.floor((r / maxRadius) * blockTypes.length);
        const blockType = blockTypes[Math.min(typeIndex, blockTypes.length - 1)];

        const pos = {
          x: Math.round(origin.x + r * Math.cos(angle) * Math.cos(elevation)),
          y: Math.round(origin.y + r * Math.sin(elevation)),
          z: Math.round(origin.z + r * Math.sin(angle) * Math.cos(elevation))
        };

        if (pos.y < 0) continue;

        const key = this.posKey(pos);
        if (this.placedPositions.has(key)) continue;

        // Probability decreases with distance
        if (Math.random() > 0.8 - r / maxRadius * 0.5) continue;

        if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
          placedBlocks.push({
            type: blockType,
            position: pos,
            color: colors[typeIndex % colors.length],
            rotation: { x: 0, y: Math.round(angle * 180 / Math.PI), z: 0 },
            scale: 1
          });
          this.placedPositions.add(key);
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Gradient - block types transition based on distance from origin
   */
  generateGradient(origin, preset, config, colors) {
    const placedBlocks = [];
    const blockTypes = this.getBlockList(preset);
    const size = Math.ceil(Math.cbrt(config.maxBlocks));

    for (let x = -size; x <= size && placedBlocks.length < config.maxBlocks; x++) {
      for (let y = 0; y <= size && placedBlocks.length < config.maxBlocks; y++) {
        for (let z = -size; z <= size && placedBlocks.length < config.maxBlocks; z++) {
          const dist = Math.sqrt(x * x + y * y + z * z);
          if (dist > size) continue;

          // Probability based on noise
          const noise = Math.sin(x * 0.5) * Math.cos(z * 0.5) * Math.sin(y * 0.7);
          if (Math.random() > 0.3 + noise * 0.2) continue;

          const pos = { x: origin.x + x, y: origin.y + y, z: origin.z + z };
          const key = this.posKey(pos);

          if (this.placedPositions.has(key)) continue;

          // Block type based on distance
          const typeIndex = Math.floor((dist / size) * blockTypes.length);
          const blockType = blockTypes[Math.min(typeIndex, blockTypes.length - 1)];

          if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
            placedBlocks.push({
              type: blockType,
              position: pos,
              color: colors[typeIndex % colors.length],
              rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
              scale: 1
            });
            this.placedPositions.add(key);
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Terrain - heightmap-based terrain with different blocks at different heights
   */
  generateTerrain(origin, preset, config, colors) {
    const placedBlocks = [];
    const blockTypes = this.getBlockList(preset);
    const size = Math.ceil(Math.sqrt(config.maxBlocks));
    const maxHeight = 6;

    // Simple perlin-like noise
    const noise = (x, z) => {
      const s1 = Math.sin(x * 0.3) * Math.cos(z * 0.3);
      const s2 = Math.sin(x * 0.7 + 1) * Math.cos(z * 0.5 + 2);
      const s3 = Math.sin(x * 0.15) * Math.cos(z * 0.15);
      return (s1 + s2 * 0.5 + s3 * 2) / 3.5;
    };

    for (let x = 0; x < size && placedBlocks.length < config.maxBlocks; x++) {
      for (let z = 0; z < size && placedBlocks.length < config.maxBlocks; z++) {
        const height = Math.round((noise(x, z) + 1) * maxHeight / 2);

        for (let y = 0; y <= height && placedBlocks.length < config.maxBlocks; y++) {
          const pos = {
            x: origin.x + x - Math.floor(size / 2),
            y: origin.y + y,
            z: origin.z + z - Math.floor(size / 2)
          };

          const key = this.posKey(pos);
          if (this.placedPositions.has(key)) continue;

          // Different block types for different heights
          const heightRatio = y / maxHeight;
          const typeIndex = Math.floor(heightRatio * blockTypes.length);
          const blockType = blockTypes[Math.min(typeIndex, blockTypes.length - 1)];

          if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
            placedBlocks.push({
              type: blockType,
              position: pos,
              color: colors[typeIndex % colors.length],
              rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
              scale: 1
            });
            this.placedPositions.add(key);
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Galaxy - spiral arms with different block types in each arm
   */
  generateGalaxy(origin, preset, config, colors) {
    const placedBlocks = [];
    const blockTypes = this.getBlockList(preset);
    const arms = 2 + Math.floor(Math.random() * 3); // 2-4 arms
    const blocksPerArm = Math.floor(config.maxBlocks / arms);

    for (let arm = 0; arm < arms && placedBlocks.length < config.maxBlocks; arm++) {
      const armOffset = (arm / arms) * 2 * Math.PI;
      const armBlockType = blockTypes[arm % blockTypes.length];

      for (let i = 0; i < blocksPerArm && placedBlocks.length < config.maxBlocks; i++) {
        const t = i / blocksPerArm;
        const angle = armOffset + t * 3 * Math.PI; // 1.5 rotations
        const radius = 1 + t * 8; // Expand outward

        // Add some scatter perpendicular to arm
        const scatter = (Math.random() - 0.5) * 2 * (1 + t);
        const perpAngle = angle + Math.PI / 2;

        const pos = {
          x: Math.round(origin.x + Math.cos(angle) * radius + Math.cos(perpAngle) * scatter),
          y: Math.round(origin.y + (Math.random() - 0.5) * 2), // Slight vertical variation
          z: Math.round(origin.z + Math.sin(angle) * radius + Math.sin(perpAngle) * scatter)
        };

        if (pos.y < 0) pos.y = 0;

        const key = this.posKey(pos);
        if (this.placedPositions.has(key)) continue;

        // Mix in other block types occasionally
        const useAlternate = Math.random() < 0.3;
        const blockType = useAlternate
          ? blockTypes[Math.floor(Math.random() * blockTypes.length)]
          : armBlockType;

        if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
          placedBlocks.push({
            type: blockType,
            position: pos,
            color: colors[(arm + (useAlternate ? 1 : 0)) % colors.length],
            rotation: { x: 0, y: Math.round(angle * 180 / Math.PI), z: 0 },
            scale: 1
          });
          this.placedPositions.add(key);
        }
      }
    }

    return placedBlocks;
  }

  // ========== NATURE-SPECIFIC ALGORITHMS ==========

  /**
   * Cavern - creates cave ceiling with stalactites and floor with stalagmites
   */
  generateCavern(origin, preset, config, colors) {
    const placedBlocks = [];
    const width = Math.ceil(Math.sqrt(config.maxBlocks / 2));
    const ceilingHeight = 6 + Math.floor(Math.random() * 4); // 6-9 blocks high

    // Define block types for cave features
    const stalactiteTypes = ['stalactite', 'crystalSpike', 'crystalShard'];
    const stalagmiteTypes = ['stalagmite', 'rockTall', 'crystalSpike'];
    const floorTypes = ['rock', 'rockSmall', 'rockFlat', 'pebbles', 'moss'];
    const ceilingTypes = ['rockFlat', 'slate', 'moss'];
    const crystalTypes = ['crystalSmall', 'crystalCluster', 'crystalFormation'];

    // Generate floor with rocks and moss
    for (let x = -width; x <= width && placedBlocks.length < config.maxBlocks; x++) {
      for (let z = -width; z <= width && placedBlocks.length < config.maxBlocks; z++) {
        const dist = Math.sqrt(x * x + z * z);
        if (dist > width * 1.2) continue;

        const pos = { x: origin.x + x, y: origin.y, z: origin.z + z };
        const key = this.posKey(pos);

        if (!this.placedPositions.has(key) && Math.random() < 0.4) {
          const blockType = floorTypes[Math.floor(Math.random() * floorTypes.length)];
          if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
            placedBlocks.push({
              type: blockType,
              position: pos,
              color: colors[Math.floor(Math.random() * colors.length)],
              rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
              scale: 1
            });
            this.placedPositions.add(key);
          }
        }

        // Stalagmites rising from floor
        if (Math.random() < 0.15 && placedBlocks.length < config.maxBlocks) {
          const height = 1 + Math.floor(Math.random() * 3);
          for (let y = 0; y < height && placedBlocks.length < config.maxBlocks; y++) {
            const stagPos = { x: pos.x, y: origin.y + y, z: pos.z };
            const stagKey = this.posKey(stagPos);
            if (!this.placedPositions.has(stagKey)) {
              const blockType = y === height - 1
                ? stalagmiteTypes[Math.floor(Math.random() * stalagmiteTypes.length)]
                : 'rockTall';
              if (!this.blockManager.wouldOverlapAt(blockType, stagPos)) {
                placedBlocks.push({
                  type: blockType,
                  position: stagPos,
                  color: colors[0],
                  rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
                  scale: 1
                });
                this.placedPositions.add(stagKey);
              }
            }
          }
        }

        // Stalactites hanging from ceiling
        if (Math.random() < 0.2 && placedBlocks.length < config.maxBlocks) {
          const length = 1 + Math.floor(Math.random() * 3);
          for (let y = 0; y < length && placedBlocks.length < config.maxBlocks; y++) {
            const stalPos = { x: pos.x, y: origin.y + ceilingHeight - y, z: pos.z };
            const stalKey = this.posKey(stalPos);
            if (!this.placedPositions.has(stalKey)) {
              const blockType = y === length - 1
                ? stalactiteTypes[Math.floor(Math.random() * stalactiteTypes.length)]
                : ceilingTypes[Math.floor(Math.random() * ceilingTypes.length)];
              if (!this.blockManager.wouldOverlapAt(blockType, stalPos)) {
                placedBlocks.push({
                  type: blockType,
                  position: stalPos,
                  color: colors[Math.min(1, Math.floor(Math.random() * colors.length))],
                  rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
                  scale: 1
                });
                this.placedPositions.add(stalKey);
              }
            }
          }
        }

        // Crystal clusters on walls
        if (dist > width * 0.7 && Math.random() < 0.3 && placedBlocks.length < config.maxBlocks) {
          const crystalY = origin.y + 1 + Math.floor(Math.random() * (ceilingHeight - 2));
          const crystalPos = { x: pos.x, y: crystalY, z: pos.z };
          const crystalKey = this.posKey(crystalPos);
          if (!this.placedPositions.has(crystalKey)) {
            const blockType = crystalTypes[Math.floor(Math.random() * crystalTypes.length)];
            if (!this.blockManager.wouldOverlapAt(blockType, crystalPos)) {
              placedBlocks.push({
                type: blockType,
                position: crystalPos,
                color: colors[2 % colors.length],
                rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
                scale: 1
              });
              this.placedPositions.add(crystalKey);
            }
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Rock Field - scattered rocks of various sizes across terrain
   */
  generateRockField(origin, preset, config, colors) {
    const placedBlocks = [];
    const size = Math.ceil(Math.sqrt(config.maxBlocks));

    const rockTypes = [
      'rock', 'rockSmall', 'rockLarge', 'rockFlat', 'rockTall',
      'rockJagged', 'rockCluster', 'rockPile', 'pebbles', 'slate', 'boulder'
    ];
    const smallRocks = ['rockSmall', 'pebbles', 'slate'];
    const mediumRocks = ['rock', 'rockFlat', 'rockCluster'];
    const largeRocks = ['rockLarge', 'rockTall', 'rockJagged', 'boulder', 'rockPile'];

    // Noise function for natural-looking distribution
    const noise = (x, z) => {
      return Math.sin(x * 0.4) * Math.cos(z * 0.4) +
             Math.sin(x * 0.8 + 1) * Math.cos(z * 0.6) * 0.5;
    };

    for (let x = -size; x <= size && placedBlocks.length < config.maxBlocks; x++) {
      for (let z = -size; z <= size && placedBlocks.length < config.maxBlocks; z++) {
        const n = noise(x, z);

        // Skip based on noise - creates natural clustering
        if (Math.random() > 0.3 + n * 0.3) continue;

        const pos = { x: origin.x + x, y: origin.y, z: origin.z + z };
        const key = this.posKey(pos);

        if (this.placedPositions.has(key)) continue;

        // Choose rock size based on noise and randomness
        let rockCategory;
        const sizeRoll = Math.random() + n * 0.3;
        if (sizeRoll < 0.4) {
          rockCategory = smallRocks;
        } else if (sizeRoll < 0.8) {
          rockCategory = mediumRocks;
        } else {
          rockCategory = largeRocks;
        }

        const blockType = rockCategory[Math.floor(Math.random() * rockCategory.length)];
        const scale = (largeRocks.includes(blockType) && Math.random() > config.scaleRatio) ? 2 : 1;

        if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
          placedBlocks.push({
            type: blockType,
            position: pos,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
            scale
          });
          this.placedPositions.add(key);

          // Sometimes add moss or pebbles nearby
          if (Math.random() < 0.2 && placedBlocks.length < config.maxBlocks) {
            const offset = [
              { dx: 1, dz: 0 }, { dx: -1, dz: 0 }, { dx: 0, dz: 1 }, { dx: 0, dz: -1 }
            ][Math.floor(Math.random() * 4)];
            const nearPos = { x: pos.x + offset.dx, y: origin.y, z: pos.z + offset.dz };
            const nearKey = this.posKey(nearPos);
            if (!this.placedPositions.has(nearKey)) {
              const nearType = Math.random() < 0.5 ? 'moss' : 'pebbles';
              if (!this.blockManager.wouldOverlapAt(nearType, nearPos)) {
                placedBlocks.push({
                  type: nearType,
                  position: nearPos,
                  color: colors[Math.floor(Math.random() * colors.length)],
                  rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
                  scale: 1
                });
                this.placedPositions.add(nearKey);
              }
            }
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Mushroom Grove - forest of mushrooms with clusters and variation
   */
  generateMushroomGrove(origin, preset, config, colors) {
    const placedBlocks = [];
    const radius = Math.ceil(Math.sqrt(config.maxBlocks));

    const mushroomTypes = ['mushroom', 'mushroomCluster'];
    const groundCover = ['moss', 'grass', 'pebbles'];

    // Place mushrooms in organic clusters
    let attempts = 0;
    const maxAttempts = config.maxBlocks * 3;

    while (placedBlocks.length < config.maxBlocks && attempts < maxAttempts) {
      attempts++;

      // Random position with clustering tendency
      const clusterCenter = {
        x: origin.x + (Math.random() - 0.5) * radius * 2,
        z: origin.z + (Math.random() - 0.5) * radius * 2
      };

      // Add a cluster of mushrooms
      const clusterSize = 1 + Math.floor(Math.random() * 4);
      for (let i = 0; i < clusterSize && placedBlocks.length < config.maxBlocks; i++) {
        const offset = i === 0 ? { x: 0, z: 0 } : {
          x: Math.floor((Math.random() - 0.5) * 4),
          z: Math.floor((Math.random() - 0.5) * 4)
        };

        const pos = {
          x: Math.round(clusterCenter.x + offset.x),
          y: origin.y,
          z: Math.round(clusterCenter.z + offset.z)
        };
        const key = this.posKey(pos);

        if (this.placedPositions.has(key)) continue;

        // Choose mushroom type - bigger ones at cluster center
        const blockType = i === 0 && clusterSize > 2
          ? 'mushroomCluster'
          : mushroomTypes[Math.floor(Math.random() * mushroomTypes.length)];

        const scale = (blockType === 'mushroomCluster' && Math.random() > config.scaleRatio) ? 2 : 1;

        if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
          placedBlocks.push({
            type: blockType,
            position: pos,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
            scale
          });
          this.placedPositions.add(key);

          // Add ground cover around mushrooms
          if (Math.random() < 0.4 && placedBlocks.length < config.maxBlocks) {
            const coverOffset = [
              { dx: 1, dz: 0 }, { dx: -1, dz: 0 }, { dx: 0, dz: 1 }, { dx: 0, dz: -1 }
            ][Math.floor(Math.random() * 4)];
            const coverPos = { x: pos.x + coverOffset.dx, y: origin.y, z: pos.z + coverOffset.dz };
            const coverKey = this.posKey(coverPos);
            if (!this.placedPositions.has(coverKey)) {
              const coverType = groundCover[Math.floor(Math.random() * groundCover.length)];
              if (!this.blockManager.wouldOverlapAt(coverType, coverPos)) {
                placedBlocks.push({
                  type: coverType,
                  position: coverPos,
                  color: colors[Math.floor(Math.random() * colors.length)],
                  rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
                  scale: 1
                });
                this.placedPositions.add(coverKey);
              }
            }
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Crystal Cave - cave filled with crystal formations
   */
  generateCrystalCave(origin, preset, config, colors) {
    const placedBlocks = [];
    const radius = Math.ceil(Math.cbrt(config.maxBlocks) * 1.5);

    const crystalTypes = [
      'crystal', 'crystalSmall', 'crystalLarge', 'crystalCluster',
      'crystalSpike', 'crystalFlat', 'crystalShard', 'crystalFormation', 'gem'
    ];
    const smallCrystals = ['crystalSmall', 'crystalShard', 'gem'];
    const mediumCrystals = ['crystal', 'crystalFlat', 'crystalSpike'];
    const largeCrystals = ['crystalLarge', 'crystalCluster', 'crystalFormation'];

    // Create crystal clusters growing from surfaces
    const surfaces = [
      { dir: 'floor', yBase: 0, yMod: 1 },
      { dir: 'ceiling', yBase: radius, yMod: -1 },
      { dir: 'wall', yBase: Math.floor(radius / 2), yMod: 0 }
    ];

    for (const surface of surfaces) {
      const surfaceBlocks = Math.floor(config.maxBlocks / 3);
      let placed = 0;

      while (placed < surfaceBlocks && placedBlocks.length < config.maxBlocks) {
        const angle = Math.random() * 2 * Math.PI;
        const dist = Math.random() * radius;

        const pos = {
          x: Math.round(origin.x + Math.cos(angle) * dist),
          y: origin.y + surface.yBase + (surface.yMod !== 0 ? Math.floor(Math.random() * 3) * surface.yMod : 0),
          z: Math.round(origin.z + Math.sin(angle) * dist)
        };

        // For walls, position at edge of radius
        if (surface.dir === 'wall') {
          const wallDist = radius * (0.8 + Math.random() * 0.2);
          pos.x = Math.round(origin.x + Math.cos(angle) * wallDist);
          pos.z = Math.round(origin.z + Math.sin(angle) * wallDist);
          pos.y = origin.y + Math.floor(Math.random() * radius);
        }

        const key = this.posKey(pos);
        if (this.placedPositions.has(key)) {
          placed++;
          continue;
        }

        // Choose crystal size - larger near center
        const centerDist = Math.sqrt(
          Math.pow(pos.x - origin.x, 2) + Math.pow(pos.z - origin.z, 2)
        );
        const sizeRoll = Math.random() + (1 - centerDist / radius) * 0.5;

        let crystalCategory;
        if (sizeRoll < 0.4) {
          crystalCategory = smallCrystals;
        } else if (sizeRoll < 0.75) {
          crystalCategory = mediumCrystals;
        } else {
          crystalCategory = largeCrystals;
        }

        const blockType = crystalCategory[Math.floor(Math.random() * crystalCategory.length)];
        const scale = largeCrystals.includes(blockType) && Math.random() > config.scaleRatio ? 2 : 1;

        if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
          // Vary colors for magical effect
          const colorIndex = Math.floor((angle / (2 * Math.PI)) * colors.length);
          placedBlocks.push({
            type: blockType,
            position: pos,
            color: colors[colorIndex % colors.length],
            rotation: { x: 0, y: Math.round(angle * 180 / Math.PI), z: 0 },
            scale
          });
          this.placedPositions.add(key);
        }
        placed++;
      }
    }

    return placedBlocks;
  }

  /**
   * Coral Reef - underwater coral structures with variety
   */
  generateCoralReef(origin, preset, config, colors) {
    const placedBlocks = [];
    const size = Math.ceil(Math.sqrt(config.maxBlocks));

    const coralTypes = ['coral', 'crystalCluster', 'crystalFormation'];
    const plantTypes = ['vine', 'grass', 'moss'];
    const rockTypes = ['rockSmall', 'rockFlat', 'pebbles'];

    // Create reef mounds
    const moundCount = 3 + Math.floor(Math.random() * 3);
    const blocksPerMound = Math.floor(config.maxBlocks / moundCount);

    for (let m = 0; m < moundCount && placedBlocks.length < config.maxBlocks; m++) {
      // Random mound center
      const moundCenter = {
        x: origin.x + (Math.random() - 0.5) * size * 1.5,
        z: origin.z + (Math.random() - 0.5) * size * 1.5
      };
      const moundRadius = 2 + Math.random() * 3;
      const moundHeight = 2 + Math.floor(Math.random() * 3);

      for (let i = 0; i < blocksPerMound && placedBlocks.length < config.maxBlocks; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const dist = Math.random() * moundRadius;
        const heightFactor = 1 - (dist / moundRadius);

        const pos = {
          x: Math.round(moundCenter.x + Math.cos(angle) * dist),
          y: origin.y + Math.floor(Math.random() * moundHeight * heightFactor),
          z: Math.round(moundCenter.z + Math.sin(angle) * dist)
        };

        const key = this.posKey(pos);
        if (this.placedPositions.has(key)) continue;

        // Choose block type based on height
        let blockType;
        if (pos.y === origin.y) {
          // Base - rocks and sand
          blockType = rockTypes[Math.floor(Math.random() * rockTypes.length)];
        } else if (pos.y >= origin.y + moundHeight - 1) {
          // Top - coral
          blockType = coralTypes[Math.floor(Math.random() * coralTypes.length)];
        } else {
          // Middle - mix
          const roll = Math.random();
          if (roll < 0.5) {
            blockType = coralTypes[Math.floor(Math.random() * coralTypes.length)];
          } else if (roll < 0.8) {
            blockType = plantTypes[Math.floor(Math.random() * plantTypes.length)];
          } else {
            blockType = rockTypes[Math.floor(Math.random() * rockTypes.length)];
          }
        }

        if (!this.blockManager.wouldOverlapAt(blockType, pos)) {
          // Vibrant reef colors
          placedBlocks.push({
            type: blockType,
            position: pos,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
            scale: 1
          });
          this.placedPositions.add(key);
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Boulder Pile - large pile of rocks and boulders
   */
  generateBoulderPile(origin, preset, config, colors) {
    const placedBlocks = [];
    const pileRadius = Math.ceil(Math.cbrt(config.maxBlocks) * 1.5);
    const pileHeight = Math.ceil(pileRadius * 0.8);

    const rockTypes = [
      'boulder', 'rockLarge', 'rockPile', 'rock', 'rockJagged',
      'rockCluster', 'rockFlat', 'rockSmall', 'pebbles', 'slate'
    ];

    // Sort by typical size for layering
    const largeRocks = ['boulder', 'rockLarge', 'rockPile'];
    const mediumRocks = ['rock', 'rockJagged', 'rockCluster'];
    const smallRocks = ['rockFlat', 'rockSmall', 'pebbles', 'slate'];

    // Build from bottom up in layers
    for (let y = 0; y < pileHeight && placedBlocks.length < config.maxBlocks; y++) {
      // Radius decreases as we go up (cone shape)
      const layerRadius = pileRadius * (1 - y / pileHeight * 0.7);
      const heightProgress = y / pileHeight;

      // Density decreases toward top
      const density = 0.7 - heightProgress * 0.4;

      for (let x = -Math.ceil(layerRadius); x <= Math.ceil(layerRadius) && placedBlocks.length < config.maxBlocks; x++) {
        for (let z = -Math.ceil(layerRadius); z <= Math.ceil(layerRadius) && placedBlocks.length < config.maxBlocks; z++) {
          const dist = Math.sqrt(x * x + z * z);
          if (dist > layerRadius) continue;

          // Random gaps
          if (Math.random() > density) continue;

          const pos = { x: origin.x + x, y: origin.y + y, z: origin.z + z };
          const key = this.posKey(pos);

          if (this.placedPositions.has(key)) continue;

          // Choose rock size based on height - bigger at bottom
          let rockCategory;
          if (heightProgress < 0.3) {
            rockCategory = Math.random() < 0.6 ? largeRocks : mediumRocks;
          } else if (heightProgress < 0.7) {
            rockCategory = Math.random() < 0.5 ? mediumRocks : smallRocks;
          } else {
            rockCategory = Math.random() < 0.7 ? smallRocks : mediumRocks;
          }

          const blockType = rockCategory[Math.floor(Math.random() * rockCategory.length)];
          const scale = largeRocks.includes(blockType) && y < 2 && Math.random() > config.scaleRatio ? 2 : 1;

          if (!this.blockManager.wouldOverlapAt(blockType, pos, { w: 1, h: 1, d: 1 }, null, scale)) {
            placedBlocks.push({
              type: blockType,
              position: pos,
              color: colors[Math.floor(Math.random() * colors.length)],
              rotation: { x: 0, y: Math.floor(Math.random() * 4) * 90, z: 0 },
              scale
            });
            this.placedPositions.add(key);
          }
        }
      }
    }

    return placedBlocks;
  }

  /**
   * Get list of blocks from preset (handles both cluster and directional presets)
   */
  getBlockList(preset) {
    if (preset.blocks && preset.blocks.length > 0) {
      return preset.blocks;
    }

    // Collect blocks from directional preset
    const blocks = [];
    if (preset.straight) {
      blocks.push(...Object.values(preset.straight));
    }
    if (preset.decorative) {
      blocks.push(...preset.decorative);
    }
    if (preset.junctions) {
      blocks.push(...Object.values(preset.junctions));
    }

    return blocks.length > 0 ? blocks : ['cube'];
  }

  /**
   * Helper to get appropriate block type from preset
   */
  getBlockForPreset(preset, preference = 'any') {
    if (preset.clusterBased && preset.blocks) {
      return preset.blocks[Math.floor(Math.random() * preset.blocks.length)];
    }

    if (preference === 'vertical' && preset.straight?.Y) {
      return preset.straight.Y;
    }
    if (preference === 'straight' && preset.straight) {
      const axes = Object.keys(preset.straight);
      return preset.straight[axes[Math.floor(Math.random() * axes.length)]];
    }

    // Try to get any available block type
    if (preset.straight) {
      const axes = Object.keys(preset.straight);
      return preset.straight[axes[Math.floor(Math.random() * axes.length)]];
    }
    if (preset.decorative && preset.decorative.length > 0) {
      return preset.decorative[Math.floor(Math.random() * preset.decorative.length)];
    }

    return 'cube'; // Fallback
  }

  // ========== Direction Helpers ==========

  getAxisFromDirection(dir) {
    return dir.charAt(0); // 'X+' -> 'X'
  }

  getSignFromDirection(dir) {
    return dir.charAt(1) === '+' ? 1 : -1;
  }

  moveInDirection(pos, direction, scale = 1) {
    const newPos = { ...pos };
    const sign = this.getSignFromDirection(direction);
    const axis = this.getAxisFromDirection(direction).toLowerCase();

    newPos[axis] += sign * scale;
    return newPos;
  }

  getPerpendicularDirection(currentDir, verticalBias = 0) {
    const axis = this.getAxisFromDirection(currentDir);

    let options;
    if (axis === 'X') {
      options = ['Z+', 'Z-'];
      if (verticalBias > 0 && Math.random() < verticalBias) {
        options.push('Y+', 'Y-');
      }
    } else if (axis === 'Z') {
      options = ['X+', 'X-'];
      if (verticalBias > 0 && Math.random() < verticalBias) {
        options.push('Y+', 'Y-');
      }
    } else { // Y
      options = ['X+', 'X-', 'Z+', 'Z-'];
    }

    return options[Math.floor(Math.random() * options.length)];
  }

  /**
   * Pick a scale based on scaleRatio and allowed scales
   * Higher scaleRatio = more 1x blocks, lower = more large blocks
   * @param {Object} preset - The preset with allowedScales
   * @param {number} scaleRatio - Value from 0-1 (higher = smaller blocks)
   * @returns {number} - Scale value (1, 2, or 4)
   */
  pickScale(preset, scaleRatio) {
    const allowed = preset.allowedScales || [1];
    const has2x = allowed.includes(2);
    const has4x = allowed.includes(4);

    if (!has2x && !has4x) return 1;

    const roll = Math.random();

    if (has4x && has2x) {
      // Three tiers: 1x, 2x, 4x
      // scaleRatio determines distribution:
      // - 1.0: 100% 1x
      // - 0.5: 70% 1x, 25% 2x, 5% 4x
      // - 0.0: 30% 1x, 40% 2x, 30% 4x
      const prob1x = 0.3 + scaleRatio * 0.7;
      const prob4x = Math.max(0, (1 - scaleRatio) * 0.3);
      const prob2x = 1 - prob1x - prob4x;

      if (roll < prob1x) return 1;
      if (roll < prob1x + prob2x) return 2;
      return 4;
    } else if (has2x) {
      // Two tiers: 1x, 2x
      return roll > scaleRatio ? 2 : 1;
    } else if (has4x) {
      // Two tiers: 1x, 4x
      return roll > scaleRatio ? 4 : 1;
    }

    return 1;
  }

  getNeighbors(pos) {
    return [
      { x: pos.x + 1, y: pos.y, z: pos.z },
      { x: pos.x - 1, y: pos.y, z: pos.z },
      { x: pos.x, y: pos.y + 1, z: pos.z },
      { x: pos.x, y: pos.y - 1, z: pos.z },
      { x: pos.x, y: pos.y, z: pos.z + 1 },
      { x: pos.x, y: pos.y, z: pos.z - 1 }
    ];
  }

  posKey(pos) {
    return `${Math.floor(pos.x)},${Math.floor(pos.y)},${Math.floor(pos.z)}`;
  }

  // ========== Color Harmony Generation ==========

  /**
   * Generate a harmonious color palette from a base color
   * @param {string} baseHex - Base color in hex format
   * @param {string} harmonyType - Type of harmony (analogous, complementary, triadic, monochrome)
   * @returns {Array} - Array of hex color strings
   */
  generateColorPalette(baseHex, harmonyType) {
    const base = new THREE.Color(baseHex);
    const hsl = { h: 0, s: 0, l: 0 };
    base.getHSL(hsl);

    const colors = [baseHex];

    switch (harmonyType) {
      case 'analogous':
        // Colors adjacent on color wheel (±30°)
        colors.push(
          this.hslToHex(hsl.h + 0.083, hsl.s, hsl.l),           // +30°
          this.hslToHex(hsl.h - 0.083, hsl.s, hsl.l),           // -30°
          this.hslToHex(hsl.h + 0.042, hsl.s, hsl.l * 0.7),     // +15° darker
          this.hslToHex(hsl.h - 0.042, hsl.s * 0.8, Math.min(1, hsl.l * 1.2))  // -15° lighter
        );
        break;

      case 'complementary':
        // Opposite on color wheel (180°)
        colors.push(
          this.hslToHex(hsl.h + 0.5, hsl.s, hsl.l),             // Opposite
          this.hslToHex(hsl.h, hsl.s * 0.6, hsl.l),             // Muted base
          this.hslToHex(hsl.h + 0.5, hsl.s * 0.6, hsl.l)        // Muted opposite
        );
        break;

      case 'triadic':
        // Three colors evenly spaced (120°)
        colors.push(
          this.hslToHex(hsl.h + 0.333, hsl.s, hsl.l),           // +120°
          this.hslToHex(hsl.h + 0.666, hsl.s, hsl.l),           // +240°
          this.hslToHex(hsl.h, hsl.s, hsl.l * 0.7)              // Darker base
        );
        break;

      case 'monochrome':
        // Same hue, varied saturation/lightness
        colors.push(
          this.hslToHex(hsl.h, hsl.s, hsl.l * 0.5),             // Very dark
          this.hslToHex(hsl.h, hsl.s, hsl.l * 0.7),             // Dark
          this.hslToHex(hsl.h, hsl.s * 0.5, Math.min(1, hsl.l * 1.2)), // Lighter, desaturated
          this.hslToHex(hsl.h, hsl.s * 0.3, Math.min(1, hsl.l * 1.4))  // Very light
        );
        break;

      case 'split':
        // Split-complementary (150° and 210°)
        colors.push(
          this.hslToHex(hsl.h + 0.417, hsl.s, hsl.l),           // +150°
          this.hslToHex(hsl.h + 0.583, hsl.s, hsl.l),           // +210°
          this.hslToHex(hsl.h, hsl.s * 0.7, hsl.l * 0.8)        // Muted base
        );
        break;

      default:
        // Random variations
        for (let i = 0; i < 4; i++) {
          colors.push(this.hslToHex(
            hsl.h + (Math.random() - 0.5) * 0.2,
            Math.max(0.2, hsl.s + (Math.random() - 0.5) * 0.3),
            Math.max(0.2, Math.min(0.9, hsl.l + (Math.random() - 0.5) * 0.3))
          ));
        }
    }

    return colors;
  }

  /**
   * Convert HSL values to hex color string
   */
  hslToHex(h, s, l) {
    // Normalize h to 0-1 range
    h = ((h % 1) + 1) % 1;
    s = Math.max(0, Math.min(1, s));
    l = Math.max(0, Math.min(1, l));

    const color = new THREE.Color();
    color.setHSL(h, s, l);
    return '#' + color.getHexString();
  }

  // ========== Configuration Setters ==========

  setPreset(presetName) {
    if (SCATTER_PRESETS[presetName]) {
      this.preset = presetName;
    }
  }

  setMaxBlocks(count) {
    this.maxBlocks = Math.max(1, Math.min(500, count));
  }

  setBranchChance(chance) {
    this.branchChance = Math.max(0, Math.min(1, chance));
  }

  setScaleRatio(ratio) {
    this.scaleRatio = Math.max(0, Math.min(1, ratio));
  }

  setColorHarmony(harmony) {
    this.colorHarmony = harmony;
  }

  setAlgorithm(algorithm) {
    if (SCATTER_ALGORITHMS[algorithm]) {
      this.algorithm = algorithm;
    }
  }
}
