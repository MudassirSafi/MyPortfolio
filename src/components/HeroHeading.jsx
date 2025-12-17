// src/components/HeroHeading.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export function HeroHeading({ text = "Welcome to My Portfolio" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  // --- Typing Effect (smooth and realistic) ---
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 120); // adjust typing speed (lower = faster)
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  // --- Glassy Neon Particle Effect ---
  const spawnParticles = useCallback((x, y, count = 14) => {
    const colors = [
      "rgba(0,255,255,0.95)",
      "rgba(255,0,255,0.95)",
      "rgba(180,100,255,0.9)",
      "rgba(255,255,255,0.8)",
    ];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.6 + Math.random() * 2.8;
      const life = 0.5 + Math.random() * 0.7;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life,
        age: 0,
      });
    }
  }, []);

  // --- Particle Animation Loop ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const step = (t) => {
      const dt = Math.min((t - last) / 1000, 0.06);
      last = t;
      const ps = particlesRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.age += dt;
        if (p.age >= p.life) {
          ps.splice(i, 1);
          continue;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.vy += 10 * dt * 0.05;
        p.x += p.vx * 60 * dt;
        p.y += p.vy * 60 * dt;

        const alpha = 1 - p.age / p.life;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grad.addColorStop(0, p.color.replace(/,[^)]+\)$/, `,${0.8 * alpha})`));
        grad.addColorStop(0.6, p.color.replace(/,[^)]+\)$/, `,${0.4 * alpha})`));
        grad.addColorStop(1, "transparent");
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // --- Trigger gentle sparkle during typing ---
  useEffect(() => {
    if (!canvasRef.current || displayedText.length === 0) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.width * (Math.random() * 0.8 + 0.1);
    const y = rect.height * (Math.random() * 0.5 + 0.2);
    spawnParticles(x, y, 8);
  }, [displayedText, spawnParticles]);

  return (
    <div
      className="relative flex justify-center items-center w-full select-none"
      style={{ touchAction: "none" }}
    >
      {/* Particle Glow Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Typing Text with Glassy Neon Effect */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]"
        style={{
          zIndex: 2,
          textShadow:
            "0 0 15px rgba(0,255,255,0.6), 0 0 35px rgba(255,0,255,0.4), 0 0 55px rgba(0,255,255,0.2)",
          WebkitTextStroke: "0.7px rgba(255,255,255,0.25)",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {displayedText}
      </motion.h1>
    </div>
  );
}
