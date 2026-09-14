"use client";
import React, { useState } from 'react';

export default function Gallery55() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Urban' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Studio' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Time' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Code' },
  ];

  const [heroImg, setHeroImg] = useState(images[0]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans">
      
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">Bento Swap</h2>
          <p className="text-gray-500">Hover thumbnails to instantly update the hero slot.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 h-[600px] md:h-[700px]">
        
        {/* Large Hero Container (Spans 3 cols) */}
        <div className="md:col-span-3 rounded-[2rem] overflow-hidden relative shadow-2xl group">
          <img 
            key={heroImg.id} // forces re-animation on swap
            src={heroImg.src} 
            alt={heroImg.title} 
            className="absolute inset-0 w-full h-full object-cover animate-[clipReveal_0.5s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-12 left-12 pointer-events-none">
            <h3 className="text-6xl font-black text-white uppercase tracking-tighter mix-blend-overlay">{heroImg.title}</h3>
          </div>
        </div>

        {/* Thumbnails Stack (1 col) */}
        <div className="flex flex-row md:flex-col gap-4 md:gap-8">
          {images.map((img) => (
            <div 
              key={img.id}
              className={`flex-1 rounded-[1.5rem] overflow-hidden cursor-pointer relative shadow-lg transition-all duration-300
                ${heroImg.id === img.id ? 'ring-4 ring-black scale-95 opacity-50' : 'hover:scale-105 hover:shadow-xl'}
              `}
              onMouseEnter={() => setHeroImg(img)}
            >
              <img src={img.src} alt={img.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes clipReveal {
          0% { clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%); opacity: 0.5; transform: scale(1.05); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; transform: scale(1); }
        }
      `}} />

    </div>
  );
}
