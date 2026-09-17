"use client";
import React, { useState } from "react";
import { Plus, Check } from "lucide-react";

export default function Cart36() {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex items-center justify-center min-h-[300px]">
      
      {/* Product Card */}
      <div className="group relative w-64 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 transition hover:shadow-md">
        <div className="w-full h-48 bg-slate-100 rounded-2xl mb-4 flex items-center justify-center text-4xl">
          🪴
        </div>
        
        <div className="pr-12">
          <h3 className="font-bold text-slate-900 leading-tight">Monstera Deliciosa</h3>
          <p className="text-slate-500 text-sm mt-1">$45.00</p>
        </div>

        {/* Minimal Add Button */}
        <button type="button" 
          onClick={handleAdd}
          disabled={added}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${added ? "bg-emerald-500 text-white" : "bg-slate-900 text-white hover:scale-110 shadow-md shadow-slate-900/20"}`}
        >
          {added ? <Check size={18} /> : <Plus size={18} />}
        </button>
      </div>

    </div>
  );
}
