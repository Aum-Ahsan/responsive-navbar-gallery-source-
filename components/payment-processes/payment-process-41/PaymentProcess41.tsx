"use client";
import React, { useState } from "react";
import { Check, CreditCard, Shield, Zap, Lock, ChevronRight, Apple, Heart, FileText, ArrowRight } from "lucide-react";

export default function PaymentProcess41() {

    const [paymentMode, setPaymentMode] = useState<"upfront" | "split">("upfront");
    const [splitMonths, setSplitMonths] = useState<number>(3);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalAmount = 1200;
    const splitAmount = Math.ceil((totalAmount * 1.05) / splitMonths);

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
        <div className="w-full min-h-[600px] bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
          <div className="bg-white rounded-3xl p-8 sm:p-10 text-center max-w-md w-full shadow-xl border border-gray-100">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Payment Confirmed</h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8">Your payment has been processed successfully. A receipt has been sent to your email.</p>
            <button onClick={() => setIsSuccess(false)} className="text-rose-600 font-semibold hover:opacity-80 transition-opacity text-sm sm:text-base">
              Return to Dashboard
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full min-h-[700px] bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
                <Zap className="w-3 h-3" /> Wedding Venue Installments
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">Complete your purchase</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Choose how you want to pay. Pay upfront to save, or split it into manageable monthly payments.</p>
            </div>

            <div className="bg-white rounded-3xl p-1.5 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-1.5 sm:gap-0">
              <button onClick={() => setPaymentMode("upfront")} className={`flex-1 py-3 px-6 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${paymentMode === "upfront" ? "bg-rose-600 text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`}>Pay in full</button>
              <button onClick={() => setPaymentMode("split")} className={`flex-1 py-3 px-6 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${paymentMode === "split" ? "bg-rose-600 text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`}>Split payment</button>
            </div>

            <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm transition-all">
              {paymentMode === "upfront" ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Total Payment</h3>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">One-time payment</p>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">${totalAmount}</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Monthly Split</h3>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">Includes 5% fee</p>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">${splitAmount}<span className="text-base sm:text-lg text-gray-400 font-normal">/mo</span></div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <input type="range" min="2" max="6" step="1" value={splitMonths} onChange={(e) => setSplitMonths(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 mt-2 font-medium">
                      <span>2 mos</span>
                      <span>6 mos</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            <form onSubmit={handlePay} className="space-y-4 sm:space-y-5 relative z-10">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input required type="email" placeholder="you@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none transition-all focus:ring-rose-600/20 focus:border-rose-600" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Card Information</label>
                <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden transition-all focus-within:ring-2 focus-within:border-transparent">
                  <input maxLength={16} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').substring(0, 16); }} required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent px-4 py-3 sm:py-3.5 border-b border-gray-200 focus:outline-none font-mono text-sm sm:text-base" />
                  <div className="flex">
                    <input maxLength={5} onInput={(e) => { let v = e.currentTarget.value.replace(/\D/g, ''); if (v.length > 4) v = v.substring(0, 4); if (v.length >= 3) v = `${v.substring(0, 2)}/${v.substring(2)}`; e.currentTarget.value = v; }} required type="text" placeholder="MM/YY" className="w-1/2 bg-transparent px-4 py-3 sm:py-3.5 focus:outline-none border-r border-gray-200 font-mono text-sm sm:text-base" />
                    <input maxLength={3} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').substring(0, 3); }} required type="text" placeholder="CVC" className="w-1/2 bg-transparent px-4 py-3 sm:py-3.5 focus:outline-none font-mono text-sm sm:text-base" />
                  </div>
                </div>
              </div>
              <div className="pt-2 sm:pt-4">
                <button type="submit" disabled={isProcessing} className="w-full bg-rose-600 text-white font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base">
                  {isProcessing ? 'Processing...' : `Pay $${paymentMode === "upfront" ? totalAmount : splitAmount} Now`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
        
}
