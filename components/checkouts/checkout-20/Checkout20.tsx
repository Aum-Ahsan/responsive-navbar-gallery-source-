"use client";
import React, { useState } from "react";
import { Lock, Check } from "lucide-react";

export default function Checkout20() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Got it!</h2>
          <p className="text-slate-500 text-sm mt-1">Your order is on the way.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-100 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 bg-slate-900 text-white text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3">👟</div>
          <h2 className="font-bold">Everyday Runner</h2>
          <p className="text-slate-400 text-sm">Size 10 · White</p>
          <p className="text-2xl font-bold mt-2">$85</p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); setPlaced(true); }} className="p-6 space-y-4">
          <div className="space-y-3">
            <input required placeholder="Name" className="w-full border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition" />
            <input required type="email" placeholder="Email" className="w-full border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition" />
            <input required placeholder="Shipping Address" className="w-full border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition" />
          </div>
          
          <div className="pt-4 space-y-3">
            <input required placeholder="Card Number" className="w-full border-b border-slate-200 py-2 text-sm font-mono focus:outline-none focus:border-slate-900 transition" />
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="MM/YY" className="border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition" />
              <input required placeholder="CVC" className="border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition" />
            </div>
          </div>

          <button type="submit" className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/30">
            <Lock size={15} /> Pay $85
          </button>
        </form>
      </div>
    </div>
  );
}
