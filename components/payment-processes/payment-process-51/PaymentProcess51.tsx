"use client";
import React, { useState, useEffect, useRef } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Ticket } from "lucide-react";

export default function PaymentProcess51() {
  const [baseTotal] = useState(120.00);
  const [discount, setDiscount] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill with a nice gradient or color
    ctx.fillStyle = '#1e293b'; // slate-800
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw pattern or text on top
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.fillStyle = '#cbd5e1'; // slate-300
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SCRATCH HERE', canvas.width / 2, canvas.height / 2);
    
    // Add some noise/texture (optional)
    for(let i = 0; i < 500; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.1})`;
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    scratch(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || isRevealed) return;
    scratch(e);
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
    checkReveal();
  };

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkReveal = () => {
    if (isRevealed) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++;
    }

    const totalPixels = canvas.width * canvas.height;
    const percentage = (transparentPixels / totalPixels) * 100;

    // If more than 40% is scratched, reveal it completely
    if (percentage > 40) {
      setIsRevealed(true);
      setDiscount(20); // Apply 20% discount
      // Clear the rest of the canvas with animation
      canvas.style.transition = 'opacity 0.5s ease';
      canvas.style.opacity = '0';
      setTimeout(() => {
        canvas.style.display = 'none';
      }, 500);
    }
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

  const finalTotal = baseTotal * (1 - discount / 100);

  return (
    <div className="w-full min-h-[700px] bg-indigo-950 flex items-center justify-center font-sans p-6 text-slate-100 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-600/20 blur-[100px] pointer-events-none"></div>

      {!isSuccess ? (
        <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500 relative z-10">
          
          <h2 className="text-2xl font-black text-white mb-2 text-center">Complete Purchase</h2>
          <p className="text-slate-400 text-sm text-center mb-8">Scratch the card to see if you won a discount!</p>

          {/* Gamified Scratch Card Area */}
          <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-inner bg-slate-800 flex items-center justify-center group">
            
            {/* The underlying revealed reward */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 transition-all duration-700 ${isRevealed ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <Ticket className="w-8 h-8 text-white/50 mb-1" />
              <div className="font-black text-3xl text-white drop-shadow-md">20% OFF</div>
              <div className="text-xs font-bold text-white/80 uppercase tracking-widest">Applied to order</div>
            </div>

            {/* The scratchable canvas overlay */}
            <canvas 
              ref={canvasRef}
              width={350} // Approximate max width
              height={128} // h-32 = 128px
              className={`absolute inset-0 w-full h-full cursor-pointer touch-none ${isRevealed ? 'pointer-events-none' : ''}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              style={{ borderRadius: '1rem' }}
            />
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 mb-8 border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-slate-400">Subtotal</span>
              <span className="font-bold text-white">${baseTotal.toFixed(2)}</span>
            </div>
            
            <div className={`flex justify-between items-center transition-all duration-500 overflow-hidden ${isRevealed ? 'max-h-10 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}>
              <span className="font-bold text-fuchsia-400">Discount (20%)</span>
              <span className="font-bold text-fuchsia-400">-${(baseTotal * 0.2).toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-white/10">
              <span className="font-bold text-slate-300">Total</span>
              <div className="text-right flex items-baseline gap-2">
                 {isRevealed && <span className="text-sm line-through text-slate-500">${baseTotal.toFixed(2)}</span>}
                 <span className="text-4xl font-black text-white">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-950 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
            </div>
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-950 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-950 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
            </div>

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-white text-indigo-950 rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-indigo-950/30 border-t-indigo-950 rounded-full animate-spin"></div>
              ) : (
                <>Pay ${finalTotal.toFixed(2)} <ArrowRight className="w-5 h-5" strokeWidth={3} /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-12 shadow-2xl border border-white/10 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-fuchsia-400" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Order Complete</h2>
           <p className="text-slate-400 mb-8 font-medium">Your payment of ${finalTotal.toFixed(2)} was processed successfully.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setIsRevealed(false); setDiscount(0); }}
              className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
