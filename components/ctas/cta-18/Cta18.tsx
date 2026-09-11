"use client";
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Cta18() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="relative rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden p-5 sm:p-8 lg:p-10 sm:p-20 text-center flex flex-col items-center">
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-600 animate-[gradient_8s_ease_infinite]" style={{ backgroundSize: '200% 200%' }}></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-8">
            <Sparkles size={14} /> Next Generation
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg max-w-3xl mx-auto leading-tight">
            Stop coding from scratch. <br className="hidden sm:block"/>Start assembling.
          </h2>
          
          <p className="text-white/80 text-lg sm:text-xl font-medium mb-12 max-w-2xl mx-auto">
            Gain access to our premium library of 500+ animated, accessible, and highly customizable React components.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-violet-900 font-black rounded-xl hover:bg-gray-50 transition-colors shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-lg">
              Get Lifetime Access <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </div>
  );
}
