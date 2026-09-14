"use client";
import React, { useState } from 'react';

export default function Gallery48() {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', top: '10%', left: '10%' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', top: '70%', left: '15%' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', top: '15%', left: '75%' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', top: '65%', left: '70%' },
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full h-[700px] md:h-[900px] bg-[#ebe7e0] font-sans relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Title */}
      <div className="absolute top-12 z-0">
        <h2 className="text-3xl font-bold text-gray-400 tracking-widest uppercase">The Focal Point</h2>
      </div>

      {/* Main Large Frame */}
      <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] bg-white p-4 shadow-2xl z-10 transition-all duration-700">
        <img 
          key={mainImage.id} // key forces re-render/animation on swap
          src={mainImage.src} 
          alt="" 
          className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]" 
        />
        <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
      </div>

      {/* Floating Orbiting Thumbnails */}
      {images.map((img) => (
        <div
          key={img.id}
          className={`absolute w-24 h-32 md:w-32 md:h-44 p-2 bg-white shadow-xl cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300 z-20 
            ${mainImage.id === img.id ? 'opacity-50 grayscale scale-90 pointer-events-none' : 'opacity-100'}`
          }
          style={{ top: img.top, left: img.left }}
          onClick={() => setMainImage(img)}
        >
          <img src={img.src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />

    </div>
  );
}
