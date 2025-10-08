// src/components/Skills.jsx
import React from "react";
import "./Marquee.css";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
    "Node.js", "Express", "MongoDB", "Git", "Framer Motion", "Three.js",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-white pt-28 px-4"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
        Skills
      </h2>

      <div className="relative w-full max-w-5xl overflow-hidden border border-cyan-400/50 rounded-2xl backdrop-blur-md bg-white/5 shadow-[0_0_25px_rgba(0,255,255,0.25)] p-4 space-y-6">
        {/* Top Row */}
        <div className="marquee-container">
          <div className="marquee track-left">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="card border border-cyan-400/40 rounded-xl bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,255,0.2)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row (reverse direction) */}
        <div className="marquee-container">
          <div className="marquee track-right">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="card border border-pink-400/40 rounded-xl bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,0,255,0.2)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
