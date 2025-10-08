// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("About");

  const handleScroll = (id) => {
  const section = document.getElementById(id.toLowerCase());
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    // Delay closing menu to ensure scroll works properly
    setTimeout(() => setOpen(false), 500);
  }
};

  const navLinks = ["About", "Projects", "Experience", "Skills", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-cyan-400/30 shadow-[0_0_25px_rgba(0,255,255,0.25)]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg">
            MS
          </div>
          <span className="text-lg font-semibold text-cyan-300 tracking-wide">
            My Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className={`nav-link text-sm font-medium ${
                active === link ? "text-cyan-300" : "text-white hover:text-cyan-400"
              } transition`}
            >
              {link}
            </button>
          ))}
          <a
            href="/resume.pdf"
            className="btn-ghost text-sm font-medium text-white hover:text-cyan-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:text-cyan-300 transition"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d={
                open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={open ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        className="md:hidden overflow-hidden bg-white/10 backdrop-blur-xl border-t border-cyan-400/20"
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className={`nav-link text-left text-sm font-medium ${
                active === link ? "text-cyan-300" : "text-white hover:text-cyan-400"
              }`}
            >
              {link}
            </button>
          ))}
          <a href="/resume.pdf" className="btn-ghost text-sm font-medium text-white hover:text-cyan-300">
            Resume
          </a>
        </div>
      </motion.div>
    </header>
  );
}
