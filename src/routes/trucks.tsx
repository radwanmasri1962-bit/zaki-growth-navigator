import { createFileRoute } from "@tanstack/react-router";
import {
  AssetPlaceholder,
  Bullets,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  StatCard,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/trucks")({
  head: () => ({
    meta: [
      { title: "Food Truck Operations — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Food truck operations opportunity for Zaki Grill: four-truck complexity, control points, checklists and a Food Truck Command Center concept.",
      },
      { property: "og:title", content: "Food Truck Operations — Zaki Grill" },
      {
        property: "og:description",
        content: "Four trucks create the most operational complexity in the business.",
      },
    ],
  }),
  component: TrucksPage,
});

const TRUCKS = ["Truck 1", "Truck 2", "Truck 3", "Truck 4"];

function TrucksPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Trucks"
        title="Food Truck Operations"
        intro="Approximately four trucks operate around Columbus across locations and events. A mobile fleet multiplies every operational variable: staffing, prep, inventory, equipment and cash handling — currently coordinated by the owner."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Fleet size" value="≈ 4 Trucks" note="Exact count to confirm" tone="green" />
        <StatCard label="Coordination" value="Owner-led" note="Daily assignment by phone" tone="warn" />
        <StatCard label="Checklists" value="Informal" note="No standard open/close" tone="warn" />
        <StatCard label="Reporting" value="None documented" note="Sales, waste, issues" tone="warn" />
      </div>

      <Section title="Control Points" kicker="What a truck system must control">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Per truck, per day" title="Operational variables">
            <Bullets
              columns={2}
              items={[
                "Truck assignment",
                "Event / location",
                "Driver",
                "Staff crew",
                "Departure time",
                "Arrival",
                "Inventory loaded",
                "Prep completed",
                "Fuel",
                "Equipment check",
                "Opening checklist",
                "Closing checklist",
                "Sales recorded",
                "Waste logged",
                "Issues reported",
                "Maintenance",
              ]}
            />
          </Panel>
          <Panel eyebrow="Why it matters" title="Complexity without a system" tone="warn">
            <Bullets
              tone="warn"
              items={[
                "Product consistency varies by crew and truck",
                "Missing inventory becomes a lost sales day",
                "Equipment failures surface as owner emergencies",
                "Cash handling risk rises with distributed operations",
                "No comparable performance data between trucks",
              ]}
            />
          </Panel>
        </div>
      </Section>

      <Section title="Food Truck Command Center" kicker="Concept" description="Conceptual daily view. All values are placeholders — no operational data is fabricated.">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {TRUCKS.map((t) => (
            <div key={t} className="rule-card p-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <p className="truncate font-display text-lg font-bold">{t}</p>
                <Pill>Concept</Pill>
              </div>
              <dl className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Status", "—"],
                  ["Location", "—"],
                  ["Team", "—"],
                  ["Sales", "—"],
                  ["Issues", "—"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-mono text-xs">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Truck SOP Set" kicker="Documentation scope">
        <Table
          head={["SOP", "Purpose", "Owner", "Priority"]}
          rows={[
            ["Truck opening", "Standard setup, safety, temperature checks", "Crew lead", <Pill tone="green">High</Pill>],
            ["Truck setup on site", "Positioning, power, service flow", "Crew lead", <Pill tone="green">High</Pill>],
            ["Load & inventory sheet", "Prevent stockouts and over-loading", "Kitchen", <Pill tone="green">High</Pill>],
            ["Cash & POS handling", "Cash control and reconciliation", "Crew lead", <Pill tone="green">High</Pill>],
            ["Truck breakdown", "Safe teardown and transport", "Crew lead", <Pill tone="gold">Medium</Pill>],
            ["Truck closing & reporting", "Sales, waste, issues, maintenance", "Crew lead", <Pill tone="gold">Medium</Pill>],
            ["Maintenance log", "Preventive maintenance schedule", "Owner / lead", <Pill tone="gold">Medium</Pill>],
          ]}
        />
        <div className="mt-4">
          <Note>
            Truck SOPs depend on recipe and packaging standards. Sequence after core kitchen
            documentation.
          </Note>
        </div>
      </Section>

      <Section title="Fleet & Location Evidence" kicker="Assets">
        <div className="grid gap-4 sm:grid-cols-3">
          <AssetPlaceholder label="Zaki food truck exterior" batch="Batch 3" ratio="4/3" />
          <AssetPlaceholder label="Truck service window / crew" batch="Batch 3" ratio="4/3" />
          <AssetPlaceholder label="Columbus truck location map" batch="Batch 3" ratio="4/3" />
        </div>
      </Section>
    </div>
  );
}
