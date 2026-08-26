import { createFileRoute } from "@tanstack/react-router";
import {
  AssetFrame,
  AssetPlaceholder,
  Bullets,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  Table,
  Unverified,
} from "@/components/dash/primitives";
import { JARA_CONCEPT_NOTE, zakiAssets } from "@/lib/zaki-assets";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu Intelligence — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Menu intelligence for Zaki Grill: observed items and prices, channel comparison matrix, standardization issues and the menu engineering framework.",
      },
      { property: "og:title", content: "Menu Intelligence — Zaki Grill" },
      {
        property: "og:description",
        content: "Observed prices vary by channel. Nothing is treated as an error until audited.",
      },
    ],
  }),
  component: MenuPage,
});

const OBSERVED: [string, string, string][] = [
  ["Hummus and Harissa", "Appetizers", "$8"],
  ["Grape Leaves", "Appetizers", "$8"],
  ["Baba Ghannuj", "Appetizers", "$8"],
  ["Falafel Balls", "Appetizers", "$8"],
  ["Hummus", "Appetizers", "≈ $10"],
  ["Greek Salad", "Salads", "≈ $11"],
  ["Chicken Shawarma Sandwich", "Pita wraps", "$12"],
  ["Revenge of the Falafel Sandwich", "Pita wraps", "$12"],
  ["Gyro the Hero Sandwich", "Pita wraps", "$12–$14"],
  ["Chicken Gyro", "Mains", "≈ $14"],
  ["Chicken Shawarma", "Mains", "≈ $14"],
  ["Zaki Chicken Bowl", "Bowls", "≈ $16–$20"],
  ["Gyro Bowl", "Bowls", "≈ $16–$20"],
  ["Falafel Bowl", "Bowls", "Not yet verified"],
  ["Side of Meat", "Extras", "Not yet verified"],
  ["Fries", "Sides", "$5–$12"],
  ["Baklava", "Desserts", "≈ $8"],
];

function MenuPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Menu"
        title="Menu Intelligence & Channel Consistency"
        intro="Observed online menu data collected from public channels. Price and description variation is documented, not judged: variations are only confirmed as errors after the full menu audit with Ahmed."
      />

      <div className="mt-6">
        <Note tone="warn">
          All figures below are observed digital examples. Every discrepancy is labelled REQUIRES
          VERIFICATION until the audit is complete. Missing data is never invented.
        </Note>
      </div>

      <Section title="Observed Menu Database" kicker="Batch 5 will complete this" description="Categories observed online: Best Sellers, Appetizers, Mains, Sides, Desserts, Beverages, Bowls, Pita Wraps, Extras, Salads.">
        <Table
          head={["Item", "Category", "Observed price", "Description", "Photo", "Status"]}
          rows={OBSERVED.map(([item, cat, price]) => [
            <span className="font-medium">{item}</span>,
            cat,
            price,
            <Pill>Not captured</Pill>,
            <Pill>Pending</Pill>,
            price.includes("–") ? <Unverified /> : <Unverified>Not yet verified</Unverified>,
          ])}
          caption="Descriptions, modifiers, dietary labels and photography availability are captured in Batch 5."
        />
      </Section>

      <Section title="Channel Matrix" kicker="Cross-platform comparison" description="Structure ready for population as Batch 4 and Batch 5 screenshots arrive. Each cell records price, description, photo and availability.">
        <Table
          head={["Item", "Zaki Direct", "Toast", "DoorDash", "Grubhub", "Seamless"]}
          rows={[
            ["Zaki Chicken Bowl", "—", "—", "≈ $16–$20", "—", "—"],
            ["Gyro Bowl", "—", "—", "≈ $16–$20", "—", "—"],
            ["Chicken Shawarma Sandwich", "—", "—", "$12", "—", "—"],
            ["Gyro the Hero Sandwich", "—", "—", "$12–$14", "—", "—"],
            ["Hummus", "—", "—", "≈ $10", "—", "—"],
            ["Fries", "—", "—", "$5–$12", "—", "—"],
          ]}
          caption="Blank cells mean the channel has not yet been captured — they do not mean the item is unavailable."
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <AssetPlaceholder label="Current physical menu / menu board" batch="Batch 5" ratio="4/3" />
          <AssetPlaceholder label="Current online menu" batch="Batch 5" ratio="4/3" />
          <AssetPlaceholder label="Modifiers / options / ordering screen" batch="Batch 5" ratio="4/3" />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <AssetFrame
            label="Bowl category reference"
            batch="Batch 2"
            src={zakiAssets.falafelBowl}
            alt="Falafel bowl with rice, vegetables and tahini"
            ratio="4/3"
            type="concept"
            caption={`Menu photography direction for the bowl category. ${JARA_CONCEPT_NOTE}`}
          />
          <AssetFrame
            label="Mezze & sides reference"
            batch="Batch 2"
            src={zakiAssets.hummusHarissa}
            alt="Hummus with harissa and pita"
            ratio="4/3"
            type="concept"
            caption={`Menu photography direction for sides and spreads. ${JARA_CONCEPT_NOTE}`}
          />
          <AssetFrame
            label="Packaging & delivery presentation"
            batch="Batch 2"
            src={zakiAssets.takeAwayContainers}
            alt="Branded Zaki takeaway containers and wrap"
            ratio="4/3"
            type="concept"
            caption={`How menu items should appear in delivery channels. ${JARA_CONCEPT_NOTE}`}
          />
        </div>
      </Section>

      <Section title="Standardization Issues To Investigate" kicker="Audit checklist">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Consistency" title="What the audit checks per channel">
            <Bullets
              columns={2}
              items={[
                "Price consistency",
                "Description consistency",
                "Image consistency",
                "Category structure",
                "Modifier structure",
                "Dietary labels",
                "Operating hours",
                "Brand presentation",
                "Item availability",
                "Promotions",
              ]}
            />
          </Panel>
          <Panel eyebrow="Commercial" title="Why it matters" tone="warn">
            <Bullets
              tone="warn"
              items={[
                "Inconsistent pricing erodes trust and invites refund requests",
                "Weak descriptions reduce conversion on marketplaces",
                "Missing photography lowers placement and average order value",
                "Unmaintained menus create operational friction in the kitchen",
                "Platform-owned customers cannot be marketed to directly",
              ]}
            />
          </Panel>
        </div>
      </Section>

      <Section title="Menu Engineering Framework" kicker="Pillar 06" description="Applied only once sales and food-cost data exists. No sales or cost data is fabricated.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {([
            ["Star", "High margin · High popularity", "Protect and feature", "green"],
            ["Plowhorse", "Low margin · High popularity", "Re-engineer cost or price", "gold"],
            ["Puzzle", "High margin · Low popularity", "Reposition and promote", "gold"],
            ["Dog", "Low margin · Low popularity", "Simplify or remove", "warn"],
          ] as const).map(([t, d, a, tone]) => (
            <Panel key={t} tone={tone} eyebrow={d} title={t}>

              <p className="text-sm text-secondary-foreground">{a}</p>
            </Panel>
          ))}
        </div>
        <div className="mt-4">
          <Table
            head={["Input required", "Source", "Status"]}
            rows={[
              ["Item-level sales volume", "Toast / POS export", <Unverified>Awaiting data</Unverified>],
              ["Food cost per item", "Recipe costing project", <Unverified>Awaiting data</Unverified>],
              ["Contribution margin", "Derived", <Unverified>Awaiting data</Unverified>],
              ["Preparation complexity & labor", "Kitchen observation", <Unverified>Awaiting data</Unverified>],
              ["Packaging cost", "Purchasing records", <Unverified>Awaiting data</Unverified>],
              ["Delivery suitability", "Channel review", <Unverified>Awaiting data</Unverified>],
            ]}
          />
        </div>
      </Section>
    </div>
  );
}
