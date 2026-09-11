"use client";
import React from 'react';

export default function Process44() {
  const steps = [
    { title: 'STRUCTURAL FRAME', specs: 'FIG-A.1', x: 20, y: 20 },
    { title: 'ELECTRICAL GRID', specs: 'FIG-B.4', x: 70, y: 30 },
    { title: 'PLUMBING MESH', specs: 'FIG-C.2', x: 30, y: 70 },
    { title: 'HVAC SYSTEM', specs: 'FIG-D.9', x: 80, y: 80 }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-1 font-mono my-10 bg-blue-900 p-8 rounded-xl relative overflow-hidden shadow-2xl border-4 border-blue-800">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Thicker Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[size:100px_100px]"></div>

      <div className="overflow-x-auto hide-scrollbar relative z-10">
        <div className="min-w-[600px] border-2 border-white/50 p-6 h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px]">
        
        {/* Title Block */}
        <div className="absolute bottom-6 right-6 border-2 border-white/50 bg-blue-900/80 p-4 backdrop-blur">
          <div className="text-white text-xl font-bold border-b-2 border-white/50 pb-2 mb-2">PROJECT: ARCHITECTURE</div>
          <div className="text-white/70 text-sm">SCALE: 1:100</div>
          <div className="text-white/70 text-sm">DATE: OCT 2026</div>
        </div>

        {/* Nodes */}
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="absolute flex flex-col items-center group cursor-crosshair"
            style={{ left: `${step.x}%`, top: `${step.y}%` }}
          >
            <div className="w-16 h-16 border-2 border-dashed border-white rounded-full flex items-center justify-center text-white relative group-hover:bg-white/20 transition-colors">
              <div className="w-8 h-8 border-2 border-white rounded-full"></div>
              {/* Reference lines */}
              <div className="absolute top-1/2 -right-12 w-12 h-px bg-white/50"></div>
              <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-white/50"></div>
            </div>
            <div className="mt-4 bg-blue-900 border border-white/30 px-3 py-1 text-white text-xs">
              <span className="font-bold">{step.title}</span> <br/>
              <span className="text-white/60">REF: {step.specs}</span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
