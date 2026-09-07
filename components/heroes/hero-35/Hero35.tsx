"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Ticket, ChevronDown, MapPin } from "lucide-react";

export default function Hero35() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-35") {
        setIsNewTabDemo(true);
        // Important: Kept 'auto' here so the dummy content can be scrolled to see Parallax
        document.body.style.overflow = "auto"; 
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
    <section className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-white transition-all duration-700 ${isFullDemo ? 'h-[100dvh]' : 'h-[600px] sm:h-[700px] lg:h-[85vh]'}`}>
      
      {/* 
        PARALLAX BACKGROUND: 
        The 'bg-fixed' class is the magic here. It keeps the background image stationary while scrolling.
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-fixed opacity-70"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1572947650440-e8a97eb05923?q=80&w=2000&auto=format&fit=crop')`,
        }}
      ></div>

      {/* Vignette / Dark Overlays for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none"></div>
      
      {/* Subtle Noise Texture for an "Art Canvas" feel */}
      <div className="absolute inset-0 opacity-[0.05] z-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

      {/* MAIN CONTENT */}
      <div className={`relative z-20 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-5xl mx-auto ${isFullDemo ? 'animate-in fade-in slide-in-from-bottom-10 duration-1000' : ''}`}>
        
        {/* <p className="text-[#c7a977] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-6 sm:mb-8 flex items-center gap-3">
          <span className="w-8 sm:w-12 h-[1px] bg-[#c7a977]"></span>
          Special Exhibition
          <span className="w-8 sm:w-12 h-[1px] bg-[#c7a977]"></span>
        </p>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-medium leading-[1] mb-6 drop-shadow-2xl">
          The <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Renaissance</span><br />
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem]">Reimagined.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
          Discover centuries of human creativity. Walk through the halls of history and experience the masterpieces that shaped the modern world.
        </p> */}

        <h1 className="font-serif font-medium leading-[1] mb-6 drop-shadow-2xl">
  <span className="!text-[40px] md:!text-[48px] lg:!text-[60px]">
    The{" "}
    <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
      Renaissance
    </span>
  </span>
  <br />
  <span className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px]">
    Reimagined.
  </span>
</h1>

<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
  Discover centuries of human creativity. Walk through the halls of history and experience the masterpieces that shaped the modern world.
</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto bg-[#c7a977] text-black px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm">
            <Ticket size={18} /> Book Tickets
          </button>
          <button className="w-full sm:w-auto bg-transparent text-white border border-white/30 px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-[0.15em] uppercase hover:border-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 rounded-sm">
            Plan Your Visit <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* SCROLL INDICATOR (Only shown prominently in Demo) */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 ${isFullDemo ? 'animate-in fade-in duration-1000 delay-700' : 'hidden sm:flex'}`}>
        <span className="text-[10px] tracking-widest uppercase">Scroll to Explore</span>
        <ChevronDown size={20} className="animate-bounce text-[#c7a977]" />
      </div>

    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO WITH PARALLAX) =================
  if (isNewTabDemo) {
    return (
      // Changed position from 'relative' to 'fixed inset-0' to perfectly match Hero 34 layout pattern
      <div className="fixed inset-0 z-[999999] bg-[#0a0a0a] w-screen h-screen overflow-y-auto">
        {/* The Hero Section with bg-fixed */}
        <HeroUI isFullDemo={true} />
        
        {/* DUMMY CONTENT TO PROVE PARALLAX SCROLL WORKS */}
        <div className="relative z-30 bg-[#0a0a0a] w-full min-h-screen py-24 px-6 flex flex-col items-center border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-5xl text-white mb-8">About the Exhibition</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
              This is a dummy section added so you can scroll down and experience the Parallax background effect on the Hero Section above. Notice how the classical painting stays perfectly still while the text and this dark section slide over it. This technique is heavily used by high-end museums like The Louvre, The Met, and premium art galleries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="text-[#c7a977] font-serif text-2xl mb-4">Timings</h3>
                <p className="text-gray-400">Monday - Friday: 10 AM - 6 PM</p>
                <p className="text-gray-400">Weekends: 10 AM - 8 PM</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                <h3 className="text-[#c7a977] font-serif text-2xl mb-4 flex items-center gap-2"><MapPin size={20}/> Location</h3>
                <p className="text-gray-400">The Grand Art Museum</p>
                <p className="text-gray-400">123 Classical Avenue, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-35"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-[#c7a977] text-black text-[10px] sm:text-xs rounded-sm font-bold hover:bg-[#d6bc8f] transition-all flex items-center gap-2 z-10 shadow-xl uppercase tracking-widest"
      >
        <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></span>
        <span className="hidden sm:block">View Parallax Scroll Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-[#0a0a0a]">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}