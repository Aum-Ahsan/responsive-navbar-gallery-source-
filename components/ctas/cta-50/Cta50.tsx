"use client";
import React, { useState } from 'react';
import { Gift, ArrowRight } from 'lucide-react';

export default function Cta50() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSpin = () => {
    if (spinning || result) return;
    setSpinning(true);
    
    // Simulate spin time
    setTimeout(() => {
      setSpinning(false);
      setResult('25% OFF'); // Hardcoded win for demo purposes
    }, 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-[#1a0b2e] rounded-[3rem] p-8 sm:p-12 lg:p-16 border-[8px] border-[#3b1c6b] shadow-[0_20px_80px_rgba(59,28,107,0.5)] flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        
        {/* Lights decoration around the edge */}
        <div className="absolute inset-0 pointer-events-none opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 95%, #ffd700 100%)', backgroundSize: '40px 40px' }}></div>

        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff1493]/20 text-[#ff1493] rounded-2xl mb-6 shadow-[0_0_30px_rgba(255,20,147,0.3)]">
            <Gift size={32} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tighter">
            Spin to Win!
          </h2>
          
          <p className="text-[#a78bfa] text-lg font-medium mb-8 max-w-sm mx-auto md:mx-0">
            {result 
              ? "Congratulations! You've unlocked a massive discount." 
              : "Try your luck to win free shipping, 25% off, or even a free product on your next order."}
          </p>

          <div className={`transition-all duration-500 ${result ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <div className="bg-[#ff1493] text-white p-4 rounded-xl font-black text-2xl text-center mb-4 shadow-[0_0_20px_rgba(255,20,147,0.5)]">
              CODE: LUCKY25
            </div>
            <button className="w-full py-4 bg-white hover:bg-gray-100 text-[#1a0b2e] font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
              Apply at Checkout <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side: The Wheel */}
        <div className="w-full md:w-1/2 relative z-10 flex justify-center">
          <div className="relative">
            {/* Pointer */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 z-20 shadow-sm border-b-4 border-r-4 border-[#1a0b2e]"></div>
            
            {/* Wheel */}
            <div 
              className={`w-64 h-64 rounded-full border-8 border-white shadow-[0_0_40px_rgba(255,255,255,0.2)] relative overflow-hidden transition-all ease-out ${spinning ? 'duration-[3000ms]' : 'duration-0'}`}
              style={{ transform: spinning ? 'rotate(1800deg)' : result ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              {/* Wheel Segments (simulated with conic-gradient for simplicity in React component) */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: 'conic-gradient(#ff1493 0deg 90deg, #9333ea 90deg 180deg, #3b82f6 180deg 270deg, #ffd700 270deg 360deg)' 
                }}
              ></div>
              
              {/* Center nub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg z-10 border-4 border-[#1a0b2e]"></div>
            </div>

            <button 
              onClick={handleSpin}
              disabled={spinning || result !== null}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full font-black text-xs z-30 transition-transform ${spinning ? 'bg-gray-300 text-gray-500 scale-95' : result ? 'bg-gray-800 text-white scale-0' : 'bg-white text-[#1a0b2e] hover:scale-110 shadow-xl cursor-pointer'}`}
            >
              SPIN
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
