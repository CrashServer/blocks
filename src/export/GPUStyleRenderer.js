import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/**
 * GPUStyleRenderer - GPU-accelerated stylized rendering
 *
 * Replaces CPU-based Canvas 2D rendering with WebGL shaders for:
 * - Edge detection (Sobel)
 * - Bloom/glow effects
 * - Pattern generation (crosshatch, halftone, ASCII)
 * - Color transformations
 */

// ============================================
// SHADER DEFINITIONS
// ============================================

// Simple Passthrough Shader (for testing)
const PassthroughShader = {
  uniforms: {
    tDiffuse: { value: null }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    void main() {
      gl_FragColor = texture2D(tDiffuse, vUv);
    }
  `
};

// Sobel Edge Detection Shader
const SobelEdgeShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    edgeColor: { value: new THREE.Color(0x000000) },
    bgColor: { value: new THREE.Color(0xffffff) },
    threshold: { value: 0.1 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform vec3 edgeColor;
    uniform vec3 bgColor;
    uniform float threshold;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    void main() {
      vec2 texel = vec2(thickness) / resolution;

      // Sobel kernels
      float tl = luma(texture2D(tDiffuse, vUv + vec2(-texel.x, texel.y)).rgb);
      float t  = luma(texture2D(tDiffuse, vUv + vec2(0.0, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, vUv + vec2(texel.x, texel.y)).rgb);
      float l  = luma(texture2D(tDiffuse, vUv + vec2(-texel.x, 0.0)).rgb);
      float r  = luma(texture2D(tDiffuse, vUv + vec2(texel.x, 0.0)).rgb);
      float bl = luma(texture2D(tDiffuse, vUv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luma(texture2D(tDiffuse, vUv + vec2(0.0, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, vUv + vec2(texel.x, -texel.y)).rgb);

      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;

      float edge = sqrt(gx*gx + gy*gy);
      edge = smoothstep(threshold, threshold + 0.1, edge);

      vec3 finalColor = mix(bgColor, edgeColor, edge);
      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Crosshatch Pattern Shader
const CrosshatchShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    lineColor: { value: new THREE.Color(0x000000) },
    bgColor: { value: new THREE.Color(0xffffff) },
    spacing: { value: 8.0 },
    lineWidth: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform vec3 lineColor;
    uniform vec3 bgColor;
    uniform float spacing;
    uniform float lineWidth;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float hatchLine(vec2 uv, float angle, float sp) {
      float c = cos(angle);
      float s = sin(angle);
      vec2 rotUv = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);
      return step(mod(rotUv.x * resolution.x, sp), lineWidth);
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float lum = luma(texColor.rgb);
      float darkness = 1.0 - lum;

      vec2 pixelCoord = vUv * resolution;
      float hatch = 0.0;

      // Layer 1: diagonal lines (darkness > 0.25)
      if (darkness > 0.25) {
        hatch = max(hatch, hatchLine(pixelCoord, 0.785, spacing));
      }
      // Layer 2: opposite diagonal (darkness > 0.5)
      if (darkness > 0.5) {
        hatch = max(hatch, hatchLine(pixelCoord, -0.785, spacing));
      }
      // Layer 3: horizontal (darkness > 0.75)
      if (darkness > 0.75) {
        hatch = max(hatch, hatchLine(pixelCoord, 0.0, spacing * 1.5));
      }

      vec3 finalColor = mix(bgColor, lineColor, hatch);
      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Halftone Dot Pattern Shader (Comic style with bold edges)
const HalftoneShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    dotColor: { value: new THREE.Color(0x000000) },
    bgColor: { value: new THREE.Color(0xffffff) },
    dotSize: { value: 4.0 },
    spacing: { value: 8.0 },
    thickness: { value: 2.0 },
    showFills: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColor;
    uniform float dotSize;
    uniform float spacing;
    uniform float thickness;
    uniform float showFills;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 2.0) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.04, 0.12, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float lum = luma(texColor.rgb);
      float darkness = 1.0 - lum;

      vec2 pixelCoord = vUv * resolution;
      vec2 cell = floor(pixelCoord / spacing);
      vec2 cellCenter = (cell + 0.5) * spacing;
      float dist = length(pixelCoord - cellCenter);

      // Dot radius based on darkness
      float radius = darkness * dotSize;
      float dt = 1.0 - smoothstep(radius - 0.5, radius + 0.5, dist);

      // When fills are off, skip dots — just show bg + edges
      float dotMask = dt * showFills;
      vec3 finalColor = mix(bgColor, dotColor, dotMask);

      // Grayscale conversion
      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }

      // Bold edge overlay (comic-style thick outlines)
      float edge = detectEdge(vUv);
      finalColor = mix(finalColor, dotColor, edge);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// ASCII Art Shader
const ASCIIShader = {
  uniforms: {
    tDiffuse: { value: null },
    tCharacters: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    charSize: { value: new THREE.Vector2(8, 16) },
    textColor: { value: new THREE.Color(0x00ff00) },
    bgColor: { value: new THREE.Color(0x000000) },
    colorMode: { value: 0 }, // 0 = monochrome, 1 = colored
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform sampler2D tCharacters;
    uniform vec2 resolution;
    uniform vec2 charSize;
    uniform vec3 textColor;
    uniform vec3 bgColor;
    uniform int colorMode;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    void main() {
      // Calculate which character cell we're in
      vec2 pixelCoord = vUv * resolution;
      vec2 cellCoord = floor(pixelCoord / charSize);
      vec2 cellUv = (cellCoord + 0.5) * charSize / resolution;

      // Sample the center of this cell
      vec4 texColor = texture2D(tDiffuse, cellUv);
      float lum = luma(texColor.rgb);

      // Map luminance to character index (0-9 for " .:-=+*#%@")
      int charIndex = int(lum * 9.0);

      // Position within character cell
      vec2 posInCell = mod(pixelCoord, charSize) / charSize;

      // Sample from character atlas
      float charWidth = 1.0 / 10.0; // 10 characters in atlas
      vec2 charUv = vec2(
        float(charIndex) * charWidth + posInCell.x * charWidth,
        posInCell.y
      );

      float charValue = texture2D(tCharacters, charUv).r;

      vec3 color;
      if (colorMode == 1) {
        // Colored mode - use original color boosted
        vec3 boosted = texColor.rgb * 1.3;
        color = mix(bgColor, boosted, charValue);
      } else {
        // Monochrome mode
        color = mix(bgColor, textColor, charValue);
      }

      if (grayscale > 0.5) {
        float g = luma(color);
        color = vec3(g);
      }

      gl_FragColor = vec4(color, 1.0);
    }
  `
};

// Neon Glow Shader (with inline edge detection)
const NeonShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    glowColor: { value: new THREE.Color(0x00ffff) },
    accentColor: { value: new THREE.Color(0xff00ff) },
    bgColor: { value: new THREE.Color(0x0a0a0f) },
    glowIntensity: { value: 2.0 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform vec3 glowColor;
    uniform vec3 accentColor;
    uniform vec3 bgColor;
    uniform float glowIntensity;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);

      // Dark base from original
      vec3 darkBase = texColor.rgb * 0.15;

      // Alternate between glow colors based on position
      float alternate = step(0.5, fract(vUv.x * 20.0 + vUv.y * 20.0));
      vec3 edgeGlow = mix(glowColor, accentColor, alternate * 0.3);

      // Combine
      vec3 finalColor = mix(darkBase + bgColor * 0.5, edgeGlow * glowIntensity, edge);

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Synthwave Shader (with inline edge detection)
const SynthwaveShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 },
    time: { value: 0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float thickness;
    uniform float time;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.15, sqrt(gx*gx + gy*gy));
    }

    vec3 synthwaveColor(vec3 color, vec2 uv) {
      float lum = dot(color, vec3(0.299, 0.587, 0.114));

      // Shift toward purple/cyan palette
      vec3 result;
      if (lum > 0.5) {
        // Bright: pink/cyan
        result.r = min(1.0, color.r * 0.7 + 0.4);
        result.g = color.g * 0.5;
        result.b = min(1.0, color.b * 0.7 + 0.3);
      } else {
        // Dark: deep purple
        result.r = color.r * 0.4 + 0.15;
        result.g = color.g * 0.3;
        result.b = min(1.0, color.b * 0.5 + 0.25);
      }
      return result;
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);

      // Background gradient
      vec3 bgTop = vec3(0.06, 0.06, 0.14);
      vec3 bgBot = vec3(0.09, 0.08, 0.15);
      vec3 bg = mix(bgBot, bgTop, vUv.y);

      // Color shift the original
      vec3 shifted = synthwaveColor(texColor.rgb, vUv);

      // Edge glow with gradient
      vec3 glowStart = vec3(1.0, 0.43, 0.78); // Pink
      vec3 glowEnd = vec3(0.0, 1.0, 0.97);    // Cyan
      vec3 edgeColor = mix(glowStart, glowEnd, vUv.y + sin(vUv.x * 10.0) * 0.2);

      vec3 finalColor = mix(shifted, bg, 0.3);
      finalColor = mix(finalColor, edgeColor * 1.5, edge);

      // Subtle grid on bottom half
      if (vUv.y < 0.5) {
        float gridX = step(0.98, fract(vUv.x * 20.0));
        float gridY = step(0.96, fract((0.5 - vUv.y) * 30.0 * (1.0 + vUv.y)));
        float grid = max(gridX, gridY) * 0.2 * (0.5 - vUv.y) * 2.0;
        finalColor += vec3(0.0, 1.0, 0.97) * grid;
      }

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Noir High Contrast Shader (with inline edge detection)
const NoirShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    threshold: { value: 0.45 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float threshold;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 1.5) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);
      float lum = luma(texColor.rgb);

      // High contrast threshold
      float bw = step(threshold, lum);

      // Add edge emphasis (white edges on black)
      bw = max(bw, edge);

      // Noir is already grayscale, so grayscale uniform has no effect
      gl_FragColor = vec4(vec3(bw), 1.0);
    }
  `
};

// Watercolor Shader (with inline edge detection)
const WatercolorShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    bgColor: { value: new THREE.Color(0xfaf8f5) },
    lineColor: { value: new THREE.Color(0x2c4a52) },
    thickness: { value: 1.0 },
    time: { value: 0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform vec3 bgColor;
    uniform vec3 lineColor;
    uniform float thickness;
    uniform float time;
    uniform float grayscale;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.03, 0.12, sqrt(gx*gx + gy*gy));
    }

    void main() {
      // Wobble/distortion for watercolor effect
      vec2 wobble = vec2(
        noise(vUv * 50.0) * 0.003,
        noise(vUv * 50.0 + 100.0) * 0.003
      );

      vec4 texColor = texture2D(tDiffuse, vUv + wobble);
      float edge = detectEdge(vUv);

      // Soften colors with desaturation
      float gray = luma(texColor.rgb);
      vec3 softened = mix(texColor.rgb, vec3(gray), 0.3);
      softened = softened * 0.7 + 0.25; // Lighten

      // Paper texture
      float paper = noise(vUv * resolution * 0.5) * 0.05;
      softened += paper;

      // Mix with background color
      vec3 withBg = mix(softened, bgColor, 0.15);

      // Apply edge color
      vec3 finalColor = mix(withBg, lineColor, edge * 0.5);

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Sci-Fi Shader (with inline edge detection)
const SciFiShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 },
    time: { value: 0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float thickness;
    uniform float time;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.2, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);

      vec3 techColor = vec3(texColor.r * 0.4, min(1.0, texColor.g * 0.6 + 0.12), min(1.0, texColor.b * 0.7 + 0.2));
      vec3 bg = vec3(0.05, 0.07, 0.09);
      vec3 finalColor = mix(bg, techColor, 0.85);

      float scanline = sin(vUv.y * resolution.y * 2.0) * 0.03 + 0.97;
      finalColor *= scanline;

      vec3 edgeColor = vec3(0.34, 0.65, 1.0);
      finalColor = mix(finalColor, edgeColor * 1.2, edge);

      float gridSize = 40.0;
      float grid = max(step(0.97, fract(vUv.x * resolution.x / gridSize)), step(0.97, fract(vUv.y * resolution.y / gridSize))) * 0.15;
      finalColor += edgeColor * grid;

      vec2 corner = min(vUv, 1.0 - vUv);
      float bracket = step(corner.x, 0.02) * step(corner.y, 0.05) + step(corner.y, 0.02) * step(corner.x, 0.05);
      finalColor += vec3(0.14, 0.53, 0.21) * bracket * 0.5;

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Blueprint Shader (with inline edge detection)
const BlueprintShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      float edge = detectEdge(vUv);

      vec3 bg = vec3(0.12, 0.23, 0.37);
      vec3 lineColor = vec3(0.53, 0.81, 0.92);
      vec3 accentColor = vec3(0.68, 0.85, 0.90);

      vec2 pixelCoord = vUv * resolution;
      float minorGrid = max(step(0.95, fract(pixelCoord.x / 20.0)), step(0.95, fract(pixelCoord.y / 20.0))) * 0.2;
      float majorGrid = max(step(0.98, fract(pixelCoord.x / 100.0)), step(0.98, fract(pixelCoord.y / 100.0))) * 0.4;

      vec3 finalColor = bg + accentColor * minorGrid + accentColor * majorGrid;
      finalColor = mix(finalColor, lineColor * 1.3, edge);

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Sketch Shader (with inline edge detection)
const SketchShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 },
    time: { value: 0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float thickness;
    uniform float time;
    uniform float grayscale;
    varying vec2 vUv;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv, vec2 offset) {
      vec2 texel = vec2(thickness) / resolution;
      vec2 uvOff = uv + offset;
      float tl = luma(texture2D(tDiffuse, uvOff + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uvOff + vec2(texel.x, texel.y)).rgb);
      float bl = luma(texture2D(tDiffuse, uvOff + vec2(-texel.x, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uvOff + vec2(texel.x, -texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uvOff + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uvOff + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uvOff + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uvOff + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.03, 0.12, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec3 paper = vec3(0.96, 0.96, 0.86) - hash(floor(vUv * resolution)) * 0.03;

      float edge = 0.0;
      for (int i = 0; i < 3; i++) {
        vec2 offset = vec2(hash(vUv + float(i) * 0.1) - 0.5, hash(vUv + float(i) * 0.2 + 50.0) - 0.5) * 0.003;
        edge += detectEdge(vUv, offset);
      }
      edge = min(edge / 2.0, 1.0);

      vec3 finalColor = mix(paper, vec3(0.17), edge);
      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Ink Shader (with inline edge detection)
const InkShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 1.5) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.04, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);
      float lum = luma(texColor.rgb);

      // Cream paper
      vec3 paper = vec3(1.0, 0.996, 0.94);
      vec3 ink = vec3(0.1, 0.1, 0.1);

      // Variable line width based on luminance
      float lineThickness = edge * (1.5 - lum * 0.5);

      // Ink wash for darker areas
      float wash = (1.0 - lum) * 0.15;

      vec3 finalColor = paper;
      finalColor = mix(finalColor, paper * 0.85, wash);
      finalColor = mix(finalColor, ink, min(lineThickness, 1.0));

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Saturated Color Shader (with inline edge detection)
const SaturatedShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    saturation: { value: 1.4 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float saturation;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);

      // Boost saturation
      float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
      vec3 saturated = mix(vec3(gray), texColor.rgb, saturation);
      saturated = clamp(saturated, 0.0, 1.0);

      // Thin dark outlines
      vec3 finalColor = mix(saturated, vec3(0.0), edge * 0.8);

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Glitch Shader (digital corruption with RGB split and block displacement)
const GlitchShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    time: { value: 0 },
    amount: { value: 0.05 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float time;
    uniform float amount;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
    float random(vec2 p) { return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }

    void main() {
      vec2 uv = vUv;

      // Block displacement every few seconds
      float block = floor(uv.y * 20.0);
      float glitchRandom = random(vec2(block, floor(time * 3.0)));
      if (glitchRandom > 0.95) {
        uv.x += (random(vec2(block, time)) - 0.5) * amount * 2.0;
      }

      // RGB split
      float splitAmount = amount * (sin(time * 5.0) * 0.5 + 0.5);
      vec2 offset1 = vec2(splitAmount, 0.0);
      vec2 offset2 = vec2(-splitAmount * 0.5, 0.0);

      float r = texture2D(tDiffuse, uv + offset1).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv + offset2).b;

      vec3 color = vec3(r, g, b);

      // Scanlines
      float scanline = sin(uv.y * resolution.y * 1.5) * 0.1 + 0.9;
      color *= scanline;

      // Random noise flicker
      if (random(vec2(uv.y, time)) > 0.98) {
        color = vec3(random(uv + time));
      }

      if (grayscale > 0.5) {
        float g = luma(color);
        color = vec3(g);
      }
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

// Vaporwave Shader (aesthetic pink/cyan gradients)
const VaporwaveShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    time: { value: 0 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float time;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);

      // Gradient background: pink top, purple mid, cyan bottom
      vec3 top = vec3(1.0, 0.4, 0.7);     // Pink
      vec3 mid = vec3(0.5, 0.2, 0.8);     // Purple
      vec3 bottom = vec3(0.2, 0.9, 0.9);  // Cyan

      float t = vUv.y;
      vec3 bg = t > 0.5
        ? mix(mid, top, (t - 0.5) * 2.0)
        : mix(bottom, mid, t * 2.0);

      // Shift colors to vaporwave palette
      float lum = luma(texColor.rgb);
      vec3 colored = mix(bg, texColor.rgb * vec3(1.2, 0.9, 1.3), 0.7);

      // Grid overlay
      float gridSize = 50.0;
      float grid = max(
        step(0.96, fract(vUv.x * resolution.x / gridSize)),
        step(0.96, fract(vUv.y * resolution.y / gridSize))
      ) * 0.3;
      colored += vec3(0.8, 0.5, 1.0) * grid;

      // Edge glow
      float edge = detectEdge(vUv);
      colored = mix(colored, vec3(1.0, 0.5, 0.9), edge * 0.6);

      if (grayscale > 0.5) {
        float g = luma(colored);
        colored = vec3(g);
      }
      gl_FragColor = vec4(colored, 1.0);
    }
  `
};

