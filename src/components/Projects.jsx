import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Rocket, Eye, ExternalLink, Star, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const x = useSpring(xRaw, { stiffness: 50, damping: 20, restDelta: 0.001 });

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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-2xl bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass-card overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className={`h-64 md:h-auto bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center p-12`}>
                  <Rocket className="w-32 h-32 text-white/20 animate-pulse" />
                </div>
                <div className="p-8 md:p-12 space-y-6">
                  <h3 className="text-4xl font-black font-display uppercase">{selectedProject.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{selectedProject.description}</p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-xl font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-500 uppercase">{key}</div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-primary flex items-center justify-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Visit Live Site
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section ref={targetRef} id="projects" className="relative h-[300vh] bg-[#0a0a0f]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute top-24 left-0 right-0 text-center px-4">
            <h2 className="text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tighter">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative w-[350px] md:w-[500px] flex-shrink-0"
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-card overflow-hidden cursor-pointer h-full">
                  <div className={`h-48 md:h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                      <Rocket className="w-20 h-20 text-white/20" />
                    </div>
                    <div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Eye className="w-4 h-4" /> View Details
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-black font-display uppercase group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                          #{tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs font-bold text-red-500/50 uppercase tracking-widest">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-[300px] flex-shrink-0 flex flex-col justify-center items-center text-center p-12 glass-card border-dashed">
              <Star className="w-12 h-12 text-red-500 mb-4 animate-pulse" />
              <h3 className="text-2xl font-black uppercase mb-2">More Coming Soon</h3>
              <p className="text-gray-500 text-sm italic">Always building, always learning</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
