"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, ShoppingBag, Trash2, CheckCircle2 } from "lucide-react";

export default function PaymentProcess24() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "Minimalist Desk Lamp", price: 89.00, qty: 1, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150&q=80" },
    { id: 2, name: "Ergonomic Keyboard", price: 149.00, qty: 1, img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=150&q=80" },
    { id: 3, name: "Wireless Mouse", price: 79.00, qty: 1, img: "https://images.unsplash.com/photo-1527814050087-379381547330?w=150&q=80" },
    { id: 4, name: "Leather Desk Pad", price: 45.00, qty: 1, img: "https://images.unsplash.com/photo-1615563821034-71285bc0b2c1?w=150&q=80" },
  ]);

  useEffect(() => {
    // Trigger the staggered entry animation shortly after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (isSuccess) {
    return (
      <div className="w-full min-h-screen bg-neutral-100 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-sm w-full animate-in slide-in-from-bottom-10 fade-in duration-700">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-neutral-900 mb-2">Order Placed</h2>
          <p className="text-neutral-500 mb-8">We've sent a receipt to your email.</p>
          <button type="button" onClick={() => { setIsSuccess(false); setIsLoaded(false); setTimeout(() => setIsLoaded(true), 100); }} className="w-full py-4 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-colors">
            Start New Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-neutral-100 flex items-center justify-center font-sans p-6">
      
      <div className="max-w-xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-neutral-200">
        
        <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-white relative z-10">
          <h1 className="text-2xl font-black text-neutral-900 flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-neutral-400" /> Checkout
          </h1>
          <div className="bg-neutral-100 text-neutral-900 font-bold px-3 py-1 rounded-full text-sm">
            {items.length} items
          </div>
        </div>

        <div className="p-8 bg-neutral-50">
          
          {/* Staggered List Items */}
          <div className="space-y-4 mb-8">
            {items.map((item, index) => (
              <div 
                key={item.id}
                className={`flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 transition-all duration-500 ease-out ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-neutral-50 rounded-xl overflow-hidden shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-900">{item.name}</h3>
                  <div className="text-sm font-medium text-neutral-500 mt-1">${item.price.toFixed(2)}</div>
                </div>
                <button type="button" 
                  onClick={() => removeItem(item.id)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            
            {items.length === 0 && (
              <div className="text-center py-8 text-neutral-400 font-medium">Your cart is empty.</div>
            )}
          </div>

          {/* Staggered Summary Section */}
          {items.length > 0 && (
            <div 
              className={`space-y-6 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${items.length * 150 + 200}ms` }}
            >
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
                <div className="flex justify-between text-neutral-500 font-medium text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-500 font-medium text-sm">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-neutral-100 flex justify-between items-end">
                  <span className="font-bold text-neutral-900">Total</span>
                  <span className="text-3xl font-black text-neutral-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <button type="button" 
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-neutral-800 hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Pay Now <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
