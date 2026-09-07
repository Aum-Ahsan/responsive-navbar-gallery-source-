// import { NavbarShell, Pill } from "../shared/NavbarShell";

// export default function Navbar28() {
//   return (
//     <NavbarShell 
//       logo={
//         <div className="flex items-center gap-2">
//           <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
//           <span className="text-[22px] font-bold tracking-tight text-white">LUMINA AI</span>
//         </div>
//       } 
//       links={[
//         { label: "Features" },
//         { label: "Pricing" },
//         { label: "Resources", caret: true },
//         { label: "Community" }
//       ]} 
//       actions={
//         <>
//           <Pill className="border-0 font-medium text-gray-300 hover:text-white transition-colors">Log in</Pill>
//           <Pill filled className="border-0 bg-white font-bold text-black hover:bg-cyan-50 transition-all px-6">
//             Get Started
//           </Pill>
//         </>
//       } 
      
//       // Ippo inga 'text-white' add pannirukkom. Ithu thaan mobile icon-a white-aa maathum.
//       className="max-w-[1100px] mx-auto mt-6 rounded-full border border-white/20 bg-black/90 text-white backdrop-blur-xl shadow-2xl" 
      
//       desktopClassName="justify-between px-8 min-h-[68px]" 
//       linkClassName="text-[15px] font-medium text-gray-300 hover:text-white transition-opacity"
      
//       // Mobile-kaga chinna adjustment
//       mobileClassName="px-6 text-white" 
//     />
//   );
// }

// import { useState, useEffect } from "react";
// import { NavbarShell, Pill } from "../shared/NavbarShell";

// export default function Navbar28() {
//   const [showDemo, setShowDemo] = useState(false);

//   // Disable background scroll when demo is open
//   useEffect(() => {
//     if (showDemo) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [showDemo]);

//   const navLogo = (
//     <div className="flex items-center gap-2 shrink-0">
//       <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
//       <span className="text-[22px] font-bold tracking-tight text-white">LUMINA AI</span>
//     </div>
//   );

//   const navLinks = [
//     { label: "Features" },
//     { label: "Pricing" },
//     { label: "Resources", caret: true },
//     { label: "Community" }
//   ];

//   const navActions = (
//     <div className="flex items-center gap-2 shrink-0">
//       <Pill className="border-0 font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
//         Log in
//       </Pill>
//       <Pill filled className="border-0 bg-white font-bold text-black hover:bg-cyan-50 transition-all px-6 whitespace-nowrap">
//         Get Started
//       </Pill>
//     </div>
//   );

//   return (
//     <div className="relative w-full py-4 mt-4">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[50px] right-[150px] px-3 py-1.5 bg-cyan-500 text-black text-xs rounded-full font-bold hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-md z-10"
//       >
//         <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       <NavbarShell 
//         logo={navLogo} 
//         links={navLinks} 
//         actions={navActions} 
//         className="max-w-[1100px] mx-auto mt-6 rounded-full border border-white/20 bg-black/90 text-white backdrop-blur-xl shadow-2xl" 
//         desktopClassName="justify-between px-8 min-h-[68px]" 
//         linkClassName="text-[15px] font-medium text-gray-300 hover:text-white transition-opacity whitespace-nowrap"
//         mobileClassName="px-6 text-white" 
//       />

//       {/* 2. REAL FLOATING NAVBAR DEMO WITH SCROLL */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-gray-950 flex flex-col">
          
//           {/* Close Demo Button */}
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-4 right-6 z-[99999] bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-red-600"
//           >
//             Close Demo X
//           </button>

//           {/* SCROLLABLE AREA (Ithu thaan page madhiri act aagum) */}
//           <div className="w-full h-full overflow-y-auto relative no-scrollbar">
            
//             {/* FLOATING NAVBAR - Ithu eppavum top-la sticky-a midhakkum */}
//             <div className="sticky top-6 left-0 w-full flex justify-center z-50 px-4 transition-all duration-300">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full max-w-[1100px] rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
//                 desktopClassName="justify-between px-8 min-h-[68px]"
//                 linkClassName="text-[15px] font-medium text-gray-300 hover:text-white transition-opacity whitespace-nowrap"
//                 mobileClassName="px-6 text-white"
//               />
//             </div>

//             {/* DUMMY CONTENT (Itha scroll pannum pothu floating effect puriyum) */}
//             <div className="max-w-[1100px] mx-auto mt-20 pb-32 px-4 flex flex-col gap-10">
//               <div className="h-[400px] w-full rounded-3xl bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center border border-white/10 shadow-2xl">
//                 <h1 className="text-5xl font-bold text-white">Scroll Down 👇</h1>
//               </div>
              
//               <div className="h-[500px] w-full rounded-3xl bg-gradient-to-tr from-purple-900 to-indigo-900 flex items-center justify-center border border-white/10">
//                 <p className="text-xl text-white/70">Watch the navbar float over this color...</p>
//               </div>

