"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Gallery32() {
  const rows = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Urban Series', date: '2024' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Studio Sessions', date: '2023' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Timekeepers', date: '2022' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Developer Setup', date: '2021' },
  ];

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-black font-sans flex flex-col mx-auto my-12 rounded-[2rem] overflow-hidden">
      {rows.map((row) => (
        <div 
          key={row.id}
          className="relative flex-1 group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3] overflow-hidden cursor-pointer border-b border-white/10 last:border-0"
        >
          {/* Background */}
          <img 
            src={row.src} 
            alt={row.title}
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700"></div>

          {/* Persistent Row Content (Always visible) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-8 md:px-16 transition-all duration-500 group-hover:-translate-y-12">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              {row.title}
            </h3>
            <span className="text-white/50 font-bold text-lg">{row.date}</span>
          </div>

          {/* Expanded Content (Fades in on hover) */}
          <div className="absolute inset-x-0 bottom-6 md:bottom-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
            <p className="text-white/80 max-w-lg text-xs md:text-base text-left">
              A vertical accordion uses flex-grow on the Y-axis. Hovering over a row smoothly expands it, revealing more of the image and hidden content underneath.
            </p>
            <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all shrink-0">
              View <ArrowRight size={16} />
            </button>
          </div>
          
        </div>
      ))}
    </div>
  );
}
