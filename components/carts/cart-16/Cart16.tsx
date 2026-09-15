"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Zap, ChevronRight } from "lucide-react";

export default function Cart16() {
  const product = { name: "Mechanical Keyboard TKL", price: 189, emoji: "⌨️" };
  const [cartAdded, setCartAdded] = useState(false);
  const [buyNow, setBuyNow] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2500);
  };

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        {/* Product */}
        <div className="w-full h-64 bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl flex items-center justify-center text-8xl mb-8">
          {product.emoji}
        </div>

        <div className="flex items-start justify-between mb-2">
          <h2 className="text-2xl font-bold text-slate-900">{product.name}</h2>
          <span className="text-2xl font-bold text-slate-900">${product.price * qty}</span>
        </div>
        <p className="text-slate-500 text-sm mb-6">Hot-swap · PBT keycaps · RGB per-key · USB-C</p>

        {/* Qty */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-sm font-semibold text-slate-700">Quantity</span>
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
            {[1,2,3,4,5].map(n => (
              <button
                key={n}
                onClick={() => setQty(n)}
                className={`w-9 h-9 text-sm font-bold transition ${qty === n ? "bg-slate-900 text-white" : "hover:bg-slate-50 text-slate-600"}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all duration-300 ${
              cartAdded ? "bg-emerald-500 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-900"
            }`}
          >
            {cartAdded ? <><Check size={20} /> Added to Cart!</> : <><ShoppingCart size={20} /> Add to Cart</>}
          </button>

          {/* Buy Now */}
          {buyNow ? (
            <div className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base bg-emerald-500 text-white">
              <Check size={20} /> Proceeding...
            </div>
          ) : (
            <button
              onClick={() => setBuyNow(true)}
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base bg-indigo-600 hover:bg-indigo-700 text-white transition"
            >
              <Zap size={20} /> Buy Now <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* Trust signals */}
        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-slate-500">
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-base mb-1">🚚</p>
            <p className="font-medium">Free shipping<br/>over $100</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-base mb-1">↩️</p>
            <p className="font-medium">30-day<br/>returns</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-base mb-1">🔒</p>
            <p className="font-medium">Secure<br/>checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
