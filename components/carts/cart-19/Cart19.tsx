"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Plus } from "lucide-react";

export default function Cart19() {
  const mainProduct = { id: 0, name: "Professional Camera Bag", price: 149, emoji: "📷" };
  const recommendations = [
    { id: 1, name: "Memory Card 128GB", price: 24, emoji: "💾", tag: "Frequently bought together" },
    { id: 2, name: "Lens Cleaning Kit", price: 18, emoji: "🔭", tag: "Customers also buy" },
    { id: 3, name: "Peak Design Clip", price: 59, emoji: "🔗", tag: "Complete the look" },
  ];

  const [selected, setSelected] = useState<Set<number>>(new Set([0]));
  const [added, setAdded] = useState(false);

  const toggle = (id: number) => {
    if (id === 0) return;
    setSelected(s => { const n = new Set(s); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  };

  const selectedItems = [mainProduct, ...recommendations].filter(i => selected.has(i.id));
  const total = selectedItems.reduce((s, i) => s + i.price, 0);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Main product */}
        <div className="flex gap-5 mb-6">
          <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center text-5xl shrink-0">{mainProduct.emoji}</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{mainProduct.name}</h2>
            <p className="text-2xl font-bold text-slate-900 mt-1">${mainProduct.price}</p>
          </div>
        </div>

        {/* Frequently bought together header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-1 bg-slate-100" />
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Frequently Bought Together</p>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        {/* Recommendation items */}
        <div className="space-y-3 mb-6">
          {recommendations.map(r => (
            <div
              key={r.id}
              onClick={() => toggle(r.id)}
              className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-150 ${
                selected.has(r.id) ? "border-slate-900 bg-slate-50" : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center shrink-0 transition ${
                selected.has(r.id) ? "bg-slate-900 border-slate-900" : "border-slate-300"
              }`}>
                {selected.has(r.id) ? <Check size={14} className="text-white" /> : <Plus size={14} className="text-slate-300" />}
              </div>
              <span className="text-2xl">{r.emoji}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                <p className="text-xs text-slate-400">{r.tag}</p>
              </div>
              <span className="font-bold text-slate-900 shrink-0">+${r.price}</span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="bg-slate-50 rounded-2xl p-4 mb-5 flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-500">{selected.size} item{selected.size !== 1 ? "s" : ""} selected</p>
            <p className="text-xs text-emerald-600 font-medium">Bundle saves more</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">${total}</p>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            added ? "bg-emerald-500 text-white" : "bg-slate-900 hover:bg-slate-700 text-white"
          }`}
        >
          {added ? <><Check size={20} /> Added {selected.size} item{selected.size !== 1 ? "s" : ""}!</> : <><ShoppingCart size={20} /> Add {selected.size} Item{selected.size !== 1 ? "s" : ""} — ${total}</>}
        </button>
      </div>
    </div>
  );
}
