"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Process38() {
  const [slide, setSlide] = useState(0);
  const steps = [
    { title: 'Brainstorm', desc: 'Gather all ideas without filtering.' },
    { title: 'Filter', desc: 'Select the best ideas for execution.' },
    { title: 'Execute', desc: 'Put the ideas into motion.' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 font-sans my-10">
      <h2 className="text-3xl font-bold text-center text-teal-950 mb-8">Process Carousel</h2>

      <div className="relative bg-teal-50 rounded-[2rem] overflow-hidden shadow-lg border border-teal-100 aspect-square md:aspect-video flex items-center justify-center text-center p-4 sm:p-12">
        
        <button 
          onClick={() => setSlide(s => s === 0 ? steps.length - 1 : s - 1)}
          className="absolute left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md hover:scale-110 transition-transform z-10"
        >
          <ChevronLeft />
        </button>

        <div className="relative z-0 max-w-md px-4 sm:px-8 lg:px-12 sm:px-0">
          <div className="text-3xl sm:text-5xl lg:text-6xl sm:text-8xl font-black text-teal-100 absolute -top-8 sm:-top-16 left-1/2 -translate-x-1/2 -z-10 select-none">
            {slide + 1}
          </div>
          <h3 className="text-xl sm:text-3xl font-bold text-teal-900 mb-2 sm:mb-4">{steps[slide].title}</h3>
          <p className="text-teal-700 text-sm sm:text-lg">{steps[slide].desc}</p>
        </div>

        <button 
          onClick={() => setSlide(s => (s + 1) % steps.length)}
          className="absolute right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md hover:scale-110 transition-transform z-10"
        >
          <ChevronRight />
        </button>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {steps.map((_, idx) => (
            <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${slide === idx ? 'w-8 bg-teal-500' : 'w-2 bg-teal-200'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
