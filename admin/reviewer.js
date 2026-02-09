import * as THREE from 'three';
import { BLOCK_CATEGORIES } from '../src/blocks/config/categories.js';
import { BLOCK_DISPLAY } from '../src/blocks/config/display.js';
import { GEOMETRY_CREATORS, BLOCK_HEIGHT_MULTIPLIERS, BLOCK_Y_OFFSETS } from '../src/blocks/BlockTypes.js';

// State
const blockStates = new Map(); // type -> 'keep' | 'delete' | 'undecided'
const brokenBlocks = new Set();
const blockPreviews = new Map(); // type -> { scene, camera, renderer, mesh }

let currentFilter = 'all';
let currentCategory = 'all';
let selectedBlock = null;

// Initialize
async function init() {
  // Load saved state from localStorage
  loadState();

  // Populate category filter
  const categorySelect = document.getElementById('filter-category');
  for (const [id, category] of Object.entries(BLOCK_CATEGORIES)) {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = `${category.label} (${category.types.length})`;
    categorySelect.appendChild(option);
  }

  // Render all blocks
  renderBlocks();
  updateStats();

  // Setup event listeners
  setupEventListeners();
}

function loadState() {
  try {
    const saved = localStorage.getItem('blockReviewState');
    if (saved) {
      const data = JSON.parse(saved);
      for (const [type, state] of Object.entries(data.states || {})) {
        blockStates.set(type, state);
      }
      for (const type of data.broken || []) {
        brokenBlocks.add(type);
      }
    }
  } catch (e) {
    console.warn('Failed to load saved state:', e);
  }
}

function saveState() {
  const data = {
    states: Object.fromEntries(blockStates),
    broken: Array.from(brokenBlocks)
  };
  localStorage.setItem('blockReviewState', JSON.stringify(data));
}

function getBlockState(type) {
  return blockStates.get(type) || 'undecided';
}

function setBlockState(type, state) {
  blockStates.set(type, state);
  saveState();
  updateStats();
  updateBlockCard(type);
}

function toggleBlockState(type) {
  const current = getBlockState(type);
  let next;
  if (current === 'undecided') next = 'keep';
  else if (current === 'keep') next = 'delete';
  else next = 'undecided';
  setBlockState(type, next);
}

function updateStats() {
  let total = 0, keep = 0, del = 0, broken = 0;

  for (const category of Object.values(BLOCK_CATEGORIES)) {
    for (const type of category.types) {
      total++;
      const state = getBlockState(type);
      if (state === 'keep') keep++;
      else if (state === 'delete') del++;
      if (brokenBlocks.has(type)) broken++;
    }
  }

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-keep').textContent = keep;
  document.getElementById('stat-delete').textContent = del;
  document.getElementById('stat-broken').textContent = broken;
}

function createBlockPreview(type, container) {
  const width = container.clientWidth || 140;
  const height = 100;

  // Create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a15);

  // Create camera
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(1.5, 1.2, 1.5);
  camera.lookAt(0, 0, 0);

  // Create renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Add lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);

  const directional = new THREE.DirectionalLight(0xffffff, 0.8);
  directional.position.set(5, 10, 5);
  scene.add(directional);

  // Try to create block geometry
  let mesh = null;
  let error = null;

  try {
    const createGeometry = GEOMETRY_CREATORS[type];
    if (!createGeometry) {
      throw new Error('No geometry creator');
    }

    const geometry = createGeometry({ w: 1, h: 1, d: 1 });
    if (!geometry || !geometry.attributes || !geometry.attributes.position) {
      throw new Error('Invalid geometry');
    }

    if (geometry.attributes.position.count === 0) {
      throw new Error('Empty geometry');
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0x5588cc,
      roughness: 0.7,
      metalness: 0.1
    });

    mesh = new THREE.Mesh(geometry, material);

    // Center the mesh
    geometry.computeBoundingBox();
    const box = geometry.boundingBox;
    const center = new THREE.Vector3();
    box.getCenter(center);
    mesh.position.sub(center);

    // Scale to fit
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 1.5) {
      const scale = 1.2 / maxDim;
      mesh.scale.setScalar(scale);
    }

    scene.add(mesh);
  } catch (e) {
    error = e.message;
    brokenBlocks.add(type);
  }

  // Initial render
  renderer.render(scene, camera);

  // Store for animation
  blockPreviews.set(type, { scene, camera, renderer, mesh, error });

  // Show error if any
  if (error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = `Error: ${error}`;
    container.appendChild(errorDiv);
  }

  return { error };
}

