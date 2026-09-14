"use client";
import React from 'react';

export default function Gallery40() {
  const floaters = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', top: '10%', left: '10%', size: 'w-48 h-56 md:w-64 md:h-72', delay: 'delay-0' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', top: '40%', left: '35%', size: 'w-56 h-64 md:w-80 md:h-96', delay: 'delay-100' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', top: '15%', left: '70%', size: 'w-40 h-48 md:w-56 md:h-64', delay: 'delay-200' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', top: '65%', left: '15%', size: 'w-32 h-40 md:w-48 md:h-56', delay: 'delay-300' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', top: '60%', left: '75%', size: 'w-48 h-56 md:w-64 md:h-72', delay: 'delay-500' },
  ];

  return (
    <div className="w-full h-[800px] bg-slate-900 font-sans relative overflow-hidden flex items-center justify-center">
      
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[10vw] font-black text-slate-800 uppercase tracking-tighter mix-blend-color-dodge">Floating</h2>
      </div>

      {/* Floating Hexagons */}
      {floaters.map((item, idx) => (
        <div 
          key={idx}
          className={`absolute ${item.size} animate-[float_6s_ease-in-out_infinite] ${item.delay} z-10 hover:!z-50 cursor-pointer group`}
          style={{
            top: item.top,
            left: item.left,
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
        >
          <img 
            src={item.src} 
            alt={`Floater ${idx}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
      ))}

      {/* Add Floating Animation Keyframes dynamically */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}} />

    </div>
  );
}
