"use client";
import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function Cta33() {
  const agents = [
    { name: "Alex", img: "https://i.pravatar.cc/100?img=33" },
    { name: "Sam", img: "https://i.pravatar.cc/100?img=44" },
    { name: "Jordan", img: "https://i.pravatar.cc/100?img=55" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-slate-900 rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Support is Online
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Need help deciding?
          </h2>
          
          <p className="text-slate-400 font-medium text-lg mb-8 max-w-md mx-auto md:mx-0">
            Our technical product specialists are standing by to answer your questions and help you configure the perfect setup.
          </p>
          
          <button className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-xl transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center md:justify-start gap-2">
            <MessageSquare size={20} /> Chat with us now
          </button>
        </div>

        {/* Right Side: Agent Avatars */}
        <div className="w-full md:w-auto relative z-10">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-[2rem] flex flex-col items-center">
            
            <div className="flex justify-center -space-x-4 mb-6">
              {agents.map((agent, i) => (
                <div key={i} className="relative transition-transform hover:-translate-y-2 hover:z-10 cursor-pointer">
                  <div className="w-20 h-20 rounded-full border-4 border-slate-800 overflow-hidden bg-slate-700">
                    <img src={agent.img} alt={agent.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-800 rounded-full"></div>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-4 text-center w-full">
              <p className="text-slate-300 font-medium text-sm">Typical reply time:</p>
              <p className="text-emerald-400 font-black text-xl">Under 2 mins</p>
            </div>
            
          </div>
        </div>

        {/* Abstract background shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 z-0 pointer-events-none"></div>

      </div>
    </div>
  );
}
