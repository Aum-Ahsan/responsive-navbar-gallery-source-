"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Gallery02() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-8">
        <div>
          <p className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-2">Editorial Layout</p>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Bento Grid.</h2>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-semibold">
          View All Work <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {/* Large Featured */}
        <div className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-indigo-300 font-semibold mb-2">01 / Featured Architecture</p>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">Modern Villas & Minimalist Living Spaces.</h3>
          </div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100">
            <ArrowUpRight size={20} className="text-black" />
          </div>
        </div>

        {/* Medium Horizontal */}
        <div className="group relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
          <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5" alt="Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-bold">Interior Lighting</h3>
            <p className="text-gray-300 text-sm mt-1">Ambient setups</p>
          </div>
        </div>

        {/* Small Square 1 */}
        <div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" alt="Furniture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-bold">Furniture</h3>
          </div>
        </div>

        {/* Small Square 2 */}
        <div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7" alt="Decor" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-bold">Decor</h3>
          </div>
        </div>

        {/* Wide Bottom */}
        <div className="group relative md:col-span-4 md:row-span-1 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
          <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607" alt="Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-y-0 left-0 p-8 flex flex-col justify-center text-white max-w-xl">
            <p className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-2">Case Study</p>
            <h3 className="text-3xl font-bold mb-4">Integrating Nature with Urban Planning</h3>
            <span className="inline-flex items-center gap-2 text-sm font-semibold hover:text-indigo-300 transition-colors">
              Read the story <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
