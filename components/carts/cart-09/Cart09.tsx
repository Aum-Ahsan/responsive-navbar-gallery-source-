"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Plus, X } from "lucide-react";

const items = [
  { id: 1, name: "Espresso Machine", price: 349, emoji: "☕", required: true },
  { id: 2, name: "Burr Grinder", price: 149, emoji: "⚙️", required: false },
  { id: 3, name: "Tamper & Distributor Set", price: 69, emoji: "🔧", required: false },
  { id: 4, name: "Knock Box", price: 39, emoji: "🗑️", required: false },
  { id: 5, name: "Milk Pitcher", price: 29, emoji: "🥛", required: false },
];

export default function Cart09() {
  const [selected, setSelected] = useState<Set<number>>(new Set([1]));
  const [added, setAdded] = useState(false);

  const toggle = (id: number) => {
    if (id === 1) return; // required
    setSelected(s => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedItems = items.filter(i => selected.has(i.id));
  const total = selectedItems.reduce((s, i) => s + i.price, 0);
  const savings = Math.round(total * 0.12);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-10 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full">Bundle & Save 12%</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-3">Home Espresso Bundle</h2>
            <p className="text-slate-500 text-sm mt-1">Pick your add-ons — the machine is included.</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-slate-900">${total}</p>
            <p className="text-sm text-emerald-600 font-semibold">Save ${savings}</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {items.map(item => {
            const isSelected = selected.has(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-white border-amber-500 shadow-md"
                    : "bg-white/60 border-transparent hover:border-amber-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition ${
                  isSelected ? "bg-amber-500" : "bg-slate-100"
                }`}>
                  {isSelected ? <Check size={18} className="text-white" /> : <Plus size={18} className="text-slate-400" />}
                </div>
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{item.name}</p>
                  {item.required && <p className="text-xs text-amber-600 font-medium">Included</p>}
                </div>
                <span className="font-bold text-slate-900">${item.price}</span>
              </div>
            );
          })}
        </div>

        {/* Selected summary */}
        <div className="bg-white rounded-2xl border border-amber-200 p-4 mb-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Your Bundle ({selected.size} items)</p>
          <div className="flex flex-wrap gap-2">
            {selectedItems.map(i => (
              <span key={i.id} className="flex items-center gap-1 text-xs bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full font-medium">
                {i.emoji} {i.name}
                {!i.required && (
                  <button type="button" onClick={(e) => { e.stopPropagation(); toggle(i.id); }} className="ml-1 opacity-60 hover:opacity-100">
                    <X size={10} />
                  </button>
                )}
              </span>
            ))}
          </div>
        </div>

        <button type="button"
          onClick={handleAdd}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            added ? "bg-emerald-500 text-white" : "bg-slate-900 hover:bg-slate-700 text-white"
          }`}
        >
          {added ? <><Check size={20} /> Bundle Added to Cart!</> : <><ShoppingCart size={20} /> Add Bundle — ${total}</>}
        </button>
      </div>
    </div>
  );
}
