"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Sidebar,
  TopNavbar,
  PageHeader,
  StatCard,
  MetricsCard,
  ChartCard,
  type LiveMetric,
  type JobsDataPoint,
} from "@/components/farlab";

// ─── Sidebar nav routes (Figma: node 36616:2791) ─────────────────────────────
const SIDEBAR_ROUTES = [
  { key: "overview", label: "Overview", active: true },
  { key: "gpus", label: "GPUs" },
  { key: "rewards", label: "Rewards" },
  { key: "sep-1", label: "", isSeparator: true },
  { key: "logs", label: "Logs" },
  { key: "support", label: "Support" },
  { key: "logout", label: "Log out", destructive: true },
];

// ─── Stat card data (Figma: nodes 36616:2838 – 36616:2865) ───────────────────
const STAT_CARDS = [
  {
    title: "Session uptime",
    value: "10:20:00",
    subtitle: "Resets when you restart the node",
  },
  {
    title: "Earnings today",
    value: "1 247,85 $",
    subtitle: "Earnings since local day start",
  },
  {
    title: "Active GPUs",
    value: "1 040 / 1 100",
    subtitle: "GPUs currently processing workloads",
  },
  {
    title: "Jobs today",
    value: "67 318",
    subtitle: "Completed since local day start",
  },
];

// ─── Live metrics (Figma: node 36616:2866) ────────────────────────────────────
// progressColor uses CSS variable tokens — no hardcoded hex
const LIVE_METRICS: LiveMetric[] = [
  {
    value: 43,
    centerLabel: "43%",
    label: "Utilization",
    sublabel: "44.6% avg (24h)",
    progressColor: "var(--chart-2)",
  },
  {
    value: 55,
    centerLabel: "55°C",
    label: "Temperature",
    sublabel: "59.8°C avg (24h)",
    progressColor: "var(--chart-3)",
  },
  {
    value: 72,
    centerLabel: "72%",
    label: "VRAM usage",
    sublabel: "21385.2 / 29208 GB",
    progressColor: "var(--chart-4)",
  },
];

// ─── Chart dataset (Figma: node 36616:2897) ───────────────────────────────────
// JobsDataPoint interface uses { time, jobs } — mapped from user-spec's { time, value }
const CHART_DATA: JobsDataPoint[] = [
  { time: "00:00", jobs: 102000 },
  { time: "04:00", jobs: 105500 },
  { time: "08:00", jobs: 113900 },
  { time: "12:00", jobs: 112000 },
  { time: "16:00", jobs: 106100 },
  { time: "20:00", jobs: 110800 },
  { time: "23:00", jobs: 118300 },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OverviewPage() {
  // Desktop: sidebar open by default. Mobile: controlled via Sheet.
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <Sidebar
      routes={SIDEBAR_ROUTES}
      username="xxxmorata"
      role="Operator account"
      version="1.0.0"
      buildDate="1 Feb, 2026"
    />
  );

  const mobileSidebarContent = (
    <Sidebar
      routes={SIDEBAR_ROUTES}
      username="xxxmorata"
      role="Operator account"
      version="1.0.0"
      buildDate="1 Feb, 2026"
      className="w-full"
    />
  );

  return (
    <div className="flex min-h-screen w-full bg-background overflow-hidden">

      {/* ── Desktop sidebar — hidden on mobile, collapsible on md+ ── */}
      <div className={`hidden md:flex ${desktopOpen ? "w-[255px]" : "w-0"} shrink-0 transition-all duration-200 overflow-hidden`}>
        {sidebarContent}
      </div>

      {/* ── Mobile sidebar — Sheet drawer ────────────────────────── */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-full p-0 border-r border-sidebar-border">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          {mobileSidebarContent}
        </SheetContent>
      </Sheet>

      {/* ── Main content column ───────────────────────────────────── */}
      <main className="flex flex-col flex-1 min-w-0 min-h-screen">

        {/* TopNavbar — toggle opens Sheet on mobile, collapses inline on desktop */}
        <TopNavbar
          statusLabel="Node running"
          statusVariant="success"
          onToggleSidebar={() => {
            if (window.innerWidth < 768) {
              setMobileOpen((o) => !o);
            } else {
              setDesktopOpen((o) => !o);
            }
          }}
        />

        {/* Scrollable content area */}
        <div className="flex flex-col gap-3 items-start px-6 pt-4 pb-6 w-full">

          {/* PageHeader */}
          <PageHeader title="Overview" />

          {/* ── Desktop layout (lg+): 4-col grid, 2 rows ─────────────────
               Col 1, Row 1 → Stat Card 1
               Col 2-4, Row 1 → Stat Cards 2, 3, 4
               Col 1, Row 2 → Live Metrics  (same width as col 1 above)
               Col 2-4, Row 2 → Chart       (spans 3 cols) */}
          <div className="hidden lg:grid grid-cols-4 gap-3 w-full">
            {/* Row 1 — 4 stat cards */}
            {STAT_CARDS.map((card) => (
              <StatCard
                key={card.title}
                title={card.title}
                value={card.value}
                subtitle={card.subtitle}
              />
            ))}

            {/* Row 2 — MetricsCard (col 1) */}
            <div className="flex">
              <MetricsCard metrics={LIVE_METRICS} className="w-full" />
            </div>

            {/* Row 2 — ChartCard (cols 2-4) */}
            <div className="col-span-3 flex">
              <ChartCard title="Jobs per hour (24h)" data={CHART_DATA} />
            </div>
          </div>

          {/* ── Mobile / Tablet layout (below lg) ────────────────────── */}
          <div className="lg:hidden flex flex-col gap-3 w-full">
            {/* Stat cards: 1 col on mobile, 2 cols on tablet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STAT_CARDS.map((card) => (
                <StatCard
                  key={card.title}
                  title={card.title}
                  value={card.value}
                  subtitle={card.subtitle}
                />
              ))}
            </div>

            {/* Metrics + Chart: stacked on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 w-full items-stretch">
              <div className="shrink-0 w-full sm:w-auto">
                <MetricsCard metrics={LIVE_METRICS} className="w-full sm:w-[243px]" />
              </div>
              <div className="flex flex-1 min-w-0">
                <ChartCard title="Jobs per hour (24h)" data={CHART_DATA} />
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
