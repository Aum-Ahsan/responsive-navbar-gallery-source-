"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Gallery10() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Speed', size: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Sound', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Time', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Code', size: 'col-span-2 row-span-1' },
  ];

  return (
    <div className="w-full bg-[#E5E5E5] py-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Side */}
        <div className="w-full md:w-1/3 relative z-10">
          <div className="w-16 h-1 bg-red-600 mb-8"></div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-none uppercase tracking-tighter mb-6">
            Dynamic<br />Grid.
          </h2>
          <p className="text-gray-600 font-medium mb-8 max-w-sm">
            Applying a global skew transformation creates a high-energy, fast-paced editorial layout. The internal images are counter-skewed to maintain subject integrity.
          </p>
          <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-red-600 hover:text-red-800 transition-colors">
            View All <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Skewed Gallery Side */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px] -skew-y-6 transform-gpu shadow-[0_30px_60px_rgba(0,0,0,0.1)] p-4 bg-white rounded-3xl">
            {images.map((img, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.size}`}
              >
                {/* Counter skew to keep image straight */}
                <div className="absolute inset-[-20%] w-[140%] h-[140%] skew-y-6 transform-gpu">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-red-600/40 transition-colors duration-500 mix-blend-multiply"></div>
                </div>
                
                {/* Text is skewed with the grid, looks awesome */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mix-blend-overlay">
                    {img.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
