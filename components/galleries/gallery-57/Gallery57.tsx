"use client";
import React from 'react';

export default function Gallery57() {
  const cards = [
    { id: 1, title: 'Foundation', src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', color: 'bg-[#1a1a1a]' },
    { id: 2, title: 'Structure', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', color: 'bg-[#2a2a2a]' },
    { id: 3, title: 'Surface', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', color: 'bg-[#3a3a3a]' },
    { id: 4, title: 'Details', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', color: 'bg-[#4a4a4a]' },
  ];

  return (
    <div className="w-full bg-[#f4f4f4] font-sans border-y border-black/10">
      
      {/* Intro Header */}
      <div className="py-32 text-center px-4">
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-4">Sticky Stack</h2>
        <p className="text-gray-500 font-medium text-lg max-w-xl mx-auto">
          Scroll down. As cards hit the top of the viewport, they stick and stack seamlessly over one another.
        </p>
      </div>

      {/* 
        Container must be long enough to allow scrolling. 
        Padding bottom ensures the last card has space to scroll past if needed, 
        but usually we just let the next section follow.
      */}
      <div className="w-full max-w-4xl mx-auto pb-48 px-4 relative">
        
        {cards.map((card, idx) => (
          <div 
            key={card.id}
            className={`sticky w-full rounded-[2rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row ${card.color} mb-8 border border-white/10`}
            style={{
              // Stagger the sticky top position slightly so they stack neatly with a visual offset
              top: `calc(5rem + ${idx * 2}rem)`,
              height: '400px'
            }}
          >
            {/* Text Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-white/50 font-mono tracking-widest text-sm uppercase mb-4">Phase 0{card.id}</span>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">{card.title}</h3>
              <p className="text-white/70">
                Utilizing CSS position sticky to create a complex scrolling interaction with minimal effort and high performance.
              </p>
            </div>
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 h-full">
              <img src={card.src} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
