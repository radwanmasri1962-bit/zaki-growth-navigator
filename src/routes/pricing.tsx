import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Bullets,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  StatCard,
  Table,
  money,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Commercial Model & Pricing Calculator — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Internal commercial architecture: transformation project scope, monthly retainer model and an interactive pricing calculator for the Zaki Grill engagement.",
      },
      { property: "og:title", content: "Commercial Model — Zaki Grill Engagement" },
      {
        property: "og:description",
        content: "Project versus retainer structure, internal use only.",
      },
    ],
  }),
  component: PricingPage,
});

type Module = {
  id: string;
  name: string;
  area: string;
  project: number;
  retainer: number;
  note: string;
};

const MODULES: Module[] = [
  { id: "discovery", name: "Diagnostic & discovery", area: "Foundation", project: 2500, retainer: 0, note: "Founder sessions, on-site observation, baseline data pack." },
  { id: "recipes", name: "Recipe standardization", area: "Product", project: 3200, retainer: 350, note: "Recipe cards, portioning, taste-consistency controls." },
  { id: "sops", name: "SOP & operations manual", area: "Operations", project: 4200, retainer: 450, note: "Priority SOP set across kitchen, hygiene, cash, trucks." },
  { id: "training", name: "Training system", area: "People", project: 3000, retainer: 400, note: "Onboarding path, role training, verification checklists." },
  { id: "management", name: "Management & accountability structure", area: "People", project: 2800, retainer: 500, note: "Role definitions, manager duties, escalation rules." },
  { id: "trucks", name: "Truck operating standardization", area: "Trucks", project: 2600, retainer: 350, note: "Per-truck SOPs, location routine, fleet consistency." },
  { id: "menu", name: "Menu & channel alignment", area: "Menu", project: 1800, retainer: 300, note: "One source-of-truth menu pushed to every channel." },
  { id: "digital", name: "Digital presence rebuild", area: "Digital", project: 3600, retainer: 450, note: "Profiles, listings, social system, owned website concept." },
  { id: "reputation", name: "Reputation engine", area: "Digital", project: 1600, retainer: 400, note: "Review generation, monitoring, AI-assisted responses." },
  { id: "catering", name: "Catering & B2B pipeline", area: "Growth", project: 2900, retainer: 550, note: "Packages, quotes, follow-up sequence, account tracking." },
  { id: "comms", name: "Customer communication support", area: "Owner relief", project: 1200, retainer: 450, note: "Template library plus ongoing drafting support." },
  { id: "ai", name: "AI & automation layer", area: "Systems", project: 2400, retainer: 500, note: "SOP search, drafting assistants, employee FAQ." },
  { id: "reporting", name: "Owner Command Center reporting", area: "Systems", project: 2200, retainer: 600, note: "KPI pack, weekly reporting, exception escalation." },
];

const DEFAULT_ON = ["discovery", "recipes", "sops", "training", "management", "comms", "reputation", "reporting"];

