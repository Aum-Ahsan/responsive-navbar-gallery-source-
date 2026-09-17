"use client";
import React, { useState } from "react";
import { CreditCard, Package, ArrowRight, CheckCircle2, Plus, Gift } from "lucide-react";

export default function PaymentProcess53() {
  const FREE_SHIPPING_THRESHOLD = 100.00;
  const SHIPPING_COST = 15.00;
  
  const [baseTotal, setBaseTotal] = useState(65.00);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [addons, setAddons] = useState([
    { id: 1, name: "Premium Packaging", price: 10.00, added: false },
    { id: 2, name: "Extended Warranty", price: 29.00, added: false }
  ]);

  const toggleAddon = (id: number) => {
    setAddons(prev => prev.map(a => {
      if (a.id === id) {
        const isAdding = !a.added;
        setBaseTotal(curr => isAdding ? curr + a.price : curr - a.price);
        return { ...a, added: isAdding };
      }
      return a;
    }));
  };

  const isFreeShipping = baseTotal >= FREE_SHIPPING_THRESHOLD;
  const amountLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - baseTotal);
  const progressPercent = Math.min(100, (baseTotal / FREE_SHIPPING_THRESHOLD) * 100);

  const finalTotal = baseTotal + (isFreeShipping ? 0 : SHIPPING_COST);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in duration-500">
          
          {/* Free Shipping Progress Bar */}
          <div className={`p-6 transition-colors duration-500 ${isFreeShipping ? 'bg-emerald-50' : 'bg-indigo-50'}`}>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <Gift className={`w-5 h-5 ${isFreeShipping ? 'text-emerald-600' : 'text-indigo-600'}`} />
                <span className={`font-bold ${isFreeShipping ? 'text-emerald-900' : 'text-indigo-900'}`}>
                  {isFreeShipping ? 'Free Shipping Unlocked!' : `Add $${amountLeft.toFixed(2)} for Free Shipping`}
                </span>
              </div>
            </div>
            
            <div className="h-3 w-full bg-black/5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-700 ease-out ${isFreeShipping ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Order Summary</h2>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">${baseTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 items-center">
                <span>Shipping</span>
                {isFreeShipping ? (
                  <span className="font-bold text-emerald-500 flex items-center gap-1">
                    <span className="line-through text-slate-300 text-xs">$15.00</span> FREE
                  </span>
                ) : (
                  <span className="font-bold text-slate-900">${SHIPPING_COST.toFixed(2)}</span>
                )}
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-slate-100">
                <span className="font-bold text-slate-900">Total</span>
                <span className="text-4xl font-black text-slate-900">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Quick Add-ons */}
            {!isFreeShipping && (
              <div className="mb-8 animate-in slide-in-from-bottom-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frequently Added</p>
                <div className="space-y-2">
                  {addons.map(addon => (
                    <button 
                      key={addon.id}
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
      const originalHandler = () => toggleAddon(addon.id);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${addon.added ? 'border-indigo-500 bg-indigo-50' : 'border-slate-100 hover:border-slate-200'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${addon.added ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                          {addon.added ? <CheckCircle2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                        <span className={`font-bold ${addon.added ? 'text-indigo-900' : 'text-slate-700'}`}>{addon.name}</span>
                      </div>
                      <span className="font-bold text-slate-500">+${addon.price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Form */}
            <form onSubmit={handlePay} className="space-y-4 pt-4 border-t border-slate-100">
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
                className="w-full py-5 mt-4 bg-slate-900 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-[0_0_20px_rgba(15,23,42,0.1)] disabled:opacity-70 disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Checkout <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>

          </div>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-slate-100 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <Package className="w-12 h-12 text-emerald-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed</h2>
           <p className="text-slate-500 mb-8 font-medium">
             Your package is being prepared. {isFreeShipping && "Enjoy your free shipping!"}
           </p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setBaseTotal(65); setAddons(addons.map(a => ({...a, added: false}))) }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
