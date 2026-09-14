"use client";
import React, { useState, useRef, useEffect } from 'react';

export default function Gallery17() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize mouse position between -1 and 1
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', col: 'col-span-12 md:col-span-8', row: 'row-span-2' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', col: 'col-span-6 md:col-span-4', row: 'row-span-1' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', col: 'col-span-6 md:col-span-4', row: 'row-span-1' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 font-sans">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Mouse Parallax Grid</h2>
        <p className="text-gray-500 mt-2">Move your mouse over the images to see the content shift dynamically.</p>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="grid grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[300px]"
      >
        {images.map((img, idx) => {
          // Different images move at slightly different intensities for depth
          const intensityX = (idx + 1) * 15; 
          const intensityY = (idx + 1) * 15;

          return (
            <div 
              key={img.id}
              className={`relative rounded-3xl overflow-hidden shadow-lg ${img.col} ${img.row}`}
            >
              {/* Inner wrapper moves opposite to mouse */}
              <div 
                className="absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${mousePos.x * -intensityX}px, ${mousePos.y * -intensityY}px)`
                }}
              >
                <img 
                  src={img.src} 
                  alt={`Parallax ${img.id}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
