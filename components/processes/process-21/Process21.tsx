"use client";
import React, { useState } from 'react';
import { Check, Circle } from 'lucide-react';

export default function Process21() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Define project scope and requirements', done: true },
    { id: 2, text: 'Assemble the core engineering team', done: true },
    { id: 3, text: 'Setup cloud infrastructure', done: false },
    { id: 4, text: 'Deploy initial boilerplate', done: false },
    { id: 5, text: 'Schedule kickoff meeting', done: false }
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const progress = Math.round((tasks.filter(t => t.done).length / tasks.length) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto p-8 font-sans bg-emerald-50 rounded-[2rem] my-10 border border-emerald-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-emerald-950">Project Checklist</h2>
        <p className="text-emerald-700/70 mt-1">Check off tasks to advance the project status.</p>
      </div>

      <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
        <div className="flex justify-between items-end mb-2">
          <span className="font-bold text-emerald-900">Completion</span>
          <span className="text-2xl font-black text-emerald-500">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map(task => (
          <div 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${task.done ? 'bg-white border-emerald-200 shadow-sm opacity-60' : 'bg-white border-transparent hover:shadow-md'}`}
          >
            <div className={`w-6 h-6 rounded-md flex items-center justify-center mr-4 transition-colors ${task.done ? 'bg-emerald-500 text-white' : 'border-2 border-gray-300 text-transparent'}`}>
              <Check size={16} strokeWidth={3} />
            </div>
            <span className={`font-semibold transition-all ${task.done ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
