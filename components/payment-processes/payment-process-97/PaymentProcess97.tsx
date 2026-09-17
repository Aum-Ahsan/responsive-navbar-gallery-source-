"use client";
import React, { useState, useEffect } from "react";
import { Mic, Check, X, ShieldCheck } from "lucide-react";

export default function PaymentProcess97() {
  const TOTAL_AMOUNT = 49.99;
  
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [transcript, setTranscript] = useState("Tap the microphone to authorize payment.");
  
  useEffect(() => {
    if (!isListening) return;

    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let timeout3: NodeJS.Timeout;

    // Simulate speech recognition
    timeout1 = setTimeout(() => {
      setTranscript("Listening...");
    }, 500);

    timeout2 = setTimeout(() => {
      setTranscript(`"Authorize payment of $${TOTAL_AMOUNT}..."`);
    }, 2000);

    timeout3 = setTimeout(() => {
      setIsListening(false);
      setIsProcessing(true);
      setTranscript("Voice print matched. Processing...");
      
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
        setTranscript("Payment successful.");
      }, 2000);
    }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [isListening, TOTAL_AMOUNT]);

  const handleMicClick = () => {
    if (isListening || isProcessing || isSuccess) return;
    setIsListening(true);
  };

  const reset = () => {
    setIsSuccess(false);
    setTranscript("Tap the microphone to authorize payment.");
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-950 flex flex-col items-center justify-center font-sans p-6 text-slate-100 overflow-hidden relative">
      
      {/* Background Blobs */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-1000 ${
        isListening ? 'bg-indigo-600/40 scale-150 animate-pulse' : 
        isProcessing ? 'bg-amber-500/40 scale-125 animate-spin' : 
        isSuccess ? 'bg-emerald-500/40 scale-150' : 
        'bg-blue-600/20 scale-100'
      }`}></div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
        
        {/* Order Details (Minimalist) */}
        {!isSuccess && (
          <div className="mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
            <h2 className="text-xl text-slate-400 mb-2">Total Due</h2>
            <div className="text-6xl font-black tracking-tighter">${TOTAL_AMOUNT.toFixed(2)}</div>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
              <ShieldCheck className="w-4 h-4" /> Secure Voice ID Active
            </div>
          </div>
        )}

        {/* Audio Wave Visualizer (Simulated) */}
        <div className="h-32 flex items-center justify-center gap-1 mb-12">
          {isListening ? (
            // Active waves
            [...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 bg-indigo-400 rounded-full animate-wave"
                style={{ 
                  height: `${Math.max(10, Math.random() * 100)}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`
                }}
              ></div>
            ))
          ) : isProcessing ? (
            // Processing spinner
            <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
          ) : isSuccess ? (
            // Success Check
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-[0_0_40px_rgba(16,185,129,0.5)]">
              <Check className="w-10 h-10 text-white" strokeWidth={3} />
            </div>
          ) : (
            // Idle state line
            <div className="w-64 h-0.5 bg-slate-800 rounded-full"></div>
          )}
        </div>

        {/* Transcript Text */}
        <div className={`text-xl md:text-2xl font-light h-16 transition-all duration-500 ${isListening ? 'text-indigo-200' : isProcessing ? 'text-amber-200' : isSuccess ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
          {transcript}
        </div>

        {/* Mic Button */}
        {!isSuccess && (
          <div className="mt-16">
            <button type="button" 
              onClick={handleMicClick}
              disabled={isListening || isProcessing}
              className={`
                w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl
                ${isListening 
                  ? 'bg-indigo-600 scale-90 shadow-[0_0_50px_rgba(79,70,229,0.6)] cursor-not-allowed' 
                  : isProcessing 
                    ? 'bg-slate-800 scale-50 opacity-0' 
                    : 'bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(37,99,235,0.4)]'
                }
              `}
            >
              <Mic className={`w-10 h-10 text-white ${isListening ? 'animate-pulse' : ''}`} />
            </button>
          </div>
        )}

        {isSuccess && (
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <button type="button" 
              onClick={reset}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors"
            >
              New Transaction
            </button>
          </div>
        )}

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave {
          0%, 100% { transform: scaleY(0.2); opacity: 0.5; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        .animate-wave {
          animation: wave ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
