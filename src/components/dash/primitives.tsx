import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  internal,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  internal?: boolean;
}) {
  return (
    <header className="border-b border-border pb-8">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h1>
      {intro ? (
        <p className="mt-4 max-w-3xl text-[0.975rem] leading-relaxed text-muted-foreground">
          {intro}
        </p>
      ) : null}
      {internal ? <InternalBadge className="mt-5" /> : null}
    </header>
  );
}

export function InternalBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-warn/40 bg-warn-soft px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-warn",
        className,
      )}
    >
      <LockGlyph /> Internal JARA AI — not client facing
    </span>
  );
}

function LockGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function Section({
  id,
  title,
  kicker,
  description,
  children,
  className,
}: {
  id?: string;
  title: string;
  kicker?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mt-16", className)}>
      {kicker ? <p className="eyebrow">{kicker}</p> : null}
      <h2 className="mt-2 text-2xl font-bold sm:text-[1.75rem]">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function Panel({
  title,
  eyebrow,
  children,
  className,
  tone = "default",
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "green" | "gold" | "warn";
}) {
  const tones = {
    default: "border-border",
    green: "border-primary/25 bg-accent/40",
    gold: "border-gold/30 bg-gold-soft/40",
    warn: "border-warn/30 bg-warn-soft/50",
  } as const;
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-6 shadow-card",
        tones[tone],
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h3 className="mt-1.5 text-lg font-semibold">{title}</h3> : null}
      <div className={cn(title || eyebrow ? "mt-4" : "")}>{children}</div>
    </div>
  );
}

export function StatCard({
  label,
  value,
  note,
  tone = "gold",
}: {
  label: string;
  value: string;
  note?: string;
  tone?: "gold" | "green" | "warn" | "neutral";
}) {
  const rule = {
    gold: "border-l-gold",
    green: "border-l-primary",
    warn: "border-l-warn",
    neutral: "border-l-border-strong",
  } as const;
  return (
    <div className={cn("rule-card p-5", rule[tone])}>
      <p className="eyebrow">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold leading-tight">{value}</p>
      {note ? <p className="mt-1.5 text-xs text-muted-foreground">{note}</p> : null}
    </div>
  );
}

export function KeyValue({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="divide-y divide-border">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-3">
          <dt className="min-w-0 text-sm text-muted-foreground">{k}</dt>
          <dd className="text-right text-sm font-medium">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "green" | "gold" | "warn" | "red";
}) {
  const tones = {
    neutral: "bg-secondary text-secondary-foreground border-border",
    green: "bg-accent text-accent-foreground border-primary/25",
    gold: "bg-gold-soft text-gold border-gold/30",
    warn: "bg-warn-soft text-warn border-warn/30",
    red: "bg-destructive/10 text-destructive border-destructive/25",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em]",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function Unverified({ children = "Requires verification" }: { children?: string }) {
  return <Pill tone="warn">{children}</Pill>;
}

export function AssetPlaceholder({
  label,
  batch,
  ratio = "16/9",
  className,
}: {
  label: string;
  batch: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border-strong bg-secondary/60 p-6 text-center",
        className,
      )}
    >
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        [{label}]
      </span>
      <span className="text-[0.6875rem] uppercase tracking-[0.12em] text-gold">{batch}</span>
      <span className="text-xs text-muted-foreground">Awaiting asset upload</span>
    </div>
  );
}

export function Bullets({
  items,
  tone = "neutral",
  columns = 1,
}: {
  items: string[];
  tone?: "neutral" | "green" | "warn";
  columns?: 1 | 2 | 3;
}) {
  const dot = {
    neutral: "bg-border-strong",
    green: "bg-primary",
    warn: "bg-warn",
  } as const;
  const cols = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3" } as const;
  return (
    <ul className={cn("grid gap-x-8 gap-y-2.5", cols[columns])}>
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed">
          <span className={cn("mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full", dot[tone])} />
          <span className="min-w-0">{i}</span>
        </li>
      ))}
    </ul>
  );
}

