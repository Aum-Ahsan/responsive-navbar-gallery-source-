"use client";
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Gallery34() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { id: 1, title: 'Concept', src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', desc: 'The initial spark. Drafting the geometry and laying out the foundation of the design system.' },
    { id: 2, title: 'Development', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', desc: 'Translating concepts into code. Building robust, scalable architecture with modern frameworks.' },
    { id: 3, title: 'Refinement', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', desc: 'Iterating on user feedback. Smoothing out the rough edges and perfecting the micro-interactions.' },
    { id: 4, title: 'Launch', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', desc: 'Deploying the final product to the world. Monitoring analytics and scaling infrastructure.' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Sticky Image Side */}
        <div className="w-full md:w-1/2 relative">
          <div className="sticky top-32 w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            {sections.map((sec, idx) => (
              <img 
                key={sec.id}
                src={sec.src} 
                alt={sec.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
                  ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Scrollable Text Side */}
        <div className="w-full md:w-1/2 flex flex-col py-12 md:py-32 gap-32">
          {sections.map((sec, idx) => (
            <div 
              key={sec.id}
              className="flex flex-col justify-center min-h-[300px] cursor-pointer group"
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <span className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4">Phase 0{sec.id}</span>
              <h3 className={`text-4xl md:text-5xl font-black mb-6 transition-colors duration-300 ${activeIndex === idx ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {sec.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-8">
                {sec.desc}
              </p>
              <button className={`flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-all duration-300 ${activeIndex === idx ? 'text-blue-600 gap-4' : 'text-gray-400 opacity-0 group-hover:opacity-100'}`}>
                Explore Phase <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
