import { createFileRoute } from "@tanstack/react-router";
import {
  Note,
  PageHeader,
  Panel,
  Pill,
  Section,
  Table,
} from "@/components/dash/primitives";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunity Matrix — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Impact versus effort matrix across all transformation opportunities, with quick wins, structural projects and sequencing logic.",
      },
      { property: "og:title", content: "Opportunity Matrix — Zaki Grill" },
      {
        property: "og:description",
        content: "Where to start: high impact, low effort first.",
      },
    ],
  }),
  component: OpportunitiesPage,
});

type Impact = "High" | "Medium";
type Effort = "Low" | "Medium" | "High";

const OPPS: { name: string; impact: Impact; effort: Effort; area: string; why: string }[] = [
  { name: "Customer communication support", impact: "High", effort: "Low", area: "Owner relief", why: "Immediate, visible, no operational change required." },
  { name: "Review & reputation engine", impact: "High", effort: "Low", area: "Digital", why: "Existing goodwill converted into public proof." },
  { name: "Google Business Profile completion", impact: "High", effort: "Low", area: "Digital", why: "Direct effect on local discovery." },
  { name: "Menu & channel alignment", impact: "High", effort: "Low", area: "Menu", why: "Removes drift between platforms." },
  { name: "Catering packages & quote templates", impact: "High", effort: "Medium", area: "Growth", why: "Highest-margin channel, currently reactive." },
  { name: "Recipe standardization", impact: "High", effort: "Medium", area: "Product", why: "Protects taste consistency and enables delegation." },
  { name: "Priority SOP set", impact: "High", effort: "Medium", area: "Operations", why: "Foundation for training and accountability." },
  { name: "Training program", impact: "High", effort: "Medium", area: "People", why: "Reduces onboarding load on the founder." },
  { name: "Truck operating standardization", impact: "High", effort: "Medium", area: "Trucks", why: "Multi-unit consistency across the fleet." },
  { name: "Manager accountability structure", impact: "High", effort: "High", area: "People", why: "The mechanism that actually frees the owner." },
  { name: "Owner Command Center reporting", impact: "High", effort: "Medium", area: "Systems", why: "Visibility replaces presence." },
  { name: "Owned website & direct ordering", impact: "High", effort: "High", area: "Digital", why: "Reduces marketplace dependence, captures customer data." },
  { name: "Customer database & retention", impact: "High", effort: "Medium", area: "Growth", why: "Currently no owned customer list exists." },
  { name: "Social content system", impact: "Medium", effort: "Low", area: "Digital", why: "Consistency over volume." },
  { name: "Inventory & purchasing discipline", impact: "Medium", effort: "Medium", area: "Operations", why: "Margin protection once volumes are known." },
  { name: "Brand asset & photography library", impact: "Medium", effort: "Medium", area: "Product", why: "Feeds every channel with one standard." },
  { name: "AI operational assistants", impact: "Medium", effort: "Low", area: "Systems", why: "Supports SOP search, drafting and FAQs." },
  { name: "Expansion readiness framework", impact: "Medium", effort: "High", area: "Growth", why: "Only valid after control is established." },
];

const CELLS: { title: string; label: string; impact: Impact; effort: Effort; tone: "gold" | "green" | "neutral" | "warn" }[] = [
  { title: "Quick Wins", label: "High impact · Low effort", impact: "High", effort: "Low", tone: "gold" },
  { title: "Structural Projects", label: "High impact · Medium effort", impact: "High", effort: "Medium", tone: "green" },
  { title: "Major Builds", label: "High impact · High effort", impact: "High", effort: "High", tone: "warn" },
  { title: "Easy Improvements", label: "Medium impact · Low effort", impact: "Medium", effort: "Low", tone: "neutral" },
  { title: "Selective", label: "Medium impact · Medium effort", impact: "Medium", effort: "Medium", tone: "neutral" },
  { title: "Defer", label: "Medium impact · High effort", impact: "Medium", effort: "High", tone: "neutral" },
];

function OpportunitiesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Opportunities"
        title="Impact vs Effort Opportunity Matrix"
        intro="Every opportunity identified across the diagnostic, positioned by business impact and implementation effort. Sequencing follows the matrix: quick wins buy credibility, structural projects buy control."
      />

      <Section title="Matrix" kicker="Prioritization" description="Effort reflects implementation load on Zaki, not JARA fee level.">
        <div className="grid gap-4 lg:grid-cols-3">
          {CELLS.map((c) => {
            const items = OPPS.filter((o) => o.impact === c.impact && o.effort === c.effort);
            return (
              <Panel key={c.title} eyebrow={c.label} title={c.title} tone={c.tone === "neutral" ? "default" : c.tone}>
                {items.length ? (
                  <ul className="space-y-2.5">
                    {items.map((o) => (
                      <li key={o.name} className="text-sm leading-relaxed">
                        <span className="font-semibold">{o.name}</span>
                        <span className="block text-xs text-muted-foreground">{o.why}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">None in this quadrant.</p>
                )}
              </Panel>
            );
          })}
        </div>
      </Section>

      <Section title="Full Opportunity Register" kicker="All areas">
        <Table
          head={["Opportunity", "Area", "Impact", "Effort", "Rationale"]}
          rows={OPPS.map((o) => [
            o.name,
            o.area,
            <Pill tone={o.impact === "High" ? "green" : "neutral"}>{o.impact}</Pill>,
            <Pill tone={o.effort === "Low" ? "gold" : o.effort === "Medium" ? "neutral" : "warn"}>
              {o.effort}
            </Pill>,
            o.why,
          ])}
        />
        <div className="mt-4">
          <Note>
            No revenue or cost impact is quantified here. Financial modelling requires verified POS,
            labor and food-cost data from Ahmed.
          </Note>
        </div>
      </Section>
    </div>
  );
}
