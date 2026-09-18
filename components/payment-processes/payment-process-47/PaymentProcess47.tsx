"use client";
import React, { useState } from "react";
import { CreditCard, Tag, X, ArrowRight, CheckCircle2 } from "lucide-react";

const PROMO_CODES: Record<string, { type: 'percent' | 'fixed', value: number }> = {
  'SAVE20': { type: 'percent', value: 20 },
  'MINUS10': { type: 'fixed', value: 10 },
  'VIP50': { type: 'percent', value: 50 },
};

export default function PaymentProcess47() {
  const baseTotal = 150.00;
  
  const [promoCode, setPromoCode] = useState("");
  const [activePromo, setActivePromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState("");
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  let discount = 0;
  if (activePromo && PROMO_CODES[activePromo]) {
    const promo = PROMO_CODES[activePromo];
    if (promo.type === 'percent') {
      discount = baseTotal * (promo.value / 100);
    } else {
      discount = promo.value;
    }
  }

  const finalTotal = Math.max(0, baseTotal - discount);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    
    const code = promoCode.trim().toUpperCase();
    if (!code) return;

    if (PROMO_CODES[code]) {
      setActivePromo(code);
      setPromoCode("");
    } else {
      setPromoError("Invalid promo code");
    }
  };

  const removePromo = () => {
    setActivePromo(null);
    setPromoCode("");
    setPromoError("");
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-emerald-950 flex items-center justify-center font-sans p-6 text-emerald-100">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-[2rem] p-8 shadow-2xl border border-emerald-100 text-slate-800 animate-in fade-in duration-500">
          
          <h2 className="text-2xl font-black text-slate-900 mb-8">Order Summary</h2>

          {/* Pricing Box */}
          <div className="bg-emerald-50 rounded-2xl p-6 mb-8 border border-emerald-100">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-slate-500">Subtotal</span>
              <span className="font-black text-slate-900">${baseTotal.toFixed(2)}</span>
            </div>
            
            {/* Active Promo Line */}
            <div className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${activePromo ? 'max-h-12 mb-3 opacity-100' : 'max-h-0 opacity-0 mb-0'}`}>
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-600">Discount</span>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                  {activePromo}
                  <button type="button" onClick={(e) => {
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
      const originalHandler = removePromo;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} className="hover:text-emerald-900 ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              </div>
              <span className="font-black text-emerald-600">-${discount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-emerald-200/50 mt-1">
              <span className="font-bold text-slate-500">Total</span>
              <div className="text-right">
                {activePromo && (
                  <span className="text-sm line-through text-slate-400 mr-2">${baseTotal.toFixed(2)}</span>
                )}
                <span className="text-4xl font-black text-slate-900">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Promo Input Area */}
          <div className="mb-8">
            <form onSubmit={applyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input required 
                  type="text" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  disabled={activePromo !== null}
                  placeholder="Promo code (e.g. SAVE20)" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed" 
                 minLength={2} maxLength={50} />
              </div>
              <button 
                type="submit" 
                disabled={activePromo !== null || !promoCode}
                className="bg-slate-900 text-white px-6 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Apply
              </button>
            </form>
            {promoError && (
              <p className="text-red-500 text-xs font-bold mt-2 ml-1 animate-in slide-in-from-top-1">{promoError}</p>
            )}
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePay} className="space-y-4">
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
            </div>
            
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-emerald-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay ${finalTotal.toFixed(2)} <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-emerald-900/50 backdrop-blur-md rounded-[2rem] p-10 shadow-2xl border border-emerald-800 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-400" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Success!</h2>
           <p className="text-emerald-200/80 mb-8 font-medium">Your payment of ${finalTotal.toFixed(2)} was processed.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); removePromo(); }}
              className="w-full py-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors"
            >
              Start Over
            </button>
        </div>
      )}

    </div>
  );
}
