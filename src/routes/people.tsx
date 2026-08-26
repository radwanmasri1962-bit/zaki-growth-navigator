import { createFileRoute } from "@tanstack/react-router";
import {
  AssetFrame,
  AssetPlaceholder,
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
import { JARA_CONCEPT_NOTE, zakiAssets } from "@/lib/zaki-assets";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "People, Staffing & Training — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Staffing diagnostic and training system opportunity map for Zaki Grill: hiring, onboarding, scheduling, accountability and station certification.",
      },
      { property: "og:title", content: "People, Staffing & Training — Zaki Grill" },
      {
        property: "og:description",
        content: "From Ahmed managing every employee to a layered management structure.",
      },
    ],
  }),
  component: PeoplePage,
});

function PeoplePage() {
  return (
    <div>
      <PageHeader
        eyebrow="People"
        title="Staffing Structure & Training System"
        intro="Staffing is one of Ahmed's largest reported pain points. The diagnostic below covers the full employee lifecycle and proposes a management layer between the owner and the team."
      />

      <Section title="Staffing Diagnostic" kicker="Employee lifecycle" description="Status reflects a preliminary JARA assessment pending discovery interviews.">
        <Table
          head={["Area", "Current assumption", "Gap", "Status"]}
          rows={[
            ["Recruitment", "Informal, network-based", "No repeatable pipeline", <Pill tone="warn">Preliminary</Pill>],
            ["Job descriptions", "Not formally documented", "Roles undefined in writing", <Pill tone="warn">Preliminary</Pill>],
            ["Hiring process", "Owner-led, ad hoc", "No structured interview or criteria", <Pill tone="warn">Preliminary</Pill>],
            ["Onboarding", "On-the-job", "No orientation or first-week plan", <Pill tone="warn">Preliminary</Pill>],
            ["Employee files", "Unknown / partial", "Compliance and record risk", <Pill tone="warn">Not yet verified</Pill>],
            ["Scheduling", "Owner-managed", "Owner time cost, gap risk", <Pill tone="warn">Preliminary</Pill>],
            ["Attendance", "Informal", "No accountability record", <Pill tone="warn">Preliminary</Pill>],
            ["Performance", "Verbal feedback", "No review cadence", <Pill tone="warn">Preliminary</Pill>],
            ["Turnover", "Reported as a pain point", "Root causes undocumented", <Pill tone="warn">Not yet verified</Pill>],
            ["Management hierarchy", "Flat under owner", "No lead / manager layer", <Pill tone="warn">Preliminary</Pill>],
            ["Truck staffing", "Assigned per day", "No standard crew model", <Pill tone="warn">Preliminary</Pill>],
            ["Kitchen staffing", "Chef-dependent", "Key-person concentration", <Pill tone="warn">Preliminary</Pill>],
            ["Cross-training", "Limited", "No coverage flexibility", <Pill tone="warn">Preliminary</Pill>],
            ["Backup staffing", "Reactive", "Gaps escalate to owner", <Pill tone="warn">Preliminary</Pill>],
          ]}
        />
      </Section>

      <Section title="Management Structure" kicker="Future state">
        <CompareColumns
          left={{
            title: "Today — owner to every employee",
            items: [
              "Ahmed → every employee directly",
              "Every question, shift change and issue reaches the owner",
              "No accountable middle layer",
              "Coverage problems become owner problems",
            ],
          }}
          right={{
            title: "Target — layered operating structure",
            items: [
              "Ahmed → operating system → managers / leads → team",
              "Leads own shifts, standards and checklists",
              "Owner receives exceptions and KPIs only",
              "Coverage handled by cross-trained crews",
            ],
          }}
        />
        <div className="mt-4">
          <Flow steps={["Ahmed", "Operating system", "Managers / leads", "Team"]} />
        </div>
      </Section>

      <Section title="Team & Service Standards" kicker="Presentation direction" description="How the team should appear and operate at the counter once standards and training are in place.">
        <div className="grid gap-4 sm:grid-cols-2">
          <AssetFrame
            label="Team at the service counter"
            batch="Batch 3"
            src={zakiAssets.team}
            alt="Zaki staff assembling a bowl at the service counter under menu boards"
            ratio="4/3"
            type="concept"
            caption={`Uniform, counter layout and service posture direction. ${JARA_CONCEPT_NOTE}`}
          />
          <AssetFrame
            label="Crew on truck deployment"
            batch="Batch 3"
            src={zakiAssets.truckFleet}
            alt="Uniformed Zaki crew in front of the truck fleet"
            ratio="4/3"
            type="concept"
            caption={`Crew presentation across the fleet. ${JARA_CONCEPT_NOTE}`}
          />
        </div>
        <div className="mt-4">
          <AssetPlaceholder label="Actual team photography" batch="Batch 3" ratio="16/9" />
        </div>
      </Section>

      <Section title="Zaki Training System" kicker="Opportunity map" description="A modular training system converts standards into behaviour and makes delegation safe.">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Panel eyebrow="Modules" title="Proposed training library">
            <Bullets
              columns={2}
              tone="green"
              items={[
                "Orientation",
                "Brand story",
                "Food safety",
                "Guest service",
                "Opening",
                "Closing",
                "Station training",
                "Food preparation",
                "Recipes",
                "Portion control",
                "Packaging",
                "Truck procedures",
                "Cleaning",
                "Cash handling",
                "Customer complaints",
                "Catering",
                "Management training",
              ]}
            />
          </Panel>
          <Panel eyebrow="Progression" title="New hire to certified" tone="green">
            <Flow
              vertical
              steps={[
                "New hire",
                "Orientation",
                "Station training",
                "Certification",
                "Performance review",
              ]}
            />
          </Panel>
        </div>
        <div className="mt-4">
          <Note>
            Training content depends on recipe and SOP documentation. Sequence: document → train →
            certify → review.
          </Note>
        </div>
      </Section>
    </div>
  );
}
