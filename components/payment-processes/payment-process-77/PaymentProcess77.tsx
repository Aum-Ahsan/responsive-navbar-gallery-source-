"use client";
import React, { useState } from "react";
import { CreditCard, Heart, Sparkles, Star } from "lucide-react";

export default function PaymentProcess77() {
  const TOTAL_AMOUNT = 45.00;
  
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
    <div className="w-full min-h-[700px] bg-pink-50 flex items-center justify-center font-sans p-6 text-slate-700">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-[3rem] p-8 shadow-[0_10px_40px_rgba(244,114,182,0.15)] border-4 border-pink-100 relative z-10 animate-in fade-in duration-500 hover:scale-[1.01] transition-transform">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-pink-400 flex items-center gap-2">
              <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" /> Checkout
            </h2>
          </div>

          <div className="bg-blue-50 rounded-[2rem] p-6 mb-8 border-4 border-blue-100 relative overflow-hidden">
             <div className="absolute -top-4 -right-4 text-6xl opacity-10">🌸</div>
             
             <div className="flex justify-between items-center text-sm mb-3">
               <span className="font-bold text-blue-400">Items</span>
               <span className="font-bold text-slate-600">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="flex justify-between items-end pt-3 border-t-4 border-dashed border-blue-200">
               <span className="font-black text-blue-400 text-lg">Total</span>
               <span className="text-3xl font-black text-slate-700">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="space-y-2">
              <label className="text-xs font-black text-pink-300 uppercase tracking-widest pl-4">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-300" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                  required 
                  type="text" 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full bg-white border-4 border-pink-100 rounded-full pl-14 pr-5 py-4 text-slate-600 focus:outline-none focus:border-pink-300 transition-colors font-bold text-sm placeholder:text-pink-200 shadow-sm" 
                 minLength={16} />
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 space-y-2">
                <label className="text-xs font-black text-purple-300 uppercase tracking-widest pl-4">Expiry</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                  required 
                  type="text" 
                  placeholder="MM/YY" 
                  className="w-full bg-white border-4 border-purple-100 rounded-full px-5 py-4 text-slate-600 focus:outline-none focus:border-purple-300 transition-colors font-bold text-center text-sm placeholder:text-purple-200 shadow-sm" 
                 minLength={5} />
              </div>
              <div className="w-1/2 space-y-2">
                <label className="text-xs font-black text-green-300 uppercase tracking-widest pl-4">CVC</label>
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
                  required 
                  type="text" 
                  placeholder="000" 
                  className="w-full bg-white border-4 border-green-100 rounded-full px-5 py-4 text-slate-600 focus:outline-none focus:border-green-300 transition-colors font-bold text-center text-sm placeholder:text-green-200 shadow-sm"  minLength={2} maxLength={50} />
              </div>
            </div>

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-6 bg-pink-400 text-white rounded-full font-black text-xl flex items-center justify-center gap-2 hover:bg-pink-500 transition-all shadow-[0_8px_0_rgba(244,114,182,0.6)] active:translate-y-[8px] active:shadow-none disabled:opacity-50 disabled:shadow-none disabled:translate-y-0"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/50 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay ${TOTAL_AMOUNT.toFixed(2)} <Heart className="w-6 h-6 fill-white" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-sm w-full bg-white rounded-[3rem] p-12 text-center border-4 border-green-100 shadow-[0_10px_40px_rgba(74,222,128,0.15)] animate-in zoom-in duration-500">
           
           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
             <Sparkles className="w-12 h-12 text-green-400 absolute -top-2 -right-2" />
             <div className="text-5xl">✨</div>
           </div>

           <h2 className="text-3xl font-black text-green-400 mb-2">Yay!</h2>
           <p className="text-slate-500 font-bold mb-8">Your order is confirmed.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-4 bg-green-400 text-white rounded-full font-black text-xl transition-all shadow-[0_6px_0_rgba(74,222,128,0.6)] active:translate-y-[6px] active:shadow-none hover:bg-green-500"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
