// src/components/HeroHeading.jsx
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * HeroHeading — fixed:
 *  - stable indexed refs for letters
 *  - canvas z-index lower than letters
 *  - no resetting of letterRefs each render
 *  - stable keys
 */
export function HeroHeading({ text = "Welcome to My Portfolio" }) {
  const letters = Array.from(text);
  const containerRef = useRef(null);
  const letterRefs = useRef([]); // DO NOT reset this each render

  // Hover state
  const [hoverIndex, setHoverIndex] = useState(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  // Particles
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  // stable indexed ref setter
  const setLetterRef = (i) => (el) => {
    letterRefs.current[i] = el;
  };

  const getClosestLetterIndex = (clientX, clientY) => {
    let minDist = Infinity;
    let index = null;
    for (let i = 0; i < letterRefs.current.length; i++) {
      const el = letterRefs.current[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const d = Math.hypot(clientX - cx, clientY - cy);
      if (d < minDist) {
        minDist = d;
        index = i;
      }
    }
    return { index, minDist };
  };

  const spawnParticles = useCallback((x, y, count = 18) => {
    const colors = [
      "rgba(255,79,216,0.95)",
      "rgba(124,58,237,0.95)",
      "rgba(0,229,255,0.95)",
      "rgba(255,255,255,0.9)",
    ];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.6 + Math.random() * 3.2;
      const life = 0.55 + Math.random() * 0.8;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        life,
        age: 0,
        rotation: Math.random() * 360,
      });
    }
  }, []);

  // particle loop + resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let last = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // ensure canvas fills the container
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const step = (t) => {
      const now = t;
      const dt = Math.min((now - last) / 1000, 0.06);
      last = now;

      const ps = particlesRef.current;
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.age += dt;
        if (p.age >= p.life) {
          ps.splice(i, 1);
          continue;
        }
        p.vx *= 0.985 - dt * 0.25;
        p.vy *= 0.985 - dt * 0.25;
        p.vy += 10 * dt * 0.06;
        p.x += p.vx * 60 * dt;
        p.y += p.vy * 60 * dt;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        const alpha = 1 - p.age / p.life;
        const size = p.size;
        const gx = p.x;
        const gy = p.y;

        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(8, size * 3));
        // safe color replacement (keep string)
        grad.addColorStop(0, p.color.replace(/,[^)]+\)$/, `,${0.98})`));
        grad.addColorStop(0.5, p.color.replace(/,[^)]+\)$/, `,${(0.6 * alpha).toFixed(3)})`));
        grad.addColorStop(1, p.color.replace(/,[^)]+\)$/, `,0.0)`));

        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(gx, gy, size * (1 + (1 - alpha) * 0.6), 0, Math.PI * 2);
        ctx.fill();

        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = `rgba(255,255,255,${(0.18 * alpha).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(gx, gy, Math.max(0.6, size * 0.18), 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [spawnParticles]);

  // pointer handling on container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let lastSpawn = 0;
    const onPointerMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = e.clientX;
      const cy = e.clientY;

      pointerRef.current = { x: cx, y: cy };

      const { index, minDist } = getClosestLetterIndex(cx, cy);
      setHoverIndex((prev) => (prev === index ? prev : index));

      const now = performance.now();
      if (now - lastSpawn > 40) {
        const spawnCount = minDist < 40 ? 10 : minDist < 100 ? 5 : 2;
        spawnParticles(cx - rect.left, cy - rect.top, spawnCount);
        lastSpawn = now;
      }
    };

    const onPointerEnter = (e) => {
      const rect = el.getBoundingClientRect();
      spawnParticles(e.clientX - rect.left, e.clientY - rect.top, 18);
    };

    const onPointerLeave = () => {
      setHoverIndex(null);
    };

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [spawnParticles]);

  // emphasized burst when hoverIndex changes
  useEffect(() => {
    if (hoverIndex == null) return;
    const el = letterRefs.current[hoverIndex];
    if (!el || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const lr = el.getBoundingClientRect();
    const cx = lr.left + lr.width / 2 - rect.left;
    const cy = lr.top + lr.height / 2 - rect.top;
    spawnParticles(cx, cy, 28);
  }, [hoverIndex, spawnParticles]);

  // render spans
  const spans = letters.map((ch, i) => {
    let tx = 0, ty = 0, scale = 1, rot = 0;

    if (hoverIndex !== null && letterRefs.current[i]) {
      const el = letterRefs.current[i];
      const lr = el.getBoundingClientRect();
      const cx = lr.left + lr.width / 2;
      const cy = lr.top + lr.height / 2;
      const px = pointerRef.current.x || cx;
      const py = pointerRef.current.y || cy;
      const dx = cx - px;
      const dy = cy - py;
      const dist = Math.hypot(dx, dy);

      const maxRadius = 120;
      const normalized = Math.max(0, 1 - dist / maxRadius);
      const strength = Math.pow(normalized, 0.8);

      scale = 1 + strength * 0.85;
      const push = 6 + strength * 26;
      const angle = Math.atan2(dy, dx);
      tx = Math.cos(angle) * push;
      ty = Math.sin(angle) * push;
      rot = Math.sin(i * 0.7 + dist * 0.03) * strength * 12;
    }

    return (
      <motion.span
        ref={setLetterRef(i)}
        key={`l-${i}`}
        className="inline-block liquid-letter"
        animate={{ x: tx, y: ty, scale, rotate: rot }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        style={{
          display: "inline-block",
          lineHeight: 1,
          originX: "50%",
          originY: "50%",
          paddingRight: ch === " " ? "0.28em" : undefined,
          whiteSpace: "pre",
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {ch === " " ? "\u00A0" : ch}
      </motion.span>
    );
  });

  return (
    <div
      ref={containerRef}
      className="hero-heading-container relative block w-full max-w-full"
      style={{ touchAction: "none" }}
    >
      <canvas
        ref={canvasRef}
        className="hero-particles-canvas absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="heading-inner relative inline-block" style={{ zIndex: 2, pointerEvents: "auto" }}>
        <h1
          aria-hidden="true"
          className="liquid-text text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white neon-flicker"
          style={{ WebkitTextStroke: "0.8px rgba(0,0,0,0.28)" }}
        >
          {spans}
        </h1>
      </div>
    </div>
  );
}
