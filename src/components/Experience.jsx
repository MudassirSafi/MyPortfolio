// src/components/Experience.jsx
import React from "react";
import "./Marquee.css"; // we'll create this file below

export default function Experience() {
  const experiences = [
    { role: "Web Developer", company: "DivRolin", period: "Aug 2025 - Current" },
    { role: "Front-End Developer", company: "TechHack", period: "Jan 2025 - Apr 2025" },
    { role: "Web Developer (Intern)", company: "CodeVerse", period: "Sep 2024 - Dec 2024" },
    { role: "Junior Web Developer", company: "NextNova", period: "May 2024 - Aug 2024" },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center text-white pt-28 px-4"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
        Experience
      </h2>

      <div className="relative w-full max-w-5xl overflow-hidden border border-cyan-400/50 rounded-2xl backdrop-blur-md bg-white/5 shadow-[0_0_25px_rgba(0,255,255,0.25)] p-4 space-y-6">
        {/* Top Marquee */}
        <div className="marquee-container">
          <div className="marquee track-left">
            {[...experiences, ...experiences].map((exp, i) => (
              <div
                key={i}
                className="card border border-cyan-400/40 rounded-xl bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,255,0.2)]"
              >
                <h3 className="text-xl font-semibold text-cyan-300">{exp.role}</h3>
                <p className="text-sm text-pink-300">{exp.company}</p>
                <p className="text-xs text-gray-300">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee (reverse) */}
        <div className="marquee-container">
          <div className="marquee track-right">
            {[...experiences, ...experiences].map((exp, i) => (
              <div
                key={i}
                className="card border border-pink-400/40 rounded-xl bg-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,0,255,0.2)]"
              >
                <h3 className="text-xl font-semibold text-pink-300">{exp.role}</h3>
                <p className="text-sm text-cyan-300">{exp.company}</p>
                <p className="text-xs text-gray-300">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
