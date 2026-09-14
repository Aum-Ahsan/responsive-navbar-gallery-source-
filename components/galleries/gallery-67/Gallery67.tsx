"use client";
import React, { useRef, useState } from 'react';

export default function Gallery67() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const images = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1558655146-d09347e92766',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2',
    'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff',
  ];

  return (
    <div 
      ref={containerRef}
      className="w-full bg-[#050505] py-24 px-4 font-sans relative overflow-hidden cursor-crosshair border-y border-white/10"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: -1000, y: -1000 })} // hide spotlight
    >
      
      <div className="relative z-10 max-w-6xl mx-auto mb-16 text-center pointer-events-none">
        <h2 className="text-5xl font-black text-white/50 tracking-tighter mb-4">Global Spotlight</h2>
        <p className="text-white/30 text-lg">Move your mouse to illuminate the grid.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="w-full aspect-[4/5] bg-[#111] rounded-2xl overflow-hidden relative">
            <img 
              src={src} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-150 mix-blend-luminosity opacity-40"
            />
          </div>
        ))}
      </div>

      {/* The Spotlight Overlay */}
      {/* 
        We use a large div that covers the entire container, 
        and apply a radial gradient that creates a transparent "hole" at the mouse coordinates,
        with black surrounding it. But to make the images pop in full color, 
        we'll use mix-blend-mode magic or just a simple overlay gradient.
        Actually, let's render the full color images exactly underneath, 
        and the spotlight acts as a mask on top of the colorful grid!
      */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, transparent 0%, #050505 80%)`
        }}
      ></div>

      {/* Full color grid hidden under the black mask, revealed only where transparent */}
      <div className="absolute inset-0 pointer-events-none z-0 py-24 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto pt-32">
          {images.map((src, idx) => (
            <div key={idx} className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
