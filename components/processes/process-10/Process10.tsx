"use client";
import React from 'react';
import { RefreshCcw, Settings, Users, Database } from 'lucide-react';

export default function Process10() {
  const steps = [
    { icon: Users, label: 'User Input' },
    { icon: Database, label: 'Data Processing' },
    { icon: Settings, label: 'System Config' },
    { icon: RefreshCcw, label: 'Sync Output' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-12 font-sans flex flex-col items-center my-10">
      <h2 className="text-3xl font-extrabold text-violet-950 mb-16 text-center">Circular Ecosystem</h2>
      
      <div className="relative w-80 h-80 rounded-full border-[1px] border-dashed border-violet-300 flex items-center justify-center animate-[spin_40s_linear_infinite]">
        
        {/* Center core (counter-spins to stay upright) */}
        <div className="absolute w-32 h-32 bg-violet-600 rounded-full shadow-[0_0_40px_rgba(124,58,237,0.4)] flex items-center justify-center z-10 animate-[spin_40s_linear_infinite_reverse]">
          <div className="text-center text-white">
            <div className="font-black text-xl">CORE</div>
            <div className="text-xs text-violet-200">Engine</div>
          </div>
        </div>

        {/* Orbiting Items */}
        {steps.map((step, idx) => {
          const angle = (idx * 360) / steps.length;
          // Calculate positions (radius = 160px for a 320px diameter circle, but container is 320, so radius is 160)
          const rad = angle * (Math.PI / 180);
          const x = Math.sin(rad) * 160;
          const y = -Math.cos(rad) * 160;
          
          const Icon = step.icon;

          return (
            <div 
              key={idx}
              className="absolute flex flex-col items-center justify-center animate-[spin_40s_linear_infinite_reverse]"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                width: '100px',
                height: '100px'
              }}
            >
              <div className="w-16 h-16 bg-white border border-violet-100 rounded-2xl shadow-lg flex items-center justify-center text-violet-600 mb-2 hover:scale-110 hover:bg-violet-50 transition-transform cursor-pointer">
                <Icon size={28} />
              </div>
              <span className="text-xs font-bold text-violet-900 bg-white/80 backdrop-blur px-2 py-1 rounded-md">{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
