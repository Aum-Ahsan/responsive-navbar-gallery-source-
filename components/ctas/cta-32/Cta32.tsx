"use client";
import React, { useState } from 'react';
import { Tag, Scissors } from 'lucide-react';

export default function Cta32() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-yellow-400 rounded-[2rem] p-8 sm:p-12 text-center shadow-[0_20px_0_rgba(202,138,4,1)] mb-5 relative overflow-hidden border-4 border-yellow-500">
        
        {/* Ticket zig-zag edge effect top and bottom */}
        <div className="absolute top-0 left-0 w-full h-3 bg-[radial-gradient(circle,transparent_4px,#eab308_5px)] bg-[length:16px_16px] -mt-1.5"></div>
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[radial-gradient(circle,transparent_4px,#eab308_5px)] bg-[length:16px_16px] -mb-1.5 rotate-180"></div>

        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-300 text-yellow-800 rounded-full mb-6">
          <Tag size={32} />
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-yellow-950 mb-2 uppercase tracking-tighter">
          Flash Sale Unlocked!
        </h2>
        <p className="text-yellow-900 font-bold mb-10 text-lg">
          Take 30% off your entire cart. Valid for the next 24 hours only.
        </p>

        <div className="max-w-xs mx-auto relative">
          <Scissors size={20} className="absolute -top-3 -left-3 text-yellow-700 transform -rotate-45" />
          
          <button 
            onClick={() => setRevealed(true)}
            className={`w-full py-6 rounded-xl border-4 border-dashed border-yellow-600 transition-all duration-500 relative overflow-hidden ${
              revealed ? 'bg-white cursor-default scale-105 shadow-xl border-solid border-yellow-200' : 'bg-yellow-500 hover:bg-yellow-300 cursor-pointer'
            }`}
          >
            {revealed ? (
              <div className="animate-in zoom-in font-mono text-3xl font-black tracking-widest text-gray-900">
                SAVE30NOW
              </div>
            ) : (
              <div className="text-xl font-black text-yellow-900 tracking-wider">
                CLICK TO REVEAL
              </div>
            )}
          </button>
        </div>
        
        {revealed && (
          <p className="text-yellow-800 font-bold text-sm mt-6 animate-in slide-in-from-bottom-4">
            Code copied to clipboard! Paste at checkout.
          </p>
        )}
        
      </div>
    </div>
  );
}
