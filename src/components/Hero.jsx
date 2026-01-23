import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code2, Database, Terminal, Zap, Globe, Cpu } from 'lucide-react';
import Typewriter from './Typewriter';

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter min-h-[1.2em]">
            <Typewriter 
              start={isLoaded}
              loop={true}
              phrases={[
                { text: "SOFTWARE", className: "text-white" },
                { text: " ENGINEER", className: "bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent" }
              ]}
            />
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
        </div >

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
      </div >
    </section >
  );
};

export default Hero;
