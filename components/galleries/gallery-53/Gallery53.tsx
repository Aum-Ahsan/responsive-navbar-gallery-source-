"use client";
import React from 'react';

export default function Gallery53() {
  const cards = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', rot: '-20deg', x: '-150px' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', rot: '-10deg', x: '-75px' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', rot: '0deg', x: '0px' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', rot: '10deg', x: '75px' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', rot: '20deg', x: '150px' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-[#f0ebd8] font-sans flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute top-12 text-center z-0">
        <h2 className="text-4xl font-black text-[#1d2d44] tracking-tighter uppercase mb-2">Card Fan</h2>
        <p className="text-[#3e5c76] font-bold text-sm tracking-widest uppercase">Hover to expand stack</p>
      </div>

      {/* The Stack Container */}
      <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] group perspective-1000">
        
        {cards.map((card, idx) => {
          // In the default state, they are slightly messy but stacked
          const defaultRot = idx % 2 === 0 ? '2deg' : '-2deg';
          const z = cards.length - idx; // Front card is index 0 or maybe middle? Let's make index 2 the top.
          const isCenter = idx === 2;

          return (
            <div 
              key={card.id}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-4 border-white cursor-pointer origin-bottom"
              style={{
                zIndex: isCenter ? 50 : z,
              }}
            >
              <img src={card.src} alt="" className="w-full h-full object-cover" />
              
              {/* Overlay CSS for hovering the parent container */}
              <style dangerouslySetInnerHTML={{__html: `
                .group:hover > div:nth-child(${idx + 1}) {
                  transform: rotate(${card.rot}) translateX(${card.x}) translateY(${idx === 2 ? '-20px' : '0px'}) scale(${idx === 2 ? 1.1 : 1});
                }
                .group:not(:hover) > div:nth-child(${idx + 1}) {
                  transform: rotate(${defaultRot}) translateX(0) translateY(0) scale(1);
                }
              `}} />
            </div>
          )
        })}

      </div>

    </div>
  );
}
