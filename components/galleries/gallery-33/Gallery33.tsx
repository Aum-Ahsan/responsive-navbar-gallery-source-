"use client";
import React from 'react';

export default function Gallery33() {
  const scatter = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', z: 10, className: 'top-[5%] left-[2%] w-[140px] h-[180px] md:top-[10%] md:left-[5%] md:w-[250px] md:h-[300px]' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', z: 20, className: 'top-[65%] left-[5%] w-[180px] h-[120px] md:top-[50%] md:left-[15%] md:w-[300px] md:h-[200px]' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', z: 5,  className: 'top-[2%] left-[50%] w-[110px] h-[110px] md:top-[5%] md:left-[40%] md:w-[200px] md:h-[200px]' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', z: 30, className: 'top-[25%] left-[20%] w-[220px] h-[280px] md:top-[35%] md:left-[35%] md:w-[400px] md:h-[500px]' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', z: 15, className: 'top-[10%] left-[60%] w-[130px] h-[180px] md:top-[15%] md:left-[70%] md:w-[250px] md:h-[350px]' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', z: 25, className: 'top-[70%] left-[45%] w-[170px] h-[130px] md:top-[65%] md:left-[65%] md:w-[350px] md:h-[250px]' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-[#ececec] font-sans relative overflow-hidden">
      
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
          className={`absolute rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer group hover:!z-50 hover:scale-105 hover:shadow-2xl ${item.className}`}
          style={{
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
