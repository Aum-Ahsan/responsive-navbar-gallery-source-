"use client";
import React, { useState } from 'react';
import { GripHorizontal } from 'lucide-react';

export default function Process42() {
  const [columns] = useState([
    { id: 'todo', title: 'To Do', color: 'bg-slate-100', text: 'text-slate-600', cards: ['User Research', 'Competitor Analysis'] },
    { id: 'doing', title: 'Doing', color: 'bg-blue-50', text: 'text-blue-600', cards: ['Wireframing', 'UI Design'] },
    { id: 'done', title: 'Done', color: 'bg-emerald-50', text: 'text-emerald-600', cards: ['Project Brief', 'Requirements'] }
  ]);

  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans my-10 bg-white rounded-3xl border border-gray-200 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Kanban Workflow</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(col => (
          <div key={col.id} className={`${col.color} rounded-2xl p-4 min-h-[400px]`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`font-bold ${col.text}`}>{col.title}</h3>
              <span className="bg-white px-2 py-0.5 rounded text-xs font-bold text-gray-500 shadow-sm">{col.cards.length}</span>
            </div>
            
            <div className="space-y-3">
              {col.cards.map((card, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${col.id === 'done' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                      Task
                    </span>
                    <GripHorizontal size={14} className="text-gray-300 group-hover:text-gray-500" />
                  </div>
                  <h4 className={`font-semibold ${col.id === 'done' ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{card}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
