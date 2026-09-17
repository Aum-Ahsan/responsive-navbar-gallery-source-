"use client";
import React, { useState } from "react";
import { ShoppingBag, X, CreditCard, Shield, ArrowRight, Package, CheckCircle } from "lucide-react";

export default function PaymentProcess06() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  return (
    <div className="w-full min-h-[600px] bg-stone-100 font-sans relative overflow-hidden flex flex-col">
      
      {/* Fake Storefront Background */}
      <header className="bg-stone-900 text-stone-100 p-6 flex justify-between items-center z-0 relative">
        <div className="font-serif italic text-2xl">L'Objet</div>
        <button type="button" 
          onClick={() => setIsSidebarOpen(true)}
          className="relative p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
        </button>
      </header>
      
      <main className="flex-1 p-8 z-0 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-40">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="w-full h-80 bg-stone-300 rounded-sm"></div>
              <div className="w-3/4 h-4 bg-stone-300"></div>
              <div className="w-1/4 h-4 bg-stone-300"></div>
            </div>
          ))}
        </div>
      </main>

      {/* Overlay Backdrop */}
      {isSidebarOpen && (
        <div 
          className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm z-40 transition-opacity duration-500"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Off-Canvas Sidebar */}
      <div 
        className={`absolute top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-stone-100">
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Checkout
          </h2>
          <button type="button" 
            onClick={closeSidebar}
            className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto">
          {!isSuccess ? (
            <div className="p-6 space-y-8 animate-in fade-in duration-500">
              
              {/* Order Summary */}
              <div className="space-y-4">
                <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wider">Order Summary</h3>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-stone-100 rounded flex items-center justify-center p-2">
                    <Package className="w-8 h-8 text-stone-300" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-semibold text-stone-900">Ceramic Vase</h4>
                    <p className="text-stone-500 text-sm">Matte White • Qty: 1</p>
                    <div className="font-medium text-stone-900 mt-1">$120.00</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-stone-100 space-y-2 text-sm">
                  <div className="flex justify-between text-stone-500"><span>Subtotal</span><span>$120.00</span></div>
                  <div className="flex justify-between text-stone-500"><span>Shipping</span><span>$15.00</span></div>
                  <div className="flex justify-between font-bold text-stone-900 text-base pt-2"><span>Total</span><span>$135.00</span></div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="space-y-4">
                <h3 className="font-semibold text-stone-900 text-sm uppercase tracking-wider">Payment Details</h3>
                <form onSubmit={handlePay} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">Email Address</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="you@example.com" className="w-full bg-white border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-400" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">Card Information</label>
                    <div className="border border-stone-200 rounded-sm overflow-hidden focus-within:border-stone-900 transition-colors">
                      <div className="relative border-b border-stone-200">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full pl-10 pr-4 py-3 focus:outline-none text-sm font-mono placeholder-stone-400" />
                      </div>
                      <div className="flex">
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 px-4 py-3 border-r border-stone-200 focus:outline-none text-sm font-mono placeholder-stone-400" />
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVC" className="w-1/2 px-4 py-3 focus:outline-none text-sm font-mono placeholder-stone-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1">Name on Card</label>
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Full name" className="w-full bg-white border border-stone-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-400" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full mt-6 py-4 bg-stone-900 text-stone-50 font-semibold flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors disabled:opacity-70 disabled:hover:bg-stone-900"
                  >
                    {isProcessing ? 'Processing...' : 'Complete Purchase'}
                    {!isProcessing && <ArrowRight className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-2">
                    <Shield className="w-3 h-3" /> Encrypted and Secure
                  </div>
                </form>
              </div>

            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-stone-900" />
              </div>
              <h3 className="text-2xl font-serif italic text-stone-900 mb-2">Thank You</h3>
              <p className="text-stone-500 mb-8 max-w-[250px]">Your order has been placed successfully. A receipt has been sent to your email.</p>
              <button type="button" 
                onClick={(e) => {
      const inputs = Array.from(document.querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = closeSidebar;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }}
                className="w-full py-3 border border-stone-200 text-stone-900 font-semibold rounded-sm hover:bg-stone-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