/** Horizontal / vertical process chain: A → B → C */
export function Flow({
  steps,
  vertical,
  tone = "green",
}: {
  steps: string[];
  vertical?: boolean;
  tone?: "green" | "gold" | "neutral";
}) {
  const box = {
    green: "border-primary/25 bg-accent/50 text-accent-foreground",
    gold: "border-gold/30 bg-gold-soft/60 text-gold",
    neutral: "border-border bg-secondary text-secondary-foreground",
  } as const;
  return (
    <div
      className={cn(
        "flex gap-2",
        vertical ? "flex-col items-stretch" : "flex-wrap items-center",
      )}
    >
      {steps.map((s, i) => (
        <div key={s} className={cn("flex gap-2", vertical ? "flex-col" : "items-center")}>
          <div
            className={cn(
              "rounded-md border px-3.5 py-2 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.06em]",
              box[tone],
            )}
          >
            {s}
          </div>
          {i < steps.length - 1 ? (
            <span
              className={cn(
                "select-none text-center text-sm text-gold",
                vertical ? "leading-none" : "px-0.5",
              )}
            >
              {vertical ? "↓" : "→"}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/** Simple org / hierarchy diagram: one root, N branches, optional leaves. */
export function TreeDiagram({
  root,
  branches,
  tone = "green",
}: {
  root: string;
  branches: { label: string; items?: string[] }[];
  tone?: "green" | "warn";
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-card">
      <div className="flex justify-center">
        <div
          className={cn(
            "rounded-md border px-5 py-2.5 text-center text-sm font-bold uppercase tracking-[0.1em]",
            tone === "green"
              ? "border-primary/30 bg-primary text-primary-foreground"
              : "border-warn/40 bg-warn-soft text-warn",
          )}
        >
          {root}
        </div>
      </div>
      <div className="mx-auto h-6 w-px bg-border-strong" />
      <div className="grid gap-4 sm:grid-cols-3">
        {branches.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-2">
            <div className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.08em]">
              {b.label}
            </div>
            {b.items?.length ? (
              <>
                <span className="text-xs text-border-strong">↓</span>
                <div className="flex w-full flex-col gap-1.5">
                  {b.items.map((i) => (
                    <div
                      key={i}
                      className="rounded border border-border bg-card px-3 py-1.5 text-center text-xs text-muted-foreground"
                    >
                      {i}
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompareColumns({
  left,
  right,
}: {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Panel tone="warn" eyebrow="Current state" title={left.title}>
        <Bullets items={left.items} tone="warn" />
      </Panel>
      <Panel tone="green" eyebrow="Future state" title={right.title}>
        <Bullets items={right.items} tone="green" />
      </Panel>
    </div>
  );
}

export function ScoreBar({
  label,
  score,
  onChange,
}: {
  label: string;
  score: number;
  onChange?: (n: number) => void;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2.5">
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <span className="truncate text-sm font-medium">{label}</span>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{score}/5</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className={cn("h-full rounded-full", score <= 2 ? "bg-warn" : "bg-primary")}
            style={{ width: `${(score / 5) * 100}%` }}
          />
        </div>
      </div>
      {onChange ? (
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={score}
          aria-label={`${label} score`}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-24 accent-primary"
        />
      ) : null}
    </div>
  );
}

export function Table({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: ReactNode[][];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-card">
      <table className="w-full min-w-[42rem] border-collapse text-sm">
        {caption ? (
          <caption className="px-5 pt-5 text-left text-xs text-muted-foreground">{caption}</caption>
        ) : null}
        <thead>
          <tr className="border-b border-border">
            {head.map((h) => (
              <th key={h} className="eyebrow px-5 py-3.5 text-left align-bottom">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/50">
              {r.map((c, j) => (
                <td key={j} className="px-5 py-3.5 align-top leading-relaxed">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RiskCard({
  level,
  issue,
  impact,
  recommendation,
  owner,
  status,
}: {
  level: "Low" | "Medium" | "High";
  issue: string;
  impact: string;
  recommendation: string;
  owner: string;
  status: string;
}) {
  const tone = level === "High" ? "red" : level === "Medium" ? "warn" : "green";
  return (
    <div className="grid gap-4 border-b border-border py-6 last:border-0 sm:grid-cols-[6rem_minmax(0,1fr)]">
      <div>
        <Pill tone={tone}>{level}</Pill>
      </div>
      <div className="min-w-0">
        <h3 className="text-base font-semibold">{issue}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="eyebrow mr-2">Impact</span>
          {impact}
        </p>
        <p className="mt-2 text-sm text-gold">→ {recommendation}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Pill>Owner · {owner}</Pill>
          <Pill>Status · {status}</Pill>
        </div>
      </div>
    </div>
  );
}

export function Note({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "warn" }) {
  return (
    <p
      className={cn(
        "rounded-md border-l-2 py-2 pl-4 text-sm leading-relaxed",
        tone === "gold"
          ? "border-gold bg-gold-soft/40 text-secondary-foreground"
          : "border-warn bg-warn-soft/60 text-secondary-foreground",
      )}
    >
      {children}
    </p>
  );
}

export function money(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}