function PricingPage() {
  const [selected, setSelected] = useState<string[]>(DEFAULT_ON);
  const [mode, setMode] = useState<"project" | "retainer" | "hybrid">("hybrid");
  const [months, setMonths] = useState(6);
  const [discount, setDiscount] = useState(0);

  const chosen = useMemo(() => MODULES.filter((m) => selected.includes(m.id)), [selected]);

  const projectSubtotal = chosen.reduce((s, m) => s + m.project, 0);
  const retainerMonthly = chosen.reduce((s, m) => s + m.retainer, 0);

  const projectFee = mode === "retainer" ? 0 : projectSubtotal;
  const monthlyFee = mode === "project" ? 0 : retainerMonthly;
  const gross = projectFee + monthlyFee * months;
  const total = Math.round(gross * (1 - discount / 100));

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div>
      <PageHeader
        eyebrow="Commercial"
        title="Engagement Model & Pricing Calculator"
        intro="Internal commercial architecture for the JARA AI engagement with Zaki Grill. Figures are working scenario inputs for Radwan's own modelling — not a client-issued quote."
        internal
      />

      <Section title="Structure Options" kicker="Model design">
        <div className="grid gap-4 lg:grid-cols-3">
          <Panel eyebrow="Option A" title="Transformation Project">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Fixed-scope build: diagnostic, documentation, standardization and delegation assets
              delivered as a defined body of work with a clear end point.
            </p>
            <div className="mt-4">
              <Bullets
                items={["Defined deliverables", "Defined timeline", "One-time investment", "Handover at completion"]}
              />
            </div>
          </Panel>
          <Panel eyebrow="Option B" title="Monthly Retainer">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ongoing operating partnership: systems maintained, reporting delivered, communication
              and reputation handled continuously.
            </p>
            <div className="mt-4">
              <Bullets items={["Continuous support", "Ongoing reporting", "Lower entry cost", "Compounding value"]} />
            </div>
          </Panel>
          <Panel eyebrow="Option C · recommended" title="Hybrid" tone="gold">
            <p className="text-sm leading-relaxed">
              Project build establishes the system; retainer keeps it alive and adapts it as Zaki
              grows. Matches how owner-dependent businesses actually transform.
            </p>
            <div className="mt-4">
              <Bullets tone="green" items={["Build then sustain", "Accountability continues", "Scales with the fleet", "Best long-term outcome"]} />
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="Scenario Calculator" kicker="Internal modelling" description="Select modules and structure to model an engagement scenario. All values are editable assumptions.">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <div className="flex flex-wrap gap-2">
              {(["project", "retainer", "hybrid"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={
                    "rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors " +
                    (mode === m
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-secondary text-secondary-foreground hover:text-foreground")
                  }
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {MODULES.map((m) => {
                const on = selected.includes(m.id);
                return (
                  <label
                    key={m.id}
                    className={
                      "grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-md border p-4 transition-colors " +
                      (on ? "border-primary/30 bg-accent/40" : "border-border bg-background hover:bg-secondary/60")
                    }
                  >
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggle(m.id)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[var(--primary)]"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold">{m.name}</span>
                        <Pill>{m.area}</Pill>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.note}</p>
                      <p className="mt-1.5 text-xs text-gold">
                        Project {money(m.project)} · Retainer {money(m.retainer)}/mo
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <Panel eyebrow="Inputs" title="Assumptions">
              <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Retainer months: {months}
              </label>
              <input
                type="range"
                min={0}
                max={24}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="mt-2 w-full accent-[var(--primary)]"
              />
              <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Relationship discount: {discount}%
              </label>
              <input
                type="range"
                min={0}
                max={25}
                step={5}
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                className="mt-2 w-full accent-[var(--primary)]"
              />
            </Panel>

            <div className="grid gap-3">
              <StatCard label="Project fee" value={money(projectFee)} note={`${chosen.length} modules selected`} />
              <StatCard label="Monthly retainer" value={`${money(monthlyFee)}/mo`} tone="green" />
              <StatCard
                label={`Engagement value · ${months} mo`}
                value={money(total)}
                note={discount ? `After ${discount}% discount` : "No discount applied"}
                tone="gold"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Scenario Summary" kicker="Selected scope">
        <Table
          head={["Module", "Area", "Project", "Retainer / mo"]}
          rows={
            chosen.length
              ? [
                  ...chosen.map((m) => [m.name, m.area, money(m.project), money(m.retainer)]),
                  [
                    <span className="font-semibold">Total</span>,
                    "",
                    <span className="font-semibold">{money(projectSubtotal)}</span>,
                    <span className="font-semibold">{money(retainerMonthly)}</span>,
                  ],
                ]
              : [["No modules selected", "", "—", "—"]]
          }
        />
        <div className="mt-4">
          <Note tone="warn">
            Internal page. Pricing is not shown in the client view until Radwan confirms the final
            structure.
          </Note>
        </div>
      </Section>
    </div>
  );
}
