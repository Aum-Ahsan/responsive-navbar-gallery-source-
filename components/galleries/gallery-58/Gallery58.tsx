"use client";
import React from 'react';

export default function Gallery58() {
  const imgSrc = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b';
  const slices = 5;

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-black font-sans relative flex items-center justify-center overflow-hidden group border-y border-white/5">
      
      {/* Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-6xl md:text-[10rem] font-black text-white/10 uppercase tracking-tighter">Shatter</h2>
      </div>

      <div className="relative w-full max-w-4xl aspect-video flex gap-1 md:gap-2 px-4 z-10">
        {Array.from({ length: slices }).map((_, idx) => {
          // Calculate the background position percentage for each slice to re-assemble the image
          const bgPos = `${(idx / (slices - 1)) * 100}% 50%`;
          
          // Hover displacements
          const translateY = idx % 2 === 0 ? '-20px' : '20px';
          
          return (
            <div 
              key={idx}
              className="flex-1 h-full rounded-lg md:rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer filter grayscale hover:!grayscale-0 hover:flex-[1.5]"
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover', // Or specific width to match aspect ratio
                backgroundPosition: bgPos,
              }}
            >
              {/* CSS hover injection for vertical stagger */}
              <style dangerouslySetInnerHTML={{__html: `
                .group:hover > div > div:nth-child(${idx + 1}) {
                  transform: translateY(${translateY});
                  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }
              `}} />
            </div>
          )
        })}
      </div>

      <div className="absolute bottom-12 text-center pointer-events-none z-20 w-full">
         <p className="text-white/50 font-bold uppercase tracking-widest text-sm">Hover to displace</p>
      </div>
      
    </div>
  );
}
