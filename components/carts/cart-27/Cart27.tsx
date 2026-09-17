"use client";
import React, { useState } from "react";
import { Heart, Check } from "lucide-react";

const presets = [10, 25, 50, 100];
const impacts = [
  { amount: 10, label: "Provides clean water for 1 family for a month" },
  { amount: 25, label: "Feeds 5 children nutritious meals for a week" },
  { amount: 50, label: "Funds 10 school kits for underprivileged students" },
  { amount: 100, label: "Builds a micro-garden for a rural community" },
];

export default function Cart27() {
  const [amount, setAmount] = useState(25);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [recurring, setRecurring] = useState(false);
  const [donated, setDonated] = useState(false);

  const finalAmount = isCustom ? (parseFloat(custom) || 0) : amount;
  const impact = impacts.find(i => i.amount <= finalAmount && finalAmount < (impacts.find(ii => ii.amount > i.amount)?.amount || Infinity))
    || (finalAmount >= 100 ? impacts[3] : impacts[0]);

  const handleDonate = () => {
    if (finalAmount <= 0) return;
    setDonated(true);
    setTimeout(() => setDonated(false), 3000);
  };

  return (
    <div className="w-full bg-gradient-to-br from-rose-50 to-orange-50 p-6 sm:p-10 font-sans">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={30} className="fill-rose-500 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Make a Difference Today</h2>
          <p className="text-slate-500 text-sm mt-2">Every donation directly funds humanitarian projects worldwide.</p>
        </div>

        {/* Preset amounts */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {presets.map(p => (
            <button type="button"
              key={p}
              onClick={() => { setAmount(p); setIsCustom(false); setCustom(""); }}
              className={`py-3 rounded-xl font-bold text-sm transition-all ${
                !isCustom && amount === p
                  ? "bg-rose-500 text-white shadow-md scale-105"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-rose-300"
              }`}
            >
              ${p}
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <div className="relative mb-5">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-lg">$</span>
          <input
            type="number"
            min={1}
            placeholder="Custom amount"
            value={custom}
            onChange={e => { setCustom(e.target.value); setIsCustom(true); }}
            onFocus={() => setIsCustom(true)}
            className={`w-full pl-9 pr-4 py-3.5 border-2 rounded-2xl text-base font-bold focus:outline-none transition ${
              isCustom && custom ? "border-rose-400 bg-white" : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          />
        </div>

        {/* Impact statement */}
        {finalAmount > 0 && (
          <div className="bg-white rounded-2xl border border-rose-200 p-4 mb-5 flex gap-3">
            <span className="text-2xl shrink-0">🌍</span>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">{impact?.label}</p>
          </div>
        )}

        {/* Recurring toggle */}
        <div
          onClick={() => setRecurring(r => !r)}
          className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer mb-6 transition ${recurring ? "border-rose-400 bg-rose-50" : "border-slate-200 bg-white hover:border-rose-200"}`}
        >
          <div>
            <p className="font-semibold text-slate-900 text-sm">Make this a monthly donation</p>
            <p className="text-xs text-slate-400 mt-0.5">Cancel anytime · No commitment</p>
          </div>
          <div className={`w-12 h-6 rounded-full transition-all relative ${recurring ? "bg-rose-500" : "bg-slate-200"}`}>
            <div className={`w-5 h-5 rounded-full bg-white shadow absolute top-0.5 transition-all ${recurring ? "right-0.5" : "left-0.5"}`} />
          </div>
        </div>

        <button type="button"
          onClick={handleDonate}
          disabled={finalAmount <= 0}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            finalAmount <= 0
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : donated
              ? "bg-emerald-500 text-white"
              : "bg-rose-500 hover:bg-rose-600 text-white"
          }`}
        >
          {donated ? (
            <><Check size={20} /> Thank you! 💖 Donated ${finalAmount}{recurring ? "/month" : ""}</>
          ) : (
            <><Heart size={18} className="fill-white" /> Donate ${finalAmount || "..."}{recurring ? "/month" : ""}</>
          )}
        </button>
        <p className="text-center text-xs text-slate-400 mt-3">🔒 Secure · Tax-deductible · 100% to projects</p>
      </div>
    </div>
  );
}
