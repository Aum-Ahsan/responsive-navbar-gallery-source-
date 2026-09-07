// import { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar39() {
//   const [showDemo, setShowDemo] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // Handle scroll progress logic inside the demo
// const handleScroll = (e: any) => {
//     const { scrollTop, scrollHeight, clientHeight } = e.target;
//     // Calculate percentage: (scrolled distance / total scrollable distance) * 100
//     const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
//     setScrollProgress(progress);
//   };

//   // Disable body scroll when demo is open
//   useEffect(() => {
//     if (showDemo) {
//       document.body.style.overflow = "hidden";
//       setScrollProgress(0); // Reset progress when opening
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [showDemo]);

//   const navLogo = (
//     <div className="flex items-center gap-2 shrink-0">
//       <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center">
//         <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//         </svg>
//       </div>
//       <span className="text-[20px] font-bold tracking-tight text-gray-900">EduPath</span>
//     </div>
//   );

//   const navLinks = [
//     { label: "Articles" },
//     { label: "Tutorials" },
//     { label: "Courses" },
//     { label: "Podcasts" }
//   ];

//   const navActions = (
//     <div className="flex items-center gap-4 shrink-0">
//       <button className="text-gray-500 hover:text-emerald-600 transition-colors">
//         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//         </svg>
//       </button>
//       <button className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap">
//         Subscribe
//       </button>
//     </div>
//   );

//   return (
//     <div className="relative w-full py-8 mt-4 flex justify-center">
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[30px] right-[50px] px-3 py-1.5 bg-emerald-100 text-emerald-800 text-xs rounded-full font-bold hover:bg-emerald-200 transition-all flex items-center gap-2 border border-emerald-300 z-10 shadow-sm"
//       >
//         <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW (with dummy 45% progress bar) */}
//       <div className="w-full max-w-[1200px] relative bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
//         <NavbarShell 
//           logo={navLogo} 
//           links={navLinks} 
//           actions={navActions} 
//           className="w-full bg-white" 
//           desktopClassName="justify-between px-6 min-h-[70px]" 
//           linkClassName="text-[15px] font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap"
//           mobileClassName="px-6 text-gray-800" 
//         />
//         {/* Dummy Progress Bar for Static View */}
//         <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 rounded-r-full" style={{ width: '45%' }}></div>
//       </div>

//       {/* 2. LIVE DEMO POPUP VIEW (Functional Scroll Progress) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-gray-50 flex flex-col">
          
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-20 right-8 z-[99999] bg-white text-gray-500 border border-gray-200 px-4 py-2 rounded-full text-sm font-bold shadow-md hover:text-red-500 hover:border-red-200 transition-all"
//           >
//             Close X
//           </button>

//           {/* SCROLLABLE CONTAINER (onScroll event attached here) */}
//           <div 
//             className="w-full h-full overflow-y-auto relative no-scrollbar"
//             onScroll={handleScroll}
//           >
            
//             {/* STICKY NAVBAR WITH PROGRESS BAR */}
//             <div className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full bg-transparent max-w-[1000px] mx-auto"
//                 desktopClassName="justify-between px-4 min-h-[70px]"
//                 linkClassName="text-[15px] font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap"
//                 mobileClassName="px-6 text-gray-800"
//               />
              
//               {/* THE REAL DYNAMIC PROGRESS BAR */}
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
//                 <div 
//                   className="h-full bg-emerald-500 transition-all duration-150 ease-out" 
//                   style={{ width: `${scrollProgress}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* DUMMY BLOG POST CONTENT (Long enough to scroll) */}
//             <div className="max-w-[800px] mx-auto mt-16 px-6 pb-32">
//               <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-2 block">Technology</span>
//               <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
//                 The Future of UI Design in 2025
//               </h1>
              
//               <div className="flex items-center gap-3 mb-12">
//                 <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//                 <div>
//                   <p className="text-sm font-bold text-gray-900">Sarah Jenkins</p>
//                   <p className="text-xs text-gray-500">Oct 24 • 8 min read</p>
//                 </div>
//               </div>

//               {/* Dummy text blocks to create scroll height */}
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="mb-10">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-4">Chapter {i + 1}: Evolution</h2>
//                   <p className="text-lg text-gray-600 leading-relaxed mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                   </p>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
//                   </p>
//                 </div>
//               ))}

