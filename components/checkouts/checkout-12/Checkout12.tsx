"use client";
import React, { useState } from "react";
import { RefreshCw, Check, Lock, Shield, ChevronDown } from "lucide-react";

export default function Checkout12() {
  const [frequency, setFrequency] = useState("monthly");
  const [agreed, setAgreed] = useState(false);
  const [placed, setPlaced] = useState(false);

  const plans = [
    { id: "monthly", label: "Monthly", price: 29, save: null },
    { id: "quarterly", label: "Quarterly", price: 79, save: 8 },
    { id: "annual", label: "Annual", price: 279, save: 69 },
  ];
  const selected = plans.find(p => p.id === frequency)!;

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><RefreshCw size={26} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Subscription Active!</h2>
          <p className="text-slate-500 text-sm mt-1">{selected.label} billing · ${selected.price}/period · Cancel anytime</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-violet-50 to-indigo-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        {/* Plan header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <RefreshCw size={24} className="text-violet-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Subscribe to Pro</h2>
          <p className="text-slate-500 text-sm mt-1">Unlimited projects · Priority support · Team collaboration</p>
        </div>

        {/* Plan toggle */}
        <div className="grid grid-cols-3 bg-white/70 backdrop-blur rounded-2xl p-1 mb-6 border border-indigo-100">
          {plans.map(p => (
            <button type="button"
              key={p.id}
              onClick={() => setFrequency(p.id)}
              className={`py-3 rounded-xl text-sm font-bold transition relative ${frequency === p.id ? "bg-violet-600 text-white shadow" : "text-slate-500 hover:text-slate-900"}`}
            >
              {p.save && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] bg-emerald-400 text-white font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  Save ${p.save}
                </span>
              )}
              {p.label}
              <br />
              <span className={`text-xs font-normal ${frequency === p.id ? "text-violet-200" : "text-slate-400"}`}>${p.price}</span>
            </button>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl border border-indigo-100 p-5 mb-5">
          <p className="text-sm font-bold text-slate-800 mb-3">Everything in Pro:</p>
          {["Unlimited projects", "50GB storage", "Team of up to 10", "Priority support", "Advanced analytics", "Custom domain"].map(f => (
            <div key={f} className="flex items-center gap-2 py-1.5">
              <Check size={14} className="text-violet-500" />
              <span className="text-sm text-slate-700">{f}</span>
            </div>
          ))}
        </div>

        {/* Payment */}
        <div className="bg-white rounded-2xl border border-indigo-100 p-5 mb-5 space-y-3">
          <h3 className="text-sm font-bold text-slate-800">Payment Method</h3>
          <input placeholder="Card Number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-violet-400" />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
            <input placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
          </div>
        </div>

        {/* Agreement */}
        <div
          onClick={() => setAgreed(a => !a)}
          className="flex items-start gap-3 mb-6 cursor-pointer group"
        >
          <div className={`w-5 h-5 rounded-md border-2 mt-0.5 shrink-0 flex items-center justify-center transition ${agreed ? "bg-violet-600 border-violet-600" : "border-slate-300 group-hover:border-violet-400"}`}>
            {agreed && <Check size={11} className="text-white" />}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            By subscribing, I agree to the <span className="text-violet-600 underline">Terms of Service</span> and authorize recurring billing of ${selected.price} every {frequency === "monthly" ? "month" : frequency === "quarterly" ? "3 months" : "year"}. Cancel anytime.
          </p>
        </div>

        <button type="button"
          onClick={() => agreed && setPlaced(true)}
          disabled={!agreed}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${agreed ? "bg-violet-600 hover:bg-violet-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
        >
          <Lock size={16} /> Subscribe — ${selected.price}/{frequency === "monthly" ? "mo" : frequency === "quarterly" ? "qtr" : "yr"}
        </button>
        <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-slate-400">
          <Shield size={12} /> Secure billing · Cancel anytime · No hidden fees
        </div>
      </div>
    </div>
  );
}
