import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Eye, ExternalLink, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Kopo Pay",
      description: "A comprehensive banking web application modeled after Stripe, featuring secure payment processing, merchant dashboards, and real-time transaction monitoring. Built with enterprise-grade security and a focus on seamless financial operations.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
      gradient: "from-indigo-600 to-violet-500",
      stats: { status: "In Dev", security: "SSL/Encrypted", type: "FinTech" },
      link: "#",
      image: "/kopopay.png"
    },
    {
      title: "Quant-Aeonix",
      description: "A premium software company providing top-tier IT services and digital solutions. Specializing in scalable architectures, modern web technologies, and client-centric software development.",
      tech: ["React", "Node.js", "Cloud", "IT Services"],
      gradient: "from-blue-700 to-indigo-600",
      stats: { status: "Live", projects: "50+", rating: "5.0/5" },
      link: "https://quantaeonix.com",
      image: "/aeonix.png"
    },
    {
      title: "Medoryx",
      description: "Smart AI-based learning and doctor-patient consultancy platform. Features intelligent scheduling, real-time consultation, and AI-driven health insights.",
      tech: ["React", "AI", "Vector DB", "Embedding"],
      gradient: "from-emerald-600 to-teal-500",
      stats: { users: "Coming Soon", accuracy: "99%", status: "In Dev" },
      link: "#",
      image: "/medoryxproject.png"
    },
    {
      title: "Smart-echo",
      description: "Advanced Admin Panel for Smart Waste Management System. Streamlining urban waste collection through real-time monitoring and data-driven insights.",
      tech: ["React", "Admin Panel", "Dashboard", "SaaS"],
      gradient: "from-orange-600 to-red-500",
      stats: { status: "Placeholder", type: "Admin", field: "IoT/Waste" },
      link: "#",
      image: "/smartecho.png"
    },
    {
      title: "BudVizion",
      description: "A real-time streaming web application platform. Production-ready architecture for seamless live broadcasting and viewer engagement.",
      tech: ["React", "Node.js", "WebRTC", "SQL"],
      gradient: "from-purple-600 to-pink-500",
      stats: { uptime: "99.99%", latency: "<50ms", quality: "4K" },
      link: "https://budvizion.com/",
      image: "/BudVizion.png"
    },
    {
      title: "2Wolf E-commerce",
      description: "Premium e-commerce platform with seamless shopping experience, secure payments, and dynamic product management.",
      tech: ["Next.js", "Tailwind CSS", "Stripe", "Node.js"],
      gradient: "from-gray-900 to-gray-700",
      stats: { sales: "5K+", rating: "4.9/5", speed: "98/100" },
      image: "/2wolff.png"
    },
    {
      title: "SME Dashboard",
      description: "Comprehensive business dashboard for small and medium enterprises. Real-time analytics, financial tracking, and performance insights all in one place.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      gradient: "from-cyan-600 to-blue-500",
      stats: { modules: "12+", reports: "Real-time", status: "Live" },
      link: "#",
      image: "/SME dashboard.png"
    },
    {
      title: "Bizrolin",
      description: "Professional business solutions platform providing modern digital services. Clean architecture with scalable infrastructure and intuitive user interfaces.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express"],
      gradient: "from-amber-600 to-yellow-500",
      stats: { clients: "20+", uptime: "99.9%", status: "Live" },
      link: "#",
      image: "/bizrolin.png"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
                <div className={`h-48 sm:h-64 lg:h-auto bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center p-8 md:p-12 relative overflow-hidden`}>
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Rocket className="w-24 h-24 sm:w-32 sm:h-32 text-white/20 animate-pulse" />
                  )}
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
                    <a
                      href={selectedProject.link === "#" ? undefined : selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 btn-primary flex items-center justify-center gap-2 py-4 ${selectedProject.link === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
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

      <section id="projects" className="relative py-24 bg-[#0a0a0f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-8xl font-black font-display text-white uppercase tracking-tighter"
              style={{
                textShadow: '0 0 50px rgba(0,0,0,0.9), 0 0 20px rgba(255,59,48,0.3)'
              }}
            >
              Recent <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mt-4 text-sm sm:text-base font-black tracking-widest uppercase flex items-center justify-center gap-2"
            >
              Explore my latest <span className="text-red-500">creations</span>
            </motion.p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-12 z-30 pointer-events-none">
              <button
                onClick={prevProject}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white hover:bg-red-500 transition-all pointer-events-auto backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white hover:bg-red-500 transition-all pointer-events-auto backdrop-blur-md"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Slider Container */}
            <div className="overflow-visible px-4">
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="w-full max-w-4xl"
                    onClick={() => setSelectedProject(projects[currentIndex])}
                  >
                    <div className="group glass-card overflow-hidden cursor-pointer border-white/5 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,59,48,0.15)] h-full">
                      <div className={`h-48 sm:h-64 md:h-96 bg-gradient-to-br ${projects[currentIndex].gradient} relative overflow-hidden`}>
                        {projects[currentIndex].image ? (
                          <img
                            src={projects[currentIndex].image}
                            alt={projects[currentIndex].title}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Rocket className="w-16 h-16 sm:w-24 sm:h-24 text-white/10 group-hover:scale-125 transition-all" />
                          </div>
                        )}
                        <div className="absolute top-6 left-6">
                          <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-black text-white border border-white/10 uppercase tracking-widest">
                            {currentIndex + 1} / {projects.length}
                          </span>
                        </div>
                        <div className="absolute bottom-6 right-6">
                          <div className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase flex items-center gap-2 shadow-2xl">
                            <Eye className="w-4 h-4" /> View Details
                          </div>
                        </div>
                      </div>

                      <div className="p-6 sm:p-10 space-y-4">
                        <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight group-hover:text-red-500 transition-colors">
                          {projects[currentIndex].title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-lg line-clamp-2 leading-relaxed font-medium">
                          {projects[currentIndex].description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {projects[currentIndex].tech.map((tech, i) => (
                            <span key={i} className="text-[10px] md:text-xs font-black text-red-500/70 border border-red-500/20 px-2 py-0.5 rounded uppercase tracking-tighter">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-8 glass-card border-dashed opacity-50 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Star className="w-6 h-6 text-red-500 animate-spin-slow" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-black uppercase">Next Big Thing</h3>
                  <p className="text-gray-500 text-sm font-medium">Currently working on something amazing...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
