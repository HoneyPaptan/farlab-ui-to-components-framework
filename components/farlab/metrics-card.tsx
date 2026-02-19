import { Card, CardContent } from "@/components/ui/card";
import { CircularMetric } from "./circular-metric";
import { MetricLabelBlock } from "./metric-label-block";

export interface LiveMetric {
  /** Numeric value 0–100 for the ring */
  value: number;
  /** Label shown in the ring centre, e.g. "43%" or "55°C" */
  centerLabel: string;
  /** Primary descriptor, e.g. "Utilization" */
  label: string;
  /** Secondary descriptor, e.g. "44.6% avg (24h)" */
  sublabel: string;
  /** Tailwind stroke-colour class for the progress arc */
  progressColor?: string;
}

export interface MetricsCardProps {
  metrics?: LiveMetric[];
}

/**
 * "Live metrics" card with three circular progress rows.
 * Matches Figma node 36616:2866.
 *
 * bg-card, rounded-[14px], h-[287px] (fixed height in design),
 * w-[243px] shrink-0, pt-4 pb-5 gap-4.
 */
const DEFAULT_METRICS: LiveMetric[] = [
  {
    value: 43,
    centerLabel: "43%",
    label: "Utilization",
    sublabel: "44.6% avg (24h)",
    progressColor: "stroke-primary",
  },
  {
    value: 55,
    centerLabel: "55°C",
    label: "Temperature",
    sublabel: "59.8°C avg (24h)",
    progressColor: "stroke-orange-500",
  },
  {
    value: 72,
    centerLabel: "72%",
    label: "VRAM usage",
    sublabel: "21385.2 / 29208 GB",
    progressColor: "stroke-blue-500",
  },
];

export function MetricsCard({ metrics = DEFAULT_METRICS }: MetricsCardProps) {
  return (
    <Card className="flex flex-col bg-card rounded-[14px] pt-4 pb-5 overflow-hidden w-[243px] h-[287px] shrink-0 border-0 shadow-none gap-4">
      <CardContent className="flex flex-col gap-4 p-0 flex-1">
        {/* Card title */}
        <div className="flex flex-col items-start justify-center px-5 shrink-0">
          <p className="text-sm-medium text-card-foreground w-full">
            Live metrics
          </p>
        </div>

        {/* Metric rows — spaced evenly to fill the card height */}
        <div className="flex flex-col justify-between flex-1 px-5 min-h-0">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex gap-4 items-center justify-center w-full"
            >
              <CircularMetric
                value={metric.value}
                centerLabel={metric.centerLabel}
                progressColor={metric.progressColor}
              />
              <MetricLabelBlock
                label={metric.label}
                sublabel={metric.sublabel}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
