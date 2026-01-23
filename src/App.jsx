import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Menu, X, Code2, Database, Cloud, Smartphone, Mail, Github, Linkedin, ExternalLink, Download, ChevronRight, Star, Award, Briefcase, GraduationCap, Terminal, Layers, Zap, Globe, Server, Cpu, ArrowLeft, Phone, MapPin, Calendar, Rocket, Eye } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// CV/Resume Page Component
const CVResumePage = ({ onBack, profileImage }) => {
  const [activeTab, setActiveTab] = useState('preview');

  const cvData = {
    personalInfo: {
      name: "Mudassir Safi",
      title: "Full Stack Developer",
      location: "Islamabad, Pakistan",
      email: "muhammedmudassir40@gmail.com",
      phone: "+92 320 9820283",
      website: "www.mudassir-safi.com",
      linkedin: "linkedin.com/in/muhammad-mudassir-843964272",
      github: "github.com/MudassirSafi",
      image: profileImage
    },
    summary: "Passionate Full Stack Developer with 1+ years of experience building scalable web applications. Expertise in MERN Stack, React, Node.js, and cloud technologies. Successfully delivered 50+ projects with a 5.0 rating on Fiverr.",
    experience: [
      {
        title: "Full Stack Developer",
        company: "Quant Aeonix",
        period: "Jan 2026 - Present",
        achievements: [
          "Developing and maintaining full-stack web applications",
          "Optimizing frontend performance and backend scalability",
          "Collaborating with cross-functional teams"
        ]
      },
      {
        title: "MERN Stack Developer",
        company: "Devrolin",
        period: "Jun 2025 - Dec 2025",
        achievements: [
          "Built robust web solutions using MongoDB, Express, React, and Node.js",
          "Implemented real-time features and secure authentication",
          "6 months of intensive full-stack development"
        ]
      }
    ],
    skills: {
      frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      backend: ["Node.js", "Express.js", "Python", "REST APIs"],
      database: ["MongoDB", "PostgreSQL", "Firebase"],
      cloud: ["AWS", "Docker", "CI/CD", "Vercel"]
    }
  };

  const handleDownload = () => {
    alert('Resume download started! Make sure you have a PDF file at /public/Mudassir_Safi_Resume.pdf');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all">
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </button>
            <div className="flex gap-4">
              <button onClick={() => setActiveTab('preview')} className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'preview' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'backdrop-blur-md bg-white/10 hover:bg-white/20'}`}>
                Preview
              </button>
              <button onClick={() => setActiveTab('download')} className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'download' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'backdrop-blur-md bg-white/10 hover:bg-white/20'}`}>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 px-4 pb-12">
        {activeTab === 'preview' ? (
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-12">
                <div className="flex items-start gap-8">
                  <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden flex-shrink-0 bg-white/10">
                    <img
                      src={cvData.personalInfo.image}
                      alt={cvData.personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-bold">MS</div>';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-5xl font-bold mb-2">{cvData.personalInfo.name}</h1>
                    <p className="text-2xl text-purple-100 mb-6">{cvData.personalInfo.title}</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2"><Mail className="w-4 h-4" />{cvData.personalInfo.email}</div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4" />{cvData.personalInfo.phone}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{cvData.personalInfo.location}</div>
                      <div className="flex items-center gap-2"><Globe className="w-4 h-4" />{cvData.personalInfo.website}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Summary</h2>
                  <p className="text-gray-300 leading-relaxed">{cvData.summary}</p>
                </section>
                <section>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                    <Code2 className="w-8 h-8" />Technical Skills
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(cvData.skills).map(([category, skills]) => (
                      <div key={category} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-purple-300 mb-3 capitalize">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 text-sm backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-full">{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8">
                <Download className="w-16 h-16" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Download My Resume</h2>
              <p className="text-xl text-gray-300 mb-8">Get a PDF copy of my complete resume with all details.</p>
              <button onClick={handleDownload} className="px-12 py-4 btn-primary rounded-xl font-semibold text-lg flex items-center gap-3 mx-auto">
                <Download className="w-6 h-6" />Download Resume (PDF)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 3D Scene Component using Three.js
const ThreeScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    let scene, camera, renderer, geometry, material, cube, particles;
    let animationId;

    const init = () => {
      try {
        // Scene setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: false,           // ← Change this
          antialias: true,
          preserveDrawingBuffer: true
        });
        renderer.setClearColor(0x000000, 0); // Black background (matches your theme)

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.position.z = 5;

        // Main rotating cube
        geometry = new THREE.BoxGeometry(2, 2, 2);
        material = new THREE.MeshPhongMaterial({
          color: 0x8b5cf6,
          shininess: 100,
          wireframe: false,
          emissive: 0x8b5cf6,
          emissiveIntensity: 0.2
        });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Wireframe overlay
        const wireframeGeo = new THREE.EdgesGeometry(geometry);
        const wireframeMat = new THREE.LineBasicMaterial({ color: 0xec4899, linewidth: 2 });
        const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
        cube.add(wireframe);

        // Particle field
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.02,
          color: 0x8b5cf6,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending
        });

        particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Lights
        const pointLight = new THREE.PointLight(0x8b5cf6, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        sceneRef.current = { scene, camera, renderer, cube, particles };
      } catch (error) {
        console.error('Three.js initialization error:', error);
        setHasError(true);
      }
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (sceneRef.current) {
        const { cube, particles, renderer, scene, camera } = sceneRef.current;

        // Rotate based on mouse position
        cube.rotation.x += 0.005 + mousePosition.y * 0.001;
        cube.rotation.y += 0.005 + mousePosition.x * 0.001;

        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;

        renderer.render(scene, camera);
      }
    };

    const handleResize = () => {
      if (sceneRef.current) {
        const { camera, renderer } = sceneRef.current;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    if (canvasRef.current) {
      init();
      animate();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);

      if (sceneRef.current && sceneRef.current.renderer) {
        const renderer = sceneRef.current.renderer;
        const canvas = renderer.domElement;

        // Dispose everything properly
        renderer.dispose();
        renderer.forceContextLoss(); // Force release WebGL context

        // Critical: Fully clear and reset the canvas
        if (canvas) {
          canvas.width = canvas.width;   // Reset canvas drawing buffer
          canvas.height = canvas.height;

          // Optional: Remove any lingering context
          const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
          if (gl) {
            gl.getExtension('WEBGL_lose_context')?.loseContext();
          }
        }
      }

      // Clear ref
      sceneRef.current = null;
    };
  }, [mousePosition]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1
    });
  };

  if (hasError) {
    return (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse opacity-20" />
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 w-full h-full"
    />
  );
};

