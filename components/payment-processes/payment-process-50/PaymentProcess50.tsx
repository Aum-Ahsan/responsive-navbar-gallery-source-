"use client";
import React, { useState, useEffect } from "react";
import { Clock, CreditCard, AlertTriangle, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

export default function PaymentProcess50() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0 || isSuccess || isProcessing) return;

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isSuccess, isProcessing]);

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

    if (timeLeft <= 0) return;
    
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

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = timeLeft < 60; // Less than 1 minute

  return (
    <div className="w-full min-h-[700px] bg-rose-50 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {!isSuccess ? (
        <div className="max-w-md w-full relative">
          
          {/* Expiration Overlay */}
          {timeLeft <= 0 && (
            <div className="absolute inset-0 z-50 bg-white/80 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300 shadow-2xl border border-rose-100">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Session Expired</h2>
              <p className="text-slate-500 mb-6 font-medium">Your reserved item has been released to other customers.</p>
              <button type="button" 
                onClick={(e) => {
      const inputs = Array.from((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = () => setTimeLeft(600);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} 
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Try Again
              </button>
            </div>
          )}

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100 relative overflow-hidden">
            
            {/* Top Banner */}
            <div className={`absolute top-0 left-0 right-0 py-2 px-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-500
              ${isUrgent ? 'bg-red-500' : 'bg-rose-500'}
            `}>
              <Clock className={`w-4 h-4 ${isUrgent ? 'animate-pulse' : ''}`} /> 
              <span>Holding reservation for {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            </div>

            <div className="pt-8 mb-8 text-center">
              <h2 className="text-2xl font-black text-slate-900">Limited Edition Sneakers</h2>
              <div className="inline-flex items-center gap-1.5 mt-2 bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                Only 2 left in stock
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100 flex justify-between items-center">
               <div className="font-bold text-slate-500">Total</div>
               <div className="text-3xl font-black text-slate-900">$299.00</div>
            </div>

            <form onSubmit={handlePay} className="space-y-4">
              
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required disabled={timeLeft <= 0} type="text" placeholder="Card Number" className="w-full bg-white border-2 border-slate-100 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-rose-500 transition-colors font-mono tracking-widest text-sm disabled:opacity-50"  minLength={16} />
              </div>
              
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required disabled={timeLeft <= 0} type="text" placeholder="MM/YY" className="w-1/2 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-rose-500 transition-colors font-mono tracking-widest text-center text-sm disabled:opacity-50"  minLength={5} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required disabled={timeLeft <= 0} type="text" placeholder="CVV" className="w-1/2 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-rose-500 transition-colors font-mono tracking-widest text-center text-sm disabled:opacity-50"  minLength={3} />
              </div>

              {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                type="submit" 
                disabled={isProcessing || timeLeft <= 0}
                className={`w-full py-5 mt-4 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(244,63,94,0.3)] disabled:shadow-none
                  ${isUrgent ? 'bg-red-500 hover:bg-red-600' : 'bg-rose-500 hover:bg-rose-600'}
                  ${timeLeft <= 0 ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Secure My Item <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>

          </div>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-rose-100 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-rose-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-2">Got 'Em!</h2>
           <p className="text-slate-500 mb-8 font-medium">Your limited edition item was secured in time.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setTimeLeft(600); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Back to Store
            </button>
        </div>
      )}

    </div>
  );
}
