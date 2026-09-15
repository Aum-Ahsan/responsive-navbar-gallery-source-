"use client";
import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";

export default function Cart50() {
  const [copied, setCopied] = useState(false);
  const command = "npm install @components/ui-library";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-black p-6 sm:p-10 font-sans flex items-center justify-center min-h-[300px]">
      
      <div className="w-full max-w-lg bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
        
        {/* Terminal Header */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-white/40 text-xs ml-2 font-sans flex items-center gap-1">
            <Terminal size={12} /> bash
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 text-white/90">
          <p className="text-white/50 mb-4">// Get access to all 415 components</p>
          
          <div className="flex items-center justify-between bg-black/50 p-4 rounded-lg border border-white/5 group">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-slate-300">{command}</span>
            </div>
            
            <button 
              onClick={handleCopy}
              className="text-white/40 hover:text-white transition p-2 rounded-md hover:bg-white/10"
              title="Copy command"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs">
            <span className="px-2 py-1 bg-white/10 rounded text-white/70">Pro License</span>
            <span className="text-white/40">$149 one-time</span>
          </div>
        </div>

      </div>

    </div>
  );
}
