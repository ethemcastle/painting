import { BeforeAfter } from "@/components/before-after";
import { HeroPaintPanel } from "@/components/hero-paint-panel";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import {
  ArrowRightIcon,
  BrushIcon,
  BuildingIcon,
  CheckIcon,
  ClockIcon,
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  LeafIcon,
  MailIcon,
  MapPinIcon,
  PaletteIcon,
  PhoneIcon,
  QuoteIcon,
  RollerIcon,
  ShieldCheckIcon,
  SmileIcon,
  SparklesIcon,
  StarIcon,
  SunIcon,
  TagIcon,
} from "@/components/icons";

/* ------------------------------------------------------------------ data */

const HERO_LEAD =
  "Professional interior and exterior painters who show up on time, protect your space, and leave a finish you will love. Licensed, insured, and guaranteed.";

const SERVICES_LEAD =
  "From a single accent wall to a full repaint inside and out, our painters deliver a clean, durable finish that lasts.";

const WHY_LEAD =
  "We treat your home like our own: clear communication, careful prep, premium materials, and a spotless cleanup on every job.";

const GALLERY_LEAD =
  "A few recent projects from around the area. Same crews, same care, every single time.";

const COLOR_LEAD =
  "Book a free color consultation and our designers will match the perfect palette to your space and light.";

const CONTACT_LEAD =
  "Tell us about your project and we will send a detailed, fixed-price estimate within one business day.";

const services = [
  {
    icon: HomeIcon,
    title: "Interior painting",
    desc: "Walls, ceilings, and trim finished with smooth, even coverage and crisp, clean edges.",
  },
  {
    icon: SunIcon,
    title: "Exterior painting",
    desc: "Weatherproof coatings and prep that protect and beautify siding, doors, and decks.",
  },
  {
    icon: BuildingIcon,
    title: "Commercial & offices",
    desc: "Low-disruption schedules for offices, retail, and rentals, including after-hours work.",
  },
  {
    icon: SparklesIcon,
    title: "Cabinets & trim",
    desc: "Factory-smooth cabinet and trim refinishing that modernizes any kitchen or bath.",
  },
  {
    icon: BrushIcon,
    title: "Drywall & repairs",
    desc: "Patching, skim coating, and crack repair so every surface is flawless before paint.",
  },
  {
    icon: PaletteIcon,
    title: "Color consultation",
    desc: "Expert guidance to choose colors that fit your style, your lighting, and your home.",
  },
];

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: "2-year warranty",
    desc: "If anything is not right, we come back and make it right. No hassle.",
  },
  {
    icon: ClockIcon,
    title: "On time, on budget",
    desc: "Detailed schedules and daily updates mean no surprises and no overruns.",
  },
  {
    icon: LeafIcon,
    title: "Low-VOC paints",
    desc: "Premium, low-odor products that are safer for your family and your pets.",
  },
  {
    icon: TagIcon,
    title: "Upfront pricing",
    desc: "Clear, itemized quotes with no hidden fees or change-order games.",
  },
  {
    icon: SmileIcon,
    title: "Tidy crews",
    desc: "We mask, cover, and clean up daily, leaving your home better than we found it.",
  },
  {
    icon: CheckIcon,
    title: "Licensed & insured",
    desc: "Fully licensed, bonded, and insured for your complete peace of mind.",
  },
];

const steps = [
  {
    n: "01",
    title: "Free consultation",
    desc: "We visit, listen to your goals, and assess the space, all at no cost.",
  },
  {
    n: "02",
    title: "Detailed quote",
    desc: "You get a clear, fixed-price estimate with colors, materials, and a timeline.",
  },
  {
    n: "03",
    title: "Prep & paint",
    desc: "We protect, prep, and paint with premium products and skilled hands.",
  },
  {
    n: "04",
    title: "Final walkthrough",
    desc: "We review every detail together and are not done until you are thrilled.",
  },
];

const projects = [
  {
    title: "Sunlit living room",
    location: "Maple Heights",
    tag: "Interior",
    gradient: "linear-gradient(135deg,#fcd9a8,#e98b54)",
  },
  {
    title: "Modern exterior refresh",
    location: "Birchwood",
    tag: "Exterior",
    gradient: "linear-gradient(135deg,#3b6ea5,#1e3a5f)",
  },
  {
    title: "Cozy bedroom retreat",
    location: "Cedar Park",
    tag: "Interior",
    gradient: "linear-gradient(135deg,#9fb89a,#3f5d4a)",
  },
  {
    title: "Bright kitchen cabinets",
    location: "Stonegate",
    tag: "Cabinets",
    gradient: "linear-gradient(135deg,#e9edf2,#9aa7b4)",
  },
  {
    title: "Office lobby",
    location: "Downtown",
    tag: "Commercial",
    gradient: "linear-gradient(135deg,#6b6f76,#2f3338)",
  },
  {
    title: "Accent wall feature",
    location: "Lakeside",
    tag: "Interior",
    gradient: "linear-gradient(135deg,#e08aa0,#a83f6a)",
  },
];

