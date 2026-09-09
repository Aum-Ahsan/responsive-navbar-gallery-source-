"use client";
import React from 'react';
import { Briefcase, ArrowRight, MapPin, Clock } from 'lucide-react';

export default function Cta42() {
  const roles = [
    { title: "Senior React Developer", team: "Engineering", type: "Remote", time: "Full-time" },
    { title: "Product Designer", team: "Design", type: "New York", time: "Full-time" },
    { title: "Marketing Director", team: "Marketing", type: "London", time: "Full-time" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-stone-50 rounded-[2.5rem] border border-stone-200 overflow-hidden shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 text-center md:text-left">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-inner">
            <Briefcase size={32} />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 mb-6 tracking-tight">
            Come build the future with us.
          </h2>
          
          <p className="text-stone-500 text-lg font-medium mb-10 max-w-lg mx-auto md:mx-0">
            We are looking for passionate builders who want to make a global impact. Join our fully distributed team of 150+ creators.
          </p>

          <button className="w-full sm:w-auto px-8 py-4 bg-stone-900 hover:bg-black text-white font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2">
            View All 24 Open Roles <ArrowRight size={18} />
          </button>
        </div>

        <div className="w-full md:w-[450px]">
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">Featured Roles</h3>
          
          <div className="space-y-4">
            {roles.map((role, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg group-hover:text-emerald-600 transition-colors">{role.title}</h4>
                    <p className="text-stone-400 text-sm font-medium">{role.team}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-600 transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 text-xs font-bold text-stone-500 bg-stone-50 px-2 py-1 rounded-md">
                    <MapPin size={12} /> {role.type}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-stone-500 bg-stone-50 px-2 py-1 rounded-md">
                    <Clock size={12} /> {role.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
