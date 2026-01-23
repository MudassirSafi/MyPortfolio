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
                return prev + 1;
            });
        }, 25); // ~2.5s total duration
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030305]">
            <div className="relative flex flex-col items-center">
                <div className="relative w-32 h-32 mb-8">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full border-4 border-red-500/10 animate-ping" />
                    <div className="absolute inset-0 rounded-full border-2 border-red-500/30 animate-pulse" />

                    {/* Profile Image */}
                    <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/5 bg-gray-900 shadow-2xl">
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

                {/* Loading Text & Percentage */}
                <div className="flex flex-col items-center gap-4">
                    <div className="text-3xl font-black tracking-tighter text-white font-display">
                        {progress}%
                    </div>
                    <div className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
                        Initializing Experience
                    </div>
                    <div className="h-0.5 w-64 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-red-600 to-blue-600 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
