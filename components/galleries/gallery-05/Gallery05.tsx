"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery05() {
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  const images = [
    { src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9', title: 'Summer \'23', rotate: '-rotate-6', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-[10]' },
    { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800', title: 'Roadtrip', rotate: 'rotate-3', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-[20]' },
    { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9', title: 'Portraits', rotate: '-rotate-2', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-[30]' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', title: 'Beach Day', rotate: 'rotate-6', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-[40]' },
    { src: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664', title: 'Workspace', rotate: '-rotate-4', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-[50]' },
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Coding', rotate: 'rotate-5', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-[60]' },
    { src: 'https://images.unsplash.com/photo-1481481303859-f789d972741d', title: 'Coffee', rotate: '-rotate-8', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-[70]' },
    { src: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5', title: 'City', rotate: 'rotate-4', x: '-translate-x-1/2', y: '-translate-y-1/2', z: 'z-[80]' },
  ];

  const scatterClasses = [
    // Top row
    "group-hover:-translate-x-[180%] group-hover:-translate-y-[120%] group-hover:-rotate-6",
    "group-hover:-translate-x-[60%] group-hover:-translate-y-[130%] group-hover:rotate-2",
    "group-hover:translate-x-[60%] group-hover:-translate-y-[120%] group-hover:-rotate-3",
    "group-hover:translate-x-[180%] group-hover:-translate-y-[135%] group-hover:rotate-6",
    // Bottom row
    "group-hover:-translate-x-[170%] group-hover:translate-y-[20%] group-hover:rotate-3",
    "group-hover:-translate-x-[50%] group-hover:translate-y-[30%] group-hover:-rotate-2",
    "group-hover:translate-x-[70%] group-hover:translate-y-[20%] group-hover:rotate-4",
    "group-hover:translate-x-[190%] group-hover:translate-y-[35%] group-hover:-rotate-3",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans overflow-hidden">
      <div className="text-center mb-40 relative z-50">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 font-serif italic">Memories</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Hover over the stack to scatter the photos and reveal the hidden moments. A playful, tactile approach to image galleries.</p>
      </div>

      <div className="relative h-[800px] w-full flex items-center justify-center group perspective-1000">
        {/* The target area that triggers the hover effect is the container itself */}

        <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center">
          {images.map((img, idx) => {
            const scatterClass = scatterClasses[idx] || "";

            return (
              <div 
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`absolute top-1/2 left-1/2 w-64 p-3 pb-12 bg-white rounded-sm shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${img.rotate} ${img.x} ${img.y} ${img.z}
                  ${scatterClass} group-hover:scale-110 group-hover:z-50
                  hover:!scale-125 hover:!z-[90] hover:!rotate-0 cursor-pointer
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

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedImage(null)}
          ></div>
          <div className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md"
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            />
            <p className="text-white mt-4 font-handwriting text-2xl">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
