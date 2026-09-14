"use client";
import React from 'react';
import { Users } from 'lucide-react';

export default function Newsletter32() {
  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-4">
      <div className="bg-amber-50 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden border border-amber-200 shadow-sm">
        
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative mb-4">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" 
                alt="Creator Avatar" 
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm flex items-center gap-1.5 text-xs font-bold text-amber-600">
                <Users size={14} />
                25k+
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Jane Doe</h3>
            <p className="text-gray-500 text-sm">Design Thinker</p>
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              A weekly letter on design, tech & life.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every Sunday, I share 1 deep dive, 2 interesting links, and 3 personal thoughts. Join 25,000+ readers.
            </p>

            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your best email"
                className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-transparent focus:outline-none focus:border-amber-400 transition-colors shadow-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-5 py-4 rounded-2xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors shadow-md shadow-amber-200"
              >
                Join the club
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
