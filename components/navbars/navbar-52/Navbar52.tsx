import React, { useState, useEffect } from "react";

export default function Navbar52() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  
  // Accessibility States
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [textSizeMultiplier, setTextSizeMultiplier] = useState<number>(1); // 1 = Normal, 1.25 = Large, 1.5 = Extra Large

  // URL-ல் #demo-52 என்று இருக்கிறதா என சரிபார்க்கும்
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-52") {
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

  const navLinks = ['Home', 'Services', 'Resources', 'About Us', 'Contact'];

  // Text Size Handlers
  const increaseTextSize = () => {
    if (textSizeMultiplier < 1.5) setTextSizeMultiplier(prev => prev + 0.25);
  };
  const decreaseTextSize = () => {
    if (textSizeMultiplier > 1) setTextSizeMultiplier(prev => prev - 0.25);
  };

  // ================= 1. ACCESSIBILITY TOP BAR =================
  const A11yTopBar = () => (
    <div className={`w-full py-2 px-4 lg:px-8 flex items-center justify-between border-b-2 z-50 relative
      ${isHighContrast ? 'bg-black text-yellow-400 border-yellow-400' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
    >
      <div className="hidden md:flex items-center gap-4">
        <span className="font-bold uppercase tracking-widest" style={{ fontSize: `${0.7 * textSizeMultiplier}rem` }}>
          Accessibility Options
        </span>
      </div>

      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
        {/* Text Size Controls */}
        <div className="flex items-center gap-3">
          <span className="font-bold" style={{ fontSize: `${0.75 * textSizeMultiplier}rem` }}>Text Size:</span>
          <div className="flex items-center bg-white border-2 border-gray-300 rounded overflow-hidden">
            <button 
              onClick={decreaseTextSize} 
              disabled={textSizeMultiplier === 1}
              className={`px-3 py-1 font-bold border-r-2 border-gray-300 transition-colors 
                ${textSizeMultiplier === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'} 
                ${isHighContrast ? 'text-black' : 'text-gray-800'}`}
              aria-label="Decrease text size"
            >
              A-
            </button>
            <button 
              onClick={increaseTextSize} 
              disabled={textSizeMultiplier === 1.5}
              className={`px-3 py-1 font-bold text-lg transition-colors 
                ${textSizeMultiplier === 1.5 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}
                ${isHighContrast ? 'text-black' : 'text-gray-800'}`}
              aria-label="Increase text size"
            >
              A+
            </button>
          </div>
        </div>

        {/* High Contrast Toggle */}
        <div className="flex items-center gap-2">
          <label htmlFor="contrast-toggle" className="font-bold cursor-pointer" style={{ fontSize: `${0.75 * textSizeMultiplier}rem` }}>
            High Contrast
          </label>
          <button 
            id="contrast-toggle"
            onClick={() => setIsHighContrast(!isHighContrast)}
            className={`w-12 h-6 rounded-full p-1 transition-colors relative flex items-center
              ${isHighContrast ? 'bg-yellow-400' : 'bg-gray-300'}`}
            aria-label="Toggle high contrast mode"
          >
            <div className={`w-4 h-4 rounded-full transition-transform duration-300 transform 
              ${isHighContrast ? 'bg-black translate-x-6' : 'bg-white translate-x-0'}`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );

  // ================= 2. MAIN HEADER =================
  const MainHeader = () => (
    <header className={`w-full flex items-center justify-between px-4 lg:px-8 h-20 lg:h-24 border-b-4 z-40 relative transition-colors
      ${isHighContrast ? 'bg-black border-yellow-400' : 'bg-white border-blue-600'}`}
    >
      
      {/* BRAND LOGO */}
      <div className="flex items-center gap-3 cursor-pointer shrink-0">
        <div className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full
          ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-600 text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <span 
          className={`font-black tracking-tight ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}
          style={{ fontSize: `${1.5 * textSizeMultiplier}rem` }}
        >
          ClearView
        </span>
      </div>

      {/* DESKTOP LINKS */}
      <nav className="hidden lg:flex items-center gap-2">
        {navLinks.map((link, idx) => (
          <a 
            key={idx} 
            href="#" 
            className={`px-5 py-3 font-bold transition-all border-b-4 
              ${isHighContrast 
                ? (idx === 0 ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10' : 'border-transparent text-white hover:border-yellow-400 hover:bg-yellow-400/10') 
                : (idx === 0 ? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:border-blue-600 hover:bg-gray-50 hover:text-blue-700')}`}
            style={{ fontSize: `${1 * textSizeMultiplier}rem` }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* MOBILE HAMBURGER MENU */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`lg:hidden p-3 rounded border-2 transition-colors
          ${isHighContrast ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400/20' : 'border-gray-300 text-gray-800 hover:bg-gray-100'}`}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>
    </header>
  );

  // ================= 3. MOBILE DROPDOWN MENU =================
  const MobileDropdownMenu = () => (
    <div 
      className={`lg:hidden w-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out border-b-4
        ${isHighContrast ? 'bg-black border-yellow-400' : 'bg-white border-blue-600'}
        ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 border-none'}
      `}
    >
      {navLinks.map((link, idx) => (
        <a 
          key={idx} 
          href="#" 
          className={`p-4 font-bold border-b transition-all
            ${isHighContrast 
              ? (idx === 0 ? 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30' : 'text-white border-gray-800 hover:bg-yellow-400/10') 
              : (idx === 0 ? 'text-blue-700 bg-blue-50 border-blue-100' : 'text-gray-700 border-gray-100 hover:bg-gray-50')}`}
          style={{ fontSize: `${1.1 * textSizeMultiplier}rem` }}
        >
          {link}
        </a>
      ))}
    </div>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO - ACCESSIBLE UI) =================
  if (isNewTabDemo) {
    return (
      <div className={`fixed inset-0 z-[999999] h-screen w-screen overflow-y-auto font-sans transition-colors
        ${isHighContrast ? 'bg-black' : 'bg-gray-50'}`}
      >
        <A11yTopBar />
        <MainHeader />
        <MobileDropdownMenu />

        {/* Accessible Content Area */}
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20 flex flex-col gap-8">
          
          {/* Badge */}
          <div className="self-start">
            <span 
              className={`px-4 py-2 font-black uppercase tracking-widest rounded border-2
                ${isHighContrast ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-blue-100 text-blue-800 border-blue-200'}`}
              style={{ fontSize: `${0.8 * textSizeMultiplier}rem` }}
            >
              Public Information
            </span>
          </div>

          {/* Heading */}
          <h1 
            className={`font-black leading-tight ${isHighContrast ? 'text-yellow-400' : 'text-gray-900'}`}
            style={{ fontSize: `${3 * textSizeMultiplier}rem` }}
          >
            Ensuring Digital Accessibility for Everyone.
          </h1>

          {/* Content Paragraphs */}
          <p 
            className={`font-medium leading-relaxed max-w-3xl ${isHighContrast ? 'text-white' : 'text-gray-700'}`}
            style={{ fontSize: `${1.1 * textSizeMultiplier}rem` }}
          >
            We are committed to making our digital services accessible to all users, regardless of ability or technology. This website is designed to meet WCAG 2.1 AA standards, ensuring a seamless experience for people with visual, hearing, cognitive, and motor impairments.
          </p>

          <p 
            className={`font-medium leading-relaxed max-w-3xl ${isHighContrast ? 'text-white' : 'text-gray-700'}`}
            style={{ fontSize: `${1.1 * textSizeMultiplier}rem` }}
          >
            Try adjusting the <strong>Text Size</strong> or toggling <strong>High Contrast Mode</strong> in the top bar to see how this interface adapts instantly to suit your visual preferences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button 
              className={`px-8 py-4 font-black rounded-lg border-4 transition-transform hover:-translate-y-1 active:translate-y-0
                ${isHighContrast ? 'bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500' : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'}`}
              style={{ fontSize: `${1.2 * textSizeMultiplier}rem` }}
            >
              Read Guidelines
            </button>
            <button 
              className={`px-8 py-4 font-black rounded-lg border-4 transition-transform hover:-translate-y-1 active:translate-y-0
                ${isHighContrast ? 'bg-black text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black' : 'bg-white text-blue-700 border-blue-600 hover:bg-blue-50'}`}
              style={{ fontSize: `${1.2 * textSizeMultiplier}rem` }}
            >
              Report an Issue
            </button>
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
        href="#demo-52"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-blue-100 text-blue-700 text-xs rounded-full font-bold hover:bg-blue-200 transition-all flex items-center gap-2 border border-blue-300 z-10 shadow-sm uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">Test Accessibility Demo</span>
        <span className="sm:hidden">Live Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC CONTAINER: Showing Only Navbar */}
      <div className="w-full max-w-[1200px] shadow-xl border border-gray-300 rounded-2xl overflow-hidden relative z-20 flex flex-col">
        <A11yTopBar />
        <MainHeader />
        <MobileDropdownMenu />
      </div>

    </div>
  );
}