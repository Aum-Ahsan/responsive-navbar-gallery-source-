"use client";
import React, { useState } from 'react';

export default function Gallery03() {
  const [hovered, setHovered] = useState<number | null>(null);

  const panels = [
    { src: 'https://images.unsplash.com/photo-1542314831-c53cd4b85aca', title: 'Cyberpunk City', desc: 'Neon reflections in the rain.' },
    { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba', title: 'Stargazing', desc: 'Milky way over the mountains.' },
    { src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94', title: 'Ocean Deep', desc: 'Exploring the blue abyss.' },
    { src: 'https://images.unsplash.com/photo-1506744626753-1fa28f67c9bf', title: 'Lush Forest', desc: 'Morning mist in the woods.' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', title: 'Vast Desert', desc: 'Endless dunes at sunset.' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Hover Accordion</h2>
        <p className="text-slate-500">Smooth panel expansions on hover, creating an immersive interactive experience.</p>
      </div>

      <div className="flex flex-col md:flex-row h-[600px] md:h-[500px] gap-2 rounded-3xl overflow-hidden shadow-2xl bg-slate-900 p-2">
        {panels.map((panel, idx) => (
          <div 
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-1
              ${hovered === idx ? 'md:flex-[4] flex-[3]' : hovered !== null ? 'md:flex-[0.5] flex-[0.5]' : 'flex-1'}
            `}
          >
            <img 
              src={panel.src} 
              alt={panel.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
              style={{ transform: hovered === idx ? 'scale(1.05)' : 'scale(1)' }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500
              ${hovered === idx ? 'opacity-100' : 'opacity-60'}
            `}></div>
            
            <div className={`absolute bottom-8 left-8 right-8 text-white transition-all duration-500
              ${hovered === idx ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 md:opacity-0 opacity-100'}
            `}>
              {/* On mobile, titles might still be visible if they don't shrink too much, but on desktop we hide them until expanded */}
              <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap">{panel.title}</h3>
              <p className="mt-2 text-white/80 line-clamp-1">{panel.desc}</p>
            </div>

            {/* Vertical title when collapsed */}
            <div className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-white font-bold tracking-widest uppercase whitespace-nowrap transition-opacity duration-500
              ${hovered === idx ? 'opacity-0' : 'opacity-100'}
            `}>
              {panel.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
