"use client";
import React from 'react';

export default function Gallery26() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', top: '5%', left: '10%' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', top: '15%', left: '40%' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', top: '45%', left: '20%' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', top: '65%', left: '50%' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', top: '30%', left: '70%' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', top: '10%', left: '85%' },
    { src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2', top: '75%', left: '80%' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-gray-900 overflow-hidden relative font-sans perspective-1000">
      
      {/* Title Overlay */}
      <div className="absolute top-12 left-12 z-20 max-w-sm">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl">The<br/>Corridor.</h2>
        <p className="text-gray-300 drop-shadow-md">A 3D perspective wall layout creating the illusion of deep physical space on a flat screen.</p>
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
            className="absolute w-[200px] sm:w-[300px] md:w-[400px] aspect-[16/9] shadow-2xl rounded-2xl overflow-hidden cursor-pointer group hover:z-50 transition-all duration-500 ease-out"
            style={{
              top: img.top,
              left: img.left,
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
