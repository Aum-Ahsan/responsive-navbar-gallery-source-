"use client";
import React, { useState } from 'react';

export default function Gallery47() {
  const [hoveredZone, setHoveredZone] = useState<number | null>(null);

  return (
    <div className="w-full h-[600px] md:h-[800px] font-sans relative overflow-hidden bg-black">
      
      {/* 
        We use clip-path to divide the screen into 3 zones:
        1: Top Polygon (0 0, 100% 0, 50% 50%)
        2: Bottom Left Polygon (0 0, 50% 50%, 0 100%, 50% 100%) -> actually let's do:
        Zone 1 (Top Left Triangle): 0 0, 100% 0, 0 100%
        Zone 2 (Bottom Right Triangle): 100% 100%, 0 100%, 100% 0
        Wait, we want 3 intersecting shapes. Let's do a Y split.
        Top: 0 0, 100% 0, 50% 60%
        Bottom Left: 0 0, 50% 60%, 50% 100%, 0 100%
        Bottom Right: 100% 0, 100% 100%, 50% 100%, 50% 60%
      */}

      {/* TOP ZONE */}
      <div 
        className="absolute inset-0 z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          clipPath: hoveredZone === 1 ? 'polygon(0 0, 100% 0, 50% 70%)' : hoveredZone ? 'polygon(0 0, 100% 0, 50% 50%)' : 'polygon(0 0, 100% 0, 50% 60%)'
        }}
        onMouseEnter={() => setHoveredZone(1)}
        onMouseLeave={() => setHoveredZone(null)}
      >
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${hoveredZone === 1 ? 'opacity-0' : 'opacity-50'}`}></div>
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-xl">The Sky</h2>
        </div>
      </div>

      {/* BOTTOM LEFT ZONE */}
      <div 
        className="absolute inset-0 z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          clipPath: hoveredZone === 2 ? 'polygon(0 0, 60% 55%, 60% 100%, 0 100%)' : hoveredZone ? 'polygon(0 0, 40% 65%, 40% 100%, 0 100%)' : 'polygon(0 0, 50% 60%, 50% 100%, 0 100%)'
        }}
        onMouseEnter={() => setHoveredZone(2)}
        onMouseLeave={() => setHoveredZone(null)}
      >
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${hoveredZone === 2 ? 'opacity-0' : 'opacity-50'}`}></div>
        <div className="absolute bottom-[20%] left-[20%] text-left pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-xl">The Earth</h2>
        </div>
      </div>

      {/* BOTTOM RIGHT ZONE */}
      <div 
        className="absolute inset-0 z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          clipPath: hoveredZone === 3 ? 'polygon(100% 0, 100% 100%, 40% 100%, 40% 55%)' : hoveredZone ? 'polygon(100% 0, 100% 100%, 60% 100%, 60% 65%)' : 'polygon(100% 0, 100% 100%, 50% 100%, 50% 60%)'
        }}
        onMouseEnter={() => setHoveredZone(3)}
        onMouseLeave={() => setHoveredZone(null)}
      >
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${hoveredZone === 3 ? 'opacity-0' : 'opacity-50'}`}></div>
        <div className="absolute bottom-[20%] right-[20%] text-right pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-xl">The Ocean</h2>
        </div>
      </div>

      {/* Divider Lines */}
      <div className="absolute inset-0 pointer-events-none z-20"
        style={{
          // Simple lines mimicking the default clip path borders
          background: `
            linear-gradient(to bottom right, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%) no-repeat 0 0 / 50% 60%,
            linear-gradient(to bottom left, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%) no-repeat 100% 0 / 50% 60%,
            linear-gradient(to bottom, white, white) no-repeat 50% 100% / 2px 40%
          `
        }}
      ></div>

    </div>
  );
}
