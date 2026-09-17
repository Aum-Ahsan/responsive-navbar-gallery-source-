"use client";
import React, { useState } from "react";
import { Heart, Check } from "lucide-react";

export default function Cart32() {
  const [amount, setAmount] = useState(50);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans flex justify-center text-white">
      <div className="w-full max-w-sm bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
        
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-rose-500/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 text-center mb-8">
          <div className="w-12 h-12 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart size={24} className="fill-rose-400" />
          </div>
          <h2 className="text-xl font-bold mb-2">Support the Cause</h2>
          <p className="text-slate-400 text-sm">Your contribution helps us plant trees worldwide.</p>
        </div>

        <div className="mb-8">
          <div className="text-center mb-6">
            <span className="text-5xl font-bold tracking-tight">${amount}</span>
          </div>

          <div className="relative px-2">
            <input
              type="range"
              min="5"
              max="250"
              step="5"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
            <div className="flex justify-between text-xs font-bold text-slate-500 mt-3">
              <span>$5</span>
              <span>$125</span>
              <span>$250+</span>
            </div>
          </div>
        </div>

        {/* Impact string */}
        <div className="bg-slate-900/50 rounded-xl p-4 text-center mb-6 border border-slate-700/50">
          <p className="text-sm text-slate-300">
            You are helping plant <strong className="text-rose-400">{Math.floor(amount / 5)} trees</strong> 🌲
          </p>
        </div>

        <button type="button" 
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-4 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-2 ${added ? "bg-emerald-500 text-white" : "bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/20"}`}
        >
          {added ? <Check size={18} /> : <Heart size={18} />}
          {added ? "Thank you!" : "Add Donation to Cart"}
        </button>
      </div>
    </div>
  );
}
