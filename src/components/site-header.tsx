"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#colors", label: "Colors" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#words", label: "Words" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <nav
        className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b transition-all duration-500 ${
          scrolled
            ? "border-[color:var(--hair)] bg-white/85 px-9 py-3.5 backdrop-blur-md"
            : "border-transparent bg-transparent px-9 py-[22px]"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Painting Your World LLC"
            width={120}
            height={60}
            className="h-auto w-auto"
            style={{ filter: "brightness(0)" }}
            priority
          />
        </a>

        <ul className="font-mono hidden items-center gap-[34px] text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-soft)] md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link relative inline-block overflow-hidden py-1.5"
                data-text={link.label}
              >
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-mono cta-fill inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-[18px] py-2.5 text-[11px] uppercase tracking-[0.14em] text-white transition-transform duration-300"
        >
          <span>Book a visit</span>
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </>
  );
}
