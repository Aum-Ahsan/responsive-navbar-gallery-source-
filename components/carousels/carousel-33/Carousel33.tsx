// @ts-nocheck
"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, Send, MoreHorizontal, Volume2, VolumeX, CheckCircle, Sparkles } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const STORIES = [
  {
    id: "story-1",
    author: "elena_design",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    verified: true,
    time: "2h ago",
    caption: "Midnight architectural exploration in Tokyo 🗼✨",
    tag: "#TokyoArchitecture",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=900&q=80",
  },
  {
    id: "story-2",
    author: "marcus_creative",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    verified: true,
    time: "4h ago",
    caption: "First snow in the Dolomites. The light was unreal today. 🏔️",
    tag: "#AlpineVisuals",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
  },
  {
    id: "story-3",
    author: "studio_monochrome",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    verified: false,
    time: "6h ago",
    caption: "Ceramics workshop drop happening tomorrow 10am EST! 🏺",
    tag: "#HandmadeCeramics",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80",
  },
  {
    id: "story-4",
    author: "neon_vibes",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
    verified: true,
    time: "9h ago",
    caption: "Live analog synth session recorded direct to tape 🎹",
    tag: "#ModularSynth",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80",
  },
];

export default function Carousel33() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isPaused) return;

    const interval = 40;
    const duration = 4000; // 4 seconds per story
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIdx((idx) => (idx + 1) % STORIES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, currentIdx]);

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width * 0.35) {
      // Tap Left -> Go Back
      setCurrentIdx((idx) => (idx - 1 + STORIES.length) % STORIES.length);
      setProgress(0);
    } else {
      // Tap Right -> Go Next
      setCurrentIdx((idx) => (idx + 1) % STORIES.length);
      setProgress(0);
    }
  };

  const story = STORIES[currentIdx];
  const isCurrentLiked = liked[story.id];

  return (
    <CarouselShell
      name="Story Segmented Micro-Reels"
      index={33}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Tap sides to navigate • Hold to pause
          </span>
          <button
            onClick={() => {
              setCurrentIdx((idx) => (idx - 1 + STORIES.length) % STORIES.length);
              setProgress(0);
            }}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Previous story"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => {
              setCurrentIdx((idx) => (idx + 1) % STORIES.length);
              setProgress(0);
            }}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Next story"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      }
    >
      <div className="w-full flex justify-center py-4">
        {/* Mobile Mockup Shell */}
        <div
          className="relative w-full max-w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border-4 border-zinc-800 select-none cursor-pointer group"
          onClick={handleTap}
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Active Story Image with smooth zoom */}
          {STORIES.map((s, idx) => (
            <img
              key={s.id}
              src={s.image}
              alt={s.caption}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                idx === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            />
          ))}

          {/* Dark Overlay Gradient for Top and Bottom Bars */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85 pointer-events-none" />

          {/* Top Segmented Progress Bars */}
          <div className="absolute top-4 inset-x-4 flex gap-1.5 z-20 pointer-events-none">
            {STORIES.map((_, i) => (
              <div key={i} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full bg-white transition-all ease-linear"
                  style={{
                    width: i < currentIdx ? "100%" : i === currentIdx ? `${progress}%` : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Top User Header Bar */}
          <div className="absolute top-8 inset-x-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-2.5">
              <img
                src={story.avatar}
                alt={story.author}
                className="w-9 h-9 rounded-full object-cover border-2 border-white/80 shadow"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-white tracking-wide">{story.author}</span>
                  {story.verified && <CheckCircle size={12} className="text-cyan-400 fill-cyan-400" />}
                </div>
                <span className="text-[10px] text-zinc-300">{story.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="w-8 h-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-black/60 transition"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-black/60 transition"
              >
                <MoreHorizontal size={14} />
              </button>
            </div>
          </div>

          {/* Bottom Caption & Interactive Response Bar */}
          <div className="absolute bottom-4 inset-x-4 z-20 flex flex-col gap-3">
            <div>
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 backdrop-blur text-white mb-1.5">
                {story.tag}
              </span>
              <p className="text-xs sm:text-sm font-medium text-white line-clamp-2 leading-relaxed drop-shadow-md">
                {story.caption}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
              <div className="flex-1 bg-white/20 backdrop-blur border border-white/30 rounded-full px-3.5 py-2 flex items-center">
                <input
                  type="text"
                  placeholder="Send message..."
                  className="bg-transparent text-xs text-white placeholder-white/60 focus:outline-none w-full"
                />
              </div>

              <button
                onClick={() => setLiked((prev) => ({ ...prev, [story.id]: !prev[story.id] }))}
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur border transition ${
                  isCurrentLiked
                    ? "bg-red-500 text-white border-red-400"
                    : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                }`}
              >
                <Heart size={18} className={isCurrentLiked ? "fill-white" : ""} />
              </button>

              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CarouselShell>
  );
}
