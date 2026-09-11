"use client";
import React from 'react';
import { Database, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function Cta27() {
  const usage = 94; // 94% usage
  
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
        
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500/20 text-amber-500 rounded-xl flex items-center justify-center">
              <Database size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Storage Limit Reached Soon</h2>
              <p className="text-slate-400 text-sm font-medium">Free Tier • Workspace</p>
            </div>
          </div>
          <AlertCircle className="text-amber-500" size={24} />
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm font-bold mb-2">
            <span className="text-amber-500">{usage}GB Used</span>
            <span className="text-slate-500">100GB Total</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full relative" 
              style={{ width: `${usage}%` }}
            >
              {/* Animated pulse at the edge of the bar */}
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse rounded-full"></div>
            </div>
          </div>
          <p className="text-slate-400 text-sm mt-3 font-medium">
            You have <strong className="text-white">6GB</strong> of storage remaining. Once you hit the limit, your deployments will be paused.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
          <div className="flex-1">
            <div className="text-sm text-slate-300 font-bold mb-1">Pro Plan</div>
            <div className="text-xs text-slate-500">Upgrade for 500GB storage, team roles, and priority support.</div>
          </div>
          <button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 hover:bg-gray-100 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0">
            Upgrade Plan <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
