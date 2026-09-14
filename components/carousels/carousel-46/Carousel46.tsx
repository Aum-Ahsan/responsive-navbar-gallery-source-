// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Copy, Check, FileText, Layout, Users, Star, ArrowUpRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const TEMPLATES = [
  {
    id: "company-wiki",
    title: "All-Hands Company OS & Handbook",
    emoji: "🏛️",
    category: "OPERATIONS",
    author: "Notion Official",
    duplicates: "128k",
    rating: 4.9,
    desc: "Single source of truth for company policies, team directories, mission statements, and onboarding guides.",
    tags: ["Onboarding", "Wiki", "Documentation"],
    previewBlocks: ["Welcome to Acme Corp", "Core Principles & Values", "Team Roster & Roles"],
  },
  {
    id: "product-roadmap",
    title: "Dual-Track Agile Roadmap",
    emoji: "🚀",
    category: "PRODUCT",
    author: "Elena Rostova",
    duplicates: "94k",
    rating: 4.95,
    desc: "Coordinate discovery and delivery tracks simultaneously with automated status sync across cycles.",
    tags: ["Roadmap", "Scrum", "Cycles"],
    previewBlocks: ["Now • Q2 Priority Goals", "Next • In Research", "Future Backlog Candidates"],
  },
  {
    id: "design-tokens",
    title: "Cross-Platform Design System",
    emoji: "🎨",
    category: "DESIGN",
    author: "Figma Community",
    duplicates: "76k",
    rating: 4.88,
    desc: "Color semantic tokens, typography scales, spacing units, and component state checklists.",
    tags: ["Tokens", "Figma", "Components"],
    previewBlocks: ["Foundations & Spacing", "Typography Matrix", "Interactive State Matrix"],
  },
  {
    id: "investor-update",
    title: "Monthly Investor Update Memo",
    emoji: "📈",
    category: "FOUNDERS",
    author: "Y Combinator Alum",
    duplicates: "52k",
    rating: 4.92,
    desc: "Structured format highlighting MRR growth, burn rate, runway, critical asks, and customer milestones.",
    tags: ["Fundraising", "MRR", "Metrics"],
    previewBlocks: ["TL;DR Key Metrics", "Highs & Lows", "Asks for the Month"],
  },
];

export default function Carousel46() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [duplicated, setDuplicated] = useState<Record<string, boolean>>({});

  const handleDuplicate = (id: string) => {
    setDuplicated((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setDuplicated((prev) => ({ ...prev, [id]: false }));
    }, 2500);
  };

  return (
    <CarouselShell
      name="Notion Workspace Template Gallery"
      index={46}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Interactive duplicate to workspace
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
      <div className="w-full bg-[#fbfbfa] border border-neutral-200 rounded-[2rem] p-6 sm:p-8 shadow-sm">
        <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-neutral-200/80">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              NOTION GALLERY
            </span>
            <h3 className="text-2xl font-black text-neutral-900 tracking-tight mt-0.5">
              Curated Community Templates
            </h3>
          </div>

          <span className="text-xs font-semibold text-neutral-600 hover:text-black transition cursor-pointer flex items-center gap-1">
            Browse All 240+ Templates <ArrowUpRight size={13} />
          </span>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-5">
            {TEMPLATES.map((item) => {
              const isDuplicated = duplicated[item.id];

              return (
                <div
                  key={item.id}
                  className="flex-[0_0_88%] sm:flex-[0_0_54%] md:flex-[0_0_42%] lg:flex-[0_0_32%] min-w-0 group"
                >
                  <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Emoji Icon & Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-2xl shadow-inner">
                          {item.emoji}
                        </div>

                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-neutral-900 mb-1.5 leading-snug group-hover:text-black">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                        {item.desc}
                      </p>

                      {/* Mocked Document Blocks */}
                      <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200/60 space-y-1.5 mb-4">
                        {item.previewBlocks.map((blk, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-neutral-600 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                            <span className="truncate">{blk}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer & Action */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                      <div className="text-[11px] text-neutral-400 font-medium">
                        <span>by {item.author}</span>
                        <span className="mx-1">•</span>
                        <span>{item.duplicates}</span>
                      </div>

                      <button
                        onClick={() => handleDuplicate(item.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm flex items-center gap-1.5 ${
                          isDuplicated
                            ? "bg-emerald-600 text-white"
                            : "bg-black text-white hover:bg-neutral-800"
                        }`}
                      >
                        {isDuplicated ? <Check size={13} /> : <Copy size={13} />}
                        <span>{isDuplicated ? "Duplicated!" : "Duplicate"}</span>
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
