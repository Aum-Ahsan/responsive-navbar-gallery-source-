"use client";
import React, { useState, useRef } from "react";
import { ArrowRight, Check, CreditCard, Lock, ShieldCheck } from "lucide-react";

export default function PaymentProcess29() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [expandCircle, setExpandCircle] = useState(false);
  
  // To track where the button was clicked to origin the animation
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [circleOrigin, setCircleOrigin] = useState({ x: 0, y: 0 });

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
    
    // Calculate the center of the button relative to the parent container
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const parentRect = buttonRef.current.closest('.reveal-container')?.getBoundingClientRect();
      
      if (parentRect) {
        setCircleOrigin({
          x: rect.left - parentRect.left + rect.width / 2,
          y: rect.top - parentRect.top + rect.height / 2
        });
      }
    }

    setTimeout(() => {
      setIsProcessing(false);
      setExpandCircle(true);
      
      // Delay showing the success content slightly so the circle expands first
      setTimeout(() => {
        setIsSuccess(true);
      }, 400);
    }, 2000);
  };

  const reset = () => {
    setIsSuccess(false);
    setExpandCircle(false);
  };

  return (
    <div className="w-full min-h-screen bg-stone-900 flex items-center justify-center font-sans p-6">
      
      {/* The main container needs to have overflow-hidden for the reveal effect */}
      <div className="reveal-container max-w-md w-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden border border-stone-200">
        
        {/* === DEFAULT STATE === */}
        <div className={`transition-opacity duration-300 relative z-10 ${expandCircle ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-black text-stone-900 tracking-tight">Checkout</h1>
            <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-100 text-center">
            <div className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-1">Total Due</div>
            <div className="text-4xl font-black text-stone-900 tracking-tighter">$129.00</div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 ml-1">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white border border-stone-200 rounded-xl pl-12 pr-4 py-4 text-stone-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-sm"  minLength={16} />
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 ml-1">Expiry</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-4 text-stone-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm"  minLength={5} />
                </div>
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 ml-1">CVV</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="123" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-4 text-stone-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm"  minLength={2} maxLength={50} />
                </div>
              </div>
            </div>

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
              ref={buttonRef}
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30 disabled:opacity-80 disabled:hover:bg-indigo-600"
            >
              {isProcessing ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                <>Pay Now <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-stone-400 mt-4">
              <Lock className="w-3 h-3" /> Secure 256-bit encryption
            </div>
          </form>
        </div>

        {/* === EXPANDING CIRCLE LAYER === */}
        {/* We place it in the center of the button and scale it to cover the parent */}
        <div 
          className="absolute rounded-full bg-indigo-600 z-20 transition-transform duration-[800ms] ease-in-out"
          style={{
            // Start as a tiny dot in the center of the button
            width: '10px',
            height: '10px',
            left: `${circleOrigin.x - 5}px`, // -5 because radius is 5
            top: `${circleOrigin.y - 5}px`,
            // When expandCircle is true, scale it massive (e.g. 150x means 1500px diameter, plenty to cover the card)
            transform: expandCircle ? 'scale(150)' : 'scale(0)',
            opacity: expandCircle ? 1 : 0,
            pointerEvents: expandCircle ? 'auto' : 'none'
          }}
        ></div>

        {/* === SUCCESS STATE CONTENT === */}
        {/* Fades in on top of the expanded circle */}
        <div 
          className={`absolute inset-0 z-30 flex flex-col items-center justify-center p-10 text-white text-center transition-opacity duration-500 delay-200 ${
            isSuccess ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 shadow-inner animate-in zoom-in duration-500 delay-300">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
          
          <h2 className="text-3xl font-black mb-2 tracking-tight animate-in slide-in-from-bottom-4 duration-500 delay-[400ms]">Success!</h2>
          <p className="text-indigo-200 font-medium mb-12 animate-in slide-in-from-bottom-4 duration-500 delay-[500ms]">
            Your payment of $129.00 has been processed successfully.
          </p>
          
          <button type="button" 
            onClick={reset}
            className="w-full py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-indigo-50 transition-colors shadow-xl animate-in slide-in-from-bottom-4 duration-500 delay-[600ms]"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
