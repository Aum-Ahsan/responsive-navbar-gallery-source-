"use client";
import React, { useState } from "react";
import { Gift, Plus, ShoppingCart, Check, X } from "lucide-react";

export default function Cart40() {
  const [recipients, setRecipients] = useState([{ id: 1, name: "", email: "" }]);
  const [added, setAdded] = useState(false);

  const price = 49.99;
  const total = price * recipients.length;

  const addRecipient = () => setRecipients([...recipients, { id: Date.now(), name: "", email: "" }]);
  const removeRecipient = (id: number) => setRecipients(recipients.filter(r => r.id !== id));

  const updateRecipient = (id: number, key: "name" | "email", val: string) => {
    setRecipients(recipients.map(r => r.id === id ? { ...r, [key]: val } : r));
  };

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-rose-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm border border-rose-100">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center">
            <Gift size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Virtual Wine Tasting</h2>
            <p className="text-slate-500 text-sm mt-1">${price} per recipient</p>
          </div>
        </div>

        <div className="mb-6 space-y-3">
          {recipients.map((r, i) => (
            <div key={r.id} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 relative">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Recipient {i + 1}</h3>
              {recipients.length > 1 && (
                <button type="button" onClick={() => removeRecipient(r.id)} className="absolute top-3 right-3 text-slate-400 hover:text-rose-500 transition">
                  <X size={16} />
                </button>
              )}
              <div className="space-y-2">
                <input
                  placeholder="Recipient Name"
                  value={r.name}
                  onChange={(e) => updateRecipient(r.id, "name", e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
                <input
                  type="email"
                  placeholder="Recipient Email"
                  value={r.email}
                  onChange={(e) => updateRecipient(r.id, "email", e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
            </div>
          ))}

          <button type="button"
            onClick={addRecipient}
            className="w-full py-3 rounded-xl border-2 border-dashed border-rose-200 text-rose-600 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-rose-50 transition"
          >
            <Plus size={16} /> Add another recipient
          </button>
        </div>

        <button type="button"
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : "bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/20"}`}
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added ? "Gifts Added" : `Add ${recipients.length} Gift${recipients.length > 1 ? "s" : ""} - ${total.toFixed(2)}`}
        </button>
      </div>
    </div>
  );
}
