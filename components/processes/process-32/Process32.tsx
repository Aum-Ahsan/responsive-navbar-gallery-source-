"use client";
import React, { useState } from 'react';

export default function Process32() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'Connect Data', desc: 'Sync your data sources with one click.', bg: 'bg-indigo-500' },
    { title: 'Map Fields', desc: 'Drag and drop to map your custom fields.', bg: 'bg-purple-500' },
    { title: 'Deploy', desc: 'Push to production instantly.', bg: 'bg-emerald-500' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto font-sans bg-white border border-gray-200 rounded-[2rem] overflow-hidden my-10 shadow-sm flex flex-col md:flex-row h-auto md:h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px]">
      
      {/* Left Text Side */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-gray-50 border-r border-gray-200 overflow-y-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-8">Split-Screen Sync</h2>
        
        <div className="space-y-6">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-white shadow-lg border border-gray-100 scale-105' : 'hover:bg-gray-100'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className={`font-bold ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>{step.title}</h3>
                    {isActive && <p className="text-sm text-gray-500 mt-1 animate-in fade-in duration-300">{step.desc}</p>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right Visual Side */}
      <div className="w-full md:w-1/2 min-h-[200px] sm:h-[260px] lg:h-[300px] md:min-h-0 relative bg-zinc-900 flex items-center justify-center overflow-hidden">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${step.bg} ${activeStep === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
          >
            <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/20">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-white/50 font-black">0{idx + 1}</span>
            </div>
            <div className="mt-8 text-white font-bold text-xl uppercase tracking-widest">{step.title}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
