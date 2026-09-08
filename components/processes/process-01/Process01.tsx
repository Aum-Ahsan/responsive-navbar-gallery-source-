"use client";
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Process01() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    { id: 1, title: 'Concept', desc: 'Define the core idea and goals.' },
    { id: 2, title: 'Design', desc: 'Create wireframes and visual language.' },
    { id: 3, title: 'Develop', desc: 'Write code and build the architecture.' },
    { id: 4, title: 'Launch', desc: 'Deploy to production and scale.' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Horizontal Step Timeline</h2>
        <p className="mt-4 text-gray-500">Click steps to advance progress horizontally</p>
      </div>

      <div className="relative flex justify-between items-center mb-8">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-in-out" 
            style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <button
              onClick={() => setActiveStep(step.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-all duration-300 ${
                activeStep >= step.id
                  ? 'bg-blue-600 border-white text-white shadow-lg scale-110'
                  : 'bg-white border-gray-200 text-gray-400 hover:border-blue-200'
              }`}
            >
              {activeStep > step.id ? <Check size={20} /> : step.id}
            </button>
            <div className={`mt-4 text-center transition-opacity duration-300 ${activeStep >= step.id ? 'opacity-100' : 'opacity-50'}`}>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-[120px]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
