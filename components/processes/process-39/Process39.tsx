"use client";
import React from 'react';

export default function Process39() {
  const steps = [
    { id: 1, title: 'Step One' },
    { id: 2, title: 'Step Two' },
    { id: 3, title: 'Step Three' },
    { id: 4, title: 'Step Four' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans my-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 px-4">Mobile Swipe Journey</h2>
      <p className="px-4 text-gray-500 mb-8">Try scrolling horizontally below (Shift+Scroll or swipe).</p>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory px-4 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {steps.map((step) => (
          <div key={step.id} className="snap-center shrink-0 w-72 md:w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] p-10 flex flex-col justify-end relative shadow-2xl">
            <span className="absolute top-8 right-8 text-6xl font-black text-white/20">0{step.id}</span>
            <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-indigo-100">Swipe to navigate through the horizontal process pipeline.</p>
          </div>
        ))}
        {/* Spacer for last item */}
        <div className="shrink-0 w-4 md:w-8"></div>
      </div>
    </div>
  );
}
