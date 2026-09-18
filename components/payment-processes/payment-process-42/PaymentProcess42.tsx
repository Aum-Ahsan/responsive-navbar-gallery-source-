"use client";
import React, { useState, useEffect } from "react";
import { Trash2, Plus, Minus, CreditCard, ArrowRight, RefreshCcw, Save, Check } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const defaultProducts = [
  { id: "1", name: "Wireless Headphones", price: 199.99, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80" },
  { id: "2", name: "Smart Watch", price: 249.99, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80" },
  { id: "3", name: "Mechanical Keyboard", price: 129.99, img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=150&q=80" }
];

export default function PaymentProcess42() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("paymentProcess42_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
        setLastSaved(new Date());
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage whenever cart changes (if loaded)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("paymentProcess42_cart", JSON.stringify(cart));
      setLastSaved(new Date());
    }
  }, [cart, isLoaded]);

  const addToCart = (product: typeof defaultProducts[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQ };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart(); // Clear on success
    }, 2000);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isLoaded) return <div className="w-full min-h-[700px] bg-slate-50 flex justify-center items-center">Loading state...</div>;

  return (
    <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center font-sans p-6 text-slate-800">
      
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Store & Cart */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[700px]">
          
          <div className="p-6 border-b border-slate-100 bg-white z-10 flex justify-between items-center">
            <h2 className="text-xl font-black text-slate-900">Your Cart</h2>
            
            {/* Persistence Indicator */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
              <Save className="w-3.5 h-3.5 text-emerald-500" />
              {lastSaved ? `Saved ${lastSaved.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}` : 'Saving...'}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <RefreshCcw className="w-12 h-12 mb-4 opacity-20" />
                <p>Your cart is empty.</p>
                <p className="text-sm">Add items below to see persistence in action.</p>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <img src={item.img} alt={item.name} className="w-20 h-20 rounded-xl object-cover mix-blend-multiply" />
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <div className="text-indigo-600 font-bold">${item.price.toFixed(2)}</div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-2 py-1">
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
      const originalHandler = () => updateQuantity(item.id, -1);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} className="p-1 hover:text-indigo-600 transition-colors"><Minus className="w-3 h-3" /></button>
                          <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-indigo-600 transition-colors"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button type="button" onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-500 transition-colors p-2">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-end pt-4">
                  <button type="button" onClick={clearCart} className="text-xs font-bold text-red-500 hover:text-red-600 uppercase tracking-wider">
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
            
            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Available Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {defaultProducts.map(product => (
                  <div key={product.id} className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 hover:border-indigo-300 transition-colors cursor-pointer group" onClick={() => addToCart(product)}>
                    <img src={product.img} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="font-bold text-sm text-slate-900 truncate">{product.name}</div>
                      <div className="text-xs font-medium text-slate-500">${product.price}</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Checkout */}
        <div className="lg:col-span-5">
          {!isSuccess ? (
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl h-full flex flex-col relative overflow-hidden animate-in slide-in-from-right-8 duration-500">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-20 blur-[80px] rounded-full pointer-events-none"></div>

              <h2 className="text-2xl font-black mb-8 relative z-10">Checkout</h2>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400 font-medium">
                  <span>Tax (8%)</span>
                  <span className="text-white">${(subtotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-slate-700">
                  <span className="font-bold">Total</span>
                  <span className="text-3xl font-black">${(subtotal * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handlePay} className="mt-auto space-y-4 relative z-10">
                
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-800 border-none rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono tracking-widest text-sm"  minLength={16} />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-800 border-none rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm"  minLength={5} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-800 border-none rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm"  minLength={3} />
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing || cart.length === 0}
                  className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] disabled:opacity-50 disabled:shadow-none mt-4"
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
             <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-2xl h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-12 h-12 text-emerald-400" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black mb-2">Payment Successful</h3>
                <p className="text-emerald-200/80 mb-8 font-medium">Your order has been placed. Cart cleared from local storage.</p>
                <button type="button" 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-4 bg-emerald-800 hover:bg-emerald-700 font-bold rounded-xl transition-colors"
                >
                  Return to Store
                </button>
             </div>
          )}
        </div>

      </div>
    </div>
  );
}
