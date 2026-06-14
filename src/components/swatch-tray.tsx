"use client";

import { COLORS, useColor } from "@/components/color-theme";

export function SwatchTray() {
  const { index, select } = useColor();
  return (
    <>
      {/* anchor for #colors links — offset to clear the fixed nav */}
      <a id="colors" className="relative -top-[90px]" aria-hidden="true" />
      <div
        className="relative z-[4] grid h-20 grid-cols-6 border-y border-[color:var(--hair)] bg-white sm:grid-cols-12"
        onMouseLeave={() => {
          // no-op: provider auto-resumes after the lock window
        }}
      >
        {COLORS.map((c, i) => (
          <button
            key={c.num}
            type="button"
            className="swatch relative overflow-hidden border-0"
            data-active={index === i}
            style={
              {
                "--sw": c.hex,
                "--on-sw": c.on,
              } as React.CSSProperties
            }
            onMouseEnter={() => select(i)}
            onClick={() => select(i, true)}
            aria-label={`Preview ${c.name}`}
            aria-pressed={index === i}
            title={c.name}
          >
            <span className="swatch-fill" aria-hidden="true" />
            <span
              className="swatch-num font-mono absolute left-2.5 top-2 z-[1] text-[9px] tracking-[0.1em] text-[color:var(--ink-muted)] transition-colors duration-300"
              style={{ "--on-sw": c.on } as React.CSSProperties}
            >
              {c.num}
            </span>
            <span
              className="swatch-label font-mono absolute bottom-2 left-2.5 z-[1] text-[10px] uppercase tracking-[0.08em] opacity-0 transition duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={
                {
                  color: "var(--on-sw, #fff)",
                  transform: "translateY(8px)",
                  whiteSpace: "nowrap",
                } as React.CSSProperties
              }
            >
              {c.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
