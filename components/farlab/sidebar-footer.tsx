import { Separator } from "@/components/ui/separator";

export interface SidebarFooterProps {
  /** Operator username */
  username?: string;
  /** Role / account type label */
  role?: string;
  /** Semantic version string */
  version?: string;
  /** Build date string */
  buildDate?: string;
}

/**
 * Sidebar footer showing user identity and build metadata.
 * Matches Figma node 36616:2814 — fixed height ~129px in design
 * but set to h-auto for responsiveness.
 */
export function SidebarFooter({
  username = "xxxmorata",
  role = "Operator account",
  version = "1.0.0",
  buildDate = "1 Feb, 2026",
}: SidebarFooterProps) {
  return (
    <div className="flex flex-col gap-3 items-start justify-center p-4 w-full shrink-0 rounded-[6px]">
      {/* User info block */}
      <div className="flex flex-col gap-px items-center justify-center w-full">
        <p className="text-xs-regular text-foreground w-full whitespace-pre-wrap">
          {username}
        </p>
        <p className="text-xs-regular text-muted-foreground w-full whitespace-pre-wrap">
          {role}
        </p>
      </div>

      <Separator className="w-full" />

      {/* Build metadata block */}
      <div className="flex flex-col gap-2 items-start w-full">
        <div className="flex gap-2 items-center justify-center w-full">
          <span className="text-xs-regular text-foreground w-[65px] shrink-0">
            Version
          </span>
          <span className="text-xs-regular text-sidebar-foreground text-right flex-1 min-w-0">
            {version}
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center w-full">
          <span className="text-xs-regular text-foreground w-[65px] shrink-0">
            Build date
          </span>
          <span className="text-xs-regular text-sidebar-foreground text-right flex-1 min-w-0">
            {buildDate}
          </span>
        </div>
      </div>
    </div>
  );
}
