"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, ShoppingBag, X } from "lucide-react";

export default function PaymentProcess85() {
  const TOTAL_AMOUNT = 650.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showMobileForm, setShowMobileForm] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full h-[700px] bg-slate-50 font-sans text-slate-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-center p-0 md:p-8">
      
      {!isSuccess ? (
        <div className="w-full h-full md:max-w-5xl md:bg-white md:rounded-3xl md:shadow-2xl md:border md:border-slate-200 flex flex-col md:flex-row overflow-hidden relative">
          
          {/* Main Content Area (Cart) */}
          <div className="flex-1 p-6 md:p-12 overflow-y-auto w-full">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-blue-500" /> Cart
            </h2>
            
            <div className="space-y-4 mb-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-white md:bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-200">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">Product Title {item}</h3>
                    <p className="text-xs text-slate-500">Variant: Default</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${(TOTAL_AMOUNT / 3).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
              <span className="font-bold text-slate-500">Total</span>
              <span className="text-3xl font-black text-slate-900">${TOTAL_AMOUNT.toFixed(2)}</span>
            </div>
          </div>

          {/* Mobile FAB to open form */}
          {!showMobileForm && (
            <button type="button" 
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
      const originalHandler = () => setShowMobileForm(true);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
              className="md:hidden absolute bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20"
            >
              <CreditCard className="w-7 h-7" />
            </button>
          )}

          {/* Payment Form (Mobile Overlay / Desktop Inline) */}
          <div 
            className={`
              ${showMobileForm ? 'absolute inset-0 z-50 bg-white translate-y-0' : 'absolute inset-0 translate-y-full md:translate-y-0'} 
              md:relative md:w-[450px] lg:w-[500px] md:bg-slate-900 md:text-white
              flex flex-col transition-transform duration-300 ease-out
            `}
          >
            <div className="p-6 md:p-12 flex-1 overflow-y-auto">
              
              {/* Mobile Close Button */}
              <button type="button" 
                onClick={() => setShowMobileForm(false)}
                className="md:hidden absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-black mb-8 text-slate-900 md:text-white">Payment</h2>

              <div className="md:hidden bg-blue-50 rounded-2xl p-5 mb-8 border border-blue-100">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-slate-800">Total to Pay</span>
                  <span className="text-3xl font-black text-blue-600">${TOTAL_AMOUNT.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handlePay} className="space-y-4">
                
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-50 md:bg-slate-800 border border-slate-200 md:border-slate-700 rounded-xl pl-12 pr-4 py-4 md:text-white focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-sm" />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-50 md:bg-slate-800 border border-slate-200 md:border-slate-700 rounded-xl px-4 py-4 md:text-white focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-center text-sm" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-50 md:bg-slate-800 border border-slate-200 md:border-slate-700 rounded-xl px-4 py-4 md:text-white focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-center text-sm" />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Pay ${TOTAL_AMOUNT.toFixed(2)} <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      ) : (
        <div className="w-full h-full md:h-auto md:max-w-md bg-white md:rounded-3xl p-12 text-center md:shadow-2xl md:border md:border-slate-200 flex flex-col items-center justify-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black mb-2">Success!</h2>
           <p className="text-slate-500 mb-8 font-medium">Your payment went through.</p>
           <button type="button" 
              onClick={() => { setIsSuccess(false); setShowMobileForm(false); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Close
            </button>
        </div>
      )}

    </div>
  );
}
