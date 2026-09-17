"use client";
import React, { useState } from "react";
import { ShoppingCart, Check, ChevronRight, ChevronLeft } from "lucide-react";

const steps = [
  {
    id: "material",
    label: "Material",
    options: [
      { id: "oak", label: "White Oak", price: 0, color: "#d4b483" },
      { id: "walnut", label: "Walnut", price: 120, color: "#6b3a2a" },
      { id: "maple", label: "Maple", price: 60, color: "#e8c99a" },
    ],
  },
  {
    id: "size",
    label: "Size",
    options: [
      { id: "small", label: "Small 120×60cm", price: 0, color: "#e2e8f0" },
      { id: "medium", label: "Medium 150×80cm", price: 200, color: "#e2e8f0" },
      { id: "large", label: "Large 200×90cm", price: 450, color: "#e2e8f0" },
    ],
  },
  {
    id: "finish",
    label: "Finish",
    options: [
      { id: "matte", label: "Matte Oil", price: 0, color: "#f8fafc" },
      { id: "semi", label: "Semi-Gloss", price: 80, color: "#f0f4f8" },
      { id: "natural", label: "Natural Wax", price: 40, color: "#fef9c3" },
    ],
  },
];

export default function Cart22() {
  const basePrice = 699;
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [added, setAdded] = useState(false);

  const currentStep = steps[step];
  const isComplete = steps.every(s => choices[s.id]);

  const totalPrice = basePrice + steps.reduce((sum, s) => {
    const opt = s.options.find(o => o.id === choices[s.id]);
    return sum + (opt?.price || 0);
  }, 0);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-stone-100 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Configure Your Piece</p>
          <h2 className="text-2xl font-bold text-stone-900">Handcrafted Dining Table</h2>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-1 mb-8">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div
                onClick={() => i <= step && setStep(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition ${i === step
                    ? "bg-stone-900 text-white"
                    : choices[s.id]
                      ? "bg-stone-300 text-stone-700 hover:bg-stone-400"
                      : "bg-stone-200 text-stone-400"
                  }`}
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold bg-white/20">{i + 1}</span>
                {s.label}
                {choices[s.id] && <Check size={12} />}
              </div>
              {i < steps.length - 1 && <div className="flex-1 h-px bg-stone-300" />}
            </React.Fragment>
          ))}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {currentStep.options.map(opt => (
            <div
              key={opt.id}
              onClick={() => setChoices(c => ({ ...c, [currentStep.id]: opt.id }))}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${choices[currentStep.id] === opt.id
                  ? "border-stone-900 bg-white shadow-md"
                  : "border-stone-200 bg-white/60 hover:border-stone-400"
                }`}
            >
              <div className="w-full h-12 rounded-xl mb-3" style={{ backgroundColor: opt.color, border: "1px solid rgba(0,0,0,0.1)" }} />
              <p className="font-semibold text-stone-900 text-sm">{opt.label}</p>
              <p className="text-stone-500 text-xs mt-0.5">{opt.price === 0 ? "Included" : `+${opt.price}`}</p>
            </div>
          ))}
        </div>

        {/* Nav buttons */}
        <div className="flex items-center justify-between mb-6">
          <button type="button"
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="flex items-center gap-1.5 text-sm font-semibold text-stone-500 hover:text-stone-900 disabled:opacity-30 transition"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <div className="text-right">
            <p className="text-xs text-stone-400">Starting from</p>
            <p className="text-xl font-bold text-stone-900">${totalPrice.toLocaleString()}</p>
          </div>
          {step < steps.length - 1 ? (
            <button type="button"
              onClick={() => setStep(s => s + 1)}
              disabled={!choices[currentStep.id]}
              className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl disabled:opacity-30 transition"
            >
              Next <ChevronRight size={16} />
            </button>
          ) : (
            <button type="button"
              onClick={handleAdd}
              disabled={!isComplete}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${added ? "bg-emerald-500 text-white" : isComplete ? "bg-stone-900 hover:bg-stone-700 text-white" : "bg-stone-300 text-stone-400 cursor-not-allowed"
                }`}
            >
              {added ? <><Check size={15} /> Added!</> : <><ShoppingCart size={15} /> Add to Cart</>}
            </button>
          )}
        </div>

        {/* Summary */}
        {Object.keys(choices).length > 0 && (
          <div className="bg-white rounded-2xl p-4 border border-stone-200">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Your Configuration</p>
            <div className="flex flex-wrap gap-2">
              {steps.map(s => choices[s.id] && (
                <span key={s.id} className="text-xs bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full font-medium capitalize">
                  {s.label}: {s.options.find(o => o.id === choices[s.id])?.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
