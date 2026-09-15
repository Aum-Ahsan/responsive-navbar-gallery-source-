"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, ChevronDown } from "lucide-react";

export default function Cart12() {
  const products = [
    { id: 1, name: "Cold Brew Concentrate", price: 18, unit: "32oz bottle", emoji: "🧋" },
    { id: 2, name: "Single Origin Beans", price: 24, unit: "250g bag", emoji: "☕" },
    { id: 3, name: "Oat Milk Barista", price: 6, unit: "1L carton", emoji: "🥛" },
  ];

  const qtyOptions = [1,2,3,4,5,6,8,10,12].map(n => ({ value: n, label: n < 10 ? `${n}` : `${n} (bulk)` }));
  const [quantities, setQuantities] = useState<Record<number, number>>({ 1: 1, 2: 1, 3: 1 });
  const [added, setAdded] = useState<Record<number, boolean>>({});

  const addToCart = (id: number) => {
    setAdded(a => ({ ...a, [id]: true }));
    setTimeout(() => setAdded(a => ({ ...a, [id]: false })), 2000);
  };

  return (
    <div className="w-full bg-amber-50 p-6 sm:p-10 font-sans">
      <h2 className="text-2xl font-bold text-amber-900 mb-1">Coffee Subscription Shop</h2>
      <p className="text-amber-700 text-sm mb-8">Choose your quantity from the dropdown.</p>
      <div className="space-y-4">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-2xl border border-amber-100 p-5 flex items-center gap-5">
            <div className="text-4xl w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">{p.emoji}</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-900">{p.name}</p>
              <p className="text-slate-500 text-xs">{p.unit} · ${p.price} each</p>
            </div>
            {/* Quantity Dropdown */}
            <div className="relative shrink-0">
              <select
                value={quantities[p.id]}
                onChange={e => setQuantities(q => ({ ...q, [p.id]: Number(e.target.value) }))}
                className="appearance-none pl-3 pr-8 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                {qtyOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            <span className="font-bold text-slate-900 w-14 text-right shrink-0">${p.price * quantities[p.id]}</span>
            <button
              onClick={() => addToCart(p.id)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                added[p.id] ? "bg-emerald-500 text-white" : "bg-amber-500 hover:bg-amber-600 text-white"
              }`}
            >
              {added[p.id] ? <Check size={14} /> : <ShoppingCart size={14} />}
              {added[p.id] ? "Added" : "Add"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
