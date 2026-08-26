import { createFileRoute } from "@tanstack/react-router";
import {
  AssetFrame,
  AssetPlaceholder,
  Bullets,
  Flow,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  StageFlow,
  Table,
} from "@/components/dash/primitives";
import { JARA_CONCEPT_NOTE, zakiAssets } from "@/lib/zaki-assets";

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

      <Section
        title="Catering Channels"
        kicker="Two distinct engines"
        description="Direct Zaki catering and marketplace / corporate catering are different businesses with different economics and different customer ownership."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Channel A" title="Direct Zaki catering" tone="green">
            <Bullets
              tone="green"
              items={[
                "Zaki owns the customer relationship and the data",
                "Best margin position",
                "Requires packages, quote process and follow-up discipline",
                "Currently informal — the largest catering opportunity",
              ]}
            />
          </Panel>
          <Panel eyebrow="Channel B" title="Marketplace / corporate catering" tone="gold">
            <Bullets
              items={[
                "Access to existing corporate demand",
                "Platform holds the customer relationship",
                "Commission exposure on every order",
                "ezCater — channel opportunity, to be validated",
              ]}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill tone="gold">ezCater</Pill>
              <Pill tone="warn">Channel opportunity / to validate</Pill>
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="Future Catering State" kicker="Target funnel">
        <StageFlow
          stages={[
            { label: "Demand", items: ["Corporate", "University", "Events", "Private", "Recurring"] },
            { label: "Entry", items: ["Website inquiry", "Direct contact", "Marketplace / ezCater"] },
            { label: "Process", items: ["Qualification", "Package", "Quote", "Follow-up"] },
            { label: "Delivery", items: ["Production standard", "Setup standard", "Presentation standard"] },
            { label: "Retention", items: ["Review request", "CRM record", "Repeat account"] },
          ]}
        />
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
          <div className="grid gap-4">
            <AssetFrame
              label="Catering setup / buffet presentation"
              batch="Batch 2"
              src={zakiAssets.cateringSpread}
              alt="Zaki catering buffet with hummus, gyro, rice, grilled chicken, falafel and pita"
              ratio="4/3"
              type="concept"
              caption={`Catering table and signage standard. ${JARA_CONCEPT_NOTE}`}
            />
            <AssetFrame
              label="Event & truck catering activation"
              batch="Batch 3"
              src={zakiAssets.truckEvent}
              alt="Zaki food truck serving guests at an indoor event"
              ratio="4/3"
              type="concept"
              caption={`On-site event catering format. ${JARA_CONCEPT_NOTE}`}
            />
          </div>
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
