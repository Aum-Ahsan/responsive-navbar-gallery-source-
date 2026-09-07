// with demo button //

// import { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar38() {
//   const [showDemo, setShowDemo] = useState(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   const navLogo = (
//     <div className="flex items-center gap-2 shrink-0">
//       {/* Brutalist Logo - Tilted box with thick border */}
//       <div className="w-8 h-8 bg-[#FF90E8] border-2 border-black flex items-center justify-center transform -rotate-6 shadow-[2px_2px_0px_0px_#000]">
//         <span className="text-black font-black text-xl leading-none">R</span>
//       </div>
//       <span className="text-2xl font-black tracking-tighter text-black uppercase">
//         RetroBlock
//       </span>
//     </div>
//   );

//   const navLinks = [
//     { label: "Start" },
//     { label: "About" },
//     { label: "Grid" },
//     { label: "Zine" }
//   ];

//   const navActions = (
//     <div className="flex items-center gap-4 shrink-0">
//       <button className="text-[15px] font-bold text-black uppercase hover:underline decoration-2 underline-offset-4 whitespace-nowrap">
//         Log in
//       </button>
      
//       {/* Brutalist Button - Hard shadow, moves on hover */}
//       <button className="px-6 py-2 bg-[#00E5FF] text-black font-black uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all whitespace-nowrap">
//         Sign Up
//       </button>
//     </div>
//   );

//   return (
//     <div className="relative w-full py-8 mt-4 flex justify-center">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[40px] right-[150px] px-3 py-1.5 bg-black text-white text-xs font-bold hover:bg-gray-800 transition-all flex items-center gap-2 border-2 border-black shadow-[2px_2px_0px_0px_#ccc] z-10 uppercase tracking-wider"
//       >
//         <span className="w-1.5 h-1.5 bg-yellow-400 border border-black animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       <NavbarShell 
//         logo={navLogo} 
//         links={navLinks} 
//         actions={navActions} 
//         // Neo-Brutalism Navbar Style: Yellow background, thick border, hard shadow
//         className="w-full max-w-[1100px] mx-auto bg-[#FFD700] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none" 
//         desktopClassName="justify-between px-6 py-2 min-h-[70px]" 
//         linkClassName="text-[15px] font-bold text-black uppercase border-b-2 border-transparent hover:border-black transition-all whitespace-nowrap"
//         mobileClassName="px-6 text-black font-bold uppercase" 
//       />

//       {/* 2. LIVE DEMO POPUP VIEW (Full Brutalist Page) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-[#F4F0E6] flex flex-col">
          
//           {/* Subtle dot grid background pattern */}
//           <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-6 right-8 z-[99999] bg-red-500 text-black border-2 border-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all uppercase"
//           >
//             Close X
//           </button>

//           <div className="w-full h-full relative pt-12 overflow-y-auto no-scrollbar">
            
//             {/* The Neo-Brutalist Navbar Sticky at top */}
//             <div className="sticky top-6 w-full flex justify-center z-50 px-4">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full max-w-[1100px] bg-[#FFD700] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none"
//                 desktopClassName="justify-between px-6 py-2 min-h-[70px]"
//                 linkClassName="text-[15px] font-bold text-black uppercase border-b-2 border-transparent hover:border-black transition-all whitespace-nowrap"
//                 mobileClassName="px-6 text-black font-bold uppercase"
//               />
//             </div>

//             {/* Dummy Neo-Brutalist Content */}
//             <div className="max-w-[1100px] mx-auto mt-16 px-4 pb-32">
//               <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_#000] p-10 mb-12">
//                 <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black">
//                   Embrace the <br/><span className="bg-[#FF90E8] px-2 leading-tight">Chaos.</span>
//                 </h1>
//                 <p className="text-xl font-bold max-w-2xl border-l-4 border-black pl-4">
//                   Neo-brutalism is a design trend characterized by bold colors, high contrast, thick black outlines, and a purposeful rejection of modern soft shadows and gradients.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 <div className="bg-[#39FF14] border-4 border-black shadow-[8px_8px_0px_0px_#000] h-64 p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform">
//                   <h3 className="text-3xl font-black uppercase">Card 01</h3>
//                   <div className="w-12 h-12 bg-black rounded-full"></div>
//                 </div>
//                 <div className="bg-[#FF90E8] border-4 border-black shadow-[8px_8px_0px_0px_#000] h-64 p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform">
//                   <h3 className="text-3xl font-black uppercase">Card 02</h3>
//                   <div className="w-0 h-0 border-l-[24px] border-l-transparent border-t-[40px] border-t-black border-r-[24px] border-r-transparent"></div>
//                 </div>
//                 <div className="bg-[#00E5FF] border-4 border-black shadow-[8px_8px_0px_0px_#000] h-64 p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform">
//                   <h3 className="text-3xl font-black uppercase">Card 03</h3>
//                   <div className="w-12 h-12 bg-black rotate-45"></div>
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

import { NavbarShell } from "../shared/NavbarShell";

export default function Navbar38() {
  const navLogo = (
    <div className="flex items-center gap-2 shrink-0">
      {/* Brutalist Logo - Tilted box with thick border */}
      <div className="w-8 h-8 bg-[#FF90E8] border-2 border-black flex items-center justify-center transform -rotate-6 shadow-[2px_2px_0px_0px_#000]">
        <span className="text-black font-black text-xl leading-none">R</span>
      </div>
      <span className="text-2xl font-black tracking-tighter text-black uppercase">
        RetroBlock
      </span>
    </div>
  );

  const navLinks = [
    { label: "Start" },
    { label: "About" },
    { label: "Grid" },
    { label: "Zine" }
  ];

  const navActions = (
    <div className="flex items-center gap-4 shrink-0">
      <button className="text-[15px] font-bold text-black uppercase hover:underline decoration-2 underline-offset-4 whitespace-nowrap">
        Log in
      </button>
      
      {/* Brutalist Button - Hard shadow, moves on hover */}
      <button className="px-6 py-2 bg-[#00E5FF] text-black font-black uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all whitespace-nowrap">
        Sign Up
      </button>
    </div>
  );

  return (
    <div className="relative w-full py-8 mt-4 flex justify-center">
      
      {/* 1. NORMAL STATIC VIEW */}
      <NavbarShell 
        logo={navLogo} 
        links={navLinks} 
        actions={navActions} 
        // Neo-Brutalism Navbar Style: Yellow background, thick border, hard shadow
        className="w-full max-w-[1100px] mx-auto bg-[#FFD700] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none" 
        desktopClassName="justify-between px-6 py-2 min-h-[70px]" 
        linkClassName="text-[15px] font-bold text-black uppercase border-b-2 border-transparent hover:border-black transition-all whitespace-nowrap"
        mobileClassName="px-6 text-black font-bold uppercase" 
      />

    </div>
  );
}