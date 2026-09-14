// @ts-nocheck
"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Wifi, ShieldCheck, Eye, EyeOff, Rotate3D, CreditCard } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const CARDS = [
  {
    id: "card-metal",
    type: "Platinum Metal",
    issuer: "Revolut Ultra",
    balance: "$24,850.40",
    number: "•••• •••• •••• 4892",
    holder: "ALEXANDER RIVERA",
    expiry: "09/29",
    cvv: "894",
    limit: 65, // %
    gradient: "from-zinc-800 via-neutral-900 to-black text-white border-zinc-700",
    chipColor: "bg-amber-300",
  },
  {
    id: "card-aurora",
    type: "Holographic Aurora",
    issuer: "Apple Card Titanium",
    balance: "$8,120.00",
    number: "•••• •••• •••• 7104",
    holder: "ALEXANDER RIVERA",
    expiry: "04/30",
    cvv: "312",
    limit: 30,
    gradient: "from-purple-900 via-indigo-900 to-rose-950 text-white border-purple-500/40",
    chipColor: "bg-emerald-200",
  },
  {
    id: "card-emerald",
    type: "Crypto Vault Card",
    issuer: "Solana Pay Ledger",
    balance: "18.42 SOL ($3,140)",
    number: "•••• •••• •••• 9921",
    holder: "ALEXANDER RIVERA",
    expiry: "11/28",
    cvv: "109",
    limit: 85,
    gradient: "from-emerald-950 via-teal-900 to-black text-white border-emerald-500/40",
    chipColor: "bg-cyan-200",
  },
];

export default function Carousel43() {
  const [ref, api] = useEmblaCarousel({ align: "center", loop: false });
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <CarouselShell
      name="Apple Wallet 3D Flip Credit Card Carousel"
      index={43}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Click any card to flip for CVV &amp; spending limit
          </span>
          <button
            onClick={() => api?.scrollPrev()}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Previous card"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black"
            aria-label="Next card"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      }
    >
      <div className="w-full bg-[#18191f] text-white p-6 sm:p-9 rounded-[2rem] border border-zinc-800 shadow-2xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <CreditCard size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Digital Wallet &amp; Accounts</h3>
              <p className="text-xs text-zinc-400">3 Virtual Physical Cards Active</p>
            </div>
          </div>

          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Apple Pay Encrypted
          </span>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden -mx-2 px-2 py-4" ref={ref}>
          <div className="flex gap-6 sm:gap-8 justify-center">
            {CARDS.map((card) => {
              const isFlipped = flippedCards[card.id];

              return (
                <div
                  key={card.id}
                  className="flex-[0_0_92%] sm:flex-[0_0_65%] md:flex-[0_0_52%] lg:flex-[0_0_42%] min-w-0 [perspective:1200px]"
                >
                  <div
                    onClick={() => toggleFlip(card.id)}
                    className="relative w-full aspect-[1.58/1] rounded-2xl cursor-pointer shadow-2xl transition-transform duration-700 [transform-style:preserve-3d]"
                    style={{
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Front Face */}
                    <div
                      className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between border bg-gradient-to-br ${card.gradient} [backface-visibility:hidden] shadow-xl`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black tracking-widest uppercase opacity-80">
                          {card.issuer}
                        </span>
                        <div className="flex items-center gap-2">
                          <Wifi size={18} className="rotate-90 opacity-70" />
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 backdrop-blur">
                            TAP TO FLIP
                          </span>
                        </div>
                      </div>

                      {/* Chip & Contactless */}
                      <div className="flex items-center gap-4 my-auto">
                        <div
                          className={`w-12 h-9 rounded-md ${card.chipColor} border border-black/20 shadow-inner flex flex-col justify-around p-1 opacity-90`}
                        >
                          <div className="w-full h-0.5 bg-black/30" />
                          <div className="w-full h-0.5 bg-black/30" />
                        </div>
                        <div>
                          <p className="text-[10px] text-zinc-400 font-mono">Available Balance</p>
                          <p className="text-xl sm:text-2xl font-black tracking-tight">{card.balance}</p>
                        </div>
                      </div>

                      {/* Card Bottom: Number & Expiry */}
                      <div className="flex items-end justify-between font-mono text-xs">
                        <div>
                          <p className="tracking-widest text-sm font-bold">{card.number}</p>
                          <p className="text-[10px] text-zinc-400 uppercase pt-0.5">{card.holder}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-zinc-400">EXPIRES</span>
                          <p className="font-bold">{card.expiry}</p>
                        </div>
                      </div>
                    </div>

                    {/* Back Face (CVV & Limits) */}
                    <div
                      className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between border bg-zinc-950 text-white border-zinc-700 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl`}
                    >
                      {/* Magnetic Strip */}
                      <div className="-mx-6 -mt-2 h-10 bg-black border-y border-zinc-800" />

                      {/* CVV & Signature Area */}
                      <div className="my-auto space-y-3">
                        <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800">
                          <span className="text-xs font-mono text-zinc-400">SECURITY CVV:</span>
                          <span className="font-mono text-base font-black text-amber-400 tracking-widest">
                            {card.cvv}
                          </span>
                        </div>

                        {/* Monthly Spending Meter */}
                        <div>
                          <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                            <span>Monthly Limit Used:</span>
                            <span className="font-bold text-white">{card.limit}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full"
                              style={{ width: `${card.limit}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <ShieldCheck size={13} /> Tokenized Security
                        </span>
                        <span>Click to flip back</span>
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
