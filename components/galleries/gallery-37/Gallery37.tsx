"use client";
import React from 'react';

export default function Gallery37() {
  const innerRing = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
  ];

  const outerRing = [
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
    { id: 7, src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2' },
    { id: 8, src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff' },
    { id: 9, src: 'https://images.unsplash.com/photo-1555448248-2571daf6344b' },
  ];

  return (
    <div className="w-full h-[700px] md:h-[900px] bg-white font-sans flex items-center justify-center relative overflow-hidden">
      
      {/* Center Text */}
      <div className="absolute z-30 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">Concentric</h2>
        <p className="text-gray-500 font-bold tracking-widest text-sm mt-2">Radial Layout</p>
      </div>

      {/* Center Dot */}
      <div className="absolute w-4 h-4 bg-gray-900 rounded-full z-20"></div>

      {/* Inner Ring */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-gray-200 animate-[spin_40s_linear_infinite]">
        {innerRing.map((img, idx) => {
          const angle = (360 / innerRing.length) * idx;
          return (
            <div 
              key={img.id}
              className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-xl cursor-pointer group hover:scale-150 transition-transform duration-300 z-10"
              style={{
                top: '50%', left: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`, // Translate by half of ring width
              }}
            >
              <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse]">
                <img src={img.src} alt="" className="w-full h-full object-cover scale-125" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Outer Ring */}
      <div className="absolute w-[550px] h-[550px] md:w-[700px] md:h-[700px] rounded-full border border-gray-100 animate-[spin_60s_linear_infinite_reverse]">
        {outerRing.map((img, idx) => {
          const angle = (360 / outerRing.length) * idx;
          return (
            <div 
              key={img.id}
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl cursor-pointer group hover:scale-150 transition-transform duration-300 z-10"
              style={{
                top: '50%', left: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(275px) rotate(-${angle}deg)`, // Translate by half of ring width
              }}
            >
              <div className="w-full h-full animate-[spin_60s_linear_infinite]">
                <img src={img.src} alt="" className="w-full h-full object-cover scale-125" />
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}
