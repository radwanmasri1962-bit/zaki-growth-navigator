import type { ReactNode } from "react";
import {
  Briefcase,
  ClipboardList,
  Globe,
  Headset,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Package,
  PartyPopper,
  Phone,
  Store,
  Truck,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Shared canvas helpers — a 1000x700 design space with absolutely
 * positioned nodes on top of an organic SVG connector layer.
 * ------------------------------------------------------------------ */

const W = 1000;
const H = 700;

function Canvas({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full", className)} style={{ aspectRatio: `${W} / ${H}` }}>
      {children}
    </div>
  );
}

function Wires({
  paths,
  stroke,
  className,
  arrows = true,
  arrowColor,
  id,
}: {
  paths: { d: string; width?: number; opacity?: number; dash?: string }[];
  stroke: string;
  arrowColor?: string;
  className?: string;
  arrows?: boolean;
  id: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn("absolute inset-0 h-full w-full", className)}
      fill="none"
      aria-hidden
    >
      <defs>
        <marker
          id={`${id}-tip`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0,1 L9,5 L0,9" fill="none" stroke={arrowColor ?? stroke} strokeWidth="1.8" />
        </marker>
      </defs>
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={stroke}
          strokeWidth={p.width ?? 1.6}
          strokeLinecap="round"
          strokeDasharray={p.dash}
          opacity={p.opacity ?? 0.5}
          markerEnd={arrows ? `url(#${id}-tip)` : undefined}
        />
      ))}
    </svg>
  );
}

