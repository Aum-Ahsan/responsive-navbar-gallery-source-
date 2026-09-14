"use client";
import React from 'react';

export default function Gallery52() {
  const col1 = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
  ];

  const col2 = [
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-24 font-sans">
      
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">Staggered Zig-Zag</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          By displacing alternating columns with a top margin, we break the rigid horizontal constraints of a standard grid layout.
        </p>
      </div>

      <div className="flex gap-4 md:gap-8 justify-center">
        
        {/* Column 1 */}
        <div className="w-1/2 flex flex-col gap-4 md:gap-8">
          {col1.map((img) => (
            <div key={img.id} className="w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
              <img 
                src={img.src} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>

        {/* Column 2 (Staggered Down) */}
        <div className="w-1/2 flex flex-col gap-4 md:gap-8 mt-16 md:mt-32">
          {col2.map((img) => (
            <div key={img.id} className="w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
              <img 
                src={img.src} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
