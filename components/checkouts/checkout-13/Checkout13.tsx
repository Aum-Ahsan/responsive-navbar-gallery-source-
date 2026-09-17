"use client";
import React, { useState } from "react";
import { Download, Mail, Check, Lock, Globe } from "lucide-react";

export default function Checkout13() {
  const product = { name: "Master Course: UI Design Fundamentals", price: 149, items: ["67 video lessons", "12 project files", "Certificate of completion", "Lifetime access"] };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Download size={36} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Access Granted!</h2>
          <p className="text-slate-500 mb-5">Check {email} for your access link. Start learning immediately.</p>
          <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition">
            <Globe size={16} /> Open Course Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-6 mb-6 text-white">
          <div className="text-4xl mb-3">🎓</div>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <div className="mt-3 space-y-1.5">
            {product.items.map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-indigo-200">
                <Check size={13} className="text-indigo-300" /> {item}
              </div>
            ))}
          </div>
          <p className="text-3xl font-bold mt-4">${product.price}</p>
          <p className="text-indigo-200 text-xs">One-time payment · Instant access · No subscription</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
            <h3 className="font-bold text-slate-800 text-sm">Account Details</h3>
            <p className="text-xs text-slate-500">Your login credentials — course access will be emailed here.</p>
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <div className="relative">
              <Mail size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
              <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email Address" className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
            <h3 className="font-bold text-slate-800 text-sm">Payment</h3>
            <p className="text-xs text-slate-400">No shipping · No physical delivery · Instant digital access</p>
            <input required value={card} onChange={e=>setCard(e.target.value)} placeholder="Card Number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <div className="grid grid-cols-2 gap-3">
              <input required value={expiry} onChange={e=>setExpiry(e.target.value)} placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input required value={cvv} onChange={e=>setCvv(e.target.value)} placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
            <Lock size={16} /> Pay ${product.price} & Get Instant Access
          </button>
          <p className="text-center text-xs text-slate-400">30-day money-back guarantee · No questions asked</p>
        </form>
      </div>
    </div>
  );
}
