"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Eye } from "lucide-react";

export default function Cart08() {
  const products = [
    { id: 1, name: "Merino Crew Neck", price: 120, colors: ["#1a1a1a", "#d97706", "#1d4ed8"], emoji: "🧥" },
    { id: 2, name: "Organic Canvas Hat", price: 55, colors: ["#78716c", "#1a1a1a", "#f5f5f4"], emoji: "🧢" },
    { id: 3, name: "Waxed Overshirt", price: 195, colors: ["#713f12", "#1a1a1a", "#166534"], emoji: "🥋" },
    { id: 4, name: "Slim Chinos", price: 98, colors: ["#d97706", "#1a1a1a", "#1d4ed8"], emoji: "👖" },
    { id: 5, name: "Chelsea Boots", price: 245, colors: ["#1a1a1a", "#92400e"], emoji: "👢" },
    { id: 6, name: "Ribbed Beanie", price: 42, colors: ["#1a1a1a", "#dc2626", "#1d4ed8"], emoji: "🧤" },
  ];

  const [added, setAdded] = useState<Record<number, boolean>>({});
  const [hoveredColor, setHoveredColor] = useState<Record<number, string>>({});

  const addToCart = (id: number) => {
    setAdded(a => ({ ...a, [id]: true }));
    setTimeout(() => setAdded(a => ({ ...a, [id]: false })), 2000);
  };

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Men's Collection</h2>
      <p className="text-slate-500 text-sm mb-8">Hover a card to reveal Add to Cart.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
        {products.map(p => (
          <div key={p.id} className="group relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer">
            {/* Product image */}
            <div
              className="h-52 flex items-center justify-center text-7xl transition-colors duration-300"
              style={{ backgroundColor: hoveredColor[p.id] ? hoveredColor[p.id] + "18" : "#f8fafc" }}
            >
              {p.emoji}
            </div>

            {/* Hover Overlay with Add Button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
              {/* Color swatches on hover */}
              <div className="flex gap-2 mb-3">
                {p.colors.map(c => (
                  <button type="button"
                    key={c}
                    onMouseEnter={() => setHoveredColor(h => ({ ...h, [p.id]: c }))}
                    onMouseLeave={() => setHoveredColor(h => ({ ...h, [p.id]: "" }))}
                    className="w-5 h-5 rounded-full border-2 border-white/60 hover:border-white transition"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                <button type="button"
                  onClick={() => addToCart(p.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    added[p.id] ? "bg-emerald-500 text-white" : "bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {added[p.id] ? <><Check size={14} /> Added</> : <><ShoppingCart size={14} /> Add to Cart</>}
                </button>
                <button type="button" className="w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-xl flex items-center justify-center transition">
                  <Eye size={16} />
                </button>
              </div>
            </div>

            {/* Below-image info (always visible) */}
            <div className="p-4 bg-white">
              <p className="font-semibold text-slate-900 text-sm">{p.name}</p>
              <p className="text-slate-500 text-sm">${p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
