import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import CVResumePage from './components/CVResumePage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function PremiumPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCVPage, setShowCVPage] = useState(false);

  const profileImage = "/mudassir-safi.png";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (currentPage === 'home') {
        const sections = ['hero', 'about', 'tech-stack', 'projects', 'experience', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4;
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

  if (showCVPage) {
    return <CVResumePage onBack={() => setShowCVPage(false)} profileImage={profileImage} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-red-500/30">
      {!isLoaded && <Loader image={profileImage} />}

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <Navbar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        setShowCVPage={setShowCVPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        profileImage={profileImage}
      />

      <Hero scrollToSection={scrollToSection} profileImage={profileImage} isLoaded={isLoaded} />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact scrollToSection={scrollToSection} />
      <Footer profileImage={profileImage} />
    </div>
  );
}