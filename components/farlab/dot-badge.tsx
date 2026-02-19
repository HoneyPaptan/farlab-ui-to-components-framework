import { cn } from "@/lib/utils";

export interface DotBadgeProps {
  /** Label text shown next to the dot */
  label: string;
  /** Colour variant of the dot */
  variant?: "default" | "success" | "warning" | "destructive";
  className?: string;
}

const dotStyle: Record<NonNullable<DotBadgeProps["variant"]>, string> = {
  default: "var(--muted-foreground)",
  success: "var(--chart-2)",
  warning: "var(--chart-3)",
  destructive: "var(--destructive)",
};

export function DotBadge({ label, variant = "default", className }: DotBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full",
        className
      )}
    >
      {/* Dot indicator — 8×8 rounded circle, colour from CSS variable */}
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 rounded-full shrink-0"
        style={{ backgroundColor: dotStyle[variant] }}
      />
      <span className="text-xs-medium text-muted-foreground whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
