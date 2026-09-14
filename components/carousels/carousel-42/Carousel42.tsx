// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Command, CornerDownLeft, Download, Check, Sparkles, Terminal, Copy, Shield } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const EXTENSIONS = [
  {
    id: "color-picker",
    name: "Color Inspector Pro",
    desc: "Instant hex/HSL loupe, palette export, and WCAG contrast ratio scoring.",
    author: "pedro_ux",
    installs: "148k",
    shortcut: "⌘ ⌥ C",
    actionMsg: "Copied #6366F1 to clipboard!",
    icon: "🎨",
    gradient: "from-pink-500/20 to-purple-500/10 border-pink-500/30",
  },
  {
    id: "github-pr",
    name: "GitHub Review Inbox",
    desc: "Triage pull requests, approve CI checks, and merge branches with keyboard shortcuts.",
    author: "linear_team",
    installs: "290k",
    shortcut: "⌘ G",
    actionMsg: "PR #892 approved & merged!",
    icon: "🐙",
    gradient: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
  },
  {
    id: "window-manager",
    name: "Tiling Grid Layout",
    desc: "Snap windows into halves, thirds, quadrants, or center focus with zero latency.",
    author: "raycast_hq",
    installs: "420k",
    shortcut: "⌥ ⌃ ↵",
    actionMsg: "Window snapped to Left 50%!",
    icon: "🪟",
    gradient: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
  },
  {
    id: "ai-summarize",
    name: "Neural Claude Summary",
    desc: "Select any highlighted text on macOS to synthesize executive takeaways.",
    author: "anthropic_dev",
    installs: "310k",
    shortcut: "⌥ Space",
    actionMsg: "3-bullet synthesis generated!",
    icon: "⚡",
    gradient: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
  },
];

export default function Carousel42() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const triggerAction = (msg: string) => {
    setActionFeedback(msg);
    setTimeout(() => {
      setActionFeedback(null);
    }, 2200);
  };

  return (
    <CarouselShell
      name="Raycast Launcher Extension Store"
      index={42}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Keyboard shortcut cards • Interactive simulation
          </span>
          <button
            onClick={() => api?.scrollPrev()}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      }
    >
      <div className="w-full bg-[#111216] text-white p-6 sm:p-8 rounded-[2rem] border border-zinc-800 shadow-2xl relative">
        {/* Top Raycast Bar */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center font-bold">
              <Command size={16} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">Featured Raycast Extensions</h3>
              <p className="text-[11px] text-zinc-400 font-mono">Store Catalog • 1,420 Tools Available</p>
            </div>
          </div>

          {/* Feedback Toast */}
          <div
            className={`transition-all duration-300 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold ${
              actionFeedback
                ? "bg-emerald-500 text-black shadow-lg scale-100 opacity-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <Check size={14} />
            <span>{actionFeedback || "Ready"}</span>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-5">
            {EXTENSIONS.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_88%] sm:flex-[0_0_52%] md:flex-[0_0_42%] lg:flex-[0_0_32%] min-w-0"
              >
                <div
                  className={`rounded-2xl p-5 border bg-gradient-to-br ${item.gradient} backdrop-blur-xl shadow-lg flex flex-col justify-between h-full hover:scale-[1.02] transition-all duration-300`}
                >
                  <div>
                    {/* Icon & Shortcut Pill */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-center text-2xl shadow">
                        {item.icon}
                      </div>

                      <span className="font-mono text-xs font-bold text-zinc-300 bg-zinc-900/80 px-2.5 py-1 rounded-lg border border-white/10 shadow-inner">
                        {item.shortcut}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1.5">{item.name}</h4>
                    <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2 mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-mono">
                      <Download size={12} />
                      <span>{item.installs}</span>
                    </div>

                    <button
                      onClick={() => triggerAction(item.actionMsg)}
                      className="px-3 py-1.5 rounded-lg bg-white/90 text-black hover:bg-white text-xs font-bold transition shadow flex items-center gap-1.5"
                    >
                      <span>Simulate</span>
                      <CornerDownLeft size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CarouselShell>
  );
}
