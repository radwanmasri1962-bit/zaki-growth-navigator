import { createFileRoute } from "@tanstack/react-router";
import {
  AssetPlaceholder,
  Bullets,
  Flow,
  KeyValue,
  Note,
  PageHeader,
  Panel,
  Section,
  StatCard,
  Table,
  TreeDiagram,
} from "@/components/dash/primitives";
import buddDairy from "@/assets/budd-dairy.webp.asset.json";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business & Footprint — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "The Zaki Grill operating model: Budd Dairy Food Hall, four food trucks, catering and delivery channels, plus the business maturity assessment.",
      },
      { property: "og:title", content: "Business & Footprint — Zaki Grill" },
      {
        property: "og:description",
        content: "Operating model, physical footprint, revenue channels and maturity level.",
      },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Business"
        title="The Business As It Operates Today"
        intro="Zaki is not a startup restaurant. It is a multi-channel food operation with a permanent food hall unit, a mobile fleet, catering demand and marketplace distribution — all coordinated informally."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Permanent unit" value="Budd Dairy" note="1086 N 4th St, Columbus, OH 43201" tone="green" />
        <StatCard label="Mobile fleet" value="≈ 4 Trucks" note="Events, locations, opportunities" tone="green" />
        <StatCard label="Catering" value="Active, informal" note="No structured pipeline" tone="warn" />
        <StatCard label="Marketplaces" value="4+ channels" note="DoorDash · Grubhub · Seamless · Toast" tone="warn" />
      </div>

      <Section title="Operating Model" kicker="Structure" description="Three revenue engines sit under one brand, with digital channels wrapped around the operation.">
        <TreeDiagram
          root="Zaki Grill"
          branches={[
            { label: "Budd Dairy", items: ["Permanent stall", "Walk-in traffic", "Food hall footfall"] },
            { label: "Food Trucks", items: ["Truck 1", "Truck 2", "Truck 3", "Truck 4"] },
            { label: "Catering", items: ["Corporate lunches", "Events", "Private orders"] },
          ]}
        />
        <div className="mt-4">
          <Panel eyebrow="Digital layer" title="Channels wrapped around the operating model">
            <Flow
              tone="gold"
              steps={["Google", "Social", "Website", "Delivery apps", "Phone", "Walk-up"]}
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Each channel currently carries its own version of the menu, prices and brand
              presentation. See the Digital section for the audit architecture.
            </p>
          </Panel>
        </div>
      </Section>

      <Section title="Physical Footprint" kicker="Credibility" description="Location assets prove that Zaki is an operating business with permanent commitments, not a pop-up.">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <img
              src={buddDairy.url}
              alt="Budd Dairy Food Hall exterior with Zaki Grill signage and patio seating"
              className="aspect-[3/2] w-full object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <p className="eyebrow">Permanent location</p>
              <p className="mt-1.5 text-sm font-semibold">
                Budd Dairy Food Hall — 1086 N 4th Street, Columbus, OH 43201
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Illustrative rendering pending verified location photography (Batch 3).
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <AssetPlaceholder label="Food truck fleet photography" batch="Batch 3" ratio="16/9" />
            <AssetPlaceholder label="Counter / service operations" batch="Batch 3" ratio="16/9" />
          </div>
        </div>
      </Section>

      <Section title="Revenue Channel Map" kicker="Channels" description="Channel economics are unverified. Structure is documented first; numbers are added only once confirmed.">
        <Table
          head={["Channel", "Status", "Customer ownership", "Margin exposure", "Data status"]}
          rows={[
            ["Budd Dairy walk-up", "Permanent", "Zaki (anonymous)", "Best", "Not yet verified"],
            ["Food trucks", "Active, ≈4 units", "Zaki (anonymous)", "Best", "Not yet verified"],
            ["Catering / B2B", "Active, informal", "Zaki (known customer)", "Strong", "Not yet verified"],
            ["Toast / direct online", "Active", "Zaki", "Good", "Not yet verified"],
            ["DoorDash", "Active", "Platform", "Commission-heavy", "Not yet verified"],
            ["Grubhub / Seamless", "Active", "Platform", "Commission-heavy", "Not yet verified"],
          ]}
        />
        <div className="mt-4">
          <Note tone="warn">
            No sales, commission or food-cost figures are stated anywhere in this dashboard until
            they are supplied and verified during discovery.
          </Note>
        </div>
      </Section>

      <Section title="Business Maturity Model" kicker="Where Zaki sits today">
        <div className="grid gap-3 sm:grid-cols-5">
          {[
            { l: "Level 1", t: "Founder Driven", now: true },
            { l: "Level 2", t: "Documented", now: true, partial: true },
            { l: "Level 3", t: "Standardized" },
            { l: "Level 4", t: "Managed" },
            { l: "Level 5", t: "Scalable" },
          ].map((s) => (
            <div
              key={s.l}
              className={
                s.now
                  ? "rounded-lg border border-primary/30 bg-accent/60 p-5 shadow-card"
                  : "rounded-lg border border-border bg-card p-5"
              }
            >
              <p className="eyebrow">{s.l}</p>
              <p className="mt-2 font-display text-lg font-bold">{s.t}</p>
              {s.now ? (
                <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary">
                  {s.partial ? "Partially" : "Current"}
                </p>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Flow steps={["Today", "Systemized", "Scalable"]} tone="gold" />
        </div>
        <div className="mt-4">
          <Note>
            Preliminary JARA assessment: Zaki sits between Founder Driven and partially Documented,
            subject to full operational discovery.
          </Note>
        </div>
      </Section>

      <Section title="Market Position" kicker="Context">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Concept identity" title="What the market already recognizes">
            <Bullets
              tone="green"
              items={[
                "Halal Middle Eastern / Mediterranean positioning",
                "Generous portions and strong flavor profile",
                "Bowls, shawarma, gyro, falafel, hummus, lamb",
                "Visually appealing grilled products",
                "Food hall credibility plus street-level truck visibility",
              ]}
            />
          </Panel>
          <Panel eyebrow="Growth pattern" title="Organic, not corporate" tone="green">
            <p className="text-sm leading-relaxed">
              Zaki developed organically rather than through a structured restaurant-development
              system. That is the core of the engagement: the concept is validated, but the
              infrastructure behind it was never formally built.
            </p>
            <div className="mt-5">
              <KeyValue
                rows={[
                  ["Product", "Validated"],
                  ["Customers", "Existing"],
                  ["Recognition", "Established"],
                  ["Operating history", "Multi-year"],
                  ["Infrastructure", "Informal"],
                ]}
              />
            </div>
          </Panel>
        </div>
      </Section>
    </div>
  );
}
