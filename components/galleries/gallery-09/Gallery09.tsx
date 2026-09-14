"use client";
import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function Gallery09() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Nike Air Max', desc: 'The classic silhouette re-engineered for the modern street.' },
    { id: 2, src: 'https://images.unsplash.com/photo-1552346154-21d32810baa3', title: 'Running Series', desc: 'Lightweight performance materials.' },
    { id: 3, src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5', title: 'Urban Flex', desc: 'Adaptive fit technology.' },
    { id: 4, src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a', title: 'Neon Collection', desc: 'Stand out in the dark.' },
    { id: 5, src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2', title: 'Classic White', desc: 'The minimalist essential.' },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Main Feature */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden relative shadow-sm group">
            {/* Background image changes based on active index */}
            <img 
              key={activeIdx}
              src={images[activeIdx].src} 
              alt={images[activeIdx].title}
              className="absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in-[0.98] duration-500"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300"></div>
            
            {/* Optional Play Button overlay for media */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-white hover:text-black">
              <Play size={24} className="ml-1" />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
            {images.map((img, idx) => (
              <button 
                key={img.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden transition-all duration-300 
                  ${activeIdx === idx ? 'ring-4 ring-offset-2 ring-black scale-[0.95]' : 'opacity-60 hover:opacity-100'}
                `}
              >
                <img src={img.src} alt={img.title} className="absolute inset-0 w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">Product Showcase</span>
          
          <div key={`info-${activeIdx}`} className="animate-in slide-in-from-right-8 fade-in duration-500">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {images[activeIdx].title}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {images[activeIdx].desc} This gallery pattern is perfect for e-commerce, allowing users to inspect product details from multiple angles while keeping the core information visible.
            </p>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white px-6 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
              <button className="w-14 h-14 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center font-bold hover:bg-gray-200 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
