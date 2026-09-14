"use client";
import React from 'react';

export default function Gallery68() {
  const panels = [
    { id: 1, title: 'Concept', desc: 'Laying the groundwork for visual language.', src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 2, title: 'Refine', desc: 'Polishing edges and establishing flow.', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { id: 3, title: 'Execute', desc: 'Bringing the system to life.', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
  ];

  return (
    <div className="w-full bg-white font-sans text-gray-900 border-y border-black/10">
      
      {/* 
        This is a standard scrolling section. 
        Each block takes up height, allowing the user to scroll. 
        The left text sticks while the right image scrolls normally.
      */}

      {panels.map((panel, idx) => (
        <div key={panel.id} className="relative w-full border-b border-black/5 last:border-0">
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative">
            
            {/* Left Sticky Text */}
            <div className="w-full md:w-1/2 p-8 md:p-24 relative">
              <div className="md:sticky md:top-24">
                <span className="text-gray-400 font-mono tracking-widest text-sm uppercase mb-4 block">0{idx + 1} // Phase</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">{panel.title}</h2>
                <p className="text-gray-500 text-lg md:text-xl max-w-sm leading-relaxed">{panel.desc}</p>
              </div>
            </div>

            {/* Right Scrolling Image */}
            <div className="w-full md:w-1/2 p-4 md:p-12">
              <div className="w-full aspect-[3/4] md:h-[800px] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <img 
                  src={panel.src} 
                  alt={panel.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}
