"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Package, MapPin, Gift, ChevronRight, ChevronLeft } from "lucide-react";

export default function PaymentProcess84() {
  const TOTAL_AMOUNT = 89.99;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const nextSlide = () => setCurrentSlide(Math.min(2, currentSlide + 1));
  const prevSlide = () => setCurrentSlide(Math.max(0, currentSlide - 1));

  return (
    <div className="w-full min-h-[700px] bg-stone-100 flex flex-col items-center justify-center font-sans p-4 text-stone-800">
      
      {!isSuccess ? (
        <div className="w-full max-w-5xl">
          
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-3xl font-black text-stone-900">Checkout</h2>
            <p className="text-stone-500">Please complete all sections.</p>
          </div>

          {/* 
            Mobile: Hidden overflow container with JS controlled translation OR CSS scroll snap. 
            Let's use JS controlled translation for reliable mobile carousel buttons.
            Desktop: CSS columns for Masonry layout.
          */}
          <form onSubmit={handlePay} className="relative w-full">
            
            {/* Desktop Masonry / Mobile Carousel Wrapper */}
            <div className={`
              md:columns-2 md:gap-6 md:space-y-6 
              ${'flex md:block transition-transform duration-500 ease-in-out w-[300%] md:w-full'}
            `}
            style={
              // On mobile, slide horizontally. On desktop, ignore.
              typeof window !== 'undefined' && window.innerWidth < 768 
                ? { transform: `translateX(-${currentSlide * (100/3)}%)` } 
                : {}
            }
            >
              
              {/* Card 1: Order Summary */}
              <div className="w-1/3 md:w-full px-2 md:px-0 flex-shrink-0 md:inline-block break-inside-avoid">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 mb-6 md:mb-0">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Package className="w-5 h-5 text-indigo-500" /> Order Summary</h3>
                  <div className="space-y-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-stone-100 rounded-xl"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">Designer Lamp</h4>
                        <p className="text-xs text-stone-500">Qty: 1</p>
                      </div>
                      <p className="font-bold">$89.99</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex justify-between items-end">
                    <span className="font-bold text-stone-500">Total</span>
                    <span className="text-2xl font-black text-stone-900">${TOTAL_AMOUNT.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Delivery */}
              <div className="w-1/3 md:w-full px-2 md:px-0 flex-shrink-0 md:inline-block break-inside-avoid">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 mb-6 md:mb-0">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-500" /> Delivery</h3>
                  <div className="space-y-4">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Full Name" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={2} maxLength={50} />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Street Address" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={2} maxLength={50} />
                    <div className="flex gap-4">
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="City" className="w-2/3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={2} maxLength={50} />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 5); }} pattern="\\d{5}" maxLength={10} title="5 digit zip code" required type="text" placeholder="ZIP" className="w-1/3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Gift Options (Optional small card to show off masonry) */}
              <div className="w-1/3 md:w-full px-2 md:px-0 flex-shrink-0 md:inline-block break-inside-avoid">
                <div className="bg-indigo-50 rounded-3xl p-6 shadow-sm border border-indigo-100 mb-6 md:mb-0">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-indigo-900"><Gift className="w-5 h-5 text-indigo-500" /> Is this a gift?</h3>
                  <p className="text-sm text-indigo-700 mb-4">Add a personalized message for $2.99</p>
                  <textarea placeholder="Write your message here..." className="w-full bg-white border border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none h-20"></textarea>
                </div>
              </div>

              {/* Card 4: Payment */}
              <div className="w-1/3 md:w-full px-2 md:px-0 flex-shrink-0 md:inline-block break-inside-avoid">
                <div className="bg-stone-900 rounded-3xl p-6 shadow-xl mb-6 md:mb-0 text-white">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5 text-indigo-400" /> Payment</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-stone-800 border border-stone-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
                    </div>
                    <div className="flex gap-4">
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-stone-800 border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-stone-800 border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
                    </div>
                    
                    {/* On Desktop, this is the submit button. On mobile, we only show it on the last slide. */}
                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="w-full py-4 mt-4 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all disabled:opacity-70"
                    >
                      {isProcessing ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>Pay Now <ArrowRight className="w-5 h-5" /></>
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </form>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex justify-between items-center mt-6 px-4">
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
      const originalHandler = prevSlide;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
              disabled={currentSlide === 0}
              className="p-3 bg-white rounded-full shadow border border-stone-200 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${currentSlide === i ? 'bg-indigo-600' : 'bg-stone-300'}`}></div>
              ))}
            </div>
            <button type="button" 
              onClick={nextSlide}
              disabled={currentSlide === 3}
              className="p-3 bg-white rounded-full shadow border border-stone-200 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-xl border border-stone-200 animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-indigo-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black mb-2 text-stone-900">Success!</h2>
           <p className="text-stone-500 mb-8 font-medium">Your order is on its way.</p>
           <button type="button" 
              onClick={() => { setIsSuccess(false); setCurrentSlide(0); }}
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
