"use client";
import React, { useState } from "react";
import { MapPin, Navigation, Search, CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";

const MOCK_ADDRESSES = [
  { id: 1, text: "1600 Amphitheatre Parkway, Mountain View, CA 94043", street: "1600 Amphitheatre Pkwy", city: "Mountain View", state: "CA", zip: "94043", country: "USA", coords: "37.422,-122.084" },
  { id: 2, text: "1 Infinite Loop, Cupertino, CA 95014", street: "1 Infinite Loop", city: "Cupertino", state: "CA", zip: "95014", country: "USA", coords: "37.331,-122.030" },
  { id: 3, text: "350 Fifth Avenue, New York, NY 10118", street: "350 Fifth Ave", city: "New York", state: "NY", zip: "10118", country: "USA", coords: "40.748,-73.985" },
];

export default function PaymentProcess49() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<typeof MOCK_ADDRESSES[0] | null>(null);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredAddresses = MOCK_ADDRESSES.filter(a => a.text.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelect = (addr: typeof MOCK_ADDRESSES[0]) => {
    setSelectedAddress(addr);
    setSearchTerm(addr.text);
    setShowDropdown(false);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100">
      
      {!isSuccess ? (
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          
          {/* Left Side: Shipping / Map */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 flex flex-col relative overflow-hidden">
            
            <h2 className="text-2xl font-black text-white mb-6">Delivery Address</h2>
            
            {/* Search Input */}
            <div className="relative z-20 mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input required 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(true);
                    if (e.target.value === "") setSelectedAddress(null);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search your address..." 
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
                 minLength={2} maxLength={50} />
              </div>

              {/* Autocomplete Dropdown */}
              {showDropdown && searchTerm && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {filteredAddresses.length > 0 ? (
                    filteredAddresses.map(addr => (
                      <div 
                        key={addr.id}
                        onClick={() => handleSelect(addr)}
                        className="px-4 py-3 hover:bg-slate-700 cursor-pointer flex items-start gap-3 transition-colors"
                      >
                        <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-white font-medium">{addr.street}</div>
                          <div className="text-slate-400 text-sm">{addr.city}, {addr.state} {addr.zip}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-slate-500 text-sm">No addresses found. Try "New York" or "CA".</div>
                  )}
                </div>
              )}
            </div>

            {/* Map Preview Area */}
            <div className="flex-1 min-h-[200px] bg-slate-900 rounded-2xl border border-slate-700 relative overflow-hidden flex items-center justify-center">
              
              {/* Fake Map Grid Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {!selectedAddress ? (
                <div className="text-slate-500 flex flex-col items-center gap-2 relative z-10">
                  <Navigation className="w-8 h-8 opacity-50" />
                  <span className="text-sm font-medium">Search to drop a pin</span>
                </div>
              ) : (
                <div className="relative z-10 text-center animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse relative">
                     <MapPin className="w-8 h-8 text-indigo-500 relative z-10" />
                     {/* Ripples */}
                     <div className="absolute inset-0 bg-indigo-500/40 rounded-full animate-ping"></div>
                  </div>
                  <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 shadow-xl">
                    <p className="font-bold text-white text-sm">{selectedAddress.street}</p>
                    <p className="text-xs text-slate-400">{selectedAddress.city}, {selectedAddress.state}</p>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Side: Payment Form */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 flex flex-col relative z-0">
            <h2 className="text-2xl font-black text-white mb-8">Payment</h2>

            <form onSubmit={handlePay} className="space-y-4">
              
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm shadow-inner"  minLength={16} />
              </div>
              
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm shadow-inner"  minLength={5} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm shadow-inner"  minLength={3} />
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isProcessing || !selectedAddress}
                  className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)] disabled:opacity-50 disabled:shadow-none"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Complete Order <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </div>

              {!selectedAddress && (
                <p className="text-center text-rose-400 text-xs font-medium mt-4">Please select a delivery address first.</p>
              )}
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-800 rounded-3xl p-10 shadow-2xl border border-slate-700 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Order Confirmed</h2>
           <p className="text-slate-400 mb-8 font-medium">Your package will be delivered to <br/><span className="text-white font-bold">{selectedAddress?.street}</span>.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setSelectedAddress(null); setSearchTerm(""); }}
              className="w-full py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none flex justify-center items-center overflow-hidden z-0">
        <div className="w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full"></div>
      </div>

    </div>
  );
}
