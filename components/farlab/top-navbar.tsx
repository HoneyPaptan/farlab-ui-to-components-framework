import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { DotBadge } from "./dot-badge";
import { NavbarActionButton } from "./navbar-action-button";

export interface TopNavbarProps {
  /** Status label shown next to the dot badge */
  statusLabel?: string;
  /** Colour variant for the status dot — maps to CSS variable token */
  statusVariant?: "default" | "success" | "warning" | "destructive";
  /** Called when the sidebar toggle button is clicked */
  onToggleSidebar?: () => void;
  /** Called when the Restart button is clicked */
  onRestart?: () => void;
  /** Called when the Pause node button is clicked */
  onPauseNode?: () => void;
}

/**
 * Top navigation bar for the main content area.
 * Matches Figma node 36616:2827.
 *
 * Left  — sidebar toggle + DotBadge (status indicator)
 * Right — "Restart" + "Pause node" action buttons
 */
export function TopNavbar({
  statusLabel = "Badge",
  statusVariant = "default",
  onToggleSidebar,
  onRestart,
  onPauseNode,
}: TopNavbarProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2.5 border-b border-border w-full shrink-0">
      {/* Left: sidebar toggle + status badge */}
      <div className="flex items-center gap-3 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 shrink-0"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <PanelLeft className="h-4 w-4" />
        </Button>
        <DotBadge label={statusLabel} variant={statusVariant} />
      </div>

      {/* Right: action buttons */}
      <div className="flex items-center gap-3 shrink-0">
        <NavbarActionButton label="Restart" onClick={onRestart} />
        <NavbarActionButton label="Pause node" onClick={onPauseNode} />
        <ThemeToggle />
      </div>
    </header>
  );
}
