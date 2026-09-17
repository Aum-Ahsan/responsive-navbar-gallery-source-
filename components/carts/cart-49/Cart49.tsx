"use client";
import React, { useState } from "react";
import { Repeat, ShoppingCart, Check } from "lucide-react";

export default function Cart49() {
  const [subType, setSubType] = useState<"one-time" | "subscribe">("subscribe");
  const [freq, setFreq] = useState("1");
  const [added, setAdded] = useState(false);

  const price = 45;
  const subDiscount = 0.15; // 15% off

  const finalPrice = subType === "subscribe" ? price * (1 - subDiscount) : price;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-sm bg-white rounded-3xl border border-slate-200 shadow-sm p-6 overflow-hidden">

        <div className="mb-6 border-b border-slate-100 pb-6 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-3xl mb-4">
            💊
          </div>
          <h2 className="text-xl font-bold text-slate-900">Daily Multi-Vitamin</h2>
          <p className="text-slate-500 text-sm mt-1">30-day supply (60 capsules)</p>
        </div>

        <div className="space-y-3 mb-6">
          <div
            onClick={() => setSubType("one-time")}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between
              ${subType === "one-time" ? "border-slate-900 bg-slate-50" : "border-slate-100 hover:border-slate-200"}`}
          >
            <div>
              <p className={`font-semibold text-sm ${subType === "one-time" ? "text-slate-900" : "text-slate-600"}`}>One-time purchase</p>
            </div>
            <p className={`font-bold ${subType === "one-time" ? "text-slate-900" : "text-slate-500"}`}>${price.toFixed(2)}</p>
          </div>

          <div
            onClick={() => setSubType("subscribe")}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition relative overflow-hidden
              ${subType === "subscribe" ? "border-emerald-500 bg-emerald-50" : "border-slate-100 hover:border-slate-200"}`}
          >
            {subType === "subscribe" && (
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                SAVE 15%
              </div>
            )}

            <div className="flex justify-between items-start">
              <div>
                <p className={`font-semibold text-sm flex items-center gap-1.5 ${subType === "subscribe" ? "text-emerald-900" : "text-slate-600"}`}>
                  <Repeat size={14} className={subType === "subscribe" ? "text-emerald-600" : "text-slate-400"} />
                  Subscribe & Save
                </p>
              </div>
              <p className={`font-bold ${subType === "subscribe" ? "text-emerald-700" : "text-slate-500"}`}>
                ${(price * (1 - subDiscount)).toFixed(2)}
              </p>
            </div>

            {subType === "subscribe" && (
              <div className="mt-4 pt-3 border-t border-emerald-200/50">
                <label className="text-xs font-semibold text-emerald-800 block mb-2">Delivery Frequency</label>
                <select
                  value={freq}
                  onChange={e => setFreq(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-emerald-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="1">Every 1 month</option>
                  <option value="2">Every 2 months</option>
                  <option value="3">Every 3 months</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <button type="button"
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition 
            ${added ? "bg-slate-900 text-white" :
              subType === "subscribe" ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20" : "bg-slate-900 hover:bg-slate-800 text-white"}`}
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added ? "Added to Cart!" : `Add to Cart - ${finalPrice.toFixed(2)}`}
        </button>

      </div>
    </div>
  );
}
