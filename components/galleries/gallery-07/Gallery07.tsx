"use client";
import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Gallery07() {
  const projects = [
    { id: '01', title: 'Desert Oasis', category: 'Architecture', src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff' },
    { id: '02', title: 'Neon Nights', category: 'Photography', src: 'https://images.unsplash.com/photo-1555448248-2571daf6344b' },
    { id: '03', title: 'Minimal Workspace', category: 'Interior', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
    { id: '04', title: 'Alpine Retreat', category: 'Landscape', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b' },
    { id: '05', title: 'Urban Exploration', category: 'Cityscape', src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607' },
    { id: '06', title: 'Modern Concept', category: 'Design', src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853' },
    { id: '07', title: 'Abstract Flow', category: 'Art', src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Sticky Sidebar */}
        <div className="lg:w-1/3 flex flex-col justify-start relative lg:sticky top-32 h-fit mb-12 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-800 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Now Scrolling
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Curated<br />Exhibition.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Scroll down to explore our hand-picked selection of high-fidelity projects. This split-screen layout keeps the context firmly in view while the visual journey continues.
          </p>
          <div className="flex items-center gap-4 text-gray-400 font-medium">
            Scroll <ArrowDown size={20} className="animate-bounce" />
          </div>
        </div>

        {/* Scrollable Gallery */}
        <div className="lg:w-2/3 flex flex-col gap-12 lg:gap-32">
          {projects.map((project) => (
            <div key={project.id} className="group relative w-full aspect-[4/5] sm:aspect-[16/10] bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={project.src} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0"></div>
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <span className="text-white/60 text-sm font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="text-white/40 text-5xl md:text-7xl font-black leading-none">
                  {project.id}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
