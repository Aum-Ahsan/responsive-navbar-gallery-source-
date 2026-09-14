"use client";
import React from 'react';

export default function Gallery61() {
  return (
    <div className="w-full bg-[#f4f2ec] py-24 font-serif text-[#333]">
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.1)] bg-white rounded-sm overflow-hidden">
        
        {/* Left Page (Image) */}
        <div className="w-full md:w-1/2 p-6 md:p-12 border-r border-[#ddd]">
          <div className="w-full h-[50vh] md:h-full min-h-[500px] relative rounded overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
              alt="Editorial Cover" 
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50"
            />
            {/* Magazine text overlay */}
            <div className="absolute top-6 left-6 text-white mix-blend-difference">
              <span className="uppercase tracking-[0.3em] text-xs font-sans font-bold">Vol. 42 / Issue 01</span>
            </div>
          </div>
        </div>

        {/* Right Page (Text) */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
            The Shape <br/>
            <span className="italic font-light text-gray-500">of Design</span>
          </h2>

          <div className="columns-1 sm:columns-2 gap-8 text-sm leading-relaxed text-justify">
            <p className="mb-4">
              <span className="float-left text-6xl font-bold leading-none pr-2 pt-2">L</span>
              orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p className="mb-4">
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-black/20 font-sans uppercase tracking-[0.2em] text-xs font-bold text-center">
            Read Full Article
          </div>

        </div>

      </div>

    </div>
  );
}
