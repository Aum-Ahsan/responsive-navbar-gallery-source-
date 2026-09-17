"use client";
import React, { useState, useRef } from "react";
import { CreditCard, Lock, ArrowRight, Check } from "lucide-react";

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  color: string;
  size: number;
  rotation: number;
}

export default function PaymentProcess38() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const colors = ['#fbbf24', '#f87171', '#60a5fa', '#34d399', '#a78bfa', '#f472b6'];

  const triggerButtonConfetti = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || isProcessing || isSuccess) return;

    // Get click coordinates relative to the button
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles: ConfettiParticle[] = [];
    
    // Generate 30 particles
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 20 + Math.random() * 80; // Fly out between 20px and 100px
      
      newParticles.push({
        id: Date.now() + i, // Unique ID
        x,
        y,
        tx: Math.cos(angle) * velocity,
        ty: Math.sin(angle) * velocity,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 5,
        rotation: Math.random() * 360,
      });
    }

    setParticles(newParticles);

    // Clean up particles after animation
    setTimeout(() => setParticles([]), 800);
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
    <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {/* Global CSS for the internal button confetti */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes btn-confetti {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(0);
            opacity: 0;
          }
        }
        .animate-btn-confetti {
          animation: btn-confetti 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}} />

      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        
        {!isSuccess ? (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Payment Info</h2>

            <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total</div>
                <div className="text-2xl font-black text-slate-900">$29.99</div>
              </div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-slate-400" />
              </div>
            </div>

            <form onSubmit={handlePay} className="space-y-4">
              
              <div className="space-y-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                  required 
                  type="text" 
                 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm" 
                />
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                    required 
                    type="text" 
                   
                    placeholder="MM/YY" 
                    className="w-1/2 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" 
                  />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                    required 
                    type="text" 
                   
                    placeholder="CVV" 
                    className="w-1/2 bg-white border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" 
                  />
                </div>
              </div>

              <div className="pt-4">
                {/* 
                  The Confetti Button 
                  overflow-hidden is critical here so particles stay inside!
                */}
                <button 
                  ref={buttonRef}
                  type="submit" 
                  onClick={triggerButtonConfetti}
                  disabled={isProcessing}
                  className="relative w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30 overflow-hidden group disabled:opacity-70 disabled:shadow-none"
                >
                  
                  {/* Confetti Particles */}
                  {particles.map(p => (
                    <div 
                      key={p.id}
                      className="absolute rounded-full animate-btn-confetti pointer-events-none z-0"
                      style={{
                        left: p.x - p.size/2,
                        top: p.y - p.size/2,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        '--tx': `${p.tx}px`,
                        '--ty': `${p.ty}px`,
                        '--rot': `${p.rotation}deg`
                      } as React.CSSProperties}
                    ></div>
                  ))}

                  {/* Button Content (needs relative z-10 so it stays above confetti) */}
                  <div className="relative z-10 flex items-center gap-2">
                    {isProcessing ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Pay Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 mt-2">
                <Lock className="w-3 h-3" /> Secure Payment
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Success!</h3>
            <p className="text-slate-500 mb-8 font-medium">Your payment went through perfectly.</p>
            <button type="button" 
              onClick={() => setIsSuccess(false)}
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Start Over
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
