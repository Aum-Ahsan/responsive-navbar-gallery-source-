"use client";
import React, { useState } from 'react';

export default function Process40() {
  const [active, setActive] = useState(0);
  const steps = [
    { title: 'Setup', color: 'bg-rose-500' },
    { title: 'Configuration', color: 'bg-amber-500' },
    { title: 'Launch', color: 'bg-emerald-500' },
    { title: 'Scale', color: 'bg-blue-500' }
  ];

  return (
    <div className="w-full w-full p-4 sm:p-8 font-sans my-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Expandable Cards</h2>

      <div className="flex flex-col md:flex-row h-[600px] md:h-[260px] sm:h-[340px] lg:h-[400px] gap-4">
        {steps.map((step, idx) => {
          const isActive = active === idx;
          return (
            <div 
              key={idx}
              onClick={() => setActive(idx)}
              className={`${step.color} rounded-3xl p-6 cursor-pointer transition-all duration-700 ease-in-out relative overflow-hidden flex flex-col
                ${isActive ? 'md:flex-[3] flex-[3] shadow-2xl' : 'md:flex-[1] flex-[1] hover:bg-opacity-90'}
              `}
            >
              <div className={`flex items-center gap-4 ${isActive ? 'mb-6' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </div>
                {isActive && <h3 className="text-2xl font-bold text-white whitespace-nowrap animate-in fade-in duration-500">{step.title}</h3>}
              </div>

              {/* Vertical Title for inactive state (Desktop) */}
              {!isActive && (
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-white font-bold tracking-widest uppercase whitespace-nowrap">
                  {step.title}
                </div>
              )}
              
              {/* Horizontal Title for inactive state (Mobile) */}
              {!isActive && (
                <div className="md:hidden mt-2 text-white font-bold tracking-widest uppercase">
                  {step.title}
                </div>
              )}

              {isActive && (
                <div className="text-white/90 leading-relaxed mt-auto max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                  Detailed information about the {step.title} phase. When this card expands, it reveals the full context while the other cards collapse to save screen space.
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}
