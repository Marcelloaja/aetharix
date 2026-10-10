"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function DataVault() {
  const outerRef = useRef<THREE.Mesh>(null);
  const midRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.15;
      outerRef.current.rotation.y = t * 0.2;
    }
    if (midRef.current) {
      midRef.current.rotation.x = -t * 0.2;
      midRef.current.rotation.y = -t * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.5;
      innerRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Box (Firewall) */}
      <mesh ref={outerRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial color="#38BDF8" wireframe transparent opacity={0.15} />
      </mesh>
      
      {/* Mid Glass Box (Encryption Layer) */}
      <mesh ref={midRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial 
          color="#818CF8" 
          transparent 
          opacity={0.3} 
          roughness={0.1} 
          metalness={0.9} 
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Inner Solid Core (The Data) */}
      <mesh ref={innerRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#E4E4E7" metalness={0.5} roughness={0.2} emissive="#0284C7" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function SecurityCore() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50 md:opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#38BDF8" />
        <directionalLight position={[-5, -5, -5]} intensity={2} color="#818CF8" />
        <DataVault />
      </Canvas>
    </div>
  );
}
