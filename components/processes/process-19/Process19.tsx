"use client";
import React from 'react';
import { ArrowDown, CornerDownRight } from 'lucide-react';

export default function Process19() {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 font-sans">
      <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Authentication Flowchart</h2>

      <div className="flex flex-col items-center">
        {/* Node 1 */}
        <div className="bg-stone-800 text-white px-8 py-3 rounded-full font-bold shadow-md">User Requests Access</div>
        
        <ArrowDown className="text-stone-300 my-2" />

        {/* Decision Node */}
        <div className="bg-amber-100 border-2 border-amber-300 text-amber-900 px-8 py-6 rounded-lg font-bold shadow-sm rotate-3 transform relative">
          Has valid JWT token?
        </div>

        <div className="flex w-full max-w-md justify-between px-12 -mt-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-stone-500 mb-1 bg-white px-2">YES</span>
            <div className="w-px h-16 bg-stone-300"></div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-stone-500 mb-1 bg-white px-2">NO</span>
            <div className="w-px h-16 bg-stone-300"></div>
          </div>
        </div>

        <div className="flex w-full max-w-lg justify-between mt-0">
          {/* Yes Branch */}
          <div className="bg-emerald-100 border border-emerald-300 text-emerald-800 px-6 py-4 rounded-xl text-center w-48 shadow-sm">
            <h4 className="font-bold">Grant Access</h4>
            <p className="text-xs mt-1">Load Dashboard UI</p>
          </div>

          {/* No Branch */}
          <div className="bg-rose-100 border border-rose-300 text-rose-800 px-6 py-4 rounded-xl text-center w-48 shadow-sm">
            <h4 className="font-bold">Deny Access</h4>
            <p className="text-xs mt-1">Redirect to /login</p>
          </div>
        </div>
      </div>
    </div>
  );
}
