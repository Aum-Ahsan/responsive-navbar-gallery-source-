"use client";
import React from 'react';

export default function Gallery63() {
  const slides = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Chapter 01' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Chapter 02' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Chapter 03' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Chapter 04' },
  ];

  return (
    <div className="w-full bg-black font-sans relative">
      
      {/* Floating Instructions */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none mix-blend-difference">
        <h2 className="text-3xl font-bold text-white tracking-widest uppercase">Snap Scroll</h2>
        <p className="text-white/70 text-sm">Scroll horizontally</p>
      </div>

      {/* Snap Container */}
      <div 
        className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className="w-full shrink-0 h-[80vh] min-h-[600px] snap-center relative"
          >
            <img 
              src={slide.src} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="absolute bottom-24 left-12 md:left-24 z-10">
              <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">{slide.title}</h3>
            </div>
            
            {/* Scroll Indicator (Only show on first slide to guide user) */}
            {slide.id === 1 && (
              <div className="absolute bottom-24 right-12 md:right-24 z-10 animate-bounce">
                <span className="text-white text-4xl">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
