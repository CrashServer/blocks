import * as THREE from 'three';

/**
 * VJ Post-Processing Shaders
 * Additional effect passes layered on top of the style renderer.
 */

export const ChromaticAberrationShader = {
  uniforms: {
    tDiffuse: { value: null },
    uAmount: { value: 0.0 }
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
    uniform float uAmount;
    varying vec2 vUv;

    void main() {
      vec2 dir = vUv - 0.5;
      float dist = length(dir);
      vec2 offset = dir * uAmount * dist;

      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;

      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `
};

export const GlitchShader = {
  uniforms: {
    tDiffuse: { value: null },
    uGlitch: { value: 0.0 },
    uTime: { value: 0.0 }
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
    uniform float uGlitch;
    uniform float uTime;
    varying vec2 vUv;

    float hash(float n) {
      return fract(sin(n) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;

      if (uGlitch > 0.01) {
        // Horizontal slice displacement
        float sliceY = floor(uv.y * 20.0) / 20.0;
        float sliceRand = hash(sliceY + floor(uTime * 10.0));

        if (sliceRand > 1.0 - uGlitch) {
          uv.x += (hash(sliceY + uTime) - 0.5) * uGlitch * 0.3;
        }

        // Color channel split on glitch
        float shift = uGlitch * 0.01 * hash(uTime);
        float r = texture2D(tDiffuse, uv + vec2(shift, 0.0)).r;
        float g = texture2D(tDiffuse, uv).g;
        float b = texture2D(tDiffuse, uv - vec2(shift, 0.0)).b;
        gl_FragColor = vec4(r, g, b, 1.0);
      } else {
        gl_FragColor = texture2D(tDiffuse, uv);
      }
    }
  `
};

export const HueShiftShader = {
  uniforms: {
    tDiffuse: { value: null },
    uShift: { value: 0.0 }
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
    uniform float uShift;
    varying vec2 vUv;

    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
      vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
      vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);

      if (uShift > 0.001) {
        vec3 hsv = rgb2hsv(color.rgb);
        hsv.x = fract(hsv.x + uShift);
        color.rgb = hsv2rgb(hsv);
      }

      gl_FragColor = color;
    }
  `
};

export const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    uIntensity: { value: 0.0 }
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
    uniform float uIntensity;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float dist = length(vUv - 0.5) * 1.414; // 0 at center, ~1 at corners
      float vignette = 1.0 - dist * dist * uIntensity;
      color.rgb *= max(0.0, vignette);
      gl_FragColor = color;
    }
  `
};

export const FeedbackShader = {
  uniforms: {
    tDiffuse: { value: null },
    tPrevFrame: { value: null },
    uFeedback: { value: 0.0 },
    uZoom: { value: 1.0 },
    uRotation: { value: 0.0 }
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
    uniform sampler2D tPrevFrame;
    uniform float uFeedback;
    uniform float uZoom;
    uniform float uRotation;
    varying vec2 vUv;

    void main() {
      vec4 current = texture2D(tDiffuse, vUv);

      // Apply zoom and rotation to feedback for trippy effects
      vec2 center = vec2(0.5, 0.5);
      vec2 uv = vUv - center;

      // Rotate
      float s = sin(uRotation);
      float c = cos(uRotation);
      mat2 rot = mat2(c, -s, s, c);
      uv = rot * uv;

      // Zoom
      uv *= uZoom;
      uv += center;

      vec4 prev = texture2D(tPrevFrame, uv);

      // Blend current frame with transformed previous for motion trail effect
      gl_FragColor = mix(current, prev, uFeedback);
    }
  `
};

export const KaleidoscopeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uSegments: { value: 6.0 },
    uAngle: { value: 0.0 }
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
    uniform float uSegments;
    uniform float uAngle;
    varying vec2 vUv;

    #define PI 3.14159265359

    void main() {
      vec2 uv = vUv - 0.5;
      float r = length(uv);
      float theta = atan(uv.y, uv.x) + uAngle;

      // Mirror around segments
      float segment = PI * 2.0 / uSegments;
      theta = mod(theta, segment);
      theta = abs(theta - segment * 0.5);

      uv = vec2(cos(theta), sin(theta)) * r + 0.5;

      gl_FragColor = texture2D(tDiffuse, uv);
    }
  `
};

export const MirrorShader = {
  uniforms: {
    tDiffuse: { value: null },
    uMode: { value: 0 } // 0=none, 1=horizontal, 2=vertical, 3=quad
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
    uniform int uMode;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      if (uMode == 1) {
        // Horizontal mirror
        uv.x = abs(uv.x - 0.5) * 2.0;
      } else if (uMode == 2) {
        // Vertical mirror
        uv.y = abs(uv.y - 0.5) * 2.0;
      } else if (uMode == 3) {
        // Quad mirror
        uv = abs(uv - 0.5) * 2.0;
      }

      gl_FragColor = texture2D(tDiffuse, uv);
    }
  `
};

export const PixelateShader = {
  uniforms: {
    tDiffuse: { value: null },
    uPixelSize: { value: 1.0 },
    uResolution: { value: new THREE.Vector2(512, 512) }
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
    uniform float uPixelSize;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec2 pixelSize = vec2(uPixelSize) / uResolution;
      vec2 coord = floor(vUv / pixelSize) * pixelSize;
      gl_FragColor = texture2D(tDiffuse, coord);
    }
  `
};

export const RGBSplitShader = {
  uniforms: {
    tDiffuse: { value: null },
    uAmount: { value: 0.0 },
    uAngle: { value: 0.0 }
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
    uniform float uAmount;
    uniform float uAngle;
    varying vec2 vUv;

    void main() {
      vec2 offset = vec2(cos(uAngle), sin(uAngle)) * uAmount;

      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;

      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `
};

export const InvertShader = {
  uniforms: {
    tDiffuse: { value: null },
    uAmount: { value: 0.0 }
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
    uniform float uAmount;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      vec3 inverted = vec3(1.0) - color.rgb;
      gl_FragColor = vec4(mix(color.rgb, inverted, uAmount), color.a);
    }
  `
};
