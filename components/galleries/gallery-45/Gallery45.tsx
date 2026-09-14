"use client";
import React, { useState } from 'react';

export default function Gallery45() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const scraps = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', top: '15%', left: '15%', rot: '-5deg', size: 'w-64 h-80', z: 10 },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', top: '40%', left: '45%', rot: '8deg', size: 'w-72 h-64', z: 20 },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', top: '20%', left: '70%', rot: '12deg', size: 'w-56 h-72', z: 15 },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', top: '60%', left: '20%', rot: '-10deg', size: 'w-80 h-56', z: 25 },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', top: '55%', left: '75%', rot: '-3deg', size: 'w-64 h-64', z: 30 },
  ];

  return (
    <div className="w-full h-[800px] bg-[#dfd9c9] font-sans relative overflow-hidden flex items-center justify-center">
      
      {/* Background texture via SVG filter/patterns (simulated with CSS pattern) */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

      {/* Central Title */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-0 text-center pointer-events-none">
        <h2 className="text-6xl md:text-8xl font-black text-gray-800/20 uppercase tracking-tighter">Scrapbook</h2>
      </div>

      {/* Scattered Scraps */}
      {scraps.map((scrap, idx) => {
        const isHovered = hoveredIdx === idx;
        
        return (
          <div 
            key={idx}
            className={`absolute ${scrap.size} p-3 bg-white shadow-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${isHovered ? 'z-50 scale-110 shadow-2xl' : 'hover:z-40'}
            `}
            style={{
              top: scrap.top,
              left: scrap.left,
              transform: `translate(-50%, -50%) rotate(${isHovered ? '0deg' : scrap.rot})`,
              zIndex: isHovered ? 50 : scrap.z
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* The Image */}
            <div className="w-full h-full bg-gray-100 overflow-hidden relative">
              <img src={scrap.src} alt="" className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50" />
            </div>

            {/* Tape strips (simulated) */}
            <div className="absolute -top-3 -left-3 w-16 h-6 bg-white/50 backdrop-blur-sm shadow-sm rotate-45 border border-white/40"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-6 bg-white/50 backdrop-blur-sm shadow-sm rotate-45 border border-white/40"></div>
          </div>
        )
      })}
      
    </div>
  );
}
