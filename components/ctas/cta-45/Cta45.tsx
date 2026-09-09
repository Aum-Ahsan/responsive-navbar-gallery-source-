"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, Download } from 'lucide-react';

export default function Cta45() {
  const textToType = "npm install -g antigravity-cli";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textToType.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + textToType.charAt(index));
        setIndex(index + 1);
      }, Math.random() * 50 + 30);
      return () => clearTimeout(timeout);
    } else {
      // Reset after a delay
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-[#0c0c0c] rounded-3xl p-8 sm:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
        
        {/* Terminal Window Mockup */}
        <div className="w-full max-w-xl bg-[#1e1e1e] rounded-xl border border-zinc-800 shadow-2xl mb-12 overflow-hidden text-left font-mono">
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <div className="ml-2 text-[#999] text-xs font-sans">bash — 80x24</div>
          </div>
          <div className="p-6 text-[#d4d4d4] text-sm sm:text-base leading-relaxed h-32">
            <span className="text-[#a6e22e]">user@macbook</span><span className="text-white">:</span><span className="text-[#66d9ef]">~</span><span className="text-white">$</span> {text}
            <span className="inline-block w-2 h-4 bg-[#d4d4d4] ml-1 animate-pulse align-middle"></span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-[#a6e22e] font-bold text-sm uppercase tracking-widest mb-4">
          <Terminal size={16} /> Developer First
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
          Ship code at terminal velocity.
        </h2>
        
        <p className="text-zinc-400 font-medium text-lg mb-10 max-w-lg">
          The most powerful CLI for generating, managing, and deploying robust serverless applications from your command line.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-black rounded-xl transition-colors flex items-center justify-center gap-2">
            <Download size={18} /> Download CLI
          </button>
          <button className="px-8 py-4 bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 font-bold rounded-xl transition-colors">
            Read Documentation
          </button>
        </div>

      </div>
    </div>
  );
}
