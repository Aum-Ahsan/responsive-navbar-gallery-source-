"use client";
import React, { useState, useEffect } from "react";
import { Trash2, RotateCcw, CreditCard, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  status: 'active' | 'removing';
}

const initialCart: CartItem[] = [
  { id: "1", name: "Ergonomic Chair", price: 299.00, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=150&q=80", status: 'active' },
  { id: "2", name: "Mechanical Keyboard", price: 149.00, img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=150&q=80", status: 'active' },
  { id: "3", name: "Wireless Mouse", price: 79.00, img: "https://images.unsplash.com/photo-1527814050087-379381547330?w=150&q=80", status: 'active' }
];

export default function PaymentProcess43() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-remove items that have been in 'removing' state for 5 seconds
  useEffect(() => {
    const itemsToRemove = cart.filter(item => item.status === 'removing');
    
    if (itemsToRemove.length === 0) return;

    const timers = itemsToRemove.map(item => 
      setTimeout(() => {
        setCart(prev => prev.filter(p => p.id !== item.id));
      }, 5000)
    );

    return () => timers.forEach(clearTimeout);
  }, [cart]);

  const handleRemove = (id: string) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'removing' } : item
    ));
  };

  const handleUndo = (id: string) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'active' } : item
    ));
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

  const activeItems = cart.filter(item => item.status === 'active');
  const total = activeItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100">
      
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Cart */}
        <div className="lg:col-span-7 bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
          <h2 className="text-2xl font-black text-white mb-6">Shopping Cart</h2>
          
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-700 h-28">
                
                {/* ACTIVE STATE */}
                <div 
                  className={`absolute inset-0 flex items-center p-4 gap-4 transition-all duration-300 ease-in-out
                    ${item.status === 'active' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
                  `}
                >
                  <img src={item.img} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-200">{item.name}</h3>
                    <p className="text-emerald-400 font-bold">${item.price.toFixed(2)}</p>
                  </div>
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
      const originalHandler = () => handleRemove(item.id);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                    className="p-3 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* REMOVING (UNDO) STATE */}
                <div 
                  className={`absolute inset-0 flex items-center justify-between p-6 transition-all duration-300 ease-in-out bg-slate-900
                    ${item.status === 'removing' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Trash2 className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-slate-300 font-bold">{item.name} removed.</p>
                      <p className="text-slate-500 text-sm">Item will be permanently deleted shortly.</p>
                    </div>
                  </div>
                  <button type="button" 
                    onClick={() => handleUndo(item.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg font-bold transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Undo
                  </button>

                  {/* Progress bar for auto-delete */}
                  {item.status === 'removing' && (
                    <div className="absolute bottom-0 left-0 h-1 bg-red-500/50 animate-[shrink_5s_linear_forwards]" style={{width: '100%'}}></div>
                  )}
                </div>

              </div>
            ))}

            {cart.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                Cart is empty.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Checkout */}
        <div className="lg:col-span-5">
          {!isSuccess ? (
            <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-xl h-full flex flex-col relative animate-in slide-in-from-right-8 duration-500 border border-slate-200">
              
              <h2 className="text-2xl font-black mb-8">Checkout</h2>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-bold text-slate-500">Total Due</span>
                  <span className="text-4xl font-black text-slate-900">${total.toFixed(2)}</span>
                </div>
                <div className="text-sm font-medium text-slate-400 flex items-center justify-end gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Transaction
                </div>
              </div>

              <form onSubmit={handlePay} className="mt-auto space-y-4">
                
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-sm"  minLength={16} />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm"  minLength={5} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm"  minLength={3} />
                </div>

                {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                  type="submit" 
                  disabled={isProcessing || activeItems.length === 0}
                  className="w-full py-5 mt-4 bg-slate-900 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg disabled:opacity-50 disabled:shadow-none"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Pay Now <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-emerald-50 text-slate-900 rounded-3xl p-8 shadow-xl h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 border border-emerald-100">
               <div className="w-24 h-24 bg-emerald-200 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-12 h-12 text-emerald-600" strokeWidth={3} />
               </div>
               <h3 className="text-3xl font-black mb-2">Order Complete</h3>
               <p className="text-slate-500 mb-8 font-medium">Your receipt has been sent to your email.</p>
               <button type="button" 
                 onClick={() => { setIsSuccess(false); setCart(initialCart); }}
                 className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors w-full"
               >
                 Done
               </button>
            </div>
          )}
        </div>

      </div>

      {/* Global styles for the progress bar animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shrink {
          0% { width: 100%; }
          100% { width: 0%; }
        }
      `}} />
    </div>
  );
}
