"use client";
import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Gallery06() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: 'https://images.unsplash.com/photo-1512496015851-a1dc8a4781df', title: 'Urban Geometry', author: 'Alex Rivera' },
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Neon Strides', author: 'Jamie Doe' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Code & Coffee', author: 'Tech Life' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', title: 'Abstract Flow', author: 'Design Co.' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Soundscapes', author: 'Audio Labs' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Timepiece', author: 'Modern Living' },
    { src: 'https://images.unsplash.com/photo-1503602642458-2322119d4411', title: 'Minimalist Desk', author: 'Workspace' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-slate-950 py-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Horizontal Snap</h2>
          <p className="text-slate-400">Swipe or scroll through the collection.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all shrink-0"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all shrink-0"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 lg:px-8 pb-10 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="snap-center shrink-0 w-[280px] sm:w-[400px] md:w-[500px] aspect-[4/5] sm:aspect-[4/3] rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-wide uppercase mb-3 border border-white/10">
                Gallery Item {idx + 1}
              </span>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{img.title}</h3>
              <p className="text-slate-300 text-sm">By {img.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