// Thermal Vision Shader (heat map false colors)
const ThermalShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    time: { value: 0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float time;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    vec3 heatMap(float t) {
      // Black -> Purple -> Red -> Yellow -> White
      vec3 a = vec3(0.0, 0.0, 0.0);      // Cold - Black
      vec3 b = vec3(0.5, 0.0, 0.8);      // Cool - Purple
      vec3 c = vec3(1.0, 0.0, 0.0);      // Warm - Red
      vec3 d = vec3(1.0, 1.0, 0.0);      // Hot - Yellow
      vec3 e = vec3(1.0, 1.0, 1.0);      // Very Hot - White

      if (t < 0.25) return mix(a, b, t * 4.0);
      if (t < 0.5) return mix(b, c, (t - 0.25) * 4.0);
      if (t < 0.75) return mix(c, d, (t - 0.5) * 4.0);
      return mix(d, e, (t - 0.75) * 4.0);
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float heat = luma(texColor.rgb);

      // Add some noise for texture
      float noise = fract(sin(dot(vUv * resolution, vec2(12.9898, 78.233))) * 43758.5453);
      heat += noise * 0.05;

      vec3 thermalColor = heatMap(heat);

      // Scanlines for effect
      float scanline = sin(vUv.y * resolution.y) * 0.05 + 0.95;
      thermalColor *= scanline;

      if (grayscale > 0.5) {
        float g = luma(thermalColor);
        thermalColor = vec3(g);
      }
      gl_FragColor = vec4(thermalColor, 1.0);
    }
  `
};

// CRT Shader (retro TV effect with curvature and phosphor dots)
const CRTShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    time: { value: 0 },
    curvature: { value: 0.15 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float time;
    uniform float curvature;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    vec2 curveUV(vec2 uv) {
      uv = uv * 2.0 - 1.0;
      vec2 offset = abs(uv.yx) / vec2(curvature, curvature);
      uv = uv + uv * offset * offset;
      uv = uv * 0.5 + 0.5;
      return uv;
    }

    void main() {
      vec2 uv = curveUV(vUv);

      // Vignette at edges
      if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
      }

      vec3 color = texture2D(tDiffuse, uv).rgb;

      // RGB phosphor dots
      vec2 pixel = uv * resolution;
      vec3 phosphor = vec3(
        sin(pixel.x * 3.0) * 0.5 + 0.5,
        sin(pixel.x * 3.0 + 2.094) * 0.5 + 0.5,
        sin(pixel.x * 3.0 + 4.188) * 0.5 + 0.5
      ) * 0.1 + 0.9;
      color *= phosphor;

      // Scanlines
      float scanline = sin(pixel.y * 2.0) * 0.15 + 0.85;
      color *= scanline;

      // Flicker
      color *= 0.95 + sin(time * 50.0) * 0.05;

      // Vignette
      vec2 vigUv = vUv * 2.0 - 1.0;
      float vig = 1.0 - dot(vigUv, vigUv) * 0.3;
      color *= vig;

      if (grayscale > 0.5) {
        float g = luma(color);
        color = vec3(g);
      }
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

// Oil Paint Shader (thick brush strokes with posterization)
const OilPaintShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    radius: { value: 4.0 },
    levels: { value: 8.0 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float radius;
    uniform float levels;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    vec3 posterize(vec3 color, float steps) {
      return floor(color * steps) / steps;
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float gx = abs(l - r);
      float gy = abs(tl - tr);
      return smoothstep(0.03, 0.1, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec2 texel = 1.0 / resolution;
      vec3 meanColor = vec3(0.0);

      // Sample surrounding pixels
      for (float x = -radius; x <= radius; x += 1.0) {
        for (float y = -radius; y <= radius; y += 1.0) {
          vec2 offset = vec2(x, y) * texel;
          meanColor += texture2D(tDiffuse, vUv + offset).rgb;
        }
      }

      float samples = (radius * 2.0 + 1.0) * (radius * 2.0 + 1.0);
      meanColor /= samples;

      // Posterize for painted look
      vec3 painted = posterize(meanColor, levels);

      // Dark brush strokes at edges
      float edge = detectEdge(vUv);
      painted = mix(painted, painted * 0.5, edge * 0.6);

      if (grayscale > 0.5) {
        float g = luma(painted);
        painted = vec3(g);
      }
      gl_FragColor = vec4(painted, 1.0);
    }
  `
};

