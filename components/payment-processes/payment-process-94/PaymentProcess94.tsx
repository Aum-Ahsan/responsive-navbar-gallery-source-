"use client";
import React, { useState, useEffect, useRef } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Gift } from "lucide-react";

export default function PaymentProcess94() {
  const ORIGINAL_AMOUNT = 120.00;
  const DISCOUNTED_AMOUNT = 96.00; // 20% off
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill canvas with silver scratch-off color
    ctx.fillStyle = "#c0c0c0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some noise/texture to look like a scratch card
    for (let i = 0; i < 500; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? "#a0a0a0" : "#d3d3d3";
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
    
    // Add text
    ctx.fillStyle = "#555";
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SCRATCH TO REVEAL TOTAL", canvas.width / 2, canvas.height / 2 + 6);
  }, []);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    setScratchProgress(p => {
      const next = p + 1;
      if (next > 40 && !isScratched) {
        setIsScratched(true);
        // Fade out canvas
        canvas.style.transition = "opacity 0.5s ease";
        canvas.style.opacity = "0";
      }
      return next;
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    handleMouseMove(e);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || isScratched) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    scratch(x, y);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-amber-50 flex items-center justify-center font-sans p-6 text-amber-900">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-amber-200">
          
          <h2 className="text-2xl font-black mb-6 text-amber-950">Secure Checkout</h2>

          <form onSubmit={handlePay} className="space-y-4 mb-8">
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-amber-50/50 border border-amber-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-sm" />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-center text-sm" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-center text-sm" />
            </div>

            <div className="mt-8 bg-amber-100 rounded-2xl p-6 relative">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-amber-800">Your Total</span>
                <span className="text-sm line-through text-amber-600/50">${ORIGINAL_AMOUNT.toFixed(2)}</span>
              </div>
              
              {/* Scratch Off Area Container */}
              <div className="relative w-full h-24 rounded-xl overflow-hidden bg-white flex flex-col items-center justify-center border-2 border-dashed border-amber-300">
                {/* Revealed Content */}
                <div className="text-center z-0">
                  <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><Gift className="w-4 h-4" /> 20% Discount Applied!</p>
                  <p className="text-4xl font-black text-amber-950">${DISCOUNTED_AMOUNT.toFixed(2)}</p>
                </div>
                
                {/* Canvas Overlay */}
                <canvas 
                  ref={canvasRef}
                  width={350} // Fixed reasonable width
                  height={96} // h-24 is 96px
                  className="absolute inset-0 w-full h-full cursor-crosshair z-10 touch-none"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  onTouchStart={handleMouseDown}
                  onTouchEnd={handleMouseUp}
                  onTouchMove={handleMouseMove}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing || !isScratched}
              className="w-full py-5 mt-4 bg-amber-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : !isScratched ? (
                <>Scratch to Unlock Payment</>
              ) : (
                <>Pay ${DISCOUNTED_AMOUNT.toFixed(2)} <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
          
          <p className="text-center text-xs text-amber-600">
            A surprise discount is hiding in your cart!
          </p>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-xl border border-amber-200 animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black mb-2 text-amber-950">Payment Success</h2>
           <p className="text-amber-700 mb-8 font-medium">You saved ${(ORIGINAL_AMOUNT - DISCOUNTED_AMOUNT).toFixed(2)} today!</p>
           <button type="button" 
              onClick={() => { 
                setIsSuccess(false); 
                setIsScratched(false);
                setScratchProgress(0);
                // The canvas will be redrawn by useEffect when re-mounted, but since we don't unmount it, we should ideally clear and redraw.
                // For simplicity, a full page reload or proper reset is needed if they go back.
                // We can force re-render of canvas by wrapping it or just accepting this is a demo.
                window.location.reload(); 
              }}
              className="w-full py-4 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
