import { DotBadge } from "./dot-badge";
import { NavbarActionButton } from "./navbar-action-button";

export interface TopNavbarProps {
  /** Status label shown next to the dot badge */
  statusLabel?: string;
  /** Called when the Restart button is clicked */
  onRestart?: () => void;
  /** Called when the Pause node button is clicked */
  onPauseNode?: () => void;
}

/**
 * Top navigation bar for the main content area.
 * Matches Figma node 36616:2827.
 *
 * Left  — DotBadge (status indicator)
 * Right — "Restart" + "Pause node" action buttons
 */
export function TopNavbar({
  statusLabel = "Badge",
  onRestart,
  onPauseNode,
}: TopNavbarProps) {
  return (
    <header className="flex items-center justify-between px-6 py-2.5 border-b border-border w-full shrink-0">
      {/* Left: status badge */}
      <div className="flex items-center shrink-0">
        <DotBadge label={statusLabel} />
      </div>

      {/* Right: action buttons */}
      <div className="flex items-center gap-3 shrink-0">
        <NavbarActionButton label="Restart" onClick={onRestart} />
        <NavbarActionButton label="Pause node" onClick={onPauseNode} />
      </div>
    </header>
  );
}
