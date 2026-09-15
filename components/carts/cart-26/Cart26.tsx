"use client";
import React, { useState } from "react";
import { Download, Check, Lock, Star, Eye, Globe } from "lucide-react";

export default function Cart26() {
  const products = [
    { id: 1, name: "UI Kit Pro — 500+ Components", price: 79, format: "Figma + Sketch", downloads: "12,400", rating: 4.9, emoji: "🎨" },
    { id: 2, name: "Icon Pack — 2000 Vectors", price: 39, format: "SVG + PNG", downloads: "8,900", rating: 4.8, emoji: "✦" },
    { id: 3, name: "Font Bundle — 40 Typefaces", price: 59, format: "OTF + WOFF2", downloads: "5,200", rating: 4.7, emoji: "🔤" },
  ];

  const [purchased, setPurchased] = useState<Record<number, boolean>>({});
  const [downloading, setDownloading] = useState<Record<number, boolean>>({});

  const handlePurchase = (id: number) => {
    setPurchased(p => ({ ...p, [id]: true }));
  };

  const handleDownload = (id: number) => {
    setDownloading(d => ({ ...d, [id]: true }));
    setTimeout(() => setDownloading(d => ({ ...d, [id]: false })), 2500);
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-10 font-sans">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Digital Marketplace</p>
        <h2 className="text-2xl font-bold text-white">Design Resources</h2>
        <p className="text-slate-400 text-sm mt-1">Instant download after purchase · No shipping · Lifetime access</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {products.map(p => (
          <div key={p.id} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all group">
            {/* Header */}
            <div className="relative h-36 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center">
              <span className="text-5xl">{p.emoji}</span>
              <div className="absolute top-3 right-3 flex gap-1.5">
                <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full font-medium">{p.format}</span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-white text-sm leading-tight mb-2">{p.name}</h3>

              <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Star size={10} className="text-amber-400 fill-amber-400" /> {p.rating}</span>
                <span className="flex items-center gap-1"><Download size={10} /> {p.downloads}</span>
                <span className="flex items-center gap-1"><Globe size={10} /> Commercial use</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-white">${p.price}</span>
                <span className="text-xs text-emerald-400 font-semibold">One-time · No subscription</span>
              </div>

              {purchased[p.id] ? (
                <div className="space-y-2">
                  <button
                    onClick={() => handleDownload(p.id)}
                    className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      downloading[p.id] ? "bg-emerald-500 text-white" : "bg-indigo-500 hover:bg-indigo-400 text-white"
                    }`}
                  >
                    {downloading[p.id] ? <><Check size={15} /> Downloading...</> : <><Download size={15} /> Download Now</>}
                  </button>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 justify-center">
                    <Eye size={11} /> Also accessible in your Library
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handlePurchase(p.id)}
                  className="w-full py-3 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 flex items-center justify-center gap-2 transition"
                >
                  <Lock size={14} /> Buy & Download — ${p.price}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
