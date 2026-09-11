"use client";
import React from 'react';
import { Target, Zap, Rocket, Award } from 'lucide-react';

export default function Process03() {
  const steps = [
    { icon: Target, title: 'Strategic Planning', desc: 'Mapping out the terrain and defining exact milestones.' },
    { icon: Zap, title: 'Rapid Prototyping', desc: 'Building fast, testing early, and iterating dynamically.' },
    { icon: Rocket, title: 'Global Deployment', desc: 'Pushing to edge networks for maximum performance.' },
    { icon: Award, title: 'Market Dominance', desc: 'Achieving industry leadership and capturing audience.' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">The Zig-Zag Journey</h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-100 via-pink-200 to-purple-100 -translate-x-1/2 hidden md:block rounded-full"></div>
        
        <div className="space-y-6 sm:space-y-8 lg:space-y-12 md:space-y-0">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;
            
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 w-full p-6">
                  <div className={`bg-white p-8 rounded-3xl shadow-xl border border-purple-50 transition-transform duration-500 hover:-translate-y-2 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-6 shadow-lg transform -rotate-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-purple-500 items-center justify-center text-white font-bold shadow-md z-10">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
