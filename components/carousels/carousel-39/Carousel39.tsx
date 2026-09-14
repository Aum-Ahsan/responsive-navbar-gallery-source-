// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play, Pause, Bookmark, Share2, Volume2, Clock, Sparkles } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const EPISODES = [
  {
    id: "ep-1",
    title: "The Architecture of Deep Thinking",
    show: "Founders & Synthesizers",
    host: "Elena & Dr. Kai Soren",
    duration: "48 min",
    badge: "EPISODE 142",
    date: "Yesterday",
    desc: "How high-leverage software architects structure mental models, reduce cognitive friction, and avoid technical debt.",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
    color: "from-purple-900 to-indigo-950",
  },
  {
    id: "ep-2",
    title: "Autonomous Agents & Future Infrastructure",
    show: "Zero-Knowledge Daily",
    host: "Marcus Vance",
    duration: "34 min",
    badge: "POPULAR",
    date: "3 days ago",
    desc: "Unpacking multi-agent consensus, localized vector indexing, and memory serialization at hyperscale.",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    color: "from-emerald-900 to-zinc-950",
  },
  {
    id: "ep-3",
    title: "The Renaissance of Tactile Hardware",
    show: "Design Details",
    host: "Sophia Lin & Benji",
    duration: "52 min",
    badge: "TRENDING",
    date: "May 12",
    desc: "Why modern engineers crave rotary knobs, physical toggles, clicky mechanical switches, and analog warmth.",
    cover: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80",
    color: "from-amber-900 to-zinc-950",
  },
  {
    id: "ep-4",
    title: "Distributed Storage Protocols in 2026",
    show: "Systems & Kernels",
    host: "David K. & Alex",
    duration: "41 min",
    badge: "DEEP DIVE",
    date: "May 8",
    desc: "Examining next-generation NVMe over fabrics, write amplification mitigation, and distributed log stores.",
    cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    color: "from-blue-900 to-slate-950",
  },
];

export default function Carousel39() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [playingId, setPlayingId] = useState<string | null>("ep-1");
  const [playbackSpeed, setPlaybackSpeed] = useState<string>("1x");
  const [saved, setSaved] = useState<Record<string, boolean>>({});

  const togglePlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingId((current) => (current === id ? null : id));
  };

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const cycleSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const speeds = ["1x", "1.25x", "1.5x", "2x"];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  return (
    <CarouselShell
      name="Podcast & Audio Track Player Carousel"
      index={39}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Interactive audio waveform &amp; playhead
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
      <div className="w-full bg-[#0e0f13] text-white p-5 sm:p-7 rounded-[1.75rem] border border-zinc-800 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <Volume2 size={18} className="text-emerald-400" />
            <h3 className="text-lg font-black tracking-tight text-white">Latest Episodes &amp; Broadcasts</h3>
          </div>

          <button
            onClick={cycleSpeed}
            className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700 hover:bg-zinc-700 transition"
          >
            Speed: {playbackSpeed}
          </button>
        </div>

        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-5">
            {EPISODES.map((ep) => {
              const isPlaying = playingId === ep.id;
              const isSaved = saved[ep.id];

              return (
                <div
                  key={ep.id}
                  className="flex-[0_0_88%] sm:flex-[0_0_52%] md:flex-[0_0_42%] lg:flex-[0_0_34%] min-w-0"
                >
                  <div
                    className={`rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden bg-gradient-to-br ${ep.color} ${
                      isPlaying
                        ? "border-emerald-500/70 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/50"
                        : "border-zinc-800/80 hover:border-zinc-700"
                    }`}
                  >
                    <div>
                      {/* Top Album Art & Quick Play Bar */}
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/40 mb-4 shadow-lg border border-white/10 group">
                        <img
                          src={ep.cover}
                          alt={ep.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Playing Equalizer Overlay */}
                        {isPlaying && (
                          <div className="absolute top-3 right-3 flex items-end gap-1 h-5 bg-black/70 backdrop-blur px-2 py-1 rounded-md border border-emerald-500/40">
                            <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3" />
                            <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-4" />
                            <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-2" />
                            <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-3.5" />
                          </div>
                        )}

                        {/* Large Center Play / Pause Button */}
                        <button
                          onClick={(e) => togglePlay(ep.id, e)}
                          className={`absolute inset-0 m-auto w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
                            isPlaying
                              ? "bg-emerald-500 text-black scale-100"
                              : "bg-white/95 text-black hover:scale-110"
                          }`}
                        >
                          {isPlaying ? (
                            <Pause size={22} className="fill-black" />
                          ) : (
                            <Play size={22} className="fill-black translate-x-0.5" />
                          )}
                        </button>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-2.5 left-2.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/75 backdrop-blur text-white border border-white/10">
                            {ep.badge}
                          </span>
                        </div>
                      </div>

                      {/* Episode Metadata */}
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-emerald-400/90">{ep.show}</p>
                        <h4 className="text-base font-bold text-white leading-snug line-clamp-1">{ep.title}</h4>
                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed pt-1">{ep.desc}</p>
                      </div>
                    </div>

                    {/* Bottom Audio Scrub Bar & Actions */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <Clock size={13} />
                        <span>{ep.duration}</span>
                        <span className="text-zinc-600">•</span>
                        <span>{ep.date}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => toggleSave(ep.id, e)}
                          className={`p-1.5 rounded-lg border transition ${
                            isSaved
                              ? "bg-emerald-500 text-black border-emerald-400"
                              : "bg-white/10 text-zinc-300 border-white/10 hover:bg-white/20"
                          }`}
                        >
                          <Bookmark size={13} className={isSaved ? "fill-black" : ""} />
                        </button>
                      </div>
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
