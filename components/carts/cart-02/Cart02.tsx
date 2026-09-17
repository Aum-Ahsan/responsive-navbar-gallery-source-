"use client";
import React, { useState, useRef } from "react";
import { ShoppingCart, Check } from "lucide-react";

interface FlyItem { id: number; x: number; y: number }

export default function Cart02() {
  const products = [
    { id: 1, name: "Arc Desk Lamp", price: 129, emoji: "💡" },
    { id: 2, name: "Merino Throw Blanket", price: 89, emoji: "🧣" },
    { id: 3, name: "Brass Bookend Set", price: 54, emoji: "📚" },
    { id: 4, name: "Linen Tote Bag", price: 42, emoji: "👜" },
  ];

  const [cartCount, setCartCount] = useState(0);
  const [flyItems, setFlyItems] = useState<FlyItem[]>([]);
  const [added, setAdded] = useState<Record<number, boolean>>({});
  const cartRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const handleAdd = (id: number) => {
    const btn = btnRefs.current[id];
    const cart = cartRef.current;
    if (!btn || !cart) return;

    const bRect = btn.getBoundingClientRect();
    const cRect = cart.getBoundingClientRect();
    const flyId = Date.now();

    setFlyItems(f => [...f, { id: flyId, x: bRect.left, y: bRect.top }]);
    setAdded(a => ({ ...a, [id]: true }));

    setTimeout(() => {
      setCartCount(c => c + 1);
      setFlyItems(f => f.filter(fi => fi.id !== flyId));
      setAdded(a => ({ ...a, [id]: false }));
    }, 700);
  };

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans relative overflow-hidden">
      {/* Cart Icon Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Shop Goods</h2>
          <p className="text-gray-500 text-sm mt-1">Click Add — watch the magic.</p>
        </div>
        <div ref={cartRef} className="relative">
          <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
            <ShoppingCart size={22} className="text-white" />
          </div>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Fly animations */}
      {flyItems.map(fi => (
        <div
          key={fi.id}
          className="fixed z-50 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center pointer-events-none"
          style={{
            left: fi.x,
            top: fi.y,
            animation: "flyToCart 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
          }}
        >
          <ShoppingCart size={14} className="text-white" />
        </div>
      ))}

      <style>{`
        @keyframes flyToCart {
          0%   { transform: scale(1) translate(0,0); opacity: 1; }
          60%  { transform: scale(0.5) translate(200px, -120px); opacity: 0.8; }
          100% { transform: scale(0) translate(400px, -200px); opacity: 0; }
        }
      `}</style>

      {/* Products */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col items-center text-center gap-3">
            <div className="text-5xl">{p.emoji}</div>
            <div>
              <p className="font-semibold text-gray-900 text-sm leading-tight">{p.name}</p>
              <p className="text-gray-500 text-sm">${p.price}</p>
            </div>
            <button type="button"
              ref={el => { btnRefs.current[p.id] = el; }}
              onClick={() => handleAdd(p.id)}
              disabled={added[p.id]}
              className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                added[p.id]
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-900 hover:bg-gray-700 text-white"
              }`}
            >
              {added[p.id] ? <><Check size={14} /> Added!</> : <><ShoppingCart size={14} /> Add</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
