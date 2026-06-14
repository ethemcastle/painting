"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";

const CONTACT_EMAIL = "hoxhajgramoz@gmail.com";
// E.164 with no leading "+" / spaces — US number (267) 227-6745
const WHATSAPP_NUMBER = "12672276745";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and a short message.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Could not send. Try email or WhatsApp.");
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Could not send. Try email or WhatsApp.",
      );
    }
  };

  const waText =
    message.trim() ||
    `Hi Painting Your World — I'd like to ask about a color visit.${
      name.trim() ? ` — ${name.trim()}` : ""
    }`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    waText,
  )}`;

  return (
    <section
      id="contact"
      className="panel-sweep relative z-[3] border-t border-[color:var(--hair)] bg-white px-10 py-[120px]"
    >
      <div className="font-mono mb-12 grid grid-cols-1 items-baseline gap-2 border-b border-[color:var(--hair)] pb-[18px] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-muted)] sm:grid-cols-3">
        <span>06 — A short note is enough</span>
        <span className="text-[color:var(--ink)] sm:text-center">
          Email or WhatsApp
        </span>
        <span className="sm:text-right">We reply in two working days</span>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
        {/* ─── left: editorial copy ─── */}
        <Reveal className="flex flex-col justify-between">
          <div>
            <h2
              className="font-serif font-normal leading-[0.98] tracking-[-0.035em] text-[color:var(--ink)]"
              style={{
                fontSize: "clamp(38px, 5.6vw, 80px)",
                fontVariationSettings: "'opsz' 144",
              }}
            >
              Send a{" "}
              <em
                className="font-italic"
                style={{
                  color: "var(--current)",
                  transition: "color 0.9s",
                  fontStyle: "italic",
                }}
              >
                short note.
              </em>
            </h2>
            <p
              className="font-serif mt-7 max-w-[440px] text-[17px] leading-[1.55] text-[color:var(--ink-soft)]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              The room, the rough size, the color you have in mind — anything is
              fine. We&apos;ll write back with a date for a{" "}
              <em
                className="font-italic text-[color:var(--ink)]"
                style={{ fontStyle: "italic" }}
              >
                color visit.
              </em>
            </p>
          </div>

          <ul className="font-mono mt-10 space-y-3 text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
            <li className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  background: "var(--current)",
                  transition: "background 0.9s",
                }}
              />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-serif text-[15px] normal-case tracking-normal text-[color:var(--ink)] transition-colors duration-500 hover:text-[color:var(--current)]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  background: "var(--current)",
                  transition: "background 0.9s",
                }}
              />
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-[15px] normal-case tracking-normal text-[color:var(--ink)] transition-colors duration-500 hover:text-[color:var(--current)]"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                (267) 227-6745 · WhatsApp
              </a>
            </li>
          </ul>
        </Reveal>

        {/* ─── right: form ─── */}
        <Reveal className="rounded-lg border border-[color:var(--hair)] bg-[color:var(--surface)] p-7 sm:p-9">
          {status === "sent" ? (
            <SentNote
              onReset={() => {
                setStatus("idle");
              }}
            />
          ) : (
            <form className="flex flex-col gap-5" onSubmit={onSubmit} noValidate>
              <Field label="Name" htmlFor="contact-name">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Inês Vasconcelos"
                />
              </Field>

              <Field label="Email" htmlFor="contact-email">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </Field>

              <Field label="Message" htmlFor="contact-message">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="A short note: the room, the size, a color you like."
                />
              </Field>

              {status === "error" && (
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#c46447]"
                  aria-live="polite"
                >
                  {errorMsg}
                </p>
              )}

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="cta-fill bg-current-color font-mono inline-flex flex-1 items-center justify-center gap-3 rounded-full px-7 py-4 text-[11px] uppercase tracking-[0.18em] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>
                    {status === "sending" ? "Sending…" : "Send email"}
                  </span>
                  {status !== "sending" && (
                    <span aria-hidden="true">→</span>
                  )}
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono group inline-flex items-center justify-center gap-3 rounded-full border border-[color:var(--ink)] px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink)] transition-colors duration-300 hover:bg-[color:var(--ink)] hover:text-white"
                  title="Open WhatsApp"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p
                className="font-italic mt-1 text-[12.5px] text-[color:var(--ink-muted)]"
                style={{ fontStyle: "italic" }}
              >
                No newsletter. We only use your details to reply about the work.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "font-serif w-full rounded-md border border-[color:var(--hair)] bg-white px-4 py-3 text-[15px] text-[color:var(--ink)] outline-none transition-all duration-300 placeholder:text-[color:var(--ink-faint)] focus:border-[color:var(--current)] focus:ring-2 focus:ring-[color:var(--current)] focus:ring-opacity-20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-muted)]">
        {label}
      </span>
      {children}
    </label>
  );
}

function SentNote({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col items-start justify-center gap-5">
      <span
        className="font-italic text-[64px] leading-[0.7]"
        style={{
          color: "var(--current)",
          transition: "color 0.9s",
          fontStyle: "italic",
        }}
        aria-hidden="true"
      >
        ✓
      </span>
      <h3
        className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.02em] text-[color:var(--ink)]"
        style={{ fontVariationSettings: "'opsz' 48" }}
      >
        Note received.
      </h3>
      <p
        className="font-serif max-w-[360px] text-[15px] leading-[1.55] text-[color:var(--ink-soft)]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        We&apos;ll write back within two working days. If it&apos;s urgent, the
        WhatsApp button above is the fastest way to reach us.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="font-mono mt-2 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-muted)] underline-offset-4 hover:text-[color:var(--current)] hover:underline"
      >
        Send another
      </button>
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.1 4.9A9.93 9.93 0 0 0 12 2C6.5 2 2 6.5 2 12c0 1.76.46 3.46 1.34 4.97L2 22l5.16-1.32A9.95 9.95 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.66-1.04-5.16-2.9-7.05ZM12 20.13a8.12 8.12 0 0 1-4.13-1.12l-.3-.18-3.06.78.82-2.98-.2-.31A8.13 8.13 0 1 1 12 20.13Zm4.46-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
