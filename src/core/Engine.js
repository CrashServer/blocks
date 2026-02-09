import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);

    this.setupRenderer();
    this.setupCamera();
    this.setupLights();
    this.setupControls();

    this.clock = new THREE.Clock();
    this.onUpdate = null;
    this.onVJUpdate = null; // VJ mode update hook
    this.customRender = null; // Optional custom render function (for post-processing)

    window.addEventListener('resize', () => this.onResize());
    this.onResize();
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(0, 0, 0);
  }

  setupLights() {
    // Ambient light for base illumination
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambient);

    // Main directional light with shadows
    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(10, 20, 10);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 2048;
    directional.shadow.mapSize.height = 2048;
    directional.shadow.camera.near = 0.5;
    directional.shadow.camera.far = 50;
    directional.shadow.camera.left = -20;
    directional.shadow.camera.right = 20;
    directional.shadow.camera.top = 20;
    directional.shadow.camera.bottom = -20;
    this.scene.add(directional);

    // Hemisphere light for sky/ground color variation
    const hemisphere = new THREE.HemisphereLight(0x87ceeb, 0x362d26, 0.3);
    this.scene.add(hemisphere);
  }

  setupControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.1;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 50;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05; // Prevent going below ground
    this.controls.mouseButtons = {
      LEFT: null, // We'll handle left click for placing
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.ROTATE
    };

    // Enable panning with Shift + Right Click
    this.controls.enablePan = true;

    // Listen for shift key to enable panning temporarily
    let shiftPressed = false;

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Shift') {
        shiftPressed = true;
        this.controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === 'Shift') {
        shiftPressed = false;
        this.controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
      }
    });
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  start() {
    this.animate();
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();

    this.controls.update();

    if (this.onUpdate) {
      this.onUpdate(delta);
    }

    if (this.onVJUpdate) {
      this.onVJUpdate(delta);
    }

    // Use custom render function if set, otherwise default
    if (this.customRender) {
      this.customRender();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
