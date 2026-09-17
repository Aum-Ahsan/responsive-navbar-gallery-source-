"use client";
import React, { useState } from "react";
import { Globe, Plane, Info, Check, Lock } from "lucide-react";

export default function Checkout25() {
  const [country, setCountry] = useState("FR");
  const [placed, setPlaced] = useState(false);

  const subtotalUSD = 250;
  
  // Fake exchange rates & duties based on country selection
  const rates: Record<string, { currency: string, symbol: string, rate: number, dutyPct: number, shipping: number }> = {
    US: { currency: "USD", symbol: "$", rate: 1, dutyPct: 0, shipping: 15 },
    FR: { currency: "EUR", symbol: "€", rate: 0.92, dutyPct: 20, shipping: 45 },
    UK: { currency: "GBP", symbol: "£", rate: 0.79, dutyPct: 20, shipping: 35 },
    JP: { currency: "JPY", symbol: "¥", rate: 150, dutyPct: 10, shipping: 55 },
  };

  const selected = rates[country] || rates.US;

  const subtotalLocal = subtotalUSD * selected.rate;
  const shippingLocal = selected.shipping * selected.rate;
  const dutyLocal = subtotalLocal * (selected.dutyPct / 100);
  const totalLocal = subtotalLocal + shippingLocal + dutyLocal;

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Order Confirmed!</h2>
          <p className="text-slate-500 text-sm mt-1">Paid {selected.symbol}{totalLocal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}. Customs clearance pre-paid.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* Main form */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={20} className="text-blue-500" />
            <h2 className="text-xl font-bold text-slate-900">International Checkout</h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm">Shipping Destination</h3>
            
            <select 
              value={country} 
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="US">United States</option>
              <option value="FR">France</option>
              <option value="UK">United Kingdom</option>
              <option value="JP">Japan</option>
            </select>

            <input placeholder="Full Name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input placeholder="Address Line 1" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="City" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Postal Code" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            {country !== "US" && (
              <input placeholder="National ID / Tax ID (Required for customs)" className="w-full border border-blue-200 bg-blue-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-400" />
            )}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm">Payment</h3>
            <input placeholder="Card Number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="MM / YY" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input placeholder="CVV" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="md:w-72 shrink-0">
          <div className="bg-slate-900 rounded-2xl p-6 text-white sticky top-6">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Plane size={18} className="text-blue-400" /> Order Summary</h3>
            
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>{selected.symbol}{subtotalLocal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Int'l Shipping</span>
                <span>{selected.symbol}{shippingLocal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
              </div>
              {selected.dutyPct > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span className="flex items-center gap-1 border-b border-slate-600 border-dashed pb-0.5 cursor-help" title="Taxes & duties pre-paid so you don't pay on delivery">
                    Duties & Tax <Info size={12} />
                  </span>
                  <span>{selected.symbol}{dutyLocal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
                </div>
              )}
            </div>

            <div className="border-t border-slate-700 pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Total ({selected.currency})</span>
                <span>{selected.symbol}{totalLocal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-right">Includes all customs fees. No surprises on delivery.</p>
            </div>

            <button type="button" onClick={() => setPlaced(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-500/20">
              <Lock size={15} /> Pay {selected.symbol}{totalLocal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
