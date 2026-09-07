"use client";
import React, { useState, useEffect } from "react";
import { Lightbulb, ThermometerSnowflake, ShieldCheck, Power, Home } from "lucide-react";

export default function Hero42() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  
  // States for Smart Home Controls
  const [lightOn, setLightOn] = useState<boolean>(true);
  const [climateOn, setClimateOn] = useState<boolean>(false);
  const [securityOn, setSecurityOn] = useState<boolean>(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-42") {
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
    // Reduced padding on lg (iPad landscape) to prevent vertical overflow
    <section className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#0b0c10] text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] pt-6 sm:pt-12 lg:pt-8 xl:pt-16 pb-6' : 'pt-10 sm:pt-16 pb-10 lg:pt-10 lg:pb-8 lg:h-[85vh] min-h-[850px] lg:min-h-[650px]'}`}>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none z-0"></div>
      
      {/* Dynamic Background Glow based on Active State */}
      <div className={`absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] sm:w-[50%] h-[40%] rounded-full blur-[100px] z-0 transition-colors duration-1000 pointer-events-none
        ${lightOn ? 'bg-amber-500/20' : ''}
        ${climateOn && !lightOn ? 'bg-blue-500/20' : ''}
        ${securityOn && !lightOn && !climateOn ? 'bg-emerald-500/20' : ''}
        ${!lightOn && !climateOn && !securityOn ? 'bg-white/5' : ''}
      `}></div>

      {/* TOP TEXT AREA - Reduced margins for lg */}
      <div className={`relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
        
        {/* Badge */}
        <div className="mb-3 sm:mb-5 lg:mb-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium text-gray-300 backdrop-blur-md">
          <Home size={14} className="text-blue-400 sm:w-4 sm:h-4" /> Aurora Smart Hub 2.0
        </div>
        
        {/* <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-5xl xl:text-[4.5rem] font-bold tracking-tight mb-3 sm:mb-5 lg:mb-3 leading-[1.1] text-white">
          Your home. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Intelligently yours.
          </span>
        </h1>
        
        <p className="text-xs sm:text-base md:text-lg lg:text-sm xl:text-lg text-gray-400 max-w-[95%] sm:max-w-xl lg:max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-6 leading-relaxed font-medium">
          Control lighting, climate, and security from a single unified interface. Experience the true power of an interconnected home.
        </p> */}

        {/* Headline - Tuned sizing */} 
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-bold tracking-tight mb-3 sm:mb-5 lg:mb-3 leading-[1.1] text-white"> 
  Your home. <br className="hidden sm:block" /> 
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> 
    Intelligently yours. 
  </span> 
</h1> 
 
{/* Description - Hidden on small height landscape to save space if needed */} 
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-xs sm:text-base md:text-lg lg:text-sm xl:text-lg text-gray-400 max-w-[95%] sm:max-w-xl lg:max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-6 leading-relaxed font-medium"> 
  Control lighting, climate, and security from a single unified interface. Experience the true power of an interconnected home. 
</p>
        
        {/* ================= INTERACTIVE SMART TOGGLES ================= */}
        {/* Scaled down slightly on lg to save vertical space */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-3 xl:gap-4 mb-6 sm:mb-10 lg:mb-6 xl:mb-10">
          
          {/* Light Toggle */}
          <button 
            onClick={() => setLightOn(!lightOn)}
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 lg:px-4 xl:px-6 py-2 sm:py-3 lg:py-2.5 rounded-xl border transition-all duration-300
              ${lightOn ? 'bg-amber-500/10 border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
          >
            <div className={`p-1.5 sm:p-2 rounded-lg ${lightOn ? 'bg-amber-500 text-black' : 'bg-white/10'}`}>
              <Lightbulb size={16} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] xl:text-xs font-bold uppercase tracking-wider">Lighting</p>
              <p className="text-[11px] sm:text-xs xl:text-sm font-medium">{lightOn ? 'On (75%)' : 'Off'}</p>
            </div>
          </button>

          {/* Climate Toggle */}
          <button 
            onClick={() => setClimateOn(!climateOn)}
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 lg:px-4 xl:px-6 py-2 sm:py-3 lg:py-2.5 rounded-xl border transition-all duration-300
              ${climateOn ? 'bg-blue-500/10 border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
          >
            <div className={`p-1.5 sm:p-2 rounded-lg ${climateOn ? 'bg-blue-500 text-white' : 'bg-white/10'}`}>
              <ThermometerSnowflake size={16} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] xl:text-xs font-bold uppercase tracking-wider">Climate</p>
              <p className="text-[11px] sm:text-xs xl:text-sm font-medium">{climateOn ? 'Cooling (72°F)' : 'Standby'}</p>
            </div>
          </button>

          {/* Security Toggle */}
          <button 
            onClick={() => setSecurityOn(!securityOn)}
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 lg:px-4 xl:px-6 py-2 sm:py-3 lg:py-2.5 rounded-xl border transition-all duration-300
              ${securityOn ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
          >
            <div className={`p-1.5 sm:p-2 rounded-lg ${securityOn ? 'bg-emerald-500 text-white' : 'bg-white/10'}`}>
              <ShieldCheck size={16} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] xl:text-xs font-bold uppercase tracking-wider">Security</p>
              <p className="text-[11px] sm:text-xs xl:text-sm font-medium">{securityOn ? 'Armed (Away)' : 'Disarmed'}</p>
            </div>
          </button>

        </div>
      </div>

      {/* ================= 3D ISOMETRIC ROOM GRAPHIC ================= */}
      {/* Restricting max-height on lg to ensure it fits perfectly on iPad Landscape */}
      <div className={`relative z-20 w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-2xl mx-auto flex-1 flex items-center justify-center min-h-0 ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000 delay-300' : ''}`}>
        
        {/* CSS for Floating Animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes iso-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-iso-float { animation: iso-float 6s ease-in-out infinite; }
        `}} />

        {/* Max-height constraint added (lg:max-h-[320px]) so it never overflows iPad landscape */}
        <div className="relative w-full aspect-[4/3] max-h-[350px] sm:max-h-[400px] lg:max-h-[320px] xl:max-h-[450px] animate-iso-float">
          
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
            alt="3D Smart Home" 
            className={`w-full h-full object-cover rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-1000 
              ${!lightOn ? 'brightness-50 grayscale-[50%]' : 'brightness-110 shadow-[0_30px_60px_rgba(245,158,11,0.15)]'}`}
          />
          
          <div className={`absolute inset-0 bg-blue-900/30 rounded-2xl sm:rounded-3xl transition-opacity duration-1000 mix-blend-multiply ${lightOn ? 'opacity-0' : 'opacity-100'}`}></div>

          {/* DYNAMIC EFFECTS */}
          <div className={`absolute top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-amber-400/30 blur-[40px] sm:blur-[60px] rounded-full transition-opacity duration-1000 pointer-events-none ${lightOn ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute bottom-[20%] left-1/4 w-[50%] h-[40%] bg-blue-400/30 blur-[40px] sm:blur-[60px] rounded-full transition-opacity duration-1000 pointer-events-none mix-blend-screen ${climateOn ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute inset-0 border-[3px] sm:border-4 border-emerald-500/50 rounded-2xl sm:rounded-3xl transition-all duration-1000 pointer-events-none ${securityOn ? 'opacity-100 shadow-[inset_0_0_30px_rgba(16,185,129,0.3)]' : 'opacity-0 shadow-none'}`}></div>

          {/* INTERACTIVE HOTSPOTS */}
          <button 
            onClick={() => setLightOn(!lightOn)}
            className="absolute top-[25%] left-[45%] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group z-30"
          >
            <span className={`absolute inset-0 rounded-full animate-ping opacity-50 ${lightOn ? 'bg-amber-400' : 'bg-white/30'}`}></span>
            <div className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-colors
              ${lightOn ? 'bg-amber-500 border-amber-300 shadow-[0_0_15px_#f59e0b]' : 'bg-black/50 border-white/50 text-white hover:bg-white/20'}`}
            >
              {lightOn && <Power size={10} className="text-white sm:w-3 sm:h-3" />}
            </div>
            <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[9px] sm:text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {lightOn ? 'Turn Off Lights' : 'Turn On Lights'}
            </div>
          </button>

          <button 
            onClick={() => setClimateOn(!climateOn)}
            className="absolute top-[40%] right-[25%] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group z-30"
          >
            <span className={`absolute inset-0 rounded-full animate-ping opacity-50 ${climateOn ? 'bg-blue-400' : 'bg-white/30'}`}></span>
            <div className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-colors
              ${climateOn ? 'bg-blue-500 border-blue-300 shadow-[0_0_15px_#3b82f6]' : 'bg-black/50 border-white/50 text-white hover:bg-white/20'}`}
            >
              {climateOn && <Power size={10} className="text-white sm:w-3 sm:h-3" />}
            </div>
            <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[9px] sm:text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {climateOn ? 'AC: 72°F' : 'Turn On AC'}
            </div>
          </button>

        </div>
      </div>

    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#0b0c10] w-screen h-screen overflow-hidden">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      <a
        href="#demo-42"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-blue-600 text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 border border-blue-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Smart Home Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-[#0b0c10]">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}