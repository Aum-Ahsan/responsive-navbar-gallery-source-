"use client";
import React, { useState } from 'react';

export default function Gallery56() {
  const [activeIndex, setActiveIndex] = useState(2);

  const panels = [
    { id: 1, title: 'Concept', src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, title: 'Design', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, title: 'Build', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { id: 4, title: 'Test', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 5, title: 'Launch', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-gray-950 p-4 md:p-12 font-sans flex flex-col justify-center border-y border-white/5">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-2">Flex Focus</h2>
        <p className="text-gray-400 text-sm tracking-widest uppercase">Select a panel to expand</p>
      </div>

      <div className="flex h-[400px] md:h-[500px] gap-2 md:gap-4 w-full max-w-7xl mx-auto">
        {panels.map((panel, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div 
              key={panel.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                ${isActive ? 'flex-[6] md:flex-[8] shadow-2xl ring-2 ring-white/20' : 'flex-1 shadow-md hover:flex-[2] opacity-60 hover:opacity-100'}
              `}
            >
              <img 
                src={panel.src} 
                alt={panel.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay for Text */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

              {/* Title Text */}
              <div className={`absolute bottom-8 left-8 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="text-white/70 font-mono tracking-widest text-xs uppercase mb-2 block">0{idx + 1}</span>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                  {panel.title}
                </h3>
              </div>

              {/* Vertical Text when collapsed */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <span className="text-white font-bold uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap drop-shadow-md hidden md:block">
                  {panel.title}
                </span>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}
