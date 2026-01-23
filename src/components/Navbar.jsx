import React from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = ({
  scrollToSection,
  activeSection,
  setShowCVPage,
  isMenuOpen,
  setIsMenuOpen,
  profileImage
}) => {
  return (
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
            <div className="text-left">
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

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white font-semibold"
            >
              <Download className="w-4 h-4" />
              View Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
