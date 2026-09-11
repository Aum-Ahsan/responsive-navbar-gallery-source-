"use client";
import React from 'react';
import { Star, GitFork, Heart, GitBranch } from 'lucide-react';

export default function Cta36() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-[#0d1117] text-[#c9d1d9] rounded-[2rem] border border-[#30363d] p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 shadow-2xl relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#238636] mix-blend-screen filter blur-[100px] opacity-20 rounded-full"></div>

        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full text-xs font-bold text-[#8b949e] mb-6">
            <GitBranch size={14} /> Open Source Project
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Support our mission.
          </h2>
          <p className="text-[#8b949e] font-medium text-lg mb-8 max-w-md mx-auto md:mx-0">
            We're building the fastest runtime for the modern web. If your company relies on our tools, consider becoming a sponsor.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="w-full sm:w-auto px-6 py-3 bg-[#ea4aaa] hover:bg-[#d83d9a] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#ea4aaa]/20 flex items-center justify-center gap-2">
              <Heart size={18} /> Sponsor us
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-[#21262d] hover:bg-[#30363d] border border-[#363b42] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
              View Repository
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto relative z-10">
          <div className="bg-[#161b22] border border-[#30363d] p-6 rounded-2xl flex flex-col gap-4 shadow-xl min-w-[240px]">
            <div className="flex items-center justify-between p-3 bg-[#0d1117] rounded-xl border border-[#30363d]">
              <div className="flex items-center gap-3 text-[#e3b341]">
                <Star size={20} fill="currentColor" />
                <span className="font-bold text-[#c9d1d9]">Stars</span>
              </div>
              <span className="font-mono font-bold text-white tracking-widest">14.2k</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-[#0d1117] rounded-xl border border-[#30363d]">
              <div className="flex items-center gap-3 text-[#8b949e]">
                <GitFork size={20} />
                <span className="font-bold text-[#c9d1d9]">Forks</span>
              </div>
              <span className="font-mono font-bold text-white tracking-widest">3.1k</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-[#0d1117] rounded-xl border border-[#30363d]">
              <div className="flex items-center gap-3 text-[#ea4aaa]">
                <Heart size={20} />
                <span className="font-bold text-[#c9d1d9]">Sponsors</span>
              </div>
              <span className="font-mono font-bold text-white tracking-widest">128</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
