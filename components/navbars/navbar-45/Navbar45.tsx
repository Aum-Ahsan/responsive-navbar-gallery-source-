// with demo button //

// import React, { useState, useEffect } from "react";
// import { NavbarShell } from "../shared/NavbarShell";

// export default function Navbar45() {
//   const [showDemo, setShowDemo] = useState<boolean>(false);
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   // 1. Logo & Version Selector (Developer Style)
//   const navLogo = (
//     <div className="flex items-center gap-3 shrink-0 cursor-pointer">
//       <div className="flex items-center gap-2 text-slate-900 dark:text-white transition-colors">
//         <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//         </svg>
//         <span className="text-xl font-bold tracking-tight hidden sm:block">DevStream</span>
//       </div>
//       {/* Version Tag */}
//       <span className="hidden md:flex items-center bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-500/30">
//         v3.2.0
//       </span>
//     </div>
//   );

//   // 2. Leave links empty to avoid TypeScript / SSR error
//   const navLinks: any[] = [];

//   // 3. Actions (Contains Links + Search + Theme Toggle + GitHub)
//   const navActions = (
//     <div className="flex items-center justify-end md:justify-between w-full">
      
//       {/* THE DOCS LINKS - Placed on the left side of Actions (next to logo on desktop) */}
//       <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-auto pl-4 lg:pl-8">
//         {[
//           { label: "Documentation", active: true },
//           { label: "Components", active: false },
//           { label: "Blog", active: false },
//           { label: "Showcase", active: false },
//         ].map((link, idx) => (
//           <a
//             key={idx}
//             href="#"
//             className={`text-sm font-semibold transition-colors
//               ${link.active 
//                 ? "text-sky-600 dark:text-sky-400" 
//                 : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"}`}
//           >
//             {link.label}
//           </a>
//         ))}
//       </div>

//       {/* RIGHT SIDE UTILITIES */}
//       <div className="flex items-center gap-3 lg:gap-5 shrink-0">
        
//         {/* Search Bar (Command Palette Style) */}
//         <button className="hidden lg:flex items-center gap-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-lg transition-colors border border-slate-200 dark:border-slate-700/50 w-64 justify-between group">
//           <div className="flex items-center gap-2">
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <span className="text-sm">Search docs...</span>
//           </div>
//           <div className="flex items-center gap-1 font-sans text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors">
//             <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm">Ctrl</kbd>
//             <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm">K</kbd>
//           </div>
//         </button>

//         {/* Mobile Search Icon */}
//         <button className="lg:hidden p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
//           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//         </button>

//         {/* Divider */}
//         <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>

//         {/* Theme Toggle */}
//         <button 
//           onClick={() => setIsDarkMode(!isDarkMode)}
//           className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1"
//         >
//           {isDarkMode ? (
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
//           ) : (
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
//           )}
//         </button>

//         {/* GitHub Icon */}
//         <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1">
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//           </svg>
//         </a>

//       </div>
//     </div>
//   );

//   return (
//     <div className={`relative w-full py-8 mt-4 flex justify-center transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      
//       {/* LIVE DEMO BUTTON */}
//       <button
//         onClick={() => setShowDemo(true)}
//         className="absolute -top-[30px] right-[50px] px-3 py-1.5 bg-sky-100 text-sky-700 text-xs rounded-full font-bold hover:bg-sky-200 transition-all flex items-center gap-2 border border-sky-300 z-10 shadow-sm"
//       >
//         <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-pulse"></span>
//         Docs View
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       <div className="w-full max-w-[1400px]">
//         <NavbarShell 
//           logo={navLogo} 
//           links={navLinks} 
//           actions={navActions} 
//           className={`w-full border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'} backdrop-blur-md shadow-sm`} 
//           desktopClassName="justify-between px-6 lg:px-12 min-h-[64px]" 
//           linkClassName="hidden"
//           mobileClassName="px-4" 
//         />
//       </div>

//       {/* 2. LIVE DEMO POPUP VIEW */}
//       {showDemo && (
//         <div className={`fixed inset-0 z-[9999] flex flex-col font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-white text-slate-900'}`}>
          
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-24 right-8 z-[99999] bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-sky-700 transition-all"
//           >
//             Close X
//           </button>

//           <div className="w-full h-full flex flex-col relative">
            
//             <div className={`sticky top-0 w-full z-50 border-b backdrop-blur-xl transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full max-w-[1400px] mx-auto bg-transparent"
//                 desktopClassName="justify-between px-6 lg:px-12 min-h-[64px]"
//                 linkClassName="hidden"
//                 mobileClassName="px-4"
//               />
//             </div>

//             {/* DUMMY CONTENT */}
//             <div className="flex-1 max-w-[1400px] mx-auto w-full flex overflow-hidden">
              
