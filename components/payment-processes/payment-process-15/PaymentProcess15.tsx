"use client";
import React, { useState, useEffect, useRef } from "react";
import { Sparkles, CreditCard, Check, ArrowRight } from "lucide-react";

export default function PaymentProcess15() {
  const [scratched, setScratched] = useState<boolean[]>(Array(100).fill(false));
  const [isRevealed, setIsRevealed] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);

  const basePrice = 249.99;

  // Initialize discount once on mount
  useEffect(() => {
    const discounts = [10, 15, 20, 25, 30];
    setDiscount(discounts[Math.floor(Math.random() * discounts.length)]);
  }, []);

  const handlePointerDown = () => setIsPointerDown(true);
  const handlePointerUp = () => setIsPointerDown(false);

  useEffect(() => {
    if (!isRevealed) {
      const scratchedCount = scratched.filter(Boolean).length;
      if (scratchedCount > 40) { // 40% cleared to reveal
        setIsRevealed(true);
        // Clear the rest
        setScratched(Array(100).fill(true));
      }
    }
  }, [scratched, isRevealed]);

  const handleScratch = (index: number) => {
    if (isPointerDown && !scratched[index]) {
      setScratched(prev => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
    }
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const finalPrice = isRevealed ? basePrice * (1 - discount / 100) : basePrice;

  if (isSuccess) {
    return (
      <div className="w-full min-h-screen bg-indigo-950 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center max-w-sm w-full animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">Success!</h2>
          <p className="text-gray-500 mb-6">You paid <strong className="text-gray-900">${finalPrice.toFixed(2)}</strong></p>
          {isRevealed && (
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-4 h-4" /> You saved ${(basePrice - finalPrice).toFixed(2)}!
            </div>
          )}
          <button type="button" onClick={() => { setIsSuccess(false); setIsRevealed(false); setScratched(Array(100).fill(false)); }} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="w-full min-h-screen bg-indigo-50 font-sans flex items-center justify-center p-6 selection:bg-indigo-200"
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-indigo-100/50">
        
        {/* Header */}
        <div className="bg-indigo-950 text-white p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          
          <h1 className="text-2xl font-black mb-1 relative z-10">Checkout</h1>
          <p className="text-indigo-300 font-medium relative z-10">Complete your order</p>
        </div>

        <div className="p-8 pb-4">
          
          {/* Scratch Card Area */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900">Scratch to Reveal Discount</h3>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            <div 
              className="w-full aspect-[21/9] bg-gradient-to-br from-amber-300 to-amber-500 rounded-2xl relative overflow-hidden shadow-inner flex items-center justify-center border-4 border-amber-100 select-none touch-none"
              onPointerDown={handlePointerDown}
            >
              
              {/* Underlying Content (Discount) */}
              <div className="text-center animate-in zoom-in duration-500">
                <div className="text-3xl font-black text-white drop-shadow-md">
                  {discount}% OFF
                </div>
                <div className="text-amber-100 font-bold text-sm tracking-widest uppercase">
                  Applied to order
                </div>
              </div>

              {/* Scratch Grid Overlay */}
              <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-10">
                {scratched.map((isScratched, i) => (
                  <div 
                    key={i}
                    onPointerEnter={() => handleScratch(i)}
                    className={`bg-slate-300 w-full h-full transition-opacity duration-150 ${isScratched ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                      // Give it a slightly metallic texture look by varying shades slightly
                      backgroundColor: isScratched ? 'transparent' : `hsl(210, 20%, ${70 + (i % 3) * 5}%)`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Overlay metallic texture image (optional, just using css gradient for now) */}
              <div className={`absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-400/50 pointer-events-none transition-opacity duration-1000 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}></div>
              
              {!isRevealed && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 mix-blend-overlay opacity-50">
                  <span className="font-black text-2xl text-slate-600 tracking-widest uppercase rotate-[-5deg]">Scratch Here</span>
                </div>
              )}
            </div>
          </div>

          {/* Order Totals */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-8 space-y-3 border border-gray-100">
            <div className="flex justify-between text-gray-500 text-sm font-medium">
              <span>Subtotal</span>
              <span>${basePrice.toFixed(2)}</span>
            </div>
            
            {/* Dynamic Discount Row */}
            <div className={`flex justify-between text-sm font-bold transition-all duration-500 overflow-hidden ${isRevealed ? 'text-green-500 max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
              <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> Discount ({discount}%)</span>
              <span>-${(basePrice * (discount / 100)).toFixed(2)}</span>
            </div>
            
            <div className="pt-3 border-t border-gray-200 flex justify-between items-end">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-3xl font-black text-gray-900 transition-all duration-500">
                ${finalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <form onSubmit={handlePay}>
            {/* Payment Info */}
            <div className="relative mb-8">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-indigo-500 rounded-r-full"></div>
              <div className="pl-4">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Card Details</label>
                <div className="flex items-center gap-4 bg-white border border-gray-200 p-3 rounded-xl focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
                  <div className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5 text-gray-500" />
                  </div>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full focus:outline-none text-sm font-medium font-mono text-gray-900 placeholder-gray-400"  minLength={16} />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30 disabled:opacity-70 group"
            >
              {isProcessing ? (
                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Pay Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