function renderBlocks() {
  const main = document.getElementById('main');
  main.innerHTML = '';

  for (const [categoryId, category] of Object.entries(BLOCK_CATEGORIES)) {
    // Filter by category
    if (currentCategory !== 'all' && currentCategory !== categoryId) continue;

    // Get visible blocks in this category
    const visibleBlocks = category.types.filter(type => {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'broken') return brokenBlocks.has(type);
      return getBlockState(type) === currentFilter;
    });

    if (visibleBlocks.length === 0) continue;

    // Create category section
    const section = document.createElement('div');
    section.className = 'category-section';
    section.dataset.category = categoryId;

    // Category header
    const header = document.createElement('div');
    header.className = 'category-header';

    const keepCount = category.types.filter(t => getBlockState(t) === 'keep').length;
    const deleteCount = category.types.filter(t => getBlockState(t) === 'delete').length;

    header.innerHTML = `
      <h2>${category.label}</h2>
      <span class="category-stats">${keepCount} keep / ${deleteCount} delete / ${category.types.length} total</span>
      <div class="category-actions">
        <button class="secondary btn-keep-all" data-category="${categoryId}">Keep All</button>
        <button class="secondary btn-delete-all" data-category="${categoryId}">Delete All</button>
      </div>
    `;
    section.appendChild(header);

    // Blocks grid
    const grid = document.createElement('div');
    grid.className = 'blocks-grid';

    for (const type of visibleBlocks) {
      const card = createBlockCard(type);
      grid.appendChild(card);
    }

    section.appendChild(grid);
    main.appendChild(section);
  }

  // Setup category action buttons
  document.querySelectorAll('.btn-keep-all').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const categoryId = btn.dataset.category;
      const category = BLOCK_CATEGORIES[categoryId];
      for (const type of category.types) {
        setBlockState(type, 'keep');
      }
    });
  });

  document.querySelectorAll('.btn-delete-all').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const categoryId = btn.dataset.category;
      const category = BLOCK_CATEGORIES[categoryId];
      for (const type of category.types) {
        setBlockState(type, 'delete');
      }
    });
  });

  // Create previews after cards are in DOM
  requestAnimationFrame(() => {
    for (const [type, preview] of blockPreviews) {
      if (!preview) continue;
    }

    // Create previews for visible blocks
    document.querySelectorAll('.block-card').forEach(card => {
      const type = card.dataset.type;
      const container = card.querySelector('.block-preview');
      if (container && !blockPreviews.has(type)) {
        createBlockPreview(type, container);
      }
    });

    // Start animation loop
    animatePreviews();
  });
}

