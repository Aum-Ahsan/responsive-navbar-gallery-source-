"use client";
import React from 'react';

export default function Gallery26() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', className: 'top-[45%] left-[35%] md:top-[5%] md:left-[10%]' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', className: 'top-[65%] left-[50%] md:top-[15%] md:left-[40%]' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', className: 'top-[80%] left-[40%] md:top-[45%] md:left-[20%]' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', className: 'top-[20%] left-[70%] md:top-[65%] md:left-[50%]' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', className: 'top-[40%] left-[65%] md:top-[30%] md:left-[70%]' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', className: 'top-[75%] left-[60%] md:top-[10%] md:left-[85%]' },
    { src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2', className: 'top-[55%] left-[70%] md:top-[75%] md:left-[80%]' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-gray-900 overflow-hidden relative font-sans [perspective:1000px]">
      
      {/* Title Overlay */}
      <div className="absolute top-12 left-6 md:left-12 z-20 max-w-[200px] md:max-w-sm pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 md:mb-4 drop-shadow-2xl">The<br/>Corridor.</h2>
        <p className="text-xs md:text-base text-gray-300 drop-shadow-md">A 3D perspective wall layout creating the illusion of deep physical space on a flat screen.</p>
      </div>

      {/* Perspective Container */}
      <div 
        className="absolute inset-y-0 right-0 w-[150%] sm:w-full h-full border-l border-white/10"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-25deg) translateZ(-200px) translateX(10%)',
          transformOrigin: 'right center'
        }}
      >
        {/* Wall Texture / Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        
        {images.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute w-[140px] md:w-[400px] aspect-[16/9] shadow-2xl rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group hover:z-50 transition-all duration-500 ease-out ${img.className}`}
            style={{
              transform: 'translateZ(0px)',
            }}
          >
            {/* The image lifts off the wall on hover */}
            <div className="w-full h-full transition-transform duration-500 group-hover:-translate-y-4 group-hover:translate-x-4">
              <img src={img.src} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
  );
}
