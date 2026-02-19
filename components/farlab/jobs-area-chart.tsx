"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export interface JobsDataPoint {
  /** Time label for the X axis, e.g. "00:00" */
  time: string;
  /** Job count at this hour */
  jobs: number;
}

export interface JobsAreaChartProps {
  data?: JobsDataPoint[];
}

const chartConfig = {
  jobs: {
    label: "Jobs",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

/** Synthetic 24-hour placeholder dataset — matches the Figma area chart shape */
const DEFAULT_DATA: JobsDataPoint[] = [
  { time: "00:00", jobs: 88900 },
  { time: "01:00", jobs: 91000 },
  { time: "02:00", jobs: 97200 },
  { time: "03:00", jobs: 99500 },
  { time: "04:00", jobs: 105600 },
  { time: "05:00", jobs: 108000 },
  { time: "06:00", jobs: 110200 },
  { time: "07:00", jobs: 113900 },
  { time: "08:00", jobs: 115400 },
  { time: "09:00", jobs: 112000 },
  { time: "10:00", jobs: 116000 },
  { time: "11:00", jobs: 118300 },
  { time: "12:00", jobs: 114500 },
  { time: "13:00", jobs: 110000 },
  { time: "14:00", jobs: 107500 },
  { time: "15:00", jobs: 111000 },
  { time: "16:00", jobs: 113200 },
  { time: "17:00", jobs: 116800 },
  { time: "18:00", jobs: 117500 },
  { time: "19:00", jobs: 114900 },
  { time: "20:00", jobs: 112000 },
  { time: "21:00", jobs: 107000 },
  { time: "22:00", jobs: 103000 },
  { time: "23:00", jobs: 98000 },
];

/** Y-axis tick formatter — converts raw numbers to "K" notation */
function formatYTick(value: number): string {
  return `${(value / 1000).toFixed(1)}K`;
}

/**
 * Jobs-per-hour area chart built on shadcn <ChartContainer> + recharts.
 * Matches Figma node 36616:2897 chart area.
 *
 * Y axis labels are 44px wide on the left (matching Figma).
 * X axis shows 3 time labels: 00:00, 12:00, 23:00.
 * Filled area + stroke line.
 */
export function JobsAreaChart({ data = DEFAULT_DATA }: JobsAreaChartProps) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 8, right: 20, left: 16, bottom: 8 }}
        >
          <defs>
            <linearGradient id="jobsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--primary)"
                stopOpacity={0.25}
              />
              <stop
                offset="100%"
                stopColor="var(--primary)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="var(--border)"
            strokeDasharray="0"
          />

          <YAxis
            tickFormatter={formatYTick}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={48}
            domain={["auto", "auto"]}
          />

          <XAxis
            dataKey="time"
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            padding={{ left: 20, right: 0 }}
            /* Show only 3 ticks: 00:00, 12:00, 23:00 */
            ticks={["00:00", "12:00", "23:00"]}
            interval="preserveStartEnd"
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />

          <Area
            type="monotone"
            dataKey="jobs"
            stroke="var(--primary)"
            strokeWidth={1.5}
            fill="url(#jobsGradient)"
            dot={false}
            activeDot={{ r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
