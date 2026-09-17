"use client";
import React, { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";

export default function Cart41() {
  const [ingredients, setIngredients] = useState<Record<string, boolean>>({
    pasta: true, tomatoes: true, basil: true, garlic: true, cheese: false
  });
  const [added, setAdded] = useState(false);

  const items = [
    { id: "pasta", name: "Artisan Spaghetti, 500g", price: 4.50 },
    { id: "tomatoes", name: "San Marzano Tomatoes", price: 5.20 },
    { id: "basil", name: "Fresh Sweet Basil", price: 2.50 },
    { id: "garlic", name: "Organic Garlic Bulb", price: 1.00 },
    { id: "cheese", name: "Parmigiano Reggiano, 200g", price: 8.90 },
  ];

  const total = items.reduce((acc, item) => acc + (ingredients[item.id] ? item.price : 0), 0);
  const selectedCount = Object.values(ingredients).filter(Boolean).length;

  const handleAdd = () => {
    if (selectedCount === 0) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggle = (id: string) => setIngredients({ ...ingredients, [id]: !ingredients[id] });

  return (
    <div className="w-full bg-orange-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm border border-orange-100">

        <div className="flex gap-4 mb-6 pb-6 border-b border-orange-50">
          <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center text-4xl">🍝</div>
          <div className="py-1">
            <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">Recipe Bundle</p>
            <h2 className="text-xl font-bold text-slate-900">Classic Pomodoro</h2>
            <p className="text-slate-500 text-sm mt-1">Prep: 15m • Cook: 20m</p>
          </div>
        </div>

        <div className="mb-6 space-y-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900 text-sm">Ingredients</h3>
            <button type="button"
              onClick={() => {
                const allSelected = selectedCount === items.length;
                const next = {} as Record<string, boolean>;
                items.forEach(i => next[i.id] = !allSelected);
                setIngredients(next);
              }}
              className="text-xs font-bold text-orange-600 hover:underline"
            >
              {selectedCount === items.length ? "Deselect All" : "Select All"}
            </button>
          </div>

          {items.map(item => (
            <label
              key={item.id}
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${ingredients[item.id] ? "bg-orange-50/50 border-orange-200" : "bg-white border-slate-100 hover:border-slate-300"}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${ingredients[item.id] ? "bg-orange-500 border-orange-500" : "border-slate-300 bg-white"}`}>
                  {ingredients[item.id] && <Check size={12} className="text-white" />}
                </div>
                <span className={`text-sm font-semibold ${ingredients[item.id] ? "text-slate-900" : "text-slate-500"}`}>{item.name}</span>
              </div>
              <span className={`text-sm font-bold ${ingredients[item.id] ? "text-slate-900" : "text-slate-400"}`}>${item.price.toFixed(2)}</span>
            </label>
          ))}
        </div>

        <button type="button"
          onClick={handleAdd}
          disabled={added || selectedCount === 0}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${selectedCount === 0 ? "bg-slate-100 text-slate-400 cursor-not-allowed" : added ? "bg-emerald-500 text-white" : "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20"}`}
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added ? "Ingredients Added" : `Add ${selectedCount} Item${selectedCount !== 1 ? "s" : ""} - ${total.toFixed(2)}`}
        </button>

      </div>
    </div>
  );
}
