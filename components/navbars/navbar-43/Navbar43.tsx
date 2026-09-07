// with demo button //

// import React, { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar43() {
//   const [showDemo, setShowDemo] = useState<boolean>(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   // 1. Logo (Neon Cyberpunk Style)
//   const navLogo = (
//     <div className="flex items-center gap-3 shrink-0 cursor-pointer group">
//       {/* Glitch / Slashed Icon */}
//       <div 
//         className="w-10 h-10 bg-cyan-400 flex items-center justify-center relative overflow-hidden shrink-0"
//         style={{ clipPath: "polygon(20% 0%, 100% 0, 100% 20%, 80% 100%, 0 100%, 0% 80%)" }}
//       >
//         <span className="font-black text-black text-xl tracking-tighter">CP</span>
//         <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
//       </div>
//       {/* Brand Name */}
//       <div className="flex flex-col">
//         <span className="text-2xl font-black text-white tracking-widest uppercase hidden sm:block" style={{ textShadow: "0 0 10px rgba(6, 182, 212, 0.5)" }}>
//           Cyber<span className="text-cyan-400">Play</span>
//         </span>
//       </div>
//     </div>
//   );

//   // 2. Leave links empty to avoid SSR Error (We move them to Actions)
//   const navLinks: any[] = [];

//   // 3. Actions (Contains Both Custom Links & Buttons)
//   const navActions = (
//     <div className="flex items-center justify-end md:justify-between w-full">
      
//       {/* THE CYBERPUNK LINKS - Center Aligned on Desktop */}
//       <div className="hidden md:flex items-center gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2">
//         {[
//           { label: "E-SPORTS", active: true },
//           { label: "GAMES", active: false },
//           { label: "HARDWARE", active: false },
//           { label: "COMMUNITY", active: false },
//         ].map((link, idx) => (
//           <a
//             key={idx}
//             href="#"
//             className={`relative py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 group
//               ${link.active ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
//           >
//             {link.label}
//             {/* Bottom glowing line for active/hover state */}
//             <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transition-all duration-300 
//               ${link.active ? "opacity-100 shadow-[0_0_8px_#22d3ee]" : "opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#22d3ee]"}`} 
//             ></span>
//           </a>
//         ))}
//       </div>

//       {/* RIGHT SIDE BUTTONS */}
//       <div className="flex items-center gap-4 lg:gap-6 ml-auto">
//         <div className="hidden lg:flex items-center gap-2 cursor-pointer text-gray-400 hover:text-pink-500 transition-colors">
//           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//           </svg>
//           <span className="text-sm font-bold tracking-wider uppercase">Login</span>
//         </div>

//         {/* Cyberpunk Custom Clipped Button */}
//         <button 
//           className="relative group bg-yellow-400 text-black px-4 sm:px-6 py-2.5 font-black uppercase tracking-widest text-xs sm:text-sm transition-all hover:bg-yellow-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.6)] overflow-hidden shrink-0"
//           style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
//         >
//           <span className="relative z-10 flex items-center gap-2">
//             Play Now
//             <svg className="hidden sm:block w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </span>
//           {/* Button Glitch Hover Effect */}
//           <div className="absolute inset-0 bg-black/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12 z-0"></div>
//         </button>
//       </div>

//     </div>
//   );

//   return (
//     // Removed overflow-hidden from this wrapper so the Live Demo button is visible
//     <div className="relative w-full py-8 mt-4 flex justify-center bg-gray-900 border-y border-gray-800">
      
//       {/* Background Grid Pattern for Static View */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
//       </div>

//       {/* LIVE DEMO BUTTON - Now fully visible */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[30px] right-[50px] px-3 py-1.5 bg-cyan-900/80 text-cyan-400 text-xs rounded-none font-bold hover:bg-cyan-800 transition-all flex items-center gap-2 border border-cyan-500 z-50 shadow-[0_0_10px_rgba(6,182,212,0.4)] uppercase tracking-wider"
//         style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
//       >
//         <span className="w-2 h-2 bg-pink-500 animate-pulse"></span>
//         Initialize Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       <div className="w-full max-w-[1400px] z-10 px-4">
//         <NavbarShell 
//           logo={navLogo} 
//           links={navLinks} 
//           actions={navActions} 
//           className="w-full bg-black/60 backdrop-blur-md border-b-2 border-cyan-500 shadow-[0_4px_20px_rgba(6,182,212,0.15)]" 
//           desktopClassName="justify-between px-6 lg:px-10 min-h-[80px] relative" 
//           linkClassName="hidden"
//           mobileClassName="px-4 text-white" 
//         />
//       </div>

//       {/* 2. LIVE DEMO POPUP VIEW */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col font-sans text-gray-200">
          
//           <div className="absolute inset-0 opacity-10 pointer-events-none" 
//                style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
//           </div>

//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-24 right-8 z-[99999] bg-pink-600 text-white px-5 py-2 text-sm font-bold shadow-[0_0_15px_rgba(219,39,119,0.5)] hover:bg-pink-500 transition-all uppercase tracking-widest"
//             style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
//           >
//             Abort [X]
//           </button>

