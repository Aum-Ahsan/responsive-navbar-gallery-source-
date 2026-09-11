"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const SLIDES = [
  {
    id: 1, tag: "🔥 Top 10 Trending Today", title: "The Dark Frontier.", desc: "A lone astronaut must travel across the galaxy to find a new home for humanity before the earth's resources are completely depleted.", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2, tag: "🎬 New Release", title: "Neon Cyberpunk.", desc: "In a dystopic future where AI rules the neon streets, one hacker discovers a secret that could bring down the entire system.", image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3, tag: "⭐ Critically Acclaimed", title: "Lost in the Wild.", desc: "Experience the breathtaking journey of survival in the harshest environments on earth. Winner of 5 academy awards.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
  }
];

export default function Hero22() {
  const [current, setCurrent] = useState(0);
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // ================= 1. HASH CHECK LOGIC (From your Navbar50) =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-22") {
        setIsNewTabDemo(true);
        document.body.style.overflow = "hidden"; // Hide background page scroll
      } else {
        setIsNewTabDemo(false);
        document.body.style.overflow = "unset";
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // ================= 2. CAROUSEL TIMER (Only works in Demo Mode) =================
  useEffect(() => {
    if (!isNewTabDemo) return; // Demo-la mattum thaan work aaganum
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isNewTabDemo]);


  // ================= 3. REUSABLE HERO UI =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex flex-col justify-center overflow-hidden bg-[#0b1020] text-white transition-all duration-700 ${isFullDemo ? 'h-screen' : 'h-[600px] lg:h-[80vh]'}`}>
      
      {/* Background Images with Fade */}
      {SLIDES.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-60" style={{ backgroundImage: `url('${slide.image}')` }} />
        </div>
      ))}

      {/* Gradients */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1020] via-[#0b1020]/80 to-transparent w-full md:w-[80%]" />
      <div className="absolute bottom-0 z-0 w-full h-40 bg-gradient-to-t from-[#0b1020] to-transparent" />

      {/* Text Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl w-full">
        <div key={current} className={`${isFullDemo ? 'animate-in fade-in slide-in-from-bottom-5 duration-700' : ''}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles size={14} className="text-blue-400" /> {SLIDES[current].tag}
          </div>
          {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 max-w-3xl leading-tight">
            {SLIDES[current].title}
          </h1> */}
          <h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-bold tracking-tight mb-4 md:mb-6 max-w-3xl leading-tight">
  {SLIDES[current].title}
</h1>
          {/* <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl lg:max-w-2xl mb-8 leading-relaxed">
            {SLIDES[current].desc}
          </p> */}
          <p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-white/80 max-w-xl lg:max-w-2xl mb-8 leading-relaxed">
  {SLIDES[current].desc}
</p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
            <Play size={20} fill="currentColor" /> Play Now
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold backdrop-blur-md hover:bg-white/20 transition-colors">
            More Info <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Carousel Dots (Only interactive in demo) */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 flex gap-2 z-20">
        {SLIDES.map((_, index) => (
          <button 
            key={index} 
            onClick={() => isFullDemo && setCurrent(index)} 
            className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-white" : "w-2 bg-white/40"} ${isFullDemo ? 'hover:bg-white/70 cursor-pointer' : 'cursor-default'}`} 
          />
        ))}
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
    <div className="relative w-full py-10 sm:py-12 lg:py-16 flex flex-col items-center justify-center">
      
      {/* OPEN IN NEW TAB BUTTON (Adapted from your Navbar50 code) */}
      <a
        href="#demo-22"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-black text-white text-xs rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 border border-gray-700 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Carousel Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-200 overflow-hidden relative z-20 rounded-xl shadow-2xl">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}