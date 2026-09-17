"use client";
import React, { useState } from "react";
import { GraduationCap, Users, Calendar, Check } from "lucide-react";

export default function Cart43() {
  const [cohort, setCohort] = useState("oct");
  const [added, setAdded] = useState(false);

  const cohorts = [
    { id: "sep", label: "Sept 15 - Dec 15", status: "Waitlist", seats: 0 },
    { id: "oct", label: "Oct 20 - Jan 20", status: "Filling Fast", seats: 4 },
    { id: "nov", label: "Nov 10 - Feb 10", status: "Available", seats: 25 },
  ];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-blue-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm border border-blue-100">
        
        <div className="flex gap-4 mb-6 pb-6 border-b border-slate-100">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
            <GraduationCap size={32} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Advanced React Patterns</h2>
            <p className="text-slate-500 text-sm mt-1">12-week intensive masterclass</p>
            <p className="text-xl font-bold text-slate-900 mt-2">$899</p>
          </div>
        </div>

        <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
          <Calendar size={16} className="text-blue-500" /> Select your Cohort
        </h3>

        <div className="space-y-3 mb-8">
          {cohorts.map(c => {
            const isFull = c.seats === 0;
            return (
              <button type="button"
                key={c.id}
                onClick={() => !isFull && setCohort(c.id)}
                disabled={isFull}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition text-left
                  ${isFull ? "border-slate-100 bg-slate-50 opacity-60 cursor-not-allowed" : 
                    cohort === c.id ? "border-blue-500 bg-blue-50" : "border-slate-100 hover:border-blue-200"}`}
              >
                <div>
                  <p className={`font-bold ${isFull ? "text-slate-500" : "text-slate-900"}`}>{c.label}</p>
                  <p className={`text-xs font-semibold mt-1 flex items-center gap-1
                    ${c.status === "Waitlist" ? "text-rose-500" : 
                      c.status === "Filling Fast" ? "text-amber-500" : "text-emerald-500"}`}
                  >
                    {!isFull && <Users size={12} />}
                    {c.status} {c.seats > 0 && `(${c.seats} spots left)`}
                  </p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
                  ${isFull ? "border-slate-300 bg-slate-200" : 
                    cohort === c.id ? "border-blue-500 bg-blue-500" : "border-slate-300 bg-white"}`}
                >
                  {cohort === c.id && <Check size={12} className="text-white" />}
                </div>
              </button>
            )
          })}
        </div>

        <button type="button" 
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${added ? "bg-emerald-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"}`}
        >
          {added ? <Check size={18} /> : <GraduationCap size={18} />}
          {added ? "Enrolled in Cohort!" : "Enroll Now - $899"}
        </button>

      </div>
    </div>
  );
}
