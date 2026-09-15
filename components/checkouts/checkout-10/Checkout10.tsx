"use client";
import React, { useState } from "react";
import { Truck, Zap, Clock, Check, Lock } from "lucide-react";

export default function Checkout10() {
  const subtotal = 148;
  const [selected, setSelected] = useState("standard");
  const [placed, setPlaced] = useState(false);

  const methods = [
    { id: "standard", label: "Standard Shipping", sub: "5–7 business days", price: 0, icon: Truck, badge: "Free" },
    { id: "express", label: "Express Shipping", sub: "2–3 business days", price: 12, icon: Zap, badge: null },
    { id: "overnight", label: "Overnight Delivery", sub: "Next business day", price: 25, icon: Clock, badge: "Fastest" },
  ];

  const selectedMethod = methods.find(m => m.id === selected)!;
  const total = subtotal + selectedMethod.price;

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Order Confirmed!</h2>
          <p className="text-slate-500 text-sm mt-1">{selectedMethod.label} · Estimated: {selectedMethod.sub}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Choose Shipping Method</h2>
        <p className="text-slate-500 text-sm mb-7">Select how fast you'd like your order delivered.</p>

        <div className="space-y-3 mb-7">
          {methods.map(m => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                onClick={() => setSelected(m.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${selected === m.id ? "border-slate-900 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-400"}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selected === m.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"}`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-slate-900">{m.label}</p>
                    {m.badge && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${m.badge === "Free" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{m.badge}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">{m.sub}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">{m.price === 0 ? "FREE" : `+$${m.price}`}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selected === m.id ? "bg-slate-900 border-slate-900" : "border-slate-300"}`}>
                  {selected === m.id && <Check size={11} className="text-white" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-5 space-y-2 text-sm">
          <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>${subtotal}</span></div>
          <div className="flex justify-between text-slate-500"><span>{selectedMethod.label}</span><span>{selectedMethod.price === 0 ? "FREE" : `$${selectedMethod.price}`}</span></div>
          <div className="flex justify-between font-bold text-slate-900 text-base border-t border-slate-100 pt-3 mt-1"><span>Total</span><span>${total}</span></div>
        </div>

        <button onClick={() => setPlaced(true)} className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          <Lock size={16} /> Confirm & Pay — ${total}
        </button>
      </div>
    </div>
  );
}
