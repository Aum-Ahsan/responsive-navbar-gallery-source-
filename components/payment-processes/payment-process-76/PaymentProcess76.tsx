"use client";
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function PaymentProcess76() {
  const TOTAL_AMOUNT = 450.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-white flex items-center justify-center font-sans p-6 text-black selection:bg-black selection:text-white">
      
      {!isSuccess ? (
        <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-in fade-in duration-1000">
          
          {/* Left Side: Summary */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-4xl font-light tracking-tighter mb-12">Checkout</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-baseline border-b border-black/10 pb-4">
                  <span className="text-sm tracking-widest uppercase">Item</span>
                  <span className="text-sm font-medium">Monochrome Print</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-black/10 pb-4">
                  <span className="text-sm tracking-widest uppercase">Shipping</span>
                  <span className="text-sm font-medium">Complimentary</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-baseline border-t border-black pt-6">
              <span className="text-sm tracking-widest uppercase font-medium">Total</span>
              <span className="text-2xl font-light">${TOTAL_AMOUNT.toFixed(2)}</span>
            </div>
          </div>

          {/* Right Side: Form */}
          <div>
            <form onSubmit={handlePay} className="space-y-8">
              
              <div className="space-y-4">
                <label className="text-[10px] tracking-[0.2em] uppercase font-medium">Card Number</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                  required 
                  type="text" 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black transition-colors font-light tracking-widest text-lg placeholder:text-black/20 rounded-none" 
                />
              </div>
              
              <div className="flex gap-8">
                <div className="space-y-4 w-1/2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-medium">Expiry</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                    required 
                    type="text" 
                    placeholder="MM/YY" 
                    className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black transition-colors font-light tracking-widest text-lg placeholder:text-black/20 rounded-none text-center" 
                  />
                </div>
                <div className="space-y-4 w-1/2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-medium">CVC</label>
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
                    required 
                    type="text" 
                    placeholder="000" 
                    className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black transition-colors font-light tracking-widest text-lg placeholder:text-black/20 rounded-none text-center" />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full py-4 mt-8 bg-black text-white text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-4 hover:bg-black/80 transition-colors disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="animate-pulse">Processing</span>
                ) : (
                  <>Complete Order <ArrowRight className="w-4 h-4" strokeWidth={1} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full flex flex-col items-center justify-center text-center animate-in fade-in duration-1000">
           
           <div className="w-16 h-16 border border-black flex items-center justify-center mb-12 rounded-full">
             <Check className="w-6 h-6 text-black" strokeWidth={1} />
           </div>

           <h2 className="text-3xl font-light tracking-tighter mb-4">Confirmed</h2>
           <p className="text-black/60 text-sm font-light mb-16 tracking-wide">Your order has been placed.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="px-8 py-3 bg-transparent border border-black text-black text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
            >
              Return
            </button>
        </div>
      )}

    </div>
  );
}
