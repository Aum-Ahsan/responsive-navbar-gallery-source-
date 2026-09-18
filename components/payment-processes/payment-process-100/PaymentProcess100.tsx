"use client";
import React, { useState, useEffect, useRef } from "react";
import { CreditCard, ScanLine, Fingerprint, Lock, ShieldAlert, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export default function PaymentProcess100() {
  const TOTAL_AMOUNT = 999.99;
  
  const [step, setStep] = useState(0); // 0: Start, 1: Enter Details, 2: Swipe/Auth, 3: Success
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  
  const [cardNo, setCardNo] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderValue, setSliderValue] = useState(0);

  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toISOString().split('T')[1].slice(0,-1)}] ${msg}`].slice(-8));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (step === 2 && sliderValue >= 99 && !isProcessing) {
      setIsProcessing(true);
      addLog("SWIPE DETECTED. AUTHORIZING...");
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
        addLog("AUTHORIZATION COMPLETE. SUCCESS.");
      }, 3000);
    }
  }, [sliderValue, step, isProcessing]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value));
  };

  const handleSliderRelease = () => {
    if (sliderValue < 99) setSliderValue(0);
  };

  const rotateY = (mousePos.x - 0.5) * 40; 
  const rotateX = (0.5 - mousePos.y) * 40;

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[800px] bg-black flex items-center justify-center font-sans p-4 md:p-8 text-white overflow-hidden relative perspective-[1200px]"
    >
      
      {/* Universal Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1)_0%,rgba(0,0,0,1)_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>

      {/* Side Terminal Logs (Desktop Only) */}
      <div className="absolute left-8 top-8 bottom-8 w-64 hidden xl:flex flex-col opacity-70">
        <h3 className="text-fuchsia-500 font-mono text-xs font-bold tracking-[0.2em] mb-4 border-b border-fuchsia-500/30 pb-2">SYS_LOGS // PROTOCOL_100</h3>
        <div className="flex-1 font-mono text-[10px] text-fuchsia-300/70 space-y-2 overflow-y-auto pr-2">
          {logs.map((l, i) => <div key={i} className="animate-in fade-in">{l}</div>)}
        </div>
      </div>

      {step === 0 && (
        <div className="relative z-10 flex flex-col items-center animate-in zoom-in duration-700">
          <div className="w-32 h-32 mb-8 relative flex items-center justify-center group cursor-pointer" 
               onClick={() => { setStep(1); addLog("INITIATING CHECKOUT PROTOCOL."); }}>
            <div className="absolute inset-0 bg-fuchsia-600 rounded-full blur-[30px] opacity-50 group-hover:opacity-100 group-hover:blur-[50px] transition-all duration-500 animate-pulse"></div>
            <div className="w-24 h-24 bg-black border-2 border-fuchsia-500 rounded-full flex items-center justify-center relative z-10">
              <Cpu className="w-10 h-10 text-fuchsia-400 group-hover:rotate-180 transition-transform duration-1000" />
            </div>
            {/* Orbital ring */}
            <div className="absolute w-40 h-40 border border-fuchsia-500/30 rounded-full animate-[spin_4s_linear_infinite]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_10px_#d946ef]"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600 mb-4 [text-shadow:0_0_20px_rgba(217,70,239,0.5)]">
            ULTIMA PAY
          </h1>
          <p className="text-fuchsia-300/70 tracking-widest uppercase text-sm font-bold">Total: ${TOTAL_AMOUNT.toFixed(2)}</p>
        </div>
      )}

      {step === 1 && (
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 relative z-10 items-center">
          
          {/* Left: 3D Interactive Card */}
          <div className="flex justify-center preserve-3d" style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
            <div className="w-[380px] h-[240px] rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-black/80 to-fuchsia-950/80 border border-fuchsia-500/30 shadow-[0_0_50px_rgba(217,70,239,0.2)] backdrop-blur-xl group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
              
              <div className="flex justify-between items-start mb-12">
                <ScanLine className="w-8 h-8 text-fuchsia-400" />
                <CreditCard className="w-6 h-6 text-fuchsia-600/50" />
              </div>
              
              <div className="text-2xl font-mono tracking-[0.2em] text-white mb-6 [text-shadow:0_0_10px_#fff]">
                {cardNo || '•••• •••• •••• ••••'}
              </div>
              
              <div className="flex justify-between text-fuchsia-300 font-mono text-sm uppercase tracking-widest">
                <div>
                  <div className="text-[10px] text-fuchsia-600 mb-1">VALID THRU</div>
                  {exp || 'MM/YY'}
                </div>
                <div>
                  <div className="text-[10px] text-fuchsia-600 mb-1">CVC</div>
                  {cvv || '•••'}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 to-transparent pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-fuchsia-500" /> 
              Enter Credentials
            </h2>

            <div className="space-y-6">
              <div className="space-y-2 relative">
                <label className="text-xs uppercase tracking-widest text-fuchsia-500/80">Card Number</label>
                <input required 
                  type="text" 
                  value={cardNo}
                  onChange={(e) => setCardNo(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-fuchsia-500 focus:bg-fuchsia-500/10 transition-all font-mono tracking-widest text-sm text-white" 
                 minLength={2} maxLength={50} />
              </div>
              
              <div className="flex gap-4">
                <div className="space-y-2 relative w-1/2">
                  <label className="text-xs uppercase tracking-widest text-fuchsia-500/80">Expiry</label>
                  <input required 
                    type="text" 
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-fuchsia-500 focus:bg-fuchsia-500/10 transition-all font-mono tracking-widest text-center text-sm text-white" 
                   minLength={2} maxLength={50} />
                </div>
                <div className="space-y-2 relative w-1/2">
                  <label className="text-xs uppercase tracking-widest text-fuchsia-500/80">CVC</label>
                  <input required 
                    type="text" 
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-fuchsia-500 focus:bg-fuchsia-500/10 transition-all font-mono tracking-widest text-center text-sm text-white" 
                   minLength={3} maxLength={4} />
                </div>
              </div>

              <div className="pt-4">
                <button type="button" 
                  onClick={(e) => {
                    const inputs = Array.from((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
                    let isValid = true;
                    for (const input of inputs) {
                      if (!input.checkValidity()) {
                        input.reportValidity();
                        isValid = false;
                        break;
                      }
                    }
                    if (!isValid) return;
                    if (cardNo && exp && cvv) {
                      setStep(2);
                      addLog("CREDENTIALS ACCEPTED. PROCEEDING TO FINAL AUTH.");
                    } else {
                      addLog("ERROR: INCOMPLETE CREDENTIALS.");
                    }
                  }}
                  className="w-full py-4 bg-white text-black rounded-xl font-black uppercase tracking-[0.2em] hover:bg-fuchsia-400 transition-colors"
                >
                  Confirm Identity
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-md w-full flex flex-col items-center relative z-10 animate-in fade-in zoom-in duration-500">
          
          <div className="mb-12 text-center">
            <Fingerprint className="w-20 h-20 text-fuchsia-500 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-2 [text-shadow:0_0_15px_rgba(217,70,239,0.5)]">Final Auth</h2>
            <p className="text-fuchsia-200/60 font-mono text-sm">Swipe to authorize transfer of ${TOTAL_AMOUNT.toFixed(2)}</p>
          </div>

          <div className="relative w-full h-20 bg-white/5 rounded-full border border-white/10 overflow-hidden backdrop-blur-xl flex items-center p-2">
            
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 font-bold uppercase tracking-[0.3em]">
              {isProcessing ? 'Authorizing...' : 'Swipe to Pay'}
            </div>
            
            {/* Progress Fill */}
            <div className="absolute top-0 bottom-0 left-0 bg-fuchsia-600/30 transition-none" style={{ width: `${sliderValue}%` }}></div>

            {!isProcessing ? (
              <>
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required 
                  type="range" 
                  min="0" max="100" 
                  value={sliderValue}
                  onChange={handleSliderChange}
                  onMouseUp={handleSliderRelease}
                  onTouchEnd={handleSliderRelease}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing z-20"  minLength={2} maxLength={50} />
                
                {/* Thumb */}
                <div 
                  className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)] pointer-events-none z-10 transition-none"
                  style={{ left: `calc(${sliderValue}% - ${sliderValue * 0.64}px)` }} // Complex calc to keep thumb inside bounds
                >
                  <Lock className="w-6 h-6 text-black" />
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-fuchsia-600 flex items-center justify-center z-30">
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-fuchsia-600 animate-in fade-in duration-500">
           
           {/* Crazy confetti particles simulated via CSS */}
           <div className="absolute inset-0 overflow-hidden pointer-events-none">
             {[...Array(50)].map((_, i) => (
               <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-confetti" 
                    style={{ 
                      left: `${Math.random() * 100}%`, 
                      top: `-10px`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${1 + Math.random() * 2}s` 
                    }}></div>
             ))}
           </div>

           <div className="text-center relative z-10 bg-black/20 p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl">
             <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(255,255,255,0.5)]">
               <CheckCircle2 className="w-16 h-16 text-fuchsia-600" strokeWidth={3} />
             </div>
             
             <h2 className="text-5xl font-black mb-4 uppercase tracking-[0.2em] [text-shadow:0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center gap-4">
               <Sparkles className="w-10 h-10" />
               Masterpiece Complete
               <Sparkles className="w-10 h-10" />
             </h2>
             <p className="text-xl font-bold opacity-90 tracking-widest uppercase">Thank you for witnessing the 100th Payment Process.</p>
             
             <button type="button" 
                onClick={() => { setStep(0); setCardNo(""); setExp(""); setCvv(""); setSliderValue(0); setLogs([]); }}
                className="mt-12 px-12 py-4 bg-black text-white font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300"
              >
                Start Over
              </button>
           </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-\\[1200px\\] { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti linear infinite;
        }
      `}} />
    </div>
  );
}
