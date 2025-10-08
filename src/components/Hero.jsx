// src/components/Hero.jsx
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import { HeroHeading } from "./HeroHeading";
import { motion } from "framer-motion";

function SVGFilters() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        pointerEvents: "none",
      }}
    >
      <defs>
        <filter id="liquid-distort" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            baseFrequency="0.02 0.04"
            numOctaves="3"
            seed="2"
            result="turb"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

function PanoramaSphere({ src, hoverRef, dragRef }) {
  const ref = useRef();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new EXRLoader();
    loader.load(
      src,
      (tex) => {
        tex.mapping = THREE.EquirectangularReflectionMapping;
        tex.encoding = THREE.sRGBEncoding;
        tex.anisotropy = 8;
        setTexture(tex);
      },
      undefined,
      (err) => console.error("Error loading EXR:", err)
    );
  }, [src]);

  const smoothRef = useRef(0);
  useFrame(() => {
    if (!ref.current) return;
    const hover = hoverRef.current || 0;
    const hoverAngle = hover * 0.35;
    smoothRef.current += (hoverAngle - smoothRef.current) * 0.08;
    const target = (dragRef.current || 0) + smoothRef.current;
    const auto = Math.sin(performance.now() / 7000) * 0.002;
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y || 0,
      target + auto,
      0.06
    );
  });

  if (!texture) return null;
  return (
    <mesh ref={ref} scale={[-1, 1, 1]}>
      <sphereGeometry args={[50, 64, 48]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} toneMapped={false} />
    </mesh>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const hoverRef = useRef(0);
  const dragRef = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const isTouch = window.matchMedia("(pointer: coarse), (hover: none)").matches;
    if (isTouch) return;

    const onPointerMove = (e) => {
      const rect = el.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2);
      if (!dragging.current) hoverRef.current = Math.max(-1, Math.min(1, nx));
    };
    const onPointerDown = (e) => {
      dragging.current = true;
      lastX.current = e.clientX;
    };
    const onPointerUp = () => (dragging.current = false);
    const onPointerDrag = (e) => {
      if (!dragging.current) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      dragRef.current += -dx * 0.0045;
    };

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerDrag);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerDrag);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  const panoURL =
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/neon_photostudio_4k.exr";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <SVGFilters />

      {/* Background Canvas */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 0.1], fov: 70 }}
      >
        <Suspense fallback={null}>
          <PanoramaSphere src={panoURL} hoverRef={hoverRef} dragRef={dragRef} />
        </Suspense>
      </Canvas>

      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Floating heading layer */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center px-6">
        <HeroHeading />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg text-slate-200/90"
        >
          A Smooth Designer through Coding.
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </section>
  );
}
