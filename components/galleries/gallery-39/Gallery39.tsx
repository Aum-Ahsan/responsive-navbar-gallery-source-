"use client";
import React from 'react';

export default function Gallery39() {
  const splits = [
    { id: 1, title: 'Left Brain', desc: 'Logic, structure, and analytics.', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 2, title: 'Right Brain', desc: 'Creativity, intuition, and art.', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] font-sans flex overflow-hidden">
      {splits.map((split, idx) => (
        <div 
          key={split.id}
          className="relative min-w-0 overflow-hidden flex-1 hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer border-r border-black/10 last:border-0"
        >
          <img 
            src={split.src} 
            alt={split.title}
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700"></div>

          {/* Compressed State Text (Vertical) */}
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="text-3xl font-black text-white uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap drop-shadow-md">
              {split.title}
            </h3>
          </div>

          {/* Expanded State Text (Bottom Left) */}
          <div className="absolute bottom-12 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 w-full px-12 text-left">
            <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
              {split.title}
            </h3>
            <p className="text-white/90 text-lg md:text-xl drop-shadow-md max-w-sm">
              {split.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