//               <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-2xl mt-12 text-center">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">You reached the end!</h3>
//                 <p className="text-gray-600 mb-6">Look at the navbar progress bar. It should be 100% full now.</p>
//                 <button 
//                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                   className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors"
//                 >
//                   Scroll back to top
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { NavbarShell } from "../shared/NavbarShell";

export default function Navbar39() {
  const [isNewTabDemo, setIsNewTabDemo] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress logic inside the demo
  const handleScroll = (e: any) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // Calculate percentage: (scrolled distance / total scrollable distance) * 100
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
  };

  // Check URL Hash for Demo and handle body scroll
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-39") {
        setIsNewTabDemo(true);
        document.body.style.overflow = "hidden";
        setScrollProgress(0); // Reset progress when opening
      } else {
        setIsNewTabDemo(false);
        document.body.style.overflow = "unset";
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const navLogo = (
    <div className="flex items-center gap-2 shrink-0">
      <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <span className="text-[20px] font-bold tracking-tight text-gray-900">EduPath</span>
    </div>
  );

  const navLinks = [
    { label: "Articles" },
    { label: "Tutorials" },
    { label: "Courses" },
    { label: "Podcasts" }
  ];

  const navActions = (
    <div className="flex items-center gap-4 shrink-0">
      <button className="text-gray-500 hover:text-emerald-600 transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      <button className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap">
        Subscribe
      </button>
    </div>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-gray-50 flex flex-col w-screen h-screen">
        
        {/* SCROLLABLE CONTAINER (onScroll event attached here) */}
        <div 
          className="w-full h-full overflow-y-auto relative no-scrollbar"
          onScroll={handleScroll}
        >
          
          {/* STICKY NAVBAR WITH PROGRESS BAR */}
          <div className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
            <NavbarShell
              logo={navLogo}
              links={navLinks}
              actions={navActions}
              className="w-full bg-transparent max-w-[1000px] mx-auto"
              desktopClassName="justify-between px-4 min-h-[70px]"
              linkClassName="text-[15px] font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap"
              mobileClassName="px-6 text-gray-800"
            />
            
            {/* THE REAL DYNAMIC PROGRESS BAR */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
              <div 
                className="h-full bg-emerald-500 transition-all duration-150 ease-out" 
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
          </div>

          {/* DUMMY BLOG POST CONTENT */}
          <div className="max-w-[800px] mx-auto mt-16 px-6 pb-32">
            <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-2 block">Technology</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              The Future of UI Design in 2025
            </h1>
            
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="text-sm font-bold text-gray-900">Sarah Jenkins</p>
                <p className="text-xs text-gray-500">Oct 24 • 8 min read</p>
              </div>
            </div>

            {[...Array(6)].map((_, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chapter {i + 1}: Evolution</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                </p>
              </div>
            ))}

            <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-2xl mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You reached the end!</h3>
              <p className="text-gray-600 mb-6">Look at the navbar progress bar. It should be 100% full now.</p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors"
              >
                Scroll back to top
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (IN GALLERY) =================
  return (
    <div className="relative w-full py-8 mt-4 flex justify-center">
      
      {/* NEW TAB LIVE DEMO BUTTON */}
      <a
        href="#demo-39"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-[30px] right-[50px] px-3 py-1.5 bg-emerald-100 text-emerald-800 text-xs rounded-full font-bold hover:bg-emerald-200 transition-all flex items-center gap-2 border border-emerald-300 z-10 shadow-sm"
      >
        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse"></span>
        Live Demo
        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* 1. NORMAL STATIC VIEW - Removed `overflow-hidden` so mobile menu opens properly */}
      <div className="w-full max-w-[1200px] relative bg-white border border-gray-200 rounded-xl shadow-sm">
        <NavbarShell 
          logo={navLogo} 
          links={navLinks} 
          actions={navActions} 
          className="w-full bg-white rounded-xl" 
          desktopClassName="justify-between px-6 min-h-[70px]" 
          linkClassName="text-[15px] font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap"
          mobileClassName="px-6 text-gray-800" 
        />
        {/* Progress Bar wrapped safely to preserve UI curves without blocking menu */}
        <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden rounded-b-xl pointer-events-none">
          <div className="h-full bg-emerald-500 rounded-r-full" style={{ width: '45%' }}></div>
        </div>
      </div>
    </div>
  );
}