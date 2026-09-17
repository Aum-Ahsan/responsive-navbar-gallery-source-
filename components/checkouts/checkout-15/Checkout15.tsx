"use client";
import React, { useState } from "react";
import { Heart, Check, Lock } from "lucide-react";

const charities = [
  { id: "water", name: "Clean Water Initiative", icon: "💧", desc: "Provides safe drinking water to communities in need.", impact: "Every $25 = clean water for 1 person for a year" },
  { id: "hunger", name: "World Food Bank", icon: "🌾", desc: "Fighting malnutrition and food insecurity worldwide.", impact: "Every $10 = 20 nutritious meals for a child" },
  { id: "edu", name: "Education For All", icon: "📚", desc: "Funding schools and teachers in underserved regions.", impact: "Every $50 = school supplies for one student" },
];

export default function Checkout15() {
  const [selected, setSelected] = useState("water");
  const [amount, setAmount] = useState(50);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dedication, setDedication] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [placed, setPlaced] = useState(false);

  const charity = charities.find(c => c.id === selected)!;
  const presets = [10, 25, 50, 100, 250];

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={28} className="fill-rose-500 text-rose-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Thank You{!anonymous && name ? `, ${name}` : ""}! 💖</h2>
          <p className="text-slate-500 text-sm mt-2">Your ${amount} donation to {charity.name} has been received.</p>
          {dedication && <p className="text-xs text-slate-400 mt-2 italic">"{dedication}"</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-rose-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-7">
          <Heart size={28} className="fill-rose-400 text-rose-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-slate-900">Make a Donation</h2>
          <p className="text-slate-500 text-sm mt-1">100% of your donation goes directly to the charity.</p>
        </div>

        {/* Charity selector */}
        <div className="space-y-3 mb-6">
          {charities.map(c => (
            <div
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition ${selected === c.id ? "border-rose-400 bg-white shadow-sm" : "border-rose-200 bg-white/60 hover:border-rose-300"}`}
            >
              <span className="text-2xl mt-0.5">{c.icon}</span>
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-sm">{c.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{c.desc}</p>
                {selected === c.id && <p className="text-xs text-rose-500 font-medium mt-1">{c.impact}</p>}
              </div>
              <div className={`w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center ${selected === c.id ? "bg-rose-500 border-rose-500" : "border-slate-300"}`}>
                {selected === c.id && <Check size={10} className="text-white" />}
              </div>
            </div>
          ))}
        </div>

        {/* Amount */}
        <div className="mb-5">
          <p className="text-sm font-bold text-slate-700 mb-2">Donation Amount</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {presets.map(p => (
              <button type="button" key={p} onClick={() => setAmount(p)} className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition ${amount === p ? "border-rose-500 bg-rose-500 text-white" : "border-rose-200 text-slate-700 hover:border-rose-400"}`}>${p}</button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
            <input type="number" min={1} value={amount} onChange={e=>setAmount(Number(e.target.value))} className="w-full pl-8 pr-4 py-3 border border-rose-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white" />
          </div>
        </div>

        {/* Donor info */}
        <div className="bg-white rounded-2xl border border-rose-200 p-5 space-y-3 mb-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800">Donor Information</h3>
            <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer">
              <input type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)} className="rounded" />
              Donate anonymously
            </label>
          </div>
          {!anonymous && (
            <>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400" />
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email (for receipt)" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400" />
            </>
          )}
          <textarea value={dedication} onChange={e=>setDedication(e.target.value)} placeholder="Dedication message (optional)" rows={2} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-rose-400" />
        </div>

        <button type="button" onClick={() => setPlaced(true)} className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          <Heart size={18} className="fill-white" /> Donate ${amount} to {charity.name}
        </button>
        <p className="text-center text-xs text-slate-400 mt-3">Tax-deductible · Secure payment · No admin fees</p>
      </div>
    </div>
  );
}
