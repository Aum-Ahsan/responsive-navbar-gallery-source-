"use client";
import React, { useState, useEffect } from "react";
import { CalendarDays, MapPin, Users, Search, ChevronDown, Compass } from "lucide-react";

export default function Hero45() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  
  // States for Booking Bar
  const [location, setLocation] = useState("Maldives Resort & Spa");
  const [guests, setGuests] = useState("2 Adults, 0 Children");

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-45") {
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
    <section className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-20 lg:py-0' : 'py-16 lg:py-0 lg:h-[85vh] min-h-[850px] sm:min-h-[900px] lg:min-h-[700px]'}`}>
      
      {/* ================= BACKGROUND VIDEO LAYER ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
          poster="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop"
        >
          <source src="https://cdn.pixabay.com/video/2017/10/12/12330-238475510_large.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      {/* ================= MAIN TEXT CONTENT ================= */}
      {/* Adjusted margin-top so it sits perfectly above the booking bar on all devices */}
      <div className={`relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-16 ${isFullDemo ? 'animate-in fade-in slide-in-from-top-10 duration-1000' : ''}`}>
        
        {/* Top Logo / Badge */}
        <div className="mb-5 sm:mb-8 flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-px bg-white/50"></span>
          <Compass size={20} className="text-[#d4af37] stroke-[1.5] sm:w-6 sm:h-6" />
          <span className="w-8 sm:w-12 h-px bg-white/50"></span>
        </div>
        
        <p className="text-[9px] sm:text-xs md:text-sm font-medium tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase text-white/80 mb-3 sm:mb-5 px-2">
          A Sanctuary for the Soul
        </p>
        
        {/* Elegant Serif Headline - Scaled for iPad Landscape (lg) & Desktop (xl) */}
        {/* <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6.5rem] font-light tracking-tight mb-6 sm:mb-10 leading-[1.05] drop-shadow-2xl">
          Discover <span className="italic text-[#d4af37]">Paradise</span> <br className="hidden sm:block" />
          On Earth.
        </h1> */}
        <h1 className="font-serif !text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-light tracking-tight mb-6 sm:mb-10 leading-[1.05] drop-shadow-2xl"> 
  Discover <span className="italic text-[#d4af37]">Paradise</span> <br className="hidden sm:block" /> 
  On Earth. 
</h1>
        
        <button className="hidden sm:flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] uppercase hover:text-[#d4af37] transition-colors pb-1.5 sm:pb-2 border-b border-white/30 hover:border-[#d4af37]">
          Explore the Island
        </button>
      </div>

      {/* ================= FLOATING BOOKING ENGINE (Bottom) ================= */}
      <div className={`absolute bottom-4 sm:bottom-8 lg:bottom-12 w-full px-3 sm:px-6 md:px-8 z-20 ${isFullDemo ? 'animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500' : ''}`}>
        
        <div className="max-w-[1200px] mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-2 sm:p-2.5 rounded-2xl sm:rounded-[2rem] lg:rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
          
          <div className="flex flex-col lg:flex-row items-center gap-1 sm:gap-1.5 lg:gap-0">
            
            {/* 1. Location Selector */}
            <div className="flex-1 w-full lg:w-auto px-4 sm:px-6 py-2.5 sm:py-3.5 lg:py-4 xl:py-5 flex flex-col justify-center border-b border-white/5 lg:border-b-0 lg:border-r lg:border-white/20 cursor-pointer group hover:bg-white/5 rounded-xl sm:rounded-t-3xl lg:rounded-l-full lg:rounded-tr-none transition-colors relative">
              <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                <MapPin size={12} className="text-[#d4af37] sm:w-3.5 sm:h-3.5" />
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.15em] sm:tracking-widest uppercase text-gray-300">Destination</span>
              </div>
              <div className="flex items-center justify-between">
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm md:text-base font-medium text-white appearance-none outline-none cursor-pointer w-full"
                >
                  <option className="text-black">Maldives Resort & Spa</option>
                  <option className="text-black">Santorini Azure Villas</option>
                  <option className="text-black">Bali Cliffside Retreat</option>
                </select>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-white transition-colors sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* 2. Check In / Check Out */}
            <div className="flex-1 w-full lg:w-auto px-4 sm:px-6 py-2.5 sm:py-3.5 lg:py-4 xl:py-5 flex flex-col justify-center border-b border-white/5 lg:border-b-0 lg:border-r lg:border-white/20 cursor-pointer group hover:bg-white/5 rounded-xl lg:rounded-none transition-colors relative">
              <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                <CalendarDays size={12} className="text-[#d4af37] sm:w-3.5 sm:h-3.5" />
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.15em] sm:tracking-widest uppercase text-gray-300">Dates</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm md:text-base font-medium text-white">Oct 15 — Oct 22</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-white transition-colors sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* 3. Guests Selector */}
            <div className="flex-1 w-full lg:w-auto px-4 sm:px-6 py-2.5 sm:py-3.5 lg:py-4 xl:py-5 flex flex-col justify-center border-b border-white/5 lg:border-b-0 lg:border-r lg:border-white/20 cursor-pointer group hover:bg-white/5 rounded-xl lg:rounded-none transition-colors relative">
              <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                <Users size={12} className="text-[#d4af37] sm:w-3.5 sm:h-3.5" />
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.15em] sm:tracking-widest uppercase text-gray-300">Guests</span>
              </div>
              <div className="flex items-center justify-between">
                <select 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm md:text-base font-medium text-white appearance-none outline-none cursor-pointer w-full"
                >
                  <option className="text-black">1 Adult</option>
                  <option className="text-black">2 Adults, 0 Children</option>
                  <option className="text-black">2 Adults, 2 Children</option>
                  <option className="text-black">Group (4+)</option>
                </select>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-white transition-colors sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* 4. Search / Book Button */}
            <div className="w-full lg:w-auto p-1.5 sm:p-2 lg:p-2 xl:p-2.5 shrink-0">
              <button className="w-full lg:w-auto bg-[#d4af37] hover:bg-[#c5a059] text-black px-6 sm:px-8 py-3.5 sm:py-4 lg:py-4 xl:py-5 rounded-xl sm:rounded-2xl lg:rounded-full font-bold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-[0.98]">
                <Search size={16} className="sm:w-[18px] sm:h-[18px]" /> <span className="lg:hidden xl:block">Check Availability</span>
              </button>
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
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      <a
        href="#demo-45"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-[#d4af37] text-black text-[10px] sm:text-xs rounded-sm font-bold hover:bg-[#c5a059] transition-all flex items-center gap-2 z-10 shadow-xl uppercase tracking-widest"
      >
        <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></span>
        <span className="hidden sm:block">View Video Resort Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-black">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}