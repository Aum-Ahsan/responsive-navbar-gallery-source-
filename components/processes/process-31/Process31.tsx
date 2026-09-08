"use client";
import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Process31() {
  const oldProcess = ['Manual Data Entry', 'Email Approvals', 'Spreadsheet Tracking', 'Delayed Reporting'];
  const newProcess = ['Automated Sync', 'One-Click Approvals', 'Live Dashboard', 'Real-time Insights'];

  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans my-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Before & After</h2>
        <p className="text-gray-500 mt-2">See how our streamlined workflow compares.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Old Process */}
        <div className="w-full md:w-5/12 bg-red-50 p-8 rounded-3xl border border-red-100">
          <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center"><XCircle className="mr-2 text-red-500" /> The Old Way</h3>
          <div className="space-y-4 relative">
            {/* Red connector line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-red-200 -z-10"></div>
            {oldProcess.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm opacity-70">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                <span className="text-gray-600 line-through">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transition */}
        <div className="w-full md:w-2/12 flex justify-center py-4">
          <div className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/30 transform md:rotate-0 rotate-90">
            <ArrowRight size={32} />
          </div>
        </div>

        {/* New Process */}
        <div className="w-full md:w-5/12 bg-emerald-50 p-8 rounded-3xl border border-emerald-100 shadow-[0_20px_50px_rgba(16,185,129,0.1)]">
          <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center"><CheckCircle2 className="mr-2 text-emerald-500" /> The New Way</h3>
          <div className="space-y-4 relative">
             {/* Green connector line */}
             <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-emerald-200 -z-10"></div>
            {newProcess.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-md transform hover:-translate-y-1 transition-transform cursor-default">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                <span className="text-gray-900 font-bold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
