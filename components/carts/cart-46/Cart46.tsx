"use client";
import React, { useState } from "react";
import { HandHeart, Check, HeartPulse } from "lucide-react";

export default function Cart46() {
  const [pledge, setPledge] = useState<number | "custom">(25);
  const [customVal, setCustomVal] = useState("");
  const [added, setAdded] = useState(false);

  const amounts = [10, 25, 50, 100];
  const finalPledge = pledge === "custom" ? (Number(customVal) || 0) : pledge;

  const handleAdd = () => {
    if (finalPledge <= 0) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-emerald-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-sm bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm relative overflow-hidden">
        
        {/* Progress Mock */}
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-100">
          <div className="h-full bg-emerald-500 w-[65%]" />
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
            <HeartPulse size={28} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Community Garden</h2>
          <p className="text-slate-500 text-sm mt-2">65% funded • 3 days left</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {amounts.map(amt => (
            <button
              key={amt}
              onClick={() => setPledge(amt)}
              className={`py-3 px-4 rounded-xl border-2 transition font-bold text-lg 
                ${pledge === amt ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-100 text-slate-600 hover:border-emerald-200"}`}
            >
              ${amt}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPledge("custom")}
          className={`w-full py-3 px-4 rounded-xl border-2 transition font-bold text-lg mb-6
            ${pledge === "custom" ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-100 text-slate-600 hover:border-emerald-200"}`}
        >
          {pledge === "custom" ? (
            <div className="flex items-center justify-center gap-1">
              <span>$</span>
              <input 
                type="number" 
                value={customVal} 
                onChange={e => setCustomVal(e.target.value)}
                placeholder="0"
                className="w-16 bg-transparent outline-none text-center"
                autoFocus
              />
            </div>
          ) : (
            "Custom Amount"
          )}
        </button>

        <button 
          onClick={handleAdd}
          disabled={added || finalPledge <= 0}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition 
            ${finalPledge <= 0 ? "bg-slate-100 text-slate-400 cursor-not-allowed" : 
              added ? "bg-slate-900 text-white" : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"}`}
        >
          {added ? <Check size={18} /> : <HandHeart size={18} />}
          {added ? "Pledge Added!" : `Pledge $${finalPledge}`}
        </button>
      </div>
    </div>
  );
}
