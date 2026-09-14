"use client";
import React, { useState } from 'react';

export default function Gallery11() {
  const [activeIndex, setActiveIndex] = useState(2);

  const slides = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Street Style' },
    { id: 2, src: 'https://images.unsplash.com/photo-1552346154-21d32810baa3', title: 'Performance' },
    { id: 3, src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5', title: 'Urban Core' },
    { id: 4, src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a', title: 'Night Run' },
    { id: 5, src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2', title: 'Essentials' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 font-sans overflow-hidden bg-slate-50 rounded-3xl">
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">3D Coverflow</h2>
        <p className="text-slate-500">Interactive depth sorting for focused viewing.</p>
      </div>

      <div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center perspective-1000">
        {slides.map((slide, idx) => {
          // Calculate relative position to active index
          const diff = idx - activeIndex;
          
          // Determine styles based on position
          let zIndex = 10 - Math.abs(diff);
          let translateX = diff * 150; // pixels
          let translateZ = Math.abs(diff) * -100; // push back
          let rotateY = diff > 0 ? -15 : diff < 0 ? 15 : 0;
          let opacity = Math.abs(diff) > 2 ? 0 : 1 - (Math.abs(diff) * 0.3);
          
          // Adjust for mobile screens
          if (typeof window !== 'undefined' && window.innerWidth < 640) {
            translateX = diff * 80;
          }

          return (
            <div 
              key={slide.id}
              onClick={() => setActiveIndex(idx)}
              className="absolute top-1/2 left-1/2 w-64 sm:w-80 md:w-96 aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
                opacity: opacity,
                pointerEvents: Math.abs(diff) > 2 ? 'none' : 'auto'
              }}
            >
              <img 
                src={slide.src} 
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${diff === 0 ? 'opacity-0' : 'opacity-40'}`}></div>
              
              {/* Only show title on active slide */}
              <div className={`absolute bottom-8 left-0 w-full text-center transition-all duration-500 delay-200 ${diff === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="px-6 py-2 bg-white/90 backdrop-blur text-black font-bold rounded-full text-sm shadow-lg">
                  {slide.title}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-8 relative z-20">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-slate-900 w-8' : 'bg-slate-300 hover:bg-slate-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
