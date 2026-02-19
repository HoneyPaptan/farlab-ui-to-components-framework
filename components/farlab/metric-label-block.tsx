export interface MetricLabelBlockProps {
  /** Primary label — e.g. "Utilization" */
  label: string;
  /** Secondary sub-label — e.g. "44.6% avg (24h)" */
  sublabel: string;
}

/**
 * Text block used alongside CircularMetric in the Live Metrics card.
 * Matches the "Flex vertical" group in Figma node 36616:2876.
 *
 * label    → text-sm-regular  text-card-foreground
 * sublabel → text-xs-regular  text-muted-foreground
 */
export function MetricLabelBlock({ label, sublabel }: MetricLabelBlockProps) {
  return (
    <div className="flex flex-col gap-1 items-start justify-center flex-1 min-w-0">
      <p className="text-sm-regular text-card-foreground w-full leading-5">
        {label}
      </p>
      <p className="text-xs-regular text-muted-foreground w-full leading-4">
        {sublabel}
      </p>
    </div>
  );
}
