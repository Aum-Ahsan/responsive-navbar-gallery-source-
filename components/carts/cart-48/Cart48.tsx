"use client";
import React, { useState } from "react";
import { View, ShoppingCart, Check } from "lucide-react";

export default function Cart48() {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans flex items-center justify-center min-h-[400px]">
      
      {/* Phone Mockup Wrapper */}
      <div className="relative w-[320px] h-[600px] bg-black rounded-[40px] border-[8px] border-slate-800 overflow-hidden shadow-2xl flex flex-col">
        
        {/* Mock AR Camera View (CSS gradient) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 z-0">
          {/* Mock Chair AR object */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 border-dashed rounded-xl flex flex-col items-center justify-center backdrop-blur-sm bg-white/5">
            <span className="text-6xl drop-shadow-xl">🪑</span>
            <div className="mt-4 px-3 py-1 rounded-full bg-white/20 text-[10px] text-white backdrop-blur flex items-center gap-1 font-bold">
              <View size={12} /> Placing Mode
            </div>
          </div>
        </div>

        {/* UI Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 flex flex-col gap-4">
          <div className="text-white text-center mb-2">
            <h3 className="font-bold text-lg">Eames Lounge Chair</h3>
            <p className="text-sm text-slate-300 opacity-80 mt-1">$1,250.00</p>
          </div>

          <button 
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition backdrop-blur-md 
              ${added ? "bg-emerald-500 text-white" : "bg-white/20 hover:bg-white/30 text-white border border-white/30"}`}
          >
            {added ? <Check size={18} /> : <ShoppingCart size={18} />}
            {added ? "Added to Cart" : "Buy Now"}
          </button>
        </div>

      </div>

    </div>
  );
}
