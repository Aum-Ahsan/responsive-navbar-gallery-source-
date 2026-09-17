"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Package, Minus, Plus } from "lucide-react";

export default function Cart21() {
  const skus = [
    { id: "A4-BLK", name: "Black A4 Ream", price: 8.99, unit: "ream (500 sheets)", emoji: "🖨️" },
    { id: "A4-WHT", name: "White A4 Ream", price: 7.99, unit: "ream (500 sheets)", emoji: "📄" },
    { id: "PEN-BLU", name: "Blue Ballpoint Pens", price: 12.50, unit: "box of 50", emoji: "🖊️" },
    { id: "ENV-DL", name: "DL Envelopes", price: 14.00, unit: "box of 100", emoji: "✉️" },
    { id: "FLD-BLK", name: "Black Folders A4", price: 22.00, unit: "pack of 10", emoji: "🗂️" },
  ];

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [added, setAdded] = useState(false);

  const change = (id: string, delta: number) =>
    setQuantities(q => ({ ...q, [id]: Math.max(0, (q[id] || 0) + delta) }));

  const totalItems = Object.values(quantities).reduce((s, v) => s + v, 0);
  const totalCost = skus.reduce((s, sku) => s + (quantities[sku.id] || 0) * sku.price, 0);

  const handleAdd = () => {
    if (totalItems === 0) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">B2B Ordering Portal</p>
            <h2 className="text-2xl font-bold text-slate-900">Office Supplies — Bulk Order</h2>
            <p className="text-slate-500 text-sm mt-1">Enter quantities per SKU, then add all to cart.</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400">Estimated Total</p>
            <p className="text-2xl font-bold text-slate-900">${totalCost.toFixed(2)}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-5">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-3 bg-slate-50 border-b border-slate-100 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span>Product</span>
            <span className="text-right">Unit Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Subtotal</span>
          </div>
          {skus.map((sku, idx) => (
            <div
              key={sku.id}
              className={`grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center px-5 py-4 ${idx < skus.length - 1 ? "border-b border-slate-50" : ""}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl shrink-0">{sku.emoji}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 text-sm truncate">{sku.name}</p>
                  <p className="text-xs text-slate-400">{sku.unit} · SKU: {sku.id}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-slate-600 whitespace-nowrap">${sku.price.toFixed(2)}</span>
              <div className="flex items-center gap-1 justify-center">
                <button type="button" onClick={() => change(sku.id, -1)} className="w-7 h-7 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-50 text-slate-600 transition">
                  <Minus size={11} />
                </button>
                <input
                  type="number"
                  min={0}
                  value={quantities[sku.id] || 0}
                  onChange={e => setQuantities(q => ({ ...q, [sku.id]: Math.max(0, parseInt(e.target.value) || 0) }))}
                  className="w-12 text-center border border-slate-200 rounded-lg py-1 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
                <button type="button" onClick={() => change(sku.id, 1)} className="w-7 h-7 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-50 text-slate-600 transition">
                  <Plus size={11} />
                </button>
              </div>
              <span className="text-sm font-bold text-slate-900 text-right whitespace-nowrap">
                ${((quantities[sku.id] || 0) * sku.price).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Package size={16} />
            <span>{totalItems} unit{totalItems !== 1 ? "s" : ""} selected</span>
          </div>
          <button type="button"
            onClick={handleAdd}
            disabled={totalItems === 0}
            className={`flex-1 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
              totalItems === 0
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : added
                ? "bg-emerald-500 text-white"
                : "bg-slate-900 hover:bg-slate-700 text-white"
            }`}
          >
            {added ? <><Check size={20} /> {totalItems} SKUs Added!</> : <><ShoppingCart size={20} /> Add to Cart — ${totalCost.toFixed(2)}</>}
          </button>
        </div>
      </div>
    </div>
  );
}
