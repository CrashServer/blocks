import { validateProjectData } from './validation.js';

export class ProjectManager {
  constructor(blockManager, animator, textureManager, layerManager = null) {
    this.blockManager = blockManager;
    this.animator = animator;
    this.textureManager = textureManager;
    this.layerManager = layerManager;
    this.currentProjectName = 'Untitled';
    this.onError = null; // Error callback
  }

  setLayerManager(layerManager) {
    this.layerManager = layerManager;
  }

  notifyError(message, error = null) {
    console.error(message, error);
    if (this.onError) {
      this.onError(message, error);
    }
  }

  save() {
    try {
      // Prompt user for filename
      const suggestedName = this.currentProjectName || 'Untitled';
      const filename = prompt('Save project as:', suggestedName);

      // User cancelled the prompt
      if (filename === null) {
        return false;
      }

      // Use provided name or fall back to default
      const projectName = filename.trim() || 'Untitled';
      this.currentProjectName = projectName;

      const project = {
        version: '1.0',
        name: projectName,
        createdAt: new Date().toISOString(),
        blocks: this.blockManager.toJSON(),
        animations: this.animator.toJSON(),
        layers: this.layerManager ? this.layerManager.toJSON() : null,
      };

      const json = JSON.stringify(project, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${projectName.replace(/\s+/g, '_')}.blocks`;
      link.click();

      URL.revokeObjectURL(url);
      return true;
    } catch (err) {
      this.notifyError('Failed to save project', err);
      return false;
    }
  }

  async load(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        const error = new Error('No file provided');
        this.notifyError('No file provided for loading', error);
        reject(error);
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const content = e.target.result;
          if (!content || content.trim() === '') {
            throw new Error('File is empty');
          }

          const project = JSON.parse(content);

          if (!project || typeof project !== 'object') {
            throw new Error('Invalid project format');
          }

          // Validate project structure
          const validation = validateProjectData(project);

          if (!validation.valid) {
            throw new Error(`Invalid project: ${validation.errors.join(', ')}`);
          }

          // Log warnings if any
          for (const warning of validation.warnings) {
            console.warn('Project warning:', warning);
          }

          this.currentProjectName = project.name || 'Loaded Project';

          // Load blocks with validation
          if (project.blocks && Array.isArray(project.blocks)) {
            const result = this.blockManager.fromJSON(project.blocks);
            if (result.invalidCount > 0) {
              console.warn(`Loaded ${result.loadedCount} blocks, skipped ${result.invalidCount} invalid blocks`);
            }
          } else {
            console.warn('No blocks found in project file');
          }

          // Load animations
          if (project.animations) {
            this.animator.fromJSON(project.animations);
          }

          // Load layers
          if (project.layers && this.layerManager) {
            this.layerManager.fromJSON(project.layers);
          }

          resolve(project);
        } catch (err) {
          this.notifyError(`Failed to parse project file: ${err.message}`, err);
          reject(err);
        }
      };

      reader.onerror = (e) => {
        const error = new Error('Failed to read file');
        this.notifyError('Failed to read project file', error);
        reject(error);
      };

      reader.readAsText(file);
    });
  }

  newProject() {
    try {
      this.currentProjectName = 'Untitled';
      this.blockManager.clear();
      this.animator.animations.clear();
      this.animator.currentAnimation = null;
      if (this.layerManager) {
        this.layerManager.clear();
      }
      return true;
    } catch (err) {
      this.notifyError('Failed to create new project', err);
      return false;
    }
  }

  setProjectName(name) {
    this.currentProjectName = name;
  }
}
