"use client";
import React from 'react';
import { Database, Server, Globe, Smartphone } from 'lucide-react';

export default function Process60() {
  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-4 bg-[#f8f9fa] rounded-[3rem] my-10 border border-gray-200">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 font-mono tracking-tight">System Architecture</h2>
        <p className="text-gray-500 font-mono text-sm">Data flow and request lifecycle</p>
      </div>

      <div className="relative max-w-3xl mx-auto h-[400px]">
        {/* Connection Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {/* Mobile to API */}
          <path d="M 15% 20% C 15% 50%, 50% 20%, 50% 50%" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
          {/* Web to API */}
          <path d="M 85% 20% C 85% 50%, 50% 20%, 50% 50%" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
          {/* API to DB */}
          <path d="M 50% 50% L 50% 85%" fill="none" stroke="#cbd5e1" strokeWidth="2" />
        </svg>

        {/* Nodes */}
        {/* Mobile Client */}
        <div className="absolute top-[20%] left-[15%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center text-indigo-600 mb-3 hover:-translate-y-1 transition-transform cursor-pointer">
            <Smartphone size={28} />
          </div>
          <span className="font-mono text-xs font-bold text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Client App</span>
        </div>

        {/* Web Client */}
        <div className="absolute top-[20%] left-[85%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center text-teal-600 mb-3 hover:-translate-y-1 transition-transform cursor-pointer">
            <Globe size={28} />
          </div>
          <span className="font-mono text-xs font-bold text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Web App</span>
        </div>

        {/* API Gateway / Server */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-900 rounded-3xl shadow-xl border-4 border-white flex items-center justify-center text-white mb-3 relative group cursor-pointer">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <Server size={32} />
          </div>
          <span className="font-mono text-sm font-bold text-gray-900 bg-white px-4 py-1.5 rounded-full border-2 border-gray-900 shadow-sm">API Gateway</span>
        </div>

        {/* Database */}
        <div className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center text-rose-600 mb-3 hover:-translate-y-1 transition-transform cursor-pointer">
            <Database size={28} />
          </div>
          <span className="font-mono text-xs font-bold text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">PostgreSQL</span>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
      `}} />
    </div>
  );
}
