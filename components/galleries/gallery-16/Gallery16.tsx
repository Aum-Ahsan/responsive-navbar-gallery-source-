"use client";
import React from 'react';

export default function Gallery16() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', id: 1 },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', id: 2 },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', id: 3 },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', id: 4 },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', id: 5 },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', id: 6 },
  ];

  // We duplicate the array to create a seamless infinite loop
  const marqueeItems = [...images, ...images];

  return (
    <div className="w-full py-24 bg-black font-sans overflow-hidden flex flex-col items-center">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Infinite Marquee</h2>
        <p className="text-gray-400 max-w-lg mx-auto">A seamless, continuously scrolling gallery track. Perfect for showcasing a massive volume of work without requiring user interaction.</p>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrolling Track */}
        <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[280px] sm:w-[350px] aspect-[4/5] mx-4 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={`Gallery item ${item.id}`}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tailwind configuration requires adding this keyframe to global CSS or tailwind config, 
          but we can inject it inline for the component to work perfectly out-of-the-box */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
