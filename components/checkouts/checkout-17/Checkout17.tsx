"use client";
import React, { useState } from "react";
import { Calendar, Clock, Users, Check, Lock } from "lucide-react";

export default function Checkout17() {
  const [date, setDate] = useState("2026-10-15");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [placed, setPlaced] = useState(false);

  const depositPerGuest = 25;
  const total = guests * depositPerGuest;

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Reservation Confirmed!</h2>
          <p className="text-slate-500 text-sm mt-1">{guests} guests on {date} at {time}</p>
          <p className="text-sm font-semibold text-slate-700 mt-2">${total} deposit paid.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Book Your Table</h2>
        <p className="text-slate-500 text-sm mb-7">The Ivy Room · Requires a ${depositPerGuest} deposit per person.</p>

        {/* Booking details */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 mb-6">
          <h3 className="font-bold text-slate-800 text-sm">Reservation Details</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div className="relative">
              <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <select value={time} onChange={e=>setTime(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white">
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>
            <div className="relative col-span-2 sm:col-span-1">
              <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <select value={guests} onChange={e=>setGuests(Number(e.target.value))} className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white">
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Guest{n!==1?"s":""}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Guest info */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 mb-6">
          <h3 className="font-bold text-slate-800 text-sm">Guest Information</h3>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email Address" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
        </div>

        {/* Payment */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 mb-6">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-bold text-slate-800 text-sm">Deposit Payment</h3>
            <span className="font-bold text-slate-900">${total}</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">Deposit is applied to your final bill. Non-refundable if canceled within 24h.</p>
          <input value={card} onChange={e=>setCard(e.target.value)} placeholder="Card Number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
        </div>

        <button type="button" onClick={() => setPlaced(true)} className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          <Lock size={16} /> Confirm Reservation — Pay ${total}
        </button>
      </div>
    </div>
  );
}
