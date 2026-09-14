"use client";
import React from 'react';
import { Maximize2, Heart } from 'lucide-react';

export default function Gallery01() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', aspect: 'aspect-[4/3]', title: 'Workspace Setup', category: 'Tech' },
    { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', aspect: 'aspect-[3/4]', title: 'Premium Audio', category: 'Product' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', aspect: 'aspect-[1/1]', title: 'Creative Studio', category: 'Design' },
    { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', aspect: 'aspect-[3/4]', title: 'Smart Watch', category: 'Lifestyle' },
    { src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f', aspect: 'aspect-[4/3]', title: 'Vintage Camera', category: 'Photography' },
    { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', aspect: 'aspect-[1/1]', title: 'Sneaker Drop', category: 'Fashion' },
    { src: 'https://images.unsplash.com/photo-1503602642458-2322119d4411', aspect: 'aspect-[3/4]', title: 'Minimal Desk', category: 'Architecture' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">Masonry Collection</h2>
        <p className="text-gray-500 text-lg">A dynamic layout packing images beautifully without strict grid constraints. Hover to discover details.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, idx) => (
          <div key={idx} className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-gray-100">
            <div className={`w-full relative ${img.aspect} overflow-hidden`}>
              <img 
                src={img.src} 
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
                {/* Top Actions */}
                <div className="absolute top-4 right-4 flex gap-2 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                    <Maximize2 size={18} />
                  </button>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wider uppercase mb-3 inline-block">
                    {img.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
