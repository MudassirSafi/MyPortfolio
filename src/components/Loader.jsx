import React, { useState, useEffect } from 'react';

const Loader = ({ image }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30); // Slower increment for smoother animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#030305] via-[#0a0a0f] to-[#030305]">
      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <div className="relative w-40 h-40 mb-10">
          <div className="absolute inset-0 rounded-full border-4 border-red-500/20 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse" style={{ animationDuration: '1.5s' }} />
          
          {/* Profile Image Container */}
          <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
            <img 
              src={image} 
              alt="Loading..." 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-3xl font-black text-white bg-gradient-to-br from-red-500 to-blue-500">MS</div>';
              }}
            />
          </div>

          {/* Rotating Border */}
          <div className="absolute inset-0 rounded-full border-t-4 border-red-500 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        
        {/* Loading Text & Percentage */}
        <div className="flex flex-col items-center gap-6">
          <div className="text-5xl font-black tracking-tighter text-white font-display">
            {progress}%
          </div>
          <div className="text-sm font-bold tracking-[0.4em] text-gray-400 uppercase animate-pulse">
            Loading Portfolio
          </div>
          <div className="h-1 w-80 bg-white/5 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 transition-all duration-300 ease-out rounded-full shadow-lg" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
