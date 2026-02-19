import { StatCard } from "./stat-card";
import { MetricsCard } from "./metrics-card";
import { ChartCard } from "./chart-card";

export interface StatCardData {
  title: string;
  value: string;
  subtitle?: string;
}

export interface StatCardsRowProps {
  cards?: StatCardData[];
}

/**
 * Row of stat cards + metrics card + chart card.
 * Matches Figma node 36616:2837 — "Row".
 *
 * Uses flex-wrap so cards reflow on narrower viewports.
 * The 4 StatCards and MetricsCard are fixed-width (243px each).
 * The ChartCard is flex-1 and fills remaining space.
 */
const DEFAULT_CARDS: StatCardData[] = [
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

export function StatCardsRow({ cards = DEFAULT_CARDS }: StatCardsRowProps) {
  return (
    <div className="flex flex-wrap gap-3 items-start w-full">
      {/* 4 stat cards */}
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          subtitle={card.subtitle}
        />
      ))}

      {/* Live metrics card — fixed 243px */}
      <MetricsCard />

      {/* Chart card — grows to fill remaining row width */}
      <ChartCard />
    </div>
  );
}
