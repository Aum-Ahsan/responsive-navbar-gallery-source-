"use client";
import React, { useState } from "react";
import { Check, CreditCard, ChevronRight, Fingerprint } from "lucide-react";

export default function PaymentProcess37() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const handlePointerDown = (id: string) => {
    setActiveElement(id);
    // Optional: If we were on mobile, we could call navigator.vibrate(50) here
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  const handlePointerUp = () => {
    setActiveElement(null);
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
      setIsProcessing(false);
      setIsSuccess(true);
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([30, 50, 30]); // Success vibration pattern
      }
    }, 1500);
  };

  return (
    <div className="w-full min-h-[700px] bg-neutral-900 flex items-center justify-center font-sans p-6 text-neutral-200">
      
      {!isSuccess ? (
        <div className="max-w-sm w-full bg-neutral-800 rounded-[2rem] p-8 shadow-2xl border border-neutral-700 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-black text-white">Payment</h2>
            <Fingerprint className="w-6 h-6 text-neutral-500" />
          </div>

          <div className="bg-neutral-900 rounded-2xl p-5 mb-8 border border-neutral-800 shadow-inner">
            <div className="text-sm font-bold text-neutral-500 mb-1">Total</div>
            <div className="text-4xl font-black text-white">$45.00</div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            {/* Tactile Input Container */}
            <div 
              className={`transition-transform duration-100 ease-out ${activeElement === 'card' ? 'scale-[0.98]' : 'scale-100'}`}
              onPointerDown={() => handlePointerDown('card')}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1 pointer-events-none">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                  required 
                  type="text" 
                 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-sm shadow-inner" 
                 minLength={16} />
              </div>
            </div>

            <div className="flex gap-4">
              <div 
                className={`w-1/2 transition-transform duration-100 ease-out ${activeElement === 'exp' ? 'scale-[0.96]' : 'scale-100'}`}
                onPointerDown={() => handlePointerDown('exp')}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              >
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1 pointer-events-none">Expiry</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                  required 
                  type="text" 
                 
                  placeholder="MM/YY" 
                  className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-center text-sm shadow-inner" 
                 minLength={5} />
              </div>

              <div 
                className={`w-1/2 transition-transform duration-100 ease-out ${activeElement === 'cvv' ? 'scale-[0.96]' : 'scale-100'}`}
                onPointerDown={() => handlePointerDown('cvv')}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              >
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 ml-1 pointer-events-none">CVV</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
                  required 
                  type="text" 
                  maxLength={50}
                  placeholder="123" 
                  className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-center text-sm shadow-inner" 
                 minLength={2} />
              </div>
            </div>

            {/* Tactile Button */}
            <div className="pt-4">
              {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                type="submit" 
                disabled={isProcessing}
                onPointerDown={() => handlePointerDown('submit')}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className={`w-full py-5 bg-amber-500 text-neutral-900 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-amber-400 disabled:opacity-70 disabled:hover:bg-amber-500 shadow-[0_4px_0_rgb(217,119,6)] active:shadow-[0_0px_0_rgb(217,119,6)] active:translate-y-1 transition-all duration-75`}
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-neutral-900/30 border-t-neutral-900 rounded-full animate-spin"></div>
                ) : (
                  <>Pay Now <ChevronRight className="w-5 h-5" strokeWidth={3} /></>
                )}
              </button>
            </div>

          </form>
        </div>
      ) : (
        <div className="max-w-sm w-full bg-neutral-800 rounded-[2rem] p-10 shadow-2xl border border-neutral-700 text-center animate-in zoom-in-95 duration-300">
           <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <Check className="w-10 h-10 text-green-500" strokeWidth={4} />
           </div>
           <h2 className="text-2xl font-black text-white mb-2">Done!</h2>
           <p className="text-neutral-400 mb-8 font-medium">Payment was processed.</p>
           
           {/* Tactile Reset Button */}
           <button type="button" 
              onClick={() => setIsSuccess(false)}
              onPointerDown={() => handlePointerDown('reset')}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className={`px-8 py-3 bg-neutral-700 text-white font-bold rounded-xl active:bg-neutral-600 active:scale-95 transition-all duration-75`}
            >
              Back
            </button>
        </div>
      )}

    </div>
  );
}