// Mosaic Shader (detailed stained glass effect)
const MosaicShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    blockSize: { value: 8.0 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float blockSize;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
    float random(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 2.0) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float gx = abs(l - r);
      float gy = abs(tl - tr);
      return smoothstep(0.05, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec2 pixel = vUv * resolution;
      vec2 block = floor(pixel / blockSize) * blockSize;

      // Sample multiple points in block for detail
      vec3 color = vec3(0.0);
      for (float dx = 0.0; dx < blockSize; dx += blockSize * 0.25) {
        for (float dy = 0.0; dy < blockSize; dy += blockSize * 0.25) {
          vec2 sampleUv = (block + vec2(dx, dy) + blockSize * 0.5) / resolution;
          color += texture2D(tDiffuse, sampleUv).rgb;
        }
      }
      color /= 16.0;

      // Boost saturation for stained glass look
      float gray = luma(color);
      color = mix(vec3(gray), color, 1.8);
      color = clamp(color * 1.3, 0.0, 1.0);

      // Add slight color variation per block
      vec2 blockId = floor(pixel / blockSize);
      float noise = random(blockId);
      color += (vec3(noise) - 0.5) * 0.1;

      // Thick dark borders between blocks with light edge
      vec2 posInBlock = mod(pixel, blockSize);
      float borderThick = 2.0;
      float border = step(posInBlock.x, borderThick) + step(posInBlock.y, borderThick);
      border += step(blockSize - borderThick, posInBlock.x) + step(blockSize - borderThick, posInBlock.y);
      border = min(border, 1.0);

      // Light edge on one side of border
      float lightEdge = step(posInBlock.x, borderThick + 1.0) * step(borderThick, posInBlock.x);
      lightEdge += step(posInBlock.y, borderThick + 1.0) * step(borderThick, posInBlock.y);
      lightEdge = min(lightEdge, 1.0) * (1.0 - border);

      color = mix(color, color * 0.2, border);
      color = mix(color, color * 1.4, lightEdge);

      // Add edge lines from geometry
      float edge = detectEdge(vUv);
      color = mix(color, vec3(0.0), edge * 0.5);

      if (grayscale > 0.5) {
        float g = luma(color);
        color = vec3(g);
      }
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

// Plasma Shader (psychedelic moving colors)
const PlasmaShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    time: { value: 0 },
    speed: { value: 0.5 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float time;
    uniform float speed;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float depth = luma(texColor.rgb);

      vec2 p = vUv * 8.0;
      float t = time * speed;

      // Plasma waves
      float v = sin(p.x + t);
      v += sin(p.y + t);
      v += sin(p.x + p.y + t);
      v += sin(sqrt(p.x*p.x + p.y*p.y) + t);
      v = v * 0.25 + 0.5;

      // Rainbow colors
      vec3 plasmaColor = vec3(
        sin(v * 3.14159 * 2.0 + 0.0) * 0.5 + 0.5,
        sin(v * 3.14159 * 2.0 + 2.094) * 0.5 + 0.5,
        sin(v * 3.14159 * 2.0 + 4.188) * 0.5 + 0.5
      );

      // Blend with scene depth
      vec3 color = mix(plasmaColor * 0.5, texColor.rgb + plasmaColor * 0.5, depth);

      if (grayscale > 0.5) {
        float g = luma(color);
        color = vec3(g);
      }
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

// Tron Shader (blue circuit board aesthetic)
const TronShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 },
    time: { value: 0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float thickness;
    uniform float time;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 2.0) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.2, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);

      // Dark background
      vec3 bg = vec3(0.0, 0.05, 0.1);

      // Shift colors to blue/cyan
      vec3 tronColor = vec3(
        texColor.r * 0.2,
        texColor.g * 0.5 + 0.2,
        min(1.0, texColor.b * 0.8 + 0.4)
      );

      // Circuit grid
      vec2 pixel = vUv * resolution;
      float gridSize = 30.0;
      float grid = max(
        step(0.94, fract(pixel.x / gridSize)),
        step(0.94, fract(pixel.y / gridSize))
      );

      // Pulsing grid lines
      float pulse = sin(time * 2.0) * 0.3 + 0.7;
      vec3 gridColor = vec3(0.0, 0.7, 1.0) * grid * 0.4 * pulse;

      vec3 finalColor = mix(bg, tronColor, 0.6);
      finalColor += gridColor;

      // Glowing edges
      finalColor = mix(finalColor, vec3(0.0, 1.0, 1.0) * 1.5, edge);

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Posterize Shader (limited color palette)
const PosterizeShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    levels: { value: 6.0 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float levels;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    vec3 posterize(vec3 color, float steps) {
      return floor(color * steps + 0.5) / steps;
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float gx = abs(l - r);
      float gy = abs(tl - tr);
      return smoothstep(0.08, 0.2, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      vec3 color = posterize(texColor.rgb, levels);

      // Thick outlines
      float edge = detectEdge(vUv);
      color = mix(color, vec3(0.0), edge);

      if (grayscale > 0.5) {
        float g = luma(color);
        color = vec3(g);
      }
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

// Hologram Shader (scan lines with chromatic aberration)
const HologramShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    time: { value: 0 },
    glitchAmount: { value: 0.02 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float time;
    uniform float glitchAmount;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
    float random(float n) { return fract(sin(n) * 43758.5453123); }

    void main() {
      vec2 uv = vUv;

      // Horizontal scan line moving down
      float scanPos = mod(time * 0.2, 1.0);
      float scan = abs(uv.y - scanPos);
      float scanline = smoothstep(0.0, 0.02, scan) * smoothstep(0.1, 0.02, scan);

      // Chromatic aberration
      vec2 aberration = vec2(glitchAmount * sin(time * 3.0), 0.0);
      float r = texture2D(tDiffuse, uv + aberration).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv - aberration).b;

      vec3 color = vec3(r, g, b);

      // Hologram tint (cyan/blue)
      color = color * vec3(0.7, 1.0, 1.2);

      // Flicker
      float flicker = 0.9 + random(floor(time * 20.0)) * 0.1;
      color *= flicker;

      // Scan line brightness
      color += scanline * vec3(0.3, 0.6, 0.8);

      // Horizontal lines
      float lines = sin(uv.y * resolution.y * 0.5) * 0.1 + 0.9;
      color *= lines;

      if (grayscale > 0.5) {
        float g = luma(color);
        color = vec3(g);
      }
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

// Cyberpunk Shader (edgy neon glow on black)
const CyberpunkShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 },
    time: { value: 0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float thickness;
    uniform float time;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
    float random(vec2 p) { return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 2.5) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l + tr + 2.0*r;
      float gy = -tl - 2.0*t + tr + 2.0*b;
      return smoothstep(0.05, 0.2, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float depth = luma(texColor.rgb);

      // Extreme contrast boost
      depth = pow(depth, 0.6);
      depth = smoothstep(0.25, 0.85, depth);

      // Thick neon edges
      float edge = detectEdge(vUv);

      // Cyberpunk neon colors: hot pink and cyan
      vec3 magenta = vec3(1.0, 0.0, 1.0);
      vec3 cyan = vec3(0.0, 1.0, 1.0);
      vec3 yellow = vec3(1.0, 1.0, 0.0);

      // Color shift based on position and depth
      float colorShift = sin(vUv.x * 3.14159) * 0.5 + 0.5;
      vec3 neonColor = mix(magenta, cyan, colorShift);

      // Apply depth for dark silhouette
      vec3 finalColor = neonColor * depth * 0.3;

      // Thick glowing edges with color variation
      vec3 edgeColor = mix(magenta, cyan, vUv.y);
      finalColor = mix(finalColor, edgeColor * 2.0, edge);

      // Pure black background
      finalColor = mix(vec3(0.0), finalColor, depth + edge);

      // Glitch blocks
      float block = floor(vUv.y * 50.0);
      if (random(vec2(block, floor(time * 2.0))) > 0.97) {
        float glitchShift = (random(vec2(block, time)) - 0.5) * 0.1;
        vec3 glitchColor = texture2D(tDiffuse, vUv + vec2(glitchShift, 0.0)).rgb;
        finalColor += glitchColor * vec3(1.0, 0.2, 1.0) * 0.5;
      }

      // RGB split on edges
      if (edge > 0.5) {
        float r = texture2D(tDiffuse, vUv + vec2(0.002, 0.0)).r;
        float b = texture2D(tDiffuse, vUv - vec2(0.002, 0.0)).b;
        finalColor += vec3(r * 0.3, 0.0, b * 0.3);
      }

      // Scanlines
      float scanline = sin(vUv.y * resolution.y * 2.0) * 0.1 + 0.9;
      finalColor *= scanline;

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Matrix Shader (high contrast green digital rain)
const MatrixShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    time: { value: 0 },
    thickness: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float time;
    uniform float thickness;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
    float random(vec2 p) { return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 2.0) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float gx = abs(l - r);
      float gy = abs(tl - tr);
      return smoothstep(0.05, 0.2, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float depth = luma(texColor.rgb);

      // High contrast boost
      depth = pow(depth, 0.7);
      depth = smoothstep(0.2, 0.9, depth);

      // Digital rain effect with multiple speeds
      float col = floor(vUv.x * 60.0);
      float rainSpeed = 1.5 + random(vec2(col, 0.0)) * 4.0;
      float rainPos = mod(vUv.y + time * rainSpeed * 0.12, 1.0);
      float rain = smoothstep(0.92, 1.0, rainPos) * smoothstep(0.0, 0.25, rainPos);

      // High contrast greens
      vec3 darkGreen = vec3(0.0, 0.3, 0.0);
      vec3 green = vec3(0.0, 1.0, 0.2);
      vec3 brightGreen = vec3(0.7, 1.0, 0.7);

      // Color based on depth and rain
      vec3 matrixColor = mix(darkGreen, green, depth);
      matrixColor = mix(matrixColor, brightGreen, rain * 0.7);

      // Strong edge glow
      float edge = detectEdge(vUv);
      matrixColor = mix(matrixColor, brightGreen * 1.5, edge);

      // Pure black background for high contrast
      vec3 finalColor = mix(vec3(0.0), matrixColor, depth);

      // Add scanlines
      float scanline = sin(vUv.y * resolution.y * 1.5) * 0.08 + 0.92;
      finalColor *= scanline;

      if (grayscale > 0.5) {
        float g = luma(finalColor);
        finalColor = vec3(g);
      }
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Clean Edge Shader (solid fills with edge outlines)
const CleanEdgeShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    bgColor: { value: new THREE.Color(1.0, 1.0, 1.0) },
    lineColor: { value: new THREE.Color(0.0, 0.0, 0.0) },
    sceneBg: { value: new THREE.Color(0x1a1a2e) },
    threshold: { value: 0.1 },
    thickness: { value: 1.0 },
    showFills: { value: 1.0 },
    grayscale: { value: 0.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform vec3 bgColor;
    uniform vec3 lineColor;
    uniform vec3 sceneBg;
    uniform float threshold;
    uniform float thickness;
    uniform float showFills;
    uniform float grayscale;
    varying vec2 vUv;

    float luma(vec3 color) {
      vec3 c = clamp(color, 0.0, 1.0);
      return dot(c, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      if (resolution.x < 1.0 || resolution.y < 1.0) return 0.0;
      vec2 texel = vec2(thickness) / resolution;
      float tl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luma(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luma(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luma(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luma(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luma(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luma(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luma(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(threshold, threshold + 0.1, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);

      // Detect background vs geometry by comparing to scene clear color
      float dist = length(texColor.rgb - sceneBg);
      float isGeometry = smoothstep(0.02, 0.08, dist);

      // Show block fills where geometry exists, style bgColor otherwise
      vec3 fills = mix(bgColor, texColor.rgb, isGeometry);

      // When fills are off, just show bgColor everywhere (edges-only mode)
      fills = mix(bgColor, fills, showFills);

      // Grayscale conversion
      if (grayscale > 0.5) {
        float g = luma(fills);
        fills = vec3(g);
      }

      // Overlay edge lines
      vec3 finalColor = mix(fills, lineColor, edge);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};


// ============================================
// GPU STYLE RENDERER CLASS
// ============================================

export class GPUStyleRenderer {
  constructor(engine, blockManager) {
    console.log('[GPUStyleRenderer] Constructor called - initializing GPU-accelerated renderer');
    this.engine = engine;
    this.blockManager = blockManager;
    this.renderer = engine.renderer;
    this.scene = engine.scene;
    this.camera = engine.camera;

    // Settings
    this.enabled = false;
    this.style = 'clean';
    this.inverted = false;
    this.grayscale = false;
    this.threshold = 0.5;
    this.lineWidth = 2;
    this.showFills = true;
    this.quality = 'medium';

    // Render targets
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Initialize composers and passes
    this.setupRenderTargets();
    this.setupComposers();
    this.createCharacterTexture();

    // Time for animated effects
    this.time = 0;

    // Debug logging throttle
    this.lastLogTime = 0;

    window.addEventListener('resize', () => this.onResize());
  }

  setupRenderTargets() {
    const params = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat
    };

    // Scene render target (for edge detection input)
    this.sceneTarget = new THREE.WebGLRenderTarget(this.width, this.height, params);

    // Edge detection output target
    this.edgeTarget = new THREE.WebGLRenderTarget(this.width, this.height, params);
  }

  setupComposers() {
    // Initial composer — will be fully rebuilt by updateStyle() when enabled
    this.composer = new EffectComposer(this.renderer);
    this.stylePass = null;
  }

  createCharacterTexture() {
    // Create a canvas with ASCII characters for the ASCII shader
    const canvas = document.createElement('canvas');
    const chars = ' .:-=+*#%@';
    const charWidth = 16;
    const charHeight = 24;
    canvas.width = charWidth * chars.length;
    canvas.height = charHeight;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < chars.length; i++) {
      ctx.fillText(chars[i], i * charWidth + charWidth / 2, charHeight / 2);
    }

    this.charTexture = new THREE.CanvasTexture(canvas);
    this.charTexture.minFilter = THREE.NearestFilter;
    this.charTexture.magFilter = THREE.NearestFilter;
  }

  setEnabled(enabled) {
    console.log(`[GPUStyleRenderer] setEnabled(${enabled}), style: ${this.style}`);
    this.enabled = enabled;
    if (enabled) {
      this.updateStyle();
      // Take over rendering from Engine
      this.engine.customRender = () => this.render();
      console.log('[GPUStyleRenderer] GPU rendering enabled, customRender hook set');
    } else {
      // Return rendering to Engine
      this.engine.customRender = null;
      console.log('[GPUStyleRenderer] GPU rendering disabled, customRender hook cleared');
    }
  }

  setStyle(style) {
    this.style = style;
    if (this.enabled) {
      this.updateStyle();
    }
  }

  setInverted(inverted) {
    this.inverted = inverted;
    this.updateStyleUniforms();
  }

  setGrayscale(grayscale) {
    this.grayscale = grayscale;
    this.updateStyleUniforms();
  }

  setThreshold(threshold) {
    this.threshold = threshold;
    this.updateStyleUniforms();
  }

  setLineWidth(width) {
    this.lineWidth = width;
    this.updateStyleUniforms();
  }

  setShowFills(show) {
    this.showFills = show;
    this.updateStyleUniforms();
  }

  setQuality(quality) {
    this.quality = quality;
    // Adjust render target sizes based on quality
    const mult = quality === 'low' ? 0.5 : quality === 'high' ? 1.5 : 1.0;
    // Could resize render targets here for performance
  }

  updateStyle() {
    console.log(`[GPUStyleRenderer] updateStyle() called for style: ${this.style}`);

    // Dispose old composer to prevent memory leak
    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }

    // Create a completely fresh composer and passes each time
    // Reusing pass instances across composers causes black screen
    // (passes bind internal framebuffer state to the composer they're added to)
    this.composer = new EffectComposer(this.renderer);
    this.composer.setSize(this.width, this.height);

    // Render the 3D scene
    this.renderPass = new RenderPass(this.engine.scene, this.engine.camera);
    this.composer.addPass(this.renderPass);

    // Map style names to shader definitions
    const shaderMap = {
      clean: CleanEdgeShader,
      sketch: SketchShader,
      ink: InkShader,
      crosshatch: CrosshatchShader,
      blueprint: BlueprintShader,
      comic: HalftoneShader,
      saturated: SaturatedShader,
      neon: NeonShader,
      scifi: SciFiShader,
      watercolor: WatercolorShader,
      noir: NoirShader,
      synthwave: SynthwaveShader,
      ascii: ASCIIShader,
      // New funky styles
      glitch: GlitchShader,
      vaporwave: VaporwaveShader,
      thermal: ThermalShader,
      crt: CRTShader,
      oilpaint: OilPaintShader,
      mosaic: MosaicShader,
      tron: TronShader,
      cyberpunk: CyberpunkShader,
      matrix: MatrixShader
    };

    const shader = shaderMap[this.style] || CleanEdgeShader;
    console.log(`[GPUStyleRenderer] Using shader for style: ${this.style}`, shader ? 'found' : 'NOT FOUND');

    // Style-specific shader pass (each style has inline edge detection)
    this.stylePass = new ShaderPass(shader);
    this.composer.addPass(this.stylePass);

    // Bloom for glow styles — create fresh each time
    if (['neon', 'synthwave', 'scifi', 'tron', 'cyberpunk', 'hologram', 'vaporwave', 'plasma'].includes(this.style)) {
      const bloom = new UnrealBloomPass(
        new THREE.Vector2(this.width, this.height),
        0.5, 0.4, 0.85
      );
      this.composer.addPass(bloom);
      console.log(`[GPUStyleRenderer] Added bloom pass for ${this.style}`);
    }

    // Fresh output pass for color space conversion
    const outputPass = new OutputPass();
    outputPass.renderToScreen = true; // CRITICAL: Ensure final pass renders to canvas, not internal buffer
    this.composer.addPass(outputPass);

    // Apply current uniform values
    this.updateStyleUniforms();

    console.log(`[GPUStyleRenderer] Composer setup complete. Passes: RenderPass -> StylePass -> ${['neon', 'synthwave', 'scifi'].includes(this.style) ? 'BloomPass -> ' : ''}OutputPass`);
  }

  updateStyleUniforms() {
    if (!this.stylePass) return;

    const colors = this.getColors();
    const uniforms = this.stylePass.uniforms;

    // Common uniforms
    if (uniforms.resolution) {
      uniforms.resolution.value.set(this.width, this.height);
    }
    if (uniforms.bgColor) {
      uniforms.bgColor.value.set(colors.bg);
    }
    if (uniforms.lineColor) {
      uniforms.lineColor.value.set(colors.fg);
    }
    if (uniforms.threshold) {
      uniforms.threshold.value = this.threshold * 0.3;
    }
    if (uniforms.thickness) {
      uniforms.thickness.value = this.lineWidth;
    }
    if (uniforms.showFills) {
      uniforms.showFills.value = this.showFills ? 1.0 : 0.0;
    }
    if (uniforms.grayscale) {
      uniforms.grayscale.value = this.grayscale ? 1.0 : 0.0;
    }

    // Style-specific uniforms
    switch (this.style) {
      case 'clean':
        // Already handled by common uniforms
        break;
      case 'crosshatch':
        if (uniforms.spacing) uniforms.spacing.value = 10 - this.lineWidth;
        if (uniforms.lineWidth) uniforms.lineWidth.value = this.lineWidth * 0.5;
        break;
      case 'comic':
        uniforms.dotSize.value = this.lineWidth * 2;
        uniforms.spacing.value = this.lineWidth * 4;
        uniforms.dotColor.value.set(colors.fg);
        break;
      case 'ascii':
        uniforms.tCharacters.value = this.charTexture;
        uniforms.charSize.value.set(8, 16);
        uniforms.textColor.value.set(colors.fg);
        uniforms.colorMode.value = this.grayscale ? 0 : 1;
        break;
      case 'neon':
        uniforms.glowColor.value.set(colors.fg);
        uniforms.accentColor.value.set(colors.accent || 0xff00ff);
        break;
      case 'noir':
        uniforms.threshold.value = this.threshold;
        break;
      case 'saturated':
        uniforms.saturation.value = 1.4;
        break;
      // New styles
      case 'glitch':
        if (uniforms.amount) uniforms.amount.value = 0.03 + this.lineWidth * 0.01;
        break;
      case 'crt':
        if (uniforms.curvature) uniforms.curvature.value = 0.15;
        break;
      case 'oilpaint':
        if (uniforms.radius) uniforms.radius.value = this.lineWidth * 1.5;
        if (uniforms.levels) uniforms.levels.value = 8.0;
        break;
      case 'mosaic':
        if (uniforms.blockSize) uniforms.blockSize.value = 6.0 + this.lineWidth;
        break;
    }
  }

  getColors() {
    const styles = {
      clean: { bg: '#ffffff', fg: '#000000', accent: '#000000' },
      sketch: { bg: '#f5f5dc', fg: '#2c2c2c', accent: '#4a4a4a' },
      ink: { bg: '#fffef0', fg: '#1a1a1a', accent: '#000000' },
      crosshatch: { bg: '#ffffff', fg: '#000000', accent: '#444444' },
      blueprint: { bg: '#1e3a5f', fg: '#87ceeb', accent: '#add8e6' },
      comic: { bg: '#ffffff', fg: '#000000', accent: '#ff0000' },
      saturated: { bg: '#ffffff', fg: '#000000', accent: '#333333' },
      neon: { bg: '#0a0a0f', fg: '#00ffff', accent: '#ff00ff' },
      scifi: { bg: '#0d1117', fg: '#58a6ff', accent: '#238636' },
      watercolor: { bg: '#faf8f5', fg: '#2c4a52', accent: '#8b4513' },
      noir: { bg: '#000000', fg: '#ffffff', accent: '#808080' },
      synthwave: { bg: '#1a1a2e', fg: '#ff6ec7', accent: '#00fff7' },
      ascii: { bg: '#000000', fg: '#00ff00', accent: '#00aa00' },
      // New funky styles
      glitch: { bg: '#000000', fg: '#ff00ff', accent: '#00ffff' },
      vaporwave: { bg: '#ff69b4', fg: '#00ffff', accent: '#9370db' },
      thermal: { bg: '#000000', fg: '#ff0000', accent: '#ffff00' },
      crt: { bg: '#0a0a0a', fg: '#33ff33', accent: '#44ff44' },
      oilpaint: { bg: '#f5f5dc', fg: '#2c2c2c', accent: '#8b4513' },
      mosaic: { bg: '#ffffff', fg: '#000000', accent: '#4169e1' },
      tron: { bg: '#000a14', fg: '#00ffff', accent: '#0080ff' },
      cyberpunk: { bg: '#000000', fg: '#ff00ff', accent: '#00ffff' },
      matrix: { bg: '#000000', fg: '#00ff00', accent: '#00aa00' }
    };

    let colors = styles[this.style] || styles.clean;

    if (this.inverted) {
      colors = { ...colors, bg: colors.fg, fg: colors.bg };
    }

    return colors;
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Resize render targets
    this.sceneTarget.setSize(this.width, this.height);
    this.edgeTarget.setSize(this.width, this.height);
    if (this.composer) {
      this.composer.setSize(this.width, this.height);
    }

    // Update shader uniforms
    if (this.sobelPass) {
      this.sobelPass.uniforms.resolution.value.set(this.width, this.height);
    }
    this.updateStyleUniforms();
  }

  render(forceRender = false) {
    if (!this.enabled) {
      this.renderer.render(this.engine.scene, this.engine.camera);
      return;
    }

    // Debug logging (throttled to once per second)
    const now = Date.now();
    if (!this.lastLogTime || now - this.lastLogTime > 1000) {
      console.log(`[GPUStyleRenderer] render() called (style: ${this.style}, composer: ${!!this.composer}, stylePass: ${!!this.stylePass})`);
      this.lastLogTime = now;
    }

    // Update time uniform for animated styles
    this.time += 0.016;
    if (this.stylePass && this.stylePass.uniforms.time) {
      this.stylePass.uniforms.time.value = this.time;
    }

    // CRITICAL: Ensure renderer outputs to canvas (default framebuffer), not internal buffer
    this.renderer.setRenderTarget(null);

    this.composer.render();
  }

  update() {
    if (this.enabled) {
      this.render();
    }
  }

  // Compatibility methods with old TattooRenderer
  invalidateCache() {
    // GPU renderer doesn't need cache invalidation
  }

  capturePNG(filename = 'render.png') {
    // Force a render
    this.render(true);

    // Capture from composer output
    const canvas = this.renderer.domElement;
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  exportSVG(filename = 'render.svg') {
    // SVG export still needs CPU-based edge extraction
    // Fall back to basic edge export
    console.warn('SVG export not fully supported in GPU mode');
  }

  dispose() {
    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }
    this.sceneTarget.dispose();
    this.edgeTarget.dispose();
    if (this.charTexture) this.charTexture.dispose();
  }
}
