"use client";
import React, { useState, useEffect } from "react";
import { ShoppingCart, Plus, CheckCircle, ArrowRight } from "lucide-react";

export default function PaymentProcess30() {
  const [cartCount, setCartCount] = useState(0);
  const [bounce, setBounce] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const products = [
    { id: 1, name: "Mechanical Keyboard", price: 129.99, color: "bg-blue-100", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=150&q=80" },
    { id: 2, name: "Wireless Mouse", price: 59.99, color: "bg-rose-100", img: "https://images.unsplash.com/photo-1527814050087-379381547330?w=150&q=80" },
    { id: 3, name: "Desk Mat", price: 29.99, color: "bg-emerald-100", img: "https://images.unsplash.com/photo-1615563821034-71285bc0b2c1?w=150&q=80" },
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    // Trigger spring bounce animation
    setBounce(false);
    setTimeout(() => setBounce(true), 10);
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
      // Simulate server-side validation rejection
      if (Math.random() < 0.3) {
        setServerError("Payment declined by the server. Please check your details and try again.");
        setIsProcessing(false);
        return;
      }
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center font-sans p-6 overflow-hidden">
      
      {/* Global Spring Animation Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spring-bounce {
          0%   { transform: scale(1); }
          15%  { transform: scale(1.4); }
          30%  { transform: scale(0.85); }
          45%  { transform: scale(1.15); }
          60%  { transform: scale(0.92); }
          75%  { transform: scale(1.05); }
          90%  { transform: scale(0.98); }
          100% { transform: scale(1); }
        }
        .animate-spring {
          animation: spring-bounce 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      `}} />

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        
        {/* Left Side: Products */}
        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Store</h2>
          </div>

          <div className="space-y-4">
            {products.map(product => (
              <div key={product.id} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors group">
                <div className={`w-20 h-20 ${product.color} rounded-xl p-2 shrink-0 overflow-hidden`}>
                   <img src={product.img} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-slate-900">{product.name}</h3>
                  <p className="text-indigo-600 font-bold mt-1">${product.price}</p>
                </div>
                <div className="flex items-center">
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
      const originalHandler = addToCart;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                    className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm group-hover:scale-110"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Checkout / Success */}
        <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative flex flex-col">
          
          {!isSuccess ? (
            <>
              {/* Dynamic Spring Cart Icon */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black">Checkout</h2>
                <div 
                  className={`w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center relative shadow-[0_0_20px_rgba(99,102,241,0.4)] ${bounce ? 'animate-spring' : ''}`}
                >
                  <ShoppingCart className="w-6 h-6 text-white" />
                  {cartCount > 0 && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-slate-900 shadow-md">
                      {cartCount}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                {cartCount === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500">
                    <ShoppingCart className="w-12 h-12 mb-4 opacity-20" />
                    <p className="font-medium">Your cart is empty.</p>
                    <p className="text-sm">Add some products to continue.</p>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                      <div className="flex justify-between text-slate-400 font-medium text-sm mb-2">
                        <span>Items ({cartCount})</span>
                        <span>${(cartCount * 85).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-slate-400 font-medium text-sm mb-4">
                        <span>Tax</span>
                        <span>${(cartCount * 8.5).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-end pt-4 border-t border-slate-700">
                        <span className="font-bold">Total</span>
                        <span className="text-3xl font-black text-white">${(cartCount * 93.5).toFixed(2)}</span>
                      </div>
                    </div>

                    <form onSubmit={handlePay}>
                      {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                        type="submit" 
                        disabled={isProcessing}
                        className="w-full py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors disabled:opacity-70"
                      >
                        {isProcessing ? (
                          <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                        ) : (
                          <>Pay Now <ArrowRight className="w-5 h-5" /></>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
              {/* Success state also uses spring bounce */}
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 animate-spring">
                <CheckCircle className="w-12 h-12 text-emerald-500" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black mb-2">Payment Successful!</h3>
              <p className="text-slate-400 mb-8">Thank you for shopping with us.</p>
              <button type="button" 
                onClick={() => { setIsSuccess(false); setCartCount(0); }}
                className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors"
              >
                Start New Order
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
