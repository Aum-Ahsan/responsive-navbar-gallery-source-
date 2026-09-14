"use client";
import React from 'react';

export default function Gallery19() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Start', align: 'self-start' },
    { src: 'https://images.unsplash.com/photo-1552346154-21d32810baa3', title: 'Pace', align: 'self-center md:-ml-24 mt-12' },
    { src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5', title: 'Sprint', align: 'self-end md:-ml-24 mt-12' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24 font-sans border-b border-gray-100">
      <div className="flex flex-col md:flex-row gap-16">
        
        {/* Intro Text */}
        <div className="w-full md:w-1/3 pt-12">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Staircase<br/>Layout.</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            By manipulating flex alignments and negative margins, we create a cascading visual flow that draws the eye diagonally down the page.
          </p>
        </div>

        {/* Staircase Images */}
        <div className="w-full md:w-2/3 flex flex-col">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className={`w-full sm:w-[350px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer relative group ${img.align}`}
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-white text-black font-bold text-sm rounded-full shadow-lg">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
