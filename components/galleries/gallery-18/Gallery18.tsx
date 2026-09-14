"use client";
import React from 'react';
import { Search } from 'lucide-react';

export default function Gallery18() {
  const items = [
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c', title: 'Minimalist Office' },
    { src: 'https://images.unsplash.com/photo-1555448248-2571daf6344b', title: 'Neon Nights' },
    { src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff', title: 'Desert Oasis' },
    { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', title: 'Alpine Retreat' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Developer Workspace' },
    { src: 'https://images.unsplash.com/photo-1503602642458-2322119d4411', title: 'Typography Desk' },
  ];

  return (
    <div className="w-full bg-[#111] py-24 font-sans text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Spotlight Gallery</h2>
          <p className="text-gray-400">Hover over any image to bring it into focus while the rest of the gallery dims into the background.</p>
        </div>

        {/* group container handles the "dim others" logic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 group/gallery">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="relative aspect-square overflow-hidden cursor-pointer rounded-xl
                transition-all duration-500 ease-out
                /* When the gallery is hovered, dim this item unless THIS item is hovered */
                group-hover/gallery:opacity-30 group-hover/gallery:scale-95 group-hover/gallery:blur-[2px]
                hover:!opacity-100 hover:!scale-105 hover:!blur-0 hover:z-10 hover:shadow-2xl hover:shadow-white/10
                group/item
              "
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover/item:bg-black/40 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                  <Search size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wider uppercase transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
