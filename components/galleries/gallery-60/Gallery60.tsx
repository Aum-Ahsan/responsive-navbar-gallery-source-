"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Gallery60() {
  return (
    <div className="w-full bg-white px-4 py-24 font-sans">
      
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-2">The Finale Grid.</h2>
          <p className="text-gray-500 font-medium">An asymmetrical, dense architectural layout packing 7 distinct containers.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all border-b-2 border-black pb-1">
          View All <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-12 auto-rows-[150px] md:auto-rows-[250px] gap-2 md:gap-4">
        
        {/* Large Hero (Spans 8 cols, 2 rows) */}
        <div className="col-span-4 md:col-span-8 row-span-2 relative rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg">Feature 01</div>
        </div>

        {/* Top Right Tall (Spans 4 cols, 2 rows) */}
        <div className="col-span-4 md:col-span-4 row-span-2 relative rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
        </div>

        {/* Bottom Left Small (Spans 3 cols, 1 row) */}
        <div className="col-span-2 md:col-span-3 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* Bottom Middle Text Box (Spans 3 cols, 1 row) */}
        <div className="col-span-2 md:col-span-3 row-span-1 relative rounded-3xl overflow-hidden shadow-lg bg-black text-white p-6 flex flex-col justify-between">
          <span className="text-white/50 font-bold uppercase tracking-widest text-xs block">Insight</span>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Asymmetry creates visual tension.</h3>
        </div>

        {/* Bottom Middle Small (Spans 3 cols, 1 row) */}
        <div className="col-span-2 md:col-span-3 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
        </div>

        {/* Bottom Right Small (Spans 3 cols, 1 row) */}
        <div className="col-span-2 md:col-span-3 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg cursor-pointer bg-blue-600 flex items-center justify-center">
          <span className="text-white font-black text-4xl group-hover:scale-110 transition-transform">60+</span>
        </div>

      </div>

    </div>
  );
}