//               <div className={`hidden md:block w-64 shrink-0 h-full overflow-y-auto border-r p-6 transition-colors duration-300 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
//                 <div className="mb-8">
//                   <h4 className={`text-sm font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Getting Started</h4>
//                   <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
//                     <li className="text-sky-500 font-semibold cursor-pointer">Installation</li>
//                     <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Editor Setup</li>
//                     <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer">CLI Guide</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className={`text-sm font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Core Concepts</h4>
//                   <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
//                     <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Utility-First</li>
//                     <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Responsive Design</li>
//                     <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Hover & Focus</li>
//                     <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Dark Mode</li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="flex-1 p-6 lg:p-12 overflow-y-auto no-scrollbar">
//                 <div className="max-w-3xl">
//                   <p className="text-sky-500 font-semibold mb-2">Getting Started</p>
//                   <h1 className={`text-4xl font-extrabold tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
//                     Installation
//                   </h1>
//                   <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
//                     The simplest and fastest way to get up and running with DevStream is to use the CLI. It automatically configures your project.
//                   </p>
                  
//                   <div className={`rounded-xl p-4 mb-8 font-mono text-sm overflow-x-auto ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-900 text-slate-300'}`}>
//                     <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2 text-slate-400">
//                       <span>Terminal</span>
//                       <svg className="w-4 h-4 ml-auto cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
//                     </div>
//                     <p><span className="text-pink-400">npm</span> install devstream-ui</p>
//                     <p><span className="text-pink-400">npx</span> devstream init</p>
//                   </div>

//                   <h2 className={`text-2xl font-bold tracking-tight mb-4 mt-12 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
//                     Next Steps
//                   </h2>
//                   <p className={`mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
//                     Once installed, you can start building components immediately. Try searching for a component using the <kbd className={`px-1.5 py-0.5 rounded text-xs ${isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>Ctrl</kbd> + <kbd className={`px-1.5 py-0.5 rounded text-xs ${isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>K</kbd> palette above.
//                   </p>
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

import React, { useState } from "react";
import { NavbarShell } from "../shared/NavbarShell";

export default function Navbar45() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // 1. Logo & Version Selector (Developer Style)
  const navLogo = (
    <div className="flex items-center gap-3 shrink-0 cursor-pointer">
      <div className="flex items-center gap-2 text-slate-900 dark:text-white transition-colors">
        <svg className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <span className="text-xl font-bold tracking-tight hidden sm:block">DevStream</span>
      </div>
      {/* Version Tag */}
      <span className="hidden md:flex items-center bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-500/30">
        v3.2.0
      </span>
    </div>
  );

  // 2. Leave links empty to avoid TypeScript / SSR error
  const navLinks: any[] = [];

  // 3. Actions (Contains Links + Search + Theme Toggle + GitHub)
  const navActions = (
    <div className="flex items-center justify-end md:justify-between w-full">
      
      {/* THE DOCS LINKS - Placed on the left side of Actions (next to logo on desktop) */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-auto pl-4 lg:pl-8">
        {[
          { label: "Documentation", active: true },
          { label: "Components", active: false },
          { label: "Blog", active: false },
          { label: "Showcase", active: false },
        ].map((link, idx) => (
          <a
            key={idx}
            href="#"
            className={`text-sm font-semibold transition-colors
              ${link.active 
                ? "text-sky-600 dark:text-sky-400" 
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* RIGHT SIDE UTILITIES */}
      <div className="flex items-center gap-3 lg:gap-5 shrink-0">
        
        {/* Search Bar (Command Palette Style) */}
        <button className="hidden lg:flex items-center gap-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-lg transition-colors border border-slate-200 dark:border-slate-700/50 w-64 justify-between group">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm">Search docs...</span>
          </div>
          <div className="flex items-center gap-1 font-sans text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors">
            <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm">Ctrl</kbd>
            <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm">K</kbd>
          </div>
        </button>

        {/* Mobile Search Icon */}
        <button className="lg:hidden p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>

        {/* Theme Toggle */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
          )}
        </button>

        {/* GitHub Icon */}
        <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

      </div>
    </div>
  );

  return (
    <div className={`relative w-full py-8 mt-4 flex justify-center transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      
      {/* 1. NORMAL STATIC VIEW */}
      <div className="w-full max-w-[1400px]">
        <NavbarShell 
          logo={navLogo} 
          links={navLinks} 
          actions={navActions} 
          className={`w-full border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'} backdrop-blur-md shadow-sm`} 
          desktopClassName="justify-between px-6 lg:px-12 min-h-[64px]" 
          linkClassName="hidden"
          mobileClassName="px-4" 
        />
      </div>

    </div>
  );
}