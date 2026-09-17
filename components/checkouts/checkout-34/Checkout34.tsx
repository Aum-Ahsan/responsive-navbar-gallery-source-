"use client";
import React, { useState } from "react";
import { Plane, Calendar, Users, Briefcase, Check, ArrowRight } from "lucide-react";

export default function Checkout34() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Booking Confirmed!</h2>
          <p className="text-slate-500 text-sm mt-2">Your itinerary (PNR: XYZ123) has been emailed to you.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Flight Header */}
        <div className="bg-blue-600 p-6 sm:p-8 text-white">
          <div className="flex justify-between items-center mb-6">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider">OUTBOUND</span>
            <span className="text-sm font-semibold opacity-90 flex items-center gap-2"><Calendar size={14}/> Oct 24, 2026</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-4xl font-black tracking-tighter">JFK</p>
              <p className="text-sm opacity-80 mt-1">New York, 08:30 AM</p>
            </div>
            <div className="flex-1 px-8 relative flex items-center justify-center">
              <div className="w-full border-t border-dashed border-white/40 absolute top-1/2"></div>
              <Plane size={24} className="text-white relative z-10 transform rotate-45" />
            </div>
            <div className="text-center">
              <p className="text-4xl font-black tracking-tighter">LHR</p>
              <p className="text-sm opacity-80 mt-1">London, 20:45 PM</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-8">
          
          {/* Form */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                <Users size={16} className="text-blue-500" /> Passenger Details (Adult 1)
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input placeholder="First Name" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
                <input placeholder="Last Name" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <input placeholder="Passport Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                <Briefcase size={16} className="text-blue-500" /> Add Baggage
              </h3>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 border border-blue-500 bg-blue-50 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="bag" defaultChecked className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-900">Carry-on only (7kg)</span>
                  </div>
                  <span className="text-sm font-bold text-blue-700">Included</span>
                </label>
                <label className="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer hover:border-slate-300">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="bag" className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-700">Checked bag (23kg)</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">+$60</span>
                </label>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-64">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
              <h4 className="font-bold text-slate-900 mb-4">Fare Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>1x Adult Ticket</span>
                  <span>$450.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Taxes & Fees</span>
                  <span>$85.50</span>
                </div>
                <div className="pt-2 mt-2 border-t border-slate-200 flex justify-between font-bold text-lg text-slate-900">
                  <span>Total</span>
                  <span>$535.50</span>
                </div>
              </div>
            </div>

            <button type="button" 
              onClick={() => setPlaced(true)}
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white transition shadow-lg shadow-slate-900/20"
            >
              Continue to Pay <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
