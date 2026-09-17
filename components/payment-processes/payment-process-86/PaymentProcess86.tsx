"use client";
import React, { useState, useEffect } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Lock } from "lucide-react";

export default function PaymentProcess86() {
  const TOTAL_AMOUNT = 89.99;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  // Trigger payment when slider reaches 100
  useEffect(() => {
    if (sliderValue >= 99 && !isProcessing && !isSuccess) {
      triggerPayment();
    }
  }, [sliderValue]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setSliderValue(val);
  };

  const handleSliderRelease = () => {
    if (sliderValue < 99) {
      // Snap back if not fully swiped
      setSliderValue(0);
    }
  };

  const triggerPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setSliderValue(0); // reset
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerPayment();
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-100 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative z-10">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Checkout</h2>
            <Lock className="w-5 h-5 text-slate-400" />
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 mb-8 border border-blue-100">
             <div className="flex justify-between items-center text-sm mb-2">
               <span className="font-bold text-slate-500">Subtotal</span>
               <span className="font-bold text-slate-700">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="flex justify-between items-end pt-4 border-t border-blue-200">
               <span className="font-black text-blue-500 uppercase tracking-widest text-xs">Total</span>
               <span className="text-4xl font-black text-slate-900">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                required 
                type="text" 
                placeholder="Card Number" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-sm" 
              />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                required 
                type="text" 
                placeholder="MM/YY" 
                className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-center text-sm" 
              />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                required 
                type="text" 
                placeholder="CVV" 
                className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-center text-sm" 
              />
            </div>

            <div className="pt-6">
              
              {/* DESKTOP: Click to Pay */}
              <button 
                type="submit" 
                disabled={isProcessing}
                className="hidden md:flex w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-lg items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg disabled:opacity-70"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Pay Now <ArrowRight className="w-5 h-5" /></>
                )}
              </button>

              {/* MOBILE: Swipe to Pay */}
              <div className="md:hidden relative w-full h-16 bg-blue-50 rounded-full border border-blue-100 flex items-center overflow-hidden">
                {isProcessing ? (
                  <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-bold gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Processing...
                  </div>
                ) : (
                  <>
                    {/* Background Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="font-bold text-blue-300 text-sm tracking-widest uppercase ml-12">Swipe to Pay</span>
                    </div>

                    {/* Progress Fill */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 bg-blue-100 transition-none"
                      style={{ width: `${sliderValue}%` }}
                    ></div>

                    {/* The Range Input Overlay */}
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={sliderValue}
                      onChange={handleSliderChange}
                      onMouseUp={handleSliderRelease}
                      onTouchEnd={handleSliderRelease}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />

                    {/* The Visual Thumb */}
                    <div 
                      className="absolute left-1 top-1 bottom-1 w-14 bg-blue-600 rounded-full flex items-center justify-center text-white z-10 transition-none shadow-md pointer-events-none"
                      style={{ transform: `translateX(calc(${sliderValue}vw * 0.7))` }} // Approximation for thumb movement, better to rely on flex/relative positioning if exact, but simple percent is ok.
                    >
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </>
                )}
              </div>

            </div>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-xl border border-slate-200 animate-in zoom-in duration-500">
           
           <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
           </div>

           <h2 className="text-3xl font-black text-slate-900 mb-2">Success</h2>
           <p className="text-slate-500 mb-8 font-medium">Your payment has been processed.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

      {/* Basic styles to align thumb tracking since calc() with vw is tricky in range without fixed width */}
      <style dangerouslySetInnerHTML={{__html: `
        input[type=range] {
          -webkit-appearance: none;
          width: 100%;
          background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
        }
      `}} />
    </div>
  );
}
