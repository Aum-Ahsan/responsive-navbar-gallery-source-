// with demo button //

// import React, { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar44() {
//   const [showDemo, setShowDemo] = useState<boolean>(false);
//   const [currentDate, setCurrentDate] = useState<string>("");

//   // Disable scroll when demo is open & set current date
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";

//     const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     setCurrentDate(new Date().toLocaleDateString('en-US', dateOptions));
//   }, [showDemo]);

//   // 1. Logo (News / Editorial Style - Serif font feel)
//   const navLogo = (
//     <div className="flex flex-col justify-center shrink-0 cursor-pointer">
//       <h1 className="text-3xl font-black tracking-tighter text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
//         Daily<span className="text-red-600">Pulse</span>
//       </h1>
//       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest -mt-1 hidden sm:block">
//         Journalism You Can Trust
//       </span>
//     </div>
//   );

//   // 2. Empty links array to prevent SSR issues (We render them in actions)
//   const navLinks: any[] = [];

//   // 3. Actions (Links + Buttons)
//   const navActions = (
//     <div className="flex items-center justify-end md:justify-between w-full">
      
//       {/* CATEGORY LINKS - Centered on Desktop */}
//       <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
//         {["World", "Politics", "Business", "Tech", "Science", "Sports"].map((category, idx) => (
//           <a
//             key={idx}
//             href="#"
//             className={`text-[13px] font-bold uppercase tracking-wider transition-colors duration-200 
//               ${idx === 0 ? "text-red-600 border-b-2 border-red-600 pb-1" : "text-gray-700 hover:text-red-600"}`}
//           >
//             {category}
//           </a>
//         ))}
//       </div>

//       {/* RIGHT SIDE ACTIONS (Search & Subscribe) */}
//       <div className="flex items-center gap-4 lg:gap-6 ml-auto">
//         <button className="hidden sm:block text-gray-700 hover:text-red-600 transition-colors">
//           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//         </button>
//         <button className="bg-red-600 text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm shrink-0">
//           Subscribe
//         </button>
//       </div>

//     </div>
//   );

//   // THE TOP TICKER BAR COMPONENT
//   const TopNewsTicker = () => (
//     <div className="w-full bg-black text-white h-10 flex items-center justify-between px-4 lg:px-10 text-xs font-bold uppercase tracking-wider relative z-20">
      
//       {/* Date (Left) */}
//       <div className="hidden md:flex items-center shrink-0 mr-6 text-gray-400">
//         {currentDate || "Tuesday, October 24, 2023"}
//       </div>

//       {/* Ticker Animation & Content */}
//       <div className="flex items-center flex-1 overflow-hidden relative h-full bg-neutral-900 border-x border-neutral-800">
//         <div className="bg-red-600 text-white h-full px-3 py-1 flex items-center shrink-0 z-10 shadow-[5px_0_10px_rgba(0,0,0,0.5)]">
//           Breaking
//         </div>
        
//         {/* Custom CSS for Marquee Animation */}
//         <style>
//           {`
//             @keyframes newsTicker {
//               0% { transform: translateX(100%); }
//               100% { transform: translateX(-100%); }
//             }
//             .animate-ticker {
//               display: inline-block;
//               white-space: nowrap;
//               animation: newsTicker 25s linear infinite;
//             }
//             .animate-ticker:hover {
//               animation-play-state: paused;
//             }
//           `}
//         </style>

//         <div className="flex-1 overflow-hidden h-full flex items-center">
//           <div className="animate-ticker text-gray-300 cursor-pointer">
//             <span className="text-white">GLOBAL MARKETS:</span> Tech stocks rally hits record highs amid AI boom &nbsp;&nbsp; | &nbsp;&nbsp;
//             <span className="text-white">SPACE:</span> New Mars rover sends first high-res images back to Earth &nbsp;&nbsp; | &nbsp;&nbsp;
//             <span className="text-white">SPORTS:</span> Championship finals rescheduled due to extreme weather conditions &nbsp;&nbsp; | &nbsp;&nbsp;
//             <span className="text-white">POLITICS:</span> Historic climate treaty signed by 50 nations today.
//           </div>
//         </div>
//       </div>

//       {/* Social / Utility (Right) */}
//       <div className="hidden lg:flex items-center gap-4 ml-6 shrink-0 text-gray-400">
//         <span className="hover:text-white cursor-pointer transition-colors">Listen Live</span>
//         <span className="hover:text-white cursor-pointer transition-colors">Newsletters</span>
//       </div>

//     </div>
//   );

//   return (
//     <div className="relative w-full py-8 mt-4 flex justify-center bg-gray-100">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[30px] right-[50px] px-3 py-1.5 bg-red-100 text-red-700 text-xs rounded-none font-bold hover:bg-red-200 transition-all flex items-center gap-2 border border-red-300 z-50 shadow-sm uppercase tracking-widest"
//       >
//         <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
//         Read Live
//       </button>

