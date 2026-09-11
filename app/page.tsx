"use client";
import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { navbars } from "@/components/navbars";
import { heroes } from "@/components/heroes";
import { carousels } from "@/components/carousels";
import { processes } from "@/components/processes";
import { ctas } from "@/components/ctas";
import { newsletters } from "@/components/newsletters";

type Preview = "desktop" | "tablet" | "mobile";

const views: { id: Preview; label: string; icon: typeof Monitor }[] = [
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "tablet", label: "Tablet", icon: Tablet },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

function Card({
  id, name, source, children, preview, type,
}: {
  id: string;
  name: string;
  source: string;
  children: React.ReactNode;
  preview: Preview;
  type: "Navbar" | "Hero" | "Carousel" | "Process" | "CTA" | "Newsletter";
}) {
  return (
    <article id={`${type.toLowerCase()}-${id}`} className="component-card overflow-visible rounded-[22px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,.06)]">
      {/* Card header */}
      <div className="component-card-header flex items-center justify-between rounded-t-[22px] border-b border-black/8 bg-white px-4 py-3">
        <div className="flex items-baseline gap-3 min-w-0">
          <h3 className="text-base font-bold shrink-0">{type} {id}</h3>
          <span className="hidden text-sm text-[#787873] sm:inline truncate">{name}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline rounded-full bg-[#f0f0ed] px-3 py-1 text-[11px] font-semibold uppercase tracking-[.08em] text-[#71716c]">
            {source}
          </span>
          <a
            href={`/preview/${type.toLowerCase()}/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/20 bg-white px-3 py-1 text-xs font-bold text-black hover:bg-black/5 transition flex items-center gap-1 whitespace-nowrap"
          >
            Open Preview
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
      {/* Preview area */}
      <div className="component-preview overflow-visible rounded-b-[22px] bg-[linear-gradient(135deg,#ecece8_25%,transparent_25%),linear-gradient(225deg,#ecece8_25%,transparent_25%),linear-gradient(45deg,#ecece8_25%,transparent_25%),linear-gradient(315deg,#ecece8_25%,#f6f6f3_25%)] bg-[length:16px_16px] bg-[position:8px_0,8px_0,0_0,0_0]">
        <div className={`preview-shell preview-${preview} mx-auto transition-[max-width] duration-300 ${preview === "desktop" ? "max-w-full" : preview === "tablet" ? "max-w-[820px]" : "max-w-[390px]"}`}>
          {children}
        </div>
      </div>
    </article>
  );
}

function SectionHeader({ category, title, description }: { category: string; title: string; description: string }) {
  return (
    <div className="mb-7">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#777770]">{category}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-[-.03em]">{title}</h2>
      <p className="mt-1 text-sm text-[#6d6d67]">{description}</p>
    </div>
  );
}

export default function Home() {
  const [preview, setPreview] = useState<Preview>("desktop");

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#151515] overflow-x-hidden pt-[140px] md:pt-[110px]">

      {/* ── STICKY HEADER ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f5f5f3]/95 px-4 py-4 backdrop-blur sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 md:flex-row md:items-end md:justify-between">

          {/* Left: title + description + nav pills */}
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[.22em] text-[#6d6d67] sm:text-xs">
              Reusable component system
            </p>
            <h1 className="text-2xl font-semibold tracking-[-.04em] sm:text-3xl md:text-4xl">
              Navigation &amp; Hero Gallery
            </h1>
            <p className="mt-1 max-w-2xl text-xs leading-6 text-[#64645f] sm:text-sm">
              Fifty-three responsive navbars, twenty heroes, Twenty-Nine Carousels, fifty Processes and CTAs using one common container, gutter and card-padding system.
            </p>
            {/* Category pills — wrap on mobile */}
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { href: "#navbars",     label: "53 Navbars" },
                { href: "#heroes",      label: "20 Heroes" },
                { href: "#carousels",   label: "29 Carousels" },
                { href: "#processes",   label: "50 Processes" },
                { href: "#newsletters", label: "25 Newsletters" },
                { href: "#ctas",        label: "50 CTAs" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold hover:bg-black/5 transition">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: viewport switcher */}
          <div className="flex w-fit shrink-0 rounded-full border border-black/10 bg-white p-1 shadow-sm self-start md:self-auto" aria-label="Preview size">
            {views.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setPreview(id)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4 ${preview === id ? "bg-black text-white" : "text-[#5c5c57] hover:bg-black/5"}`}
                aria-pressed={preview === id}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

        </div>
      </header>

      {/* ── SECTIONS ── */}
      <section id="navbars" className="gallery-section mx-auto max-w-[1600px]">
        <SectionHeader category="Category 01" title="Navbar Components" description="All components share exactly the same horizontal padding and maximum content width." />
        <div className="space-y-8">
          {navbars.map(({ id, name, source, Component }) => (
            <Card key={id} id={id} name={name} source={source} preview={preview} type="Navbar"><Component /></Card>
          ))}
        </div>
      </section>

      <section id="heroes" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10">
        <SectionHeader category="Category 02" title="Hero Sections" description="Twenty flexible hero templates for SaaS, retail, events, services, portfolios and product platforms." />
        <div className="space-y-8">
          {heroes.map(({ id, name, Component }) => (
            <Card key={id} id={id} name={name} source={`Hero ${id}`} preview={preview} type="Hero"><Component /></Card>
          ))}
        </div>
      </section>

      <section id="carousels" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10">
        <SectionHeader category="Category 03" title="Carousel Components" description="A collection of responsive carousel and slider components using the same shared container, spacing and preview system." />
        <div className="space-y-8">
          {carousels.map(({ id, name, Component }) => (
            <Card key={id} id={id} name={name} source={`COMPONENT ${id}`} preview={preview} type="Carousel"><Component /></Card>
          ))}
        </div>
      </section>

      <section id="processes" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10">
        <SectionHeader category="Category 04" title="Process Sections" description="Fifty visually stunning and fully responsive process sections and workflows." />
        <div className="space-y-8">
          {processes.map(({ id, name, Component }) => (
            <Card key={id} id={id} name={name} source={`PROCESS ${id}`} preview={preview} type="Process"><Component /></Card>
          ))}
        </div>
      </section>

      <section id="ctas" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10">
        <SectionHeader category="Category 05" title="Call to Action Sections" description="Fifty highly functional, interactive, and responsive CTA components." />
        <div className="space-y-8">
          {ctas.map(({ id, name, Component }) => (
            <Card key={id} id={id} name={name} source={`CTA ${id}`} preview={preview} type="CTA"><Component /></Card>
          ))}
        </div>
      </section>

      <section id="newsletters" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10">
        <SectionHeader category="Category 06" title="Newsletter Signups" description="Twenty-five unique newsletter components demonstrating various layouts and interactions." />
        <div className="space-y-8">
          {newsletters.map(({ id, name, Component }) => (
            <Card key={id} id={id} name={name} source={`Newsletter ${id}`} preview={preview} type="Newsletter"><Component /></Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-[#777770]">
        Built with React, Node.js and Tailwind CSS.
      </footer>
    </main>
  );
}
