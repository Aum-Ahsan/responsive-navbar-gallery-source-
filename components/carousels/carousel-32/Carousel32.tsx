// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, Play, Pause, GitBranch, Zap, Layers, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

const TOUR_STEPS = [
  {
    id: "issues",
    number: "01",
    title: "Keyboard-First Issue Tracking",
    desc: "Blazing fast keyboard shortcuts, markdown sub-issues, and bi-directional GitHub sync in <50ms.",
    badge: "CORE ENGINE",
    preview: {
      type: "board",
      title: "Sprint Cycle 34 • Active",
      stats: "24 Issues • 3 In Review",
      items: [
        { key: "ENG-104", text: "Implement optimistic WebGL renderer", tag: "In Progress", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
        { key: "ENG-105", text: "Zero-copy buffer allocation for streams", tag: "Done", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
        { key: "ENG-106", text: "Cross-region distributed KV caching", tag: "In Review", color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" },
      ],
    },
  },
  {
    id: "workflows",
    number: "02",
    title: "Continuous Autonomous Workflows",
    desc: "Automatically triage incoming alerts, run CI/CD regression suites, and deploy preview environments.",
    badge: "AUTOMATION",
    preview: {
      type: "pipeline",
      title: "Production Pipeline • main #4892",
      stats: "Passed in 1m 42s",
      items: [
        { key: "BUILD", text: "Next.js Static Generation & Turbopack", status: "100%", ok: true },
        { key: "TEST", text: "412 Unit & End-to-End Playwright Tests", status: "Passed", ok: true },
        { key: "DEPLOY", text: "Edge CDN Propagated across 32 Regions", status: "Active", ok: true },
      ],
    },
  },
  {
    id: "insights",
    number: "03",
    title: "Cycle Metrics & Velocity Analytics",
    desc: "Real-time velocity forecasts, cycle burndown charts, and automated team workload balancing.",
    badge: "ANALYTICS",
    preview: {
      type: "chart",
      title: "Team Velocity & Output Prediction",
      stats: "+28% vs previous cycle",
      bars: [35, 60, 48, 85, 92, 74, 98],
    },
  },
  {
    id: "sync",
    number: "04",
    title: "Global Offline-First Synchronization",
    desc: "Local IndexedDB storage guarantees instant writes with conflict-free replicated data types (CRDT).",
    badge: "INFRASTRUCTURE",
    preview: {
      type: "sync",
      title: "CRDT State Replicator",
      stats: "Latency: 8ms • P99: 14ms",
      peers: ["us-east-1", "eu-central-1", "ap-southeast-1", "sa-east-1"],
    },
  },
];

export default function Carousel32() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // 50ms tick
    const totalDuration = 4500; // 4.5 seconds per slide
    const increment = (interval / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((s) => (s + 1) % TOUR_STEPS.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, activeStep]);

  const selectStep = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  const current = TOUR_STEPS[activeStep];

  return (
    <CarouselShell
      name="SaaS Interactive Feature Tour"
      index={32}
      headerControls={
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition"
          >
            {isPaused ? <Play size={13} className="fill-zinc-700" /> : <Pause size={13} />}
            <span>{isPaused ? "Resume" : "Pause"}</span>
          </button>
        </div>
      }
    >
      <div
        className="w-full bg-[#0a0b0e] text-white rounded-[1.75rem] p-6 sm:p-9 border border-zinc-800 shadow-2xl overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
                <Sparkles size={12} />
                ENTERPRISE WORKFLOW SUITE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-100">
                Designed for high-output engineering teams.
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              {TOUR_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.id}
                    onClick={() => selectStep(idx)}
                    className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border relative overflow-hidden ${
                      isActive
                        ? "bg-zinc-900/90 border-indigo-500/50 shadow-lg shadow-indigo-500/5"
                        : "bg-zinc-900/30 border-zinc-800/60 hover:bg-zinc-900/60 hover:border-zinc-700"
                    }`}
                  >
                    {/* Live Progress Bar inside Active Card */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`font-mono text-xs font-black px-1.5 py-0.5 rounded ${
                            isActive ? "bg-indigo-500 text-white" : "bg-zinc-800 text-zinc-400"
                          }`}
                        >
                          {step.number}
                        </span>
                        <h4 className={`text-sm font-bold transition-colors ${isActive ? "text-white" : "text-zinc-400"}`}>
                          {step.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                        {step.badge}
                      </span>
                    </div>

                    {isActive && (
                      <p className="mt-2 text-xs text-zinc-300 leading-relaxed pl-8 animate-in fade-in duration-300">
                        {step.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Live Simulation Screen */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-[#121318] p-5 sm:p-6 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-zinc-400 ml-2">{current.preview.title}</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {current.preview.stats}
                </span>
              </div>

              {/* Dynamic Interactive Body based on Step */}
              <div className="flex-1 flex flex-col justify-center">
                {current.preview.type === "board" && (
                  <div className="space-y-2.5">
                    {current.preview.items.map((it) => (
                      <div
                        key={it.key}
                        className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3.5 flex items-center justify-between hover:border-zinc-700 transition"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-zinc-400">{it.key}</span>
                          <span className="text-xs sm:text-sm font-semibold text-zinc-200">{it.text}</span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${it.color}`}>
                          {it.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {current.preview.type === "pipeline" && (
                  <div className="space-y-3">
                    {current.preview.items.map((it) => (
                      <div
                        key={it.key}
                        className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3.5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                          <div>
                            <span className="font-mono text-[11px] text-zinc-400">{it.key}</span>
                            <p className="text-xs sm:text-sm font-medium text-zinc-200">{it.text}</p>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-emerald-400">{it.status}</span>
                      </div>
                    ))}
                  </div>
                )}

                {current.preview.type === "chart" && (
                  <div className="space-y-4">
                    <div className="h-44 flex items-end justify-between gap-3 pt-6 px-2">
                      {current.preview.bars.map((h, bIdx) => (
                        <div key={bIdx} className="flex-1 flex flex-col items-center gap-2">
                          <span className="text-[10px] font-mono text-zinc-400">{h}</span>
                          <div
                            className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-cyan-400 transition-all duration-500"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[10px] font-mono text-zinc-400">W{bIdx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {current.preview.type === "sync" && (
                  <div className="grid grid-cols-2 gap-3">
                    {current.preview.peers.map((peer) => (
                      <div key={peer} className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-4 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <div>
                          <p className="text-xs font-bold text-white font-mono">{peer}</p>
                          <p className="text-[10px] text-zinc-400">Replicated &amp; Synced</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Quick Bar */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-zinc-400">
                  <GitBranch size={13} /> branch: feature/crdt-sync
                </span>
                <span className="font-mono text-indigo-400 hover:text-indigo-300 cursor-pointer flex items-center gap-1 font-semibold">
                  Inspect Live Payload <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselShell>
  );
}
