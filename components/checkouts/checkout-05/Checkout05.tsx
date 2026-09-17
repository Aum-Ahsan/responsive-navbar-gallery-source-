"use client";
import React, { useState } from "react";
import { Lock, Check, Pencil, Tag } from "lucide-react";

export default function Checkout05() {
  const [form, setForm] = useState({ name: "", email: "", address: "", card: "" });
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [placed, setPlaced] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const items = [
    { name: "Arc Desk Lamp", price: 129, qty: 1, emoji: "💡" },
    { name: "Brass Bookend Set", price: 54, qty: 2, emoji: "📚" },
    { name: "Linen Throw Pillow", price: 38, qty: 1, emoji: "🛋️" },
  ];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = 12;
  const total = subtotal - discount + shipping;

  const applyPromo = () => {
    if (promo.toUpperCase() === "SAVE10") setPromoApplied(true);
  };

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Order Placed — ${total}!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-4 sm:p-8 font-sans">
      <div className="max-w-3xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left: form */}
        <div className="flex-1 space-y-5">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Lock size={18} className="text-slate-400" /> Checkout</h2>
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
            <h3 className="font-semibold text-slate-800 text-sm">Contact & Address</h3>
            <input value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Full Name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input value={form.email} onChange={e=>set("email",e.target.value)} placeholder="Email" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input value={form.address} onChange={e=>set("address",e.target.value)} placeholder="Street Address, City, ZIP" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
            <h3 className="font-semibold text-slate-800 text-sm">Payment</h3>
            <input value={form.card} onChange={e=>set("card",e.target.value)} placeholder="Card Number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              <input placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
          </div>
          <button type="button" onClick={() => setPlaced(true)} className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
            <Lock size={16} /> Place Order — ${total}
          </button>
        </div>

        {/* Right: Sidebar Order Summary */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sticky top-4">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Pencil size={15} className="text-slate-400" /> Order Summary</h3>
            <div className="space-y-3 mb-4">
              {items.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-xl shrink-0">{item.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">{item.name}</p>
                    <p className="text-xs text-slate-400">Qty: {item.qty}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-900 shrink-0">${item.price * item.qty}</span>
                </div>
              ))}
            </div>

            {/* Promo */}
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input value={promo} onChange={e=>setPromo(e.target.value)} placeholder="Promo code" className="w-full pl-8 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <button type="button" onClick={applyPromo} className={`px-3 py-2 rounded-xl text-sm font-bold transition ${promoApplied ? "bg-emerald-500 text-white" : "bg-slate-900 text-white hover:bg-slate-700"}`}>
                {promoApplied ? <Check size={14} /> : "Apply"}
              </button>
            </div>
            {promoApplied && <p className="text-xs text-emerald-600 font-medium mb-4 flex items-center gap-1"><Check size={11} /> SAVE10 applied — 10% off</p>}

            <div className="border-t border-slate-100 pt-4 space-y-1.5 text-sm">
              <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>${subtotal}</span></div>
              {promoApplied && <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-${discount}</span></div>}
              <div className="flex justify-between text-slate-500"><span>Shipping</span><span>${shipping}</span></div>
              <div className="flex justify-between font-bold text-slate-900 text-base pt-2 border-t border-slate-100 mt-2">
                <span>Total</span><span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
