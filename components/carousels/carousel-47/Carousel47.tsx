// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Mic, MicOff, Users, Radio, Hand, MessageSquare, Volume2 } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const STAGES = [
  {
    id: "ai-townhall",
    title: "Open Source AI & Local LLM Benchmarks",
    server: "Hugging Face Community",
    listeners: 482,
    speakers: [
      { name: "Clem", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80", speaking: true },
      { name: "Julien", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80", speaking: false },
      { name: "Thomas", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80", speaking: true },
    ],
    topic: "Quantization, GGUF speeds on Apple Silicon M4",
    badge: "FEATURED STAGE",
  },
  {
    id: "sound-design",
    title: "Analog Synth Patch Breakdown & Jam",
    server: "Modular Beats & Hardware",
    listeners: 215,
    speakers: [
      { name: "Kaelen", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&q=80", speaking: true },
      { name: "Sora", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=80", speaking: false },
    ],
    topic: "Filter sweeps, Buchla wavefolders, tape saturation",
    badge: "LIVE AUDIO",
  },
  {
    id: "game-jam",
    title: "Godot 4.3 48-Hour Game Jam Showcase",
    server: "Indie Game Developers",
    listeners: 640,
    speakers: [
      { name: "Nico", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80", speaking: true },
      { name: "Maya", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80", speaking: false },
      { name: "DevDan", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&q=80", speaking: false },
    ],
    topic: "Live voting and community feedback on finalists",
    badge: "COMMUNITY",
  },
];

export default function Carousel47() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [handRaised, setHandRaised] = useState<Record<string, boolean>>({});

  const toggleHand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setHandRaised((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <CarouselShell
      name="Discord Live Stage & Voice Scroller"
      index={47}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Live audio speaking indicators &amp; stages
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
      <div className="w-full bg-[#1e1f22] text-white p-6 sm:p-8 rounded-[2rem] border border-[#2b2d31] shadow-2xl">
        {/* Discord Bar */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#2b2d31]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#5865F2] flex items-center justify-center text-white shadow-md">
              <Radio size={18} className="animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Live Discord Community Stages</h3>
              <p className="text-[11px] text-[#949ba4]">1,337 Members Currently Listening</p>
            </div>
          </div>

          <span className="text-xs font-mono text-[#23a55a] bg-[#23a55a]/10 border border-[#23a55a]/30 px-3 py-1 rounded-full font-bold">
            Live Broadcasting
          </span>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-5">
            {STAGES.map((stage) => {
              const isHandUp = handRaised[stage.id];

              return (
                <div
                  key={stage.id}
                  className="flex-[0_0_88%] sm:flex-[0_0_54%] md:flex-[0_0_44%] lg:flex-[0_0_34%] min-w-0"
                >
                  <div className="bg-[#2b2d31] rounded-2xl p-5 border border-[#35373c] hover:border-[#5865F2]/50 shadow-md flex flex-col justify-between h-full transition-all duration-300">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-3 text-xs">
                        <span className="text-[10px] font-black uppercase text-[#5865F2] bg-[#5865F2]/10 border border-[#5865F2]/20 px-2 py-0.5 rounded-full">
                          {stage.badge}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-[#b5bac1]">
                          <Users size={13} />
                          <span>{stage.listeners} listening</span>
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-white mb-1 leading-snug">{stage.title}</h4>
                      <p className="text-xs text-[#949ba4] mb-4">in {stage.server}</p>

                      {/* Active Speakers Row */}
                      <div className="bg-[#1e1f22] p-3 rounded-xl border border-[#35373c] mb-4">
                        <p className="text-[10px] font-bold text-[#b5bac1] uppercase tracking-wider mb-2.5">
                          On Stage Right Now:
                        </p>
                        <div className="flex items-center gap-3">
                          {stage.speakers.map((spk, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-1">
                              <div className="relative">
                                <img
                                  src={spk.avatar}
                                  alt={spk.name}
                                  className={`w-10 h-10 rounded-full object-cover border-2 ${
                                    spk.speaking ? "border-[#23a55a] ring-2 ring-[#23a55a]/40" : "border-[#35373c]"
                                  }`}
                                />
                                {spk.speaking && (
                                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#23a55a] text-white flex items-center justify-center">
                                    <Mic size={9} />
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] font-medium text-[#b5bac1] max-w-[50px] truncate">
                                {spk.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-3 border-t border-[#35373c] flex items-center justify-between gap-2">
                      <span className="text-[11px] text-[#949ba4] truncate max-w-[130px]">
                        {stage.topic}
                      </span>

                      <button
                        onClick={(e) => toggleHand(stage.id, e)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                          isHandUp
                            ? "bg-[#23a55a] text-white"
                            : "bg-[#5865F2] hover:bg-[#4752c4] text-white"
                        }`}
                      >
                        <Hand size={13} className={isHandUp ? "animate-bounce" : ""} />
                        <span>{isHandUp ? "Hand Raised" : "Join Stage"}</span>
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
