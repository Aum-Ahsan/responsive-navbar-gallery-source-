"use client";
import React from 'react';

export default function Process36() {
  const steps = [
    { title: 'Discovery', text: 'We discover your brand\'s hidden potential.' },
    { title: 'Strategy', text: 'We map the strategy for ultimate growth.' },
    { title: 'Execution', text: 'We execute with precision and care.' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-12 font-sans bg-zinc-900 text-white rounded-3xl my-10 border border-zinc-800">
      <h2 className="text-3xl font-bold mb-12 text-center text-zinc-100">Number Counter</h2>

      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="group relative overflow-hidden bg-zinc-800/50 hover:bg-zinc-800 rounded-2xl p-8 flex items-center justify-between transition-colors cursor-pointer border border-zinc-700/50">
            {/* Massive Background Number */}
            <div className="absolute -left-4 -bottom-10 text-[150px] font-black text-zinc-700/20 group-hover:text-zinc-600/30 transition-colors pointer-events-none select-none z-0">
              0{idx + 1}
            </div>
            
            <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <span className="text-5xl font-black text-zinc-400 group-hover:text-white transition-colors">
                  {idx + 1}.
                </span>
                <h3 className="text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors">{step.title}</h3>
              </div>
              <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors md:text-right max-w-xs">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
