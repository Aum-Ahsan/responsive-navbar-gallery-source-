// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Star } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  rating: number;
  reviews: number;
  variants: {
    name: string;
    colorHex: string;
    image: string;
  }[];
}

const PRODUCTS: Product[] = [
  {
    id: "air-velocity-26",
    name: "Air Velocity React",
    category: "Men's Road Running Shoes",
    price: 160,
    originalPrice: 190,
    badge: "BEST SELLER",
    rating: 4.8,
    reviews: 248,
    variants: [
      {
        name: "Triple Black",
        colorHex: "#1c1c1e",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80",
      },
      {
        name: "Hyper Orange",
        colorHex: "#f97316",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=700&q=80",
      },
      {
        name: "Pure Platinum",
        colorHex: "#cbd5e1",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&q=80",
      },
    ],
  },
  {
    id: "tech-fleece-hoodie",
    name: "AeroShield Windrunner",
    category: "All-Weather Technical Jacket",
    price: 135,
    badge: "JUST IN",
    rating: 4.9,
    reviews: 112,
    variants: [
      {
        name: "Dark Obsidian",
        colorHex: "#1e293b",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&q=80",
      },
      {
        name: "Olive Cargo",
        colorHex: "#4d5b40",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=700&q=80",
      },
      {
        name: "Heather Gray",
        colorHex: "#94a3b8",
        image: "https://images.unsplash.com/photo-1578768079052-aa76e520028b?w=700&q=80",
      },
    ],
  },
  {
    id: "dunk-low-retro",
    name: "Apex Court Low",
    category: "Skateboarding & Streetwear",
    price: 115,
    originalPrice: 130,
    badge: "TRENDING",
    rating: 4.7,
    reviews: 580,
    variants: [
      {
        name: "Pine Green & White",
        colorHex: "#15803d",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=700&q=80",
      },
      {
        name: "Varsity Royal",
        colorHex: "#2563eb",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=700&q=80",
      },
      {
        name: "Panda Black/White",
        colorHex: "#000000",
        image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=700&q=80",
      },
    ],
  },
  {
    id: "trail-hydration-vest",
    name: "Terra Ultra Trail Pack",
    category: "Ultralight Running Gear",
    price: 95,
    badge: "SUSTAINABLE",
    rating: 4.6,
    reviews: 89,
    variants: [
      {
        name: "Sunburst Ochre",
        colorHex: "#eab308",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80",
      },
      {
        name: "Midnight Navy",
        colorHex: "#0f172a",
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&q=80",
      },
    ],
  },
  {
    id: "pro-compression-tights",
    name: "Recovery Therma Tight",
    category: "Base Layer Training",
    price: 75,
    rating: 4.8,
    reviews: 140,
    variants: [
      {
        name: "Stealth Slate",
        colorHex: "#334155",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=700&q=80",
      },
      {
        name: "Crimson Tint",
        colorHex: "#e11d48",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80",
      },
    ],
  },
];

export default function Carousel31() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({});
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});

  const setVariant = (productId: string, variantIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedVariants((prev) => ({ ...prev, [productId]: variantIndex }));
  };

  const toggleWishlist = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleQuickAdd = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAddedToCart((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  return (
    <CarouselShell
      name="E-Commerce Swatch Catalog"
      index={31}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-2 hidden sm:inline">
            Interactive colorway switcher
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
      <div className="w-full bg-white p-5 sm:p-7 rounded-[1.75rem] border border-neutral-200/80 shadow-sm">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-neutral-400">Spring Collection 2026</p>
            <h3 className="text-2xl font-black tracking-tight text-neutral-900 mt-0.5">Performance &amp; Lifestyle</h3>
          </div>
          <span className="text-xs font-semibold text-neutral-600 hover:text-black transition cursor-pointer underline underline-offset-4">
            View All ({PRODUCTS.length})
          </span>
        </div>

        <div className="overflow-hidden -mx-2 px-2" ref={ref}>
          <div className="flex gap-5 sm:gap-6">
            {PRODUCTS.map((product) => {
              const activeVarIdx = selectedVariants[product.id] || 0;
              const activeVariant = product.variants[activeVarIdx];
              const isWished = wishlist[product.id];
              const isAdded = addedToCart[product.id];

              return (
                <div
                  key={product.id}
                  className="flex-[0_0_82%] sm:flex-[0_0_46%] md:flex-[0_0_35%] lg:flex-[0_0_28%] min-w-0 group"
                >
                  <div className="flex flex-col h-full bg-neutral-50 rounded-2xl p-3.5 border border-neutral-200/60 hover:shadow-lg transition-all duration-300">
                    {/* Image Area */}
                    <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-white mb-3 flex items-center justify-center">
                      <img
                        src={activeVariant.image}
                        alt={`${product.name} - ${activeVariant.name}`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Top Badges */}
                      {product.badge && (
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-black text-white shadow-sm">
                          {product.badge}
                        </span>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => toggleWishlist(product.id, e)}
                        className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center shadow-sm backdrop-blur transition ${
                          isWished ? "bg-red-50 text-red-500" : "bg-white/90 text-neutral-600 hover:text-black"
                        }`}
                        aria-label="Wishlist"
                      >
                        <Heart size={15} className={isWished ? "fill-red-500" : ""} />
                      </button>

                      {/* Quick Add Overlay on Hover */}
                      <div className="absolute inset-x-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          onClick={(e) => handleQuickAdd(product.id, e)}
                          className={`w-full py-2.5 rounded-lg text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-md transition ${
                            isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-black text-white hover:bg-neutral-800"
                          }`}
                        >
                          <ShoppingBag size={14} />
                          {isAdded ? "Added to Bag!" : "Quick Add"}
                        </button>
                      </div>
                    </div>

                    {/* Color Swatch Circles */}
                    <div className="flex items-center justify-between gap-2 mb-2 px-1">
                      <div className="flex items-center gap-1.5">
                        {product.variants.map((v, vIdx) => (
                          <button
                            key={v.name}
                            onClick={(e) => setVariant(product.id, vIdx, e)}
                            className={`w-4 h-4 rounded-full border transition-all ${
                              activeVarIdx === vIdx
                                ? "ring-2 ring-black ring-offset-2 scale-110"
                                : "border-neutral-300 hover:scale-105"
                            }`}
                            style={{ backgroundColor: v.colorHex }}
                            title={v.name}
                            aria-label={v.name}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-neutral-400 truncate max-w-[110px]">
                        {activeVariant.name}
                      </span>
                    </div>

                    {/* Product Metadata */}
                    <div className="flex-1 flex flex-col justify-between px-1">
                      <div>
                        <p className="text-[11px] font-medium text-neutral-500 mb-0.5">{product.category}</p>
                        <h4 className="text-sm font-bold text-neutral-900 leading-tight group-hover:text-black line-clamp-1">
                          {product.name}
                        </h4>
                      </div>

                      {/* Rating & Pricing */}
                      <div className="mt-3 pt-2.5 border-t border-neutral-200/50 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-black text-neutral-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs font-semibold text-neutral-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-700">
                          <Star size={12} className="fill-amber-400 text-amber-400" />
                          <span>{product.rating}</span>
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
