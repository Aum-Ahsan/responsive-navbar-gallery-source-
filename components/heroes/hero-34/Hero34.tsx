"use client";
import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, Maximize, Settings, CheckCircle2, Users, TrendingUp, Mail } from "lucide-react";

export default function Hero34() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showGate, setShowGate] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-34") {
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

  // ================= 2. VIDEO PLAYER LOGIC (Lead Gate) =================
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && !showGate) {
      interval = setInterval(() => {
        setProgress((prev) => {
          // At 30% progress (approx 3 seconds), trigger the Lead Capture Gate
          if (prev >= 30 && prev < 32) {
            setIsPlaying(false);
            setShowGate(true);
            return 30;
          }
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, showGate]);

  const handlePlayToggle = () => {
    if (showGate) return; // Prevent playing if gate is active
    if (progress >= 100) setProgress(0); // Reset if finished
    setIsPlaying(!isPlaying);
  };

  const handleSkipGate = () => {
    setShowGate(false);
    setIsPlaying(true);
    setProgress(32); // Skip past the trigger point
  };

  // ================= 3. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-slate-50 text-slate-900 transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-10 sm:py-14 lg:py-20 lg:py-0' : 'py-12 sm:py-16 lg:py-0 lg:h-[85vh] min-h-[800px] lg:min-h-[650px]'}`}>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/50 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/50 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] z-0"></div>

      {/* Main Content Container - Flex Col for mobile, Flex Row for iPad Landscape/Desktop */}
      {/* NOTE: Left Video / Right Text requirement applied here via flex-col-reverse on mobile, lg:flex-row */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 md:px-10 lg:px-8 xl:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 lg:gap-10 xl:gap-16 mt-6 lg:mt-0">
        
        {/* LEFT COLUMN: Interactive Video Player Mockup */}
        <div className={`w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0 relative ${isFullDemo ? 'animate-in fade-in slide-in-from-left-8 duration-1000' : ''}`}>
          
          {/* Floating Stat Card (Top Right) */}
          <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 z-30 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-[bounce_4s_ease-in-out_infinite]">
            <div className="bg-green-100 p-1.5 rounded-full text-green-600">
              <TrendingUp size={16} />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Conversion</p>
              <p className="text-sm sm:text-base font-extrabold text-slate-900">+42.8%</p>
            </div>
          </div>

          {/* Video Player Container */}
          <div className="relative w-full aspect-video bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-200 group">
            
            {/* Thumbnail Image */}
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
              alt="Video Presentation" 
              className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105' : 'scale-100'} ${showGate ? 'blur-md brightness-50' : 'opacity-90'}`}
            />

            {/* Big Play Button (Hidden when playing or gate is shown) */}
            {!isPlaying && !showGate && (
              <button 
                onClick={handlePlayToggle}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-600/90 hover:bg-indigo-600 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110 shadow-[0_0_30px_rgba(79,70,229,0.5)] z-20"
              >
                <Play size={32} fill="currentColor" className="ml-1 sm:w-10 sm:h-10" />
                {/* Pulse Ring */}
                <span className="absolute inset-0 rounded-full border-2 border-indigo-500 animate-ping opacity-50"></span>
              </button>
            )}

            {/* ================= B2B LEAD CAPTURE GATE ================= */}
            {showGate && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in zoom-in-95 duration-300">
                <div className="bg-white w-full max-w-[280px] sm:max-w-sm rounded-xl p-5 sm:p-6 shadow-2xl text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Want to keep watching?</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-5">Enter your email to unlock the rest of this exclusive strategy video.</p>
                  <div className="relative mb-3 sm:mb-4">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="email" placeholder="work@company.com" className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <button onClick={handleSkipGate} className="w-full bg-indigo-600 text-white py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold hover:bg-indigo-700 transition-colors">
                    Unlock Video
                  </button>
                  <button onClick={handleSkipGate} className="mt-3 text-[10px] sm:text-xs text-slate-400 hover:text-slate-600 underline">
                    Skip for now
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Control Bar */}
            <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-10 pb-3 px-4 z-20 transition-opacity duration-300 ${(!isPlaying && !showGate) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              
              {/* Progress Bar */}
              <div className="w-full h-1 sm:h-1.5 bg-white/30 rounded-full mb-3 relative cursor-pointer overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full" style={{ width: `${progress}%` }}></div>
                {/* Email Gate Marker on Timeline */}
                <div className="absolute top-0 left-[30%] h-full w-1 bg-amber-400"></div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <button onClick={handlePlayToggle} className="hover:text-indigo-400 transition-colors">
                    {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                  </button>
                  <button className="hover:text-indigo-400 transition-colors hidden sm:block">
                    <Volume2 size={18} />
                  </button>
                  <span className="text-[10px] sm:text-xs font-medium font-mono">
                    0:{progress < 10 ? `0${Math.floor(progress/2)}` : Math.floor(progress/2)} / 0:50
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="hover:text-indigo-400 transition-colors hidden sm:block"><Settings size={16} /></button>
                  <button className="hover:text-indigo-400 transition-colors"><Maximize size={16} /></button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Text & CTA */}
        <div className={`w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left ${isFullDemo ? 'animate-in fade-in slide-in-from-right-8 duration-1000' : ''}`}>
          
          {/* Badge */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm font-bold text-indigo-700 shadow-sm uppercase tracking-wider">
            <Users size={16} className="sm:w-[18px] sm:h-[18px]" /> Video for Business
          </div>
          
          {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[3.5rem] 2xl:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] text-slate-900">
            Host, share, and <br className="hidden xl:block" />
            <span className="text-indigo-600">track your videos.</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-slate-600 max-w-[90%] sm:max-w-xl lg:max-w-md xl:max-w-lg mb-8 leading-relaxed font-medium">
            Turn passive viewers into active leads. The complete video platform for B2B marketers featuring interactive tools, email gates, and deep CRM analytics.
          </p> */}

          {/* Headline */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] text-slate-900">
  Host, share, and <br className="hidden xl:block" />
  <span className="text-indigo-600">track your videos.</span>
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-slate-600 max-w-[90%] sm:max-w-xl lg:max-w-md xl:max-w-lg mb-8 leading-relaxed font-medium">
  Turn passive viewers into active leads. The complete video platform for B2B marketers featuring interactive tools, email gates, and deep CRM analytics.
</p>
          
          {/* Email Capture CTA */}
          <div className="flex flex-col sm:flex-row items-center w-full max-w-md lg:max-w-full gap-3 mb-8 px-4 sm:px-0">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="w-full sm:flex-1 bg-white border border-slate-300 px-4 py-3.5 rounded-lg sm:rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm font-medium"
            />
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-6 sm:px-8 py-3.5 rounded-lg sm:rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 hover:shadow-indigo-600/50 transition-all whitespace-nowrap">
              Get Started Free
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-slate-500 border-t border-slate-200 pt-6 w-full max-w-md lg:max-w-full px-4 sm:px-0 justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-200 border-2 border-slate-50 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Trusted by <span className="font-bold text-slate-700">10,000+</span> B2B teams</p>
          </div>

        </div>

      </div>
    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-slate-50 w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6">
      <a
        href="#demo-34"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-indigo-600 text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 border border-indigo-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Interactive Video Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <div className="w-full max-w-[1400px] border border-gray-200 overflow-hidden relative z-20 rounded-xl shadow-2xl bg-white">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}