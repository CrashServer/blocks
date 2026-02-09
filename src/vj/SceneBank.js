/**
 * SceneBank - Manages multiple .blocks files as switchable VJ scenes
 *
 * Loads a folder of .blocks files, stores parsed data, and switches
 * between them by clearing and reloading blocks into BlockManager.
 */

export class SceneBank {
  constructor() {
    this.scenes = []; // Array of { name, data } (parsed .blocks JSON)
    this.currentIndex = -1;
    this.onSceneChange = null; // callback(index, name, total)
  }

  get count() {
    return this.scenes.length;
  }

  get currentName() {
    if (this.currentIndex >= 0 && this.currentIndex < this.scenes.length) {
      return this.scenes[this.currentIndex].name;
    }
    return null;
  }

  /**
   * Load all .blocks files from a folder input FileList
   */
  async loadFolder(fileList) {
    this.scenes = [];
    this.currentIndex = -1;

    const blockFiles = Array.from(fileList).filter(f => f.name.endsWith('.blocks'));
    blockFiles.sort((a, b) => a.name.localeCompare(b.name));

    for (const file of blockFiles) {
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (data.blocks && Array.isArray(data.blocks)) {
          this.scenes.push({
            name: file.name.replace('.blocks', ''),
            data
          });
        }
      } catch (e) {
        console.warn(`SceneBank: skipped invalid file ${file.name}:`, e.message);
      }
    }

    return this.scenes.length;
  }

  /**
   * Switch to a specific scene by index
   */
  switchTo(index, blockManager, layerManager) {
    if (this.scenes.length === 0) return false;

    // Wrap around
    index = ((index % this.scenes.length) + this.scenes.length) % this.scenes.length;

    const scene = this.scenes[index];
    this.currentIndex = index;

    // Clear existing blocks
    const allBlocks = blockManager.getAllBlocks();
    for (const block of [...allBlocks]) {
      blockManager.removeBlock(block.id);
    }

    // Load new scene blocks
    blockManager.fromJSON(scene.data.blocks);

    // Load layers if present
    if (layerManager && scene.data.layers) {
      layerManager.fromJSON(scene.data.layers);
    }

    if (this.onSceneChange) {
      this.onSceneChange(index, scene.name, this.scenes.length);
    }

    return true;
  }

  next(blockManager, layerManager) {
    return this.switchTo(this.currentIndex + 1, blockManager, layerManager);
  }

  previous(blockManager, layerManager) {
    return this.switchTo(this.currentIndex - 1, blockManager, layerManager);
  }

  /**
   * Switch to a random scene (different from current)
   */
  random(blockManager, layerManager) {
    if (this.scenes.length <= 1) return this.switchTo(0, blockManager, layerManager);
    let idx;
    do {
      idx = Math.floor(Math.random() * this.scenes.length);
    } while (idx === this.currentIndex);
    return this.switchTo(idx, blockManager, layerManager);
  }
}
