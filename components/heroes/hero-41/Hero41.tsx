"use client";
import React, { useState, useEffect } from "react";
import { Search, Heart, ShieldCheck, MapPin, ChevronDown, Star } from "lucide-react";

export default function Hero41() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [service, setService] = useState("Dog Boarding");

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-41") {
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
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-[#fffdf7] text-slate-800 transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-16' : 'py-12 sm:py-16 lg:h-[85vh] min-h-[750px] lg:min-h-[700px]'}`}>
      
      {/* ================= BACKGROUND BLOBS & SHAPES ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Noise Texture */}
        <div className="absolute inset-0 opacity-[0.3] mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>
        
        {/* Big Orange Blob */}
        <div className="absolute -top-[10%] -right-[5%] w-[80%] sm:w-[60%] lg:w-[40%] h-[50%] lg:h-[60%] bg-[#ffd166]/40 blur-[60px] sm:blur-[80px] rounded-[100%] animate-[pulse_8s_ease-in-out_infinite]"></div>
        
        {/* Big Pink Blob */}
        <div className="absolute bottom-[-10%] -left-[10%] w-[70%] sm:w-[50%] h-[40%] sm:h-[50%] bg-[#ff9f1c]/20 blur-[80px] sm:blur-[100px] rounded-[100%] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>

        {/* Abstract SVG Blob Graphic - Hidden on very small screens, visible on iPad and up */}
        <svg className="absolute top-0 right-0 w-[60%] md:w-[50%] lg:w-[40%] h-full opacity-[0.08] hidden sm:block text-[#ff9f1c]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-57.2C59.9,-43.3,66.6,-26.6,67.6,-9.9C68.5,6.8,63.7,23.5,53.2,36.5C42.8,49.5,26.8,58.8,9.5,61.9C-7.8,65,-26.3,62,-41.2,51.8C-56.1,41.5,-68.2,24,-71,-5C-73.7,-33.9,-67,-60.2,-51,-73.4C-35,-86.6,-9.7,-86.7,5.5,-78.9C20.8,-71.2,41.7,-71.1,47.7,-57.2Z" transform="translate(100 100) scale(1.1)" />
        </svg>

        {/* Floating Pet Cutouts (CSS Animation) */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float-pet {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(3deg); }
          }
          .animate-float-pet { animation: float-pet 6s ease-in-out infinite; }
        `}} />

        {/* Floating Dog Image 1 - Scaled correctly for iPad Portrait (md) */}
        <img 
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop" 
          alt="Happy Dog" 
          className="absolute top-[10%] sm:top-[15%] right-2 md:right-[5%] lg:right-[15%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-[3px] lg:border-4 border-white shadow-xl animate-float-pet hidden md:block z-10"
        />

        {/* Floating Cat Image 2 - Scaled correctly for iPad Portrait (md) */}
        <img 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop" 
          alt="Cute Cat" 
          className="absolute bottom-[25%] lg:bottom-[20%] left-2 md:left-[5%] lg:left-[15%] w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-cover rounded-full border-[3px] lg:border-4 border-white shadow-xl animate-float-pet hidden md:block z-10" 
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className={`relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6 flex flex-col items-center text-center mt-4 lg:mt-0 ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
        
        {/* Badge */}
        <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#ff9f1c]/30 bg-[#ff9f1c]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-bold text-[#e67a00] shadow-sm uppercase tracking-wider whitespace-nowrap">
          <Heart size={14} className="text-[#ff9f1c] fill-current sm:w-4 sm:h-4" /> Trusted by 5M+ Pet Parents
        </div>
        
        {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] text-slate-800 px-2 sm:px-0">
          We treat your pets <br className="hidden sm:block" />
          like <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff9f1c] to-[#ff6b6b]">
            family.

            <svg className="absolute w-full h-2 sm:h-3 -bottom-1 sm:-bottom-2 left-0 text-[#ff9f1c]" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-[95%] sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-medium">
          Find trusted local sitters, dog walkers, and vets. Background checked, reviewed by pet parents, and backed by our premium pet insurance.
        </p> */}

{/* Headline - Tuned for all devices (Mobile to Desktop) */} 
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] text-slate-800 px-2 sm:px-0"> 
  We treat your pets <br className="hidden sm:block" /> 
  like <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff9f1c] to-[#ff6b6b]"> 
    family. 
    {/* Custom SVG Underline */} 
    <svg className="absolute w-full h-2 sm:h-3 -bottom-1 sm:-bottom-2 left-0 text-[#ff9f1c]" viewBox="0 0 100 20" preserveAspectRatio="none"> 
      <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /> 
    </svg> 
  </span> 
</h1> 
 
{/* Description */} 
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-[95%] sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-medium"> 
  Find trusted local sitters, dog walkers, and vets. Background checked, reviewed by pet parents, and backed by our premium pet insurance. 
</p>

        {/* ================= SEARCH / BOOKING WIDGET ================= */}
        {/* Flex-col on mobile, flex-row on md (iPad portrait) and up */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(255,159,28,0.15)] border border-orange-50 p-2 sm:p-2.5 md:p-3 relative z-30">
          <form className="flex flex-col md:flex-row gap-2 sm:gap-2.5 md:gap-3" onSubmit={(e) => e.preventDefault()}>
            
            {/* Service Dropdown */}
            <div className="relative flex-1 group">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <Heart size={18} className="text-[#ff9f1c] sm:w-5 sm:h-5" />
              </div>
              <select 
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-8 sm:pr-10 py-3 sm:py-3.5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl text-slate-700 font-bold appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff9f1c] focus:bg-white transition-all text-xs sm:text-sm md:text-base"
              >
                <option>Dog Boarding</option>
                <option>Dog Walking</option>
                <option>House Sitting</option>
                <option>Vet Consultation</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center pointer-events-none">
                <ChevronDown size={18} className="text-slate-400 group-hover:text-[#ff9f1c] transition-colors sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Location Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <MapPin size={18} className="text-gray-400 sm:w-5 sm:h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Zip code or City" 
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl text-slate-700 font-bold placeholder:text-gray-400 placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-[#ff9f1c] focus:bg-white transition-all text-xs sm:text-sm md:text-base"
              />
            </div>

            {/* Submit Button */}
            <button className="bg-[#ff9f1c] hover:bg-[#e68a00] text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-black text-sm md:text-base transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-1.5 sm:gap-2 md:w-auto w-full active:scale-[0.98]">
              <Search size={18} className="sm:w-5 sm:h-5" /> Search
            </button>

          </form>
        </div>

        {/* Feature Tags Below Widget */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 text-slate-500 text-[10px] sm:text-xs md:text-sm font-bold">
          <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-emerald-500 sm:w-[18px] sm:h-[18px]"/> Verified Sitters</span>
          <span className="flex items-center gap-1.5"><Star size={16} className="text-amber-400 fill-current sm:w-[18px] sm:h-[18px]"/> 4.9/5 Avg Rating</span>
        </div>

      </div>
    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#fffdf7] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      <a
        href="#demo-41"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-[#ff9f1c] text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-[#e68a00] transition-all flex items-center gap-2 border border-orange-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Pet Care Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      <div className="w-full max-w-[1400px] border border-gray-200 overflow-hidden relative z-20 shadow-2xl rounded-2xl bg-[#fffdf7]">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}