const colors = [
  { name: "Cloud White", hex: "#f3f4ee" },
  { name: "Sage Whisper", hex: "#b9c4ad" },
  { name: "Harbor Blue", hex: "#3b6ea5" },
  { name: "Terracotta", hex: "#c06a4b" },
  { name: "Warm Greige", hex: "#cdbfae" },
  { name: "Charcoal", hex: "#3a3f45" },
  { name: "Soft Blush", hex: "#e7c4c0" },
  { name: "Forest", hex: "#2f5d50" },
];

const testimonials = [
  {
    quote:
      "TrueCoat repainted our whole first floor in two days. The crew was spotless, on time, and the lines are razor-sharp. We could not be happier.",
    name: "Priya N.",
    location: "Maple Heights",
    initials: "PN",
  },
  {
    quote:
      "They helped us pick the perfect exterior color and the finish still looks brand new a year later. Genuinely the easiest contractor we have hired.",
    name: "Marcus T.",
    location: "Birchwood",
    initials: "MT",
  },
  {
    quote:
      "Fair quote, no surprises, and they protected every floor and fixture. Our kitchen cabinets look factory-finished. Highly recommend.",
    name: "Dana R.",
    location: "Cedar Park",
    initials: "DR",
  },
];

const brands = [
  "Sherwin-Williams",
  "Benjamin Moore",
  "Behr",
  "PPG",
  "Valspar",
  "Dunn-Edwards",
  "Farrow & Ball",
];

const stats = [
  { value: "12+", label: "Years of experience" },
  { value: "1,500+", label: "Projects completed" },
  { value: "4.9", label: "Average review score" },
  { value: "98%", label: "Referral & repeat work" },
];

/* ------------------------------------------------------------------ ui bits */

const primaryButton =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md";

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-lg text-slate-600">{lead}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ sections */

