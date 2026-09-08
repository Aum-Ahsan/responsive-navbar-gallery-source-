"use client";
import React from 'react';

export default function Process12() {
  const steps = [
    { title: 'Kickoff', align: 'left' },
    { title: 'Research', align: 'right' },
    { title: 'Design', align: 'left' },
    { title: 'Testing', align: 'right' },
    { title: 'Launch', align: 'left' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-12 font-sans overflow-hidden">
      <h2 className="text-4xl font-black text-pink-950 mb-16 text-center">S-Curve Pathway</h2>
      
      <div className="relative">
        {/* SVG S-Curve Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-full z-0 hidden md:block">
          <svg width="300" height="100%" preserveAspectRatio="none" className="overflow-visible stroke-pink-200">
            <path 
              d="M 150 0 C 300 100, 300 200, 150 300 C 0 400, 0 500, 150 600 C 300 700, 300 800, 150 900" 
              fill="transparent" 
              strokeWidth="6" 
              strokeDasharray="12 12" 
              className="animate-[dash_3s_linear_infinite]" 
            />
          </svg>
        </div>

        <div className="space-y-16 md:space-y-24 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center justify-center gap-8 ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(236,72,153,0.1)] border border-pink-50 w-72 text-center transform transition-transform hover:-translate-y-2">
                  <div className="text-sm font-bold text-pink-500 mb-1 uppercase tracking-widest">Stage {idx + 1}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <div className={`w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow-lg ${step.align === 'left' ? 'md:-ml-[15px]' : 'md:-mr-[15px]'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
