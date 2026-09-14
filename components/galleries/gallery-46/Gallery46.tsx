"use client";
import React from 'react';

export default function Gallery46() {
  const items = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: '01. Kick' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: '02. Snare' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: '03. Hat' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: '04. Syntax' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', title: '05. Canvas' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', title: '06. Lens' },
  ];

  return (
    <div className="w-full bg-[#fafafa] py-32 overflow-hidden font-sans border-y border-black/5">
      
      <div className="px-8 md:px-16 mb-12">
        <h2 className="text-4xl font-black text-gray-900 mb-2">Horizontal Shift</h2>
        <p className="text-gray-500">Scroll horizontally. Hover to expand an image.</p>
      </div>

      <div className="flex gap-4 px-8 md:px-16 overflow-x-auto hide-scrollbar pb-12 pt-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {items.map((item) => (
          <div 
            key={item.id}
            className="group relative h-[400px] md:h-[500px] w-[200px] md:w-[250px] hover:w-[350px] md:hover:w-[500px] shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
          >
            <img 
              src={item.src} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700"></div>

            {/* Rotated text when collapsed */}
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-white font-bold tracking-widest uppercase -rotate-90 whitespace-nowrap drop-shadow-md">
                {item.title}
              </span>
            </div>

            {/* Text details when expanded */}
            <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 w-[300px]">
              <h3 className="text-3xl font-black text-white mb-2 drop-shadow-md">{item.title}</h3>
              <p className="text-white/80 text-sm drop-shadow">
                Fluid width transitions create a seamless, accordion-like effect within a horizontal scroll track.
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
