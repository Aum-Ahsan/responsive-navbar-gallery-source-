"use client";
import React from 'react';

export default function Gallery35() {
  return (
    <div className="w-full h-[600px] md:h-[800px] bg-black font-sans relative overflow-hidden group cursor-crosshair">
      
      {/* Background Image (Default state) */}
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" 
        alt="Mountain Day"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      
      {/* Text Context */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10 pointer-events-none">
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
          Reveal<br/>The Night
        </h2>
        <p className="text-white font-bold tracking-widest uppercase drop-shadow-md">Hover to illuminate</p>
      </div>

      {/* Reveal Image (Clipped) */}
      {/* We use a CSS circle clip path that expands on group-hover */}
      <div 
        className="absolute inset-0 z-20 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          clipPath: 'circle(0% at 50% 50%)',
        }}
        // In Tailwind, we can't easily dynamically change arbitrary clip path circles via standard classes on hover 
        // without plugins, so we use a style tag injection for the hover state.
      >
        <img 
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff" 
          alt="Night City"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .group:hover > div:nth-of-type(2) {
          clip-path: circle(150% at 50% 50%) !important;
        }
      `}} />

    </div>
  );
}