//           <div className="w-full h-full overflow-y-auto relative no-scrollbar">
            
//             <div className="sticky top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-xl border-b-2 border-cyan-500 shadow-[0_4px_30px_rgba(6,182,212,0.2)]">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full max-w-[1400px] mx-auto bg-transparent"
//                 desktopClassName="justify-between px-6 lg:px-10 min-h-[80px] relative"
//                 linkClassName="hidden"
//                 mobileClassName="px-4"
//               />
//             </div>

//             <div className="max-w-[1400px] mx-auto mt-12 px-6 pb-20 relative z-10">
//               <div className="w-full min-h-[400px] bg-zinc-900 border border-gray-800 relative flex items-center p-10 md:p-16 mb-12"
//                    style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)" }}>
//                 <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/30 to-transparent pointer-events-none"></div>
                
//                 <div className="max-w-2xl relative z-10">
//                   <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-400 font-bold tracking-widest text-xs uppercase mb-4 border border-pink-500/50">
//                     Season 4 Live
//                   </span>
//                   <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
//                     Neon <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600" style={{ WebkitTextStroke: '1px cyan' }}>Syndicate</span>
//                   </h1>
//                   <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg">
//                     Join the ultimate cyber-tournament. Upgrade your neural gear, build your squad, and dominate the grid.
//                   </p>
//                   <button 
//                     className="bg-cyan-500 text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all"
//                     style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
//                   >
//                     Enter the Grid
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// without demo button //

import React from "react";
import { NavbarShell } from "../shared/NavbarShell";

export default function Navbar43() {
  // 1. Logo (Neon Cyberpunk Style)
  const navLogo = (
    <div className="flex items-center gap-3 shrink-0 cursor-pointer group">
      {/* Glitch / Slashed Icon */}
      <div 
        className="w-10 h-10 bg-cyan-400 flex items-center justify-center relative overflow-hidden shrink-0"
        style={{ clipPath: "polygon(20% 0%, 100% 0, 100% 20%, 80% 100%, 0 100%, 0% 80%)" }}
      >
        <span className="font-black text-black text-xl tracking-tighter">CP</span>
        <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
      </div>
      {/* Brand Name */}
      <div className="flex flex-col">
        <span className="text-2xl font-black text-white tracking-widest uppercase hidden sm:block" style={{ textShadow: "0 0 10px rgba(6, 182, 212, 0.5)" }}>
          Cyber<span className="text-cyan-400">Play</span>
        </span>
      </div>
    </div>
  );

  // 2. Leave links empty to avoid SSR Error (We move them to Actions)
  const navLinks: any[] = [];

  // 3. Actions (Contains Both Custom Links & Buttons)
  const navActions = (
    <div className="flex items-center justify-end md:justify-between w-full">
      
      {/* THE CYBERPUNK LINKS - Center Aligned on Desktop */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2">
        {[
          { label: "E-SPORTS", active: true },
          { label: "GAMES", active: false },
          { label: "HARDWARE", active: false },
          { label: "COMMUNITY", active: false },
        ].map((link, idx) => (
          <a
            key={idx}
            href="#"
            className={`relative py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 group
              ${link.active ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
          >
            {link.label}
            {/* Bottom glowing line for active/hover state */}
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transition-all duration-300 
              ${link.active ? "opacity-100 shadow-[0_0_8px_#22d3ee]" : "opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#22d3ee]"}`} 
            ></span>
          </a>
        ))}
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center gap-4 lg:gap-6 ml-auto">
        <div className="hidden lg:flex items-center gap-2 cursor-pointer text-gray-400 hover:text-pink-500 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <span className="text-sm font-bold tracking-wider uppercase">Login</span>
        </div>

        {/* Cyberpunk Custom Clipped Button */}
        <button 
          className="relative group bg-yellow-400 text-black px-4 sm:px-6 py-2.5 font-black uppercase tracking-widest text-xs sm:text-sm transition-all hover:bg-yellow-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.6)] overflow-hidden shrink-0"
          style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Play Now
            <svg className="hidden sm:block w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          {/* Button Glitch Hover Effect */}
          <div className="absolute inset-0 bg-black/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12 z-0"></div>
        </button>
      </div>

    </div>
  );

  return (
    // Removed overflow-hidden from this wrapper so the Live Demo button is visible
    <div className="relative w-full py-8 mt-4 flex justify-center bg-gray-900 border-y border-gray-800">
      
      {/* Background Grid Pattern for Static View */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* 1. NORMAL STATIC VIEW */}
      <div className="w-full max-w-[1400px] z-10 px-4">
        <NavbarShell 
          logo={navLogo} 
          links={navLinks} 
          actions={navActions} 
          className="w-full bg-black/60 backdrop-blur-md border-b-2 border-cyan-500 shadow-[0_4px_20px_rgba(6,182,212,0.15)]" 
          desktopClassName="justify-between px-6 lg:px-10 min-h-[80px] relative" 
          linkClassName="hidden"
          mobileClassName="px-4 text-white" 
        />
      </div>

    </div>
  );
}