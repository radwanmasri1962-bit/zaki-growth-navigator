import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** One presentation scene. Generous vertical rhythm, presentation-distance type. */
export function Scene({
  id,
  number,
  kicker,
  title,
  lead,
  children,
  tone = "cream",
  className,
}: {
  id: string;
  number: string;
  kicker?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  tone?: "cream" | "white" | "dark" | "green";
  className?: string;
}) {
  const tones = {
    cream: "bg-background text-foreground",
    white: "bg-card text-card-foreground",
    dark: "bg-foreground text-background",
    green: "bg-primary text-primary-foreground",
  } as const;
  return (
    <section
      id={id}
      data-scene={id}
      className={cn(
        "scroll-mt-32 border-b border-border/60 px-5 py-20 sm:px-10 sm:py-28",
        tones[tone],
        className,
      )}
    >
      <div className="mx-auto max-w-[76rem]">
        {(number || kicker) && (
          <div className="mb-6 flex items-center gap-4">
            <span
              className={cn(
                "font-mono text-xs font-medium tracking-[0.22em]",
                tone === "dark" || tone === "green" ? "text-background/60" : "text-gold",
              )}
            >
              {number}
            </span>
            <span
              className={cn(
                "h-px flex-1 max-w-16",
                tone === "dark" || tone === "green" ? "bg-background/25" : "bg-border-strong",
              )}
            />
            {kicker ? (
              <span
                className={cn(
                  "text-[0.6875rem] font-semibold uppercase tracking-[0.18em]",
                  tone === "dark" || tone === "green"
                    ? "text-background/60"
                    : "text-muted-foreground",
                )}
              >
                {kicker}
              </span>
            ) : null}
          </div>
        )}
        {title ? (
          <h2
            className={cn(
              "max-w-4xl font-display text-3xl font-bold leading-[1.08] sm:text-[2.75rem]",
              tone === "dark" || tone === "green" ? "text-background" : "text-foreground",
            )}
          >
            {title}
          </h2>
        ) : null}
        {lead ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl",
              tone === "dark" || tone === "green"
                ? "text-background/75"
                : "text-muted-foreground",
            )}
          >
            {lead}
          </p>
        ) : null}
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}

/** Oversized typographic statement — the emotional beats of the deck. */
export function Statement({
  children,
  tone = "gold",
  align = "center",
}: {
  children: ReactNode;
  tone?: "gold" | "green" | "dark" | "light";
  align?: "center" | "left";
}) {
  const tones = {
    gold: "border-gold/40 bg-gold-soft/50 text-foreground",
    green: "border-primary/25 bg-accent/60 text-accent-foreground",
    dark: "border-foreground/15 bg-foreground text-background",
    light: "border-background/20 bg-background/10 text-background",
  } as const;
  return (
    <div
      className={cn(
        "rounded-lg border px-6 py-10 sm:px-12 sm:py-14",
        tones[tone],
        align === "center" ? "text-center" : "text-left",
      )}
    >
      <p className="mx-auto max-w-4xl font-display text-2xl font-bold uppercase leading-[1.2] tracking-[0.02em] sm:text-4xl">
        {children}
      </p>
    </div>
  );
}

/** Uppercase chip used across ecosystem / cost / pillar grids. */
export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "green" | "gold" | "warn" | "light";
}) {
  const tones = {
    neutral: "border-border bg-card text-foreground",
    green: "border-primary/25 bg-accent/60 text-accent-foreground",
    gold: "border-gold/35 bg-gold-soft/60 text-gold",
    warn: "border-warn/35 bg-warn-soft/60 text-warn",
    light: "border-background/25 bg-background/10 text-background",
  } as const;
  return (
    <div
      className={cn(
        "rounded-md border px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] sm:text-[0.8125rem]",
        tones[tone],
      )}
    >
      {children}
    </div>
  );
}

/** Vertical labelled chain with arrows — used for journeys and workflows. */
export function Chain({
  steps,
  tone = "green",
  highlightLast,
}: {
  steps: string[];
  tone?: "green" | "gold" | "neutral";
  highlightLast?: boolean;
}) {
  const box = {
    green: "border-primary/25 bg-accent/50 text-accent-foreground",
    gold: "border-gold/30 bg-gold-soft/60 text-gold",
    neutral: "border-border bg-card text-foreground",
  } as const;
  return (
    <div className="flex flex-col items-stretch gap-1.5">
      {steps.map((s, i) => (
        <div key={s} className="flex flex-col items-stretch">
          <div
            className={cn(
              "rounded-md border px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.1em] sm:text-sm",
              highlightLast && i === steps.length - 1
                ? "border-primary/40 bg-primary text-primary-foreground"
                : box[tone],
            )}
          >
            {s}
          </div>
          {i < steps.length - 1 ? (
            <span className="py-1 text-center text-sm text-gold" aria-hidden>
              ↓
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/** Routing row: trigger → destination. */
export function RouteRow({
  from,
  to,
  emphasis,
}: {
  from: string;
  to: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-3 rounded-md border px-4 py-3 sm:grid-cols-[1fr_auto_1fr]",
        emphasis ? "border-gold/45 bg-gold-soft/50" : "border-border bg-card",
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
        {from}
      </span>
      <span className="text-sm text-gold" aria-hidden>
        →
      </span>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.1em] sm:text-right",
          emphasis ? "text-gold" : "text-foreground",
        )}
      >
        {to}
      </span>
    </div>
  );
}

/** Deliverable group card. */
export function GroupCard({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-card">
      <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-gold">{index}</p>
      <h3 className="mt-2 font-display text-xl font-bold">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
