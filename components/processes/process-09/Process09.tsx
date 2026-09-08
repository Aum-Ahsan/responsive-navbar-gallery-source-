"use client";
import React, { useState, useEffect } from 'react';

export default function Process09() {
  const [progress, setProgress] = useState(0);

  // Simulate progress loading for demo
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 25));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const stages = [
    { pct: 25, label: 'Drafting' },
    { pct: 50, label: 'Reviewing' },
    { pct: 75, label: 'Approving' },
    { pct: 100, label: 'Published' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-12 font-sans bg-gray-900 rounded-3xl text-white my-10">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Continuous Progress Bar</h2>
      
      <div className="relative pt-8 pb-12">
        {/* Background Bar */}
        <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
          {/* Active Fill */}
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 transition-all duration-1000 ease-out rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}></div>
          </div>
        </div>

        {/* Markers */}
        {stages.map((stage, idx) => (
          <div 
            key={idx} 
            className="absolute top-6 -translate-x-1/2 flex flex-col items-center transition-all duration-500"
            style={{ left: `${stage.pct}%` }}
          >
            <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center bg-gray-900 z-10 transition-colors duration-500 ${progress >= stage.pct ? 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'border-gray-700'}`}>
              {progress >= stage.pct && <div className="w-2 h-2 rounded-full bg-purple-400"></div>}
            </div>
            <span className={`mt-3 text-sm font-semibold ${progress >= stage.pct ? 'text-purple-300' : 'text-gray-500'}`}>{stage.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
