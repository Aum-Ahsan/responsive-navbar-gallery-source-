import React, { useState, useEffect } from "react";

export default function Navbar48() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  
  // States for Currency & Language Selection
  const [currency, setCurrency] = useState<string>("USD ($)");
  const [language, setLanguage] = useState<string>("EN");

  // URL-ல் #demo-48 என்று இருக்கிறதா என சரிபார்க்கும் (New Tab Logic)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-48") {
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

  // Panel திறந்திருக்கும் போது பின்னணியை ஸ்க்ரோல் செய்யாமல் தடுக்க
  useEffect(() => {
    if (isMobileMenuOpen && isNewTabDemo) {
      document.body.style.overflow = "hidden";
    }
  }, [isMobileMenuOpen, isNewTabDemo]);

  const navLinks = ['Destinations', 'Tours', 'Flights', 'Hotels', 'Deals'];

  // ================= 1. TOP BAR (LANGUAGE & CURRENCY) =================
  const TopBar = () => (
    <div className="w-full bg-slate-900 text-slate-300 text-[11px] font-semibold py-2 px-4 lg:px-12 flex items-center justify-between z-50 relative">
      <div className="hidden md:flex items-center gap-2">
        <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">Promo</span>
        <span>Get 20% off on your first global tour package!</span>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-end">
        {/* Currency Dropdown */}
        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
          <span>{currency}</span>
          <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          
          <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
            {['USD ($)', 'EUR (€)', 'INR (₹)', 'GBP (£)'].map((curr) => (
              <div 
                key={curr} 
                onClick={() => setCurrency(curr)}
                className={`px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${currency === curr ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-slate-700'}`}
              >
                {curr}
              </div>
            ))}
          </div>
        </div>

        {/* Language Dropdown */}
        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
          <span>{language}</span>
          <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          
          <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
            {[
              { code: 'EN', name: 'English' },
              { code: 'TA', name: 'தமிழ்' },
              { code: 'FR', name: 'Français' },
              { code: 'ES', name: 'Español' }
            ].map((lang) => (
              <div 
                key={lang.code} 
                onClick={() => setLanguage(lang.code)}
                className={`px-4 py-2 text-sm hover:bg-blue-50 transition-colors flex justify-between items-center ${language === lang.code ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-slate-700'}`}
              >
                <span>{lang.name}</span>
                <span className="text-[10px] text-gray-400">{lang.code}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Help Link */}
        <a href="#" className="hidden sm:block hover:text-white transition-colors">Support</a>
      </div>
    </div>
  );

  // ================= 2. MAIN HEADER =================
  const MainHeader = () => (
    <header className="w-full h-16 lg:h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-12 z-40 relative shadow-sm">
      
      {/* MOBILE HAMBURGER MENU */}
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden p-2 -ml-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>

      {/* BRAND LOGO */}
      <div className="flex items-center gap-2 cursor-pointer absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xl lg:text-2xl font-black tracking-tight text-slate-900 hidden sm:block">GlobeTrotter</span>
      </div>

      {/* DESKTOP LINKS */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link, idx) => (
          <a key={idx} href="#" className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-blue-600 ${idx === 4 ? 'text-red-500' : 'text-slate-700'}`}>
            {link}
          </a>
        ))}
      </nav>

      {/* RIGHT ACTION ICONS */}
      <div className="flex items-center gap-3 lg:gap-4">
        <button className="text-slate-600 hover:text-blue-600 transition-colors p-2">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="hidden sm:flex text-slate-600 hover:text-blue-600 transition-colors p-2 items-center gap-2">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <span className="text-sm font-bold hidden xl:block">Sign In</span>
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md hidden md:block ml-2">
          Book Now
        </button>
      </div>
    </header>
  );

  // ================= 3. MOBILE MENU DRAWER =================
  const MobileMenu = () => (
    <>
      <div onClick={() => setIsMobileMenuOpen(false)} className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 z-[100] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
      <div className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl z-[110] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-slate-50">
          <span className="text-lg font-black text-slate-900 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            GlobeTrotter
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-black rounded-full bg-white shadow-sm border border-gray-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
          {navLinks.map((link, idx) => (
            <a key={idx} href="#" className={`text-lg font-bold uppercase tracking-widest ${idx === 4 ? 'text-red-500' : 'text-slate-800'}`}>
              {link}
            </a>
          ))}
          
          <hr className="border-gray-100 my-4" />
          
          {/* Mobile Currency & Lang Selectors */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Preferences</p>
            <div className="flex justify-between items-center text-slate-700 font-bold">
              <span>Currency</span>
              <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">{currency}</span>
            </div>
            <div className="flex justify-between items-center text-slate-700 font-bold">
              <span>Language</span>
              <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">{language}</span>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <button className="w-full bg-blue-600 text-white font-black uppercase tracking-widest py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
            Sign In / Register
          </button>
        </div>

      </div>
    </>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-white font-sans overflow-x-hidden flex flex-col h-screen w-screen">
        <TopBar />
        <MainHeader />
        <MobileMenu />

        {/* Travel Hero Section */}
        <div className="flex-1 w-full bg-slate-100 flex flex-col relative overflow-hidden">
           {/* Background Image Placeholder */}
           <div className="absolute inset-0 bg-slate-900">
             <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)" }}></div>
           </div>
           
           <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center pt-20 pb-32">
             <span className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-xs md:text-sm border border-blue-400/30 bg-blue-900/30 px-4 py-1.5 rounded-full backdrop-blur-sm">Explore The Unknown</span>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 max-w-4xl leading-tight">Find Your Next <br/>Adventure</h1>
             <p className="text-slate-300 text-sm md:text-lg mb-10 max-w-2xl font-medium">Book flights, hotels, and tours around the world with our global travel partners. Pay in {currency} seamlessly.</p>
             
             {/* Fake Search Bar */}
             <div className="w-full max-w-3xl bg-white p-2 rounded-full md:rounded-full flex flex-col md:flex-row gap-2 shadow-2xl">
               <div className="flex-1 flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-gray-200">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-gray-500 font-semibold text-sm">Where are you going?</span>
               </div>
               <div className="flex-1 flex items-center px-4 py-3 md:py-0">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>
                  <span className="text-gray-500 font-semibold text-sm">Check in - Check out</span>
               </div>
               <button className="bg-blue-600 text-white px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors text-sm w-full md:w-auto">
                 Search
               </button>
             </div>
           </div>
        </div>
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (IN GALLERY) =================
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center bg-slate-50/50">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-48"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-blue-100 text-blue-700 text-xs rounded-full font-bold hover:bg-blue-200 transition-all flex items-center gap-2 border border-blue-300 z-10 shadow-sm uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">Live Travel Demo</span>
        <span className="sm:hidden">Live Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC CONTAINER: Showing Only Navbar + Topbar */}
      <div className="w-full max-w-[1200px] bg-white shadow-lg border border-slate-200 rounded-2xl overflow-hidden mt-8 lg:mt-0 relative z-20 flex flex-col">
        <TopBar />
        <MainHeader />
        
        {/* Drawers are rendered here so they work on mobile inside the gallery */}
        <MobileMenu />
      </div>

    </div>
  );
}