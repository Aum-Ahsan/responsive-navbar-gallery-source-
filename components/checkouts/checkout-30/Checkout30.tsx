"use client";
import React, { useState } from "react";
import { Users, SplitSquareHorizontal, Check, CreditCard, Link } from "lucide-react";

export default function Checkout30() {
  const [splitCount, setSplitCount] = useState(2);
  const [placed, setPlaced] = useState(false);

  const total = 320.00;
  const splitAmount = total / splitCount;

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Your share is paid!</h2>
          <p className="text-slate-500 text-sm mt-2">
            Share this link with your friends to collect the remaining ${(total - splitAmount).toFixed(2)}.
          </p>
          <div className="mt-4 flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-2 text-sm text-slate-600 font-mono">
            <Link size={14} className="text-slate-400" /> split.pay/xyz123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        
        <div className="text-center mb-6 border-b border-slate-100 pb-6">
          <div className="w-14 h-14 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <SplitSquareHorizontal size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Split the Bill</h2>
          <p className="text-slate-500 text-sm mt-1">Airbnb Booking • 2 Nights</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">${total.toFixed(2)}</p>
        </div>

        <div className="mb-6">
          <label className="text-sm font-bold text-slate-900 block mb-3 flex items-center gap-2">
            <Users size={16} className="text-slate-400" /> How many people are paying?
          </label>
          <div className="flex bg-slate-50 border border-slate-200 rounded-xl p-1">
            {[2, 3, 4, 5].map(n => (
              <button type="button"
                key={n}
                onClick={() => setSplitCount(n)}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition ${splitCount === n ? "bg-white shadow text-indigo-600" : "text-slate-500 hover:bg-slate-100"}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-8 text-center">
          <p className="text-sm text-indigo-900 font-semibold mb-1">Your Share (1 of {splitCount})</p>
          <p className="text-4xl font-bold text-indigo-600">${splitAmount.toFixed(2)}</p>
          <p className="text-xs text-indigo-400 mt-2">You will pay your share now. The order is finalized when everyone pays.</p>
        </div>

        <div className="space-y-3 mb-6">
          <input placeholder="Card Number" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="MM / YY" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input placeholder="CVV" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
        </div>

        <button type="button" 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-lg shadow-indigo-500/20"
        >
          <CreditCard size={18} /> Pay Your Share (${splitAmount.toFixed(2)})
        </button>

      </div>
    </div>
  );
}
