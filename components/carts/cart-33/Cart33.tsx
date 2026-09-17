"use client";
import React, { useState } from "react";
import { Maximize, ShoppingCart, Check } from "lucide-react";

export default function Cart33() {
  const [color, setColor] = useState("titanium");
  const [band, setBand] = useState("sport");
  const [added, setAdded] = useState(false);

  const colors = [
    { id: "titanium", hex: "#e5e7eb", name: "Titanium" },
    { id: "midnight", hex: "#1e293b", name: "Midnight" },
    { id: "gold", hex: "#fcd34d", name: "Gold" },
  ];

  const bands = [
    { id: "sport", name: "Sport Loop", price: 0 },
    { id: "leather", name: "Leather Link", price: 49 },
    { id: "milanese", name: "Milanese Loop", price: 99 },
  ];

  const basePrice = 399;
  const currentBand = bands.find(b => b.id === band)!;
  const total = basePrice + currentBand.price;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">

        {/* Mock 3D Viewer */}
        <div className="md:w-1/2 bg-slate-100 p-8 relative flex items-center justify-center min-h-[300px]">
          <button type="button" className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow text-slate-500 hover:text-slate-900 transition">
            <Maximize size={18} />
          </button>

          <div className="text-center relative">
            <div className="w-48 h-48 mx-auto relative z-10 transition-transform duration-700 hover:scale-110">
              {/* Mock Watch UI */}
              <div className="absolute inset-0 rounded-[40px] border-[12px] shadow-2xl transition-colors duration-500 flex items-center justify-center bg-black overflow-hidden"
                style={{ borderColor: colors.find(c => c.id === color)?.hex }}>
                <div className="text-white text-center">
                  <div className="text-4xl font-light">10:09</div>
                  <div className="text-xs text-rose-500 mt-1">82 BPM</div>
                </div>
              </div>
              {/* Mock Band top */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-16 rounded-t-xl -z-10 transition-colors duration-500"
                style={{ backgroundColor: band === "sport" ? "#334155" : band === "leather" ? "#78350f" : "#94a3b8" }} />
              {/* Mock Band bottom */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-16 rounded-b-xl -z-10 transition-colors duration-500"
                style={{ backgroundColor: band === "sport" ? "#334155" : band === "leather" ? "#78350f" : "#94a3b8" }} />
            </div>
            <p className="text-xs font-bold text-slate-400 mt-16 uppercase tracking-widest">Interactive 3D Viewer</p>
          </div>
        </div>

        {/* Configurator */}
        <div className="md:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Chrono Series 8</h2>
            <p className="text-slate-500 mb-8">Design your perfect timepiece.</p>

            {/* Case Color */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm font-bold text-slate-900">Case Finish</span>
                <span className="text-sm text-slate-500">{colors.find(c => c.id === color)?.name}</span>
              </div>
              <div className="flex gap-3">
                {colors.map(c => (
                  <button type="button"
                    key={c.id}
                    onClick={() => setColor(c.id)}
                    className={`w-12 h-12 rounded-full border-4 transition-all ${color === c.id ? "border-blue-500 scale-110" : "border-transparent hover:scale-105"}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Band Type */}
            <div className="mb-8">
              <span className="text-sm font-bold text-slate-900 block mb-3">Band Style</span>
              <div className="grid grid-cols-1 gap-2">
                {bands.map(b => (
                  <button type="button"
                    key={b.id}
                    onClick={() => setBand(b.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 transition text-left ${band === b.id ? "border-blue-500 bg-blue-50/50" : "border-slate-100 hover:border-slate-300"}`}
                  >
                    <span className="font-semibold text-slate-900 text-sm">{b.name}</span>
                    <span className="text-sm text-slate-500">{b.price === 0 ? "Included" : `+${b.price}`}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <div className="flex justify-between items-end mb-6">
              <span className="text-slate-500 font-medium">Total</span>
              <span className="text-3xl font-bold text-slate-900">${total}</span>
            </div>

            <button type="button"
              onClick={handleAdd}
              disabled={added}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20"}`}
            >
              {added ? <Check size={18} /> : <ShoppingCart size={18} />}
              {added ? "Added to Cart" : "Save & Add to Cart"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
