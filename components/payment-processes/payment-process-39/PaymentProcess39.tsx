"use client";
import React, { useState } from "react";
import { CreditCard, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function PaymentProcess39() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
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

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation completes (600ms)
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100">
      
      {/* Global CSS for Ripple Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ripple-effect {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple-effect 0.6s linear;
        }
      `}} />

      {!isSuccess ? (
        <div className="max-w-sm w-full bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 animate-in fade-in duration-500">
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Payment Method</h2>
          </div>

          <form onSubmit={handlePay} className="space-y-5">
            
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Card Number</label>
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                required 
                type="text" 
               
                placeholder="0000 0000 0000 0000" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-sm" 
               minLength={16} />
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Expiry</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                  required 
                  type="text" 
                 
                  placeholder="MM/YY" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm" 
                 minLength={5} />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">CVV</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
                  required 
                  type="text" 
                  maxLength={50}
                  placeholder="123" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm" 
                 minLength={2} />
              </div>
            </div>

            <div className="pt-6">
              {/* Button with Ripple Effect */}
              <button 
                type="submit" 
                disabled={isProcessing}
                onMouseDown={addRipple}
                className="relative overflow-hidden w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-500 transition-colors shadow-[0_0_30px_rgba(79,70,229,0.2)] disabled:opacity-70 disabled:shadow-none select-none"
              >
                {/* Ripples */}
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="absolute bg-white rounded-full pointer-events-none animate-ripple"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: '100px',
                      height: '100px',
                      marginLeft: '-50px',
                      marginTop: '-50px',
                    }}
                  ></span>
                ))}

                {/* Button Content */}
                <div className="relative z-10 flex items-center gap-2 pointer-events-none">
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Pay $89.00 <ArrowRight className="w-5 h-5" /></>
                  )}
                </div>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> AES-256 Bit Encryption
            </div>
          </form>

        </div>
      ) : (
        <div className="max-w-sm w-full bg-slate-800 rounded-3xl p-10 shadow-2xl border border-slate-700 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Success!</h2>
           <p className="text-slate-400 mb-8">Payment processed successfully.</p>
           
           {/* Ripple Button for reset too */}
           <button type="button" 
              onClick={() => setIsSuccess(false)}
              onMouseDown={addRipple}
              className="relative overflow-hidden w-full py-4 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600 transition-colors select-none"
            >
               {/* Ripples */}
               {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="absolute bg-white rounded-full pointer-events-none animate-ripple"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: '100px',
                      height: '100px',
                      marginLeft: '-50px',
                      marginTop: '-50px',
                    }}
                  ></span>
                ))}
              <span className="relative z-10 pointer-events-none">Return Home</span>
            </button>
        </div>
      )}

    </div>
  );
}
