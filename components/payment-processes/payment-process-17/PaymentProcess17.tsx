"use client";
import React, { useState, useCallback, useRef } from "react";
import { Heart, Coffee, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PaymentProcess17() {
  const [tipAdded, setTipAdded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const basePrice = 24.50;
  const tipAmount = 2.00;
  
  const total = basePrice + (tipAdded ? tipAmount : 0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Custom double tap logic for better mobile support than just onDoubleClick
  const handleInteraction = () => {
    if (tipAdded) {
      // If already added, tap again to remove
      setTipAdded(false);
      return;
    }

    setClickCount((prev) => prev + 1);

    if (clickCount === 1) {
      // Second click within 300ms
      setTipAdded(true);
      setShowAnimation(true);
      setClickCount(0);
      
      // Hide animation after 1s
      setTimeout(() => setShowAnimation(false), 1000);
      
      if (timerRef.current) clearTimeout(timerRef.current);
    } else {
      // First click
      timerRef.current = setTimeout(() => {
        setClickCount(0); // Reset if second click doesn't happen fast enough
      }, 300);
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

  if (isSuccess) {
    return (
      <div className="w-full min-h-screen bg-pink-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-sm w-full border border-pink-100 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-pink-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed</h2>
          <p className="text-gray-500 mb-6">Your order is being prepared.</p>
          
          <div className="bg-pink-50 rounded-xl p-4 mb-8 text-left">
            <div className="flex justify-between text-sm text-pink-900 mb-2 font-medium">
              <span>Total Paid</span>
              <span>${total.toFixed(2)}</span>
            </div>
            {tipAdded && (
              <div className="flex items-center gap-2 text-xs text-pink-600">
                <Heart className="w-4 h-4 fill-pink-500 text-pink-500" /> Includes $2 tip. Thanks!
              </div>
            )}
          </div>

          <button type="button" onClick={() => { setIsSuccess(false); setTipAdded(false); }} className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-pink-50 flex items-center justify-center font-sans p-6 selection:bg-pink-200">
      
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-pink-100 relative">
        
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Checkout</h1>
            <p className="text-sm text-gray-500 font-medium">Bakehouse Cafe</p>
          </div>
          <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center">
            <Coffee className="w-6 h-6" />
          </div>
        </header>

        {/* Order Details */}
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex-shrink-0">
               <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=150&q=80" alt="Pastry" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Almond Croissant</h3>
              <p className="text-sm text-gray-500">Qty: 2</p>
            </div>
            <div className="font-bold text-gray-900">$12.00</div>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex-shrink-0">
               <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&q=80" alt="Coffee" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Caramel Latte</h3>
              <p className="text-sm text-gray-500">Oat milk • Large</p>
            </div>
            <div className="font-bold text-gray-900">$12.50</div>
          </div>
        </div>

        {/* Interactive Double Tap Area */}
        <div 
          className="relative w-full h-48 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl mb-8 flex flex-col items-center justify-center text-white cursor-pointer overflow-hidden shadow-inner group select-none"
          onClick={handleInteraction}
        >
          {/* Popping Heart Animation */}
          {showAnimation && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <Heart className="w-24 h-24 text-white fill-white opacity-0 animate-[ping_1s_ease-out_forwards]" />
              <Heart className="absolute w-24 h-24 text-white fill-white opacity-0 animate-[scaleUpFade_1s_ease-out_forwards]" />
            </div>
          )}

          {/* Inner Content */}
          <div className={`relative z-10 text-center transition-transform duration-300 ${clickCount === 1 ? 'scale-95' : 'scale-100'}`}>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Heart className={`w-8 h-8 transition-colors duration-300 ${tipAdded ? 'fill-white text-white' : 'text-white'}`} />
            </div>
            {tipAdded ? (
              <div>
                <h3 className="font-bold text-lg leading-none mb-1">Tip Added!</h3>
                <p className="text-white/80 text-xs font-medium">Tap again to remove</p>
              </div>
            ) : (
              <div>
                <h3 className="font-bold text-lg leading-none mb-1">Double Tap to Tip</h3>
                <p className="text-white/80 text-xs font-medium">Add a $2.00 tip for the barista</p>
              </div>
            )}
          </div>
          
          {/* Subtle instructions */}
          <div className="absolute bottom-4 opacity-50 text-[10px] font-bold uppercase tracking-widest pointer-events-none group-hover:opacity-100 transition-opacity">
            Interactive Area
          </div>
        </div>

        {/* CSS for custom animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scaleUpFade {
            0% { transform: scale(0.5); opacity: 1; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
          }
        `}} />

        {/* Payment Summary & Action */}
        <div className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100">
          <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
            <span>Subtotal</span>
            <span>${basePrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm font-medium transition-all duration-300 overflow-hidden" style={{ height: tipAdded ? '20px' : '0px', marginBottom: tipAdded ? '8px' : '0px', opacity: tipAdded ? 1 : 0 }}>
            <span className="text-pink-600 flex items-center gap-1"><Heart className="w-3 h-3 fill-pink-600" /> Tip</span>
            <span className="text-pink-600">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-end pt-3 border-t border-gray-200">
            <span className="font-bold text-gray-900">Total</span>
            <span className="text-3xl font-black text-gray-900 transition-all duration-300">${total.toFixed(2)}</span>
          </div>
        </div>

        <form onSubmit={handlePay}>
          <button 
            type="submit" 
            disabled={isProcessing}
            className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-xl"
          >
            {isProcessing ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              `Pay $${total.toFixed(2)}`
            )}
          </button>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-gray-400">
            <ShieldCheck className="w-4 h-4" /> Secure Payment
          </div>
        </form>

      </div>
    </div>
  );
}
