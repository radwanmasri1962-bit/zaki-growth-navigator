import { createFileRoute } from "@tanstack/react-router";
import {
  Bullets,
  Flow,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "90-Day Transformation Roadmap — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Phase 1 diagnostic, Phase 2 documentation, Phase 3 standardization and Phase 4 delegation — deliverables, owners and success criteria across 90 days.",
      },
      { property: "og:title", content: "90-Day Transformation Roadmap — Zaki Grill" },
      {
        property: "og:description",
        content: "Chaos → Documentation → Standardization → Delegation → Control → Growth.",
      },
    ],
  }),
  component: RoadmapPage,
});

const PHASES = [
  {
    phase: "Phase 1",
    window: "Days 1–15",
    title: "Diagnostic & Discovery",
    goal: "Establish factual baseline. No assumptions carried forward.",
    deliverables: [
      "Founder discovery sessions",
      "Operations observation at Budd Dairy and trucks",
      "Menu, pricing and channel data capture",
      "Digital and reputation evidence collection",
      "Verified baseline data pack",
    ],
    exit: "Every unverified item in this dashboard replaced with confirmed data.",
  },
  {
    phase: "Phase 2",
    window: "Days 16–45",
    title: "Documentation",
    goal: "Move knowledge out of the founder's head and onto paper.",
    deliverables: [
      "Recipe cards for core menu items",
      "Priority SOP set (kitchen, hygiene, opening/closing, cash)",
      "Truck operating procedures",
      "Role definitions and manager duty list",
      "Customer communication template library",
    ],
    exit: "Core operations can be described without Ahmed present.",
  },
  {
    phase: "Phase 3",
    window: "Days 46–70",
    title: "Standardization",
    goal: "Make documented standards the actual daily behaviour.",
    deliverables: [
      "Training program built from SOPs",
      "Checklist system in daily use",
      "Menu and channel alignment across platforms",
      "Reputation engine live",
      "Catering package set and quote process",
    ],
    exit: "Output consistency no longer depends on who is working.",
  },
  {
    phase: "Phase 4",
    window: "Days 71–90",
    title: "Delegation & Control",
    goal: "Shift Ahmed from operator to system owner.",
    deliverables: [
      "Manager accountability structure activated",
      "Owner reporting cadence in place",
      "Exception-based escalation rules",
      "Owner Command Center reporting pack",
      "Growth readiness assessment",
    ],
    exit: "Ahmed receives decisions and exceptions, not every task.",
  },
];

function RoadmapPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Roadmap"
        title="90-Day Transformation Roadmap"
        intro="The sequence is deliberate. Documentation before standardization, standardization before delegation. Skipping a stage is the most common reason owner-dependent businesses fail to scale."
      />

      <Section title="Transformation Arc" kicker="Strategic theme">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
          <Flow
            steps={[
              "Chaos",
              "Documentation",
              "Standardization",
              "Delegation",
              "Control",
              "Growth",
            ]}
            tone="gold"
          />
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Ahmed built demand. The next phase builds the infrastructure that demand now requires.
          </p>
        </div>
      </Section>

      <Section
        title="90-Day Implementation Timeline"
        kicker="Days 1–90"
        description="Foundation (Days 1–30), Build (Days 31–60), Implement and Transfer (Days 61–90). Discovery and validation is delivered as a complimentary strategic diagnostic."
      >
        <div className="mb-4 grid gap-4 sm:grid-cols-3">
          <Panel eyebrow="Days 1–30" title="Foundation" tone="gold">
            <p className="text-sm leading-relaxed">
              Diagnose, validate and document the real business — no assumptions carried forward.
            </p>
          </Panel>
          <Panel eyebrow="Days 31–60" title="Build">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Construct recipes, SOPs, systems, digital assets and the catering engine.
            </p>
          </Panel>
          <Panel eyebrow="Days 61–90" title="Implement + Transfer" tone="green">
            <p className="text-sm leading-relaxed">
              Train the team, activate the systems and transfer control back to Zaki.
            </p>
          </Panel>
        </div>
        <Timeline
          columns={["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"]}
          rows={[
            { label: "Discovery & validation", start: 1, span: 2, tone: "gold", note: "Complimentary · $0" },
            { label: "Business diagnostic", start: 1, span: 3, tone: "gold" },
            { label: "Recipe documentation", start: 3, span: 5 },
            { label: "SOP architecture", start: 4, span: 5 },
            { label: "People & role structure", start: 5, span: 4 },
            { label: "Training program", start: 7, span: 4 },
            { label: "Food truck operating system", start: 6, span: 4 },
            { label: "Menu & channel alignment", start: 4, span: 3 },
            { label: "Website & digital build", start: 4, span: 6 },
            { label: "CRM & customer capture", start: 6, span: 4 },
            { label: "Reputation engine", start: 5, span: 3 },
            { label: "Catering engine", start: 7, span: 4 },
            { label: "Communication support", start: 2, span: 11, tone: "gold" },
            { label: "Management reporting", start: 9, span: 4 },
            { label: "Owner relief & handover", start: 10, span: 3, tone: "green" },
          ]}
        />
        <div className="mt-4">
          <Note>
            Discovery and validation is provided at no charge to the client — a JARA AI goodwill
            investment in the relationship.
          </Note>
        </div>
      </Section>

      <Section title="Phase Detail" kicker="Days 1–90" description="Each phase has a goal, a deliverable set and a clear exit condition.">
        <div className="grid gap-4 lg:grid-cols-2">
          {PHASES.map((p, i) => (
            <Panel
              key={p.phase}
              eyebrow={`${p.phase} · ${p.window}`}
              title={p.title}
              tone={i === 0 ? "gold" : "default"}
            >
              <p className="text-sm leading-relaxed text-muted-foreground">{p.goal}</p>
              <div className="mt-4">
                <p className="eyebrow">Deliverables</p>
                <div className="mt-2">
                  <Bullets items={p.deliverables} tone="green" />
                </div>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="eyebrow">Exit condition</p>
                <p className="mt-1.5 text-sm text-gold">{p.exit}</p>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section title="Ownership & Cadence" kicker="Governance">
        <Table
          head={["Track", "Zaki owner", "JARA owner", "Cadence", "Status"]}
          rows={[
            ["Discovery & data", "Ahmed", "Radwan", "Weekly session", <Pill tone="warn">Not started</Pill>],
            ["Recipes & SOPs", "Kitchen lead", "JARA documentation", "Weekly batch", <Pill tone="warn">Not started</Pill>],
            ["Training", "Manager", "JARA program design", "Bi-weekly", <Pill tone="warn">Not started</Pill>],
            ["Digital & reputation", "Manager", "JARA systems", "Weekly report", <Pill tone="warn">Not started</Pill>],
            ["Catering pipeline", "Ahmed", "JARA sales assets", "Weekly review", <Pill tone="warn">Not started</Pill>],
            ["Owner reporting", "Ahmed", "JARA reporting", "Weekly + monthly", <Pill tone="warn">Not started</Pill>],
          ]}
        />
        <div className="mt-4">
          <Note>
            Dates and start conditions activate once the engagement is confirmed and discovery is
            scheduled.
          </Note>
        </div>
      </Section>
    </div>
  );
}
