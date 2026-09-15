"use client";
import React, { useState, useRef } from "react";
import { ShoppingCart, Check } from "lucide-react";

export default function Cart14() {
  const products = [
    { id: 1, name: "Graphic Tee – Waves", price: 35, emoji: "👕", color: "#dbeafe" },
    { id: 2, name: "Utility Shorts", price: 58, emoji: "🩳", color: "#fef9c3" },
    { id: 3, name: "Bucket Hat", price: 29, emoji: "🧢", color: "#f0fdf4" },
  ];

  const [added, setAdded] = useState<Record<number, boolean>>({});
  const [startX, setStartX] = useState<Record<number, number>>({});
  const [offset, setOffset] = useState<Record<number, number>>({});
  const [dragging, setDragging] = useState<Record<number, boolean>>({});

  const threshold = 100;

  const onStart = (id: number, x: number) => {
    setStartX(s => ({ ...s, [id]: x }));
    setDragging(d => ({ ...d, [id]: true }));
  };

  const onMove = (id: number, x: number) => {
    if (!dragging[id]) return;
    const diff = Math.min(threshold + 20, Math.max(0, x - (startX[id] || 0)));
    setOffset(o => ({ ...o, [id]: diff }));
  };

  const onEnd = (id: number) => {
    if (!dragging[id]) return;
    setDragging(d => ({ ...d, [id]: false }));
    if ((offset[id] || 0) >= threshold) {
      setAdded(a => ({ ...a, [id]: true }));
      setOffset(o => ({ ...o, [id]: 0 }));
      setTimeout(() => setAdded(a => ({ ...a, [id]: false })), 2000);
    } else {
      setOffset(o => ({ ...o, [id]: 0 }));
    }
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans select-none">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Summer Drops</h2>
      <p className="text-slate-500 text-sm mb-8">← Swipe a product card right to add to cart →</p>
      <div className="space-y-4 max-w-sm mx-auto">
        {products.map(p => {
          const off = offset[p.id] || 0;
          const progress = Math.min(1, off / threshold);
          const isAdded = added[p.id];
          return (
            <div key={p.id} className="relative overflow-hidden rounded-2xl">
              {/* Background reveal layer */}
              <div
                className="absolute inset-0 rounded-2xl flex items-center pl-6"
                style={{ backgroundColor: isAdded ? "#10b981" : "#3b82f6", opacity: Math.max(0.4, progress) }}
              >
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
                  {isAdded ? "Added!" : off >= threshold ? "Release!" : "Keep swiping..."}
                </div>
              </div>

              {/* Card */}
              <div
                className="relative flex items-center gap-5 p-5 rounded-2xl border border-slate-200 cursor-grab active:cursor-grabbing transition-colors"
                style={{
                  backgroundColor: isAdded ? "#d1fae5" : p.color,
                  transform: `translateX(${off}px)`,
                  transition: dragging[p.id] ? "none" : "transform 0.3s ease",
                  touchAction: "pan-y",
                }}
                onMouseDown={e => onStart(p.id, e.clientX)}
                onMouseMove={e => onMove(p.id, e.clientX)}
                onMouseUp={() => onEnd(p.id)}
                onMouseLeave={() => onEnd(p.id)}
                onTouchStart={e => onStart(p.id, e.touches[0].clientX)}
                onTouchMove={e => onMove(p.id, e.touches[0].clientX)}
                onTouchEnd={() => onEnd(p.id)}
              >
                <div className="text-4xl">{p.emoji}</div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{p.name}</p>
                  <p className="text-slate-500 text-sm">${p.price}</p>
                </div>
                {isAdded && <Check size={20} className="text-emerald-600 shrink-0" />}
                {!isAdded && (
                  <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                    <ShoppingCart size={12} />
                    <span>Swipe →</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
