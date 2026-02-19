import { Card, CardContent } from "@/components/ui/card";
import { JobsAreaChart, type JobsDataPoint } from "./jobs-area-chart";

export interface ChartCardProps {
  title?: string;
  data?: JobsDataPoint[];
}

/**
 * Chart card containing the jobs-per-hour area chart.
 * Matches Figma node 36616:2897.
 *
 * flex-1 (grows to fill remaining row width), h-[287px] fixed height,
 * bg-card, rounded-[14px], overflow-hidden, pt-4 pb-5 gap-2.
 */
export function ChartCard({
  title = "Jobs per hour (24h)",
  data,
}: ChartCardProps) {
  return (
    <Card className="flex flex-col flex-1 min-w-0 bg-card rounded-[14px] pt-4 pb-5 overflow-hidden h-[287px] border-0 shadow-none gap-2">
      <CardContent className="flex flex-col gap-2 p-0 flex-1 min-h-0">
        {/* Card title */}
        <div className="flex flex-col items-start justify-center px-5 shrink-0">
          <p className="text-sm-medium text-card-foreground w-full">{title}</p>
        </div>

        {/* Chart area — fills remaining height */}
        <div className="flex-1 min-h-0 w-full">
          <JobsAreaChart data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
