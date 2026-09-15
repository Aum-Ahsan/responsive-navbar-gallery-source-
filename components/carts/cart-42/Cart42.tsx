"use client";
import React, { useState } from "react";
import { Ticket, Check } from "lucide-react";

export default function Cart42() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [added, setAdded] = useState(false);

  // Mock seat map (3 rows of 6)
  const rows = ["A", "B", "C"];
  const seatsPerRow = 6;
  const booked = ["A2", "A3", "B5", "C1"];
  const pricePerSeat = 85;

  const toggleSeat = (seatId: string) => {
    if (booked.includes(seatId)) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleAdd = () => {
    if (selectedSeats.length === 0) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const total = selectedSeats.length * pricePerSeat;

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans flex justify-center text-white">
      <div className="w-full max-w-md bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl">
        
        <div className="text-center mb-8 border-b border-slate-700 pb-6">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Live Concert</p>
          <h2 className="text-2xl font-bold">Symphony in Blue</h2>
          <p className="text-slate-400 text-sm mt-1">Oct 24, 2026 • 8:00 PM</p>
        </div>

        {/* Stage Mock */}
        <div className="w-full h-8 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-t-full mb-8 border-t border-indigo-500/50 flex items-center justify-center">
          <span className="text-xs font-bold tracking-widest text-indigo-300">STAGE</span>
        </div>

        {/* Seat Map */}
        <div className="flex flex-col gap-3 items-center mb-8">
          {rows.map(row => (
            <div key={row} className="flex gap-2 sm:gap-3 items-center">
              <span className="w-4 text-xs font-bold text-slate-500">{row}</span>
              <div className="flex gap-2">
                {Array.from({ length: seatsPerRow }).map((_, i) => {
                  const seatId = `${row}${i + 1}`;
                  const isBooked = booked.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);
                  
                  return (
                    <button
                      key={seatId}
                      onClick={() => toggleSeat(seatId)}
                      disabled={isBooked}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-t-lg rounded-b-sm flex items-center justify-center text-xs font-bold transition-all
                        ${isBooked ? "bg-slate-700 text-slate-600 cursor-not-allowed" : 
                          isSelected ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/50 -translate-y-1" : 
                          "bg-slate-600 text-slate-300 hover:bg-slate-500"}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <span className="w-4 text-xs font-bold text-slate-500 text-right">{row}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center bg-slate-900 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><div className="w-3 h-3 bg-slate-600 rounded-sm"></div> Available</span>
            <span className="flex items-center gap-1.5"><div className="w-3 h-3 bg-slate-700 rounded-sm"></div> Booked</span>
            <span className="flex items-center gap-1.5"><div className="w-3 h-3 bg-indigo-500 rounded-sm"></div> Selected</span>
          </div>
        </div>

        <button 
          onClick={handleAdd}
          disabled={added || selectedSeats.length === 0}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition 
            ${selectedSeats.length === 0 ? "bg-slate-700 text-slate-500 cursor-not-allowed" : 
              added ? "bg-emerald-500 text-white" : "bg-indigo-600 hover:bg-indigo-500 text-white"}`}
        >
          {added ? <Check size={18} /> : <Ticket size={18} />}
          {added ? "Tickets Added!" : selectedSeats.length === 0 ? "Select Seats" : `Add ${selectedSeats.length} Ticket${selectedSeats.length > 1 ? "s" : ""} - $${total}`}
        </button>

      </div>
    </div>
  );
}
