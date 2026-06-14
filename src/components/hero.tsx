"use client";

import { useEffect, useRef, useState } from "react";
import { COLORS, useColor } from "@/components/color-theme";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[3] grid min-h-[92vh] grid-cols-1 pt-[90px] lg:grid-cols-[1.05fr_0.95fr]"
    >
      <HeroLeft />
      <HeroRight />
    </section>
  );
}

/* ─── left side: editorial copy ─── */
function HeroLeft() {
  const { color } = useColor();
  const [displayed, setDisplayed] = useState(color.name + " " + color.num);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const next = color.name + " " + color.num;
    if (next === displayed) return;
    const raf = requestAnimationFrame(() => setOut(true));
    const id = setTimeout(() => {
      setDisplayed(next);
      setOut(false);
    }, 240);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(id);
    };
  }, [color, displayed]);

  return (
    <div className="relative flex flex-col justify-between px-8 py-12 sm:px-[60px] sm:pt-[70px] sm:pb-[60px]">
      <div>
        <p
          className="font-mono fade-up inline-flex items-center gap-[14px] text-[10px] uppercase tracking-[0.24em] text-[color:var(--ink-soft)]"
          style={{ animationDelay: "1.7s", transform: "translateY(20px)" }}
        >
          <span className="block h-[0.5px] w-8 bg-[color:var(--ink)]" />
          Collection N° 09 · Spring / Summer 2026
        </p>

        <h1
          className="font-serif mt-8 font-normal leading-[0.94] tracking-[-0.035em] text-[color:var(--ink)]"
          style={{
            fontSize: "clamp(56px, 8.2vw, 132px)",
            fontVariationSettings: "'opsz' 144",
          }}
        >
          <span className="block overflow-hidden">
            <span
              className="inline-block"
              style={{
                transform: "translateY(0)",
                transition: "transform 1.3s cubic-bezier(0.2,0.8,0.2,1)",
              }}
            >
              What if
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block">your wall</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block">
              was{" "}
              <span
                className="font-italic relative inline-block"
                style={{
                  color: "var(--current)",
                  transition: "color 0.9s cubic-bezier(0.7,0,0.2,1)",
                  fontStyle: "italic",
                }}
              >
                <span className={`swap-word ${out ? "out" : ""}`}>
                  {displayed}
                </span>
                <span className="blink-cursor" aria-hidden="true" />
              </span>
            </span>
          </span>
        </h1>

        <p
          className="font-serif fade-up mt-9 max-w-[480px] text-[17px] leading-[1.55] text-[color:var(--ink-soft)]"
          style={{
            fontVariationSettings: "'opsz' 14",
            animationDelay: "2s",
            transform: "translateY(20px)",
          }}
        >
          We paint walls in{" "}
          <em
            className="font-italic text-[color:var(--ink)]"
            style={{ fontStyle: "italic" }}
          >
            twelve hand-mixed colors,
          </em>{" "}
          applied by a small team of professional painters. Pick a tone — we&apos;ll
          bring it home.
        </p>

        <div
          className="fade-up mt-9 flex items-center gap-[22px]"
          style={{ animationDelay: "2.2s", transform: "translateY(20px)" }}
        >
          <a
            href="#contact"
            className="font-mono cta-fill bg-current-color inline-flex items-center gap-3.5 rounded-full px-[30px] py-[18px] text-[11px] uppercase tracking-[0.18em]"
          >
            <span>Book a color visit</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#colors"
            className="font-mono group relative inline-flex items-center gap-2.5 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink)]"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{
                background: "var(--current)",
                transition: "background 0.9s",
              }}
            />
            <span>See all twelve</span>
            <span className="absolute inset-x-0 bottom-2 block h-[0.5px] origin-right scale-x-100 bg-[color:var(--ink)] transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:origin-left group-hover:scale-x-0" />
          </a>
        </div>
      </div>

      <div
        className="font-mono fade-up mt-[60px] flex flex-wrap justify-between gap-5 border-t border-[color:var(--hair)] pt-[22px] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-muted)]"
        style={{ animationDelay: "2.4s", transform: "translateY(20px)" }}
      >
        <span className="inline-flex items-center gap-2.5 text-[color:var(--ink)]">
          <span className="live-dot" aria-hidden="true" />
          Open for bookings · spring 2026
        </span>
        <span>04 slots remaining</span>
        <span>Philadelphia, PA</span>
      </div>
    </div>
  );
}

