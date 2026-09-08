import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Process06() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const data = [
    { title: 'Step 1: Account Creation', content: 'Sign up using your email or SSO provider. Verify your identity to unlock dashboard features.' },
    { title: 'Step 2: Profile Setup', content: 'Upload an avatar, set your timezone, and configure notification preferences.' },
    { title: 'Step 3: Connect Integrations', content: 'Link your GitHub, Slack, and Jira accounts to sync your workflows seamlessly.' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-8 font-sans">
      <h2 className="text-3xl font-bold text-indigo-950 mb-8">Accordion Workflow</h2>
      <div className="space-y-4">
        {data.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-indigo-500 shadow-md' : 'border-gray-200 hover:border-indigo-300'}`}
            >
              <button 
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-indigo-50' : 'bg-white'}`}
              >
                <span className={`font-bold text-lg ${isOpen ? 'text-indigo-700' : 'text-gray-700'}`}>{item.title}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 bg-indigo-50 text-indigo-900/80 leading-relaxed border-t border-indigo-100/50 mt-4">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
