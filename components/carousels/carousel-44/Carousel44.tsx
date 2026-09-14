// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Flame, Trophy, Lock, CheckCircle2, Gift, Sparkles, BookOpen } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const UNITS = [
  {
    id: "unit-1",
    unitNumber: 1,
    title: "Order Food & Drinks",
    desc: "Master essential coffee shop phrases and polite requests in Spanish.",
    status: "completed",
    xp: "+120 XP",
    stars: 3,
    icon: "☕",
    color: "bg-emerald-500 text-white border-emerald-600",
  },
  {
    id: "unit-2",
    unitNumber: 2,
    title: "Directions & City Travel",
    desc: "Navigate metro stations, ask for directions, and locate landmarks.",
    status: "active",
    xp: "+150 XP",
    stars: 1,
    icon: "🧭",
    color: "bg-amber-500 text-white border-amber-600 ring-4 ring-amber-200",
  },
  {
    id: "unit-3",
    unitNumber: 3,
    title: "Mystery Treasure Chest",
    desc: "Complete daily quest bonus to unlock 50 Lingots and double XP boost.",
    status: "chest",
    xp: "+50 Gems",
    stars: 0,
    icon: "🎁",
    color: "bg-purple-500 text-white border-purple-600",
  },
  {
    id: "unit-4",
    unitNumber: 4,
    title: "Past Tense & Storytelling",
    desc: "Describe what happened yesterday using regular preterite conjugations.",
    status: "locked",
    xp: "+180 XP",
    stars: 0,
    icon: "📖",
    color: "bg-stone-300 text-stone-500 border-stone-400",
  },
  {
    id: "unit-5",
    unitNumber: 5,
    title: "Checkpoint Mastery Exam",
    desc: "Demonstrate conversational fluency across all beginner scenarios.",
    status: "locked",
    xp: "+300 XP",
    stars: 0,
    icon: "👑",
    color: "bg-stone-300 text-stone-500 border-stone-400",
  },
];

export default function Carousel44() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [streak, setStreak] = useState(14);
  const [completedState, setCompletedState] = useState<Record<string, boolean>>({});

  const completeActive = () => {
    setCompletedState((prev) => ({ ...prev, "unit-2": true }));
    setStreak((s) => s + 1);
  };

  return (
    <CarouselShell
      name="Duolingo Gamified Quest Pathway Scroller"
      index={44}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Interactive lesson progression &amp; streak
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
      <div className="w-full bg-[#58cc02]/10 border-2 border-[#58cc02]/30 rounded-[2rem] p-6 sm:p-8 shadow-sm">
        {/* Top Gamification Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#58cc02]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#58cc02] text-white flex items-center justify-center text-xl shadow-md font-black">
              🦉
            </div>
            <div>
              <h3 className="text-base font-black text-stone-900 leading-tight">Spanish Pathway • Section 3</h3>
              <p className="text-xs text-stone-500 font-bold">12 of 28 Lessons Mastered</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 text-xs font-black">
              <Flame size={15} className="fill-amber-500 text-amber-500" />
              <span>{streak} DAY STREAK</span>
            </div>

            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 text-xs font-black">
              <Sparkles size={14} className="text-cyan-600" />
              <span>480 GEMS</span>
            </div>
          </div>
        </div>

        {/* Pathway Carousel Track */}
        <div className="overflow-hidden -mx-2 px-2 py-2" ref={ref}>
          <div className="flex gap-5">
            {UNITS.map((unit) => {
              const isDone = unit.status === "completed" || completedState[unit.id];
              const isActive = unit.status === "active" && !completedState[unit.id];
              const isLocked = unit.status === "locked" && !isDone;

              return (
                <div
                  key={unit.id}
                  className="flex-[0_0_88%] sm:flex-[0_0_52%] md:flex-[0_0_42%] lg:flex-[0_0_32%] min-w-0"
                >
                  <div className="bg-white rounded-3xl p-5 border-2 border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative">
                    <div>
                      {/* Milestone Avatar Node */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-b-4 shadow-md ${unit.color}`}
                        >
                          {unit.icon}
                        </div>

                        {isDone ? (
                          <span className="flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            <CheckCircle2 size={14} /> COMPLETE
                          </span>
                        ) : isActive ? (
                          <span className="animate-pulse text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                            IN PROGRESS
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-bold text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
                            <Lock size={12} /> LOCKED
                          </span>
                        )}
                      </div>

                      <span className="text-[11px] font-black uppercase text-stone-400 tracking-wider">
                        UNIT {unit.unitNumber}
                      </span>
                      <h4 className="text-base font-black text-stone-900 mb-1">{unit.title}</h4>
                      <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 mb-4 font-medium">
                        {unit.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-lg">
                        {unit.xp}
                      </span>

                      {isActive ? (
                        <button
                          onClick={completeActive}
                          className="px-4 py-2 rounded-xl bg-[#58cc02] hover:bg-[#46a302] text-white text-xs font-black uppercase tracking-wider shadow-md transition active:scale-95"
                        >
                          Complete Lesson
                        </button>
                      ) : isDone ? (
                        <button className="px-3 py-1.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-bold transition">
                          Review (+10 XP)
                        </button>
                      ) : (
                        <button
                          disabled
                          className="px-3 py-1.5 rounded-xl bg-stone-100 text-stone-400 text-xs font-bold cursor-not-allowed"
                        >
                          Unlock Next
                        </button>
                      )}
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
