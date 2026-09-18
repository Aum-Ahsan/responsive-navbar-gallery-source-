"use client";
import React, { useState, useRef, useEffect } from "react";
import { CreditCard, Truck, User, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PaymentProcess35() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const maxScroll = scrollHeight - clientHeight;
    const currentProgress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    setScrollProgress(currentProgress);
  };

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

  if (isSuccess) {
    return (
      <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-sm w-full border border-slate-100 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-violet-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Order Complete</h2>
          <p className="text-slate-500 mb-8">Thank you! Your items will ship soon.</p>
          <button type="button" onClick={() => { setIsSuccess(false); setScrollProgress(0); }} className="w-full py-4 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-colors">
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center font-sans p-6 overflow-hidden">
      
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[700px]">
        
        {/* Header with Progress Bar */}
        <div className="bg-white z-20 relative pt-8 px-8 pb-4 border-b border-slate-100 shrink-0">
          <h1 className="text-2xl font-black text-slate-900 mb-6">Complete Checkout</h1>
          
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-violet-600 transition-all duration-75 ease-out rounded-full"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
            <span>Start</span>
            <span>{Math.round(scrollProgress)}%</span>
            <span>Finish</span>
          </div>
        </div>

        {/* Scrollable Form Content */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-12 relative"
        >
          {/* Section 1: Review Items */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
              <ShoppingCartIcon className="w-5 h-5 text-violet-600" />
              <h2 className="text-lg font-bold text-slate-800">1. Review Items</h2>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-20 h-20 bg-white rounded-xl shadow-sm overflow-hidden shrink-0">
                    <img src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&q=80`} alt="Item" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-slate-900">Premium Sneaker Vol. {item}</h3>
                    <p className="text-sm text-slate-500">Size 10</p>
                    <div className="font-bold text-violet-600 mt-1">$150.00</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Shipping */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
              <Truck className="w-5 h-5 text-violet-600" />
              <h2 className="text-lg font-bold text-slate-800">2. Shipping Address</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="First Name" className="col-span-1 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 focus:outline-none focus:border-violet-500 transition-colors"  minLength={2} maxLength={50} />
              <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Last Name" className="col-span-1 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 focus:outline-none focus:border-violet-500 transition-colors"  minLength={2} maxLength={50} />
              <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Street Address" className="col-span-2 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 focus:outline-none focus:border-violet-500 transition-colors"  minLength={2} maxLength={50} />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="City" className="col-span-1 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 focus:outline-none focus:border-violet-500 transition-colors"  minLength={2} maxLength={50} />
              <div className="grid grid-cols-2 gap-4 col-span-1">
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="State" className="bg-white border-2 border-slate-100 rounded-xl px-4 py-4 focus:outline-none focus:border-violet-500 transition-colors"  minLength={2} maxLength={50} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 5); }} pattern="\\d{5}" maxLength={10} title="5 digit zip code" required type="text" placeholder="Zip" className="bg-white border-2 border-slate-100 rounded-xl px-4 py-4 focus:outline-none focus:border-violet-500 transition-colors"  minLength={5} />
              </div>
            </div>
          </section>

          {/* Section 3: Payment */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
              <CreditCard className="w-5 h-5 text-violet-600" />
              <h2 className="text-lg font-bold text-slate-800">3. Payment Information</h2>
            </div>
            
            <form onSubmit={handlePay} className="space-y-6 pb-8">
              <div className="space-y-4">
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border-2 border-slate-100 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-violet-500 transition-colors font-mono tracking-widest"  minLength={16} />
                </div>
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 focus:outline-none focus:border-violet-500 transition-colors font-mono tracking-widest text-center"  minLength={5} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 focus:outline-none focus:border-violet-500 transition-colors font-mono tracking-widest text-center"  minLength={3} />
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex justify-between text-slate-500 font-medium mb-2">
                  <span>Subtotal</span>
                  <span>$450.00</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium mb-2">
                  <span>Shipping</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-slate-200 mt-4">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="text-3xl font-black text-slate-900">$465.00</span>
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
                className="w-full py-5 bg-violet-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/30 disabled:opacity-70 disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Pay $465.00 <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </section>

        </div>
      </div>
      
      {/* Add custom scrollbar styling globally for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}} />
    </div>
  );
}

// Simple icon for the review section
function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
