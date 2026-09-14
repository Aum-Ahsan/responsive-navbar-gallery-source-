"use client";
import React from 'react';

export default function Gallery33() {
  const scatter = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', top: '10%', left: '5%', w: '250px', h: '300px', z: 10 },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', top: '50%', left: '15%', w: '300px', h: '200px', z: 20 },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', top: '5%', left: '40%', w: '200px', h: '200px', z: 5 },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', top: '35%', left: '35%', w: '400px', h: '500px', z: 30 },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', top: '15%', left: '70%', w: '250px', h: '350px', z: 15 },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', top: '65%', left: '65%', w: '350px', h: '250px', z: 25 },
  ];

  return (
    <div className="w-full h-[800px] bg-[#ececec] font-sans relative overflow-hidden">
      
      {/* Central Text behind the chaos */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-0 pointer-events-none">
        <h2 className="text-6xl md:text-8xl font-black text-gray-300 uppercase tracking-tighter mix-blend-multiply mb-4">
          Absolute<br/>Chaos
        </h2>
        <p className="text-gray-400 font-bold tracking-widest uppercase">Hover to bring to front</p>
      </div>

      {/* Scattered Images */}
      {scatter.map((item, idx) => (
        <div 
          key={idx}
          className="absolute rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer group hover:!z-50 hover:scale-105 hover:shadow-2xl"
          style={{
            top: item.top,
            left: item.left,
            width: item.w,
            height: item.h,
            zIndex: item.z
          }}
        >
          <img 
            src={item.src} 
            alt={`Scatter ${idx}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
        </div>
      ))}
      
    </div>
  );
}
