"use client";
import React, { useState } from "react";
import { MapPin, Search, Check, Lock } from "lucide-react";

const suggestions = [
  { full: "10 Downing Street, London SW1A 2AA, UK", short: "10 Downing St", city: "London", zip: "SW1A 2AA" },
  { full: "1600 Pennsylvania Avenue, Washington DC 20500, USA", short: "1600 Pennsylvania Ave", city: "Washington DC", zip: "20500" },
  { full: "1 Apple Park Way, Cupertino CA 95014, USA", short: "1 Apple Park Way", city: "Cupertino", zip: "95014" },
  { full: "221B Baker Street, London NW1 6XE, UK", short: "221B Baker St", city: "London", zip: "NW1 6XE" },
];

export default function Checkout06() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<typeof suggestions[0] | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [placed, setPlaced] = useState(false);

  const filtered = suggestions.filter(s => s.full.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (s: typeof suggestions[0]) => {
    setSelected(s); setQuery(s.full); setShowSuggestions(false);
  };

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Order Confirmed!</h2>
          <p className="text-slate-500 text-sm mt-1">Delivering to {selected?.short}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Shipping Details</h2>
        <p className="text-slate-500 text-sm mb-7">Start typing — we will suggest your address automatically.</p>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="First Name" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
            <input placeholder="Last Name" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400 pointer-events-none" />
            <input
              value={query}
              onChange={e => { setQuery(e.target.value); setShowSuggestions(true); setSelected(null); }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Start typing your address..."
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            {selected && <MapPin size={16} className="absolute right-3.5 top-3.5 text-emerald-500" />}
            {showSuggestions && query.length > 1 && filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-slate-200 shadow-xl z-20 overflow-hidden">
                {filtered.map((s, i) => (
                  <button type="button" key={i} onMouseDown={() => handleSelect(s)} className="w-full flex items-start gap-3 px-4 py-3 hover:bg-slate-50 text-left transition border-b border-slate-50 last:border-0">
                    <MapPin size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                    <div><p className="text-sm font-medium text-slate-900">{s.short}</p><p className="text-xs text-slate-400">{s.full}</p></div>
                  </button>
                ))}
              </div>
            )}
          </div>
          {selected && (
            <div className="grid grid-cols-2 gap-3">
              <input value={selected.city} readOnly className="border border-emerald-200 bg-emerald-50 rounded-xl px-4 py-3 text-sm text-slate-700" />
              <input value={selected.zip} readOnly className="border border-emerald-200 bg-emerald-50 rounded-xl px-4 py-3 text-sm text-slate-700" />
            </div>
          )}
          <input placeholder="Apartment, suite (optional)" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
        </div>
        <button type="button" onClick={() => selected && setPlaced(true)} disabled={!selected} className={`w-full mt-5 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition ${selected ? "bg-slate-900 hover:bg-slate-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}>
          <Lock size={16} /> Continue to Payment
        </button>
      </div>
    </div>
  );
}
