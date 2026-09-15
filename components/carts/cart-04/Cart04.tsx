"use client";
import React, { useState } from "react";
import { ShoppingCart, Heart, Star, Minus, Plus, ChevronRight, Check } from "lucide-react";

export default function Cart04() {
  const product = {
    name: "Air Max Motion Trainers",
    price: 149,
    originalPrice: 189,
    rating: 4.7,
    reviews: 1289,
    emoji: "👟",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["#1a1a1a", "#2563eb", "#dc2626", "#16a34a"],
  };

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [wished, setWished] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-white font-sans">
      {/* Product Area */}
      <div className="p-6 sm:p-10 flex flex-col sm:flex-row gap-8 pb-32">
        {/* Image */}
        <div className="relative w-full sm:w-72 h-72 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center text-8xl shrink-0">
          {product.emoji}
          <button
            onClick={() => setWished(w => !w)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
          >
            <Heart size={18} className={wished ? "fill-rose-500 text-rose-500" : "text-slate-400"} />
          </button>
        </div>

        {/* Details */}
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-1">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
            <span className="text-sm text-slate-400">({product.reviews.toLocaleString()} reviews)</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h2>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
            <span className="text-lg text-slate-400 line-through">${product.originalPrice}</span>
            <span className="text-sm bg-rose-100 text-rose-600 font-bold px-2 py-0.5 rounded-full">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
            </span>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Color</p>
            <div className="flex gap-2">
              {product.colors.map(c => (
                <button key={c} className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-slate-200 hover:ring-slate-900 transition" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(s => (
                <button key={s} className="px-3 py-2 text-sm border border-slate-200 rounded-xl hover:border-slate-900 hover:bg-slate-900 hover:text-white transition font-medium">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-slate-100 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-6 py-4">
        <div className="max-w-xl mx-auto flex items-center gap-4">
          {/* Qty Stepper */}
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-11 flex items-center justify-center hover:bg-slate-50 transition">
              <Minus size={14} />
            </button>
            <span className="w-10 text-center font-bold text-slate-900">{qty}</span>
            <button onClick={() => setQty(q => q + 1)} className="w-10 h-11 flex items-center justify-center hover:bg-slate-50 transition">
              <Plus size={14} />
            </button>
          </div>

          {/* Price */}
          <span className="font-bold text-slate-900 text-lg shrink-0">${product.price * qty}</span>

          {/* Add Button */}
          <button
            onClick={handleAdd}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300 ${
              added ? "bg-emerald-500 text-white" : "bg-slate-900 hover:bg-slate-700 text-white"
            }`}
          >
            {added ? <><Check size={18} /> Added to Cart!</> : <><ShoppingCart size={18} /> Add to Cart</>}
          </button>

          {/* Checkout shortcut */}
          <button className="shrink-0 flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-3 rounded-xl transition">
            Buy Now <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
