"use client";
import React, { useState } from "react";
import { Package, Sparkles, Check, HelpCircle } from "lucide-react";

export default function Cart44() {
  const [size, setSize] = useState("pro");
  const [added, setAdded] = useState(false);

  const boxes = [
    { id: "starter", name: "Starter Box", items: "3-4 items", value: "$50+", price: 29 },
    { id: "pro", name: "Pro Box", items: "5-7 items", value: "$120+", price: 59 },
    { id: "elite", name: "Elite Box", items: "8-10 items", value: "$250+", price: 99 },
  ];

  const currentBox = boxes.find(b => b.id === size)!;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans flex justify-center text-white">
      <div className="w-full max-w-md bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

        <div className="text-center mb-8 relative z-10">
          <div className="inline-block relative">
            <div className="w-24 h-24 bg-purple-500/20 rounded-3xl flex items-center justify-center text-5xl mb-4 border border-purple-500/30">
              🎁
            </div>
            <Sparkles size={24} className="text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold">Tech Mystery Box</h2>
          <p className="text-slate-400 text-sm mt-2">Discover premium gadgets and accessories. Worth up to 3x what you pay.</p>
        </div>

        <div className="space-y-3 mb-8 relative z-10">
          {boxes.map(box => (
            <button
              key={box.id}
              onClick={() => setSize(box.id)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition text-left
                ${size === box.id ? "border-purple-500 bg-purple-500/10" : "border-slate-700 bg-slate-900/50 hover:border-slate-500"}`}
            >
              <div>
                <p className="font-bold text-white flex items-center gap-2">
                  {box.name} 
                  {size === box.id && <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500 text-white font-bold tracking-widest">SELECTED</span>}
                </p>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <HelpCircle size={12} /> {box.items} inside (Value {box.value})
                </p>
              </div>
              <p className="font-bold text-xl text-purple-300">${box.price}</p>
            </button>
          ))}
        </div>

        <button 
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition relative z-10 ${added ? "bg-emerald-500 text-white" : "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/25"}`}
        >
          {added ? <Check size={18} /> : <Package size={18} />}
          {added ? "Box Added!" : `Add ${currentBox.name} - $${currentBox.price}`}
        </button>

      </div>
    </div>
  );
}
