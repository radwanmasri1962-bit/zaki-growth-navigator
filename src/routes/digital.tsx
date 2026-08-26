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

export const Route = createFileRoute("/digital")({
  head: () => ({
    meta: [
      { title: "Digital Presence Audit — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Digital ecosystem map, marketplace dependence, social media evaluation and the website opportunity for Zaki Grill, with current state to recommended state framing.",
      },
      { property: "og:title", content: "Digital Presence Audit — Zaki Grill" },
      {
        property: "og:description",
        content: "Fragmented channels, third-party dependence and a missing customer database.",
      },
    ],
  }),
  component: DigitalPage,
});

function Evidence({ label, batch, problem, recommended }: { label: string; batch: string; problem: string; recommended: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-card">
      <AssetPlaceholder label={label} batch={batch} ratio="16/10" />
      <div className="mt-4 space-y-3">
        <div>
          <p className="eyebrow">Problem / opportunity</p>
          <p className="mt-1 text-sm text-secondary-foreground">{problem}</p>
        </div>
        <div>
          <p className="eyebrow">Recommended state</p>
          <p className="mt-1 text-sm text-primary">{recommended}</p>
        </div>
      </div>
    </div>
  );
}

function DigitalPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Digital"
        title="Digital Ecosystem & Presence Audit"
        intro="Zaki's digital presence is spread across platforms that each hold their own version of the brand. Screenshots are treated as evidence and annotated: current state → problem / opportunity → recommended state."
      />

      <Section title="Digital Ecosystem" kicker="Target architecture" description="Every channel should feed one operation and one customer database — instead of five disconnected storefronts.">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
          <p className="text-center font-display text-lg font-bold">Customer</p>
          <div className="mx-auto h-6 w-px bg-border-strong" />
          <div className="grid gap-3 sm:grid-cols-5">
            {["Google", "Social", "Website", "Delivery", "Phone"].map((c) => (
              <div
                key={c}
                className="rounded-md border border-border bg-secondary px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.08em]"
              >
                {c}
              </div>
            ))}
          </div>
          <div className="mx-auto h-6 w-px bg-border-strong" />
          <p className="text-center font-display text-lg font-bold text-primary">Zaki</p>
          <div className="mx-auto h-6 w-px bg-border-strong" />
          <div className="mx-auto w-fit rounded-md border border-gold/30 bg-gold-soft/60 px-5 py-2 text-center text-xs font-bold uppercase tracking-[0.1em] text-gold">
            Customer database (missing today)
          </div>
        </div>
      </Section>

      <Section title="Delivery Marketplaces" kicker="Channel dependence" description="Observed platforms: DoorDash, Grubhub, Seamless and Toast / online ordering.">
        <Table
          head={["Platform", "Role today", "Risk", "Customer data", "Audit status"]}
          rows={[
            ["DoorDash", "Major demand channel", "Commission + menu drift", "Platform-owned", <Pill tone="warn">Pending Batch 4</Pill>],
            ["Grubhub", "Secondary demand", "Duplicate menu maintenance", "Platform-owned", <Pill tone="warn">Pending Batch 4</Pill>],
            ["Seamless", "Shared with Grubhub", "Inconsistent listings", "Platform-owned", <Pill tone="warn">Pending Batch 4</Pill>],
            ["Toast / online ordering", "Direct ordering", "Underpromoted", "Zaki-owned", <Pill tone="warn">Pending Batch 4</Pill>],
            ["Google Business Profile", "Discovery + directions", "Incomplete info, low review velocity", "Zaki-owned", <Pill tone="warn">Pending Batch 4</Pill>],
          ]}
        />
        <div className="mt-4">
          <Note tone="warn">
            Commission rates, order volumes and channel mix are not stated until Ahmed supplies
            platform reports.
          </Note>
        </div>
      </Section>

      <Section title="Evidence Wall" kicker="Batch 4 integration" description="Each screenshot is annotated rather than displayed. Placeholders keep their strategic position until assets arrive.">
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <Evidence
            label="Current Google presence"
            batch="Batch 4"
            problem="Discovery is the first touchpoint; incomplete hours, categories, photos and low review volume reduce local ranking."
            recommended="Fully completed profile, weekly photo posts, review engine feeding continuous fresh reviews."
          />
          <Evidence
            label="Current DoorDash screenshot"
            batch="Batch 4"
            problem="Menu, prices and photography differ from other channels; unmanaged listing quality lowers conversion."
            recommended="Single source-of-truth menu pushed to every channel with standard photography and descriptions."
          />
          <Evidence
            label="Grubhub / Seamless listing"
            batch="Batch 4"
            problem="Duplicate maintenance burden and stale item availability."
            recommended="Scheduled monthly channel review owned by a named person, not the founder."
          />
          <Evidence
            label="Yelp presence"
            batch="Batch 4"
            problem="Reputation is positive but not systematically cultivated or responded to."
            recommended="Response templates plus AI-assisted drafting with owner approval."
          />
          <Evidence
            label="Instagram profile & grid"
            batch="Batch 4"
            problem="Inconsistent visual presentation and unclear calls to action; truck locations not reliably communicated."
            recommended="Content calendar, consistent grid, truck-location posts, catering call to action."
          />
          <Evidence
            label="Facebook page"
            batch="Batch 4"
            problem="Duplicate information risk and unclear ordering path."
            recommended="Aligned information, direct ordering link, events and catering promotion."
          />
        </div>
      </Section>

      <Section title="Social Media Evaluation" kicker="Pillar 08">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Evaluation criteria" title="What the audit scores">
            <Bullets
              columns={2}
              items={[
                "Visual consistency",
                "Posting frequency",
                "Food photography quality",
                "Calls to action",
                "Engagement",
                "Local discovery",
                "Truck-location communication",
                "Catering promotion",
                "Customer-generated content",
              ]}
            />
          </Panel>
          <Panel eyebrow="Observed" title="Existing audience is real" tone="green">
            <p className="text-sm leading-relaxed">
              Observed social evidence indicates Zaki already has a meaningful audience. The gap is
              not reach — it is consistency, clarity of action and connecting the audience to owned
              channels.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <AssetPlaceholder label="Instagram evidence" batch="Batch 4" ratio="4/5" />
              <AssetPlaceholder label="Facebook evidence" batch="Batch 4" ratio="4/5" />
            </div>
          </Panel>
        </div>
      </Section>

      <Section title="Website Opportunity" kicker="Future state" description="JARA AI has already developed a conceptual Zaki website. It is concept work — never presented as the current official Zaki website.">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Panel eyebrow="Scope" title="What the owned website must carry">
            <Bullets
              columns={2}
              tone="green"
              items={[
                "Stronger brand story",
                "Locations",
                "Food truck presence & calendar",
                "Menu",
                "Direct ordering",
                "Catering inquiry",
                "Photography",
                "Contact",
                "Social proof & reviews",
                "SEO / local discovery",
                "Customer capture (email / SMS)",
                "Events",
              ]}
            />
            <div className="mt-5">
              <Flow steps={["Current state", "Problem / opportunity", "Recommended state"]} tone="gold" />
            </div>
          </Panel>
          <Panel eyebrow="Concept work" title="JARA prototype" tone="green">
            <p className="text-sm">
              Existing prototype developed by JARA AI:
            </p>
            <a
              href="https://zaki-hub-fresh-fast.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block break-all font-mono text-xs text-primary underline"
            >
              zaki-hub-fresh-fast.lovable.app
            </a>
            <div className="mt-4">
              <AssetPlaceholder label="Proposed website mockup" batch="Batch 6" ratio="4/3" />
            </div>
            <div className="mt-3">
              <Pill tone="gold">Conceptual future state — not live Zaki property</Pill>
            </div>
          </Panel>
        </div>
      </Section>
    </div>
  );
}
