"use client";
import React, { useState, useRef, useEffect } from "react";
import { CreditCard, Lock, CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";

export default function PaymentProcess13() {
  const [isHolding, setIsHolding] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const HOLD_DURATION = 1500; // 1.5 seconds

  const startHold = (e: React.PointerEvent | React.TouchEvent) => {
    if (isProcessing || isSuccess) return;
    setIsHolding(true);
    
    // Clear any existing timeout just in case
    if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
    
    holdTimeoutRef.current = setTimeout(() => {
      // Payment confirmed
      setIsHolding(false);
      processPayment();
    }, HOLD_DURATION);
  };

  const endHold = () => {
    if (isProcessing || isSuccess) return;
    setIsHolding(false);
    
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
    }
  };

  const processPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100 selection:bg-fuchsia-500/30">
      
      <div className="w-full max-w-lg bg-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-700 relative overflow-hidden">
        
        {/* Background ambient glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full">
          
          <header className="flex justify-between items-center mb-12">
            <h1 className="font-bold tracking-wider text-slate-300 uppercase text-sm">Checkout</h1>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              <span className="w-8 h-2 rounded-full bg-fuchsia-500"></span>
            </div>
          </header>

          <div className="flex-1">
            <div className="mb-10 text-center">
              <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-fuchsia-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-2">Digital Subscription</h2>
              <p className="text-slate-400">Annual Pro Plan</p>
              
              <div className="text-5xl md:text-6xl font-black mt-8 text-white tracking-tighter">
                $199<span className="text-2xl text-slate-500 font-medium">.00</span>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-4 flex justify-between items-center border border-slate-700/50 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <div className="font-medium text-slate-200 text-sm">Mastercard</div>
                  <div className="text-xs text-slate-500 font-mono">•••• 8439</div>
                </div>
              </div>
              <button type="button" className="text-sm font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition-colors">Edit</button>
            </div>
          </div>

          <div className="mt-auto">
            {!isSuccess ? (
              <div className="relative flex justify-center">
                
                {/* Hold to Confirm Button */}
                <button type="button"
                  onPointerDown={startHold}
                  onPointerUp={endHold}
                  onPointerLeave={endHold}
                  onPointerCancel={endHold}
                  // Touch events for better mobile support
                  onTouchStart={startHold}
                  onTouchEnd={endHold}
                  onTouchCancel={endHold}
                  disabled={isProcessing}
                  className={`w-40 h-40 rounded-full relative flex flex-col items-center justify-center transition-all duration-300 ${
                    isHolding ? 'scale-95 shadow-[0_0_40px_rgba(217,70,239,0.5)]' : 'scale-100 shadow-xl shadow-black/50'
                  } ${isProcessing ? 'bg-slate-700 cursor-not-allowed' : 'bg-slate-800 border-2 border-slate-600 hover:border-slate-500 select-none'}`}
                >
                  
                  {/* Progress Ring */}
                  {!isProcessing && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                      <circle 
                        cx="80" 
                        cy="80" 
                        r="76" 
                        fill="none" 
                        stroke="rgba(217, 70, 239, 0.2)" 
                        strokeWidth="8" 
                      />
                      <circle 
                        cx="80" 
                        cy="80" 
                        r="76" 
                        fill="none" 
                        stroke="#d946ef" // fuchsia-500
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="477.5" // 2 * pi * 76
                        strokeDashoffset={isHolding ? "0" : "477.5"}
                        className="transition-all ease-linear"
                        style={{ transitionDuration: isHolding ? `${HOLD_DURATION}ms` : '300ms' }}
                      />
                    </svg>
                  )}

                  {isProcessing ? (
                    <div className="flex flex-col items-center text-slate-400">
                      <div className="w-8 h-8 border-4 border-slate-500 border-t-fuchsia-500 rounded-full animate-spin mb-2"></div>
                      <span className="text-sm font-semibold">Processing...</span>
                    </div>
                  ) : (
                    <>
                      <Lock className={`w-8 h-8 mb-2 transition-colors ${isHolding ? 'text-fuchsia-400' : 'text-slate-400'}`} />
                      <span className={`text-sm font-bold tracking-wider transition-colors ${isHolding ? 'text-fuchsia-400' : 'text-slate-400'}`}>
                        HOLD
                      </span>
                    </>
                  )}
                </button>
                
                {/* Instruction Text */}
                <div className={`absolute -bottom-8 text-center w-full text-xs font-medium tracking-wide transition-opacity duration-300 ${isHolding ? 'opacity-100 text-fuchsia-400' : 'opacity-50 text-slate-400'}`}>
                  {isHolding ? 'Keep holding...' : 'Press and hold to confirm'}
                </div>
              </div>
            ) : (
              <div className="text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Payment Successful</h3>
                <p className="text-slate-400 mb-8">Your subscription is now active.</p>
                <button type="button" 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-full transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
