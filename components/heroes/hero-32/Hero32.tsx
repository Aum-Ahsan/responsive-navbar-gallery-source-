"use client";
import React from "react";
import { ArrowRight, Utensils, MapPin, Clock, Star } from "lucide-react";

export default function Hero32() {
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl bg-[#0c0c0c] rounded-xl">
        
        {/* HERO SECTION */}
        <section className="relative w-full flex flex-col sm:flex-row overflow-hidden bg-[#0c0c0c] text-[#f9f9f9] min-h-[700px] lg:min-h-[650px] xl:min-h-[750px]">
          
          {/* Custom CSS for Slow Zoom */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes slow-zoom {
              0% { transform: scale(1); }
              100% { transform: scale(1.15); }
            }
            .animate-slow-zoom { animation: slow-zoom 20s alternate infinite ease-in-out; }
          `}} />

          {/* LEFT COLUMN: High-Res Image (50%) */}
          <div className="w-full lg:w-1/2 h-[240px] sm:h-[200px] sm:h-[260px] lg:h-[300px] lg:h-[350px] sm:h-[180px] sm:h-[240px] lg:h-[280px] sm:h-[380px] lg:h-[450px] lg:h-auto relative overflow-hidden bg-zinc-900">
            {/* Dark overlay for better text blend on image */}
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2000" 
              alt="Fine Dining Plating" 
              className="w-full h-full object-cover animate-slow-zoom"
            />
            
            {/* Floating Michelin Badge on Image */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-3 flex flex-col items-center justify-center">
              <div className="flex gap-1 text-[#c5a059] mb-1">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Michelin Guide</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Content (50%) */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center p-8 sm:p-12 lg:p-10 xl:p-16 relative z-20 my-auto">
            
            {/* Subtle Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

            <div className="relative z-10 w-full max-w-lg mx-auto lg:mx-0">
              
              {/* Top Badge */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 text-[#c5a059]">
                <Utensils size={20} />
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">Est. 1998</span>
              </div>
{/*               
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-6">
                A Culinary <br />
                <span className="italic text-[#c5a059]">Journey</span> Beyond <br />
                The Ordinary.
              </h1>
              
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-10 font-light">
                Experience the finest seasonal ingredients, masterfully crafted by our award-winning chefs. Every dish tells a story of passion, tradition, and modern innovation.
              </p> */}

              {/* Headline - Using font-serif for a premium look */}
<h1 className="font-serif !text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-light leading-[1.1] mb-6">
  A Culinary <br />
  <span className="italic text-[#c5a059]">Journey</span> Beyond <br />
  The Ordinary.
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-400 leading-relaxed mb-10 font-light">
  Experience the finest seasonal ingredients, masterfully crafted by our award-winning chefs. Every dish tells a story of passion, tradition, and modern innovation.
</p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 sm:mb-16">
                <button className="w-full sm:w-auto bg-[#c5a059] text-black px-8 py-3.5 sm:py-4 font-bold text-sm tracking-wider uppercase hover:bg-[#d6b46b] transition-colors flex items-center justify-center gap-2 rounded-none">
                  Reserve a Table
                </button>
                <button className="w-full sm:w-auto bg-transparent text-white border border-white/20 px-8 py-3.5 sm:py-4 font-bold text-sm tracking-wider uppercase hover:border-[#c5a059] hover:text-[#c5a059] transition-colors flex items-center justify-center gap-2 rounded-none">
                  View Menu <ArrowRight size={16} />
                </button>
              </div>

              {/* Info Footer (Address & Hours) */}
              <div className="flex flex-col sm:flex-row justify-between gap-6 pt-8 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#c5a059] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-1">Location</p>
                    <p className="text-xs text-gray-500">124 Culinary Ave,<br />New York, NY 10012</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#c5a059] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-1">Dinner Hours</p>
                    <p className="text-xs text-gray-500">Tue - Sun<br />5:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </section>

      </div>
    </div>
  );
}