function createBlockCard(type) {
  const display = BLOCK_DISPLAY[type] || { icon: '?', label: type };
  const state = getBlockState(type);
  const isBroken = brokenBlocks.has(type);

  const card = document.createElement('div');
  card.className = `block-card ${state}${isBroken ? ' broken' : ''}`;
  card.dataset.type = type;

  card.innerHTML = `
    <div class="block-preview"></div>
    <div class="block-info">
      <div class="block-name">${display.label}</div>
      <div class="block-type">${type}</div>
      <div class="block-status">
        ${state === 'keep' ? '<span class="keep-badge">KEEP</span>' : ''}
        ${state === 'delete' ? '<span class="delete-badge">DELETE</span>' : ''}
        ${isBroken ? '<span class="broken-badge">BROKEN</span>' : ''}
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    toggleBlockState(type);
  });

  return card;
}

function updateBlockCard(type) {
  const card = document.querySelector(`.block-card[data-type="${type}"]`);
  if (!card) return;

  const state = getBlockState(type);
  const isBroken = brokenBlocks.has(type);

  card.className = `block-card ${state}${isBroken ? ' broken' : ''}`;

  const statusDiv = card.querySelector('.block-status');
  statusDiv.innerHTML = `
    ${state === 'keep' ? '<span class="keep-badge">KEEP</span>' : ''}
    ${state === 'delete' ? '<span class="delete-badge">DELETE</span>' : ''}
    ${isBroken ? '<span class="broken-badge">BROKEN</span>' : ''}
  `;
}

let animationId = null;
function animatePreviews() {
  if (animationId) return;

  function animate() {
    animationId = requestAnimationFrame(animate);

    for (const [type, preview] of blockPreviews) {
      if (!preview || !preview.mesh) continue;

      // Rotate mesh slowly
      preview.mesh.rotation.y += 0.01;

      // Render
      preview.renderer.render(preview.scene, preview.camera);
    }
  }

  animate();
}

function detectBrokenBlocks() {
  brokenBlocks.clear();

  for (const category of Object.values(BLOCK_CATEGORIES)) {
    for (const type of category.types) {
      try {
        const createGeometry = GEOMETRY_CREATORS[type];
        if (!createGeometry) {
          brokenBlocks.add(type);
          continue;
        }

        const geometry = createGeometry({ w: 1, h: 1, d: 1 });
        if (!geometry || !geometry.attributes || !geometry.attributes.position) {
          brokenBlocks.add(type);
          continue;
        }

        if (geometry.attributes.position.count === 0) {
          brokenBlocks.add(type);
          continue;
        }

        // Check for NaN values
        const positions = geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i++) {
          if (isNaN(positions[i])) {
            brokenBlocks.add(type);
            break;
          }
        }

        geometry.dispose();
      } catch (e) {
        brokenBlocks.add(type);
      }
    }
  }

  // Auto-mark broken blocks for deletion
  for (const type of brokenBlocks) {
    if (getBlockState(type) === 'undecided') {
      setBlockState(type, 'delete');
    }
  }

  saveState();
  renderBlocks();
  updateStats();

  alert(`Found ${brokenBlocks.size} broken blocks. They have been marked for deletion.`);
}

function generateCleanedConfig() {
  const keptCategories = {};

  for (const [categoryId, category] of Object.entries(BLOCK_CATEGORIES)) {
    const keptTypes = category.types.filter(type => getBlockState(type) !== 'delete');

    if (keptTypes.length > 0) {
      keptCategories[categoryId] = {
        label: category.label,
        types: keptTypes
      };
    }
  }

  // Generate the file content
  let content = `// Block categories for UI organization
// Generated by Block Admin Tool
// Date: ${new Date().toISOString()}

export const BLOCK_CATEGORIES = {
`;

  for (const [categoryId, category] of Object.entries(keptCategories)) {
    content += `  ${categoryId}: {\n`;
    content += `    label: '${category.label}',\n`;
    content += `    types: [${category.types.map(t => `'${t}'`).join(', ')}]\n`;
    content += `  },\n`;
  }

  content += `};

// Helper to get all block types as flat array
export function getAllBlockTypes() {
  const types = [];
  for (const category of Object.values(BLOCK_CATEGORIES)) {
    types.push(...category.types);
  }
  return types;
}
`;

  return content;
}

function showExportModal() {
  const modal = document.getElementById('export-modal');
  const preview = document.getElementById('export-preview');
  const summary = document.getElementById('export-summary');

  // Count stats
  let totalKept = 0;
  let totalDeleted = 0;

  for (const category of Object.values(BLOCK_CATEGORIES)) {
    for (const type of category.types) {
      if (getBlockState(type) === 'delete') totalDeleted++;
      else totalKept++;
    }
  }

  summary.innerHTML = `
    <p style="margin: 15px 0; color: #95d5b2;">
      Keeping <strong>${totalKept}</strong> blocks, removing <strong>${totalDeleted}</strong> blocks.
    </p>
  `;

  preview.textContent = generateCleanedConfig();
  modal.classList.add('visible');
}

function downloadConfig() {
  const content = generateCleanedConfig();
  const blob = new Blob([content], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'categories.js';
  a.click();

  URL.revokeObjectURL(url);
}

function setupEventListeners() {
  // Category filter
  document.getElementById('filter-category').addEventListener('change', (e) => {
    currentCategory = e.target.value;
    // Clear previews for memory
    for (const [type, preview] of blockPreviews) {
      if (preview && preview.renderer) {
        preview.renderer.dispose();
      }
    }
    blockPreviews.clear();
    renderBlocks();
  });

  // Status filter buttons
  document.querySelectorAll('.filter-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-buttons button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      // Clear previews for memory
      for (const [type, preview] of blockPreviews) {
        if (preview && preview.renderer) {
          preview.renderer.dispose();
        }
      }
      blockPreviews.clear();
      renderBlocks();
    });
  });

  // Detect broken button
  document.getElementById('btn-detect-broken').addEventListener('click', detectBrokenBlocks);

  // Reset button
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Reset all block states to undecided?')) {
      blockStates.clear();
      brokenBlocks.clear();
      saveState();
      renderBlocks();
      updateStats();
    }
  });

  // Export button
  document.getElementById('btn-export').addEventListener('click', showExportModal);

  // Modal buttons
  document.getElementById('btn-download').addEventListener('click', downloadConfig);
  document.getElementById('btn-close-modal').addEventListener('click', () => {
    document.getElementById('export-modal').classList.remove('visible');
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (e.key === 'k' || e.key === 'K') {
      // Keep all visible
      document.querySelectorAll('.block-card').forEach(card => {
        setBlockState(card.dataset.type, 'keep');
      });
    } else if (e.key === 'd' || e.key === 'D') {
      // Delete all visible
      document.querySelectorAll('.block-card').forEach(card => {
        setBlockState(card.dataset.type, 'delete');
      });
    }
  });
}

// Start
init();
