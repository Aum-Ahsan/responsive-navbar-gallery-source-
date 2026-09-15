"use client";
import React, { useState } from "react";
import { Check, Smartphone, Globe, CreditCard, Zap } from "lucide-react";

export default function Checkout04() {
  const [method, setMethod] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const total = 187;

  const methods = [
    { id: "apple", label: "Apple Pay", icon: "🍎", color: "bg-black", text: "text-white", border: "border-black", sub: "Face ID / Touch ID" },
    { id: "google", label: "Google Pay", icon: "G", color: "bg-white", text: "text-slate-900", border: "border-slate-200", iconClass: "font-black text-xl bg-gradient-to-r from-blue-500 via-green-500 to-yellow-400 bg-clip-text text-transparent", sub: "Android / Chrome" },
    { id: "paypal", label: "PayPal", icon: "🅿️", color: "bg-[#003087]", text: "text-white", border: "border-[#003087]", sub: "Pay with balance or card" },
    { id: "shop", label: "Shop Pay", icon: "🛍️", color: "bg-[#5a31f4]", text: "text-white", border: "border-[#5a31f4]", sub: "Installments available" },
  ];

  if (done) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-slate-900">Payment Successful!</h2>
          <p className="text-slate-500 mt-2">Paid ${total} via {methods.find(m=>m.id===method)?.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Zap size={26} className="text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Express Checkout</h2>
          <p className="text-slate-500 text-sm mt-1">One tap — no forms required. Pay ${total} instantly.</p>
        </div>

        {/* Order summary pill */}
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 mb-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛍️</span>
            <div>
              <p className="font-semibold text-slate-900 text-sm">2 items</p>
              <p className="text-xs text-slate-400">Incl. standard shipping</p>
            </div>
          </div>
          <p className="text-xl font-bold text-slate-900">${total}</p>
        </div>

        {/* Payment methods */}
        <div className="space-y-3 mb-6">
          {methods.map(m => (
            <button
              key={m.id}
              onClick={() => setMethod(m.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 ${
                method === m.id ? `border-indigo-500 ring-2 ring-indigo-200 ${m.color} ${m.text}` : `bg-white border-slate-200 hover:border-slate-400`
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${method === m.id ? "bg-white/20" : "bg-slate-50"}`}>
                <span>{m.icon}</span>
              </div>
              <div className="flex-1 text-left">
                <p className={`font-bold text-sm ${method === m.id ? m.text : "text-slate-900"}`}>{m.label}</p>
                <p className={`text-xs ${method === m.id ? "text-white/70" : "text-slate-400"}`}>{m.sub}</p>
              </div>
              {method === m.id && <Check size={18} className="text-white" />}
            </button>
          ))}
        </div>

        <button
          onClick={() => method && setDone(true)}
          disabled={!method}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all ${method ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
        >
          <Zap size={18} /> {method ? `Pay $${total} with ${methods.find(m=>m.id===method)?.label}` : "Select a payment method"}
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Globe size={12} />
          <span>Or <button className="underline hover:text-slate-700">fill in card details manually</button></span>
        </div>
      </div>
    </div>
  );
}
