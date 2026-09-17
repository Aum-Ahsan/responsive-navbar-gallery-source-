"use client";
import React, { useState } from "react";
import { Check, Lock, Pencil, X, Minus, Plus } from "lucide-react";

export default function Checkout11() {
  const [items, setItems] = useState([
    { id: 1, name: "Merino Crew Neck — M / Navy", price: 120, qty: 1, emoji: "🧥" },
    { id: 2, name: "Slim Chinos — 32/32 / Khaki", price: 98, qty: 2, emoji: "👖" },
    { id: 3, name: "Canvas Sneakers — UK 9", price: 85, qty: 1, emoji: "👟" },
  ]);
  const [editing, setEditing] = useState<number | null>(null);
  const [placed, setPlaced] = useState(false);

  const changeQty = (id: number, delta: number) => {
    setItems(prev => prev.flatMap(i => {
      if (i.id !== id) return [i];
      if (i.qty + delta <= 0) return [];
      return [{ ...i, qty: i.qty + delta }];
    }));
  };

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 9;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Order Confirmed — ${total}!</h2>
          <p className="text-slate-500 text-sm mt-1">{items.length} item{items.length !== 1 ? "s" : ""} · Order #ORD-{Math.floor(Math.random()*90000+10000)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Review Your Order</h2>
        <p className="text-slate-500 text-sm mb-7">Check everything looks right. You can edit quantities or remove items.</p>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-5">
          {items.map((item, idx) => (
            <div key={item.id} className={`flex items-start gap-4 p-5 ${idx < items.length - 1 ? "border-b border-slate-100" : ""}`}>
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-3xl shrink-0">{item.emoji}</div>
              <div className="flex-1 min-w-0">
                {editing === item.id ? (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">Qty:</span>
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                        <button type="button" onClick={() => changeQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center hover:bg-slate-50 transition"><Minus size={11} /></button>
                        <span className="w-7 text-center text-sm font-bold">{item.qty}</span>
                        <button type="button" onClick={() => changeQty(item.id, 1)} className="w-7 h-7 flex items-center justify-center hover:bg-slate-50 transition"><Plus size={11} /></button>
                      </div>
                      <button type="button" onClick={() => setEditing(null)} className="text-xs text-indigo-600 font-semibold hover:underline">Done</button>
                      <button type="button" onClick={() => { changeQty(item.id, -999); setEditing(null); }} className="text-xs text-rose-500 font-semibold hover:underline">Remove</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-slate-900 leading-tight">{item.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Qty: {item.qty}</p>
                  </>
                )}
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="font-bold text-slate-900">${item.price * item.qty}</span>
                {editing !== item.id && (
                  <button type="button" onClick={() => setEditing(item.id)} className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 transition">
                    <Pencil size={10} /> Edit
                  </button>
                )}
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="p-8 text-center text-slate-400">
              <p className="text-sm">All items removed. Add items to continue.</p>
            </div>
          )}
        </div>

        {/* Totals */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-5 space-y-2 text-sm">
          <div className="flex justify-between text-slate-500"><span>Subtotal ({items.reduce((s,i) => s+i.qty,0)} items)</span><span>${subtotal}</span></div>
          <div className="flex justify-between text-slate-500"><span>Shipping</span><span>${shipping}</span></div>
          <div className="flex justify-between text-slate-500"><span>Tax</span><span>${tax}</span></div>
          <div className="flex justify-between font-bold text-slate-900 text-base border-t border-slate-100 pt-3 mt-1"><span>Total</span><span>${total}</span></div>
        </div>

        {/* Address + payment summary */}
        <div className="bg-slate-100 rounded-2xl p-4 mb-5 text-sm text-slate-600 space-y-1">
          <p><span className="font-semibold">Ship to:</span> 221B Baker Street, London NW1 6XE</p>
          <p><span className="font-semibold">Payment:</span> Visa ending 4281</p>
        </div>

        <button type="button" onClick={() => items.length > 0 && setPlaced(true)} disabled={items.length === 0} className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${items.length === 0 ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-700 text-white"}`}>
          <Lock size={16} /> Place Order — ${total}
        </button>
      </div>
    </div>
  );
}
