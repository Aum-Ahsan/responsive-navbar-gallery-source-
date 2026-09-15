"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Plus, X } from "lucide-react";

export default function Cart23() {
  const product = { name: "Pro Wireless Headphones", price: 299, emoji: "🎧" };
  const [fabExpanded, setFabExpanded] = useState(false);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = () => {
    setAdded(true);
    setCartCount(c => c + qty);
    setFabExpanded(false);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-slate-900 min-h-[500px] p-6 sm:p-10 font-sans relative overflow-hidden">
      {/* Page content */}
      <div className="max-w-md">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Product Detail</p>
        <div className="text-8xl mb-6">{product.emoji}</div>
        <h2 className="text-3xl font-bold text-white mb-3">{product.name}</h2>
        <p className="text-slate-400 mb-4 leading-relaxed">
          40mm dynamic drivers · Active Noise Cancellation · 30-hour battery · Foldable frame
        </p>
        <div className="flex gap-3 mb-6">
          {["ANC", "30h Battery", "Foldable", "USB-C"].map(tag => (
            <span key={tag} className="text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-full">{tag}</span>
          ))}
        </div>
        <p className="text-3xl font-bold text-white">${product.price}</p>
      </div>

      {/* Cart badge */}
      {cartCount > 0 && (
        <div className="absolute top-6 right-6 flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          <ShoppingCart size={16} />
          {cartCount} in cart
        </div>
      )}

      {/* FAB */}
      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-3">
        {/* Expanded panel */}
        {fabExpanded && (
          <div className="bg-white rounded-3xl shadow-2xl p-5 w-64 mb-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{product.emoji}</span>
              <div>
                <p className="font-bold text-slate-900 text-sm leading-tight">{product.name}</p>
                <p className="text-slate-500 text-sm">${product.price * qty}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-slate-700">Quantity</p>
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-8 h-8 flex items-center justify-center hover:bg-slate-50 text-slate-600 transition"><X size={12} className={qty > 1 ? "hidden" : ""} /><span className={qty <= 1 ? "hidden" : ""}>-</span></button>
                <span className="w-8 text-center text-sm font-bold">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-slate-50 text-slate-600 transition"><Plus size={12} /></button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className={`w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                added ? "bg-emerald-500 text-white" : "bg-slate-900 hover:bg-slate-700 text-white"
              }`}
            >
              {added ? <><Check size={16} /> Added!</> : <><ShoppingCart size={16} /> Add to Cart — ${product.price * qty}</>}
            </button>
          </div>
        )}

        {/* FAB Button */}
        <button
          onClick={() => setFabExpanded(o => !o)}
          className={`w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
            fabExpanded ? "bg-slate-700 rotate-45" : "bg-indigo-600 hover:bg-indigo-500"
          }`}
        >
          {fabExpanded ? <X size={24} className="text-white" /> : <ShoppingCart size={24} className="text-white" />}
        </button>
      </div>
    </div>
  );
}
