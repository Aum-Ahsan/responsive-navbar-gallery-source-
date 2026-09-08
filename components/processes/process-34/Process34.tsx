import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';

export default function Process34() {
  const [activeVideo, setActiveVideo] = useState(0);

  const steps = [
    { title: 'Intro Demo', duration: '1:20' },
    { title: 'Advanced Config', duration: '3:45' },
    { title: 'Deployment', duration: '2:10' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 font-sans my-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Video Process Walkthrough</h2>

      <div className="bg-gray-900 rounded-[2rem] p-4 shadow-2xl border border-gray-800">
        {/* Mock Video Player */}
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
          <PlayCircle size={64} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all z-10" />
          <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-white text-sm font-semibold">
            Playing: {steps[activeVideo].title}
          </div>
        </div>

        {/* Playlist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {steps.map((step, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveVideo(idx)}
              className={`flex items-center justify-between p-4 rounded-xl text-left transition-colors ${activeVideo === idx ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <span className="font-semibold">{step.title}</span>
              </div>
              <span className="text-xs opacity-70">{step.duration}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
