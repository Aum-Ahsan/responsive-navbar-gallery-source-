"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Cta12() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-[#f0f0ed] rounded-[3rem] p-8 sm:p-16 lg:p-24 flex flex-col items-center text-center">
        
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[#151515] mb-8 leading-[0.9]">
          READY TO <br /> <span className="text-[#a0a09b]">DEPLOY?</span>
        </h2>
        
        <p className="text-[#5c5c57] text-xl sm:text-2xl font-medium max-w-2xl mb-16 tracking-tight">
          Join the fastest growing network of edge developers. Ship your next project in milliseconds.
        </p>

        <a 
          href="#deploy" 
          className="group relative inline-flex items-center justify-center px-12 py-6 bg-[#151515] text-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
          
          <span className="relative z-10 flex items-center gap-3 text-2xl font-bold tracking-tight group-hover:text-[#151515] transition-colors duration-300">
            Start Building <ArrowUpRight size={28} className="group-hover:rotate-45 transition-transform duration-300" />
          </span>
        </a>
      </div>
    </div>
  );
}
