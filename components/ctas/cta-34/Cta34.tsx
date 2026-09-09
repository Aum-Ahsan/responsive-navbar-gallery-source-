"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Video, ArrowRight } from 'lucide-react';

export default function Cta34() {
  const [timeLeft, setTimeLeft] = useState({ d: 2, h: 14, m: 38, s: 15 });

  // Mock countdown tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { d, h, m, s } = prev;
        if (s > 0) s--;
        else { s = 59; if (m > 0) m--; else { m = 59; if (h > 0) h--; else { h = 23; d--; } } }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-gradient-to-r from-violet-900 to-fuchsia-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Left Side: Info */}
        <div className="flex-1 p-8 sm:p-12 lg:p-16 text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-fuchsia-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            <Video size={14} /> Live Masterclass
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight tracking-tight">
            Scaling React Apps <br/>to 1 Million Users
          </h2>
          
          <p className="text-violet-200 font-medium text-lg mb-10 max-w-lg">
            Join our lead architects as they break down the exact performance patterns, caching strategies, and state management techniques used at massive scale.
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Calendar size={18} /></div>
              <div><div className="text-xs text-violet-300 font-bold uppercase">Date</div><div className="font-bold">Next Thursday</div></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Clock size={18} /></div>
              <div><div className="text-xs text-violet-300 font-bold uppercase">Time</div><div className="font-bold">10:00 AM PST</div></div>
            </div>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Work Email Address" 
              className="flex-1 px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-violet-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 font-medium backdrop-blur-sm"
              required
            />
            <button className="px-8 py-4 bg-white text-violet-900 font-black rounded-xl hover:bg-fuchsia-50 transition-colors shadow-xl shrink-0 flex items-center justify-center gap-2">
              Save My Seat <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Right Side: Timer & Speakers */}
        <div className="w-full lg:w-[400px] bg-black/30 p-8 sm:p-12 lg:p-16 flex flex-col justify-between backdrop-blur-md border-l border-white/10 relative z-10">
          
          <div className="mb-10">
            <div className="text-fuchsia-300 text-sm font-bold uppercase tracking-widest mb-4">Starting In</div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {Object.entries(timeLeft).map(([unit, val]) => (
                <div key={unit} className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="text-2xl font-black text-white tabular-nums">{val.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] text-violet-300 uppercase font-bold mt-1">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-fuchsia-300 text-sm font-bold uppercase tracking-widest mb-4">Featured Speakers</div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                <img src="https://i.pravatar.cc/100?img=68" alt="Speaker" className="w-14 h-14 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-white">Elena Rostova</h4>
                  <p className="text-xs text-violet-300 font-medium">VP of Engineering, Vercel</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                <img src="https://i.pravatar.cc/100?img=12" alt="Speaker" className="w-14 h-14 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-white">David Kim</h4>
                  <p className="text-xs text-violet-300 font-medium">Principal Architect, Meta</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