function At({
  x,
  y,
  children,
  className,
}: {
  x: number;
  y: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("absolute -translate-x-1/2 -translate-y-1/2", className)}
      style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 04 — THE PRESSURE
 * ------------------------------------------------------------------ */

type Cat = { x: number; y: number; label: string; icon: typeof Users };

const pressureCats: Cat[] = [
  { x: 152, y: 128, label: "Customers", icon: Users },
  { x: 500, y: 74, label: "Staff", icon: Headset },
  { x: 852, y: 128, label: "Locations", icon: Store },
  { x: 888, y: 452, label: "Food trucks", icon: Truck },
  { x: 500, y: 626, label: "Catering + events", icon: PartyPopper },
  { x: 114, y: 452, label: "Suppliers + operations", icon: Package },
];

const pressureWhispers: { x: number; y: number; t: string }[] = [
  { x: 300, y: 76, t: "Orders" },
  { x: 66, y: 232, t: "Customer questions" },
  { x: 258, y: 214, t: "Complaints" },
  { x: 664, y: 74, t: "Schedules" },
  { x: 742, y: 226, t: "Chef / kitchen" },
  { x: 930, y: 306, t: "Truck locations" },
  { x: 760, y: 552, t: "Menu questions" },
  { x: 632, y: 636, t: "Large orders" },
  { x: 232, y: 596, t: "Events" },
  { x: 92, y: 578, t: "Inventory" },
  { x: 946, y: 592, t: "Business inquiries" },
];

const CX = 500;
const CY = 356;

function curveTo(x: number, y: number, bend: number, shrink = 0.78) {
  const ex = x + (CX - x) * shrink;
  const ey = y + (CY - y) * shrink;
  const mx = (x + ex) / 2 + bend;
  const my = (y + ey) / 2 - bend * 0.7;
  return `M${x},${y} Q${mx},${my} ${ex},${ey}`;
}

export function PressureMap() {
  const main = pressureCats.map((c, i) => ({
    d: curveTo(c.x, c.y, i % 2 === 0 ? 62 : -62),
    width: 2.1,
    opacity: 0.62,
  }));
  const noise = pressureWhispers.map((w, i) => ({
    d: curveTo(w.x, w.y, i % 3 === 0 ? 90 : i % 3 === 1 ? -74 : 34, 0.72),
    width: 1.1,
    opacity: 0.3,
    dash: i % 2 === 0 ? "5 7" : undefined,
  }));

  return (
    <div>
      {/* Mobile fallback: readable list, same story */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-2">
          {pressureCats.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 rounded-md border border-espresso/20 bg-espresso-soft/70 px-3 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-espresso"
            >
              <c.icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              {c.label}
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-2xl text-gold" aria-hidden>
          ↓
        </p>
        <p className="mt-3 text-center font-display text-3xl font-bold uppercase tracking-[0.12em] text-espresso">
          Ahmed
        </p>
      </div>

      <Canvas className="hidden lg:block">
        <Wires
          id="p04"
          paths={[...noise, ...main]}
          stroke="oklch(0.55 0.055 78)"
          arrowColor="oklch(0.55 0.055 78)"
        />

        {/* Ahmed — the convergence point */}
        <At x={CX} y={CY}>
          <div className="relative">
            <span className="absolute -inset-10 rounded-full bg-gold-soft/50 blur-2xl" aria-hidden />
            <span
              className="absolute -inset-6 rounded-full border border-gold/30"
              aria-hidden
            />
            <div className="relative rounded-full border-2 border-espresso/70 bg-card px-14 py-8 text-center shadow-lift">
              <p className="font-display text-4xl font-bold uppercase tracking-[0.14em] text-espresso">
                Ahmed
              </p>
              <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                One person
              </p>
            </div>
          </div>
        </At>

        {pressureCats.map((c) => (
          <At key={c.label} x={c.x} y={c.y}>
            <div className="flex w-[11rem] flex-col items-center gap-2 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-sage-soft/80">
                <c.icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
              </span>
              <span className="text-[0.8125rem] font-bold uppercase leading-tight tracking-[0.12em] text-espresso">
                {c.label}
              </span>
            </div>
          </At>
        ))}

        {pressureWhispers.map((w) => (
          <At key={w.t} x={w.x} y={w.y}>
            <span className="whitespace-nowrap text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground/85">
              {w.t}
            </span>
          </At>
        ))}
      </Canvas>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 05 — THE BOTTLENECK
 * ------------------------------------------------------------------ */

const NX = 500;
const NY = 300;

const inbound: { x: number; y: number; label: string; icon: typeof Users }[] = [
  { x: 108, y: 86, label: "Customers", icon: Users },
  { x: 330, y: 52, label: "Orders", icon: ClipboardList },
  { x: 668, y: 52, label: "Food truck locations", icon: Truck },
  { x: 894, y: 86, label: "Catering", icon: UtensilsCrossed },
  { x: 62, y: 214, label: "Staff", icon: Headset },
  { x: 940, y: 214, label: "Suppliers", icon: Package },
  { x: 62, y: 344, label: "Events", icon: PartyPopper },
  { x: 940, y: 344, label: "Customer complaints", icon: MessageCircle },
  { x: 132, y: 462, label: "Business inquiries", icon: Briefcase },
  { x: 868, y: 462, label: "Menu questions", icon: MessageSquare },
  { x: 300, y: 512, label: "Large orders", icon: Store },
  { x: 700, y: 512, label: "Operational problems", icon: MapPin },
];

export function BottleneckFunnel() {
  const paths = inbound.map((n, i) => {
    const ex = n.x + (NX - n.x) * 0.8;
    const ey = n.y + (NY - n.y) * 0.74;
    const bend = [96, -80, 58, -110, 74, -52][i % 6];
    const mx = (n.x + ex) / 2 + bend;
    const my = (n.y + ey) / 2 - bend * 0.55;
    return {
      d: `M${n.x},${n.y} Q${mx},${my} ${ex},${ey}`,
      width: 1.5,
      opacity: 0.55,
      dash: i % 3 === 0 ? "6 8" : undefined,
    };
  });

  return (
    <div>
      {/* Mobile fallback */}
      <div className="lg:hidden text-center">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-background/60">
          Zaki&apos;s main number
        </p>
        <p className="mt-3 font-display text-4xl font-bold tracking-tight text-gold">614-377-1274</p>
        <div className="mt-5 grid grid-cols-2 gap-1.5">
          {inbound.map((n) => (
            <span
              key={n.label}
              className="rounded-md border border-background/25 bg-background/10 px-2.5 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-background/85"
            >
              {n.label}
            </span>
          ))}
        </div>
        <p className="mt-5 text-2xl text-gold" aria-hidden>
          ↓
        </p>
        <p className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.14em] text-background">
          Ahmed
        </p>
      </div>

      <Canvas className="hidden lg:block">
        <Wires
          id="p05"
          paths={paths}
          stroke="oklch(0.78 0.06 82)"
          arrowColor="oklch(0.78 0.06 82)"
        />
        {/* number → Ahmed */}
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
          <path
            d={`M${NX},${NY + 78} C${NX + 10},${NY + 150} ${NX - 10},${NY + 190} ${NX},${NY + 244}`}
            stroke="oklch(0.78 0.06 82)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d={`M${NX - 12},${NY + 236} L${NX},${NY + 256} L${NX + 12},${NY + 236}`}
            stroke="oklch(0.78 0.06 82)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* HERO number */}
        <At x={NX} y={NY}>
          <div className="relative text-center">
            <span className="absolute -inset-16 rounded-full bg-gold/20 blur-3xl" aria-hidden />
            <p className="relative text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-background/60">
              The number everyone knows
            </p>
            <p className="relative mt-2 whitespace-nowrap font-display text-[4.25rem] font-bold leading-none tracking-tight text-gold xl:text-[5rem]">
              614-377-1274
            </p>
          </div>
        </At>

        {inbound.map((n) => (
          <At key={n.label} x={n.x} y={n.y}>
            <div className="flex w-[9.5rem] flex-col items-center gap-1.5 text-center">
              <n.icon className="h-5 w-5 text-gold/85" strokeWidth={1.6} />
              <span className="text-[0.6875rem] font-bold uppercase leading-tight tracking-[0.14em] text-background/85">
                {n.label}
              </span>
            </div>
          </At>
        ))}

        {/* Ahmed at the end of the funnel */}
        <At x={NX} y={NY + 300}>
          <div className="rounded-full border border-background/35 bg-background/10 px-12 py-5 text-center">
            <p className="font-display text-4xl font-bold uppercase tracking-[0.16em] text-background">
              Ahmed
            </p>
          </div>
        </At>
      </Canvas>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 06 — THE SYSTEM / REVEAL
 * ------------------------------------------------------------------ */

const channels: { label: string; sub?: string; icon: typeof Users }[] = [
  { label: "Phone", sub: "614-377-1274", icon: Phone },
  { label: "Email", sub: "hello@zakigrill.com", icon: Mail },
  { label: "Website inquiry", icon: Globe },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "SMS", icon: MessageSquare },
  { label: "Catering inquiry", icon: UtensilsCrossed },
  { label: "Other digital inquiries", icon: Briefcase },
];

const destinations: { label: string; icon: typeof Users }[] = [
  { label: "Orders", icon: ClipboardList },
  { label: "Catering", icon: UtensilsCrossed },
  { label: "Customer service", icon: Headset },
  { label: "Truck / location questions", icon: Truck },
  { label: "Operations", icon: Package },
  { label: "Business inquiries", icon: Briefcase },
];

export function RoutingSystem() {
  return (
    <div className="space-y-10">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_auto]">
        {/* Channels in */}
        <div className="space-y-2.5">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Every way people reach Zaki
          </p>
          {channels.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-2.5 shadow-card"
            >
              <c.icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} />
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-espresso">
                {c.label}
              </span>
              {c.sub ? (
                <span className="ml-auto whitespace-nowrap font-mono text-[0.6875rem] text-gold">
                  {c.sub}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        {/* Clean converging curves */}
        <svg
          viewBox="0 0 120 320"
          className="hidden h-[19rem] w-[7.5rem] lg:block"
          fill="none"
          aria-hidden
        >
          {[16, 66, 116, 160, 204, 254, 304].map((y, i) => (
            <path
              key={i}
              d={`M0,${y} C55,${y} 65,160 118,160`}
              stroke="oklch(0.42 0.075 163)"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.55"
            />
          ))}
        </svg>

        {/* Hub */}
        <div className="mx-auto text-center">
          <div className="relative inline-block">
            <span className="absolute -inset-8 rounded-full bg-sage-soft/70 blur-2xl" aria-hidden />
            <div className="relative rounded-full border-2 border-primary/40 bg-accent/50 px-12 py-10 shadow-lift">
              <p className="font-display text-2xl font-bold uppercase leading-tight tracking-[0.14em] text-espresso">
                Zaki
                <br />
                Inquiry hub
              </p>
            </div>
          </div>
          <p className="mt-4 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-primary">
            Automated + organized by JARA
          </p>
        </div>

        {/* Clean diverging curves */}
        <svg
          viewBox="0 0 120 320"
          className="hidden h-[19rem] w-[7.5rem] lg:block"
          fill="none"
          aria-hidden
        >
          {[24, 78, 132, 186, 240, 296].map((y, i) => (
            <path
              key={i}
              d={`M0,160 C55,160 65,${y} 118,${y}`}
              stroke="oklch(0.42 0.075 163)"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.55"
            />
          ))}
        </svg>

        {/* Destinations */}
        <div className="space-y-2.5">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Routed to the right place
          </p>
          {destinations.map((d) => (
            <div
              key={d.label}
              className="flex items-center gap-3 rounded-md border border-primary/25 bg-sage-soft/60 px-4 py-2.5"
            >
              <d.icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} />
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-espresso">
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Catering micro-flow */}
      <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          For example — a catering inquiry
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3">
          {[
            "Catering inquiry",
            "Immediate professional response",
            "Details captured",
            "CRM / follow-up",
            "Ahmed only when approval is needed",
          ].map((s, i, arr) => (
            <span key={s} className="flex items-center gap-3">
              <span
                className={cn(
                  "rounded-full border px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em]",
                  i === arr.length - 1
                    ? "border-gold/50 bg-gold-soft/70 text-espresso"
                    : "border-primary/25 bg-sage-soft/60 text-espresso",
                )}
              >
                {s}
              </span>
              {i < arr.length - 1 ? (
                <svg viewBox="0 0 40 20" className="h-4 w-8 text-primary" fill="none" aria-hidden>
                  <path
                    d="M2,14 C12,2 26,2 36,10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30,7 L37,10 L31,15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : null}
            </span>
          ))}
        </div>
      </div>

      {/* Ahmed at the far end — calm */}
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 200 60" className="h-14 w-48 text-gold" fill="none" aria-hidden>
          <path
            d="M100,2 C100,22 96,32 100,50"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M93,42 L100,54 L107,42"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <div className="rounded-full border border-espresso/25 bg-card px-14 py-6 text-center shadow-card">
          <p className="font-display text-3xl font-bold uppercase tracking-[0.16em] text-espresso">
            Ahmed
          </p>
          <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Only what needs him
          </p>
        </div>
      </div>
    </div>
  );
}
