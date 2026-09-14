"use client";
import React, { useRef, useState } from 'react';

const LoupeCard = ({ src }: { src: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showLoupe, setShowLoupe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((touch.clientX - left) / width) * 100;
    const y = ((touch.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square md:aspect-video bg-gray-100 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow cursor-none z-10 overflow-hidden"
      onMouseEnter={() => setShowLoupe(true)}
      onMouseLeave={() => setShowLoupe(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setShowLoupe(true)}
      onTouchEnd={() => setShowLoupe(false)}
      onTouchMove={handleTouchMove}
    >
      {/* Base Image */}
      <img src={src} alt="Gallery item" className="w-full h-full object-cover pointer-events-none" />

      {/* The Loupe (Magnifying Glass) */}
      {showLoupe && (
        <div 
          className="absolute w-32 h-32 md:w-56 md:h-56 rounded-full border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.4)] pointer-events-none z-20 overflow-hidden"
          style={{
            // Center the loupe on the cursor using standard transform
            top: `${position.y}%`, 
            left: `${position.x}%`,
            transform: 'translate(-50%, -50%)',
            // Background shows zoomed image shifted to match mouse
            backgroundImage: `url(${src})`,
            backgroundSize: '250%', // Zoom level
            backgroundPosition: `${position.x}% ${position.y}%`
          }}
        >
          {/* Inner shadow/glare for realism */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] bg-gradient-to-tr from-transparent via-white/10 to-white/40"></div>
        </div>
      )}
    </div>
  );
};

export default function Gallery54() {
  const images = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716"
  ];

  return (
    <div className="relative w-full h-auto bg-white flex flex-col items-center font-sans border-y border-black/10 py-12 md:py-24 px-4 md:px-8 gap-10 md:gap-16">
      
      <div className="text-center w-full shrink-0">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-2">The Loupe</h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Hover to magnify details</p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 shrink-0">
        {images.map((src, idx) => (
          <LoupeCard key={idx} src={src} />
        ))}
      </div>

    </div>
  );
}
