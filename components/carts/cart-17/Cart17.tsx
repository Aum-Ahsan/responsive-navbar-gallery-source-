"use client";
import React, { useState, useEffect } from "react";
import { ShoppingCart, Check, Clock, Flame } from "lucide-react";

export default function Cart17() {
  const [timeLeft, setTimeLeft] = useState(23 * 60 + 47); // 23:47
  const [stock, setStock] = useState(3);
  const [added, setAdded] = useState(false);
  const [viewers, setViewers] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const vTimer = setInterval(() => {
      setViewers(v => v + Math.floor(Math.random() * 3) - 1);
    }, 3000);
    return () => clearInterval(vTimer);
  }, []);

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");

  const handleAdd = () => {
    setAdded(true);
    setStock(s => Math.max(0, s - 1));
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <div className="max-w-md mx-auto">
        {/* Countdown Banner */}
        <div className="bg-gradient-to-r from-rose-600 to-orange-500 rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Flame size={20} className="animate-pulse" />
            <span className="font-bold text-sm">Flash Sale ends in</span>
          </div>
          <div className="flex items-center gap-1 text-white font-mono font-bold text-2xl">
            <span className="bg-white/20 rounded-lg px-3 py-1">{mins}</span>
            <span className="animate-pulse">:</span>
            <span className="bg-white/20 rounded-lg px-3 py-1">{secs}</span>
          </div>
        </div>

        {/* Product */}
        <div className="bg-gray-50 rounded-3xl p-6 mb-5">
          <div className="flex gap-5 items-start">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-rose-100 rounded-2xl flex items-center justify-center text-5xl shrink-0">👟</div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-slate-900">Ultra-Boost Trail Runner</h2>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-rose-600">$89</span>
                <span className="text-sm text-slate-400 line-through">$149</span>
                <span className="text-xs bg-rose-100 text-rose-600 font-bold px-2 py-0.5 rounded-full">40% OFF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency signals */}
        <div className="space-y-2 mb-6">
          <div className={`flex items-center gap-2 p-3 rounded-xl text-sm font-semibold ${stock <= 2 ? "bg-rose-50 text-rose-700" : "bg-amber-50 text-amber-700"}`}>
            <Clock size={14} />
            {stock > 0 ? `Only ${stock} left at this price — hurry!` : "Last one sold! Check back soon."}
          </div>
          {/* Stock bar */}
          <div className="bg-gray-100 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-1000"
              style={{ width: `${((10 - stock) / 10) * 100}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 text-right">{10 - stock} of 10 claimed</p>
          <div className="text-xs text-slate-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse inline-block" />
            {Math.max(12, viewers)} people viewing this right now
          </div>
        </div>

        <button
          onClick={handleAdd}
          disabled={stock === 0}
          className={`w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
            stock === 0
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : added
              ? "bg-emerald-500 text-white"
              : "bg-rose-600 hover:bg-rose-700 text-white"
          }`}
        >
          {added ? <><Check size={20} /> Added!</> : stock === 0 ? "Sold Out" : <><ShoppingCart size={20} /> Add to Cart — $89</>}
        </button>
      </div>
    </div>
  );
}