//               <div className="h-[500px] w-full rounded-3xl bg-gradient-to-bl from-emerald-900 to-teal-900 flex items-center justify-center border border-white/10">
//                 <p className="text-xl text-white/70">Notice the glass blur effect!</p>
//               </div>

//               <div className="h-[400px] w-full rounded-3xl bg-gray-800 flex items-center justify-center border border-white/10">
//                 <h2 className="text-4xl font-bold text-white">End of Page</h2>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Pill } from "../shared/NavbarShell";

export default function Navbar28() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // URL-ல் #demo-28 என்று இருக்கிறதா என சரிபார்க்கும் (New Tab Logic)
  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined") {
        if (window.location.hash === "#demo-28") {
          setIsNewTabDemo(true);
          document.body.style.overflow = "hidden"; 
        } else {
          setIsNewTabDemo(false);
          document.body.style.overflow = "unset";
        }
      }
    };
    
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const navLinks = [
    { label: "Features", caret: false },
    { label: "Pricing", caret: false },
    { label: "Resources", caret: true },
    { label: "Community", caret: false }
  ];

  // ================= 1. REUSABLE FLOATING NAVBAR =================
  const FloatingHeader = () => (
    <div className="w-full max-w-[1100px] mx-auto rounded-[2rem] border border-white/10 bg-black/60 text-white backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col relative z-50 transition-all duration-300">
      
      {/* Top Main Row */}
      <div className="h-[68px] px-6 lg:px-8 flex items-center justify-between w-full">
        
        {/* BRAND LOGO */}
        <div className="flex items-center gap-3 shrink-0 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
          <span className="text-[20px] font-black tracking-tight text-white hidden sm:block">LUMINA AI</span>
        </div>

        {/* DESKTOP LINKS (Hidden on Mobile & iPad) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a key={idx} href="#" className="flex items-center gap-1 text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
              {link.label}
              {link.caret && (
                <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* RIGHT ACTIONS & HAMBURGER */}
        <div className="flex items-center gap-3 lg:gap-4 shrink-0">
          <button className="hidden sm:block px-4 py-2 font-medium text-gray-300 hover:text-white transition-colors">
            Log in
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-cyan-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Get Started
          </button>

          {/* MOBILE/IPAD HAMBURGER MENU */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors ml-1"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN (Slides down directly within the pill) */}
      <div 
        className={`lg:hidden w-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out border-white/10
          ${isMobileMenuOpen ? 'max-h-[300px] border-t opacity-100 pb-4' : 'max-h-0 border-transparent opacity-0 pb-0'}
        `}
      >
        <div className="flex flex-col px-6 pt-4 gap-4">
          {navLinks.map((link, idx) => (
            <a key={idx} href="#" className="flex items-center justify-between text-base font-bold text-gray-300 hover:text-white transition-colors">
              {link.label}
              {link.caret && <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
            </a>
          ))}
          <a href="#" className="sm:hidden text-base font-bold text-gray-300 hover:text-white transition-colors pt-2 border-t border-white/10 mt-2">
            Log in
          </a>
        </div>
      </div>

    </div>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO WITH SCROLLING) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-gray-950 w-screen h-screen overflow-y-auto no-scrollbar font-sans">
        
        {/* FLOATING NAVBAR - Ithu eppavum top-la sticky-a midhakkum */}
        <div className="sticky top-6 left-0 w-full flex justify-center z-50 px-4 transition-all duration-300">
          <FloatingHeader />
        </div>

        {/* DUMMY CONTENT */}
        <div className="max-w-[1100px] mx-auto mt-20 pb-32 px-4 flex flex-col gap-10">
          <div className="h-[400px] w-full rounded-3xl bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-white">Scroll Down 👇</h1>
          </div>
          
          <div className="h-[500px] w-full rounded-3xl bg-gradient-to-tr from-purple-900 to-indigo-900 flex items-center justify-center border border-white/10 shadow-xl">
            <p className="text-lg md:text-xl text-white/70 font-medium">Watch the navbar float over this color...</p>
          </div>

          <div className="h-[500px] w-full rounded-3xl bg-gradient-to-bl from-emerald-900 to-teal-900 flex items-center justify-center border border-white/10 shadow-xl">
            <p className="text-lg md:text-xl text-white/70 font-medium">Notice the glass blur effect!</p>
          </div>
        </div>
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (IN GALLERY) =================
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center bg-gray-900 rounded-2xl overflow-hidden mt-4">
      
      {/* Background decoration to make the Glassmorphism visible in the gallery */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% -20%, #0891b2 0%, transparent 60%)" }}></div>

      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-28"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:top-6 lg:right-6 px-4 py-1.5 bg-cyan-500 text-black text-xs rounded-full font-bold hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.4)] z-20 uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
        <span className="hidden sm:block">Live Demo (New Tab)</span>
        <span className="sm:hidden">Live Demo</span>
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* STATIC NAVBAR ONLY */}
      <div className="w-full relative z-10 px-4">
        <FloatingHeader />
      </div>

    </div>
  );
}