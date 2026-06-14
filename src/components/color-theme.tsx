"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { COLORS, type PaintColor } from "@/components/colors-data";

export type { PaintColor };
export { COLORS };

const AUTO_MS = 3800;
const RESUME_MS = 6000;
const INITIAL = 1; // Mallard

type Ctx = {
  index: number;
  color: PaintColor;
  select: (i: number, lock?: boolean) => void;
  /** rollKey changes on every color change — components watch it to fire wipe/pulse animations once */
  rollKey: number;
};

const ColorThemeContext = createContext<Ctx | null>(null);

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(INITIAL);
  const [rollKey, setRollKey] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lockedRef = useRef(false);

  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % COLORS.length);
      setRollKey((k) => k + 1);
    }, AUTO_MS);
  }, [stopAuto]);

  const select = useCallback(
    (i: number, lock = false) => {
      if (i < 0 || i >= COLORS.length) return;
      setIndex((prev) => {
        if (prev === i) {
          // same color clicked: just replay the animation
          setRollKey((k) => k + 1);
          return prev;
        }
        setRollKey((k) => k + 1);
        return i;
      });
      if (lock) {
        lockedRef.current = true;
        stopAuto();
        if (resumeRef.current) clearTimeout(resumeRef.current);
        resumeRef.current = setTimeout(() => {
          lockedRef.current = false;
          startAuto();
        }, RESUME_MS);
      }
    },
    [startAuto, stopAuto],
  );

  // apply CSS variables to <html> so every section that uses var(--current) updates
  useEffect(() => {
    const c = COLORS[index];
    const root = document.documentElement;
    root.style.setProperty("--current", c.hex);
    root.style.setProperty("--on-current", c.on);
  }, [index]);

  // boot the auto-cycle
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(startAuto, 1400);
    return () => {
      clearTimeout(id);
      stopAuto();
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, [startAuto, stopAuto]);

  // pause when tab hidden, resume when visible (only if not locked)
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        stopAuto();
      } else if (!lockedRef.current) {
        startAuto();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [startAuto, stopAuto]);

  return (
    <ColorThemeContext.Provider
      value={{ index, color: COLORS[index], select, rollKey }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColor() {
  const ctx = useContext(ColorThemeContext);
  if (!ctx) throw new Error("useColor must be used inside ColorThemeProvider");
  return ctx;
}
