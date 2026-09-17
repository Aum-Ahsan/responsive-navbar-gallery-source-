"use client";
import React, { useState, useEffect } from "react";
import { CreditCard, Printer, ArrowRight } from "lucide-react";

export default function PaymentProcess26() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [printedLines, setPrintedLines] = useState<string[]>([]);
  const [isPrintingDone, setIsPrintingDone] = useState(false);

  const receiptLines = [
    "********************************",
    "        CAFE BISTRO 24/7        ",
    "      123 Developer Lane        ",
    "      Silicon Valley, CA        ",
    "********************************",
    `DATE: ${new Date().toLocaleDateString()} TIME: ${new Date().toLocaleTimeString()}`,
    "TRANS: #09348234",
    "SERVER: JANE D.",
    "--------------------------------",
    "1x ESPRESSO                $3.50",
    "2x AVOCADO TOAST          $18.00",
    "1x BLUEBERRY MUFFIN        $4.00",
    "--------------------------------",
    "SUBTOTAL                  $25.50",
    "TAX (8.5%)                 $2.17",
    "TIP                        $5.00",
    "--------------------------------",
    "TOTAL                     $32.67",
    "--------------------------------",
    "PAID VIA: VISA ENDING IN 4242",
    "AUTH CODE: 987654",
    " ",
    "      THANK YOU FOR YOUR        ",
    "          BUSINESS!             ",
    "********************************"
  ];

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  // Printing effect
  useEffect(() => {
    if (!isSuccess) return;

    let currentIndex = 0;
    setPrintedLines([]);
    setIsPrintingDone(false);

    const printInterval = setInterval(() => {
      setPrintedLines(prev => [...prev, receiptLines[currentIndex]]);
      currentIndex++;

      if (currentIndex === receiptLines.length) {
        clearInterval(printInterval);
        setIsPrintingDone(true);
      }
    }, 150); // 150ms per line

    return () => clearInterval(printInterval);
  }, [isSuccess]);

  return (
    <div className="w-full min-h-screen bg-stone-900 flex items-center justify-center font-sans p-6 text-stone-100 selection:bg-amber-500/30">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-stone-800 p-10 rounded-[2rem] shadow-2xl border border-stone-700 animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
            <div className="bg-stone-700 text-stone-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Total: $32.67
            </div>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Name on Card</label>
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="John Doe" className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Expiry</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono" />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">CVV</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="123" className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-4 mt-4 bg-amber-500 text-stone-900 rounded-xl font-bold text-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-5 h-5 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin"></div>
              ) : (
                <>Pay Now <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-md w-full animate-in zoom-in-95 duration-500 flex flex-col items-center">
          
          {/* Printer top slot */}
          <div className="w-64 h-8 bg-stone-800 rounded-t-xl border-x border-t border-stone-700 relative z-20 flex items-center justify-center shadow-lg">
             <div className="w-48 h-1 bg-black/50 rounded-full"></div>
             <Printer className="absolute right-4 w-4 h-4 text-stone-500 animate-pulse" />
          </div>

          {/* Receipt Paper */}
          <div className="w-64 bg-amber-50 rounded-b shadow-2xl relative z-10 overflow-hidden transform transition-all ease-linear" style={{ minHeight: '100px' }}>
            
            {/* Sawtooth edge at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-stone-900" style={{
              maskImage: 'linear-gradient(to right, transparent 50%, black 50%), linear-gradient(to right, black 50%, transparent 50%)',
              maskSize: '10px 10px',
              maskRepeat: 'repeat-x',
              WebkitMaskImage: 'radial-gradient(circle at 5px 5px, transparent 5px, black 6px)',
              WebkitMaskSize: '10px 10px',
              WebkitMaskRepeat: 'repeat-x',
              WebkitMaskPosition: 'bottom'
            }}></div>

            {/* Jagged bottom edge using CSS borders */}
            <div className="absolute bottom-0 w-full h-2 flex">
              {[...Array(32)].map((_, i) => (
                <div key={i} className="flex-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-stone-900"></div>
              ))}
            </div>

            <div className="p-6 pb-12 font-mono text-xs leading-relaxed text-slate-800 whitespace-pre">
              {printedLines.map((line, index) => (
                <div key={index} className="animate-in fade-in slide-in-from-top-1 duration-75">
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Action button appears when printing is done */}
          <div className={`mt-10 transition-all duration-500 ${isPrintingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <button type="button" 
              onClick={() => { setIsSuccess(false); setPrintedLines([]); }}
              className="px-8 py-3 bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold rounded-full transition-colors"
            >
              Start New Order
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
