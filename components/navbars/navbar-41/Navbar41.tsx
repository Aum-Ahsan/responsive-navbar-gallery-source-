// with demo button //

// import React, { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// // 1. TypeScript Interface for IconButton Props
// interface IconButtonProps {
//   icon: React.ReactNode;
//   tooltip: string;
//   active?: boolean;
// }

// // 2. Applied Type (React.FC) to the component
// const IconButton: React.FC<IconButtonProps> = ({ icon, tooltip, active = false }) => (
//   <div className="relative group flex items-center justify-center p-3 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all cursor-pointer">
//     <div className={active ? "text-indigo-600" : ""}>{icon}</div>
    
//     {/* Tooltip */}
//     <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 text-white text-[11px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg tracking-wide">
//       {tooltip}
//       {/* Tooltip arrow */}
//       <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800"></div>
//     </div>
//   </div>
// );

// export default function Navbar41() {
//   const [showDemo, setShowDemo] = useState<boolean>(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   // 1. Logo (Icon only, with Tooltip)
//   const navLogo = (
//     <div className="relative group flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-xl shadow-md cursor-pointer hover:bg-indigo-700 transition-colors shrink-0">
//       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
//       </svg>
//       {/* Brand Tooltip */}
//       <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 text-white text-[11px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg tracking-wide">
//         ConnectX
//         <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800"></div>
//       </div>
//     </div>
//   );

//   // 2. We leave links empty because the center will be occupied by the Icon Menu
//   const navLinks: any[] = [];

//   // 3. Actions containing Absolute Centered Icons AND Right Side Icons
//   const navActions = (
//     <div className="flex items-center justify-end w-full">
      
//       {/* THE CENTER ICON MENU (Absolutely positioned to stay dead center) */}
//       <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 bg-white/80 backdrop-blur-md px-2 py-1.5 border border-gray-200 rounded-2xl shadow-sm">
//         <IconButton 
//           active={true}
//           tooltip="Dashboard" 
//           icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>} 
//         />
//         <IconButton 
//           tooltip="Network" 
//           icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} 
//         />
//         <IconButton 
//           tooltip="Messages" 
//           icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} 
//         />
//         <IconButton 
//           tooltip="Analytics" 
//           icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>} 
//         />
//       </div>

//       {/* RIGHT SIDE ACTIONS */}
//       <div className="flex items-center gap-2 shrink-0">
//         <IconButton 
//           tooltip="Create New" 
//           icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>} 
//         />
        
//         {/* Profile Avatar with Tooltip */}
//         <div className="relative group ml-2 cursor-pointer">
//           <div className="w-10 h-10 rounded-xl bg-indigo-100 border-2 border-indigo-200 overflow-hidden flex items-center justify-center">
//             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ConnectX" alt="User" className="w-full h-full object-cover" />
//           </div>
//           <div className="absolute top-full mt-3 right-0 px-2.5 py-1 bg-gray-800 text-white text-[11px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg tracking-wide">
//             Profile & Settings
//             <div className="absolute -top-1 right-4 border-4 border-transparent border-b-gray-800"></div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );

//   return (
//     <div className="relative w-full py-8 mt-4 flex justify-center bg-gray-50">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[30px] right-[50px] px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-bold hover:bg-indigo-200 transition-all flex items-center gap-2 border border-indigo-300 z-10 shadow-sm"
//       >
//         <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       <div className="w-full max-w-[1200px]">
//         <NavbarShell 
//           logo={navLogo} 
//           links={navLinks} 
//           actions={navActions} 
//           className="w-full bg-transparent" 
//           desktopClassName="justify-between px-6 min-h-[80px] relative" 
//           linkClassName="hidden"
//           mobileClassName="px-4" 
//         />
//       </div>

//       {/* 2. LIVE DEMO POPUP VIEW (Dashboard Simulation) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-gray-50 flex flex-col">
          
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-24 right-8 z-[99999] bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-indigo-600 transition-all"
//           >
//             Close X
//           </button>

//           <div className="w-full h-full overflow-y-auto relative no-scrollbar">
            
//             {/* THE MINIMALIST NAVBAR - Fixed at top */}
//             <div className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-sm">
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

//             {/* DUMMY CONTENT (Dashboard Grid) */}
//             <div className="max-w-[1400px] mx-auto mt-10 px-6 pb-20">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Overview</h2>
//                 <div className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg cursor-pointer">Generate Report</div>
//               </div>
              
