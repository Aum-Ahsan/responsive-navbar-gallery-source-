"use client";
import React, { useState } from "react";
import { RefreshCw, Smartphone, CreditCard, Check } from "lucide-react";

export default function Checkout41() {
  const [placed, setPlaced] = useState(false);

  const phonePrice = 999;
  const tradeInValue = 350;
  const total = phonePrice - tradeInValue;

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Order Placed!</h2>
          <p className="text-slate-500 text-sm mt-2">
            Your new phone will ship today. We will send a trade-in kit for your old device. 
            You have 14 days to return it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        
        <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Order Summary</h2>

        <div className="space-y-4 mb-6">
          {/* New Item */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <Smartphone size={20} className="text-slate-700" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">ProPhone 15 Max</p>
                <p className="text-xs text-slate-500">256GB, Titanium</p>
              </div>
            </div>
            <p className="font-bold text-slate-900">${phonePrice}</p>
          </div>

          {/* Trade In */}
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <RefreshCw size={20} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-emerald-900 text-sm">Trade-In Credit</p>
                <p className="text-xs text-emerald-700">ProPhone 13 (Good Cond.)</p>
              </div>
            </div>
            <p className="font-bold text-emerald-700">-${tradeInValue}</p>
          </div>
        </div>

        <div className="flex justify-between items-end pt-4 border-t border-slate-100 mb-8">
          <p className="text-sm font-bold text-slate-500">Total due today</p>
          <p className="text-3xl font-bold text-slate-900">${total}</p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            <input placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <button 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white transition shadow-lg shadow-slate-900/20 mb-4"
        >
          Pay ${total}
        </button>
        <p className="text-center text-[11px] text-slate-500">
          If the condition of your trade-in does not match your description, your card will be charged the difference.
        </p>

      </div>
    </div>
  );
}
