"use client";
import React, { useState, useRef, useEffect } from "react";
import { CreditCard, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PaymentProcess40() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Magnetic button state
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || isProcessing) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate distance from center of the button
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    
    // Move button slightly (magnetic pull intensity)
    setPosition({ x: x * 0.2, y: y * 0.3 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 }); // Snap back
  };

  return (
    <div className="w-full min-h-[700px] bg-neutral-100 flex items-center justify-center font-sans p-6">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-[2rem] p-8 shadow-xl border border-neutral-200 animate-in fade-in duration-500">
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <CreditCard className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-neutral-900">Secure Checkout</h2>
            <p className="text-sm font-medium text-neutral-500 mt-1">Total to pay: $199.99</p>
          </div>

          <form onSubmit={handlePay} className="space-y-5">
            
            <div className="space-y-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                required 
                type="text" 
               
                placeholder="Card Number" 
                className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-xl px-4 py-4 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors font-mono tracking-widest text-sm" 
              />
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                  required 
                  type="text" 
                 
                  placeholder="MM/YY" 
                  className="w-1/2 bg-neutral-50 border-2 border-neutral-100 rounded-xl px-4 py-4 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors font-mono tracking-widest text-center text-sm" 
                />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                  required 
                  type="text" 
                 
                  placeholder="CVV" 
                  className="w-1/2 bg-neutral-50 border-2 border-neutral-100 rounded-xl px-4 py-4 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors font-mono tracking-widest text-center text-sm" 
                />
              </div>
            </div>

            <div className="pt-6 pb-2">
              {/* Magnetic Button */}
              <button 
                ref={buttonRef}
                type="submit" 
                disabled={isProcessing}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold text-lg disabled:opacity-70 flex justify-center items-center overflow-hidden"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered && !isProcessing ? 1.02 : 1})`,
                  // Use transition only when snapping back (not hovered), so it tracks mouse instantly when hovered
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  boxShadow: isHovered && !isProcessing ? '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <div 
                    ref={textRef}
                    className="flex items-center gap-2 pointer-events-none"
                    style={{
                       // The inner text moves slightly faster/further to create parallax
                       transform: `translate(${position.x * 0.5}px, ${position.y * 0.5}px)`,
                       transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  >
                    Confirm Payment <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-green-500" /> SSL Encrypted
            </div>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-[2rem] p-12 shadow-2xl border border-neutral-200 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
             <CheckCircle2 className="w-12 h-12 text-green-600" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-neutral-900 mb-2">Success!</h2>
           <p className="text-neutral-500 mb-10 font-medium">Your payment was securely processed.</p>
           
           <button type="button" 
              onClick={() => setIsSuccess(false)}
              className="w-full py-4 bg-neutral-100 text-neutral-900 font-bold rounded-xl hover:bg-neutral-200 transition-colors"
            >
              Start New Order
            </button>
        </div>
      )}

    </div>
  );
}
