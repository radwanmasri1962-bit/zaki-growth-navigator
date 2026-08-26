import { createFileRoute } from "@tanstack/react-router";
import {
  AssetPlaceholder,
  Bullets,
  Flow,
  Note,
  PageHeader,
  Panel,
  Section,
  Table,
  Pill,
} from "@/components/dash/primitives";
import chickenBowl from "@/assets/chicken-bowl.webp.asset.json";
import shawarma from "@/assets/chicken-shawarma.png.asset.json";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product, Recipes & Brand Character — Zaki Grill | JARA AI" },
      {
        name: "description",
        content:
          "Product strength evidence, recipe documentation architecture and brand character guidance for Zaki Grill: polish the brand, do not erase its personality.",
      },
      { property: "og:title", content: "Product, Recipes & Brand Character — Zaki Grill" },
      {
        property: "og:description",
        content: "The product is stronger than the current brand and digital presentation.",
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Product"
        title="Product Strength, Recipe Control & Brand Character"
        intro="The food is the strongest asset in the business. The strategic point of this section is simple: the product already outperforms the brand and digital presentation wrapped around it."
      />

      <Section title="Product Evidence" kicker="Photography as argument" description="Every image supports the narrative — product quality, menu clarity, website credibility. This is not a gallery.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <img
              src={chickenBowl.url}
              alt="Zaki Chicken Bowl overhead with grilled chicken, rice, pickled cabbage and garlic sauce"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <figcaption className="p-4 text-xs text-muted-foreground">
              <span className="eyebrow block">Bowl category</span>
              <span className="mt-1 block text-sm font-semibold text-foreground">Zaki Chicken Bowl</span>
              Overhead composition suitable for menu, website and delivery channels.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <img
              src={shawarma.url}
              alt="Chicken shawarma wraps in a paper tray with lettuce, tomato and garlic sauce"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <figcaption className="p-4 text-xs text-muted-foreground">
              <span className="eyebrow block">Wrap category</span>
              <span className="mt-1 block text-sm font-semibold text-foreground">Chicken Shawarma</span>
              Packaging appears in-frame — relevant to delivery presentation standards.
            </figcaption>
          </figure>
          <AssetPlaceholder label="Gyro bowl photography" batch="Batch 2" ratio="1/1" />
          <AssetPlaceholder label="Falafel / hummus / spreads" batch="Batch 2" ratio="1/1" />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <AssetPlaceholder label="Lamb chops" batch="Batch 2" ratio="4/3" />
          <AssetPlaceholder label="Salads" batch="Batch 2" ratio="4/3" />
          <AssetPlaceholder label="Mediterranean spread board" batch="Batch 2" ratio="4/3" />
        </div>
        <div className="mt-4">
          <Note>
            Only verified Zaki photography will be used. Missing images stay as labelled
            placeholders — no stock substitutes.
          </Note>
        </div>
      </Section>

      <Section title="Recipe Management Opportunity" kicker="Pillar 03" description="This is the single most valuable knowledge-transfer project in the engagement: it converts founder knowledge into company intellectual property.">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <Panel eyebrow="Recipe record architecture" title="Fields every major recipe should eventually carry">
            <Bullets
              columns={3}
              items={[
                "Recipe name",
                "Ingredients",
                "Quantities",
                "Preparation method",
                "Batch size",
                "Yield",
                "Portion size",
                "Plating / assembly",
                "Packaging",
                "Photograph",
                "Allergen information",
                "Shelf life",
                "Storage",
                "Food cost",
                "Selling price",
                "Gross margin",
                "Version / date",
                "Approved by",
              ]}
            />
          </Panel>
          <Panel eyebrow="Knowledge transfer" title="Founder knowledge to consistent product" tone="green">
            <Flow
              vertical
              steps={[
                "Ahmed's knowledge",
                "Documented recipe",
                "Trained team",
                "Consistent product",
              ]}
            />
          </Panel>
        </div>
        <div className="mt-4">
          <Table
            head={["Recipe group", "Priority", "Reason", "Cost data"]}
            rows={[
              ["Chicken shawarma / marinade", "01", "Highest volume protein across channels", <Pill tone="warn">Not yet verified</Pill>],
              ["Gyro preparation & holding", "02", "Consistency risk across trucks", <Pill tone="warn">Not yet verified</Pill>],
              ["Rice & bowl base", "03", "Portion control drives cost", <Pill tone="warn">Not yet verified</Pill>],
              ["Sauces (garlic, harissa, tahini)", "04", "Signature flavor identity", <Pill tone="warn">Not yet verified</Pill>],
              ["Falafel", "05", "Batch yield and hold time", <Pill tone="warn">Not yet verified</Pill>],
              ["Hummus & spreads", "06", "Batch production and shelf life", <Pill tone="warn">Not yet verified</Pill>],
            ]}
            caption="Sequencing proposal. No food cost or margin data is stated until supplied and verified."
          />
        </div>
      </Section>

      <Section title="Brand Character" kicker="Pillar 07" description="Zaki has an informal, colorful, bold, grassroots character that reflects the founder. The objective is not a cold luxury Mediterranean restaurant.">
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel eyebrow="Preserve" title="Do not sterilize the brand" tone="gold">
            <Bullets
              items={["Energy", "Generosity", "Personality", "Authenticity", "Color", "Founder character"]}
              columns={2}
            />
          </Panel>
          <Panel eyebrow="Improve" title="Raise execution, not formality" tone="green">
            <Bullets
              tone="green"
              items={["Consistency", "Professionalism", "Hierarchy", "Communication", "Digital execution"]}
              columns={2}
            />
          </Panel>
        </div>
        <div className="mt-4 rounded-lg border border-gold/30 bg-gold-soft/40 p-8 text-center shadow-card">
          <p className="font-display text-2xl font-bold">
            Polish the brand. Do not erase its personality.
          </p>
        </div>
      </Section>
    </div>
  );
}