/* ─── right side: live color preview ─── */
function HeroRight() {
  const { color, rollKey } = useColor();
  const rollerRef = useRef<HTMLDivElement | null>(null);
  const pulseRef = useRef<HTMLDivElement | null>(null);
  const [drips, setDrips] = useState<
    { id: number; left: number; height: number; width: number; dur: number; color: string }[]
  >([]);
  const dripIdRef = useRef(0);

  // replay the roller wipe + pulse on every color change
  useEffect(() => {
    if (rollKey === 0) return;
    const r = rollerRef.current;
    const p = pulseRef.current;
    if (r) {
      r.classList.remove("wipe");
      void r.offsetWidth;
      r.classList.add("wipe");
    }
    if (p) {
      p.classList.remove("hero-pulse");
      void p.offsetWidth;
      p.classList.add("hero-pulse");
    }
  }, [rollKey]);

  // spawn a drip every 5.5s
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const c = COLORS.find((cc) => cc.hex === color.hex) ?? color;
      const drip = {
        id: ++dripIdRef.current,
        left: 8 + Math.random() * 84,
        height: 14 + Math.random() * 10,
        width: 3 + Math.random() * 2,
        dur: 8 + Math.random() * 4,
        color: c.light ? "rgba(0,0,0,0.30)" : "rgba(255,255,255,0.22)",
      };
      setDrips((prev) => [...prev.slice(-7), drip]);
      setTimeout(() => {
        setDrips((prev) => prev.filter((d) => d.id !== drip.id));
      }, drip.dur * 1000 + 200);
    }, 5500);
    return () => clearInterval(id);
  }, [color]);

  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden px-8 py-12 sm:px-[60px] sm:py-[60px]"
      style={{
        background: "var(--current)",
        color: "var(--on-current)",
        transition:
          "background 0.9s cubic-bezier(0.7,0,0.2,1), color 0.9s",
        minHeight: "500px",
      }}
    >
      {/* film-grain noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 [mix-blend-mode:multiply]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
        aria-hidden="true"
      />

      {/* color-change pulse layer */}
      <div
        ref={pulseRef}
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 [mix-blend-mode:overlay]"
        style={{ background: "var(--current)" }}
        aria-hidden="true"
      />

      {/* drifting splotches */}
      <div
        className="splotch"
        style={{
          background: "rgba(255,255,255,0.4)",
          width: 240,
          height: 240,
          top: "10%",
          right: "-60px",
          animationDelay: "0s",
        }}
        aria-hidden="true"
      />
      <div
        className="splotch"
        style={{
          background: "rgba(0,0,0,0.25)",
          width: 180,
          height: 180,
          bottom: "15%",
          left: "-40px",
          animationDelay: "-3s",
        }}
        aria-hidden="true"
      />

      {/* drips contained inside the panel */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {drips.map((d) => (
          <span
            key={d.id}
            className="drip"
            style={{
              left: `${d.left}%`,
              width: d.width,
              height: d.height,
              background: d.color,
              animationDuration: `${d.dur}s`,
            }}
          />
        ))}
      </div>

      {/* roller (sweeps in on color change) */}
      <div ref={rollerRef} className="roller" aria-hidden="true">
        <div
          className="roller-band"
          style={{ background: color.hex }}
        />
        <RollerSVG paint={color.hex} />
      </div>

      {/* top row */}
      <div
        className="font-mono fade-up relative z-[2] flex items-center justify-between text-[10px] uppercase tracking-[0.22em]"
        style={{ animationDelay: "1.9s", transform: "translateY(20px)" }}
      >
        <span>Hue No. {color.num}</span>
        <span>Live preview</span>
      </div>

      {/* center: huge color name */}
      <div
        className="fade-up relative z-[2] text-left"
        style={{ animationDelay: "2s", transform: "translateY(20px)" }}
      >
        <div
          className="font-italic mb-[22px] text-[18px] tracking-[-0.01em]"
          style={{ fontStyle: "italic" }}
        >
          N° {color.num} — Hand-mixed
        </div>
        <div
          className="font-serif mb-[30px] font-normal leading-[0.9] tracking-[-0.045em]"
          style={{
            fontSize: "clamp(60px, 8vw, 124px)",
            fontVariationSettings: "'opsz' 144",
          }}
        >
          {color.name}.
        </div>
      </div>

      {/* bottom info grid */}
      <div
        className="fade-up relative z-[2] grid grid-cols-2 gap-x-[30px] gap-y-3.5 border-t pt-7"
        style={{
          borderTopColor: color.light
            ? "rgba(0,0,0,0.18)"
            : "rgba(255,255,255,0.25)",
          animationDelay: "2.2s",
          transform: "translateY(20px)",
        }}
      >
        {[
          ["Family", color.family],
          ["Hex", color.hex],
          ["Finish", color.finish],
          ["Coats", "02 minimum"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="font-mono flex justify-between text-[11px] tracking-[0.1em]"
          >
            <span className="uppercase opacity-60">{k}</span>
            <span className="text-right">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── paint-roller SVG ─── */
function RollerSVG({ paint }: { paint: string }) {
  return (
    <svg
      className="roller-tool"
      viewBox="0 0 144 168"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ color: paint }}
    >
      <defs>
        <linearGradient id="rDrumGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.86" />
        </linearGradient>
        <linearGradient id="rHandleGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5A5A5A" />
          <stop offset="0.4" stopColor="#2A2A2A" />
          <stop offset="1" stopColor="#1A1A1A" />
        </linearGradient>
        <clipPath id="rDrumClip">
          <rect x="16" y="12" width="104" height="28" rx="3" />
        </clipPath>
      </defs>

      {/* drum */}
      <g>
        <rect x="14" y="10" width="108" height="32" rx="4" fill="#1A1A1A" />
        <rect x="16" y="12" width="104" height="28" rx="3" fill="#F2EBDC" />
        <rect x="18" y="14" width="100" height="24" rx="2" fill="url(#rDrumGrad)" />

        <ellipse cx="16" cy="26" rx="4" ry="16" fill="#1A1A1A" />
        <ellipse cx="16" cy="26" rx="2.5" ry="12" fill="#F2EBDC" />
        <circle cx="16" cy="26" r="2" fill="#4A4A4A" />

        <ellipse cx="120" cy="26" rx="4" ry="16" fill="#1A1A1A" />
        <ellipse cx="120" cy="26" rx="2.5" ry="12" fill="#F2EBDC" />
        <circle cx="120" cy="26" r="2" fill="#4A4A4A" />

        <g clipPath="url(#rDrumClip)" className="drum-ticks">
          {[20, 32, 44, 56, 68, 80, 92, 104, 116, 128].map((x) => (
            <line
              key={x}
              x1={x}
              y1="12"
              x2={x}
              y2="40"
              stroke="#000"
              strokeWidth="0.8"
              opacity="0.22"
            />
          ))}
        </g>

        <rect x="22" y="14" width="94" height="3" fill="#fff" opacity="0.24" rx="1.5" />
        <rect x="24" y="36" width="90" height="1.4" fill="#fff" opacity="0.09" rx="1" />
      </g>

      {/* frame stem + bracket */}
      <line x1="70" y1="42" x2="70" y2="58" stroke="#1A1A1A" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="56" y1="58" x2="84" y2="58" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />

      {/* threaded connector */}
      <rect x="66" y="56" width="10" height="14" fill="#4A4A4A" stroke="#1A1A1A" strokeWidth="1.2" rx="1" />
      <line x1="67" y1="60" x2="75" y2="60" stroke="#1A1A1A" strokeWidth="0.6" opacity="0.6" />
      <line x1="67" y1="63" x2="75" y2="63" stroke="#1A1A1A" strokeWidth="0.6" opacity="0.6" />
      <line x1="67" y1="66" x2="75" y2="66" stroke="#1A1A1A" strokeWidth="0.6" opacity="0.6" />

      {/* handle */}
      <line x1="72" y1="70" x2="124" y2="148" stroke="url(#rHandleGrad)" strokeWidth="10" strokeLinecap="round" />
      <line x1="71" y1="68" x2="123" y2="146" stroke="#8A8A8A" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />

      {/* grip ridges */}
      <g opacity="0.85">
        <line x1="100" y1="122" x2="110" y2="132" stroke="#000" strokeWidth="1.6" />
        <line x1="104" y1="118" x2="114" y2="128" stroke="#000" strokeWidth="1.6" />
        <line x1="108" y1="114" x2="118" y2="124" stroke="#000" strokeWidth="1.6" />
      </g>

      {/* grip end */}
      <ellipse cx="126" cy="151" rx="11" ry="7" fill="#3A3A3A" stroke="#1A1A1A" strokeWidth="1.5" transform="rotate(45 126 151)" />
      <ellipse cx="124" cy="149" rx="6" ry="3" fill="#7A7A7A" opacity="0.55" transform="rotate(45 124 149)" />

      {/* drips */}
      <path d="M34 42 Q33 56 35 62 Q37 56 36 42 Z" fill="currentColor" opacity="0.9" />
      <path d="M58 42 Q57 50 59 54 Q61 50 60 42 Z" fill="currentColor" opacity="0.78" />
      <path d="M94 42 Q93 60 95 66 Q97 60 96 42 Z" fill="currentColor" opacity="0.88" />
      <circle cx="34" cy="65" r="2" fill="currentColor" opacity="0.72" />
      <circle cx="94" cy="69" r="1.6" fill="currentColor" opacity="0.68" />
    </svg>
  );
}
