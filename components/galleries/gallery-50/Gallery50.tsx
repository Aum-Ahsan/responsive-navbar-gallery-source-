"use client";
import React from 'react';

export default function Gallery50() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Cyber' },
    { id: 2, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Punk' },
  ];

  return (
    <div className="w-full bg-black py-24 font-sans text-white border-y border-white/10">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mix-blend-difference relative inline-block group cursor-crosshair">
          Glitch Reveal
          {/* Glitch text shadow effect on hover */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 text-red-500 mix-blend-screen -translate-x-1 pointer-events-none">Glitch Reveal</span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 text-cyan-500 mix-blend-screen translate-x-1 pointer-events-none">Glitch Reveal</span>
        </h2>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        {images.map((img) => (
          <div key={img.id} className="relative flex-1 aspect-[3/4] group cursor-pointer bg-gray-900 rounded-xl overflow-hidden">
            
            {/* Base Image */}
            <img src={img.src} alt="" className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            
            {/* Glitch Layers (RGB Split via mix-blend-mode and offset) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none mix-blend-screen overflow-hidden">
              <img src={img.src} alt="" className="absolute inset-0 w-full h-full object-cover filter sepia hue-rotate-[0deg] saturate-200 -translate-x-2 animate-[glitch_0.2s_linear_infinite]" />
            </div>
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none mix-blend-screen overflow-hidden">
              <img src={img.src} alt="" className="absolute inset-0 w-full h-full object-cover filter sepia hue-rotate-[180deg] saturate-200 translate-x-2 animate-[glitch_0.3s_linear_infinite_reverse]" />
            </div>

            {/* Title */}
            <div className="absolute bottom-6 left-6 mix-blend-difference pointer-events-none">
              <h3 className="text-4xl font-black uppercase tracking-widest">{img.title}</h3>
            </div>

          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glitch {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0, 0); }
        }
      `}} />

    </div>
  );
}
