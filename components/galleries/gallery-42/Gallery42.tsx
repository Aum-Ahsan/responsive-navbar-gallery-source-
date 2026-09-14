"use client";
import React from 'react';

export default function Gallery42() {
  const col1 = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
  ];
  const col2 = [
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
  ];
  const col3 = [
    { src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2' },
    { src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff' },
    { src: 'https://images.unsplash.com/photo-1555448248-2571daf6344b' },
  ];

  // Triplicate arrays for smooth looping
  const c1 = [...col1, ...col1, ...col1];
  const c2 = [...col2, ...col2, ...col2];
  const c3 = [...col3, ...col3, ...col3];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-slate-900 font-sans relative overflow-hidden flex items-center justify-center">
      
      {/* Title */}
      <div className="absolute z-30 bg-slate-900/80 backdrop-blur-md px-12 py-6 rounded-[3rem] border border-white/10 text-center pointer-events-none shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter">Waterfall</h2>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Triple Cascading Columns</p>
      </div>

      {/* Waterfall Grid Container */}
      <div className="absolute inset-0 flex gap-4 p-4 opacity-60">
        
        <div className="w-1/3 flex flex-col gap-4 animate-[scrollDown_25s_linear_infinite]">
          {c1.map((img, idx) => (
            <div key={`c1-${idx}`} className="w-full aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="w-1/3 flex flex-col gap-4 animate-[scrollUp_30s_linear_infinite]">
          {c2.map((img, idx) => (
            <div key={`c2-${idx}`} className="w-full aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="w-1/3 flex flex-col gap-4 animate-[scrollDown_20s_linear_infinite]">
          {c3.map((img, idx) => (
            <div key={`c3-${idx}`} className="w-full aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
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
