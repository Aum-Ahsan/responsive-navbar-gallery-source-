"use client";
import React, { useState, useEffect } from "react";
import { Heart, ShieldCheck, Share2, ArrowRight } from "lucide-react";

export default function Hero30() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(50); // Default donation amount

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-30") {
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
    <section className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-gray-900 text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-16' : 'py-16 lg:h-[90vh] min-h-[850px]'}`}>
      
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2940" 
          alt="Charity Background" 
          className="w-full h-full object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/95"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 md:px-8 mx-auto flex flex-col items-center mt-4 sm:mt-8">
        
        {/* TOP TEXT SECTION */}
        <div className={`flex flex-col items-center text-center w-full mb-10 sm:mb-12 ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
          
          {/* Emergency Badge */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/50 bg-rose-500/20 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold text-rose-200 backdrop-blur-md">
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-rose-500"></span>
            </span>
            Urgent Global Appeal
          </div>
          
          {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1] max-w-4xl">
            Bring Clean Water to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
              10,000 Families.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed font-medium px-2 sm:px-0">
            Every drop counts. Your contribution directly funds solar-powered wells in communities facing severe drought. 100% of your donation goes to the field.
          </p> */}

          {/* Headline */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1] max-w-4xl">
  Bring Clean Water to <br className="hidden sm:block" />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
    10,000 Families.
  </span>
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-200 max-w-2xl leading-relaxed font-medium px-2 sm:px-0">
  Every drop counts. Your contribution directly funds solar-powered wells in communities facing severe drought. 100% of your donation goes to the field.
</p>

        </div>

        {/* BOTTOM DONATION UI CARD */}
        <div className={`w-full max-w-lg lg:max-w-xl bg-white rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl shadow-black/50 text-gray-900 relative ${isFullDemo ? 'animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300' : ''}`}>
          
          {/* Progress Section */}
          <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">$85,400</p>
                <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Raised so far</p>
              </div>
              <div className="text-right">
                <p className="text-sm sm:text-base font-bold text-gray-400">$100,000</p>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">Goal</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2.5 sm:h-3 bg-gray-100 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-500 to-orange-400 w-[85%] rounded-full relative">
                {/* Animated shimmer on progress bar */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
            <p className="text-right text-[10px] sm:text-xs font-bold text-rose-500 mt-2">85% Funded • 3 Days Left</p>
          </div>

          {/* Amount Selection Grid */}
          <div className="mb-6">
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-3">Choose a donation amount:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 border-2 
                    ${selectedAmount === amount 
                      ? 'border-rose-500 bg-rose-50 text-rose-600 shadow-sm scale-[1.02]' 
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount & CTA */}
          <div className="space-y-4">
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3.5 sm:py-4 rounded-xl text-sm sm:text-base shadow-lg shadow-rose-500/30 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]">
              <Heart size={18} className="group-hover:scale-110 transition-transform" />
              Donate ${selectedAmount} Now
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs text-gray-500 font-medium px-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-green-500" /> Secure & Encrypted
              </div>
              <button className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                <Share2 size={14} /> Share this campaign
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
      <div className="fixed inset-0 z-[999999] bg-gray-900 w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-30"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-white text-rose-600 text-[10px] sm:text-xs rounded-full font-bold hover:bg-rose-50 transition-all flex items-center gap-2 border border-rose-200 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Donation UI Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-200 dark:border-gray-800 overflow-hidden relative z-20 rounded-xl shadow-2xl bg-gray-900">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}