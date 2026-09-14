"use client";
import React from 'react';

export default function Gallery38() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    // Center cutout will be here in the grid (index 4)
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
    { id: 7, src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2' },
    { id: 8, src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans">
      
      {/* 3x3 Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[200px] md:auto-rows-[300px]">
        
        {/* Render first 4 images */}
        {images.slice(0, 4).map((img) => (
          <div key={img.id} className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <img src={img.src} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
        ))}

        {/* Center Cutout Text Box */}
        <div className="relative rounded-3xl bg-slate-900 text-white flex flex-col justify-center items-center p-8 text-center col-span-2 md:col-span-1 shadow-2xl">
          <div className="w-12 h-1 bg-amber-500 mb-6"></div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter">
            The<br/>Centerpiece.
          </h2>
          <p className="text-slate-400 text-sm">
            A 3x3 CSS grid where the center tile is reserved for critical editorial context.
          </p>
        </div>

        {/* Render remaining 4 images */}
        {images.slice(4, 8).map((img) => (
          <div key={img.id} className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <img src={img.src} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
        ))}

      </div>

    </div>
  );
}
