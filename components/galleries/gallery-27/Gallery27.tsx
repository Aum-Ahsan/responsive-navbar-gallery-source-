"use client";
import React from 'react';

export default function Gallery27() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-slate-50 flex items-center justify-center font-sans overflow-hidden">
      
      {/* Central Hub */}
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center rounded-full border border-slate-200">
        
        <div className="text-center z-10 max-w-[200px]">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Orbital<br/>Gallery</h2>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Hover to inspect</p>
        </div>

        {/* Orbiting Ring */}
        <div className="absolute inset-0 animate-[spin_30s_linear_infinite] hover:[animation-play-state:paused] group">
          {images.map((img, idx) => {
            // Calculate angle for evenly spaced circular layout
            const angle = (360 / images.length) * idx;
            // Radius of orbit
            const radius = '50%';
            
            return (
              <div 
                key={img.id}
                className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-150 hover:z-50 hover:shadow-2xl"
                style={{
                  top: '50%',
                  left: '50%',
                  // Translate to edge of circle, then counter-rotate so the image stays upright
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`,
                }}
              >
                {/* 
                  Because the parent ring is spinning, we need to counter-spin the images 
                  so they don't turn upside down. We can do this with an inner animation.
                */}
                <div className="w-full h-full animate-[spin_30s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                  <img src={img.src} alt="" className="w-full h-full object-cover scale-150" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}
