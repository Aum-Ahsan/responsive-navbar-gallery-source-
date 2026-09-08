"use client";
import React from 'react';

export default function Process04() {
  const cards = [
    { title: 'Research', tag: 'Phase 1', color: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', desc: 'User interviews and market analysis.' },
    { title: 'Ideation', tag: 'Phase 2', color: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', desc: 'Brainstorming sessions and mind mapping.' },
    { title: 'Execution', tag: 'Phase 3', color: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', desc: 'Coding, building, and assembling.' },
    { title: 'Review', tag: 'Phase 4', color: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', desc: 'Quality assurance and client feedback.' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 font-sans">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Process Cards Layout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className={`relative bg-white rounded-3xl p-8 border ${card.border} shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden cursor-pointer hover:-translate-y-2`}>
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-5 rounded-bl-full transition-transform duration-500 group-hover:scale-150`}></div>
            
            <div className="flex justify-between items-start mb-12 relative z-10">
              <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${card.light} ${card.text}`}>
                {card.tag}
              </span>
              <span className="text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                0{idx + 1}
              </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-500 font-medium">{card.desc}</p>
            </div>
            
            <div className={`mt-8 h-1 w-0 ${card.color} rounded-full transition-all duration-500 group-hover:w-full`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
