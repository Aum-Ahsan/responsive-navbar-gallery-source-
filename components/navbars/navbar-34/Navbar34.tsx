// import { useState } from "react";
// import { NavbarShell, Pill } from "../shared/NavbarShell";

// export default function Navbar34() {
//   const [showDemo, setShowDemo] = useState(false);

//   return (
//     // relative class mukkiyam, appothan button-a position panna mudiyum
//     <div className="relative w-full flex justify-center items-center py-4 mt-4">
      
//       {/* 
//         LIVE DEMO BUTTON 
//         absolute & -top-12 use panni Navbar-a vittu mela thooki 
//         'Dynamic Island' text pakkathula ukkara vechirukkom.
//         (Unga page-ku yetha mathiri 'right-[140px]' alava neenga mathikalam)
//       */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[50px] right-[150px] px-3 py-1.5 bg-green-500 text-black text-xs rounded-full font-bold hover:bg-green-400 transition-all flex items-center gap-2 shadow-md z-10"
//       >
//         <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW (Center-la azhaga irukkum) */}
//       <NavbarShell
//         logo={
//           <div className="flex items-center gap-2">
//             <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
//               <div className="w-2 h-2 bg-black rounded-full" />
//             </div>
//             <span className="text-[20px] font-semibold tracking-tight text-white">
//               iFluid
//             </span>
//           </div>
//         }
//         links={[
//           { label: "Mac" },
//           { label: "iPad" },
//           { label: "iPhone" },
//           { label: "Watch" },
//         ]}
//         actions={
//           <div className="flex items-center gap-2">
//             <Pill className="border-white/20 text-gray-300 hover:text-white font-normal px-4">
//               Sign In
//             </Pill>
//             <Pill
//               filled
//               className="border-0 bg-white font-medium text-black hover:bg-gray-200 px-5"
//             >
//               Pre-order
//             </Pill>
//           </div>
//         }
//         desktopClassName="w-full max-w-[650px] justify-between bg-[#0b0b0b] rounded-full px-6 py-3 shadow-lg mx-auto"
//         linkClassName="text-[14px] text-gray-400 hover:text-white"
//       />

//       {/* 2. LIVE DEMO POPUP VIEW */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999]">
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
//             onClick={() => setShowDemo(false)}
//           />

//           <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 h-[64px] bg-[#0b0b0b] rounded-full shadow-[0_20px_50px_rgb(0,0,0,0.5)] border border-white/10 flex flex-row items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] w-[650px] hover:w-[850px] px-6 hover:px-10 overflow-hidden group">
            
//             <div className="flex flex-row items-center gap-2 shrink-0">
//               <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-black rounded-full" />
//               </div>
//               <span className="text-[20px] font-semibold tracking-tight text-white">
//                 iFluid
//               </span>
//             </div>

//             <div className="flex flex-row items-center gap-8 shrink-0">
//               <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Mac</a>
//               <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">iPad</a>
//               <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">iPhone</a>
//               <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Watch</a>
//             </div>

//             <div className="flex flex-row items-center gap-3 shrink-0">
//               <button className="text-[14px] text-gray-400 hover:text-white px-3 py-2 rounded-full border border-white/20 transition-colors">
//                 Sign In
//               </button>
//               <button className="text-[14px] font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors">
//                 Pre-order
//               </button>
//             </div>
//           </div>

//           <div className="fixed top-28 left-1/2 -translate-x-1/2 text-white/70 text-xs px-4 py-2 bg-black/60 rounded-full pointer-events-none">
//             Hover the island to expand. Click background to close.
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { NavbarShell, Pill } from "../shared/NavbarShell";

