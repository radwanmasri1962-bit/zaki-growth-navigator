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

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering, B2B & Customer Communication — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Catering pipeline design, corporate and university opportunities, and AI-assisted customer communication support that returns time to the owner.",
      },
      { property: "og:title", content: "Catering & Customer Communication — Zaki Grill" },
      {
        property: "og:description",
        content: "Turn catering from incoming luck into a managed sales pipeline.",
      },
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Catering"
        title="Catering Pipeline & Customer Communication"
        intro="Catering is currently handled reactively as inquiries arrive. Structured as a pipeline with packages, quotes and follow-up, it becomes the highest-margin growth channel available to Zaki without new locations."
      />

      <Section title="Catering Sales Pipeline" kicker="Pillar 11">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
          <Flow
            steps={[
              "Lead",
              "Inquiry",
              "Qualification",
              "Menu / package",
              "Quote",
              "Follow-up",
              "Confirmation",
              "Production",
              "Delivery",
              "Payment",
              "Review / repeat",
            ]}
          />
        </div>
      </Section>

      <Section title="B2B Opportunity Areas" kicker="Demand segments" description="Segments to be validated during discovery — no volume or revenue assumptions are stated.">
        <Table
          head={["Segment", "Fit", "Entry point", "Repeat potential", "Status"]}
          rows={[
            ["Corporate lunches", "Strong — bowls travel well", "Office managers, HR", "High / recurring", <Pill tone="warn">To validate</Pill>],
            ["University business", "Strong — halal demand", "Student orgs, departments", "Seasonal recurring", <Pill tone="warn">To validate</Pill>],
            ["Events & festivals", "Existing truck capability", "Event organizers", "Annual", <Pill tone="warn">To validate</Pill>],
            ["Private events", "Strong", "Direct inquiry", "Occasional", <Pill tone="warn">To validate</Pill>],
            ["Recurring accounts", "Highest value", "Account agreement", "Contracted", <Pill tone="warn">To validate</Pill>],
          ]}
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Panel eyebrow="Assets required" title="Sales collateral to build">
            <Bullets
              tone="green"
              items={[
                "Catering packages with clear per-person pricing structure",
                "One-page catering sheet and quote template",
                "Website catering inquiry form feeding a tracked pipeline",
                "Follow-up sequence with defined intervals",
                "Post-event review and repeat-order prompt",
              ]}
            />
          </Panel>
          <AssetPlaceholder label="Catering setup / tray photography" batch="Batch 2" ratio="4/3" />
        </div>
      </Section>

      <Section title="Customer Communication System" kicker="Pillar 10 · Immediate owner relief" description="Ahmed sometimes needs support communicating professionally with major customers, catering clients, organizations, event organizers, suppliers, staff and partners.">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Panel eyebrow="Flow" title="Rough idea in, professional output out" tone="green">
            <Flow
              vertical
              steps={[
                "Ahmed provides a rough idea or voice note",
                "JARA system drafts",
                "Email · Proposal · Quote · Follow-up · Staff notice",
                "Ahmed approves and sends",
              ]}
            />
          </Panel>
          <Panel eyebrow="Output types" title="Templates library">
            <Bullets
              items={[
                "Catering proposal",
                "Price quote",
                "Client follow-up",
                "Supplier request",
                "Staff notice",
                "Complaint response",
                "Event confirmation",
                "Invoice cover note",
              ]}
              columns={2}
            />
          </Panel>
        </div>
        <div className="mt-4">
          <Note>
            This is the fastest visible win in the engagement: it changes how Zaki appears to
            high-value customers without changing a single kitchen process.
          </Note>
        </div>
      </Section>
    </div>
  );
}
