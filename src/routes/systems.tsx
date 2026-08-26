import { createFileRoute } from "@tanstack/react-router";
import {
  Bullets,
  Flow,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  Section as S,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/systems")({
  head: () => ({
    meta: [
      { title: "SOPs, AI & Management System — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "The Zaki Operations Manual architecture, AI and automation layer, owner relief model and the conceptual Owner Command Center dashboard.",
      },
      { property: "og:title", content: "SOPs, AI & Management System — Zaki Grill" },
      {
        property: "og:description",
        content: "AI assists. Systems control. People operate. Ahmed decides.",
      },
    ],
  }),
  component: SystemsPage,
});

const SOPS: [string, string[]][] = [
  ["Kitchen", ["Opening", "Closing", "Food preparation", "Cooking", "Holding", "Packaging"]],
  ["Hygiene", ["Cleaning", "Sanitation", "Food safety"]],
  ["Trucks", ["Truck opening", "Truck closing", "Truck setup", "Truck breakdown"]],
  ["Money", ["Cash handling", "POS", "Refunds"]],
  ["Orders", ["Delivery orders", "Catering", "Customer complaints"]],
  ["Supply", ["Inventory", "Purchasing", "Receiving"]],
  ["Team", ["Staff attendance", "Manager duties", "Emergency procedures"]],
];

const KPIS = [
  "Today's sales",
  "Week sales",
  "Truck sales",
  "Budd Dairy sales",
  "Labor",
  "Food cost",
  "Reviews",
  "Catering pipeline",
  "Staffing gaps",
  "Waste",
  "Customer issues",
  "Truck status",
];

function SystemsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Systems"
        title="SOP Architecture, Automation & Owner Relief"
        intro="This is where documentation becomes control. The Zaki Operations Manual, a quiet automation layer and a management routine convert written standards into daily behaviour and give the owner visibility instead of involvement."
      />

      <Section title="Zaki Operations Manual" kicker="Pillar 04" description="SOP categories grouped by operating domain. Each SOP has a single owner, a checklist and a verification point.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOPS.map(([group, items]) => (
            <Panel key={group} eyebrow="SOP group" title={group}>
              <Bullets items={items} tone="green" />
            </Panel>
          ))}
        </div>
      </Section>

      <Section title="Owner Relief Model" kicker="Pillar 14 · Centerpiece">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel tone="warn" eyebrow="Current" title="Ahmed → everything">
            <p className="text-sm leading-relaxed">
              Every task, question and exception routes through one person. Capacity, not demand,
              caps the business.
            </p>
            <div className="mt-5">
              <Flow vertical tone="neutral" steps={["Ahmed", "Every task, every day"]} />
            </div>
          </Panel>
          <Panel tone="green" eyebrow="Future" title="Ahmed → Zaki Management System">
            <div className="flex justify-center">
              <span className="rounded-md border border-primary/30 bg-primary px-5 py-2 text-sm font-bold uppercase tracking-[0.1em] text-primary-foreground">
                Ahmed
              </span>
            </div>
            <p className="mt-2 text-center text-gold">↓</p>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.12em]">
              Zaki management system
            </p>
            <p className="mt-2 text-center text-gold">↓</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["People", "Recipes", "SOPs", "Digital", "Customers", "Trucks", "Reporting"].map((t) => (
                <span
                  key={t}
                  className="rounded border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Exceptions", "Decisions", "KPIs", "Approvals"].map((t) => (
                <div
                  key={t}
                  className="rounded-md border border-gold/30 bg-gold-soft/60 px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.08em] text-gold"
                >
                  {t}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Ahmed receives these — not every small task.
            </p>
          </Panel>
        </div>
      </Section>

      <S title="AI & Automation Layer" kicker="Pillar 13" description="AI is support infrastructure, not the story. It removes typing, searching and drafting — it does not make operating decisions.">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <Panel eyebrow="Applications" title="Where automation earns its place">
            <Bullets
              columns={2}
              items={[
                "Email drafting",
                "Catering proposals",
                "Review responses",
                "Training assistant",
                "SOP search",
                "Recipe retrieval",
                "Employee FAQ",
                "Management reporting",
                "Customer inquiry support",
                "Social drafting",
                "Menu description management",
                "Document creation",
                "Weekly summaries",
              ]}
            />
          </Panel>
          <Panel eyebrow="Principle" title="Order of authority" tone="gold">
            <Flow vertical tone="gold" steps={["AI assists", "Systems control", "People operate", "Ahmed decides"]} />
          </Panel>
        </div>
      </S>

      <Section title="Zaki Owner Command Center" kicker="Concept" description="Conceptual KPI surface. Every value is a placeholder until Ahmed supplies verified data — no financial figures are fabricated.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {KPIS.map((k) => (
            <div key={k} className="rule-card border-l-border-strong p-5">
              <p className="eyebrow">{k}</p>
              <p className="mt-2 font-display text-2xl font-bold text-muted-foreground">—</p>
              <div className="mt-2">
                <Pill>Awaiting data</Pill>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Table
            head={["Reporting layer", "Frequency", "Audience", "Source"]}
            rows={[
              ["Daily operating snapshot", "Daily", "Managers", "POS + checklists"],
              ["Owner exception report", "Daily", "Ahmed", "Escalations only"],
              ["Weekly performance report", "Weekly", "Ahmed + JARA", "POS, labor, reviews"],
              ["Monthly transformation review", "Monthly", "Ahmed + JARA", "Program KPIs"],
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            Reporting design precedes data collection. Structure first, numbers when verified.
          </Note>
        </div>
      </Section>
    </div>
  );
}
