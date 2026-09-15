"use client";
import React, { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";

export default function Cart37() {
  const [sample, setSample] = useState("serum");
  const [added, setAdded] = useState(false);

  const samples = [
    { id: "serum", name: "Glow Serum", emoji: "✨" },
    { id: "cleanser", name: "Gel Cleanser", emoji: "💧" },
    { id: "mask", name: "Clay Mask", emoji: "🌿" },
  ];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-orange-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-sm border border-orange-100">
        
        <div className="flex gap-4 mb-6 pb-6 border-b border-orange-50">
          <div className="w-24 h-24 bg-orange-100 rounded-xl flex items-center justify-center text-4xl">🧴</div>
          <div className="py-1">
            <h2 className="font-bold text-slate-900">Vitamin C Moisturizer</h2>
            <p className="text-slate-500 text-sm mt-1">Daily Hydration, 50ml</p>
            <p className="text-lg font-bold text-orange-600 mt-2">$42.00</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Choose a free sample</p>
          <div className="grid grid-cols-3 gap-2">
            {samples.map(s => (
              <button
                key={s.id}
                onClick={() => setSample(s.id)}
                className={`py-3 px-2 rounded-xl border-2 transition flex flex-col items-center gap-1 ${sample === s.id ? "border-orange-500 bg-orange-50" : "border-slate-100 hover:border-slate-200"}`}
              >
                <span className="text-xl">{s.emoji}</span>
                <span className={`text-[10px] font-bold text-center leading-tight ${sample === s.id ? "text-orange-900" : "text-slate-500"}`}>{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20"}`}
        >
          {added ? <Check size={18} /> : <ShoppingBag size={18} />}
          {added ? "Added with Sample" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
