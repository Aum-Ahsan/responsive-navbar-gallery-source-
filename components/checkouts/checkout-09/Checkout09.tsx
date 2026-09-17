"use client";
import React, { useState } from "react";
import { Tag, Gift, Check, Lock, X } from "lucide-react";

export default function Checkout09() {
  const baseTotal = 245;
  const [promoCode, setPromoCode] = useState("");
  const [promoMsg, setPromoMsg] = useState<{ type: "success"|"error", text: string } | null>(null);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const [giftCode, setGiftCode] = useState("");
  const [giftMsg, setGiftMsg] = useState<{ type: "success"|"error", text: string } | null>(null);
  const [giftCredit, setGiftCredit] = useState(0);

  const [placed, setPlaced] = useState(false);

  const applyPromo = () => {
    const code = promoCode.toUpperCase().trim();
    if (code === "SUMMER20") { setPromoDiscount(Math.round(baseTotal * 0.2)); setPromoMsg({ type: "success", text: "SUMMER20 applied — 20% off!" }); }
    else if (code === "FIRST10") { setPromoDiscount(10); setPromoMsg({ type: "success", text: "FIRST10 applied — $10 off!" }); }
    else setPromoMsg({ type: "error", text: "Invalid code. Try SUMMER20 or FIRST10." });
  };

  const applyGift = () => {
    const code = giftCode.toUpperCase().trim();
    if (code === "GIFT75") { setGiftCredit(75); setGiftMsg({ type: "success", text: "Gift card applied — $75 credit" }); }
    else setGiftMsg({ type: "error", text: "Invalid gift card. Try GIFT75." });
  };

  const total = Math.max(0, baseTotal - promoDiscount - giftCredit);

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Order Confirmed! Paid ${total}</h2>
          <p className="text-slate-500 text-sm mt-1">Savings applied: ${promoDiscount + giftCredit}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Apply Discounts</h2>

        {/* Order breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-5 space-y-2 text-sm">
          <div className="flex justify-between text-slate-700"><span>Order subtotal</span><span className="font-semibold">${baseTotal}</span></div>
          {promoDiscount > 0 && <div className="flex justify-between text-emerald-600"><span>Promo discount</span><span>-${promoDiscount}</span></div>}
          {giftCredit > 0 && <div className="flex justify-between text-emerald-600"><span>Gift card credit</span><span>-${giftCredit}</span></div>}
          <div className="flex justify-between font-bold text-slate-900 text-base pt-2 border-t border-slate-100 mt-2"><span>Total due</span><span>${total}</span></div>
        </div>

        {/* Promo Code */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Tag size={16} className="text-indigo-500" />
            <h3 className="font-bold text-slate-900 text-sm">Promo Code</h3>
          </div>
          <div className="flex gap-2">
            <input
              value={promoCode}
              onChange={e => { setPromoCode(e.target.value); setPromoMsg(null); }}
              placeholder="Enter code (e.g. SUMMER20)"
              className="flex-1 border border-slate-200 rounded-xl px-3 py-2.5 text-sm uppercase font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {promoDiscount > 0 ? (
              <button type="button" onClick={() => { setPromoCode(""); setPromoDiscount(0); setPromoMsg(null); }} className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition"><X size={16} /></button>
            ) : (
              <button type="button" onClick={applyPromo} className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition">Apply</button>
            )}
          </div>
          {promoMsg && <p className={`text-xs mt-2 flex items-center gap-1 ${promoMsg.type === "success" ? "text-emerald-600" : "text-rose-500"}`}>{promoMsg.type === "success" ? <Check size={12} /> : <X size={12} />}{promoMsg.text}</p>}
        </div>

        {/* Gift Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Gift size={16} className="text-rose-500" />
            <h3 className="font-bold text-slate-900 text-sm">Gift Card</h3>
          </div>
          <div className="flex gap-2">
            <input
              value={giftCode}
              onChange={e => { setGiftCode(e.target.value); setGiftMsg(null); }}
              placeholder="Enter gift card code (e.g. GIFT75)"
              className="flex-1 border border-slate-200 rounded-xl px-3 py-2.5 text-sm uppercase font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            {giftCredit > 0 ? (
              <button type="button" onClick={() => { setGiftCode(""); setGiftCredit(0); setGiftMsg(null); }} className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition"><X size={16} /></button>
            ) : (
              <button type="button" onClick={applyGift} className="px-4 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition">Apply</button>
            )}
          </div>
          {giftMsg && <p className={`text-xs mt-2 flex items-center gap-1 ${giftMsg.type === "success" ? "text-emerald-600" : "text-rose-500"}`}>{giftMsg.type === "success" ? <Check size={12} /> : <X size={12} />}{giftMsg.text}</p>}
        </div>

        <button type="button" onClick={() => setPlaced(true)} className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          <Lock size={16} /> Place Order — ${total}
        </button>
        <p className="text-center text-xs text-slate-400 mt-3">Hint: try codes SUMMER20, FIRST10, or GIFT75</p>
      </div>
    </div>
  );
}
