"use client";
import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export default function Newsletter29() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4 font-mono">
      <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 p-8 sm:p-12 relative overflow-hidden group">
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-emerald-500" size={28} />
              <span className="text-emerald-500 text-sm tracking-widest uppercase">System._Subscribe()</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Automate your knowledge intake.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Get weekly updates on distributed systems, Web3, and emerging tech. 
              No marketing fluff. Just pure signal.
            </p>
          </div>

          <div className="w-full md:w-[400px]">
            <div className="bg-[#111] p-1 rounded-lg border border-gray-800 shadow-[0_0_20px_rgba(16,185,129,0.05)] focus-within:shadow-[0_0_20px_rgba(16,185,129,0.15)] focus-within:border-emerald-500/50 transition-all">
              <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
                <span className="text-gray-600 pl-4">$</span>
                <input
                  type="email"
                  placeholder="email_address..."
                  className="w-full bg-transparent text-gray-300 placeholder-gray-600 px-3 py-3 focus:outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-emerald-500 hover:text-black text-gray-300 p-3 rounded-md transition-colors flex items-center justify-center mr-1"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
            <div className="flex justify-between items-center mt-3 px-1">
              <span className="text-xs text-gray-600">Press ENTER to execute</span>
              <span className="text-xs text-gray-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Secure connection
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
