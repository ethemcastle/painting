"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

/* ============================================================ shared bits */

function SectionMeta({
  left,
  center,
  right,
}: {
  left: string;
  center: string;
  right: string;
}) {
  return (
    <div className="font-mono mb-12 grid grid-cols-1 items-baseline gap-2 border-b border-[color:var(--hair)] pb-[18px] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-muted)] sm:grid-cols-3">
      <span>{left}</span>
      <span className="text-center text-[color:var(--ink)] sm:text-center">
        {center}
      </span>
      <span className="sm:text-right">{right}</span>
    </div>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif max-w-[1000px] font-normal leading-[0.98] tracking-[-0.035em] text-[color:var(--ink)] ${className}`}
      style={{
        fontSize: "clamp(38px, 5.6vw, 80px)",
        fontVariationSettings: "'opsz' 144",
      }}
    >
      {children}
    </h2>
  );
}

/** italic em that picks up the live --current color */
export function Em({ children }: { children: React.ReactNode }) {
  return (
    <em
      className="font-italic"
      style={{
        color: "var(--current)",
        transition: "color 0.9s",
        fontStyle: "italic",
      }}
    >
      {children}
    </em>
  );
}

/* ============================================================ stats */

const STATS = [
  {
    num: 240,
    suffix: "+",
    label: "Walls painted",
    sub: "since 2019",
    sc: "#F4D14A",
    osc: "#1A1A1A",
  },
  {
    num: 12,
    suffix: "·",
    label: "Hand-mixed colors",
    sub: "curated each season",
    sc: "#2D5D4E",
    osc: "#F8F6F1",
  },
  {
    num: 48,
    suffix: "hrs",
    label: "Average job",
    sub: "two-coat, full prep",
    sc: "#C46447",
    osc: "#F8F6F1",
  },
  {
    num: 98,
    suffix: "%",
    label: "Return clients",
    sub: "verified, 2024",
    sc: "#A8C8E0",
    osc: "#1A1A1A",
  },
];

export function Stats() {
  return (
    <Reveal
      stagger
      className="grid grid-cols-1 border-y border-[color:var(--hair)] sm:grid-cols-2 lg:grid-cols-4"
    >
      {STATS.map((s) => (
        <div
          key={s.label}
          className="stat-card group relative overflow-hidden border-b border-[color:var(--hair)] px-8 py-12 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 lg:border-b-0"
          style={
            { "--sc": s.sc, "--osc": s.osc } as React.CSSProperties
          }
        >
          {/* hover fill */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[color:var(--sc)] transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-y-100"
          />
          <div className="relative z-[1] transition-colors duration-500 group-hover:text-[color:var(--osc)]">
            <div
              className="font-serif flex items-baseline gap-1.5 font-normal leading-none tracking-[-0.04em]"
              style={{
                fontSize: "clamp(54px, 5.8vw, 80px)",
                fontVariationSettings: "'opsz' 144",
              }}
            >
              <CountUp to={s.num} />
              <span
                className="font-italic text-[26px] leading-none text-[color:var(--ink-muted)] transition-colors duration-500 group-hover:text-[color:var(--osc)]"
                style={{ fontStyle: "italic" }}
              >
                {s.suffix}
              </span>
            </div>
            <div className="font-mono mt-[22px] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-muted)] transition-colors duration-500 group-hover:text-[color:var(--osc)]">
              {s.label}
            </div>
            <div
              className="font-italic mt-1.5 text-[13px] text-[color:var(--ink-soft)] transition-colors duration-500 group-hover:text-[color:var(--osc)]"
              style={{ fontStyle: "italic" }}
            >
              {s.sub}
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute right-7 top-6 inline-block h-8 w-8 rounded-full ring-[0.5px] ring-[color:var(--ink-soft)] transition-all duration-500 group-hover:scale-110 group-hover:ring-[color:var(--osc)]"
            style={{
              background: `radial-gradient(circle, ${s.sc} 0 30%, transparent 32%)`,
            }}
          />
        </div>
      ))}
    </Reveal>
  );
}

/* ============================================================ promises */

const PROMISES = [
  {
    title: "Free estimates",
    sub: "visit + quote, no charge",
  },
  {
    title: "3-year workmanship warranty",
    sub: "in writing, every job",
  },
  {
    title: "Fully insured",
    sub: "licensed Pennsylvania painters",
  },
];

export function Promises() {
  return (
    <Reveal
      stagger
      className="grid grid-cols-1 gap-6 border-y border-[color:var(--hair)] px-10 py-11 sm:gap-8 md:grid-cols-3"
    >
      {PROMISES.map((p) => (
        <div key={p.title} className="flex items-center gap-[18px]">
          <span
            className="inline-flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full border-[0.5px] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{
              borderColor: "var(--current)",
              color: "var(--current)",
              transition: "color 0.9s, border-color 0.9s, transform 0.5s",
            }}
            aria-hidden="true"
          >
            <span className="block h-2.5 w-2.5 rounded-full bg-current" />
          </span>
          <div className="flex flex-col gap-1">
            <strong
              className="font-italic text-[20px] font-normal leading-[1.05] tracking-[-0.01em] text-[color:var(--ink)]"
              style={{ fontStyle: "italic" }}
            >
              {p.title}
            </strong>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
              {p.sub}
            </span>
          </div>
        </div>
      ))}
    </Reveal>
  );
}

/* ============================================================ services */

type ServiceIconKind =
  | "interior"
  | "exterior"
  | "trim-doors"
  | "ceilings"
  | "floors"
  | "epoxy";

type Service = {
  title: string;
  em: string;
  body: React.ReactNode;
  tag: string;
  icon: ServiceIconKind;
};

const SERVICES: Service[] = [
  {
    title: "Interior",
    em: "walls.",
    body: (
      <>
        Living rooms, bedrooms, kitchens. Two coats over fresh primer,{" "}
        <em className="font-italic text-[color:var(--ink)]" style={{ fontStyle: "italic" }}>
          edges hand-cut
        </em>{" "}
        by brush.
      </>
    ),
    tag: "From $320 / room",
    icon: "interior",
  },
  {
    title: "Exterior",
    em: "facades.",
    body: (
      <>
        Siding, stucco, brick, weatherboard.{" "}
        <em className="font-italic text-[color:var(--ink)]" style={{ fontStyle: "italic" }}>
          Weatherproof
        </em>{" "}
        exterior paints, sealed against rain and sun.
      </>
    ),
    tag: "Quoted per facade",
    icon: "exterior",
  },
  {
    title: "Trim &",
    em: "doors.",
    body: (
      <>
        Skirting, architrave, doors, window frames.{" "}
        <em className="font-italic text-[color:var(--ink)]" style={{ fontStyle: "italic" }}>
          Hand-brushed
        </em>{" "}
        in oil or water-based enamel for a smooth finish.
      </>
    ),
    tag: "From $200 / door",
    icon: "trim-doors",
  },
  {
    title: "Ceilings &",
    em: "cornicing.",
    body: (
      <>
        White ceilings, decorative cornices, picture rails.{" "}
        <em className="font-italic text-[color:var(--ink)]" style={{ fontStyle: "italic" }}>
          Brush-cut
        </em>{" "}
        along every edge, never sprayed.
      </>
    ),
    tag: "From $260 / ceiling",
    icon: "ceilings",
  },
  {
    title: "Parquet &",
    em: "floors.",
    body: (
      <>
        Old wood, new finish. Sanded, stained, sealed — or painted:{" "}
        <em className="font-italic text-[color:var(--ink)]" style={{ fontStyle: "italic" }}>
          chalk-white grids
        </em>
        , marine-blue lines, checkered halls.
      </>
    ),
    tag: "From $520 / room",
    icon: "floors",
  },
  {
    title: "Epoxy",
    em: "floors.",
    body: (
      <>
        Garages, basements, workshops.{" "}
        <em className="font-italic text-[color:var(--ink)]" style={{ fontStyle: "italic" }}>
          Resin-bound flake coat
        </em>{" "}
        — non-slip, oil-proof, scrubbable. Two-day cure.
      </>
    ),
    tag: "From $4 / sq ft",
    icon: "epoxy",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="panel-sweep relative z-[3] px-10 py-[110px]"
    >
      <SectionMeta
        left="02 — What we paint"
        center="Six kinds of work"
        right="Walls · facades · trim · ceilings · floors · epoxy"
      />
      <Reveal>
        <SectionTitle>
          From <Em>a single wall</Em>
          <br />
          to a whole house.
        </SectionTitle>
        <p
          className="font-serif mt-6 max-w-[520px] text-[17px] leading-[1.55] text-[color:var(--ink-soft)]"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          A small team, careful prep, two coats by hand.{" "}
          <em
            className="font-italic text-[color:var(--ink)]"
            style={{ fontStyle: "italic" }}
          >
            Colors from Sherwin-Williams,
          </em>{" "}
          drop cloths, painter&apos;s tape, clean edges — every job, every time.
        </p>
      </Reveal>

      <Reveal stagger className="mt-12 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="fancy-pour group relative flex flex-col rounded-lg bg-[color:var(--surface)] p-7"
          >
            <div
              className="relative mb-[22px] h-[138px]"
              style={{ color: "var(--current)", transition: "color 0.9s" }}
              aria-hidden="true"
            >
              <ServiceIcon kind={s.icon} />
            </div>

            <h3
              className="fp-title font-serif mb-2 text-[24px] font-normal leading-[1.1] tracking-[-0.02em] text-[color:var(--ink)]"
              style={{ fontVariationSettings: "'opsz' 48" }}
            >
              {s.title}{" "}
              <span
                className="fp-em font-italic"
                style={{
                  color: "var(--current)",
                  transition: "color 0.9s",
                  fontStyle: "italic",
                }}
              >
                {s.em}
              </span>
            </h3>
            <p
              className="fp-body font-serif mb-[18px] flex-1 text-[14px] leading-[1.5] text-[color:var(--ink-soft)]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              {s.body}
            </p>
            <div className="fp-tag font-mono flex items-center gap-2.5 border-t border-[color:var(--hair)] pt-3.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  background: "var(--current)",
                  transition: "background 0.9s",
                }}
              />
              {s.tag}
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

/* ─── service marks ported from the original reference ─── */

const stroke = "#1A1A1A";
const bone = "#F2EBDC";

function ServiceIcon({ kind }: { kind: ServiceIconKind }) {
  switch (kind) {
    case "interior":     return <InteriorMark />;
    case "exterior":     return <ExteriorMark />;
    case "trim-doors":   return <TrimDoorsMark />;
    case "ceilings":     return <CeilingsMark />;
    case "floors":       return <FloorsMark />;
    case "epoxy":        return <EpoxyMark />;
  }
}

/** Interior walls — a room outline with a painted strip and a mini roller travelling along it. */
function InteriorMark() {
  return (
    <svg viewBox="0 0 220 138" className="h-full w-full overflow-visible">
      {/* room outline */}
      <rect x="6" y="14" width="208" height="108" fill="none" stroke={stroke} strokeWidth="1.5" />
      <line x1="6" y1="108" x2="214" y2="108" stroke={stroke} strokeWidth="1" />
      {/* the painted strip on the wall */}
      <rect className="svc-paint-band" x="42" y="14" width="56" height="94" fill="currentColor" opacity="0.92" />
      {/* mini roller traveling */}
      <g className="svc-roller-mini">
        <rect x="36" y="6" width="68" height="14" rx="2" fill={stroke} />
        <rect x="38" y="8" width="64" height="10" rx="1.5" fill={bone} />
        <rect x="40" y="10" width="60" height="6" fill="currentColor" />
        <line x1="70" y1="20" x2="70" y2="32" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="62" y1="32" x2="78" y2="32" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <line x1="70" y1="32" x2="92" y2="62" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="94" cy="64" r="3.5" fill="#4A4A4A" />
      </g>
      {/* a tiny drip */}
      <path d="M68 108 L68 116 Q70 119 70 116 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** Exterior facades — a little house with a leaning ladder. */
function ExteriorMark() {
  return (
    <svg viewBox="0 0 220 138" className="h-full w-full overflow-visible">
      {/* ground */}
      <line x1="6" y1="124" x2="214" y2="124" stroke={stroke} strokeWidth="1.5" />
      {/* house body (the painted exterior) */}
      <rect className="svc-house-paint" x="40" y="58" width="120" height="66" fill="currentColor" opacity="0.92" />
      {/* roof */}
      <polygon points="32,58 100,18 168,58" fill={stroke} />
      {/* chimney */}
      <rect x="128" y="26" width="10" height="24" fill={stroke} />
      {/* door */}
      <rect x="92" y="88" width="16" height="36" fill={stroke} />
      <circle cx="105" cy="106" r="1.2" fill={bone} />
      {/* windows */}
      <rect x="56" y="74" width="18" height="18" fill={bone} stroke={stroke} strokeWidth="1.5" />
      <line x1="65" y1="74" x2="65" y2="92" stroke={stroke} strokeWidth="1" />
      <line x1="56" y1="83" x2="74" y2="83" stroke={stroke} strokeWidth="1" />
      <rect x="126" y="74" width="18" height="18" fill={bone} stroke={stroke} strokeWidth="1.5" />
      <line x1="135" y1="74" x2="135" y2="92" stroke={stroke} strokeWidth="1" />
      <line x1="126" y1="83" x2="144" y2="83" stroke={stroke} strokeWidth="1" />
      {/* ladder leaning against the right side */}
      <g className="svc-ladder">
        <line x1="170" y1="64" x2="176" y2="124" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="178" y1="64" x2="184" y2="124" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="172" y1="80" x2="181" y2="80" stroke={stroke} strokeWidth="1.2" />
        <line x1="173" y1="94" x2="182" y2="94" stroke={stroke} strokeWidth="1.2" />
        <line x1="174" y1="108" x2="183" y2="108" stroke={stroke} strokeWidth="1.2" />
      </g>
    </svg>
  );
}

/** Trim & doors — a panel door with a paint brush dipping into one panel. */
function TrimDoorsMark() {
  return (
    <svg viewBox="0 0 220 138" className="h-full w-full overflow-visible">
      {/* door frame */}
      <rect x="60" y="8" width="100" height="128" fill="none" stroke={stroke} strokeWidth="1.8" />
      {/* top panel */}
      <rect x="72" y="20" width="76" height="44" fill="currentColor" opacity="0.92" stroke={stroke} strokeWidth="1" />
      {/* bottom panel */}
      <rect x="72" y="70" width="76" height="60" fill="currentColor" opacity="0.92" stroke={stroke} strokeWidth="1" />
      {/* handle */}
      <rect x="138" y="88" width="6" height="14" rx="2" fill={stroke} />
      {/* the dipping brush */}
      <g className="svc-brush">
        <rect x="172" y="14" width="6" height="36" fill="#8B6B4A" />
        <rect x="170" y="10" width="10" height="6" fill={stroke} />
        <rect x="167" y="48" width="16" height="14" fill="currentColor" opacity="0.95" rx="1" />
        <line x1="170" y1="62" x2="174" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="176" y1="62" x2="178" y2="66" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </g>
    </svg>
  );
}

/** Ceilings & cornicing — a wall + cornice molding with a brush working along it. */
function CeilingsMark() {
  return (
    <svg viewBox="0 0 220 138" className="h-full w-full overflow-visible">
      {/* ceiling */}
      <rect x="6" y="6" width="208" height="34" fill={bone} stroke={stroke} strokeWidth="1" />
      {/* wall (painted area) */}
      <rect x="6" y="40" width="208" height="92" fill="currentColor" opacity="0.92" />
      {/* cornice molding strip */}
      <rect x="6" y="34" width="208" height="8" fill={bone} stroke={stroke} strokeWidth="0.8" />
      {/* detailed cornice line being painted */}
      <line className="svc-cornice-line" x1="14" y1="38" x2="194" y2="38" stroke={stroke} strokeWidth="1" opacity="0.7" />
      {/* brush working the cornice */}
      <g className="svc-cornice-brush">
        <rect x="20" y="44" width="5" height="22" fill="#8B6B4A" transform="rotate(-25 22 55)" />
        <rect x="17" y="40" width="11" height="6" fill={stroke} transform="rotate(-25 22 43)" />
        <rect x="14" y="44" width="16" height="10" fill="currentColor" opacity="0.95" rx="1" transform="rotate(-25 22 49)" />
      </g>
    </svg>
  );
}

/** Parquet & floors — floor planks with a sander rolling across leaving dust. */
function FloorsMark() {
  return (
    <svg viewBox="0 0 220 138" className="h-full w-full overflow-visible">
      {/* skirting / wall edge at top */}
      <rect x="6" y="6" width="208" height="28" fill={bone} stroke={stroke} strokeWidth="1" />
      <rect x="6" y="34" width="208" height="3" fill={stroke} />
      {/* the floor */}
      <rect x="6" y="38" width="208" height="94" fill="currentColor" opacity="0.92" />
      {/* plank seams */}
      <g stroke={stroke} strokeWidth="0.6" opacity="0.5">
        <line x1="6" y1="56" x2="214" y2="56" />
        <line x1="6" y1="74" x2="214" y2="74" />
        <line x1="6" y1="92" x2="214" y2="92" />
        <line x1="6" y1="110" x2="214" y2="110" />
        <line x1="62" y1="38" x2="62" y2="56" />
        <line x1="116" y1="38" x2="116" y2="56" />
        <line x1="168" y1="38" x2="168" y2="56" />
        <line x1="36" y1="56" x2="36" y2="74" />
        <line x1="90" y1="56" x2="90" y2="74" />
        <line x1="142" y1="56" x2="142" y2="74" />
        <line x1="192" y1="56" x2="192" y2="74" />
        <line x1="70" y1="74" x2="70" y2="92" />
        <line x1="124" y1="74" x2="124" y2="92" />
        <line x1="176" y1="74" x2="176" y2="92" />
        <line x1="48" y1="92" x2="48" y2="110" />
        <line x1="100" y1="92" x2="100" y2="110" />
        <line x1="152" y1="92" x2="152" y2="110" />
        <line x1="200" y1="92" x2="200" y2="110" />
        <line x1="78" y1="110" x2="78" y2="132" />
        <line x1="130" y1="110" x2="130" y2="132" />
        <line x1="182" y1="110" x2="182" y2="132" />
      </g>
      {/* subtle grain hint */}
      <g stroke={stroke} strokeWidth="0.3" opacity="0.28">
        <line x1="10" y1="47" x2="56" y2="47" strokeDasharray="3,2" />
        <line x1="124" y1="65" x2="186" y2="65" strokeDasharray="2,3" />
        <line x1="14" y1="83" x2="60" y2="83" strokeDasharray="2,2" />
        <line x1="148" y1="101" x2="198" y2="101" strokeDasharray="3,1" />
      </g>
      {/* dust trail behind the sander (shows on hover) */}
      <g className="svc-sander-trail">
        <line x1="28" y1="84" x2="44" y2="84" stroke={bone} strokeWidth="2.5" opacity="0.7" />
        <line x1="22" y1="89" x2="38" y2="89" stroke={bone} strokeWidth="1.5" opacity="0.5" />
        <circle cx="18" cy="86" r="1.5" fill={bone} opacity="0.6" />
        <circle cx="14" cy="91" r="1" fill={bone} opacity="0.45" />
        <circle cx="26" cy="79" r="0.8" fill={bone} opacity="0.45" />
      </g>
      {/* the floor sander */}
      <g className="svc-sander">
        <rect x="46" y="40" width="22" height="5" fill={stroke} rx="1.5" />
        <line x1="57" y1="45" x2="57" y2="80" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" />
        <rect x="42" y="78" width="30" height="14" fill={stroke} rx="2" />
        <rect x="44" y="80" width="26" height="3" fill={bone} opacity="0.4" />
      </g>
    </svg>
  );
}

/** Epoxy floors — wall + speckled resin floor with a small roller. */
function EpoxyMark() {
  return (
    <svg viewBox="0 0 220 138" className="h-full w-full overflow-visible">
      <rect x="6" y="6" width="208" height="56" fill={bone} stroke={stroke} strokeWidth="1" />
      <line x1="6" y1="62" x2="214" y2="62" stroke={stroke} strokeWidth="1.5" />
      <rect x="6" y="64" width="208" height="68" fill="currentColor" opacity="0.95" />
      <line x1="14" y1="68" x2="206" y2="68" stroke={bone} strokeWidth="2" opacity="0.32" />
      <g fill={bone} opacity="0.78">
        <circle cx="20" cy="78" r="1.2" /><circle cx="35" cy="86" r="0.8" /><circle cx="50" cy="92" r="1.4" />
        <circle cx="62" cy="80" r="1" /><circle cx="75" cy="100" r="1.2" /><circle cx="92" cy="84" r="0.9" />
        <circle cx="108" cy="92" r="1.2" /><circle cx="124" cy="78" r="1.1" /><circle cx="138" cy="100" r="1.3" />
        <circle cx="152" cy="84" r="0.8" /><circle cx="168" cy="92" r="1.1" /><circle cx="184" cy="80" r="1" />
        <circle cx="198" cy="88" r="1.2" /><circle cx="208" cy="100" r="1" />
        <circle cx="28" cy="115" r="0.9" /><circle cx="60" cy="122" r="1.2" /><circle cx="100" cy="118" r="1" />
        <circle cx="140" cy="115" r="1.2" /><circle cx="180" cy="122" r="0.9" />
      </g>
      <g fill={stroke} opacity="0.6">
        <circle cx="28" cy="92" r="0.8" /><circle cx="44" cy="80" r="1" /><circle cx="58" cy="118" r="0.7" />
        <circle cx="82" cy="92" r="1.1" /><circle cx="118" cy="84" r="0.8" /><circle cx="148" cy="80" r="1" />
        <circle cx="172" cy="118" r="0.9" /><circle cx="38" cy="125" r="0.6" /><circle cx="98" cy="80" r="0.8" />
        <circle cx="130" cy="118" r="1" /><circle cx="200" cy="115" r="0.8" />
      </g>
      <g className="svc-epoxy-roller">
        <rect x="30" y="52" width="42" height="10" fill={stroke} rx="1.5" />
        <rect x="33" y="54" width="36" height="6" fill="currentColor" opacity="0.92" />
        <line x1="51" y1="62" x2="51" y2="76" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="51" y1="76" x2="80" y2="46" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="83" cy="44" r="4" fill="#4A4A4A" stroke={stroke} strokeWidth="1" />
      </g>
    </svg>
  );
}

/* ============================================================ projects */

type Project = {
  title: string;
  em: string;
  where: string;
  pc: string;
  /** image revealed on hover */
  topImg: string;
  /** image underneath (initial view) */
  bottomImg: string;
  /** chip label sitting in front of topImg (default: "Before") */
  topLabel?: string;
  /** chip label sitting in front of bottomImg (default: "After") */
  bottomLabel?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Casa do",
    em: "Carvalho.",
    where: "Philadelphia · kitchen",
    pc: "#2D5D4E",
    // initial: after / on hover: before
    topImg: "/projects/p1-after.jpg",
    bottomImg: "/projects/p1-before.jpg",
  },
  {
    title: "Atelier",
    em: "Norte.",
    where: "Philadelphia · attic studio",
    pc: "#7A8088",
    topImg: "/projects/p2-after.jpg",
    bottomImg: "/projects/p2-before.jpg",
  },
  {
    title: "Quinta",
    em: "Verde.",
    where: "Philadelphia · vaulted living",
    pc: "#A8C8E0",
    topImg: "/projects/p3-after.jpg",
    bottomImg: "/projects/p3-before.jpg",
  },
  {
    title: "Apartamento",
    em: "Belém.",
    where: "Philadelphia · basement",
    pc: "#4A6B8A",
    topImg: "/projects/p4-after.jpg",
    bottomImg: "/projects/p4-before.jpg",
  },
  {
    title: "Casa",
    em: "Lago.",
    where: "Philadelphia · two angles",
    pc: "#5A6878",
    topImg: "/projects/p5-a.jpg",
    bottomImg: "/projects/p5-b.jpg",
    topLabel: "Bay window",
    bottomLabel: "Fireplace",
  },
  {
    title: "Garagem",
    em: "Pinto.",
    where: "Philadelphia · epoxy floor",
    pc: "#4A4A4A",
    topImg: "/projects/p6-after.jpg",
    bottomImg: "/projects/p6-before.jpg",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="panel-sweep dir-btt relative z-[3] px-10 py-[110px]"
    >
      <SectionMeta
        left="03 — Lately, on site"
        center="Six projects"
        right="2025 — 2026"
      />
      <Reveal>
        <SectionTitle>
          Houses we&apos;ve <Em>painted lately.</Em>
        </SectionTitle>
      </Reveal>

      <Reveal stagger className="mt-12 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="project-card group relative flex flex-col overflow-hidden rounded-md bg-[color:var(--surface)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,15,15,0.22)]"
            style={{ ["--pc" as never]: p.pc, color: p.pc }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[color:var(--ink)]">
              {/* bottom layer — revealed on hover */}
              <Image
                src={p.bottomImg}
                alt={`${p.title} ${p.em} — ${p.bottomLabel ?? "before"}`}
                fill
                sizes="(max-width:1024px) 100vw, 33vw"
                className="object-cover"
              />
              {/* top layer — visible by default; wiped away on hover */}
              <div className="ba-after">
                <Image
                  src={p.topImg}
                  alt={`${p.title} ${p.em} — ${p.topLabel ?? "after"}`}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="ba-tag-before-default font-mono absolute left-3.5 top-3.5 z-[5] rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] transition-all duration-500">
                {p.topLabel ?? "After"}
              </span>
              <span className="ba-tag-after-default font-mono absolute right-3.5 top-3.5 z-[5] rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] transition-all duration-500">
                {p.bottomLabel ?? "Before"}
              </span>
            </div>
            <div className="flex flex-col gap-1 px-[22px] pt-[18px] pb-[22px]">
              <h3
                className="font-serif text-[22px] font-normal leading-[1.1] tracking-[-0.015em] text-[color:var(--ink)]"
                style={{ fontVariationSettings: "'opsz' 32" }}
              >
                {p.title}{" "}
                <span
                  className="font-italic"
                  style={{ color: p.pc, fontStyle: "italic" }}
                >
                  {p.em}
                </span>
              </h3>
              <span className="font-mono mt-0.5 text-[10px] uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                {p.where}
              </span>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

/* ============================================================ process */

const STEPS = [
  {
    n: "01",
    title: "Color",
    em: "visit",
    body: "We come to the room with all twelve colors in sample-pot form. We paint a small panel on your wall and leave it for you to live with through a full day of light.",
    tag: "Day 01",
    color: "var(--c1)",
  },
  {
    n: "02",
    title: "Quote &",
    em: "book",
    body: "You choose a color. We send a fixed quote — no estimates, no surprises — and book the painting days. Most rooms paint in two to four working days.",
    tag: "Day 02 – 04",
    color: "var(--c6)",
  },
  {
    n: "03",
    title: "Prepare &",
    em: "prime",
    body: "Walls washed, holes filled, edges taped. One coat of tinted primer in the chosen color family. We move your furniture and cover the floor with our own drop cloths.",
    tag: "Days 05 – 08",
    color: "var(--c10)",
  },
  {
    n: "04",
    title: "Paint &",
    em: "finish",
    body: "Two coats of your color, brushed in by hand at the edges, rolled across the field. Touch-ups the following day. We leave the room cleaner than we found it.",
    tag: "Days 09 – 14",
    color: "var(--c4)",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="panel-sweep dir-ttb relative z-[3] overflow-hidden bg-[color:var(--ink)] px-10 py-[130px] text-[#F8F6F1]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [mix-blend-mode:overlay]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 0.96 0 0 0 0 0.88 0 0 0 0.12 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
        aria-hidden="true"
      />

      <div className="font-mono relative z-[2] mb-12 grid grid-cols-1 items-baseline gap-2 border-b border-[rgba(248,246,241,0.14)] pb-[18px] text-[10px] uppercase tracking-[0.22em] text-[rgba(248,246,241,0.55)] sm:grid-cols-3">
        <span>04 — How a paint job goes</span>
        <span className="text-[#F8F6F1] sm:text-center">
          Four stages · two weeks
        </span>
        <span className="sm:text-right">By appointment</span>
      </div>

      <Reveal>
        <h2
          className="font-serif relative z-[2] max-w-[1000px] font-normal leading-[0.98] tracking-[-0.035em] text-[#F8F6F1]"
          style={{
            fontSize: "clamp(38px, 5.6vw, 80px)",
            fontVariationSettings: "'opsz' 144",
          }}
        >
          From{" "}
          <em
            className="font-italic"
            style={{ color: "var(--c1)", fontStyle: "italic" }}
          >
            color visit
          </em>
          <br />
          to last coat.
        </h2>
        <p
          className="font-serif relative z-[2] mb-[70px] mt-4 max-w-[580px] text-[16px] leading-[1.6] text-[rgba(248,246,241,0.7)]"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          No deck of options. No mock-up rendered in software. Each job begins
          with a{" "}
          <em
            className="font-italic text-[#F8F6F1]"
            style={{ fontStyle: "italic" }}
          >
            color visit
          </em>{" "}
          — we come to your room with samples in hand — and ends with a careful
          two-coat finish, hand-applied by our painters.
        </p>
      </Reveal>

      <Reveal stagger className="relative z-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="step group border-b border-[rgba(248,246,241,0.14)] px-7 py-9 transition-colors duration-500 last:border-b-0 hover:bg-white/[0.035] sm:border-r sm:border-b-0 sm:last:border-r-0"
          >
            <span
              className="font-italic mb-7 inline-block text-[56px] leading-none transition-transform duration-500"
              style={{ color: step.color, fontStyle: "italic" }}
            >
              {step.n}
            </span>
            <h3
              className="font-serif mb-3.5 text-[26px] font-normal leading-[1.15] tracking-[-0.02em]"
              style={{ fontVariationSettings: "'opsz' 48" }}
            >
              {step.title}{" "}
              <em
                className="font-italic"
                style={{ color: step.color, fontStyle: "italic" }}
              >
                {step.em}
              </em>
            </h3>
            <p className="text-[14px] leading-[1.6] text-[rgba(248,246,241,0.65)]">
              {step.body}
            </p>
            <div className="font-mono mt-7 flex items-center gap-2.5 border-t border-[rgba(248,246,241,0.12)] pt-[18px] text-[10px] uppercase tracking-[0.2em] text-[rgba(248,246,241,0.45)]">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: step.color }}
              />
              {step.tag}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ============================================================ testimonials */

const QUOTES = [
  {
    text: (
      <>
        They painted a small square of <Em>Mallard</Em> on our living-room wall
        and left it for a week. By Friday I couldn&apos;t unsee it — the whole house
        had been waiting for that color and none of us knew.
      </>
    ),
    author: "— Inês V. · Príncipe Real · living room",
  },
  {
    text: (
      <>
        No estimate-then-surprise, no rushed quote. The painters showed up when
        they said they would, in clean overalls, with their own coffee. They
        left the kitchen <Em>better</Em> than they found it.
      </>
    ),
    author: "— Daniel M. · Cascais · kitchen & dining",
  },
  {
    text: (
      <>
        The Terracotta looked terrifying on the chip. On the wall, in the
        afternoon light, it looks like it has <Em>always</Em> been there. I
        keep coming downstairs just to look at it.
      </>
    ),
    author: "— Marta R. · Sintra · dining room",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setI((prev) => (prev + 1) % QUOTES.length);
        setFading(false);
      }, 420);
    }, 7500);
    return () => clearInterval(id);
  }, []);

  const jump = (next: number) => {
    if (next === i) return;
    setFading(true);
    setTimeout(() => {
      setI(next);
      setFading(false);
    }, 420);
  };

  const q = QUOTES[i];
  return (
    <section
      id="words"
      className="panel-sweep dir-btt relative z-[3] bg-[color:var(--surface)] px-10 py-[140px]"
    >
      <SectionMeta
        left="05 — Letters from rooms we've painted"
        center="Selected : 03 of 47"
        right="2024 — 2026"
      />
      <Reveal className="relative mx-auto mt-15 max-w-[980px] text-center">
        <span
          className="font-italic mb-7 block text-[90px] leading-[0.5]"
          style={{
            color: "var(--current)",
            transition: "color 0.9s",
            fontStyle: "italic",
          }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p
          className="font-serif mb-10 leading-[1.3] tracking-[-0.025em] text-[color:var(--ink)] transition-all duration-500"
          style={{
            fontSize: "clamp(26px, 3.2vw, 44px)",
            fontVariationSettings: "'opsz' 144",
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(18px)" : "translateY(0)",
          }}
        >
          {q.text}
        </p>
        <div
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)] transition-opacity duration-500"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {q.author}
        </div>
        <div className="mt-12 flex justify-center gap-2.5">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => jump(idx)}
              aria-label={`Show quote ${idx + 1}`}
              className="h-0.5 transition-all duration-500"
              style={{
                width: idx === i ? 56 : 28,
                background:
                  idx === i ? "var(--current)" : "var(--hair-strong)",
              }}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================ CTA */

export function Cta() {
  return (
    <section
      id="book"
      className="relative z-[3] overflow-hidden px-10 py-[160px] text-center"
      style={{
        background: "var(--current)",
        color: "var(--on-current)",
        transition:
          "background 0.9s cubic-bezier(0.7,0,0.2,1), color 0.9s",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50 [mix-blend-mode:multiply]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
        aria-hidden="true"
      />
      <div className="font-mono relative z-[2] mb-8 inline-flex items-center gap-3.5 text-[11px] uppercase tracking-[0.25em] opacity-85">
        <span className="inline-block h-[0.5px] w-8 bg-current opacity-60" />
        Four slots remaining · Spring 2026
        <span className="inline-block h-[0.5px] w-8 bg-current opacity-60" />
      </div>
      <h2
        className="font-serif relative z-[2] mb-14 font-normal leading-[0.94] tracking-[-0.04em]"
        style={{
          fontSize: "clamp(48px, 7.5vw, 140px)",
          fontVariationSettings: "'opsz' 144",
        }}
      >
        Pick a color.
        <br />
        <em
          className="font-italic opacity-85"
          style={{ fontStyle: "italic" }}
        >
          We&apos;ll paint it.
        </em>
      </h2>
      <a
        href="#book"
        className="cta-dark-fill font-mono relative z-[2] inline-flex items-center gap-4 rounded-full px-11 py-[22px] text-[11px] uppercase tracking-[0.22em]"
      >
        <span>Book a color visit</span>
        <span aria-hidden="true">→</span>
      </a>
      <p
        className="font-italic relative z-[2] mt-12 text-[15px] opacity-80"
        style={{ fontStyle: "italic" }}
      >
        A short note is enough. We reply within two working days.
      </p>
    </section>
  );
}

/* ============================================================ wordmark + footer */

export function FooterWordmark() {
  return (
    <Reveal
      className="font-serif relative z-[3] flex flex-wrap items-baseline gap-x-[0.05em] px-10 pb-7 pt-[110px] font-normal leading-[0.85] tracking-[-0.06em] text-[color:var(--ink)]"
      withBase
    >
      <span
        style={{
          fontSize: "clamp(64px, 14vw, 220px)",
          fontVariationSettings: "'opsz' 144",
        }}
      >
        Painting{" "}
        <span
          className="font-italic"
          style={{ color: "var(--current)", fontStyle: "italic", transition: "color 0.9s" }}
        >
          Your
        </span>{" "}
        World
        <em
          className="font-italic"
          style={{ color: "var(--current)", fontStyle: "italic", transition: "color 0.9s" }}
        >
          .
        </em>
      </span>
      <span className="font-mono ml-auto hidden self-end pb-7 text-right text-[11px] uppercase leading-[1.6] tracking-[0.2em] text-[color:var(--ink-muted)] md:block">
        Painting Your World LLC
        <br />
        9852 Garvey Dr
        <br />
        Philadelphia, PA 19114
      </span>
    </Reveal>
  );
}

const FOOTER_COLS: Array<{
  title: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
}> = [
  {
    title: "Work",
    links: [
      { label: "Colors", href: "#colors" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hoxhajgramoz@gmail.com", href: "mailto:hoxhajgramoz@gmail.com" },
      { label: "(267) 227-6745", href: "tel:+12672276745" },
      { label: "Request free estimate", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--hair)] px-10 pb-9 pt-[60px]">
      <div className="mb-[70px] grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-[60px]">
        <div className="footer-brand">
          <a
            href="#top"
            className="font-serif flex items-center gap-3 text-[22px] font-medium leading-none tracking-[-0.02em]"
          >
            <span
              className="block h-[26px] w-[26px] rounded-full"
              style={{
                background: "var(--current)",
                transition: "background 0.8s",
              }}
            />
            <span>
              Painting{" "}
              <em
                className="font-italic"
                style={{ color: "var(--current)", fontStyle: "italic", transition: "color 0.8s" }}
              >
                Your
              </em>{" "}
              World
              <span className="font-mono ml-1.5 align-top text-[10px] tracking-[0.18em] text-[color:var(--ink-muted)]">
                LLC
              </span>
            </span>
          </a>
          <p
            className="font-serif mt-5 max-w-[360px] text-[15px] leading-[1.55] text-[color:var(--ink-soft)]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            A small house-painting team.{" "}
            <em
              className="font-italic text-[color:var(--ink)]"
              style={{ fontStyle: "italic" }}
            >
              Sherwin-Williams paints,
            </em>{" "}
            fully insured, three-year workmanship warranty, free estimate on
            every job.
          </p>
        </div>

        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-mono mb-5 text-[10px] font-normal uppercase tracking-[0.22em] text-[color:var(--ink-muted)]">
              {col.title}
            </h4>
            <ul className="list-none">
              {col.links.map((link) => (
                <li
                  key={link.label}
                  className="font-serif mb-2.5 text-[15px]"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  <a
                    href={link.href}
                    className="inline-block transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:pl-2 hover:text-[color:var(--current)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-mono mb-5 text-[10px] font-normal uppercase tracking-[0.22em] text-[color:var(--ink-muted)]">
            Address
          </h4>
          <p className="font-serif mb-3.5 text-[14px] leading-[1.5] text-[color:var(--ink)]">
            <a
              href="https://www.google.com/maps/search/?api=1&query=9852+Garvey+Dr%2C+Philadelphia+PA+19114"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent transition-colors duration-500 hover:border-[color:var(--current)] hover:text-[color:var(--current)]"
            >
              9852 Garvey Dr
              <br />
              Philadelphia, PA 19114
            </a>
          </p>
          <p
            className="font-italic border-t border-dashed border-[color:var(--hair)] pt-3 text-[12.5px] leading-[1.55] text-[color:var(--ink-soft)]"
            style={{ fontStyle: "italic", letterSpacing: "-0.002em" }}
          >
            <em className="font-medium not-italic text-[color:var(--ink)]">
              By appointment only.
            </em>
            <br />
            This is our home, not a shop — we come to you.
          </p>
        </div>
      </div>

      <div className="font-mono flex flex-col items-start justify-between gap-3 border-t border-[color:var(--hair)] pt-7 text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)] sm:flex-row sm:items-center">
        <span>
          © 2026 Painting Your World LLC · 3-year workmanship warranty · fully
          insured · free estimates
        </span>
        <span>Built in Philadelphia</span>
      </div>
    </footer>
  );
}

