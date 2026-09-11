"use client";
import React, { useState } from 'react';
import { AlertTriangle, X, ArrowRight } from 'lucide-react';

export default function Cta47() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <div className="w-full w-full p-4 sm:p-8 my-10 font-sans flex items-center justify-center min-h-[260px] sm:h-[340px] lg:h-[400px] border border-gray-200 rounded-3xl bg-gray-50">
        <button onClick={() => setVisible(true)} className="text-sm font-bold text-gray-500 hover:text-gray-900 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
          Simulate Exit Intent
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-10 font-sans relative min-h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px] border border-gray-200 rounded-3xl bg-gray-50 overflow-hidden flex items-center justify-center p-4">
      
      {/* Background to simulate page content behind modal */}
      <div className="absolute inset-0 p-5 sm:p-8 lg:p-12 text-gray-300 pointer-events-none select-none blur-sm">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Pricing Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="h-64 bg-gray-200 rounded-xl"></div>
          <div className="h-64 bg-gray-200 rounded-xl"></div>
          <div className="h-64 bg-gray-200 rounded-xl"></div>
        </div>
      </div>

      {/* Modal Overlay backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 flex items-center justify-center p-4">
        
        {/* Modal Content */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
          
          <button 
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors z-20"
          >
            <X size={16} />
          </button>

          <div className="bg-amber-50 p-8 text-center relative border-b border-amber-100">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply blur-xl opacity-50"></div>
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner relative z-10">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-2xl font-black text-gray-900 relative z-10">Wait! Before you go...</h2>
          </div>

          <div className="p-8 text-center">
            <p className="text-gray-600 font-medium mb-6">
              It looks like you're leaving. Don't miss out on our special offer! Enter your email to get a <strong className="text-gray-900">20% discount code</strong> immediately.
            </p>

            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none font-medium text-center"
                required
              />
              <button className="w-full py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
                Get My 20% Off <ArrowRight size={18} />
              </button>
            </form>
            
            <button 
              onClick={() => setVisible(false)}
              className="mt-4 text-xs font-bold text-gray-400 hover:text-gray-600 underline"
            >
              No thanks, I prefer paying full price.
            </button>
          </div>
          
        </div>
      </div>

    </div>
  );
}
