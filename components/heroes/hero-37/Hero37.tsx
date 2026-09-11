"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, Zap, TrendingUp, Coffee } from "lucide-react";

export default function Hero37() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-37") {
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
    <section className={`relative w-full flex flex-col justify-between overflow-hidden bg-[#f4f4f0] text-black transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh]' : 'h-[600px] sm:h-[700px] lg:h-[85vh] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] sm:min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] lg:min-h-[600px]'}`}>
      
      {/* Brutalist Top Border */}
      <div className="w-full h-2 sm:h-3 md:h-4 bg-black shrink-0"></div>

      {/* MAIN CONTENT CENTERED */}
      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-5xl xl:max-w-6xl mx-auto w-full text-center ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000' : ''}`}>
        
        {/* Top Badge */}
        <div className="mb-5 sm:mb-8 md:mb-10 flex items-center gap-1.5 sm:gap-2 border-2 border-black bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
          <Coffee size={14} className="sm:w-4 sm:h-4" /> Read by 2.5M+ Professionals
        </div>
        
        {/* <h1 className="font-serif text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6.5rem] font-black leading-[0.95] sm:leading-[0.9] tracking-tighter mb-4 sm:mb-6 uppercase px-2 sm:px-0">
          Become <br className="hidden sm:block" />
          Smarter in <br className="hidden sm:block" />
          <span className="inline-block bg-[#ffea00] px-2 sm:px-3 md:px-4 mt-1 sm:mt-2 border-[3px] sm:border-4 border-black rotate-[-2deg]">5 Minutes.</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-[90%] sm:max-w-md md:max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed text-gray-700">
          The daily email newsletter that delivers the latest news in tech, business, and finance directly to your inbox. No fluff, just the good stuff.
        </p> */}

        {/* Brutalist Headline - Finely tuned for all breakpoints */} 
<h1 className="font-serif !text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-black leading-[0.95] sm:leading-[0.9] tracking-tighter mb-4 sm:mb-6 uppercase px-2 sm:px-0"> 
  Become <br className="hidden sm:block" /> 
  Smarter in <br className="hidden sm:block" /> 
  <span className="inline-block bg-[#ffea00] px-2 sm:px-3 md:px-4 mt-1 sm:mt-2 border-[3px] sm:border-4 border-black rotate-[-2deg]">5 Minutes.</span> 
</h1> 
 
{/* Description */} 
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-[90%] sm:max-w-md md:max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed text-gray-700"> 
  The daily email newsletter that delivers the latest news in tech, business, and finance directly to your inbox. No fluff, just the good stuff. 
</p>
        
        {/* Subscribe Form (Button inside Input style) */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto relative group">
          {/* Shadow Box */}
          <div className="absolute inset-0 bg-black rounded-none translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 md:translate-x-2 md:translate-y-2 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 md:group-hover:translate-x-3 md:group-hover:translate-y-3 z-0"></div>
          
          <form className="relative z-10 flex items-center bg-white border-[3px] sm:border-4 border-black p-1 sm:p-1.5 md:p-2" onSubmit={(e) => e.preventDefault()}>
            <Mail className="text-gray-400 ml-2 sm:ml-3 md:ml-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0" />
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              className="flex-1 bg-transparent border-none px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-bold placeholder:text-gray-400 placeholder:font-medium focus:outline-none min-w-0"
              required
            />
            <button type="submit" className="bg-black text-white px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-widest hover:bg-[#ffea00] hover:text-black transition-colors flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="hidden sm:block">Subscribe</span>
              <span className="sm:hidden">Join</span>
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </button>
          </form>
        </div>
        
        <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-500 mt-5 sm:mt-6 md:mt-8 uppercase tracking-widest">★ 100% Free. Unsubscribe anytime.</p>
      </div>

      {/* CONTINUOUS MARQUEE TICKER TAPE (Bottom) */}
      <div className="w-full border-t-[3px] sm:border-y-4 border-black bg-[#ffea00] overflow-hidden flex items-center h-10 sm:h-12 md:h-14 relative z-20 shrink-0">
        
        {/* CSS for Marquee Animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee { display: flex; width: max-content; animation: marquee 20s linear infinite; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}} />

        <div className="animate-marquee items-center cursor-pointer">
          {/* We duplicate the content twice to create a seamless infinite loop */}
          {[1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex items-center">
              <div className="flex items-center gap-1.5 sm:gap-2 mx-4 sm:mx-6 text-black font-black uppercase text-[9px] sm:text-xs md:text-sm tracking-widest whitespace-nowrap">
                <TrendingUp size={14} className="sm:w-4 sm:h-4" /> Tech Stocks surge by 4.5%
              </div>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mx-1 sm:mx-2 shrink-0"></span>
              
              <div className="flex items-center gap-1.5 sm:gap-2 mx-4 sm:mx-6 text-black font-black uppercase text-[9px] sm:text-xs md:text-sm tracking-widest whitespace-nowrap">
                <Zap size={14} className="sm:w-4 sm:h-4" /> AI Startup raises $50M
              </div>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mx-1 sm:mx-2 shrink-0"></span>
              
              <div className="flex items-center gap-1.5 sm:gap-2 mx-4 sm:mx-6 text-black font-black uppercase text-[9px] sm:text-xs md:text-sm tracking-widest whitespace-nowrap">
                <ArrowRight size={14} className="sm:w-4 sm:h-4" /> Fed holds interest rates steady
              </div>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mx-1 sm:mx-2 shrink-0"></span>
              
              <div className="flex items-center gap-1.5 sm:gap-2 mx-4 sm:mx-6 text-black font-black uppercase text-[9px] sm:text-xs md:text-sm tracking-widest whitespace-nowrap">
                <TrendingUp size={14} className="sm:w-4 sm:h-4" /> Crypto market sees massive inflow
              </div>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mx-1 sm:mx-2 shrink-0"></span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#f4f4f0] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-37"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-black text-white text-[10px] sm:text-xs font-bold hover:bg-[#ffea00] hover:text-black transition-all flex items-center gap-2 border-2 border-black z-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Newsletter Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border-[3px] sm:border-4 border-black overflow-hidden relative z-20 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] bg-[#f4f4f0]">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}