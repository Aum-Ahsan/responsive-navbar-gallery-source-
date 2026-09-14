"use client";
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Gallery25() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="w-full h-[600px] md:h-[800px] relative font-sans overflow-hidden bg-black">
      
      {/* LEFT SIDE */}
      <div 
        className="absolute inset-0 z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          clipPath: hoveredSide === 'left' 
            ? 'polygon(0 0, 70% 0, 40% 100%, 0% 100%)' // Expand left
            : hoveredSide === 'right'
              ? 'polygon(0 0, 30% 0, 0% 100%, 0% 100%)' // Shrink left
              : 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' // Default split
        }}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
          alt="Left feature"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${hoveredSide === 'left' ? 'opacity-20' : 'opacity-60'}`}></div>
        
        <div className={`absolute top-1/2 left-[10%] md:left-[15%] -translate-y-1/2 transition-all duration-700 ${hoveredSide === 'right' ? 'opacity-0 -translate-x-12' : 'opacity-100 translate-x-0'}`}>
          <span className="text-white/70 tracking-[0.2em] uppercase text-sm font-bold mb-4 block">Collection A</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Street<br/>Culture.</h2>
          <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:gap-4 transition-all">
            Explore <ArrowUpRight size={20} />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div 
        className="absolute inset-0 z-0"
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" 
          alt="Right feature"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${hoveredSide === 'right' ? 'opacity-20' : 'opacity-60'}`}></div>
        
        <div className={`absolute top-1/2 right-[10%] md:right-[15%] -translate-y-1/2 text-right transition-all duration-700 ${hoveredSide === 'left' ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'}`}>
          <span className="text-white/70 tracking-[0.2em] uppercase text-sm font-bold mb-4 block">Collection B</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Studio<br/>Sound.</h2>
          <button className="flex items-center justify-end gap-2 text-white font-bold uppercase tracking-widest hover:gap-4 transition-all w-full">
            Explore <ArrowUpRight size={20} />
          </button>
        </div>
      </div>

      {/* Center Divider Line (Optional) */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 border-l-[4px] border-white/20 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
           // Move the border to match the clip path boundary
           transform: hoveredSide === 'left' 
             ? 'translateX(55vw) skewX(-20deg)' // Approximation for visual effect
             : hoveredSide === 'right'
               ? 'translateX(15vw) skewX(-20deg)'
               : 'translateX(50vw) skewX(0deg)'
        }}
      ></div>

    </div>
  );
}
