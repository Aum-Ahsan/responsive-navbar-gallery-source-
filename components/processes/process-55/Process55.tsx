"use client";
import React from 'react';

export default function Process55() {
  const steps = [
    { title: 'Discovery', desc: 'User finds our platform via organic search.', color: 'from-pink-400 to-rose-400', y: 'translate-y-0' },
    { title: 'Exploration', desc: 'Browsing features and pricing plans.', color: 'from-rose-400 to-orange-400', y: 'translate-y-12' },
    { title: 'Conversion', desc: 'Signing up for the free trial.', color: 'from-orange-400 to-amber-400', y: 'translate-y-4' },
    { title: 'Activation', desc: 'Completing the onboarding setup.', color: 'from-amber-400 to-emerald-400', y: 'translate-y-16' },
    { title: 'Retention', desc: 'Daily active usage established.', color: 'from-emerald-400 to-teal-400', y: 'translate-y-8' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-24 px-4 overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">User Journey Map</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Visualizing the path from first touchpoint to loyal customer.</p>
      </div>

      <div className="relative pb-24">
        {/* Wavy Background SVG Line */}
        <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none hidden md:block">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full stroke-gray-200 fill-none" strokeWidth="2" strokeDasharray="10 10">
            <path d="M0,50 C200,100 300,0 500,50 C700,100 800,0 1000,50" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className={`w-full md:w-56 group ${step.y} transition-transform duration-500 hover:-translate-y-2`}>
              <div className="relative">
                {/* Node */}
                <div className={`w-16 h-16 rounded-full mx-auto mb-6 shadow-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl ring-4 ring-white`}>
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 text-center relative hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow">
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r ${step.color} rounded-b-md`} />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
