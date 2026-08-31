import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  Chain,
  Chip,
  DocSlot,
  Flow,
  KeyLine,
  
  Scene,
  Statement,
} from "@/components/dash/present";

import { Timeline } from "@/components/dash/primitives";
import { BottleneckFunnel, PressureMap, RoutingSystem } from "@/components/dash/pressure";
import { JARA_CONCEPT_NOTE, zakiAssets } from "@/lib/zaki-assets";
import zakiWordmark from "@/assets/zaki-wordmark.png.asset.json";
import jaraOnDark from "@/assets/jara-logo-on-dark.png.asset.json";
import jaraOnLight from "@/assets/jara-logo-on-light.png.asset.json";
import {
  AlertTriangle,
  CalendarCheck,
  ChefHat,
  ClipboardCheck,
  ClipboardList,
  Eye,
  Hammer,
  MessageCircle,
  MessageSquare,
  Phone,
  PhoneCall,
  RefreshCw,
  Search,
  Store,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/presentation")({
  head: () => ({
    meta: [
      { title: "Zaki Grill — 90-Day Business Transformation Presentation | JARA AI" },
      {
        name: "description",
        content:
          "Client presentation for Zaki Grill: from founder-led success to a business built to scale. Founder story, owner dependency, the operating system and the 90-day roadmap.",
      },
      { property: "og:title", content: "Zaki Grill — From Founder-Led Success to a Business Built to Scale" },
      {
        property: "og:description",
        content: "A 90-day business transformation presentation prepared by JARA AI for Zaki Grill.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PresentationPage,
});

const SCENES: { id: string; label: string; chapter: number }[] = [
  { id: "s01", label: "Cover", chapter: 0 },
  { id: "s02", label: "Founder story", chapter: 0 },
  { id: "s03", label: "What Ahmed built", chapter: 0 },
  { id: "s04", label: "The pressure", chapter: 1 },
  { id: "s05", label: "The bottleneck", chapter: 1 },
  { id: "s06", label: "The system", chapter: 1 },
  { id: "s07", label: "What JARA does", chapter: 2 },
  { id: "s08", label: "Job descriptions", chapter: 2 },
  { id: "s09", label: "Recipe system", chapter: 2 },
  { id: "s10", label: "Assembly standards", chapter: 2 },
  { id: "s11", label: "SOP system", chapter: 2 },
  { id: "s12", label: "Training & certification", chapter: 2 },
  { id: "s13", label: "Physical + digital", chapter: 2 },
  { id: "s14", label: "The digital Zaki", chapter: 3 },
  { id: "s15", label: "Digital menu", chapter: 3 },
  { id: "s16", label: "Reputation engine", chapter: 3 },
  { id: "s17", label: "Catering & events", chapter: 3 },
  { id: "s18", label: "90-day roadmap", chapter: 4 },
  { id: "s19", label: "90 days later", chapter: 4 },
  { id: "s20", label: "Investment", chapter: 5 },
  { id: "s21", label: "Closing", chapter: 5 },
];

/** Slide 08 — the three real Location Manager job-description documents. */
const JOB_DOCS = [
  {
    label: "English",
    src: zakiAssets.jobDescriptionEnglish,
    alt: "Zaki Mediterranean Grill Location Manager job description, English version, developed with JARA AI",
  },
  {
    label: "العربية",
    src: zakiAssets.jobDescriptionArabic,
    alt: "Zaki Mediterranean Grill Location Manager job description, Arabic version, developed with JARA AI",
  },
  {
    label: "Español",
    src: zakiAssets.jobDescriptionSpanish,
    alt: "Zaki Mediterranean Grill Location Manager job description, Spanish version, developed with JARA AI",
  },
] as const;

function CurveArrow() {
  return (
    <svg viewBox="0 0 64 24" className="h-6 w-12 shrink-0" aria-hidden>
      <path
        d="M2 16 C 16 4, 40 4, 56 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M50 8 L 58 13.5 L 49 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JobDescriptions() {
  const steps = ["Hire", "Role defined", "Train", "Certify", "Manage"];
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-3">
        {JOB_DOCS.map((doc) => (
          <figure key={doc.label} className="flex flex-col">
            <figcaption className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-border-strong" aria-hidden />
              <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-espresso">
                {doc.label}
              </span>
            </figcaption>
            <div className="flex flex-1 items-center rounded-lg border border-border bg-background p-2.5 shadow-lift sm:p-3">
              <img
                src={doc.src}
                alt={doc.alt}
                className="w-full rounded-md object-contain"
                style={{ aspectRatio: "1447/1080" }}
                loading="lazy"
              />
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-gold">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <span className="rounded-md border border-primary/30 bg-sage-soft/65 px-4 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-espresso sm:text-xs">
              {s}
            </span>
            {i < steps.length - 1 ? <CurveArrow /> : null}
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-primary/25 bg-sage-soft/70 px-6 py-10 text-center sm:px-12 sm:py-14">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          The question changes from
        </p>
        <p className="mt-4 font-display text-2xl font-bold uppercase leading-[1.2] tracking-[0.02em] text-espresso sm:text-4xl">
          “Ahmed, what should I do?”
        </p>
        <p className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold">to</p>
        <p className="mt-4 font-display text-2xl font-bold uppercase leading-[1.2] tracking-[0.02em] text-espresso sm:text-4xl">
          “This is my responsibility.”
        </p>
        <p className="mx-auto mt-8 max-w-3xl text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
          Location Manager • Head Chef • Prep Cook • Line Cook • Food Truck Lead • Service Team
        </p>
      </div>
    </div>
  );
}



const CHAPTERS = [
  "01 Story",
  "02 Pressure",
  "03 System",
  "04 Growth",
  "05 90 Days",
  "06 Partnership",
];

/* ---------- 02 · Founder journey (illustrated) ---------- */

function FlagPS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <rect width="60" height="13.34" fill="#1b1b18" />
      <rect y="13.34" width="60" height="13.33" fill="#f7f4ec" />
      <rect y="26.67" width="60" height="13.33" fill="#177e66" />
      <path d="M0 0 L26 20 L0 40 Z" fill="#9c2b2b" />
    </svg>
  );
}

function FlagUS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <rect width="60" height="40" fill="#f7f4ec" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 40) / 13} width="60" height={40 / 13} fill="#9c2b2b" />
      ))}
      <rect width="26" height={(40 / 13) * 7} fill="#2c3e57" />
    </svg>
  );
}

const journeySteps = [
  {
    key: "palestine",
    title: "Palestine",
    caption: "The beginning",
    size: 78,
    x: 5,
    y: 60,
  },
  {
    key: "usa",
    title: "United States · Columbus",
    caption: "Starts again",
    size: 86,
    x: 23,
    y: 34,
  },
  {
    key: "food",
    title: "Food",
    caption: "Learns · works · builds",
    size: 94,
    x: 41,
    y: 64,
  },
  {
    key: "trucks",
    title: "Food trucks",
    caption: "Customers follow",
    size: 104,
    x: 59,
    y: 30,
  },
  {
    key: "locations",
    title: "Permanent locations",
    caption: "The business grows",
    size: 114,
    x: 76.5,
    y: 58,
  },
  {
    key: "today",
    title: "Zaki today",
    caption: "",
    size: 150,
    x: 90,
    y: 22,
  },
] as const;

