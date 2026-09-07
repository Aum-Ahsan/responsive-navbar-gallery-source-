import React, { useState, useEffect } from "react";

export default function Navbar46() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);

  // URL-ல் #demo-46 என்று இருக்கிறதா என சரிபார்க்கும் (New Tab Logic)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === "#demo-46") {
        setIsNewTabDemo(true);
        document.body.style.overflow = "hidden"; 
      }
    }
  }, []);

  // Sidebar Menu Items
  const menuItems = [
    { id: "dashboard", label: "Dashboard", active: true, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> },
    { id: "analytics", label: "Analytics", active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
    { id: "users", label: "Users & Roles", active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
    { id: "projects", label: "Projects", active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> },
  ];

  // ================= 1. NEW TAB (FULL DASHBOARD VIEW - FULLY RESPONSIVE) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-slate-50 flex font-sans h-screen w-screen overflow-hidden">
        
        {/* MOBILE BACKDROP OVERLAY */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-[90] md:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* SIDEBAR (Responsive Mobile & Desktop) */}
        <div 
          className={`
            fixed md:relative top-0 left-0 h-full bg-slate-900 text-slate-300 transition-all duration-300 ease-in-out flex flex-col z-[100] shadow-2xl shrink-0
            ${isMobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'} 
            ${isExpanded ? 'md:w-64' : 'md:w-20'}
          `}
        >
          {/* Logo Area */}
          <div className="h-16 md:h-20 flex items-center px-4 border-b border-slate-800 shrink-0 justify-between md:justify-start">
            <div className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${isExpanded || isMobileMenuOpen ? 'w-full opacity-100' : 'md:w-0 md:opacity-0'}`}>
              <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white font-black flex items-center justify-center shrink-0">A</div>
              <span className="text-lg font-black text-white tracking-wide whitespace-nowrap">AdminPro</span>
            </div>
            
            {/* Desktop Collapsed Logo */}
            <div className={`hidden md:flex absolute left-6 w-8 h-8 rounded-lg bg-indigo-500 text-white font-black items-center justify-center transition-all duration-300 ${isExpanded ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'}`}>A</div>
            
            {/* Mobile Close Button inside Sidebar */}
            <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Desktop Toggle Expand/Collapse Button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="hidden md:flex absolute -right-3 top-24 w-6 h-6 bg-indigo-600 text-white rounded-full items-center justify-center shadow-md border-2 border-slate-900 hover:bg-indigo-500 transition-colors z-[60]"
          >
            <svg className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Nav Links */}
          <div className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto no-scrollbar">
            {menuItems.map((item) => (
              <div key={item.id} title={(!isExpanded && !isMobileMenuOpen) ? item.label : ""} className={`flex items-center px-3 py-3 rounded-xl cursor-pointer transition-all duration-200 ${item.active ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}>
                <div className="shrink-0 flex items-center justify-center w-8">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={item.active ? 2.5 : 2}>{item.icon}</svg>
                </div>
                <span className={`font-semibold text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded || isMobileMenuOpen ? 'w-40 opacity-100 ml-2' : 'md:w-0 md:opacity-0 md:ml-0'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DASHBOARD MAIN CONTENT (Right Side) */}
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 min-w-0">
          <div className="h-16 md:h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 shrink-0 z-40">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <h2 className="text-lg md:text-xl font-black text-slate-800 tracking-tight truncate">Dashboard</h2>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <button className="bg-indigo-600 text-white px-3 md:px-5 py-2 rounded-lg text-xs md:text-sm font-bold shadow-sm hover:bg-indigo-700 transition-colors whitespace-nowrap">
                Export
              </button>
            </div>
          </div>

          <div className="p-4 md:p-8 overflow-y-auto h-full w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {['Total Revenue', 'Active Users', 'New Signups'].map((title, i) => (
                <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-xs md:text-sm font-bold text-slate-500 mb-2">{title}</p>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-800">{i === 0 ? '$45,231' : (1200 - i*200)}</h3>
                </div>
              ))}
            </div>

            <div className="w-full h-[300px] md:h-[400px] bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center flex-col relative overflow-hidden">
               <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <h3 className="font-bold text-slate-800 text-base md:text-lg">Performance Metrics</h3>
               </div>
               <svg className="w-12 h-12 md:w-16 md:h-16 text-slate-100 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ================= 2. STATIC PREVIEW (GALLERY VIEW) =================
  return (
    // REMOVED 'overflow-hidden' from this wrapper so the absolute button stays visible!
    <div className="relative w-full py-12 mt-4 flex justify-center bg-slate-50">
      
      {/* OPEN IN NEW TAB BUTTON - Now fully visible */}
      <a
        href="#demo-46"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-[30px] right-[50px] px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-bold hover:bg-indigo-200 transition-all flex items-center gap-2 border border-indigo-300 z-[999] shadow-sm"
      >
        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></span>
        Live Demo (New Tab)
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      </a>

      {/* STATIC CONTAINER */}
      <div className="w-full max-w-[1200px] h-[550px] bg-white rounded-2xl shadow-sm border border-slate-200 flex overflow-hidden">
        
        {/* Simple Static Sidebar for Preview */}
        <div className="h-full bg-slate-900 text-slate-300 w-20 md:w-64 flex flex-col shrink-0 z-50">
          <div className="h-20 flex items-center px-4 border-b border-slate-800 justify-center md:justify-start">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white font-black flex items-center justify-center shrink-0">A</div>
            <span className="hidden md:block ml-3 text-lg font-black text-white">AdminPro</span>
          </div>
          <div className="flex-1 py-6 flex flex-col gap-2 px-3">
            {menuItems.map((item) => (
              <div key={item.id} className={`flex items-center px-3 py-3 rounded-xl ${item.active ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>
                <div className="flex items-center justify-center w-8 shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{item.icon}</svg></div>
                <span className="hidden md:block font-semibold text-sm ml-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-50/50 p-6 text-center">
          <svg className="w-16 h-16 text-slate-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
          <p className="text-slate-600 font-bold mb-2">Admin Dashboard Layout</p>
          <p className="text-slate-400 text-sm max-w-sm">Responsive Sidebar Navigation. On Mobile, it turns into an Off-Canvas menu.</p>
          <p className="text-indigo-500 text-xs mt-4 font-bold uppercase tracking-wider">Click "Live Demo" to test responsiveness.</p>
        </div>
      </div>
    </div>
  );
}