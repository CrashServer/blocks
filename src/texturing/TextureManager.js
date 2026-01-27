import * as THREE from 'three';

export class TextureManager {
  constructor() {
    this.atlases = new Map(); // id -> TextureAtlas
    this.materials = new Map(); // id -> Material
    this.loader = new THREE.TextureLoader();

    this.createDefaultMaterials();
  }

  createDefaultMaterials() {
    // Create a set of default color materials
    const defaultColors = [
      { id: 'white', name: 'White', color: '#ffffff' },
      { id: 'gray', name: 'Gray', color: '#888888' },
      { id: 'black', name: 'Black', color: '#222222' },
      { id: 'red', name: 'Red', color: '#e74c3c' },
      { id: 'orange', name: 'Orange', color: '#e67e22' },
      { id: 'yellow', name: 'Yellow', color: '#f1c40f' },
      { id: 'green', name: 'Green', color: '#2ecc71' },
      { id: 'cyan', name: 'Cyan', color: '#1abc9c' },
      { id: 'blue', name: 'Blue', color: '#3498db' },
      { id: 'purple', name: 'Purple', color: '#9b59b6' },
      { id: 'pink', name: 'Pink', color: '#e91e63' },
      { id: 'brown', name: 'Brown', color: '#795548' },
    ];

    defaultColors.forEach(c => {
      this.materials.set(c.id, {
        id: c.id,
        name: c.name,
        baseColor: c.color,
        albedoTile: null,
        roughness: 0.7,
        metallic: 0.0,
        emission: null,
        emissionStrength: 0
      });
    });
  }

  async loadAtlas(id, url, tileSize, columns, rows) {
    return new Promise((resolve, reject) => {
      this.loader.load(
        url,
        (texture) => {
          texture.magFilter = THREE.NearestFilter;
          texture.minFilter = THREE.NearestFilter;
          texture.colorSpace = THREE.SRGBColorSpace;

          const atlas = {
            id,
            texture,
            tileSize,
            columns,
            rows,
            totalTiles: columns * rows
          };

          this.atlases.set(id, atlas);
          this.createAtlasMaterials(atlas);
          resolve(atlas);
        },
        undefined,
        reject
      );
    });
  }

  createAtlasMaterials(atlas) {
    // Create a material for each tile in the atlas
    for (let i = 0; i < atlas.totalTiles; i++) {
      const col = i % atlas.columns;
      const row = Math.floor(i / atlas.columns);

      const materialId = `${atlas.id}_tile_${i}`;
      this.materials.set(materialId, {
        id: materialId,
        name: `Tile ${i}`,
        baseColor: '#ffffff',
        albedoTile: { atlasId: atlas.id, index: i, col, row },
        roughness: 0.8,
        metallic: 0.0,
        emission: null,
        emissionStrength: 0
      });
    }
  }

  getMaterial(id) {
    return this.materials.get(id);
  }

  getAllMaterials() {
    return Array.from(this.materials.values());
  }

  getColorMaterials() {
    return Array.from(this.materials.values()).filter(m => !m.albedoTile);
  }

  getAtlasMaterials(atlasId) {
    return Array.from(this.materials.values()).filter(
      m => m.albedoTile && m.albedoTile.atlasId === atlasId
    );
  }

  createThreeMaterial(materialId) {
    const mat = this.materials.get(materialId);
    if (!mat) return null;

    const options = {
      color: mat.baseColor,
      roughness: mat.roughness,
      metalness: mat.metallic,
    };

    if (mat.albedoTile) {
      const atlas = this.atlases.get(mat.albedoTile.atlasId);
      if (atlas) {
        // Clone texture and set UV offset/repeat for this tile
        const texture = atlas.texture.clone();
        texture.needsUpdate = true;
        texture.repeat.set(1 / atlas.columns, 1 / atlas.rows);
        texture.offset.set(
          mat.albedoTile.col / atlas.columns,
          1 - (mat.albedoTile.row + 1) / atlas.rows
        );
        options.map = texture;
      }
    }

    if (mat.emission) {
      options.emissive = new THREE.Color(mat.emission);
      options.emissiveIntensity = mat.emissionStrength;
    }

    return new THREE.MeshStandardMaterial(options);
  }

  // Create a material with custom UV for a specific face
  createFaceMaterial(materialId, uvRotation = 0, uvFlip = { x: false, y: false }) {
    const threeMat = this.createThreeMaterial(materialId);
    if (!threeMat) return null;

    // UV transforms will be handled at the geometry level
    threeMat.userData = { uvRotation, uvFlip };
    return threeMat;
  }
}
