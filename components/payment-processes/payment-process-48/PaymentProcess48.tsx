"use client";
import React, { useState } from "react";
import { CreditCard, Check, Shield, ArrowRight } from "lucide-react";

export default function PaymentProcess48() {
  const [interval, setInterval] = useState<'monthly' | 'annually'>('annually');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const monthlyPrice = 29;
  const annualPrice = 290; // 2 months free equivalent

  const currentPrice = interval === 'monthly' ? monthlyPrice : annualPrice;
  const currentIntervalText = interval === 'monthly' ? '/ month' : '/ year';

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-100 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-200 animate-in fade-in duration-500">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Pro Plan</h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Unlock all premium features</p>
          </div>

          {/* Segmented Control Toggle */}
          <div className="bg-slate-100 p-1 rounded-2xl flex relative mb-8">
            {/* Sliding Background */}
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm transition-all duration-300 ease-out z-0`}
              style={{ left: interval === 'monthly' ? '4px' : 'calc(50%)' }}
            ></div>

            <button 
              type="button"
              onClick={(e) => {
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
      const originalHandler = () => setInterval('monthly');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
              className={`flex-1 py-3 text-sm font-bold z-10 transition-colors ${interval === 'monthly' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Monthly
            </button>
            
            <button 
              type="button"
              onClick={() => setInterval('annually')}
              className={`flex-1 py-3 text-sm font-bold z-10 transition-colors flex items-center justify-center gap-2 ${interval === 'annually' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Annually
              <span className="bg-emerald-100 text-emerald-700 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">Save 17%</span>
            </button>
          </div>

          {/* Pricing Display */}
          <div className="text-center mb-8 bg-indigo-50/50 rounded-2xl py-8 border border-indigo-100">
            <div className="flex items-center justify-center gap-1 font-black text-indigo-900">
              <span className="text-3xl align-top">$</span>
              <span className="text-6xl tracking-tighter">{currentPrice}</span>
            </div>
            <div className="text-indigo-400 font-bold mt-1 tracking-widest uppercase text-sm">
              {currentIntervalText}
            </div>
            
            {interval === 'annually' && (
              <div className="text-xs text-indigo-600 font-bold mt-3 bg-white inline-block px-3 py-1 rounded-full shadow-sm">
                Billed as one payment of $290
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono tracking-widest text-sm" />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-[0_8px_30px_rgba(79,70,229,0.2)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.4)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Subscribe {interval === 'annually' ? 'Annually' : 'Monthly'} <ArrowRight className="w-5 h-5" /></>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 mt-2">
              <Shield className="w-4 h-4 text-emerald-500" /> Secure Checkout
            </div>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-[2.5rem] p-12 shadow-xl border border-slate-200 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <Check className="w-12 h-12 text-indigo-600" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome to Pro</h2>
           <p className="text-slate-500 mb-8 font-medium">Your {interval} subscription is active.</p>
           
           <button type="button" 
              onClick={() => setIsSuccess(false)}
              className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors"
            >
              Go to Dashboard
            </button>
        </div>
      )}

    </div>
  );
}
