import { cn } from "@/lib/utils";

export interface CircularMetricProps {
  /**
   * Progress value 0–100 (percentage).
   * Drives the SVG stroke-dashoffset.
   */
  value: number;
  /**
   * Label displayed in the centre of the ring.
   * Typically the formatted value string, e.g. "43%" or "55°C".
   */
  centerLabel: string;
  /**
   * CSS variable string for the progress arc stroke colour.
   * e.g. "var(--chart-2)". Defaults to "var(--primary)".
   */
  progressColor?: string;
  className?: string;
}

const RADIUS = 28;
const STROKE = 4;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SIZE = 70; // bumped from 56 for better visual weight

/**
 * SVG-based circular progress indicator.
 * Matches Figma nodes 36616:2871 / 2880 / 2889 — "Circular progress".
 *
 * 56×56 px, thin ring, center value label in xs-regular text-muted-foreground.
 * No external images — rendered purely with SVG so it adapts to theme colours.
 */
export function CircularMetric({
  value,
  centerLabel,
  progressColor = "var(--primary)",
  className,
}: CircularMetricProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const offset = CIRCUMFERENCE - (clampedValue / 100) * CIRCUMFERENCE;

  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: SIZE, height: SIZE }}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="-rotate-90"
        aria-hidden="true"
      >
        {/* Track ring */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          className="stroke-muted"
        />
        {/* Progress arc */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="transition-all duration-500"
          style={{ stroke: progressColor }}
        />
      </svg>

      {/* Centre label */}
      <span
        className="absolute inset-0 flex items-center justify-center text-xs-regular text-muted-foreground text-center leading-4"
        style={{ transform: "rotate(0deg)" }}
      >
        {centerLabel}
      </span>
    </div>
  );
}
