"use client";
import React from 'react';
import { MapPin } from 'lucide-react';

export default function Process50() {
  const waypoints = [
    { title: 'Origin', x: 10, y: 80, text: 'The journey begins' },
    { title: 'Checkpoint Alpha', x: 40, y: 40, text: 'First major milestone' },
    { title: 'The Narrows', x: 70, y: 60, text: 'Overcoming obstacles' },
    { title: 'Destination', x: 90, y: 20, text: 'Final goal achieved' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-1 font-sans my-10 bg-emerald-50 rounded-3xl overflow-hidden shadow-inner border-2 border-emerald-100">
      <div className="p-8 pb-0 text-center">
        <h2 className="text-3xl font-bold text-emerald-950">Interactive Map Process</h2>
        <p className="text-emerald-700/70">Navigate the waypoints.</p>
      </div>

      <div className="relative w-full h-[500px] mt-8">
        
        {/* Mock Map Background (Topographic lines) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, transparent 20%, #10b981 21%, transparent 22%), radial-gradient(circle at 70% 70%, transparent 30%, #10b981 31%, transparent 32%), radial-gradient(circle at 50% 50%, transparent 40%, #10b981 41%, transparent 42%)', backgroundSize: '100% 100%' }}></div>

        {/* Path SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-emerald-400 drop-shadow-md">
          <path 
            d="M 10% 80% Q 25% 40% 40% 40% T 70% 60% T 90% 20%" 
            fill="none" 
            strokeWidth="4" 
            strokeDasharray="8 8" 
          />
        </svg>

        {/* Waypoints */}
        {waypoints.map((wp, idx) => (
          <div 
            key={idx} 
            className="absolute flex flex-col items-center group cursor-pointer"
            style={{ left: `${wp.x}%`, top: `${wp.y}%`, transform: 'translate(-50%, -100%)' }}
          >
            <div className="relative animate-bounce">
              <MapPin size={40} className="text-emerald-600 drop-shadow-lg" fill="white" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-600">{idx + 1}</div>
            </div>
            
            <div className="mt-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-center min-w-[120px]">
              <h3 className="font-bold text-emerald-900 text-sm">{wp.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{wp.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
