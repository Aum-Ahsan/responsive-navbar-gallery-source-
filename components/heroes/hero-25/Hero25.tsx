"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Activity, Dumbbell, Flame } from "lucide-react";

export default function Hero25() {
  const [isNewTabDemo, setIsNewTabDemo] = useState(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-25") {
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
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-black text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-10 sm:py-14 lg:py-20 lg:py-0' : 'py-16 lg:h-[80vh] min-h-[700px]'}`}>
      
      {/* Background Texture/Noise (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 lg:gap-8 mt-12 lg:mt-0">
        
        {/* LEFT COLUMN: Bold Typography & CTAs */}
        <div className={`flex-1 flex flex-col items-start w-full ${isFullDemo ? 'animate-in fade-in slide-in-from-left-8 duration-1000' : ''}`}>
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 bg-[#ccff00] text-black px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider rounded-none">
            <Flame size={16} fill="currentColor" /> Premium Fitness
          </div>
          
          {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tighter mb-4 sm:mb-6 leading-[0.9]">
            Push <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>Past Your</span> <br />
            Limits.
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md sm:max-w-xl mb-8 font-medium leading-relaxed">
            Join the elite fitness community. Get personalized workout plans, track your progress, and achieve the body you've always wanted. No excuses.
          </p> */}

          {/* Headline - Extremely Bold & Tight Tracking (Nike Style) */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-black uppercase tracking-tighter mb-4 sm:mb-6 leading-[0.9]">
  Push <br className="hidden sm:block" />
  <span className="text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>Past Your</span> <br />
  Limits.
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-400 max-w-md sm:max-w-xl mb-8 font-medium leading-relaxed">
  Join the elite fitness community. Get personalized workout plans, track your progress, and achieve the body you've always wanted. No excuses.
</p>
          

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-start gap-4 mb-10">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ccff00] text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#aacc00] transition-colors">
              <Dumbbell size={20} /> Start Free Trial
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
              <Play size={18} fill="currentColor" /> Watch Video
            </button>
          </div>

          {/* Quick Stats/Features */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-t border-white/20 pt-6 w-full max-w-md">
            <div className="flex items-center gap-3">
              <Activity className="text-[#ccff00]" size={24} />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">500+ <br/><span className="text-gray-500 font-normal">Workouts</span></p>
            </div>
            <div className="flex items-center gap-3">
              <Dumbbell className="text-[#ccff00]" size={24} />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">Expert <br/><span className="text-gray-500 font-normal">Trainers</span></p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Asymmetrical Image Grid */}
        <div className={`flex-1 w-full lg:max-w-xl ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000 delay-300' : ''}`}>
          
          {/* CSS Grid for Asymmetrical Layout */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[260px] sm:h-[340px] lg:h-[400px] sm:h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px] lg:h-[600px]">
            
            {/* Left Tall Image (Spans 2 rows) */}
            <div className="col-span-1 row-span-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
                alt="Gym Workout" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-bold uppercase tracking-wider text-sm bg-black/50 px-2 py-1 backdrop-blur-sm">Strength</p>
              </div>
            </div>

            {/* Right Top Square Image */}
            <div className="col-span-1 row-span-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                alt="Cardio Training" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
               <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-bold uppercase tracking-wider text-sm bg-black/50 px-2 py-1 backdrop-blur-sm">Cardio</p>
              </div>
            </div>

            {/* Right Bottom Square Image */}
            <div className="col-span-1 row-span-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" 
                alt="Equipment" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
               <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-bold uppercase tracking-wider text-sm bg-black/50 px-2 py-1 backdrop-blur-sm">Equipment</p>
              </div>
            </div>

          </div>
        </div>
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
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-25"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-black text-white text-[10px] sm:text-xs rounded-none font-bold hover:bg-gray-800 transition-all flex items-center gap-2 border border-gray-700 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Fitness Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border-4 border-black overflow-hidden relative z-20 shadow-2xl bg-black">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}