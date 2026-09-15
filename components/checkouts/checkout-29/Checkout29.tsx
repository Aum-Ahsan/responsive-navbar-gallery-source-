"use client";
import React, { useState } from "react";
import { Store, Car, Check, MapPin, Clock } from "lucide-react";

export default function Checkout29() {
  const [method, setMethod] = useState<"instore" | "curbside">("curbside");
  const [carDesc, setCarDesc] = useState("");
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Ready for Pickup!</h2>
          <p className="text-slate-500 text-sm mt-2">
            Your order is ready at <strong>Downtown Store</strong>. 
            {method === "curbside" && " Park in the designated curbside spots and tap 'I'm Here' in your email."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        
        <h2 className="text-xl font-bold text-slate-900 mb-6">Pickup Details</h2>

        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 flex items-start gap-4">
          <MapPin size={20} className="text-rose-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Downtown Flagship</h3>
            <p className="text-xs text-slate-500 mt-1">123 Market St, San Francisco, CA</p>
            <p className="text-xs font-semibold text-emerald-600 mt-2 flex items-center gap-1"><Clock size={12}/> Ready today by 3:00 PM</p>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline ml-auto">Change</button>
        </div>

        <h3 className="font-bold text-slate-900 text-sm mb-3">How would you like to pick it up?</h3>
        
        <div className="space-y-3 mb-6">
          <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${method === "instore" ? "border-blue-500 bg-blue-50" : "border-slate-100 hover:border-slate-200"}`}>
            <input type="radio" name="pickup" checked={method==="instore"} onChange={()=>setMethod("instore")} className="mt-1" />
            <div>
              <p className="font-bold text-sm text-slate-900 flex items-center gap-2"><Store size={16} className="text-slate-500"/> In-Store Pickup</p>
              <p className="text-xs text-slate-500 mt-1">Head to the online order counter inside the store.</p>
            </div>
          </label>
          
          <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${method === "curbside" ? "border-blue-500 bg-blue-50" : "border-slate-100 hover:border-slate-200"}`}>
            <input type="radio" name="pickup" checked={method==="curbside"} onChange={()=>setMethod("curbside")} className="mt-1" />
            <div className="w-full">
              <p className="font-bold text-sm text-slate-900 flex items-center gap-2"><Car size={16} className="text-slate-500"/> Curbside Delivery</p>
              <p className="text-xs text-slate-500 mt-1">Stay in your car, we'll bring it out to you.</p>
              
              {method === "curbside" && (
                <div className="mt-4 pt-4 border-t border-blue-200/50">
                  <input 
                    placeholder="Vehicle info (e.g. Silver Honda Civic)" 
                    value={carDesc}
                    onChange={(e) => setCarDesc(e.target.value)}
                    className="w-full bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </label>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="font-bold text-slate-900 text-sm mb-3">Pickup Contact</h3>
          <input placeholder="Phone Number (for SMS updates)" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white transition shadow-lg shadow-slate-900/20"
        >
          Confirm Pickup Details
        </button>

      </div>
    </div>
  );
}
