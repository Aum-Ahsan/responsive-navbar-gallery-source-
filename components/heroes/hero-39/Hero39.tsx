"use client";
import React, { useState, useEffect } from "react";
import { Box, Eye, Sparkles, Play, ArrowRight, Scan } from "lucide-react";

export default function Hero39() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-39") {
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

  // ================= 2. MOUSE TRACKING FOR 3D PARALLAX =================
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // ================= 3. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section 
      className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-10 lg:py-0' : 'py-10 lg:py-0 lg:h-[85vh] min-h-[850px] sm:min-h-[900px] lg:min-h-[700px]'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* ================= LAYER 1: BACKGROUND ================= */}
      <div 
        className="absolute inset-0 z-0 scale-110 transition-transform duration-300 ease-out pointer-events-none"
        style={{ transform: `translate(${-mousePos.x * 0.8}px, ${-mousePos.y * 0.8}px) scale(1.05)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=2940" 
          alt="Virtual Reality Space" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>
      </div>

      {/* ================= LAYER 2: TEXT & CTAs ================= */}
      <div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 transition-transform duration-300 ease-out pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
      >
        
        {/* Left Content (Text & Buttons) */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-6 sm:pt-10 lg:pt-0 pointer-events-auto w-full lg:max-w-xl xl:max-w-2xl">
          
          {/* Badge */}
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-medium text-gray-300 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <Sparkles size={14} className="text-cyan-400 sm:w-4 sm:h-4" /> Introducing Aurora OS
          </div>
{/*           
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5.5rem] 2xl:text-[6.5rem] font-medium tracking-tight mb-4 sm:mb-6 leading-[1.1] md:leading-[1.05] px-2 sm:px-0">
            Welcome to <br className="hidden sm:block" />
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
              Spatial
            </span> Reality.
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-xl text-gray-400 max-w-[95%] sm:max-w-md lg:max-w-md xl:max-w-lg mb-6 sm:mb-10 leading-relaxed font-light">
            Blend digital content seamlessly with your physical space. Navigate with your eyes, hands, and voice. The ultimate augmented reality experience.
          </p> */}

          {/* Headline */} 
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-medium tracking-tight mb-4 sm:mb-6 leading-[1.1] md:leading-[1.05] px-2 sm:px-0"> 
  Welcome to <br className="hidden sm:block" /> 
  <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400"> 
    Spatial 
  </span> Reality. 
</h1> 
 
{/* Description */} 
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-sm sm:text-base md:text-lg lg:text-base xl:text-xl text-gray-400 max-w-[95%] sm:max-w-md lg:max-w-md xl:max-w-lg mb-6 sm:mb-10 leading-relaxed font-light"> 
  Blend digital content seamlessly with your physical space. Navigate with your eyes, hands, and voice. The ultimate augmented reality experience. 
</p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3 sm:gap-4 px-2 sm:px-0">
            <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Scan size={18} className="sm:w-5 sm:h-5" /> Pre-order Now
            </button>
            <button className="w-full sm:w-auto bg-white/10 text-white border border-white/20 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <Play size={16} fill="currentColor" className="sm:w-[18px] sm:h-[18px]" /> Watch the Film
            </button>
          </div>
        </div>

        {/* Right Empty Space for Desktop layout balance */}
        <div className="hidden lg:block flex-1"></div>
      </div>

      {/* ================= LAYER 3: FLOATING GLASS UI ================= */}
      {/* 
        Responsive Fix: 
        Mobile & iPad Portrait: 'relative mt-12' (comes perfectly below buttons, centered)
        iPad Landscape & Desktop: 'absolute top-1/2 right-10' (goes to the right side)
      */}
      <div 
        className="relative lg:absolute mt-10 sm:mt-16 lg:mt-0 lg:top-[50%] lg:-translate-y-1/2 lg:right-6 xl:right-[15%] z-20 transition-transform duration-200 ease-out pointer-events-none w-full flex justify-center lg:justify-end"
        style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
      >
        <div className="w-[280px] sm:w-[320px] lg:w-[300px] xl:w-[340px] bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col gap-3 sm:gap-4 animate-[float-slow_6s_ease-in-out_infinite] lg:animate-none pointer-events-auto">
          
          {/* Top Bar of Glass UI */}
          <div className="flex justify-between items-center border-b border-white/10 pb-2.5 sm:pb-3">
            <div className="flex items-center gap-2">
              <div className="bg-cyan-500/20 p-1 sm:p-1.5 rounded-full"><Eye size={14} className="text-cyan-400 sm:w-4 sm:h-4" /></div>
              <span className="text-[10px] sm:text-xs font-semibold text-gray-200">Eye Tracking Active</span>
            </div>
            <div className="w-6 sm:w-8 h-3 sm:h-4 rounded-full bg-green-500/20 border border-green-500/30 flex justify-end p-0.5">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
            </div>
          </div>

          {/* AR App Icons Grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 py-1 sm:py-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`aspect-square rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer transition-all hover:scale-110 hover:bg-white/30 shadow-inner border border-white/10 ${i === 1 ? 'bg-white/30' : 'bg-white/5'}`}>
                {i === 1 && <Box size={20} className="text-white drop-shadow-md sm:w-6 sm:h-6" />}
              </div>
            ))}
          </div>

          {/* Bottom Dock */}
          <div className="bg-black/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex justify-between items-center border border-white/5 mt-1 sm:mt-2">
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">Environment</span>
              <span className="text-xs sm:text-sm font-bold text-white">Yosemite Peak</span>
            </div>
            <button className="bg-white text-black w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>

        </div>

        {/* Custom Float animation for mobile/tablet fallback */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}} />
      </div>

    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-black w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-39"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-white text-black text-[10px] sm:text-xs rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 border border-gray-300 z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)] uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping"></span>
        <span className="hidden sm:block">Experience 3D Spatial Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-black group">
        
        {/* Hint text for desktop users to move their mouse */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-black/60 backdrop-blur-md border border-white/20 text-white/70 text-[10px] sm:text-xs px-4 py-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
          Move your mouse to feel the 3D depth
        </div>

        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}