function MilestoneMark({ step }: { step: (typeof journeySteps)[number] }) {
  const last = step.key === "today";
  return (
    <div className="flex flex-col items-center text-center">
      <div
        style={{ width: step.size, height: step.size }}
        className={cn(
          "flex items-center justify-center rounded-full",
          last
            ? "border-2 border-primary/40 bg-primary/10 shadow-lift"
            : "border border-sand/80 bg-card/80 shadow-card",
        )}
      >
        {step.key === "palestine" ? (
          <FlagPS className="w-1/2 rounded-[2px] shadow-sm" />
        ) : step.key === "usa" ? (
          <div className="flex flex-col items-center gap-1">
            <FlagUS className="w-10 rounded-[2px] shadow-sm" />
            <MapPin className="h-4 w-4 text-primary" strokeWidth={1.8} />
          </div>
        ) : step.key === "food" ? (
          <UtensilsCrossed className="h-9 w-9 text-espresso" strokeWidth={1.4} />
        ) : step.key === "trucks" ? (
          <Truck className="h-11 w-11 text-espresso" strokeWidth={1.4} />
        ) : step.key === "locations" ? (
          <Store className="h-12 w-12 text-espresso" strokeWidth={1.4} />
        ) : (
          <img src={zakiWordmark.url} alt="Zaki Grill" className="w-[68%]" />
        )}
      </div>
      <p
        className={cn(
          "mt-3 font-display font-bold uppercase leading-tight tracking-[0.04em] text-espresso",
          last ? "whitespace-nowrap text-lg sm:text-2xl" : "text-[0.8125rem] sm:text-sm",
        )}
      >
        {step.title}
      </p>
      {step.caption ? (
        <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {step.caption}
        </p>
      ) : null}
    </div>
  );
}

