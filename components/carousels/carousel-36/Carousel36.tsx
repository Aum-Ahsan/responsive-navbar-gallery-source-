// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, ShoppingCart, Bookmark, Play, Flame, Sparkles } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const PROMOTIONS = [
  {
    id: "cyber-odyssey",
    title: "Cyber Odyssey: 2088",
    tagline: "Defy the Corporate Hegemony in an Expansive Open-World RPG",
    discount: "-70%",
    salePrice: "$17.99",
    originalPrice: "$59.99",
    endsInHours: 42,
    badge: "WEEKEND DEAL",
    tags: ["Cyberpunk", "Open World", "RPG", "Atmospheric"],
    bannerImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
  },
  {
    id: "stellar-horizon",
    title: "Stellar Horizon IV",
    tagline: "Command Fleet Battles across Procedural Star Systems",
    discount: "-50%",
    salePrice: "$24.99",
    originalPrice: "$49.99",
    endsInHours: 18,
    badge: "MAJOR UPDATE SALE",
    tags: ["Space Sim", "Strategy", "Multiplayer", "Sci-Fi"],
    bannerImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
  },
  {
    id: "valkyrie-chronicles",
    title: "Valkyrie: Ragnarok Reborn",
    tagline: "Brutal Mythic Combat & Visceral Boss Encounters",
    discount: "-80%",
    salePrice: "$9.99",
    originalPrice: "$49.99",
    endsInHours: 72,
    badge: "HISTORIC LOW PRICE",
    tags: ["Action RPG", "Souls-like", "Nordic", "Dark Fantasy"],
    bannerImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1200&q=80",
  },
];

export default function Carousel36() {
  const [activePromo, setActivePromo] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 42, minutes: 18, seconds: 45 });
  const [wishlisted, setWishlisted] = useState<Record<string, boolean>>({});

  const promo = PROMOTIONS[activePromo];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleWishlist = (id: string) => {
    setWishlisted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <CarouselShell
      name="Hero Campaign Promotional Billboard"
      index={36}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Live countdown timer • Steam / Epic deals
          </span>
          <button
            onClick={() => setActivePromo((p) => (p - 1 + PROMOTIONS.length) % PROMOTIONS.length)}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Previous promo"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setActivePromo((p) => (p + 1) % PROMOTIONS.length)}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Next promo"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      }
    >
      <div className="w-full bg-[#0d0e12] rounded-[2rem] border border-zinc-800 shadow-2xl overflow-hidden relative">
        {/* Main Billboard Frame */}
        <div className="relative min-h-[460px] sm:min-h-[500px] flex flex-col justify-between p-6 sm:p-10 z-10">
          {/* Background Artwork */}
          <img
            src={promo.bannerImg}
            alt={promo.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none opacity-60"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12] via-[#0d0e12]/80 to-transparent pointer-events-none" />

          {/* Top Bar: Deal Badge & Live Countdown Timer */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase bg-emerald-500 text-black shadow-lg">
                <Flame size={14} className="fill-black" />
                {promo.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-zinc-900/80 backdrop-blur border border-zinc-700 text-white">
                Featured Spotlight
              </span>
            </div>

            {/* Live Clock Display */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-white">
              <Clock size={14} className="text-amber-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-300">Offer Ends:</span>
              <span className="text-xs font-mono font-bold text-amber-400">
                {String(timeLeft.hours).padStart(2, "0")}h : {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
                {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
            </div>
          </div>

          {/* Center/Bottom Content */}
          <div className="relative z-20 max-w-2xl mt-8">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {promo.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-semibold text-zinc-300 bg-white/10 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-3 drop-shadow">
              {promo.title}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mb-6 drop-shadow">
              {promo.tagline}
            </p>

            {/* Price Box & CTA Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center bg-black/80 backdrop-blur rounded-xl p-1.5 border border-zinc-700">
                <span className="px-3 py-2 rounded-lg bg-emerald-500 text-black font-black text-lg">
                  {promo.discount}
                </span>
                <div className="px-4 text-left">
                  <p className="text-[11px] font-semibold text-zinc-400 line-through leading-none">
                    {promo.originalPrice}
                  </p>
                  <p className="text-xl font-black text-white leading-tight">{promo.salePrice}</p>
                </div>
              </div>

              <button className="px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition shadow-xl flex items-center gap-2">
                <ShoppingCart size={16} />
                Buy Now
              </button>

              <button
                onClick={() => toggleWishlist(promo.id)}
                className={`p-3.5 rounded-xl border backdrop-blur transition flex items-center gap-2 text-sm font-semibold ${
                  wishlisted[promo.id]
                    ? "bg-indigo-600 text-white border-indigo-500"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }`}
              >
                <Bookmark size={16} className={wishlisted[promo.id] ? "fill-white" : ""} />
                {wishlisted[promo.id] ? "On Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>

          {/* Bottom Game Switcher Strip */}
          <div className="relative z-20 flex gap-2 pt-6 mt-6 border-t border-zinc-800/80 overflow-x-auto">
            {PROMOTIONS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePromo(idx)}
                className={`flex items-center gap-3 px-3.5 py-2 rounded-xl border text-left transition shrink-0 ${
                  activePromo === idx
                    ? "bg-zinc-800/90 border-emerald-500 shadow-md"
                    : "bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800/50"
                }`}
              >
                <img src={p.bannerImg} alt={p.title} className="w-12 h-8 rounded-md object-cover" />
                <div>
                  <p className="text-xs font-bold text-white leading-tight">{p.title}</p>
                  <span className="text-[10px] font-bold text-emerald-400">{p.discount} • {p.salePrice}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </CarouselShell>
  );
}
