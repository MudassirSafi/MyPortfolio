import React, { useEffect, useRef, useState } from "react";
import profileImg from "../assets/profile.png";
import "../styles/neonTheme.css";

// --- Hook to detect scroll direction (same as Projects.jsx)
function useScrollDirection() {
  const [direction, setDirection] = useState("down");
  const lastY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY.current) > 5) {
        setDirection(currentY > lastY.current ? "down" : "up");
        lastY.current = currentY;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}

export default function About() {
  const ref = useRef();
  const scrollDir = useScrollDirection();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  // detect visibility of the About section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // control open/close based on scroll direction
  useEffect(() => {
    if (!visible) setOpen(false);
    else setOpen(scrollDir === "down");
  }, [visible, scrollDir]);

  // add lid animation CSS globally once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .rotate-x-80 { transform: perspective(1000px) rotateX(-80deg) translateY(30px); }
      .rotate-x-0 { transform: perspective(1000px) rotateX(0deg) translateY(0); }
      .transition-lid {
        transition: transform 0.8s cubic-bezier(.2,.9,.2,1);
        transform-origin: top center;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section id="about" className="flex justify-center py-32 px-6 sm:px-12">
      <div
        ref={ref}
        className={`relative max-w-5xl w-full flex flex-col sm:flex-row items-center glass-card rounded-3xl p-6 sm:p-10 transition-lid ${
          open ? "rotate-x-0" : "rotate-x-80"
        }`}
      >
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center sm:justify-start mb-8 sm:mb-0">
          <img
            src={profileImg}
            alt="Muhammad Mudassir"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl object-cover border border-[var(--neon-border)] shadow-[var(--neon-img-shadow)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 text-center sm:text-left space-y-4">
          <h2
            className="text-4xl font-bold tracking-wide"
            style={{ color: "var(--neon-primary)" }}
          >
            About Me 💫
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Hey there! I’m{" "}
            <span className="font-semibold" style={{ color: "var(--neon-accent)" }}>
              Muhammad Mudassir
            </span>
            , a passionate developer who loves crafting sleek, interactive, and
            immersive digital experiences. I thrive at the intersection of
            design, technology, and storytelling.
          </p>
          <p className="text-gray-400">
            My goal? To bring ideas to life with creative code, aesthetic
            precision, and smooth performance. I specialize in{" "}
            <span style={{ color: "var(--neon-accent)" }}>React</span>,{" "}
            <span style={{ color: "var(--neon-accent)" }}>Three.js</span>, and{" "}
            <span style={{ color: "var(--neon-accent)" }}>Framer Motion</span> for
            rich web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
