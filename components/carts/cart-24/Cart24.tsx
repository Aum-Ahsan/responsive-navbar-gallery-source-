"use client";
import React, { useState } from "react";
import { Check, Zap, User, ShieldCheck } from "lucide-react";

export default function Cart24() {
  const recentOrders = [
    { id: 1, name: "Whey Protein Chocolate", price: 54.99, emoji: "💪", lastOrdered: "3 weeks ago" },
    { id: 2, name: "Omega-3 Fish Oil", price: 28.50, emoji: "🐟", lastOrdered: "5 weeks ago" },
    { id: 3, name: "Vitamin D3 5000IU", price: 16.00, emoji: "🌞", lastOrdered: "2 months ago" },
  ];

  const [added, setAdded] = useState<Record<number, boolean>>({});
  const [allAdded, setAllAdded] = useState(false);

  const handleReorder = (id: number) => {
    setAdded(a => ({ ...a, [id]: true }));
    setTimeout(() => setAdded(a => ({ ...a, [id]: false })), 2500);
  };

  const handleReorderAll = () => {
    setAllAdded(true);
    setTimeout(() => setAllAdded(false), 2500);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Account header */}
        <div className="flex items-center gap-4 mb-8 bg-white rounded-2xl border border-slate-200 p-5">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <User size={22} className="text-indigo-600" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-slate-900">Welcome back, Jordan</p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
              <ShieldCheck size={12} />
              Saved address · Card ending in 4281
            </div>
          </div>
          <span className="text-xs bg-indigo-100 text-indigo-700 font-bold px-3 py-1.5 rounded-full">VIP Member</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Buy Again</h2>
            <p className="text-slate-500 text-sm mt-0.5">One click — uses your saved address & card.</p>
          </div>
          <button type="button"
            onClick={handleReorderAll}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
              allAdded ? "bg-emerald-500 text-white" : "bg-slate-900 hover:bg-slate-700 text-white"
            }`}
          >
            {allAdded ? <><Check size={14} /> All Added!</> : "Reorder All"}
          </button>
        </div>

        <div className="space-y-3">
          {recentOrders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-3xl shrink-0">{order.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 text-sm">{order.name}</p>
                <p className="text-slate-400 text-xs mt-0.5">Last ordered {order.lastOrdered}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-bold text-slate-900">${order.price}</span>
                <button type="button"
                  onClick={() => handleReorder(order.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                    added[order.id]
                      ? "bg-emerald-500 text-white"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  {added[order.id] ? (
                    <><Check size={14} /> Added</>
                  ) : (
                    <><Zap size={14} /> Reorder</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 bg-indigo-50 border border-indigo-200 rounded-2xl p-4 text-sm text-indigo-700 flex items-start gap-2">
          <ShieldCheck size={16} className="shrink-0 mt-0.5" />
          <p>Reorder uses your saved shipping address and payment card. You'll receive an order confirmation email.</p>
        </div>
      </div>
    </div>
  );
}
