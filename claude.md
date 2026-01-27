# Blocks - 3D Block Modeling Tool

A simple 3D modeling tool based on snapping blocks, designed for creating game assets.

## Project Goals

- Block-based 3D modeling with grid snapping
- Texture painting via tileset/atlas system
- Animation support with keyframe timeline
- Export to GLTF for use in Godot

## Tech Stack

- **3D Engine**: Three.js
- **Build Tool**: Vite
- **Language**: JavaScript (vanilla)
- **Export Format**: GLTF 2.0

## Architecture

```
src/
├── main.js             # App initialization
├── style.css           # Global styles
├── core/
│   ├── Engine.js       # Three.js setup, render loop
│   ├── Grid.js         # Grid system
│   ├── BlockManager.js # Block CRUD operations
│   └── InputManager.js # Mouse/keyboard handling
├── blocks/
│   ├── Block.js        # Block class with primitives
│   └── GhostBlock.js   # Placement preview
├── texturing/
│   ├── TextureManager.js   # Atlas & material management
│   └── FacePainter.js      # Per-face texturing
├── animation/
│   ├── Animation.js    # Animation data structure
│   └── Animator.js     # Playback engine
├── export/
│   └── GLTFExporter.js # GLTF export logic
└── utils/
    ├── History.js      # Undo/redo stack
    └── ProjectManager.js # Save/load projects
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `1` | Place tool |
| `2` | Delete tool |
| `3` | Select tool |
| `4` | Paint tool |
| `5` | Pick color tool |
| `Q` | Cube block |
| `W` | Slab block |
| `E` | Wedge block |
| `R` | Stairs block |
| `T` | Cylinder block |
| `F` | Rotate 90° |
| `K` | Add keyframe |
| `Space` | Play/pause animation |
| `Delete` | Delete selected block |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+C` | Copy block |
| `Ctrl+V` | Paste block |

## Mouse Controls

| Input | Action |
|-------|--------|
| Left-click | Use current tool |
| Right-drag | Orbit camera |
| Scroll | Zoom in/out |

## Development Progress

### Phase 1: Core Grid + Block Placement
- [x] Project setup (Vite + Three.js)
- [x] Basic Three.js scene (camera, lights, renderer)
- [x] Grid system with visual grid plane
- [x] Cube block primitive
- [x] Raycasting for placement detection
- [x] Click to place block
- [x] Click with delete tool to remove block
- [x] Ghost preview for placement
- [x] Basic camera controls (orbit)

### Phase 2: Texturing System
- [x] Texture manager with material system
- [x] Color palette UI
- [x] Per-face material assignment (paint tool)
- [x] Color picker tool
- [x] Material properties (roughness, metallic)

### Phase 3: Advanced Modeling
- [x] Additional primitives (wedge, slab, stairs, cylinder)
- [x] Block selection with properties panel
- [x] Rotation tool (90° increments)
- [x] Copy/paste blocks
- [x] Undo/redo system

### Phase 4: Animation
- [x] Timeline UI with scrubber
- [x] Keyframe creation/deletion
- [x] Property interpolation (position, rotation, color)
- [x] Playback controls (play, pause, stop)
- [x] Loop option
- [x] Multiple animations per project

### Phase 5: Export & Polish
- [x] GLTF export (.glb binary format)
- [x] GLTF export with animations
- [x] Project save/load (.blocks JSON format)
- [x] Full keyboard shortcuts
- [x] UI with toolbar, palette, timeline

## Current Status

**Phase**: All Complete
**Last Updated**: 2026-01-13

### Features Working
- 5 block primitives (cube, slab, wedge, stairs, cylinder)
- Grid-based placement with snap
- Ghost block preview with rotation
- Color palette with 12 colors + custom picker
- Per-face painting
- Block selection with properties display
- Copy/paste with Ctrl+C/V
- Full undo/redo system
- Animation timeline with keyframes
- Position, rotation, and color interpolation
- GLTF export (binary .glb format)
- Project save/load

### Run the App
```bash
npm install
npm run dev
# Open http://localhost:5173/
```

### Export to Godot
1. Create your model
2. Click "Export" button
3. Import the `.glb` file into Godot
4. The model includes materials and animations

## File Format

### Project File (.blocks)
```json
{
  "version": "1.0",
  "name": "Project Name",
  "blocks": [...],
  "animations": {
    "animations": [...],
    "currentAnimationId": "..."
  }
}
```

## Notes

- Target export: Godot 4.x via GLTF
- Keep UI minimal and functional
- Prioritize snapping feel and responsiveness
- All primitives support rotation in 90° increments
