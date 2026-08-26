import { createFileRoute } from "@tanstack/react-router";
import {
  Bullets,
  CompareColumns,
  Flow,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations Diagnostic — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Operational diagnostic for Zaki Grill: founder dependency map, kitchen and chef control, waste and portioning, plus the transformation pillars.",
      },
      { property: "og:title", content: "Operations Diagnostic — Zaki Grill" },
      {
        property: "og:description",
        content: "The bottleneck is not demand. The bottleneck is management capacity.",
      },
    ],
  }),
  component: OperationsPage,
});

const PILLARS = [
  ["01", "People & Staffing", "Recruitment, structure, accountability"],
  ["02", "Training", "Orientation to certification"],
  ["03", "Recipes & Product Control", "Founder knowledge into company IP"],
  ["04", "SOPs & Operations", "The Zaki Operations Manual"],
  ["05", "Chef / Kitchen Control", "Compliance, yields, waste, quality"],
  ["06", "Menu Engineering", "Margin, popularity, complexity"],
  ["07", "Brand & Visual Identity", "Polish without erasing personality"],
  ["08", "Digital Presence", "One coordinated ecosystem"],
  ["09", "Reputation & Reviews", "Systematic review generation"],
  ["10", "Customer Communication", "Professional, AI-assisted"],
  ["11", "Catering / B2B Sales", "A pipeline, not incoming luck"],
  ["12", "Management System", "Routines, reporting, controls"],
  ["13", "AI & Automation", "Quiet operational support"],
  ["14", "Owner Relief / Delegation", "Exceptions, decisions, KPIs"],
];

function OperationsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Operations"
        title="Operational Diagnostic & Transformation Pillars"
        intro="Zaki is effectively run as a one-man management system. Responsibilities across staffing, kitchen, product, trucks, customers and digital all converge on the founder. The diagnosis below separates the demand problem (there isn't one) from the management-capacity problem (there is)."
      />

      <Section title="Founder Dependency Map" kicker="Central business problem">
        <div className="rounded-lg border border-warn/30 bg-warn-soft/40 p-6 shadow-card sm:p-8">
          <div className="flex justify-center">
            <span className="rounded-md border border-warn/40 bg-card px-6 py-2.5 font-display text-lg font-bold text-warn">
              Ahmed
            </span>
          </div>
          <div className="mx-auto h-6 w-px bg-warn/40" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { h: "Staffing", items: ["Training", "Schedules", "Trucks", "Employee issues"] },
              { h: "Kitchen", items: ["Recipes", "Quality", "Chef", "Purchasing"] },
              { h: "Customers", items: ["Catering", "Emails", "Reviews", "Complaints"] },
            ].map((c) => (
              <div key={c.h} className="flex flex-col items-center gap-1.5">
                <div className="w-full rounded-md border border-warn/30 bg-card px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.1em] text-warn">
                  {c.h}
                </div>
                {c.items.map((i) => (
                  <div
                    key={i}
                    className="w-full rounded border border-border bg-card/80 px-3 py-1.5 text-center text-xs text-muted-foreground"
                  >
                    {i}
                  </div>
                ))}
                <span className="text-xs text-muted-foreground">etc.</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center font-display text-xl font-bold sm:text-2xl">
            The bottleneck is not demand.
            <br />
            The bottleneck is management capacity.
          </p>
        </div>
      </Section>

      <Section title="Transformation Pillars" kicker="Fourteen workstreams" description="Every consulting project in this engagement maps back to one of these pillars.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PILLARS.map(([n, t, d]) => (
            <div key={n} className="rule-card border-l-primary p-5">
              <p className="font-mono text-xs text-gold">{n}</p>
              <p className="mt-2 text-sm font-semibold leading-snug">{t}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Chef & Kitchen Control" kicker="Pillar 05" description="Ahmed specifically wants greater control over kitchen execution. Control comes from written standards plus a short daily verification routine.">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Control surface" title="What should be verifiable every day">
            <Bullets
              columns={2}
              items={[
                "Recipe compliance",
                "Preparation standards",
                "Yields",
                "Waste",
                "Portion control",
                "Purchasing",
                "Receiving",
                "Inventory",
                "Production & prep lists",
                "Cleaning",
                "Food safety",
                "Quality checks",
                "Chef accountability",
              ]}
            />
          </Panel>
          <Panel eyebrow="Example artifact" title="Daily kitchen control checklist (concept)" tone="green">
            <Table
              head={["Check", "Standard", "Owner", "Status"]}
              rows={[
                ["Prep list completed", "Before 11:00", "Chef", <Pill tone="green">Concept</Pill>],
                ["Portion audit — 3 items", "Within ±5% spec", "Lead", <Pill tone="green">Concept</Pill>],
                ["Waste log recorded", "End of shift", "Lead", <Pill tone="green">Concept</Pill>],
                ["Temperature log", "All holding units", "Chef", <Pill tone="green">Concept</Pill>],
                ["Cleaning sign-off", "Closing SOP", "Closer", <Pill tone="green">Concept</Pill>],
              ]}
              caption="Illustrative structure. Actual standards to be defined with Ahmed and the chef."
            />
          </Panel>
        </div>
      </Section>

      <Section title="Current State vs Future State" kicker="Operating model">
        <CompareColumns
          left={{
            title: "Zaki operations today",
            items: [
              "Founder-dependent",
              "Informal systems",
              "Knowledge in people's heads",
              "Fragmented digital channels",
              "Manual communication",
              "Inconsistent control",
              "Reactive staffing",
              "Limited documentation",
              "Owner firefighting",
            ],
          }}
          right={{
            title: "Zaki operations after transformation",
            items: [
              "System-dependent",
              "Documented operations",
              "Central knowledge base",
              "Coordinated digital ecosystem",
              "AI-assisted communication",
              "Standard controls",
              "Structured staffing",
              "Complete SOP library",
              "Owner oversight",
            ],
          }}
        />
      </Section>

      <Section title="Workstream Dependency Map" kicker="Sequencing" description="Work must be sequenced. Documentation precedes standardization; standardization precedes delegation.">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
          <div className="mx-auto max-w-md">
            <Flow vertical steps={["Discovery", "Operations audit"]} tone="gold" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["People", "Training", "SOPs"],
              ["Product", "Recipes", "Costing"],
              ["Digital", "Website", "Reputation"],
            ].map((col) => (
              <div key={col[0]}>
                <Flow vertical steps={col as string[]} />
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-md">
            <Flow vertical steps={["Management system", "Owner delegation", "Growth"]} tone="gold" />
          </div>
        </div>
        <div className="mt-4">
          <Note>
            Dependencies drive pricing sequencing: projects sold out of order deliver less value and
            require rework.
          </Note>
        </div>
      </Section>
    </div>
  );
}
