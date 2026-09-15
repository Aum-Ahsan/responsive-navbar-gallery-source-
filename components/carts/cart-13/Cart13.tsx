"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Gift, MessageSquare } from "lucide-react";

export default function Cart13() {
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftMsg, setGiftMsg] = useState("");
  const [added, setAdded] = useState(false);

  const basePrice = 95;
  const giftWrapFee = 8;
  const total = basePrice + (giftWrap ? giftWrapFee : 0);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-rose-50 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Product */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm mb-6">
          <div className="flex gap-5 items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-pink-200 rounded-2xl flex items-center justify-center text-5xl shrink-0">🕯️</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-1">Limited Edition</p>
              <h2 className="text-xl font-bold text-slate-900">Soy Wax Candle Set</h2>
              <p className="text-slate-500 text-sm mt-1">Hand-poured · 3 x 200ml</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">${basePrice}</p>
            </div>
          </div>
        </div>

        {/* Gift Wrap Toggle */}
        <div
          onClick={() => setGiftWrap(g => !g)}
          className={`cursor-pointer rounded-2xl border-2 p-5 mb-4 transition-all duration-200 ${
            giftWrap ? "border-rose-400 bg-rose-50" : "border-slate-200 bg-white hover:border-rose-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${giftWrap ? "bg-rose-500" : "bg-slate-100"}`}>
                <Gift size={18} className={giftWrap ? "text-white" : "text-slate-400"} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Add Gift Wrapping</p>
                <p className="text-xs text-slate-400">Premium tissue paper + ribbon + tag</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-600">+${giftWrapFee}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${giftWrap ? "bg-rose-500 border-rose-500" : "border-slate-300"}`}>
                {giftWrap && <Check size={12} className="text-white" />}
              </div>
            </div>
          </div>
        </div>

        {/* Gift Message */}
        {giftWrap && (
          <div className="mb-5">
            <label className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mb-2">
              <MessageSquare size={14} /> Gift Message (optional)
            </label>
            <textarea
              value={giftMsg}
              onChange={e => setGiftMsg(e.target.value)}
              placeholder="Write a heartfelt message..."
              rows={3}
              maxLength={150}
              className="w-full border border-slate-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            />
            <p className="text-xs text-slate-400 text-right mt-1">{giftMsg.length}/150</p>
          </div>
        )}

        {/* Total & Add */}
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="text-sm text-slate-500">Order Total</span>
          <div className="text-right">
            {giftWrap && <p className="text-xs text-slate-400 line-through">${basePrice}</p>}
            <p className="text-xl font-bold text-slate-900">${total}</p>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            added ? "bg-emerald-500 text-white" : "bg-rose-500 hover:bg-rose-600 text-white"
          }`}
        >
          {added ? (
            <><Check size={20} /> Added{giftWrap ? " (with Gift Wrap)" : ""}!</>
          ) : (
            <><ShoppingCart size={20} /> Add to Cart — ${total}</>
          )}
        </button>
      </div>
    </div>
  );
}
