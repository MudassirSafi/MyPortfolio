import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Menu, X, Code2, Database, Cloud, Smartphone, Mail, Github, Linkedin, ExternalLink, Download, ChevronRight, Star, Award, Briefcase, GraduationCap, Terminal, Layers, Zap, Globe, Server, Cpu, ArrowLeft, Phone, MapPin, Calendar } from 'lucide-react';
import * as THREE from 'three';

// CV/Resume Page Component
const CVResumePage = ({ onBack, profileImage }) => {
  const [activeTab, setActiveTab] = useState('preview');

  const cvData = {
    personalInfo: {
      name: "Mudassir Safi",
      title: "Junior Full Stack Developer",
      location: "Islamabad, Pakistan",
      email: "muhammedmudassir40@gmail.com",
      phone: "+92 320 9820283",
      website: "www.mudassir-safi.com",
      linkedin: "linkedin.com/in/mudassir-safi",
      github: "github.com/MudassirSafi",
      image: profileImage
    },
    summary: "Passionate Full Stack Developer with 1+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies. Successfully delivered 50+ projects with a 5.0 rating on Fiverr.",
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Unicorn Inc.",
        period: "Jan 2022 - Present",
        achievements: [
          "Led development of microservices architecture serving 1M+ active users",
          "Reduced API response time by 60% through optimization techniques",
          "Mentored team of 5 junior developers",
          "Implemented CI/CD pipeline reducing deployment time by 80%"
        ]
      }
    ],
    skills: {
      frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "Python", "GraphQL"],
      database: ["MongoDB", "PostgreSQL", "Redis"],
      cloud: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    }
  };

  const handleDownload = () => {
    alert('Resume download started! Make sure you have a PDF file at /public/Mudassir_Safi_Resume.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
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
              <button onClick={handleDownload} className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
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
        
        for(let i = 0; i < particlesCount * 3; i++) {
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

export default function PremiumPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCVPage, setShowCVPage] = useState(false);

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
      title: "Real-Time Trading Platform",
      description: "High-performance trading platform with WebSocket integration, real-time charts, and advanced analytics",
      tech: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
      gradient: "from-purple-500 via-pink-500 to-red-500",
      stats: { users: "50K+", uptime: "99.9%", speed: "<100ms" }
    },
    {
      title: "AI-Powered SaaS Platform",
      description: "Enterprise SaaS with AI chatbot, payment integration, multi-tenancy, and admin dashboard",
      tech: ["Next.js", "Python", "OpenAI", "Stripe", "AWS"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      stats: { clients: "200+", revenue: "$1M+", rating: "4.9/5" }
    },
    {
      title: "Mobile Banking Application",
      description: "Secure banking app with biometric auth, real-time transactions, and push notifications",
      tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      stats: { downloads: "100K+", active: "45K", secure: "Bank-grade" }
    },
    {
      title: "E-Commerce Marketplace",
      description: "Multi-vendor marketplace with payment gateway, inventory management, and analytics",
      tech: ["React", "Express", "PostgreSQL", "AWS S3"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      stats: { vendors: "500+", gmv: "$5M+", orders: "200K+" }
    }
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Unicorn Inc.",
      period: "2022 - Present",
      description: "Leading development of microservices architecture serving 1M+ users",
      achievements: ["Reduced API latency by 60%", "Led team of 5 developers", "Implemented CI/CD pipeline"],
      icon: <Briefcase />
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Built scalable web applications using React, Node.js, and cloud services",
      achievements: ["Developed 15+ production apps", "99.9% uptime maintained", "Mentored junior devs"],
      icon: <Code2 />
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description: "Worked on frontend and backend features for various client projects",
      achievements: ["Learned full-stack development", "Contributed to 20+ projects", "Received excellence award"],
      icon: <GraduationCap />
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden">
      {/* Loading Animation */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <div className="absolute inset-0 w-20 h-20 border-4 border-pink-500 border-t-transparent rounded-full animate-spin animation-delay-150" />
          </div>
        </div>
      )}

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
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.toLowerCase().replace(' ', '-')
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

      {/* Hero Section with 3D */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={<div />}>
            <ThreeScene />
          </Suspense>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-sm text-purple-300 animate-fade-in">
              ✨ Available for Freelance Projects
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl animate-fade-in-up animation-delay-200">
              Building high-performance, scalable applications with cutting-edge technologies. 
              Specialized in React, Node.js, and Cloud Architecture.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Hire Me
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 pt-8">
              {achievements.map((item, i) => (
                <FloatingCard key={i} delay={i * 100}>
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all">
                    <div className={`inline-block p-2 rounded-lg bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 mb-2`}>
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
  <div className="relative w-full h-[600px] flex items-center justify-center">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10" />
    
    {/* Pulsing outer ring */}
    <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse opacity-20" />
    
    {/* Spinning ring */}
    <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-spin-slow opacity-30" style={{ animationDuration: '20s' }} />
    
    {/* Your Actual Profile Picture - Circular */}
    <div className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
      <img
        src={profileImage}
        alt="Mudassir Safi"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = `
            <div class="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold text-white">
              MS
            </div>
          `;
        }}
      />
    </div>
  </div>
</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <FloatingCard>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a passionate Full Stack Developer with 6+ years of experience building scalable, 
                    high-performance applications. I specialize in modern JavaScript frameworks, cloud 
                    architecture, and creating seamless user experiences.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My expertise spans the entire development lifecycle—from architecting robust backend 
                    systems to crafting pixel-perfect frontend interfaces. I've successfully delivered 50+ 
                    projects for clients across 15 countries, maintaining a perfect 5.0 rating.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {['Problem Solver', 'Team Leader', 'Quick Learner', 'Detail-Oriented'].map((tag) => (
                      <span key={tag} className="px-4 py-2 backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300">
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
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tech Stack
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

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FloatingCard key={index} delay={index * 100}>
                <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors transform group-hover:scale-125 group-hover:rotate-12 duration-300" />
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-purple-400">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-purple-300 group-hover:bg-white/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'm available for freelance work and always excited to collaborate on innovative ideas.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a
              href="mailto:mudassir.safi@example.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
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
              href="https://linkedin.com"
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
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold">
                  MS
                </div>
                <span className="font-bold text-lg">Mudassir Safi</span>
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
          
          <div className="text-center text-gray-400 pt-8 border-t border-white/5">
            <p>© 2024 Mudassir Safi. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, Three.js & Tailwind CSS</p>
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
      `}</style>
    </div>
  );
}