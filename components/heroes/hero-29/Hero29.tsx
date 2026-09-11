"use client";
import React, { useState, useEffect } from "react";
import { Star, ShieldCheck, MapPin, Search, CheckCircle2, Clock, Hammer } from "lucide-react";

export default function Hero29() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-29") {
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
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-slate-50 text-slate-900 transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-10 sm:py-12 lg:py-16 lg:py-0' : 'py-12 sm:py-16 lg:py-0 lg:h-[80vh] min-h-[750px] lg:min-h-[650px]'}`}>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[80%] sm:w-[60%] h-[80%] bg-emerald-100/50 rounded-bl-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[60%] sm:w-[40%] h-[50%] bg-blue-100/40 blur-[80px] sm:blur-3xl rounded-full z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none"></div>

      {/* Main Content Container - Flex row for iPad Rotate/Desktop */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 md:px-10 lg:px-8 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 lg:gap-8 xl:gap-16 mt-6 lg:mt-0">
        
        {/* LEFT COLUMN: Trust & Value Props */}
        <div className={`flex-1 flex flex-col items-center text-center lg:items-start lg:text-left w-full ${isFullDemo ? 'animate-in fade-in slide-in-from-left-8 duration-1000' : ''}`}>
          
          {/* Trust Badge */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm font-semibold text-emerald-700 shadow-sm whitespace-nowrap">
            <ShieldCheck size={16} className="sm:w-[18px] sm:h-[18px]" /> 100% Background Checked
          </div>
          
          {/* <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-5xl xl:text-[3.5rem] font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1] text-slate-900 px-2 sm:px-0">
            Everyday life <br className="hidden lg:block" />
            <span className="text-emerald-600">made easier.</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-slate-600 max-w-[90%] sm:max-w-xl lg:max-w-md xl:max-w-lg mb-6 sm:mb-8 leading-relaxed font-medium">
            Book trusted, local professionals for home repairs, cleaning, moving, and more. Upfront pricing and easy booking.
          </p> */}

          {/* Headline - Responsive Text Scaling */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1] text-slate-900 px-2 sm:px-0">
  Everyday life <br className="hidden lg:block" />
  <span className="text-emerald-600">made easier.</span>
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-slate-600 max-w-[90%] sm:max-w-xl lg:max-w-md xl:max-w-lg mb-6 sm:mb-8 leading-relaxed font-medium">
  Book trusted, local professionals for home repairs, cleaning, moving, and more. Upfront pricing and easy booking.
</p>
          
          {/* Features List - Wraps correctly on mobile */}
          <div className="flex flex-col sm:flex-col md:flex-row gap-3 sm:gap-5 mb-8 sm:mb-10 w-full sm:w-auto text-left px-4 sm:px-0">
            <div className="flex items-center gap-3 bg-white/50 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
              <div className="bg-emerald-100 p-1.5 sm:p-2 rounded-full text-emerald-600 shrink-0"><CheckCircle2 size={18} className="sm:w-5 sm:h-5" /></div>
              <span className="font-semibold text-sm sm:text-base text-slate-700">Upfront Pricing</span>
            </div>
            <div className="flex items-center gap-3 bg-white/50 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
              <div className="bg-emerald-100 p-1.5 sm:p-2 rounded-full text-emerald-600 shrink-0"><Clock size={18} className="sm:w-5 sm:h-5" /></div>
              <span className="font-semibold text-sm sm:text-base text-slate-700">Same-Day Booking</span>
            </div>
          </div>

          {/* User Reviews */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 border-t border-slate-200 pt-5 sm:pt-6 w-full sm:w-auto">
            <div className="flex -space-x-3">
              <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User 1" />
              <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User 2" />
              <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User 3" />
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] sm:text-xs font-bold text-slate-600 shadow-sm">+2M</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start text-amber-400 mb-0.5 sm:mb-1">
                {[...Array(5)].map((_, i) => (<Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />))}
              </div>
              <p className="text-slate-500 text-[11px] sm:text-sm font-medium">Rated 4.8/5 by customers</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Lead Capture / Search Form Card */}
        {/* Adjusted Max-width for iPad landscape (lg:max-w-full sm:w-full sm:w-[260px] md:w-[320px] md:w-[380px]) to prevent overlapping */}
        <div className={`w-full max-w-sm sm:max-w-md lg:max-w-full sm:w-full sm:w-[260px] md:w-[320px] md:w-[380px] xl:max-w-lg mx-auto lg:mx-0 relative ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000 delay-300' : ''}`}>
          
          {/* Floating Badge - FIXED for mobile to prevent overflow (right-[-10px] scale-90 on mobile) */}
          <div className="absolute -top-5 -right-2 sm:-top-6 sm:-right-6 lg:-right-8 bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl z-20 flex items-center gap-2 sm:gap-3 animate-[bounce_3s_ease-in-out_infinite] scale-90 sm:scale-100 origin-bottom-right">
            <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full text-blue-600">
              <Hammer size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Top Service</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900">TV Mounting</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 xl:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 z-10">
            <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Find a professional</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6">Get instant estimates for your project.</p>
            
            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* Service Input */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 sm:mb-2">What do you need help with?</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <Search size={16} className="text-slate-400 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="e.g. House Cleaning..." 
                    className="block w-full pl-9 sm:pl-11 pr-3 py-2.5 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              {/* Location Input */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 sm:mb-2">Your Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <MapPin size={16} className="text-slate-400 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Zip code or City" 
                    className="block w-full pl-9 sm:pl-11 pr-3 py-2.5 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="button"
                className="w-full mt-3 sm:mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                See Professionals Near You
              </button>
            </form>

            <p className="text-center text-[10px] sm:text-[11px] text-slate-400 mt-4">
              No credit card required. Free estimates.
            </p>
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
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-29"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-emerald-600 text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-emerald-700 transition-all flex items-center gap-2 border border-emerald-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Service Booking Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-200 overflow-hidden relative z-20 rounded-xl shadow-2xl bg-white">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}