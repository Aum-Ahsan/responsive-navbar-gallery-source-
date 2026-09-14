"use client";
import React from 'react';

export default function Gallery08() {
  const bubbles = [
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6', classes: 'w-64 h-64 md:w-80 md:h-80 -mt-10 ml-0 md:ml-12 z-10' },
    { src: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5', classes: 'w-48 h-48 md:w-64 md:h-64 mt-12 -ml-16 md:-ml-24 z-20' },
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', classes: 'w-56 h-80 md:w-72 md:h-96 -mt-32 ml-4 md:ml-10 z-30' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', classes: 'w-40 h-40 md:w-56 md:h-56 mt-20 -ml-12 md:-ml-20 z-40' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans flex flex-col lg:flex-row items-center gap-16 lg:gap-8 overflow-hidden">
      
      {/* Text Content */}
      <div className="w-full lg:w-1/3 text-center lg:text-left relative z-50">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-6">
          Organic<br />Intersections.
        </h2>
        <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto lg:mx-0">
          A completely asymmetrical layout breaking away from rigid grids. Hover over the overlapping bubbles to bring them into focus.
        </p>
        <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
          Explore Collection
        </button>
      </div>

      {/* Bubble Gallery */}
      <div className="w-full lg:w-2/3 flex justify-center lg:justify-end items-center px-4 relative">
        <div className="flex flex-wrap justify-center items-center max-w-2xl relative">
          {bubbles.map((bubble, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-slate-900/10 cursor-pointer 
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                hover:z-50 hover:scale-110 hover:shadow-xl hover:shadow-slate-900/30
                ${bubble.classes}
              `}
            >
              <img 
                src={bubble.src} 
                alt={`Gallery image ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/20 hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
