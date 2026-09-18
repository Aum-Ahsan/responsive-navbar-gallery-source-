"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PaymentProcess72() {
  const TOTAL_AMOUNT = 299.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] flex items-center justify-center font-sans p-6 text-slate-600" style={{ backgroundColor: '#e0e5ec' }}>
      
      {!isSuccess ? (
        <div 
          className="max-w-md w-full rounded-[3rem] p-10 animate-in fade-in duration-500"
          style={{ 
            backgroundColor: '#e0e5ec',
            boxShadow: '20px 20px 60px #bec3c9, -20px -20px 60px #ffffff'
          }}
        >
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black text-slate-700 tracking-tight">Checkout</h2>
          </div>

          <div 
            className="rounded-3xl p-6 mb-10"
            style={{
              backgroundColor: '#e0e5ec',
              boxShadow: 'inset 10px 10px 20px #bec3c9, inset -10px -10px 20px #ffffff'
            }}
          >
             <div className="flex justify-between items-center text-sm mb-4">
               <span className="font-bold text-slate-500">Subtotal</span>
               <span className="font-bold text-slate-700">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="flex justify-between items-end pt-4 border-t border-slate-300/30">
               <span className="font-black text-slate-500 uppercase tracking-widest text-xs">Total</span>
               <span className="text-4xl font-black text-slate-700">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            
            <div className="relative">
              <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                required 
                type="text" 
                placeholder="Card Number" 
                className="w-full rounded-2xl pl-14 pr-5 py-5 text-slate-700 focus:outline-none font-mono tracking-widest text-sm transition-all placeholder:text-slate-400" 
                style={{
                  backgroundColor: '#e0e5ec',
                  boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff'
                }}
               minLength={16} />
            </div>
            
            <div className="flex gap-6">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                required 
                type="text" 
                placeholder="MM/YY" 
                className="w-1/2 rounded-2xl px-5 py-5 text-slate-700 focus:outline-none font-mono tracking-widest text-center text-sm transition-all placeholder:text-slate-400" 
                style={{
                  backgroundColor: '#e0e5ec',
                  boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff'
                }}
               minLength={5} />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                required 
                type="text" 
                placeholder="CVV" 
                className="w-1/2 rounded-2xl px-5 py-5 text-slate-700 focus:outline-none font-mono tracking-widest text-center text-sm transition-all placeholder:text-slate-400" 
                style={{
                  backgroundColor: '#e0e5ec',
                  boxShadow: 'inset 6px 6px 12px #bec3c9, inset -6px -6px 12px #ffffff'
                }}
               minLength={3} />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-6 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 text-indigo-500 active:scale-95 group"
              style={{
                backgroundColor: '#e0e5ec',
                boxShadow: isProcessing 
                  ? 'inset 10px 10px 20px #bec3c9, inset -10px -10px 20px #ffffff' 
                  : '10px 10px 20px #bec3c9, -10px -10px 20px #ffffff'
              }}
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
              ) : (
                <>Pay Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div 
          className="max-w-md w-full rounded-[3rem] p-12 text-center animate-in zoom-in duration-500"
          style={{ 
            backgroundColor: '#e0e5ec',
            boxShadow: '20px 20px 60px #bec3c9, -20px -20px 60px #ffffff'
          }}
        >
           
           <div 
             className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
             style={{
                backgroundColor: '#e0e5ec',
                boxShadow: '10px 10px 20px #bec3c9, -10px -10px 20px #ffffff'
             }}
           >
             <CheckCircle2 className="w-12 h-12 text-indigo-500" strokeWidth={2} />
           </div>

           <h2 className="text-3xl font-black text-slate-700 mb-2">Success</h2>
           <p className="text-slate-500 mb-10 font-bold">Your payment was processed.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-4 font-black rounded-2xl transition-all text-slate-600 active:scale-95 hover:text-indigo-500"
              style={{
                backgroundColor: '#e0e5ec',
                boxShadow: '10px 10px 20px #bec3c9, -10px -10px 20px #ffffff'
              }}
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
