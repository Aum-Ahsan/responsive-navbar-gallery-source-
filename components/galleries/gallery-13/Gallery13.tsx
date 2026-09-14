"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Gallery13() {
  const [active, setActive] = useState(0);

  const locations = [
    { id: 0, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', name: 'Norwegian Fjords', temp: '12°C', label: 'Nordic' },
    { id: 1, src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94', name: 'Kyoto Gardens', temp: '22°C', label: 'Asia' },
    { id: 2, src: 'https://images.unsplash.com/photo-1506744626753-1fa28f67c9bf', name: 'Alpine Meadows', temp: '15°C', label: 'Europe' },
  ];

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % locations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [locations.length]);

  return (
    <div className="w-full h-[600px] md:h-[700px] relative font-sans overflow-hidden rounded-[2rem] mx-auto max-w-[95%] my-12">
      
      {/* Background Images Crossfade */}
      {locations.map((loc, idx) => (
        <img 
          key={loc.id}
          src={loc.src} 
          alt={loc.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${active === idx ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="flex justify-between items-center text-white/80 uppercase tracking-widest text-xs font-bold">
          <span>Global Expeditions</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Live Updates
          </span>
        </div>

        {/* Main Title Area */}
        <div className="max-w-2xl">
          <div className="overflow-hidden mb-4">
            {locations.map((loc, idx) => (
              <div 
                key={loc.id}
                className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] absolute
                  ${active === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
              >
                <span className="px-3 py-1 border border-white/30 rounded-full text-white/80 text-xs tracking-wider uppercase mb-4 inline-block">
                  {loc.label}
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-2">
                  {loc.name}
                </h2>
                <p className="text-white/60 text-xl font-light">Current Climate: {loc.temp}</p>
              </div>
            ))}
          </div>
          
          {/* Spacer to maintain layout since absolute positioning is used above */}
          <div className="h-[200px]"></div>

          <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors mt-8">
            Book Destination <ArrowRight size={20} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center gap-4">
          {locations.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActive(idx)}
              className="flex items-center gap-2 group p-2"
            >
              <span className={`text-xs font-bold transition-colors ${active === idx ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                0{idx + 1}
              </span>
              <div className={`h-1 rounded-full transition-all duration-500 ${active === idx ? 'w-12 bg-white' : 'w-4 bg-white/30 group-hover:bg-white/50'}`}></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
