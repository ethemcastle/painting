"use client";

import { useEffect, useRef } from "react";

/**
 * A colorful, paint-themed cursor effect:
 *  - a soft hue-cycling glow (aura) that smoothly trails the pointer
 *  - vivid "paint" dots that spray along the path as you move
 *
 * Rendered to a single full-screen canvas so it stays cheap. Only runs on
 * devices with a fine pointer (mouse) and when motion is allowed.
 */

type Dot = {
  x: number;
  y: number;
  r: number;
  hue: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
};

export function PaintCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia?.("(pointer: fine)").matches;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const dots: Dot[] = [];
    let hue = 210; // start in the brand blue range, then roam the spectrum

    // pointer position
    let px = width / 2;
    let py = height / 2;
    let lastX = px;
    let lastY = py;
    let seen = false;
    let last = performance.now();

    const spawn = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 14;
        const maxLife = 500 + Math.random() * 400;
        dots.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          r: 2.5 + Math.random() * 5.5,
          hue: hue + (Math.random() - 0.5) * 24,
          life: maxLife,
          maxLife,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        });
      }
      // keep the pool bounded
      if (dots.length > 220) dots.splice(0, dots.length - 220);
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!seen) {
        seen = true;
        lastX = px;
        lastY = py;
      }
      const dx = px - lastX;
      const dy = py - lastY;
      const dist = Math.hypot(dx, dy);
      // advance the hue and drop paint proportional to how far we moved
      hue = (hue + Math.min(dist * 0.6, 18) + 1.5) % 360;
      const drops = Math.min(Math.floor(dist / 11), 4);
      for (let i = 0; i < drops; i++) {
        const t = i / Math.max(drops, 1);
        spawn(lastX + dx * t, lastY + dy * t, 1);
      }
      lastX = px;
      lastY = py;
    };

    const onDown = (e: PointerEvent) => {
      // a satisfying paint "splat" on click
      hue = (hue + 40) % 360;
      spawn(e.clientX, e.clientY, 9);
    };

    let raf = 0;
    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.clearRect(0, 0, width, height);

      if (seen) {
        // crisp leading dab right at the pointer
        const tip = ctx.createRadialGradient(px, py, 0, px, py, 6);
        tip.addColorStop(0, `hsla(${hue}, 95%, 65%, 0.9)`);
        tip.addColorStop(1, `hsla(${hue}, 95%, 65%, 0)`);
        ctx.fillStyle = tip;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = dots.length - 1; i >= 0; i--) {
        const d = dots[i];
        d.life -= dt * 1000;
        if (d.life <= 0) {
          dots.splice(i, 1);
          continue;
        }
        // drift + friction, spreading paint grows slightly as it settles
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.vx *= 0.9;
        d.vy *= 0.9;
        const t = d.life / d.maxLife; // 1 -> 0
        const r = d.r * (1.15 - t * 0.15);
        const alpha = Math.min(t, 0.6);
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, r);
        g.addColorStop(0, `hsla(${d.hue}, 90%, 60%, ${alpha})`);
        g.addColorStop(1, `hsla(${d.hue}, 90%, 60%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
    />
  );
}
