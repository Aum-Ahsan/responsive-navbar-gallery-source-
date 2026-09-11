"use client";
import React, { useState, useEffect } from "react";
import { Ticket, MapPin, Calendar, Music, ArrowRight, Play } from "lucide-react";

export default function Hero44() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  
  // States for Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 15,
    minutes: 30,
    seconds: 0
  });

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-44") {
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

  // ================= 2. COUNTDOWN TIMER LOGIC =================
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper to format numbers with leading zero
  const formatNum = (num: number) => num < 10 ? `0${num}` : num;

  // ================= 3. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-10' : 'py-16 lg:h-[85vh] min-h-[850px] lg:min-h-[700px]'}`}>
      
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540039155732-68473500d1cb?q=80&w=2946&auto=format&fit=crop" 
          alt="Concert Crowd" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Dark & Neon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        <div className="absolute top-0 right-0 w-full h-[60%] bg-gradient-to-bl from-pink-600/30 to-transparent mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-tr from-cyan-600/30 to-transparent mix-blend-screen"></div>
      </div>

      {/* Custom CSS for Cyberpunk Glitch & Neon Effects */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glitch {
          0% { text-shadow: 0.05em 0 0 rgba(255,0,0,0.75), -0.025em -0.05em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75); }
          14% { text-shadow: 0.05em 0 0 rgba(255,0,0,0.75), -0.025em -0.05em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75); }
          15% { text-shadow: -0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75); }
          49% { text-shadow: -0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75); }
          50% { text-shadow: 0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75); }
          99% { text-shadow: 0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75); }
          100% { text-shadow: -0.025em 0 0 rgba(255,0,0,0.75), -0.025em -0.025em 0 rgba(0,255,0,0.75), -0.025em -0.05em 0 rgba(0,0,255,0.75); }
        }
        .glitch-text { animation: glitch 3s infinite; }
        .neon-box { box-shadow: 0 0 10px rgba(236,72,153,0.5), inset 0 0 10px rgba(236,72,153,0.5); }
        .neon-box-cyan { box-shadow: 0 0 10px rgba(6,182,212,0.5), inset 0 0 10px rgba(6,182,212,0.5); }
      `}} />

      {/* ================= MAIN CONTENT ================= */}
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center text-center ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000' : ''}`}>
        
        {/* Top Info Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-cyan-400">
          <span className="flex items-center gap-2"><MapPin size={16} /> Miami, USA</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-pink-500"></span>
          <span className="flex items-center gap-2"><Calendar size={16} /> Aug 12-14, 2024</span>
        </div>

        {/* <h1 className="text-3xl sm:text-5xl lg:text-6xl sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white select-none">
          <span className="block glitch-text relative inline-block">Electric</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]">Neon</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-medium mb-10 sm:mb-12 tracking-wide">
          Experience 3 days of pure sonic energy. Featuring world-class DJs, mind-bending visual arts, and 100,000+ ravers.
        </p> */}

        {/* Huge Festival Title (With Glitch Effect) */} 
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white select-none"> 
  <span className="block glitch-text relative inline-block">Electric</span> 
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]">Neon</span> 
</h1> 
 
{/* Subtitle / Artist Lineup tease */} 
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-medium mb-10 sm:mb-12 tracking-wide"> 
  Experience 3 days of pure sonic energy. Featuring world-class DJs, mind-bending visual arts, and 100,000+ ravers. 
</p>

        {/* ================= LIVE COUNTDOWN TIMER ================= */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black/60 backdrop-blur-md border border-pink-500/50 neon-box flex items-center justify-center rounded-xl sm:rounded-2xl mb-2 sm:mb-3">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-pink-500">{formatNum(timeLeft.days)}</span>
            </div>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Days</span>
          </div>

          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white/30 -mt-6 sm:-mt-8">:</span>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black/60 backdrop-blur-md border border-pink-500/50 neon-box flex items-center justify-center rounded-xl sm:rounded-2xl mb-2 sm:mb-3">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-pink-500">{formatNum(timeLeft.hours)}</span>
            </div>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Hours</span>
          </div>

          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white/30 -mt-6 sm:-mt-8">:</span>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black/60 backdrop-blur-md border border-cyan-500/50 neon-box-cyan flex items-center justify-center rounded-xl sm:rounded-2xl mb-2 sm:mb-3">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-cyan-400">{formatNum(timeLeft.minutes)}</span>
            </div>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Mins</span>
          </div>

          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white/30 -mt-6 sm:-mt-8">:</span>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black/60 backdrop-blur-md border border-cyan-500/50 neon-box-cyan flex items-center justify-center rounded-xl sm:rounded-2xl mb-2 sm:mb-3">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-cyan-400">{formatNum(timeLeft.seconds)}</span>
            </div>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Secs</span>
          </div>

        </div>

        {/* ================= BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 sm:gap-6 px-4 sm:px-0">
          <button className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-sm font-black text-xs sm:text-sm uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-105 flex items-center justify-center gap-2">
            <Ticket size={18} /> Get Passes
          </button>
          <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white/20 px-8 sm:px-12 py-4 sm:py-5 rounded-sm font-black text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Play size={18} fill="currentColor" /> Watch Trailer
          </button>
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
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-44"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-pink-600 text-white text-[10px] sm:text-xs rounded-sm font-bold hover:bg-pink-500 transition-all flex items-center gap-2 border border-pink-500 z-10 shadow-[0_0_15px_rgba(236,72,153,0.5)] uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Festival Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-black">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}