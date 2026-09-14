// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, CheckCircle, TrendingUp, Star, Building2 } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const TESTIMONIALS = [
  {
    id: "brex",
    company: "Brex Global",
    industry: "Fintech & Corporate Cards",
    metric: "+340%",
    metricLabel: "Quarterly Gross Processing Volume",
    quote:
      "Integrating their infrastructure took less than three days. We transitioned over $4B in transaction volume without a single dropped packet or reconciliation error.",
    author: "Camilla Vance",
    role: "VP of Financial Infrastructure",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    rating: 5,
  },
  {
    id: "figma",
    company: "VectorScale",
    industry: "Collaborative Design Tools",
    metric: "4.8x",
    metricLabel: "Faster Canvas Render Time",
    quote:
      "Our multiplayer sync latency dropped from 180ms to under 38ms globally. The developer ergonomics and TypeScript SDK are unmatched.",
    author: "Tariq Mansoor",
    role: "Lead Graphics Engine Architect",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
  },
  {
    id: "synthetix",
    company: "Synthetix AI",
    industry: "Autonomous Agent Orchestration",
    metric: "99.999%",
    metricLabel: "Service Level Reliability",
    quote:
      "When training multi-modal foundation models on 10,000 GPUs, unexpected failovers cost tens of thousands per minute. This system has been rock solid for 14 months straight.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: 5,
  },
  {
    id: "ramp",
    company: "HyperFlow",
    industry: "Enterprise Automation",
    metric: "$2.4M",
    metricLabel: "Annual Cloud Compute Savings",
    quote:
      "The automatic cold-start caching and distributed memory layers allowed us to downscale 40% of our idle container fleet immediately.",
    author: "Julian Thorne",
    role: "Head of Cloud Operations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
];

export default function Carousel38() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <CarouselShell
      name="B2B Proof & Metric Testimonial Slider"
      index={38}
      headerControls={
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white rounded-full border border-black/10 px-3 py-1.5 shadow-sm text-xs font-mono font-bold text-neutral-800">
            <span>{String(selectedIndex + 1).padStart(2, "0")}</span>
            <span className="text-neutral-400 mx-1">/</span>
            <span className="text-neutral-500">{String(TESTIMONIALS.length).padStart(2, "0")}</span>
          </div>

          <div className="flex items-center gap-1">
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
        </div>
      }
    >
      <div className="w-full bg-[#fbfaf8] border border-stone-200 rounded-[2rem] p-6 sm:p-9 shadow-sm">
        <div className="mb-6">
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-stone-600">
            PROVEN IMPACT AT SCALE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
            Trusted by modern leaders shaping tomorrow.
          </h3>
        </div>

        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={item.id}
                className="flex-[0_0_92%] sm:flex-[0_0_75%] md:flex-[0_0_58%] lg:flex-[0_0_46%] min-w-0"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Metric Highlight Box */}
                    <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-stone-100">
                      <div>
                        <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                          <span>{item.metric}</span>
                          <TrendingUp size={20} className="text-emerald-600 stroke-[2.5]" />
                        </div>
                        <p className="text-xs font-semibold text-stone-500 mt-1">{item.metricLabel}</p>
                      </div>

                      <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                        <Star size={13} className="fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-amber-800">{item.rating}.0</span>
                      </div>
                    </div>

                    {/* Quotation */}
                    <Quote size={28} className="text-stone-300 mb-3 rotate-180" />
                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium mb-6">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author / Company Footer */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-stone-100 mt-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs sm:text-sm font-bold text-stone-900">{item.author}</h4>
                          <CheckCircle size={13} className="text-emerald-600 fill-emerald-100" />
                        </div>
                        <p className="text-[11px] text-stone-500">{item.role}</p>
                      </div>
                    </div>

                    <div className="text-right hidden sm:block">
                      <span className="text-xs font-bold text-stone-800">{item.company}</span>
                      <p className="text-[10px] text-stone-400">{item.industry}</p>
                    </div>
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
