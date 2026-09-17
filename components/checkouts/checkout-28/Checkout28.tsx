"use client";
import React, { useState } from "react";
import { MapPin, Package, Check, ArrowRight } from "lucide-react";

export default function Checkout28() {
  const [placed, setPlaced] = useState(false);

  // Mock items and addresses
  const items = [
    { id: 1, name: "Gourmet Coffee Blend", qty: 1 },
    { id: 2, name: "Artisan Chocolate Box", qty: 2 },
  ];

  const addresses = [
    { id: "home", label: "My Home", address: "123 Main St, NY" },
    { id: "office", label: "Office", address: "456 Corp Blvd, NY" },
    { id: "mom", label: "Mom's House", address: "789 Suburb Ln, NJ" },
  ];

  const [selections, setSelections] = useState<Record<number, string>>({
    1: "home",
    2: "mom"
  });

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Orders Split & Placed!</h2>
          <p className="text-slate-500 text-sm mt-1">Your items will be shipped to their respective addresses.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        
        <div className="mb-6 pb-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">Multi-Address Shipping</h2>
          <p className="text-slate-500 text-sm mt-1">Assign different shipping addresses for each item in your cart.</p>
        </div>

        <div className="space-y-6 mb-8">
          {items.map(item => (
            <div key={item.id} className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                  <Package size={20} className="text-slate-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{item.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Quantity: {item.qty}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <MapPin size={16} className="text-slate-400 shrink-0 hidden sm:block" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 sm:hidden">Ship to:</span>
                <select 
                  value={selections[item.id]} 
                  onChange={(e) => setSelections({ ...selections, [item.id]: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {addresses.map(a => (
                    <option key={a.id} value={a.id}>{a.label} ({a.address})</option>
                  ))}
                  <option value="new">+ Add New Address...</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Cost Summary based on splits */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex justify-between items-center">
          <div>
            <p className="text-sm font-bold text-blue-900">Shipping Summary</p>
            <p className="text-xs text-blue-700 mt-0.5">2 shipments to 2 unique addresses</p>
          </div>
          <p className="font-bold text-blue-900">$10.00</p>
        </div>

        <button type="button" 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white transition shadow-lg shadow-slate-900/20"
        >
          Continue to Payment <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
}
