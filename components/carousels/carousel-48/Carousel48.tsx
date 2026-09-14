// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Sun, CloudRain, CloudSun, Wind, Droplets, Compass } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const HOURLY = [
  { time: "Now", tempC: 22, tempF: 72, icon: "☀️", condition: "Sunny", rain: "0%", uv: "Low" },
  { time: "12 PM", tempC: 24, tempF: 75, icon: "🌤️", condition: "Mostly Clear", rain: "5%", uv: "Moderate" },
  { time: "1 PM", tempC: 26, tempF: 79, icon: "☀️", condition: "Peak Solar", rain: "0%", uv: "Very High" },
  { time: "2 PM", tempC: 27, tempF: 81, icon: "⛅", condition: "Scattered Clouds", rain: "10%", uv: "High" },
  { time: "3 PM", tempC: 25, tempF: 77, icon: "🌦️", condition: "Passing Mist", rain: "35%", uv: "Moderate" },
  { time: "4 PM", tempC: 23, tempF: 73, icon: "⛈️", condition: "Brief Squall", rain: "65%", uv: "Low" },
  { time: "5 PM", tempC: 21, tempF: 70, icon: "🌤️", condition: "Post-Rain Sun", rain: "20%", uv: "Low" },
  { time: "6 PM", tempC: 19, tempF: 66, icon: "🌅", condition: "Golden Sunset", rain: "0%", uv: "Zero" },
  { time: "7 PM", tempC: 17, tempF: 63, icon: "🌙", condition: "Clear Twilight", rain: "0%", uv: "Zero" },
];

export default function Carousel48() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [activeHour, setActiveHour] = useState(0);

  const selected = HOURLY[activeHour];

  return (
    <CarouselShell
      name="Apple Weather Hourly Radar & Forecast Scroller"
      index={48}
      headerControls={
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white/80 p-1 rounded-full border border-black/10 text-xs font-bold">
            <button
              onClick={() => setUnit("C")}
              className={`px-2 py-0.5 rounded-full transition ${unit === "C" ? "bg-black text-white" : "text-neutral-600"}`}
            >
              °C
            </button>
            <button
              onClick={() => setUnit("F")}
              className={`px-2 py-0.5 rounded-full transition ${unit === "F" ? "bg-black text-white" : "text-neutral-600"}`}
            >
              °F
            </button>
          </div>

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
      <div className="w-full bg-gradient-to-br from-[#1b3a60] via-[#1b2b4a] to-[#0c1322] text-white p-6 sm:p-8 rounded-[2rem] border border-blue-900/60 shadow-2xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Current Weather Summary */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6 pb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold">
              <Compass size={13} />
              <span>SAN FRANCISCO, CA • ELEVATION 52M</span>
            </div>
            <div className="flex items-baseline gap-3 mt-1">
              <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {unit === "C" ? `${selected.tempC}°` : `${selected.tempF}°`}
              </h3>
              <span className="text-base sm:text-lg font-bold text-cyan-200">{selected.condition}</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-5 text-xs font-mono text-cyan-100">
            <div className="flex items-center gap-1.5">
              <Droplets size={14} className="text-cyan-400" />
              <span>Rain: {selected.rain}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind size={14} className="text-cyan-400" />
              <span>18 km/h NW</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sun size={14} className="text-amber-400" />
              <span>UV: {selected.uv}</span>
            </div>
          </div>
        </div>

        {/* Hourly Horizontal Scroller */}
        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-3">
            {HOURLY.map((item, idx) => {
              const isActive = activeHour === idx;

              return (
                <div
                  key={item.time}
                  onClick={() => setActiveHour(idx)}
                  className={`flex-[0_0_28%] sm:flex-[0_0_18%] md:flex-[0_0_14%] lg:flex-[0_0_10%] min-w-0 cursor-pointer rounded-2xl p-3 border transition-all duration-300 flex flex-col items-center text-center justify-between h-36 ${
                    isActive
                      ? "bg-white/20 border-white/40 backdrop-blur-md shadow-lg scale-105"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-cyan-200">{item.time}</span>
                  <span className="text-2xl my-auto">{item.icon}</span>

                  <div className="space-y-0.5">
                    <span className="text-sm font-black text-white">
                      {unit === "C" ? `${item.tempC}°` : `${item.tempF}°`}
                    </span>
                    <p className="text-[10px] font-mono text-cyan-300">{item.rain}</p>
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