//       {/* 1. NORMAL STATIC VIEW (Double-Deck Wrapper) */}
//       <div className="w-full max-w-[1400px] z-10 flex flex-col shadow-xl">
//         <TopNewsTicker />
//         <NavbarShell 
//           logo={navLogo} 
//           links={navLinks} 
//           actions={navActions} 
//           className="w-full bg-white border-b-4 border-black" 
//           desktopClassName="justify-between px-6 lg:px-10 min-h-[90px] relative" 
//           linkClassName="hidden"
//           mobileClassName="px-4" 
//         />
//       </div>

//       {/* 2. LIVE DEMO POPUP VIEW (News Site Simulation) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-white flex flex-col font-sans">
          
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-32 right-8 z-[99999] bg-black text-white px-5 py-2 text-sm font-bold shadow-xl hover:bg-red-600 transition-all uppercase tracking-widest border-2 border-white"
//           >
//             Close X
//           </button>

//           <div className="w-full h-full overflow-y-auto relative no-scrollbar">
            
//             {/* THE DOUBLE-DECK NAVBAR - Fixed at top */}
//             <div className="sticky top-0 w-full z-50 shadow-md">
//               <TopNewsTicker />
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full bg-white border-b-4 border-black"
//                 desktopClassName="justify-between px-6 lg:px-10 min-h-[90px] relative max-w-[1400px] mx-auto"
//                 linkClassName="hidden"
//                 mobileClassName="px-4"
//               />
//             </div>

//             {/* DUMMY CONTENT (News Portal Layout) */}
//             <div className="max-w-[1400px] mx-auto mt-8 px-6 pb-20">
              
//               <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
//                 {/* Main Headline (Takes up 3 columns on large screens) */}
//                 <div className="lg:col-span-3">
//                   <div className="group cursor-pointer">
//                     <div className="w-full h-[400px] bg-neutral-200 mb-4 overflow-hidden relative">
//                       {/* Fake Image Placeholder */}
//                       <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-400"></div>
//                       <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-2 py-1">
//                         World Exclusive
//                       </div>
//                     </div>
//                     <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 group-hover:text-red-600 transition-colors mb-3 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
//                       The Dawn of a New Era: Global Tech Giants Agree on AI Ethics Framework
//                     </h1>
//                     <p className="text-lg text-gray-600 mb-4">
//                       In an unprecedented move, the world's leading technology companies have signed a binding agreement to regulate artificial intelligence development, marking a significant milestone in digital history.
//                     </p>
//                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
//                       By Alexander Wright • 4 mins read
//                     </p>
//                   </div>

//                   <hr className="my-8 border-gray-200 border-2" />

