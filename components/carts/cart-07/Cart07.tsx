"use client";
import React, { useState } from "react";
import { ShoppingCart, Heart, Check, Bookmark } from "lucide-react";

export default function Cart07() {
  const products = [
    { id: 1, name: "Slim Bifold Wallet", price: 72, emoji: "👛", inStock: true },
    { id: 2, name: "Titanium Pen", price: 118, emoji: "🖊️", inStock: true },
    { id: 3, name: "Leather Card Case", price: 54, emoji: "🗂️", inStock: false },
    { id: 4, name: "Brass Keychain", price: 38, emoji: "🔑", inStock: true },
  ];

  const [cartAdded, setCartAdded] = useState<Record<number, boolean>>({});
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});

  const addToCart = (id: number) => {
    setCartAdded(a => ({ ...a, [id]: true }));
    setTimeout(() => setCartAdded(a => ({ ...a, [id]: false })), 2200);
  };

  const toggleWish = (id: number) => setWishlist(w => ({ ...w, [id]: !w[id] }));

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-10 font-sans">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Every Day Carry</h2>
        <p className="text-slate-400 text-sm mt-1">Save for later or add straight to your cart.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map(p => (
          <div key={p.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-colors group">
            {/* Image */}
            <div className="relative h-44 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-6xl">
              {p.emoji}
              {!p.inStock && (
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full">Out of Stock</span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-white text-sm mb-1">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-4">${p.price}</p>

              {/* Dual Action Buttons */}
              <div className="flex gap-2">
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWish(p.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                    wishlist[p.id]
                      ? "bg-rose-500/20 border-rose-500/50 text-rose-400"
                      : "border-slate-600 text-slate-400 hover:border-slate-400 hover:text-slate-200"
                  }`}
                >
                  {wishlist[p.id] ? (
                    <><Bookmark size={13} className="fill-rose-400" /> Saved</>
                  ) : (
                    <><Heart size={13} /> Save</>
                  )}
                </button>

                {/* Add to Cart Button */}
                <button
                  onClick={() => p.inStock && addToCart(p.id)}
                  disabled={!p.inStock}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    !p.inStock
                      ? "bg-slate-700 text-slate-600 cursor-not-allowed"
                      : cartAdded[p.id]
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {cartAdded[p.id] ? (
                    <><Check size={13} /> Done!</>
                  ) : (
                    <><ShoppingCart size={13} /> Add</>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wishlist Summary */}
      {Object.values(wishlist).some(Boolean) && (
        <div className="mt-6 bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300">
            <Heart size={16} className="text-rose-400 fill-rose-400" />
            <span className="text-sm font-semibold">{Object.values(wishlist).filter(Boolean).length} item(s) saved to wishlist</span>
          </div>
          <button className="text-xs text-slate-400 hover:text-white underline transition">View Wishlist →</button>
        </div>
      )}
    </div>
  );
}
