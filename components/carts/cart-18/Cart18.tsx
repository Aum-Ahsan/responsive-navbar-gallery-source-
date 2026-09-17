"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Star, Users, TrendingUp } from "lucide-react";

export default function Cart18() {
  const products = [
    {
      id: 1, name: "Bamboo Tumbler 650ml", price: 34, emoji: "🍵",
      proof: { inCart: 47, bought: 312, rating: 4.9, reviews: 892 },
    },
    {
      id: 2, name: "Glass Straw Set (8pk)", price: 19, emoji: "🥤",
      proof: { inCart: 23, bought: 1204, rating: 4.8, reviews: 2100 },
    },
    {
      id: 3, name: "Beeswax Food Wraps", price: 28, emoji: "🌿",
      proof: { inCart: 9, bought: 567, rating: 4.7, reviews: 412 },
    },
  ];

  const [added, setAdded] = useState<Record<number, boolean>>({});

  const addToCart = (id: number) => {
    setAdded(a => ({ ...a, [id]: true }));
    setTimeout(() => setAdded(a => ({ ...a, [id]: false })), 2200);
  };

  return (
    <div className="w-full bg-teal-50 p-6 sm:p-10 font-sans">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Eco Essentials</h2>
      <p className="text-slate-500 text-sm mb-8">Real data from real customers — shop with confidence.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-2xl border border-teal-100 shadow-sm overflow-hidden">
            {/* Image */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 h-44 flex items-center justify-center text-6xl">
              {p.emoji}
            </div>

            <div className="p-5">
              <h3 className="font-bold text-slate-900 mb-1">{p.name}</h3>
              <p className="text-xl font-bold text-slate-900 mb-4">${p.price}</p>

              {/* Social Proof Signals */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-slate-600 bg-amber-50 rounded-lg px-3 py-2">
                  <Star size={12} className="fill-amber-400 text-amber-400 shrink-0" />
                  <span><strong>{p.proof.rating}</strong> · {p.proof.reviews.toLocaleString()} reviews</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 bg-blue-50 rounded-lg px-3 py-2">
                  <Users size={12} className="text-blue-500 shrink-0" />
                  <span><strong>{p.proof.inCart}</strong> people have this in their cart</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 bg-emerald-50 rounded-lg px-3 py-2">
                  <TrendingUp size={12} className="text-emerald-500 shrink-0" />
                  <span><strong>{p.proof.bought.toLocaleString()}</strong> sold this month</span>
                </div>
              </div>

              <button type="button"
                onClick={() => addToCart(p.id)}
                className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 transition-all duration-300 ${
                  added[p.id] ? "bg-emerald-500 text-white" : "bg-teal-700 hover:bg-teal-800 text-white"
                }`}
              >
                {added[p.id] ? <><Check size={15} /> Added!</> : <><ShoppingCart size={15} /> Add to Cart</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
