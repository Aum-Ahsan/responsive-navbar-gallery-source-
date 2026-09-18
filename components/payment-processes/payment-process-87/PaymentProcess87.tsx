"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";

export default function PaymentProcess87() {
  const TOTAL_AMOUNT = 210.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-white flex justify-center font-sans text-neutral-800">
      
      {!isSuccess ? (
        <div className="w-full max-w-6xl flex flex-col md:flex-row relative">
          
          {/* 
            MOBILE: Collapsible Order Summary Header 
            DESKTOP: Hidden (Header is part of the sticky sidebar)
          */}
          <div className="md:hidden border-b border-neutral-200 bg-neutral-50 sticky top-0 z-20">
            <button type="button" 
              onClick={() => setIsSummaryOpen(!isSummaryOpen)}
              className="w-full p-4 flex justify-between items-center text-blue-600 font-medium"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                {isSummaryOpen ? 'Hide order summary' : 'Show order summary'}
                {isSummaryOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
              <span className="text-neutral-900 font-bold">${TOTAL_AMOUNT.toFixed(2)}</span>
            </button>
          </div>

          {/* 
            RIGHT COLUMN (Order Summary)
            MOBILE: Accordion body (expands below header)
            DESKTOP: Sticky right sidebar
          */}
          <div 
            className={`
              w-full md:w-5/12 lg:w-4/12 bg-neutral-50 border-b md:border-b-0 md:border-l border-neutral-200 order-1 md:order-2 
              ${isSummaryOpen ? 'block' : 'hidden md:block'}
            `}
          >
            {/* The sticky wrapper for desktop */}
            <div className="p-6 md:p-8 md:sticky md:top-0 h-auto md:h-screen md:max-h-[800px] md:overflow-y-auto">
              <h2 className="hidden md:block text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white border border-neutral-200 rounded-lg shadow-sm"></div>
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-neutral-500 text-white text-xs flex items-center justify-center rounded-full">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Product Name {item}</h4>
                      <p className="text-xs text-neutral-500">Variant Details</p>
                    </div>
                    <p className="font-medium text-sm">${(TOTAL_AMOUNT / 3).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-200 space-y-2 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-neutral-900">${TOTAL_AMOUNT.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="font-medium text-neutral-900">Calculated at next step</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-200 flex justify-between items-end">
                <span className="font-bold text-neutral-900 text-lg">Total</span>
                <span className="text-2xl font-black text-neutral-900">
                  <span className="text-sm font-normal text-neutral-500 mr-2">USD</span>
                  ${TOTAL_AMOUNT.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* 
            LEFT COLUMN (Main Form)
            MOBILE: Below summary
            DESKTOP: Left side
          */}
          <div className="w-full md:w-7/12 lg:w-8/12 p-6 md:p-12 lg:p-16 order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-8">Payment</h2>

            <form onSubmit={handlePay} className="space-y-8">
              
              {/* Extra form fields to make the page long enough to test sticky behavior */}
              <div>
                <h3 className="text-lg font-medium mb-4">Contact</h3>
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="Email" className="w-full border border-neutral-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  minLength={5} maxLength={100} />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Shipping address</h3>
                <div className="space-y-3">
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Country/Region" className="w-full border border-neutral-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  minLength={2} maxLength={50} />
                  <div className="flex gap-3">
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="First name" className="w-1/2 border border-neutral-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  minLength={2} maxLength={50} />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Last name" className="w-1/2 border border-neutral-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  minLength={2} maxLength={50} />
                  </div>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Address" className="w-full border border-neutral-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  minLength={2} maxLength={50} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="City" className="w-full border border-neutral-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  minLength={2} maxLength={50} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Payment</h3>
                <p className="text-sm text-neutral-500 mb-4">All transactions are secure and encrypted.</p>
                <div className="border border-neutral-300 rounded-md p-4 bg-neutral-50 space-y-4">
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full bg-white border border-neutral-300 rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-mono text-sm"  minLength={16} />
                  </div>
                  <div className="flex gap-3">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="Expiration date (MM / YY)" className="w-1/2 bg-white border border-neutral-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"  minLength={5} />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="Security code" className="w-1/2 bg-white border border-neutral-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"  minLength={3} />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full md:w-auto md:px-12 py-4 bg-blue-600 text-white rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-70"
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Pay now</>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      ) : (
        <div className="w-full h-screen flex flex-col items-center justify-center p-6 text-center animate-in zoom-in duration-500">
           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-10 h-10 text-green-600" strokeWidth={2.5} />
           </div>
           <h2 className="text-3xl font-bold mb-2 text-neutral-900">Thank you!</h2>
           <p className="text-neutral-500 mb-8 max-w-md">Your order is confirmed. You'll receive an email with your order details shortly.</p>
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
      const originalHandler = () => { setIsSuccess(false); setIsSummaryOpen(false); ;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }}}
              className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-md transition-colors"
            >
              Continue Shopping
            </button>
        </div>
      )}

    </div>
  );
}
