"use client";
import React from 'react';
import { Compass } from 'lucide-react';

export default function Newsletter34() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px] flex items-center justify-center p-8 sm:p-12">
        
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")' }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 w-full max-w-2xl text-center flex flex-col items-center">
          <Compass className="text-white/80 mb-6" size={48} strokeWidth={1} />
          
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">
            Wanderlust, Weekly.
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-10 drop-shadow-md font-medium">
            Discover hidden gems, exclusive travel deals, and inspiring itineraries before anyone else.
          </p>

          <form className="w-full flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Where should we send the postcards?"
              className="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:bg-white/10 rounded-xl transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Sign Me Up
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
