"use client";
import React, { useState } from "react";
import { Plus, Minus, ShoppingCart, Sparkles, Check } from "lucide-react";

export default function Cart35() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const price = 24.00;
  const freeShippingThreshold = 75;
  
  const currentTotal = qty * price;
  const remaining = freeShippingThreshold - currentTotal;
  const progress = Math.min(100, (currentTotal / freeShippingThreshold) * 100);
  const isFreeShipping = currentTotal >= freeShippingThreshold;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
        
        {/* Gamified Banner */}
        <div className={`absolute top-0 left-0 right-0 py-2.5 px-4 text-center text-xs font-bold transition-colors duration-500 ${isFreeShipping ? "bg-emerald-500 text-white" : "bg-indigo-50 text-indigo-700"}`}>
          {isFreeShipping ? (
            <span className="flex items-center justify-center gap-1.5"><Sparkles size={14} /> You've unlocked FREE Shipping!</span>
          ) : (
            <span>Add ${(remaining).toFixed(2)} more for FREE Shipping</span>
          )}
        </div>

        <div className="mt-10 mb-6">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-700 ease-out ${isFreeShipping ? "bg-emerald-500" : "bg-indigo-500"}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="w-24 h-32 bg-slate-100 rounded-xl flex items-center justify-center text-4xl">🕯️</div>
          <div className="flex flex-col justify-between py-1">
            <div>
              <h2 className="font-bold text-slate-900">Lavender Driftwood</h2>
              <p className="text-sm text-slate-500 mt-1">Soy Wax Candle, 8oz</p>
            </div>
            <p className="font-bold text-lg text-slate-900">${price.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-1 w-32">
            <button type="button" 
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 transition hover:bg-white rounded-xl shadow-sm"
            >
              <Minus size={16} />
            </button>
            <span className="font-bold text-sm">{qty}</span>
            <button type="button" 
              onClick={() => setQty(qty + 1)}
              className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 transition hover:bg-white rounded-xl shadow-sm"
            >
              <Plus size={16} />
            </button>
          </div>

          <button type="button" 
            onClick={handleAdd}
            disabled={added}
            className={`flex-1 h-12 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`}
          >
            {added ? <Check size={18} /> : <ShoppingCart size={18} />}
            {added ? "Added!" : "Add"}
          </button>
        </div>

      </div>
    </div>
  );
}
