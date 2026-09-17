"use client";
import React, { useState } from "react";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function PaymentProcess21() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center p-6 font-sans">
        <div className="bg-slate-800 p-12 rounded-[2rem] shadow-2xl text-center max-w-sm w-full border border-slate-700 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Payment Secure</h2>
          <p className="text-slate-400 mb-8">Your 3D Secure transaction was successful.</p>
          <button type="button" onClick={() => { setIsSuccess(false); setCardNumber(""); setCardName(""); setExpiry(""); setCvv(""); }} className="w-full py-4 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-500 transition-colors">
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center font-sans p-6 overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10">
        
        <h1 className="text-3xl font-black text-white text-center mb-12 tracking-tight">Checkout</h1>

        {/* 3D Card Container */}
        <div className="w-full h-56 mb-8 [perspective:1000px]">
          <div 
            className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] shadow-2xl rounded-2xl"
            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            
            {/* Front of Card */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 p-6 flex flex-col justify-between overflow-hidden">
              {/* Decorative design */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <svg className="w-12 h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#E2E8F0"/>
                  <path d="M12 16H36" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 12H32" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 20H28" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="font-bold italic text-white/50 tracking-wider">BANK</div>
              </div>
              
              <div className="relative z-10">
                <div className="text-2xl font-mono text-white tracking-widest mb-4 h-8 flex items-center">
                  {cardNumber || "•••• •••• •••• ••••"}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Card Holder</div>
                    <div className="text-sm font-bold text-white uppercase tracking-wider h-5 flex items-center">{cardName || "YOUR NAME"}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Expires</div>
                    <div className="text-sm font-mono text-white tracking-wider h-5 flex items-center">{expiry || "MM/YY"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 flex flex-col justify-center overflow-hidden">
              
              {/* Magnetic Strip */}
              <div className="w-full h-12 bg-black/80 absolute top-6"></div>
              
              <div className="px-6 mt-12 relative z-10">
                <div className="text-right text-[10px] text-slate-400 uppercase tracking-widest mb-1 pr-2">CVV</div>
                <div className="w-full h-10 bg-white rounded flex items-center justify-end px-3">
                  <span className="font-mono text-slate-800 tracking-widest italic">{cvv || "•••"}</span>
                </div>
                <div className="text-[8px] text-slate-500 mt-4 leading-tight">
                  This card is property of the issuer. If found, please return to the nearest branch. 
                  Use of this card is subject to the terms and conditions of the cardholder agreement.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handlePay} className="bg-slate-800/50 backdrop-blur-md p-6 rounded-3xl border border-slate-700/50 shadow-xl space-y-5">
          
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Card Number</label>
            <input 
              required 
              type="text" 
              maxLength={19}
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              onFocus={() => setIsFlipped(false)}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono tracking-wider" 
              placeholder="0000 0000 0000 0000"
            />
          </div>
          
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Cardholder Name</label>
            <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
              required 
              type="text" 
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
              onFocus={() => setIsFlipped(false)}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors uppercase tracking-wider" 
              placeholder="JOHN DOE"
            />
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Expiry Date</label>
              <input 
                required 
                type="text" 
                maxLength={5}
                value={expiry}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  if (val.length >= 2) {
                    setExpiry(val.substring(0,2) + '/' + val.substring(2,4));
                  } else {
                    setExpiry(val);
                  }
                }}
                onFocus={() => setIsFlipped(false)}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono tracking-wider" 
                placeholder="MM/YY"
              />
            </div>
            
            <div className="w-1/2">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">CVV</label>
              <input 
                required 
                type="text" 
                maxLength={4}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono tracking-wider" 
                placeholder="123"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isProcessing}
            className="w-full mt-2 py-4 bg-cyan-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] disabled:opacity-70 disabled:shadow-none"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Authenticating...
              </div>
            ) : (
              <>Pay $149.00 <ArrowRight className="w-5 h-5" /></>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 pt-2">
            <Lock className="w-3 h-3" /> Encrypted connection
          </div>
        </form>

      </div>
    </div>
  );
}
