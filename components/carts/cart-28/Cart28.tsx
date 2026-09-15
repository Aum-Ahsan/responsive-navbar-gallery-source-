"use client";
import React, { useState } from "react";
import { Ticket, Check, MapPin } from "lucide-react";

const rows = ["A", "B", "C", "D", "E"];
const cols = [1, 2, 3, 4, 5, 6, 7, 8];
const unavailable = new Set(["A3", "B5", "C1", "C2", "D7", "E4", "E5"]);

export default function Cart28() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [added, setAdded] = useState(false);
  const maxSeats = 4;
  const pricePerSeat = 65;

  const toggle = (seat: string) => {
    if (unavailable.has(seat)) return;
    setSelected(s => {
      const next = new Set(s);
      if (next.has(seat)) { next.delete(seat); return next; }
      if (next.size >= maxSeats) return s;
      next.add(seat); return next;
    });
  };

  const handleAdd = () => {
    if (selected.size === 0) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Event info */}
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-1">Live Event · Sep 28, 2026</p>
          <h2 className="text-2xl font-bold text-white">Neon Dreams World Tour</h2>
          <div className="flex items-center gap-1.5 text-slate-400 text-sm mt-1">
            <MapPin size={14} /> The O2 Arena, London · 8:00 PM
          </div>
        </div>

        {/* Stage */}
        <div className="bg-violet-700/30 border border-violet-600/30 rounded-2xl text-center py-3 mb-6 text-sm font-bold text-violet-300 tracking-widest">
          STAGE
        </div>

        {/* Seat map */}
        <div className="bg-slate-800/50 rounded-2xl p-5 mb-6">
          <div className="space-y-2">
            {rows.map(row => (
              <div key={row} className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 w-4">{row}</span>
                <div className="flex gap-1.5 flex-1 justify-center">
                  {cols.map(col => {
                    const seat = `${row}${col}`;
                    const isUnavail = unavailable.has(seat);
                    const isSel = selected.has(seat);
                    return (
                      <button
                        key={seat}
                        onClick={() => toggle(seat)}
                        disabled={isUnavail}
                        title={seat}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all duration-150 border ${
                          isUnavail
                            ? "bg-slate-700 border-slate-700 text-slate-600 cursor-not-allowed"
                            : isSel
                            ? "bg-violet-500 border-violet-400 text-white scale-110 shadow-lg shadow-violet-500/30"
                            : "bg-slate-700/60 border-slate-600 text-slate-400 hover:border-violet-400 hover:text-white"
                        }`}
                      >
                        {col}
                      </button>
                    );
                  })}
                </div>
                <span className="text-xs font-bold text-slate-500 w-4">{row}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-5 mt-5 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><span className="w-4 h-4 bg-violet-500 rounded" /> Selected</span>
            <span className="flex items-center gap-1.5"><span className="w-4 h-4 bg-slate-700/60 rounded border border-slate-600" /> Available</span>
            <span className="flex items-center gap-1.5"><span className="w-4 h-4 bg-slate-700 rounded" /> Taken</span>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-slate-800 rounded-2xl p-4 mb-5 flex items-center justify-between">
          <div>
            {selected.size > 0 ? (
              <>
                <p className="text-white font-bold text-sm">{selected.size} seat{selected.size !== 1 ? "s" : ""} selected</p>
                <p className="text-slate-400 text-xs">{[...selected].sort().join(", ")}</p>
              </>
            ) : (
              <p className="text-slate-400 text-sm">Select up to {maxSeats} seats above</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-white text-2xl font-bold">${selected.size * pricePerSeat}</p>
            <p className="text-slate-400 text-xs">${pricePerSeat}/seat</p>
          </div>
        </div>

        <button
          onClick={handleAdd}
          disabled={selected.size === 0}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            selected.size === 0
              ? "bg-slate-700 text-slate-500 cursor-not-allowed"
              : added
              ? "bg-emerald-500 text-white"
              : "bg-violet-600 hover:bg-violet-500 text-white"
          }`}
        >
          {added ? (
            <><Check size={20} /> {selected.size} Ticket{selected.size !== 1 ? "s" : ""} Added!</>
          ) : (
            <><Ticket size={20} /> Reserve {selected.size > 0 ? `${selected.size} Seat${selected.size !== 1 ? "s" : ""}` : "Seats"}{selected.size > 0 ? ` — $${selected.size * pricePerSeat}` : ""}</>
          )}
        </button>
      </div>
    </div>
  );
}
