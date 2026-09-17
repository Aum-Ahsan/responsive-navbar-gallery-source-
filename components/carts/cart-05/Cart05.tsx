"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, AlertCircle } from "lucide-react";

export default function Cart05() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "Midnight Black", hex: "#1a1a1a" },
    { name: "Ocean Blue", hex: "#1d4ed8" },
    { name: "Desert Sand", hex: "#d97706" },
    { name: "Forest Green", hex: "#15803d" },
  ];

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [attempted, setAttempted] = useState(false);
  const [added, setAdded] = useState(false);

  const isReady = selectedSize && selectedColor;

  const handleAdd = () => {
    if (!isReady) {
      setAttempted(true);
      return;
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Product Image */}
        <div className="w-full h-64 bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl flex items-center justify-center text-8xl mb-8">
          👕
        </div>

        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Premium Merino Tee</h2>
            <p className="text-slate-500 text-sm mt-1">Superfine 18.5-micron wool jersey</p>
          </div>
          <span className="text-2xl font-bold text-slate-900">$98</span>
        </div>

        {/* Color Picker */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-slate-700 text-sm">Color</p>
            {selectedColor && <p className="text-sm text-slate-400">{colors.find(c => c.hex === selectedColor)?.name}</p>}
          </div>
          <div className="flex gap-3">
            {colors.map(c => (
              <button type="button"
                key={c.hex}
                onClick={() => { setSelectedColor(c.hex); setAttempted(false); }}
                className={`w-10 h-10 rounded-full transition-all duration-200 ${
                  selectedColor === c.hex
                    ? "ring-2 ring-offset-2 ring-slate-900 scale-110"
                    : "ring-1 ring-slate-200"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
          {attempted && !selectedColor && (
            <p className="text-xs text-rose-500 mt-2 flex items-center gap-1"><AlertCircle size={12} /> Please select a color</p>
          )}
        </div>

        {/* Size Picker */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-slate-700 text-sm">Size</p>
            <button type="button" className="text-xs text-indigo-600 font-semibold">Size Guide →</button>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {sizes.map(s => (
              <button type="button"
                key={s}
                onClick={() => { setSelectedSize(s); setAttempted(false); }}
                className={`py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  selectedSize === s
                    ? "bg-slate-900 text-white border-slate-900"
                    : "border-slate-200 text-slate-700 hover:border-slate-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {attempted && !selectedSize && (
            <p className="text-xs text-rose-500 mt-2 flex items-center gap-1"><AlertCircle size={12} /> Please select a size</p>
          )}
        </div>

        {/* Add Button — locked until both selected */}
        <button type="button"
          onClick={handleAdd}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            added
              ? "bg-emerald-500 text-white"
              : isReady
              ? "bg-slate-900 hover:bg-slate-700 text-white"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          {added ? (
            <><Check size={20} /> Added — {selectedColor && colors.find(c=>c.hex===selectedColor)?.name} / {selectedSize}</>
          ) : isReady ? (
            <><ShoppingCart size={20} /> Add to Cart</>
          ) : (
            <><ShoppingCart size={20} /> Select Color & Size First</>
          )}
        </button>

        {!isReady && attempted && (
          <p className="text-center text-xs text-rose-500 mt-3 font-medium">
            ↑ Please make your selections above before adding.
          </p>
        )}
      </div>
    </div>
  );
}
