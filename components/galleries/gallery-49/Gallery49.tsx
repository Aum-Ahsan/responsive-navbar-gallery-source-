"use client";
import React from 'react';

export default function Gallery49() {
  const items = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', aspect: 'aspect-[3/4]' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', aspect: 'aspect-square' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', aspect: 'aspect-[4/3]' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', aspect: 'aspect-video' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', aspect: 'aspect-[3/5]' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', aspect: 'aspect-square' },
    { id: 7, src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2', aspect: 'aspect-[4/5]' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans">
      
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">True CSS Masonry</h2>
        <p className="text-gray-500 max-w-2xl">
          Using CSS <code className="bg-gray-100 px-1 rounded text-red-500">columns: 3</code> and <code className="bg-gray-100 px-1 rounded text-red-500">break-inside: avoid</code> to create a lightweight, JavaScript-free masonry layout that packs vertically without horizontal gaps.
        </p>
      </div>

      {/* Masonry Container */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="break-inside-avoid w-full rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className={`w-full relative ${item.aspect} overflow-hidden bg-gray-100`}>
              <img 
                src={item.src} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover Details Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-bold tracking-widest uppercase text-sm mb-1">Item 0{item.id}</span>
                <span className="text-white/70 text-xs">View Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
