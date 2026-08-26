import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AssetPlaceholder,
  Bullets,
  Flow,
  HubDiagram,
  KeyValue,
  Note,
  Panel,
  PageHeader,
  Pill,
  Section,
  StatCard,
  Table,
} from "@/components/dash/primitives";
import chickenBowl from "@/assets/chicken-bowl.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Overview — Zaki Grill Transformation Map | JARA AI" },
      {
        name: "description",
        content:
          "Executive overview of the Zaki Grill business: footprint, product strength, digital fragmentation, founder dependency and the JARA AI transformation opportunity.",
      },
      { property: "og:title", content: "Overview — Zaki Grill Transformation Map" },
      {
        property: "og:description",
        content:
          "Business snapshot, strengths, gaps, priority actions and a 90-day transformation preview.",
      },
    ],
  }),
  component: Overview,
});

function Overview() {
  return (
    <div>
      <PageHeader
        eyebrow="Overview · Executive dashboard"
        title="Zaki Grill — Business Transformation & Opportunity Map"
        intro="Zaki Grill is an established Columbus, Ohio halal Mediterranean operation: Budd Dairy Food Hall, a Worthington location, four food trucks across the market and events, plus catering and delivery demand. This is a multi-format restaurant business with real market presence. It has grown organically and has now outgrown the way it is managed. This dashboard documents the business, diagnoses the operating model, maps the opportunity and prices the potential JARA AI engagement."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Business" value="Established" note="Multi-year operating history" tone="green" />
        <StatCard label="Locations" value="Budd Dairy + Worthington" note="Two fixed positions" tone="green" />
        <StatCard label="Mobile fleet" value="4 Food Trucks" note="Market + events coverage" tone="green" />
        <StatCard label="Product" value="Strong" note="Food and product appeal lead" tone="green" />
        <StatCard label="Digital presence" value="Fragmented" note="Assets not yet deployed" tone="warn" />
        <StatCard label="Operating model" value="Founder Dependent" note="Management capacity is the limit" tone="warn" />
      </div>

      <Section title="Project Summary" kicker="Snapshot">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Detail" title="Zaki business snapshot">
            <KeyValue
              rows={[
                ["Concept", "Halal Middle Eastern / Mediterranean"],
                ["Market", "Columbus, Ohio"],
                ["Permanent location", "Budd Dairy Food Hall, 1086 N 4th St"],
                ["Mobile operation", "≈ 4 food trucks"],
                ["Additional channel", "Catering / B2B (informal)"],
                ["Delivery channels", "DoorDash · Grubhub · Seamless · Toast"],
                ["Social", "Instagram · Facebook"],
                ["Owner / operator", "Ahmed — founder-led management"],
                ["Data status", "Preliminary — pending full discovery"],
              ]}
            />
          </Panel>
          <Panel eyebrow="Advance" title="Transformation opportunity" tone="green">
            <p className="text-sm leading-relaxed text-secondary-foreground">
              The bottleneck is not demand. The bottleneck is management capacity. Nearly every
              operational decision — staffing, recipes, kitchen, trucks, catering, customers,
              reviews — returns to the founder. The opportunity is to build the operating system
              around a concept that already works.
            </p>
            <div className="mt-5">
              <Flow steps={["Chaos", "Documentation", "Standardization", "Delegation", "Control", "Growth"]} />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-border bg-card p-4">
                <p className="eyebrow">JARA role</p>
                <p className="mt-1.5 text-sm font-semibold">External operating & transformation partner</p>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <p className="eyebrow">Central promise</p>
                <p className="mt-1.5 text-sm font-semibold">Give Ahmed back management capacity</p>
              </div>
            </div>
          </Panel>
        </div>
      </Section>

      <Section
        title="The Strategic Thesis"
        kicker="Positioning"
      >
        <div className="rounded-lg border border-gold/30 bg-gold-soft/40 p-8 text-center shadow-card sm:p-12">
          <p className="font-display text-2xl font-bold leading-snug sm:text-[2rem]">
            Zaki does not need to become something different.
            <br />
            It needs the systems to support what it has already become.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Ahmed built demand. Now build infrastructure.
          </p>
        </div>
      </Section>

      <Section title="Strengths & Gaps" kicker="Diagnostic at a glance">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="The foundation is already there" title="What Zaki already does well" tone="green">
            <Bullets
              tone="green"
              columns={2}
              items={[
                "Recognizable Columbus food concept",
                "Popular and generous food",
                "Strong product appeal",
                "Established customer following",
                "Positive customer sentiment",
                "Budd Dairy presence",
                "Worthington presence",
                "Four-food-truck fleet",
                "Existing delivery demand",
                "Distinct halal positioning",
                "Authentic founder story",
                "Strong entrepreneurial momentum",
              ]}
            />
          </Panel>
          <Panel eyebrow="Missing infrastructure" title="What Zaki does not yet have" tone="warn">
            <Bullets
              tone="warn"
              columns={2}
              items={[
                "No strong owned website",
                "No centralized operating system",
                "Incomplete recipe documentation",
                "Incomplete SOP architecture",
                "Limited structured training",
                "Chef control depends heavily on Ahmed",
                "Staffing remains a major owner burden",
                "Food truck management requires systems",
                "Digital channels are fragmented",
                "No structured CRM / customer database strategy",
                "No systematic reputation engine",
                "Google / Yelp review growth opportunity",
                "Catering infrastructure underdeveloped",
                "Direct catering funnel missing",
                "Professional communication support missing",
                "Management reporting is limited",
                "Excessive dependency on Ahmed",
              ]}
            />
          </Panel>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Note>
            This is a transformation project, not a rescue project. Preliminary JARA assessment —
            subject to full operational discovery.
          </Note>
          <Panel eyebrow="JARA progress" title="Professional food photography" tone="gold">
            <p className="text-sm leading-relaxed">
              A professional Zaki food-photography library has been developed by JARA AI and is
              available for deployment.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill tone="green">Completed</Pill>
              <Pill tone="gold">Available for deployment</Pill>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              The remaining weakness is not photography itself — it is the deployment and
              consistency of these assets across the customer journey.
            </p>
          </Panel>
        </div>
      </Section>

      <Section
        title="Owner Dependency"
        kicker="The central strategic insight"
        description="Ahmed currently functions as the operating hub of the business. Almost every decision path terminates with him. The objective is not to remove Ahmed from his company — it is to remove him from unnecessary daily operational dependency."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <HubDiagram
            eyebrow="Current state — everything flows to one person"
            tone="warn"
            inputs={[
              "Staffing",
              "Chef",
              "Recipes",
              "Training",
              "Food trucks",
              "Customers",
              "Catering",
              "Suppliers",
              "Reviews",
              "Digital",
              "Problems",
              "Big client communication",
              "Daily decisions",
            ]}
            hub="Ahmed"
            hubNote="Owner dependency"
          />
          <HubDiagram
            eyebrow="Future state — systems absorb the operation"
            tone="green"
            inputs={[
              "People system",
              "Recipe system",
              "SOP system",
              "Training system",
              "Truck system",
              "Catering system",
              "CRM",
              "Digital system",
              "Reputation system",
              "Management reporting",
            ]}
            hub="Ahmed"
            hubNote="Future role"
            roles={["Owner", "Leader", "Decision maker", "Relationship builder", "Growth driver"]}
          />
        </div>
        <div className="mt-4">
          <Note>
            Remove Ahmed from unnecessary daily operational dependency — not from the business he
            built.
          </Note>
        </div>
      </Section>

      <Section title="Priority Actions" kicker="Where to start" description="Sequenced by impact against effort. Full matrix in Opportunities.">
        <Table
          head={["Priority", "Action", "Why now", "Type"]}
          rows={[
            ["01", "Customer & catering communication support", "Immediate owner relief with almost no operational change", <Pill tone="green">Quick win</Pill>],
            ["02", "Digital presence cleanup & channel audit", "Fragmented information is visible to every customer today", <Pill tone="green">Quick win</Pill>],
            ["03", "Menu audit & price standardization", "Prices and descriptions differ by channel", <Pill tone="green">Quick win</Pill>],
            ["04", "Review & reputation engine", "Sentiment is positive but volume is not systematically built", <Pill tone="green">Quick win</Pill>],
            ["05", "Recipe capture (top items first)", "Founder knowledge is currently unprotected company IP", <Pill tone="gold">Medium</Pill>],
            ["06", "Job descriptions & staffing structure", "Staffing is the largest reported pain point", <Pill tone="gold">Medium</Pill>],
            ["07", "SOP library & training system", "Prerequisite for delegation", <Pill>Strategic</Pill>],
            ["08", "Truck operations & owner dashboard", "Four trucks create the most operational complexity", <Pill>Strategic</Pill>],
          ]}
        />
      </Section>

      <Section title="90-Day Roadmap Preview" kicker="Transformation program">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              phase: "Phase 1 · Days 1–30",
              title: "Stabilize & Document",
              items: ["Discovery", "Operational audit", "Digital & menu audit", "Priority SOPs", "Recipe capture", "Communication support"],
            },
            {
              phase: "Phase 2 · Days 31–60",
              title: "Standardize & Build",
              items: ["SOP library", "Training system", "Recipe system", "Chef controls", "Truck procedures", "Catering system"],
            },
            {
              phase: "Phase 3 · Days 61–90",
              title: "Delegate & Control",
              items: ["Management routines", "Dashboards & KPIs", "Automation layer", "Staff accountability", "Owner reporting", "Optimization"],
            },
          ].map((p) => (
            <Panel key={p.phase} eyebrow={p.phase} title={p.title}>
              <Bullets items={p.items} tone="green" />
            </Panel>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/roadmap"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open full roadmap
          </Link>
          <Link
            to="/opportunities"
            className="inline-flex items-center rounded-md border border-border-strong bg-card px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Opportunity matrix
          </Link>
        </div>
      </Section>

      <Section title="Product Evidence" kicker="Why the thesis holds" description="The product is stronger than the current brand and digital presentation. Photography is used as strategic evidence, never decoration.">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <img
              src={chickenBowl.url}
              alt="Zaki Chicken Bowl with grilled chicken, rice, pickled vegetables and garlic sauce"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <p className="eyebrow">Product strength</p>
              <p className="mt-1 text-sm font-semibold">Zaki Chicken Bowl</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Restaurant-grade product presentation already achievable.
              </p>
            </div>
          </div>
          <AssetPlaceholder label="Zaki hero food photography" batch="Batch 2" ratio="1/1" />
          <AssetPlaceholder label="Zaki food truck image" batch="Batch 3" ratio="1/1" />
        </div>
      </Section>
    </div>
  );
}
