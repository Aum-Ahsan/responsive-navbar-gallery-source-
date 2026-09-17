"use client";
import React, { useState } from "react";
import { ShoppingCart, AlertTriangle, Crown, Check } from "lucide-react";

export default function Cart25() {
  const cartLimit = 10;
  const [cartCount, setCartCount] = useState(8);
  const [added, setAdded] = useState<Record<number, boolean>>({});
  const [upgraded, setUpgraded] = useState(false);

  const products = [
    { id: 1, name: "Running Shorts", price: 45, emoji: "🩳" },
    { id: 2, name: "Sports Bra", price: 55, emoji: "👙" },
    { id: 3, name: "Compression Tights", price: 78, emoji: "🧦" },
  ];

  const remaining = cartLimit - cartCount;
  const isFull = remaining <= 0;

  const handleAdd = (id: number) => {
    if (isFull) return;
    setCartCount(c => c + 1);
    setAdded(a => ({ ...a, [id]: true }));
    setTimeout(() => setAdded(a => ({ ...a, [id]: false })), 2000);
  };

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Cart limit bar */}
        <div className={`rounded-2xl p-5 mb-6 ${isFull ? "bg-rose-50 border border-rose-200" : remaining <= 2 ? "bg-amber-50 border border-amber-200" : "bg-slate-50 border border-slate-200"}`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle size={18} className={isFull ? "text-rose-500" : "text-amber-500"} />
              <p className="font-bold text-slate-900 text-sm">
                {isFull ? "Cart is Full!" : `${remaining} item${remaining !== 1 ? "s" : ""} left in your plan`}
              </p>
            </div>
            <span className={`text-sm font-bold ${isFull ? "text-rose-600" : "text-slate-600"}`}>{cartCount}/{cartLimit}</span>
          </div>

          <div className="w-full bg-white rounded-full h-2.5 mb-3">
            <div
              className={`h-2.5 rounded-full transition-all duration-500 ${isFull ? "bg-rose-500" : remaining <= 2 ? "bg-amber-400" : "bg-emerald-500"}`}
              style={{ width: `${(cartCount / cartLimit) * 100}%` }}
            />
          </div>

          {isFull ? (
            <p className="text-xs text-rose-600">Upgrade your plan to add more items to your cart.</p>
          ) : remaining <= 2 ? (
            <p className="text-xs text-amber-700">Running low! Upgrade for unlimited cart capacity.</p>
          ) : (
            <p className="text-xs text-slate-500">Free plan: up to {cartLimit} items per cart.</p>
          )}
        </div>

        {/* Upgrade offer */}
        {(isFull || remaining <= 2) && !upgraded && (
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-5 mb-6 flex items-center gap-4">
            <Crown size={28} className="text-yellow-300 shrink-0" />
            <div className="flex-1">
              <p className="font-bold text-white text-sm">Upgrade to Pro</p>
              <p className="text-violet-200 text-xs">Unlimited cart · Priority checkout · Free returns</p>
            </div>
            <button type="button"
              onClick={() => setUpgraded(true)}
              className="bg-white text-indigo-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition shrink-0"
            >
              $9.99/mo
            </button>
          </div>
        )}

        {upgraded && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 flex items-center gap-3">
            <Check size={18} className="text-emerald-600" />
            <p className="text-emerald-700 font-semibold text-sm">Pro plan activated! Unlimited cart capacity.</p>
          </div>
        )}

        {/* Products */}
        <div className="space-y-3">
          {products.map(p => (
            <div key={p.id} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <span className="text-3xl">{p.emoji}</span>
              <div className="flex-1">
                <p className="font-semibold text-slate-900 text-sm">{p.name}</p>
                <p className="text-slate-500 text-sm">${p.price}</p>
              </div>
              <button type="button"
                onClick={() => handleAdd(p.id)}
                disabled={isFull && !upgraded}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  added[p.id]
                    ? "bg-emerald-500 text-white"
                    : isFull && !upgraded
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-slate-900 hover:bg-slate-700 text-white"
                }`}
              >
                {added[p.id] ? <><Check size={13} /> Added</> : <><ShoppingCart size={13} /> Add</>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
