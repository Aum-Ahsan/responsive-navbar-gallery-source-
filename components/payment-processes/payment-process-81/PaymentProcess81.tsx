"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, ChevronUp, ChevronDown, ShoppingBag } from "lucide-react";

export default function PaymentProcess81() {
  const TOTAL_AMOUNT = 199.99;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full h-[700px] bg-neutral-100 font-sans text-neutral-800 relative overflow-hidden flex flex-col md:flex-row">
      
      {!isSuccess ? (
        <>
          {/* Main Content Area (Cart) */}
          <div className="flex-1 p-6 md:p-12 overflow-y-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                <ShoppingBag className="w-8 h-8" /> Your Cart
              </h2>
              
              <div className="space-y-4 mb-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-neutral-200">
                    <div className="w-20 h-20 bg-neutral-100 rounded-xl"></div>
                    <div className="flex-1">
                      <h3 className="font-bold">Premium Item {item}</h3>
                      <p className="text-sm text-neutral-500">Color: Black, Size: M</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${(TOTAL_AMOUNT / 3).toFixed(2)}</p>
                      <p className="text-xs text-neutral-400">Qty: 1</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile FAB to open bottom sheet */}
              <div className="md:hidden fixed bottom-6 left-6 right-6 z-20">
                 <button type="button" 
                   onClick={() => setIsMobileSheetOpen(true)}
                   className="w-full bg-black text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-xl"
                 >
                   Checkout (${TOTAL_AMOUNT.toFixed(2)}) <ChevronUp className="w-5 h-5" />
                 </button>
              </div>
            </div>
          </div>

          {/* Overlay for mobile bottom sheet */}
          {isMobileSheetOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/40 z-30 animate-in fade-in"
              onClick={() => setIsMobileSheetOpen(false)}
            ></div>
          )}

          {/* Payment Panel (Bottom Sheet on Mobile, Side Panel on Desktop) */}
          <div 
            className={`
              absolute md:relative z-40 
              bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto
              w-full md:w-[400px] lg:w-[450px] h-[85vh] md:h-full 
              bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-[-10px_0_40px_rgba(0,0,0,0.05)]
              rounded-t-3xl md:rounded-none border-t md:border-t-0 md:border-l border-neutral-200
              flex flex-col
              transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
              ${isMobileSheetOpen ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
            `}
          >
            {/* Drag Handle (Mobile only) */}
            <div className="md:hidden w-full flex justify-center py-4 cursor-pointer" onClick={() => setIsMobileSheetOpen(false)}>
              <div className="w-12 h-1.5 bg-neutral-300 rounded-full"></div>
            </div>

            <div className="p-6 md:p-8 flex-1 overflow-y-auto">
              <h2 className="text-2xl font-black mb-6">Payment Details</h2>

              <div className="bg-neutral-50 rounded-2xl p-5 mb-8 border border-neutral-100">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-neutral-500">Subtotal</span>
                  <span className="font-bold">${TOTAL_AMOUNT.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-neutral-200">
                  <span className="font-bold text-neutral-800">Total</span>
                  <span className="text-3xl font-black text-black">${TOTAL_AMOUNT.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handlePay} className="space-y-4">
                
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border border-neutral-300 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-black transition-colors font-mono tracking-widest text-sm"  minLength={16} />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-white border border-neutral-300 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-white border border-neutral-300 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full py-5 bg-black text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Pay ${TOTAL_AMOUNT.toFixed(2)} <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center p-6 bg-white animate-in zoom-in duration-500">
           <div className="text-center max-w-md w-full">
             <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
             </div>
             <h2 className="text-3xl font-black mb-2">Order Complete!</h2>
             <p className="text-neutral-500 mb-8 font-medium">Your receipt has been sent to your email address.</p>
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
      const originalHandler = () => { setIsSuccess(false); setIsMobileSheetOpen(false); ;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }}}
                className="w-full py-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold rounded-xl transition-colors"
              >
                Continue Shopping
              </button>
           </div>
        </div>
      )}

    </div>
  );
}
