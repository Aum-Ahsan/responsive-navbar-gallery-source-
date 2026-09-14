"use client";
import React from 'react';
import { Star, Shield, Zap, Trophy } from 'lucide-react';

export default function Process57() {
  const levels = [
    { name: 'Novice', xp: '0 XP', icon: Star, color: 'from-amber-200 to-amber-400', unlocked: true },
    { name: 'Apprentice', xp: '1,000 XP', icon: Shield, color: 'from-blue-300 to-blue-500', unlocked: true },
    { name: 'Expert', xp: '5,000 XP', icon: Zap, color: 'from-purple-400 to-purple-600', unlocked: false },
    { name: 'Master', xp: '10,000 XP', icon: Trophy, color: 'from-rose-400 to-rose-600', unlocked: false },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4 font-sans">
      <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-16 shadow-2xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none" />
        
        <div className="text-center relative z-10 mb-16">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-3">Player Progression</h2>
          <p className="text-slate-400 font-medium">Earn XP to unlock new tiers and rewards.</p>
        </div>

        <div className="relative z-10">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 w-full h-4 bg-slate-800 rounded-full -translate-y-1/2 hidden sm:block shadow-inner" />
          
          {/* Active Progress Bar */}
          <div className="absolute top-1/2 left-0 w-1/3 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-y-1/2 hidden sm:block shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-12 sm:gap-0">
            {levels.map((level, idx) => {
              const Icon = level.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center group">
                  <div className={`w-24 h-24 rounded-3xl flex items-center justify-center transform rotate-3 transition-transform group-hover:scale-110 group-hover:-rotate-3 shadow-2xl relative z-10
                    ${level.unlocked ? `bg-gradient-to-br ${level.color}` : 'bg-slate-800 border-2 border-slate-700'}`}>
                    <Icon size={40} className={level.unlocked ? 'text-white' : 'text-slate-600'} fill={level.unlocked ? 'currentColor' : 'none'} />
                    
                    {/* Level Badge */}
                    <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center text-xs font-bold text-white">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-700/50">
                    <h3 className={`font-bold text-lg ${level.unlocked ? 'text-white' : 'text-slate-500'}`}>{level.name}</h3>
                    <p className={`text-sm font-mono mt-1 ${level.unlocked ? 'text-blue-300' : 'text-slate-600'}`}>{level.xp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
