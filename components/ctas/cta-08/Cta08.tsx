"use client";
import React from 'react';
import { Shield, Zap, Globe, ArrowRight } from 'lucide-react';

export default function Cta08() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div 
        className="relative rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-700/50 p-8 sm:p-12 md:p-16 flex flex-col items-center text-center shadow-2xl"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 1)), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23334155\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: 'cover, auto'
        }}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 tracking-tight max-w-3xl">
          Secure your infrastructure at the edge.
        </h2>
        
        <p className="text-slate-400 text-lg sm:text-xl mb-12 max-w-2xl font-medium">
          Deploy globally in milliseconds with enterprise-grade DDOS protection, zero-trust routing, and analytics.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm">
            <Shield size={16} className="text-cyan-400" /> SOC2 Certified
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm">
            <Zap size={16} className="text-amber-400" /> &lt;50ms Latency
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm">
            <Globe size={16} className="text-emerald-400" /> 200+ PoPs
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl transition-colors shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 text-lg">
            Start Building Free <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
