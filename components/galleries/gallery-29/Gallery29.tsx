"use client";
import React from 'react';

export default function Gallery29() {
  const column1 = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
  ];
  
  const column2 = [
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
  ];

  // Duplicate for infinite scroll
  const col1Items = [...column1, ...column1, ...column1];
  const col2Items = [...column2, ...column2, ...column2];

  return (
    <div className="w-full h-[600px] bg-slate-950 font-sans flex flex-col md:flex-row overflow-hidden border-y border-white/10">
      
      {/* Text Context */}
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative z-20 bg-slate-950/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <div className="w-12 h-1 bg-blue-500 mb-8"></div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Vertical<br/>Opposites.
        </h2>
        <p className="text-slate-400 text-lg max-w-sm mb-8">
          A dual-column gallery featuring continuous, infinite vertical scrolling in opposing directions.
        </p>
        <button className="w-fit text-white font-bold border border-white/30 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-colors">
          View Collection
        </button>
      </div>

      {/* Scrolling Columns */}
      <div className="w-full md:w-1/2 flex gap-4 p-4 h-full relative overflow-hidden -mt-20 md:mt-0">
        
        {/* Fade Masks */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-950 to-transparent z-10"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>

        {/* Column 1 (Scrolls Up) */}
        <div className="w-1/2 flex flex-col gap-4 animate-[scrollUp_20s_linear_infinite]">
          {col1Items.map((img, idx) => (
            <div key={`c1-${idx}`} className="w-full aspect-[4/5] rounded-2xl overflow-hidden shrink-0">
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Column 2 (Scrolls Down) */}
        <div className="w-1/2 flex flex-col gap-4 animate-[scrollDown_25s_linear_infinite]">
          {col2Items.map((img, idx) => (
            <div key={`c2-${idx}`} className="w-full aspect-[4/5] rounded-2xl overflow-hidden shrink-0">
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
