// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Activity, Bell, Radio, Trophy } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const MATCHES = [
  {
    id: "m1",
    league: "Premier League",
    status: "LIVE",
    minute: "74'",
    home: { name: "Arsenal", code: "ARS", score: 2, logo: "🔴" },
    away: { name: "Chelsea", code: "CHE", score: 1, logo: "🔵" },
    odds: "1.45 • 3.20 • 5.50",
    scorers: "Saka 23', Havertz 58' | Palmer 67'",
  },
  {
    id: "m2",
    league: "Champions League",
    status: "LIVE",
    minute: "89'",
    home: { name: "Real Madrid", code: "RMA", score: 3, logo: "⚪" },
    away: { name: "Bayern Munich", code: "BAY", score: 2, logo: "🔴" },
    odds: "1.80 • 2.90 • 4.10",
    scorers: "Vinicius 14' 78', Bellingham 86' | Kane 33' (P)",
  },
  {
    id: "m3",
    league: "Serie A",
    status: "HT",
    minute: "Half Time",
    home: { name: "Inter Milan", code: "INT", score: 1, logo: "⚫" },
    away: { name: "AC Milan", code: "MIL", score: 1, logo: "🔴" },
    odds: "2.10 • 3.00 • 3.60",
    scorers: "Martinez 38' | Leão 44'",
  },
  {
    id: "m4",
    league: "NBA",
    status: "Q4",
    minute: "3:45 4th",
    home: { name: "Celtics", code: "BOS", score: 112, logo: "🟢" },
    away: { name: "Warriors", code: "GSW", score: 108, logo: "🟡" },
    odds: "Spread: BOS -4.5",
    scorers: "Tatum 34 pts | Curry 31 pts",
  },
  {
    id: "m5",
    league: "La Liga",
    status: "FT",
    minute: "Final",
    home: { name: "Barcelona", code: "BAR", score: 4, logo: "🔴" },
    away: { name: "Atlético Madrid", code: "ATM", score: 0, logo: "⚪" },
    odds: "Result Settled",
    scorers: "Yamal 12' 49', Lewandowski 61' 75'",
  },
];

export default function Carousel37() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedLeague, setSelectedLeague] = useState("ALL");
  const [pinned, setPinned] = useState<Record<string, boolean>>({});

  const filteredMatches =
    selectedLeague === "ALL"
      ? MATCHES
      : MATCHES.filter((m) => m.league.toUpperCase().includes(selectedLeague));

  const togglePin = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPinned((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <CarouselShell
      name="Live Sports Match Center Ticker"
      index={37}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Real-time live scores &amp; odds
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
      <div className="w-full bg-[#121318] text-white p-5 sm:p-7 rounded-[1.75rem] border border-zinc-800 shadow-xl">
        {/* League Filter Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <h3 className="text-lg font-black tracking-tight text-white flex items-center gap-2">
              <Trophy size={18} className="text-amber-400" />
              Global Match Center
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
            {["ALL", "PREMIER", "CHAMPIONS", "NBA", "LA LIGA"].map((league) => (
              <button
                key={league}
                onClick={() => setSelectedLeague(league)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  selectedLeague === league
                    ? "bg-emerald-500 text-black shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {league}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-4">
            {filteredMatches.map((m) => {
              const isLive = m.status === "LIVE" || m.status === "Q4";
              const isPinned = pinned[m.id];

              return (
                <div
                  key={m.id}
                  className="flex-[0_0_88%] sm:flex-[0_0_46%] md:flex-[0_0_34%] lg:flex-[0_0_28%] min-w-0"
                >
                  <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition-all duration-300 shadow-md flex flex-col justify-between h-full">
                    {/* Top Match Status */}
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-3 text-xs">
                      <span className="font-bold text-zinc-400 uppercase tracking-wider text-[11px]">
                        {m.league}
                      </span>

                      <div className="flex items-center gap-2">
                        {isLive ? (
                          <span className="flex items-center gap-1 font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full text-[10px]">
                            <Radio size={10} className="animate-pulse" />
                            {m.minute}
                          </span>
                        ) : (
                          <span className="font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full text-[10px]">
                            {m.minute}
                          </span>
                        )}

                        <button
                          onClick={(e) => togglePin(m.id, e)}
                          className={`p-1 rounded-md transition ${
                            isPinned ? "text-amber-400" : "text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          <Bell size={13} className={isPinned ? "fill-amber-400" : ""} />
                        </button>
                      </div>
                    </div>

                    {/* Team Scores */}
                    <div className="space-y-2.5 my-1">
                      {/* Home */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-base">{m.home.logo}</span>
                          <span className="text-sm font-bold text-white truncate">{m.home.name}</span>
                        </div>
                        <span className="text-xl font-black font-mono text-white pl-2">
                          {m.home.score}
                        </span>
                      </div>

                      {/* Away */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-base">{m.away.logo}</span>
                          <span className="text-sm font-bold text-white truncate">{m.away.name}</span>
                        </div>
                        <span className="text-xl font-black font-mono text-white pl-2">
                          {m.away.score}
                        </span>
                      </div>
                    </div>

                    {/* Scorers / Highlight */}
                    <p className="text-[10px] text-zinc-400 truncate mt-2 font-mono">
                      {m.scorers}
                    </p>

                    {/* Odds & Details Footer */}
                    <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-zinc-400 font-mono text-[10px]">{m.odds}</span>
                      <button className="font-bold text-emerald-400 hover:text-emerald-300 transition text-[11px]">
                        Match Stats →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CarouselShell>
  );
}
