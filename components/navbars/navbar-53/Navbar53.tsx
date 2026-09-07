import React, { useState, useEffect } from "react";

export default function Navbar53() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  
  // Smart Scroll States
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // URL-ல் #demo-53 என்று இருக்கிறதா என சரிபார்க்கும்
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-53") {
        setIsNewTabDemo(true);
        document.body.style.overflow = "hidden"; // Lock background scroll
      } else {
        setIsNewTabDemo(false);
        document.body.style.overflow = "unset";
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Demo Page Scroll Handler
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollY = e.currentTarget.scrollTop;
    
    // Scroll Down -> Hide Navbar (Only if scrolled past 80px)
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setIsVisible(false);
      setIsMobileMenuOpen(false); // Close menu if scrolling down
    } 
    // Scroll Up -> Show Navbar
    else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  };

  const navLinks = ['Stories', 'Creators', 'Community', 'Pricing'];

  // ================= 1. REUSABLE SMART HEADER =================
  const SmartHeader = () => (
    <header 
      // Dynamic Classes: In Demo it's fixed & transforms. In Gallery it's relative & static.
      className={`w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 flex flex-col 
        ${isNewTabDemo ? 'fixed top-0 left-0 transition-transform duration-300 ease-in-out' : 'relative'}
        ${isNewTabDemo && !isVisible ? '-translate-y-full shadow-none' : 'translate-y-0 shadow-sm'}
      `}
    >
      <div className="flex items-center justify-between px-4 lg:px-8 h-16 lg:h-20 relative z-20 bg-white/90">
        
        {/* 1. BRAND LOGO */}
        <div className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-xl rotate-3">
            <svg className="w-5 h-5 -rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tight">
            SmartScroll
          </span>
        </div>

        {/* 2. DESKTOP LINKS */}
        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="px-4 py-2 font-semibold text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* 3. RIGHT ACTIONS (Search, Subscribe, Hamburger) */}
        <div className="flex items-center gap-2 lg:gap-4">
          <button className="hidden sm:block p-2 text-gray-400 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <button className="hidden sm:block bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-600 transition-colors">
            Subscribe
          </button>

          {/* MOBILE HAMBURGER */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg ml-1 transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* 4. MOBILE DROPDOWN (Slides down directly below header) */}
      <div 
        className={`lg:hidden w-full bg-white border-t border-gray-100 flex flex-col transition-all duration-300 ease-in-out relative z-10
          ${isMobileMenuOpen ? 'max-h-[300px] opacity-100 border-b shadow-lg' : 'max-h-0 opacity-0 border-none'}
        `}
      >
        <div className="py-2 px-4 flex flex-col">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="px-4 py-3 font-bold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="p-4 mt-2 border-t border-gray-100">
            <button className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  // ================= VIEW 1: NEW TAB (FULL SCROLL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div 
        // We attach onScroll to this full-screen wrapper
        className="fixed inset-0 z-[999999] bg-gray-50 font-sans h-screen w-screen overflow-y-auto scroll-smooth"
        onScroll={handleScroll}
      >
        {/* Render the Auto-Hiding Header */}
        <SmartHeader />

        {/* Dummy Blog Content to Scroll Through */}
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-32">
          
          <div className="mb-12 text-center">
            <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-4 block">Tech & Design</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              The Magic of Contextual Navigation
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              Scroll down this page to see the header disappear, giving you a distraction-free reading experience. Scroll up, and it instantly comes back.
            </p>
          </div>

          <div className="w-full aspect-video md:aspect-[21/9] bg-gray-200 rounded-3xl mb-12 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-gray-400 font-black uppercase tracking-widest text-xl">Article Hero Image</span>
            </div>
          </div>

          <div className="prose prose-lg text-gray-700 max-w-none space-y-8 font-serif leading-relaxed">
            <p>
              In modern web design, screen real estate is precious, especially on mobile devices. When users are reading a long article or browsing a feed, they want to focus entirely on the content. A sticky navbar, while useful, takes up a significant portion of the screen.
            </p>
            <h2 className="text-2xl font-black text-gray-900 font-sans mt-12 mb-4">Why Auto-Hide?</h2>
            <p>
              The concept is simple: <strong>User Intent</strong>. If a user is scrolling down, their intent is to consume more content. Hiding the navigation bar at this moment removes distractions. 
            </p>
            <p>
              Conversely, if a user starts scrolling up—even just a little bit—it usually means they are looking for a menu, a search bar, or trying to navigate elsewhere. Bringing the navbar back instantly caters to this exact need without forcing them to scroll all the way to the top of the page.
            </p>

            {/* Extra dummy blocks to make the page scrollable */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
              <div className="h-64 bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-100 flex flex-col justify-between">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">Increased Engagement</h3>
              </div>
              <div className="h-64 bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-100 flex flex-col justify-between">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">Mobile Optimized</h3>
              </div>
            </div>

            <p>
              Keep scrolling down to see the header hide again. This pattern has been popularized by Safari on iOS, Medium, and many other leading publishing platforms. It strikes the perfect balance between accessibility and content immersion.
            </p>
            <p className="pb-32">
              (End of the article. Now try scrolling up!)
            </p>
          </div>
        </main>
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (IN GALLERY) =================
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center bg-gray-50">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-53"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-bold hover:bg-indigo-200 transition-all flex items-center gap-2 border border-indigo-300 z-10 shadow-sm uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">Test Auto-Hide Scroll</span>
        <span className="sm:hidden">Scroll Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC CONTAINER: Showing Only the Navbar Design */}
      <div className="w-full max-w-[1200px] bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden relative z-20 flex flex-col">
        {/* Render the header in static (relative) mode */}
        <SmartHeader />
      </div>

    </div>
  );
}