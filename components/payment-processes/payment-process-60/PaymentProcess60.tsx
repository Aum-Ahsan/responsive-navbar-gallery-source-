"use client";
import React, { useState, useEffect } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Trophy } from "lucide-react";

export default function PaymentProcess60() {
  const TOTAL_AMOUNT = 120.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);

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
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Trigger achievement after a slight delay
      setTimeout(() => {
        setShowAchievement(true);
      }, 1000);
      
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center font-sans p-6 text-slate-800 overflow-hidden relative">
      
      {/* Xbox-style Achievement Popup */}
      <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
        showAchievement ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}>
        <div className="bg-slate-900 text-white rounded-full p-2 pr-8 shadow-2xl flex items-center gap-4 border-2 border-emerald-500/50">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            <Trophy className="w-6 h-6 text-white drop-shadow-md relative z-10" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">Achievement Unlocked</p>
            <p className="text-sm font-bold flex items-center gap-2">
              First Purchase <span className="flex items-center gap-0.5 text-emerald-400"><span className="w-3 h-3 rounded-full border border-emerald-400 flex items-center justify-center text-[8px]">G</span> 100</span>
            </p>
          </div>
        </div>
      </div>

      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative z-10 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Checkout</h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 flex justify-between items-center">
             <span className="font-bold text-slate-500">Total</span>
             <span className="text-4xl font-black text-slate-900">${TOTAL_AMOUNT.toFixed(2)}</span>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
            </div>

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-slate-900 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay ${TOTAL_AMOUNT.toFixed(2)} <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 shadow-xl border border-slate-200 text-center relative z-10 animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed</h2>
           <p className="text-slate-500 mb-8 font-medium">Thank you for your purchase.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setShowAchievement(false); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