// Floating Card Component with 3D Tilt
const FloatingCard = ({ children, className = "", delay = 0 }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 20;
    const tiltY = (centerX - x) / 20;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transform transition-all duration-300 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(20px)`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// Custom Loader Component
const Loader = ({ image }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]">
      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-32 mb-8">
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full border-4 border-red-500/20 animate-ping" />
          <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-pulse" />

          {/* Profile Image */}
          <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/10 bg-gray-900">
            <img
              src={image}
              alt="Loading..."
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-xl font-bold text-white">MS</div>';
              }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl font-bold tracking-widest text-white font-display uppercase">
            MUDASSIR <span className="text-red-500">SAFI</span>
          </div>
          <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-blue-500 animate-load" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PremiumPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCVPage, setShowCVPage] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Your personal image path - UPDATE THIS
  const profileImage = "/mudassir-safi.png";
  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (currentPage === 'home') {
        const sections = ['hero', 'about', 'tech-stack', 'projects', 'experience', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToSection = (id) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const techStack = {
    frontend: [
      { name: 'React', icon: <Code2 />, color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', icon: <Layers />, color: 'from-gray-700 to-black' },
      { name: 'TypeScript', icon: <Terminal />, color: 'from-blue-400 to-blue-600' },
      { name: 'Tailwind CSS', icon: <Zap />, color: 'from-teal-400 to-cyan-500' }
    ],
    backend: [
      { name: 'Node.js', icon: <Server />, color: 'from-green-500 to-green-700' },
      { name: 'Python', icon: <Code2 />, color: 'from-yellow-400 to-blue-500' },
      { name: 'MongoDB', icon: <Database />, color: 'from-green-400 to-green-600' },
      { name: 'PostgreSQL', icon: <Database />, color: 'from-blue-500 to-indigo-600' }
    ],
    cloud: [
      { name: 'AWS', icon: <Cloud />, color: 'from-orange-400 to-orange-600' },
      { name: 'Docker', icon: <Cpu />, color: 'from-blue-400 to-blue-600' },
      { name: 'Kubernetes', icon: <Globe />, color: 'from-blue-500 to-purple-600' },
      { name: 'CI/CD', icon: <Zap />, color: 'from-purple-400 to-pink-500' }
    ]
  };

  const projects = [
    {
      title: "SME Dashboard",
      description: "Comprehensive business management dashboard for SMEs with real-time analytics, inventory tracking, and financial reporting.",
      tech: ["React", "Express", "MongoDB", "Chart.js"],
      gradient: "from-blue-600 to-blue-400",
      stats: { users: "1.2K+", uptime: "99.9%", status: "Live" }
    },
    {
      title: "2Wolf E-commerce",
      description: "Premium e-commerce platform with seamless shopping experience, secure payments, and dynamic product management.",
      tech: ["Next.js", "Tailwind CSS", "Stripe", "Node.js"],
      gradient: "from-red-600 to-red-400",
      stats: { sales: "5K+", rating: "4.9/5", speed: "98/100" }
    },
    {
      title: "Panorama Group",
      description: "Corporate website for Panorama Group of Companies, featuring a sleek modern design and multi-sector information architecture.",
      tech: ["React", "Framer Motion", "Styled Components"],
      gradient: "from-gray-800 to-gray-600",
      stats: { sectors: "8+", views: "10K+", design: "Premium" }
    },
    {
      title: "BudVizion Streamer",
      description: "Worked on BudVizion Streamer web application, optimizing streaming performance and implementing real-time viewer interactions.",
      tech: ["React", "WebRTC", "Socket.io", "AWS"],
      gradient: "from-green-600 to-emerald-400",
      stats: { viewers: "50K+", latency: "<100ms", platform: "Web" }
    }
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Quant Aeonix",
      period: "01 Jan 2026 - Present",
      description: "Leading the development of full-stack solutions and optimizing application performance.",
      achievements: ["Architecting scalable systems", "Implementing complex frontend features", "Collaborating on product strategy"],
      icon: <Briefcase />
    },
    {
      title: "MERN Stack Developer",
      company: "Devrolin",
      period: "Jun 2025 - Dec 2025",
      description: "Specialized in building end-to-end web applications using the MERN stack.",
      achievements: ["Developed real-time dashboards", "Integrated 3rd party APIs", "Ensured high code quality"],
      icon: <Code2 />
    }
  ];

  const achievements = [
    { icon: <Award />, label: "Projects", value: "50+", color: "purple" },
    { icon: <Star />, label: "Client Rating", value: "5.0", color: "pink" },
    { icon: <Briefcase />, label: "Years Exp.", value: "6+", color: "cyan" },
    { icon: <Globe />, label: "Countries", value: "15+", color: "green" }
  ];

  // If CV page is shown, render it
  if (showCVPage) {
    return <CVResumePage onBack={() => setShowCVPage(false)} profileImage={profileImage} />;
  }

  const [selectedProject, setSelectedProject] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-red-500/30">
      {/* Custom Loader */}
      {!isLoaded && <Loader image={profileImage} />}

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

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-purple-400/50">
                <img
                  src={profileImage}
                  alt="Mudassir Safi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl">MS</div>';
                  }}
                />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mudassir Safi
                </div>
                <div className="text-xs text-gray-400">Full Stack Developer</div>
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Tech Stack', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.toLowerCase().replace(' ', '-')
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setShowCVPage(true)}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-slate-950/95 border-t border-white/5">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Tech Stack', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  setShowCVPage(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold"
              >
                <Download className="w-4 h-4" />
                View Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm text-red-500 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
              <span className="text-white">SOFTWARE</span>
              <br />
              <span className="text-gradient">ENGINEER</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full Stack Developer specializing in building <span className="text-white font-medium">high-performance</span> digital experiences with modern technologies.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center gap-2 px-8 py-4"
              >
                Explore My Work
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center gap-2 px-8 py-4"
              >
                Let's Talk
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Spinning border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-500/30 animate-[spin_20s_linear_infinite]" />

              {/* Profile Wrapper */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white/5 shadow-2xl z-20 bg-gray-900">
                <img
                  src={profileImage}
                  alt="Mudassir Safi"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-red-500 to-blue-500 flex items-center justify-center text-7xl font-bold text-white">MS</div>';
                  }}
                />
              </div>

              {/* Animated Floating Tech Icons */}
              {[
                { Icon: Code2, color: 'text-blue-400', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', delay: '0s' },
                { Icon: Database, color: 'text-green-400', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', delay: '1s' },
                { Icon: Terminal, color: 'text-red-400', pos: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2', delay: '2s' },
                { Icon: Zap, color: 'text-yellow-400', pos: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2', delay: '3s' },
                { Icon: Globe, color: 'text-cyan-400', pos: 'top-12 right-12', delay: '1.5s' },
                { Icon: Cpu, color: 'text-purple-400', pos: 'bottom-12 left-12', delay: '2.5s' }
              ].map((tech, i) => (
                <div
                  key={i}
                  className={`absolute ${tech.pos} z-30 p-3 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl animate-float`}
                  style={{ animationDelay: tech.delay }}
                >
                  <tech.Icon className={`w-5 h-5 ${tech.color}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter">
            About <span className="text-gradient">Me</span>
          </h2>

          <FloatingCard>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-400 leading-relaxed">
                    I'm a dedicated <span className="text-white font-black underline decoration-red-500/50">Full Stack Developer</span> with a strong foundation in modern web technologies. My professional journey in software engineering began in 2025, and since then, I've been focused on building scalable, user-centric applications.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    I specialize in the <span className="text-white font-black underline decoration-blue-500/50">MERN Stack</span> and have successfully delivered multiple complex projects, ranging from business dashboards to high-performance e-commerce platforms. I thrive on solving technical challenges and staying ahead of the AI-driven development curve.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {['Problem Solver', 'MERN Expert', 'Quick Learner', 'Detail-Oriented'].map((tag) => (
                      <span key={tag} className="px-4 py-2 backdrop-blur-md bg-red-500/10 border border-red-500/20 rounded-full text-sm font-bold text-red-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Code Quality', value: 98 },
                    { label: 'Performance', value: 95 },
                    { label: 'UI/UX Design', value: 92 },
                    { label: 'Problem Solving', value: 96 }
                  ].map((skill, i) => (
                    <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        {skill.value}%
                      </div>
                      <div className="text-sm text-gray-400">{skill.label}</div>
                      <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter">
            Tech <span className="text-gradient">Stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
              <FloatingCard key={category} delay={categoryIndex * 100}>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                  <h3 className="text-2xl font-bold mb-6 capitalize">{category}</h3>
                  <div className="space-y-4">
                    {technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-4 p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} group-hover:scale-110 transition-transform`}>
                          {tech.icon}
                        </div>
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Horizontal Scroll */}
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
                    {/* View Details Overlay */}
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

            {/* End of Projects Card */}
            <div className="w-[300px] flex-shrink-0 flex flex-col justify-center items-center text-center p-12 glass-card border-dashed">
              <Star className="w-12 h-12 text-red-500 mb-4 animate-pulse" />
              <h3 className="text-2xl font-black uppercase mb-2">More Coming Soon</h3>
              <p className="text-gray-500 text-sm italic">Always building, always learning</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter">
            Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <FloatingCard key={index} delay={index * 100}>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex-shrink-0">
                      {exp.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <span className="px-4 py-1 backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300">
                          {exp.period}
                        </span>
                      </div>

                      <div className="text-lg text-purple-400 mb-3">{exp.company}</div>
                      <p className="text-gray-400 mb-4">{exp.description}</p>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
            Build <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'm available for freelance work and always excited to collaborate on innovative ideas.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a
              href="mailto:muhammedmudassir40@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://github.com/MudassirSafi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-mudassir-843964272/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <FloatingCard>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
              <h3 className="text-2xl font-bold mb-8">Quick Contact</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-6 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-6 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Project Budget (USD)"
                  className="w-full px-6 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                />
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none"
                />
                <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 backdrop-blur-md bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center font-black text-xl text-red-500 shadow-lg">
                  MS
                </div>
                <span className="font-bold text-xl tracking-tight">Mudassir Safi</span>
              </div>
              <p className="text-gray-400 text-sm">
                Full Stack Developer specialized in building modern web applications
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Web Development</div>
                <div>Mobile Apps</div>
                <div>API Development</div>
                <div>Cloud Architecture</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 pt-8 border-t border-white/5">
            <p>© 2026 Mudassir Safi. All rights reserved.</p>
            <p className="mt-2 text-sm italic text-gray-600 tracking-widest uppercase">Built with Passion & Modern Tech</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes load {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0); }
          100% { width: 100%; transform: translateX(100%); }
        }

        .animate-load {
          animation: load 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}