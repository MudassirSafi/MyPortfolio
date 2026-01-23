import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Rocket, Eye, ExternalLink, Star, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Smoother, slower scroll with adjusted physics
  const xRaw = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  // Reduced stiffness and increased damping for a premium "heavy" feel
  const x = useSpring(xRaw, { stiffness: 25, damping: 35, restDelta: 0.001 });

  const projects = [
    {
      title: "BizzRolin Software House",
      description: "A premium software house platform featuring automated project management, client portals, and dynamic service showcases. Built for high-performance agencies.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Node.js"],
      gradient: "from-blue-600 to-indigo-700",
      stats: { projects: "20+", clients: "15+", uptime: "99.9%" }
    },
    {
      title: "SME Dashboard",
      description: "Comprehensive business management dashboard for SMEs with real-time analytics, inventory tracking, and financial reporting.",
      tech: ["React", "Express", "MongoDB", "Chart.js"],
      gradient: "from-red-600 to-red-400",
      stats: { users: "1.2K+", uptime: "99.9%", status: "Live" }
    },
    {
      title: "2Wolf E-commerce",
      description: "Premium e-commerce platform with seamless shopping experience, secure payments, and dynamic product management.",
      tech: ["Next.js", "Tailwind CSS", "Stripe", "Node.js"],
      gradient: "from-gray-900 to-gray-700",
      stats: { sales: "5K+", rating: "4.9/5", speed: "98/100" }
    },
    {
      title: "CyberPulse Security",
      description: "Real-time threat monitoring dashboard with AI-driven anomaly detection and interactive vulnerability reports.",
      tech: ["React", "Python", "TensorFlow", "WebSocket"],
      gradient: "from-cyan-600 to-blue-500",
      stats: { threats: "10K+", scans: "500+", score: "99/100" }
    },
    {
      title: "CloudFlow DevOps",
      description: "A comprehensive CI/CD pipeline visualizer and infrastructure management tool for modern cloud deployments.",
      tech: ["Go", "React", "Docker", "Kubernetes"],
      gradient: "from-orange-600 to-red-500",
      stats: { builds: "1K+", deploys: "200+", latency: "<50ms" }
    }
  ];

  return (
    <>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8 backdrop-blur-2xl bg-black/90 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="relative w-full max-w-5xl glass-card overflow-hidden my-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-black/40 border border-white/20 hover:bg-white/10 transition-all z-[110]"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className={`h-48 sm:h-64 lg:h-auto bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center p-8 md:p-12`}>
                  <Rocket className="w-24 h-24 sm:w-32 sm:h-32 text-white/20 animate-pulse" />
                </div>
                <div className="p-6 sm:p-8 md:p-12 space-y-4 md:space-y-6 max-h-[70vh] lg:max-h-none overflow-y-auto lg:overflow-visible">
                  <h3 className="text-3xl md:text-5xl font-black font-display uppercase leading-tight">{selectedProject.title}</h3>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium">{selectedProject.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 inline-block px-3 py-1 rounded-md">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-4 py-6 border-y border-white/5">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="text-center sm:text-left">
                        <div className="text-lg md:text-2xl font-black text-white">{value}</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-black tracking-tighter sm:tracking-widest">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 btn-primary flex items-center justify-center gap-2 py-4">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </button>
                    <button className="flex-1 btn-secondary flex items-center justify-center gap-2 py-4">
                      GitHub Repo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section ref={targetRef} id="projects" className="relative h-[300vh] bg-[#0a0a0f]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Fixed Heading with Responsive Scaling */}
          <div className="absolute top-24 sm:top-32 left-0 right-0 text-center px-4 z-20 pointer-events-none">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-8xl font-black font-display text-white uppercase tracking-tighter"
              style={{
                textShadow: '0 0 50px rgba(0,0,0,0.9), 0 0 20px rgba(255,59,48,0.3)'
              }}
            >
              Recent <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500 mt-4 text-sm sm:text-base font-black tracking-widest uppercase flex items-center justify-center gap-2"
            >
              Scroll Horizontal <span className="text-red-500">→</span>
            </motion.p>
          </div>

          <motion.div style={{ x }} className="flex gap-6 sm:gap-12 px-6 sm:px-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative w-[280px] sm:w-[450px] md:w-[600px] flex-shrink-0"
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-card overflow-hidden cursor-pointer h-full border-white/5 hover:border-red-500/30 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(255,59,48,0.15)]">
                  <div className={`h-40 sm:h-56 md:h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Rocket className="w-16 h-16 sm:w-24 sm:h-24 text-white/10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                    </div>

                    {/* Floating Tech Tag */}
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-black text-white border border-white/10 uppercase tracking-widest">
                        Featured Project
                      </span>
                    </div>

                    <div className="absolute bottom-6 right-6 translate-y-20 group-hover:translate-y-0 transition-all duration-500">
                      <div className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase flex items-center gap-2 shadow-2xl">
                        <Eye className="w-4 h-4" /> View Details
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-10 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base line-clamp-2 leading-relaxed font-medium">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-[10px] font-black text-red-500/70 border border-red-500/20 px-2 py-0.5 rounded uppercase tracking-tighter">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-[200px] sm:w-[350px] flex-shrink-0 flex flex-col justify-center items-center text-center p-12 glass-card border-dashed opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-red-500 animate-spin-slow" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">Next Big Thing</h3>
              <p className="text-gray-500 text-xs sm:text-sm font-medium tracking-tight">Currently working on something amazing...</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
