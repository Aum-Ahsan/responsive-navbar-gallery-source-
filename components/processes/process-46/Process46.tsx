"use client";
import React from 'react';

export default function Process46() {
  const hexes = ['Discovery', 'Strategy', 'Design', 'Code', 'Test', 'Launch'];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-12 font-sans flex flex-col items-center my-10 overflow-hidden">
      <h2 className="text-3xl font-black text-amber-900 mb-8 sm:mb-12 lg:mb-16">Honeycomb Grid</h2>

      <div className="flex flex-wrap justify-center max-w-2xl gap-2 md:gap-4 relative">
        {hexes.map((hex, idx) => (
          <div 
            key={idx} 
            className={`w-32 h-36 relative group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-[45px]' : ''}`}
            style={{ 
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          >
            {/* Hexagon Background */}
            <div className="absolute inset-0 bg-amber-200 transition-colors duration-300 group-hover:bg-amber-500 flex flex-col items-center justify-center p-2 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-900/10 absolute top-2 left-2">0{idx+1}</span>
              <span className="font-bold text-amber-900 relative z-10">{hex}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
