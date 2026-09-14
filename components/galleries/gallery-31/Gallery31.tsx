"use client";
import React from 'react';

export default function Gallery31() {
  const diamonds = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-32 font-sans flex flex-col items-center justify-center overflow-hidden">
      
      <div className="text-center mb-24 z-10">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">Diamond Grid</h2>
        <p className="text-slate-500 max-w-md mx-auto">
          Achieved purely through CSS transforms. The parent container rotates 45 degrees, while the inner contents counter-rotate to remain upright.
        </p>
      </div>

      {/* 
        The parent is rotated 45deg. It uses a standard grid. 
        Because it's rotated, we need extra padding/margin so it doesn't clip the edges of the screen.
      */}
      <div className="relative rotate-45 grid grid-cols-2 gap-4 md:gap-8 scale-75 md:scale-100">
        
        {/* We have 5 items, we can map them directly into the grid */}
        {diamonds.map((diamond, idx) => (
          <div 
            key={diamond.id} 
            className={`
              relative w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-110 cursor-pointer group
              ${idx === 0 ? 'col-span-2 place-self-center w-56 h-56 md:w-80 md:h-80' : ''}
            `}
          >
            {/* 
              Counter-rotate the inner image container by -45deg so the image is upright.
              We scale it up so the corners don't show empty space when rotated inside the square.
            */}
            <div className="absolute inset-[-30%] w-[160%] h-[160%] -rotate-45">
              <img 
                src={diamond.src} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-300"></div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
