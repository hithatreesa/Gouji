import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Clouds, Cloud } from '@react-three/drei';
import * as THREE from 'three';



const CloudParticle = ({ texture, position, scale, opacity, speed }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const { x, y } = state.mouse;
    const time = state.clock.getElapsedTime();
    
    // Parallax
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, position[0] + x * (position[2] * -0.5), 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, position[1] - y * (position[2] * -0.5), 0.05);
    
    // Rotation/Drift
    meshRef.current.rotation.z += speed * 0.01;
    meshRef.current.position.z += Math.sin(time * speed) * 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[12 * scale, 12 * scale]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        opacity={opacity} 
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
        // We'll use a simple trick: slightly tinting and using a higher contrast for the map
        // but the key is the position and scale to avoid center-stacking
      />
    </mesh>
  );
};

const VisualSystem = () => {
  const texture = useMemo(() => new THREE.TextureLoader().load('/src/assets/cloud-orange.png'), []);
  
  // Generate a field of particles
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 35, // Wider
        (Math.random() - 0.5) * 25, // Taller
        -Math.random() * 25        // Deeper
      ],
      scale: 1 + Math.random() * 3,
      opacity: 0.05 + Math.random() * 0.2, // Much lower opacity to prevent "box" look
      speed: (Math.random() - 0.5) * 0.1
    }));
  }, []);

  return (
    <Canvas 
      dpr={[1, 2]} 
      gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      className="absolute inset-0 pointer-events-none"
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
      
      <group>
        {particles.map((p, i) => (
          <CloudParticle key={i} texture={texture} {...p} />
        ))}
      </group>
    </Canvas>
  );
};

export default VisualSystem;
