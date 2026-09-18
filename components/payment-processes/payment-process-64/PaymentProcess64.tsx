"use client";
import React, { useState } from "react";
import { CreditCard, Plane, ArrowRight, CheckCircle2, UserPlus, X, PlaneTakeoff, PlaneLanding } from "lucide-react";

export default function PaymentProcess64() {
  const TICKET_PRICE = 450.00;
  
  const [passengers, setPassengers] = useState([{ id: 1, name: '', dob: '', passport: '' }]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const addPassenger = () => {
    if (passengers.length >= 4) return;
    setPassengers([...passengers, { id: Date.now(), name: '', dob: '', passport: '' }]);
  };

  const removePassenger = (id: number) => {
    if (passengers.length === 1) return;
    setPassengers(passengers.filter(p => p.id !== id));
  };

  const total = passengers.length * TICKET_PRICE;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-sky-50 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {!isSuccess ? (
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl border border-sky-100 overflow-hidden flex flex-col md:flex-row relative z-10">
          
          {/* Left Side: Flight Details & Passengers */}
          <div className="flex-1 p-8 bg-white border-r border-sky-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Passenger Details</h2>
            
            {/* Itinerary */}
            <div className="bg-sky-50 rounded-2xl p-5 mb-8 border border-sky-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-sky-900">JFK</span>
                  <span className="text-xs text-sky-600 font-bold">New York, 08:00 AM</span>
                </div>
                <div className="flex flex-col items-center px-4">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">7h 20m</span>
                  <div className="w-24 h-px bg-sky-200 relative">
                    <Plane className="w-4 h-4 text-sky-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mt-1">Direct</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-2xl font-black text-sky-900">LHR</span>
                  <span className="text-xs text-sky-600 font-bold">London, 08:20 PM</span>
                </div>
              </div>
            </div>

            {/* Passenger Forms */}
            <div className="space-y-6">
              {passengers.map((p, index) => (
                <div key={p.id} className="relative bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-700 text-sm">Passenger {index + 1}</h3>
                    {passengers.length > 1 && (
                      <button type="button" onClick={(e) => {
      const inputs = Array.from((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = () => removePassenger(p.id);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} className="text-rose-500 hover:text-rose-600">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Full Legal Name" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-sky-500 text-sm"  minLength={2} maxLength={50} />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Passport Number" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-sky-500 text-sm"  minLength={2} maxLength={50} />
                  </div>
                </div>
              ))}

              {passengers.length < 4 && (
                <button 
                  type="button" 
                  onClick={addPassenger}
                  className="w-full py-3 border-2 border-dashed border-sky-200 text-sky-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-sky-50 hover:border-sky-300 transition-colors text-sm"
                >
                  <UserPlus className="w-4 h-4" /> Add Passenger
                </button>
              )}
            </div>

          </div>

          {/* Right Side: Checkout Form */}
          <div className="w-full md:w-80 bg-slate-50 p-8 flex flex-col">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Payment</h2>

            <div className="bg-white rounded-xl p-4 mb-6 border border-slate-200 flex-1 shadow-sm">
               <h3 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">Summary</h3>
               
               <div className="flex justify-between items-center mb-2 text-sm">
                 <span className="font-medium text-slate-600">Economy Ticket</span>
                 <span className="font-bold text-slate-900">${TICKET_PRICE} x {passengers.length}</span>
               </div>
               
               <div className="flex justify-between items-center mb-4 text-sm">
                 <span className="font-medium text-slate-600">Taxes & Fees</span>
                 <span className="font-bold text-slate-900">${(passengers.length * 45).toFixed(2)}</span>
               </div>

               <div className="flex justify-between items-end pt-3 border-t border-slate-100">
                 <span className="font-bold text-slate-500">Total</span>
                 <span className="text-3xl font-black text-slate-900">${(total + (passengers.length * 45)).toFixed(2)}</span>
               </div>
            </div>

            <form onSubmit={handlePay} className="space-y-4">
              
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-slate-900 focus:outline-none focus:border-sky-500 transition-colors font-mono tracking-widest text-xs"  minLength={16} />
              </div>
              
              <div className="flex gap-3">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-white border border-slate-200 rounded-xl px-3 py-3 text-slate-900 focus:outline-none focus:border-sky-500 transition-colors font-mono tracking-widest text-center text-xs"  minLength={5} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-white border border-slate-200 rounded-xl px-3 py-3 text-slate-900 focus:outline-none focus:border-sky-500 transition-colors font-mono tracking-widest text-center text-xs"  minLength={3} />
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full py-4 mt-2 bg-sky-600 text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-sky-500 transition-all shadow-lg shadow-sky-600/30 disabled:opacity-70 disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Book Flight <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 shadow-2xl border border-sky-100 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <PlaneTakeoff className="w-12 h-12 text-sky-500" strokeWidth={2} />
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-2">Booking Confirmed!</h2>
           <p className="text-slate-500 mb-8 font-medium">Your e-tickets have been sent to your email.</p>
           
           <div className="bg-sky-50 rounded-xl p-4 mb-8 text-sm text-sky-900 text-left border border-sky-100 font-medium">
             <div className="flex justify-between mb-2">
               <span>Booking Ref:</span>
               <span className="font-bold tracking-widest">XZ93F2</span>
             </div>
             <div className="flex justify-between">
               <span>Passengers:</span>
               <span className="font-bold">{passengers.length}</span>
             </div>
           </div>

           <button type="button" 
              onClick={() => { setIsSuccess(false); setPassengers([{ id: 1, name: '', dob: '', passport: '' }]); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Back to Home
            </button>
        </div>
      )}

    </div>
  );
}
