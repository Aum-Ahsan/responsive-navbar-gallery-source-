"use client";
import React, { useState, useEffect } from "react";
import { CreditCard, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function PaymentProcess27() {
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Simulate initial data fetch (cart details, user profile)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

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
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Success!</h2>
          <p className="text-slate-500 mb-8">Your payment was processed successfully.</p>
          <button type="button" onClick={() => { setIsSuccess(false); setIsLoading(true); setTimeout(() => setIsLoading(false), 2500); }} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
            Start New Checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center font-sans p-6 overflow-hidden">
      
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        
        {/* Left Column: Order Summary */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 relative overflow-hidden min-h-[500px]">
          
          {/* SKELETON LAYER */}
          <div className={`absolute inset-0 p-8 bg-white z-20 transition-opacity duration-1000 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-48 h-8 bg-slate-200 rounded-lg animate-pulse mb-10"></div>
            
            <div className="space-y-6 mb-12">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-xl animate-pulse shrink-0"></div>
                  <div className="flex-1 space-y-3">
                    <div className="w-3/4 h-4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="w-1/2 h-4 bg-slate-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex justify-between">
                <div className="w-20 h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="w-16 h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="flex justify-between">
                <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="w-16 h-4 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="flex justify-between items-end pt-4">
                <div className="w-16 h-6 bg-slate-200 rounded animate-pulse"></div>
                <div className="w-32 h-8 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* ACTUAL CONTENT LAYER */}
          <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <h2 className="text-2xl font-black text-slate-900 mb-8">Order Summary</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-xl overflow-hidden shrink-0 p-2 border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&q=80" alt="Nike Air Max" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">Nike Air Max 270</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">Size 10 • Red</p>
                </div>
                <div className="font-bold text-slate-900">$150.00</div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-xl overflow-hidden shrink-0 p-2 border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=150&q=80" alt="AirPods" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">AirPods Pro</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">White • With Case</p>
                </div>
                <div className="font-bold text-slate-900">$249.00</div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-xl overflow-hidden shrink-0 p-2 border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80" alt="Headphones" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">Sony WH-1000XM4</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">Black • Noise Cancelling</p>
                </div>
                <div className="font-bold text-slate-900">$348.00</div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex justify-between text-sm font-medium text-slate-500">
                <span>Subtotal</span>
                <span>$747.00</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-slate-500">
                <span>Shipping</span>
                <span className="text-green-500 font-bold">Free</span>
              </div>
              <div className="flex justify-between items-end pt-3">
                <span className="font-bold text-slate-900">Total</span>
                <span className="text-3xl font-black text-slate-900">$747.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden text-white min-h-[500px]">
          
          {/* SKELETON LAYER */}
          <div className={`absolute inset-0 p-8 bg-slate-900 z-20 transition-opacity duration-1000 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-48 h-8 bg-slate-800 rounded-lg animate-pulse mb-10"></div>
            
            <div className="w-full h-16 bg-slate-800 rounded-xl animate-pulse mb-8"></div>
            
            <div className="w-32 h-4 bg-slate-800 rounded animate-pulse mb-4"></div>
            <div className="w-full h-12 bg-slate-800 rounded-xl animate-pulse mb-4"></div>
            
            <div className="flex gap-4 mb-10">
              <div className="w-1/2 h-12 bg-slate-800 rounded-xl animate-pulse"></div>
              <div className="w-1/2 h-12 bg-slate-800 rounded-xl animate-pulse"></div>
            </div>

            <div className="w-full h-16 bg-slate-800 rounded-2xl animate-pulse"></div>
          </div>

          {/* ACTUAL CONTENT LAYER */}
          <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <h2 className="text-2xl font-black mb-8">Payment Details</h2>

            <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <div className="font-bold text-sm">Shipping to</div>
                <div className="text-xs text-slate-400">123 Market St, San Francisco, CA</div>
              </div>
            </div>

            <form onSubmit={handlePay}>
              <div className="space-y-4 mb-10">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Card Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest"  minLength={16} />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Expiry</label>
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center"  minLength={5} />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">CVV</label>
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="123" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center"  minLength={2} maxLength={50} />
                  </div>
                </div>
              </div>

              {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                type="submit" 
                disabled={isProcessing || isLoading}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 disabled:opacity-70 disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Pay $747.00 <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
