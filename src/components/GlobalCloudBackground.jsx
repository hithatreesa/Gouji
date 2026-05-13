import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';
import { useAtmosphere } from '../context/ThemeContext';

const RaymarchCloudShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uScroll: { value: 0 },
    uPhase: { value: 0 }, // 0: day, 1: dawn, 2: dusk, 3: night
    uResolution: { value: new THREE.Vector2(0, 0) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uScroll;
    uniform float uPhase;
    uniform vec2 uResolution;
    varying vec2 vUv;

    // --- Noise & Math ---
    float hash(vec3 p) {
      p = fract(p * vec3(123.34, 456.21, 789.18));
      p += dot(p, p.yzx + 45.32);
      return fract((p.x + p.y) * p.z);
    }

    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                     mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                 mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                     mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
    }

    float fbm(vec3 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 3; i++) {
        v += a * noise(p);
        p *= 2.1;
        a *= 0.5;
      }
      return v;
    }

    // --- Raymarching Engine ---
    float cloudDensity(vec3 p, bool fast) {
      // Mouse Parting
      vec3 mouseWorld = vec3(uMouse * 10.0, 0.0);
      float dMouse = length(p.xy - mouseWorld.xy);
      float clearing = smoothstep(0.0, 5.0, dMouse);

      float n;
      if (fast) {
          // Faster density check for shadows
          n = noise(p * 0.4 + vec3(uTime * 0.1, 0.0, uScroll * 2.0));
      } else {
          n = fbm(p * 0.4 + vec3(uTime * 0.1, 0.0, uScroll * 2.0));
      }
      
      float d = smoothstep(0.4, 0.9, n * clearing);
      
      // Ground/Sky limits
      d *= smoothstep(-5.0, -2.0, p.y) * smoothstep(5.0, 2.0, p.y);
      return d;
    }

    vec4 raymarch(vec3 ro, vec3 rd, vec3 sunDir, vec3 skyColor, vec3 cloudColor) {
      float sum = 0.0;
      vec3 col = vec3(0.0);
      float t = 0.0;
      
      for(int i=0; i<18; i++) {
        vec3 p = ro + t * rd;
        float d = cloudDensity(p, false);
        
        if (d > 0.01) {
          // Beer's Law for internal shadows (simplified)
          float ld = cloudDensity(p + sunDir * 0.4, true);
          float shadow = exp(-ld * 1.5);
          
          vec3 light = cloudColor * shadow * 1.5;
          // Forward scattering
          float cosTheta = dot(rd, sunDir);
          light += pow(max(0.0, cosTheta), 8.0) * 0.4;
          
          float alpha = (1.0 - sum) * d;
          col += light * alpha;
          sum += alpha;
          
          if (sum > 0.99) break;
        }
        t += max(0.15, t * 0.08);
      }
      
      return vec4(col, sum);
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / uResolution.y;
      
      vec3 ro = vec3(0.0, 0.0, 10.0);
      vec3 rd = normalize(vec3(uv, -1.5));
      
      // Environment Config
      vec3 skyTop, skyBot, cloudCol, sunDir;
      sunDir = normalize(vec3(-1.0, 0.8, -0.5));

      if (uPhase < 0.5) { // DAY
        skyTop = vec3(0.05, 0.3, 0.7);
        skyBot = vec3(0.5, 0.7, 0.9);
        cloudCol = vec3(1.0, 1.0, 1.0);
      } else if (uPhase < 1.5) { // DAWN
        skyTop = vec3(0.1, 0.2, 0.4);
        skyBot = vec3(1.0, 0.6, 0.4);
        cloudCol = vec3(1.0, 0.9, 0.7);
      } else if (uPhase < 2.5) { // DUSK
        skyTop = vec3(0.05, 0.05, 0.2);
        skyBot = vec3(0.5, 0.2, 0.6);
        cloudCol = vec3(0.8, 0.6, 0.7);
      } else { // NIGHT
        skyTop = vec3(0.0, 0.01, 0.05);
        skyBot = vec3(0.02, 0.05, 0.1);
        cloudCol = vec3(0.5, 0.5, 0.7);
      }

      vec3 bg = mix(skyBot, skyTop, vUv.y);
      vec4 res = raymarch(ro, rd, sunDir, bg, cloudCol);
      
      vec3 final = mix(bg, res.rgb, res.a);
      
      // Sun
      float sun = pow(max(0.0, dot(rd, sunDir)), 100.0);
      final += vec3(1.0, 0.9, 0.7) * sun * 0.8;

      gl_FragColor = vec4(final, 1.0);
    }
  `,
};

const AtmosphericCore = () => {
  const meshRef = useRef();
  const { mouse, size } = useThree();
  const { scrollYProgress } = useScroll();
  const { atmosphere } = useAtmosphere();

  const phaseValue = useMemo(() => {
    switch(atmosphere.phase) {
      case 'dawn': return 1.0;
      case 'dusk': return 2.0;
      case 'night': return 3.0;
      default: return 0.0;
    }
  }, [atmosphere.phase]);

  // Track resolution and phase changes to update uniforms only when needed
  const lastRes = useRef(new THREE.Vector2());

  useFrame((state) => {
    if (meshRef.current) {
      const uniforms = meshRef.current.material.uniforms;
      uniforms.uTime.value = state.clock.getElapsedTime();
      uniforms.uMouse.value.lerp(mouse, 0.05);
      uniforms.uScroll.value = THREE.MathUtils.lerp(
        uniforms.uScroll.value,
        scrollYProgress.get(),
        0.1
      );
      
      // Only update static-ish uniforms if they changed
      if (uniforms.uPhase.value !== phaseValue) {
        uniforms.uPhase.value = phaseValue;
      }
      
      if (lastRes.current.x !== size.width || lastRes.current.y !== size.height) {
        uniforms.uResolution.value.set(size.width, size.height);
        lastRes.current.set(size.width, size.height);
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial 
        {...RaymarchCloudShader} 
        depthTest={false} 
        depthWrite={false}
      />
    </mesh>
  );
};

const GlobalCloudBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          alpha: true
        }}
        dpr={[1, 1.2]} // Capped pixel ratio for performance
      >
        <AtmosphericCore />
      </Canvas>
    </div>
  );
};

export default GlobalCloudBackground;
