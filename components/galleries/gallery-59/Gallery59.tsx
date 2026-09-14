"use client";
import React from 'react';

export default function Gallery59() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
  ];

  // Triplicate for infinite scroll
  const reel = [...images, ...images, ...images];

  return (
    <div className="w-full h-[700px] md:h-[900px] bg-[#0f0f0f] flex font-sans overflow-hidden border-y border-white/10">
      
      {/* Text Info */}
      <div className="w-1/2 p-8 md:p-24 flex flex-col justify-center relative z-20">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
          Film<br/>Roll
        </h2>
        <p className="text-gray-500 font-bold tracking-widest uppercase text-sm">
          Continuous Vertical Projection
        </p>
      </div>

      {/* The Reel */}
      <div className="w-1/2 relative bg-black border-l-8 border-dashed border-[#1a1a1a]">
        
        {/* Sprocket holes (Left side) */}
        <div className="absolute left-2 inset-y-0 w-4 opacity-50 z-20" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 15px, #1a1a1a 15px, #1a1a1a 30px)' }}></div>
        {/* Sprocket holes (Right side) */}
        <div className="absolute right-2 inset-y-0 w-4 opacity-50 z-20" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 15px, #1a1a1a 15px, #1a1a1a 30px)' }}></div>

        {/* Fade masks */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="absolute inset-0 flex flex-col px-12 py-8 gap-8 animate-[scrollUp_30s_linear_infinite]">
          {reel.map((img, idx) => (
            <div key={idx} className="w-full aspect-[4/3] bg-[#111] border border-[#333] p-2 shrink-0 group">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={img.src} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
