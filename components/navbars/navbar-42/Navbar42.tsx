// with demo button //

// import React, { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar42() {
//   const [showDemo, setShowDemo] = useState<boolean>(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   // 1. Logo & Location Block (Left Side)
//   const navLogo = (
//     <div className="flex items-center gap-4 sm:gap-8 shrink-0">
//       {/* Brand */}
//       <div className="flex items-center gap-2 text-orange-500 cursor-pointer group">
//         <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 8.25 3c1.804 0 3.42.75 4.5 1.95A6.095 6.095 0 0117.25 3c3.536 0 6 2.322 6 5.25 0 3.924-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
//         </svg>
//         <span className="text-2xl font-black tracking-tight hidden sm:block">QuickBite</span>
//       </div>

//       {/* Location Selector (The Core Concept) */}
//       <div className="flex items-center gap-2 cursor-pointer group mt-1">
//         <div className="flex flex-col">
//           <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-orange-500 transition-colors">
//             Delivering to
//           </span>
//           <div className="flex items-center gap-1">
//             <span className="text-sm font-bold text-gray-900 border-b-2 border-transparent group-hover:border-orange-500 transition-colors truncate max-w-[120px] sm:max-w-[200px]">
//               Home - Anna Nagar, Chennai
//             </span>
//             <svg className="w-4 h-4 text-orange-500 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // 2. Empty links (We handle everything in actions to perfectly align icons and text)
//   const navLinks: any[] = [];

//   // 3. Actions (Right Side - Search, Offers, Help, Profile, Cart)
//   const navActions = (
//     <div className="flex items-center gap-6 lg:gap-8 justify-end w-full text-[15px] font-bold text-gray-700">
      
//       {/* Search */}
//       <div className="hidden md:flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
//         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//         </svg>
//         <span>Search</span>
//       </div>

//       {/* Offers */}
//       <div className="hidden md:flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
//         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
//         </svg>
//         <span>Offers <sup className="text-[10px] text-orange-500 font-black">NEW</sup></span>
//       </div>

//       {/* Profile / Sign In */}
//       <div className="hidden lg:flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
//         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//         <span>Sign In</span>
//       </div>

//       {/* Cart (With Notification Badge) */}
//       <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors relative group">
//         <div className="relative">
//           <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//           </svg>
//           {/* Badge */}
//           <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-sm">
//             2
//           </span>
//         </div>
//         <span className="hidden sm:block group-hover:text-orange-500">Cart</span>
//       </div>

//     </div>
//   );

//   return (
//     <div className="relative w-full py-8 mt-4 flex justify-center bg-gray-50">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[30px] right-[50px] px-3 py-1.5 bg-orange-100 text-orange-700 text-xs rounded-full font-bold hover:bg-orange-200 transition-all flex items-center gap-2 border border-orange-300 z-10 shadow-sm"
//       >
//         <span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       <div className="w-full max-w-[1400px]">
//         <NavbarShell 
//           logo={navLogo} 
//           links={navLinks} 
//           actions={navActions} 
//           className="w-full bg-white border-b border-gray-200 shadow-sm" 
//           desktopClassName="justify-between px-6 lg:px-12 min-h-[80px]" 
//           linkClassName="hidden"
//           mobileClassName="px-4" 
//         />
//       </div>

//       {/* 2. LIVE DEMO POPUP VIEW (Food Delivery Feed Simulation) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
          
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-24 right-8 z-[99999] bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-orange-600 transition-all"
//           >
//             Close X
//           </button>

//           <div className="w-full h-full overflow-y-auto relative no-scrollbar bg-white">
            
//             {/* THE LOCATION NAVBAR - Fixed at top */}
//             <div className="sticky top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full max-w-[1400px] mx-auto bg-white"
//                 desktopClassName="justify-between px-6 lg:px-12 min-h-[80px]"
//                 linkClassName="hidden"
//                 mobileClassName="px-4"
//               />
//             </div>

//             {/* DUMMY CONTENT (Food App Homepage) */}
//             <div className="max-w-[1200px] mx-auto mt-8 px-6 pb-20">
              
//               {/* Category Scroller */}
//               <div className="mb-12">
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-black text-gray-900 tracking-tight">What's on your mind?</h2>
//                 </div>
//                 <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
//                   {["Biryani", "Pizzas", "Burgers", "Healthy", "Chinese", "Desserts", "South Indian", "Rolls"].map((item, i) => (
//                     <div key={i} className="flex flex-col items-center gap-3 shrink-0 cursor-pointer group">
//                       <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:shadow-md transition-shadow">
//                         <span className="text-3xl">🍔</span>
//                       </div>
//                       <span className="text-sm font-bold text-gray-700">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <hr className="border-gray-100 mb-8" />

