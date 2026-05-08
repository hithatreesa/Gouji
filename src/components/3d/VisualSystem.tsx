import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const IdentityCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#ffffff"
          speed={2}
          distort={0.3}
          radius={1}
          metalness={0.9}
          roughness={0.1}
          emissive="#ff4d29"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Outer Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.005, 16, 100]} />
        <meshStandardMaterial color="#ff4d29" emissive="#ff4d29" emissiveIntensity={2} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.8, 0.002, 16, 100]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={1} />
      </mesh>
    </Float>
  );
};

const DataParticles = () => {
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff4d29"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const VisualSystem: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff4d29" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />
        
        <IdentityCore />
        <DataParticles />
      </Canvas>
    </div>
  );
};

export default VisualSystem;
