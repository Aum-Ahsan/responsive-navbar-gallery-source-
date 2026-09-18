"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Calendar, Moon, Users } from "lucide-react";

export default function PaymentProcess63() {
  const PRICE_PER_NIGHT = 250;
  
  // Basic mock date state (YYYY-MM-DD)
  const today = new Date();
  const tmrw = new Date(today);
  tmrw.setDate(tmrw.getDate() + 1);
  
  const [checkIn, setCheckIn] = useState(today.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(tmrw.toISOString().split('T')[0]);
  const [guests, setGuests] = useState(2);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate nights
  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const timeDiff = d2.getTime() - d1.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff > 0 ? daysDiff : 0;
  };

  const nights = calculateNights();
  const subtotal = nights * PRICE_PER_NIGHT;
  const taxes = subtotal * 0.12; // 12% tax
  const total = subtotal + taxes;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (nights <= 0) {
      alert("Check-out date must be after check-in date.");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-stone-100 flex items-center justify-center font-sans p-6 text-stone-800">
      
      {!isSuccess ? (
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          
          {/* Left Side: Booking Details */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
            <h2 className="text-2xl font-black text-stone-900 mb-6">Your Stay</h2>
            
            {/* Hotel Image/Info mock */}
            <div className="flex gap-4 mb-8">
              <div className="w-24 h-24 bg-stone-200 rounded-2xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200&h=200" alt="Resort" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-900">Grand Azure Resort & Spa</h3>
                <p className="text-stone-500 text-sm">Ocean View King Suite</p>
                <div className="flex gap-1 mt-2 text-amber-500">
                  {"★★★★★".split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
              </div>
            </div>

            {/* Date Pickers */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input required 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-stone-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors text-sm font-medium"
                   minLength={2} maxLength={50} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input required 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-stone-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors text-sm font-medium"
                   minLength={2} maxLength={50} />
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <select 
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-stone-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors text-sm font-medium appearance-none"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
              <div className="flex justify-between items-center mb-3 text-sm">
                <span className="font-medium text-stone-500 flex items-center gap-2">
                  <Moon className="w-4 h-4" /> ${PRICE_PER_NIGHT} x {nights} nights
                </span>
                <span className="font-bold text-stone-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-3 text-sm">
                <span className="font-medium text-stone-500">Taxes & Fees (12%)</span>
                <span className="font-bold text-stone-900">${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-end pt-3 border-t border-stone-200">
                <span className="font-bold text-stone-900">Total</span>
                <span className="text-3xl font-black text-stone-900">${total.toFixed(2)}</span>
              </div>
            </div>

          </div>

          {/* Right Side: Checkout Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 flex flex-col">
            <h2 className="text-2xl font-black text-stone-900 mb-6">Payment</h2>

            <form onSubmit={handlePay} className="space-y-6">
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="First Name" className="w-1/2 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:border-teal-600 transition-colors text-sm font-medium"  minLength={2} maxLength={50} />
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Last Name" className="w-1/2 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:border-teal-600 transition-colors text-sm font-medium"  minLength={2} maxLength={50} />
                </div>
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="Email Address (for confirmation)" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:border-teal-600 transition-colors text-sm font-medium"  minLength={5} maxLength={100} />
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-100">
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-12 pr-4 py-4 text-stone-900 focus:outline-none focus:border-teal-600 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 text-stone-900 focus:outline-none focus:border-teal-600 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 text-stone-900 focus:outline-none focus:border-teal-600 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isProcessing || nights <= 0}
                  className="w-full py-5 bg-teal-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-teal-600 transition-all shadow-[0_10px_20px_rgba(15,118,110,0.2)] disabled:opacity-50 disabled:shadow-none"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Confirm Reservation <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
                <p className="text-center text-xs text-stone-400 mt-4">Free cancellation until 48 hours before check-in.</p>
              </div>
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 shadow-2xl border border-stone-200 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-teal-600" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-stone-900 mb-2">Reservation Confirmed</h2>
           <p className="text-stone-500 mb-8 font-medium">We've sent your itinerary and receipt to your email.</p>
           
           <div className="bg-stone-50 rounded-xl p-4 mb-8 text-sm text-stone-600 text-left border border-stone-100">
             <div className="flex justify-between mb-2">
               <span className="font-bold">Check-in:</span>
               <span>{checkIn}</span>
             </div>
             <div className="flex justify-between">
               <span className="font-bold">Check-out:</span>
               <span>{checkOut}</span>
             </div>
           </div>

           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl transition-colors"
            >
              Back to Home
            </button>
        </div>
      )}

    </div>
  );
}
