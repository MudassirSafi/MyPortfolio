// src/components/Hero.jsx
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import { HeroHeading } from "./HeroHeading";

function StarField({ cursor }) {
  const pointsRef = useRef();
  const [positions] = useState(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  });

  useFrame(() => {
    if (!pointsRef.current) return;
    const time = performance.now() * 0.0005;
    pointsRef.current.rotation.y = time * 0.05;

    // Update opacity near cursor
    const material = pointsRef.current.material;
    const dist = Math.sqrt(cursor.current.x ** 2 + cursor.current.y ** 2);
    material.opacity = THREE.MathUtils.lerp(0.15, 0.9, 1 - Math.min(dist * 1.2, 1));
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#0ff"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      cursor.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      cursor.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center"
    >
      {/* Stars background */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 3], fov: 75 }}
      >
        <StarField cursor={cursor} />
      </Canvas>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      {/* Hero content */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6">
        <HeroHeading />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg text-cyan-200/80 backdrop-blur-md"
        >
          A Smooth Designer through Coding.
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
    </section>
  );
}
