"use client";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Gallery44() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Architecture', date: 'Oct 2023', src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', desc: 'Exploring the geometry of urban landscapes and structural forms.' },
    { title: 'Portraits', date: 'Nov 2023', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', desc: 'Intimate captures focusing on raw emotion and natural lighting.' },
    { title: 'Automotive', date: 'Dec 2023', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', desc: 'The intersection of engineering, speed, and sleek industrial design.' },
    { title: 'Abstract', date: 'Jan 2024', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', desc: 'Playing with light, shadow, and extreme close-ups to distort reality.' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 font-sans">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-[600px] lg:h-[700px]">
        
        {/* Tabs List */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center h-full">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-2">Collections</h2>
            <p className="text-gray-500 font-medium">Select a category to explore.</p>
          </div>
          
          <div className="flex flex-col gap-2">
            {tabs.map((tab, idx) => (
              <div 
                key={idx}
                className={`flex items-center justify-between p-6 cursor-pointer border-l-4 transition-all duration-300
                  ${activeTab === idx ? 'bg-gray-100 border-black' : 'bg-transparent border-transparent hover:bg-gray-50'}
                `}
                onClick={() => setActiveTab(idx)}
              >
                <div>
                  <h3 className={`text-xl font-bold transition-colors ${activeTab === idx ? 'text-gray-900' : 'text-gray-500'}`}>{tab.title}</h3>
                  <span className="text-xs text-gray-400 font-mono tracking-widest uppercase mt-1 block">{tab.date}</span>
                </div>
                <ChevronRight size={20} className={`transition-transform duration-300 ${activeTab === idx ? 'text-black translate-x-2' : 'text-gray-300'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Image Display */}
        <div className="w-full lg:w-2/3 h-full relative rounded-3xl overflow-hidden shadow-2xl">
          {tabs.map((tab, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
            >
              <img src={tab.src} alt={tab.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 max-w-md">
                <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-md">{tab.title}</h2>
                <p className="text-white/80 text-lg leading-relaxed drop-shadow">{tab.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
