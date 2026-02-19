import { Card, CardContent } from "@/components/ui/card";

export interface StatCardProps {
  /** Card title — e.g. "Session uptime" */
  title: string;
  /** Primary value — e.g. "10:20:00" or "1 247,85 $" */
  value: string;
  /** Optional sub-label below the value — e.g. "Resets when you restart the node" */
  subtitle?: string;
}

/**
 * Reusable stat card used for the 4 top metric cards.
 * Matches Figma node 36616:2838.
 *
 * Layout:
 *   ┌─────────────────────┐
 *   │ Title  (sm-medium)  │  px-5
 *   │ Value  (2xl-medium) │  px-5
 *   │ Subtitle (xs-reg)   │  px-5
 *   └─────────────────────┘
 *
 * bg-card, rounded-[14px], pt-4 pb-5, gap-3, w-[243px]
 */
export function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <Card className="flex flex-col gap-3 bg-card rounded-[14px] pt-4 pb-5 overflow-hidden w-[243px] shrink-0 border-0 shadow-none">
      <CardContent className="flex flex-col gap-3 p-0">
        {/* Title */}
        <div className="flex flex-col items-start justify-center px-5">
          <p className="text-sm-medium text-card-foreground w-full">
            {title}
          </p>
        </div>

        {/* Value */}
        <div className="flex items-center overflow-hidden px-5">
          <p className="text-2xl-medium text-card-foreground shrink-0">
            {value}
          </p>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div className="flex flex-col items-start justify-center px-5">
            <p className="text-xs-regular text-muted-foreground w-full">
              {subtitle}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
