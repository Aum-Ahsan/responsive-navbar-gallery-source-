"use client";
import React from 'react';
import { BookOpen, Video, Clock, CheckCircle2, Play } from 'lucide-react';

export default function Cta41() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-indigo-950 rounded-[2.5rem] border border-indigo-800 shadow-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 z-0"></div>

        <div className="flex-1 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-900 border border-indigo-700 text-indigo-300 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            <BookOpen size={14} /> Full Certification Path
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Master Advanced System Design.
          </h2>
          
          <p className="text-indigo-200 text-lg font-medium mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Join 12,000+ senior engineers learning how to architect scalable, distributed systems from FAANG veterans.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-950 font-black rounded-xl transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-gray-100 flex items-center justify-center gap-2 text-lg">
              Enroll Now - $199
            </button>
            <p className="text-indigo-300 text-sm font-medium">Includes lifetime access.</p>
          </div>
        </div>

        <div className="w-full lg:w-[450px] relative z-10">
          <div className="bg-indigo-900/50 backdrop-blur border border-indigo-700/50 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-white text-lg">Curriculum Summary</h3>
              <div className="text-indigo-300 text-sm font-bold flex items-center gap-1"><Clock size={14} /> 24h</div>
            </div>

            <div className="space-y-3">
              {[
                { title: "Module 1: Load Balancing", type: "video", duration: "2.5h", done: true },
                { title: "Module 2: Caching Strategies", type: "video", duration: "4h", done: false },
                { title: "Module 3: Database Sharding", type: "interactive", duration: "3h", done: false },
                { title: "Module 4: Message Queues", type: "video", duration: "5h", done: false },
              ].map((mod, i) => (
                <div key={i} className="bg-indigo-950/50 rounded-xl p-4 border border-indigo-800/50 flex items-center gap-4 hover:bg-indigo-800/50 transition-colors cursor-pointer group">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${mod.done ? 'bg-emerald-500/20 text-emerald-400' : 'bg-indigo-800 text-indigo-300'}`}>
                    {mod.done ? <CheckCircle2 size={16} /> : <Play size={14} className="ml-0.5 group-hover:scale-110 transition-transform" fill="currentColor" />}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-sm ${mod.done ? 'text-indigo-300' : 'text-white'}`}>{mod.title}</h4>
                    <p className="text-indigo-400 text-xs font-medium mt-0.5 flex items-center gap-1">
                      {mod.type === 'video' ? <Video size={10} /> : <BookOpen size={10} />} {mod.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-indigo-800/50 flex items-center justify-center text-indigo-300 text-sm font-bold cursor-pointer hover:text-white transition-colors">
              View All 12 Modules
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
