"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery30() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', rot: '-12deg', label: 'Air Max', className: 'top-[15%] left-[5%] w-[140px] md:top-[10%] md:left-[15%] md:w-[200px]' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', rot: '8deg', label: 'Studio', className: 'top-[30%] left-[45%] w-[150px] md:top-[25%] md:left-[45%] md:w-[200px]' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', rot: '-5deg', label: 'Watch', className: 'top-[55%] left-[10%] w-[130px] md:top-[55%] md:left-[20%] md:w-[200px]' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', rot: '15deg', label: 'Code', className: 'top-[65%] left-[50%] w-[150px] md:top-[45%] md:left-[65%] md:w-[200px]' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', rot: '-8deg', label: 'Design', className: 'top-[18%] left-[60%] w-[120px] md:top-[15%] md:left-[75%] md:w-[200px]' },
  ];

  return (
    <div className="w-full h-[700px] bg-[#d3cbb8] font-sans relative overflow-hidden" 
         style={{ backgroundImage: 'radial-gradient(#b8b09d 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/5 px-6 py-2 rounded-full backdrop-blur-sm border border-black/10 text-black font-bold uppercase tracking-widest text-sm z-0">
        Polaroid Pinboard
      </div>

      {photos.map((photo) => {
        const isActive = activePhoto === photo.id;
        
        return (
          <div 
            key={photo.id}
            onClick={() => !isActive && setActivePhoto(photo.id)}
            className={`absolute p-2 pb-10 md:p-3 md:pb-12 bg-white rounded-sm shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center
              ${isActive 
                ? 'z-50 cursor-default top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px]' 
                : `z-10 cursor-pointer hover:scale-110 hover:z-20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${photo.className}`
              }
            `}
            style={isActive ? {} : { rotate: photo.rot }}
          >
            <div className="w-full aspect-square bg-gray-100 overflow-hidden relative">
              <img src={photo.src} alt={photo.label} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            {/* Handwritten Label */}
            <div className="absolute bottom-3 left-0 w-full text-center">
              <span className="font-medium text-gray-800 text-lg" style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}>
                {photo.label}
              </span>
            </div>

            {/* Close Button for Active State */}
            {isActive && (
              <button 
                onClick={(e) => { e.stopPropagation(); setActivePhoto(null); }}
                className="absolute -top-4 -right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <X size={20} />
              </button>
            )}
            
            {/* Thumbtack / Tape (Visual detail when not active) */}
            {!isActive && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/40 backdrop-blur-md border border-white/50 shadow-sm rotate-3"></div>
            )}
          </div>
        )
      })}
      
      {/* Lightbox Overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-700 z-40 
          ${activePhoto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setActivePhoto(null)}
      ></div>

    </div>
  );
}
