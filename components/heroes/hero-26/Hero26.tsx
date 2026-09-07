"use client";
import React, { useState, useEffect } from "react";
import { Mic, Play, Pause, SkipForward, SkipBack, Heart, Share2, Headphones } from "lucide-react";

export default function Hero26() {
  const [isNewTabDemo, setIsNewTabDemo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-26") {
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
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-20 lg:py-0' : 'py-16 lg:py-0 lg:h-[80vh] min-h-[750px] lg:min-h-[600px]'}`}>
      
      {/* Background Gradient/Glow Effects */}
      <div className="absolute top-0 right-0 w-[80%] lg:w-[50%] h-[80%] bg-violet-600/20 blur-[100px] md:blur-[150px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[80%] sm:w-[50%] h-[50%] bg-fuchsia-600/10 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Main Content Container - Flex Col for Mobile/iPad, Flex Row for iPad Landscape/Desktop */}
      <div className="relative z-10 max-w-7xl w-full px-5 sm:px-8 md:px-12 lg:px-12 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-16 mt-8 lg:mt-0">
        
        {/* LEFT COLUMN: Text Content */}
        <div className={`flex-1 flex flex-col items-center text-center lg:items-start lg:text-left w-full ${isFullDemo ? 'animate-in fade-in slide-in-from-left-8 duration-1000' : ''}`}>
          
          {/* Badge */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm font-semibold text-violet-400 backdrop-blur-md">
            <Mic size={16} className="animate-pulse" /> New Episode Out Now
          </div>
{/*           
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[2.75rem] xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1]">
            The Future of <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
              Tech & Design.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-gray-400 max-w-md sm:max-w-xl lg:max-w-md mb-8 leading-relaxed px-4 lg:px-0">
            Join us this week as we dive deep into the world of AI, UI/UX trends, and how the digital landscape is changing forever. Hosted by Sarah Jenkins.
          </p> */}

          {/* Headline - Responsive Scaling for iPad Landscape (lg) vs Desktop (xl) */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-bold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1]">
  The Future of <br className="hidden lg:block" />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
    Tech & Design.
  </span>
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-400 max-w-md sm:max-w-xl lg:max-w-md mb-8 leading-relaxed px-4 lg:px-0">
  Join us this week as we dive deep into the world of AI, UI/UX trends, and how the digital landscape is changing forever. Hosted by Sarah Jenkins.
</p>
          
          {/* Buttons - Stack on small mobile, inline on others */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10 px-4 lg:px-0">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-violet-600 text-white px-6 sm:px-8 py-3.5 rounded-full font-bold hover:bg-violet-500 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />} 
              {isPlaying ? "Pause Episode" : "Listen Now"}
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-6 sm:px-8 py-3.5 rounded-full font-semibold backdrop-blur-md hover:bg-white/10 transition-colors">
              <Headphones size={20} /> All Episodes
            </button>
          </div>

          {/* User Reviews / Listeners */}
          <div className="flex items-center justify-center lg:justify-start gap-4 border-t border-white/10 pt-6 w-full sm:w-auto">
            <div className="flex -space-x-3">
              <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0a0a0a] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User 1" />
              <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0a0a0a] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User 2" />
              <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0a0a0a] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User 3" />
            </div>
            <div className="text-left text-xs sm:text-sm">
              <p className="font-bold text-white">4.9/5 Rating</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">Join 50k+ daily listeners</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Audio Player UI - Scales perfectly */}
        <div className={`w-full max-w-[340px] sm:max-w-md lg:max-w-[360px] xl:max-w-[420px] mx-auto lg:mx-0 ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000 delay-300' : ''}`}>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes visualizer {
              0%, 100% { transform: scaleY(0.3); }
              50% { transform: scaleY(1); }
            }
            .anim-bar { transform-origin: bottom; }
            .is-playing .anim-bar { animation: visualizer 1.2s ease-in-out infinite alternate; }
            .is-playing .anim-bar:nth-child(1) { animation-delay: 0.1s; }
            .is-playing .anim-bar:nth-child(2) { animation-delay: 0.4s; }
            .is-playing .anim-bar:nth-child(3) { animation-delay: 0.2s; }
            .is-playing .anim-bar:nth-child(4) { animation-delay: 0.6s; }
            .is-playing .anim-bar:nth-child(5) { animation-delay: 0.3s; }
          `}} />

          {/* Glassmorphism Player Card */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 backdrop-blur-2xl shadow-2xl overflow-hidden group">
            
            {/* Background Image blur for player container */}
            <div className="absolute inset-0 z-0 opacity-20 blur-2xl pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop')`, backgroundSize: 'cover' }}></div>

            <div className="relative z-10">
              {/* Cover Art */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 sm:mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Podcast Cover" 
                  className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
                />
                
                {/* Audio Visualizer Overlay (Only active when playing) */}
                <div className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-center gap-1 h-6 sm:h-8 ${isPlaying ? 'is-playing' : ''}`}>
                  <div className="w-1 sm:w-1.5 h-full bg-white/80 rounded-t anim-bar" style={{ transform: 'scaleY(0.2)' }}></div>
                  <div className="w-1 sm:w-1.5 h-full bg-white/80 rounded-t anim-bar" style={{ transform: 'scaleY(0.5)' }}></div>
                  <div className="w-1 sm:w-1.5 h-full bg-white/80 rounded-t anim-bar" style={{ transform: 'scaleY(0.3)' }}></div>
                  <div className="w-1 sm:w-1.5 h-full bg-white/80 rounded-t anim-bar" style={{ transform: 'scaleY(0.8)' }}></div>
                  <div className="w-1 sm:w-1.5 h-full bg-white/80 rounded-t anim-bar" style={{ transform: 'scaleY(0.4)' }}></div>
                </div>
              </div>

              {/* Title & Actions */}
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="pr-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1 line-clamp-1">Ep 42: Designing the Future</h3>
                  <p className="text-violet-400 text-xs sm:text-sm font-medium">Tech & Design Podcast</p>
                </div>
                <div className="flex gap-2 sm:gap-3 shrink-0">
                  <button className="text-gray-400 hover:text-white transition-colors"><Heart size={18} className="sm:w-5 sm:h-5" /></button>
                  <button className="text-gray-400 hover:text-white transition-colors"><Share2 size={18} className="sm:w-5 sm:h-5" /></button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-5 sm:mb-6">
                <div className="w-full h-1.5 bg-gray-700 rounded-full cursor-pointer relative">
                  <div className={`absolute top-0 left-0 h-full bg-violet-500 rounded-full transition-all duration-1000 ${isPlaying ? 'w-1/2' : 'w-1/3'}`}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg"></div>
                  </div>
                </div>
                <div className="flex justify-between text-[10px] sm:text-[11px] font-medium text-gray-400 mt-2">
                  <span>{isPlaying ? '24:15' : '15:30'}</span>
                  <span>48:00</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 sm:gap-8">
                <button className="text-gray-400 hover:text-white transition-colors"><SkipBack size={20} className="sm:w-6 sm:h-6" fill="currentColor" /></button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  {isPlaying ? <Pause size={24} className="sm:w-7 sm:h-7" fill="currentColor" /> : <Play size={24} className="sm:w-7 sm:h-7 ml-1" fill="currentColor" />}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors"><SkipForward size={20} className="sm:w-6 sm:h-6" fill="currentColor" /></button>
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
      <div className="fixed inset-0 z-[999999] bg-[#0a0a0a] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-26"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-black text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 border border-gray-700 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Audio Player Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 rounded-xl shadow-2xl bg-[#0a0a0a]">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}