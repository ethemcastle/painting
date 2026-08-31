import type { Metadata } from "next";
import Image from "next/image";

const INSTAGRAM_URL =
  process.env.INSTAGRAM_URL?.trim() ||
  "https://www.instagram.com/paintingyourworld1/";

export const metadata: Metadata = {
  title: "Connect with Painting Your World",
  description:
    "Choose how you would like to contact Painting Your World in Philadelphia.",
};

export default function ConnectPage() {
  return (
    <main className="relative isolate flex h-dvh min-h-0 items-center justify-center overflow-hidden bg-[color:var(--surface)] p-3 sm:p-6">
      <div
        aria-hidden="true"
        className="absolute -left-28 -top-36 h-80 w-80 rounded-full bg-[color:var(--c1)] opacity-75 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[color:var(--c2)] opacity-20 blur-3xl"
      />

      <section className="relative flex h-full max-h-[800px] w-full max-w-[560px] flex-col overflow-hidden rounded-[28px] border border-[color:var(--hair-strong)] bg-white shadow-[0_24px_80px_rgba(15,15,15,0.12)]">
        <div className="h-2 bg-[linear-gradient(90deg,var(--c1)_0_25%,var(--c2)_25%_50%,var(--c4)_50%_75%,var(--c10)_75%)]" />

        <div className="flex min-h-0 flex-1 flex-col px-5 pb-4 pt-4 sm:px-10 sm:pb-8 sm:pt-7">
          <div className="flex items-center justify-between gap-5 border-b border-[color:var(--hair)] pb-3 sm:gap-6 sm:pb-5">
            <Image
              src="/logo-compact.png"
              alt="Painting Your World LLC"
              width={396}
              height={183}
              priority
              className="h-auto w-[128px] object-contain sm:w-[150px]"
              style={{ filter: "brightness(0)" }}
            />
            <p className="font-mono text-right text-[9px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)] sm:text-[10px]">
              Philadelphia, PA
              <br />
              Free estimates
            </p>
          </div>

          <div className="py-[clamp(16px,4dvh,38px)] text-center">
            <p className="font-mono mb-2 text-[9px] uppercase tracking-[0.24em] text-[color:var(--ink-muted)] sm:mb-4 sm:text-[10px]">
              Let&apos;s talk paint
            </p>
            <h1 className="font-serif text-[clamp(34px,9.5vw,62px)] font-normal leading-[0.94] tracking-[-0.04em] text-[color:var(--ink)]">
              How would you like
              <br />
              to reach us?
            </h1>
            <p className="font-serif mx-auto mt-3 max-w-[390px] text-[14px] leading-snug text-[color:var(--ink-soft)] sm:mt-5 sm:text-[17px] sm:leading-relaxed">
              Choose the easiest way to ask a question, share your project, or
              request a free estimate.
            </p>
          </div>

          <div className="grid gap-2.5 sm:gap-3">
            <ContactChoice
              href="/#contact"
              eyebrow="Painting-your-world.com"
              title="Use our website"
              description="Send project details and request an estimate."
              accent="var(--c2)"
              icon={<WebsiteIcon />}
            />
            <ContactChoice
              href={INSTAGRAM_URL}
              eyebrow="Instagram"
              title="Message us on Instagram"
              description="Open our profile and start a direct message."
              accent="var(--c4)"
              icon={<InstagramIcon />}
              external
            />
          </div>

          <p className="font-mono mt-auto pt-3 text-center text-[8px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)] sm:pt-6 sm:text-[9px] sm:tracking-[0.2em]">
            Fully insured · 3-year workmanship warranty
          </p>
        </div>
      </section>
    </main>
  );
}

function ContactChoice({
  href,
  eyebrow,
  title,
  description,
  accent,
  icon,
  external = false,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex min-h-[96px] items-center gap-3 rounded-2xl border border-[color:var(--hair-strong)] bg-[color:var(--surface)] p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(15,15,15,0.09)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ink)] sm:min-h-[112px] sm:gap-5 sm:p-5"
    >
      <span
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white sm:h-16 sm:w-16"
        style={{ backgroundColor: accent }}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="font-mono block text-[9px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
          {eyebrow}
        </span>
        <span className="font-serif mt-0.5 block text-[20px] leading-tight tracking-[-0.02em] text-[color:var(--ink)] sm:mt-1 sm:text-[25px]">
          {title}
        </span>
        <span className="mt-0.5 block text-[11px] leading-snug text-[color:var(--ink-soft)] sm:mt-1 sm:text-[13px]">
          {description}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="font-serif shrink-0 text-[26px] text-[color:var(--ink)] transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

function WebsiteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-7 w-7"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5M12 3.5C9.9 5.8 8.8 8.6 8.8 12s1.1 6.2 3.2 8.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