//               {/* Stats Row */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 {["Total Views", "Engagement", "New Connections", "Bounce Rate"].map((title, i) => (
//                   <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//                     <p className="text-gray-500 font-medium text-sm">{title}</p>
//                     <div className="mt-2 flex items-baseline gap-2">
//                       <h3 className="text-3xl font-black text-gray-900">{Math.floor(Math.random() * 500) + 120}{(i===3)?'%':'k'}</h3>
//                       <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">+{(i+1)*4}%</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Main Content Area */}
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {/* Large Chart Area */}
//                 <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 min-h-[400px] flex items-center justify-center">
//                    <div className="text-center">
//                      <svg className="w-16 h-16 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
//                      <p className="text-gray-400 font-medium">Activity graph will appear here</p>
//                    </div>
//                 </div>
                
//                 {/* Side Feed */}
//                 <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
//                   <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
//                   <div className="space-y-6">
//                     {[1,2,3,4,5].map((item) => (
//                       <div key={item} className="flex items-start gap-4">
//                         <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
//                           <span className="text-indigo-600 font-bold text-sm">U{item}</span>
//                         </div>
//                         <div>
//                           <p className="text-sm font-semibold text-gray-900">User {item} connected with you</p>
//                           <p className="text-xs text-gray-500 mt-0.5">{item * 2} hours ago</p>
//                         </div>
//                       </div>
//                     ))}
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

import React from "react";
import { NavbarShell } from "../shared/NavbarShell";

// 1. TypeScript Interface for IconButton Props
interface IconButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  active?: boolean;
}

// 2. Applied Type (React.FC) to the component
const IconButton: React.FC<IconButtonProps> = ({ icon, tooltip, active = false }) => (
  <div className="relative group flex items-center justify-center p-3 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all cursor-pointer">
    <div className={active ? "text-indigo-600" : ""}>{icon}</div>
    
    {/* Tooltip */}
    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 text-white text-[11px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg tracking-wide">
      {tooltip}
      {/* Tooltip arrow */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800"></div>
    </div>
  </div>
);

export default function Navbar41() {
  // 1. Logo (Icon only, with Tooltip)
  const navLogo = (
    <div className="relative group flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-xl shadow-md cursor-pointer hover:bg-indigo-700 transition-colors shrink-0">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
      {/* Brand Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 text-white text-[11px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg tracking-wide">
        ConnectX
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800"></div>
      </div>
    </div>
  );

  // 2. We leave links empty because the center will be occupied by the Icon Menu
  const navLinks: any[] = [];

  // 3. Actions containing Absolute Centered Icons AND Right Side Icons
  const navActions = (
    <div className="flex items-center justify-end w-full">
      
      {/* THE CENTER ICON MENU (Absolutely positioned to stay dead center) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 bg-white/80 backdrop-blur-md px-2 py-1.5 border border-gray-200 rounded-2xl shadow-sm">
        <IconButton 
          active={true}
          tooltip="Dashboard" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>} 
        />
        <IconButton 
          tooltip="Network" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} 
        />
        <IconButton 
          tooltip="Messages" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} 
        />
        <IconButton 
          tooltip="Analytics" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>} 
        />
      </div>

      {/* RIGHT SIDE ACTIONS */}
      <div className="flex items-center gap-2 shrink-0">
        <IconButton 
          tooltip="Create New" 
          icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>} 
        />
        
        {/* Profile Avatar with Tooltip */}
        <div className="relative group ml-2 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 border-2 border-indigo-200 overflow-hidden flex items-center justify-center">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ConnectX" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-full mt-3 right-0 px-2.5 py-1 bg-gray-800 text-white text-[11px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg tracking-wide">
            Profile & Settings
            <div className="absolute -top-1 right-4 border-4 border-transparent border-b-gray-800"></div>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <div className="relative w-full py-8 mt-4 flex justify-center bg-gray-50">
      
      {/* 1. NORMAL STATIC VIEW */}
      <div className="w-full max-w-[1200px]">
        <NavbarShell 
          logo={navLogo} 
          links={navLinks} 
          actions={navActions} 
          className="w-full bg-transparent" 
          desktopClassName="justify-between px-6 min-h-[80px] relative" 
          linkClassName="hidden"
          mobileClassName="px-4" 
        />
      </div>

    </div>
  );
}