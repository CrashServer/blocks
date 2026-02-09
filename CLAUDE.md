# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:5173/
npm run build        # Production build to /dist (IIFE format, works with file:// protocol)
npm run preview      # Preview production build
```

No test framework or linter is configured. There are no test commands.

## Tech Stack

- **Three.js** (v0.170) for 3D rendering
- **Vite** (v6) for build/dev with a custom standalone plugin (IIFE output, file:// compatible)
- **Vanilla JavaScript** (ES modules, no framework)
- **JSZip** for export packaging
- **three-bvh-csg** for boolean CSG operations

## Architecture

Single-page app: `index.html` contains all UI markup. `src/main.js` defines the `App` class that orchestrates everything.

### Core flow

```
App (main.js) — central orchestrator, wires all systems together
├── Engine (core/) — Three.js scene, renderer, camera, lights, render loop
├── BlockManager (core/) — Block CRUD with spatial hash index (key: "x,y,z")
├── InputManager (core/) — Raycasting, mouse/keyboard → tool dispatch
├── Grid (core/) — Visual grid + snap system
├── LayerManager (core/) — Multi-layer organization
├── GhostBlock (blocks/) — Placement preview mesh
├── TextureManager (texturing/) — Color palette + material management
├── FacePainter (texturing/) — Per-face color/material assignment
├── Animator (animation/) — Keyframe interpolation + timeline playback
├── ProjectManager (utils/) — Save/load .blocks JSON projects
├── History (utils/) — Undo/redo with action objects (each has undo/redo methods)
├── TattooRenderer (export/) — CPU-based 2D stylized rendering (12+ art styles)
├── GPUStyleRenderer (export/) — GPU post-processing with custom shaders
├── FrameSequencer (export/) — Video/frame-sequence export
├── GLTFExporter (export/) — GLTF/GLB export with mesh optimization
├── LightBaker / TextureBaker (lighting/) — Light baking to textures
├── GenerativeScatter (tools/) — Procedural block placement with algorithm presets
├── ShapeBrush (tools/) — Generative shape drawing (sphere, cube, cylinder, etc.)
├── SymmetryTool (tools/) — Mirror/symmetry operations
├── BlockFlattener (tools/) — Merge touching blocks
├── CameraBookmarks + CameraPathAnimator (core/) — Saved views + animated transitions
└── VJController (vj/) — Audio-reactive visualization mode
```

### Key patterns

- **Callback wiring**: Components expose `on*` handlers (onPlace, onDelete, onUpdate). App binds them in constructor.
- **Action pattern for undo/redo**: Each history entry is `{ type, data, undo(), redo() }`. See `History.js` for factory functions like `createAddBlockAction`.
- **Tool dispatch**: `currentTool` string (place/delete/paint/select/shape/scatter) routes InputManager events to the right handler.
- **Spatial hash**: BlockManager stores blocks indexed by `"x,y,z"` key for O(1) lookup.
- **Block geometry**: `GEOMETRY_CREATORS` in `Block.js` maps type strings to factory functions returning `THREE.BufferGeometry`. 100+ primitives defined in `BlockTypes.js`.
- **Per-face materials**: Blocks have a `faces` object with 6 directions; each can override color/material. Block creates a material array for multi-face rendering.
- **Lazy/custom render hooks**: `Engine.customRender` and `Engine.onVJUpdate` allow GPUStyleRenderer and VJController to intercept the render loop.
- **Debounced auto-save**: 2-second debounce on block changes triggers `autoSave()`.

### Rendering pipeline

Three rendering modes coexist:
1. **Standard**: Direct Three.js render in Engine's `animate()` loop
2. **Stylized CPU** (TattooRenderer): Renders to offscreen canvas, applies line-art styles (clean, sketch, ink, crosshatch, blueprint, comic, neon, watercolor, etc.)
3. **Stylized GPU** (GPUStyleRenderer): Uses Three.js EffectComposer with custom shader passes for real-time post-processing

### VJ mode (src/vj/)

Audio-reactive visualization system. `VJController` orchestrates `AudioReactor` (mic FFT analysis) → `ParameterBus` (value distribution) → visual systems: `CameraModes` (5 movement styles), `MeshReactor` (vertex distortion), `VJShaders` (chromatic aberration, glitch, etc.).

### Export pipeline (src/export/)

`GLTFExporter` → `MeshOptimizer` (face culling, cube merging, material batching, deduplication, GPU instancing) → Three.js GLTFExporter. Also supports frame sequences as ZIP via `FrameSequencer` + JSZip.

## Build specifics

The Vite config (`vite.config.js`) includes a custom `standalonePlugin` that:
- Removes `type="module"` and `crossorigin` from script tags
- Moves scripts to end of body
- Outputs IIFE format (not ES modules) so `dist/` works when opened via `file://` protocol

Output: single `dist/assets/app.js` bundle. Assets under 100KB are inlined.

## Project file format

`.blocks` files are JSON:
```json
{
  "version": "1.0",
  "name": "...",
  "blocks": [...],
  "animations": { "animations": [...], "currentAnimationId": "..." },
  "textureManager": {...},
  "layers": {...}
}
```

## Important conventions

- All UI is in `index.html` (no component framework) — panel IDs match what `setupUI()` in main.js binds to.
- Block types use string identifiers (e.g., "cube", "slab", "wedge") throughout the codebase.
- Grid positions are integer Vector3 coordinates; blocks snap to grid.
- Rotations are in 90-degree increments.
- Target export format is GLTF 2.0 for Godot 4.x.
