"use client";
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Gallery28() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    { id: 1, top: '30%', left: '25%', title: 'The Starting Line', desc: 'Where the journey begins.', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, top: '65%', left: '45%', title: 'Midpoint Ridge', desc: 'A challenging incline.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, top: '40%', left: '75%', title: 'The Summit', desc: 'Breathtaking views at the top.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 font-sans">
      <div className="relative w-full h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
        
        {/* Main Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" 
          alt="Mountain Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Title */}
        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur px-6 py-3 rounded-full">
          <h2 className="font-bold text-gray-900 tracking-widest uppercase text-sm">Interactive Map</h2>
        </div>

        {/* Hotspots */}
        {hotspots.map((spot) => (
          <div 
            key={spot.id}
            className="absolute"
            style={{ top: spot.top, left: spot.left }}
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            {/* The Dot */}
            <div className="relative w-8 h-8 -ml-4 -mt-4 cursor-pointer">
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-50"></div>
              <div className="absolute inset-1 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Plus size={14} className={`transition-transform duration-300 ${activeHotspot === spot.id ? 'rotate-45' : ''}`} />
              </div>
            </div>

            {/* The Popover Card */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-2xl p-2 shadow-2xl transition-all duration-300 origin-top
                ${activeHotspot === spot.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
              `}
            >
              <div className="w-full h-32 rounded-xl overflow-hidden mb-3">
                <img src={spot.img} alt={spot.title} className="w-full h-full object-cover" />
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-bold text-gray-900 mb-1">{spot.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{spot.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
