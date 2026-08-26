import { createFileRoute } from "@tanstack/react-router";
import {
  AssetFrame,
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
import { JARA_CONCEPT_NOTE, zakiAssets } from "@/lib/zaki-assets";

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
        intro="Zaki is not a small food-hall vendor. It is a multi-format restaurant operation: Budd Dairy Food Hall, a Worthington location, four food trucks working the Columbus market and events, plus catering and marketplace distribution — all coordinated informally."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Location 01" value="Budd Dairy" note="1086 N 4th St, Columbus, OH 43201" tone="green" />
        <StatCard label="Location 02" value="Worthington" note="Second fixed position" tone="green" />
        <StatCard label="Mobile fleet" value="4 Food Trucks" note="Columbus market + events" tone="green" />
        <StatCard label="Events & catering" value="Active, informal" note="No structured pipeline yet" tone="warn" />
      </div>

      <Section title="Business Footprint" kicker="Market presence" description="Zaki already holds meaningful market presence and customer recognition across four operating formats.">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
          <div className="grid items-stretch gap-3 sm:grid-cols-4">
            {[
              { l: "Budd Dairy", d: "Food hall unit · Columbus" },
              { l: "Worthington", d: "Second location" },
              { l: "4 Food Trucks", d: "Market + event coverage" },
              { l: "Events / Catering", d: "B2B and private demand" },
            ].map((f) => (
              <div
                key={f.l}
                className="rounded-md border border-primary/25 bg-accent/50 p-5 text-center"
              >
                <p className="font-display text-lg font-bold leading-tight text-accent-foreground">
                  {f.l}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Budd Dairy + Worthington + 4 Food Trucks + Events / Catering
          </p>
        </div>
      </Section>

      <Section title="Operating Model" kicker="Structure" description="Four revenue engines sit under one brand, with digital channels wrapped around the operation.">
        <TreeDiagram
          root="Zaki Grill"
          branches={[
            { label: "Budd Dairy", items: ["Food hall unit", "Walk-in traffic", "Food hall footfall"] },
            { label: "Worthington", items: ["Fixed location", "Neighborhood demand", "Local discovery"] },
            { label: "Food Trucks", items: ["Truck 1", "Truck 2", "Truck 3", "Truck 4"] },
            { label: "Events & Catering", items: ["Corporate lunches", "Events & festivals", "Private orders"] },
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

      <Section title="Physical Footprint" kicker="Credibility" description="Location and operations photography proves that Zaki is an operating business with permanent commitments, not a pop-up. Placeholders hold their position until verified Zaki imagery is supplied.">
        <div className="grid gap-4 lg:grid-cols-2">
          <AssetFrame
            label="Budd Dairy location"
            batch="Batch 3"
            src={buddDairy.url}
            alt="Budd Dairy Food Hall exterior with signage and patio seating"
            ratio="3/2"
            type="evidence"
            caption="Budd Dairy Food Hall — 1086 N 4th Street, Columbus, OH 43201. To be replaced with verified Zaki location photography when supplied."
          />
          <AssetFrame
            label="Worthington location"
            batch="Batch 3"
            ratio="3/2"
            type="evidence"
            caption="Second fixed Zaki location — exterior and service area photography required."
          />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AssetFrame label="Food truck fleet" batch="Batch 3" src={zakiAssets.truckFleet} alt="Multiple red Zaki food trucks with a uniformed team" type="concept" caption={`Fleet and crew presentation direction. ${JARA_CONCEPT_NOTE}`} />
          <AssetFrame label="Counter / service operation" batch="Batch 3" src={zakiAssets.team} alt="Zaki service counter with staff assembling a bowl under menu boards" type="concept" caption={`Service line and ordering experience. ${JARA_CONCEPT_NOTE}`} />
          <AssetFrame label="Kitchen / prep operation" batch="Batch 3" type="evidence" caption="Production and prep environment." />
          <AssetFrame label="Events & truck activation" batch="Batch 3" src={zakiAssets.truckEvent} alt="Zaki food truck serving customers at an indoor event with seating" type="concept" caption={`Event and activation format. ${JARA_CONCEPT_NOTE}`} />

        </div>
        <div className="mt-4">
          <Note>
            No stock or invented restaurant photography is used anywhere. Missing assets remain as
            clean labelled placeholders.
          </Note>
        </div>
      </Section>

      <Section title="Revenue Channel Map" kicker="Channels" description="Channel economics are unverified. Structure is documented first; numbers are added only once confirmed.">
        <Table
          head={["Channel", "Status", "Customer ownership", "Margin exposure", "Data status"]}
          rows={[
            ["Budd Dairy walk-up", "Permanent", "Zaki (anonymous)", "Best", "Not yet verified"],
            ["Worthington location", "Permanent", "Zaki (anonymous)", "Best", "Not yet verified"],
            ["Food trucks", "Active, 4 units", "Zaki (anonymous)", "Best", "Not yet verified"],
            ["Events", "Active", "Zaki (anonymous)", "Strong", "Not yet verified"],
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