//                   {/* Sub-Articles Grid */}
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {[1, 2, 3].map((item) => (
//                       <div key={item} className="group cursor-pointer">
//                         <div className="w-full h-40 bg-neutral-200 mb-3"></div>
//                         <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-red-600 transition-colors mb-2" style={{ fontFamily: "Georgia, serif" }}>
//                           Economic Shifts Expected Following New Trade Policies
//                         </h3>
//                         <p className="text-sm text-gray-600">Experts analyze the potential outcomes of the latest tariff adjustments on global markets.</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Sidebar (Trending / Opinion) */}
//                 <div className="lg:col-span-1 border-l-0 lg:border-l border-gray-200 lg:pl-8">
//                   <div className="flex items-center gap-2 mb-6 border-b-2 border-black pb-2">
//                     <div className="w-3 h-3 bg-red-600 rounded-full"></div>
//                     <h2 className="text-lg font-black uppercase tracking-widest text-gray-900">Trending Now</h2>
//                   </div>
                  
//                   <div className="flex flex-col gap-6">
//                     {[
//                       "Central Bank announces unexpected interest rate cut",
//                       "Electric vehicles hit 50% market share milestone",
//                       "Breakthrough in renewable energy storage unveiled",
//                       "Major sports franchise sold for record-breaking sum",
//                       "Award-winning director announces retirement"
//                     ].map((title, i) => (
//                       <div key={i} className="flex gap-4 group cursor-pointer border-b border-gray-100 pb-4 last:border-0">
//                         <div className="text-3xl font-black text-gray-200">0{i+1}</div>
//                         <div>
//                           <h4 className="text-md font-bold text-gray-800 group-hover:text-red-600 transition-colors leading-tight" style={{ fontFamily: "Georgia, serif" }}>
//                             {title}
//                           </h4>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-10 bg-black text-white p-6 text-center">
//                     <h3 className="text-xl font-black mb-2" style={{ fontFamily: "Georgia, serif" }}>The Daily Briefing</h3>
//                     <p className="text-sm text-gray-400 mb-4">Get the morning's biggest stories in your inbox.</p>
//                     <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2 text-black text-sm mb-3" />
//                     <button className="w-full bg-red-600 text-white font-bold uppercase tracking-widest py-2 text-sm hover:bg-red-700 transition-colors">
//                       Sign Up
//                     </button>
//                   </div>
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

import React, { useState, useEffect } from "react";
import { NavbarShell } from "../shared/NavbarShell";

export default function Navbar44() {
  const [currentDate, setCurrentDate] = useState<string>("");

  // Set current date
  useEffect(() => {
    const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('en-US', dateOptions));
  }, []);

  // 1. Logo (News / Editorial Style - Serif font feel)
  const navLogo = (
    <div className="flex flex-col justify-center shrink-0 cursor-pointer">
      <h1 className="text-3xl font-black tracking-tighter text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
        Daily<span className="text-red-600">Pulse</span>
      </h1>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest -mt-1 hidden sm:block">
        Journalism You Can Trust
      </span>
    </div>
  );

  // 2. Empty links array to prevent SSR issues (We render them in actions)
  const navLinks: any[] = [];

  // 3. Actions (Links + Buttons)
  const navActions = (
    <div className="flex items-center justify-end md:justify-between w-full">
      
      {/* CATEGORY LINKS - Centered on Desktop */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
        {["World", "Politics", "Business", "Tech", "Science", "Sports"].map((category, idx) => (
          <a
            key={idx}
            href="#"
            className={`text-[13px] font-bold uppercase tracking-wider transition-colors duration-200 
              ${idx === 0 ? "text-red-600 border-b-2 border-red-600 pb-1" : "text-gray-700 hover:text-red-600"}`}
          >
            {category}
          </a>
        ))}
      </div>

      {/* RIGHT SIDE ACTIONS (Search & Subscribe) */}
      <div className="flex items-center gap-4 lg:gap-6 ml-auto">
        <button className="hidden sm:block text-gray-700 hover:text-red-600 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="bg-red-600 text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm shrink-0">
          Subscribe
        </button>
      </div>

    </div>
  );

  // THE TOP TICKER BAR COMPONENT
  const TopNewsTicker = () => (
    <div className="w-full bg-black text-white h-10 flex items-center justify-between px-4 lg:px-10 text-xs font-bold uppercase tracking-wider relative z-20">
      
      {/* Date (Left) */}
      <div className="hidden md:flex items-center shrink-0 mr-6 text-gray-400">
        {currentDate || "Tuesday, October 24, 2023"}
      </div>

      {/* Ticker Animation & Content */}
      <div className="flex items-center flex-1 overflow-hidden relative h-full bg-neutral-900 border-x border-neutral-800">
        <div className="bg-red-600 text-white h-full px-3 py-1 flex items-center shrink-0 z-10 shadow-[5px_0_10px_rgba(0,0,0,0.5)]">
          Breaking
        </div>
        
        {/* Custom CSS for Marquee Animation */}
        <style>
          {`
            @keyframes newsTicker {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-ticker {
              display: inline-block;
              white-space: nowrap;
              animation: newsTicker 25s linear infinite;
            }
            .animate-ticker:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="flex-1 overflow-hidden h-full flex items-center">
          <div className="animate-ticker text-gray-300 cursor-pointer">
            <span className="text-white">GLOBAL MARKETS:</span> Tech stocks rally hits record highs amid AI boom &nbsp;&nbsp; | &nbsp;&nbsp;
            <span className="text-white">SPACE:</span> New Mars rover sends first high-res images back to Earth &nbsp;&nbsp; | &nbsp;&nbsp;
            <span className="text-white">SPORTS:</span> Championship finals rescheduled due to extreme weather conditions &nbsp;&nbsp; | &nbsp;&nbsp;
            <span className="text-white">POLITICS:</span> Historic climate treaty signed by 50 nations today.
          </div>
        </div>
      </div>

      {/* Social / Utility (Right) */}
      <div className="hidden lg:flex items-center gap-4 ml-6 shrink-0 text-gray-400">
        <span className="hover:text-white cursor-pointer transition-colors">Listen Live</span>
        <span className="hover:text-white cursor-pointer transition-colors">Newsletters</span>
      </div>

    </div>
  );

  return (
    <div className="relative w-full py-8 mt-4 flex justify-center bg-gray-100">
      
      {/* 1. NORMAL STATIC VIEW (Double-Deck Wrapper) */}
      <div className="w-full max-w-[1400px] z-10 flex flex-col shadow-xl">
        <TopNewsTicker />
        <NavbarShell 
          logo={navLogo} 
          links={navLinks} 
          actions={navActions} 
          className="w-full bg-white border-b-4 border-black" 
          desktopClassName="justify-between px-6 lg:px-10 min-h-[90px] relative" 
          linkClassName="hidden"
          mobileClassName="px-4" 
        />
      </div>

    </div>
  );
}