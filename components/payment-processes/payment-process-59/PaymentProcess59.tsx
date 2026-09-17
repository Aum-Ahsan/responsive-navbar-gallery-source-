"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, PackageOpen, HelpCircle, CheckCircle2, Star } from "lucide-react";

export default function PaymentProcess59() {
  const baseTotal = 75.00;
  const MYSTERY_PRICE = 15.00;
  
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const finalTotal = baseTotal + (selectedBox !== null ? MYSTERY_PRICE : 0);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleBoxSelect = (id: number) => {
    if (selectedBox === id) {
      setSelectedBox(null);
    } else {
      setSelectedBox(id);
    }
  };

  // Mock rewards for the success screen
  const REWARDS = ["Wireless Earbuds", "Premium Coffee Blend", "Smart Home Plug"];
  const reward = selectedBox !== null ? REWARDS[selectedBox - 1] : null;

  return (
    <div className="w-full min-h-[700px] bg-indigo-50 flex items-center justify-center font-sans p-6 text-slate-800 overflow-hidden relative">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 relative z-10 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Checkout</h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
             <div className="flex justify-between items-center text-sm mb-2">
               <span className="font-medium text-slate-500">Subtotal</span>
               <span className="font-bold text-slate-900">${baseTotal.toFixed(2)}</span>
             </div>
             
             <div className={`flex justify-between items-center text-sm transition-all duration-300 overflow-hidden ${selectedBox !== null ? 'max-h-10 opacity-100 mb-2' : 'max-h-0 opacity-0 mb-0'}`}>
               <span className="font-bold text-indigo-600 flex items-center gap-1"><PackageOpen className="w-4 h-4" /> Mystery Box</span>
               <span className="font-bold text-indigo-600">${MYSTERY_PRICE.toFixed(2)}</span>
             </div>

             <div className="flex justify-between items-end pt-3 border-t border-slate-200">
               <span className="font-bold text-slate-500">Total</span>
               <span className="text-3xl font-black text-slate-900">${finalTotal.toFixed(2)}</span>
             </div>
          </div>

          {/* Gamified Mystery Box Selection */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <h3 className="font-black text-slate-900">Add a Mystery Box</h3>
            </div>
            <p className="text-sm text-slate-500 mb-4 font-medium">Select a box for <span className="text-indigo-600 font-bold">$15</span>. Guaranteed value of $40+!</p>
            
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(box => (
                <button
                  key={box}
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
      const originalHandler = () => handleBoxSelect(box);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                  className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                    selectedBox === box 
                      ? 'border-indigo-500 bg-indigo-50 shadow-md scale-105' 
                      : selectedBox !== null 
                        ? 'border-slate-100 bg-slate-50 opacity-50 scale-95'
                        : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 hover:scale-105 shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${selectedBox === box ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                    {selectedBox === box ? <CheckCircle2 className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
                  </div>
                  <span className={`text-xs font-bold ${selectedBox === box ? 'text-indigo-700' : 'text-slate-500'}`}>Box {box}</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors font-mono tracking-widest text-sm" />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-slate-900 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-[0_0_20px_rgba(15,23,42,0.15)] disabled:opacity-70 disabled:shadow-none"
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
        <div className="max-w-md w-full bg-white rounded-3xl p-12 shadow-xl border border-indigo-100 text-center relative z-10 animate-in zoom-in duration-500">
           
           {!reward ? (
             <>
               <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="w-12 h-12 text-emerald-500" strokeWidth={3} />
               </div>
               <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed!</h2>
               <p className="text-slate-500 mb-8 font-medium">Thank you for your purchase.</p>
             </>
           ) : (
             <>
               <div className="relative w-32 h-32 mx-auto mb-6">
                 <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20"></div>
                 <div className="absolute inset-0 bg-indigo-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl z-10">
                   <PackageOpen className="w-16 h-16 text-indigo-500" />
                 </div>
               </div>
               <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-2 animate-pulse">Mystery Box Revealed</h2>
               <p className="text-2xl font-black text-slate-900 mb-2">{reward}</p>
               <p className="text-slate-500 mb-8 font-medium">Enjoy your awesome surprise!</p>
             </>
           )}

           <button type="button" 
              onClick={() => { setIsSuccess(false); setSelectedBox(null); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
