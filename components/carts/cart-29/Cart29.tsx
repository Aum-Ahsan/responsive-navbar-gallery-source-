"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Plus, X, MessageSquare } from "lucide-react";

const addOns = [
  { id: "extra-cheese", label: "Extra Cheese", price: 1.5, emoji: "🧀" },
  { id: "jalapenos", label: "Jalapeños", price: 0.75, emoji: "🌶️" },
  { id: "avocado", label: "Avocado", price: 2.0, emoji: "🥑" },
  { id: "bacon", label: "Crispy Bacon", price: 2.5, emoji: "🥓" },
];
const sauces = ["None", "Ketchup", "Mayo", "Sriracha", "BBQ", "Ranch"];
const sizes = ["Regular", "Large", "XL"];

export default function Cart29() {
  const basePrice = 12.99;
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());
  const [sauce, setSauce] = useState("None");
  const [size, setSize] = useState("Regular");
  const [note, setNote] = useState("");
  const [added, setAdded] = useState(false);

  const sizeExtra: Record<string, number> = { Regular: 0, Large: 2, XL: 4 };
  const addOnTotal = addOns.filter(a => selectedAddOns.has(a.id)).reduce((s, a) => s + a.price, 0);
  const total = basePrice + addOnTotal + sizeExtra[size];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(s => { const n = new Set(s); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  };

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-orange-50 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Product header */}
        <div className="flex gap-5 items-center mb-6">
          <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center text-5xl shrink-0">🍔</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Classic Smash Burger</h2>
            <p className="text-slate-500 text-sm">Double patty · American cheese · Special sauce</p>
            <p className="text-xl font-bold text-orange-600 mt-1">${basePrice.toFixed(2)}</p>
          </div>
        </div>

        {/* Size */}
        <div className="mb-5">
          <p className="text-sm font-bold text-slate-700 mb-2">Size</p>
          <div className="flex gap-2">
            {sizes.map(s => (
              <button type="button"
                key={s}
                onClick={() => setSize(s)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition ${size === s ? "bg-orange-500 border-orange-500 text-white" : "bg-white border-slate-200 text-slate-700 hover:border-orange-300"}`}
              >
                {s} {sizeExtra[s] > 0 ? `+${sizeExtra[s]}` : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-5">
          <p className="text-sm font-bold text-slate-700 mb-2">Extras</p>
          <div className="grid grid-cols-2 gap-2">
            {addOns.map(a => (
              <div
                key={a.id}
                onClick={() => toggleAddOn(a.id)}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition ${selectedAddOns.has(a.id) ? "border-orange-500 bg-orange-50" : "border-slate-200 bg-white hover:border-orange-200"}`}
              >
                <span className="text-xl">{a.emoji}</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-900">{a.label}</p>
                  <p className="text-xs text-slate-400">+${a.price.toFixed(2)}</p>
                </div>
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition ${selectedAddOns.has(a.id) ? "bg-orange-500 border-orange-500" : "border-slate-300"}`}>
                  {selectedAddOns.has(a.id) && <Check size={11} className="text-white" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sauce */}
        <div className="mb-5">
          <p className="text-sm font-bold text-slate-700 mb-2">Sauce</p>
          <div className="flex flex-wrap gap-2">
            {sauces.map(s => (
              <button type="button"
                key={s}
                onClick={() => setSauce(s)}
                className={`px-3 py-2 rounded-xl text-sm font-medium border transition ${sauce === s ? "bg-orange-500 border-orange-500 text-white" : "bg-white border-slate-200 text-slate-600 hover:border-orange-300"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mb-6">
          <label className="flex items-center gap-1.5 text-sm font-bold text-slate-700 mb-2">
            <MessageSquare size={13} /> Special Instructions (optional)
          </label>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="e.g. No onions, extra pickles..."
            rows={2}
            className="w-full border border-slate-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Total & Add */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs text-slate-400">Order Total</p>
            <p className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</p>
          </div>
          <button type="button"
            onClick={handleAdd}
            className={`flex-1 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${added ? "bg-emerald-500 text-white" : "bg-orange-500 hover:bg-orange-600 text-white"}`}
          >
            {added ? <><Check size={20} /> Added!</> : <><ShoppingCart size={20} /> Add to Order</>}
          </button>
        </div>
      </div>
    </div>
  );
}
