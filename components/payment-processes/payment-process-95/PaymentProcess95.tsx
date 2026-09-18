"use client";
import React, { useState, useEffect } from "react";
import { Crosshair, Shield, Play } from "lucide-react";

type TargetState = { x: number; y: number; active: boolean; dx: number; dy: number };

export default function PaymentProcess95() {
  const TOTAL_AMOUNT = 25.00;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [score, setScore] = useState(0);

  // Card details state (initially empty)
  const [cardNo, setCardNo] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  // Targets for the arcade game
  const [t1, setT1] = useState<TargetState>({ x: 10, y: 10, active: true, dx: 1, dy: 1 });
  const [t2, setT2] = useState<TargetState>({ x: 50, y: 50, active: true, dx: -1, dy: 1.5 });
  const [t3, setT3] = useState<TargetState>({ x: 80, y: 20, active: true, dx: 1.2, dy: -1 });

  // Game Loop
  useEffect(() => {
    if (!isPlaying || isSuccess) return;

    const interval = setInterval(() => {
      const updateTarget = (t: TargetState) => {
        if (!t.active) return t;
        let nx = t.x + t.dx;
        let ny = t.y + t.dy;
        let ndx = t.dx;
        let ndy = t.dy;
        
        if (nx <= 0 || nx >= 90) ndx *= -1;
        if (ny <= 0 || ny >= 80) ndy *= -1;
        
        return { ...t, x: nx, y: ny, dx: ndx, dy: ndy };
      };

      setT1(prev => updateTarget(prev));
      setT2(prev => updateTarget(prev));
      setT3(prev => updateTarget(prev));

    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, isSuccess]);

  const hitTarget = (targetNum: 1 | 2 | 3) => {
    if (targetNum === 1 && t1.active) {
      setT1(prev => ({ ...prev, active: false }));
      setCardNo("4111 1111 1111 1111");
      setScore(s => s + 100);
    }
    if (targetNum === 2 && t2.active) {
      setT2(prev => ({ ...prev, active: false }));
      setExp("12/26");
      setScore(s => s + 100);
    }
    if (targetNum === 3 && t3.active) {
      setT3(prev => ({ ...prev, active: false }));
      setCvv("123");
      setScore(s => s + 100);
    }
  };

  const allHit = !t1.active && !t2.active && !t3.active;

  const handlePay = () => {
    if (!allHit) return;
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

  return (
    <div className="w-full min-h-[700px] bg-neutral-900 flex items-center justify-center font-mono p-4 md:p-6 text-white cursor-[crosshair] selection:bg-fuchsia-500 selection:text-white">
      
      {!isSuccess ? (
        <div className="max-w-2xl w-full bg-black rounded-xl p-6 border-4 border-fuchsia-500 shadow-[0_0_30px_#d946ef] relative overflow-hidden">
          
          {/* Scanlines overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] z-20"></div>

          <div className="flex justify-between items-center mb-6 border-b-4 border-fuchsia-900 pb-4 relative z-30">
            <div>
              <h2 className="text-xl md:text-3xl font-black text-fuchsia-500 uppercase tracking-widest [text-shadow:3px_3px_0_#4c1d95]">Secure Checkout</h2>
              <p className="text-xs text-fuchsia-300">Level 1: Authorize Payment</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-yellow-400">SCORE</p>
              <p className="text-2xl font-black text-yellow-500">{score.toString().padStart(6, '0')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-30">
            
            {/* Form Display */}
            <div className="bg-neutral-900 border-2 border-neutral-700 p-4 space-y-4 rounded-lg">
              <div className="flex justify-between text-emerald-400 mb-4 border-b border-emerald-900 pb-2">
                <span>TOTAL DUE</span>
                <span className="font-bold">${TOTAL_AMOUNT.toFixed(2)}</span>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] text-neutral-500">CARD NUMBER</label>
                <div className={`w-full h-10 border-2 flex items-center px-3 font-bold tracking-widest ${cardNo ? 'border-emerald-500 text-emerald-400' : 'border-neutral-700 text-neutral-700'}`}>
                  {cardNo || 'XXXX XXXX XXXX XXXX'}
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="space-y-1 w-1/2">
                  <label className="text-[10px] text-neutral-500">EXP</label>
                  <div className={`w-full h-10 border-2 flex items-center px-3 font-bold tracking-widest ${exp ? 'border-emerald-500 text-emerald-400' : 'border-neutral-700 text-neutral-700'}`}>
                    {exp || 'MM/YY'}
                  </div>
                </div>
                <div className="space-y-1 w-1/2">
                  <label className="text-[10px] text-neutral-500">CVV</label>
                  <div className={`w-full h-10 border-2 flex items-center px-3 font-bold tracking-widest ${cvv ? 'border-emerald-500 text-emerald-400' : 'border-neutral-700 text-neutral-700'}`}>
                    {cvv || '***'}
                  </div>
                </div>
              </div>
            </div>

            {/* Game Screen Area */}
            <div className="relative h-64 md:h-auto bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center border-4 border-blue-500 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/40 transition-colors"></div>
              
              {!isPlaying ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10">
                  <p className="text-yellow-400 mb-4 animate-pulse">SHOOT TARGETS TO AUTOFILL</p>
                  <button type="button" 
                    onClick={() => setIsPlaying(true)}
                    className="px-6 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black flex items-center gap-2 border-2 border-fuchsia-300"
                  >
                    <Play className="w-5 h-5 fill-white" /> START
                  </button>
                </div>
              ) : (
                <>
                  {t1.active && (
                    <button type="button" 
                      onClick={() => hitTarget(1)}
                      className="absolute w-12 h-12 bg-red-500 rounded-full border-4 border-white shadow-[0_0_15px_#ef4444] flex items-center justify-center animate-bounce hover:scale-110 active:scale-90"
                      style={{ left: `${t1.x}%`, top: `${t1.y}%` }}
                    >
                      <Crosshair className="w-6 h-6 text-white" />
                    </button>
                  )}
                  {t2.active && (
                    <button type="button" 
                      onClick={() => hitTarget(2)}
                      className="absolute w-12 h-12 bg-yellow-500 rounded-full border-4 border-white shadow-[0_0_15px_#eab308] flex items-center justify-center animate-pulse hover:scale-110 active:scale-90"
                      style={{ left: `${t2.x}%`, top: `${t2.y}%` }}
                    >
                      <Crosshair className="w-6 h-6 text-white" />
                    </button>
                  )}
                  {t3.active && (
                    <button type="button" 
                      onClick={() => hitTarget(3)}
                      className="absolute w-12 h-12 bg-green-500 rounded-full border-4 border-white shadow-[0_0_15px_#22c55e] flex items-center justify-center hover:scale-110 active:scale-90"
                      style={{ left: `${t3.x}%`, top: `${t3.y}%` }}
                    >
                      <Crosshair className="w-6 h-6 text-white" />
                    </button>
                  )}
                  
                  {allHit && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
                      <p className="text-2xl font-black text-emerald-400 animate-bounce [text-shadow:0_0_10px_#34d399]">CARD LOADED!</p>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>

          <div className="mt-6 relative z-30">
            <button type="button" 
              onClick={handlePay}
              disabled={!allHit || isProcessing}
              className={`
                w-full py-4 text-2xl font-black uppercase tracking-[0.2em] transition-all border-4 shadow-lg
                ${!allHit 
                  ? 'bg-neutral-800 text-neutral-600 border-neutral-700 opacity-50 cursor-not-allowed' 
                  : isProcessing 
                    ? 'bg-yellow-500 text-black border-yellow-300 cursor-wait'
                    : 'bg-emerald-500 text-black border-emerald-300 hover:bg-emerald-400 active:translate-y-1 active:shadow-none animate-pulse'
                }
              `}
            >
              {isProcessing ? 'PROCESSING...' : 'AUTHORIZE'}
            </button>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-black rounded-xl p-12 text-center border-4 border-emerald-500 shadow-[0_0_30px_#10b981] relative z-30 animate-in zoom-in duration-500">
           
           <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] z-20"></div>

           <Shield className="w-20 h-20 text-emerald-500 mx-auto mb-6 drop-shadow-[0_0_15px_#34d399]" />
           
           <h2 className="text-4xl font-black mb-2 text-emerald-400 [text-shadow:2px_2px_0_#065f46]">YOU WIN!</h2>
           <p className="text-emerald-600 mb-8 font-bold tracking-widest">Payment Accepted</p>
           
           <p className="text-yellow-400 mb-8 font-bold">FINAL SCORE: {score}</p>
           
           <button type="button" 
              onClick={() => { 
                setIsSuccess(false); 
                setIsPlaying(false);
                setScore(0);
                setCardNo(""); setExp(""); setCvv("");
                setT1({ x: 10, y: 10, active: true, dx: 1, dy: 1 });
                setT2({ x: 50, y: 50, active: true, dx: -1, dy: 1.5 });
                setT3({ x: 80, y: 20, active: true, dx: 1.2, dy: -1 });
              }}
              className="w-full py-4 bg-transparent border-4 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-900 font-black tracking-widest uppercase transition-colors"
            >
              INSERT COIN (RESTART)
            </button>
        </div>
      )}

    </div>
  );
}
