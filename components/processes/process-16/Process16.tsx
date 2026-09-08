import React from 'react';
import { Clock, Activity, CheckCircle } from 'lucide-react';

export default function Process16() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 font-sans">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-sky-950">Three Phase Methodology</h2>
        <p className="text-sky-700/60 mt-2">Before, During, and After engagement models.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Before */}
        <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm text-sky-500 flex items-center justify-center mb-6">
            <Clock size={32} />
          </div>
          <h3 className="text-xl font-bold text-sky-900 mb-4 uppercase tracking-wider text-sm">Before (Prep)</h3>
          <ul className="space-y-3 text-sky-800/70 text-sm">
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></span> Initial Consultation</li>
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></span> Asset Gathering</li>
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></span> Timeline Creation</li>
          </ul>
        </div>

        {/* During */}
        <div className="bg-sky-500 rounded-3xl p-8 shadow-xl shadow-sky-500/20 text-white flex flex-col items-center text-center transform md:-translate-y-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl text-white flex items-center justify-center mb-6 backdrop-blur">
            <Activity size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider text-sm">During (Execution)</h3>
          <ul className="space-y-3 text-sky-100 text-sm">
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span> Active Development</li>
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span> Weekly Syncs</li>
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span> Iterative Testing</li>
          </ul>
        </div>

        {/* After */}
        <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm text-emerald-500 flex items-center justify-center mb-6">
            <CheckCircle size={32} />
          </div>
          <h3 className="text-xl font-bold text-sky-900 mb-4 uppercase tracking-wider text-sm">After (Delivery)</h3>
          <ul className="space-y-3 text-sky-800/70 text-sm">
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span> Final Sign-off</li>
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span> Handover Assets</li>
            <li className="flex items-center justify-center"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span> 30-Day Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
