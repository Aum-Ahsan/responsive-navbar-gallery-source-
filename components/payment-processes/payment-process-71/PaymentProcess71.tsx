"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";

export default function PaymentProcess71() {
  const TOTAL_AMOUNT = 149.99;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const container = e.currentTarget.closest('.w-full') || document;
    const inputs = Array.from(container.querySelectorAll('input')).filter((i: any) => i.offsetParent !== null);
    let isValid = true;
    for (const input of inputs) {
      if (!input.value.trim() && input.hasAttribute('required')) {
        alert("Please fill all columns");
        input.focus();
        isValid = false;
        break;
      }
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
        break;
      }
    }
    if (!isValid) return;

    setIsProcessing(true);
    setServerError(null);
    setTimeout(() => {
      // Simulate server-side validation rejection
      if (Math.random() < 0.3) {
        setServerError("Payment declined by the server. Please check your details and try again.");
        setIsProcessing(false);
        return;
      }
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100 overflow-hidden relative">
      
      {/* Background Animated Orbs (The Key to Glassmorphism) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/50 mix-blend-screen blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/40 mix-blend-screen blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-pink-500/40 mix-blend-screen blur-[120px] animate-[pulse_12s_ease-in-out_infinite]"></div>
      </div>

      {!isSuccess ? (
        // Glassy Container
        <div className="max-w-md w-full bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 relative z-10 animate-in fade-in duration-700">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black text-white tracking-tight drop-shadow-sm">Checkout</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/10 shadow-inner">
             <div className="flex justify-between items-center text-sm mb-4">
               <span className="font-medium text-white/70">Subtotal</span>
               <span className="font-bold text-white">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="flex justify-between items-end pt-4 border-t border-white/10">
               <span className="font-bold text-white/70">Total</span>
               <span className="text-4xl font-black text-white drop-shadow-md">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="relative group">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-white transition-colors" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                required 
                type="text" 
                placeholder="Card Number" 
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-mono tracking-widest text-sm shadow-inner" 
               minLength={16} />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                required 
                type="text" 
                placeholder="MM/YY" 
                className="w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-mono tracking-widest text-center text-sm shadow-inner" 
               minLength={5} />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                required 
                type="text" 
                placeholder="CVV" 
                className="w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-mono tracking-widest text-center text-sm shadow-inner" 
               minLength={3} />
            </div>

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 text-center relative z-10 animate-in zoom-in duration-500">
           
           <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-inner">
             <CheckCircle2 className="w-12 h-12 text-white drop-shadow-md" strokeWidth={2} />
           </div>

           <h2 className="text-3xl font-black text-white mb-2 drop-shadow-md">Payment Successful</h2>
           <p className="text-white/70 mb-8 font-medium">Your receipt has been sent to your email.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl transition-all shadow-lg"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
