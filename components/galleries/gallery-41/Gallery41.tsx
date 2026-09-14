"use client";
import React, { useState } from 'react';

export default function Gallery41() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const list = [
    { title: 'Oceans', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { title: 'Forests', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { title: 'Deserts', src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { title: 'Cities', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-slate-100 font-sans relative overflow-hidden flex items-center justify-center">
      
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {list.map((item, idx) => (
          <img 
            key={idx}
            src={item.src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${activeImage === item.src ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}
        {/* Dimmer overlay for readability when image is active */}
        <div className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-700 ${activeImage ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Typographic List */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {list.map((item, idx) => (
          <div 
            key={idx}
            className="w-full text-center border-b border-black/10 last:border-0"
            onMouseEnter={() => setActiveImage(item.src)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <h2 
              className={`text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter cursor-pointer transition-all duration-500 py-4
                ${activeImage === item.src ? 'text-white translate-x-4 md:translate-x-12 drop-shadow-2xl' : 'text-slate-300 hover:text-slate-400'}
              `}
            >
              {item.title}
            </h2>
          </div>
        ))}
      </div>

    </div>
  );
}
