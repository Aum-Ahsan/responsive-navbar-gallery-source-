"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, X } from "lucide-react";

export default function PaymentProcess88() {
  const TOTAL_AMOUNT = 19.99;
  
  const [isOpen, setIsOpen] = useState(false);
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

  const closeModal = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setIsProcessing(false);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-100 flex items-center justify-center font-sans p-6 text-slate-800 relative">
      
      {/* Background Dummy Content */}
      <div className="text-center">
        <div className="w-48 h-48 bg-white shadow-xl mx-auto mb-8 rounded-3xl flex items-center justify-center border border-slate-200">
           <img src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=80&w=200&h=200" alt="Product" className="w-full h-full object-cover rounded-3xl opacity-80" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Premium Subscription</h2>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">Get access to all premium features, ad-free experience, and priority support.</p>
        
        <button type="button" 
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          Subscribe for ${TOTAL_AMOUNT}/mo
        </button>
      </div>

      {/* Modal / Full-screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white md:bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Modal Container: Full-screen on mobile, centered box on desktop */}
          <div className="w-full h-full md:h-auto md:max-h-[90vh] md:max-w-lg bg-white md:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="font-bold text-lg">Checkout</h3>
              <button type="button" 
                onClick={closeModal}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {!isSuccess ? (
                <>
                  <div className="bg-indigo-50 rounded-2xl p-6 mb-8 text-center border border-indigo-100">
                     <p className="text-indigo-600 font-bold mb-1">Total Due Today</p>
                     <p className="text-4xl font-black text-indigo-900">${TOTAL_AMOUNT.toFixed(2)}</p>
                  </div>

                  <form onSubmit={handlePay} className="space-y-4">
                    
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                        required 
                        type="text" 
                        placeholder="Card Number" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm" 
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                        required 
                        type="text" 
                        placeholder="MM/YY" 
                        className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" 
                      />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                        required 
                        type="text" 
                        placeholder="CVV" 
                        className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" 
                      />
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit" 
                        disabled={isProcessing}
                        className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg disabled:opacity-70"
                      >
                        {isProcessing ? (
                          <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>Confirm Payment <ArrowRight className="w-5 h-5" /></>
                        )}
                      </button>
                    </div>
                  </form>
                  <p className="text-center text-xs text-slate-400 mt-6">
                    By confirming, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-in zoom-in duration-300">
                   <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                     <CheckCircle2 className="w-10 h-10 text-green-500" strokeWidth={2.5} />
                   </div>
                   <h2 className="text-2xl font-bold mb-2">Payment Successful</h2>
                   <p className="text-slate-500 mb-8">Welcome to Premium!</p>
                   
                   <button type="button" 
                      onClick={closeModal}
                      className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors"
                    >
                      Return to Dashboard
                    </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
