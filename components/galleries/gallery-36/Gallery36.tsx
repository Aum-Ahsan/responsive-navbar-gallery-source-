"use client";
import React from 'react';

export default function Gallery36() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Scene 01' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Scene 02' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Scene 03' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Scene 04' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', title: 'Scene 05' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', title: 'Scene 06' },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] py-24 overflow-hidden font-sans">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">The Director's Cut</h2>
        <p className="text-gray-500 mt-4 tracking-widest uppercase text-sm">A Cinematic Timeline</p>
      </div>

      {/* Filmstrip Container */}
      <div className="w-full relative py-8 bg-black border-y-8 border-dashed border-[#1a1a1a]">
        
        {/* Sprocket holes using repeating linear gradients (Top and Bottom) */}
        <div className="absolute top-2 inset-x-0 h-4 opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 15px, #1a1a1a 15px, #1a1a1a 30px)' }}></div>
        <div className="absolute bottom-2 inset-x-0 h-4 opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 15px, #1a1a1a 15px, #1a1a1a 30px)' }}></div>

        {/* Scrollable Track */}
        <div className="flex gap-4 overflow-x-auto px-8 hide-scrollbar snap-x py-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="snap-center shrink-0 w-[80vw] sm:w-[400px] md:w-[500px] aspect-video relative group cursor-pointer"
            >
              {/* Film frame style */}
              <div className="w-full h-full bg-[#111] p-2 border border-[#333] shadow-2xl">
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 filter sepia-[0.3] group-hover:sepia-0"
                  />
                </div>
              </div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-4 left-6">
                <span className="text-white/80 font-mono text-xs tracking-[0.2em]">{img.title}</span>
              </div>
              
              {/* Timecode */}
              <div className="absolute top-4 right-6">
                <span className="text-red-500/80 font-mono text-xs tracking-widest bg-black/50 px-2 py-1 rounded">REC 00:0{idx+1}:23:04</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
