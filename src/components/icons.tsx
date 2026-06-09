import type { SVGProps } from "react";

function Stroke(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function RollerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4" width="12" height="6" rx="1.5" />
      <path d="M15 7h3a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-6" />
      <path d="M12 12.5V15" />
      <rect x="10" y="15" width="4" height="6" rx="1.2" />
    </Stroke>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Stroke>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Stroke>
  );
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-5h4v5" />
    </Stroke>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </Stroke>
  );
}

export function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </Stroke>
  );
}

export function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
      <path d="M5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9z" />
    </Stroke>
  );
}

export function PaletteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M12 3a9 9 0 1 0 0 18 2.4 2.4 0 0 0 2.4-2.4c0-.6-.3-1.2-.6-1.6-.3-.4-.5-.9-.5-1.3a1.5 1.5 0 0 1 1.5-1.5H17a4 4 0 0 0 4-4c0-4-4-7.2-9-7.2z" />
      <circle cx="7.5" cy="12" r="1" />
      <circle cx="10" cy="7.8" r="1" />
      <circle cx="14.5" cy="7.8" r="1" />
    </Stroke>
  );
}

export function BrushIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M14 3l7 7-7 4-4-4z" />
      <path d="M10 10l-3 3" />
      <path d="M7 13c-2 0-3 1.5-3 3 0 1-.5 1.6-1 2 1.2.8 3 .9 4 .2 1-.7 1.5-2 1-3.4" />
    </Stroke>
  );
}

export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </Stroke>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Stroke>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
      <path d="M5 19c3-3 6-5 9-6" />
    </Stroke>
  );
}

export function TagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M20 12l-8 8-9-9V4a1 1 0 0 1 1-1h7z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </Stroke>
  );
}

export function SmileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </Stroke>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M4 5c0-1 1-2 2-2h2l2 4-2 2c1 2 3 4 5 5l2-2 4 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5z" />
    </Stroke>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Stroke>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Stroke>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M5 12l4 4 10-10" />
    </Stroke>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Stroke {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3.2l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.7l-5.2 2.5 1-5.8L3.6 9.3l5.8-.8z" />
    </svg>
  );
}

export function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.5 6C6.5 6 4.5 8.4 4.5 11.5c0 3 2 5 4.7 5 .3 0 .6 0 .8-.1-.6 1.3-1.9 2.3-3.6 2.8-.4.1-.6.5-.5.9.1.4.5.6.9.5C9.7 19.6 12 16.8 12 12.7 12 8.7 11 6 9.5 6Zm9 0c-3 0-5 2.4-5 5.5 0 3 2 5 4.7 5 .3 0 .6 0 .8-.1-.6 1.3-1.9 2.3-3.6 2.8-.4.1-.6.5-.5.9.1.4.5.6.9.5C18.7 19.6 21 16.8 21 12.7 21 8.7 20 6 18.5 6Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 9h2.2l.3-2.8H14V4.8c0-.8.2-1.3 1.4-1.3H16.7V1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.5H8.5V9.9h2.3V23h3.2V9z" />
    </svg>
  );
}


