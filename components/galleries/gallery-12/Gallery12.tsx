"use client";
import React from 'react';
import { Bookmark, Heart, Share2 } from 'lucide-react';

export default function Gallery12() {
  const pins = [
    { id: 1, src: 'https://images.unsplash.com/photo-1512496015851-a1dc8a4781df', title: 'Minimal Setup', author: 'Design Co', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', aspect: 'aspect-[3/4]' },
    { id: 2, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Sneaker Drop', author: 'Hype Beast', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', aspect: 'aspect-[4/5]' },
    { id: 3, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Developer Desk', author: 'Tech Life', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', aspect: 'aspect-[1/1]' },
    { id: 4, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', title: 'Creative Studio', author: 'Art Space', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', aspect: 'aspect-[4/3]' },
    { id: 5, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Wireless Audio', author: 'Sound Lab', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', aspect: 'aspect-[3/4]' },
    { id: 6, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Smart Watch', author: 'Gadget Grid', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', aspect: 'aspect-[1/1]' },
    { id: 7, src: 'https://images.unsplash.com/photo-1503602642458-2322119d4411', title: 'Typography', author: 'Type Foundry', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', aspect: 'aspect-[4/5]' },
    { id: 8, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', title: 'Summer Vibes', author: 'Travel Log', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', aspect: 'aspect-[3/4]' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 font-sans bg-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Inspiration Board</h2>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {pins.map((pin) => (
          <div key={pin.id} className="break-inside-avoid relative group">
            <div className={`relative w-full rounded-2xl overflow-hidden cursor-zoom-in ${pin.aspect}`}>
              <img src={pin.src} alt={pin.title} className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-md">
                    Save
                  </button>
                </div>
                <div className="flex justify-between items-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white shadow-sm">
                    <Share2 size={16} />
                  </button>
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white shadow-sm">
                    <Heart size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Meta Info Below Image */}
            <div className="mt-3 flex items-start gap-3 px-1">
              <img src={pin.avatar} alt={pin.author} className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
              <div>
                <h3 className="font-bold text-sm text-gray-900 leading-tight">{pin.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{pin.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
