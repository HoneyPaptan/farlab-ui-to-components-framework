import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NavbarActionButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Secondary action button used in the top navbar.
 * Maps to the "Solid Button" in the Figma design.
 * Based on shadcn <Button variant="secondary">.
 */
export function NavbarActionButton({
  label,
  onClick,
  disabled,
  className,
}: NavbarActionButtonProps) {
  return (
    <Button
      variant="secondary"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        // Match Figma: px-3 py-1.5 rounded-[8px] text-sm-medium
        "px-3 py-1.5 h-auto rounded-[8px] text-sm-medium",
        className
      )}
    >
      {label}
    </Button>
  );
}
