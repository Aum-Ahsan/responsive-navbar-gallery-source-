"use client";
import React, { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle2, ShoppingBag, MapPin, CreditCard, Shield } from "lucide-react";

export default function PaymentProcess09() {
  const [slide, setSlide] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSlides = 3; // 0: Cart, 1: Shipping, 2: Payment

  const nextSlide = () => {
    if (slide < totalSlides - 1) setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
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
      setSlide(3); // Success slide
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
      
      <div className="w-full max-w-4xl h-[600px] md:h-[700px] relative">
        
        {/* Header / Progress indicators */}
        <div className="absolute top-0 left-0 w-full z-10 flex justify-between items-center px-4 md:px-0">
          <h1 className="text-2xl font-bold tracking-tight">Kiosk</h1>
          
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`w-12 h-1.5 rounded-full transition-all duration-500 ${
                  slide === i ? 'bg-indigo-500' : slide > i ? 'bg-indigo-500/50' : 'bg-white/10'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full h-full pt-16 pb-20 md:pb-0 relative">
          
          <div 
            className="w-full h-full flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            
            {/* Slide 0: Cart */}
            <div className="w-full h-full flex-shrink-0 px-4 md:px-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <ShoppingBag className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl md:text-5xl font-bold">Your Cart</h2>
              </div>
              
              <div className="space-y-6 flex-1 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {[1, 2].map((item) => (
                  <div key={item} className="flex gap-6 items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="w-24 h-24 bg-white/10 rounded-xl"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Designer Chair {item}</h3>
                      <p className="text-white/50">Furniture • Matte Black</p>
                    </div>
                    <div className="text-2xl font-bold">$299</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center border-t border-white/10 pt-8">
                <div>
                  <div className="text-white/50">Total</div>
                  <div className="text-4xl font-black">$598.00</div>
                </div>
                <button type="button" onClick={(e) => {
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
      const originalHandler = nextSlide;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                  Continue <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slide 1: Shipping */}
            <div className="w-full h-full flex-shrink-0 px-4 md:px-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl md:text-5xl font-bold">Shipping</h2>
              </div>
              
              <div className="space-y-6 max-w-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">First Name</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"  minLength={2} maxLength={50} />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Last Name</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"  minLength={2} maxLength={50} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Address</label>
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"  minLength={2} maxLength={50} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">City</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"  minLength={2} maxLength={50} />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Zip Code</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"  minLength={2} maxLength={50} />
                  </div>
                </div>
              </div>

              <div className="mt-auto md:mt-12 flex justify-between items-center">
                <button type="button" onClick={prevSlide} className="px-6 py-4 text-white/50 hover:text-white font-bold flex items-center gap-2 transition-colors">
                  <ChevronLeft className="w-5 h-5" /> Back
                </button>
                <button type="button" onClick={nextSlide} className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                  Payment <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slide 2: Payment */}
            <div className="w-full h-full flex-shrink-0 px-4 md:px-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <CreditCard className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl md:text-5xl font-bold">Payment</h2>
              </div>
              
              <form onSubmit={handlePay} className="w-full max-w-xl">
                
                {/* Simulated Card */}
                <div className="w-full h-56 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl mb-8 p-6 shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-8 bg-white/20 rounded"></div>
                    <Shield className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="font-mono text-2xl tracking-[0.2em] mb-4 text-white/90">
                    **** **** **** ****
                  </div>
                  <div className="flex justify-between text-white/60 font-mono uppercase text-sm">
                    <span>Cardholder</span>
                    <span>MM/YY</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono"  minLength={16} />
                  <div className="flex gap-4">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono"  minLength={5} />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="password" placeholder="CVC" className="w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono"  minLength={3} />
                  </div>
                </div>

                <div className="mt-12 flex justify-between items-center">
                  <button type="button" onClick={prevSlide} className="px-6 py-4 text-white/50 hover:text-white font-bold flex items-center gap-2 transition-colors">
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button type="submit" disabled={isProcessing} className="px-10 py-4 bg-indigo-500 text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:scale-100">
                    {isProcessing ? 'Processing...' : 'Pay $598.00'}
                  </button>
                </div>
              </form>
            </div>

            {/* Slide 3: Success */}
            <div className="w-full h-full flex-shrink-0 px-4 md:px-12 flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 bg-emerald-500/20 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-16 h-16 text-emerald-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Payment Successful!</h2>
              <p className="text-white/50 text-lg mb-12 max-w-md">Thank you for your purchase. Your order has been received and is being processed.</p>
              <button type="button" onClick={() => setSlide(0)} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-colors">
                Start New Order
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
