"use client";
import React, { useState, useRef } from 'react';
import { Move } from 'lucide-react';

export default function Gallery24() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', top: '40%', left: '45%', width: '300px', height: '400px' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', top: '50%', left: '20%', width: '400px', height: '250px' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', top: '30%', left: '65%', width: '250px', height: '350px' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', top: '70%', left: '30%', width: '350px', height: '350px' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', top: '60%', left: '75%', width: '200px', height: '200px' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: -600, y: -300 }); // initial offset to frame the layout nicely
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full h-[600px] md:h-[700px] relative font-sans overflow-hidden bg-[#e0e0e0] cursor-grab active:cursor-grabbing border-y border-black/10">
      
      {/* Floating UI overlay */}
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50">
          <h2 className="text-4xl font-black text-gray-900 mb-2">Infinite Canvas</h2>
          <p className="text-gray-600 font-bold flex items-center gap-2">
            <Move size={16} /> Click and drag to explore
          </p>
        </div>
      </div>

      {/* Draggable oversized canvas area */}
      <div 
        ref={containerRef}
        className="absolute w-[2500px] h-[1500px] transition-none"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Grid pattern background for texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        
        {images.map((img) => (
          <div 
            key={img.id}
            className="absolute p-3 bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)] transition-shadow duration-300 group"
            style={{ top: img.top, left: img.left, width: img.width, height: img.height }}
            onDragStart={(e) => e.preventDefault()} // Prevent native image drag
          >
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              <img 
                src={img.src} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
