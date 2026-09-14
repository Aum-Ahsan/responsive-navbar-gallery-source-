"use client";
import React from 'react';

export default function Gallery23() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Urban' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Audio' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Time' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Code' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', title: 'Space' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans text-center">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Hover Expansion Row</h2>
        <p className="text-gray-500">Flex-grow handles the heavy lifting, creating a fluid, accordion-like hover effect across a single row.</p>
      </div>

      <div className="flex flex-col sm:flex-row h-[500px] w-full gap-2 md:gap-4 overflow-hidden rounded-[2rem]">
        {images.map((img) => (
          <div 
            key={img.id}
            className="group relative flex-1 hover:flex-[3] sm:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden rounded-2xl"
          >
            <img 
              src={img.src} 
              alt={img.title}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            
            {/* Title Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/0 transition-colors duration-700">
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest sm:-rotate-90 group-hover:rotate-0 transition-transform duration-700 delay-100 whitespace-nowrap">
                {img.title}
              </h3>
            </div>
            
            {/* Details that fade in */}
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 hidden sm:block">
              <button className="px-6 py-2 bg-white text-black font-bold text-sm rounded-full shadow-lg hover:bg-gray-200">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
