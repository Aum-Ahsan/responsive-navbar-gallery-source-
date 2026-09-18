"use client";
import React, { useState, useRef, useEffect } from "react";
import { CreditCard, CheckCircle2, ArrowRight, Lock } from "lucide-react";

export default function PaymentProcess28() {
  const [scrollY, setScrollY] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const container = e.currentTarget.closest('.w-full') || document;
    const inputs = Array.from(container.querySelectorAll('input')).filter((i: any) => i.offsetParent !== null);
    let isValid = true;
    for (const input of inputs) {
      if (!input.value.trim() && input.hasAttribute('required')) {
        alert("Please fill all columns");
        input.focus();
        isValid = false;
        break;
      }
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
        break;
      }
    }
    if (!isValid) return;

    setIsProcessing(true);
    setServerError(null);
    setTimeout(() => {
      // Simulate server-side validation rejection
      if (Math.random() < 0.3) {
        setServerError("Payment declined by the server. Please check your details and try again.");
        setIsProcessing(false);
        return;
      }
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-[700px] bg-emerald-950 flex items-center justify-center font-sans p-6">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center max-w-sm w-full animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed</h2>
          <p className="text-slate-500 font-medium mb-8">Your travel itinerary has been booked.</p>
          <button type="button" onClick={() => { setIsSuccess(false); setScrollY(0); }} className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors">
            View Itinerary
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center font-sans overflow-hidden p-0 md:p-6">
      
      {/* Outer wrapper to constrain height */}
      <div className="w-full max-w-5xl h-[100dvh] md:h-[800px] bg-white md:rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-slate-200">
        
        {/* Parallax Background Images */}
        {/* Deepest layer - moves slowest */}
        <div 
          className="absolute inset-0 w-full h-[150%] bg-[url('https://images.unsplash.com/photo-1506905925275-224bd0ee31ea?w=1600&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ transform: `translateY(-${scrollY * 0.15}px)` }}
        ></div>
        
        {/* Middle layer - moves medium speed */}
        <div 
          className="absolute inset-0 w-full h-[150%] pointer-events-none flex justify-end"
          style={{ transform: `translateY(-${scrollY * 0.3}px)` }}
        >
          <div className="w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] mt-40 mr-20"></div>
        </div>

        {/* Foreground fast layer - decorative elements */}
        <div 
          className="absolute inset-0 w-full h-[200%] pointer-events-none"
          style={{ transform: `translateY(-${scrollY * 0.6}px)` }}
        >
           <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-slate-400/20 rounded-full"></div>
           <div className="absolute top-[60%] right-[15%] w-64 h-64 border border-slate-400/20 rounded-full"></div>
           <div className="absolute top-[80%] left-[20%] w-16 h-16 bg-emerald-500/10 rounded-full"></div>
        </div>

        {/* Scrollable Content Container */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="absolute inset-0 w-full h-full overflow-y-auto custom-scrollbar relative z-10"
        >
          {/* Header area - transparent to show parallax */}
          <div className="h-[40vh] flex flex-col justify-center px-8 md:px-16 text-slate-900">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none">
              Your Alpine<br/>Retreat.
            </h1>
            <p className="text-xl font-medium text-slate-600 max-w-md">
              Review your booking details and complete payment to secure your dates.
            </p>
          </div>

          {/* Content area - opaque to readable form */}
          <div className="bg-white/90 backdrop-blur-xl min-h-[60vh] rounded-t-[3rem] p-8 md:p-12 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              
              {/* Left Column: Itinerary */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6">Booking Details</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <div className="w-24 h-24 bg-slate-200 rounded-xl overflow-hidden shrink-0 shadow-inner">
                        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80" alt="Resort" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">Grand Alpine Resort & Spa</h3>
                        <p className="text-sm text-slate-500 mt-1">4 Nights • Premium Mountain View Suite</p>
                        <div className="mt-3 flex gap-4 text-sm font-semibold text-slate-900">
                          <div><span className="text-slate-400 block text-xs">Check In</span> Oct 12</div>
                          <div><span className="text-slate-400 block text-xs">Check Out</span> Oct 16</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <div className="w-24 h-24 bg-slate-200 rounded-xl overflow-hidden shrink-0 shadow-inner">
                        <img src="https://images.unsplash.com/photo-1522793268875-103362145b0a?w=200&q=80" alt="Ski" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">Ski Pass & Equipment</h3>
                        <p className="text-sm text-slate-500 mt-1">2 Adults • 3 Days access</p>
                        <div className="mt-3 text-sm font-semibold text-slate-900">
                          $450.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extra spacer to demonstrate more scrolling */}
                <div className="h-20 border-b border-slate-200"></div>
                
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6">Guest Information</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="First Name" defaultValue="John" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none"  minLength={2} maxLength={50} />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Last Name" defaultValue="Doe" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none"  minLength={2} maxLength={50} />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="Email" defaultValue="john@example.com" className="col-span-2 bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none"  minLength={5} maxLength={100} />
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Checkout */}
              <div className="lg:col-span-2">
                
                <div className="sticky top-8 bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl">
                  <h3 className="text-xl font-bold mb-6">Price Summary</h3>
                  
                  <div className="space-y-3 mb-6 text-sm text-slate-300 font-medium">
                    <div className="flex justify-between"><span>Room x 4 nights</span><span>$1,200.00</span></div>
                    <div className="flex justify-between"><span>Ski Package</span><span>$450.00</span></div>
                    <div className="flex justify-between"><span>Taxes & Fees</span><span>$148.50</span></div>
                  </div>
                  
                  <div className="flex justify-between items-end pt-6 border-t border-slate-700 mb-8">
                    <span className="font-bold text-slate-400">Total</span>
                    <span className="text-4xl font-black tracking-tighter">$1,798.50</span>
                  </div>

                  <form onSubmit={handlePay}>
                    <div className="space-y-4 mb-8">
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
                      </div>
                      <div className="flex gap-4">
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-sm text-center"  minLength={5} />
                        <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-sm text-center"  minLength={3} />
                      </div>
                    </div>

                    {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="w-full py-5 bg-emerald-500 text-emerald-950 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-70 disabled:shadow-none"
                    >
                      {isProcessing ? (
                        <div className="w-6 h-6 border-4 border-emerald-950/30 border-t-emerald-950 rounded-full animate-spin"></div>
                      ) : (
                        <>Confirm Booking <ArrowRight className="w-5 h-5" /></>
                      )}
                    </button>
                    
                    <div className="flex justify-center items-center gap-2 mt-6 text-xs text-slate-500 font-medium">
                      <Lock className="w-3 h-3" /> Encrypted Checkout
                    </div>
                  </form>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
