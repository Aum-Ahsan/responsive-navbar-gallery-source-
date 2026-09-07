import React, { useState, useEffect } from "react";

export default function Navbar49() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(35);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // URL-ல் #demo-49 என்று இருக்கிறதா என சரிபார்க்கும் (New Tab Logic)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-49") {
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

  // Simulate Audio Progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const navLinks = ['Discover', 'Podcasts', 'Library', 'Premium'];

  // ================= 1. REUSABLE AUDIO PLAYER NAVBAR =================
  const AudioHeader = () => (
    <header className="w-full bg-black border-b border-zinc-900 flex flex-col z-50 relative">
      
      <div className="h-16 lg:h-20 flex items-center justify-between px-4 lg:px-8">
        
        {/* 1. BRAND LOGO (Left Side) */}
        <div className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-black">
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <span className="text-xl font-black tracking-tight text-white hidden sm:block">SoundWave</span>
        </div>

        {/* 2. CENTER PLAYER CONTROLS (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3 w-48 shrink-0">
            <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=100&auto=format&fit=crop" alt="Album Art" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white leading-tight hover:underline cursor-pointer truncate">Midnight City</span>
              <span className="text-[10px] font-semibold text-zinc-400 hover:underline cursor-pointer truncate">M83 • Hurry Up, We're Dreaming</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-zinc-400 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 20L9 12l10-8v16zM5 19h2V5H5v14z" /></svg></button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg> : <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 4l10 8-10 8V4zm14 15h-2V5h2v14z" /></svg></button>
          </div>
        </div>

        {/* 3. RIGHT ACTIONS & MOBILE MENU */}
        <div className="flex items-center gap-4 lg:gap-6">
          <nav className="hidden xl:flex items-center gap-6 border-r border-zinc-800 pr-6">
            {navLinks.map((link, idx) => (
              <a key={idx} href="#" className={`text-sm font-bold transition-colors hover:text-white ${idx === 0 ? 'text-white' : 'text-zinc-400'}`}>
                {link}
              </a>
            ))}
          </nav>
          
          <button className="hidden sm:block text-zinc-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          
          <div className="hidden sm:block w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-700 overflow-hidden cursor-pointer hover:border-green-500 transition-colors">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=MusicFan" alt="User" className="w-full h-full object-cover" />
          </div>

          {/* Hamburger Menu (Moved to Right Side for Mobile) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

      </div>

      {/* PROGRESS BAR (Bottom of Navbar) */}
      <div className="w-full h-1 bg-zinc-900 cursor-pointer group relative">
        <div className="absolute inset-0 bg-zinc-800"></div>
        <div 
          className={`absolute top-0 left-0 h-full ${isPlaying ? 'bg-green-500' : 'bg-white'} group-hover:bg-green-400 transition-colors duration-200`}
          style={{ width: `${progress}%` }}
        ></div>
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `calc(${progress}% - 6px)` }}
        ></div>
      </div>
      
    </header>
  );

  // ================= 2. MOBILE MENU DRAWER (SLIDES FROM RIGHT NOW) =================
  const MobileMenu = () => (
    <>
      <div onClick={() => setIsMobileMenuOpen(false)} className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-[100] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
      {/* Changed right-0 and translate-x-full to slide from RIGHT */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-zinc-950 shadow-2xl z-[110] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="h-16 border-b border-zinc-900 flex items-center justify-between px-6">
          <span className="text-lg font-black text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500 text-black flex items-center justify-center"><svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div>
            Menu
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-zinc-500 hover:text-white rounded-full bg-zinc-900">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=MusicFan" className="w-full h-full object-cover" /></div>
             <div>
               <p className="text-white font-bold text-sm">MusicFan</p>
               <p className="text-zinc-500 text-xs">View Profile</p>
             </div>
          </div>
          <hr className="border-zinc-900 mb-2" />
          
          {navLinks.map((link, idx) => (
            <a key={idx} href="#" className={`text-xl font-black tracking-tight ${idx === 0 ? 'text-white' : 'text-zinc-500'}`}>
              {link}
            </a>
          ))}
          <hr className="border-zinc-900 my-2" />
          <a href="#" className="text-zinc-300 font-bold flex items-center gap-3"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> Liked Songs</a>
        </div>
      </div>
    </>
  );

  // ================= 3. MOBILE BOTTOM PLAYER (For Live Demo) =================
  const MobileBottomPlayer = () => (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-800 p-2 z-[90] flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-zinc-800 rounded overflow-hidden">
          <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=100&auto=format&fit=crop" alt="Album" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col max-w-[150px]">
          <span className="text-sm font-bold text-white truncate">Midnight City</span>
          <span className="text-[10px] text-zinc-400 truncate">M83</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mr-2">
        <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-green-400 transition-colors">
          {isPlaying ? <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg> : <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
        </button>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 bg-green-500" style={{ width: `${progress}%` }}></div>
    </div>
  );


  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-zinc-950 font-sans overflow-hidden flex flex-col h-screen w-screen">
        <AudioHeader />
        <MobileMenu />
        
        <div className="flex-1 w-full flex overflow-hidden">
           <div className="hidden lg:flex w-64 bg-black flex-col p-6 gap-6 border-r border-zinc-900 shrink-0">
             <div className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-2">Your Library</div>
             {['Liked Songs', 'Recently Played', 'Local Files', 'Chill Vibes 2024'].map((p, i) => (
               <span key={i} className="text-zinc-400 hover:text-white font-medium text-sm cursor-pointer truncate">{p}</span>
             ))}
           </div>

           <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-800 to-zinc-950 p-6 lg:p-10 relative pb-24">
             <h1 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-8">Good evening</h1>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
               {['Daily Mix 1', 'Discover Weekly', 'Synthwave Hits'].map((mix, i) => (
                 <div key={i} className="bg-zinc-800/50 hover:bg-zinc-700/80 transition-colors rounded-md h-16 flex items-center overflow-hidden cursor-pointer group">
                   <div className="w-16 h-16 bg-zinc-700 shrink-0"><img src={`https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=100&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover" /></div>
                   <span className="text-white font-bold text-sm ml-4 truncate">{mix}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        <MobileBottomPlayer />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (IN GALLERY) =================
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center bg-zinc-950">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-49"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-green-500/20 text-green-400 text-xs rounded-full font-bold hover:bg-green-500/30 transition-all flex items-center gap-2 border border-green-500/50 z-10 shadow-[0_0_10px_rgba(34,197,94,0.2)] uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
        <span className="hidden sm:block">Live Web Player</span>
        <span className="sm:hidden">Live Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC CONTAINER: Showing ONLY Navbar (No extra boxes) */}
      <div className="w-full max-w-[1200px] bg-black shadow-2xl border border-zinc-800 rounded-xl overflow-hidden mt-8 lg:mt-0 relative z-20">
        <AudioHeader />
        
        {/* Drawers are rendered here so they work on mobile inside the gallery */}
        <MobileMenu />
      </div>

    </div>
  );
}