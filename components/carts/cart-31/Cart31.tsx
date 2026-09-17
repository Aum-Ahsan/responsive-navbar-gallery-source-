"use client";
import React, { useState } from "react";
import { ShoppingBag, TrendingDown, Check } from "lucide-react";

export default function Cart31() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const tiers = [
    { min: 1, max: 9, price: 29.99, label: "Standard" },
    { min: 10, max: 49, price: 25.99, label: "Save 13%" },
    { min: 50, max: 99, price: 21.99, label: "Save 26%" },
    { min: 100, max: Infinity, price: 18.99, label: "Save 36%" }
  ];

  const currentTier = tiers.find(t => qty >= t.min && qty <= t.max)!;
  const total = (qty * currentTier.price).toFixed(2);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-1">Premium Matcha Tin</h2>
          <p className="text-slate-500 text-sm mb-6">Ceremonial grade, 30g</p>

          <div className="space-y-2 mb-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Volume Pricing</p>
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`flex justify-between items-center p-3 rounded-xl border transition ${currentTier === tier ? "bg-emerald-50 border-emerald-200" : "bg-transparent border-slate-100"}`}
              >
                <div className="flex flex-col">
                  <span className={`font-semibold text-sm ${currentTier === tier ? "text-emerald-900" : "text-slate-700"}`}>
                    {tier.max === Infinity ? `${tier.min}+ units` : `${tier.min} - ${tier.max} units`}
                  </span>
                  {tier.label !== "Standard" && (
                    <span className={`text-xs flex items-center gap-1 mt-0.5 ${currentTier === tier ? "text-emerald-600" : "text-slate-400"}`}>
                      <TrendingDown size={12} /> {tier.label}
                    </span>
                  )}
                </div>
                <span className={`font-bold ${currentTier === tier ? "text-emerald-700" : "text-slate-900"}`}>
                  ${tier.price} <span className="text-xs font-normal opacity-60">/ea</span>
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <div className="w-24 bg-slate-100 rounded-2xl flex items-center justify-between p-1 border border-slate-200">
              <button type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 font-medium transition rounded-xl hover:bg-white"
              >
                -
              </button>
              <span className="font-bold text-slate-900 text-sm">{qty}</span>
              <button type="button"
                onClick={() => setQty(qty + 1)}
                className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 font-medium transition rounded-xl hover:bg-white"
              >
                +
              </button>
            </div>

            <button type="button"
              onClick={handleAdd}
              disabled={added}
              className={`flex-1 h-12 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"}`}
            >
              {added ? <Check size={18} /> : <ShoppingBag size={18} />}
              {added ? "Added!" : `Add - ${total}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
