"use client";
import React from 'react';

export default function Process59() {
  const tasks = [
    { month: 'Month 1', title: 'Venue Booking', height: 'h-48', color: 'bg-rose-50 text-rose-900 border-rose-200' },
    { month: 'Month 2', title: 'Speaker Outreach', height: 'h-64', color: 'bg-blue-50 text-blue-900 border-blue-200' },
    { month: 'Month 3', title: 'Marketing Campaign', height: 'h-56', color: 'bg-emerald-50 text-emerald-900 border-emerald-200' },
    { month: 'Month 4', title: 'Ticketing & Registration', height: 'h-72', color: 'bg-amber-50 text-amber-900 border-amber-200' },
    { month: 'Month 5', title: 'Logistics & Catering', height: 'h-40', color: 'bg-purple-50 text-purple-900 border-purple-200' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="mb-16">
        <h2 className="text-4xl font-serif text-gray-900 mb-4">Event Timeline</h2>
        <p className="text-gray-500 text-lg">A staggered roadmap to the main day.</p>
      </div>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 hide-scrollbar items-end h-[400px]">
        {tasks.map((task, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[140px] flex-1 group cursor-pointer">
            <div className={`w-full ${task.height} ${task.color} rounded-t-3xl border-t border-x p-4 sm:p-6 relative transition-all duration-300 group-hover:brightness-95 flex flex-col justify-between`}>
              <span className="text-xs font-bold uppercase tracking-widest opacity-60 mix-blend-multiply">{task.month}</span>
              <h3 className="font-semibold text-lg leading-tight mt-4">{task.title}</h3>
            </div>
            {/* Timeline base line */}
            <div className="w-full h-1 bg-gray-200 group-hover:bg-gray-800 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
