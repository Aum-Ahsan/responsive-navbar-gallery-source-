"use client";
import React, { useState, useEffect } from "react";

export default function PaymentProcess78() {
  const TOTAL_AMOUNT = 1337.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const bootSequence = [
      "INIT SECURE SHELL...",
      "CONNECTING TO PAYMENT GATEWAY [OK]",
      "ESTABLISHING ENCRYPTED TUNNEL [OK]",
      "HANDSHAKE COMPLETE.",
      "AWAITING INPUT..."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      setLog(prev => [...prev, bootSequence[i]]);
      i++;
      if (i === bootSequence.length) {
        clearInterval(interval);
        setBooted(true);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    const processingSequence = [
      "> ./execute_payment.sh",
      "VALIDATING PAN...",
      "AUTHORIZING...",
      "TRANSACTION APPROVED.",
      "EXITING."
    ];

    let i = 0;
    setLog(prev => [...prev, processingSequence[0]]);
    
    const interval = setInterval(() => {
      i++;
      if (i < processingSequence.length) {
        setLog(prev => [...prev, processingSequence[i]]);
      }
      if (i === processingSequence.length) {
        clearInterval(interval);
        setIsProcessing(false);
        setIsSuccess(true);
      }
    }, 600);
  };

  return (
    <div className="w-full min-h-[700px] bg-black flex items-center justify-center font-mono p-6 text-green-500 selection:bg-green-500 selection:text-black">
      
      <div className="max-w-2xl w-full h-full flex flex-col relative z-10 p-4 border border-green-900 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
        
        {/* Terminal Header */}
        <div className="border-b border-green-900 pb-2 mb-4 flex justify-between text-xs opacity-70">
          <span>user@sys:~</span>
          <span>bash 5.1.16</span>
        </div>

        {/* Boot Log */}
        <div className="mb-8 space-y-1 text-sm">
          {log.map((line, idx) => (
            <div key={idx} className="animate-in fade-in duration-300">
              {line}
            </div>
          ))}
          {!isProcessing && !isSuccess && booted && (
            <div className="animate-pulse">_</div>
          )}
        </div>

        {!isSuccess && booted && !isProcessing && (
          <form onSubmit={handlePay} className="space-y-6 mt-auto">
            
            <div className="space-y-1">
              <label className="text-sm">root@pay:~$ cat ./total_due</label>
              <div className="text-xl font-bold">${TOTAL_AMOUNT.toFixed(2)}</div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm">root@pay:~$ enter_pan</label>
              <div className="flex items-center">
                <span className="mr-2">&gt;</span>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                  required 
                  type="text" 
                  placeholder="XXXX XXXX XXXX XXXX" 
                  className="w-full bg-transparent border-b border-green-900 text-green-500 focus:outline-none focus:border-green-400 transition-colors font-mono placeholder:text-green-900" 
                 minLength={16} />
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="space-y-1 w-1/2">
                <label className="text-sm">root@pay:~$ enter_exp</label>
                <div className="flex items-center">
                  <span className="mr-2">&gt;</span>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                    required 
                    type="text" 
                    placeholder="MM/YY" 
                    className="w-full bg-transparent border-b border-green-900 text-green-500 focus:outline-none focus:border-green-400 transition-colors font-mono placeholder:text-green-900" 
                   minLength={5} />
                </div>
              </div>
              <div className="space-y-1 w-1/2">
                <label className="text-sm">root@pay:~$ enter_cvv</label>
                <div className="flex items-center">
                  <span className="mr-2">&gt;</span>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                    required 
                    type="text" 
                    placeholder="***" 
                    className="w-full bg-transparent border-b border-green-900 text-green-500 focus:outline-none focus:border-green-400 transition-colors font-mono placeholder:text-green-900" 
                   minLength={3} />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 mt-8 bg-green-950/30 border border-green-900 hover:bg-green-900 text-green-500 hover:text-black transition-all flex items-center justify-center gap-2 group"
            >
              <span>./execute_payment.sh</span>
              <span className="inline-block w-2 h-4 bg-green-500 group-hover:bg-black animate-pulse"></span>
            </button>
          </form>
        )}

        {isSuccess && (
          <div className="mt-8">
            <div className="border border-green-500 p-4 inline-block mb-8 shadow-[0_0_15px_rgba(0,255,0,0.2)]">
              <h2 className="text-2xl font-bold">SUCCESS</h2>
            </div>
            <p className="mb-8 opacity-70">FUNDS TRANSFERRED SUCCESSFULLY.</p>
            
            <button type="button" 
              onClick={() => { setIsSuccess(false); setLog(["INIT SECURE SHELL...", "READY."]); setBooted(true); }}
              className="px-4 py-2 bg-transparent border border-green-900 hover:bg-green-900 text-green-500 hover:text-black transition-all"
            >
              logout
            </button>
          </div>
        )}
        
        {/* Terminal Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] z-50 mix-blend-overlay opacity-30"></div>
      </div>
    </div>
  );
}
