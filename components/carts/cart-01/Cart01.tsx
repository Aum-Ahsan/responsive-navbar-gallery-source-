"use client";
import React, { useState } from "react";
import { ShoppingCart, Star, Heart, Minus, Plus, Check } from "lucide-react";

export default function Cart01() {
  const products = [
    { id: 1, name: "Minimal Leather Wallet", price: 89, rating: 4.8, reviews: 214, img: "🎒", badge: "Best Seller" },
    { id: 2, name: "Wireless Noise Canceller", price: 249, rating: 4.9, reviews: 512, img: "🎧", badge: "New" },
    { id: 3, name: "Ceramic Pour-Over Set", price: 64, rating: 4.7, reviews: 98, img: "☕", badge: "Sale" },
  ];

  const [quantities, setQuantities] = useState<Record<number, number>>({ 1: 1, 2: 1, 3: 1 });
  const [added, setAdded] = useState<Record<number, boolean>>({});
  const [wished, setWished] = useState<Record<number, boolean>>({});

  const change = (id: number, delta: number) =>
    setQuantities(q => ({ ...q, [id]: Math.max(1, (q[id] || 1) + delta) }));

  const addToCart = (id: number) => {
    setAdded(a => ({ ...a, [id]: true }));
    setTimeout(() => setAdded(a => ({ ...a, [id]: false })), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Products</h2>
      <p className="text-slate-500 text-sm mb-8">Adjust quantity inline, then add to your cart.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
            {/* Image area */}
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 h-48 flex items-center justify-center text-7xl">
              {p.img}
              <span className="absolute top-3 left-3 text-xs font-bold bg-slate-900 text-white px-2.5 py-1 rounded-full">{p.badge}</span>
              <button
                onClick={() => setWished(w => ({ ...w, [p.id]: !w[p.id] }))}
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm transition-colors"
              >
                <Heart size={16} className={wished[p.id] ? "fill-rose-500 text-rose-500" : "text-slate-400"} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-1 mb-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-semibold text-slate-700">{p.rating}</span>
                <span className="text-xs text-slate-400">({p.reviews})</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-3">{p.name}</h3>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-slate-900">${p.price}</span>
                {/* Inline Quantity Stepper */}
                <div className="flex items-center gap-0 border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => change(p.id, -1)}
                    className="w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-9 text-center text-sm font-bold text-slate-900">{quantities[p.id]}</span>
                  <button
                    onClick={() => change(p.id, 1)}
                    className="w-9 h-9 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => addToCart(p.id)}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  added[p.id]
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-900 hover:bg-slate-700 text-white"
                }`}
              >
                {added[p.id] ? (
                  <><Check size={16} /> Added ({quantities[p.id]})</>
                ) : (
                  <><ShoppingCart size={16} /> Add to Cart</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
