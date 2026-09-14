"use client";
import React from 'react';

export default function Gallery05() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', title: 'Summer \'23', rotate: '-rotate-6', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-10' },
    { src: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178', title: 'Roadtrip', rotate: 'rotate-3', x: '-translate-x-1/3', y: '-translate-y-2/3', z: 'z-20' },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', title: 'Portraits', rotate: '-rotate-2', x: '-translate-x-2/3', y: '-translate-y-1/3', z: 'z-30' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', title: 'Beach Day', rotate: 'rotate-6', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-40' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans overflow-hidden">
      <div className="text-center mb-20 relative z-50">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 font-serif italic">Memories</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Hover over the stack to scatter the photos and reveal the hidden moments. A playful, tactile approach to image galleries.</p>
      </div>

      <div className="relative h-[500px] w-full flex items-center justify-center group perspective-1000">
        {/* The target area that triggers the hover effect */}
        <div className="absolute inset-0 z-50 cursor-crosshair"></div>

        <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center">
          {images.map((img, idx) => {
            // Calculate scattered positions based on index
            const scatterX = idx === 0 ? '-translate-x-[150%]' : idx === 1 ? '-translate-x-[50%]' : idx === 2 ? 'translate-x-[50%]' : 'translate-x-[150%]';
            const scatterY = idx % 2 === 0 ? '-translate-y-4' : 'translate-y-4';
            const scatterRotate = idx === 0 ? '-rotate-12' : idx === 1 ? 'rotate-2' : idx === 2 ? '-rotate-6' : 'rotate-12';

            return (
              <div 
                key={idx}
                className={`absolute top-1/2 left-1/2 w-64 p-3 pb-12 bg-white rounded-sm shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${img.rotate} ${img.x} ${img.y} ${img.z}
                  group-hover:${scatterX} group-hover:${scatterY} group-hover:${scatterRotate} group-hover:scale-110 group-hover:z-50
                  hover:!scale-125 hover:!z-[60] hover:!rotate-0
                `}
              >
                <div className="relative w-full aspect-square bg-gray-200 overflow-hidden mb-4 border border-gray-100">
                  <img src={img.src} alt={img.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p className="text-center font-handwriting text-xl text-gray-800">{img.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