//               {/* Restaurant Grid */}
//               <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-6">Top restaurant chains in Chennai</h2>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
//                 {[
//                   { name: "KFC", rating: "4.3", time: "30-35 mins", type: "Burgers, Fast Food" },
//                   { name: "Domino's Pizza", rating: "4.5", time: "25-30 mins", type: "Pizzas, Italian" },
//                   { name: "A2B - Adyar Ananda", rating: "4.6", time: "15-20 mins", type: "South Indian, Sweets" },
//                   { name: "Truffles", rating: "4.4", time: "40-45 mins", type: "American, Desserts" },
//                   { name: "SS Hyderabad Biryani", rating: "4.7", time: "20-25 mins", type: "Biryani, Mughlai" },
//                   { name: "Subway", rating: "4.1", time: "20-30 mins", type: "Healthy Food, Salads" },
//                   { name: "Sangeetha Veg", rating: "4.5", time: "15-25 mins", type: "South Indian, North Indian" },
//                   { name: "McDonald's", rating: "4.4", time: "25-30 mins", type: "Burgers, Beverages" }
//                 ].map((rest, i) => (
//                   <div key={i} className="flex flex-col gap-3 cursor-pointer group">
//                     {/* Image with Offer Overlay */}
//                     <div className="w-full h-48 bg-gray-200 rounded-2xl overflow-hidden relative shadow-sm group-hover:scale-95 transition-transform duration-300">
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
//                       <div className="absolute bottom-3 left-4 z-20">
//                         <p className="text-white font-black text-xl tracking-tight">60% OFF UPTO ₹120</p>
//                       </div>
//                     </div>
//                     {/* Content */}
//                     <div className="px-1">
//                       <h3 className="font-bold text-lg text-gray-900 truncate">{rest.name}</h3>
//                       <div className="flex items-center gap-1 mt-0.5">
//                         <div className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center">
//                           <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
//                         </div>
//                         <span className="text-gray-900 font-bold text-[15px]">{rest.rating}</span>
//                         <span className="text-gray-500 font-bold mx-1">•</span>
//                         <span className="text-gray-900 font-bold text-[15px]">{rest.time}</span>
//                       </div>
//                       <p className="text-gray-500 text-sm mt-1 truncate">{rest.type}</p>
//                       <p className="text-gray-500 text-sm truncate">Anna Nagar</p>
//                     </div>
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

import React from "react";
import { NavbarShell } from "../shared/NavbarShell";

export default function Navbar42() {
  // 1. Logo & Location Block (Left Side)
  const navLogo = (
    <div className="flex items-center gap-4 sm:gap-8 shrink-0">
      {/* Brand */}
      <div className="flex items-center gap-2 text-orange-500 cursor-pointer group">
        <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 8.25 3c1.804 0 3.42.75 4.5 1.95A6.095 6.095 0 0117.25 3c3.536 0 6 2.322 6 5.25 0 3.924-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <span className="text-2xl font-black tracking-tight hidden sm:block">QuickBite</span>
      </div>

      {/* Location Selector (The Core Concept) */}
      <div className="flex items-center gap-2 cursor-pointer group mt-1">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-orange-500 transition-colors">
            Delivering to
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-gray-900 border-b-2 border-transparent group-hover:border-orange-500 transition-colors truncate max-w-[120px] sm:max-w-[200px]">
              Home - Anna Nagar, Chennai
            </span>
            <svg className="w-4 h-4 text-orange-500 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. Empty links (We handle everything in actions to perfectly align icons and text)
  const navLinks: any[] = [];

  // 3. Actions (Right Side - Search, Offers, Help, Profile, Cart)
  const navActions = (
    <div className="flex items-center gap-6 lg:gap-8 justify-end w-full text-[15px] font-bold text-gray-700">
      
      {/* Search */}
      <div className="hidden md:flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Search</span>
      </div>

      {/* Offers */}
      <div className="hidden md:flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        <span>Offers <sup className="text-[10px] text-orange-500 font-black">NEW</sup></span>
      </div>

      {/* Profile / Sign In */}
      <div className="hidden lg:flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>Sign In</span>
      </div>

      {/* Cart (With Notification Badge) */}
      <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-colors relative group">
        <div className="relative">
          <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {/* Badge */}
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-sm">
            2
          </span>
        </div>
        <span className="hidden sm:block group-hover:text-orange-500">Cart</span>
      </div>

    </div>
  );

  return (
    <div className="relative w-full py-8 mt-4 flex justify-center bg-gray-50">
      
      {/* 1. NORMAL STATIC VIEW */}
      <div className="w-full max-w-[1400px]">
        <NavbarShell 
          logo={navLogo} 
          links={navLinks} 
          actions={navActions} 
          className="w-full bg-white border-b border-gray-200 shadow-sm" 
          desktopClassName="justify-between px-6 lg:px-12 min-h-[80px]" 
          linkClassName="hidden"
          mobileClassName="px-4" 
        />
      </div>

    </div>
  );
}