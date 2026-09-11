"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Wallet, Shield, Zap, TrendingUp, Hexagon } from "lucide-react";

export default function Hero24() {
  const [isNewTabDemo, setIsNewTabDemo] = useState(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-24") {
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

  // ================= 2. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-[#09090b] text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-10 sm:py-14 lg:py-20 lg:py-0' : 'py-20 lg:h-[80vh] min-h-[650px]'}`}>
      
      {/* Background Glow Effects - Responsive sizing */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] sm:w-[50%] h-[50%] bg-blue-600/20 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] sm:w-[50%] h-[50%] bg-purple-600/20 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Main Content Container - Flex Col for Mobile/iPad Portrait, Flex Row for Desktop/iPad Landscape */}
      <div className="relative z-10 max-w-7xl w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 lg:gap-8 mt-12 lg:mt-0">
        
        {/* LEFT COLUMN: Text & CTAs */}
        <div className={`flex-1 flex flex-col items-center text-center lg:items-start lg:text-left w-full ${isFullDemo ? 'animate-in fade-in slide-in-from-left-8 duration-1000' : ''}`}>
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm font-semibold text-blue-400 backdrop-blur-md whitespace-nowrap">
            <Shield size={16} className="shrink-0" /> Secure Web3 Infrastructure
          </div>
          
          {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1]">
            Trade Crypto with <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Zero Limits.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md sm:max-w-xl mb-8 leading-relaxed px-4 lg:px-0">
            Buy, sell, and manage hundreds of cryptocurrencies safely and securely. Join millions of users on the world's most trusted decentralized exchange.
          </p> */}

          {/* Headline - Scales based on device */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1]">
  Trade Crypto with <br className="hidden lg:block" />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
    Zero Limits.
  </span>
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-400 max-w-md sm:max-w-xl mb-8 leading-relaxed px-4 lg:px-0">
  Buy, sell, and manage hundreds of cryptocurrencies safely and securely. Join millions of users on the world's most trusted decentralized exchange.
</p>
          
          {/* Buttons - Stack on small phones, inline on larger screens */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 px-4 lg:px-0">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
              <Wallet size={20} /> Connect Wallet
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-6 sm:px-8 py-3.5 rounded-xl font-semibold backdrop-blur-md hover:bg-white/10 transition-colors">
              Explore Ecosystem <ArrowRight size={18} />
            </button>
          </div>

          {/* Trust Stats - Wraps gracefully on mobile */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-6 sm:gap-8 border-t border-white/10 pt-6 w-full max-w-md">
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold text-white">$50B+</p>
              <p className="text-xs sm:text-sm text-gray-500">Quarterly Volume</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10"></div>
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold text-white">2M+</p>
              <p className="text-xs sm:text-sm text-gray-500">Verified Users</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Floating 3D / Glassmorphism Elements */}
        <div className={`flex-1 relative w-full h-[240px] sm:h-[200px] sm:h-[260px] lg:h-[300px] lg:h-[350px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px] flex items-center justify-center ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000 delay-300' : ''}`}>
          
          {/* Custom CSS for smooth floating animation */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes float-slow {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-15px) rotate(2deg); }
            }
            @keyframes float-fast {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(-3deg); }
            }
            @keyframes pulse-glow {
              0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.2); }
              50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.5); }
            }
            .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
            .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
            .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
          `}} />

          {/* Center Main Crystal/Logo - Scales down on mobile */}
          <div className="absolute z-20 flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/10 backdrop-blur-xl animate-float-slow animate-pulse-glow">
            <Hexagon size={64} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
          </div>

          {/* Top Right Floating Card - Repositioned for small screens */}
          <div className="absolute top-2 sm:top-10 right-2 sm:right-10 lg:-right-4 xl:right-0 z-30 flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-3 sm:p-4 w-40 sm:w-48 animate-float-fast shadow-xl">
            <div className="bg-green-500/20 p-1.5 sm:p-2 rounded-lg">
              <TrendingUp size={20} className="text-green-400 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-gray-400">ETH/USD</p>
              <p className="text-xs sm:text-sm font-bold text-white">+12.5%</p>
            </div>
          </div>

          {/* Bottom Left Floating Card - Repositioned for small screens */}
          <div className="absolute bottom-2 sm:bottom-10 left-2 sm:left-10 lg:-left-4 xl:left-0 z-30 flex items-center gap-3 sm:gap-4 bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 w-48 sm:w-56 animate-float-slow shadow-xl" style={{ animationDelay: '1s' }}>
            <div className="bg-purple-500/20 p-1.5 sm:p-2 rounded-full">
              <Zap size={20} className="text-purple-400 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">Swap Successful</p>
              <p className="text-[10px] sm:text-xs text-gray-400">0.5 ETH ➔ 1500 USDC</p>
            </div>
          </div>

          {/* Background Decorative Circles - Scale based on device */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-72 lg:h-72 xl:w-80 xl:h-80 border border-white/5 rounded-full z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 lg:w-[350px] lg:h-[240px] sm:h-[200px] sm:h-[260px] lg:h-[300px] lg:h-[350px] xl:w-[450px] xl:h-[180px] sm:h-[240px] lg:h-[280px] sm:h-[380px] lg:h-[450px] border border-white/5 rounded-full z-0 border-dashed"></div>

        </div>
      </div>
    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#09090b] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-24"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-black text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 border border-gray-700 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Web3 Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 rounded-xl shadow-2xl bg-[#09090b]">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}