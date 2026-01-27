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
    thickness: { value: 1.0 }
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
    varying vec2 vUv;

    float luminance(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    void main() {
      vec2 texel = vec2(thickness) / resolution;

      // Sobel kernels
      float tl = luminance(texture2D(tDiffuse, vUv + vec2(-texel.x, texel.y)).rgb);
      float t  = luminance(texture2D(tDiffuse, vUv + vec2(0.0, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, vUv + vec2(texel.x, texel.y)).rgb);
      float l  = luminance(texture2D(tDiffuse, vUv + vec2(-texel.x, 0.0)).rgb);
      float r  = luminance(texture2D(tDiffuse, vUv + vec2(texel.x, 0.0)).rgb);
      float bl = luminance(texture2D(tDiffuse, vUv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luminance(texture2D(tDiffuse, vUv + vec2(0.0, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, vUv + vec2(texel.x, -texel.y)).rgb);

      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;

      float edge = sqrt(gx*gx + gy*gy);
      edge = smoothstep(threshold, threshold + 0.1, edge);

      gl_FragColor = vec4(mix(bgColor, edgeColor, edge), 1.0);
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
    lineWidth: { value: 1.0 }
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
    varying vec2 vUv;

    float luminance(vec3 color) {
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
      float lum = luminance(texColor.rgb);
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
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Halftone Dot Pattern Shader
const HalftoneShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    dotColor: { value: new THREE.Color(0x000000) },
    bgColor: { value: new THREE.Color(0xffffff) },
    dotSize: { value: 4.0 },
    spacing: { value: 8.0 }
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
    varying vec2 vUv;

    float luminance(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float lum = luminance(texColor.rgb);
      float darkness = 1.0 - lum;

      vec2 pixelCoord = vUv * resolution;
      vec2 cell = floor(pixelCoord / spacing);
      vec2 cellCenter = (cell + 0.5) * spacing;
      float dist = length(pixelCoord - cellCenter);

      // Dot radius based on darkness
      float radius = darkness * dotSize;
      float dot = 1.0 - smoothstep(radius - 0.5, radius + 0.5, dist);

      vec3 finalColor = mix(bgColor, dotColor, dot);
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
    colorMode: { value: 0 } // 0 = monochrome, 1 = colored
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
    varying vec2 vUv;

    float luminance(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    void main() {
      // Calculate which character cell we're in
      vec2 pixelCoord = vUv * resolution;
      vec2 cellCoord = floor(pixelCoord / charSize);
      vec2 cellUv = (cellCoord + 0.5) * charSize / resolution;

      // Sample the center of this cell
      vec4 texColor = texture2D(tDiffuse, cellUv);
      float lum = luminance(texColor.rgb);

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
    thickness: { value: 1.0 }
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
    varying vec2 vUv;

    float luminance(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
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
    time: { value: 0 }
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
    varying vec2 vUv;

    float luminance(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
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
    thickness: { value: 1.0 }
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
    varying vec2 vUv;

    float luminance(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 1.5) / resolution;
      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.05, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);
      float lum = luminance(texColor.rgb);

      // High contrast threshold
      float bw = step(threshold, lum);

      // Add edge emphasis (white edges on black)
      bw = max(bw, edge);

      gl_FragColor = vec4(vec3(bw), 1.0);
    }
  `
};

// Watercolor Shader (with inline edge detection)
const WatercolorShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 },
    time: { value: 0 }
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

    float luminance(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.03, 0.12, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec2 wobble = vec2(
        noise(vUv * 50.0) * 0.003,
        noise(vUv * 50.0 + 100.0) * 0.003
      );

      vec4 texColor = texture2D(tDiffuse, vUv + wobble);
      float edge = detectEdge(vUv);

      float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
      vec3 softened = mix(texColor.rgb, vec3(gray), 0.3);
      softened = softened * 0.7 + 0.2;

      float paper = noise(vUv * resolution * 0.5) * 0.05;
      softened += paper;

      vec3 edgeColor = vec3(0.17, 0.29, 0.32);
      vec3 finalColor = mix(softened, edgeColor, edge * 0.6);
      finalColor = mix(finalColor, vec3(0.98, 0.97, 0.96), 0.1);

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
    time: { value: 0 }
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
    varying vec2 vUv;

    float luminance(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
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

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Blueprint Shader (with inline edge detection)
const BlueprintShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 }
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
    varying vec2 vUv;

    float luminance(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
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
    time: { value: 0 }
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
    varying vec2 vUv;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float luminance(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv, vec2 offset) {
      vec2 texel = vec2(thickness) / resolution;
      vec2 uvOff = uv + offset;
      float tl = luminance(texture2D(tDiffuse, uvOff + vec2(-texel.x, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uvOff + vec2(texel.x, texel.y)).rgb);
      float bl = luminance(texture2D(tDiffuse, uvOff + vec2(-texel.x, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uvOff + vec2(texel.x, -texel.y)).rgb);
      float l = luminance(texture2D(tDiffuse, uvOff + vec2(-texel.x, 0.0)).rgb);
      float r = luminance(texture2D(tDiffuse, uvOff + vec2(texel.x, 0.0)).rgb);
      float t = luminance(texture2D(tDiffuse, uvOff + vec2(0.0, texel.y)).rgb);
      float b = luminance(texture2D(tDiffuse, uvOff + vec2(0.0, -texel.y)).rgb);
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
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Ink Shader (with inline edge detection)
const InkShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    thickness: { value: 1.0 }
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
    varying vec2 vUv;

    float luminance(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness * 1.5) / resolution;
      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
      float l = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float t = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float b = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
      return smoothstep(0.04, 0.15, sqrt(gx*gx + gy*gy));
    }

    void main() {
      vec4 texColor = texture2D(tDiffuse, vUv);
      float edge = detectEdge(vUv);
      float lum = luminance(texColor.rgb);

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
    thickness: { value: 1.0 }
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
    varying vec2 vUv;

    float luminance(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      vec2 texel = vec2(thickness) / resolution;
      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);
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

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// Clean Edge Shader (simple outline with inline edge detection)
const CleanEdgeShader = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1920, 1080) },
    bgColor: { value: new THREE.Color(1.0, 1.0, 1.0) },
    lineColor: { value: new THREE.Color(0.0, 0.0, 0.0) },
    threshold: { value: 0.1 },
    thickness: { value: 1.0 }
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
    uniform float threshold;
    uniform float thickness;
    varying vec2 vUv;

    float luminance(vec3 color) {
      // Clamp to handle HDR/linear values
      vec3 c = clamp(color, 0.0, 1.0);
      return dot(c, vec3(0.299, 0.587, 0.114));
    }

    float detectEdge(vec2 uv) {
      // Safety check for resolution
      if (resolution.x < 1.0 || resolution.y < 1.0) {
        return 0.0;
      }

      vec2 texel = vec2(thickness) / resolution;

      float tl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, texel.y)).rgb);
      float t  = luminance(texture2D(tDiffuse, uv + vec2(0.0, texel.y)).rgb);
      float tr = luminance(texture2D(tDiffuse, uv + vec2(texel.x, texel.y)).rgb);
      float l  = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, 0.0)).rgb);
      float r  = luminance(texture2D(tDiffuse, uv + vec2(texel.x, 0.0)).rgb);
      float bl = luminance(texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y)).rgb);
      float b  = luminance(texture2D(tDiffuse, uv + vec2(0.0, -texel.y)).rgb);
      float br = luminance(texture2D(tDiffuse, uv + vec2(texel.x, -texel.y)).rgb);

      float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
      float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;

      float mag = sqrt(gx*gx + gy*gy);
      return smoothstep(threshold, threshold + 0.1, mag);
    }

    void main() {
      // DEBUG: Output red to test if shader is running
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); return;

      // DEBUG: Output the input texture directly
      // gl_FragColor = texture2D(tDiffuse, vUv); return;

      // DEBUG: Output edge detection value as grayscale
      // float edge = detectEdge(vUv);
      // gl_FragColor = vec4(vec3(edge), 1.0); return;

      // Normal operation
      float edge = detectEdge(vUv);
      vec3 finalColor = mix(bgColor, lineColor, edge);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};


// ============================================
// GPU STYLE RENDERER CLASS
// ============================================

export class GPUStyleRenderer {
  constructor(engine, blockManager) {
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
    // Main effect composer - renders to screen
    this.composer = new EffectComposer(this.renderer);

    // First: render the 3D scene
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    // Bloom pass for glow effects (will be added dynamically when needed)
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.width, this.height),
      0.5,  // strength
      0.4,  // radius
      0.85  // threshold
    );

    // Style-specific passes (we'll swap these based on style)
    this.stylePass = null;

    // Output pass for color space conversion
    this.outputPass = new OutputPass();
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
    this.enabled = enabled;
    if (enabled) {
      this.updateStyle();
      // Take over rendering from Engine
      this.engine.customRender = () => this.render();
    } else {
      // Return rendering to Engine
      this.engine.customRender = null;
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
    if (this.sobelPass) {
      this.sobelPass.uniforms.threshold.value = threshold * 0.2;
    }
  }

  setLineWidth(width) {
    this.lineWidth = width;
    if (this.sobelPass) {
      this.sobelPass.uniforms.thickness.value = width;
    }
  }

  setShowFills(show) {
    this.showFills = show;
  }

  setQuality(quality) {
    this.quality = quality;
    // Adjust render target sizes based on quality
    const mult = quality === 'low' ? 0.5 : quality === 'high' ? 1.5 : 1.0;
    // Could resize render targets here for performance
  }

  updateStyle() {
    // Create a fresh composer each time to avoid state issues
    this.composer = new EffectComposer(this.renderer);
    this.composer.setSize(window.innerWidth, window.innerHeight);

    // Add render pass first
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    // Just render pass for now - no post-processing
    // This should show the scene exactly as it would without GPU mode
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
      ascii: { bg: '#000000', fg: '#00ff00', accent: '#00aa00' }
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
    this.composer.setSize(this.width, this.height);

    // Update shader uniforms
    if (this.sobelPass) {
      this.sobelPass.uniforms.resolution.value.set(this.width, this.height);
    }
    this.updateStyleUniforms();
  }

  render(forceRender = false) {
    if (!this.enabled) {
      // If disabled but called, render normally
      this.renderer.render(this.scene, this.camera);
      return;
    }

    // TEST: Bypass composer entirely - just render the scene directly
    // This should look identical to GPU mode OFF
    this.renderer.render(this.scene, this.camera);
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
    this.sceneTarget.dispose();
    this.edgeTarget.dispose();
    if (this.charTexture) this.charTexture.dispose();
  }
}
