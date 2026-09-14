"use client";
import React from 'react';

export default function Gallery43() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
    { id: 7, src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2' },
    { id: 8, src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff' },
    { id: 9, src: 'https://images.unsplash.com/photo-1555448248-2571daf6344b' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-[#fdfaf6] font-sans relative overflow-hidden flex items-center justify-center">
      
      {/* Title Overlay */}
      <div className="absolute top-12 left-12 z-20">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Isometric<br/>Projection</h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Architectural Grid</p>
      </div>

      {/* Isometric Grid Container */}
      {/* Standard isometric transform: rotateX(60deg) rotateZ(-45deg) */}
      <div 
        className="grid grid-cols-3 gap-4 md:gap-8 w-[600px] md:w-[800px] scale-75 md:scale-100"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(60deg) rotateZ(-45deg)',
        }}
      >
        {images.map((img) => (
          <div 
            key={img.id}
            className="w-full aspect-square bg-gray-200 rounded-xl md:rounded-3xl shadow-[20px_20px_40px_rgba(0,0,0,0.2)] overflow-hidden cursor-pointer group hover:-translate-z-8 transition-transform duration-500 ease-out"
            style={{ transform: 'translateZ(0)' }}
          >
            {/* The image inside lifts up on hover */}
            <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-110">
              <img src={img.src} alt="" className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all" />
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/60 mix-blend-overlay"></div>
          </div>
        ))}
      </div>

    </div>
  );
}
