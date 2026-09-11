"use client";
import React, { useState, useEffect } from "react";
import { Zap, Gauge, BatteryCharging, ChevronRight } from "lucide-react";

export default function Hero33() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-33") {
        setIsNewTabDemo(true);
        document.body.style.overflow = "hidden";
      } else {
        setIsNewTabDemo(false);
        document.body.style.overflow = "unset";
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // ================= 2. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex flex-col items-center justify-between overflow-hidden bg-black text-white transition-all duration-700 ${isFullDemo ? 'h-[100dvh]' : 'h-[600px] sm:h-[700px] lg:h-[85vh]'}`}>
      
      {/* Background Car Image with subtle zoom-out effect */}
      <div className="absolute inset-0 z-0">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slow-zoom-out {
            0% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .animate-zoom-out { animation: slow-zoom-out 4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        `}} />
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2941&auto=format&fit=crop" 
          alt="Electric Vehicle" 
          className="w-full h-full object-cover object-center animate-zoom-out"
        />
      </div>

      {/* TOP TEXT: Model Name & Tagline */}
      <div className={`relative z-20 pt-16 sm:pt-24 lg:pt-32 text-center flex flex-col items-center px-4 ${isFullDemo ? 'animate-in fade-in slide-in-from-top-10 duration-1000 delay-300' : ''}`}>
        {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-bold tracking-widest uppercase text-white drop-shadow-lg leading-none mb-2">
          Aether <span className="text-gray-400">X</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase text-gray-300 font-medium">
          Beyond Performance
        </p> */}

        <h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-bold tracking-widest uppercase text-white drop-shadow-lg leading-none mb-2">
  Aether <span className="text-gray-400">X</span>
</h1>

<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] tracking-[0.3em] uppercase text-gray-300 font-medium">
  Beyond Performance
</p>
      </div>

      {/* BOTTOM AREA: Specs Bar & CTA */}
      <div className={`relative z-20 w-full flex flex-col items-center pb-8 sm:pb-12 ${isFullDemo ? 'animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500' : ''}`}>
        
        {/* Stats Row (Tesla Style) */}
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-12 md:gap-20 lg:gap-32 mb-8 sm:mb-10 px-4 w-full">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 sm:gap-2 text-white mb-1">
              <Gauge size={20} className="sm:w-6 sm:h-6" />
              <span className="text-xl sm:text-3xl lg:text-4xl font-bold">1.99<span className="text-sm sm:text-lg lg:text-xl font-medium">s</span></span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase">0-60 mph*</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 sm:gap-2 text-white mb-1">
              <Zap size={20} className="sm:w-6 sm:h-6" />
              <span className="text-xl sm:text-3xl lg:text-4xl font-bold">200<span className="text-sm sm:text-lg lg:text-xl font-medium">mph</span></span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase">Top Speed</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 sm:gap-2 text-white mb-1">
              <BatteryCharging size={20} className="sm:w-6 sm:h-6" />
              <span className="text-xl sm:text-3xl lg:text-4xl font-bold">396<span className="text-sm sm:text-lg lg:text-xl font-medium">mi</span></span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase">Max Range</p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0">
          <button className="w-full sm:w-64 bg-white text-black py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
            Order Now
          </button>
          <button className="w-full sm:w-64 bg-black/50 backdrop-blur-md text-white border-2 border-white/20 py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            Demo Drive <ChevronRight size={16} />
          </button>
        </div>
      </div>

    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-black w-screen h-screen overflow-hidden">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-33"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-white text-black text-[10px] sm:text-xs rounded-sm font-bold hover:bg-gray-200 transition-all flex items-center gap-2 z-10 shadow-xl uppercase tracking-widest"
      >
        <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Full Screen Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-black">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}