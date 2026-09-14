"use client";
import React from 'react';

export default function Newsletter30() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4">
      <div className="bg-rose-50 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm border border-rose-100">
        
        <div className="w-full md:w-5/12 bg-rose-200 relative min-h-[250px] md:min-h-full">
          {/* Mock Product Image Area */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full h-full border-4 border-dashed border-rose-300 rounded-2xl flex items-center justify-center text-rose-400 font-bold rotate-[-2deg]">
              [ Product Image ]
            </div>
          </div>
          <div className="absolute top-6 left-6 bg-white text-rose-600 font-black px-4 py-2 rounded-full text-sm shadow-md transform -rotate-6">
            15% OFF
          </div>
        </div>

        <div className="w-full md:w-7/12 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-black text-rose-950 tracking-tight mb-4">
            Unlock 15% off your first order.
          </h2>
          <p className="text-rose-800/80 mb-8 leading-relaxed">
            Sign up for our newsletter to receive your exclusive discount code, plus early access to new collections and secret sales.
          </p>

          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-4 rounded-xl bg-white border border-rose-200 focus:outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-200 transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 active:bg-rose-800 transition-colors shadow-lg shadow-rose-200 whitespace-nowrap"
            >
              Reveal Code
            </button>
          </form>
          
          <p className="text-xs text-rose-400 mt-4 text-center sm:text-left">
            By signing up, you agree to our Terms of Service. Unsubscribe anytime.
          </p>
        </div>
        
      </div>
    </div>
  );
}
