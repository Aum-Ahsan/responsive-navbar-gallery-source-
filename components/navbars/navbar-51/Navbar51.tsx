import React, { useState } from "react";

export default function Navbar51() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Menu Links
  const navLinks = ['Learn', 'Leaderboard', 'Quests', 'Shop'];

  // ================= 1. GAMIFICATION HEADER =================
  const GamifiedHeader = () => (
    <header className="w-full bg-white flex items-center justify-between px-4 lg:px-8 h-16 lg:h-20 relative z-50">
      
      {/* 1. BRAND LOGO */}
      <div className="flex items-center gap-2 cursor-pointer shrink-0">
        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-[0_4px_0_#ca8a04] transform transition-transform active:translate-y-1 active:shadow-none">
          <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <span className="text-xl lg:text-2xl font-black text-gray-800 tracking-tight hidden md:block">
          RewardMe
        </span>
      </div>

      {/* 2. CENTER DESKTOP LINKS */}
      <nav className="hidden lg:flex items-center gap-2">
        {navLinks.map((link, idx) => (
          <a 
            key={idx} 
            href="#" 
            className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wide text-sm transition-all
              ${idx === 0 
                ? 'bg-blue-50 text-blue-500 border-2 border-blue-200' 
                : 'text-gray-500 hover:bg-gray-100 border-2 border-transparent hover:border-gray-200'}`}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* 3. RIGHT STATS (GAMIFICATION INFO) */}
      <div className="flex items-center gap-2 lg:gap-4">
        
        {/* Streak (Fire) */}
        <div className="flex items-center gap-1.5 hover:bg-gray-100 px-2 lg:px-3 py-1.5 rounded-lg cursor-pointer transition-colors group">
          <svg className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.5 11.2c-.3 0-.5-.2-.5-.5 0-2.3-1.4-4.5-3.6-5.4-.3-.1-.5-.4-.4-.7.1-.3.4-.4.7-.3 2.7 1.1 4.3 3.6 4.3 6.4 0 .3-.2.5-.5.5zm-5 10.8c-3.6 0-6.5-2.9-6.5-6.5 0-2.8 1.8-5.3 4.5-6.1.3-.1.6.1.7.4.1.3-.1.6-.4.7-2.1.7-3.6 2.7-3.6 5 0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-2.3-1.5-4.3-3.6-5-.3-.1-.5-.4-.4-.7.1-.3.4-.5.7-.4 2.7.9 4.5 3.4 4.5 6.1 0 3.6-2.9 6.5-6.5 6.5z"/>
            <path d="M12.5 22c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5z"/>
          </svg>
          <span className="text-sm lg:text-base font-bold text-orange-500">14</span>
        </div>

        {/* Gems / Coins */}
        <div className="flex items-center gap-1.5 hover:bg-gray-100 px-2 lg:px-3 py-1.5 rounded-lg cursor-pointer transition-colors group">
          <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 9l3 13h14l3-13L12 2zm0 3.5l6.5 4.5h-13L12 5.5zM6 11h12l-2.5 9h-7L6 11z" />
          </svg>
          <span className="text-sm lg:text-base font-bold text-blue-500">2.4k</span>
        </div>

        {/* User Level Avatar (Progress Ring) */}
        <div className="relative cursor-pointer ml-1 lg:ml-2 group">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full p-[3px]" style={{ background: 'conic-gradient(#eab308 75%, #e5e7eb 0)' }}>
            <div className="w-full h-full bg-white rounded-full p-[2px]">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gamer" alt="User" className="w-full h-full rounded-full bg-gray-100" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-yellow-400 border-2 border-white text-white text-[9px] lg:text-[10px] font-black px-1.5 rounded-full shadow-sm group-hover:scale-110 transition-transform">
            12
          </div>
        </div>

        {/* MOBILE HAMBURGER MENU */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden ml-2 p-2 text-gray-400 hover:text-gray-800 bg-gray-50 rounded-xl"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

      </div>
    </header>
  );

  // ================= 2. MOBILE DROPDOWN MENU =================
  // Instead of a full-screen drawer, it drops down smoothly just below the navbar
  const MobileDropdownMenu = () => (
    <div 
      className={`lg:hidden w-full bg-white border-t-2 border-gray-100 flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'max-h-[400px] py-6 px-6 opacity-100' : 'max-h-0 py-0 px-6 opacity-0'}
      `}
    >
      {navLinks.map((link, idx) => (
        <a 
          key={idx} 
          href="#" 
          className={`px-4 py-3 rounded-xl font-bold uppercase tracking-wide text-sm transition-all border-2 text-center
            ${idx === 0 ? 'bg-blue-50 text-blue-500 border-blue-200' : 'text-gray-500 hover:bg-gray-100 border-transparent hover:border-gray-200'}`}
        >
          {link}
        </a>
      ))}
      <hr className="border-gray-100 my-2 border-2" />
      <div className="flex items-center justify-center gap-3 p-3 bg-gray-50 rounded-xl border-2 border-gray-200">
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-black border-2 border-white shadow-sm">12</div>
        <div className="text-left">
          <p className="text-gray-800 font-bold text-sm">Your Profile</p>
          <p className="text-gray-400 text-xs font-semibold">1,450 XP to next level</p>
        </div>
      </div>
    </div>
  );

  // ================= MAIN RENDER =================
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center bg-gray-50 relative">
      
      {/* 
        STATIC CONTAINER: 
        No fixed height! The box will naturally wrap the Navbar. 
        When Mobile Menu opens, the box will dynamically grow to fit it.
      */}
      <div className="w-full max-w-[1200px] bg-white shadow-md border border-gray-200 rounded-2xl overflow-hidden relative z-20 flex flex-col">
        <GamifiedHeader />
        <MobileDropdownMenu />
      </div>

    </div>
  );
}