"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Icosahedron, Torus, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// 1. GALAXY SWARM (Ribuan Partikel yang Berputar)
function GalaxySwarm() {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = 4000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Create 3 spiral arms
      const branchAngle = (i % 3) * ((2 * Math.PI) / 3); 
      // Gaussian-ish distribution towards center
      const radius = Math.random() * Math.random() * 8; 
      // Curving the arms
      const spinAngle = radius * 0.5 + branchAngle; 
      
      // Add random scatter based on distance (closer = denser)
      const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * (8 - radius);
      const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * (8 - radius);
      const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * (8 - radius);

      pos[i * 3] = Math.cos(spinAngle) * radius + randomX;
      pos[i * 3 + 1] = randomY * 0.3; // Flatten the galaxy on Y axis
      pos[i * 3 + 2] = Math.sin(spinAngle) * radius + randomZ;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // Rotate the entire galaxy slowly
    ref.current.rotation.y -= delta * 0.05;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.05 + 0.2;
    
    // Slight tilt follow mouse
    const targetX = (state.pointer.x * Math.PI) / 15;
    const targetY = (state.pointer.y * Math.PI) / 15;
    
    ref.current.rotation.x += (targetY - ref.current.rotation.x) * 0.02;
    ref.current.rotation.z += (targetX - ref.current.rotation.z) * 0.02;
  });

  return (
    <group rotation={[Math.PI / 6, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color="#43C4BC" 
          size={0.035} 
          sizeAttenuation={true} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending} 
        />
      </Points>
    </group>
  );
}

// 2. CYBERNETIC CORE (Inti Data / Sistem)
function CyberCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (coreRef.current && outerRef.current && groupRef.current) {
      coreRef.current.rotation.y += delta * 0.8;
      coreRef.current.rotation.x += delta * 0.4;
      
      outerRef.current.rotation.y -= delta * 0.2;
      outerRef.current.rotation.z -= delta * 0.1;
      
      // Mouse interaction for the core
      const targetX = (state.pointer.x * Math.PI) / 5;
      const targetY = (state.pointer.y * Math.PI) / 5;
      
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Intense inner core */}
      <Icosahedron ref={coreRef} args={[1.2, 1]}>
        <meshBasicMaterial 
          color="#7FE9E1" 
          wireframe 
          transparent 
          opacity={0.35} 
          blending={THREE.AdditiveBlending} 
        />
      </Icosahedron>
      
      {/* Outer abstract shell */}
      <Icosahedron ref={outerRef} args={[2.2, 2]}>
        <meshBasicMaterial 
          color="#4F9FD6" 
          wireframe 
          transparent 
          opacity={0.12} 
          blending={THREE.AdditiveBlending} 
        />
      </Icosahedron>
      
      {/* Orbit Rings (Data streams) */}
      <Float speed={4} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[3.5, 0.015, 16, 100]} rotation={[Math.PI/2.5, 0, 0]}>
           <meshBasicMaterial color="#ffffff" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
        </Torus>
      </Float>
      
      <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
        <Torus args={[4.5, 0.01, 16, 100]} rotation={[Math.PI/3, Math.PI/4, 0]}>
           <meshBasicMaterial color="#43C4BC" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
        </Torus>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        {/* Latar Belakang Gelap (Fog) agar memudar di ujung */}
        <fog attach="fog" args={["#04101A", 8, 20]} />
        
        {/* Ribuan partikel menyala (Debu Bintang) */}
        <Sparkles count={1500} scale={15} size={1.5} speed={0.3} opacity={0.6} color="#4F9FD6" />
        <Sparkles count={500} scale={10} size={2} speed={0.6} opacity={0.8} color="#7FE9E1" />
        
        {/* Core & Galaxy */}
        <CyberCore />
        <GalaxySwarm />
      </Canvas>
    </div>
  );
}
