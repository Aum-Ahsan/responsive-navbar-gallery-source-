"use client";
import React, { useRef, useState } from 'react';

export default function Gallery51() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
  ];

  return (
    <div className="w-full bg-[#0a0a0a] py-24 font-sans text-center overflow-hidden border-y border-white/10">
      
      <div className="mb-16">
        <h2 className="text-4xl font-black text-white mb-4">Spotlight Grid</h2>
        <p className="text-gray-500">Move your mouse over the cards to illuminate them.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((img) => (
          <SpotlightCard key={img.id} src={img.src} />
        ))}
      </div>

    </div>
  );
}

function SpotlightCard({ src }: { src: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={divRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/5 shadow-2xl cursor-crosshair group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      {/* Darkened Base Image */}
      <img 
        src={src} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale group-hover:scale-105 transition-transform duration-700" 
      />
      
      {/* Full Color Image Reveal Masked by Spotlight */}
      <div 
        className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`
        }}
      >
        <img 
          src={src} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover filter mix-blend-overlay"
        />
      </div>

      {/* Stronger Light Source Flare */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 mix-blend-screen"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.4), transparent 100%)`
        }}
      ></div>
    </div>
  );
}
