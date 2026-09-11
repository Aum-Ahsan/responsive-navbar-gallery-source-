"use client";
import React, { useState } from 'react';
import { Users, X, Plus } from 'lucide-react';

export default function Cta23() {
  const [emails, setEmails] = useState(['sarah@company.com', 'dev-team@company.com']);
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim() && input.includes('@')) {
      e.preventDefault();
      if (!emails.includes(input.trim())) {
        setEmails([...emails, input.trim()]);
      }
      setInput('');
    }
  };

  const removeEmail = (emailToRemove: string) => {
    setEmails(emails.filter(e => e !== emailToRemove));
  };

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl p-8 sm:p-12 lg:p-16 text-center">
        
        <div className="w-20 h-20 bg-slate-800 border border-slate-700 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
          <Users size={40} />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Everything is better together.</h2>
        <p className="text-slate-400 font-medium mb-10 max-w-xl mx-auto">
          Invite your team to your workspace. They'll get instant access to all shared projects, assets, and billing.
        </p>

        <div className="max-w-2xl mx-auto text-left bg-slate-800/50 border border-slate-700 rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
          
          <div className="flex-1 flex flex-wrap items-center gap-2 p-2 min-h-[56px] bg-transparent">
            {emails.map((email, i) => (
              <div key={i} className="flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1.5 rounded-lg text-sm font-medium">
                {email}
                <button onClick={() => removeEmail(email)} className="hover:text-white transition-colors">
                  <X size={14} />
                </button>
              </div>
            ))}
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={emails.length === 0 ? "Enter email addresses..." : ""}
              className="flex-1 min-w-[150px] bg-transparent border-none text-white focus:ring-0 focus:outline-none placeholder:text-slate-500 text-sm py-1.5"
            />
          </div>
          
          <button 
            onClick={() => {
              if (input.trim() && input.includes('@') && !emails.includes(input.trim())) {
                setEmails([...emails, input.trim()]);
                setInput('');
              }
            }}
            className="sm:w-auto w-full px-6 py-3 sm:py-0 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <Plus size={18} /> Send Invites
          </button>
          
        </div>
        
        <div className="mt-4 text-xs text-slate-500 font-medium">
          Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400">Enter</kbd> to add multiple emails.
        </div>
        
      </div>
    </div>
  );
}
