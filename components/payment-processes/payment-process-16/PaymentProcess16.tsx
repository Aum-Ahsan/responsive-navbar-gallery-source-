"use client";
import React, { useState, useRef, useEffect } from "react";
import { Coffee, CheckCircle, CreditCard, Minus, Plus } from "lucide-react";

export default function PaymentProcess16() {
  const [tipPercentage, setTipPercentage] = useState(15);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const dialRef = useRef<HTMLDivElement>(null);
  const basePrice = 32.50;

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateDial(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateDial(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const updateDial = (clientX: number, clientY: number) => {
    if (!dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate angle in radians
    const radians = Math.atan2(clientY - centerY, clientX - centerX);
    // Convert to degrees (0 at right, 90 at bottom, 180 at left, -90 at top)
    let degrees = radians * (180 / Math.PI);
    
    // Normalize to 0-360 with 0 at the bottom (like a volume knob)
    degrees = degrees + 270;
    if (degrees >= 360) degrees -= 360;

    // Constrain the knob arc (e.g. from 45 deg to 315 deg, leaving a gap at the bottom)
    // 0 is bottom. Let's make 45 the minimum (left side) and 315 the maximum (right side).
    // Actually, it's easier to map: min = 30, max = 330.
    const minDeg = 40;
    const maxDeg = 320;
    
    let clampedDeg = degrees;
    if (degrees < minDeg && degrees > 180) clampedDeg = maxDeg; // overflow to right
    else if (degrees < minDeg) clampedDeg = minDeg; // overflow to left
    else if (degrees > maxDeg) clampedDeg = maxDeg;

    // Map degrees (40 to 320) to tip percentage (0 to 30)
    const range = maxDeg - minDeg;
    const current = clampedDeg - minDeg;
    let newTip = Math.round((current / range) * 30);
    
    // Clamp to 0-30
    newTip = Math.max(0, Math.min(newTip, 30));
    setTipPercentage(newTip);
  };

  const tipAmount = basePrice * (tipPercentage / 100);
  const total = basePrice + tipAmount;

  // Calculate rotation for the visual knob indicator
  // Map 0-30% back to 40-320 degrees
  const minDeg = 40;
  const maxDeg = 320;
  const range = maxDeg - minDeg;
  const rotation = minDeg + (tipPercentage / 30) * range;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-[600px] bg-zinc-950 flex items-center justify-center p-6 font-sans text-zinc-100">
        <div className="bg-zinc-900 p-12 rounded-[2.5rem] text-center max-w-sm w-full border border-zinc-800 animate-in fade-in duration-500">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Paid Successfully</h2>
          <p className="text-zinc-400 mb-8">Thanks for the ${tipAmount.toFixed(2)} tip!</p>
          <div className="bg-zinc-950 rounded-2xl p-6 mb-8 text-left border border-zinc-800">
            <div className="flex justify-between text-zinc-500 text-sm mb-2">
              <span>Order</span>
              <span className="text-zinc-300">${basePrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-zinc-500 text-sm mb-4">
              <span>Tip ({tipPercentage}%)</span>
              <span className="text-zinc-300">${tipAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-4 border-t border-zinc-800">
              <span>Total</span>
              <span className="text-emerald-400">${total.toFixed(2)}</span>
            </div>
          </div>
          <button type="button" onClick={() => { setIsSuccess(false); setTipPercentage(15); }} className="w-full py-4 bg-zinc-100 text-zinc-900 font-bold rounded-xl hover:bg-white transition-colors">
            Start New Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-zinc-950 flex items-center justify-center font-sans p-6 text-zinc-100">
      
      <div className="max-w-md w-full bg-zinc-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-zinc-800 relative overflow-hidden flex flex-col">
        
        {/* Subtle top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
            <Coffee className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Cafe Aethel</h1>
            <p className="text-sm text-zinc-400">Order #842</p>
          </div>
          <div className="ml-auto text-right">
            <div className="text-sm text-zinc-500">Subtotal</div>
            <div className="font-medium">${basePrice.toFixed(2)}</div>
          </div>
        </div>

        {/* Dial / Knob Area */}
        <div className="flex-1 flex flex-col items-center justify-center py-6">
          <div className="text-center mb-6">
            <h3 className="font-semibold text-zinc-300">Add a tip?</h3>
            <p className="text-sm text-zinc-500">Rotate to select tip amount</p>
          </div>

          <div 
            ref={dialRef}
            className="w-56 h-56 relative rounded-full mb-8 cursor-grab active:cursor-grabbing touch-none select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* Dial Background Ring */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none -rotate-90">
              {/* Background Track */}
              <circle 
                cx="112" cy="112" r="100" 
                fill="none" stroke="#27272a" strokeWidth="8" 
                strokeDasharray="628" 
                strokeDashoffset={(628 * 80) / 360} // Leave gap at bottom (80 degrees gap)
                className="transform origin-center rotate-[40deg]" 
              />
              {/* Fill Track */}
              <circle 
                cx="112" cy="112" r="100" 
                fill="none" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round"
                strokeDasharray="628" 
                strokeDashoffset={628 - (628 * (rotation - 40)) / 360}
                className="transform origin-center rotate-[40deg] transition-all duration-75" 
              />
            </svg>

            {/* The Knob itself */}
            <div 
              className="absolute inset-4 rounded-full bg-zinc-800 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.5)] border border-zinc-700/50 flex flex-col items-center justify-center transition-transform duration-75"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Indicator Dot */}
              <div className="absolute top-4 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
              
              {/* Inner content rotates in opposite direction to stay upright */}
              <div className="flex flex-col items-center" style={{ transform: `rotate(-${rotation}deg)` }}>
                <div className="text-4xl font-black tracking-tighter text-amber-500">
                  {tipPercentage}<span className="text-xl">%</span>
                </div>
                <div className="text-zinc-400 font-medium mt-1">
                  +${tipAmount.toFixed(2)}
                </div>
              </div>
            </div>
            
            {/* Quick adjust buttons (outside the knob but absolute) */}
            <button type="button" 
              onClick={(e) => { e.stopPropagation(); setTipPercentage(Math.max(0, tipPercentage - 1)); }}
              className="absolute bottom-2 left-4 w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-400 transition-colors z-10"
            >
              <Minus className="w-5 h-5" />
            </button>
            <button type="button" 
              onClick={(e) => { e.stopPropagation(); setTipPercentage(Math.min(30, tipPercentage + 1)); }}
              className="absolute bottom-2 right-4 w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-400 transition-colors z-10"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <form onSubmit={handlePay}>
          <button 
            type="submit" 
            disabled={isProcessing}
            className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-2xl font-black text-xl flex justify-between items-center px-6 transition-colors shadow-[0_0_30px_rgba(245,158,11,0.2)] disabled:opacity-70 disabled:hover:bg-amber-500"
          >
            <span>Pay</span>
            <div className="flex items-center gap-2">
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-amber-950/30 border-t-amber-950 rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>${total.toFixed(2)}</span>
                  <div className="w-8 h-8 bg-amber-950/10 rounded-full flex items-center justify-center ml-2">
                    <CreditCard className="w-4 h-4" />
                  </div>
                </>
              )}
            </div>
          </button>
        </form>

      </div>
    </div>
  );
}
