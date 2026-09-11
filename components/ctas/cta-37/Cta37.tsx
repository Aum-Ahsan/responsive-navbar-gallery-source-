"use client";
import React from 'react';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

export default function Cta37() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-[#fcfaf8] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-16 border border-[#e8e4df] shadow-[0_20px_60px_rgba(0,0,0,0.03)] text-center relative overflow-hidden">
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 flex flex-col items-center">
          
          <div className="relative mb-8 group cursor-pointer">
            <img src="https://i.pravatar.cc/150?img=32" alt="Profile" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute -bottom-2 right-0 bg-white px-3 py-1.5 rounded-full border border-[#e8e4df] shadow-sm flex items-center gap-2 group-hover:-translate-y-1 transition-transform">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-700">Available</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl font-black text-[#2d2a26] mb-6 tracking-tight font-serif">
            Let's build something beautiful.
          </h2>
          
          <p className="text-[#7b756d] text-lg sm:text-xl font-medium mb-10 max-w-xl mx-auto leading-relaxed">
            I'm currently accepting new projects for Q3. Whether you need a complete rebrand or a specialized UI system, I'm here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#2d2a26] hover:bg-black text-white font-bold rounded-full transition-colors shadow-lg flex items-center justify-center gap-2">
              <Mail size={18} /> Email Me <ArrowRight size={16} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#f5f2ed] border border-[#e8e4df] text-[#2d2a26] font-bold rounded-full transition-colors flex items-center justify-center gap-2">
              <Calendar size={18} /> Book Intro Call
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
