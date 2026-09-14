"use client";
import React from 'react';

export default function Gallery15() {
  const journeys = [
    { id: '01', title: 'The Ascent', desc: 'Climbing the misty peaks of the northern range.', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b' },
    { id: '02', title: 'Deep Forest', desc: 'Discovering ancient groves untouched by time.', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e' },
    { id: '03', title: 'Desert Winds', desc: 'Navigating the endless seas of golden sand.', src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24 font-sans">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Zig-Zag Journey</h2>
        <p className="text-gray-500">A rhythmic editorial layout that guides the eye naturally down the page.</p>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {journeys.map((item, idx) => {
          const isEven = idx % 2 !== 0;
          
          return (
            <div key={item.id} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 group`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-gray-200 translate-x-4 translate-y-4 rounded-3xl -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg relative">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                
                {/* Floating Number */}
                <div className={`absolute top-8 ${isEven ? '-left-8' : '-right-8'} w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-xl font-black text-gray-900 hidden md:flex`}>
                  {item.id}
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-gray-900"></span>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Chapter {item.id}</span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                  {item.desc} This asymmetric zig-zag pattern keeps the user engaged by breaking the monotony of standard stacked grids, encouraging them to scroll further.
                </p>
                
                <button className="w-fit text-gray-900 font-bold border-b-2 border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                  Read the full story
                </button>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  );
}
