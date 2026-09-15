"use client";
import React, { useState } from "react";
import { CreditCard, Check, Lock, Plus, Gift } from "lucide-react";

export default function Checkout07() {
  const total = 320;
  const [cards, setCards] = useState([
    { id: 1, label: "Visa ending 4281", balance: 200, amount: 200 },
    { id: 2, label: "Mastercard ending 8823", balance: 500, amount: 120 },
  ]);
  const [giftCard, setGiftCard] = useState("");
  const [giftApplied, setGiftApplied] = useState(false);
  const [giftCredit, setGiftCredit] = useState(0);
  const [placed, setPlaced] = useState(false);

  const allocated = cards.reduce((s, c) => s + c.amount, 0) + giftCredit;
  const remaining = Math.max(0, total - allocated);

  const updateAmount = (id: number, val: number) => {
    setCards(c => c.map(card => card.id === id ? { ...card, amount: Math.min(card.balance, Math.max(0, val)) } : card));
  };

  const applyGift = () => {
    if (giftCard.toUpperCase() === "GIFT50") { setGiftApplied(true); setGiftCredit(50); }
  };

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Payment Successful — ${total}!</h2>
          <p className="text-slate-500 text-sm mt-1">Split across {cards.length} cards{giftApplied ? " + gift card" : ""}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Split Payment</h2>
        <p className="text-slate-500 text-sm mb-6">Divide your ${total} order across multiple cards or gift cards.</p>

        <div className="space-y-4 mb-5">
          {cards.map(card => (
            <div key={card.id} className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center"><CreditCard size={16} className="text-slate-500" /></div>
                <p className="font-semibold text-slate-900 text-sm">{card.label}</p>
                <span className="ml-auto text-xs text-slate-400">Balance: ${card.balance}</span>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm text-slate-600 shrink-0">Charge amount</p>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    min={0}
                    max={card.balance}
                    value={card.amount}
                    onChange={e => updateAmount(card.id, parseFloat(e.target.value) || 0)}
                    className="w-full pl-7 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Gift Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center"><Gift size={16} className="text-rose-500" /></div>
              <p className="font-semibold text-slate-900 text-sm">Gift Card</p>
              {giftApplied && <span className="ml-auto text-xs text-emerald-600 font-semibold">-${giftCredit} applied</span>}
            </div>
            {!giftApplied ? (
              <div className="flex gap-2">
                <input value={giftCard} onChange={e=>setGiftCard(e.target.value)} placeholder="Enter gift card code (try GIFT50)" className="flex-1 border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                <button onClick={applyGift} className="px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-700 transition">Apply</button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-emerald-600 font-semibold"><Check size={14} /> Gift card applied — saves ${giftCredit}</div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-5 space-y-2 text-sm">
          {cards.map(c => <div key={c.id} className="flex justify-between text-slate-600"><span>{c.label}</span><span>${c.amount}</span></div>)}
          {giftApplied && <div className="flex justify-between text-emerald-600"><span>Gift Card</span><span>-${giftCredit}</span></div>}
          <div className={`flex justify-between font-bold text-base pt-2 border-t border-slate-100 ${remaining > 0 ? "text-rose-600" : "text-slate-900"}`}>
            <span>{remaining > 0 ? "Still to allocate" : "Total Covered"}</span>
            <span>${remaining > 0 ? remaining : total}</span>
          </div>
        </div>

        <button onClick={() => remaining === 0 && setPlaced(true)} disabled={remaining > 0} className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${remaining > 0 ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-700 text-white"}`}>
          <Lock size={16} /> {remaining > 0 ? `Allocate $${remaining} more to proceed` : `Place Order — $${total}`}
        </button>
      </div>
    </div>
  );
}
