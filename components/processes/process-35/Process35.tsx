"use client";
import React from 'react';
import { Sparkles, Cog, Rocket, Crown } from 'lucide-react';

export default function Process35() {
  const steps = [
    { icon: Sparkles, title: 'Ideate', color: 'text-amber-500', shadow: 'shadow-amber-500/30' },
    { icon: Cog, title: 'Build', color: 'text-zinc-500', shadow: 'shadow-zinc-500/30' },
    { icon: Rocket, title: 'Launch', color: 'text-sky-500', shadow: 'shadow-sky-500/30' },
    { icon: Crown, title: 'Succeed', color: 'text-purple-500', shadow: 'shadow-purple-500/30' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-5 sm:p-8 lg:p-12 font-sans my-10 bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-gray-100">
      <h2 className="text-3xl font-black text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16 uppercase tracking-wider">The Icon Journey</h2>

      <div className="flex flex-col md:flex-row justify-between items-center relative">
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 z-0 border-t-2 border-dashed border-gray-300"></div>

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center group mb-10 md:mb-0 cursor-pointer">
              <div className={`w-24 h-24 rounded-3xl bg-white border-2 border-gray-100 flex items-center justify-center mb-6 ${step.color} ${step.shadow} transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-transparent`}>
                <Icon size={40} className="transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
              <div className="mt-2 text-sm font-bold text-gray-400">Step 0{idx + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