export default function Navbar34() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Check URL Hash for Demo
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-34") {
        setIsNewTabDemo(true);
        document.body.style.overflow = "hidden"; // Hide background page scroll
      } else {
        setIsNewTabDemo(false);
        document.body.style.overflow = "unset";
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-black w-screen h-screen font-sans">
        
        {/* Dynamic Island Navbar (Responsive for Mobile, iPad & Desktop) */}
        <div 
          className={`fixed top-4 lg:top-8 left-1/2 -translate-x-1/2 z-50 bg-[#0b0b0b] shadow-[0_20px_50px_rgb(0,0,0,0.5)] border border-white/10 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden group 
          ${isMobileMenuOpen ? 'w-[90%] sm:w-[400px] h-[340px] rounded-3xl' : 'w-[90%] sm:w-[400px] lg:w-[650px] lg:hover:w-[850px] h-[60px] lg:h-[64px] rounded-full'}`}
        >
          
          {/* Top Row (Visible Always) */}
          <div className="flex flex-row items-center justify-between w-full h-[60px] lg:h-[64px] px-6 lg:group-hover:px-10 transition-all duration-500 shrink-0">
            
            {/* Logo */}
            <div className="flex flex-row items-center gap-2 shrink-0">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
              <span className="text-[20px] font-semibold tracking-tight text-white">
                iFluid
              </span>
            </div>

            {/* Desktop Links (Hidden on Mobile & iPad) */}
            <div className="hidden lg:flex flex-row items-center gap-8 shrink-0">
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Mac</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">iPad</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">iPhone</a>
              <a href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">Watch</a>
            </div>

            {/* Desktop Actions (Hidden on Mobile & iPad) */}
            <div className="hidden lg:flex flex-row items-center gap-3 shrink-0">
              <button className="text-[14px] text-gray-400 hover:text-white px-3 py-2 rounded-full border border-white/20 transition-colors">
                Sign In
              </button>
              <button className="text-[14px] font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Pre-order
              </button>
            </div>

            {/* Mobile & iPad Hamburger Button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile & iPad Menu Dropdown (Visible only when Hamburger is clicked) */}
          <div className={`lg:hidden flex flex-col px-6 pt-4 gap-4 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
            <a href="#" className="text-gray-300 text-[16px] font-medium hover:text-white border-b border-white/10 pb-3">Mac</a>
            <a href="#" className="text-gray-300 text-[16px] font-medium hover:text-white border-b border-white/10 pb-3">iPad</a>
            <a href="#" className="text-gray-300 text-[16px] font-medium hover:text-white border-b border-white/10 pb-3">iPhone</a>
            <a href="#" className="text-gray-300 text-[16px] font-medium hover:text-white pb-2">Watch</a>
            <div className="flex gap-4 mt-2">
              <button className="text-[14px] font-medium bg-white text-black px-5 py-2.5 rounded-full flex-1 hover:bg-gray-200 transition-colors">
                Pre-order
              </button>
            </div>
          </div>

        </div>

        {/* Hint text - Hidden on Mobile & iPad */}
        <div className="hidden lg:block fixed top-28 left-1/2 -translate-x-1/2 text-white/70 text-xs px-4 py-2 bg-white/10 rounded-full pointer-events-none">
          Hover the island to expand
        </div>
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (IN GALLERY) =================
  return (
    <div className="relative w-full flex justify-center items-center py-4 mt-4">
      
      {/* NEW TAB LIVE DEMO BUTTON */}
      <a
        href="#demo-34"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-[50px] right-[150px] px-3 py-1.5 bg-green-500 text-black text-xs rounded-full font-bold hover:bg-green-400 transition-all flex items-center gap-2 shadow-md z-10"
      >
        <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
        Live Demo
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* NORMAL STATIC VIEW */}
      <NavbarShell
        logo={
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            <span className="text-[20px] font-semibold tracking-tight text-white">
              iFluid
            </span>
          </div>
        }
        links={[
          { label: "Mac" },
          { label: "iPad" },
          { label: "iPhone" },
          { label: "Watch" },
        ]}
        actions={
          <div className="flex items-center gap-2">
            <Pill className="border-white/20 text-gray-300 hover:text-white font-normal px-4">
              Sign In
            </Pill>
            <Pill
              filled
              className="border-0 bg-white font-medium text-black hover:bg-gray-200 px-5"
            >
              Pre-order
            </Pill>
          </div>
        }
        desktopClassName="w-full max-w-[650px] justify-between bg-[#0b0b0b] rounded-full px-6 py-3 shadow-lg mx-auto"
        linkClassName="text-[14px] text-gray-400 hover:text-white"
      />
    </div>
  );
}