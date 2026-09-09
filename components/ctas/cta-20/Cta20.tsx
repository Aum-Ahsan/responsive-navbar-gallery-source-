"use client";
import React, { useState } from 'react';
import { Gift, Unlock, ArrowRight } from 'lucide-react';

export default function Cta20() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-[2.5rem] p-8 sm:p-16 text-center shadow-2xl relative overflow-hidden flex flex-col items-center border-[8px] border-amber-300/30">
        
        {/* Confetti or decorative background could go here */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-md relative z-10">
          Claim your welcome gift!
        </h2>
        <p className="text-amber-100 text-lg font-medium mb-12 relative z-10">
          Unlock the mystery box to reveal your exclusive signup discount.
        </p>

        {/* Mystery Box Area */}
        <div className="relative z-10 w-full max-w-sm h-64 mb-8 perspective-[1000px]">
          
          <div className={`w-full h-full relative transition-all duration-1000 transform-style-3d ${unlocked ? 'rotate-y-180' : ''}`}>
            
            {/* Front: Locked Box */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-white rounded-3xl shadow-xl flex flex-col items-center justify-center backface-hidden cursor-pointer hover:scale-105 transition-transform" onClick={() => setUnlocked(true)}>
              <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mb-4 text-white shadow-inner animate-bounce">
                <Gift size={48} />
              </div>
              <div className="font-bold text-amber-800 uppercase tracking-widest text-sm flex items-center gap-2">
                <Unlock size={16} /> Tap to Unlock
              </div>
            </div>

            {/* Back: Revealed Reward */}
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center backface-hidden rotate-y-180 border-4 border-dashed border-amber-300">
              <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">You won a</div>
              <div className="text-6xl font-black text-gray-900 mb-2">50%</div>
              <div className="text-xl font-bold text-gray-400 mb-6">Lifetime Discount</div>
              <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-mono font-bold tracking-widest border border-amber-200">
                LUCKY50
              </div>
            </div>

          </div>
          
        </div>

        {/* Action Button */}
        <div className={`relative z-10 transition-all duration-700 ${unlocked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <button className="px-8 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-xl flex items-center justify-center gap-2 transition-colors">
            Apply Code at Checkout <ArrowRight size={20} />
          </button>
          <p className="text-amber-100 text-xs mt-3">Code expires in 24 hours.</p>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .perspective-[1000px] { perspective: 1000px; }
          .transform-style-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
        `}} />
      </div>
    </div>
  );
}
