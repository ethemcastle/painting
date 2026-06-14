import { COLORS } from "@/components/colors-data";

export function Marquee() {
  const items = [...COLORS, ...COLORS]; // duplicate for seamless loop
  return (
    <div className="relative z-[3] overflow-hidden border-y border-[color:var(--hair)] bg-white py-[22px]">
      <div className="marquee-track">
        {items.map((c, i) => (
          <span
            key={`${c.num}-${i}`}
            className="font-italic inline-flex items-center gap-3.5 text-[26px] tracking-[-0.01em] text-[color:var(--ink)]"
            style={{ fontStyle: "italic" }}
          >
            <span
              className="inline-block h-[22px] w-[22px] rounded-full"
              style={{ background: c.hex }}
              aria-hidden="true"
            />
            {c.name}
            <span className="font-mono ml-1 not-italic text-[11px] tracking-[0.16em] text-[color:var(--ink-muted)]">
              N°{c.num}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
