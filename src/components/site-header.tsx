"use client";

import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  RollerIcon,
} from "@/components/icons";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium text-slate-300 sm:px-6">
          <span className="hidden sm:inline">Now booking summer projects.</span>
          <span className="text-blue-400">
            Free color consultation with every quote.
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-slate-200 bg-white/90 shadow-sm backdrop-blur"
            : "border-transparent bg-white/70 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#top"
            className="group flex items-center gap-2 font-bold tracking-tight text-slate-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm transition group-hover:scale-105">
              <RollerIcon className="h-5 w-5" />
            </span>
            <span className="text-lg">
              True<span className="text-blue-600">Coat</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-1.5 md:flex">
            <a
              href="tel:+15550102837"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              <PhoneIcon className="h-4 w-4" />
              (555) 010-2837
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Free quote
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+15550102837"
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Call (555) 010-2837
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get a free quote
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}


