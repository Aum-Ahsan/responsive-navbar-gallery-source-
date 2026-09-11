"use client";
import React from 'react';
import { BookOpen, Download, Star } from 'lucide-react';

export default function Cta05() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-amber-50 rounded-3xl border border-amber-200 overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Left: Book Visual (3D effect) */}
        <div className="w-full md:w-5/12 bg-amber-500 p-5 sm:p-8 lg:p-10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_100%)]"></div>
          
          <div className="relative z-10 w-48 h-64 sm:w-64 sm:h-80 bg-slate-900 rounded-r-2xl rounded-l-md shadow-[20px_20px_40px_rgba(0,0,0,0.4)] transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 border-l-[12px] border-slate-800 flex flex-col p-6 text-white justify-between">
            <div>
              <div className="text-amber-400 font-bold tracking-widest text-xs mb-2 uppercase">Definitive Guide</div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">Mastering<br/>React<br/>Patterns</h3>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
              </div>
              <BookOpen className="text-slate-500" size={24}/>
            </div>
            
            {/* Book pages effect */}
            <div className="absolute top-2 bottom-2 -right-3 w-3 bg-white rounded-r-md border-y border-r border-gray-300 z-[-1] shadow-inner"></div>
          </div>
        </div>

        {/* Right: Content & Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-6 w-max">
            Free E-Book Download
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            Level up your component architecture.
          </h2>
          
          <p className="text-slate-600 mb-8 text-lg">
            Download our 50-page definitive guide on building scalable, accessible, and highly reusable React components.
          </p>
          
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none font-medium"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none font-medium"
                required
              />
            </div>
            
            <button className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-black rounded-xl shadow-[0_4px_0_rgb(217,119,6)] hover:shadow-[0_2px_0_rgb(217,119,6)] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 text-lg">
              <Download size={20} /> Download Free Guide
            </button>
          </form>
          
          <p className="text-xs text-slate-400 mt-6 text-center font-medium">
            By downloading, you agree to receive our weekly engineering newsletter. Opt-out anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
