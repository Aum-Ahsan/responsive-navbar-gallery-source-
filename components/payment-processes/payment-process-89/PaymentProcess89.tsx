"use client";
import React, { useState } from "react";
import { Check, CreditCard, Shield, Zap, Lock, ChevronRight, Apple, Heart, FileText, ArrowRight } from "lucide-react";

export default function PaymentProcess89() {

    const presets = [10, 25, 50, 100];
    const [amount, setAmount] = useState<number>(50);
    const [isCustom, setIsCustom] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = (e: React.FormEvent) => {
      e.preventDefault();
      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 2000);
    };

    return (
      <div className="w-full min-h-[600px] bg-fuchsia-50 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="max-w-md w-full bg-white rounded-[2rem] md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-fuchsia-600" />
          
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-fuchsia-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-fuchsia-600" fill="currentColor" />
          </div>
          
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Podcast Supporter</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Your contribution makes a direct impact. Select an amount to give today.</p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {presets.map(a => (
              <button key={a} onClick={() => { setAmount(a); setIsCustom(false); }} className={`py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all ${!isCustom && amount === a ? 'bg-fuchsia-600 text-white shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
                $${a}
              </button>
            ))}
          </div>
          
          <button onClick={() => setIsCustom(true)} className={`w-full py-3 sm:py-4 rounded-xl font-bold mb-6 sm:mb-8 transition-all ${isCustom ? 'bg-fuchsia-600 text-white shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
            Custom Amount
          </button>

          {isCustom && (
            <div className="mb-6 sm:mb-8 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg sm:text-xl">$</span>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full text-xl sm:text-2xl font-bold text-gray-900 pl-10 pr-4 py-3 sm:py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-fuchsia-600/20 focus:border-fuchsia-600" />
            </div>
          )}

          <form onSubmit={handlePay} className="space-y-3 sm:space-y-4">
            <input required type="email" placeholder="Email Address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none text-sm sm:text-base focus:ring-fuchsia-600/20 focus:border-fuchsia-600" />
            <input required type="text" placeholder="Card Number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none text-sm sm:text-base focus:ring-fuchsia-600/20 focus:border-fuchsia-600" />
            
            <button type="submit" disabled={isProcessing} className="w-full bg-fuchsia-600 text-white font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 mt-4 transition-all hover:opacity-90 text-sm sm:text-base">
              {isProcessing ? 'Processing...' : `Donate $${amount}`}
              {!isProcessing && <Heart className="w-4 h-4 ml-1" />}
            </button>
          </form>
        </div>
      </div>
    );
        
}
