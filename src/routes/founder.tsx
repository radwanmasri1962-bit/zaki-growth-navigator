import { createFileRoute } from "@tanstack/react-router";
import {
  AssetPlaceholder,
  Bullets,
  CompareColumns,
  Flow,
  Note,
  PageHeader,
  Panel,
  Section,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder Profile — Ahmed | Zaki Grill × JARA AI" },
      {
        name: "description",
        content:
          "Founder profile: how Ahmed built Zaki Grill from limited resources, why founder-driven management now constrains the business, and the storytelling module.",
      },
      { property: "og:title", content: "Founder Profile — Ahmed" },
      {
        property: "og:description",
        content: "Ahmed built demand. The next stage requires systems.",
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Founder"
        title="Ahmed — Owner, Operator, Origin of the Brand"
        intro="Understanding Ahmed is essential to understanding the engagement. He arrived in the United States roughly twenty years ago with limited English, limited formal education and limited resources, and built Zaki into a recognizable Columbus food business through persistence, food knowledge and instinct."
      />

      <Section title="How the Business Was Built" kicker="Founder equation">
        <div className="rounded-lg border border-border bg-card p-8 shadow-card">
          <p className="eyebrow text-center">Ahmed built the business</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Instinct", "Food", "Hard work", "Customers", "Hustle"].map((t) => (
              <span
                key={t}
                className="rounded-md border border-gold/30 bg-gold-soft/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-gold"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-lg text-gold">↓</p>
          <p className="mt-2 text-center font-display text-2xl font-bold">Zaki Today</p>
          <p className="mt-6 text-center text-lg text-gold">↓</p>
          <p className="mt-2 text-center text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            The next stage requires systems
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Systems", "People", "Training", "Brand", "Digital", "Controls", "Delegation"].map((t) => (
              <span
                key={t}
                className="rounded-md border border-primary/25 bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-accent-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Demonstrated Founder Strengths" kicker="Assessment" description="Internally, Ahmed should be understood as a capable operator whose business has outgrown a single point of management — not as an incapable one.">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Proven" title="What Ahmed has demonstrated" tone="green">
            <Bullets
              tone="green"
              columns={2}
              items={[
                "Resilience",
                "Entrepreneurial instinct",
                "Strong work ethic",
                "Product intuition",
                "Customer understanding",
                "Street-level business intelligence",
                "Ability to survive difficult conditions",
                "Ability to create demand",
              ]}
            />
          </Panel>
          <Panel eyebrow="Constraint" title="Where founder-driven management now limits growth" tone="warn">
            <Bullets
              tone="warn"
              items={[
                "Decisions queue behind one person",
                "Knowledge lives in the founder's head, not in documents",
                "Delegation is difficult without written standards",
                "Time is consumed by daily firefighting rather than direction",
                "Growth would multiply the load rather than distribute it",
              ]}
            />
          </Panel>
        </div>
        <div className="mt-4">
          <Note>
            Internal observation only. This framing is not client facing in its current wording.
          </Note>
        </div>
      </Section>

      <Section title="Founder Story Module" kicker="Storytelling asset" description="Potentially reusable in website, PR, social, catering and brand storytelling.">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <Panel>
            <Flow
              vertical
              steps={[
                "20 years ago — arrives with limited resources and limited language",
                "Learns / works / builds",
                "Food business",
                "Customer following",
                "Food trucks",
                "Budd Dairy Food Hall",
                "Zaki today",
                "Next chapter — systems + team + scale",
              ]}
            />
          </Panel>
          <div className="grid gap-4">
            <AssetPlaceholder label="Ahmed / founder portrait" batch="Batch 3" ratio="4/5" />
            <AssetPlaceholder label="Team / kitchen image" batch="Batch 3" ratio="4/3" />
          </div>
        </div>
      </Section>

      <Section title="Owner Reality — Current vs Future" kicker="Engagement objective">
        <CompareColumns
          left={{
            title: "Owner doing everything",
            items: [
              "Every issue escalates to Ahmed",
              "Hiring, training and scheduling handled personally",
              "Recipes and quality controlled by presence, not documents",
              "Customer and catering communication written ad hoc",
              "Reviews and digital channels handled when time allows",
            ],
          }}
          right={{
            title: "Owner controlling a system",
            items: [
              "Ahmed receives exceptions, decisions, KPIs and approvals",
              "Managers and leads run daily operations against standards",
              "Recipes and SOPs are company property, not memory",
              "AI-assisted communication drafted for approval",
              "Reputation and digital channels run on a routine",
            ],
          }}
        />
      </Section>
    </div>
  );
}
