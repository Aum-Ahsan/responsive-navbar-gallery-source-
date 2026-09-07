"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, ShoppingBag, Star, Leaf } from "lucide-react";

export default function Hero47() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-47") {
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

  // Product Data
  const products = [
    { id: 1, name: "Radiant Glow Serum", price: "$42", tag: "Bestseller", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Velvet Matte Lipstick", price: "$28", tag: "New Shade", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Hydrating Day Cream", price: "$35", tag: "Vegan", img: "https://images.unsplash.com/photo-1608248593842-8021c6a818c0?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Botanical Face Oil", price: "$55", tag: "Organic", img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop" }
  ];

  // ================= 2. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-[#FDFBF7] text-[#4A3C31] transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-16 lg:py-0' : 'py-12 sm:py-16 lg:h-[85vh] min-h-[850px] lg:min-h-[650px]'}`}>
      
      {/* ================= BACKGROUND BLOBS (Soft Pastel Aesthetics) ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] lg:w-[40%] h-[50%] bg-[#f4d5d3]/40 blur-[80px] rounded-[100%] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[70%] lg:w-[50%] h-[50%] bg-[#fde2d3]/50 blur-[100px] rounded-[100%] animate-[pulse_8s_ease-in-out_infinite_reverse]"></div>
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-0 lg:pl-12 xl:pl-20 flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0 mt-4 lg:mt-0">
        
        {/* LEFT COLUMN: Text Content */}
        <div className={`w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left px-5 sm:px-10 lg:px-0 pt-4 lg:pt-20 ${isFullDemo ? 'animate-in fade-in slide-in-from-left-8 duration-1000' : ''}`}>
          
          {/* Badge */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#e8b4b8] bg-[#fbf0f0] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-[#b87a7f] shadow-sm uppercase tracking-widest whitespace-nowrap">
            <Leaf size={14} className="sm:w-4 sm:h-4" /> 100% Cruelty-Free & Vegan
          </div>
          
          {/* Headline - Elegant Serif */}
          <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-6xl xl:text-[4.5rem] 2xl:text-[5.5rem] font-medium tracking-tight mb-4 sm:mb-6 leading-[1.05] text-[#3a2e26]">
            Embrace your <br className="hidden lg:block" />
            <span className="italic text-[#d98a8e]">natural</span> glow.
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-[#7a6b5d] max-w-[90%] sm:max-w-xl lg:max-w-md mb-8 sm:mb-10 leading-relaxed font-light">
            Discover our new botanical collection designed to enhance your authentic beauty. Formulated with clean ingredients that your skin will love.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3 sm:gap-4 mb-4">
            <button className="w-full sm:w-auto bg-[#4A3C31] hover:bg-[#322820] text-white px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(74,60,49,0.2)]">
              Shop the Collection
            </button>
            <button className="w-full sm:w-auto bg-transparent text-[#4A3C31] border border-[#4A3C31]/20 px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm hover:bg-[#4A3C31]/5 transition-all flex items-center justify-center gap-2">
              Take the Skin Quiz <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Horizontal Scroll Snap Carousel */}
        {/* 'min-w-0' prevents flex child from blowing out of container */}
        <div className={`w-full lg:w-7/12 min-w-0 pl-5 sm:pl-10 lg:pl-10 lg:py-10 ${isFullDemo ? 'animate-in fade-in slide-in-from-right-8 duration-1000 delay-300' : ''}`}>
          
          {/* Custom CSS to hide scrollbar but keep functionality */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          {/* Scroll Container */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-10 pr-5 sm:pr-10 hide-scrollbar cursor-grab active:cursor-grabbing">
            
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`snap-center sm:snap-start shrink-0 w-[240px] sm:w-[280px] lg:w-[260px] xl:w-[300px] flex flex-col group mt-${index % 2 !== 0 ? '0 lg:mt-12' : '0'}`}
              >
                {/* Product Image Card */}
                <div className="relative aspect-[4/5] bg-white rounded-[2rem] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#f0e8e6] overflow-hidden mb-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(217,138,142,0.15)]">
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#4A3C31]">
                    {product.tag}
                  </div>

                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Quick Add Button (appears on hover on desktop, always visible on mobile/tablet) */}
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-white/90 backdrop-blur-md hover:bg-[#4A3C31] hover:text-white text-[#4A3C31] py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 flex items-center justify-center gap-2">
                    <ShoppingBag size={14} /> Quick Add
                  </button>
                </div>
                
                {/* Product Info */}
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="font-serif font-medium text-base sm:text-lg text-[#3a2e26] mb-1">{product.name}</h3>
                    <div className="flex items-center gap-1 text-[#d98a8e]">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <span className="text-xs text-[#a0948a] ml-1">(128)</span>
                    </div>
                  </div>
                  <p className="font-medium text-[#4A3C31]">{product.price}</p>
                </div>
              </div>
            ))}
            
            {/* View All Card */}
            <div className="snap-center sm:snap-start shrink-0 w-[240px] sm:w-[280px] lg:w-[260px] xl:w-[300px] flex items-center justify-center">
              <button className="flex flex-col items-center justify-center gap-3 w-32 h-32 rounded-full border border-[#e8b4b8] text-[#b87a7f] hover:bg-[#fbf0f0] transition-colors">
                <ArrowRight size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">View All</span>
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
      <div className="fixed inset-0 z-[999999] bg-[#FDFBF7] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      <a
        href="#demo-47"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-[#4A3C31] text-white text-[10px] sm:text-xs rounded-full font-medium hover:bg-[#322820] transition-all flex items-center gap-2 border border-[#4A3C31] z-10 shadow-[0_10px_20px_rgba(74,60,49,0.2)] uppercase tracking-widest"
      >
        <span className="w-1.5 h-1.5 bg-[#d98a8e] rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Cosmetic Carousel Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      <div className="w-full max-w-[1400px] border border-gray-200 overflow-hidden relative z-20 shadow-2xl rounded-2xl bg-[#FDFBF7]">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}