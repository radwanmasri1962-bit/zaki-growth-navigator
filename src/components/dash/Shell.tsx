import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import zakiLogo from "@/assets/zaki-logo.png.asset.json";
import jaraLogo from "@/assets/jara-logo-light.png.asset.json";

export const NAV: { to: string; label: string; internal?: boolean }[] = [
  { to: "/", label: "Overview" },
  { to: "/business", label: "Business" },
  { to: "/founder", label: "Founder" },
  { to: "/operations", label: "Operations" },
  { to: "/people", label: "People" },
  { to: "/product", label: "Product" },
  { to: "/menu", label: "Menu" },
  { to: "/trucks", label: "Trucks" },
  { to: "/digital", label: "Digital" },
  { to: "/reputation", label: "Reputation" },
  { to: "/catering", label: "Catering" },
  { to: "/systems", label: "Systems" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/pricing", label: "Pricing", internal: true },
  { to: "/risks", label: "Risks" },
  { to: "/assets", label: "Assets" },
  { to: "/client-view", label: "Client View" },
];

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-[84rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <img src={zakiLogo.url} alt="Zaki Grill" className="h-9 w-auto shrink-0" />
            <span className="hidden h-8 w-px shrink-0 bg-border sm:block" />
            <span className="hidden truncate text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:block">
              Business Transformation &amp; Opportunity Map
            </span>
          </div>
          <span className="shrink-0 rounded-full border border-primary/25 bg-accent px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent-foreground">
            Internal Strategy Dashboard
          </span>
        </div>
        <nav className="mx-auto max-w-[84rem] overflow-x-auto px-5 sm:px-8">
          <ul className="flex min-w-max items-stretch gap-1 pb-0">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="block border-b-2 border-transparent px-3 py-3 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:border-gold data-[status=active]:font-semibold data-[status=active]:text-foreground"
                >
                  {item.label}
                  {item.internal ? <span className="ml-1.5 text-gold">•</span> : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main className="mx-auto max-w-[84rem] px-5 pb-20 pt-10 sm:px-8">{children}</main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-[84rem] flex-col items-center gap-3 px-5 py-10 text-center sm:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Prepared by</span>
            <img src={jaraLogo.url} alt="JARA AI" className="h-5 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground">
            radwan@jaraai.co · jaraai.co · Business Transformation Strategy by JARA AI
          </p>
          <p className="text-xs text-muted-foreground">
            Zaki Grill · Columbus, Ohio · Internal working document · Confidential
          </p>
        </div>
      </footer>
    </div>
  );
}
