"use client";
import React, { useState, useEffect, useRef } from "react";
import { CreditCard, Scan, Maximize, Cpu, ArrowRight } from "lucide-react";

export default function PaymentProcess93() {
  const TOTAL_AMOUNT = 599.99;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  // Calculate rotation based on mouse position (max 15 degrees)
  const rotateY = (mousePos.x - 0.5) * 30; 
  const rotateX = (0.5 - mousePos.y) * 30;

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[700px] bg-black flex items-center justify-center font-mono text-cyan-400 overflow-hidden relative perspective-[1000px]"
    >
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

      {/* Crosshairs & HUD Elements - Fixed to screen */}
      <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between z-0 opacity-50">
        <div className="flex justify-between">
          <div className="w-16 h-16 border-l-2 border-t-2 border-cyan-500"></div>
          <div className="w-16 h-16 border-r-2 border-t-2 border-cyan-500"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-16 h-16 border-l-2 border-b-2 border-cyan-500"></div>
          <div className="w-16 h-16 border-r-2 border-b-2 border-cyan-500"></div>
        </div>
      </div>

      {!isSuccess ? (
        <div 
          className="w-full max-w-lg relative z-10 transition-transform duration-100 ease-out preserve-3d"
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        >
          
          {/* Main Panel */}
          <div className="bg-cyan-950/40 backdrop-blur-md p-8 border border-cyan-500/50 shadow-[0_0_50px_rgba(0,255,255,0.15)] rounded-xl relative before:absolute before:inset-0 before:bg-cyan-500/5 before:animate-pulse">
            
            <div className="flex items-center gap-4 mb-8 border-b border-cyan-500/30 pb-4">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <div>
                <h2 className="text-xl font-bold tracking-[0.2em] uppercase">Auth_Interface</h2>
                <p className="text-xs text-cyan-600 tracking-widest">SYS.VER: 4.9.1</p>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8 bg-black/40 p-4 border border-cyan-900 rounded-lg">
              <span className="text-sm tracking-widest text-cyan-600 uppercase">Credits_Required</span>
              <span className="text-3xl font-black [text-shadow:0_0_10px_#0ff]">${TOTAL_AMOUNT.toFixed(2)}</span>
            </div>

            <form onSubmit={handlePay} className="space-y-6">
              
              <div className="space-y-2 relative group">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <label className="text-xs uppercase tracking-widest text-cyan-600 block mb-2">Target_Ident (Card_No)</label>
                <div className="flex items-center bg-black/50 border border-cyan-800 rounded-lg p-1 group-focus-within:border-cyan-400 group-focus-within:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all">
                  <CreditCard className="w-5 h-5 text-cyan-600 ml-3 mr-2" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                    required 
                    type="text" 
                    placeholder="XXXX-XXXX-XXXX-XXXX" 
                    className="w-full bg-transparent text-cyan-300 px-2 py-3 focus:outline-none tracking-widest placeholder:text-cyan-900" 
                   minLength={16} />
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-1/2 relative group">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                  <label className="text-xs uppercase tracking-widest text-cyan-600 block mb-2">Exp_Cycle</label>
                  <div className="bg-black/50 border border-cyan-800 rounded-lg p-1 group-focus-within:border-cyan-400 group-focus-within:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                      required 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full bg-transparent text-cyan-300 px-4 py-3 focus:outline-none tracking-widest text-center placeholder:text-cyan-900" 
                     minLength={5} />
                  </div>
                </div>
                <div className="w-1/2 relative group">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-cyan-500 opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                  <label className="text-xs uppercase tracking-widest text-cyan-600 block mb-2">Sec_Hash</label>
                  <div className="bg-black/50 border border-cyan-800 rounded-lg p-1 group-focus-within:border-cyan-400 group-focus-within:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                      required 
                      type="text" 
                      placeholder="CVC" 
                      className="w-full bg-transparent text-cyan-300 px-4 py-3 focus:outline-none tracking-widest text-center placeholder:text-cyan-900" 
                     minLength={3} />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full py-4 bg-cyan-500/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#0ff] rounded-lg font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out -z-10"></div>
                  {isProcessing ? (
                    <><Scan className="w-5 h-5 animate-spin" /> Authorizing...</>
                  ) : (
                    <>Initiate_Transfer <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </div>
            </form>

            {/* Floating holographic elements (Z-translation) */}
            <div className="absolute -top-6 -right-6 text-xs text-cyan-500/50 bg-black/80 px-2 py-1 border border-cyan-800/50 rounded translate-z-12">
              X: {mousePos.x.toFixed(2)} Y: {mousePos.y.toFixed(2)}
            </div>
            
          </div>
        </div>
      ) : (
        <div 
          className="w-full max-w-md relative z-10 transition-transform duration-100 ease-out preserve-3d"
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        >
          <div className="bg-cyan-950/40 backdrop-blur-md p-12 text-center border border-cyan-500/50 shadow-[0_0_50px_rgba(0,255,255,0.15)] rounded-xl animate-in zoom-in duration-500">
             <div className="w-24 h-24 bg-cyan-900/50 border border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,255,255,0.4)]">
               <Maximize className="w-10 h-10 text-cyan-400 animate-pulse" />
             </div>
             
             <h2 className="text-3xl font-bold tracking-[0.2em] uppercase mb-2 [text-shadow:0_0_10px_#0ff]">Access_Granted</h2>
             <p className="text-cyan-600 mb-10 tracking-widest text-sm">Transaction logged securely.</p>
             
             <button type="button" 
                onClick={() => setIsSuccess(false)}
                className="w-full py-4 bg-transparent border border-cyan-600 text-cyan-500 hover:bg-cyan-900/50 hover:text-cyan-300 font-bold tracking-widest uppercase rounded-lg transition-colors"
              >
                Close_Session
              </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-\\[1000px\\] {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-12 {
          transform: translateZ(50px);
        }
      `}} />
    </div>
  );
}
