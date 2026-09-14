"use client";
import React, { useState } from 'react';
import { Filter } from 'lucide-react';

export default function Gallery04() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Branding', 'Photography', 'Product'];
  
  const portfolio = [
    { id: 1, src: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd', title: 'Minimalist Branding', category: 'Branding' },
    { id: 2, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Sneaker Drop', category: 'Product' },
    { id: 3, src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32', title: 'Analog Shots', category: 'Photography' },
    { id: 4, src: 'https://images.unsplash.com/photo-1512496015851-a1dc8a4781df', title: 'Coffee Packaging', category: 'Branding' },
    { id: 5, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Wireless Audio', category: 'Product' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', title: 'Nature Wonders', category: 'Photography' },
  ];

  const filtered = filter === 'All' ? portfolio : portfolio.filter(item => item.category === filter);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Selected Works</h2>
          <p className="text-gray-500 mt-2">Filter through our latest projects and case studies.</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
          <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full">
            <div className="pl-3 pr-2 text-gray-400">
              <Filter size={16} />
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap
                  ${filter === cat ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:text-black hover:bg-gray-200'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div key={item.id} className="group cursor-pointer animate-in fade-in zoom-in-95 duration-500">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <img 
                src={item.src} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.category}</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
