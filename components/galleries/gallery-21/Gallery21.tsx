"use client";
import React from 'react';

export default function Gallery21() {
  const hexes = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
    { id: 7, src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2' },
  ];

  return (
    <div className="w-full bg-slate-900 py-24 font-sans flex flex-col items-center justify-center min-h-[700px] overflow-hidden">
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Honeycomb Grid</h2>
        <p className="text-slate-400">Powered by CSS clip-path to break out of standard rectangular boundaries.</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center pt-12">
        {/* Row 1 */}
        <div className="flex justify-center -mb-8 sm:-mb-12">
          {hexes.slice(0, 2).map((hex) => (
            <div key={hex.id} className="w-[150px] h-[170px] sm:w-[220px] sm:h-[250px] mx-1 sm:mx-2 relative group cursor-pointer"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <img src={hex.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Row 2 */}
        <div className="flex justify-center -mb-8 sm:-mb-12">
          {hexes.slice(2, 5).map((hex) => (
            <div key={hex.id} className="w-[150px] h-[170px] sm:w-[220px] sm:h-[250px] mx-1 sm:mx-2 relative group cursor-pointer"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <img src={hex.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Row 3 */}
        <div className="flex justify-center">
          {hexes.slice(5, 7).map((hex) => (
            <div key={hex.id} className="w-[150px] h-[170px] sm:w-[220px] sm:h-[250px] mx-1 sm:mx-2 relative group cursor-pointer"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <img src={hex.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
