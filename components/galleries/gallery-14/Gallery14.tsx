"use client";
import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function Gallery14() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const projects = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'Urban Runner', client: 'Nike' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'Studio Sound', client: 'Sony' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'Time Tracking', client: 'Apple' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'Code Environment', client: 'VS Code' },
    { id: 5, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766', title: 'Minimalist Desk', client: 'IKEA' },
    { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b', title: 'Summer Collection', client: 'Zara' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Expandable Grid</h2>
        <p className="text-gray-500">Click a project to expand it inline for more details.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;
          
          return (
            <div 
              key={project.id}
              onClick={() => !isExpanded && setExpandedId(project.id)}
              className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isExpanded ? 'col-span-1 sm:col-span-2 lg:col-span-3 row-span-2 cursor-default bg-gray-900 shadow-2xl' : 'cursor-pointer hover:shadow-lg bg-gray-100 group'}
              `}
            >
              <div className={`absolute transition-all duration-700 ${isExpanded ? 'inset-y-4 inset-x-4 lg:w-1/2 rounded-2xl overflow-hidden' : 'inset-0'}`}>
                <img 
                  src={project.src} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${!isExpanded && 'group-hover:scale-110'}`}
                />
                {!isExpanded && <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>}
              </div>

              {/* Collapsed State Overlay */}
              {!isExpanded && (
                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="px-3 py-1 bg-white rounded-full text-black text-xs font-bold shadow-sm">{project.client}</span>
                </div>
              )}

              {/* Expanded State Content */}
              {isExpanded && (
                <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-500 delay-300">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
                    className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <span className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4">Case Study</span>
                  <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">{project.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                    This inline expansion pattern is perfect for portfolios. It allows users to dive deeper into a project without leaving the current page context or opening a modal.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 border border-gray-700 rounded-lg">
                      <p className="text-xs text-gray-500 font-semibold mb-1">Client</p>
                      <p className="text-white font-bold">{project.client}</p>
                    </div>
                    <div className="px-4 py-2 border border-gray-700 rounded-lg">
                      <p className="text-xs text-gray-500 font-semibold mb-1">Role</p>
                      <p className="text-white font-bold">Art Direction</p>
                    </div>
                  </div>

                  <button className="mt-8 flex items-center gap-2 text-white hover:text-gray-300 font-bold transition-colors w-fit group/btn">
                    View Full Project <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}
