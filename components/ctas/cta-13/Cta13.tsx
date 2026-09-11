"use client";
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function Cta13() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="relative rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 min-h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px] flex items-center justify-center">
        
        {/* Placeholder for Video Background */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${playing ? 'opacity-100' : 'opacity-40 blur-sm scale-105'}`}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Overlay when not playing */}
        {!playing && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        )}

        <div className={`relative z-10 p-8 sm:p-16 text-center transition-all duration-700 ${playing ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-bold mb-8 text-white uppercase tracking-widest">
            Brand Film
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl sm:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-lg max-w-3xl mx-auto leading-tight">
            Experience the unseen standard of design.
          </h2>

          <button 
            onClick={() => setPlaying(true)}
            className="w-24 h-24 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full flex items-center justify-center mx-auto transition-all hover:scale-110 group"
          >
            <Play size={32} className="ml-2 group-hover:text-emerald-400 transition-colors" fill="currentColor" />
          </button>
          <div className="mt-6 text-white/70 font-medium">Watch the 2-minute film</div>
        </div>

        {/* Close Video Button */}
        {playing && (
          <button 
            onClick={() => setPlaying(false)}
            className="absolute top-8 right-8 w-12 h-12 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur transition-all animate-in fade-in z-20"
          >
            <X size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
