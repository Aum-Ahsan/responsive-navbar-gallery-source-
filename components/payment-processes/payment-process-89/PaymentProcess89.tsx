"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Navigation2, FileText, User } from "lucide-react";

export default function PaymentProcess89() {
  const TOTAL_AMOUNT = 350.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-[#fdfaf6] flex flex-col items-center justify-center font-sans py-12 px-0 md:p-12 text-[#2d2824]">
      
      {!isSuccess ? (
        <div className="w-full max-w-6xl">
          
          <div className="px-6 md:px-0 mb-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1c1815] mb-2">Complete Reservation</h2>
            <p className="text-[#8b7e74]">Swipe to view all required details.</p>
          </div>

          <form onSubmit={handlePay}>
            
            {/* 
              MOBILE: Horizontal scroll with snap points.
              DESKTOP: 3-column grid.
            */}
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-6 md:px-0 gap-6 md:grid md:grid-cols-3 hide-scrollbar">
              
              {/* Card 1: Guest Details */}
              <div className="min-w-[85vw] md:min-w-0 snap-center shrink-0">
                <div className="h-full bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8dfd8]">
                  <h3 className="font-serif text-xl mb-6 flex items-center gap-3 text-[#1c1815]">
                    <span className="w-8 h-8 rounded-full bg-[#f3efe8] flex items-center justify-center text-[#8b7e74]"><User className="w-4 h-4" /></span>
                    Guest Info
                  </h3>
                  <div className="space-y-4">
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="First Name" className="w-full bg-[#fcfbf9] border border-[#e8dfd8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#2d2824] transition-colors" />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Last Name" className="w-full bg-[#fcfbf9] border border-[#e8dfd8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#2d2824] transition-colors" />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="Email Address" className="w-full bg-[#fcfbf9] border border-[#e8dfd8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#2d2824] transition-colors" />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="tel" placeholder="Phone Number" className="w-full bg-[#fcfbf9] border border-[#e8dfd8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#2d2824] transition-colors" />
                  </div>
                </div>
              </div>

              {/* Card 2: Summary */}
              <div className="min-w-[85vw] md:min-w-0 snap-center shrink-0">
                <div className="h-full bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8dfd8]">
                  <h3 className="font-serif text-xl mb-6 flex items-center gap-3 text-[#1c1815]">
                    <span className="w-8 h-8 rounded-full bg-[#f3efe8] flex items-center justify-center text-[#8b7e74]"><FileText className="w-4 h-4" /></span>
                    Summary
                  </h3>
                  
                  <div className="bg-[#fcfbf9] p-4 rounded-xl border border-[#e8dfd8] mb-6">
                    <h4 className="font-bold text-[#1c1815] mb-1">Ocean View Suite</h4>
                    <p className="text-sm text-[#8b7e74] mb-4">Oct 12 - Oct 14 (2 Nights)</p>
                    
                    <div className="space-y-2 text-sm pb-4 border-b border-[#e8dfd8] mb-4">
                      <div className="flex justify-between">
                        <span className="text-[#8b7e74]">$150.00 x 2 nights</span>
                        <span>$300.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8b7e74]">Taxes & Fees</span>
                        <span>$50.00</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <span className="font-serif font-bold text-[#1c1815]">Total</span>
                      <span className="text-2xl font-serif text-[#1c1815]">${TOTAL_AMOUNT.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Payment */}
              <div className="min-w-[85vw] md:min-w-0 snap-center shrink-0">
                <div className="h-full bg-[#1c1815] rounded-2xl p-6 md:p-8 shadow-xl text-white">
                  <h3 className="font-serif text-xl mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#2d2824] flex items-center justify-center text-[#d2c5b8]"><CreditCard className="w-4 h-4" /></span>
                    Payment
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b7e74]" />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-[#2d2824] border border-[#3c3631] rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#d2c5b8] transition-colors font-mono text-sm" />
                    </div>
                    <div className="flex gap-4">
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-[#2d2824] border border-[#3c3631] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d2c5b8] transition-colors font-mono text-center text-sm" />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVC" className="w-1/2 bg-[#2d2824] border border-[#3c3631] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d2c5b8] transition-colors font-mono text-center text-sm" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="w-full py-4 bg-[#d2c5b8] hover:bg-white text-[#1c1815] rounded-lg font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
                    >
                      {isProcessing ? (
                        <div className="w-5 h-5 border-2 border-[#1c1815]/30 border-t-[#1c1815] rounded-full animate-spin"></div>
                      ) : (
                        <>Pay Now</>
                      )}
                    </button>
                    <p className="text-center text-xs text-[#8b7e74] mt-4 flex justify-center items-center gap-1">
                      <Navigation2 className="w-3 h-3" /> Secure Transaction
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </form>

          {/* Swipe Indicator Mobile */}
          <div className="md:hidden flex justify-center gap-2 mt-2 px-6">
            <div className="w-2 h-2 rounded-full bg-[#1c1815]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2c5b8]"></div>
            <div className="w-2 h-2 rounded-full bg-[#d2c5b8]"></div>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-2xl p-12 text-center shadow-lg border border-[#e8dfd8] mx-6 animate-in zoom-in duration-500">
           <div className="w-20 h-20 bg-[#f3efe8] rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-10 h-10 text-[#8b7e74]" strokeWidth={2} />
           </div>
           <h2 className="text-3xl font-serif text-[#1c1815] mb-2">Confirmed</h2>
           <p className="text-[#8b7e74] mb-8">Your reservation is set.</p>
           <button type="button" 
              onClick={() => setIsSuccess(false)}
              className="w-full py-4 bg-[#1c1815] hover:bg-[#2d2824] text-white font-bold rounded-lg transition-colors"
            >
              Done
            </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
