import React, { useState, useEffect } from "react";

export default function Navbar47() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // URL-ல் #demo-47 என்று இருக்கிறதா என சரிபார்க்கும்
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-47") {
        setIsNewTabDemo(true);
      } else {
        setIsNewTabDemo(false);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Panel திறந்திருக்கும் போது பின்னணியை ஸ்க்ரோல் செய்யாமல் தடுக்க
  useEffect(() => {
    if (isCartOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen, isMobileMenuOpen]);

  const navLinks = ['Women', 'Men', 'Kids', 'Collections', 'Sale'];

  // ================= 1. REUSABLE E-COMMERCE HEADER (FULLY RESPONSIVE) =================
  const TopHeader = () => (
    <header className="w-full h-16 lg:h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-12 z-40 relative">
      
      {/* 1. MOBILE / IPAD HAMBURGER MENU (Visible up to iPad pro - max-width 1024px) */}
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden p-2 -ml-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
      >
        {/* Menu Line Icon ☰ */}
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* 2. BRAND LOGO (Centered on Mobile/iPad, Left on Desktop) */}
      <div className="flex items-center gap-2 cursor-pointer absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-xl rounded-sm">S</div>
        <span className="text-xl lg:text-2xl font-black tracking-tighter text-black hidden sm:block">ShopRight</span>
      </div>

      {/* 3. DESKTOP CENTER LINKS (Hidden on iPhone & iPad, Visible only on Large Desktop) */}
      <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link, idx) => (
          <a key={idx} href="#" className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-orange-500 ${idx === 4 ? 'text-red-500' : 'text-gray-800'}`}>
            {link}
          </a>
        ))}
      </nav>

      {/* 4. RIGHT ACTION ICONS (Search, User, Cart) */}
      <div className="flex items-center gap-3 lg:gap-5">
        <button className="text-gray-600 hover:text-black transition-colors hidden sm:block">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="text-gray-600 hover:text-black transition-colors hidden lg:block">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </button>
        
        {/* CART BUTTON (Always visible on all screens) */}
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative text-gray-600 hover:text-black transition-colors flex items-center gap-2 bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">3</span>
        </button>
      </div>
    </header>
  );

  // ================= 2. MOBILE & IPAD MENU DRAWER (LEFT SLIDE) =================
  const MobileMenu = () => (
    <>
      {/* Backdrop */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)} 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[100] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      ></div>
      
      {/* Left Drawer Panel */}
      <div className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl z-[110] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Menu Header */}
        <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6">
          <span className="text-xl font-black text-black">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-black rounded-full bg-gray-50">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        {/* Menu Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
          {navLinks.map((link, idx) => (
            <a key={idx} href="#" className={`text-lg font-bold uppercase tracking-widest ${idx === 4 ? 'text-red-500' : 'text-gray-900'}`}>
              {link}
            </a>
          ))}
          <hr className="border-gray-100 my-2" />
          <a href="#" className="text-gray-600 font-bold flex items-center gap-3"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> My Account</a>
          <a href="#" className="text-gray-600 font-bold flex items-center gap-3"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> Wishlist</a>
        </div>

      </div>
    </>
  );

  // ================= 3. CART DRAWER (RIGHT SLIDE) =================
  const CartDrawer = () => (
    <>
      <div onClick={() => setIsCartOpen(false)} className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[100] ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl z-[110] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-16 lg:h-20 border-b border-gray-100 flex items-center justify-between px-6 shrink-0 bg-white">
          <h2 className="text-lg lg:text-xl font-black text-black">Your Cart (3)</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 lg:p-6 flex flex-col gap-6">
          {[
            { name: "Classic White Sneakers", price: "$89.00", color: "White", size: "42" },
            { name: "Vintage Denim Jacket", price: "$45.00", color: "Blue", size: "L" },
            { name: "Urban Bucket Hat", price: "$24.00", color: "Black", size: "One Size" }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 border-b border-gray-50 pb-6">
              <div className="w-16 h-20 lg:w-20 lg:h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                 <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight pr-4">{item.name}</h3>
                  <button className="text-gray-400 hover:text-red-500"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.color} | Size: {item.size}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-black text-black text-sm lg:text-base">{item.price}</span>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-full px-2 py-1">
                    <button className="text-gray-400 hover:text-black">-</button>
                    <span className="text-xs font-bold w-4 text-center">1</span>
                    <button className="text-gray-400 hover:text-black">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 p-5 lg:p-6 bg-gray-50 shrink-0">
          <div className="flex justify-between items-center mb-4 text-sm font-bold text-gray-600">
            <span>Subtotal</span>
            <span className="text-lg lg:text-xl font-black text-black">$158.00</span>
          </div>
          <button className="w-full bg-black text-white text-sm lg:text-base font-black uppercase tracking-widest py-4 hover:bg-orange-500 transition-colors shadow-lg">
            Checkout Now
          </button>
        </div>
      </div>
    </>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-white font-sans overflow-x-hidden flex flex-col h-screen w-screen">
        <TopHeader />
        <MobileMenu />
        <CartDrawer />

        {/* E-commerce Hero Section */}
        <div className="flex-1 w-full bg-gray-100 flex items-center justify-center flex-col relative overflow-hidden px-6">
           <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 via-gray-100 to-white"></div>
           <div className="relative z-10 text-center flex flex-col items-center">
             <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-xs md:text-sm bg-white px-4 py-1 rounded-full shadow-sm">New Collection 2024</span>
             <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-4 md:mb-6 max-w-3xl leading-none">Step Into The <br/>New Season</h1>
             <p className="text-gray-600 text-sm md:text-base mb-8 max-w-sm md:max-w-lg">Discover the latest trends in urban fashion. Quality materials and modern cuts for everyday wear.</p>
             <button onClick={() => setIsCartOpen(true)} className="bg-black text-white text-xs md:text-sm px-8 py-4 font-bold uppercase tracking-widest hover:bg-orange-500 transition-colors shadow-xl flex items-center gap-3">
               Open Cart Drawer
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </button>
           </div>
        </div>
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (IN GALLERY) =================
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center bg-gray-50/50">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-47"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-orange-100 text-orange-700 text-xs rounded-full font-bold hover:bg-orange-200 transition-all flex items-center gap-2 border border-orange-300 z-10 shadow-sm uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">Live E-Com Demo</span>
        <span className="sm:hidden">Live Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC CONTAINER: Only showing the Navbar Layout! */}
      <div className="w-full max-w-[1200px] bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden mt-8 lg:mt-0 relative z-20">
        
        <TopHeader />
        
        {/* Render Drawers so they work inside the gallery view too! */}
        <MobileMenu />
        <CartDrawer />
      </div>
    </div>
  );
}