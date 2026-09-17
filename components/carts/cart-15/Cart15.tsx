"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, X, Minus, Plus } from "lucide-react";

export default function Cart15() {
  const product = { name: "Handmade Olive Soap Bar", price: 22, emoji: "🧼" };
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [added, setAdded] = useState(false);

  const confirm = () => {
    setShowModal(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-green-50 p-6 sm:p-10 font-sans relative">
      <div className="max-w-sm mx-auto">
        {/* Product card */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-6 text-center mb-6">
          <div className="text-7xl mb-4">{product.emoji}</div>
          <h2 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h2>
          <p className="text-slate-400 text-sm mb-4">Natural ingredients · Palm-free · Vegan</p>
          <p className="text-2xl font-bold text-slate-900 mb-5">${product.price}</p>

          <div className="flex items-center justify-center gap-3 mb-5">
            <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))} className="w-9 h-9 border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50"><Minus size={14} /></button>
            <span className="w-8 text-center font-bold text-slate-900">{qty}</span>
            <button type="button" onClick={() => setQty(q => q + 1)} className="w-9 h-9 border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50"><Plus size={14} /></button>
          </div>

          <button type="button"
            onClick={() => setShowModal(true)}
            className={`w-full py-3.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
              added ? "bg-emerald-500 text-white" : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {added ? <><Check size={18} /> Added!</> : <><ShoppingCart size={18} /> Add to Cart</>}
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 p-6">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-7">
            <button type="button" onClick={() => setShowModal(false)} className="float-right -mt-2 -mr-2 p-2 hover:bg-slate-100 rounded-full transition">
              <X size={18} className="text-slate-400" />
            </button>
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">{product.emoji}</div>
              <h3 className="text-lg font-bold text-slate-900">Confirm Your Selection</h3>
              <p className="text-slate-500 text-sm mt-1">You're adding {qty}× {product.name}</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 mb-6 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600"><span>Item</span><span>{product.name}</span></div>
              <div className="flex justify-between text-slate-600"><span>Quantity</span><span>{qty}</span></div>
              <div className="flex justify-between font-bold text-slate-900 border-t border-slate-200 pt-2 mt-2">
                <span>Total</span><span>${product.price * qty}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-50 transition">
                Cancel
              </button>
              <button type="button" onClick={confirm} className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition flex items-center justify-center gap-1.5">
                <Check size={16} /> Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
