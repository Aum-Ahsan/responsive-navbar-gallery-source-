"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Gallery20() {
  const panels = [
    { title: 'The Architect', subtitle: 'Structure & Space', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', tint: 'bg-orange-900/40' },
    { title: 'The Designer', subtitle: 'Form & Function', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', tint: 'bg-emerald-900/40' },
    { title: 'The Artist', subtitle: 'Color & Light', src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2', tint: 'bg-indigo-900/40' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[700px] font-sans flex flex-col md:flex-row mx-auto max-w-[95%] my-12 rounded-[2rem] overflow-hidden shadow-2xl">
      {panels.map((panel, idx) => (
        <div 
          key={idx}
          className="relative flex-1 group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[2] overflow-hidden cursor-pointer"
        >
          {/* Background Image */}
          <img 
            src={panel.src} 
            alt={panel.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Color Tint & Overlays */}
          <div className={`absolute inset-0 ${panel.tint} mix-blend-multiply opacity-60 group-hover:opacity-30 transition-opacity duration-700`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          {/* Default Content (Visible when not hovered/expanded) */}
          <div className="absolute inset-x-0 bottom-12 flex flex-col items-center text-center px-4 transition-all duration-500 transform group-hover:translate-y-8 group-hover:opacity-0">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">{panel.title}</h3>
          </div>

          {/* Expanded Content (Visible only on hover) */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
            <span className="text-white/80 font-bold tracking-widest uppercase text-sm mb-2">{panel.subtitle}</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-none">{panel.title}</h3>
            <p className="text-white/80 line-clamp-3 md:line-clamp-none max-w-sm mb-8">
              Explore the intersection of {panel.subtitle.toLowerCase()} in our latest editorial feature. This triptych layout maximizes visual impact while providing deep interactive engagement.
            </p>
            <button className="flex items-center justify-center gap-2 w-12 h-12 bg-white rounded-full text-black hover:scale-110 transition-transform">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
