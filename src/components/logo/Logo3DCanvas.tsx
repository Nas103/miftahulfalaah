"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Octahedron } from "@react-three/drei";
import * as THREE from "three";

function LogoMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Octahedron ref={meshRef} args={[0.85, 0]} position={[0, 0, 0]} castShadow receiveShadow>
      <meshStandardMaterial
        color="#ffffff"
        emissive="#3b82f6"
        emissiveIntensity={0.4}
        metalness={0.3}
        roughness={0.4}
      />
    </Octahedron>
  );
}

function ShadowPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
      <planeGeometry args={[4, 4]} />
      <shadowMaterial opacity={0.25} />
    </mesh>
  );
}

interface Logo3DCanvasProps {
  size: number;
}

export default function Logo3DCanvas({ size }: Logo3DCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 35 }}
      shadows
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
        stencil: false,
        depth: true,
      }}
      dpr={[1, 2]}
      frameloop="always"
      style={{ width: size, height: size, display: "block" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[2, 2, 2]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-camera-far={6}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-bias={-0.0001}
      />
      <directionalLight position={[-1.5, 1, 1]} intensity={0.4} />
      <directionalLight position={[0, -1, -0.5]} intensity={0.2} />
      <LogoMesh />
      <ShadowPlane />
    </Canvas>
  );
}
