// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play, Plus, Check, ThumbsUp, Volume2, Info } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const SHOWS = [
  {
    id: "stranger-things",
    title: "Stranger Things",
    season: "S4 : E7",
    progress: 72,
    remaining: "28m left",
    badge: "TOP 10",
    genre: "Sci-Fi • Mystery",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=80",
  },
  {
    id: "cyberpunk-edgerunners",
    title: "Neon Horizon",
    season: "S1 : E9",
    progress: 88,
    remaining: "12m left",
    badge: "NEW SEASON",
    genre: "Action • Anime",
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900&q=80",
  },
  {
    id: "the-crown",
    title: "Royal Dynasty",
    season: "S3 : E2",
    progress: 35,
    remaining: "45m left",
    badge: "AWARD WINNER",
    genre: "Drama • History",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80",
  },
  {
    id: "deep-space",
    title: "Deep Cosmos",
    season: "S2 : E11",
    progress: 54,
    remaining: "31m left",
    badge: "4K HDR",
    genre: "Documentary",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=80",
  },
  {
    id: "velocity-drift",
    title: "Velocity Formula",
    season: "S5 : E3",
    progress: 90,
    remaining: "8m left",
    badge: "TRENDING",
    genre: "Sports • Adrenaline",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=80",
  },
  {
    id: "midnight-chef",
    title: "Midnight Kitchen",
    season: "S1 : E5",
    progress: 40,
    remaining: "35m left",
    badge: "POPULAR",
    genre: "Culinary • Travel",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
  },
];

export default function Carousel30() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [myList, setMyList] = useState<Record<string, boolean>>({});
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleList = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMyList((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <CarouselShell
      name="Streaming Continue Watching"
      index={30}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-500 mr-2 hidden sm:inline">
            Netflix-style resume progress
          </span>
          <button
            onClick={() => api?.scrollPrev()}
            className="p-2.5 rounded-full border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 transition text-zinc-800"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="p-2.5 rounded-full border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 transition text-zinc-800"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      }
    >
      <div className="w-full bg-[#111114] text-white p-5 sm:p-7 rounded-[1.75rem] shadow-2xl overflow-hidden border border-zinc-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <h3 className="text-lg font-bold tracking-tight text-zinc-100">Continue Watching for User</h3>
          </div>
          <span className="text-xs font-medium text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded-full border border-zinc-700/60">
            {SHOWS.length} In Progress
          </span>
        </div>

        <div className="overflow-hidden -mx-2 px-2 py-2" ref={ref}>
          <div className="flex gap-4 sm:gap-5">
            {SHOWS.map((item) => {
              const isHovered = hoveredId === item.id;
              const inList = myList[item.id];
              const isLiked = liked[item.id];

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="flex-[0_0_84%] sm:flex-[0_0_48%] md:flex-[0_0_36%] lg:flex-[0_0_28%] min-w-0 group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md group-hover:border-zinc-700 transition-all duration-300">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-black tracking-wider bg-red-600 text-white shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    {/* Quick Play Center Button on Hover */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                        isHovered ? "opacity-100" : "opacity-0 sm:opacity-0"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                        <Play size={20} className="fill-black translate-x-0.5" />
                      </div>
                    </div>

                    {/* Card Content & Action Bar */}
                    <div className="absolute bottom-0 inset-x-0 p-3.5 flex flex-col justify-end">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-zinc-400 truncate">{item.season} • {item.genre}</p>
                          <h4 className="text-sm sm:text-base font-bold text-white truncate">{item.title}</h4>
                        </div>

                        {/* Interactive Buttons */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={(e) => toggleList(item.id, e)}
                            className={`w-7 h-7 rounded-full flex items-center justify-center border transition ${
                              inList ? "bg-white text-black border-white" : "bg-black/60 text-white border-white/30 hover:border-white"
                            }`}
                            title={inList ? "Remove from List" : "Add to List"}
                          >
                            {inList ? <Check size={13} /> : <Plus size={13} />}
                          </button>
                          <button
                            onClick={(e) => toggleLike(item.id, e)}
                            className={`w-7 h-7 rounded-full flex items-center justify-center border transition ${
                              isLiked ? "bg-red-600 text-white border-red-500" : "bg-black/60 text-white border-white/30 hover:border-white"
                            }`}
                            title="Like"
                          >
                            <ThumbsUp size={12} className={isLiked ? "fill-white" : ""} />
                          </button>
                        </div>
                      </div>

                      {/* Playback Progress Bar */}
                      <div className="space-y-1">
                        <div className="w-full h-1.5 bg-zinc-700/80 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-600 rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 font-medium pt-0.5">
                          <span>{item.progress}% watched</span>
                          <span className="text-zinc-300 font-semibold">{item.remaining}</span>
                        </div>
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
