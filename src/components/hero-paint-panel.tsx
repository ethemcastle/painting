"use client";

import { useEffect, useState } from "react";
import { RollerIcon, ShieldCheckIcon, StarIcon } from "@/components/icons";

type Paint = { name: string; hex: string };

const PAINT_COLORS: Paint[] = [
  { name: "Harbor Blue", hex: "#2f5d8a" },
  { name: "Sage Whisper", hex: "#7c9473" },
  { name: "Terracotta", hex: "#c06a4b" },
  { name: "Sunlit Ochre", hex: "#d8a24a" },
  { name: "Plum Dusk", hex: "#7b5aa6" },
  { name: "Cloud White", hex: "#edefe8" },
  { name: "Forest", hex: "#2f5d50" },
  { name: "Soft Blush", hex: "#e1a6a0" },
];

function HeroStars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}

export function HeroPaintPanel() {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PAINT_COLORS.length);
    }, 2400);
    return () => clearInterval(id);
  }, [auto]);

  const active = PAINT_COLORS[index];

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Wall panel that smoothly changes color */}
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-blue-900/25 transition-colors duration-[1200ms] ease-out"
        style={{ backgroundColor: active.hex }}
      >
        {/* lighting + depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/15" />

        {/* animated sheen sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-sheen absolute -inset-y-6 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>

        {/* roller painting a fresh band */}
        <div className="pointer-events-none absolute inset-x-0 top-10 h-16">
          <div className="absolute inset-0 bg-white/10" />
          <div className="animate-paint-roll absolute top-1/2 -translate-y-1/2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-800 shadow-lg">
              <RollerIcon className="h-6 w-6" />
            </span>
          </div>
        </div>

        {/* live color readout */}
        <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md backdrop-blur">
          <span
            className="h-3.5 w-3.5 rounded-full ring-1 ring-black/10 transition-colors duration-700"
            style={{ backgroundColor: active.hex }}
          />
          {active.name}
          <span className="font-mono text-[11px] uppercase text-slate-400">
            {active.hex}
          </span>
        </div>
      </div>

      {/* Clickable swatch palette */}
      <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-slate-100 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur">
        {PAINT_COLORS.map((paint, i) => {
          const isActive = i === index;
          return (
            <button
              key={paint.hex}
              type="button"
              onClick={() => {
                setIndex(i);
                setAuto(false);
              }}
              aria-label={`Preview ${paint.name}`}
              aria-pressed={isActive}
              title={paint.name}
              className={`h-6 w-6 rounded-full ring-1 ring-black/10 transition hover:scale-110 ${
                isActive
                  ? "scale-110 ring-2 ring-blue-500 ring-offset-2"
                  : "opacity-80 hover:opacity-100"
              }`}
              style={{ backgroundColor: paint.hex }}
            />
          );
        })}
      </div>

      {/* floating rating chip */}
      <div className="animate-floaty absolute -left-4 top-12 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
        <HeroStars className="h-4 w-4" />
        <div>
          <p className="text-sm font-bold leading-none text-slate-900">4.9 / 5</p>
          <p className="mt-1 text-[11px] text-slate-500">600+ reviews</p>
        </div>
      </div>

      {/* floating warranty chip */}
      <div
        className="animate-floaty absolute -right-3 top-1/3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur"
        style={{ animationDelay: "1.6s" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <ShieldCheckIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold leading-none text-slate-900">2-year</p>
          <p className="mt-1 text-[11px] text-slate-500">warranty</p>
        </div>
      </div>
    </div>
  );
}

