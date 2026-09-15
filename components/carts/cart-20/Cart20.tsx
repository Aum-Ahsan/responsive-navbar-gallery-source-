"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, Type, AlertCircle } from "lucide-react";

export default function Cart20() {
  const [monogram, setMonogram] = useState("");
  const [font, setFont] = useState("serif");
  const [position, setPosition] = useState("center");
  const [added, setAdded] = useState(false);

  const maxChars = 3;
  const engravingFee = 15;
  const basePrice = 195;

  const fonts = [
    { id: "serif", label: "Classic Serif", preview: "ABC" },
    { id: "sans", label: "Modern Sans", preview: "ABC" },
    { id: "script", label: "Script", preview: "ABC" },
  ];
  const positions = ["left", "center", "right"];

  const handleAdd = () => {
    if (!monogram) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-zinc-900 p-6 sm:p-10 font-sans text-white">
      <div className="max-w-xl mx-auto">
        {/* Product */}
        <div className="flex gap-5 mb-8">
          <div className="w-24 h-24 bg-zinc-800 rounded-2xl flex items-center justify-center text-5xl border border-zinc-700 shrink-0">👝</div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Personalised</p>
            <h2 className="text-xl font-bold">Vachetta Leather Clutch</h2>
            <p className="text-zinc-400 text-sm mt-1">Full-grain leather · Handcrafted in Florence</p>
            <p className="text-2xl font-bold mt-2">${basePrice + (monogram ? engravingFee : 0)}</p>
          </div>
        </div>

        {/* Monogram Preview */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-3xl p-8 mb-6 text-center">
          <div
            className={`text-5xl font-bold tracking-widest text-amber-400 min-h-[64px] flex items-center justify-center ${position === "left" ? "justify-start" : position === "right" ? "justify-end" : "justify-center"}`}
            style={{ fontFamily: font === "serif" ? "Georgia, serif" : font === "script" ? "Brush Script MT, cursive" : "system-ui, sans-serif" }}
          >
            {monogram || "···"}
          </div>
          <p className="text-zinc-500 text-xs mt-3">Live preview — engraved in gold foil</p>
        </div>

        {/* Monogram Input */}
        <div className="mb-5">
          <label className="flex items-center gap-1.5 text-sm font-semibold text-zinc-300 mb-2">
            <Type size={14} /> Your Initials (up to {maxChars} characters)
          </label>
          <div className="relative">
            <input
              value={monogram}
              onChange={e => setMonogram(e.target.value.toUpperCase().slice(0, maxChars))}
              placeholder="e.g. JRD"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-lg font-bold tracking-widest rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-zinc-600 uppercase"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 text-xs">{monogram.length}/{maxChars}</span>
          </div>
        </div>

        {/* Font */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-zinc-300 mb-2">Font Style</p>
          <div className="grid grid-cols-3 gap-2">
            {fonts.map(f => (
              <button
                key={f.id}
                onClick={() => setFont(f.id)}
                className={`p-3 rounded-xl border-2 text-center transition ${font === f.id ? "border-amber-400 bg-amber-400/10" : "border-zinc-700 hover:border-zinc-500"}`}
              >
                <p className="text-base text-amber-400" style={{ fontFamily: f.id === "serif" ? "Georgia, serif" : f.id === "script" ? "Brush Script MT, cursive" : "system-ui" }}>{f.preview}</p>
                <p className="text-xs text-zinc-400 mt-1">{f.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Position */}
        <div className="mb-7">
          <p className="text-sm font-semibold text-zinc-300 mb-2">Engraving Position</p>
          <div className="flex gap-2">
            {positions.map(pos => (
              <button
                key={pos}
                onClick={() => setPosition(pos)}
                className={`flex-1 py-2 rounded-xl text-sm font-medium capitalize border-2 transition ${position === pos ? "border-amber-400 bg-amber-400/10 text-amber-300" : "border-zinc-700 text-zinc-400 hover:border-zinc-500"}`}
              >
                {pos}
              </button>
            ))}
          </div>
        </div>

        {!monogram && (
          <p className="flex items-center gap-1.5 text-xs text-amber-400 mb-4"><AlertCircle size={13} /> Enter your initials to enable engraving (+${engravingFee})</p>
        )}

        <button
          onClick={handleAdd}
          disabled={!monogram}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            !monogram
              ? "bg-zinc-700 text-zinc-500 cursor-not-allowed"
              : added
              ? "bg-emerald-500 text-white"
              : "bg-amber-500 hover:bg-amber-400 text-zinc-900"
          }`}
        >
          {added ? <><Check size={20} /> Added with engraving "{monogram}"!</> : <><ShoppingCart size={20} /> Add Engraved Clutch — ${basePrice + (monogram ? engravingFee : 0)}</>}
        </button>
      </div>
    </div>
  );
}
