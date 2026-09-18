"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ShoppingCart, CreditCard, Apple, Check, Fingerprint } from "lucide-react";

export default function PaymentProcess05() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'card' | 'apple'>('apple');

  // Auto open removed for gallery compatibility

  const handlePay = () => {
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

  const closeSheet = () => {
    setIsSheetOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      // Auto-reopen removed
    }, 300);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden relative">
      
      {/* Simulated Mobile/App Context */}
      <div className="w-full max-w-md h-[800px] max-h-screen bg-white shadow-2xl overflow-hidden relative flex flex-col md:rounded-[3rem] border-[8px] border-gray-900">
        
        {/* App Header */}
        <div className="pt-12 pb-4 px-6 flex justify-between items-center bg-white z-10">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <ChevronDown className="w-6 h-6 text-gray-900 rotate-90" />
          </div>
          <h1 className="font-bold text-lg text-gray-900">Your Cart</h1>
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center relative">
            <ShoppingCart className="w-5 h-5 text-gray-900" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-32">
          <div className="space-y-6 mt-6">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl p-2">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80" alt="Shoes" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-gray-900">Nike Air Max 270</h3>
                <p className="text-gray-500 text-sm">Men's Shoes • Size 10</p>
                <div className="font-bold text-gray-900 mt-2">$150.00</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl p-2">
                <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=200&q=80" alt="Bag" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-gray-900">Urban Backpack</h3>
                <p className="text-gray-500 text-sm">Accessories • Black</p>
                <div className="font-bold text-gray-900 mt-2">$75.00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Button area (behind sheet) */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t border-gray-100 z-0">
          <div className="flex justify-between mb-4">
            <span className="text-gray-500 font-medium">Total</span>
            <span className="font-bold text-2xl text-gray-900">$225.00</span>
          </div>
          <button type="button" onClick={() => setIsSheetOpen(true)} className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg">
            Checkout Now
          </button>
        </div>

        {/* BOTTOM SHEET OVERLAY */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isSheetOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={closeSheet}
        ></div>

        <div 
          className={`absolute bottom-0 left-0 w-full bg-white z-50 rounded-t-[2rem] transition-transform duration-500 ease-out ${
            isSheetOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ height: '85%' }}
        >
          {/* Drag Handle */}
          <div className="w-full flex justify-center py-4 cursor-grab" onClick={closeSheet}>
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>

          <div className="px-6 h-full flex flex-col">
            {!isSuccess ? (
              <>
                <div className="flex justify-between items-end mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Payment</h2>
                  <span className="text-xl font-black text-gray-900">$225.00</span>
                </div>

                {/* Tabs */}
                <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
                  <button type="button" 
                    onClick={() => setActiveTab('apple')}
                    className={`flex-1 py-2.5 flex justify-center items-center gap-2 rounded-lg font-semibold text-sm transition-all ${activeTab === 'apple' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}
                  >
                    <Apple className="w-4 h-4" /> Pay
                  </button>
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
      const originalHandler = () => setActiveTab('card');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                    className={`flex-1 py-2.5 flex justify-center items-center gap-2 rounded-lg font-semibold text-sm transition-all ${activeTab === 'card' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}
                  >
                    <CreditCard className="w-4 h-4" /> Card
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto pb-24">
                  {activeTab === 'apple' ? (
                    <div className="h-full flex flex-col items-center justify-center space-y-6">
                      <div className="w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center relative">
                        <Fingerprint className={`w-12 h-12 ${isProcessing ? 'text-blue-500 animate-pulse' : 'text-gray-400'}`} />
                        {isProcessing && (
                          <svg className="absolute inset-0 w-full h-full text-blue-500 animate-spin" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="300" strokeDashoffset="250" strokeLinecap="round"></circle>
                          </svg>
                        )}
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900 text-lg mb-1">{isProcessing ? 'Processing...' : 'Double Click to Pay'}</p>
                        <p className="text-gray-500 text-sm">Confirm with Face ID or Touch ID</p>
                      </div>
                      {!isProcessing && (
                        <button type="button" onClick={handlePay} className="mt-8 px-8 py-3 bg-black text-white rounded-full font-bold flex items-center gap-2 shadow-lg shadow-black/20">
                          <Apple className="w-5 h-5" /> Pay
                        </button>
                      )}
                    </div>
                  ) : (
                    <form className="space-y-4 animate-in slide-in-from-right-8 duration-300">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Card Number</label>
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-mono text-sm"  minLength={16} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Expiry Date</label>
                          <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-mono text-sm"  minLength={5} />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Security Code</label>
                          <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="password" placeholder="•••" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-mono text-sm"  minLength={3} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Cardholder Name</label>
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 text-sm"  minLength={2} maxLength={50} />
                      </div>
                      
                      <div className="pt-4">
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
      const originalHandler = handlePay;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} disabled={isProcessing} className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors disabled:opacity-70 flex justify-center items-center">
                          {isProcessing ? 'Processing...' : 'Pay $225.00'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-500 pb-20">
                <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                  <Check className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">Done!</h2>
                <p className="text-gray-500 mb-8 text-center px-6">Your payment was successful. We'll send you an email confirmation shortly.</p>
                <button type="button" onClick={closeSheet} className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                  Back to Store
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
