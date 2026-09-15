"use client";
import React, { useState } from "react";
import { CreditCard, Check, Lock, Info } from "lucide-react";

export default function Checkout08() {
  const total = 480;
  const [plan, setPlan] = useState<"full" | "bnpl">("full");
  const [bnplOption, setBnplOption] = useState("affirm_3");
  const [placed, setPlaced] = useState(false);

  const bnplOptions = [
    { id: "affirm_3", provider: "Affirm", installments: 3, monthly: Math.ceil(total / 3), apr: 0 },
    { id: "affirm_6", provider: "Affirm", installments: 6, monthly: Math.ceil(total / 6), apr: 0 },
    { id: "klarna_4", provider: "Klarna", installments: 4, monthly: Math.ceil(total / 4), apr: 0 },
    { id: "klarna_12", provider: "Klarna", installments: 12, monthly: Math.ceil(total / 12 * 1.1), apr: 12.99 },
  ];

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Order Confirmed!</h2>
          <p className="text-slate-500 text-sm mt-2">{plan === "full" ? `Paid $${total} in full.` : `${bnplOptions.find(o=>o.id===bnplOption)?.provider} installment plan set up.`}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Payment Options</h2>
        <p className="text-slate-500 text-sm mb-7">Pay in full or split into interest-free installments.</p>

        {/* Plan toggle */}
        <div className="grid grid-cols-2 bg-slate-100 rounded-2xl p-1 mb-6">
          <button onClick={() => setPlan("full")} className={`py-3 rounded-xl font-bold text-sm transition ${plan === "full" ? "bg-white shadow text-slate-900" : "text-slate-500"}`}>
            Pay in Full — ${total}
          </button>
          <button onClick={() => setPlan("bnpl")} className={`py-3 rounded-xl font-bold text-sm transition ${plan === "bnpl" ? "bg-white shadow text-slate-900" : "text-slate-500"}`}>
            Buy Now, Pay Later
          </button>
        </div>

        {plan === "full" ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3 mb-6">
            <input placeholder="Card Number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              <input placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
          </div>
        ) : (
          <div className="space-y-3 mb-6">
            <p className="text-sm font-semibold text-slate-700 mb-2">Choose your plan</p>
            {bnplOptions.map(opt => (
              <div
                key={opt.id}
                onClick={() => setBnplOption(opt.id)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition ${bnplOption === opt.id ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-slate-400"}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-slate-900 text-sm">{opt.installments}× ${opt.monthly}/month</p>
                      {opt.apr === 0 && <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">0% APR</span>}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">via {opt.provider} · {opt.installments === 12 ? "12 months" : "Interest-free"}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${bnplOption === opt.id ? "bg-indigo-500 border-indigo-500" : "border-slate-300"}`}>
                    {bnplOption === opt.id && <Check size={11} className="text-white" />}
                  </div>
                </div>
                {opt.apr > 0 && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-amber-600">
                    <Info size={11} />{opt.apr}% APR applies after promotional period
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <button onClick={() => setPlaced(true)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          <Lock size={16} /> {plan === "full" ? `Pay $${total}` : `Confirm ${bnplOptions.find(o=>o.id===bnplOption)?.provider} Plan`}
        </button>
      </div>
    </div>
  );
}
