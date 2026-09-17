"use client";
import React, { useState } from "react";
import { ShieldCheck, ShoppingCart, Check } from "lucide-react";

export default function Cart39() {
  const [warranty, setWarranty] = useState("none");
  const [added, setAdded] = useState(false);

  const basePrice = 899;
  const warranties = [
    { id: "none", label: "No Protection", price: 0, desc: "Standard 1-year manufacturer warranty." },
    { id: "2yr", label: "2-Year Protection Plan", price: 69, desc: "Covers drops, spills, and hardware failures." },
    { id: "3yr", label: "3-Year Protection Plan", price: 99, desc: "Extended coverage including battery replacement." },
  ];

  const currentWty = warranties.find(w => w.id === warranty)!;
  const total = basePrice + currentWty.price;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">UltraBook Pro 14"</h2>
            <p className="text-slate-500 text-sm mt-1">16GB RAM, 512GB SSD</p>
          </div>
          <p className="text-xl font-bold text-slate-900">${basePrice}</p>
        </div>

        {/* Warranty Section */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 mb-6">
          <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-500" /> Add device protection?
          </h3>
          <div className="space-y-2">
            {warranties.map(w => (
              <label
                key={w.id}
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${warranty === w.id ? "bg-white border-blue-500 shadow-sm" : "border-slate-200 hover:border-slate-300"}`}
              >
                <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${warranty === w.id ? "border-blue-500 bg-blue-500" : "border-slate-300 bg-white"}`}>
                  {warranty === w.id && <Check size={12} className="text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className={`text-sm font-bold ${warranty === w.id ? "text-slate-900" : "text-slate-700"}`}>{w.label}</p>
                    {w.price > 0 && <p className="text-sm font-bold text-slate-900">+${w.price}</p>}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{w.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <button type="button"
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20"}`}
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added ? "Added to Cart" : `Add to Cart - ${total}`}
        </button>
      </div>
    </div>
  );
}
