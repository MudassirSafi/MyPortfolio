import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Eye, ExternalLink, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "MedVoryx — Healthcare & Medical Education Platform",
      description: "Healthcare and medical education platform I founded and operate — combining doctor-patient consultation workflows with MDCAT/MBBS preparation. Built complete full-stack architecture from concept to production: React.js frontend, Node.js backend, MongoDB database, authentication system, and role-based access control for doctors, patients, and students. Implemented intelligent scheduling, appointment management, secure patient data handling, and comprehensive learning resources. Currently serving 800+ users.",
      tech: ["React", "Node.js", "MongoDB", "Authentication", "RBAC", "Healthcare", "Education"],
      gradient: "from-emerald-600 to-teal-500",
      stats: { users: "800+", role: "Founder · Full-Stack Engineer", status: "Live", type: "Healthcare + Education" },
      link: "https://medvoryx.com",
      image: "/medoryxproject.png"
    },
    {
      title: "Canadian Digital National Trust Bank",
      description: "Live Canadian FinTech banking platform for FluxtonX client CDNTBank. Users open insured-style accounts, deposit fiat and cryptocurrency, withdraw funds, and manage digital assets. Built the complete web application with banking UX, crypto engine, balance dashboards, and secure transaction flows.",
      tech: ["React.js", "Next.js", "Node.js", "FinTech", "Crypto Wallets", "Tailwind CSS"],
      gradient: "from-blue-950 to-blue-700",
      stats: { users: "100+", role: "Full-Stack Engineer", status: "Live", type: "FinTech / Banking" },
      link: "https://www.cdntbank.com/",
      image: "/cdntbank.png"
    },
    {
      title: "FlyRedi",
      description: "Aviation platform providing aircraft management and live flight tracking. Built the complete backend infrastructure including Node.js APIs, Firebase Authentication, Cloud Storage, and Firestore for the Flutter mobile client. Features real-time aviation data, document OCR, and payment gateway integrations.",
      tech: ["Node.js", "Firebase", "Firestore", "Real-time APIs", "Payment Gateways"],
      gradient: "from-sky-500 to-rose-600",
      stats: { role: "Backend Engineer", platform: "Mobile App", status: "In Dev", type: "Aviation" },
      link: "#",
      image: "/skyredi.png"
    },
    {
      title: "Spoken Odyssey",
      description: "AI-powered digital memory platform connected to smart recording glasses. Users register, capture photo/video memories through connected glasses, store them securely, and share with family members. Built complete web platform with user authentication, memory management, family sharing features, and Odyssey Store for purchasing glasses. Full-stack engineering on hardware-software integration.",
      tech: ["React", "Node.js", "AI Integration", "E-commerce", "Hardware Integration", "Memory Management"],
      gradient: "from-purple-600 to-pink-500",
      stats: { role: "Full-Stack Engineer", status: "Live", type: "AI + Hardware + Memory" },
      link: "https://spokenodyssey.com",
      image: "/odyssey.png"
    },
    {
      title: "AgncyPay",
      description: "Enterprise FinTech platform for smart CRM automation and high-volume digital asset operations. Official CRM for Mainboard — processing approximately $200M USDT in annual transaction volume on-platform. Full-stack web delivery: branded dashboards, instant transfers, balance and client workflows, secure auth, and automation pipelines.",
      tech: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "CRM Automation"],
      gradient: "from-[#282626] to-neutral-500",
      stats: { role: "Full Stack", partner: "Mainboard CRM", volume: "~$200M USDT/yr", status: "In Dev" },
      link: "#",
      image: "/agncypay.png"
    },
    {
      title: "BudVizion",
      description: "Production real-time streaming web application platform. Built the full-stack architecture for live broadcasting, viewer engagement, and low-latency delivery using WebRTC. Deployed and maintained at budvizion.com with active users.",
      tech: ["React", "Node.js", "WebRTC", "SQL", "Real-time Systems"],
      gradient: "from-purple-600 to-pink-500",
      stats: { status: "Live", type: "Streaming", uptime: "99.99%", latency: "<50ms" },
      link: "https://budvizion.com/",
      image: "/BudVizion.png"
    },
    {
      title: "Kopo Pay",
      description: "Comprehensive banking web application modeled after Stripe, featuring secure payment processing, merchant dashboards, and real-time transaction monitoring. Built with enterprise-grade security and a focus on seamless financial operations.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
      gradient: "from-indigo-600 to-violet-500",
      stats: { status: "In Dev", type: "FinTech", security: "SSL/Encrypted" },
      link: "#",
      image: "/kopopay.png"
    },
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
