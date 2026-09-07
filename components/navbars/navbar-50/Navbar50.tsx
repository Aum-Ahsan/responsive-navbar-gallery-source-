import React, { useState, useEffect } from "react";

export default function Navbar50() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-50") {
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

  // Custom Scroll Handler for the Full Screen Overlay
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const navLinks = ['Editorial', 'Runway', 'Collections', 'About', 'Contact'];

  // ================= 1. REUSABLE TYPOGRAPHIC NAVBAR =================
  const TypographicHeader = ({ isGalleryPreview = false }: { isGalleryPreview?: boolean }) => {
    const shrunkState = isGalleryPreview ? true : isScrolled;

    return (
      <header 
        className={`w-full bg-white text-black transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] z-50 flex flex-col items-center justify-center relative
          ${shrunkState ? 'h-20 lg:h-24 border-b border-gray-200' : 'h-[50vh] lg:h-[70vh] border-none'}
          ${!isGalleryPreview && shrunkState ? 'sticky top-0 left-0 shadow-sm' : ''}
        `}
      >
        <h1 
          className={`font-black uppercase tracking-tighter transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] leading-none text-center
            ${shrunkState ? 'text-3xl lg:text-4xl translate-y-0' : 'text-6xl sm:text-8xl md:text-[8rem] lg:text-[12rem] translate-y-4'}
          `}
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Typeface
        </h1>

        <p className={`absolute bottom-8 lg:bottom-12 uppercase tracking-[0.4em] text-[10px] lg:text-xs font-bold text-gray-400 transition-all duration-500 text-center w-full
            ${shrunkState ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}
        `}>
          Autumn / Winter 2024
        </p>

        {/* BOTTOM MENU ROW (Appears when Shrunk) */}
        <div className={`absolute bottom-0 left-0 w-full px-4 lg:px-12 h-20 lg:h-24 flex items-center justify-between transition-opacity duration-700 delay-100
          ${shrunkState ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          
          {/* SEARCH / LOCALE (Left Side Desktop) */}
          <div className="hidden lg:flex items-center gap-6 w-1/3">
            <span className="text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-gray-500">Search</span>
            <span className="text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-gray-500">EN / FR</span>
          </div>

          {/* EMPTY DIV FOR MOBILE LEFT SPACING (To keep logo centered) */}
          <div className="lg:hidden w-10"></div>

          {/* DESKTOP CENTER LINKS */}
          <nav className="hidden lg:flex items-center justify-center gap-8 w-1/3 absolute left-1/2 -translate-x-1/2 mt-16">
            {navLinks.map((link, idx) => (
              <a key={idx} href="#" className="text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-gray-400">
                {link}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE ACTIONS (Cart & Menu) */}
          <div className="flex items-center justify-end gap-4 lg:gap-6 w-1/3 lg:w-1/3">
            
            <button className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-gray-500 hidden sm:block">
              Cart (0)
            </button>

            {/* Desktop Menu Text */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="hidden lg:block text-sm font-bold uppercase tracking-widest hover:text-gray-500">
              Menu
            </button>

            {/* Mobile Hamburger Menu (NOW ON THE RIGHT SIDE) */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-black hover:text-gray-500 transition-colors">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
          </div>
        </div>
      </header>
    );
  };

  // ================= 2. FULL SCREEN MENU =================
  const FullScreenMenu = () => (
    <div className={`fixed inset-0 bg-black z-[100] transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col justify-center items-center ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white hover:text-gray-400 transition-colors">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="flex flex-col gap-6 text-center">
        {navLinks.map((link, idx) => (
          <a key={idx} href="#" className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-white hover:text-gray-400 hover:italic transition-all">
            {link}
          </a>
        ))}
      </div>
    </div>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div 
        className="fixed inset-0 z-[999999] bg-white w-screen h-screen overflow-y-auto font-sans"
        onScroll={handleScroll}
      >
        <FullScreenMenu />
        <TypographicHeader isGalleryPreview={false} />

        <div className={`w-full flex flex-col items-center justify-center px-6 text-center pb-32 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]`}>
           
           {!isScrolled && (
             <p className="text-gray-400 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-widest mt-12 mb-24 animate-bounce">
               ↓ Scroll Down to Shrink Header ↓
             </p>
           )}
           
           <div className={`w-full max-w-5xl h-[300px] sm:h-[400px] lg:h-[600px] bg-gray-100 mb-12 flex items-center justify-center ${isScrolled ? 'mt-12' : 'mt-0'}`}>
             <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs lg:text-sm">Fashion Editorial Image</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 w-full max-w-5xl">
             <div className="w-full h-[400px] sm:h-[500px] lg:h-[800px] bg-gray-200 flex items-center justify-center">
               <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs lg:text-sm">Look 01</span>
             </div>
             <div className="w-full h-[400px] sm:h-[500px] lg:h-[800px] bg-gray-100 md:mt-12 lg:mt-24 flex items-center justify-center">
               <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs lg:text-sm">Look 02</span>
             </div>
           </div>
        </div>
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (IN GALLERY) =================
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center bg-gray-100">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-50"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-black text-white text-xs rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 border border-gray-700 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">Test Scroll Animation</span>
        <span className="sm:hidden">Scroll Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      <div className="w-full max-w-[1200px] bg-white shadow-xl border border-gray-200 overflow-hidden mt-8 lg:mt-0 relative z-20">
        <div className="relative h-20 lg:h-24">
          <TypographicHeader isGalleryPreview={true} />
        </div>
        <FullScreenMenu />
      </div>

    </div>
  );
}