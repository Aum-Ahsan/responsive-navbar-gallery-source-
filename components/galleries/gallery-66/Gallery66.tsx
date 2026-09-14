"use client";
import React from 'react';

export default function Gallery66() {
  const images = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1558655146-d09347e92766',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-slate-900 font-sans flex flex-col items-center justify-center overflow-hidden border-y border-white/5 relative perspective-1000">
      
      <div className="absolute top-12 z-20 text-center">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest mb-2">3D Orbit</h2>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Pure CSS Carousel</p>
      </div>

      <div className="relative w-48 h-64 md:w-64 md:h-80 animate-[spin3D_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
        
        {images.map((src, idx) => {
          const rotation = idx * (360 / images.length);
          return (
            <div 
              key={idx}
              className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
              style={{
                transform: `rotateY(${rotation}deg) translateZ(250px)`
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-black text-2xl">0{idx + 1}</span>
              </div>
            </div>
          )
        })}

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin3D {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @media (min-width: 768px) {
          .animate-\\[spin3D_20s_linear_infinite\\] > div {
             transform: rotateY(var(--rotation, 0deg)) translateZ(350px) !important;
          }
        }
      `}} />
      
      {/* We need to inject the specific rotation variables for desktop responsive Z translation */}
      <style dangerouslySetInnerHTML={{__html: images.map((_, i) => `
        .animate-\\[spin3D_20s_linear_infinite\\] > div:nth-child(${i + 1}) {
           --rotation: ${i * (360 / images.length)}deg;
        }
      `).join('')}} />

    </div>
  );
}
