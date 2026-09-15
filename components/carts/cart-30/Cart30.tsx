"use client";
import React, { useState, useEffect } from "react";
import { Gavel, TrendingUp, Clock, AlertCircle, Check } from "lucide-react";

export default function Cart30() {
  const [bidAmount, setBidAmount] = useState(1250);
  const [currentBid, setCurrentBid] = useState(1200);
  const [bidPlaced, setBidPlaced] = useState(false);
  const [bidHistory, setBidHistory] = useState([
    { user: "collector_j", amount: 1200, time: "2 min ago" },
    { user: "rare_finds", amount: 1050, time: "8 min ago" },
    { user: "arthaus_k", amount: 900, time: "15 min ago" },
  ]);
  const [timeLeft, setTimeLeft] = useState(4 * 60 + 23);
  const [error, setError] = useState("");

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");
  const minBid = currentBid + 50;

  const handleBid = () => {
    if (bidAmount < minBid) { setError(`Minimum bid is $${minBid}`); return; }
    setError("");
    const oldBid = currentBid;
    setCurrentBid(bidAmount);
    setBidHistory(h => [{ user: "you", amount: bidAmount, time: "just now" }, ...h]);
    setBidPlaced(true);
    setTimeout(() => setBidPlaced(false), 3000);
  };

  const quickBids = [minBid, minBid + 100, minBid + 250, minBid + 500];

  return (
    <div className="w-full bg-gradient-to-br from-yellow-950 to-amber-950 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Item */}
        <div className="flex gap-5 mb-6">
          <div className="w-32 h-32 bg-amber-900/50 rounded-2xl flex items-center justify-center text-6xl border border-amber-700/30 shrink-0">🏺</div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Lot #2847 · Ceramics</p>
            <h2 className="text-xl font-bold text-white">Ming Dynasty Vase, 16th Century</h2>
            <p className="text-amber-300/70 text-sm mt-1">Provenance verified · Christie's authenticated</p>
          </div>
        </div>

        {/* Live stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-amber-900/30 border border-amber-700/20 rounded-2xl p-4 text-center">
            <p className="text-amber-300/60 text-xs font-bold uppercase mb-1">Current Bid</p>
            <p className="text-2xl font-bold text-white">${currentBid.toLocaleString()}</p>
          </div>
          <div className="bg-amber-900/30 border border-amber-700/20 rounded-2xl p-4 text-center">
            <p className="text-amber-300/60 text-xs font-bold uppercase mb-1">Time Left</p>
            <p className={`text-2xl font-bold font-mono ${timeLeft < 60 ? "text-rose-400 animate-pulse" : "text-white"}`}>{mins}:{secs}</p>
          </div>
          <div className="bg-amber-900/30 border border-amber-700/20 rounded-2xl p-4 text-center">
            <p className="text-amber-300/60 text-xs font-bold uppercase mb-1">Bids</p>
            <p className="text-2xl font-bold text-white">{bidHistory.length}</p>
          </div>
        </div>

        {/* Quick bid buttons */}
        <div className="mb-4">
          <p className="text-amber-300/70 text-xs font-bold uppercase tracking-widest mb-2">Quick Bid</p>
          <div className="grid grid-cols-4 gap-2">
            {quickBids.map(b => (
              <button
                key={b}
                onClick={() => { setBidAmount(b); setError(""); }}
                className={`py-2.5 rounded-xl text-sm font-bold border transition ${bidAmount === b ? "bg-amber-500 border-amber-400 text-white" : "border-amber-700/40 text-amber-300 hover:border-amber-500"}`}
              >
                ${b.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Custom bid input */}
        <div className="mb-2">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 font-bold text-xl">$</span>
            <input
              type="number"
              value={bidAmount}
              min={minBid}
              step={50}
              onChange={e => { setBidAmount(Number(e.target.value)); setError(""); }}
              className="w-full pl-9 pr-4 py-4 bg-amber-900/30 border-2 border-amber-700/30 text-white text-xl font-bold rounded-2xl focus:outline-none focus:border-amber-500 transition"
            />
          </div>
          {error && <p className="flex items-center gap-1.5 text-rose-400 text-sm mt-2"><AlertCircle size={13} />{error}</p>}
          <p className="text-amber-300/50 text-xs mt-2">Minimum bid: ${minBid.toLocaleString()}</p>
        </div>

        <button
          onClick={handleBid}
          disabled={timeLeft === 0}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 mb-6 transition-all duration-300 ${
            timeLeft === 0
              ? "bg-slate-700 text-slate-500 cursor-not-allowed"
              : bidPlaced
              ? "bg-emerald-500 text-white"
              : "bg-amber-500 hover:bg-amber-400 text-amber-950"
          }`}
        >
          {bidPlaced ? <><Check size={20} /> Bid Placed — ${bidAmount.toLocaleString()}</> : timeLeft === 0 ? "Auction Ended" : <><Gavel size={20} /> Place Bid — ${bidAmount.toLocaleString()}</>}
        </button>

        {/* Bid history */}
        <div className="bg-amber-900/20 border border-amber-700/20 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={14} className="text-amber-400" />
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Bid History</p>
          </div>
          <div className="space-y-2">
            {bidHistory.slice(0, 4).map((bid, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className={bid.user === "you" ? "text-emerald-400 font-bold" : "text-amber-200/60"}>{bid.user === "you" ? "🏆 You" : bid.user}</span>
                <span className={bid.user === "you" ? "text-emerald-400 font-bold" : "text-white"}>${bid.amount.toLocaleString()}</span>
                <span className="text-amber-300/40 text-xs">{bid.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
