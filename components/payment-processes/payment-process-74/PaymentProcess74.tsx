"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, Zap } from "lucide-react";

export default function PaymentProcess74() {
  const TOTAL_AMOUNT = 2999.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  return (
    <div className="w-full min-h-[700px] bg-[#09090b] flex items-center justify-center font-mono p-6 text-cyan-400 overflow-hidden relative">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {!isSuccess ? (
        <div 
          className="max-w-md w-full bg-zinc-950/80 backdrop-blur-sm p-8 relative z-10 animate-in fade-in duration-300"
          style={{
            borderLeft: '4px solid #0ff',
            borderRight: '4px solid #f0f',
            boxShadow: '0 0 20px rgba(0,255,255,0.2), inset 0 0 20px rgba(255,0,255,0.1)',
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)'
          }}
        >
          
          <div className="flex justify-between items-center mb-8 border-b border-cyan-500/30 pb-4">
            <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-cyan-400 [text-shadow:0_0_10px_#0ff]">Netrunner Checkout</h2>
            <div className="text-[10px] bg-fuchsia-500 text-black font-bold px-2 py-1 uppercase tracking-widest [box-shadow:0_0_10px_#f0f]">Sys: SECURE</div>
          </div>

          <div className="bg-cyan-950/30 p-4 mb-8 border border-cyan-500/50 relative overflow-hidden group">
             {/* Glitch scanline */}
             <div className="absolute inset-0 bg-cyan-500/10 -translate-y-full group-hover:animate-[scan_2s_linear_infinite]"></div>
             
             <div className="flex justify-between items-center text-sm mb-2 text-cyan-300">
               <span className="uppercase">Sub_Total</span>
               <span>ED {TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="flex justify-between items-end pt-2 border-t border-cyan-500/30">
               <span className="font-bold text-fuchsia-400 uppercase tracking-widest">Total_Eddies</span>
               <span className="text-4xl font-black text-fuchsia-400 [text-shadow:0_0_15px_#f0f]">
                 {TOTAL_AMOUNT.toFixed(2)}
               </span>
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-cyan-500 font-bold">Cred_Chip Data</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-600" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                  required 
                  type="text" 
                  placeholder="XXXX-XXXX-XXXX-XXXX" 
                  className="w-full bg-zinc-950 border border-cyan-800 focus:border-cyan-400 pl-12 pr-4 py-3 text-cyan-100 focus:outline-none transition-colors font-mono tracking-widest text-sm placeholder:text-cyan-900 focus:[box-shadow:0_0_15px_rgba(0,255,255,0.3)]" 
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 relative">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                  required 
                  type="text" 
                  placeholder="MM/YY" 
                  className="w-full bg-zinc-950 border border-cyan-800 focus:border-cyan-400 px-4 py-3 text-cyan-100 focus:outline-none transition-colors font-mono tracking-widest text-center text-sm placeholder:text-cyan-900 focus:[box-shadow:0_0_15px_rgba(0,255,255,0.3)]" 
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
                />
              </div>
              <div className="w-1/2 relative">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                  required 
                  type="text" 
                  placeholder="CVV" 
                  className="w-full bg-zinc-950 border border-cyan-800 focus:border-cyan-400 px-4 py-3 text-cyan-100 focus:outline-none transition-colors font-mono tracking-widest text-center text-sm placeholder:text-cyan-900 focus:[box-shadow:0_0_15px_rgba(0,255,255,0.3)]" 
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-4 mt-6 bg-[#f0e68c] hover:bg-yellow-400 text-black font-black text-lg uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-50 relative group overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}
            >
              <div className="absolute inset-0 bg-fuchsia-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out -z-0"></div>
              <span className="relative z-10 flex items-center gap-2">
                {isProcessing ? (
                  <>Hacking Mainframe... <span className="animate-ping">_</span></>
                ) : (
                  <>Authorize Transfer <ArrowRight className="w-5 h-5" /></>
                )}
              </span>
            </button>
          </form>

        </div>
      ) : (
        <div 
          className="max-w-md w-full bg-zinc-950/80 backdrop-blur-md p-12 text-center relative z-10 animate-[glitch_0.3s_linear_infinite]"
          style={{
            border: '2px solid #0ff',
            boxShadow: '0 0 30px rgba(0,255,255,0.4)',
            clipPath: 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)'
          }}
        >
           <div className="w-24 h-24 bg-cyan-900/50 flex items-center justify-center mx-auto mb-6 border-2 border-cyan-400 [box-shadow:0_0_15px_#0ff]">
             <Zap className="w-12 h-12 text-cyan-400" strokeWidth={2} />
           </div>

           <h2 className="text-3xl font-black uppercase tracking-[0.2em] text-cyan-400 mb-2 [text-shadow:0_0_10px_#0ff]">Transfer_Complete</h2>
           <p className="text-cyan-600 mb-8 font-bold uppercase tracking-widest text-sm">Eddies successfully extracted.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-4 bg-transparent border-2 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-black font-black uppercase tracking-widest transition-all [box-shadow:0_0_10px_rgba(255,0,255,0.5)]"
            >
              Disconnect
            </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes glitch {
          0% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 2px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(40% 0 40% 0); transform: translate(2px, 2px); }
          60% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, -2px); }
          80% { clip-path: inset(60% 0 20% 0); transform: translate(2px, 2px); }
          100% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, -2px); }
        }
        .animate-\\[glitch_0\\.3s_linear_infinite\\] {
          animation: glitch 0.3s linear; /* Only run once or it's too annoying, let's make it not infinite */
          animation-iteration-count: 3;
        }
      `}} />
    </div>
  );
}
