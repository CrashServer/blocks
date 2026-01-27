export class History {
  constructor(maxSize = 50) {
    this.undoStack = [];
    this.redoStack = [];
    this.maxSize = maxSize;
    this.onChange = null;
  }

  push(action) {
    // action = { type, data, undo(), redo() }
    this.undoStack.push(action);
    this.redoStack = []; // Clear redo stack on new action

    // Limit stack size
    if (this.undoStack.length > this.maxSize) {
      this.undoStack.shift();
    }

    this.notify();
  }

  undo() {
    if (this.undoStack.length === 0) return false;

    const action = this.undoStack.pop();
    action.undo();
    this.redoStack.push(action);
    this.notify();
    return true;
  }

  redo() {
    if (this.redoStack.length === 0) return false;

    const action = this.redoStack.pop();
    action.redo();
    this.undoStack.push(action);
    this.notify();
    return true;
  }

  canUndo() {
    return this.undoStack.length > 0;
  }

  canRedo() {
    return this.redoStack.length > 0;
  }

  clear() {
    this.undoStack = [];
    this.redoStack = [];
    this.notify();
  }

  notify() {
    if (this.onChange) {
      this.onChange({
        canUndo: this.canUndo(),
        canRedo: this.canRedo()
      });
    }
  }
}

// Helper to create block add action
export function createAddBlockAction(blockManager, blockData, block) {
  return {
    type: 'addBlock',
    data: blockData,
    undo: () => {
      blockManager.removeBlock(block.id);
    },
    redo: () => {
      blockManager.addBlock(blockData);
    }
  };
}

// Helper to create block remove action
export function createRemoveBlockAction(blockManager, block) {
  const blockData = block.toJSON();
  return {
    type: 'removeBlock',
    data: blockData,
    undo: () => {
      blockManager.addBlock(blockData);
    },
    redo: () => {
      blockManager.removeBlockAtPosition(blockData.position);
    }
  };
}

// Helper to create face paint action
export function createPaintFaceAction(block, faceDirection, oldMaterialId, newMaterialId, facePainter) {
  return {
    type: 'paintFace',
    data: { blockId: block.id, faceDirection, oldMaterialId, newMaterialId },
    undo: () => {
      facePainter.applyMaterialToFace(block, faceDirection, oldMaterialId);
    },
    redo: () => {
      facePainter.applyMaterialToFace(block, faceDirection, newMaterialId);
    }
  };
}

// Helper to create face color paint action
export function createPaintFaceColorAction(block, faceDirection, oldColor, newColor) {
  const blockId = block.id;
  return {
    type: 'paintFaceColor',
    data: { blockId, faceDirection, oldColor, newColor },
    undo: () => {
      if (oldColor === null) {
        // Reset to block's base color
        block.faces[faceDirection].color = null;
        if (Array.isArray(block.mesh.material)) {
          const faceIndex = ['east', 'west', 'top', 'bottom', 'south', 'north'].indexOf(faceDirection);
          if (faceIndex !== -1) {
            block.mesh.material[faceIndex].color.set(block.color);
          }
        }
      } else {
        block.setFaceColor(faceDirection, oldColor);
      }
    },
    redo: () => {
      block.setFaceColor(faceDirection, newColor);
    }
  };
}

// Helper to create block color paint action
export function createPaintBlockColorAction(block, oldColor, newColor, oldFaces) {
  const blockId = block.id;
  return {
    type: 'paintBlockColor',
    data: { blockId, oldColor, newColor },
    undo: () => {
      // Restore old color
      block.setColor(oldColor);
      // Restore old per-face colors if any
      if (oldFaces) {
        Object.entries(oldFaces).forEach(([dir, faceData]) => {
          if (faceData && faceData.color) {
            block.setFaceColor(dir, faceData.color);
          }
        });
      }
    },
    redo: () => {
      block.setColor(newColor);
    }
  };
}

// Helper to create batch paint action (for line painting)
export function createBatchPaintAction(paintActions) {
  return {
    type: 'batchPaint',
    data: { count: paintActions.length },
    undo: () => {
      // Undo in reverse order
      for (let i = paintActions.length - 1; i >= 0; i--) {
        paintActions[i].undo();
      }
    },
    redo: () => {
      paintActions.forEach(action => action.redo());
    }
  };
}

// Helper to create flatten action (for block merging)
export function createFlattenAction(blockManager, sourceBlocksData, mergedMeshIds) {
  return {
    type: 'flatten',
    data: { blockCount: sourceBlocksData.length, mergedCount: mergedMeshIds.length },
    undo: () => {
      // Remove merged meshes
      for (const mergedId of mergedMeshIds) {
        blockManager.removeMergedMesh(mergedId);
      }
      // Restore original blocks
      for (const blockData of sourceBlocksData) {
        blockManager.addBlock(blockData);
      }
    },
    redo: () => {
      // Get current blocks (the ones we just restored)
      const blocks = blockManager.getAllBlocks().filter(b =>
        sourceBlocksData.some(bd =>
          bd.position.x === b.gridPosition.x &&
          bd.position.y === b.gridPosition.y &&
          bd.position.z === b.gridPosition.z
        )
      );
      // Remove them
      for (const block of blocks) {
        blockManager.removeBlock(block.id);
      }
      // Note: We can't easily recreate the exact merged meshes,
      // so redo will need to be handled by the flattener
    }
  };
}
