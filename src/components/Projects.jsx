import React, { useEffect, useRef, useState } from "react";
import "../styles/neonTheme.css"; // same theme file used in About.jsx

// --- Data for your projects
const projects = [
  {
    id: 1,
    title: "Aurora Notes",
    img: "https://picsum.photos/seed/p1/1200/800",
    github: "https://github.com/MudassirSafi/JewelRolins",
    live: "https://jewel-rolin.netlify.app/",
  },
  {
    id: 2,
    title: "Neon Chat UI",
    img: "https://picsum.photos/seed/p2/1200/800",
    github: "https://github.com/MudassirSafi/JewelRolins",
    live: "https://jewel-rolin.netlify.app/",
  },
  {
    id: 3,
    title: "Stellar Dashboard",
    img: "https://picsum.photos/seed/p3/1200/800",
    github: "https://github.com/MudassirSafi/JewelRolins",
    live: "https://jewel-rolin.netlify.app/",
  },
  {
    id: 4,
    title: "Lumen Storefront",
    img: "https://picsum.photos/seed/p4/1200/800",
    github: "https://github.com/MudassirSafi/JewelRolins",
    live: "https://jewel-rolin.netlify.app/",
  },
  {
    id: 5,
    title: "Orbit Blog",
    img: "https://picsum.photos/seed/p5/1200/800",
    github: "https://github.com/MudassirSafi/JewelRolins",
    live: "https://jewel-rolin.netlify.app/",
  },
  {
    id: 6,
    title: "Prism Planner",
    img: "https://picsum.photos/seed/p6/1200/800",
    github: "https://github.com/MudassirSafi/JewelRolins",
    live: "https://jewel-rolin.netlify.app/",
  },
];

// --- Hook to detect scroll direction
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

// --- Project Card Component
function ProjectCard({ project, scrollDir }) {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) setOpen(false);
    else setOpen(scrollDir === "down");
  }, [visible, scrollDir]);

  return (
    <div ref={ref} className="project-card w-full max-w-4xl mx-auto mb-12 px-4">
      <div
        className={`rounded-3xl overflow-hidden border border-[var(--neon-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-[var(--neon-card-shadow)] transition-transform duration-700 ease-[cubic-bezier(.2,.9,.2,1)] hover:animate-neonPulse ${
          open ? "rotate-x-0" : "rotate-x-80"
        }`}
      >
        {/* Image Section */}
        <div className="h-60 sm:h-72 w-full overflow-hidden transform-origin-top transition-transform">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
            draggable={false}
          />
        </div>

        {/* Text Section */}
        <div className="p-6 flex flex-col gap-4">
          <h3
            className="text-2xl font-semibold drop-shadow-[0_0_10px_var(--neon-primary)]"
            style={{ color: "var(--neon-primary)" }}
          >
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Explore the full build & live version of this project 👇
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-2 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-accent)] hover:opacity-90 transition-all duration-300 shadow-[0_0_15px_var(--neon-accent)]"
            >
              <i className="fa-brands fa-github text-lg"></i> GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[var(--neon-accent)] to-[var(--neon-primary)] hover:opacity-90 transition-all duration-300 shadow-[0_0_15px_var(--neon-primary)]"
            >
              <i className="fa-solid fa-globe text-lg"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Projects Section
export default function Projects() {
  const scrollDir = useScrollDirection();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes rotateNeon {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes neonPulse {
        0%, 100% {
          box-shadow: 0 0 25px var(--neon-primary),
                      0 0 50px var(--neon-accent);
          border-color: var(--neon-border);
        }
        50% {
          box-shadow: 0 0 40px var(--neon-accent),
                      0 0 70px var(--neon-primary);
          border-color: var(--neon-accent);
        }
      }
      .animate-neonPulse {
        animation: neonPulse 2.8s ease-in-out infinite alternate;
      }
      .rotate-x-80 {
        transform: perspective(1000px) rotateX(-80deg) translateY(30px);
      }
      .rotate-x-0 {
        transform: perspective(1000px) rotateX(0deg) translateY(0);
      }
      .neon-bg {
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at 20% 30%, rgba(255,0,150,0.08), transparent 30%),
                    radial-gradient(circle at 80% 70%, rgba(0,200,255,0.08), transparent 25%);
        animation: rotateNeon 25s linear infinite;
        z-index: -10;
        filter: blur(100px);
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="neon-bg" aria-hidden="true"></div>

      {/* Glassy Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-4 glass-card border border-[var(--neon-border)] shadow-[var(--neon-card-shadow)] rounded-3xl py-8 backdrop-blur-xl">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-[0_0_15px_var(--neon-primary)]"
          style={{ color: "var(--neon-primary)" }}
        >
          My Projects
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Scroll to see — each card opens like a laptop lid 🎨
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-10">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} scrollDir={scrollDir} />
        ))}
      </div>
    </section>
  );
}
