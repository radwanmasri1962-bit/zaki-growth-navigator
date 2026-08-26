import { createFileRoute } from "@tanstack/react-router";
import zakiLogo from "@/assets/zaki-logo.png.asset.json";
import jaraLight from "@/assets/jara-logo-light.png.asset.json";
import jaraDark from "@/assets/jara-logo-dark.png.asset.json";
import buddDairy from "@/assets/budd-dairy.webp.asset.json";
import chickenBowl from "@/assets/chicken-bowl.webp.asset.json";
import shawarma from "@/assets/chicken-shawarma.png.asset.json";
import {
  AssetPlaceholder,
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/assets")({
  head: () => ({
    meta: [
      { title: "Asset Registry — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Asset batch registry tracking received and pending brand, product, operations, digital and concept assets across the Zaki Grill dashboard.",
      },
      { property: "og:title", content: "Asset Registry — Zaki Grill" },
      {
        property: "og:description",
        content: "What has been received, what is still pending, and where each asset lands.",
      },
    ],
  }),
  component: AssetsPage,
});

const RECEIVED = [
  { src: zakiLogo.url, label: "Zaki Grill logo", batch: "Batch 1", use: "Header, client view, brand section", dark: false },
  { src: jaraLight.url, label: "JARA AI logo (light)", batch: "Batch 1", use: "Footer, prepared-by attribution", dark: false },
  { src: jaraDark.url, label: "JARA AI logo (dark)", batch: "Batch 1", use: "Dark surfaces, client view", dark: true },
  { src: buddDairy.url, label: "Budd Dairy stall", batch: "Batch 3", use: "Business footprint, overview", dark: false },
  { src: chickenBowl.url, label: "Chicken bowl", batch: "Batch 2", use: "Product evidence, menu", dark: false },
  { src: shawarma.url, label: "Chicken shawarma", batch: "Batch 2", use: "Product evidence, catering", dark: false },
];

const BATCHES: { batch: string; name: string; items: string[]; status: "Partial" | "Pending" }[] = [
  {
    batch: "Batch 1",
    name: "Brand & identity",
    items: ["Zaki Grill logo", "JARA AI logos", "Additional logo variants", "Signage photography", "Packaging & branded materials"],
    status: "Partial",
  },
  {
    batch: "Batch 2",
    name: "Product & food photography",
    items: ["Bowls", "Wraps & shawarma", "Platters", "Sides & sauces", "Catering trays", "Menu board photography"],
    status: "Partial",
  },
  {
    batch: "Batch 3",
    name: "Locations & operations",
    items: ["Budd Dairy stall", "Kitchen and prep areas", "Service line", "Team at work", "Truck exteriors", "Truck interiors & setup"],
    status: "Partial",
  },
  {
    batch: "Batch 4",
    name: "Digital evidence",
    items: ["Google profile", "DoorDash", "Grubhub / Seamless", "Yelp", "Instagram", "Facebook", "Review screenshots", "Online ordering flow"],
    status: "Pending",
  },
  {
    batch: "Batch 5",
    name: "Menu & documents",
    items: ["Current menu", "Price lists", "Any existing recipe notes", "Catering documents", "Truck schedules"],
    status: "Pending",
  },
  {
    batch: "Batch 6",
    name: "Concept & future state",
    items: ["Proposed website mockups", "Dashboard concepts", "Training material concepts", "Brand refresh direction"],
    status: "Pending",
  },
];

function AssetsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Assets"
        title="Asset Registry & Batch Tracker"
        intro="The dashboard architecture was built first so assets drop into fixed positions. This registry tracks which batches have arrived, where each asset is used and what is still outstanding."
      />

      <Section title="Received Assets" kicker="In use" description="Assets already integrated across the dashboard.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RECEIVED.map((a) => (
            <div key={a.label} className="rounded-lg border border-border bg-card p-4 shadow-card">
              <div
                className={
                  "flex h-40 items-center justify-center overflow-hidden rounded-md border border-border " +
                  (a.dark ? "bg-foreground" : "bg-secondary/60")
                }
              >
                <img src={a.src} alt={a.label} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold">{a.label}</p>
                <Pill tone="green">{a.batch}</Pill>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">Used in: {a.use}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Batch Status" kicker="Upload pipeline">
        <Table
          head={["Batch", "Contents", "Items expected", "Status"]}
          rows={BATCHES.map((b) => [
            <span className="font-semibold">{b.batch}</span>,
            b.name,
            b.items.join(" · "),
            <Pill tone={b.status === "Partial" ? "gold" : "warn"}>{b.status}</Pill>,
          ])}
        />
      </Section>

      <Section title="Open Placeholders" kicker="Awaiting upload" description="Every placeholder in the dashboard maps to one of these expected assets.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AssetPlaceholder label="Truck exterior" batch="Batch 3" ratio="4/3" />
          <AssetPlaceholder label="Kitchen / prep line" batch="Batch 3" ratio="4/3" />
          <AssetPlaceholder label="Current menu board" batch="Batch 5" ratio="4/3" />
          <AssetPlaceholder label="Google profile" batch="Batch 4" ratio="4/3" />
          <AssetPlaceholder label="Marketplace listings" batch="Batch 4" ratio="4/3" />
          <AssetPlaceholder label="Review screenshots" batch="Batch 4" ratio="4/3" />
          <AssetPlaceholder label="Catering tray setup" batch="Batch 2" ratio="4/3" />
          <AssetPlaceholder label="Website mockup" batch="Batch 6" ratio="4/3" />
        </div>
        <div className="mt-4">
          <Note>
            Upload assets in any order — each one replaces its placeholder in position without
            restructuring the page.
          </Note>
        </div>
      </Section>

      <Section title="Usage Rules" kicker="Brand discipline">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Zaki Grill" title="Dominant brand" tone="green">
            <p className="text-sm leading-relaxed">
              Zaki Grill leads every page and carries the business narrative. Its logo appears in the
              primary header position and in all client-facing material.
            </p>
          </Panel>
          <Panel eyebrow="JARA AI" title="Strategy architect">
            <p className="text-sm leading-relaxed text-muted-foreground">
              JARA AI appears as the preparing authority — footer attribution, document credit and
              methodology framing. It never competes with Zaki for visual dominance.
            </p>
          </Panel>
        </div>
      </Section>
    </div>
  );
}
