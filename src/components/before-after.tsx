"use client";

import { useCallback, useRef, useState } from "react";

type BeforeAfterProps = {
  beforeStyle: React.CSSProperties;
  afterStyle: React.CSSProperties;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
};

export function BeforeAfter({
  beforeStyle,
  afterStyle,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
}: BeforeAfterProps) {
  const [pos, setPos] = useState(52);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  return (
    <figure className="w-full">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border border-slate-200 shadow-xl"
        onPointerDown={(e) => {
          draggingRef.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (draggingRef.current) updateFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          draggingRef.current = false;
        }}
        onPointerCancel={() => {
          draggingRef.current = false;
        }}
      >
        {/* After result fills the background */}
        <div className="absolute inset-0" style={afterStyle} />
        <span className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {afterLabel}
        </span>

        {/* Before state, clipped by the slider position */}
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="absolute inset-0" style={beforeStyle} />
          <div className="absolute inset-0 bg-slate-500/25 mix-blend-luminosity" />
          <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            {beforeLabel}
          </span>
        </div>

        {/* Drag handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 7l-4 5 4 5M15 7l4 5-4 5" />
            </svg>
          </span>
        </div>

        {/* Accessible range control */}
        <label className="sr-only" htmlFor="ba-range">
          Reveal the painted result
        </label>
        <input
          id="ba-range"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Reveal the painted result"
        />
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-slate-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
