"use client";
import React, { useState } from "react";
import { Coins, CreditCard, ShoppingCart, Check } from "lucide-react";

export default function Cart45() {
  const [usePoints, setUsePoints] = useState(true);
  const [added, setAdded] = useState(false);

  const price = 120.00;
  const userPoints = 4500; // 100 points = $1
  const pointsValue = 45.00;

  const finalPrice = usePoints ? price - pointsValue : price;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Noise-Canceling Pro</h2>
            <p className="text-slate-500 text-sm mt-1">Wireless Over-Ear</p>
          </div>
          <p className="text-xl font-bold text-slate-900">${price.toFixed(2)}</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="flex items-center gap-1.5 text-sm font-bold text-amber-900">
              <Coins size={16} className="text-amber-500" /> Reward Points
            </span>
            <span className="text-xs font-semibold text-amber-700 bg-amber-200/50 px-2 py-1 rounded-md">
              Balance: {userPoints} pts
            </span>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={usePoints}
              onChange={() => setUsePoints(!usePoints)}
              className="mt-1 w-4 h-4 text-amber-600 rounded border-amber-300 focus:ring-amber-500"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">Apply {userPoints} Points</p>
              <p className="text-xs text-slate-500 mt-0.5">Save ${pointsValue.toFixed(2)} on this purchase.</p>
            </div>
          </label>
        </div>

        <div className="flex justify-between items-end mb-6 py-4 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total to Pay</span>
            <div className="flex items-center gap-2 mt-1">
              <CreditCard size={14} className="text-slate-400" />
              <span className="text-sm text-slate-500">Credit Card</span>
            </div>
          </div>
          <div className="text-right">
            {usePoints && <p className="text-xs text-slate-400 line-through mb-1">${price.toFixed(2)}</p>}
            <p className="text-3xl font-bold text-slate-900">${finalPrice.toFixed(2)}</p>
          </div>
        </div>

        <button type="button"
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20"}`}
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added ? "Added to Cart" : `Add to Cart - ${finalPrice.toFixed(2)}`}
        </button>

      </div>
    </div>
  );
}
