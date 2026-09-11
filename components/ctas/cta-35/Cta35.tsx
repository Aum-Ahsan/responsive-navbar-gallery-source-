"use client";
import React from 'react';
import { Headphones, PlayCircle, Plus } from 'lucide-react';

export default function Cta35() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-zinc-950 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 shadow-2xl relative overflow-hidden">
        
        {/* Animated Audio Wave visualizer background (deterministic values - avoids SSR hydration mismatch) */}
        <div className="absolute inset-0 flex items-end justify-between opacity-10 px-4 pointer-events-none pb-0">
          {[
            { h: 37, d: 0.63 }, { h: 25, d: 1.26 }, { h: 83, d: 0.91 }, { h: 51, d: 0.55 },
            { h: 90, d: 1.47 }, { h: 63, d: 0.80 }, { h: 28, d: 1.13 }, { h: 74, d: 0.54 },
            { h: 42, d: 1.38 }, { h: 95, d: 0.67 }, { h: 33, d: 1.01 }, { h: 68, d: 0.79 },
            { h: 81, d: 1.22 }, { h: 22, d: 0.59 }, { h: 57, d: 0.93 }, { h: 45, d: 1.45 },
            { h: 76, d: 0.71 }, { h: 30, d: 1.18 }, { h: 88, d: 0.52 }, { h: 40, d: 0.88 },
            { h: 65, d: 1.33 }, { h: 24, d: 0.61 }, { h: 92, d: 1.49 }, { h: 53, d: 0.76 },
            { h: 35, d: 1.09 }, { h: 79, d: 0.58 }, { h: 48, d: 1.28 }, { h: 70, d: 0.83 },
            { h: 27, d: 0.65 }, { h: 86, d: 1.41 }, { h: 59, d: 0.72 }, { h: 38, d: 0.98 },
            { h: 72, d: 1.15 }, { h: 44, d: 0.56 }, { h: 96, d: 0.87 }, { h: 21, d: 1.37 },
            { h: 60, d: 0.69 }, { h: 84, d: 1.04 }, { h: 32, d: 0.77 }, { h: 50, d: 1.21 },
          ].map(({ h, d }, i) => (
            <div
              key={i}
              className="w-4 bg-white rounded-t-full"
              style={{
                height: `${h}%`,
                animation: `pulse-height ${d}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="w-16 h-16 bg-zinc-800 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg border border-zinc-700">
            <Headphones size={32} />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Listen to "Frontend Daily"
          </h2>
          <p className="text-zinc-400 font-medium text-lg mb-8 max-w-sm mx-auto md:mx-0">
            15-minute bite-sized technical deep dives, every weekday morning.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-white hover:bg-zinc-200 text-zinc-950 font-bold rounded-full transition-colors flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14v-8l6 4-6 4z"/></svg>
              Apple Podcasts
            </button>
            <button className="px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold rounded-full transition-colors flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 14.6c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.8-9.3-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 4-.8 7.4-.5 10.2 1.2.3.1.4.5.2.8zm1.3-2.9c-.3.4-.8.5-1.2.2-2.9-1.8-7.3-2.3-10.7-1.3-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 3.9-1.2 8.7-.6 12 1.4.4.3.5.9.3 1.3zm.1-3c-3.5-2-9-2.2-12.3-1.2-.6.2-1.1-.2-1.3-.7-.2-.6.2-1.1.7-1.3 3.8-1.2 10-1 14 1.3.5.3.7.9.4 1.4-.2.4-.9.6-1.5.5z"/></svg>
              Spotify
            </button>
          </div>
        </div>

        {/* Right Player Mock */}
        <div className="w-full md:w-auto relative z-10">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-2xl w-full sm:w-full sm:w-[260px] md:w-[320px]">
            <img src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1000&auto=format&fit=crop" alt="Podcast Cover" className="w-full h-48 object-cover rounded-2xl mb-6 shadow-md" />
            <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Latest Episode</div>
            <h3 className="text-white font-bold text-lg mb-4 truncate">EP 142: Server Components...</h3>
            
            <div className="h-1.5 w-full bg-zinc-800 rounded-full mb-4 overflow-hidden flex">
              <div className="w-1/3 bg-white h-full rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-zinc-500 text-xs font-bold">04:12</span>
              <div className="flex items-center justify-center bg-white text-zinc-950 w-12 h-12 rounded-full cursor-pointer hover:scale-105 transition-transform">
                <PlayCircle size={28} className="fill-white" />
              </div>
              <span className="text-zinc-500 text-xs font-bold">-11:48</span>
            </div>
          </div>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-height {
          0% { height: 20%; }
          100% { height: 100%; }
        }
      `}} />
    </div>
  );
}
