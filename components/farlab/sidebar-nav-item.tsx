import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export interface SidebarNavItemProps {
  /** Display label for this nav item */
  label: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Renders the item as a destructive action (e.g. Log out) */
  destructive?: boolean;
  /** Renders a horizontal separator instead of a clickable item */
  isSeparator?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export function SidebarNavItem({
  label,
  active = false,
  destructive = false,
  isSeparator = false,
  onClick,
}: SidebarNavItemProps) {
  // Separator variant — sits inside a 24px height list row
  if (isSeparator) {
    return (
      <div className="flex h-6 items-center px-2 w-full">
        <Separator className="w-full" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        // Layout
        "flex items-center gap-0 px-2 py-1.5 w-full rounded-[8px]",
        // Typography
        "text-sm-regular text-left",
        // State colours
        active && "bg-muted text-foreground",
        !active && !destructive && "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
        destructive && "text-destructive hover:bg-destructive/10",
        // Transitions
        "transition-colors duration-150"
      )}
    >
      <span className="flex-1 min-w-0">{label}</span>
    </button>
  );
}
