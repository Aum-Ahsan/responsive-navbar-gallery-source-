"use client";
import React, { useState } from "react";
import { Package, Plus, Minus, ShoppingCart, Check } from "lucide-react";

export default function Cart47() {
  const [items, setItems] = useState<Record<string, number>>({
    cookies: 0, brownies: 0, blondies: 0, macarons: 0
  });
  const [added, setAdded] = useState(false);

  const limit = 6;
  const currentCount = Object.values(items).reduce((a, b) => a + b, 0);
  const remaining = limit - currentCount;
  const price = 24; // Flat price for a box of 6

  const products = [
    { id: "cookies", name: "Choc Chip", emoji: "🍪" },
    { id: "brownies", name: "Fudge Brownie", emoji: "🍫" },
    { id: "blondies", name: "Caramel Blondie", emoji: "🍮" },
    { id: "macarons", name: "Vanilla Macaron", emoji: "🧁" },
  ];

  const handleAdd = () => {
    if (remaining > 0) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const update = (id: string, delta: number) => {
    const next = items[id] + delta;
    if (next < 0) return;
    if (delta > 0 && remaining === 0) return;
    setItems({ ...items, [id]: next });
  };

  return (
    <div className="w-full bg-pink-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm border border-pink-100">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center">
            <Package size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Build Your Box</h2>
            <p className="text-slate-500 text-sm mt-1">Select {limit} items • ${price}</p>
          </div>
        </div>

        {/* Slots indicator */}
        <div className="flex gap-2 mb-6">
          {Array.from({ length: limit }).map((_, i) => (
            <div 
              key={i} 
              className={`flex-1 h-2 rounded-full transition-all duration-300 
                ${i < currentCount ? "bg-pink-500" : "bg-slate-100"}`} 
            />
          ))}
        </div>

        <div className="space-y-4 mb-8">
          {products.map(p => (
            <div key={p.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{p.emoji}</span>
                <span className="font-semibold text-slate-700">{p.name}</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-1 border border-slate-100">
                <button 
                  onClick={() => update(p.id, -1)}
                  disabled={items[p.id] === 0}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-500 disabled:opacity-50"
                >
                  <Minus size={14} />
                </button>
                <span className="w-4 text-center font-bold text-sm text-slate-900">{items[p.id]}</span>
                <button 
                  onClick={() => update(p.id, 1)}
                  disabled={remaining === 0}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-500 disabled:opacity-50"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={handleAdd}
          disabled={added || remaining > 0}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition 
            ${remaining > 0 ? "bg-slate-100 text-slate-400 cursor-not-allowed" : 
              added ? "bg-emerald-500 text-white" : "bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/20"}`}
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added ? "Box Added!" : remaining > 0 ? `Select ${remaining} more items` : "Add Completed Box to Cart"}
        </button>

      </div>
    </div>
  );
}
