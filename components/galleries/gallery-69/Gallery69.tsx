"use client";
import React from 'react';

export default function Gallery69() {
  const cards = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Phase 01', desc: 'Initial concept art.' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Phase 02', desc: 'Structural engineering.' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Phase 03', desc: 'Material selection.' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Phase 04', desc: 'Final execution.' },
  ];

  return (
    <div className="w-full bg-[#dfdfdf] py-24 px-4 font-sans">
      
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">Interactive Flip Grid</h2>
        <p className="text-gray-600">Hover over any image card to reveal detailed specifications hidden on the back.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div key={card.id} className="relative w-full aspect-[3/4] group perspective-1000 cursor-pointer">
            
            {/* The Inner Flipper */}
            <div className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* CSS Injection for hover flip */}
              <style dangerouslySetInnerHTML={{__html: `
                .group:hover > div {
                  transform: rotateY(180deg);
                }
              `}} />

              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                <img src={card.src} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Back Side */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl bg-white text-gray-900 shadow-xl border border-gray-200 flex flex-col items-center justify-center p-8 text-center backface-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <span className="text-gray-400 font-mono tracking-widest text-xs uppercase mb-4 block">{card.title}</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{card.desc}</h3>
                <div className="w-8 h-1 bg-black mb-6"></div>
                <p className="text-sm text-gray-500">Pure CSS 3D transforms ensure high performance hardware accelerated flipping animations.</p>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
