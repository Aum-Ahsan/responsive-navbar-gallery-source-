"use client";
import React, { useState } from "react";
import { Ticket, Check, Lock, MapPin, Clock } from "lucide-react";

export default function Checkout16() {
  const event = { name: "Glastonbury Festival 2026", date: "June 26–30, 2026", venue: "Worthy Farm, Somerset, UK", emoji: "🎸" };
  const tickets = [
    { id: "general", label: "General Admission", price: 340, desc: "Full festival access · Camping included" },
    { id: "vip", label: "VIP Backstage", price: 890, desc: "Backstage area · Priority entry · Lounge" },
    { id: "day", label: "Day Ticket (Sat)", price: 145, desc: "Saturday only · No camping" },
  ];

  const [selectedTicket, setSelectedTicket] = useState("general");
  const [qty, setQty] = useState(1);
  const [attendees, setAttendees] = useState([{ name: "", email: "" }]);
  const [card, setCard] = useState("");
  const [placed, setPlaced] = useState(false);

  const ticket = tickets.find(t => t.id === selectedTicket)!;

  const updateQty = (n: number) => {
    setQty(n);
    setAttendees(Array.from({ length: n }, (_, i) => attendees[i] || { name: "", email: "" }));
  };

  const setAttendee = (i: number, k: "name"|"email", v: string) => {
    setAttendees(a => a.map((att, idx) => idx === i ? { ...att, [k]: v } : att));
  };

  const total = ticket.price * qty;

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Ticket size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Tickets Booked!</h2>
          <p className="text-slate-500 text-sm mt-1">{qty}× {ticket.label} · {event.name}</p>
          <p className="text-lg font-bold text-slate-900 mt-2">${total}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans text-white">
      <div className="max-w-xl mx-auto">
        {/* Event header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{event.emoji}</span>
            <div>
              <h2 className="text-xl font-bold">{event.name}</h2>
              <div className="flex items-center gap-2 text-sm text-indigo-200 mt-1"><Clock size={13} /> {event.date}</div>
              <div className="flex items-center gap-2 text-sm text-indigo-200 mt-0.5"><MapPin size={13} /> {event.venue}</div>
            </div>
          </div>
        </div>

        {/* Ticket type */}
        <div className="space-y-3 mb-6">
          <p className="text-sm font-bold text-slate-300">Select Ticket Type</p>
          {tickets.map(t => (
            <div key={t.id} onClick={() => setSelectedTicket(t.id)} className={`p-4 rounded-2xl border-2 cursor-pointer transition ${selectedTicket === t.id ? "border-indigo-500 bg-indigo-500/10" : "border-slate-700 hover:border-slate-500"}`}>
              <div className="flex justify-between items-start">
                <div><p className="font-bold text-white text-sm">{t.label}</p><p className="text-xs text-slate-400 mt-0.5">{t.desc}</p></div>
                <div className="text-right shrink-0 ml-3">
                  <p className="font-bold text-white">${t.price}</p>
                  <p className="text-xs text-slate-400">per ticket</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4 mb-6">
          <p className="text-sm font-bold text-slate-300">Quantity</p>
          <div className="flex items-center border border-slate-700 rounded-xl overflow-hidden">
            {[1,2,3,4].map(n => (
              <button key={n} onClick={() => updateQty(n)} className={`w-10 h-10 text-sm font-bold transition ${qty === n ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-700"}`}>{n}</button>
            ))}
          </div>
          <span className="text-slate-400 text-sm">= <strong className="text-white">${total}</strong></span>
        </div>

        {/* Attendee info */}
        <div className="space-y-3 mb-6">
          <p className="text-sm font-bold text-slate-300">Attendee Information</p>
          {attendees.map((att, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-4 border border-slate-700 space-y-2">
              <p className="text-xs font-semibold text-slate-400">Attendee {i + 1}</p>
              <input value={att.name} onChange={e=>setAttendee(i,"name",e.target.value)} placeholder="Full Name" className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input value={att.email} onChange={e=>setAttendee(i,"email",e.target.value)} placeholder="Email" className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
          ))}
        </div>

        {/* Payment */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 mb-5 space-y-2">
          <p className="text-sm font-bold text-slate-300">Payment</p>
          <input value={card} onChange={e=>setCard(e.target.value)} placeholder="Card Number" className="w-full bg-slate-700 border border-slate-600 rounded-xl px-3 py-2.5 text-sm text-white font-mono placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <div className="grid grid-cols-2 gap-2">
            <input placeholder="MM / YY" className="bg-slate-700 border border-slate-600 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <input placeholder="CVV" className="bg-slate-700 border border-slate-600 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
        </div>

        <button onClick={() => setPlaced(true)} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          <Lock size={16} /> Book {qty} Ticket{qty !== 1 ? "s" : ""} — ${total}
        </button>
      </div>
    </div>
  );
}
