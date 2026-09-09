"use client";
import React, { useState } from 'react';
import { Star, Trophy, Target, Award } from 'lucide-react';

export default function Process45() {
  const [level, setLevel] = useState(1);
  
  const quests = [
    { id: 1, title: 'Noob Tutorial', xp: 100, icon: Target },
    { id: 2, title: 'First Blood', xp: 250, icon: Star },
    { id: 3, title: 'Boss Fight', xp: 500, icon: Trophy },
    { id: 4, title: 'Grandmaster', xp: 1000, icon: Award }
  ];

  const totalXP = quests.filter(q => q.id <= level).reduce((acc, q) => acc + q.xp, 0);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-8 font-sans bg-slate-900 text-white rounded-3xl my-10 border-[4px] border-indigo-900 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
      
      {/* Player Stats */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-8 bg-slate-800 p-6 rounded-2xl border border-slate-700">
        <div>
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">PLAYER LEVEL {level}</h2>
          <div className="text-sm font-bold text-slate-400 mt-1">RANK: {level === 4 ? 'LEGEND' : 'CHALLENGER'}</div>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-3xl font-black text-indigo-400">{totalXP} <span className="text-lg text-indigo-600">XP</span></div>
        </div>
      </div>

      {/* Quest Line */}
      <div className="space-y-4">
        {quests.map((quest) => {
          const isCompleted = level >= quest.id;
          const isCurrent = level + 1 === quest.id;
          const Icon = quest.icon;

          return (
            <div 
              key={quest.id} 
              className={`flex items-center p-4 rounded-xl border-2 transition-all ${
                isCompleted ? 'bg-indigo-900/40 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 
                isCurrent ? 'bg-slate-800 border-slate-600' : 'bg-slate-900 border-slate-800 opacity-50'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 mr-6 ${isCompleted ? 'bg-amber-500 text-white' : 'bg-slate-700 text-slate-500'}`}>
                <Icon size={28} />
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold ${isCompleted ? 'text-white' : 'text-slate-400'}`}>{quest.title}</h3>
                <p className="text-sm font-bold text-slate-500">Reward: +{quest.xp} XP</p>
              </div>
              <div>
                {isCompleted ? (
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded font-bold text-xs">CLEARED</span>
                ) : isCurrent ? (
                  <button onClick={() => setLevel(quest.id)} className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded font-bold text-xs transition-colors">START QUEST</button>
                ) : (
                  <span className="text-slate-600 font-bold text-xs">LOCKED</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
