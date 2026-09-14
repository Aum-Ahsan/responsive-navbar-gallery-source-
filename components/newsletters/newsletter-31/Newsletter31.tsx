"use client";
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Newsletter31() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="bg-white rounded-[2rem] p-10 sm:p-14 text-center shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs mb-6 border border-blue-100">
            <Sparkles size={14} />
            <span>Product Updates</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Stay in the loop.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl">
            Be the first to know about new features, major updates, and exclusive beta programs.
          </p>

          <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="work@email.com"
                className="flex-1 px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800"
                required
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-blue-200"
              >
                <span>Subscribe</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We send updates ~2 times a month.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
