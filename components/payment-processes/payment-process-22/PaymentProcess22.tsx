"use client";
import React, { useState } from "react";
import { Check, CreditCard, Lock, ArrowRight } from "lucide-react";

export default function PaymentProcess22() {
  type ButtonState = 'idle' | 'loading' | 'success';
  const [buttonState, setButtonState] = useState<ButtonState>('idle');

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

    if (buttonState !== 'idle') return;
    
    setButtonState('loading');
    
    setTimeout(() => {
      setButtonState('success');
      
      // Reset after a while just for demo purposes
      setTimeout(() => {
        setButtonState('idle');
      }, 3000);
    }, 2500);
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 flex items-center justify-center font-sans p-6 text-stone-900">
      
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black tracking-tight">Checkout</h1>
          <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center">
            <span className="font-bold text-sm">₹</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-4 mb-8">
          <div className="flex gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm overflow-hidden flex items-center justify-center shrink-0 p-2">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&q=80" alt="Product" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-bold text-sm">Nike Air Max 270</h3>
              <p className="text-stone-500 text-xs">Size: US 10 • Red</p>
              <div className="font-bold mt-1">₹12,495</div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-stone-100 flex justify-between items-end">
            <span className="font-bold text-stone-500">Total</span>
            <span className="text-2xl font-black">₹12,495</span>
          </div>
        </div>

        <form onSubmit={handlePay} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Card Information</label>
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden focus-within:border-stone-900 transition-all">
              <div className="relative border-b border-stone-200">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full pl-10 pr-4 py-3 focus:outline-none text-sm font-medium"  minLength={16} />
              </div>
              <div className="flex">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 px-4 py-3 border-r border-stone-200 focus:outline-none text-sm font-medium"  minLength={5} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVC" className="w-1/2 px-4 py-3 focus:outline-none text-sm font-medium"  minLength={3} />
              </div>
            </div>
          </div>

          <div className="pt-6 h-24 flex items-center justify-center">
            
            {/* The Morphing Button */}
            <button
              type="submit"
              disabled={buttonState !== 'idle'}
              className="relative flex items-center justify-center overflow-hidden outline-none transition-all duration-500 ease-in-out shadow-lg"
              style={{
                width: buttonState === 'idle' ? '100%' : '64px',
                height: buttonState === 'idle' ? '56px' : '64px',
                borderRadius: buttonState === 'idle' ? '12px' : '32px',
                backgroundColor: buttonState === 'success' ? '#10b981' : '#1c1917', // green-500 or stone-900
                color: 'white',
              }}
            >
              
              {/* Idle State Content */}
              <div 
                className={`absolute inset-0 flex items-center justify-center gap-2 font-bold text-lg whitespace-nowrap transition-opacity duration-300 ${
                  buttonState === 'idle' ? 'opacity-100 delay-200' : 'opacity-0'
                }`}
              >
                Pay ₹12,495 <ArrowRight className="w-5 h-5" />
              </div>

              {/* Loading State Content */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  buttonState === 'loading' ? 'opacity-100 delay-200' : 'opacity-0'
                }`}
              >
                {/* SVG spinner */}
                <svg className="w-8 h-8 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>

              {/* Success State Content */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  buttonState === 'success' ? 'opacity-100 delay-200' : 'opacity-0'
                }`}
              >
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </div>

            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-stone-400 mt-2">
            <Lock className="w-3 h-3" /> Secure Payment
          </div>

        </form>

      </div>
    </div>
  );
}
