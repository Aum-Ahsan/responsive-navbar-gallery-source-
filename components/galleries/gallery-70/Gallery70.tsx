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
      
      {/* Background Orbit Rings (Circle Shape Animation) */}
      <div className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] border border-gray-300 rounded-full z-0 pointer-events-none"></div>
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-gray-300 border-dashed rounded-full z-0 pointer-events-none animate-[spin_40s_linear_infinite_reverse]"></div>
      <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-gray-200 rounded-full z-0 pointer-events-none animate-[spin_20s_linear_infinite]"></div>

      {/* The Dial (Center Title) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-center pointer-events-none bg-white/70 backdrop-blur-md px-8 py-5 md:px-10 md:py-6 rounded-3xl shadow-xl border border-white/50">
        <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-2">The Dial</h2>
        <p className="text-gray-500 font-bold tracking-widest uppercase text-[10px] md:text-xs">Infinite Orbital Scroll</p>
      </div>

      {/* The rotating container */}
      <div className="relative z-10 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full animate-[spin_60s_linear_infinite]">
        
        {images.map((src, idx) => {
          const angle = idx * (360 / images.length);
          return (
            <div 
              key={idx}
              className="absolute top-1/2 left-1/2"
            >
              {/* This inner div handles the static rotation and outward translation for positioning */}
              <div 
                className="gallery70-orbiter"
                style={{ '--angle': `${angle}deg` } as React.CSSProperties}
              >
                {/* This div negates the parent's dynamic spin to keep the card fully upright at all times */}
                <div className="animate-[gallery70-counterSpin_60s_linear_infinite]">
                  <div className="w-24 h-32 md:w-40 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/50 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* CSS for orbital math and counter-spin */}
        <style dangerouslySetInnerHTML={{__html: `
          .gallery70-orbiter {
            /* Mobile radius: 200px (matches 400px ring) */
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-200px) rotate(calc(-1 * var(--angle)));
          }
          @media (min-width: 768px) {
            .gallery70-orbiter {
              /* Desktop radius: 350px (matches 700px ring) */
              transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-350px) rotate(calc(-1 * var(--angle)));
            }
          }
          
          @keyframes gallery70-counterSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}} />

      </div>

    </div>
  );
}
