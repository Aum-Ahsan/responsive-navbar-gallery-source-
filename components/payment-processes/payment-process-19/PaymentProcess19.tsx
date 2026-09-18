"use client";
import React, { useState } from "react";
import { ShoppingCart, X, CreditCard, ChevronRight, Check } from "lucide-react";

export default function PaymentProcess19() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const closeFAB = () => {
    setIsExpanded(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 500);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-50 font-sans p-6 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Page Content Simulation */}
      <div className="w-full max-w-4xl opacity-50 pointer-events-none">
        <header className="flex justify-between items-center mb-12">
          <div className="w-32 h-8 bg-slate-200 rounded"></div>
          <div className="flex gap-4">
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
            <div className="w-16 h-4 bg-slate-200 rounded"></div>
          </div>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="space-y-3">
              <div className="w-full h-48 bg-slate-200 rounded-2xl"></div>
              <div className="w-3/4 h-4 bg-slate-200 rounded"></div>
              <div className="w-1/2 h-4 bg-slate-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB Overlay Background (optional, dims background) */}
      <div 
        className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeFAB}
      ></div>

      {/* 
        The Expanding FAB Container
        We position it absolutely at bottom-8 right-8.
        When not expanded, it's w-16 h-16 rounded-full.
        When expanded, it's max-w-md w-full h-[600px] rounded-[2rem].
      */}
      <div 
        className={`absolute z-50 bg-white shadow-2xl transition-all duration-500 cubic-bezier(0.2,0.8,0.2,1) flex flex-col overflow-hidden ${
          isExpanded 
            ? 'bottom-4 md:bottom-8 right-4 md:right-8 w-[calc(100%-2rem)] md:w-[400px] h-[600px] max-h-[calc(100%-2rem)] rounded-[2rem] opacity-100' 
            : 'bottom-8 right-8 w-16 h-16 rounded-full hover:scale-105 opacity-90 hover:opacity-100 cursor-pointer'
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {/* Closed State (Icon only) */}
        <div className={`absolute inset-0 flex items-center justify-center bg-violet-600 text-white transition-opacity duration-300 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <ShoppingCart className="w-6 h-6" />
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-violet-600"></div>
        </div>

        {/* Expanded State Content */}
        <div className={`flex flex-col h-full w-full transition-opacity duration-500 delay-100 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          
          <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white z-10 shrink-0">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-violet-600" /> Checkout
            </h2>
            <button type="button" onClick={(e: any) => {
      const inputs = Array.from<HTMLInputElement>((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = (e) => { e.stopPropagation(); closeFAB(); ;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}} className="p-2 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 relative">
            {!isSuccess ? (
              <div className="space-y-8 animate-in fade-in duration-500">
                {/* Order Summary mini */}
                <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 border border-slate-100">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm overflow-hidden p-2 shrink-0">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80" alt="Watch" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">Smart Watch</h4>
                    <p className="text-xs text-slate-500">Space Grey</p>
                    <div className="font-bold text-violet-600 mt-1">$299.00</div>
                  </div>
                </div>

                <form onSubmit={handlePay} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Card Details</label>
                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500 transition-all shadow-sm">
                      <div className="relative border-b border-slate-200">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full pl-11 pr-4 py-3 focus:outline-none text-sm font-medium"  minLength={16} />
                      </div>
                      <div className="flex">
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 px-4 py-3 border-r border-slate-200 focus:outline-none text-sm font-medium"  minLength={5} />
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVC" className="w-1/2 px-4 py-3 focus:outline-none text-sm font-medium"  minLength={3} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Cardholder Name</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Name on card" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm font-medium"  minLength={2} maxLength={50} />
                  </div>

                  <div className="pt-4 mt-8 border-t border-slate-100 flex justify-between items-end mb-6">
                    <span className="font-bold text-slate-500">Total to pay</span>
                    <span className="text-3xl font-black text-slate-900">$299.00</span>
                  </div>

                  {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full py-4 bg-violet-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/30 disabled:opacity-70 disabled:shadow-none"
                  >
                    {isProcessing ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Pay Now <ChevronRight className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500 pb-10">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Order Successful!</h3>
                <p className="text-slate-500 mb-8 px-4">Your order has been placed and is being processed.</p>
                <button type="button" onClick={(e: any) => {
      const inputs = Array.from<HTMLInputElement>((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = (e) => { e.stopPropagation(); closeFAB(); ;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }}} className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
