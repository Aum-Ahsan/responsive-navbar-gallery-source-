"use client";
import React, { useState } from "react";
import { CreditCard, CheckCircle2, Lock, ArrowDown } from "lucide-react";

export default function PaymentProcess91() {
  const TOTAL_AMOUNT = 150.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    e.dataTransfer.setData("text/plain", "payment_token");
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (data === "payment_token") {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
      }, 2000);
    }
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 text-white overflow-hidden relative">
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -top-20 -left-20"></div>
        <div className="absolute w-[400px] h-[400px] bg-emerald-600/20 rounded-full blur-[100px] bottom-0 right-0"></div>
      </div>

      {!isSuccess ? (
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 relative z-10 items-center">
          
          {/* Form Side */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

            <div className="space-y-4 mb-8">
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required 
                  type="text" 
                  placeholder="Card Number" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm" 
                />
              </div>
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required 
                  type="text" 
                  placeholder="MM/YY" 
                  className="w-1/2 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" 
                />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required 
                  type="text" 
                  placeholder="CVV" 
                  className="w-1/2 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" 
                />
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-700 relative overflow-hidden group">
              <p className="text-slate-400 text-sm mb-2 text-center">To authorize payment, drag the token to the vault.</p>
              
              <div className="flex justify-center mt-6">
                <div 
                  draggable={!isProcessing}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  className={`
                    w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 
                    flex flex-col items-center justify-center cursor-grab active:cursor-grabbing
                    shadow-[0_0_30px_rgba(99,102,241,0.5)] border-4 border-indigo-400/30
                    transition-transform hover:scale-110
                    ${isProcessing ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}
                  `}
                >
                  <span className="font-bold text-xs uppercase tracking-widest text-indigo-100 mb-1">Pay</span>
                  <span className="font-black">${TOTAL_AMOUNT.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vault Side */}
          <div className="flex flex-col items-center justify-center">
            
            <div 
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`
                w-64 h-64 rounded-full border-4 border-dashed transition-all duration-300 flex flex-col items-center justify-center relative
                ${isDragging ? 'border-emerald-500 bg-emerald-500/10 scale-110' : 'border-slate-700 bg-slate-800/30'}
                ${isProcessing ? 'border-indigo-500 bg-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.5)]' : ''}
              `}
            >
              {isProcessing ? (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
                  <p className="font-bold text-indigo-400 animate-pulse">Decrypting & Processing...</p>
                </div>
              ) : (
                <>
                  <Lock className={`w-12 h-12 mb-4 transition-colors ${isDragging ? 'text-emerald-400' : 'text-slate-600'}`} />
                  <p className={`font-bold transition-colors ${isDragging ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {isDragging ? 'Drop to Pay' : 'Secure Vault'}
                  </p>
                  
                  {!isDragging && (
                    <div className="absolute -top-12 animate-bounce">
                      <ArrowDown className="w-8 h-8 text-indigo-500" />
                    </div>
                  )}
                </>
              )}
            </div>

          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-800/80 backdrop-blur-xl rounded-3xl p-12 text-center border border-slate-700 relative z-10 animate-in zoom-in duration-500">
           
           <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-400" strokeWidth={3} />
           </div>

           <h2 className="text-3xl font-black mb-2 text-white">Payment Secured</h2>
           <p className="text-slate-400 mb-8 font-medium">Funds have been safely transferred to the vault.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              Close Vault
            </button>
        </div>
      )}

    </div>
  );
}
