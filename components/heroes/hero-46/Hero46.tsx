"use client";
import React, { useState, useEffect } from "react";
import { CloudRain, Wind, Droplets, MapPin, Search, ArrowRight, Loader2, ThermometerSun } from "lucide-react";

export default function Hero46() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [isLocating, setIsLocating] = useState<boolean>(true);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-46") {
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

  // ================= 2. WEATHER SIMULATION LOGIC =================
  useEffect(() => {
    // Simulate finding user location and fetching weather data
    const timer = setTimeout(() => {
      setIsLocating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // ================= 3. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-[#1e293b] text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-16' : 'py-12 sm:py-16 lg:h-[85vh] min-h-[850px] lg:min-h-[700px]'}`}>
      
      {/* ================= BACKGROUND: DYNAMIC RAIN & CLOUDS ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] pointer-events-none">
        
        {/* Cloudy Glow Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[-10%] w-[70%] h-[60%] bg-slate-400/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full"></div>

        {/* CSS for ENHANCED Rain Particles */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes rain-fall {
            0% { transform: translateY(-100vh) rotate(15deg); opacity: 0; }
            10% { opacity: 0.8; } /* Increased opacity */
            80% { opacity: 0.8; }
            100% { transform: translateY(100vh) rotate(15deg); opacity: 0; }
          }
          .rain-drop {
            position: absolute;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.8)); /* Whiter drop */
            width: 2px; /* Thicker drop */
            height: 120px; /* Longer drop */
            animation: rain-fall linear infinite;
            filter: drop-shadow(0 0 5px rgba(255,255,255,0.5)); /* Glow effect */
          }
        `}} />

        {/* Generate 30 random raindrops using CSS (Increased count) */}
        {[...Array(30)].map((_, i) => {
          const left = Math.floor(Math.random() * 100);
          // Faster rain: 0.4s to 1.2s duration
          const duration = 0.4 + Math.random() * 0.8;
          const delay = Math.random() * 2;
          return (
            <div 
              key={i} 
              className="rain-drop" 
              style={{ 
                left: `${left}%`, 
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`
              }} 
            />
          );
        })}
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 mt-4 lg:mt-0 ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
        
        {/* LEFT: Text & Search */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-blue-300 shadow-sm uppercase tracking-wider backdrop-blur-md">
            <ThermometerSun size={16} className="text-amber-400" /> Next-Gen Climate Tech
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1] text-white">
            Weather intelligence <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-slate-300 to-white">
              for the real world.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-slate-300 max-w-[95%] sm:max-w-xl lg:max-w-md xl:max-w-lg mb-8 sm:mb-10 leading-relaxed font-medium">
            Hyper-local forecasts, severe weather alerts, and historical climate data. Powered by advanced predictive AI models.
          </p>
          
          {/* Search Box */}
          <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg flex items-center gap-2 mb-8">
            <div className="pl-3 sm:pl-4 text-slate-400">
              <Search size={18} className="sm:w-5 sm:h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search city or zip code..." 
              className="flex-1 bg-transparent border-none text-white text-sm sm:text-base font-medium placeholder:text-slate-400 focus:outline-none w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            <p>Trusted by: <span className="text-white font-bold ml-1">Airlines</span></p>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
            <p><span className="text-white font-bold">Agriculture</span></p>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 hidden sm:block"></span>
            <p className="hidden sm:block"><span className="text-white font-bold">Logistics</span></p>
          </div>

        </div>

        {/* RIGHT: Glassmorphic Weather Widget */}
        <div className={`w-full lg:w-[450px] xl:w-[500px] ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000 delay-300' : ''}`}>
          
          {/* The Widget Container */}
          <div className="relative bg-slate-900/40 backdrop-blur-2xl rounded-3xl sm:rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden p-6 sm:p-8 xl:p-10 min-h-[350px] sm:min-h-[400px] flex flex-col justify-center">
            
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

            {isLocating ? (
              <div className="flex flex-col items-center justify-center text-slate-300 animate-in fade-in duration-500">
                <Loader2 size={40} className="animate-spin mb-4 text-blue-400" />
                <p className="text-sm sm:text-base font-bold tracking-widest uppercase">Detecting Location...</p>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col h-full w-full">
                
                {/* Header: Location & Time */}
                <div className="flex justify-between items-start mb-8 sm:mb-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 mb-1">
                      <MapPin size={20} className="text-blue-400" /> Seattle, WA
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium ml-7">Today, 2:45 PM</p>
                  </div>
                  <div className="bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                    <p className="text-[10px] sm:text-xs font-bold text-blue-300">Live API</p>
                  </div>
                </div>

                {/* Main Temperature Display */}
                <div className="flex items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
                  <CloudRain size={72} strokeWidth={1.5} className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)] sm:w-[90px] sm:h-[90px]" />
                  <div>
                    <h2 className="text-6xl sm:text-7xl xl:text-8xl font-black text-white leading-none tracking-tighter">
                      58<span className="text-3xl sm:text-4xl text-slate-400 font-medium">°F</span>
                    </h2>
                    <p className="text-sm sm:text-base text-blue-300 font-bold tracking-wide mt-2">Heavy Rain expected.</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between border-t border-white/10 pt-6 sm:pt-8 mt-auto">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1 sm:mb-2">
                      <Wind size={16} /> <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Wind</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white">14 mph</p>
                  </div>
                  <div className="w-px h-8 sm:h-10 bg-white/10"></div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1 sm:mb-2">
                      <Droplets size={16} /> <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Humidity</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white">87%</p>
                  </div>
                  <div className="w-px h-8 sm:h-10 bg-white/10"></div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1 sm:mb-2">
                      <CloudRain size={16} /> <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Precip</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white">95%</p>
                  </div>
                </div>

              </div>
            )}
          </div>
          
        </div>

      </div>
    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#1e293b] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      <a
        href="#demo-46"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-blue-600 text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 border border-blue-500 z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)] uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Live Weather Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-2xl bg-[#1e293b]">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}