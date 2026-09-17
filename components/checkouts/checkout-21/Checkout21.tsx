"use client";
import React, { useState } from "react";
import { CalendarDays, Users, Bed, Check, Lock, Info } from "lucide-react";

export default function Checkout21() {
  const [breakfast, setBreakfast] = useState(false);
  const [placed, setPlaced] = useState(false);

  const roomRate = 249;
  const nights = 3;
  const roomTotal = roomRate * nights;
  const breakfastCost = breakfast ? 25 * 2 * nights : 0; // $25 pp per night, 2 guests
  const tax = Math.round((roomTotal + breakfastCost) * 0.12);
  const total = roomTotal + breakfastCost + tax;

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Booking Confirmed!</h2>
          <p className="text-slate-500 text-sm mt-1">Check your email for the itinerary.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left: Form */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Guest Details</h2>
            <p className="text-slate-500 text-sm">Please enter the details of the primary guest.</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="First Name" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
              <input placeholder="Last Name" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
            </div>
            <input type="email" placeholder="Email Address" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
            <input placeholder="Phone Number" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
          </div>

          <h3 className="font-bold text-slate-900 text-lg">Add-ons</h3>
          <div 
            onClick={() => setBreakfast(!breakfast)}
            className={`p-5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition ${breakfast ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-white hover:border-slate-300"}`}
          >
            <div>
              <p className="font-bold text-slate-900">Buffet Breakfast</p>
              <p className="text-sm text-slate-500">$25 per person, per night</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${breakfast ? "bg-indigo-500 border-indigo-500" : "border-slate-300"}`}>
              {breakfast && <Check size={14} className="text-white" />}
            </div>
          </div>

          <h3 className="font-bold text-slate-900 text-lg">Payment</h3>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <input placeholder="Card Number" className="border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
              <input placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
            </div>
          </div>
          
          <button type="button" onClick={() => setPlaced(true)} className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
            <Lock size={16} /> Complete Booking — ${total}
          </button>
        </div>

        {/* Right: Summary */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-6">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Your Stay</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <Bed size={20} className="text-slate-400 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Ocean View Suite</p>
                  <p className="text-xs text-slate-500">1 King Bed · Balcony</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CalendarDays size={20} className="text-slate-400 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Oct 12 — Oct 15, 2026</p>
                  <p className="text-xs text-slate-500">{nights} nights</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users size={20} className="text-slate-400 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">2 Adults</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-sm mb-4">
              <div className="flex justify-between text-slate-600">
                <span>${roomRate} × {nights} nights</span>
                <span>${roomTotal}</span>
              </div>
              {breakfast && (
                <div className="flex justify-between text-slate-600">
                  <span>Breakfast (2 guests)</span>
                  <span>${breakfastCost}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>Taxes & Fees</span>
                <span>${tax}</span>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 flex justify-between items-center font-bold text-slate-900">
              <span>Total</span>
              <span className="text-xl">${total}</span>
            </div>

            <div className="mt-4 flex gap-2 text-xs text-slate-500 items-start">
              <Info size={14} className="shrink-0 text-slate-400 mt-0.5" />
              <p>Free cancellation until Oct 10, 2026. After that, 1 night penalty applies.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
