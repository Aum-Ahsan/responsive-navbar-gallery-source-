"use client";
import React, { useState, useRef, useEffect } from "react";
import { CreditCard, ShieldCheck, ChevronRight, Check, X, Smartphone } from "lucide-react";

export default function PaymentProcess12() {
  const [swipeProgress, setSwipeProgress] = useState(0); // 0 to 1
  const [isSwiping, setIsSwiping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  
  const SWIPE_THRESHOLD = 0.95; // 95% to trigger payment

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isProcessing || isSuccess) return;
    setIsSwiping(true);
    // Capture pointer so dragging works even if cursor leaves the thumb
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isSwiping || !trackRef.current || !thumbRef.current || isProcessing || isSuccess) return;
    
    const trackRect = trackRef.current.getBoundingClientRect();
    const thumbRect = thumbRef.current.getBoundingClientRect();
    
    const maxSwipe = trackRect.width - thumbRect.width - 8; // 8 for padding/margin
    const newX = e.clientX - trackRect.left - (thumbRect.width / 2);
    
    // Clamp between 0 and maxSwipe
    const clampedX = Math.max(0, Math.min(newX, maxSwipe));
    const progress = clampedX / maxSwipe;
    
    setSwipeProgress(progress);
    
    if (progress >= SWIPE_THRESHOLD) {
      // Trigger payment
      setIsSwiping(false);
      setSwipeProgress(1);
      processPayment();
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isProcessing || isSuccess) return;
    setIsSwiping(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    if (swipeProgress < SWIPE_THRESHOLD) {
      // Snap back if not fully swiped
      setSwipeProgress(0);
    }
  };

  const processPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const reset = () => {
    setIsSuccess(false);
    setSwipeProgress(0);
  };

  return (
    <div className="w-full min-h-screen bg-neutral-900 flex items-center justify-center font-sans p-6">
      
      {/* Mobile Device Frame Simulation */}
      <div className="w-full max-w-[375px] h-[812px] max-h-[90vh] bg-black rounded-[3rem] p-3 shadow-2xl relative border-[8px] border-neutral-800 flex flex-col overflow-hidden">
        
        {/* Top Notch Area */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
          <div className="w-40 h-6 bg-neutral-800 rounded-b-2xl"></div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
          
          {/* Header */}
          <div className="pt-14 pb-6 px-6 bg-blue-600 text-white flex justify-between items-center rounded-b-3xl shadow-md z-10 relative">
            <h1 className="font-bold text-lg">Send Money</h1>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-6 py-8 flex flex-col items-center">
            
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden border-4 border-white shadow-lg z-20 -mt-16">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            
            <h2 className="text-2xl font-bold text-neutral-900">Sarah Jenkins</h2>
            <p className="text-neutral-500 font-medium mb-8">Dinner bill split</p>

            <div className="text-center mb-10">
              <span className="text-3xl text-neutral-400 font-medium align-top mr-1">$</span>
              <span className="text-6xl font-black text-neutral-900 tracking-tighter">142.50</span>
            </div>

            <div className="w-full bg-neutral-50 rounded-2xl p-4 border border-neutral-200 mb-auto">
              <div className="flex justify-between items-center text-sm font-medium">
                <div className="flex items-center gap-3 text-neutral-700">
                  <div className="w-8 h-8 bg-neutral-900 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-xs">VISA</span>
                  </div>
                  •••• 4242
                </div>
                <button type="button" className="text-blue-600">Change</button>
              </div>
            </div>

          </div>

          {/* Bottom Swipe Area */}
          <div className="p-6 bg-white relative z-20 pb-10">
            
            {!isSuccess ? (
              <div 
                ref={trackRef}
                className="w-full h-16 bg-neutral-100 rounded-full relative overflow-hidden shadow-inner border border-neutral-200"
              >
                {/* Background text (fades out as swipe happens) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center font-bold text-neutral-400 pointer-events-none transition-opacity"
                  style={{ opacity: 1 - swipeProgress * 1.5 }}
                >
                  Swipe to pay
                </div>

                {/* Progress Track Fill */}
                <div 
                  className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-75"
                  style={{ width: `calc(${swipeProgress * 100}% + 4rem)` }}
                ></div>

                {/* Draggable Thumb */}
                <div 
                  ref={thumbRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  className={`absolute top-1 bottom-1 w-14 bg-white rounded-full shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform ${isSwiping ? 'duration-0' : 'duration-300'}`}
                  style={{ 
                    transform: `translateX(${swipeProgress * (trackRef.current?.offsetWidth ? trackRef.current.offsetWidth - 64 : 0)}px)`,
                    left: '4px'
                  }}
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <ChevronRight className="w-6 h-6 text-blue-600" />
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full h-16 bg-green-500 rounded-full flex items-center justify-center animate-in zoom-in-95 duration-500 shadow-lg shadow-green-500/30 text-white font-bold gap-2 cursor-pointer hover:bg-green-600 transition-colors" onClick={reset}>
                <Check className="w-6 h-6" /> Payment Sent!
              </div>
            )}
            
            <div className="flex items-center justify-center gap-1.5 mt-6 text-xs font-semibold text-neutral-400">
              <ShieldCheck className="w-4 h-4" /> Secure 256-bit encryption
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
