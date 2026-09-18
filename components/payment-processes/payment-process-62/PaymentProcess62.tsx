"use client";
import React, { useState } from "react";
import { CreditCard, Ticket, ArrowRight, CheckCircle2, Info } from "lucide-react";

type SeatStatus = 'available' | 'premium' | 'taken';

interface Seat {
  id: string;
  status: SeatStatus;
  price: number;
}

// Generate a mock seating chart
const generateSeats = (): Seat[][] => {
  const rows = [];
  for (let r = 0; r < 6; r++) {
    const row = [];
    for (let c = 0; c < 10; c++) {
      const isPremium = r < 2; // Front rows are premium
      const isTaken = Math.random() > 0.7; // 30% chance taken
      const status: SeatStatus = isTaken ? 'taken' : (isPremium ? 'premium' : 'available');
      row.push({
        id: `${String.fromCharCode(65 + r)}${c + 1}`,
        status,
        price: isPremium ? 120 : 65
      });
    }
    rows.push(row);
  }
  return rows;
};

export default function PaymentProcess62() {
  const [seats] = useState<Seat[][]>(generateSeats());
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleSeat = (seat: Seat) => {
    if (seat.status === 'taken') return;
    
    setSelectedSeats(prev => {
      const exists = prev.find(s => s.id === seat.id);
      if (exists) {
        return prev.filter(s => s.id !== seat.id);
      } else {
        if (prev.length >= 4) return prev; // Max 4 seats
        return [...prev, seat];
      }
    });
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const container = e.currentTarget.closest('.w-full') || document;
    const inputs = Array.from(container.querySelectorAll('input')).filter((i: any) => i.offsetParent !== null);
    let isValid = true;
    for (const input of inputs) {
      if (!input.value.trim() && input.hasAttribute('required')) {
        alert("Please fill all columns");
        input.focus();
        isValid = false;
        break;
      }
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
        break;
      }
    }
    if (!isValid) return;

    setIsProcessing(true);
    setServerError(null);
    setTimeout(() => {
      // Simulate server-side validation rejection
      if (Math.random() < 0.3) {
        setServerError("Payment declined by the server. Please check your details and try again.");
        setIsProcessing(false);
        return;
      }
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="w-full min-h-[700px] bg-zinc-950 flex items-center justify-center font-sans p-6 text-zinc-100">
      
      {!isSuccess ? (
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* Left Side: Seat Map */}
          <div className="lg:col-span-7 bg-zinc-900 rounded-[2rem] p-8 shadow-2xl border border-zinc-800 flex flex-col">
            <h2 className="text-2xl font-black text-white mb-2">Select Seats</h2>
            <p className="text-zinc-400 text-sm mb-8">Maximum 4 seats per transaction</p>
            
            {/* The Stage */}
            <div className="w-3/4 h-12 bg-gradient-to-b from-zinc-700 to-zinc-900 mx-auto rounded-t-[50%] mb-12 border-t-4 border-rose-500 shadow-[0_-10px_30px_rgba(244,63,94,0.1)] flex items-center justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Stage</span>
            </div>

            {/* Seat Grid */}
            <div className="flex flex-col gap-3 items-center mb-8">
              {seats.map((row, rIdx) => (
                <div key={rIdx} className="flex gap-2">
                  <div className="w-6 flex items-center justify-center text-xs font-bold text-zinc-600 mr-2">
                    {String.fromCharCode(65 + rIdx)}
                  </div>
                  {row.map(seat => {
                    const isSelected = selectedSeats.some(s => s.id === seat.id);
                    
                    let bgClass = "bg-zinc-700 hover:bg-zinc-600 cursor-pointer";
                    if (seat.status === 'taken') bgClass = "bg-zinc-800 text-zinc-800 cursor-not-allowed opacity-50";
                    else if (seat.status === 'premium') bgClass = "bg-amber-600 hover:bg-amber-500 cursor-pointer";
                    
                    if (isSelected) bgClass = "bg-emerald-500 ring-2 ring-emerald-300 ring-offset-2 ring-offset-zinc-900 scale-110";

                    return (
                      <button
                        key={seat.id}
                        type="button"
                        onClick={(e) => {
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
      const originalHandler = () => toggleSeat(seat);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                        disabled={seat.status === 'taken'}
                        className={`w-8 h-8 rounded-t-lg rounded-b-sm text-[10px] font-bold transition-all duration-200 ${bgClass}`}
                        title={seat.status !== 'taken' ? `${seat.id} - $${seat.price}` : 'Taken'}
                      >
                        {isSelected ? '✓' : ''}
                      </button>
                    );
                  })}
                  <div className="w-6 flex items-center justify-center text-xs font-bold text-zinc-600 ml-2">
                    {String.fromCharCode(65 + rIdx)}
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 text-xs font-medium text-zinc-400 mt-auto pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-zinc-700 rounded-sm"></div> Standard ($65)</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-amber-600 rounded-sm"></div> Premium ($120)</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-zinc-800 rounded-sm opacity-50"></div> Taken</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-emerald-500 rounded-sm"></div> Selected</div>
            </div>
          </div>

          {/* Right Side: Checkout Form */}
          <div className="lg:col-span-5 bg-zinc-900 rounded-[2rem] p-8 shadow-2xl border border-zinc-800 flex flex-col relative z-0">
            <h2 className="text-2xl font-black text-white mb-6">Checkout</h2>

            <div className="bg-zinc-950/50 rounded-2xl p-6 mb-6 border border-zinc-800 flex-1">
               <h3 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-widest">Order Summary</h3>
               
               {selectedSeats.length === 0 ? (
                 <div className="text-center py-8 text-zinc-600 flex flex-col items-center gap-2">
                   <Info className="w-6 h-6" />
                   Please select seats to continue
                 </div>
               ) : (
                 <div className="space-y-3 mb-6 animate-in fade-in">
                   {selectedSeats.map(seat => (
                     <div key={seat.id} className="flex justify-between items-center bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                       <div className="flex flex-col">
                         <span className="font-bold text-white">Seat {seat.id}</span>
                         <span className="text-xs text-zinc-500">{seat.status === 'premium' ? 'Premium Tier' : 'Standard Tier'}</span>
                       </div>
                       <span className="font-bold text-emerald-400">${seat.price.toFixed(2)}</span>
                     </div>
                   ))}
                 </div>
               )}

               <div className="flex justify-between items-end pt-4 border-t border-zinc-800 mt-auto">
                 <span className="font-bold text-zinc-500">Total Due</span>
                 <span className="text-4xl font-black text-white">${total.toFixed(2)}</span>
               </div>
            </div>

            <form onSubmit={handlePay} className="space-y-4">
              
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required disabled={selectedSeats.length === 0} type="text" placeholder="Card Number" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors font-mono tracking-widest text-sm disabled:opacity-50"  minLength={16} />
              </div>
              
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required disabled={selectedSeats.length === 0} type="text" placeholder="MM/YY" className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors font-mono tracking-widest text-center text-sm disabled:opacity-50"  minLength={5} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required disabled={selectedSeats.length === 0} type="text" placeholder="CVV" className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors font-mono tracking-widest text-center text-sm disabled:opacity-50"  minLength={3} />
              </div>

              <div className="pt-2">
                {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                  type="submit" 
                  disabled={isProcessing || selectedSeats.length === 0}
                  className="w-full py-5 bg-rose-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-rose-500 transition-colors shadow-[0_0_20px_rgba(225,29,72,0.3)] disabled:opacity-50 disabled:shadow-none"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Pay ${total.toFixed(2)} <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-zinc-900 rounded-[2rem] p-12 shadow-2xl border border-zinc-800 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <Ticket className="w-12 h-12 text-rose-500" strokeWidth={2} />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">You're Going!</h2>
           <p className="text-zinc-400 mb-8 font-medium">Your tickets for {selectedSeats.map(s => s.id).join(', ')} have been emailed to you.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setSelectedSeats([]); }}
              className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-colors"
            >
              Back to Events
            </button>
        </div>
      )}

    </div>
  );
}
