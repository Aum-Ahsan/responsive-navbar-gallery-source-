"use client";
import React, { useState, useEffect } from "react";
import { Mic, MicOff, Check, X, AudioLines } from "lucide-react";

export default function PaymentProcess20() {
  type VoiceState = 'idle' | 'listening' | 'recognizing' | 'confirming' | 'processing' | 'success' | 'error';
  const [state, setState] = useState<VoiceState>('idle');
  const [transcript, setTranscript] = useState("");
  const [dots, setDots] = useState("");

  // Simulated voice interaction flow
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (state === 'listening') {
      // Simulate listening for a few seconds
      timeoutId = setTimeout(() => {
        setState('recognizing');
      }, 3000);
    } else if (state === 'recognizing') {
      // Type out the transcript
      const text = "Pay $45.00 for groceries using Apple Pay.";
      let i = 0;
      setTranscript("");
      
      const typeInterval = setInterval(() => {
        setTranscript(prev => prev + text.charAt(i));
        i++;
        if (i === text.length) {
          clearInterval(typeInterval);
          setTimeout(() => setState('confirming'), 1000);
        }
      }, 50);
      
      return () => clearInterval(typeInterval);
    } else if (state === 'processing') {
      timeoutId = setTimeout(() => {
        setState('success');
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [state]);

  // Loading dots animation
  useEffect(() => {
    if (state !== 'listening' && state !== 'processing') return;
    
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);
    
    return () => clearInterval(interval);
  }, [state]);

  const toggleMic = () => {
    if (state === 'idle') {
      setTranscript("");
      setState('listening');
    } else if (state === 'listening') {
      setState('idle');
    }
  };

  const cancel = () => {
    setState('idle');
    setTranscript("");
  };

  const confirm = () => {
    setState('processing');
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center font-sans p-6 text-white overflow-hidden relative">
      
      {/* Dynamic Background Glow based on state */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-30 pointer-events-none transition-colors duration-1000"
        style={{
          backgroundColor: 
            state === 'listening' ? '#3b82f6' : 
            state === 'recognizing' ? '#a855f7' :
            state === 'confirming' ? '#eab308' :
            state === 'processing' ? '#06b6d4' :
            state === 'success' ? '#22c55e' : '#3f3f46' // idle
        }}
      ></div>

      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        
        {/* Transcript / Status Text */}
        <div className="h-40 flex flex-col justify-end items-center text-center w-full mb-12">
          {state === 'idle' && (
            <div className="text-zinc-400 text-lg font-medium animate-in fade-in zoom-in duration-500">
              Tap the microphone to pay via voice
            </div>
          )}
          
          {state === 'listening' && (
            <div className="text-blue-400 text-2xl font-light animate-in fade-in duration-300">
              Listening{dots}
            </div>
          )}
          
          {(state === 'recognizing' || state === 'confirming' || state === 'processing' || state === 'success') && (
            <div className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight max-w-[90%]">
              {transcript}
            </div>
          )}

          {state === 'confirming' && (
            <div className="text-yellow-400 font-medium mt-6 animate-in slide-in-from-bottom-4 fade-in duration-500">
              Would you like to confirm this payment?
            </div>
          )}
          
          {state === 'processing' && (
            <div className="text-cyan-400 font-medium mt-6 animate-in fade-in">
              Processing payment{dots}
            </div>
          )}

          {state === 'success' && (
            <div className="text-green-400 font-medium mt-6 flex items-center gap-2 animate-in slide-in-from-bottom-4 fade-in">
              <Check className="w-5 h-5" /> Payment Successful
            </div>
          )}
        </div>

        {/* The Action Area (Mic, Waves, Buttons) */}
        <div className="relative h-40 w-full flex items-center justify-center">
          
          {/* Audio Waves Animation (Visible when listening or processing) */}
          <div className={`absolute inset-0 flex items-center justify-center gap-1.5 transition-opacity duration-500 ${(state === 'listening' || state === 'processing') ? 'opacity-100' : 'opacity-0'}`}>
            {[...Array(11)].map((_, i) => (
              <div 
                key={i}
                className="w-1.5 rounded-full bg-white/50"
                style={{
                  height: state === 'listening' ? `${Math.max(10, Math.random() * 80)}px` : '10px',
                  animation: state === 'listening' ? `pulse-height 0.${5 + (i % 5)}s infinite alternate ease-in-out` : 'none',
                  backgroundColor: state === 'processing' ? '#06b6d4' : 'rgba(255,255,255,0.5)'
                }}
              ></div>
            ))}
          </div>
          
          {/* Main Mic Button (Visible in Idle/Listening) */}
          {(state === 'idle' || state === 'listening') && (
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
      const originalHandler = toggleMic;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
              className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                state === 'listening' 
                  ? 'bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.6)] scale-110' 
                  : 'bg-zinc-800 hover:bg-zinc-700 shadow-xl scale-100'
              }`}
            >
              {state === 'listening' ? (
                <AudioLines className="w-10 h-10 text-white animate-pulse" />
              ) : (
                <Mic className="w-10 h-10 text-zinc-300" />
              )}
            </button>
          )}

          {/* Confirm/Cancel Buttons (Visible in Confirming) */}
          {state === 'confirming' && (
            <div className="flex gap-6 z-10 animate-in zoom-in-95 duration-300">
              <button type="button" 
                onClick={cancel}
                className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <button type="button" 
                onClick={confirm}
                className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-black shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:scale-105 transition-all"
              >
                <Check className="w-8 h-8" />
              </button>
            </div>
          )}

          {/* Reset Button (Visible in Success) */}
          {state === 'success' && (
            <button type="button" 
              onClick={cancel}
              className="z-10 px-8 py-3 bg-zinc-800 rounded-full font-medium hover:bg-zinc-700 transition-colors animate-in zoom-in duration-500"
            >
              Done
            </button>
          )}

        </div>

        {/* Global Keyframes for audio waves */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes pulse-height {
            0% { height: 10px; }
            100% { height: 80px; }
          }
        `}} />
      </div>

    </div>
  );
}
