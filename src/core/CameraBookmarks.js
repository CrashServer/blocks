/**
 * CameraBookmarks - Save and restore camera positions
 */

export class CameraBookmarks {
  constructor(camera, controls) {
    this.camera = camera;
    this.controls = controls;
    this.bookmarks = new Map();
    this.onBookmarksChange = null;
  }

  /**
   * Save current camera state as a bookmark
   */
  saveBookmark(name) {
    const id = `bookmark_${Date.now()}`;
    const bookmark = {
      id,
      name,
      position: {
        x: this.camera.position.x,
        y: this.camera.position.y,
        z: this.camera.position.z
      },
      target: {
        x: this.controls.target.x,
        y: this.controls.target.y,
        z: this.controls.target.z
      },
      zoom: this.camera.zoom
    };

    this.bookmarks.set(id, bookmark);
    this.notifyChange();
    return bookmark;
  }

  /**
   * Restore camera to a bookmarked position
   */
  restoreBookmark(id, animate = true) {
    const bookmark = this.bookmarks.get(id);
    if (!bookmark) return false;

    if (animate) {
      this.animateTo(bookmark.position, bookmark.target, 500);
    } else {
      this.camera.position.set(bookmark.position.x, bookmark.position.y, bookmark.position.z);
      this.controls.target.set(bookmark.target.x, bookmark.target.y, bookmark.target.z);
      this.controls.update();
    }

    return true;
  }

  /**
   * Animate camera to a position smoothly
   */
  animateTo(targetPosition, targetLookAt, duration = 500) {
    const startPosition = {
      x: this.camera.position.x,
      y: this.camera.position.y,
      z: this.camera.position.z
    };
    const startTarget = {
      x: this.controls.target.x,
      y: this.controls.target.y,
      z: this.controls.target.z
    };

    const startTime = performance.now();

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      // Interpolate position
      this.camera.position.x = startPosition.x + (targetPosition.x - startPosition.x) * eased;
      this.camera.position.y = startPosition.y + (targetPosition.y - startPosition.y) * eased;
      this.camera.position.z = startPosition.z + (targetPosition.z - startPosition.z) * eased;

      // Interpolate target
      this.controls.target.x = startTarget.x + (targetLookAt.x - startTarget.x) * eased;
      this.controls.target.y = startTarget.y + (targetLookAt.y - startTarget.y) * eased;
      this.controls.target.z = startTarget.z + (targetLookAt.z - startTarget.z) * eased;

      this.controls.update();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  /**
   * Delete a bookmark
   */
  deleteBookmark(id) {
    if (this.bookmarks.has(id)) {
      this.bookmarks.delete(id);
      this.notifyChange();
      return true;
    }
    return false;
  }

  /**
   * Rename a bookmark
   */
  renameBookmark(id, newName) {
    const bookmark = this.bookmarks.get(id);
    if (bookmark) {
      bookmark.name = newName;
      this.notifyChange();
      return true;
    }
    return false;
  }

  /**
   * Get all bookmarks
   */
  getAllBookmarks() {
    return Array.from(this.bookmarks.values());
  }

  /**
   * Preset views
   */
  goToPreset(preset) {
    const presets = {
      front: { position: { x: 0, y: 5, z: 15 }, target: { x: 0, y: 0, z: 0 } },
      back: { position: { x: 0, y: 5, z: -15 }, target: { x: 0, y: 0, z: 0 } },
      left: { position: { x: -15, y: 5, z: 0 }, target: { x: 0, y: 0, z: 0 } },
      right: { position: { x: 15, y: 5, z: 0 }, target: { x: 0, y: 0, z: 0 } },
      top: { position: { x: 0, y: 20, z: 0.01 }, target: { x: 0, y: 0, z: 0 } },
      iso: { position: { x: 10, y: 10, z: 10 }, target: { x: 0, y: 0, z: 0 } }
    };

    const view = presets[preset];
    if (view) {
      this.animateTo(view.position, view.target);
    }
  }

  notifyChange() {
    if (this.onBookmarksChange) {
      this.onBookmarksChange(this.getAllBookmarks());
    }
  }

  toJSON() {
    return {
      bookmarks: Array.from(this.bookmarks.values())
    };
  }

  fromJSON(data) {
    this.bookmarks.clear();
    if (data && data.bookmarks && Array.isArray(data.bookmarks)) {
      for (const bookmark of data.bookmarks) {
        this.bookmarks.set(bookmark.id, bookmark);
      }
    }
    this.notifyChange();
  }

  clear() {
    this.bookmarks.clear();
    this.notifyChange();
  }
}
