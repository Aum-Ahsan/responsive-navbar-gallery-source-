// @ts-nocheck
"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sliders, Sparkles, Layers } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const COMPARISONS = [
  {
    id: "cinematic-color",
    title: "Cinematic 35mm Color Grade",
    category: "Post-Production Grading",
    desc: "Log profile converted to Kodak 2383 print film emulation with balanced skin tones.",
    beforeImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&q=80&sat=-80",
    afterImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&q=80",
    beforeLabel: "RAW LOG",
    afterLabel: "KODAK 2383 GRADE",
  },
  {
    id: "architecture-renovation",
    title: "Minimalist Loft Restoration",
    category: "Interior Architecture",
    desc: "Exposed brick transformed into seamless micro-cement with recessed perimeter illumination.",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80&sepia=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    beforeLabel: "BEFORE RESTORATION",
    afterLabel: "FINISHED ARCHITECTURE",
  },
  {
    id: "nature-reforest",
    title: "Alpine Meadow Dawn",
    category: "Landscape Exposure Blend",
    desc: "Shadow recovery and dynamic range bracket merging for atmospheric sunrise mist.",
    beforeImg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&exp=-40",
    afterImg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    beforeLabel: "UNDEBIASED EXPOSURE",
    afterLabel: "HDR MERGE",
  },
];

export default function Carousel35() {
  const [activeScene, setActiveScene] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scene = COMPARISONS[activeScene];

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPos(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <CarouselShell
      name="Interactive Before & After Comparison"
      index={35}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Drag center handle to compare
          </span>
          <button
            onClick={() => setActiveScene((s) => (s - 1 + COMPARISONS.length) % COMPARISONS.length)}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Previous scene"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setActiveScene((s) => (s + 1) % COMPARISONS.length)}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Next scene"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      }
    >
      <div className="w-full bg-[#18181b] text-white p-5 sm:p-7 rounded-[1.75rem] border border-zinc-800 shadow-2xl">
        {/* Active Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-wider text-amber-400 uppercase">
              {scene.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">{scene.title}</h3>
          </div>
          <p className="text-xs text-zinc-400 max-w-md">{scene.desc}</p>
        </div>

        {/* Before / After Draggable Canvas */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-zinc-700 shadow-inner"
        >
          {/* After Image (Full background) */}
          <img
            src={scene.afterImg}
            alt={scene.afterLabel}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Before Image (Clipped overlay) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src={scene.beforeImg}
              alt={scene.beforeLabel}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Center Pill Drag Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-zinc-900 shadow-2xl flex items-center justify-center border-2 border-zinc-900">
              <Sliders size={16} className="rotate-90" />
            </div>
          </div>

          {/* Static Badges */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-zinc-200 border border-white/20 shadow">
              {scene.beforeLabel}
            </span>
          </div>

          <div className="absolute top-4 right-4 pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-black shadow font-black">
              {scene.afterLabel}
            </span>
          </div>

          {/* Position Percentage Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
            <span className="px-3 py-0.5 rounded-full text-[10px] font-mono bg-black/75 backdrop-blur text-zinc-300 border border-white/10">
              Split: {sliderPos}%
            </span>
          </div>
        </div>

        {/* Scene Selector Thumbnails */}
        <div className="flex gap-3 mt-4 pt-3 border-t border-zinc-800 overflow-x-auto pb-1">
          {COMPARISONS.map((comp, idx) => (
            <button
              key={comp.id}
              onClick={() => {
                setActiveScene(idx);
                setSliderPos(50);
              }}
              className={`flex items-center gap-3 px-3.5 py-2 rounded-xl border text-left transition ${
                activeScene === idx
                  ? "bg-zinc-800 border-amber-500/60 shadow-sm"
                  : "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/60"
              }`}
            >
              <img
                src={comp.afterImg}
                alt={comp.title}
                className="w-10 h-8 rounded-lg object-cover border border-zinc-700"
              />
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">{comp.title}</p>
                <p className="text-[10px] text-zinc-400 truncate">{comp.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </CarouselShell>
  );
}
