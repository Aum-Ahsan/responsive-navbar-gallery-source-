"use client";
import React, { useState, useEffect } from 'react';
import { Ticket, Clock } from 'lucide-react';

export default function Cta07() {
  const [spots, setSpots] = useState(142);
  
  // Simulate spots decreasing
  useEffect(() => {
    const interval = setInterval(() => {
      setSpots(prev => (prev > 12 ? prev - Math.floor(Math.random() * 3) : prev));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-black text-white rounded-[2rem] p-8 sm:p-16 relative overflow-hidden border border-gray-800 shadow-2xl">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-fuchsia-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-fuchsia-300 mb-6">
              <Clock size={14} /> Phase 1 Beta Closing Soon
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight tracking-tight">
              Get early access to <br className="hidden md:block"/>the next generation.
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Skip the public queue and lock in lifetime pricing by joining our exclusive early adopter list.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto md:mx-0" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="w-full flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:outline-none text-white placeholder:text-gray-500 font-medium backdrop-blur-sm"
                required
              />
              <button className="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-xl transition-colors shrink-0 shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                Join Waitlist
              </button>
            </form>
          </div>
          
          {/* Dynamic Counter Card */}
          <div className="w-full sm:w-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-fuchsia-400">
              <Ticket size={32} />
            </div>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Remaining Spots</div>
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tabular-nums tracking-tighter">
                {spots.toString().padStart(3, '0')}
              </div>
            </div>
            
            <div className="w-full bg-white/10 h-2 rounded-full mt-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-fuchsia-600 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(spots / 500) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-3 font-medium">Out of 500 total beta invites</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
