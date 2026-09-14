// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Activity, Heart, Flame, Zap, Timer, Award } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const WORKOUTS = [
  {
    id: "run",
    name: "Outdoor High-Pace Run",
    calories: "680 kcal",
    duration: "45:12",
    avgHeartRate: "162 BPM",
    pace: "4'38\" /km",
    rings: { move: 85, exercise: 100, stand: 75 },
    category: "CARDIO ENDURANCE",
    badge: "PERSONAL BEST",
    ringColors: { move: "#FA114F", exercise: "#AFFF00", stand: "#00F0FF" },
  },
  {
    id: "hiit",
    name: "Functional Tabata Intervals",
    calories: "510 kcal",
    duration: "32:00",
    avgHeartRate: "174 BPM",
    pace: "Zones 4 - 5",
    rings: { move: 70, exercise: 90, stand: 60 },
    category: "HIGH INTENSITY",
    badge: "GOAL MET",
    ringColors: { move: "#FA114F", exercise: "#AFFF00", stand: "#00F0FF" },
  },
  {
    id: "cycling",
    name: "Alpine Gravel Trail Ride",
    calories: "890 kcal",
    duration: "1:24:18",
    avgHeartRate: "155 BPM",
    pace: "24.8 km/h",
    rings: { move: 110, exercise: 120, stand: 90 },
    category: "OUTDOOR CYCLING",
    badge: "DISTANCE BADGE",
    ringColors: { move: "#FA114F", exercise: "#AFFF00", stand: "#00F0FF" },
  },
  {
    id: "swim",
    name: "Open Water Freestyle Laps",
    calories: "420 kcal",
    duration: "28:40",
    avgHeartRate: "148 BPM",
    pace: "1'42\" /100m",
    rings: { move: 55, exercise: 80, stand: 50 },
    category: "AQUATIC ENDURANCE",
    badge: "WORKOUT LOGGED",
    ringColors: { move: "#FA114F", exercise: "#AFFF00", stand: "#00F0FF" },
  },
];

export default function Carousel45() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [activeWorkout, setActiveWorkout] = useState<string>("run");

  return (
    <CarouselShell
      name="Apple Fitness Activity Rings & Workout Scroller"
      index={45}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Activity rings • OLED telemetry
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
      <div className="w-full bg-black text-white p-6 sm:p-8 rounded-[2rem] border border-zinc-800 shadow-2xl">
        {/* Top OLED Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <Activity size={20} className="text-[#AFFF00]" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Apple Fitness Activity Summary</h3>
              <p className="text-xs text-zinc-400 font-mono">Today • 3 Workouts Recorded</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <span className="flex items-center gap-1 text-[#FA114F]">
              <Flame size={14} /> MOVE
            </span>
            <span className="flex items-center gap-1 text-[#AFFF00]">
              <Timer size={14} /> EXERCISE
            </span>
            <span className="flex items-center gap-1 text-[#00F0FF]">
              <Zap size={14} /> STAND
            </span>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-5">
            {WORKOUTS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveWorkout(item.id)}
                className="flex-[0_0_88%] sm:flex-[0_0_54%] md:flex-[0_0_44%] lg:flex-[0_0_34%] min-w-0"
              >
                <div className="bg-zinc-950 rounded-2xl p-5 border border-zinc-800/80 hover:border-zinc-700 shadow-xl flex flex-col justify-between h-full transition-all duration-300">
                  <div>
                    {/* Ring Visualization & Badges */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Nested SVG Activity Rings */}
                      <div className="relative w-20 h-20">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                          {/* Move Ring (Red) */}
                          <circle cx="40" cy="40" r="32" stroke="#331018" strokeWidth="6" fill="none" />
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="#FA114F"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray="201"
                            strokeDashoffset={201 - (201 * Math.min(item.rings.move, 100)) / 100}
                            strokeLinecap="round"
                          />

                          {/* Exercise Ring (Green) */}
                          <circle cx="40" cy="40" r="23" stroke="#182d06" strokeWidth="6" fill="none" />
                          <circle
                            cx="40"
                            cy="40"
                            r="23"
                            stroke="#AFFF00"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray="144"
                            strokeDashoffset={144 - (144 * Math.min(item.rings.exercise, 100)) / 100}
                            strokeLinecap="round"
                          />

                          {/* Stand Ring (Cyan) */}
                          <circle cx="40" cy="40" r="14" stroke="#05252b" strokeWidth="6" fill="none" />
                          <circle
                            cx="40"
                            cy="40"
                            r="14"
                            stroke="#00F0FF"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray="88"
                            strokeDashoffset={88 - (88 * Math.min(item.rings.stand, 100)) / 100}
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black tracking-wider bg-zinc-900 border border-zinc-700 text-amber-400">
                        {item.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-base font-black text-white mb-3">{item.name}</h4>

                    {/* Telemetry Grid */}
                    <div className="grid grid-cols-2 gap-2.5 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 font-mono">
                      <div>
                        <span className="text-[10px] text-zinc-400">CALORIES</span>
                        <p className="text-sm font-black text-[#FA114F]">{item.calories}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400">TIME</span>
                        <p className="text-sm font-black text-[#AFFF00]">{item.duration}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400">AVG HEART RATE</span>
                        <p className="text-sm font-black text-rose-400 flex items-center gap-1">
                          <Heart size={12} className="fill-rose-500" />
                          {item.avgHeartRate}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400">AVG PACE</span>
                        <p className="text-sm font-black text-[#00F0FF]">{item.pace}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>GPS Map Synced</span>
                    <span className="text-white hover:underline cursor-pointer">Analyze Splits →</span>
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