export function Hero() {
  const avatars = ["#60a5fa", "#f59e0b", "#34d399", "#f472b6", "#a78bfa"];
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-24 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-20">
        <div>
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 py-1.5 pl-1.5 pr-4 text-xs font-medium text-slate-600 shadow-sm backdrop-blur transition hover:border-slate-300"
          >
            <span className="flex -space-x-2">
              {avatars.map((c) => (
                <span
                  key={c}
                  className="h-6 w-6 rounded-full ring-2 ring-white"
                  style={{ backgroundColor: c }}
                />
              ))}
            </span>
            <Stars className="h-3.5 w-3.5" />
            <span className="font-semibold text-slate-900">4.9</span>
            <span className="text-slate-300">·</span> 600+ happy homeowners
          </a>

          <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Walls worth{" "}
            <span className="relative inline-block">
              <span
                className="absolute inset-x-[-6%] bottom-1.5 -z-0 h-[38%] -rotate-1 rounded-md bg-amber-300/70"
                aria-hidden="true"
              />
              <span className="relative">showing off</span>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            {HERO_LEAD}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className={primaryButton}>
              Get a free quote
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#work" className={secondaryButton}>
              See our work
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {["Free, no-pressure estimate", "Licensed & insured", "2-year warranty"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-blue-600" /> {item}
                </span>
              ),
            )}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const swatches = ["#1e3a5f", "#e7c4c0", "#9fb89a", "#caa45a"];
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl shadow-blue-900/15">
        <div className="absolute inset-0 grid grid-cols-3">
          <div className="bg-gradient-to-b from-[#27496d] to-[#1b3350]" />
          <div className="bg-gradient-to-b from-[#e9c8c3] to-[#d79b93]" />
          <div className="bg-gradient-to-b from-[#a3bd9d] to-[#5f7d62]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
        <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md backdrop-blur">
          <RollerIcon className="h-4 w-4 text-blue-600" /> Living room · Harbor Blue
        </div>
      </div>

      <div className="animate-floaty absolute -left-4 top-10 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
        <Stars className="h-4 w-4" />
        <div>
          <p className="text-sm font-bold leading-none text-slate-900">4.9 / 5</p>
          <p className="mt-1 text-[11px] text-slate-500">600+ reviews</p>
        </div>
      </div>

      <div
        className="animate-floaty absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur"
        style={{ animationDelay: "1.6s" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <ShieldCheckIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold leading-none text-slate-900">
            2-year warranty
          </p>
          <p className="mt-1 text-[11px] text-slate-500">On every project</p>
        </div>
      </div>

      <div className="absolute -right-3 top-1/3 hidden gap-1.5 rounded-2xl border border-slate-100 bg-white/95 p-2 shadow-xl backdrop-blur sm:flex">
        {swatches.map((c) => (
          <span
            key={c}
            className="h-6 w-6 rounded-full"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Premium paints we trust
        </p>
        <div className="mask-fade-x relative mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14 pr-14">
            {row.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="whitespace-nowrap text-lg font-semibold tracking-tight text-slate-400 sm:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
              {stat.value}
            </div>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Every surface, beautifully finished"
            lead={SERVICES_LEAD}
          />
        </Reveal>
        <Reveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 opacity-0 transition duration-300 group-hover:opacity-100">
                Learn more
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <Eyebrow>Why TrueCoat</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
            Painting done right, start to finish
          </h2>
          <p className="mt-4 text-lg text-slate-600">{WHY_LEAD}</p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Stars className="h-4 w-4" />
              <span className="text-sm font-semibold text-slate-900">
                4.9 / 5 average
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Rated by 600+ homeowners for clean work, clear pricing, and on-time
              delivery.
            </p>
          </div>

          <a href="#contact" className={`${primaryButton} mt-8`}>
            Start your project
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2" delay={120}>
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100">
                <benefit.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Four simple steps to fresh walls"
          />
        </Reveal>
        <Reveal className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-900/20 ring-4 ring-white">
                  {step.n}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Before & after"
            title="See the TrueCoat difference"
            lead="Drag the slider to reveal a tired, dated room transformed with a fresh, flawless finish."
          />
        </Reveal>
        <Reveal className="mt-12">
          <BeforeAfter
            beforeStyle={{ background: "linear-gradient(135deg,#b9b3a6,#8d8579)" }}
            afterStyle={{ background: "linear-gradient(135deg,#dce8f5,#3b6ea5)" }}
            caption="Interior repaint · Maple Heights"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Our work
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
            Recent transformations
          </h2>
          <p className="mt-4 text-lg text-slate-300">{GALLERY_LEAD}</p>
        </Reveal>
        <Reveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#contact"
              className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-300 hover:ring-white/30"
            >
              <div
                className="aspect-[4/3] w-full transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: project.gradient }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <span className="inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300">{project.location}</p>
                </div>
                <span className="flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function ColorShowcase() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Color"
            title="Not sure on a color? We will help."
            lead={COLOR_LEAD}
          />
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {colors.map((color) => (
            <div key={color.name} className="group text-center">
              <div
                className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-inset ring-black/5 transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl"
                style={{ backgroundColor: color.hex }}
              >
                <span className="absolute inset-x-2 bottom-2 rounded-lg bg-white/85 py-0.5 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-700 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  {color.hex}
                </span>
              </div>
              <p className="mt-2.5 text-sm font-medium text-slate-700">
                {color.name}
              </p>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-10 flex justify-center">
          <a href="#contact" className={secondaryButton}>
            Book a free color consult
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Reviews" title="Homeowners love the results" />
        </Reveal>
        <Reveal className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <QuoteIcon className="h-9 w-9 text-blue-100" />
              <Stars className="mt-2 h-4 w-4" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 px-6 py-16 text-center shadow-2xl shadow-blue-900/30 sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
        <Reveal className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for walls you will love?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Free, fixed-price estimate within one business day. No pressure, no
            surprises.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get my free quote
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="tel:+15550102837"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneIcon className="h-4 w-4" /> (555) 010-2837
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const details = [
    { icon: PhoneIcon, text: "(555) 010-2837" },
    { icon: MailIcon, text: "hello@truecoat.co" },
    { icon: MapPinIcon, text: "Serving the greater metro area" },
    { icon: ClockIcon, text: "Mon-Sat, 7am-6pm" },
  ];
  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-24 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid lg:grid-cols-2">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-50">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Contact
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Get your free, no-pressure quote
              </h2>
              <p className="mt-4 text-blue-100">{CONTACT_LEAD}</p>

              <ul className="mt-8 space-y-3 text-sm">
                {details.map((detail) => (
                  <li key={detail.text} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                      <detail.icon className="h-4 w-4 text-white" />
                    </span>
                    {detail.text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
                <Stars />
                <p className="text-sm text-blue-50">
                  4.9 / 5 average across 600+ reviews
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const cols = [
    {
      title: "Services",
      links: ["Interior", "Exterior", "Commercial", "Cabinets & trim"],
      href: "#services",
    },
    {
      title: "Company",
      links: ["Our work", "Process", "Reviews", "Contact"],
      href: "#work",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold tracking-tight text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <RollerIcon className="h-5 w-5" />
              </span>
              <span className="text-lg">
                True<span className="text-blue-400">Coat</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Professional painters for homes and businesses across the area.
            </p>
            <div className="mt-5 flex gap-2">
              {[InstagramIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={col.href}
                      className="text-slate-400 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-blue-400" /> (555) 010-2837
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 text-blue-400" /> hello@truecoat.co
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-blue-400" /> Mon-Sat, 7am-6pm
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Get a free quote <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {year} TrueCoat Painting Co. All rights reserved.</p>
          <p>Licensed and insured · Lic. #PNT-558031</p>
        </div>
      </div>
    </footer>
  );
}

