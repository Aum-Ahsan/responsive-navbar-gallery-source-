"use client";
import React, { useState } from "react";
import { Check, CreditCard, Shield, Zap, Lock, ChevronRight, Apple, Heart, FileText, ArrowRight } from "lucide-react";

export default function PaymentProcess94() {

    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = (e: React.FormEvent) => {
      e.preventDefault();
      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 2000);
    };

    return (
      <div className="w-full min-h-[600px] bg-neutral-900 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl bg-white">
          <div className="bg-blue-600 p-8 sm:p-10 flex flex-col justify-between text-white">
            <div>
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 mb-6 sm:mb-8 opacity-80" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Invoice Payment</h2>
              <p className="opacity-80 mb-6 sm:mb-8 text-sm sm:text-base">Wholesale Order Payment</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex justify-between text-xs sm:text-sm opacity-90 border-b border-white/20 pb-2">
                  <span>Invoice #</span>
                  <span className="font-mono">INV-2026</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm opacity-90 border-b border-white/20 pb-2">
                  <span>Due Date</span>
                  <span>Oct 1, 2026</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <p className="text-xs sm:text-sm opacity-80 mb-1">Amount Due</p>
              <p className="text-4xl sm:text-5xl font-bold tracking-tight">$4,500.00</p>
            </div>
          </div>
          
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Payment Method</h3>
            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name on Card</label>
                <input required type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 sm:py-4 focus:ring-2 focus:ring-gray-200 transition-shadow text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Card Details</label>
                <div className="bg-gray-50 rounded-xl overflow-hidden flex flex-col">
                  <input required type="text" placeholder="Card Number" className="w-full bg-transparent px-4 py-3 sm:py-4 border-b border-gray-200 focus:outline-none text-sm sm:text-base" />
                  <div className="flex">
                    <input maxLength={5} onInput={(e) => { let v = e.currentTarget.value.replace(/\D/g, ''); if (v.length > 4) v = v.substring(0, 4); if (v.length >= 3) v = `${v.substring(0, 2)}/${v.substring(2)}`; e.currentTarget.value = v; }} required type="text" placeholder="MM/YY" className="w-1/2 bg-transparent px-4 py-3 sm:py-4 border-r border-gray-200 focus:outline-none text-sm sm:text-base" />
                    <input maxLength={3} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').substring(0, 3); }} required type="text" placeholder="CVC" className="w-1/2 bg-transparent px-4 py-3 sm:py-4 focus:outline-none text-sm sm:text-base" />
                  </div>
                </div>
              </div>
              <button type="submit" disabled={isProcessing} className="w-full bg-gray-900 text-white font-bold py-3.5 sm:py-4 rounded-xl mt-4 sm:mt-6 hover:bg-black transition-colors flex items-center justify-center text-sm sm:text-base">
                {isProcessing ? 'Processing...' : 'Pay Invoice'}
                {!isProcessing && <ArrowRight className="w-4 h-4 ml-2" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
        
}
