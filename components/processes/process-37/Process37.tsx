"use client";
import React from 'react';

export default function Process37() {
  const steps = ['Plan', 'Design', 'Code', 'Ship'];

  return (
    <div className="w-full max-w-5xl mx-auto p-5 sm:p-8 lg:p-12 font-sans my-10 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Hover-Reveal Grid</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="relative h-64 bg-slate-100 rounded-3xl overflow-hidden group cursor-crosshair border border-slate-200">
            
            {/* Front Default State */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50 transition-all duration-500 group-hover:-translate-y-full">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-200 mb-2">0{idx+1}</span>
              <h3 className="text-2xl font-bold text-slate-800">{step}</h3>
            </div>

            {/* Hidden Reveal State */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-slate-900 text-white transition-all duration-500 translate-y-full group-hover:translate-y-0">
              <h4 className="text-xl font-bold mb-3">{step} Details</h4>
              <p className="text-sm text-slate-400 text-center">Detailed explanation of the {step} phase revealed only upon hovering.</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
