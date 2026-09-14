// @ts-nocheck
"use client";
import React, { useState } from "react";
import { GitCommit, Star, GitPullRequest, Terminal, Pause, Play, Gauge } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const COMMITS = [
  {
    repo: "facebook/react",
    hash: "a4f89d2",
    author: "gaearon",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
    message: "Optimize server component streaming chunk flush",
    lang: "TypeScript",
    langColor: "bg-blue-400",
    time: "4m ago",
    stars: "228k",
  },
  {
    repo: "rust-lang/rust",
    hash: "c901e18",
    author: "compiler-bot",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&q=80",
    message: "Stabilize const generics expression evaluations",
    lang: "Rust",
    langColor: "bg-orange-500",
    time: "12m ago",
    stars: "94k",
  },
  {
    repo: "vercel/next.js",
    hash: "7f29b04",
    author: "timneutkens",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
    message: "Turbopack incremental build cache compression",
    lang: "Rust / TS",
    langColor: "bg-cyan-400",
    time: "18m ago",
    stars: "124k",
  },
  {
    repo: "golang/go",
    hash: "55d14e0",
    author: "rsc",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    message: "cmd/compile: inline small loop induction variables",
    lang: "Go",
    langColor: "bg-teal-400",
    time: "24m ago",
    stars: "120k",
  },
  {
    repo: "tailwindlabs/tailwindcss",
    hash: "e391b8a",
    author: "adamwathan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    message: "v4.0 Oxide lightning css integration parser",
    lang: "Rust",
    langColor: "bg-orange-500",
    time: "32m ago",
    stars: "82k",
  },
];

export default function Carousel41() {
  const [speed, setSpeed] = useState<"normal" | "fast" | "slow">("normal");
  const [isPaused, setIsPaused] = useState(false);

  const durationSec = speed === "fast" ? 14 : speed === "slow" ? 36 : 22;

  return (
    <CarouselShell
      name="Infinite Marquee with Velocity Modulation"
      index={41}
      headerControls={
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-zinc-800/80 p-1 rounded-full border border-zinc-700">
            {(["slow", "normal", "fast"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase transition ${
                  speed === s ? "bg-emerald-500 text-black shadow" : "text-zinc-400 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-full border border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 transition"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play size={14} className="fill-white" /> : <Pause size={14} />}
          </button>
        </div>
      }
    >
      <div className="w-full bg-[#08090d] text-white p-6 sm:p-8 rounded-[2rem] border border-zinc-800 shadow-2xl overflow-hidden relative">
        {/* Top Terminal Info */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <Terminal size={18} className="text-emerald-400" />
            <span className="font-mono text-xs font-bold text-zinc-300">
              global-git-activity.stream --live --velocity={speed}
            </span>
          </div>

          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            {isPaused ? "STREAM PAUSED" : "2,480 commits/min"}
          </span>
        </div>

        {/* Continuous Marquee Track */}
        <div
          className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-4 w-max"
            style={{
              animation: `marquee ${durationSec}s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...COMMITS, ...COMMITS, ...COMMITS].map((c, idx) => (
              <div
                key={`${c.hash}-${idx}`}
                className="w-80 bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/50 rounded-xl p-4 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-white truncate hover:underline cursor-pointer">
                      {c.repo}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400 shrink-0">
                      <Star size={11} className="fill-amber-400" />
                      <span>{c.stars}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mb-3">
                    {c.message}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <img src={c.avatar} alt={c.author} className="w-4 h-4 rounded-full" />
                    <span className="truncate max-w-[80px]">{c.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${c.langColor}`} />
                      {c.lang}
                    </span>
                    <span className="text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded text-[10px]">
                      {c.hash}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
        `}</style>
      </div>
    </CarouselShell>
  );
}
