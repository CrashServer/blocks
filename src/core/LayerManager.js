/**
 * LayerManager - Manages layers for organizing blocks
 * Layers can be shown/hidden, locked, and have custom colors
 */

export class LayerManager {
  constructor() {
    this.layers = new Map(); // id -> Layer
    this.activeLayerId = 'default';
    this.onLayerChange = null;

    // Create default layer
    this.createLayer('default', 'Default', '#ffffff');
  }

  createLayer(id, name, color = '#ffffff') {
    if (this.layers.has(id)) {
      console.warn(`Layer "${id}" already exists`);
      return this.layers.get(id);
    }

    const layer = {
      id,
      name,
      color,
      visible: true,
      locked: false,
      opacity: 1.0,
      order: this.layers.size
    };

    this.layers.set(id, layer);
    this.notifyChange();
    return layer;
  }

  deleteLayer(id) {
    if (id === 'default') {
      console.warn('Cannot delete default layer');
      return false;
    }

    if (!this.layers.has(id)) {
      return false;
    }

    this.layers.delete(id);

    // If active layer was deleted, switch to default
    if (this.activeLayerId === id) {
      this.activeLayerId = 'default';
    }

    this.notifyChange();
    return true;
  }

  getLayer(id) {
    return this.layers.get(id) || null;
  }

  getAllLayers() {
    return Array.from(this.layers.values()).sort((a, b) => a.order - b.order);
  }

  setActiveLayer(id) {
    if (!this.layers.has(id)) {
      console.warn(`Layer "${id}" does not exist`);
      return false;
    }

    this.activeLayerId = id;
    this.notifyChange();
    return true;
  }

  getActiveLayer() {
    return this.layers.get(this.activeLayerId);
  }

  setLayerVisible(id, visible) {
    const layer = this.layers.get(id);
    if (layer) {
      layer.visible = visible;
      this.notifyChange();
      return true;
    }
    return false;
  }

  setLayerLocked(id, locked) {
    const layer = this.layers.get(id);
    if (layer) {
      layer.locked = locked;
      this.notifyChange();
      return true;
    }
    return false;
  }

  setLayerOpacity(id, opacity) {
    const layer = this.layers.get(id);
    if (layer) {
      layer.opacity = Math.max(0, Math.min(1, opacity));
      this.notifyChange();
      return true;
    }
    return false;
  }

  setLayerName(id, name) {
    const layer = this.layers.get(id);
    if (layer) {
      layer.name = name;
      this.notifyChange();
      return true;
    }
    return false;
  }

  setLayerColor(id, color) {
    const layer = this.layers.get(id);
    if (layer) {
      layer.color = color;
      this.notifyChange();
      return true;
    }
    return false;
  }

  isLayerVisible(id) {
    const layer = this.layers.get(id);
    return layer ? layer.visible : true;
  }

  isLayerLocked(id) {
    const layer = this.layers.get(id);
    return layer ? layer.locked : false;
  }

  canEditLayer(id) {
    const layer = this.layers.get(id);
    return layer ? (layer.visible && !layer.locked) : false;
  }

  moveLayerUp(id) {
    const layers = this.getAllLayers();
    const index = layers.findIndex(l => l.id === id);
    if (index > 0) {
      // Swap orders
      const temp = layers[index].order;
      layers[index].order = layers[index - 1].order;
      layers[index - 1].order = temp;
      this.notifyChange();
      return true;
    }
    return false;
  }

  moveLayerDown(id) {
    const layers = this.getAllLayers();
    const index = layers.findIndex(l => l.id === id);
    if (index < layers.length - 1 && index >= 0) {
      // Swap orders
      const temp = layers[index].order;
      layers[index].order = layers[index + 1].order;
      layers[index + 1].order = temp;
      this.notifyChange();
      return true;
    }
    return false;
  }

  notifyChange() {
    if (this.onLayerChange) {
      this.onLayerChange(this.getAllLayers(), this.activeLayerId);
    }
  }

  generateLayerId() {
    let counter = 1;
    while (this.layers.has(`layer_${counter}`)) {
      counter++;
    }
    return `layer_${counter}`;
  }

  toJSON() {
    return {
      layers: Array.from(this.layers.values()),
      activeLayerId: this.activeLayerId
    };
  }

  fromJSON(data) {
    this.layers.clear();

    if (data.layers && Array.isArray(data.layers)) {
      for (const layer of data.layers) {
        this.layers.set(layer.id, { ...layer });
      }
    }

    // Ensure default layer exists
    if (!this.layers.has('default')) {
      this.createLayer('default', 'Default', '#ffffff');
    }

    this.activeLayerId = data.activeLayerId || 'default';
    if (!this.layers.has(this.activeLayerId)) {
      this.activeLayerId = 'default';
    }

    this.notifyChange();
  }

  clear() {
    this.layers.clear();
    this.createLayer('default', 'Default', '#ffffff');
    this.activeLayerId = 'default';
    this.notifyChange();
  }
}
