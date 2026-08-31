import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Chain,
  Chip,
  DocSlot,
  Flow,
  KeyLine,
  RouteRow,
  Scene,
  Statement,
} from "@/components/dash/present";

import { AssetFrame, Timeline } from "@/components/dash/primitives";
import { JARA_CONCEPT_NOTE, zakiAssets } from "@/lib/zaki-assets";
import zakiWordmark from "@/assets/zaki-wordmark.png.asset.json";
import jaraOnDark from "@/assets/jara-logo-on-dark.png.asset.json";
import jaraOnLight from "@/assets/jara-logo-on-light.png.asset.json";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/presentation")({
  head: () => ({
    meta: [
      { title: "Zaki Grill — 90-Day Business Transformation Presentation | JARA AI" },
      {
        name: "description",
        content:
          "Client presentation for Zaki Grill: from founder-led success to a business built to scale. Founder story, owner dependency, the operating system and the 90-day roadmap.",
      },
      { property: "og:title", content: "Zaki Grill — From Founder-Led Success to a Business Built to Scale" },
      {
        property: "og:description",
        content: "A 90-day business transformation presentation prepared by JARA AI for Zaki Grill.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PresentationPage,
});

const SCENES: { id: string; label: string; chapter: number }[] = [
  { id: "s01", label: "Cover", chapter: 0 },
  { id: "s02", label: "Founder story", chapter: 0 },
  { id: "s03", label: "What Ahmed built", chapter: 0 },
  { id: "s04", label: "The success trap", chapter: 1 },
  { id: "s05", label: "One number", chapter: 1 },
  { id: "s06", label: "What it costs", chapter: 1 },
  { id: "s07", label: "The transformation", chapter: 2 },
  { id: "s08", label: "Operations", chapter: 2 },
  { id: "s09", label: "Recipe system", chapter: 2 },
  { id: "s10", label: "Assembly standards", chapter: 2 },
  { id: "s11", label: "SOP system", chapter: 2 },
  { id: "s12", label: "Training & certification", chapter: 2 },
  { id: "s13", label: "Physical + digital", chapter: 2 },
  { id: "s14", label: "Customer communication", chapter: 2 },
  { id: "s15", label: "The digital Zaki", chapter: 3 },
  { id: "s16", label: "Digital menu", chapter: 3 },
  { id: "s17", label: "Reputation engine", chapter: 3 },
  { id: "s18", label: "Catering & events", chapter: 3 },
  { id: "s19", label: "Command center", chapter: 4 },
  { id: "s20", label: "What JARA builds", chapter: 4 },
  { id: "s21", label: "90-day roadmap", chapter: 4 },
  { id: "s22", label: "What changes for Ahmed", chapter: 4 },
  { id: "s23", label: "Relevant experience", chapter: 5 },
  { id: "s24", label: "The partnership", chapter: 5 },
  { id: "s25", label: "Investment", chapter: 5 },
  { id: "s26", label: "Closing", chapter: 5 },
];


const CHAPTERS = [
  "01 Story",
  "02 Pressure",
  "03 System",
  "04 Growth",
  "05 90 Days",
  "06 Partnership",
];

function PresentationPage() {
  const [active, setActive] = useState(0);
  const [presentMode, setPresentMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(SCENES.length - 1, index));
    const target = SCENES[clamped];
    if (!target) return;
    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(clamped);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.getAttribute("data-scene");
        const idx = SCENES.findIndex((s) => s.id === id);
        if (idx >= 0) setActive(idx);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4] },
    );
    document.querySelectorAll("[data-scene]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [presentMode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") goTo(active + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") goTo(active - 1);
      if (e.key === "Escape") setPresentMode(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const activeChapter = SCENES[active]?.chapter ?? 0;
  const progress = useMemo(() => ((active + 1) / SCENES.length) * 100, [active]);

  const body = (
    <div ref={scrollRef}>
      {/* Navigator */}
      <div
        className={cn(
          "sticky z-40 border-b border-border bg-background/95 backdrop-blur",
          presentMode ? "top-0" : "top-[7.25rem]",
        )}
      >
        <div className="mx-auto flex max-w-[76rem] flex-wrap items-center gap-3 px-5 py-3 sm:px-10">
          <img src={zakiWordmark.url} alt="Zaki Grill" className="h-6 w-auto" />
          <div className="hidden flex-1 items-center gap-1 lg:flex">
            {CHAPTERS.map((c, i) => {
              const first = SCENES.findIndex((s) => s.chapter === i);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => goTo(first)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-colors",
                    activeChapter === i
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground">
              {String(active + 1).padStart(2, "0")} / {SCENES.length}
            </span>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => setPresentMode((v) => !v)}
              className="rounded-md border border-sand bg-gold-soft/70 px-3 py-1.5 text-xs font-semibold text-espresso"
            >
              {presentMode ? "Exit" : "Present"}
            </button>
          </div>
        </div>
        <div className="h-0.5 w-full bg-border/70">
          <div
            className="h-0.5 bg-primary transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 01 — COVER */}
      <section
        id="s01"
        data-scene="s01"
        className="relative scroll-mt-32 overflow-hidden bg-foreground"
      >
        <div className="mx-auto grid max-w-[76rem] items-center gap-10 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-lg bg-background px-6 py-4">
              <img src={zakiWordmark.url} alt="Zaki Grill" className="h-[4.5rem] w-auto sm:h-[5.25rem]" />
            </div>
            <h1 className="mt-10 font-display text-4xl font-bold leading-[1.05] text-background sm:text-6xl">
              From founder-led success
              <br />
              to a business built to scale
            </h1>
            <p className="mt-6 text-base font-medium uppercase tracking-[0.24em] text-sage">
              90-Day Business Transformation
            </p>
            <div className="mt-12 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-background/70">
                Prepared by
              </span>
              <img src={jaraOnDark.url} alt="JARA AI" className="h-6 w-auto" />
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-background/15">
              <img
                src={zakiAssets.ahmedTruckHero}
                alt="Ahmed, founder of Zaki Grill, in front of a Zaki food truck"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-[0.6875rem] uppercase tracking-[0.18em] text-background/70">
              Ahmed · Founder, Zaki Grill
            </p>
          </div>
        </div>
      </section>

      {/* 02 — FOUNDER STORY */}
      <Scene
        id="s02"
        number="02"
        kicker="The founder"
        title="Built from the ground up"
        lead="Ahmed did not inherit a restaurant group. He built one — through food, persistence, customer relationships and entrepreneurship."
        tone="cream"
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-lg border border-border shadow-card">
            <img
              src={zakiAssets.ahmedPortrait}
              alt="Portrait of Ahmed, founder of Zaki Grill"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div>
            <Chain
              steps={[
                "Palestine",
                "United States",
                "Limited resources",
                "Learns · works · builds",
                "Food business",
                "Customer following",
                "Food trucks",
                "Permanent locations",
                "Zaki today",
              ]}
              highlightLast
            />
          </div>
        </div>
        <div className="mt-10">
          <Statement tone="green">
            The next chapter
            <span className="mt-3 block font-display text-lg tracking-[0.16em] sm:text-2xl">
              Systems + People + Control + Scale
            </span>
          </Statement>
        </div>
      </Scene>

      {/* 03 — WHAT AHMED HAS BUILT */}
      <Scene
        id="s03"
        number="03"
        kicker="The foundation"
        title="The foundation is already there"
        lead="A recognisable Columbus concept with real product, real customers and a real operating footprint."
        tone="white"
      >
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            "4 food trucks",
            "Budd Dairy Food Hall",
            "Worthington",
            "Strong food product",
            "Local customer following",
            "Event experience",
            "Catering potential",
            "Positive customer sentiment",
            "Social presence",
            "Halal / Middle Eastern positioning",
            "Founder reputation",
          ].map((c) => (
            <Chip key={c} tone="green">
              {c}
            </Chip>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <AssetFrame
            label="Food truck"
            batch="Batch 3"
            src={zakiAssets.truckFleet}
            alt="Zaki Grill food truck"
            ratio="4/3"
            type="concept"
          />
          <AssetFrame
            label="Budd Dairy"
            batch="Batch 1"
            src={zakiAssets.buddDairy}
            alt="Budd Dairy Food Hall location"
            ratio="4/3"
            type="evidence"
          />
          <AssetFrame
            label="Signature product"
            batch="Batch 2"
            src={zakiAssets.chickenBowl}
            alt="Zaki chicken bowl"
            ratio="4/3"
            type="evidence"
          />
        </div>
        <div className="mt-10">
          <Statement tone="gold">
            Zaki does not need to be reinvented.
            <br />
            It needs to be organized for its next stage.
          </Statement>
        </div>
      </Scene>

      {/* 04 — THE SUCCESS TRAP */}
      <Scene
        id="s04"
        number="04"
        kicker="Current state"
        title="Zaki grew faster than its systems."
        lead="The business expanded. The infrastructure around Ahmed did not expand at the same speed."
        tone="cream"
      >
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-10">
          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Customers",
              "Food trucks",
              "Budd Dairy",
              "Worthington",
              "Staff",
              "Chef / kitchen",
              "Suppliers",
              "Catering",
              "Customer issues",
              "Events",
              "Business inquiries",
              "Phone calls",
              "Digital questions",
            ].map((i) => (
              <Chip key={i} tone="warn">
                {i}
              </Chip>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-6 text-lg text-espresso" aria-hidden>
            <span>↓</span>
            <span>↓</span>
            <span>↓</span>
            <span>↓</span>
            <span>↓</span>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="rounded-md border border-warn/50 bg-warn-soft px-12 py-5 text-center font-display text-3xl font-bold uppercase tracking-[0.16em] text-warn">
              Ahmed
            </div>
          </div>
          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Today, too much of Zaki still ends up here
          </p>
        </div>
      </Scene>

      {/* 05 — ONE NUMBER */}
      <Scene
        id="s05"
        number="05"
        kicker="Communication"
        title={
          <>
            One phone number.
            <br />
            Multiple operations.
            <br />
            One person answering.
          </>
        }
        tone="dark"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-background/30 bg-background/12 p-6">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-background/70">
              Current state
            </p>
            <div className="mt-5">
              <Chain steps={["Customer", "Zaki phone number", "Ahmed"]} tone="gold" />
            </div>
          </div>
          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-background/70">
              Competing for the same attention
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {[
                "Orders",
                "Location questions",
                "Truck locations",
                "Catering inquiries",
                "Staff questions",
                "Supplier questions",
                "Customer complaints",
                "Event opportunities",
                "Business inquiries",
                "Menu questions",
                "Large orders",
                "Operational problems",
              ].map((i) => (
                <Chip key={i} tone="light">
                  {i}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Statement tone="light">
            Every question that reaches Ahmed is time taken from leading the business.
          </Statement>
          <p className="mt-5 text-center text-sm text-background/75">
            The customers are not the problem. The absence of routing and infrastructure is.
          </p>
        </div>
      </Scene>

      {/* 06 — WHAT THIS COSTS */}
      <Scene
        id="s06"
        number="06"
        kicker="The real cost"
        title="What this really costs"
        tone="white"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Time",
            "Mental bandwidth",
            "Interruptions",
            "Repeated questions",
            "Slow follow-up",
            "Lost opportunities",
            "Inconsistency",
            "Owner dependency",
          ].map((c) => (
            <Chip key={c} tone="warn">
              {c}
            </Chip>
          ))}
        </div>
        <div className="mt-12">
          <Statement tone="dark">
            Ahmed should run Zaki.
            <br />
            Zaki should not run Ahmed.
          </Statement>
        </div>
      </Scene>

      {/* 07 — THE TRANSFORMATION */}
      <Scene
        id="s07"
        number="07"
        kicker="Before / after"
        title={
          <>
            From owner dependency
            <br />
            to business infrastructure
          </>
        }
        tone="cream"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-warn/30 bg-warn-soft/30 p-6 sm:p-8">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-warn">
              Today
            </p>
            <div className="mt-5">
              <Chain
                tone="neutral"
                steps={[
                  "Ahmed",
                  "Recipes in people's heads",
                  "Training by conversation",
                  "Questions by phone",
                  "Problems escalated manually",
                  "Catering handled manually",
                  "Customer information fragmented",
                  "Owner intervention",
                ]}
              />
            </div>
          </div>
          <div className="rounded-lg border border-primary/25 bg-accent/30 p-6 sm:p-8">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Future
            </p>
            <div className="mt-5">
              <Chain
                highlightLast
                steps={[
                  "Zaki operating system",
                  "Documented recipes",
                  "SOPs",
                  "Structured training",
                  "Communication routing",
                  "CRM",
                  "Catering workflow",
                  "Management reporting",
                  "Ahmed handles decisions that require Ahmed",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Statement tone="gold">
            Today: Ahmed is the system.
            <br />
            Future: Zaki has the system. Ahmed leads it.
          </Statement>
        </div>
      </Scene>

      {/* 08 — OPERATIONS */}
      <Scene
        id="s08"
        number="08"
        kicker="Operations"
        title="Put the business knowledge into the business."
        lead="The objective is not paperwork. The objective is consistent execution without Ahmed explaining the same thing repeatedly."
        tone="white"
      >
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {[
            "Recipe library",
            "Recipe costing",
            "Portion control",
            "Preparation standards",
            "Kitchen SOPs",
            "Opening checklists",
            "Closing checklists",
            "Cleaning standards",
            "Food safety",
            "Purchasing controls",
            "Waste controls",
            "Food truck SOPs",
            "Quality control",
            "Chef accountability",
            "Management checklists",
          ].map((c) => (
            <Chip key={c} tone="green">
              {c}
            </Chip>
          ))}
        </div>
      </Scene>

      {/* 09 — OPERATIONS A: RECIPE SYSTEM */}
      <Scene
        id="s09"
        number="09"
        kicker="Operations A"
        title="Your recipes become Zaki's recipes."
        lead="Turn kitchen knowledge into documented, repeatable company standards."
        tone="cream"
      >
        <div className="grid items-start gap-5 lg:grid-cols-3">
          <DocSlot
            label="PALESTINIAN HUMMUS MASTER RECIPE"
            kind="document"
            ratio="1149/1369"
            src={zakiAssets.recipeHummus}
            alt="Zaki Palestinian hummus master production recipe card"
            note="Presentation example of the proposed Zaki recipe system."
          />
          <DocSlot
            label="CHICKEN SHAWARMA 10 LB BATCH RECIPE"
            kind="document"
            ratio="1149/1369"
            src={zakiAssets.recipeChickenShawarma}
            alt="Zaki chicken shawarma 10 lb batch marinade recipe card"
          />
          <DocSlot
            label="MEXICAN RICE BATCH RECIPE"
            kind="document"
            ratio="1149/1369"
            src={zakiAssets.recipeMexicanRice}
            alt="Zaki Mexican rice 5 lb batch recipe card"
          />
        </div>
        <div className="mt-6">
          <KeyLine
            items={[
              "Ingredients",
              "Batch quantities",
              "Equipment",
              "Method",
              "Control points",
              "Quality",
            ]}
          />
        </div>
        <div className="mt-10">
          <Statement tone="gold">Same recipe. Same result. Every location.</Statement>
        </div>
      </Scene>

      {/* 10 — OPERATIONS B: ASSEMBLY STANDARDS */}
      <Scene
        id="s10"
        number="10"
        kicker="Operations B"
        title={
          <>
            Employees don't guess.
            <br />
            They follow the Zaki standard.
          </>
        }
        tone="white"
      >
        <div className="grid items-start gap-5 lg:grid-cols-3">
          <DocSlot
            label="CHICKEN BOWL ASSEMBLY GUIDE"
            kind="document"
            ratio="1137/1383"
            src={zakiAssets.assemblyChickenBowl}
            alt="Zaki chicken rice bowl assembly cheat sheet"
          />
          <DocSlot
            label="CHICKEN SHAWARMA ASSEMBLY GUIDE — ARABIC"
            kind="document"
            ratio="1149/1369"
            src={zakiAssets.assemblyChickenShawarma}
            alt="Zaki chicken shawarma assembly cheat sheet (Arabic version)"
          />
          <DocSlot
            label="SUMMER SALATA / PRODUCT ASSEMBLY GUIDE"
            kind="document"
            ratio="1181/1331"
            src={zakiAssets.assemblySummerSalata}
            alt="Zaki summer salata with lamb assembly cheat sheet"
          />
        </div>

        <div className="mt-8">
          <Flow steps={["Portion", "Position", "Build", "Finish", "Serve"]} />
        </div>
        <p className="mt-6 text-center text-base text-muted-foreground">
          Visual station guides standardize portion, sequence and presentation.
        </p>
      </Scene>

      {/* 11 — OPERATIONS C: SOP SYSTEM */}
      <Scene
        id="s11"
        number="11"
        kicker="Operations C"
        title="Every location opens, operates and closes the Zaki way."
        tone="cream"
      >
        <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Opening &amp; closing procedures
        </p>
        <div className="grid gap-5 lg:grid-cols-2">
          <DocSlot
            label="FOOD TRUCK OPENING SOP"
            kind="document"
            ratio="1536/1024"
            src={zakiAssets.sopTruckOpening}
            alt="Zaki food truck opening procedure SOP"
          />
          <DocSlot
            label="FOOD TRUCK CLOSING PROCEDURE SOP"
            kind="document"
            ratio="1536/1024"
            src={zakiAssets.sopTruckClosing}
            alt="Zaki food truck closing procedure SOP"
          />
          <DocSlot
            label="BUDD DAIRY OPENING PROCEDURE"
            kind="document"
            ratio="1536/1024"
            src={zakiAssets.sopBuddOpening}
            alt="Zaki Budd Dairy opening procedure SOP"
          />
          <DocSlot
            label="BUDD DAIRY CLOSING PROCEDURE"
            kind="document"
            ratio="1536/1024"
            src={zakiAssets.sopBuddClosing}
            alt="Zaki Budd Dairy closing procedure SOP"
          />
        </div>

        <p className="mb-4 mt-12 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Operational control standards
        </p>
        <div className="mx-auto grid max-w-3xl items-start gap-5 sm:grid-cols-2">
          <DocSlot
            label="FOOD SAFETY & TEMPERATURE CONTROL SOP"
            kind="document"
            ratio="1024/1536"
            src={zakiAssets.sopFoodSafety}
            alt="Zaki food safety and temperature control SOP"
          />
          <DocSlot
            label="RECEIVING & INVENTORY SOP"
            kind="document"
            ratio="1024/1536"
            src={zakiAssets.sopReceivingInventory}
            alt="Zaki receiving and inventory SOP"
          />
        </div>
        <div className="mt-8">
          <Flow steps={["Open", "Operate", "Verify", "Close", "Report"]} />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Presentation examples of the operating infrastructure JARA proposes to develop and
          validate with Zaki during the engagement.
        </p>
        <div className="mt-10">
          <Statement tone="gold">
            Systems replace memory.
            <br />
            Managers verify execution.
          </Statement>
        </div>
      </Scene>


      {/* 12 — OPERATIONS D: TRAINING & CERTIFICATION */}
      <Scene
        id="s12"
        number="12"
        kicker="Operations D — Training"
        title="Training turns standards into habits."
        lead="Every employee learns the same system, demonstrates the same standards and earns the right to work independently."
        tone="cream"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <DocSlot
            label="NEW EMPLOYEE TRAINING & CERTIFICATION"
            kind="document"
            ratio="1024/1536"
            src={zakiAssets.trainingCertification}
            alt="Zaki new employee training and certification system document"
            dominant
          />
          <div className="space-y-8">
            <Chain
              highlightLast
              steps={[
                "New hire",
                "Learn",
                "Watch",
                "Practice",
                "Demonstrate",
                "Certify",
                "Work independently",
              ]}
            />
            <div className="space-y-3">
              <Chip tone="green">Consistent execution</Chip>
              <Chip tone="gold">Faster onboarding</Chip>
              <Chip tone="warn">Less dependence on Ahmed</Chip>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Statement tone="gold">
            No employee works a station alone
            <br />
            until they are trained and certified.
          </Statement>
        </div>
      </Scene>


      {/* 13 — PHYSICAL + DIGITAL OPERATING SYSTEM */}
      <Scene
        id="s13"
        number="13"
        kicker="Operating system"
        title={
          <>
            One standard.
            <br />
            Available where the team needs it.
          </>
        }
        tone="white"
      >
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="eyebrow mb-3">On the line</p>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={zakiAssets.stationCheatSheets}
                alt="Physical Zaki station with six laminated assembly cheat sheets installed above a prep station"
                className="w-full object-contain"
                loading="lazy"
              />
              <figcaption className="px-4 py-3">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-foreground">
                  Physical station standards
                </p>
                <p className="mt-1 text-[0.6875rem] leading-relaxed text-muted-foreground">
                  Visual guidance available directly where the team works.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-3 lg:px-4">
            <span className="rounded-md border border-primary/30 bg-sage-soft/65 px-5 py-3 text-center font-display text-sm font-bold uppercase leading-tight tracking-[0.1em] text-espresso">
              One Zaki standard
              <br />↓<br />
              Every location
            </span>
          </div>
          <div>
            <p className="eyebrow mb-3">On phone &amp; tablet</p>
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={zakiAssets.digitalOperationsMockup}
                alt="Zaki Digital Operations mockup showing the operating system on a tablet and mobile phone"
                className="w-full object-contain"
                loading="lazy"
              />
              <figcaption className="px-4 py-3">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-foreground">
                  Digital operations system
                </p>
                <p className="mt-1 text-[0.6875rem] leading-relaxed text-muted-foreground">
                  Training and operating knowledge available anywhere.
                </p>
                <p className="mt-1 text-[0.625rem] leading-relaxed text-muted-foreground/70">
                  JARA concept / proposed Zaki operations system.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-8 grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            "Recipes",
            "Assembly",
            "Opening",
            "Closing",
            "Food safety",
            "Training",
            "Inventory",
            "Food trucks",
            "Catering",
          ].map((c) => (
            <Chip key={c} tone="green">
              {c}
            </Chip>
          ))}
        </div>
      </Scene>


      {/* 10 — CUSTOMER COMMUNICATION */}
      <Scene
        id="s14"
        number="14"
        kicker="Target operating model"
        title="Not every call needs Ahmed."
        lead="Proposed future state — this routing layer is what the engagement builds."
        tone="white"
      >
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Chain steps={["Customer", "Zaki number", "Communication / routing layer"]} tone="gold" />
          <div className="space-y-2">
            <RouteRow from="Order" to="Ordering channel" />
            <RouteRow from="Catering" to="Catering pipeline" />
            <RouteRow from="Location / hours" to="Automated information" />
            <RouteRow from="Food truck" to="Location information" />
            <RouteRow from="Customer service" to="Assigned responsible person" />
            <RouteRow from="Business inquiry" to="Routed / tracked" />
            <RouteRow from="Important issue" to="Ahmed" emphasis />
          </div>
        </div>
        <div className="mt-10">
          <Statement tone="green">Ahmed receives what actually requires Ahmed.</Statement>
        </div>
      </Scene>

      {/* 11 — DIGITAL ZAKI */}
      <Scene
        id="s15"
        number="15"
        kicker="Digital"
        title={
          <>
            One brand.
            <br />
            One customer journey.
          </>
        }
        lead="The point is not a prettier website. The point is connecting the customer journey."
        tone="cream"
      >
        <div className="grid gap-8 lg:grid-cols-[45fr_55fr] lg:items-center">
          {/* Left column — customer journey */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-1">
              {[
                { label: "Discover", channels: ["Google", "Social", "Truck Locations"] },
                { label: "Website" },
                { label: "Menu" },
                { label: "Order", channels: ["Direct", "Delivery"] },
                { label: "Catering" },
                { label: "CRM", channels: ["Email / SMS"] },
                { label: "Follow-up" },
                { label: "Reviews" },
                { label: "Repeat Business", final: true },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "min-w-[9.5rem] rounded-md px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.12em] sm:text-sm",
                        step.final
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-card text-foreground shadow-card",
                      )}
                    >
                      {step.label}
                    </div>
                    {i < arr.length - 1 ? (
                      <span className="py-1 text-base text-gold sm:text-lg" aria-hidden>
                        ↓
                      </span>
                    ) : null}
                  </div>
                  {step.channels ? (
                    <div className="flex flex-wrap gap-2">
                      {step.channels.map((c) => (
                        <span
                          key={c}
                          className="rounded border border-sand bg-gold-soft/50 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-espresso"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="sr-only">No secondary channels</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — unified digital experience visual */}
          <div className="flex flex-col">
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={zakiAssets.zakiWebsitePrototype}
                alt="JARA-created Zaki website prototype showing navigation, hero headline, call-to-action buttons and hero food image"
                style={{ aspectRatio: "16/10" }}
                className="w-full object-contain"
                loading="lazy"
              />
              <figcaption className="px-4 py-3">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-foreground">
                  Zaki Digital Customer Experience
                </p>
                <p className="mt-1 text-[0.6875rem] leading-relaxed text-muted-foreground">
                  JARA concept prototype — proposed connected Zaki customer experience.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Scene>

      {/* 16 — DIGITAL MENU */}
      <Scene
        id="s16"
        number="16"
        kicker="Ahmed's idea"
        title={
          <>
            Your digital menu idea.
            <br />
            Brought to life.
          </>
        }
        tone="white"
      >
        <p className="-mt-6 mb-10 font-display text-xl font-bold uppercase tracking-[0.06em] text-espresso sm:text-2xl">
          Let customers see the food before they order it.
        </p>
        <DocSlot
          label="THREE-PRODUCT DIGITAL MENU TV MOCKUP"
          kind="screen"
          ratio="16/9"
          dominant
          note="JARA concept / proposed Zaki digital menu."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <DocSlot label="CHICKEN BOWL LAYERED DIGITAL MENU" kind="screen" ratio="4/5" />
          <DocSlot label="LOADED GYRO FRIES LAYERED DIGITAL MENU" kind="screen" ratio="4/5" />
          <DocSlot label="REVENGE OF THE FALAFEL LAYERED DIGITAL MENU" kind="screen" ratio="4/5" />
        </div>
        <div className="mt-8">
          <Flow steps={["See the food", "Understand the build", "Order with confidence"]} tone="gold" />
        </div>
        <div className="mt-8">
          <Statement tone="green">Made fresh. Layer by layer.</Statement>
        </div>
      </Scene>


      {/* 12 — REPUTATION */}
      <Scene
        id="s17"
        number="17"
        kicker="Reputation"
        title="Good reviews should create more good reviews."
        tone="white"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Chain
            steps={[
              "Guest experience",
              "Review request",
              "Google / Yelp",
              "Response",
              "Local discovery",
              "New customer",
              "Guest experience",
            ]}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Google",
              "Yelp",
              "Delivery marketplace reviews",
              "Review responses",
              "Negative-review escalation",
              "Post-catering review requests",
            ].map((c) => (
              <Chip key={c} tone="gold">
                {c}
              </Chip>
            ))}
            <p className="sm:col-span-2 mt-2 text-sm leading-relaxed text-muted-foreground">
              Reputation becomes a repeatable routine rather than something that happens on its own.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <DocSlot label="GOOGLE REVIEWS" kind="screen" ratio="4/3" />
          <DocSlot label="YELP REVIEWS" kind="screen" ratio="4/3" />
          <DocSlot label="DELIVERY MARKETPLACE RATINGS" kind="screen" ratio="4/3" />
        </div>
      </Scene>


      {/* 13 — CATERING */}
      <Scene
        id="s18"
        number="18"
        kicker="Growth"
        title={
          <>
            Turn catering from inquiries
            <br />
            into a pipeline.
          </>
        }
        lead="Every serious catering inquiry should be captured, tracked and followed up. Not remembered."
        tone="cream"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Chain
            steps={[
              "Customer / company",
              "Catering page",
              "Package / menu",
              "Event details",
              "Quote",
              "CRM",
              "Follow-up",
              "Confirmation",
              "Production",
              "Event",
              "Review",
              "Reorder",
            ]}
            highlightLast
          />
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Direct catering",
                "Corporate accounts",
                "Events",
                "Repeat customers",
                "Large orders",
                "ezCater acquisition channel",
              ].map((c) => (
                <Chip key={c} tone="green">
                  {c}
                </Chip>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <AssetFrame
                label="Catering spread"
                batch="Batch 5"
                src={zakiAssets.cateringSpread}
                alt="Zaki catering spread"
                ratio="4/3"
                type="concept"
              />
              <AssetFrame
                label="Event activation"
                batch="Batch 5"
                src={zakiAssets.truckEvent}
                alt="Zaki food truck at an event"
                ratio="4/3"
                type="concept"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <DocSlot label="EZCATER PRESENCE / LOGO" kind="screen" ratio="4/3" />
        </div>

        <div className="mt-6">
          <Flow steps={["Direct catering", "ezCater", "Events"]} tone="gold" />
        </div>
        <div className="mt-4">
          <Flow
            steps={[
              "Inquiry",
              "Capture",
              "Qualify",
              "Quote",
              "Follow-up",
              "Order",
              "Production",
              "Review",
              "Repeat business",
            ]}
          />
        </div>
      </Scene>


      {/* 14 — COMMAND CENTER */}
      <Scene
        id="s19"
        number="19"
        kicker="Architecture"
        title={
          <>
            One business.
            <br />
            One operating view.
          </>
        }
        tone="white"
      >
        <div className="rounded-lg border border-border bg-background p-6 shadow-card sm:p-10">
          <div className="flex justify-center">
            <div className="rounded-md bg-primary px-8 py-3 font-display text-lg font-bold uppercase tracking-[0.18em] text-primary-foreground">
              Zaki
            </div>
          </div>
          <div className="mx-auto h-6 w-px bg-border-strong" />
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { t: "Operations", i: ["Recipes", "SOPs", "Controls", "Trucks"] },
              { t: "People", i: ["Training", "Staffing", "Standards", "Performance"] },
              { t: "Customers", i: ["CRM", "Catering", "Reviews", "Communication"] },
            ].map((b) => (
              <div key={b.t} className="flex flex-col items-center gap-2">
                <div className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.12em]">
                  {b.t}
                </div>
                <span className="text-xs text-border-strong">↓</span>
                <div className="flex w-full flex-col gap-1.5">
                  {b.i.map((x) => (
                    <div
                      key={x}
                      className="rounded border border-border bg-card px-3 py-1.5 text-center text-xs text-muted-foreground"
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 h-6 w-px bg-border-strong" />
          <div className="flex justify-center">
            <div className="rounded-md border border-border-strong bg-secondary px-8 py-2.5 text-center text-xs font-bold uppercase tracking-[0.16em]">
              Management
            </div>
          </div>
          <div className="mx-auto mt-2 h-6 w-px bg-border-strong" />
          <div className="flex justify-center">
            <div className="rounded-md border border-sand bg-gold-soft px-10 py-3 font-display text-2xl font-bold uppercase tracking-[0.18em] text-espresso">
              Ahmed
            </div>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {["Decisions", "Leadership", "Quality", "Growth", "Relationships", "Expansion"].map(
              (r) => (
                <span
                  key={r}
                  className="rounded-full border border-primary/25 bg-accent/60 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent-foreground"
                >
                  {r}
                </span>
              ),
            )}
          </div>
        </div>
        <p className="mt-8 text-center text-base text-muted-foreground">
          The goal is not to remove Ahmed from Zaki. The goal is to remove unnecessary operational
          noise from Ahmed.
        </p>
      </Scene>

      {/* 15 — WHAT JARA WILL BUILD */}
      <Scene
        id="s20"
        number="20"
        kicker="Deliverables"
        title="What JARA will build with Zaki"
        tone="cream"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              n: "01",
              t: "Operations",
              s: "Recipes + SOPs + Assembly standards",
              label: "OPERATIONS DELIVERABLE PREVIEW",
              kind: "document" as const,
            },
            {
              n: "02",
              t: "People",
              s: "Training + Certification",
              label: "TRAINING DELIVERABLE PREVIEW",
              kind: "document" as const,
            },
            {
              n: "03",
              t: "Customer",
              s: "Communication + Customer journey",
              label: "CUSTOMER JOURNEY PREVIEW",
              kind: "screen" as const,
              src: zakiAssets.takeAwayOrder,
              note: JARA_CONCEPT_NOTE,
            },
            {
              n: "04",
              t: "Digital",
              s: "Website + Digital menu + CRM",
              label: "DIGITAL DELIVERABLE PREVIEW",
              kind: "screen" as const,
            },
            {
              n: "05",
              t: "Growth",
              s: "Catering + Events + Reputation",
              label: "GROWTH DELIVERABLE PREVIEW",
              kind: "photo" as const,
              src: zakiAssets.cateringSpread,
              note: JARA_CONCEPT_NOTE,
            },
            {
              n: "06",
              t: "Management",
              s: "Controls + Reporting + Accountability",
              label: "MANAGEMENT REPORTING PREVIEW",
              kind: "screen" as const,
            },
          ].map((d) => (
            <div
              key={d.n}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-card"
            >
              <DocSlot
                label={d.label}
                kind={d.kind}
                ratio="16/10"
                src={d.src}
                note={d.note}
                className="rounded-none border-0 border-b shadow-none"
              />
              <div className="p-5">
                <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-gold">{d.n}</p>
                <p className="mt-1.5 font-display text-xl font-bold">{d.t}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.s}</p>
              </div>
            </div>
          ))}
        </div>
      </Scene>


      {/* 16 — ROADMAP */}
      <Scene
        id="s21"
        number="21"
        kicker="90 days"
        title="90-day transformation roadmap"
        lead="Multiple workstreams move together — foundation, build and implementation overlap by design."
        tone="white"
      >
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          {[
            { m: "Month 1", t: "Foundation" },
            { m: "Month 2", t: "Build + implement" },
            { m: "Month 3", t: "Train + automate + stabilize" },
          ].map((x) => (
            <div key={x.m} className="rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-espresso">{x.m}</p>
              <p className="mt-1.5 font-display text-lg font-bold">{x.t}</p>
            </div>
          ))}
        </div>
        <Timeline
          columns={["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"]}
          rows={[
            { label: "Discovery & validation", start: 1, span: 2, tone: "gold", note: "Complimentary" },
            { label: "Recipes & menu audit", start: 2, span: 4 },
            { label: "Operational mapping", start: 1, span: 3 },
            { label: "Roles & responsibilities", start: 3, span: 3 },
            { label: "Communication mapping", start: 2, span: 3 },
            { label: "Digital audit", start: 2, span: 3 },
            { label: "SOP library", start: 4, span: 5 },
            { label: "Training system", start: 6, span: 4 },
            { label: "Staffing tools", start: 5, span: 4 },
            { label: "Digital alignment", start: 5, span: 5 },
            { label: "CRM structure", start: 6, span: 4 },
            { label: "Catering workflow", start: 6, span: 5 },
            { label: "Management controls", start: 8, span: 4 },
            { label: "Team training", start: 9, span: 3 },
            { label: "Communication routing", start: 9, span: 3 },
            { label: "Review engine", start: 9, span: 3 },
            { label: "Reporting & testing", start: 10, span: 3 },
            { label: "Handover", start: 11, span: 2, tone: "green" },
          ]}
        />
      </Scene>

      {/* 17 — WHAT CHANGES FOR AHMED */}
      <Scene id="s22" number="22" kicker="Personal" title="90 days later" tone="cream">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-warn/30 bg-warn-soft/30 p-6 sm:p-8">
            <p className="font-display text-2xl font-bold uppercase tracking-[0.1em] text-warn">
              Less of this
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Answering every question",
                "Repeating instructions",
                "Chasing staff",
                "Explaining recipes",
                "Handling routine calls",
                "Remembering catering leads",
                "Checking everything personally",
                "Putting out preventable fires",
              ].map((i) => (
                <li key={i} className="text-base text-foreground/80">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-primary/25 bg-accent/40 p-6 sm:p-8">
            <p className="font-display text-2xl font-bold uppercase tracking-[0.1em] text-primary">
              More of this
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Leading",
                "Quality control",
                "Key relationships",
                "Growth",
                "Expansion",
                "Major decisions",
                "Business development",
                "Time to think",
              ].map((i) => (
                <li key={i} className="text-base text-foreground/80">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Statement tone="gold">
            The business still has Ahmed. It just doesn't need all of Ahmed, all of the time.
          </Statement>
        </div>
      </Scene>

      {/* 23 — RELEVANT EXPERIENCE */}
      <Scene
        id="s23"
        number="23"
        kicker="Experience"
        title="Built in this category."
        lead="Mediterranean restaurant experience across operations, fast casual, multi-location growth and international markets."
        tone="cream"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Falafill",
              place: "Chicago · Detroit · Panama",
              role: "Opening · Management · Operations",
            },
            {
              name: "Olive Mediterranean Grill",
              place: "Chicago",
              role: "Restaurant Consulting · Operations",
            },
            {
              name: "Ayy Karamba",
              place: "Dubai",
              role: "Restaurant Operations · Development",
            },
            {
              name: "Sajj Mediterranean",
              place: "California",
              role: "Consulting · Multi-Location Operations",
            },
          ].map((x) => (
            <div
              key={x.name}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-card"
            >
              <p className="font-display text-xl font-bold uppercase leading-tight tracking-[0.02em]">
                {x.name}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                {x.place}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{x.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <KeyLine
            items={[
              "Recipes",
              "Production",
              "Fast casual",
              "Training",
              "Multi-location",
              "Catering",
              "Food trucks",
              "Systems",
            ]}
          />
        </div>
        <div className="mt-10">
          <Statement tone="dark" align="center">
            Zaki is not my introduction to Mediterranean restaurant operations.
            <br />
            It is a category I already understand.
          </Statement>
        </div>
      </Scene>

      {/* 24 — PARTNERSHIP */}
      <Scene id="s24" number="24" kicker="Working together" title="JARA + Zaki" tone="white">

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-primary/25 bg-sage-soft/35 p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <img src={jaraOnLight.url} alt="JARA AI" className="h-6 w-auto" />
              <span className="eyebrow">provides</span>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "Transformation leadership",
                "Restaurant operations expertise",
                "Documentation",
                "Systems development",
                "Training architecture",
                "Digital strategy",
                "Automation design",
                "Implementation support",
                "Management tools",
                "Defined meetings",
                "Defined deliverables",
              ].map((c) => (
                <Chip key={c} tone="green">
                  {c}
                </Chip>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-sand bg-gold-soft/40 p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <img src={zakiWordmark.url} alt="Zaki Grill" className="h-6 w-auto" />
              <span className="eyebrow">provides</span>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "Operational access",
                "Current information",
                "Staff participation",
                "Management cooperation",
                "Required approvals",
                "Implementation support",
              ].map((c) => (
                <Chip key={c} tone="gold">
                  {c}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-lg border border-border bg-background p-6 text-center sm:p-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            This is a professional consulting and transformation engagement — not full-time
            employment and not unlimited availability. Work is tied to agreed deliverables,
            implementation and a defined meeting cadence.
          </p>
        </div>
      </Scene>

      {/* 19 — INVESTMENT */}
      <InvestmentScene />

      {/* 20 — CLOSING */}
      <section
        id="s26"
        data-scene="s26"
        className="scroll-mt-32 bg-foreground px-5 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto grid max-w-[76rem] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-lg border border-background/15">
            <img
              src={zakiAssets.ahmedTruckHero}
              alt="Ahmed, founder of Zaki Grill"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold leading-[1.1] text-background sm:text-5xl">
              You built Zaki.
              <br />
              Now let's build the system that protects what you built.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/70">
              The food is there. The customers are there. The reputation is there. The opportunity
              is there. The next step is the infrastructure that lets Zaki grow without every part
              of the business depending on one person.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="inline-flex rounded-md bg-background px-4 py-2.5">
                <img src={zakiWordmark.url} alt="Zaki Grill" className="h-8 w-auto" />
              </span>
              <span className="text-background/40">×</span>
              <img src={jaraOnDark.url} alt="JARA AI" className="h-6 w-auto" />
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-sage">
              90-Day Business Transformation
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {["Approve scope", "Finalize agreement", "Kickoff"].map((s, i) => (
                <div
                  key={s}
                  className="rounded-md border border-background/28 bg-background/12 px-4 py-4 text-center"
                >
                  <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-background">
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (presentMode) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
        {body}
      </div>
    );
  }

  return <div className="-mx-5 -mb-20 -mt-10 sm:-mx-8">{body}</div>;
}

function InvestmentScene() {
  const [price, setPrice] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("zaki-engagement-price");
    if (saved) setPrice(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("zaki-engagement-price", price);
  }, [price]);

  return (
    <Scene
      id="s25"
      number="25"
      kicker="Investment"
      title="90-day Zaki business transformation"
      lead="One engagement. Defined scope. Defined deliverables. Defined implementation period."
      tone="cream"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-sand bg-gold-soft/40 p-8">
          <p className="eyebrow text-espresso">Diagnostic &amp; discovery</p>
          <p className="mt-3 font-display text-4xl font-bold text-foreground">Complimentary</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Included as JARA's initial investment in understanding Zaki.
          </p>
        </div>
        <div className="rounded-lg border border-primary/25 bg-card p-8 shadow-card">
          <p className="eyebrow">90-day engagement</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-4xl font-bold text-primary">$</span>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="—"
              aria-label="90-day engagement price"
              className="w-full border-b border-dashed border-input bg-transparent font-display text-4xl font-bold text-primary outline-none placeholder:text-muted-foreground/50 focus:border-primary"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Covers the full 90-day scope: operations, people, customer communication, digital,
            growth and management systems.
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {["Optional: extended support", "Optional: catering acceleration", "Optional: additional locations"].map(
          (c) => (
            <Chip key={c}>{c}</Chip>
          ),
        )}
      </div>
    </Scene>
  );
}
