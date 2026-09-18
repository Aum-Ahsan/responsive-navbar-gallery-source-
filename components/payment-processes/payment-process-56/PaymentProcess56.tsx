"use client";
import React, { useState, useEffect } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Banknote, SearchCode } from "lucide-react";

export default function PaymentProcess56() {
  const TOTAL_AMOUNT = 420.00; // Nice
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRaining, setIsRaining] = useState(false);

  // Easter Egg Logic
  useEffect(() => {
    let keyBuffer = "";
    const SECRET_CODE = "MAKEITRAIN";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in the input fields (unless they really want to, but let's allow it globally for fun)
      
      const key = e.key.toUpperCase();
      // Only append A-Z
      if (/^[A-Z]$/.test(key)) {
        keyBuffer += key;
        
        // Keep buffer size manageable
        if (keyBuffer.length > SECRET_CODE.length) {
          keyBuffer = keyBuffer.slice(keyBuffer.length - SECRET_CODE.length);
        }

        if (keyBuffer === SECRET_CODE) {
          setIsRaining(true);
          // Stop raining after 10 seconds
          setTimeout(() => {
            setIsRaining(false);
          }, 10000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  // Generate random rain particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 2 + 2}s`,
    animationDelay: `${Math.random() * 2}s`,
    rotation: `${Math.random() * 360}deg`,
    scale: Math.random() * 0.5 + 0.5
  }));

  return (
    <div className="w-full min-h-[700px] bg-slate-100 flex items-center justify-center font-sans p-6 text-slate-800 overflow-hidden relative">
      
      {/* The Rain */}
      {isRaining && (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
          {particles.map(p => (
            <div 
              key={p.id}
              className="absolute -top-16 text-emerald-500 animate-[fall_linear_infinite]"
              style={{
                left: p.left,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay,
                transform: `rotate(${p.rotation}) scale(${p.scale})`
              }}
            >
              <Banknote className="w-12 h-12 fill-emerald-100" />
            </div>
          ))}
        </div>
      )}

      {/* Hint (Optional) */}
      <div className="absolute top-6 left-6 text-slate-400 flex items-center gap-2 text-xs font-bold uppercase opacity-50 hover:opacity-100 transition-opacity">
        <SearchCode className="w-4 h-4" /> Try typing "MAKEITRAIN"
      </div>

      {!isSuccess ? (
        <div className={`max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative z-10 transition-all duration-1000 ${isRaining ? 'shadow-emerald-500/20 ring-4 ring-emerald-500/10 scale-[1.02]' : ''}`}>
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Checkout</h2>
            <div className={`transition-colors duration-500 ${isRaining ? 'text-emerald-500' : 'text-slate-300'}`}>
               <Banknote className="w-6 h-6" />
            </div>
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

            <button 
              type="submit" 
              disabled={isProcessing}
              className={`w-full py-5 mt-4 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] disabled:opacity-70 disabled:shadow-none
                ${isRaining ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30' : 'bg-slate-900 hover:bg-slate-800'}
              `}
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
        <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-slate-200 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed</h2>
           <p className="text-slate-500 mb-8 font-medium">Thank you for your purchase.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setIsRaining(false); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

      {/* Styles for falling money */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(800px) rotate(720deg);
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
}
