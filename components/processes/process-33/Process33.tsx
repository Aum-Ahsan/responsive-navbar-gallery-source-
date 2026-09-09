"use client";
import React, { useState } from 'react';

export default function Process33() {
  const [active, setActive] = useState(0);

  const steps = [
    { title: 'Inspire', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' },
    { title: 'Create', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80' },
    { title: 'Deliver', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto font-sans my-10 relative h-[600px] rounded-[3rem] overflow-hidden group shadow-2xl">
      {/* Background Images */}
      {steps.map((step, idx) => (
        <img 
          key={idx}
          src={step.img}
          alt={step.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${active === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
        <div>
          <h2 className="text-5xl font-black text-white mb-2">{steps[active].title}</h2>
          <p className="text-gray-300 max-w-sm">A highly visual journey where the imagery speaks louder than words.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${active === idx ? 'bg-white text-black' : 'text-white hover:bg-white/20'}`}
            >
              {idx + 1}. {step.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
