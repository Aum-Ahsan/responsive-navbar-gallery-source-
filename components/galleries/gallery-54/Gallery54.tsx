"use client";
import React, { useRef, useState } from 'react';

export default function Gallery54() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showLoupe, setShowLoupe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const imgSrc = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b";

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate relative mouse position (percentage)
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <div className="w-full h-[700px] md:h-[900px] bg-white flex items-center justify-center font-sans overflow-hidden border-y border-black/10">
      
      <div className="text-center absolute top-12 z-0">
        <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">The Loupe</h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Hover to magnify details</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl aspect-video bg-gray-100 rounded-3xl shadow-2xl cursor-none z-10"
        onMouseEnter={() => setShowLoupe(true)}
        onMouseLeave={() => setShowLoupe(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Base Image */}
        <img src={imgSrc} alt="Mountain" className="w-full h-full object-cover rounded-3xl" />

        {/* The Loupe (Magnifying Glass) */}
        {showLoupe && (
          <div 
            className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-none z-20 overflow-hidden"
            style={{
              // Position the loupe centered on the cursor
              top: `calc(${position.y}% - 5rem)`, 
              left: `calc(${position.x}% - 5rem)`, // Note: responsive adjustment might be needed for md (8rem), but inline style calc is easiest using %
              // Background shows zoomed image shifted to match mouse
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: '250%', // Zoom level
              backgroundPosition: `${position.x}% ${position.y}%`
            }}
          >
            {/* Inner shadow/glare for realism */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] bg-gradient-to-tr from-transparent via-white/10 to-white/40"></div>
          </div>
        )}

        {/* Dynamic inline styles to handle responsive loupe offset cleanly */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 768px) {
            .absolute.w-40 {
              top: calc(${position.y}% - 8rem) !important;
              left: calc(${position.x}% - 8rem) !important;
            }
          }
        `}} />
      </div>

    </div>
  );
}
