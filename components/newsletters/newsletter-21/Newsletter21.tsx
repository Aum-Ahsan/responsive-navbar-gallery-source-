"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Check, Loader2 } from 'lucide-react';

// Layout constants (all in px)
const FOLDER_H = 200;   // folder front/back height
const PAPER_H  = 160;   // paper height when open
const GAP       = 8;    // gap between paper bottom and folder top
const STAGE_H  = FOLDER_H + PAPER_H + GAP + 40; // 408px — room for tab + paper + folder

export default function Newsletter21() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [opened, setOpened] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isOpen = opened || status === 'success';

  useEffect(() => {
    if (opened) setTimeout(() => inputRef.current?.focus(), 450);
  }, [opened]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  // Paper: when open sits cleanly above folder; when closed hidden inside folder
  const paperBottom = isOpen ? FOLDER_H + GAP : FOLDER_H - 60;  // 208 : 140
  const paperHeight = isOpen ? PAPER_H : 0;
  const paperOpacity = isOpen ? 1 : 0;

  return (
    <div className="w-full p-4 sm:p-8 my-10 font-sans flex flex-col items-center">
      <div className="w-full max-w-lg relative" style={{ height: `${STAGE_H}px` }}>

        {/* ── CONFIDENTIAL tab ── sits flush above folder */}
        <div
          className="absolute left-6 z-0 bg-[#e6c17a] px-6 py-2 rounded-t-xl
                     text-[#8b6b29] font-black uppercase text-sm
                     shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]"
          style={{ bottom: `${FOLDER_H}px` }}
        >
          CONFIDENTIAL
        </div>

        {/* ── Folder back ── */}
        <div
          className="absolute inset-x-0 bottom-0 bg-[#d9b36c] rounded-2xl rounded-tl-none shadow-xl z-10"
          style={{ height: `${FOLDER_H}px` }}
        />

        {/* ── Paper ── slides up completely clear of folder front */}
        <div
          className="absolute inset-x-4 z-20 bg-[#fdfbf7] rounded-xl shadow-lg overflow-hidden"
          style={{
            bottom:     `${paperBottom}px`,
            height:     `${paperHeight}px`,
            opacity:    paperOpacity,
            transition: 'bottom 0.65s ease, height 0.65s ease, opacity 0.45s ease',
          }}
        >
          <div className="p-5 sm:p-6 h-full flex flex-col">
            {status === 'success' ? (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-800">
                <Check size={40} className="text-green-600 mb-2" />
                <h3 className="font-black text-2xl uppercase tracking-widest">Filed.</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                <h3 className="font-bold uppercase tracking-widest border-b-2 border-slate-300 pb-2 text-slate-700">
                  Sign here:
                </h3>
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="email@address.com"
                  className="w-full border-b border-dashed border-slate-400 bg-transparent
                             focus:outline-none px-1 py-1 font-mono text-blue-800 text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="self-end px-6 py-2 bg-slate-800 text-white font-bold
                             rounded shadow flex items-center justify-center w-28 text-sm"
                >
                  {status === 'loading'
                    ? <Loader2 className="animate-spin" size={16} />
                    : 'STAMP'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Folder front (click target) ── z-30 always above paper */}
        <div
          onClick={() => !isOpen && setOpened(true)}
          className={`absolute inset-x-0 bottom-0 bg-[#f0c878] rounded-2xl rounded-tl-none z-30
                      flex items-center justify-center
                      shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.2)]
                      ${!isOpen ? 'cursor-pointer hover:brightness-105' : ''}`}
          style={{ height: `${FOLDER_H}px` }}
        >
          {/* Dashed border + mail icon watermark */}
          <div className="opacity-20 border-4 border-dashed border-amber-900 rounded-xl
                          w-[85%] h-[75%] flex items-center justify-center pointer-events-none">
            <Mail size={80} className="text-amber-900" />
          </div>

          {/* Click hint */}
          <div className={`absolute inset-0 flex items-center justify-center
                           transition-opacity duration-300
                           ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <p className="bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full
                          font-bold text-amber-900 text-sm shadow">
              Click to open
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
