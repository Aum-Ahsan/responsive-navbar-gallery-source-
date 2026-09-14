"use client";
import React from 'react';

export default function Gallery62() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Focus' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Clarity' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Vision' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Detail' },
  ];

  return (
    <div className="w-full bg-slate-900 py-32 font-sans px-4">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-4">Depth of Field</h2>
        <p className="text-gray-400">Hover over an image to pull it into sharp focus.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 group/board">
        {images.map((img) => (
          <div 
            key={img.id}
            className="relative aspect-video rounded-3xl overflow-hidden cursor-crosshair group/card bg-black"
          >
            {/* Image starts highly blurred. Group/board hover makes everything blur, but group/card hover overrides it to sharp. */}
            <img 
              src={img.src} 
              alt={img.title} 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out filter blur-md grayscale scale-110 opacity-60 group-hover/card:!blur-0 group-hover/card:!grayscale-0 group-hover/card:!scale-100 group-hover/card:!opacity-100"
            />
            
            {/* Title fades in when sharp */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
              <span className="text-white font-black text-4xl md:text-6xl uppercase tracking-[0.2em] mix-blend-overlay">
                {img.title}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
