"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, RefreshCw, Zap } from "lucide-react";

export default function Cart10() {
  const [mode, setMode] = useState<"onetime" | "subscribe">("onetime");
  const [frequency, setFrequency] = useState("monthly");
  const [added, setAdded] = useState(false);

  const basePrice = 48;
  const discount = 0.20;
  const subscribePrice = Math.round(basePrice * (1 - discount));

  const frequencies = [
    { value: "weekly",    label: "Every Week",   save: "20%" },
    { value: "biweekly", label: "Every 2 Weeks", save: "18%" },
    { value: "monthly",  label: "Every Month",   save: "15%" },
    { value: "quarterly",label: "Every 3 Months",save: "10%" },
  ];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const currentPrice = mode === "subscribe" ? subscribePrice : basePrice;

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Product */}
        <div className="flex gap-6 items-center mb-8">
          <div className="w-28 h-28 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center text-5xl shrink-0">
            🧴
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-1">Best Seller</p>
            <h2 className="text-xl font-bold text-slate-900">Daily Collagen Serum</h2>
            <p className="text-slate-500 text-sm mt-1">30ml · 30-day supply</p>
          </div>
        </div>

        {/* Toggle */}
        <div className="grid grid-cols-2 bg-slate-100 rounded-2xl p-1 gap-1 mb-6">
          <button type="button"
            onClick={() => setMode("onetime")}
            className={`flex flex-col items-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
              mode === "onetime" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Zap size={16} className="mb-1" />
            One-Time
            <span className="text-xs font-bold text-slate-900 mt-0.5">${basePrice}</span>
          </button>
          <button type="button"
            onClick={() => setMode("subscribe")}
            className={`flex flex-col items-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
              mode === "subscribe" ? "bg-violet-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {mode !== "subscribe" && (
              <span className="absolute -top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Save {discount*100}%</span>
            )}
            <RefreshCw size={16} className="mb-1" />
            Subscribe & Save
            <span className="text-xs font-bold mt-0.5">${subscribePrice}/delivery</span>
          </button>
        </div>

        {/* Frequency (only when subscribe) */}
        {mode === "subscribe" && (
          <div className="mb-6 animate-in slide-in-from-top-2">
            <p className="text-sm font-semibold text-slate-700 mb-3">Delivery Frequency</p>
            <div className="grid grid-cols-2 gap-2">
              {frequencies.map(f => (
                <button type="button"
                  key={f.value}
                  onClick={() => setFrequency(f.value)}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    frequency === f.value ? "border-violet-500 bg-violet-50" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-900">{f.label}</p>
                  <p className="text-xs text-emerald-600 font-medium">Save {f.save}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price summary */}
        <div className="bg-slate-50 rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">{mode === "subscribe" ? `${frequencies.find(f=>f.value===frequency)?.label} delivery` : "One-time purchase"}</p>
            {mode === "subscribe" && (
              <p className="text-xs text-emerald-600 font-semibold">Cancel anytime · No commitment</p>
            )}
          </div>
          <div className="text-right">
            {mode === "subscribe" && (
              <p className="text-sm text-slate-400 line-through">${basePrice}</p>
            )}
            <p className="text-2xl font-bold text-slate-900">${currentPrice}</p>
          </div>
        </div>

        <button type="button"
          onClick={handleAdd}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            added
              ? "bg-emerald-500 text-white"
              : mode === "subscribe"
              ? "bg-violet-600 hover:bg-violet-700 text-white"
              : "bg-slate-900 hover:bg-slate-700 text-white"
          }`}
        >
          {added ? (
            <><Check size={20} /> Added to Cart!</>
          ) : mode === "subscribe" ? (
            <><RefreshCw size={18} /> Subscribe & Add to Cart — ${currentPrice}</>
          ) : (
            <><ShoppingCart size={18} /> Add to Cart — ${currentPrice}</>
          )}
        </button>
      </div>
    </div>
  );
}
