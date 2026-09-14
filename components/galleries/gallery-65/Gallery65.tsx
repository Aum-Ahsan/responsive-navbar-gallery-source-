"use client";
import React from 'react';

export default function Gallery65() {
  const imagesRow1 = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
  ];
  
  const imagesRow2 = [
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
    { src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2' },
    { src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff' },
  ];

  // Triplicate arrays for smooth looping
  const r1 = [...imagesRow1, ...imagesRow1, ...imagesRow1];
  const r2 = [...imagesRow2, ...imagesRow2, ...imagesRow2];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-[#1a1a1a] font-sans relative flex items-center justify-center overflow-hidden border-y border-black/10">
      
      {/* Title */}
      <div className="absolute z-30 bg-black/50 backdrop-blur-md px-12 py-8 rounded-[2rem] text-center border border-white/10 shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">Diagonal<br/>Marquee</h2>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Infinite Angled Projection</p>
      </div>

      {/* The Rotated Container */}
      {/* We rotate the entire wrapper, scale it up so corners don't show empty space */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center gap-4 md:gap-8 opacity-70"
           style={{ transform: 'rotate(-15deg) scale(1.5)' }}>
        
        {/* Track 1 (Scrolling Left) */}
        <div className="flex gap-4 md:gap-8 w-max animate-[scrollLeft_30s_linear_infinite]">
          {r1.map((img, idx) => (
            <div key={`r1-${idx}`} className="w-[300px] md:w-[500px] aspect-video rounded-3xl overflow-hidden shrink-0">
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Track 2 (Scrolling Right) */}
        <div className="flex gap-4 md:gap-8 w-max animate-[scrollRight_35s_linear_infinite]">
          {r2.map((img, idx) => (
            <div key={`r2-${idx}`} className="w-[250px] md:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shrink-0">
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33% - 1rem)); } /* -1rem accounts for gap roughly. better formula is usually required for exact seamless but this works visually for repeated items */
        }
        @keyframes scrollRight {
          0% { transform: translateX(calc(-33.33% - 1rem)); }
          100% { transform: translateX(0); }
        }
      `}} />
      
    </div>
  );
}
