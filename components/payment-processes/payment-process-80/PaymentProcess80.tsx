"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function PaymentProcess80() {
  const TOTAL_AMOUNT = 89.99;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Material Design 3 Text Field Component Mock
  const MD3Input = ({ label, type = "text", placeholder, icon: Icon }: any) => {
    const [focused, setFocused] = useState(false);
    return (
      <div className="relative pt-4">
        <label 
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            focused ? 'text-xs text-[#006874] top-1' : 'text-base text-[#3f484a] top-4'
          }`}
        >
          {label}
        </label>
        <div className="relative">
          {Icon && <Icon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3f484a]" />}
          <input 
            required 
            type={type} 
            placeholder={focused ? placeholder : ""} 
            onFocus={() => setFocused(true)}
            onBlur={(e) => setFocused(e.target.value !== "")}
            className={`w-full bg-[#eef1f1] rounded-t-lg border-b-2 px-4 pt-6 pb-2 text-[#191c1d] focus:outline-none transition-colors ${
              focused ? 'border-[#006874] bg-[#e3e8e8]' : 'border-[#6f797a]'
            }`} 
          />
        </div>
      </div>
    );
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-[#fbfdfd] flex items-center justify-center font-sans p-6 text-[#191c1d]">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-[#f4f7f7] rounded-3xl p-8 shadow-[0_4px_8px_3px_rgba(0,0,0,0.15)] animate-in fade-in duration-300 relative z-10">
          
          <div className="mb-8">
            <h2 className="text-3xl font-medium tracking-tight mb-2">Checkout</h2>
            <p className="text-[#3f484a] text-sm">Secure payment via Google Pay</p>
          </div>

          <div className="bg-[#cce8e9] rounded-3xl p-6 mb-8 text-[#051f23]">
             <div className="flex justify-between items-center text-sm mb-2">
               <span className="font-medium">Subtotal</span>
               <span>${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="flex justify-between items-end pt-4 border-t border-[#006874]/20">
               <span className="font-bold">Total</span>
               <span className="text-3xl font-medium">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <MD3Input label="Card Number" placeholder="0000 0000 0000 0000" icon={CreditCard} />
            
            <div className="flex gap-4">
              <div className="w-1/2">
                <MD3Input label="Expiry Date" placeholder="MM/YY" />
              </div>
              <div className="w-1/2">
                <MD3Input label="CVC" placeholder="123" />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-xs text-[#3f484a]">
              <ShieldCheck className="w-4 h-4 text-[#006874]" /> Info is encrypted
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full py-4 bg-[#006874] text-white rounded-full font-medium text-base flex items-center justify-center gap-2 hover:bg-[#005a64] hover:shadow-md transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Pay ${TOTAL_AMOUNT.toFixed(2)} <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-[#f4f7f7] rounded-3xl p-12 text-center shadow-[0_4px_8px_3px_rgba(0,0,0,0.15)] animate-in zoom-in duration-300">
           
           <div className="w-20 h-20 bg-[#cce8e9] rounded-full flex items-center justify-center mx-auto mb-6 text-[#006874]">
             <CheckCircle2 className="w-10 h-10" strokeWidth={2.5} />
           </div>

           <h2 className="text-3xl font-medium text-[#191c1d] mb-2">Success</h2>
           <p className="text-[#3f484a] mb-10">Your payment has been processed.</p>
           
           <button type="button" 
              onClick={(e) => {
      const inputs = Array.from(document.querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = () => { setIsSuccess(false); ;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }}}
              className="px-8 py-3 bg-[#cce8e9] text-[#051f23] hover:bg-[#bce0e1] hover:shadow-md font-medium rounded-full transition-all active:scale-[0.98]"
            >
              Continue
            </button>
        </div>
      )}

    </div>
  );
}
