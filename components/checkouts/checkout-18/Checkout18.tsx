"use client";
import React, { useState } from "react";
import { PackageOpen, Building, Check, FileText } from "lucide-react";

export default function Checkout18() {
  const [qty, setQty] = useState(50);
  const [company, setCompany] = useState("");
  const [placed, setPlaced] = useState(false);

  // Tiered pricing
  const getPrice = (q: number) => {
    if (q >= 500) return 18.50;
    if (q >= 100) return 21.00;
    return 24.50; // min 50
  };

  const price = getPrice(qty);
  const total = qty * price;
  const isMinMet = qty >= 50;

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Order Submitted!</h2>
          <p className="text-slate-500 text-sm mt-1">Invoice and bank transfer instructions sent to email.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center"><PackageOpen size={20} className="text-indigo-600" /></div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Wholesale Order</h2>
            <p className="text-slate-500 text-sm">Minimum order quantity: 50 units</p>
          </div>
        </div>

        {/* Product & Qty */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-3xl shrink-0">🧴</div>
            <div>
              <h3 className="font-bold text-slate-900">Hydrating Serum (Retail 30ml)</h3>
              <p className="text-xs text-slate-500 mt-1">SKU: HS-30ML-WH</p>
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-800">Order Quantity</label>
            <div className="flex items-center gap-3">
              <input type="number" min={50} step={10} value={qty} onChange={e=>setQty(Number(e.target.value))} className="w-24 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <span className="text-sm text-slate-500">units</span>
            </div>
            {!isMinMet && <p className="text-xs text-rose-500 font-medium">Minimum 50 units required.</p>}
          </div>
          
          <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
            <div className={`p-2 rounded-lg ${qty >= 50 && qty < 100 ? "bg-indigo-100 text-indigo-700 font-bold" : "text-slate-500"}`}>
              <p>50+ units</p><p>$24.50/ea</p>
            </div>
            <div className={`p-2 rounded-lg ${qty >= 100 && qty < 500 ? "bg-indigo-100 text-indigo-700 font-bold" : "text-slate-500"}`}>
              <p>100+ units</p><p>$21.00/ea</p>
            </div>
            <div className={`p-2 rounded-lg ${qty >= 500 ? "bg-indigo-100 text-indigo-700 font-bold" : "text-slate-500"}`}>
              <p>500+ units</p><p>$18.50/ea</p>
            </div>
          </div>
        </div>

        {/* Buyer Info */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-5 space-y-3">
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2"><Building size={14} /> Business Details</h3>
          <input value={company} onChange={e=>setCompany(e.target.value)} placeholder="Company Name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input placeholder="Tax ID / EIN" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        {/* Total & Submit */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-sm text-slate-500">Estimated Total</p>
              <p className="text-xs text-slate-400 mt-0.5">{qty} × ${price.toFixed(2)}</p>
            </div>
            <p className="text-2xl font-bold text-slate-900">${total.toLocaleString()}</p>
          </div>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex gap-2 text-amber-700 text-xs">
            <FileText size={14} className="shrink-0 mt-0.5" />
            <p>Payment is not required now. An invoice with bank transfer (ACH/Wire) details will be emailed upon approval.</p>
          </div>
        </div>

        <button onClick={() => isMinMet && setPlaced(true)} disabled={!isMinMet} className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${isMinMet ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}>
          Submit Wholesale Order
        </button>
      </div>
    </div>
  );
}
