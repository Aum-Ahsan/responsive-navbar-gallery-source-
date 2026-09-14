"use client";
import React, { useState } from 'react';

export default function Gallery64() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Q1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Q2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Q3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Q4' },
  ];

  // Determine grid template based on hovered index
  let gridCols = "1fr 1fr";
  let gridRows = "1fr 1fr";
  
  if (hoveredIdx === 0) { gridCols = "2fr 1fr"; gridRows = "2fr 1fr"; }
  if (hoveredIdx === 1) { gridCols = "1fr 2fr"; gridRows = "2fr 1fr"; }
  if (hoveredIdx === 2) { gridCols = "2fr 1fr"; gridRows = "1fr 2fr"; }
  if (hoveredIdx === 3) { gridCols = "1fr 2fr"; gridRows = "1fr 2fr"; }

  return (
    <div className="w-full bg-[#fafafa] py-24 px-4 font-sans border-y border-black/5">
      
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">Quadrant Expansion</h2>
        <p className="text-gray-500">Hover over any quadrant to dynamically shift the CSS Grid template tracks.</p>
      </div>

      <div 
        className="w-full max-w-5xl mx-auto aspect-square md:aspect-[16/10] grid gap-2 md:gap-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          gridTemplateColumns: gridCols,
          gridTemplateRows: gridRows
        }}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {images.map((img, idx) => (
          <div 
            key={img.id}
            className="w-full h-full relative rounded-2xl overflow-hidden cursor-crosshair shadow-md hover:shadow-2xl transition-shadow duration-300"
            onMouseEnter={() => setHoveredIdx(idx)}
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay that fades on hover */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${hoveredIdx === idx ? 'opacity-0' : 'opacity-100'}`}></div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
              <span className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter opacity-50">{img.title}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
