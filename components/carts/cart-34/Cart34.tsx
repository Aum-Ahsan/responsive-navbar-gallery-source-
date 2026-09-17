"use client";
import React, { useState } from "react";
import { Clock, Truck, Check } from "lucide-react";

export default function Cart34() {
  const [date, setDate] = useState("today");
  const [time, setTime] = useState("");
  const [added, setAdded] = useState(false);

  const dates = [
    { id: "today", label: "Today", desc: "Within 2 hrs", price: 5.99 },
    { id: "tomorrow", label: "Tomorrow", desc: "Scheduled", price: 2.99 },
    { id: "later", label: "Later", desc: "Next 3-5 days", price: 0 },
  ];

  const times = ["10:00 AM - 12:00 PM", "12:00 PM - 2:00 PM", "2:00 PM - 4:00 PM", "4:00 PM - 6:00 PM"];

  const handleAdd = () => {
    if (date !== "later" && !time) return; // simple validation
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const selectedDate = dates.find(d => d.id === date)!;

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">

        <div className="flex items-start gap-4 mb-8 pb-6 border-b border-slate-100">
          <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-4xl shrink-0">
            🥗
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Family Feast Prep Kit</h2>
            <p className="text-slate-500 text-sm mt-1">Feeds 4-6 people. Fresh ingredients.</p>
            <p className="text-lg font-bold text-slate-900 mt-2">$89.00</p>
          </div>
        </div>

        <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
          <Truck size={18} className="text-orange-500" /> Delivery Preferences
        </h3>

        <div className="grid grid-cols-3 gap-2 mb-6">
          {dates.map(d => (
            <button type="button"
              key={d.id}
              onClick={() => { setDate(d.id); setTime(""); }}
              className={`p-3 rounded-xl border-2 transition flex flex-col items-center justify-center text-center ${date === d.id ? "border-orange-500 bg-orange-50" : "border-slate-100 hover:border-slate-200"}`}
            >
              <span className={`text-sm font-bold ${date === d.id ? "text-orange-900" : "text-slate-700"}`}>{d.label}</span>
              <span className="text-[10px] text-slate-500 mt-1">{d.desc}</span>
              <span className={`text-xs font-semibold mt-1 ${date === d.id ? "text-orange-600" : "text-slate-400"}`}>
                {d.price === 0 ? "Free" : `+${d.price}`}
              </span>
            </button>
          ))}
        </div>

        {date !== "later" && (
          <div className="mb-8 bg-slate-50 rounded-2xl p-4 border border-slate-100 animate-in fade-in slide-in-from-top-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block flex items-center gap-1">
              <Clock size={12} /> Select Time Slot
            </label>
            <div className="grid grid-cols-2 gap-2">
              {times.map(t => (
                <button type="button"
                  key={t}
                  onClick={() => setTime(t)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition ${time === t ? "bg-orange-500 border-orange-500 text-white" : "bg-white border-slate-200 text-slate-700 hover:border-orange-300"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        <button type="button"
          onClick={handleAdd}
          disabled={added || (date !== "later" && !time)}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : date !== "later" && !time ? "bg-slate-100 text-slate-400 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-800 text-white"}`}
        >
          {added ? <Check size={18} /> : null}
          {added ? "Added with Delivery" : `Add to Cart - ${(89 + selectedDate.price).toFixed(2)}`}
        </button>
      </div>
    </div>
  );
}
