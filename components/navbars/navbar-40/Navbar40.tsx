// with demo button //

// import { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar40() {
//   const [showDemo, setShowDemo] = useState(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   // 1. Logo (Airbnb style Brand color)
//   const navLogo = (
//     <div className="flex items-center gap-2 shrink-0 text-rose-500">
//       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2.253a2.05 2.05 0 0 0-1.144.347L2.25 8.016v11.731c0 1.242 1.008 2.25 2.25 2.25h15c1.242 0 2.25-1.008 2.25-2.25V8.016l-8.606-5.416A2.05 2.05 0 0 0 12 2.253Z" />
//       </svg>
//       <span className="text-xl font-extrabold tracking-tight hidden sm:block">homefindr</span>
//     </div>
//   );

//   // 2. We leave links empty because the center will be occupied by the Giant Search Bar
// const navLinks: any[] = [];
//   // 3. Actions containing both the Absolute Centered Search Bar AND Profile Menu
//   const navActions = (
//     <div className="flex items-center justify-end w-full">
      
//       {/* THE CENTER INTEGRATED SEARCH BAR (Absolutely positioned to stay dead center) */}
//       <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer divide-x divide-gray-300 h-12">
//         <button className="px-4 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-l-full h-full transition-colors">
//           Anywhere
//         </button>
//         <button className="px-4 text-sm font-semibold text-gray-800 hover:bg-gray-100 h-full transition-colors">
//           Any week
//         </button>
//         <div className="flex items-center px-2 hover:bg-gray-100 rounded-r-full h-full transition-colors">
//           <button className="px-2 text-sm text-gray-500 font-normal">
//             Add guests
//           </button>
//           <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center ml-1 text-white">
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE PROFILE ACTIONS */}
//       <div className="flex items-center gap-2 shrink-0">
//         <button className="hidden sm:block text-sm font-semibold text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors whitespace-nowrap">
//           Host your home
//         </button>
//         <button className="hidden sm:flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full transition-colors text-gray-800">
//           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
//           </svg>
//         </button>
        
//         {/* User Profile Pill (Hamburger + Avatar) */}
//         <div className="flex items-center gap-2 border border-gray-300 rounded-full p-1 pl-3 hover:shadow-md cursor-pointer transition-shadow bg-white ml-1">
//           <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//           <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden text-white flex items-center justify-center">
//             <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 24 24">
//               <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
//             </svg>
//           </div>
//         </div>
//       </div>

//     </div>
//   );

//   return (
//     <div className="relative w-full py-8 mt-4 flex justify-center">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[30px] right-[50px] px-3 py-1.5 bg-rose-100 text-rose-700 text-xs rounded-full font-bold hover:bg-rose-200 transition-all flex items-center gap-2 border border-rose-300 z-10 shadow-sm"
//       >
//         <span className="w-1.5 h-1.5 bg-rose-600 rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       <div className="w-full max-w-[1200px]">
//         <NavbarShell 
//           logo={navLogo} 
//           links={navLinks} 
//           actions={navActions} 
//           className="w-full bg-white border border-gray-200 rounded-full shadow-sm" 
//           desktopClassName="justify-between px-6 min-h-[80px] relative" 
//           linkClassName="hidden"
//           mobileClassName="px-4 text-gray-800" 
//         />
//       </div>

//       {/* 2. LIVE DEMO POPUP VIEW (Full Real Estate Page Simulation) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
          
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-24 right-8 z-[99999] bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-rose-600 transition-all"
//           >
//             Close X
//           </button>

//           <div className="w-full h-full overflow-y-auto relative no-scrollbar">
            
//             {/* THE SEARCH NAVBAR - Fixed at top */}
//             <div className="sticky top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full bg-white max-w-[1400px] mx-auto"
//                 // 'relative' is crucial here so the absolute search bar centers properly
//                 desktopClassName="justify-between px-6 lg:px-10 min-h-[80px] relative"
//                 linkClassName="hidden"
//                 mobileClassName="px-4 text-gray-800"
//               />
//             </div>

//             {/* DUMMY CONTENT (Property Listings) */}
//             <div className="max-w-[1400px] mx-auto mt-8 px-6 pb-20">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending right now</h2>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {[...Array(8)].map((_, i) => (
//                   <div key={i} className="flex flex-col gap-2 cursor-pointer group">
//                     <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
//                       <div className="absolute top-3 right-3 text-white">
//                         <svg className="w-6 h-6 hover:text-rose-500 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="flex justify-between items-start mt-1">
//                       <h3 className="font-bold text-gray-900">Bali, Indonesia</h3>
//                       <span className="flex items-center gap-1 text-sm">
//                         <span className="text-black font-semibold">★ 4.9{i}</span>
//                       </span>
//                     </div>
//                     <p className="text-gray-500 text-sm -mt-1">Beach and ocean views</p>
//                     <p className="text-gray-500 text-sm">Nov 12 - 18</p>
//                     <p className="text-black font-semibold mt-1">$14{i} <span className="font-normal text-gray-500">night</span></p>
//                   </div>
//                 ))}
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

export default function Navbar40() {
  // 1. Logo (Airbnb style Brand color)
  const navLogo = (
    <div className="flex items-center gap-2 shrink-0 text-rose-500">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.253a2.05 2.05 0 0 0-1.144.347L2.25 8.016v11.731c0 1.242 1.008 2.25 2.25 2.25h15c1.242 0 2.25-1.008 2.25-2.25V8.016l-8.606-5.416A2.05 2.05 0 0 0 12 2.253Z" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight hidden sm:block">homefindr</span>
    </div>
  );

  // 2. We leave links empty because the center will be occupied by the Giant Search Bar
  const navLinks: any[] = [];

  // 3. Actions containing both the Absolute Centered Search Bar AND Profile Menu
  const navActions = (
    <div className="flex items-center justify-end w-full">
      
      {/* THE CENTER INTEGRATED SEARCH BAR (Absolutely positioned to stay dead center) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer divide-x divide-gray-300 h-12">
        <button className="px-4 text-sm font-semibold text-gray-800 hover:bg-gray-100 rounded-l-full h-full transition-colors">
          Anywhere
        </button>
        <button className="px-4 text-sm font-semibold text-gray-800 hover:bg-gray-100 h-full transition-colors">
          Any week
        </button>
        <div className="flex items-center px-2 hover:bg-gray-100 rounded-r-full h-full transition-colors">
          <button className="px-2 text-sm text-gray-500 font-normal">
            Add guests
          </button>
          <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center ml-1 text-white">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE PROFILE ACTIONS */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="hidden sm:block text-sm font-semibold text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors whitespace-nowrap">
          Host your home
        </button>
        <button className="hidden sm:flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full transition-colors text-gray-800">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </button>
        
        {/* User Profile Pill (Hamburger + Avatar) */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-full p-1 pl-3 hover:shadow-md cursor-pointer transition-shadow bg-white ml-1">
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden text-white flex items-center justify-center">
            <svg className="w-6 h-6 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <div className="relative w-full py-8 mt-4 flex justify-center">
      
      {/* 1. NORMAL STATIC VIEW */}
      <div className="w-full max-w-[1200px]">
        <NavbarShell 
          logo={navLogo} 
          links={navLinks} 
          actions={navActions} 
          className="w-full bg-white border border-gray-200 rounded-full shadow-sm" 
          desktopClassName="justify-between px-6 min-h-[80px] relative" 
          linkClassName="hidden"
          mobileClassName="px-4 text-gray-800" 
        />
      </div>

    </div>
  );
}