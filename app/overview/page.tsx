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
// progressColor omitted → defaults to stroke-primary (CSS variable backed)
const LIVE_METRICS: LiveMetric[] = [
  {
    value: 43,
    centerLabel: "43%",
    label: "Utilization",
    sublabel: "44.6% avg (24h)",
  },
  {
    value: 55,
    centerLabel: "55°C",
    label: "Temperature",
    sublabel: "59.8°C avg (24h)",
  },
  {
    value: 72,
    centerLabel: "72%",
    label: "VRAM usage",
    sublabel: "21385.2 / 29208 GB",
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
  return (
    /**
     * Outer shell: full-viewport height, centred container.
     * max-w-[1280px] → stays centred on 1440 / 1920 / 2K.
     */
    <div className="flex min-h-screen w-full bg-background">
      <div className="flex w-full max-w-[1280px] mx-auto overflow-hidden rounded-[14px]">

        {/* ── Sidebar (224px, fixed, border-r) ──────────────────────── */}
        <Sidebar
          routes={SIDEBAR_ROUTES}
          username="xxxmorata"
          role="Operator account"
          version="1.0.0"
          buildDate="1 Feb, 2026"
        />

        {/* ── Main content column (flex-1, fluid) ───────────────────── */}
        <main className="flex flex-col flex-1 min-w-0 min-h-screen">

          {/* TopNavbar */}
          <TopNavbar statusLabel="Badge" />

          {/* Scrollable content area */}
          <div className="flex flex-col gap-3 items-start px-6 pt-4 pb-6 w-full">

            {/* PageHeader */}
            <PageHeader title="Overview" />

            {/* Stat cards row + metrics + chart */}
            <div className="flex flex-wrap gap-3 items-start w-full">

              {/* 4 Stat Cards */}
              {STAT_CARDS.map((card) => (
                <StatCard
                  key={card.title}
                  title={card.title}
                  value={card.value}
                  subtitle={card.subtitle}
                />
              ))}

              {/* Live Metrics Card (243px fixed) */}
              <MetricsCard metrics={LIVE_METRICS} />

              {/* Jobs-per-hour Chart Card (flex-1) */}
              <ChartCard
                title="Jobs per hour (24h)"
                data={CHART_DATA}
              />

            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