function FounderJourney() {
  return (
    <div className="-mt-2">
      {/* Illustrated path — large screens */}
      <div className="relative hidden h-[30rem] w-full lg:block">
        <svg
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <path
            d="M60,248 C130,196 176,146 246,158 C316,170 350,286 416,262 C482,238 520,120 586,138 C652,156 692,244 762,230 C832,216 852,152 900,100"
            fill="none"
            stroke="var(--color-primary, #177e66)"
            strokeOpacity="0.45"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="9 9"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M900,100 C956,170 968,300 916,392"
            fill="none"
            stroke="#b08a3e"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M898,352 L916,392 L938,360"
            fill="none"
            stroke="#b08a3e"
            strokeOpacity="0.8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {journeySteps.map((s) => (
          <div
            key={s.key}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            <MilestoneMark step={s} />
          </div>
        ))}
      </div>

      {/* Stacked fallback — small screens */}
      <div className="flex flex-col items-center gap-5 lg:hidden">
        {journeySteps.map((s, i) => (
          <div key={s.key} className="flex flex-col items-center">
            <MilestoneMark step={s} />
            {i < journeySteps.length - 1 ? (
              <span className="mt-3 text-lg text-gold" aria-hidden>
                ↓
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 03 · Foundation collage ---------- */

/** Hand-drawn feeling connector. */
function Squiggle({
  className,
  d = "M2 40 C 60 4, 150 78, 238 26",
  label,
}: {
  className?: string;
  d?: string;
  label?: string;
}) {
  return (
    <div className={cn("pointer-events-none select-none", className)} aria-hidden>
      <svg viewBox="0 0 240 80" className="h-14 w-full overflow-visible">
        <path
          d={d}
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="7 8"
        />
        <path
          d="M232 20 L239 26 L231 32"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.65"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {label ? (
        <p className="-mt-3 text-center font-display text-[0.7rem] italic tracking-[0.08em] text-gold">
          {label}
        </p>
      ) : null}
    </div>
  );
}

/** Simplified Columbus-area illustration with the two permanent locations. */
function ColumbusMap() {
  return (
    <svg viewBox="0 0 420 460" className="h-full w-full" role="img" aria-label="Simplified Columbus area map showing Budd Dairy and Worthington locations">
      <rect width="420" height="460" fill="var(--secondary)" />
      {/* soft abstract land mass */}
      <path
        d="M40 60 C 130 20, 300 30, 380 90 C 400 190, 372 300, 330 400 C 230 440, 120 430, 50 380 C 20 280, 18 150, 40 60 Z"
        fill="color-mix(in oklab, var(--primary) 8%, transparent)"
        stroke="color-mix(in oklab, var(--primary) 25%, transparent)"
        strokeWidth="1.5"
      />
      {/* abstract river */}
      <path
        d="M150 30 C 175 130, 130 220, 165 320 C 180 390, 160 420, 150 440"
        fill="none"
        stroke="color-mix(in oklab, var(--primary) 22%, transparent)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* hand-drawn route between the two pins */}
      <path
        d="M212 150 C 275 205, 200 250, 232 316"
        fill="none"
        stroke="var(--gold)"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />
      {/* Worthington pin (north) */}
      <g transform="translate(212 150)">
        <circle r="30" fill="color-mix(in oklab, var(--primary) 12%, transparent)" />
        <path
          d="M0 8 C -13 -6, -18 -13, -18 -20 A18 18 0 0 1 18 -20 C 18 -13, 13 -6, 0 8 Z"
          fill="var(--primary)"
        />
        <circle cx="0" cy="-20" r="6" fill="var(--card)" />
      </g>
      <text x="248" y="140" className="font-display" fontSize="21" fontWeight="700" fill="var(--foreground)" letterSpacing="1">
        WORTHINGTON
      </text>
      <text x="248" y="162" fontSize="13" fill="var(--muted-foreground)" letterSpacing="1.5">
        NORTH COLUMBUS
      </text>
      {/* Budd Dairy pin (central) */}
      <g transform="translate(232 316)">
        <circle r="36" fill="color-mix(in oklab, var(--primary) 12%, transparent)" />
        <path
          d="M0 10 C -16 -7, -22 -16, -22 -24 A22 22 0 0 1 22 -24 C 22 -16, 16 -7, 0 10 Z"
          fill="var(--primary)"
        />
        <circle cx="0" cy="-24" r="7.5" fill="var(--card)" />
      </g>
      <text x="60" y="380" className="font-display" fontSize="23" fontWeight="700" fill="var(--foreground)" letterSpacing="1">
        BUDD DAIRY
      </text>
      <text x="60" y="402" fontSize="13" fill="var(--muted-foreground)" letterSpacing="1.5">
        1086 N 4TH ST
      </text>
    </svg>
  );
}

function StatOverlay({
  value,
  title,
  note,
}: {
  value: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex items-end gap-4">
      <span className="font-display text-6xl font-extrabold leading-none text-background drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-8xl">
        {value}
      </span>
      <span className="pb-2">
        <span className="block font-display text-lg font-bold uppercase leading-tight tracking-[0.14em] text-background sm:text-2xl">
          {title}
        </span>
        {note ? (
          <span className="mt-1 block text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-background/75">
            {note}
          </span>
        ) : null}
      </span>
    </div>
  );
}

function EditorialCaption({
  title,
  sub,
  align = "left",
}: {
  title: ReactNode;
  sub: string;
  align?: "left" | "right";
}) {
  return (
    <div className={cn(align === "right" ? "text-right" : "text-left")}>
      <p className="font-display text-2xl font-bold uppercase leading-[1.05] tracking-[0.02em] text-espresso sm:text-4xl">
        {title}
      </p>
      <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold sm:text-xs">
        {sub}
      </p>
    </div>
  );
}

function FoundationCollage() {
  return (
    <div className="space-y-14">
      {/* Trucks + map */}
      <div className="grid items-stretch gap-8 lg:grid-cols-12">
        <figure className="relative overflow-hidden rounded-lg shadow-lift lg:col-span-7">
          <img
            src={zakiAssets.truckFleet}
            alt="Zaki Grill food trucks with the team in Columbus"
            className="h-full w-full object-cover"
            style={{ aspectRatio: "5/4" }}
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 via-espresso/40 to-transparent px-6 pb-7 pt-20">
            <StatOverlay value="4" title="Food trucks" note="Across Columbus" />
          </div>
        </figure>

        <div className="relative lg:col-span-5">
          <Squiggle
            className="absolute -left-16 top-16 hidden w-32 rotate-[8deg] lg:block"
            d="M2 60 C 70 10, 160 70, 238 30"
          />
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="flex items-end gap-4">
              <span className="font-display text-6xl font-extrabold leading-none text-primary sm:text-7xl">
                2
              </span>
              <span className="pb-2 font-display text-lg font-bold uppercase leading-tight tracking-[0.14em] text-espresso sm:text-2xl">
                Permanent
                <br />
                locations
              </span>
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-secondary/60">
              <div style={{ aspectRatio: "5/5" }} className="w-full">
                <ColumbusMap />
              </div>
            </div>
            <p className="font-display text-sm italic tracking-[0.06em] text-gold">
              Zaki is already expanding beyond one location.
            </p>
          </div>
        </div>
      </div>

      {/* Product + people */}
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <figure className="overflow-hidden rounded-lg shadow-lift lg:col-span-7 lg:-ml-6">
          <img
            src={zakiAssets.takeAwayContainers}
            alt="Zaki bowls, wraps and dips in branded take-away packaging"
            className="w-full object-cover"
            style={{ aspectRatio: "16/9" }}
            loading="lazy"
          />
        </figure>
        <div className="lg:col-span-5">
          <EditorialCaption
            title={
              <>
                A product
                <br />
                people want.
              </>
            }
            sub="Bowls • Wraps • Dips"
          />
          <Squiggle className="mt-6 w-40" d="M2 20 C 70 70, 150 6, 238 46" />
        </div>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:order-1">
          <EditorialCaption
            title={
              <>
                A team
                <br />
                already serving it.
              </>
            }
            sub="People • Kitchen • Service"
          />
        </div>
        <figure className="overflow-hidden rounded-lg shadow-card lg:col-span-7 lg:order-2 lg:-mr-6">
          <img
            src={zakiAssets.team}
            alt="Zaki team preparing bowls behind the counter"
            className="w-full object-cover"
            style={{ aspectRatio: "16/10" }}
            loading="lazy"
          />
        </figure>
      </div>

      {/* Editorial story moment */}
      <div className="relative py-4 text-center">
        <Squiggle
          className="mx-auto mb-2 w-44 opacity-80"
          d="M2 60 C 80 8, 160 8, 238 56"
        />
        <p className="mx-auto max-w-3xl font-display text-3xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-espresso sm:text-5xl">
          What Ahmed built
          <br />
          is already working.
        </p>
      </div>

      {/* Events / demand */}
      <div className="grid items-end gap-8 lg:grid-cols-12">
        <figure className="overflow-hidden rounded-lg shadow-lift lg:col-span-8">
          <img
            src={zakiAssets.truckEvent}
            alt="Zaki food truck serving a busy event crowd"
            className="w-full object-cover"
            style={{ aspectRatio: "16/9" }}
            loading="lazy"
          />
        </figure>
        <div className="lg:col-span-4">
          <EditorialCaption
            title={
              <>
                Demand
                <br />
                beyond the four walls.
              </>
            }
            sub="Events • Catering • Community"
          />
        </div>
      </div>

      {/* Conclusion */}
      <div className="rounded-lg border border-primary/25 bg-sage-soft/70 px-6 py-12 text-center sm:px-14 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-espresso/70 sm:text-base">
          Zaki doesn’t need to start over.
        </p>
        <p className="mt-5 font-display text-3xl font-bold uppercase leading-[1.06] tracking-[0.02em] text-espresso sm:text-5xl">
          It needs the systems
          <br />
          to support what Ahmed built.
        </p>
        <svg viewBox="0 0 300 20" className="mx-auto mt-6 h-5 w-56" aria-hidden>
          <path
            d="M4 13 C 70 3, 150 18, 296 7"
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.7"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* ---------- 07 · JARA builds the system around Zaki ---------- */

const solutionAreas = [
  {
    key: "operations",
    n: "01",
    title: "Operations",
    icon: ClipboardList,
    items: ["Recipes", "SOPs", "Opening + Closing", "Food Safety", "Quality Standards"],
    x: 168,
    y: 140,
    path: "M 300 190 C 400 230, 460 260, 500 292",
  },
  {
    key: "people",
    n: "02",
    title: "People",
    icon: UserCheck,
    items: ["Training", "Certification", "Chef Accountability", "Role Standards"],
    x: 550,
    y: 92,
    path: "M 550 176 C 550 220, 550 250, 550 268",
  },
  {
    key: "communication",
    n: "03",
    title: "Communication",
    icon: PhoneCall,
    items: ["Calls", "Customer Questions", "Inquiries", "Automated Routing", "Escalation"],
    x: 932,
    y: 140,
    path: "M 800 190 C 700 230, 640 260, 600 292",
  },
  {
    key: "growth",
    n: "04",
    title: "Growth",
    icon: TrendingUp,
    items: ["Catering", "CRM", "Digital Presence", "Reviews", "Customer Follow-Up"],
    x: 168,
    y: 410,
    path: "M 300 396 C 390 372, 452 348, 496 330",
  },
  {
    key: "control",
    n: "05",
    title: "Control",
    icon: Gauge,
    items: ["Reporting", "Management Checks", "Performance Visibility", "Exceptions", "Owner Approvals"],
    x: 932,
    y: 410,
    path: "M 800 396 C 710 372, 648 348, 604 330",
  },
] as const;

function AreaCard({
  area,
  compact,
}: {
  area: (typeof solutionAreas)[number];
  compact?: boolean;
}) {
  const Icon = area.icon;
  return (
    <div className={cn("flex flex-col gap-3", compact ? "w-full" : "w-[15.5rem]")}>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card shadow-card">
          <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
        </span>
        <div>
          <p className="font-mono text-[0.625rem] tracking-[0.22em] text-gold">{area.n}</p>
          <p className="font-display text-lg font-bold uppercase leading-none tracking-[0.08em] text-espresso">
            {area.title}
          </p>
        </div>
      </div>
      <div className="ml-[0.6rem] border-l border-border-strong/60 pl-4">
        <ul className="space-y-1.5">
          {area.items.map((item) => (
            <li
              key={item}
              className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function JaraHub({ small }: { small?: boolean }) {
  return (
    <div className="relative inline-block text-center">
      <span className="absolute -inset-10 rounded-full bg-sage-soft/60 blur-3xl" aria-hidden />
      <div
        className={cn(
          "relative rounded-full border-2 border-primary/40 bg-card shadow-lift",
          small ? "px-9 py-7" : "px-14 py-11",
        )}
      >
        <p
          className={cn(
            "font-display font-bold uppercase leading-none tracking-[0.1em] text-espresso",
            small ? "text-xl" : "text-3xl",
          )}
        >
          JARA <span className="text-gold">×</span> Zaki
        </p>
        <p className="mt-2 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-primary">
          Business Operating System
        </p>
      </div>
    </div>
  );
}

function AhmedOutput({ small }: { small?: boolean }) {
  return (
    <div className="text-center">
      <p
        className={cn(
          "font-display font-bold uppercase leading-none tracking-[0.14em] text-espresso",
          small ? "text-2xl" : "text-4xl",
        )}
      >
        Ahmed
      </p>
      <div className="mt-3 flex items-center justify-center gap-3">
        {["Leads", "Approves", "Grows"].map((w) => (
          <span
            key={w}
            className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs"
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

function JaraEcosystem() {
  return (
    <div className="space-y-10">
      {/* Desktop canvas */}
      <div className="relative hidden w-full lg:block" style={{ aspectRatio: "1100 / 660" }}>
        <svg viewBox="0 0 1100 660" className="absolute inset-0 h-full w-full" aria-hidden>
          {solutionAreas.map((a) => (
            <path
              key={a.key}
              d={a.path}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />
          ))}
          {/* Hub → Ahmed */}
          <path
            d="M 550 392 C 550 460, 550 490, 550 528"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 540 514 L 550 536 L 560 514"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Hub */}
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2">
          <JaraHub />
        </div>

        {/* Areas */}
        {solutionAreas.map((a) => (
          <div
            key={a.key}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(a.x / 1100) * 100}%`, top: `${(a.y / 660) * 100}%` }}
          >
            <AreaCard area={a} />
          </div>
        ))}

        {/* Ahmed */}
        <div className="absolute left-1/2 top-[91%] -translate-x-1/2 -translate-y-1/2">
          <AhmedOutput />
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="space-y-8 lg:hidden">
        <div className="flex justify-center">
          <JaraHub small />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {solutionAreas.map((a) => (
            <AreaCard key={a.key} area={a} compact />
          ))}
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-lg text-gold" aria-hidden>
            ↓
          </span>
          <AhmedOutput small />
        </div>
      </div>

      {/* Bottom statement */}
      <div className="rounded-lg border border-primary/25 bg-sage-soft/70 px-6 py-10 text-center sm:px-12 sm:py-14">
        <p className="font-display text-2xl font-bold uppercase leading-[1.1] tracking-[0.02em] text-espresso sm:text-4xl">
          Ahmed leads.
          <br />
          The system handles the routine.
        </p>
        <p className="mt-5 font-display text-lg font-bold uppercase leading-[1.2] tracking-[0.04em] text-primary sm:text-2xl">
          Minimal unnecessary involvement. Maximum operational efficiency.
        </p>
      </div>
    </div>
  );
}


function PresentationPage() {
  const [active, setActive] = useState(0);
  const [presentMode, setPresentMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(SCENES.length - 1, index));
    const target = SCENES[clamped];
    if (!target) return;
    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(clamped);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.getAttribute("data-scene");
        const idx = SCENES.findIndex((s) => s.id === id);
        if (idx >= 0) setActive(idx);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4] },
    );
    document.querySelectorAll("[data-scene]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [presentMode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") goTo(active + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") goTo(active - 1);
      if (e.key === "Escape") setPresentMode(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const activeChapter = SCENES[active]?.chapter ?? 0;
  const progress = useMemo(() => ((active + 1) / SCENES.length) * 100, [active]);

  const body = (
    <div ref={scrollRef}>
      {/* Navigator */}
      <div
        className={cn(
          "sticky z-40 border-b border-border bg-background/95 backdrop-blur",
          presentMode ? "top-0" : "top-[7.25rem]",
        )}
      >
        <div className="mx-auto flex max-w-[76rem] flex-wrap items-center gap-3 px-5 py-3 sm:px-10">
          <img src={zakiWordmark.url} alt="Zaki Grill" className="h-6 w-auto" />
          <div className="hidden flex-1 items-center gap-1 lg:flex">
            {CHAPTERS.map((c, i) => {
              const first = SCENES.findIndex((s) => s.chapter === i);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => goTo(first)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-colors",
                    activeChapter === i
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground">
              {String(active + 1).padStart(2, "0")} / {SCENES.length}
            </span>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => setPresentMode((v) => !v)}
              className="rounded-md border border-sand bg-gold-soft/70 px-3 py-1.5 text-xs font-semibold text-espresso"
            >
              {presentMode ? "Exit" : "Present"}
            </button>
          </div>
        </div>
        <div className="h-0.5 w-full bg-border/70">
          <div
            className="h-0.5 bg-primary transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 01 — COVER */}
      <section
        id="s01"
        data-scene="s01"
        className="relative scroll-mt-32 overflow-hidden bg-foreground"
      >
        <div className="mx-auto grid max-w-[76rem] items-center gap-10 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <img
              src={zakiWordmark.url}
              alt="Zaki Grill"
              className="h-[6rem] w-auto sm:h-[7rem]"
            />

            <h1 className="mt-10 font-display text-4xl font-bold leading-[1.05] text-background sm:text-6xl">
              From founder-led success
              <br />
              to a business built to scale
            </h1>
            <p className="mt-6 text-base font-medium uppercase tracking-[0.24em] text-sage">
              90-Day Business Transformation
            </p>
            <div className="mt-12 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-background/70">
                Prepared by
              </span>
              <img src={jaraOnDark.url} alt="JARA AI" className="h-6 w-auto" />
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-background/15">
              <img
                src={zakiAssets.ahmedTruckHero}
                alt="Ahmed, founder of Zaki Grill, in front of a Zaki food truck"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-[0.6875rem] uppercase tracking-[0.18em] text-background/70">
              Ahmed · Founder, Zaki Grill
            </p>
          </div>
        </div>
      </section>

      {/* 02 — FOUNDER STORY */}
      <Scene
        id="s02"
        number="02"
        kicker="The founder"
        title={
          <span className="block font-display text-4xl font-bold uppercase leading-[1.03] tracking-[0.01em] sm:text-[3.5rem]">
            Built from the ground up.
          </span>
        }
        lead="Ahmed did not inherit a restaurant group. He built one — through food, persistence, customer relationships and entrepreneurship."
        tone="cream"
      >
        <FounderJourney />
        <div className="relative mt-4">
          <div className="rounded-lg border border-primary/25 bg-sage-soft/70 px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-[0.02em] text-espresso sm:text-6xl">
              The next chapter
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-espresso/70 sm:text-base">
              Systems + People + Control + Scale
            </p>
          </div>
        </div>
      </Scene>


      {/* 03 — WHAT AHMED HAS BUILT */}
      <Scene
        id="s03"
        number="03"
        kicker="The foundation"
        title={
          <span className="block text-[1.22em] font-extrabold">
            The foundation is already there.
          </span>
        }
        lead={
          <span className="text-base font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-lg">
            Real locations. Real food. Real people. Real demand.
          </span>
        }
        tone="white"
      >
        <FoundationCollage />
      </Scene>


      {/* 04 — THE PRESSURE */}
      <Scene
        id="s04"
        number="04"
        kicker="Current state"
        title="Zaki grew faster than its systems."
        titleClassName="max-w-5xl text-[2.5rem] sm:text-[3.5rem]"
        tone="cream"
      >
        <PressureMap />
        <div className="mt-10">
          <Statement tone="gold">Everything still comes back to Ahmed.</Statement>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Growth created more opportunity — and more pressure on one person.
          </p>
        </div>
      </Scene>

      {/* 05 — THE BOTTLENECK */}
      <Scene
        id="s05"
        number="05"
        kicker="Communication"
        title={
          <>
            One phone number.
            <br />
            Multiple operations.
            <br />
            One person answering.
          </>
        }
        titleClassName="max-w-5xl text-[2.25rem] sm:text-[3.5rem]"
        tone="dark"
      >
        <BottleneckFunnel />
        <div className="mt-10">
          <Statement tone="light">
            Every question that reaches Ahmed
            <br />
            is time taken from leading the business.
          </Statement>
          <p className="mt-5 text-center text-sm text-background/70">
            The demand isn&apos;t the problem. The routing is.
          </p>
        </div>
      </Scene>

      {/* 06 — THE SYSTEM / REVEAL */}
      <Scene
        id="s06"
        number="06"
        kicker="The system"
        title={
          <>
            Keep the number.
            <br />
            Change what happens behind it.
          </>
        }
        titleClassName="max-w-5xl text-[2.25rem] sm:text-[3.25rem]"
        tone="white"
      >
        <RoutingSystem />
        <div className="mt-12">
          <Statement tone="green">
            Ahmed stays in control.
            <br />
            Without being the switchboard.
          </Statement>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Same number. Better system. Less interruption.
          </p>
        </div>
      </Scene>


      {/* 07 — JARA BUILDS THE SYSTEM AROUND ZAKI */}
      <Scene
        id="s07"
        number="07"
        kicker="The solution"
        title="JARA builds the system around Zaki."
        titleClassName="max-w-5xl text-[2.5rem] sm:text-[3.75rem]"
        lead="Ahmed stays in control — without being required for every task."
        tone="cream"
      >
        <JaraEcosystem />
      </Scene>

      {/* 08 — JOB DESCRIPTIONS: EVERY ROLE, CLEAR RESPONSIBILITY */}
      <Scene
        id="s08"
        number="08"
        kicker="People & roles"
        title="Every role. Clear responsibility."
        lead="JARA turns positions into defined roles — so employees know what they own, how they are measured and when to escalate."
        tone="white"
      >
        <JobDescriptions />
      </Scene>

      {/* 09 — OPERATIONS A: RECIPE SYSTEM */}
      <Scene
        id="s09"
        number="09"
        kicker="Operations A"
        title="Your recipes become Zaki's recipes."
        lead="Turn kitchen knowledge into documented, repeatable company standards."
        tone="cream"
      >
        <div className="grid items-start gap-5 lg:grid-cols-3">
          <DocSlot
            label="PALESTINIAN HUMMUS MASTER RECIPE"
            kind="document"
            ratio="1149/1369"
            src={zakiAssets.recipeHummus}
            alt="Zaki Palestinian hummus master production recipe card"
            note="Presentation example of the proposed Zaki recipe system."
          />
          <DocSlot
            label="CHICKEN SHAWARMA 10 LB BATCH RECIPE"
            kind="document"
            ratio="1149/1369"
            src={zakiAssets.recipeChickenShawarma}
            alt="Zaki chicken shawarma 10 lb batch marinade recipe card"
          />
          <DocSlot
            label="MEXICAN RICE BATCH RECIPE"
            kind="document"
            ratio="1149/1369"
            src={zakiAssets.recipeMexicanRice}
            alt="Zaki Mexican rice 5 lb batch recipe card"
          />
        </div>
        <div className="mt-6">
          <KeyLine
            items={[
              "Ingredients",
              "Batch quantities",
              "Equipment",
              "Method",
              "Control points",
              "Quality",
            ]}
          />
        </div>
        <div className="mt-10">
          <Statement tone="gold">Same recipe. Same result. Every location.</Statement>
        </div>
      </Scene>

      {/* 10 — OPERATIONS B: ASSEMBLY STANDARDS */}
      <Scene
        id="s10"
        number="10"
        kicker="Operations B"
        title={
          <>
            Employees don't guess.
            <br />
            They follow the Zaki standard.
          </>
        }
        tone="white"
      >
        <div className="grid items-start gap-5 lg:grid-cols-3">
          <DocSlot
            label="CHICKEN BOWL ASSEMBLY GUIDE"
            kind="document"
            ratio="1137/1383"
            src={zakiAssets.assemblyChickenBowl}
            alt="Zaki chicken rice bowl assembly cheat sheet"
          />
          <DocSlot
            label="CHICKEN SHAWARMA ASSEMBLY GUIDE — ARABIC"
            kind="document"
            ratio="1149/1369"
            src={zakiAssets.assemblyChickenShawarma}
            alt="Zaki chicken shawarma assembly cheat sheet (Arabic version)"
          />
          <DocSlot
            label="SUMMER SALATA / PRODUCT ASSEMBLY GUIDE"
            kind="document"
            ratio="1181/1331"
            src={zakiAssets.assemblySummerSalata}
            alt="Zaki summer salata with lamb assembly cheat sheet"
          />
        </div>

        <div className="mt-8">
          <Flow steps={["Portion", "Position", "Build", "Finish", "Serve"]} />
        </div>
        <p className="mt-6 text-center text-base text-muted-foreground">
          Visual station guides standardize portion, sequence and presentation.
        </p>
      </Scene>

      {/* 11 — OPERATIONS C: SOP SYSTEM */}
      <Scene
        id="s11"
        number="11"
        kicker="Operations C"
        title="Every location opens, operates and closes the Zaki way."
        tone="cream"
      >
        <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Opening &amp; closing procedures
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          <DocSlot
            label="FOOD TRUCK OPENING SOP"
            kind="document"
            ratio="1536/1024"
            src={zakiAssets.sopTruckOpening}
            alt="Zaki food truck opening procedure SOP"
          />
          <DocSlot
            label="FOOD TRUCK CLOSING PROCEDURE SOP"
            kind="document"
            ratio="1536/1024"
            src={zakiAssets.sopTruckClosing}
            alt="Zaki food truck closing procedure SOP"
          />
          <DocSlot
            label="BUDD DAIRY OPENING PROCEDURE"
            kind="document"
            ratio="1536/1024"
            src={zakiAssets.sopBuddOpening}
            alt="Zaki Budd Dairy opening procedure SOP"
          />
          <DocSlot
            label="BUDD DAIRY CLOSING PROCEDURE"
            kind="document"
            ratio="1536/1024"
            src={zakiAssets.sopBuddClosing}
            alt="Zaki Budd Dairy closing procedure SOP"
          />
        </div>

        <p className="mb-4 mt-12 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Operational control standards
        </p>
        <div className="mx-auto grid max-w-3xl items-start gap-5 sm:grid-cols-2">
          <DocSlot
            label="FOOD SAFETY & TEMPERATURE CONTROL SOP"
            kind="document"
            ratio="1024/1536"
            src={zakiAssets.sopFoodSafety}
            alt="Zaki food safety and temperature control SOP"
          />
          <DocSlot
            label="RECEIVING & INVENTORY SOP"
            kind="document"
            ratio="1024/1536"
            src={zakiAssets.sopReceivingInventory}
            alt="Zaki receiving and inventory SOP"
          />
        </div>
        <div className="mt-8">
          <Flow steps={["Open", "Operate", "Verify", "Close", "Report"]} />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Presentation examples of the operating infrastructure JARA proposes to develop and
          validate with Zaki during the engagement.
        </p>
        <div className="mt-10">
          <Statement tone="gold">
            Systems replace memory.
            <br />
            Managers verify execution.
          </Statement>
        </div>
      </Scene>


      {/* 12 — OPERATIONS D: TRAINING & CERTIFICATION */}
      <Scene
        id="s12"
        number="12"
        kicker="Operations D — Training"
        title="Training turns standards into habits."
        lead="Every employee learns the same system, demonstrates the same standards and earns the right to work independently."
        tone="cream"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <DocSlot
            label="NEW EMPLOYEE TRAINING & CERTIFICATION"
            kind="document"
            ratio="1024/1536"
            src={zakiAssets.trainingCertification}
            alt="Zaki new employee training and certification system document"
            dominant
          />
          <div className="space-y-8">
            <Chain
              highlightLast
              steps={[
                "New hire",
                "Learn",
                "Watch",
                "Practice",
                "Demonstrate",
                "Certify",
                "Work independently",
              ]}
            />
            <div className="space-y-3">
              <Chip tone="green">Consistent execution</Chip>
              <Chip tone="gold">Faster onboarding</Chip>
              <Chip tone="warn">Less dependence on Ahmed</Chip>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Statement tone="gold">
            No employee works a station alone
            <br />
            until they are trained and certified.
          </Statement>
        </div>
      </Scene>


      {/* 13 — PHYSICAL + DIGITAL OPERATING SYSTEM */}
      <Scene
        id="s13"
        number="13"
        kicker="Operating system"
        title={
          <>
            One standard.
            <br />
            Available where the team needs it.
          </>
        }
        tone="white"
      >
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="eyebrow mb-3">On the line</p>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={zakiAssets.stationCheatSheets}
                alt="Physical Zaki station with six laminated assembly cheat sheets installed above a prep station"
                className="w-full object-contain"
                loading="lazy"
              />
              <figcaption className="px-4 py-3">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-foreground">
                  Physical station standards
                </p>
                <p className="mt-1 text-[0.6875rem] leading-relaxed text-muted-foreground">
                  Visual guidance available directly where the team works.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-3 lg:px-4">
            <span className="rounded-md border border-primary/30 bg-sage-soft/65 px-5 py-3 text-center font-display text-sm font-bold uppercase leading-tight tracking-[0.1em] text-espresso">
              One Zaki standard
              <br />↓<br />
              Every location
            </span>
          </div>
          <div>
            <p className="eyebrow mb-3">On phone &amp; tablet</p>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={zakiAssets.digitalOperationsMockup}
                alt="Zaki Digital Operations mockup showing the operating system on a tablet and mobile phone"
                className="w-full object-contain"
                loading="lazy"
              />
              <figcaption className="px-4 py-3">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-foreground">
                  Digital operations system
                </p>
                <p className="mt-1 text-[0.6875rem] leading-relaxed text-muted-foreground">
                  Training and operating knowledge available anywhere.
                </p>
                <p className="mt-1 text-[0.625rem] leading-relaxed text-muted-foreground/70">
                  JARA concept / proposed Zaki operations system.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-8 grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            "Recipes",
            "Assembly",
            "Opening",
            "Closing",
            "Food safety",
            "Training",
            "Inventory",
            "Food trucks",
            "Catering",
          ].map((c) => (
            <Chip key={c} tone="green">
              {c}
            </Chip>
          ))}
        </div>
      </Scene>


      {/* 14 — DIGITAL ZAKI */}
      <Scene id="s14"
        number="14"
        kicker="Digital"
        title={
          <>
            One brand.
            <br />
            One customer journey.
          </>
        }
        lead="The point is not a prettier website. The point is connecting the customer journey."
        tone="cream"
      >
        <div className="grid gap-8 lg:grid-cols-[45fr_55fr] lg:items-center">
          {/* Left column — customer journey */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-1">
              {[
                { label: "Discover", channels: ["Google", "Social", "Truck Locations"] },
                { label: "Website" },
                { label: "Menu" },
                { label: "Order", channels: ["Direct", "Delivery"] },
                { label: "Catering" },
                { label: "CRM", channels: ["Email / SMS"] },
                { label: "Follow-up" },
                { label: "Reviews" },
                { label: "Repeat Business", final: true },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "min-w-[9.5rem] rounded-md px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.12em] sm:text-sm",
                        step.final
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-card text-foreground shadow-card",
                      )}
                    >
                      {step.label}
                    </div>
                    {i < arr.length - 1 ? (
                      <span className="py-1 text-base text-gold sm:text-lg" aria-hidden>
                        ↓
                      </span>
                    ) : null}
                  </div>
                  {step.channels ? (
                    <div className="flex flex-wrap gap-2">
                      {step.channels.map((c) => (
                        <span
                          key={c}
                          className="rounded border border-sand bg-gold-soft/50 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-espresso"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="sr-only">No secondary channels</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — unified digital experience visual */}
          <div className="flex flex-col">
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={zakiAssets.zakiWebsitePrototype}
                alt="JARA-created Zaki website prototype showing navigation, hero headline, call-to-action buttons and hero food image"
                style={{ aspectRatio: "16/10" }}
                className="w-full object-contain"
                loading="lazy"
              />
              <figcaption className="px-4 py-3">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-foreground">
                  Zaki Digital Customer Experience
                </p>
                <p className="mt-1 text-[0.6875rem] leading-relaxed text-muted-foreground">
                  JARA concept prototype — proposed connected Zaki customer experience.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Scene>

      {/* 15 — DIGITAL MENU */}
      <Scene
        id="s15"
        number="15"
        kicker="Ahmed's idea"
        title={
          <>
            Your digital menu idea.
            <br />
            Brought to life.
          </>
        }
        tone="white"
      >
        <p className="-mt-6 mb-10 font-display text-xl font-bold uppercase tracking-[0.06em] text-espresso sm:text-2xl">
          Let customers see the food before they order it.
        </p>
        <figure className="overflow-hidden rounded-lg border border-sand bg-secondary/40 shadow-card">
          <img
            src={zakiAssets.menuTvScreen}
            alt="Three-product Zaki digital menu displayed on in-store TV screens"
            className="w-full object-contain"
            loading="lazy"
          />
        </figure>
        <p className="mt-2 text-[0.6875rem] leading-relaxed text-muted-foreground">
          JARA concept / proposed Zaki digital menu.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { src: zakiAssets.productChickenBowl, label: "Chicken Bowl" },
            { src: zakiAssets.productGyroFries, label: "Loaded Gyro Fries" },
            { src: zakiAssets.productFalafelWrap, label: "Revenge of the Falafel" },
          ].map((p) => (
            <figure
              key={p.label}
              className="overflow-hidden rounded-lg border border-sand bg-card shadow-card"
            >
              <img
                src={p.src}
                alt={p.label}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="px-3 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-espresso">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6">
          <Flow steps={["See the food", "Understand the build", "Order with confidence"]} tone="gold" />
        </div>

        <div className="mt-8">
          <Statement tone="green">Made fresh. Layer by layer.</Statement>
        </div>
      </Scene>


      {/* 16 — REPUTATION */}
      <Scene id="s16"
        number="16"
        kicker="Reputation"
        title="Happy customers should become great Google reviews."
        lead="JARA makes the follow-up automatic."
        tone="white"
      >
        <div className="relative">
          {/* organic connecting strokes */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M330 150 C 400 60, 470 60, 545 140"
              fill="none"
              stroke="currentColor"
              className="text-gold"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1 0"
            />
            <path d="M534 128 L547 143 L529 148" fill="none" stroke="currentColor" className="text-gold" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M700 240 C 780 330, 850 330, 915 250"
              fill="none"
              stroke="currentColor"
              className="text-primary/70"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M902 268 L917 252 L921 271" fill="none" stroke="currentColor" className="text-primary/70" strokeWidth="3" strokeLinecap="round" />
          </svg>

          <div className="relative grid items-center gap-10 lg:grid-cols-3 lg:gap-6">
            {/* 1 — happy customer */}
            <figure className="relative lg:mt-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-sand bg-card shadow-lift">
                <img
                  src={zakiAssets.takeAwayOrder}
                  alt="A guest enjoying a Zaki meal"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption
                className="mt-4 text-center text-xl text-espresso"
                style={{ fontFamily: '"Segoe Script", "Bradley Hand", "Snell Roundhand", cursive' }}
              >
                Great experience
              </figcaption>
            </figure>

            {/* 2 — quick follow-up phone */}
            <div className="relative flex justify-center lg:-mt-4">
              <div className="w-[16rem] rounded-[2.25rem] border-[6px] border-espresso bg-espresso p-2 shadow-lift">
                <div className="rounded-[1.75rem] bg-background px-5 pb-7 pt-5">
                  <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-border-strong" />
                  <div className="rounded-2xl rounded-bl-md bg-sage-soft/80 px-4 py-4 text-left">
                    <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      Zaki Grill
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-snug text-espresso">
                      Loved your Zaki experience?
                      <br />
                      Leave us a quick Google review ★
                    </p>
                  </div>
                  <div className="mt-4 rounded-full bg-primary px-4 py-2 text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                    Leave a review
                  </div>
                </div>
              </div>
              <span
                className="absolute -bottom-9 text-xl text-espresso"
                style={{ fontFamily: '"Segoe Script", "Bradley Hand", "Snell Roundhand", cursive' }}
              >
                Quick follow-up
              </span>
            </div>

            {/* 3 — google review */}
            <div className="relative lg:mt-10">
              <div className="rotate-[-1.5deg] rounded-2xl border border-border bg-card p-6 shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-espresso">
                    G
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Zaki Grill</p>
                    <p className="text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Google review
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-2xl tracking-[0.15em] text-gold">★★★★★</p>
                <p className="mt-3 font-display text-xl font-bold leading-snug text-espresso">
                  “Great food. Great experience.”
                </p>
              </div>
              <div className="absolute -bottom-4 -right-3 hidden rotate-[3deg] rounded-xl border border-border bg-secondary/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-card sm:block">
                ★★★★★
              </div>
              <p
                className="mt-8 text-center text-xl text-espresso"
                style={{ fontFamily: '"Segoe Script", "Bradley Hand", "Snell Roundhand", cursive' }}
              >
                5 stars
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <Statement tone="green">
            More reviews. Less work for Ahmed.
          </Statement>
          <p className="mt-4 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Automated by JARA
          </p>
        </div>
      </Scene>



      {/* 17 — CATERING */}
      <Scene id="s17"
        number="17"
        kicker="Growth"
        title="Turn catering inquiries into booked events."
        lead="Make it easy to inquire. Easy to quote. Easy to book."
        tone="cream"
      >
        {/* SECTION 1 — how leads enter */}
        <div className="relative">
          <svg
            className="pointer-events-none absolute inset-x-0 top-16 hidden h-40 w-full lg:block"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            aria-hidden
          >
            {[120, 360, 600, 840, 1080].map((x, i) => (
              <path
                key={x}
                d={`M${x} 20 C ${x} 110, ${600 + (i - 2) * 30} 110, 600 180`}
                fill="none"
                stroke="currentColor"
                className={i % 2 === 0 ? "text-gold/70" : "text-primary/50"}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            ))}
          </svg>

          <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Phone, label: "Phone call" },
              { icon: Globe, label: "Website" },
              { icon: Mail, label: "Email" },
              { icon: MessageCircle, label: "WhatsApp / SMS" },
              { icon: Instagram, label: "Social / digital" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-sand bg-card shadow-card">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.6} />
                </span>
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="relative mt-32 flex justify-center lg:mt-36">
            <div className="rounded-2xl border border-primary/30 bg-sage-soft/70 px-8 py-5 text-center shadow-card">
              <CalendarCheck className="mx-auto mb-2 h-7 w-7 text-primary" strokeWidth={1.6} />
              <p className="font-display text-lg font-bold uppercase tracking-[0.12em] text-espresso sm:text-xl">
                Catering inquiry system
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Flow steps={["Inquiry", "Package / quote", "Confirmation", "Event"]} tone="gold" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Every serious catering inquiry is captured, organized and followed up — without Ahmed
            having to remember it.
          </p>
        </div>

        {/* SECTION 2 — packages */}
        <div className="mt-20">
          <p className="mb-6 text-center font-display text-2xl font-bold uppercase tracking-[0.06em] text-espresso sm:text-3xl">
            Make catering easy to buy.
          </p>
          <figure className="overflow-hidden rounded-lg border border-sand bg-card shadow-lift">
            <img
              src={zakiAssets.cateringPackages}
              alt="Zaki catering packages concept: Zaki Express, Zaki Feast and Zaki Experience"
              className="w-full object-contain"
              loading="lazy"
            />
          </figure>
          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p className="text-[0.6875rem] leading-relaxed text-muted-foreground">
              {JARA_CONCEPT_NOTE}
            </p>
            <p
              className="rotate-[-1.5deg] text-center text-xl leading-snug text-espresso"
              style={{ fontFamily: '"Segoe Script", "Bradley Hand", "Snell Roundhand", cursive' }}
            >
              Customers choose the level.
              <br />
              Zaki builds the event.
            </p>
          </div>
        </div>

        {/* SECTION 3 — outcome */}
        <div className="mt-16">
          <Statement tone="green">
            More catering. Faster response. Less work for Ahmed.
          </Statement>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Structured and automated by
            </span>
            <img src={jaraOnLight.url} alt="JARA AI" className="h-4 w-auto opacity-80" />
          </div>
        </div>
      </Scene>



      {/* 18 — ROADMAP */}
      <Scene id="s18"
        number="18"
        kicker="90 days"
        title="90-day transformation roadmap"
        lead="Multiple workstreams move together — foundation, build and implementation overlap by design."
        tone="white"
      >
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {[
            { m: "Month 1", t: "Foundation" },
            { m: "Month 2", t: "Build + implement" },
            { m: "Month 3", t: "Train + automate + stabilize" },
          ].map((x) => (
            <div key={x.m} className="rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-espresso">{x.m}</p>
              <p className="mt-1.5 font-display text-lg font-bold">{x.t}</p>
            </div>
          ))}
        </div>
        <Timeline
          columns={["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"]}
          rows={[
            { label: "Discovery & validation", start: 1, span: 2, tone: "gold", note: "Complimentary" },
            { label: "Recipes & menu audit", start: 2, span: 4 },
            { label: "Operational mapping", start: 1, span: 3 },
            { label: "Roles & responsibilities", start: 3, span: 3 },
            { label: "Communication mapping", start: 2, span: 3 },
            { label: "Digital audit", start: 2, span: 3 },
            { label: "SOP library", start: 4, span: 5 },
            { label: "Training system", start: 6, span: 4 },
            { label: "Staffing tools", start: 5, span: 4 },
            { label: "Digital alignment", start: 5, span: 5 },
            { label: "CRM structure", start: 6, span: 4 },
            { label: "Catering workflow", start: 6, span: 5 },
            { label: "Management controls", start: 8, span: 4 },
            { label: "Team training", start: 9, span: 3 },
            { label: "Communication routing", start: 9, span: 3 },
            { label: "Review engine", start: 9, span: 3 },
            { label: "Reporting & testing", start: 10, span: 3 },
            { label: "Handover", start: 11, span: 2, tone: "green" },
          ]}
        />
      </Scene>

      {/* 19 — 90 DAYS LATER */}
      <Scene
        id="s19"
        number="19"
        kicker="Ahmed's new role"
        title="90 days later."
        lead="Same Ahmed. Different role."
        tone="cream"
      >
        <AhmedTransformation />
        <div className="mt-14 rounded-lg border border-primary/25 bg-sage-soft/60 px-6 py-14 text-center sm:px-14 sm:py-20">
          <p className="mx-auto max-w-4xl font-display text-3xl font-bold uppercase leading-[1.12] tracking-[0.02em] text-espresso sm:text-5xl">
            Minimal involvement.
            <br />
            Maximum efficiency.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-espresso/70 sm:text-lg">
            Ahmed stays in control — without having to personally carry the operation.
          </p>
        </div>
      </Scene>

      {/* 20 — INVESTMENT */}
      <InvestmentScene />

      {/* 21 — CLOSING */}
      <section
        id="s21"
        data-scene="s21"
        className="scroll-mt-32 bg-foreground px-5 py-28 sm:px-10 sm:py-40"
      >
        <div className="mx-auto max-w-[64rem] text-center">
          <div className="flex items-center justify-center gap-5">
            <span className="inline-flex rounded-md bg-background px-4 py-2.5">
              <img src={zakiWordmark.url} alt="Zaki Grill" className="h-8 w-auto" />
            </span>
            <span className="text-background/35">×</span>
            <img src={jaraOnDark.url} alt="JARA AI" className="h-6 w-auto" />
          </div>

          <h2 className="mt-16 font-display text-3xl font-bold uppercase leading-[1.14] tracking-[0.01em] text-background sm:text-[3.25rem]">
            You built Zaki.
            <br />
            Now let&rsquo;s build the system
            <br />
            that lets you lead it.
          </h2>

          <p className="mt-12 font-display text-xl font-bold uppercase leading-[1.2] tracking-[0.06em] text-background/80 sm:text-2xl">
            Minimal involvement.
            <br />
            <span className="text-sage">Maximum efficiency.</span>
          </p>

          <p className="mt-16 text-xs font-medium uppercase tracking-[0.28em] text-background/45">
            Zaki × JARA AI · 90-Day Business Transformation
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            {["Agree", "Sign", "Kickoff"].map((s, i) => (
              <div key={s} className="flex items-center gap-5 sm:gap-8">
                <div className="text-center">
                  <p className="font-mono text-[0.6875rem] tracking-[0.24em] text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-base font-bold uppercase tracking-[0.18em] text-background sm:text-lg">
                    {s}
                  </p>
                </div>
                {i < 2 ? (
                  <span className="text-background/30" aria-hidden>
                    &rarr;
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  if (presentMode) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
        {body}
      </div>
    );
  }

  return <div className="-mx-5 -mb-20 -mt-10 sm:-mx-8">{body}</div>;
}

/** Slide 19 — BEFORE → AFTER: Ahmed's role after the transformation. */
const NOISE = [
  { icon: PhoneCall, label: "Calls", pos: "left-0 top-2" },
  { icon: Users, label: "Staff questions", pos: "right-0 top-0" },
  { icon: ChefHat, label: "Kitchen issues", pos: "left-1 top-1/3" },
  { icon: ClipboardList, label: "Instructions", pos: "right-0 top-1/3" },
  { icon: Truck, label: "Truck questions", pos: "left-0 bottom-8" },
  { icon: UtensilsCrossed, label: "Catering inquiries", pos: "right-1 bottom-8" },
  { icon: AlertTriangle, label: "Problems", pos: "left-1/2 -translate-x-1/2 bottom-0" },
] as const;

function AhmedTransformation() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
      {/* TODAY */}
      <div>
        <p className="mb-6 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-espresso/55">
          Today
        </p>
        <div className="relative mx-auto h-[24rem] w-full max-w-sm">
          <svg
            viewBox="0 0 320 384"
            className="absolute inset-0 h-full w-full text-espresso/25"
            aria-hidden
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
              <path d="M46 44 C 100 80, 120 130, 140 176" />
              <path d="M274 36 C 230 80, 205 130, 182 172" />
              <path d="M40 140 C 80 152, 108 172, 132 190" />
              <path d="M280 140 C 240 152, 212 172, 190 190" />
              <path d="M46 316 C 92 288, 116 246, 136 212" />
              <path d="M274 316 C 228 288, 206 246, 186 212" />
              <path d="M160 356 C 160 310, 160 260, 160 226" />
            </g>
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sand bg-gold-soft px-7 py-6 text-center shadow-lift">
            <p className="font-display text-xl font-bold uppercase tracking-[0.14em] text-espresso">
              Ahmed
            </p>
            <p className="mt-1 max-w-[8.5rem] text-[0.625rem] font-semibold uppercase leading-snug tracking-[0.14em] text-espresso/60">
              In the middle of everything
            </p>
          </div>
          {NOISE.map((n) => (
            <div
              key={n.label}
              className={cn(
                "absolute flex items-center gap-1.5 rounded-full border border-border bg-card/95 px-3 py-1.5 shadow-card",
                n.pos,
              )}
            >
              <n.icon className="h-3.5 w-3.5 shrink-0 text-espresso/70" aria-hidden />
              <span className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-foreground">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TRANSITION */}
      <div className="flex flex-col items-center gap-3">
        <span className="font-display text-sm font-bold uppercase tracking-[0.28em] text-gold">
          90 days
        </span>
        <svg
          viewBox="0 0 120 40"
          className="h-10 w-28 text-gold lg:h-24 lg:w-16 lg:rotate-0"
          aria-hidden
        >
          <path
            d="M4 28 C 40 4, 78 4, 108 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M108 20 L 99 13 M108 20 L 98 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>

      {/* AFTER */}
      <div>
        <p className="mb-6 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-primary">
          After the transformation
        </p>
        <div className="relative mx-auto flex h-[24rem] w-full max-w-sm flex-col items-center justify-center gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {["Lead", "Grow", "Decide", "Relationships", "Expand"].map((r) => (
              <span
                key={r}
                className="rounded-full border border-primary/25 bg-sage-soft/70 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-espresso"
              >
                {r}
              </span>
            ))}
          </div>
          <div className="rounded-md border border-sand bg-gold-soft px-9 py-4 text-center shadow-lift">
            <p className="font-display text-xl font-bold uppercase tracking-[0.16em] text-espresso">
              Ahmed
            </p>
            <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-espresso/60">
              Leads the business
            </p>
          </div>
          <span className="-my-2 font-display text-sm italic tracking-[0.06em] text-gold">“Finally — time to lead.”</span>
          <svg viewBox="0 0 240 60" className="h-14 w-full text-primary/40" aria-hidden>
            <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
              <path d="M120 2 C 120 22, 60 22, 26 56" />
              <path d="M120 2 C 120 24, 90 28, 74 56" />
              <path d="M120 2 L 120 56" />
              <path d="M120 2 C 120 24, 150 28, 166 56" />
              <path d="M120 2 C 120 22, 180 22, 214 56" />
            </g>
          </svg>
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
            {["Operations", "People", "Customers", "Catering", "Digital"].map((d) => (
              <div
                key={d}
                className="rounded-md border border-primary/25 bg-card px-2 py-2.5 text-center text-[0.625rem] font-bold uppercase tracking-[0.1em] text-espresso shadow-card"
              >
                {d}
              </div>
            ))}
            <div className="flex items-center justify-center rounded-md border border-dashed border-primary/30 px-2 text-center text-[0.5625rem] font-semibold uppercase leading-tight tracking-[0.1em] text-muted-foreground">
              Systems · Standards · People
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestmentScene() {
  const includes = [
    {
      icon: Hammer,
      t: "Hands-on implementation",
      s: "JARA works directly with Zaki to build and implement the agreed systems.",
    },
    {
      icon: CalendarCheck,
      t: "Regular working sessions",
      s: "Defined meetings and implementation sessions throughout the 90 days.",
    },
    {
      icon: MessageCircle,
      t: "Ongoing communication",
      s: "Continued communication and support around the agreed transformation work.",
    },
    {
      icon: ClipboardList,
      t: "Defined deliverables",
      s: "Work remains focused on the agreed 90-day transformation scope.",
    },
  ];

  const schedule = [
    { m: "Month 1", a: "At agreement signing", b: "End of Month 1" },
    { m: "Month 2", a: "Beginning of Month 2", b: "End of Month 2" },
    { m: "Month 3", a: "Beginning of Month 3", b: "End of Month 3" },
  ];

  return (
    <Scene
      id="s20"
      number="20"
      kicker="The engagement"
      title="90-Day Zaki Business Transformation"
      lead="Three months to build the systems, standards and infrastructure behind Zaki's next stage."
      tone="cream"
    >
      {/* Investment statement */}
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <div className="rounded-lg border border-primary/25 bg-card px-8 py-12 text-center shadow-card">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Investment
          </p>
          <p className="mt-6 font-display text-5xl font-bold leading-none text-primary sm:text-7xl">
            $6,000
            <span className="ml-2 align-middle font-display text-xl font-bold text-primary/60 sm:text-2xl">
              / month
            </span>
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-espresso/70">
            3-month engagement
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-border-strong" />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Total 90-day investment: <span className="text-espresso">$18,000</span>
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-lg border border-sand bg-gold-soft/50 px-8 py-12 text-center">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-espresso/70">
            Diagnostic + discovery
          </p>
          <p className="mt-5 font-display text-4xl font-bold text-espresso sm:text-5xl">
            Complimentary
          </p>
          <p className="mt-6 text-sm leading-relaxed text-espresso/70">
            JARA&rsquo;s initial investment in understanding Zaki.
          </p>
        </div>
      </div>

      {/* Payment schedule */}
      <div className="mt-14">
        <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Payment schedule
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {schedule.map((s) => (
            <div key={s.m} className="text-center">
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-espresso">
                {s.m}
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                {[s.a, s.b].map((when, i) => (
                  <div key={when} className="flex items-center gap-3">
                    <div className="min-w-[6.5rem]">
                      <div className="mx-auto h-2.5 w-2.5 rounded-full bg-primary" />
                      <p className="mt-3 font-display text-lg font-bold text-foreground">$3,000</p>
                      <p className="mt-1 text-[0.625rem] font-semibold uppercase leading-snug tracking-[0.12em] text-muted-foreground">
                        {when}
                      </p>
                    </div>
                    {i === 0 ? (
                      <span className="mb-10 text-gold" aria-hidden>
                        &rarr;
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-primary/25 bg-sage-soft/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-espresso">
            $18,000 total
          </span>
          <span className="rounded-full border border-border bg-card px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
            6 payments × $3,000
          </span>
        </div>
      </div>

      {/* What the engagement includes */}
      <div className="mt-16">
        <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          What the engagement includes
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {includes.map((c) => (
            <div key={c.t} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <c.icon className="h-5 w-5 text-primary" aria-hidden />
              <p className="mt-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                {c.t}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.s}</p>
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}
