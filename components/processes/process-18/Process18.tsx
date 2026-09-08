"use client";
import React, { useState } from 'react';
import { GitBranch, Box, FileText, Monitor, Check } from 'lucide-react';

export default function Process18() {
  const [choice, setChoice] = useState<'design' | 'dev' | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto p-12 font-sans bg-lime-50 rounded-[2rem] text-center my-10 border border-lime-100">
      <div className="w-16 h-16 bg-lime-200 text-lime-700 rounded-full flex items-center justify-center mx-auto mb-6">
        <GitBranch size={32} />
      </div>
      <h2 className="text-3xl font-bold text-lime-950 mb-4">Branching Decision</h2>
      <p className="text-lime-800 mb-10">Select your role to see your customized onboarding path.</p>

      {/* Decision Node */}
      <div className="flex justify-center gap-6 mb-12">
        <button 
          onClick={() => setChoice('design')}
          className={`px-8 py-4 rounded-xl font-bold flex flex-col items-center gap-2 transition-all ${choice === 'design' ? 'bg-lime-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-lime-100'}`}
        >
          <Monitor size={24} /> I'm a Designer
        </button>
        <button 
          onClick={() => setChoice('dev')}
          className={`px-8 py-4 rounded-xl font-bold flex flex-col items-center gap-2 transition-all ${choice === 'dev' ? 'bg-lime-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-lime-100'}`}
        >
          <Box size={24} /> I'm a Developer
        </button>
      </div>

      {/* Resulting Branches */}
      <div className="relative min-h-[150px]">
        {choice === null && (
          <div className="text-gray-400 italic mt-8">Please make a selection above.</div>
        )}

        {choice === 'design' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-px h-8 bg-lime-300 mx-auto mb-4"></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-lime-100 max-w-sm mx-auto">
              <h3 className="font-bold text-lg mb-2">Design Path Activated</h3>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><Check size={16} className="text-lime-500 mr-2" /> Access Figma Workspace</li>
                <li className="flex items-center"><Check size={16} className="text-lime-500 mr-2" /> Download Brand Assets</li>
                <li className="flex items-center"><Check size={16} className="text-lime-500 mr-2" /> Join Design Slack Channel</li>
              </ul>
            </div>
          </div>
        )}

        {choice === 'dev' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-px h-8 bg-lime-300 mx-auto mb-4"></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-lime-100 max-w-sm mx-auto">
              <h3 className="font-bold text-lg mb-2">Developer Path Activated</h3>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><Check size={16} className="text-lime-500 mr-2" /> Fork GitHub Repository</li>
                <li className="flex items-center"><Check size={16} className="text-lime-500 mr-2" /> Setup Local Environment</li>
                <li className="flex items-center"><Check size={16} className="text-lime-500 mr-2" /> Review API Docs</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
