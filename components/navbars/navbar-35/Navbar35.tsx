// with demo button // 

// import { useState, useEffect } from "react";
// import { NavbarShell, Pill } from "../shared/NavbarShell";

// export default function Navbar35() {
//   const [showDemo, setShowDemo] = useState(false);
  
//   // Web3 Specific State for Demo
//   const [isWalletConnected, setIsWalletConnected] = useState(false);

//   // Disable scroll when demo is open
//   useEffect(() => {
//     if (showDemo) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [showDemo]);

//   const navLogo = (
//     <div className="flex items-center gap-2 shrink-0">
//       {/* Crypto Coin style logo */}
//       <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.5)]">
//         <span className="text-black font-extrabold text-lg">C</span>
//       </div>
//       <span className="text-[22px] font-bold tracking-tight text-white">CoinEdge</span>
//     </div>
//   );

//   const navLinks = [
//     { label: "Markets" },
//     { label: "Trade" },
//     { label: "Earn" },
//     { label: "NFTs" }
//   ];

//   const navActions = (
//     <div className="flex items-center gap-4 shrink-0">
//       {/* Web3 Network Selector (e.g., Ethereum) */}
//       <div className="hidden sm:flex items-center gap-2 bg-[#1a1b1f] border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-full cursor-pointer transition-colors">
//         <div className="w-5 h-5 bg-[#627eea] rounded-full flex items-center justify-center">
//           {/* Ethereum Diamond Symbol */}
//           <span className="text-white text-xs">⟠</span>
//         </div>
//         <span className="text-sm font-medium text-gray-200">Ethereum</span>
//       </div>

//       {/* Connect Wallet Button (Changes when connected) */}
//       {isWalletConnected ? (
//         <Pill className="border border-green-500/50 bg-green-500/10 text-green-400 font-bold px-5 whitespace-nowrap">
//           0x4F...a8B2
//         </Pill>
//       ) : (
//         <button 
//           onClick={() => setIsWalletConnected(true)}
//           className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all whitespace-nowrap"
//         >
//           Connect Wallet
//         </button>
//       )}
//     </div>
//   );

//   return (
//     <div className="relative w-full py-4 mt-4">
      
//       {/* LIVE DEMO BUTTON (Placed relative to the title) */}
//       <button
//         onClick={() => {
//           setShowDemo(true);
//           setIsWalletConnected(false); // Reset state when opening demo
//         }}
//         className="absolute -top-[50px] right-[150px] px-3 py-1.5 bg-yellow-500 text-black text-xs rounded-full font-bold hover:bg-yellow-400 transition-all flex items-center gap-2 shadow-md z-10"
//       >
//         <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
//         Live Demo
//       </button>

//       {/* 1. NORMAL STATIC VIEW */}
//       <NavbarShell 
//         logo={navLogo} 
//         links={navLinks} 
//         actions={navActions} 
//         className="max-w-[1200px] mx-auto bg-[#0d0e12] border border-gray-800 rounded-2xl shadow-xl" 
//         desktopClassName="justify-between px-6 min-h-[72px]" 
//         linkClassName="text-[15px] font-medium text-gray-400 hover:text-white transition-colors whitespace-nowrap"
//         mobileClassName="px-6 text-white" 
//       />

//       {/* 2. LIVE DEMO POPUP VIEW (Web3 Dashboard simulation) */}
//       {showDemo && (
//         <div className="fixed inset-0 z-[9999] bg-[#0b0c10] flex flex-col">
          
//           <button 
//             onClick={() => setShowDemo(false)}
//             className="fixed top-4 right-6 z-[99999] bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:text-white hover:border-gray-500"
//           >
//             Close X
//           </button>

//           {/* Dummy Web3 dApp Page */}
//           <div className="w-full h-full overflow-y-auto relative no-scrollbar pt-6">
            
//             {/* The Navbar in Demo */}
//             <div className="w-full flex justify-center z-50 px-4">
//               <NavbarShell
//                 logo={navLogo}
//                 links={navLinks}
//                 actions={navActions}
//                 className="w-full max-w-[1200px] rounded-2xl border border-gray-800 bg-[#0d0e12]/90 backdrop-blur-md shadow-2xl"
//                 desktopClassName="justify-between px-6 min-h-[72px]"
//                 linkClassName="text-[15px] font-medium text-gray-400 hover:text-white transition-colors whitespace-nowrap"
//                 mobileClassName="px-6 text-white"
//               />
//             </div>

//             {/* Web3 Dummy Content to make it feel real */}
//             <div className="max-w-[1200px] mx-auto mt-12 px-4 pb-20">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
//                 <div className="md:col-span-2 h-[400px] rounded-2xl bg-[#121318] border border-gray-800 p-8 flex flex-col items-center justify-center text-center">
//                   <h1 className="text-4xl font-extrabold text-white mb-4">Trade Crypto Seamlessly</h1>
//                   <p className="text-gray-400 mb-8 max-w-md">Connect your wallet to start trading Ethereum, Bitcoin, and 100+ other assets with low fees.</p>
                  
//                   {/* Sync the button on page with navbar state */}
//                   {!isWalletConnected && (
//                     <button 
//                       onClick={() => setIsWalletConnected(true)}
//                       className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform"
//                     >
//                       Connect to Start
//                     </button>
//                   )}
//                 </div>

