"use client";
import React, { useState } from "react";
import { Check, CreditCard, Shield, Zap, Lock, ChevronRight, Apple, Heart, FileText, ArrowRight } from "lucide-react";

export default function PaymentProcess14() {

    const [billingMode, setBillingMode] = useState<"monthly" | "annually">("annually");
    const [selectedTier, setSelectedTier] = useState<number>(1);
    const [isProcessing, setIsProcessing] = useState(false);

    const tiers = [
      { name: 'Starter', monthly: 15, annual: 12 },
      { name: 'Professional', monthly: 49, annual: 39 },
      { name: 'Enterprise', monthly: 99, annual: 79 },
    ];

    const currentPrice = billingMode === 'monthly' ? tiers[selectedTier].monthly : tiers[selectedTier].annual;
    
    const handlePay = (e: React.FormEvent) => {
      e.preventDefault();
      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 2000);
    };

    return (
      <div className="w-full min-h-[700px] bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-[2rem] md:rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
          <div className="bg-gray-50 p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Gym Membership Signup</h2>
              <p className="text-sm sm:text-base text-gray-500 mb-6 md:mb-8">Upgrade your account to unlock premium features.</p>
              
              <div className="flex flex-col sm:flex-row bg-gray-200/50 rounded-xl p-1 mb-6 md:mb-8 w-full sm:w-fit gap-1 sm:gap-0">
                <button onClick={() => setBillingMode("monthly")} className={`w-full sm:w-auto px-4 py-2.5 md:py-2 rounded-lg text-sm font-semibold ${billingMode === "monthly" ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}>Monthly</button>
                <button onClick={() => setBillingMode("annually")} className={`w-full sm:w-auto px-4 py-2.5 md:py-2 rounded-lg text-sm font-semibold ${billingMode === "annually" ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}>Annually (Save 20%)</button>
              </div>

              <div className="space-y-3 md:space-y-4">
                {tiers.map((tier, i) => (
                  <div key={i} onClick={() => setSelectedTier(i)} className={`cursor-pointer p-4 md:p-5 rounded-2xl border-2 transition-all ${selectedTier === i ? 'border-lime-200 bg-lime-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900 text-sm md:text-base">{tier.name}</span>
                      <div className="text-right">
                        <span className="text-lg md:text-xl font-bold text-gray-900">$${billingMode === 'monthly' ? tier.monthly : tier.annual}</span>
                        <span className="text-gray-500 text-xs md:text-sm">/mo</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0">
              <span className="font-semibold text-gray-600 text-sm md:text-base">Total due today</span>
              <span className="text-2xl md:text-3xl font-bold text-gray-900">$${billingMode === 'monthly' ? currentPrice : currentPrice * 12}</span>
            </div>
          </div>
          
          <div className="p-6 sm:p-8 md:p-12 bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Payment Details</h3>
            <form onSubmit={handlePay} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                  <input required type="text" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none text-sm sm:text-base focus:ring-lime-500/20 focus:border-lime-500" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                  <input required type="text" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none text-sm sm:text-base focus:ring-lime-500/20 focus:border-lime-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 sm:pl-12 bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none font-mono text-sm sm:text-base focus:ring-lime-500/20 focus:border-lime-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Expiry</label>
                  <input required type="text" placeholder="MM/YY" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none font-mono text-sm sm:text-base focus:ring-lime-500/20 focus:border-lime-500" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">CVC</label>
                  <input required type="text" placeholder="123" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none font-mono text-sm sm:text-base focus:ring-lime-500/20 focus:border-lime-500" />
                </div>
              </div>
              <button type="submit" disabled={isProcessing} className="w-full mt-4 sm:mt-6 bg-lime-500 text-white font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 text-sm sm:text-base hover:shadow-lg hover:-translate-y-0.5">
                {isProcessing ? 'Processing...' : 'Subscribe Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
        
}
