import { cn } from "@/lib/utils";

export interface DotBadgeProps {
  /** Label text shown next to the dot */
  label: string;
  /** Colour variant of the dot */
  variant?: "default" | "success" | "warning" | "destructive";
  className?: string;
}

const dotColour: Record<NonNullable<DotBadgeProps["variant"]>, string> = {
  default: "bg-muted-foreground",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  destructive: "bg-destructive",
};

export function DotBadge({ label, variant = "default", className }: DotBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full",
        className
      )}
    >
      {/* Dot indicator — matches the Figma "Mask" shape (8×12 px) */}
      <span
        aria-hidden="true"
        className={cn(
          "inline-block w-2 h-3 rounded-full shrink-0",
          dotColour[variant]
        )}
      />
      <span className="text-xs-medium text-muted-foreground whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
