"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

function SystemGlobe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      
      // Slight mouse follow effect
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core Sphere */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial color="#061826" transparent opacity={0.8} />
      </Sphere>
      
      {/* Wireframe outer sphere */}
      <Sphere args={[1.6, 16, 16]}>
        <meshBasicMaterial color="#43C4BC" wireframe transparent opacity={0.15} />
      </Sphere>

      {/* Orbit Rings */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.2, 0.01, 32, 100]} />
        <meshBasicMaterial color="#7FE9E1" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 1.5, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.01, 32, 100]} />
        <meshBasicMaterial color="#4F9FD6" transparent opacity={0.2} />
      </mesh>

      {/* Particles/Satellites representing data nodes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2.2, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#7FE9E1" />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-1.5, 2.3, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#4F9FD6" />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={2.5}>
        <mesh position={[0, -2.5, 1.5]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <fog attach="fog" args={["#04101A", 4, 10]} />
        <SystemGlobe />
      </Canvas>
    </div>
  );
}
