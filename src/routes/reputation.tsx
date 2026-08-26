import { createFileRoute } from "@tanstack/react-router";
import {
  AssetPlaceholder,
  Bullets,
  Flow,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/reputation")({
  head: () => ({
    meta: [
      { title: "Reputation & Review Management — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "The Zaki Reputation Engine: review generation, monitoring, AI-assisted responses, escalation and weekly reporting without consuming owner time.",
      },
      { property: "og:title", content: "Reputation & Review Management — Zaki Grill" },
      {
        property: "og:description",
        content: "Positive sentiment exists. Review volume is not yet systematically built.",
      },
    ],
  }),
  component: ReputationPage,
});

function ReputationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Reputation"
        title="Reputation Engine & Review Management"
        intro="Customer sentiment toward Zaki is positive and third-party ratings are observed as strong. What is missing is a system that reliably converts satisfied customers into public reviews and handles responses without occupying the owner."
      />

      <Section title="The Zaki Reputation Engine" kicker="Pillar 09">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
          <div className="mx-auto max-w-lg">
            <Flow
              vertical
              steps={[
                "Service / order",
                "Happy customer",
                "QR / SMS / email prompt",
                "Review request",
                "Google / Yelp",
                "Response",
                "Reputation growth",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Review Management System" kicker="Pillar 09 · Owner relief" description="Ahmed should not personally manage every review. The system drafts; a human approves.">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Components" title="What gets built">
            <Bullets
              tone="green"
              items={[
                "Review monitoring across Google, Yelp and marketplaces",
                "Response templates by scenario",
                "AI-assisted response drafting",
                "Negative review escalation path",
                "Weekly reputation report",
                "Automated review request triggers",
                "Human approval retained at every step",
              ]}
            />
          </Panel>
          <Panel eyebrow="Routine" title="Weekly reputation cadence (concept)" tone="green">
            <Table
              head={["Cadence", "Action", "Owner"]}
              rows={[
                ["Daily", "New reviews reviewed and drafted", "Manager / AI assist"],
                ["Daily", "Negative review escalated within 24h", "Manager → Ahmed"],
                ["Weekly", "Reputation summary report", "JARA / manager"],
                ["Weekly", "Review request performance check", "Manager"],
                ["Monthly", "Channel rating trend review", "Ahmed"],
              ]}
            />
          </Panel>
        </div>
      </Section>

      <Section title="Reputation Evidence" kicker="Batch 4" description="Ratings and review counts will be recorded here only from verified screenshots.">
        <Table
          head={["Platform", "Rating", "Review volume", "Response rate", "Status"]}
          rows={[
            ["Google", "—", "—", "—", <Pill tone="warn">Not yet verified</Pill>],
            ["Yelp", "—", "—", "—", <Pill tone="warn">Not yet verified</Pill>],
            ["DoorDash", "—", "—", "—", <Pill tone="warn">Not yet verified</Pill>],
            ["Grubhub", "—", "—", "—", <Pill tone="warn">Not yet verified</Pill>],
            ["Facebook", "—", "—", "—", <Pill tone="warn">Not yet verified</Pill>],
          ]}
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <AssetPlaceholder label="Google reviews screenshot" batch="Batch 4" ratio="4/3" />
          <AssetPlaceholder label="Yelp reviews screenshot" batch="Batch 4" ratio="4/3" />
          <AssetPlaceholder label="Marketplace ratings" batch="Batch 4" ratio="4/3" />
        </div>
        <div className="mt-4">
          <Note>
            Observed sentiment is positive. Exact ratings and volumes are entered only from captured
            evidence.
          </Note>
        </div>
      </Section>
    </div>
  );
}
