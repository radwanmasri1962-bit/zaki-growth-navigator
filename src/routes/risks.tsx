import { createFileRoute } from "@tanstack/react-router";
import {
  Note,
  PageHeader,
  Panel,
  RiskCard,
  Section,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/risks")({
  head: () => ({
    meta: [
      { title: "Risk Architecture — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Risk register covering founder dependency, knowledge concentration, staffing fragility, quality variance, marketplace dependence and expansion exposure.",
      },
      { property: "og:title", content: "Risk Architecture — Zaki Grill" },
      {
        property: "og:description",
        content: "What threatens a business that succeeded without infrastructure.",
      },
    ],
  }),
  component: RisksPage,
});

const RISKS = [
  {
    level: "High" as const,
    issue: "Founder dependency",
    impact:
      "Operations, decisions, recipes, customer relationships and problem-solving all route through Ahmed. Illness, absence or burnout stops the business.",
    recommendation: "Documentation, then delegation to a defined management layer.",
    owner: "Ahmed / JARA",
    status: "Open",
  },
  {
    level: "High" as const,
    issue: "Undocumented recipes and process knowledge",
    impact:
      "Product identity exists only in memory. Any staff turnover risks taste drift, and training cannot be delegated.",
    recommendation: "Recipe cards, portion standards and a controlled operations manual.",
    owner: "Kitchen lead / JARA",
    status: "Open",
  },
  {
    level: "High" as const,
    issue: "Staffing fragility across multiple units",
    impact:
      "One venue plus a truck fleet requires reliable coverage. Informal staffing means gaps land on the founder.",
    recommendation: "Role definitions, scheduling structure and a trained bench.",
    owner: "Manager / JARA",
    status: "Open",
  },
  {
    level: "High" as const,
    issue: "Quality variance between units",
    impact:
      "Without shared standards, the customer experience differs by location and by shift, eroding brand trust.",
    recommendation: "Standardized SOPs plus verification checklists per unit.",
    owner: "Manager",
    status: "Open",
  },
  {
    level: "Medium" as const,
    issue: "Delivery marketplace dependence",
    impact:
      "Commission costs and platform-owned customer data limit margin and prevent direct retention.",
    recommendation: "Owned ordering path, customer database and direct-channel promotion.",
    owner: "Ahmed / JARA",
    status: "Open",
  },
  {
    level: "Medium" as const,
    issue: "No owned customer data",
    impact:
      "Repeat business cannot be engineered without an email or SMS list; every reorder depends on the customer remembering.",
    recommendation: "Capture at every touchpoint; retention sequences once permission exists.",
    owner: "JARA",
    status: "Open",
  },
  {
    level: "Medium" as const,
    issue: "Reputation left to chance",
    impact:
      "Sentiment is positive but review volume and response are unmanaged, limiting local discovery advantage.",
    recommendation: "Reputation engine with request triggers and drafted responses.",
    owner: "Manager / JARA",
    status: "Open",
  },
  {
    level: "Medium" as const,
    issue: "Inconsistent digital presentation",
    impact:
      "Menus, prices and imagery differ across platforms, causing customer confusion and lost conversion.",
    recommendation: "Single source-of-truth menu with a monthly channel audit.",
    owner: "Manager",
    status: "Open",
  },
  {
    level: "Medium" as const,
    issue: "Cost and margin visibility",
    impact:
      "Food cost, labor ratio and channel profitability are not yet verified, so pricing decisions are intuition-led.",
    recommendation: "Baseline data capture before any pricing or expansion decision.",
    owner: "Ahmed",
    status: "Data required",
  },
  {
    level: "Medium" as const,
    issue: "Expansion before control",
    impact:
      "Adding units to an owner-dependent system multiplies chaos rather than revenue.",
    recommendation: "Expansion gated behind a completed control and reporting layer.",
    owner: "Ahmed / JARA",
    status: "Policy",
  },
  {
    level: "Low" as const,
    issue: "Truck maintenance and downtime",
    impact: "Unplanned downtime removes a revenue unit and creates schedule failures.",
    recommendation: "Preventive maintenance schedule and per-truck condition log.",
    owner: "Manager",
    status: "Open",
  },
  {
    level: "Low" as const,
    issue: "Brand asset control",
    impact: "Inconsistent logos and photography weaken a brand that is otherwise strong locally.",
    recommendation: "Central brand asset library with usage rules.",
    owner: "JARA",
    status: "Open",
  },
];

function RisksPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Risk"
        title="Risk Architecture & Register"
        intro="These risks are the natural consequence of growing faster than infrastructure — not the result of poor management. Each one is addressed by a specific element of the transformation program."
      />

      <Section title="Risk Concentration" kicker="Where exposure sits">
        <div className="grid gap-4 sm:grid-cols-3">
          <Panel eyebrow="High" title="4 risks" tone="warn">
            <p className="text-sm">
              All four concentrate around one point: knowledge and control living in a single person.
            </p>
          </Panel>
          <Panel eyebrow="Medium" title="6 risks">
            <p className="text-sm text-muted-foreground">
              Channel dependence, data blindness and unmanaged presentation.
            </p>
          </Panel>
          <Panel eyebrow="Low" title="2 risks" tone="green">
            <p className="text-sm">Operational hygiene items, resolved by routine.</p>
          </Panel>
        </div>
      </Section>

      <Section title="Risk Register" kicker="Issue · impact · recommendation">
        <div className="rounded-lg border border-border bg-card px-6 shadow-card">
          {RISKS.map((r) => (
            <RiskCard key={r.issue} {...r} />
          ))}
        </div>
      </Section>

      <Section title="Mitigation Mapping" kicker="Risk to program element">
        <Table
          head={["Risk theme", "Program element", "Phase"]}
          rows={[
            ["Founder dependency", "Owner relief model + management structure", "Phase 2–4"],
            ["Knowledge concentration", "Recipes + operations manual", "Phase 2"],
            ["Staffing fragility", "Training system + role definitions", "Phase 3"],
            ["Quality variance", "SOPs + verification checklists", "Phase 3"],
            ["Marketplace dependence", "Owned ordering + customer database", "Phase 3–4"],
            ["Reputation exposure", "Reputation engine", "Phase 3"],
            ["Margin blindness", "Baseline data + reporting pack", "Phase 1 / 4"],
            ["Expansion exposure", "Growth readiness gate", "Phase 4"],
          ]}
        />
        <div className="mt-4">
          <Note>
            No risk here implies wrongdoing or failure. Each is a predictable stage of a business
            that outgrew its original operating model.
          </Note>
        </div>
      </Section>
    </div>
  );
}
