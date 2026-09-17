"use client";
import React, { useState, useEffect } from "react";
import { CreditCard, ArrowRight, CheckCircle2, ShoppingBag, X } from "lucide-react";

const SOCIAL_PROOFS = [
  { name: "Sarah J.", location: "New York, NY", time: "2 mins ago" },
  { name: "Michael T.", location: "London, UK", time: "5 mins ago" },
  { name: "Jessica R.", location: "Austin, TX", time: "just now" },
  { name: "David L.", location: "Sydney, AU", time: "12 mins ago" },
];

export default function PaymentProcess58() {
  const TOTAL_AMOUNT = 89.99;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [currentProofIndex, setCurrentProofIndex] = useState(-1);
  const [showProof, setShowProof] = useState(false);

  // Social Proof Logic
  useEffect(() => {
    if (isSuccess || isProcessing) {
      setShowProof(false);
      return;
    }

    const interval = setInterval(() => {
      // Pick a random proof
      const randIdx = Math.floor(Math.random() * SOCIAL_PROOFS.length);
      setCurrentProofIndex(randIdx);
      setShowProof(true);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setShowProof(false);
      }, 4000);
      
    }, 8000); // Trigger every 8 seconds

    // Initial trigger after 2 seconds
    const initial = setTimeout(() => {
      setCurrentProofIndex(0);
      setShowProof(true);
      setTimeout(() => setShowProof(false), 4000);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, [isSuccess, isProcessing]);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const proof = currentProofIndex >= 0 ? SOCIAL_PROOFS[currentProofIndex] : null;

  return (
    <div className="w-full min-h-[700px] bg-sky-950 flex items-center justify-center font-sans p-6 text-slate-100 overflow-hidden relative">
      
      {/* Social Proof Toast (Bottom Left Fixed) */}
      <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
        showProof && proof ? 'translate-x-0 opacity-100' : '-translate-x-[120%] opacity-0'
      }`}>
        <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-4 pr-10 border border-slate-200 flex items-center gap-4 relative">
          <button type="button" onClick={(e) => {
      const inputs = Array.from(document.querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = () => setShowProof(false);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} className="absolute top-2 right-2 text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
          
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm">
              <span className="font-bold text-slate-900">{proof?.name}</span> from <span className="font-medium text-slate-700">{proof?.location}</span>
            </p>
            <p className="text-xs text-sky-600 font-bold mt-0.5">Purchased this item {proof?.time}</p>
          </div>
        </div>
      </div>

      {!isSuccess ? (
        <div className="max-w-md w-full bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 relative z-10 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-white">Checkout</h2>
          </div>

          <div className="bg-sky-950/40 rounded-2xl p-6 mb-8 border border-sky-900/50 flex flex-col gap-2 relative overflow-hidden">
             
             {/* "High demand" banner inside the summary */}
             <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl z-10">
               High Demand
             </div>

             <div className="flex justify-between items-center relative z-10 mt-2">
               <span className="font-bold text-slate-400">Total</span>
               <span className="text-4xl font-black text-white">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="text-xs text-sky-400 font-medium flex items-center gap-1.5 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                14 people are viewing this right now
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors font-mono tracking-widest text-sm" />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors font-mono tracking-widest text-center text-sm" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors font-mono tracking-widest text-center text-sm" />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-sky-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-sky-500 transition-all shadow-[0_0_20px_rgba(2,132,199,0.3)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Secure Checkout <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-900 rounded-3xl p-12 shadow-2xl border border-slate-800 text-center relative z-10 animate-in zoom-in duration-500">
           
           <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-500" strokeWidth={3} />
           </div>

           <h2 className="text-3xl font-black text-white mb-2">Order Confirmed!</h2>
           <p className="text-slate-400 mb-8 font-medium">You got it just in time.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setShowProof(false); }}
              className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors"
            >
              Back to Store
            </button>
        </div>
      )}

    </div>
  );
}