//                 <div className="h-[400px] rounded-2xl bg-[#121318] border border-gray-800 p-6 flex flex-col justify-between">
//                   <h3 className="text-white font-semibold">Your Portfolio</h3>
//                   {isWalletConnected ? (
//                     <div className="flex flex-col items-center justify-center h-full">
//                       <span className="text-5xl font-bold text-white">$14,204.50</span>
//                       <span className="text-green-400 mt-2">+2.4% (24h)</span>
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
//                       <span className="mb-4">Wallet not connected</span>
//                     </div>
//                   )}
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
import { useState, useEffect } from "react";
import { NavbarShell, Pill } from "../shared/NavbarShell";

export default function Navbar35() {
  const [showDemo, setShowDemo] = useState(false);
  
  // Web3 Specific State for Demo
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Disable scroll when demo is open
  useEffect(() => {
    if (showDemo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [showDemo]);

  const navLogo = (
    <div className="flex items-center gap-2 shrink-0">
      {/* Crypto Coin style logo */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.5)]">
        <span className="text-black font-extrabold text-lg">C</span>
      </div>
      <span className="text-[22px] font-bold tracking-tight text-white">CoinEdge</span>
    </div>
  );

  const navLinks = [
    { label: "Markets" },
    { label: "Trade" },
    { label: "Earn" },
    { label: "NFTs" }
  ];

  const navActions = (
    <div className="flex items-center gap-4 shrink-0">
      {/* Web3 Network Selector (e.g., Ethereum) */}
      <div className="hidden sm:flex items-center gap-2 bg-[#1a1b1f] border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-full cursor-pointer transition-colors">
        <div className="w-5 h-5 bg-[#627eea] rounded-full flex items-center justify-center">
          {/* Ethereum Diamond Symbol */}
          <span className="text-white text-xs">⟠</span>
        </div>
        <span className="text-sm font-medium text-gray-200">Ethereum</span>
      </div>

      {/* Connect Wallet Button (Changes when connected) */}
      {isWalletConnected ? (
        <Pill className="border border-green-500/50 bg-green-500/10 text-green-400 font-bold px-5 whitespace-nowrap">
          0x4F...a8B2
        </Pill>
      ) : (
        <button 
          onClick={() => setIsWalletConnected(true)}
          className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all whitespace-nowrap"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );

  return (
    <div className="relative w-full py-4 mt-4">

      {/* 1. NORMAL STATIC VIEW */}
      <NavbarShell 
        logo={navLogo} 
        links={navLinks} 
        actions={navActions} 
        className="max-w-[1200px] mx-auto bg-[#0d0e12] border border-gray-800 rounded-2xl shadow-xl" 
        desktopClassName="justify-between px-6 min-h-[72px]" 
        linkClassName="text-[15px] font-medium text-gray-400 hover:text-white transition-colors whitespace-nowrap"
        mobileClassName="px-6 text-white" 
      />

      {/* 2. LIVE DEMO POPUP VIEW (Web3 Dashboard simulation) */}
      {showDemo && (
        <div className="fixed inset-0 z-[9999] bg-[#0b0c10] flex flex-col">
          
          <button 
            onClick={() => setShowDemo(false)}
            className="fixed top-4 right-6 z-[99999] bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:text-white hover:border-gray-500"
          >
            Close X
          </button>

          {/* Dummy Web3 dApp Page */}
          <div className="w-full h-full overflow-y-auto relative no-scrollbar pt-6">
            
            {/* The Navbar in Demo */}
            <div className="w-full flex justify-center z-50 px-4">
              <NavbarShell
                logo={navLogo}
                links={navLinks}
                actions={navActions}
                className="w-full max-w-[1200px] rounded-2xl border border-gray-800 bg-[#0d0e12]/90 backdrop-blur-md shadow-2xl"
                desktopClassName="justify-between px-6 min-h-[72px]"
                linkClassName="text-[15px] font-medium text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                mobileClassName="px-6 text-white"
              />
            </div>

            {/* Web3 Dummy Content to make it feel real */}
            <div className="max-w-[1200px] mx-auto mt-12 px-4 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="md:col-span-2 h-[400px] rounded-2xl bg-[#121318] border border-gray-800 p-8 flex flex-col items-center justify-center text-center">
                  <h1 className="text-4xl font-extrabold text-white mb-4">Trade Crypto Seamlessly</h1>
                  <p className="text-gray-400 mb-8 max-w-md">Connect your wallet to start trading Ethereum, Bitcoin, and 100+ other assets with low fees.</p>
                  
                  {/* Sync the button on page with navbar state */}
                  {!isWalletConnected && (
                    <button 
                      onClick={() => setIsWalletConnected(true)}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform"
                    >
                      Connect to Start
                    </button>
                  )}
                </div>

                <div className="h-[400px] rounded-2xl bg-[#121318] border border-gray-800 p-6 flex flex-col justify-between">
                  <h3 className="text-white font-semibold">Your Portfolio</h3>
                  {isWalletConnected ? (
                    <div className="flex flex-col items-center justify-center h-full">
                      <span className="text-5xl font-bold text-white">$14,204.50</span>
                      <span className="text-green-400 mt-2">+2.4% (24h)</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
                      <span className="mb-4">Wallet not connected</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}