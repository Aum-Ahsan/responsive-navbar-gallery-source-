"use client";
import React, { useState, useEffect } from "react";
import { Play, Battery, VolumeX, Waves } from "lucide-react";

export default function Hero28() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-28") {
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

  // ================= 2. REUSABLE HERO UI =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex flex-col items-center overflow-hidden bg-black text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] pt-20 lg:pt-32' : 'pt-16 pb-10 lg:h-[80vh] min-h-[750px]'}`}>
      
      {/* Background Gradient */}
      <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-gray-900 to-black z-0 pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] md:w-[50%] h-[30%] bg-blue-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* TOP TEXT */}
      <div className={`relative z-10 flex flex-col items-center text-center px-5 sm:px-8 max-w-4xl mx-auto ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
        <h2 className="text-gray-400 font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
          All-New Release
        </h2>
        {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
          Aura Pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Max.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-8">
          High-Fidelity Audio. Redefined entirely.
        </p> */}

<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
  Aura Pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Max.</span>
</h1>

<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-300 font-medium mb-8">
  High-Fidelity Audio. Redefined entirely.
</p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform duration-300">
            Buy Now - $549
          </button>
          <button className="w-full sm:w-auto text-white group flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm sm:text-base hover:text-gray-300 transition-colors">
            Watch the film 
            <Play size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* CENTER FLOATING PRODUCT */}
      <div className={`relative z-20 mt-12 sm:mt-16 lg:mt-20 w-full max-w-[280px] sm:max-w-[350px] md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000 delay-300' : ''}`}>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float-product {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float-product { animation: float-product 6s ease-in-out infinite; }
          .hotspot-pulse::before {
            content: ''; position: absolute; inset: -8px; border-radius: 50%;
            background: rgba(255,255,255,0.4); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}} />

        <div className="relative animate-float-product drop-shadow-[0_30px_30px_rgba(255,255,255,0.05)]">
          
          {/* ✅ FIXED IMAGE URL HERE ✅ */}
          <img 
            src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800" 
            alt="Premium Headphones" 
            className="w-full h-auto object-contain mix-blend-lighten scale-110 sm:scale-100"
          />

          {/* Hotspot 1: ANC */}
          <div 
            className="absolute top-[45%] left-[15%] sm:left-[20%] z-30"
            onMouseEnter={() => setActiveTooltip('anc')}
            onMouseLeave={() => setActiveTooltip(null)}
            onClick={() => setActiveTooltip(activeTooltip === 'anc' ? null : 'anc')}
          >
            <div className="relative w-4 h-4 bg-white rounded-full cursor-pointer hotspot-pulse shadow-[0_0_15px_white]"></div>
            <div className={`absolute top-8 -left-16 sm:left-0 w-48 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl transition-all duration-300 pointer-events-none ${activeTooltip === 'anc' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <div className="flex items-center gap-2 mb-1 text-white">
                <VolumeX size={16} className="text-blue-400" />
                <span className="font-bold text-xs sm:text-sm">Pro ANC</span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-300 leading-tight">Blocks 99% of ambient noise in real-time.</p>
            </div>
          </div>

          {/* Hotspot 2: Battery */}
          <div 
            className="absolute top-[10%] left-[50%] -translate-x-1/2 z-30"
            onMouseEnter={() => setActiveTooltip('battery')}
            onMouseLeave={() => setActiveTooltip(null)}
            onClick={() => setActiveTooltip(activeTooltip === 'battery' ? null : 'battery')}
          >
            <div className="relative w-4 h-4 bg-white rounded-full cursor-pointer hotspot-pulse shadow-[0_0_15px_white]"></div>
            <div className={`absolute bottom-8 -left-20 sm:-left-24 w-48 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl transition-all duration-300 pointer-events-none ${activeTooltip === 'battery' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <div className="flex items-center gap-2 mb-1 text-white">
                <Battery size={16} className="text-green-400" />
                <span className="font-bold text-xs sm:text-sm">40-Hour Battery</span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-300 leading-tight">Listen continuously for days on a single charge.</p>
            </div>
          </div>

          {/* Hotspot 3: Spatial Audio */}
          <div 
            className="absolute top-[45%] right-[10%] sm:right-[15%] z-30"
            onMouseEnter={() => setActiveTooltip('spatial')}
            onMouseLeave={() => setActiveTooltip(null)}
            onClick={() => setActiveTooltip(activeTooltip === 'spatial' ? null : 'spatial')}
          >
            <div className="relative w-4 h-4 bg-white rounded-full cursor-pointer hotspot-pulse shadow-[0_0_15px_white]"></div>
            <div className={`absolute top-8 -right-16 sm:right-0 w-48 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl transition-all duration-300 pointer-events-none ${activeTooltip === 'spatial' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              <div className="flex items-center gap-2 mb-1 text-white">
                <Waves size={16} className="text-purple-400" />
                <span className="font-bold text-xs sm:text-sm">Spatial Audio</span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-300 leading-tight">Theater-like sound that surrounds you completely.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

  // ================= VIEW 1: NEW TAB =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-black w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW =================
  return (
    <div className="relative w-full py-10 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      <a
        href="#demo-28"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-white text-black text-[10px] sm:text-xs rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 border border-gray-300 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></span>
        <span className="hidden sm:block">View Interactive Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 rounded-xl shadow-2xl bg-black">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}