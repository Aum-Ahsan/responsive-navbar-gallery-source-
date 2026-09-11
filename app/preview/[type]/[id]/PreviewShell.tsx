"use client";
import { useState } from "react";
import { Monitor, Tablet, Smartphone } from "lucide-react";

type View = "desktop" | "tablet" | "mobile";

const views: { id: View; label: string; icon: typeof Monitor; maxWidth: string }[] = [
  { id: "desktop", label: "Desktop", icon: Monitor, maxWidth: "max-w-full" },
  { id: "tablet", label: "iPad", icon: Tablet, maxWidth: "max-w-[820px]" },
  { id: "mobile", label: "Mobile", icon: Smartphone, maxWidth: "max-w-[390px]" },
];

export function PreviewShell({ children, type, id }: { children: React.ReactNode; type: string; id: string }) {
  const [view, setView] = useState<View>("desktop");
  const current = views.find(v => v.id === view)!;

  return (
    <div className="min-h-screen w-full bg-[#f5f5f3] flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between gap-4 shadow-sm">
        {/* Left: back + label */}
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="/"
            className="flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-black/5 transition shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </a>
          <span className="hidden sm:inline text-sm font-semibold text-black/70 capitalize truncate">
            {type} <span className="text-black/40 font-normal">#{id}</span>
          </span>
        </div>

        {/* Center: viewport switcher */}
        <div className="flex w-fit rounded-full border border-black/10 bg-[#f0f0ed] p-1 shadow-inner">
          {views.map(({ id: vid, label, icon: Icon }) => (
            <button
              key={vid}
              onClick={() => setView(vid)}
              title={label}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                view === vid ? "bg-black text-white shadow" : "text-[#5c5c57] hover:bg-black/5"
              }`}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* Right: viewport badge */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-[#888882] shrink-0">
          <span className="rounded-full bg-[#ebebea] px-3 py-1 font-medium">
            {view === "desktop" ? "Full Width" : view === "tablet" ? "820px" : "390px"}
          </span>
        </div>
      </header>

      {/* Preview area */}
      <main className="flex-1 flex flex-col items-center py-8 px-4 overflow-x-hidden">
        {/* Device frame */}
        <div
          className={`w-full transition-[max-width] duration-300 ease-in-out ${current.maxWidth} ${
            view !== "desktop"
              ? "rounded-[28px] border border-black/15 shadow-[0_24px_80px_rgba(0,0,0,0.12)] overflow-hidden bg-white ring-1 ring-white/50"
              : ""
          }`}
        >
          {/* Mobile / tablet notch bar */}
          {view === "mobile" && (
            <div className="h-10 bg-black flex items-center justify-center rounded-t-[28px]">
              <div className="w-24 h-4 bg-black rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-8 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
          )}
          {view === "tablet" && (
            <div className="h-6 bg-[#1a1a1a] rounded-t-[28px] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
          )}

          {/* Component content — preview-mobile/tablet classes trigger the navbar CSS rules in globals.css */}
          <div className={`w-full overflow-x-hidden ${view !== "desktop" ? "bg-white" : ""} ${view === "mobile" ? "preview-mobile" : view === "tablet" ? "preview-tablet" : ""}`}>
            {children}
          </div>

          {/* Mobile bottom bar */}
          {view === "mobile" && (
            <div className="h-8 bg-black rounded-b-[28px] flex items-center justify-center">
              <div className="w-24 h-1 rounded-full bg-white/20" />
            </div>
          )}
          {view === "tablet" && (
            <div className="h-4 bg-[#1a1a1a] rounded-b-[28px]" />
          )}
        </div>

        {/* Responsive hint */}
        {view !== "desktop" && (
          <p className="mt-4 text-xs text-[#aaa] font-medium">
            Previewing at <span className="font-bold text-[#888]">{view === "tablet" ? "820px" : "390px"}</span> viewport width
          </p>
        )}
      </main>
    </div>
  );
}
