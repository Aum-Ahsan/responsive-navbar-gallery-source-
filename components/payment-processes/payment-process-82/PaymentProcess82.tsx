"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Truck, FileText } from "lucide-react";

type Tab = 'shipping' | 'payment' | 'review';

export default function PaymentProcess82() {
  const TOTAL_AMOUNT = 345.00;
  
  const [activeTab, setActiveTab] = useState<Tab>('shipping');
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

  return (
    <div className="w-full min-h-[700px] bg-slate-50 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center">
      
      {!isSuccess ? (
        <div className="w-full max-w-6xl flex flex-col h-full md:h-auto">
          
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Secure Checkout</h2>
            <p className="text-slate-500">Complete your order below.</p>
          </div>

          {/* Mobile Tabs Container */}
          <div className="md:hidden flex bg-slate-200 rounded-xl p-1 mb-6">
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
      const originalHandler = () => setActiveTab('shipping');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
              className={`flex-1 py-2 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${activeTab === 'shipping' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
            >
              <Truck className="w-4 h-4" /> Ship
            </button>
            <button type="button" 
              onClick={() => setActiveTab('payment')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${activeTab === 'payment' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
            >
              <CreditCard className="w-4 h-4" /> Pay
            </button>
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
      const originalHandler = () => setActiveTab('review');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
              className={`flex-1 py-2 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${activeTab === 'review' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
            >
              <FileText className="w-4 h-4" /> Review
            </button>
          </div>

          {/* Form Container: Single column on mobile (tabbed), 3-col Grid on Desktop */}
          <form onSubmit={handlePay} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 flex-1">
            
            {/* Section 1: Shipping */}
            <div className={`${activeTab === 'shipping' ? 'block' : 'hidden'} md:block bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col`}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">1. Shipping</h3>
              </div>
              
              <div className="space-y-4 flex-1">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={2} maxLength={50} />
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Address Line 1" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={2} maxLength={50} />
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="City" className="w-2/3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={2} maxLength={50} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 5); }} pattern="\\d{5}" maxLength={10} title="5 digit zip code" required type="text" placeholder="ZIP" className="w-1/3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={5} />
                </div>
              </div>

              {/* Next button for mobile */}
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
      const originalHandler = () => setActiveTab('payment');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }} className="md:hidden w-full py-4 mt-6 bg-slate-900 text-white rounded-xl font-bold">
                Continue to Payment
              </button>
            </div>

            {/* Section 2: Payment */}
            <div className={`${activeTab === 'payment' ? 'block' : 'hidden'} md:block bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col`}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">2. Payment</h3>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors font-mono text-sm"  minLength={16} />
                </div>
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors font-mono text-center text-sm"  minLength={5} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors font-mono text-center text-sm"  minLength={3} />
                </div>
              </div>

              {/* Next button for mobile */}
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
      const originalHandler = () => setActiveTab('review');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }} className="md:hidden w-full py-4 mt-6 bg-slate-900 text-white rounded-xl font-bold">
                Continue to Review
              </button>
            </div>

            {/* Section 3: Review & Submit */}
            <div className={`${activeTab === 'review' ? 'block' : 'hidden'} md:block bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-900/20 flex flex-col text-white`}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <div className="w-10 h-10 bg-slate-800 text-indigo-400 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">3. Review</h3>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Subtotal</span>
                  <span className="text-white">${TOTAL_AMOUNT.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Shipping</span>
                  <span className="text-white">Free</span>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-slate-700 mt-4">
                  <span className="font-bold text-slate-300">Total</span>
                  <span className="text-3xl font-black text-white">${TOTAL_AMOUNT.toFixed(2)}</span>
                </div>
              </div>

              {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full py-5 mt-8 bg-indigo-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] disabled:opacity-70"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Place Order <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </div>

          </form>

        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-3xl p-12 text-center shadow-xl shadow-slate-200/50 border border-slate-100 animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black mb-2 text-slate-900">All Set!</h2>
           <p className="text-slate-500 mb-8 font-medium">Your order has been placed and is being processed.</p>
           <button type="button" 
              onClick={() => { setIsSuccess(false); setActiveTab('shipping'); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
