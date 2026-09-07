"use client";
import React, { useState, useEffect } from "react";
import { Search, MapPin, Package, Truck, CheckCircle2, Plane, Loader2 } from "lucide-react";

export default function Hero36() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [trackingState, setTrackingState] = useState<'idle' | 'loading' | 'found'>('idle');
  const [trackingId, setTrackingId] = useState('');

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-36") {
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

  // ================= 2. TRACKING SIMULATION =================
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    setTrackingState('loading');
    setTimeout(() => {
      setTrackingState('found');
    }, 1500);
  };

  const resetTracking = () => {
    setTrackingState('idle');
    setTrackingId('');
  };

  // ================= 3. REUSABLE HERO UI =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#000f1f] text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-20' : 'py-16 lg:h-[85vh] min-h-[750px] lg:min-h-[700px]'}`}>
      
      {/* ================= 100% PURE CSS & SVG BACKGROUND (NO IMAGES) ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Radar / Grid Texture */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `, 
          backgroundSize: '50px 50px' 
        }}></div>

        {/* Big Glowing Orbs (Atmosphere) */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[100px] rounded-full"></div>

        {/* Global Network Nodes (CSS Only) */}
        {/* Node 1: New York */}
        <div className="absolute top-[25%] left-[10%] lg:left-[15%] hidden md:block">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 shadow-[0_0_20px_#3b82f6]"></span>
          </span>
          <p className="absolute top-5 -left-4 text-[10px] text-blue-300 font-bold uppercase tracking-widest">New York</p>
        </div>

        {/* Node 2: London */}
        <div className="absolute top-[35%] right-[10%] lg:right-[20%] hidden md:block">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 shadow-[0_0_20px_#f59e0b]"></span>
          </span>
          <p className="absolute top-5 -left-2 text-[10px] text-amber-300 font-bold uppercase tracking-widest">London</p>
        </div>

        {/* Node 3: Tokyo */}
        <div className="absolute bottom-[25%] right-[25%] lg:right-[35%] hidden lg:block">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style={{ animationDelay: '0.5s' }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_15px_#10b981]"></span>
          </span>
          <p className="absolute top-4 -left-3 text-[10px] text-emerald-300 font-bold uppercase tracking-widest">Tokyo</p>
        </div>

        {/* SVG Flight/Shipping Paths */}
        <svg className="absolute inset-0 w-full h-full hidden lg:block opacity-40">
          {/* Path NY to London */}
          <path 
            d="M 15% 25% Q 40% 10% 80% 35%" 
            fill="transparent" 
            stroke="url(#grad1)" 
            strokeWidth="2" 
            strokeDasharray="6,6" 
            className="animate-[dash_20s_linear_infinite]"
          />
          {/* Path London to Tokyo */}
          <path 
            d="M 80% 35% Q 70% 60% 65% 75%" 
            fill="transparent" 
            stroke="url(#grad2)" 
            strokeWidth="1.5" 
            strokeDasharray="4,4" 
            className="animate-[dash_15s_linear_infinite_reverse]"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes dash { to { stroke-dashoffset: -100; } }
          `}} />
        </svg>
      </div>

      {/* ================= FOREGROUND CONTENT ================= */}
      <div className={`relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center mt-4 lg:mt-0 ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
        
        {/* <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Plane size={14} /> Global Freight Network
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] drop-shadow-2xl">
            Fast, Reliable <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Global Logistics.</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Ship anywhere in the world with confidence. Real-time tracking, transparent pricing, and 24/7 customer support.
          </p>
        </div> */}

        {/* Header Text */} 
<div className="text-center mb-10 sm:mb-12"> 
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md"> 
    <Plane size={14} /> Global Freight Network 
  </div> 

  <h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-extrabold tracking-tight mb-6 leading-[1.1] drop-shadow-2xl"> 
    Fast, Reliable <br className="hidden sm:block" /> 
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Global Logistics.</span> 
  </h1> 

  <p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-300 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-md"> 
    Ship anywhere in the world with confidence. Real-time tracking, transparent pricing, and 24/7 customer support. 
  </p> 
</div>

        {/* TRACKING WIDGET (The Core Feature) */}
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-2 sm:p-3 relative z-20">
          
          {/* Tabs */}
          <div className="flex items-center gap-6 px-4 sm:px-6 pt-3 sm:pt-4 mb-4 border-b border-gray-100">
            <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-3 text-xs sm:text-sm">Track</button>
            <button className="text-gray-400 font-bold hover:text-gray-600 pb-3 text-xs sm:text-sm transition-colors">Quote</button>
            <button className="text-gray-400 font-bold hover:text-gray-600 pb-3 text-xs sm:text-sm transition-colors">Ship</button>
          </div>

          <div className="p-2 sm:p-4 min-h-[120px]">
            {/* STATE 1: IDLE (Input Form) */}
            {trackingState === 'idle' && (
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter Tracking ID (e.g. TRK-9824)" 
                    className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 sm:py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                  Track Package
                </button>
              </form>
            )}

            {/* STATE 2: LOADING */}
            {trackingState === 'loading' && (
              <div className="flex flex-col items-center justify-center py-6 text-blue-600 h-[100px] animate-in fade-in">
                <Loader2 size={32} className="animate-spin mb-3" />
                <p className="text-sm font-bold text-gray-600">Locating your package...</p>
              </div>
            )}

            {/* STATE 3: FOUND (Timeline) */}
            {trackingState === 'found' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Tracking ID</p>
                    <p className="text-lg font-black text-gray-900">{trackingId || "TRK-9824X"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Est. Delivery</p>
                    <p className="text-lg font-black text-emerald-600">Tomorrow, 2:00 PM</p>
                  </div>
                </div>

                {/* Timeline UI */}
                <div className="relative pl-6 space-y-6 sm:space-y-8 before:absolute before:inset-0 before:ml-[11px] before:w-[2px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:bg-gray-200">
                  
                  {/* Step 1: Completed */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-[-11px] md:static">
                    </div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)]">
                      <p className="font-bold text-gray-900 text-sm">Dispatched</p>
                      <p className="text-xs text-gray-500">New York Facility • Oct 12</p>
                    </div>
                  </div>

                  {/* Step 2: Active */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-[-11px] md:static">
                      <span className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping"></span>
                    </div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)]">
                      <p className="font-bold text-blue-600 text-sm flex items-center gap-2"><Truck size={14} /> In Transit</p>
                      <p className="text-xs text-gray-500">Leaving London Hub • Today</p>
                    </div>
                  </div>

                  {/* Step 3: Pending */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-gray-200 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-[-11px] md:static">
                    </div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)]">
                      <p className="font-bold text-gray-400 text-sm">Out for Delivery</p>
                      <p className="text-xs text-gray-400">Pending</p>
                    </div>
                  </div>
                </div>

                <button onClick={resetTracking} className="mt-6 w-full text-center text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  Track another package
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Feature Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest relative z-20">
          <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-blue-500"/> Real-time API</span>
          <span className="flex items-center gap-1.5"><Package size={16} className="text-blue-500"/> Ocean & Air Freight</span>
        </div>

      </div>
    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#000f1f] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      <a
        href="#demo-36"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-blue-600 text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 border border-blue-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Interactive Tracking Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-[#000f1f]">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}