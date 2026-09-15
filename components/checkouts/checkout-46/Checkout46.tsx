"use client";
import React, { useState } from "react";
import { Music, Check, ArrowRight } from "lucide-react";

export default function Checkout46() {
  const [amount, setAmount] = useState<number | "">("");
  const [placed, setPlaced] = useState(false);

  const minPrice = 5;
  const avgPrice = 12;

  if (placed) {
    return (
      <div className="w-full bg-slate-900 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-rose-500" />
          </div>
          <h2 className="text-xl font-bold text-white">Thank you for your support!</h2>
          <p className="text-slate-400 text-sm mt-2">Your download link for "Midnight EP" has been emailed to you.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans flex justify-center text-white">
      <div className="w-full max-w-md bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex gap-4 mb-8 relative z-10">
          <div className="w-20 h-20 bg-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-rose-500/30">
            <Music size={32} className="text-white" />
          </div>
          <div className="pt-2">
            <h2 className="text-xl font-bold text-white">Midnight EP</h2>
            <p className="text-slate-400 text-sm">By The Synth Collective</p>
            <p className="text-rose-400 text-xs font-bold mt-2 uppercase tracking-wider">Digital Download (FLAC/MP3)</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5 mb-8 border border-slate-700 relative z-10">
          <h3 className="font-bold text-white text-sm mb-4">Name Your Price</h3>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input 
                type="number" 
                min={minPrice}
                value={amount}
                onChange={e => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder={`${minPrice}+`}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl pl-8 pr-4 py-3 text-lg font-bold focus:outline-none focus:border-rose-500 text-white" 
              />
            </div>
          </div>

          <div className="flex gap-2 text-xs">
            <button 
              onClick={() => setAmount(minPrice)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 transition"
            >
              Minimum (${minPrice})
            </button>
            <button 
              onClick={() => setAmount(avgPrice)}
              className="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30 transition"
            >
              Average (${avgPrice})
            </button>
          </div>
        </div>

        <div className="mb-6 relative z-10">
          <input placeholder="Email to receive download" type="email" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-500 text-white mb-3" />
          <input placeholder="Card Number" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-500 text-white" />
        </div>

        <button 
          onClick={() => setPlaced(true)}
          disabled={amount === "" || amount < minPrice}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition relative z-10
            ${amount === "" || amount < minPrice ? "bg-slate-700 text-slate-500 cursor-not-allowed" : "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-500/20"}`}
        >
          Pay ${amount || 0} & Download <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
}
