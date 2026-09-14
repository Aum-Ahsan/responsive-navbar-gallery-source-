// @ts-nocheck
"use client";
import React, { useState, useRef } from "react";
import { X, Heart, Star, RotateCcw, MapPin, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const CARDS = [
  {
    id: "alex-founder",
    name: "Alex Rivera",
    age: 28,
    role: "Founding AI Engineer",
    company: "Synthetix Labs",
    location: "San Francisco, CA",
    bio: "Building autonomous agent swarms. Loves trail marathons, specialty pour-overs, and mechanical keyboards.",
    tags: ["Distributed Systems", "Rust", "Ultra Trail", "Bouldering"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80",
  },
  {
    id: "sophia-architect",
    name: "Sophia Chen",
    age: 31,
    role: "Principal Product Architect",
    company: "Linear Systems",
    location: "New York, NY",
    bio: "Obsessed with micro-interactions and typographic rhythm. 35mm street photographer.",
    tags: ["Design Systems", "Analog Film", "Minimalism", "Modern Art"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80",
  },
  {
    id: "david-founder",
    name: "David Morales",
    age: 29,
    role: "Head of Infrastructure",
    company: "CloudCore",
    location: "Austin, TX",
    bio: "Zero-downtime database migrations are my meditation. Coffee roaster & gravel bike racer.",
    tags: ["Kubernetes", "PostgreSQL", "Specialty Coffee", "Cycling"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
  },
  {
    id: "maya-research",
    name: "Maya Patel",
    age: 27,
    role: "Quantum Research Fellow",
    company: "CERN / Oxford",
    location: "Geneva, Switzerland",
    bio: "Exploring superconducting qubits and topological insulators. Sci-fi book club organizer.",
    tags: ["Quantum Computing", "Physics", "Sci-Fi", "Violin"],
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80",
  },
];

export default function Carousel34() {
  const [deck, setDeck] = useState(CARDS);
  const [history, setHistory] = useState<any[]>([]);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const startPos = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    if (deck.length === 0) return;
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setDragOffset({ x: dx, y: dy });
  };

  const triggerSwipe = (dir: "left" | "right" | "up") => {
    if (deck.length === 0) return;
    const topCard = deck[0];
    setHistory((prev) => [topCard, ...prev]);
    setLastAction(dir === "right" ? "MATCH" : dir === "left" ? "PASS" : "SUPER LIKE");

    setDeck((prev) => prev.slice(1));
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    if (dragOffset.x > 120) {
      triggerSwipe("right");
    } else if (dragOffset.x < -120) {
      triggerSwipe("left");
    } else if (dragOffset.y < -100) {
      triggerSwipe("up");
    } else {
      setDragOffset({ x: 0, y: 0 });
    }
    setIsDragging(false);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const restored = history[0];
    setHistory((prev) => prev.slice(1));
    setDeck((prev) => [restored, ...prev]);
    setLastAction("REWIND");
  };

  const handleReset = () => {
    setDeck(CARDS);
    setHistory([]);
    setDragOffset({ x: 0, y: 0 });
    setLastAction(null);
  };

  return (
    <CarouselShell
      name="3D Card Stack Gesture Swipe"
      index={34}
      headerControls={
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#7a6b5d] mr-1 hidden sm:inline">
            Drag card left/right • Physical tilt physics
          </span>
          <button
            onClick={handleUndo}
            disabled={history.length === 0}
            className="p-2.5 rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5 transition text-black disabled:opacity-40"
            aria-label="Undo"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center justify-center py-4 select-none">
        {/* Card Stacking Container */}
        <div className="relative w-full max-w-[360px] h-[520px]">
          {deck.length === 0 ? (
            <div className="w-full h-full rounded-[2rem] bg-white border border-neutral-200 shadow-xl flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Sparkles size={28} />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">You're All Caught Up!</h4>
              <p className="text-sm text-neutral-500 mb-6">
                You've reviewed all candidates in this batch.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-black text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition"
              >
                Reset Deck
              </button>
            </div>
          ) : (
            deck.slice(0, 3).map((card, i) => {
              const isTop = i === 0;
              const scale = 1 - i * 0.05;
              const translateY = i * 14;

              const style = isTop
                ? {
                    transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${dragOffset.x * 0.06}deg)`,
                    cursor: isDragging ? "grabbing" : "grab",
                    transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    zIndex: 30 - i,
                  }
                : {
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    zIndex: 30 - i,
                    transition: "transform 0.3s ease",
                  };

              const likeOpacity = isTop ? Math.min(Math.max(dragOffset.x / 100, 0), 1) : 0;
              const passOpacity = isTop ? Math.min(Math.max(-dragOffset.x / 100, 0), 1) : 0;

              return (
                <div
                  key={card.id}
                  style={style}
                  onPointerDown={isTop ? handlePointerDown : undefined}
                  onPointerMove={isTop ? handlePointerMove : undefined}
                  onPointerUp={isTop ? handlePointerUp : undefined}
                  className="absolute inset-0 rounded-[2.25rem] overflow-hidden bg-white shadow-2xl border border-neutral-200/80"
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover pointer-events-none"
                  />

                  {/* Reactive Stamps */}
                  {isTop && (
                    <>
                      <div
                        style={{ opacity: likeOpacity }}
                        className="absolute top-8 left-8 border-4 border-emerald-500 text-emerald-500 font-black text-2xl px-4 py-1.5 rounded-xl rotate-[-15deg] tracking-wider pointer-events-none bg-black/20 backdrop-blur-sm"
                      >
                        LIKE
                      </div>
                      <div
                        style={{ opacity: passOpacity }}
                        className="absolute top-8 right-8 border-4 border-red-500 text-red-500 font-black text-2xl px-4 py-1.5 rounded-xl rotate-[15deg] tracking-wider pointer-events-none bg-black/20 backdrop-blur-sm"
                      >
                        PASS
                      </div>
                    </>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

                  {/* Card Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white pointer-events-none">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-2xl font-black">{card.name}</h3>
                      <span className="text-xl font-medium text-neutral-300">{card.age}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-neutral-300 mb-2 font-medium">
                      <Briefcase size={13} className="text-neutral-400" />
                      <span>{card.role} • {card.company}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-3 font-medium">
                      <MapPin size={13} />
                      <span>{card.location}</span>
                    </div>

                    <p className="text-xs text-neutral-200 line-clamp-2 leading-relaxed mb-3">
                      {card.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/20 backdrop-blur-sm text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Floating Action Buttons */}
        <div className="flex items-center gap-5 mt-8">
          <button
            onClick={() => triggerSwipe("left")}
            disabled={deck.length === 0}
            className="w-14 h-14 rounded-full bg-white shadow-lg border border-neutral-200/80 flex items-center justify-center text-red-500 hover:scale-110 active:scale-95 transition disabled:opacity-40"
            aria-label="Pass"
          >
            <X size={26} strokeWidth={2.5} />
          </button>

          <button
            onClick={() => triggerSwipe("up")}
            disabled={deck.length === 0}
            className="w-11 h-11 rounded-full bg-white shadow-md border border-neutral-200/80 flex items-center justify-center text-indigo-500 hover:scale-110 active:scale-95 transition disabled:opacity-40"
            aria-label="Super Like"
          >
            <Star size={20} className="fill-indigo-500" />
          </button>

          <button
            onClick={() => triggerSwipe("right")}
            disabled={deck.length === 0}
            className="w-14 h-14 rounded-full bg-white shadow-lg border border-neutral-200/80 flex items-center justify-center text-emerald-500 hover:scale-110 active:scale-95 transition disabled:opacity-40"
            aria-label="Like"
          >
            <Heart size={26} className="fill-emerald-500" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </CarouselShell>
  );
}
