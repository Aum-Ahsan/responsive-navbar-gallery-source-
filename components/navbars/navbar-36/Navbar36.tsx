// with demo button//

// import { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar36() {
//   const [showDemo, setShowDemo] = useState(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   const navLogo = (
//     <div className="flex items-center gap-3 shrink-0">
//       {/* Neumorphic Logo Icon */}
//       <div className="w-10 h-10 rounded-full bg-[#e0e5ec] flex items-center justify-center shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]">
//         <span className="text-[#4a90e2] font-black text-xl">S</span>
//       </div>
//       <span className="text-xl font-bold tracking-tight text-gray-600">SoftBase</span>
//     </div>
//   );

//   const navLinks = [
//     { label: "Dashboard" },
//     { label: "Projects" },
//     { label: "Tasks" },
//     { label: "Settings" }
//   ];

//   const navActions = (
//     <div className="flex items-center gap-4 shrink-0">
//       {/* Neumorphic Text Link */}
//       <button className="text-[15px] font-medium text-gray-500 hover:text-[#4a90e2] transition-colors whitespace-nowrap">
//         Log in
//       </button>
      
//       {/* Neumorphic Button (Pops out normally, pressed in on hover/active) */}
//       <button className="px-6 py-2.5 rounded-full bg-[#e0e5ec] text-gray-600 font-bold text-[15px] transition-all duration-300 shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] hover:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] hover:text-[#4a90e2] whitespace-nowrap">
//         Sign Up
//       </button>
//     </div>
//   );

//   return (
//     <div className="relative w-full py-6 mt-4 flex justify-center">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[40px] right-[150px] px-3 py-1.5 bg-blue-500 text-white text-xs rounded-full font-bold hover:bg-blue-400 transition-all flex items-center gap-2 shadow-md z-10"
//       >
//         <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       {/* Neumorphism works best when component and background share the exact same color. 
//           So, we wrap it in a specific colored div for the collection page. */}
//       <div className="w-full max-w-[1000px] bg-[#e0e5ec] p-6 rounded-3xl">
//         <NavbarShell 
//           logo={navLogo} 
//           links={navLinks} 
//           actions={navActions} 
//           // Neumorphic Navbar Container
//           className="w-full mx-auto bg-[#e0e5ec] rounded-2xl shadow-[7px_7px_15px_#a3b1c6,-7px_-7px_15px_#ffffff]" 
//           desktopClassName="justify-between px-8 min-h-[80px]" 
//           linkClassName="text-[15px] font-medium text-gray-500 hover:text-[#4a90e2] transition-colors whitespace-nowrap"
//           mobileClassName="px-6 text-gray-600" 
//         />
//       </div>

//       {/* 2. LIVE DEMO POPUP VIEW (Full Neumorphic Page) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-[#e0e5ec] flex flex-col">
          
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-6 right-8 z-[99999] w-12 h-12 flex items-center justify-center rounded-full bg-[#e0e5ec] text-gray-500 font-bold shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] hover:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] hover:text-red-500 transition-all"
//           >
//             X
//           </button>

//           <div className="w-full h-full relative pt-10">
            
//             {/* The Neumorphic Navbar */}
//             <div className="w-full flex justify-center z-50 px-4">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full max-w-[1200px] rounded-2xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]"
//                 desktopClassName="justify-between px-8 min-h-[80px]"
//                 linkClassName="text-[15px] font-medium text-gray-500 hover:text-[#4a90e2] transition-colors whitespace-nowrap"
//                 mobileClassName="px-6 text-gray-600"
//               />
//             </div>

//             {/* Dummy Neumorphic Content */}
//             <div className="max-w-[1200px] mx-auto mt-20 px-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="p-10 rounded-3xl bg-[#e0e5ec] shadow-[inset_9px_9px_16px_rgb(163,177,198,0.6),inset_-9px_-9px_16px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center text-center h-[300px]">
//                   <h2 className="text-2xl font-bold text-gray-600 mb-4">Inset Shadow</h2>
//                   <p className="text-gray-500">Notice how this box looks pressed into the background? This is done using 'inset' shadows.</p>
//                 </div>

//                 <div className="p-10 rounded-3xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center text-center h-[300px]">
//                   <h2 className="text-2xl font-bold text-gray-600 mb-4">Outset Shadow</h2>
//                   <p className="text-gray-500">And this box looks like it's popping out! Just like the Navbar and buttons above.</p>
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

export default function Navbar36() {
  const navLogo = (
    <div className="flex items-center gap-3 shrink-0">
      {/* Neumorphic Logo Icon */}
      <div className="w-10 h-10 rounded-full bg-[#e0e5ec] flex items-center justify-center shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]">
        <span className="text-[#4a90e2] font-black text-xl">S</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-gray-600">SoftBase</span>
    </div>
  );

  const navLinks = [
    { label: "Dashboard" },
    { label: "Projects" },
    { label: "Tasks" },
    { label: "Settings" }
  ];

  const navActions = (
    <div className="flex items-center gap-4 shrink-0">
      {/* Neumorphic Text Link */}
      <button className="text-[15px] font-medium text-gray-500 hover:text-[#4a90e2] transition-colors whitespace-nowrap">
        Log in
      </button>
      
      {/* Neumorphic Button (Pops out normally, pressed in on hover/active) */}
      <button className="px-6 py-2.5 rounded-full bg-[#e0e5ec] text-gray-600 font-bold text-[15px] transition-all duration-300 shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] hover:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] hover:text-[#4a90e2] whitespace-nowrap">
        Sign Up
      </button>
    </div>
  );

  return (
    <div className="relative w-full py-6 mt-4 flex justify-center">
      
      {/* 1. NORMAL STATIC VIEW */}
      {/* Neumorphism works best when component and background share the exact same color. 
          So, we wrap it in a specific colored div for the collection page. */}
      <div className="w-full max-w-[1000px] bg-[#e0e5ec] p-6 rounded-3xl">
        <NavbarShell 
          logo={navLogo} 
          links={navLinks} 
          actions={navActions} 
          // Neumorphic Navbar Container
          className="w-full mx-auto bg-[#e0e5ec] rounded-2xl shadow-[7px_7px_15px_#a3b1c6,-7px_-7px_15px_#ffffff]" 
          desktopClassName="justify-between px-8 min-h-[80px]" 
          linkClassName="text-[15px] font-medium text-gray-500 hover:text-[#4a90e2] transition-colors whitespace-nowrap"
          mobileClassName="px-6 text-gray-600" 
        />
      </div>

    </div>
  );
}