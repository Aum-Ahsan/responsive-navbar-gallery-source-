"use client";
import React from 'react';

export default function Gallery70() {
  const images = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1558655146-d09347e92766',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2',
    'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff',
  ];

  return (
    <div className="w-full h-[600px] md:h-[900px] bg-[#f9f9f9] font-sans relative flex items-center justify-center overflow-hidden border-y border-black/5">
      
      <div className="absolute z-30 text-center pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-2">The Dial</h2>
        <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">Infinite Orbital Scroll</p>
      </div>

      {/* The rotating container */}
      <div className="relative w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full animate-[spin_60s_linear_infinite]">
        
        {images.map((src, idx) => {
          const angle = idx * (360 / images.length);
          return (
            <div 
              key={idx}
              className="absolute w-40 h-56 md:w-56 md:h-72 rounded-3xl overflow-hidden shadow-2xl border border-white/50"
              style={{
                // Position each image along the circumference of the circle
                // We rotate the container, translate it outward, and then rotate it back so it stays upright
                // Wait, if the parent is spinning, the images will spin upside down.
                // We need to apply a counter-spin to the images to keep them upright.
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-350px) rotate(-${angle}deg)`
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
              
              {/* Apply reverse spin animation to keep images totally upright while parent spins */}
              <style dangerouslySetInnerHTML={{__html: `
                @media (min-width: 768px) {
                  .absolute.w-40:nth-child(${idx + 1}) {
                    transform: translate(-50%, -50%) rotate(${angle}deg) translateY(-500px) rotate(-${angle}deg) !important;
                  }
                }
              `}} />
            </div>
          )
        })}

        {/* Global Counter-Spin for all children */}
        <style dangerouslySetInnerHTML={{__html: `
          .animate-\\[spin_60s_linear_infinite\\] > div > img {
            animation: counterSpin 60s linear infinite;
          }
          @keyframes counterSpin {
            from { transform: rotate(0deg) scale(1.2); }
            to { transform: rotate(-360deg) scale(1.2); }
          }
        `}} />

      </div>

    </div>
  );
}
