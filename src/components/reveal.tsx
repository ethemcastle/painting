"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** add classes that get toggled when the element enters the viewport */
  inViewClass?: string;
  /** include the "reveal" base class (default: true) */
  withBase?: boolean;
  /** stagger children — applies the same observer with the stagger CSS class */
  stagger?: boolean;
};

export function Reveal({
  children,
  className = "",
  as,
  inViewClass = "in-view",
  withBase = true,
  stagger = false,
  ...rest
}: RevealProps & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Tag = (as ?? "div") as ElementType;
  const baseClass = stagger ? "reveal-stagger" : "reveal";
  const finalClass = [
    withBase ? baseClass : "",
    shown ? inViewClass : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={finalClass} {...rest}>
      {children}
    </Tag>
  );
}
