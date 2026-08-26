import { createFileRoute } from "@tanstack/react-router";
import zakiWordmark from "@/assets/zaki-wordmark.png.asset.json";
import jaraDark from "@/assets/jara-logo-dark.png.asset.json";
import chickenBowl from "@/assets/chicken-bowl.webp.asset.json";
import {
  Bullets,
  Flow,
  Note,
  PageHeader,
  Panel,
  Section,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/client-view")({
  head: () => ({
    meta: [
      { title: "Client View — Zaki Grill Transformation Proposal | JARA AI" },
      {
        name: "description",
        content:
          "The client-facing extract of the Zaki Grill transformation map: what was observed, what is possible, and how JARA AI proposes to build the system.",
      },
      { property: "og:title", content: "Zaki Grill Transformation Proposal — JARA AI" },
      {
        property: "og:description",
        content: "Ahmed built demand. The next chapter builds infrastructure.",
      },
    ],
  }),
  component: ClientViewPage,
});

function ClientViewPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Client view"
        title="Presentation Extract"
        intro="This is the version shown to Ahmed. It carries the same diagnosis in respectful, opportunity-led language — strengths first, no internal pricing, no critical framing of past decisions."
      />

      <Section title="Cover" kicker="Opening slide">
        <div className="overflow-hidden rounded-lg border border-border shadow-card">
          <div className="relative overflow-hidden bg-foreground px-6 py-20 text-center sm:px-12 sm:py-24">
            <img
              src={chickenBowl.url}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
            />
            <div className="relative">
              <img src={zakiWordmark.url} alt="Zaki Grill" className="mx-auto h-20 w-auto" />
              <h2 className="mt-10 font-display text-3xl font-bold text-background sm:text-4xl">
                Business Transformation &amp; Opportunity Map
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70">
                A structured view of what Zaki Grill has built, and the infrastructure that turns
                that success into a system the owner controls.
              </p>
              <div className="mt-12 flex flex-col items-center gap-3">
                <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-background/50">
                  Prepared by
                </span>
                <img src={jaraDark.url} alt="JARA AI" className="h-7 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="What We Observed" kicker="Strengths first">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <Panel eyebrow="Foundation" title="Real demand, earned locally" tone="green">
            <Bullets
              tone="green"
              columns={2}
              items={[
                "A distinctive Middle Eastern and Mediterranean concept",
                "Strong, loyal local following",
                "Product quality customers return for",
                "Presence at Budd Dairy plus a working truck fleet",
                "Founder-led hospitality and personal standards",
                "Multi-channel demand across delivery and direct",
              ]}
            />
            <p className="mt-5 text-sm leading-relaxed">
              These are the hardest parts of the restaurant business, and they are already done.
            </p>
          </Panel>
          <div className="overflow-hidden rounded-lg border border-border shadow-card">
            <img src={chickenBowl.url} alt="Zaki Grill chicken bowl" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section title="The Opportunity" kicker="Framing" description="Nothing here is a criticism. Every item is the natural next requirement of a business that grew faster than its systems.">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
          <p className="font-display text-xl font-bold leading-snug sm:text-2xl">
            Ahmed built the demand. The next chapter is building the infrastructure that demand now
            requires.
          </p>
          <div className="mt-6">
            <Flow
              steps={["Owner doing everything", "Documented system", "Trained team", "Owner controlling a system"]}
              tone="gold"
            />
          </div>
        </div>
      </Section>

      <Section title="What Changes" kicker="Before and after">
        <Table
          head={["Area", "Today", "With the system"]}
          rows={[
            ["Recipes", "Held by the founder", "Documented and reproducible"],
            ["Training", "Learned by watching", "A repeatable program"],
            ["Daily operations", "Founder-directed", "Checklist and standard driven"],
            ["Trucks", "Individually managed", "One operating standard across the fleet"],
            ["Digital presence", "Spread across platforms", "One consistent brand everywhere"],
            ["Reviews", "Arrive by chance", "Requested and managed continuously"],
            ["Catering", "Handled as it comes", "A managed pipeline with packages"],
            ["Communication", "Written personally", "Drafted for approval"],
            ["Owner's role", "Involved in everything", "Deciding on exceptions and direction"],
          ]}
        />
      </Section>

      <Section title="How We Work" kicker="Engagement approach">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {([
            ["Discover", "Sessions with Ahmed and on-site observation to record how Zaki actually runs."],
            ["Document", "Recipes, procedures and roles written down in usable form."],
            ["Standardize", "Training, checklists and channel alignment put into daily practice."],
            ["Delegate", "A management layer and owner reporting that returns time to Ahmed."],
          ] as const).map(([t, d], i) => (
            <Panel key={t} eyebrow={`Step ${i + 1}`} title={t}>

              <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Panel>
          ))}
        </div>
        <div className="mt-4">
          <Note>
            Commercial terms are presented separately and in person — they are not part of this
            document.
          </Note>
        </div>
      </Section>

      <Section title="Next Step" kicker="Close">
        <Panel eyebrow="Proposed" title="A discovery session with Ahmed" tone="gold">
          <p className="text-sm leading-relaxed">
            One working session to confirm the facts behind this map: menu and pricing, channel
            performance, staffing reality and the founder's own priorities. Everything after that is
            built on verified information rather than assumption.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span>Prepared by JARA AI</span>
            <span className="h-3 w-px bg-border" />
            <span>radwan@jaraai.co</span>
            <span className="h-3 w-px bg-border" />
            <span>jaraai.co</span>
          </div>
        </Panel>
      </Section>
    </div>
  );
}
