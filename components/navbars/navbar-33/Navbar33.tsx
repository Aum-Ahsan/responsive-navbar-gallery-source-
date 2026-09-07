// import React, { useState, useEffect } from "react";
// import { NavbarShell, Pill } from "../shared/NavbarShell";
// import { Menu, X } from "lucide-react"; // lucide-react illati normal SVG use pannunga

// export default function Navbar33() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Menu open-la irukkum pothu scroll-ah stop panna
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isOpen]);

//   const navLinks = [
//     { label: "Works", count: "01" },
//     { label: "Services", count: "02" },
//     { label: "About", count: "03" },
//     { label: "Contact", count: "04" },
//   ];

//   return (
//     <>
//       <NavbarShell
//         // Dark theme-kaga black background add panrom
//         className="bg-black text-white border-b border-white/10"
//         logo={
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-[#5d3cf2] rounded-full flex items-center justify-center text-white font-bold text-xl">
//               O
//             </div>
//             <span className="text-xl font-bold tracking-widest text-white">OVERLAY</span>
//           </div>
//         }
//         links={[]} // Desktop links empty-ah vaikuren, overlay menu thaan focus
//         actions={
//           <div className="flex items-center gap-6">
//             <button 
//               onClick={() => setIsOpen(!isOpen)}
//               className="z-[100] p-2 text-white hover:text-[#5d3cf2] transition-colors"
//             >
//               {isOpen ? <X size={32} /> : <Menu size={32} />}
//             </button>
//             <Pill filled className="hidden md:flex bg-white text-black border-0 font-medium">
//               Let's Talk
//             </Pill>
//           </div>
//         }
//         desktopClassName="max-w-[1400px] justify-between"
//       />

//       {/* Full-Screen Overlay Menu */}
//       <div
//         className={`fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="container mx-auto px-6 flex flex-col items-center">
//           <nav className="flex flex-col gap-4 text-center">
//             {navLinks.map((link, index) => (
//               <div key={index} className="overflow-hidden group">
//                 <a
//                   href="#"
//                   onClick={() => setIsOpen(false)}
//                   className={`flex items-start gap-4 text-5xl md:text-8xl font-bold text-white/40 hover:text-white transition-all duration-300 ${
//                     isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//                   }`}
//                   style={{ transitionDelay: `${index * 100}ms` }}
//                 >
//                   <span className="text-sm md:text-xl mt-4 font-mono text-[#5d3cf2]">
//                     {link.count}
//                   </span>
//                   {link.label}
//                 </a>
//               </div>
//             ))}
//           </nav>

//           {/* Bottom Info inside Overlay */}
//           <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-10 w-full max-w-4xl transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}>
//             <div>
//               <p className="text-gray-500 text-sm mb-2 font-mono">SOCIAL</p>
//               <div className="flex flex-col gap-1 text-white">
//                 <a href="#" className="hover:text-[#5d3cf2]">Instagram</a>
//                 <a href="#" className="hover:text-[#5d3cf2]">LinkedIn</a>
//               </div>
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm mb-2 font-mono">CONTACT</p>
//               <p className="text-white">hello@overlay.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import { NavbarShell, Pill } from "../shared/NavbarShell";
import { Menu, X } from "lucide-react";

export default function Navbar33() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Approach", href: "#" },
    { label: "Company", href: "#" },
    { label: "Ideas", href: "#" },
    { label: "Careers", href: "#" },
  ];

  return (
    <>
      <NavbarShell
        // Screenshot-la irukkira mathiri black background
        className="bg-black text-white py-4"
        logo={
          <div className="flex items-center">
            {/* Huge Logo Style (Pink Color) */}
            <span className="text-[32px] font-bold tracking-tighter text-[#ed008c]">
              Huge
            </span>
          </div>
        }
        // Desktop links (Screenshot-la irukkira maathiriye)
        links={navLinks.map((link) => ({
          label: link.label,
          href: link.href,
        }))}
        actions={
          <div className="flex items-center gap-4">
            {/* Let's Talk Pill Button */}
            <Pill className="hidden md:flex bg-white text-black border-0 font-bold px-6 py-2 hover:bg-gray-200 transition-all">
              Let's talk
            </Pill>
            
            {/* Hamburger for Overlay - Mobile-la mattum illama click panna overlay vara */}
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 hover:text-[#ed008c] transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        }
        desktopClassName="max-w-[1400px] justify-between"
        linkClassName="text-[15px] font-medium text-white/90 hover:text-white transition-colors mx-2"
      />

      {/* --- Full-Screen Overlay Menu --- */}
      <div
        className={`fixed inset-0 bg-black z-[100] flex flex-col transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Close Button Inside Overlay */}
        <div className="flex justify-end p-8">
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#ed008c]">
            <X size={40} />
          </button>
        </div>

        {/* Overlay Navigation Links */}
        <nav className="flex flex-col items-start px-12 md:px-24 justify-center flex-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-5xl md:text-8xl font-bold text-white hover:text-[#ed008c] mb-4 transition-all duration-300 transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          
          {/* Social Links at Bottom of Overlay */}
          <div className="mt-12 flex gap-6 text-gray-400 font-medium">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </nav>
      </div>
    </>
  );
}