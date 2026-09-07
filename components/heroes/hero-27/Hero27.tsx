"use client";
import React, { useState, useEffect } from "react";
import { Camera, Search, ArrowUpRight, Image as ImageIcon } from "lucide-react";

// Sample Unsplash Images of different aspect ratios for Masonry effect
const MASONRY_IMAGES = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop", // Portrait
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=500&auto=format&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1506744626753-eda8151a1571?q=80&w=400&auto=format&fit=crop", // Portrait
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600&auto=format&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=400&auto=format&fit=crop", // Portrait
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=500&auto=format&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&auto=format&fit=crop", // Portrait
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=600&auto=format&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=400&auto=format&fit=crop", // Portrait
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=500&auto=format&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400&auto=format&fit=crop", // Portrait
];

export default function Hero27() {
  const [isNewTabDemo, setIsNewTabDemo] = useState(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-27") {
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
    <section className={`relative w-full overflow-hidden bg-black text-white ${isFullDemo ? 'h-screen' : 'h-[600px] sm:h-[700px] lg:h-[80vh]'}`}>
      
      {/* BACKGROUND: Masonry Image Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-40 lg:opacity-50">
        <div className="w-full h-full columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2 sm:gap-4 p-2 sm:p-4 scale-105 animate-[pulse_10s_ease-in-out_infinite]">
          {MASONRY_IMAGES.map((src, index) => (
            <div key={index} className="break-inside-avoid mb-2 sm:mb-4 rounded-lg overflow-hidden">
              <img 
                src={src} 
                alt={`Portfolio ${index}`} 
                className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700 filter grayscale-[30%]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

      {/* FOREGROUND: Center Floating Text Box */}
      <div className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-6">
        <div className={`w-full max-w-[90%] sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000' : ''}`}>
          
          {/* Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            <Camera size={16} /> Premium Visuals
          </div>
          
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1] text-white drop-shadow-lg">
            Capture The <br className="hidden sm:block" />
            <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              Unseen Beauty.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
            Explore over 10,000+ breathtaking, royalty-free high-resolution photographs shared by creators worldwide.
          </p> */}

          {/* Headline */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1] text-white drop-shadow-lg">
  Capture The <br className="hidden sm:block" />
  <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
    Unseen Beauty.
  </span>
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-300 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
  Explore over 10,000+ breathtaking, royalty-free high-resolution photographs shared by creators worldwide.
</p>
          
          {/* Unsplash Style Search Bar */}
          <div className="flex items-center bg-white rounded-full p-1.5 sm:p-2 w-full max-w-lg mx-auto shadow-xl focus-within:ring-4 focus-within:ring-white/30 transition-all">
            <Search className="text-gray-400 ml-3 sm:ml-4" size={20} />
            <input 
              type="text" 
              placeholder="Search high-res images..." 
              className="flex-1 bg-transparent text-black px-3 sm:px-4 py-2 sm:py-3 outline-none text-sm sm:text-base font-medium placeholder:text-gray-400"
            />
            <button className="bg-black text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 transition-colors flex items-center gap-2">
              <span className="hidden sm:block">Search</span>
              <ArrowUpRight size={18} className="sm:hidden" />
            </button>
          </div>

          {/* Trending Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs text-gray-300 font-medium">
            <span>Trending:</span>
            {['Nature', 'Architecture', 'Portraits', 'Cinematic'].map((tag) => (
              <button key={tag} className="hover:text-white border border-white/20 bg-white/5 rounded-md px-2 py-1 transition-colors">
                {tag}
              </button>
            ))}
          </div>

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
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-27"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-white text-black text-[10px] sm:text-xs rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 border border-gray-300 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></span>
        <span className="hidden sm:block">View Masonry Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 rounded-xl shadow-2xl bg-black">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}