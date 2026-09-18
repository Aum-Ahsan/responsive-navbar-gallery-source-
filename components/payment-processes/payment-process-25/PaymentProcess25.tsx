"use client";
import React, { useState } from "react";
import { ArrowRight, Check, CreditCard, ShoppingCart } from "lucide-react";

export default function PaymentProcess25() {
  const [step, setStep] = useState(1); // 1: Cart, 2: Payment, 3: Success
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextStep = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setIsTransitioning(false);
    }, 1200); // Wait for gooey blob to cover screen
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

    nextStep();
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 overflow-hidden relative">
      
      {/* SVG Gooey Filter Definition */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Gooey Transition Layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center"
        style={{ filter: "url('#goo')" }}
      >
        {/* Central expanding blob */}
        <div 
          className="bg-indigo-500 rounded-full transition-all duration-[1200ms] ease-in-out absolute"
          style={{
            width: isTransitioning ? '200vw' : '0px',
            height: isTransitioning ? '200vw' : '0px',
            opacity: isTransitioning ? 1 : 0
          }}
        ></div>
        
        {/* Satellite blobs to create the liquid tear effect */}
        {isTransitioning && (
          <>
            <div className="bg-indigo-500 rounded-full absolute w-32 h-32 animate-[blob-fly_1s_ease-out_forwards] -mt-40 -ml-40"></div>
            <div className="bg-indigo-500 rounded-full absolute w-48 h-48 animate-[blob-fly_1.1s_ease-out_forwards] mt-40 ml-40"></div>
            <div className="bg-indigo-500 rounded-full absolute w-24 h-24 animate-[blob-fly_0.9s_ease-out_forwards] -mt-20 ml-60"></div>
            <div className="bg-indigo-500 rounded-full absolute w-40 h-40 animate-[blob-fly_1.2s_ease-out_forwards] mt-60 -ml-20"></div>
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="max-w-md w-full relative z-10 transition-opacity duration-300">
        
        {step === 1 && (
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-in fade-in duration-500">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-8">
              <ShoppingCart className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Your Cart</h1>
            
            <div className="space-y-4 mb-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 items-center bg-slate-50 p-3 rounded-2xl">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm shrink-0">
                    <img src={i === 1 ? "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=150&q=80" : "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=150&q=80"} alt="Product" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-sm">{i === 1 ? 'Dell XPS 15' : 'Wireless Earbuds'}</h3>
                    <p className="text-slate-500 text-xs">Qty: 1</p>
                  </div>
                  <div className="font-black text-slate-900">${i === 1 ? '1499' : '199'}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-end mb-8 pt-4 border-t border-slate-100">
              <span className="font-bold text-slate-500">Total</span>
              <span className="text-3xl font-black text-slate-900">$1,698.00</span>
            </div>

            <button type="button" 
              onClick={nextStep}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30"
            >
              Checkout <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-indigo-600 text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-in fade-in duration-500 delay-300">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 tracking-tight">Payment</h1>
            <p className="text-indigo-200 mb-8 font-medium">Total due: <strong className="text-white">$1,698.00</strong></p>

            <form onSubmit={handlePay} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-indigo-200 uppercase tracking-wider mb-2 ml-1">Card Number</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-indigo-700/50 border border-indigo-500 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-mono tracking-widest placeholder-indigo-400"  minLength={16} />
              </div>
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-indigo-200 uppercase tracking-wider mb-2 ml-1">Expiry</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full bg-indigo-700/50 border border-indigo-500 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-mono tracking-widest placeholder-indigo-400"  minLength={5} />
                </div>
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-indigo-200 uppercase tracking-wider mb-2 ml-1">CVV</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="123" className="w-full bg-indigo-700/50 border border-indigo-500 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-mono tracking-widest placeholder-indigo-400"  minLength={2} maxLength={50} />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 py-5 bg-white text-indigo-900 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors shadow-xl"
              >
                Pay Now <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl text-center animate-in zoom-in duration-500 delay-300">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
              {/* Expanding success ring */}
              <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping opacity-20"></div>
              <Check className="w-12 h-12 text-green-500" strokeWidth={3} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Order Confirmed!</h2>
            <p className="text-slate-500 font-medium mb-10">Thank you for your purchase.</p>
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
      const originalHandler = () => setStep(1);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }}
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob-fly {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(var(--tx, 100px), var(--ty, 100px)) scale(0);
          }
        }
      `}} />
    </div>
  );
}
