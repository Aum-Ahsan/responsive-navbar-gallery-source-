"use client";
import React, { useState, useEffect } from "react";
import { PartyPopper, CreditCard, Lock, ArrowRight } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  shape: 'rect' | 'circle' | 'triangle';
  delay: number;
}

export default function PaymentProcess23() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateConfetti = () => {
    const colors = ['#f43f5e', '#ec4899', '#d946ef', '#8b5cf6', '#3b82f6', '#0ea5e9', '#10b981', '#f59e0b', '#f97316'];
    const shapes: ('rect' | 'circle' | 'triangle')[] = ['rect', 'circle', 'rect']; // More rects
    
    const newParticles: Particle[] = [];
    for (let i = 0; i < 150; i++) {
      // Random target positions spanning the whole screen
      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 500; // how far they fly
      
      newParticles.push({
        id: i,
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity - 200, // bias upwards slightly for gravity effect later
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 15,
        rotation: Math.random() * 720,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        delay: Math.random() * 0.2, // slight staggered start
      });
    }
    setParticles(newParticles);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      generateConfetti();
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center font-sans p-6 relative overflow-hidden">
      
      {/* Confetti Canvas */}
      {isSuccess && (
        <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className={`absolute animate-confetti`}
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.shape !== 'triangle' ? p.color : 'transparent',
                borderRadius: p.shape === 'circle' ? '50%' : '0',
                borderLeft: p.shape === 'triangle' ? `${p.size / 2}px solid transparent` : 'none',
                borderRight: p.shape === 'triangle' ? `${p.size / 2}px solid transparent` : 'none',
                borderBottom: p.shape === 'triangle' ? `${p.size}px solid ${p.color}` : 'none',
                // Custom CSS variables for the animation keyframes to use
                '--end-x': `${p.x}px`,
                '--end-y': `${p.y}px`,
                '--rotation': `${p.rotation}deg`,
                animationDelay: `${p.delay}s`
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
      )}

      {/* Global CSS for the confetti animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes confetti-explosion {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--end-x), calc(var(--end-y) + 300px)) rotate(var(--rotation));
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti-explosion 3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}} />

      <div className="max-w-md w-full relative z-10">
        {!isSuccess ? (
          <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100">
            <h1 className="text-2xl font-black text-slate-900 mb-8 text-center">Complete Purchase</h1>
            
            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 text-center">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Total Amount</div>
              <div className="text-5xl font-black text-slate-900 tracking-tighter">$1,299.00</div>
            </div>

            <form onSubmit={handlePay} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"  minLength={16} />
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Expiry</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"  minLength={5} />
                </div>
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">CVV</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="123" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"  minLength={2} maxLength={50} />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full mt-4 py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/30 disabled:opacity-70 disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Confirm Payment <ArrowRight className="w-5 h-5" /></>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                <Lock className="w-3 h-3" /> Secure 256-bit SSL encryption
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] p-10 shadow-2xl border border-slate-100 text-center animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <PartyPopper className="w-12 h-12 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Woohoo!</h2>
            <p className="text-slate-500 font-medium mb-8">Your payment was successful and your order is on the way.</p>
            <button type="button" 
              onClick={() => { setIsSuccess(false); setParticles([]); }}
              className="px-8 py-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              Back to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
