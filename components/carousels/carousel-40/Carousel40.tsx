// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, Heart, MapPin, Compass, Eye } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const LISTINGS = [
  {
    id: "l1",
    title: "Nordic Glass Igloo & Aurora Suite",
    location: "Rovaniemi, Finland",
    price: "$340",
    period: "night",
    rating: 4.98,
    reviews: 184,
    superhost: true,
    mapCoord: { x: 48, y: 22 },
    images: [
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&q=80",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&q=80",
    ],
  },
  {
    id: "l2",
    title: "Cliffside Sunset Villa with Infinity Pool",
    location: "Santorini, Greece",
    price: "$520",
    period: "night",
    rating: 4.95,
    reviews: 310,
    superhost: true,
    mapCoord: { x: 58, y: 64 },
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    ],
  },
  {
    id: "l3",
    title: "Modern Bamboo Eco Treehouse",
    location: "Ubud, Bali",
    price: "$195",
    period: "night",
    rating: 4.92,
    reviews: 425,
    superhost: false,
    mapCoord: { x: 82, y: 78 },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
  },
  {
    id: "l4",
    title: "Minimalist Desert Pod with Stargazing Deck",
    location: "Joshua Tree, California",
    price: "$280",
    period: "night",
    rating: 4.96,
    reviews: 162,
    superhost: true,
    mapCoord: { x: 22, y: 44 },
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&q=80",
    ],
  },
];

export default function Carousel40() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [activeListing, setActiveListing] = useState<string>("l1");
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selected = LISTINGS.find((l) => l.id === activeListing) || LISTINGS[0];

  return (
    <CarouselShell
      name="Airbnb Travel Map & Stay Scroller"
      index={40}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Interactive map sync on card hover
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
      <div className="w-full bg-white rounded-[2rem] border border-stone-200/80 p-5 sm:p-7 shadow-sm">
        {/* Header & Map Pin Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6 items-center">
          <div className="flex-1">
            <span className="text-[11px] font-bold tracking-widest uppercase text-rose-500">
              GLOBAL STAYS COLLECTION
            </span>
            <h3 className="text-2xl font-black text-stone-900 tracking-tight mt-0.5">
              Unique Stays Around the World
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Currently focused: <strong className="text-stone-800">{selected.title}</strong> in {selected.location}
            </p>
          </div>

          {/* Interactive Mini Map Representation */}
          <div className="relative w-full lg:w-72 h-28 rounded-2xl bg-stone-100 border border-stone-200 overflow-hidden shadow-inner flex items-center justify-center">
            {/* World Grid Texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:12px_12px]" />

            <div className="absolute top-2 left-3 flex items-center gap-1 text-[10px] font-bold text-stone-500 uppercase tracking-wider">
              <Compass size={12} className="text-rose-500" />
              Interactive Radar
            </div>

            {/* Pins */}
            {LISTINGS.map((item) => {
              const isSelected = item.id === activeListing;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveListing(item.id)}
                  style={{ left: `${item.mapCoord.x}%`, top: `${item.mapCoord.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-[10px] font-black transition-all shadow-md flex items-center gap-0.5 ${
                    isSelected
                      ? "bg-rose-500 text-white scale-110 z-20 ring-4 ring-rose-200"
                      : "bg-white text-stone-800 hover:scale-105 z-10"
                  }`}
                >
                  <MapPin size={9} />
                  <span>{item.price}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Slide Track */}
        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-5">
            {LISTINGS.map((listing) => {
              const isSelected = listing.id === activeListing;
              const isLiked = liked[listing.id];

              return (
                <div
                  key={listing.id}
                  onMouseEnter={() => setActiveListing(listing.id)}
                  className="flex-[0_0_85%] sm:flex-[0_0_48%] md:flex-[0_0_36%] lg:flex-[0_0_28%] min-w-0 group cursor-pointer"
                >
                  <div
                    className={`rounded-2xl p-3 border transition-all duration-300 flex flex-col justify-between h-full bg-stone-50/70 ${
                      isSelected
                        ? "border-rose-400/80 shadow-lg bg-white ring-1 ring-rose-300/40"
                        : "border-stone-200/80 hover:border-stone-300"
                    }`}
                  >
                    {/* Image Box with Badges */}
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-200 mb-3">
                      <img
                        src={listing.images[0]}
                        alt={listing.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {listing.superhost && (
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 text-stone-900 shadow">
                          Superhost
                        </span>
                      )}

                      <button
                        onClick={(e) => toggleLike(listing.id, e)}
                        className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur shadow-sm transition ${
                          isLiked ? "bg-rose-50 text-rose-500" : "bg-white/80 text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        <Heart size={14} className={isLiked ? "fill-rose-500" : ""} />
                      </button>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1 px-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-stone-800 truncate">{listing.location}</span>
                        <div className="flex items-center gap-1 font-bold text-stone-900 shrink-0">
                          <Star size={12} className="fill-amber-400 text-amber-400" />
                          <span>{listing.rating}</span>
                        </div>
                      </div>

                      <h4 className="text-xs text-stone-500 line-clamp-1 font-medium">{listing.title}</h4>

                      <div className="pt-2 flex items-baseline gap-1">
                        <span className="text-base font-black text-stone-900">{listing.price}</span>
                        <span className="text-xs text-stone-500 font-medium">/ {listing.period}</span>
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
