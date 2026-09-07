// with demo button //

// import { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar37() {
//   const [showDemo, setShowDemo] = useState(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   const navLogo = (
//     <div className="flex items-center gap-3 shrink-0">
//       {/* Apple style minimal solid logo */}
//       <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
//         <span className="text-white text-[10px] font-bold">M</span>
//       </div>
//       <span className="text-[14px] font-bold tracking-tight text-black">MacSys OS</span>
//     </div>
//   );

//   const navLinks = [
//     { label: "File" },
//     { label: "Edit" },
//     { label: "View" },
//     { label: "History" },
//     { label: "Window" },
//     { label: "Help" }
//   ];

//   const navActions = (
//     <div className="flex items-center gap-4 shrink-0">
//       {/* OS Status Icons (Wifi, Battery, Time) */}
//       <div className="flex items-center gap-3 text-gray-700 text-[13px] font-medium">
//         <span>⌘</span>
//         <span>100%</span>
//         <span>Mon 10:42 AM</span>
//       </div>
//     </div>
//   );

//   return (
//     <div className="relative w-full py-4 mt-4">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[50px] right-[150px] px-3 py-1.5 bg-gray-200 text-black text-xs rounded-full font-bold hover:bg-gray-300 transition-all flex items-center gap-2 shadow-sm border border-gray-300 z-10"
//       >
//         <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       {/* Collection page-la kaatturathukkaga chinna width & border kuduthuruken */}
//       <NavbarShell 
//         logo={navLogo} 
//         links={navLinks} 
//         actions={navActions} 
//         className="w-full mx-auto bg-white/70 backdrop-blur-xl border border-gray-200 rounded-lg shadow-sm" 
//         desktopClassName="justify-between px-4 min-h-[40px]" 
//         linkClassName="text-[13px] font-medium text-black hover:bg-black/10 px-2 py-1 rounded transition-colors whitespace-nowrap"
//         mobileClassName="px-4 text-black" 
//       />

//       {/* 2. LIVE DEMO POPUP VIEW (Full Mac OS Desktop Simulation) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] flex flex-col">
          
//           {/* A classic Mac-style colourful desktop wallpaper background */}
//           <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-purple-300 to-orange-200 -z-10" />

//           {/* Dummy Desktop Icons (To make it feel like an OS) */}
//           <div className="absolute top-20 right-8 flex flex-col gap-6 -z-10">
//             <div className="flex flex-col items-center gap-1 cursor-pointer group">
//               <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl group-hover:bg-white/40 transition-colors" />
//               <span className="text-white text-xs font-medium drop-shadow-md">Macintosh HD</span>
//             </div>
//             <div className="flex flex-col items-center gap-1 cursor-pointer group">
//               <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-md border border-white/40 rounded-xl group-hover:bg-blue-500/40 transition-colors" />
//               <span className="text-white text-xs font-medium drop-shadow-md">Projects</span>
//             </div>
//           </div>

//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[99999] bg-black/80 text-white px-6 py-2 rounded-full text-sm font-medium shadow-xl hover:bg-black backdrop-blur-md transition-all"
//           >
//             Close MacSys Demo
//           </button>

//           {/* SCROLLABLE AREA */}
//           <div className="w-full h-full overflow-y-auto relative no-scrollbar">
            
//             {/* THE OS NAVBAR - Sticky at the very top, edge-to-edge */}
//             <div className="sticky top-0 left-0 w-full z-50">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 // Key OS features: w-full, no rounded corners, thin height, strong blur
//                 className="w-full bg-white/40 backdrop-blur-2xl border-b border-white/50 shadow-sm"
//                 desktopClassName="justify-between px-4 min-h-[32px]"
//                 linkClassName="text-[13px] font-medium text-black hover:bg-white/50 px-2 py-0.5 rounded cursor-default transition-colors whitespace-nowrap"
//                 mobileClassName="px-4 text-black"
//               />
//             </div>

//             {/* Dummy Content to test the blur */}
//             <div className="w-full mt-32 px-10 flex flex-col gap-10 pb-40">
//               <div className="max-w-2xl bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-2xl shadow-xl">
//                 <div className="flex gap-2 mb-4">
//                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
//                 </div>
//                 <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to MacSys UI</h1>
//                 <p className="text-gray-600">Scroll up and down. Notice how this window passes underneath the top menubar and creates a beautiful frosted glass blur effect.</p>
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

export default function Navbar37() {
  const navLogo = (
    <div className="flex items-center gap-3 shrink-0">
      {/* Apple style minimal solid logo */}
      <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
        <span className="text-white text-[10px] font-bold">M</span>
      </div>
      <span className="text-[14px] font-bold tracking-tight text-black">MacSys OS</span>
    </div>
  );

  const navLinks = [
    { label: "File" },
    { label: "Edit" },
    { label: "View" },
    { label: "History" },
    { label: "Window" },
    { label: "Help" }
  ];

  const navActions = (
    <div className="flex items-center gap-4 shrink-0">
      {/* OS Status Icons (Wifi, Battery, Time) */}
      <div className="flex items-center gap-3 text-gray-700 text-[13px] font-medium">
        <span>⌘</span>
        <span>100%</span>
        <span>Mon 10:42 AM</span>
      </div>
    </div>
  );

  return (
    <div className="relative w-full py-4 mt-4">
      
      {/* 1. NORMAL STATIC VIEW */}
      {/* Collection page-la kaatturathukkaga chinna width & border kuduthuruken */}
      <NavbarShell 
        logo={navLogo} 
        links={navLinks} 
        actions={navActions} 
        className="w-full mx-auto bg-white/70 backdrop-blur-xl border border-gray-200 rounded-lg shadow-sm" 
        desktopClassName="justify-between px-4 min-h-[40px]" 
        linkClassName="text-[13px] font-medium text-black hover:bg-black/10 px-2 py-1 rounded transition-colors whitespace-nowrap"
        mobileClassName="px-4 text-black" 
      />

    </div>
  );
}


