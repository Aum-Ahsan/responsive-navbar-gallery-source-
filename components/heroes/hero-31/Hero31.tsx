"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Play, TrendingUp, Activity, Users, PieChart } from "lucide-react";

export default function Hero31() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-31") {
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
    <section className={`relative w-full flex flex-col items-center overflow-hidden bg-[#030712] text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] pt-20' : 'pt-16 pb-0 lg:h-[85vh] min-h-[750px] lg:min-h-[700px] xl:min-h-[800px]'}`}>
      
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%] h-[40%] bg-indigo-600/20 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-blue-900/20 to-transparent z-0 pointer-events-none" />

      {/* TOP TEXT SECTION (Centered Stack) */}
      <div className={`relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
        
        {/* Badge */}
        <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold text-indigo-300 backdrop-blur-md whitespace-nowrap">
          <Activity size={16} className="text-indigo-400 shrink-0" /> New: Real-time User Funnels
        </div>
        
        {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-6xl lg:text-[3rem] xl:text-[3.5rem] 2xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] px-2 sm:px-0">
          Understand your users. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Grow your product.
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-xl text-gray-400 max-w-[90%] sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
          The ultimate data platform that gives you real-time insights into user behavior, funnel conversions, and revenue growth. No SQL required.
        </p> */}


        {/* Headline - Responsive scaling (specifically tuned for lg: iPad Landscape) */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-bold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] px-2 sm:px-0">
  Understand your users. <br className="hidden sm:block" />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
    Grow your product.
  </span>
</h1>

{/* Description */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-gray-400 max-w-[90%] sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
  The ultimate data platform that gives you real-time insights into user behavior, funnel conversions, and revenue growth. No SQL required.
</p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button className="w-full sm:w-auto bg-indigo-600 text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2">
            Start Free Trial <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto text-white border border-white/10 bg-white/5 backdrop-blur-md px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <Play size={18} fill="currentColor" /> Book a Demo
          </button>
        </div>
      </div>

      {/* BOTTOM MASSIVE DASHBOARD GRAPHIC (Pure CSS/HTML) */}
      {/* Adjusted lg:max-w-3xl for perfect fit on iPad Landscape */}
      <div className={`relative z-20 mt-10 sm:mt-12 md:mt-16 w-full max-w-[92%] sm:max-w-[90%] md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto ${isFullDemo ? 'animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300' : ''}`}>
        
        {/* Inline CSS for Chart Animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes bar-grow {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
          }
          .anim-bar { transform-origin: bottom; animation: bar-grow 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        `}} />

        {/* The Dashboard Mockup Container */}
        <div className="relative rounded-t-xl sm:rounded-t-2xl border border-white/10 bg-[#0f172a] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Dashboard Header */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 bg-white/5">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500"></div>
            <div className="ml-2 sm:ml-4 text-[9px] sm:text-xs text-gray-500 font-medium">project_dashboard_view / analytics</div>
          </div>

          {/* Dashboard Body - Adjusted heights for different screens */}
          <div className="flex p-3 sm:p-5 lg:p-5 xl:p-6 gap-4 lg:gap-5 xl:gap-6 h-[220px] sm:h-[200px] sm:h-[260px] lg:h-[300px] lg:h-[200px] sm:h-[260px] lg:h-[300px] xl:h-[260px] sm:h-[340px] lg:h-[400px]">
            
            {/* Sidebar - Shown on iPad Landscape (lg) & Desktop (xl) */}
            <div className="hidden lg:flex flex-col gap-4 w-32 xl:w-48 border-r border-white/10 pr-4 xl:pr-6 pt-2 shrink-0">
              <div className="h-3 xl:h-4 w-full bg-white/5 rounded"></div>
              <div className="h-3 xl:h-4 w-3/4 bg-white/5 rounded"></div>
              <div className="h-3 xl:h-4 w-5/6 bg-white/5 rounded"></div>
              <div className="mt-6 xl:mt-8 h-3 xl:h-4 w-full bg-indigo-500/20 rounded"></div>
              <div className="h-3 xl:h-4 w-3/4 bg-white/5 rounded"></div>
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 flex flex-col w-full">
              <div className="flex justify-between items-start sm:items-center mb-4 sm:mb-6 lg:mb-4 xl:mb-6">
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5 sm:mb-1">Revenue Overview</h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-400">Last 30 days vs previous</p>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-indigo-500/10 text-indigo-400 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 rounded-md text-[9px] sm:text-[10px] md:text-xs font-bold border border-indigo-500/20 whitespace-nowrap">
                  <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5" /> +24.5%
                </div>
              </div>

              {/* Animated Bar Chart */}
              <div className="flex-1 flex items-end justify-between gap-1 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-4 pb-2 border-b border-white/10 relative">
                
                {/* Background Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
                  <div className="w-full border-t border-white/5"></div>
                  <div className="w-full border-t border-white/5"></div>
                  <div className="w-full border-t border-white/5"></div>
                </div>

                {/* Bars */}
                {[35, 60, 40, 75, 50, 90, 65, 100].map((height, i) => (
                  <div key={i} className="relative flex-1 group z-10 h-full flex items-end">
                    <div className="absolute bottom-0 w-full bg-white/5 rounded-t-sm" style={{ height: '100%' }}></div>
                    <div 
                      className={`relative w-full rounded-t-sm anim-bar ${i === 7 ? 'bg-indigo-500' : 'bg-blue-500'}`} 
                      style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                    >
                      {/* Hover Tooltip */}
                      <div className="hidden sm:block opacity-0 group-hover:opacity-100 absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded transition-opacity pointer-events-none">
                        ${height}k
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING METRIC CARDS */}
        
        {/* Floating Card 1 (Left) - Properly positioned for lg */}
        <div className="hidden md:flex absolute top-12 lg:top-16 xl:top-20 -left-6 lg:-left-8 xl:-left-12 z-30 items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-xl border border-white/20 p-2.5 lg:p-3 xl:p-4 rounded-xl shadow-2xl animate-float-slow">
          <div className="bg-emerald-500/20 p-1.5 lg:p-2 rounded-lg text-emerald-400">
            <Users size={18} className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
          </div>
          <div>
            <p className="text-[9px] lg:text-[10px] text-gray-400 font-medium">Active Users</p>
            <p className="text-sm lg:text-sm xl:text-base font-bold text-white">12,450</p>
          </div>
        </div>

        {/* Floating Card 2 (Right) - Properly positioned for lg */}
        <div className="absolute top-1/4 sm:top-1/3 right-1 sm:-right-4 lg:-right-6 xl:-right-10 z-30 flex items-center gap-2 sm:gap-2.5 lg:gap-3 bg-white/10 backdrop-blur-xl border border-white/20 p-2 sm:p-2.5 lg:p-3 xl:p-4 rounded-lg sm:rounded-xl shadow-2xl animate-float-slow scale-75 sm:scale-100 origin-right" style={{ animationDelay: '1s' }}>
          <div className="bg-purple-500/20 p-1.5 lg:p-2 rounded-lg text-purple-400">
            <PieChart size={16} className="sm:w-4 sm:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
          </div>
          <div>
            <p className="text-[9px] lg:text-[10px] text-gray-400 font-medium">Conversion</p>
            <p className="text-xs sm:text-sm xl:text-base font-bold text-white">4.8%</p>
          </div>
        </div>

      </div>
    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#030712] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      <a
        href="#demo-31"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-indigo-600 text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 border border-indigo-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Analytics Demo</span>
        <span className="sm:hidden">Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 rounded-xl shadow-2xl bg-[#030712]">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}