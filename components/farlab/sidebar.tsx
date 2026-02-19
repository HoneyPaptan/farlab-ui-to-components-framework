import { cn } from "@/lib/utils";
import { SidebarHeader } from "./sidebar-header";
import { SidebarNav, type SidebarNavRoute } from "./sidebar-nav";
import { SidebarFooter } from "./sidebar-footer";

export interface SidebarProps {
  routes?: SidebarNavRoute[];
  username?: string;
  role?: string;
  version?: string;
  buildDate?: string;
  className?: string;
}

/**
 * Full sidebar component.
 * Matches Figma node 36616:2785 — "Sidebar Container".
 *
 * Width: fixed w-[224px] as per design.
 * Structure: Header on top, Nav grows to fill space, Footer pinned to bottom.
 * Right border: border-sidebar-border.
 */
export function Sidebar({
  routes,
  username,
  role,
  version,
  buildDate,
  className,
}: SidebarProps) {
  return (
    <aside className={cn("flex flex-col h-full w-[300px] shrink-0 border-r border-sidebar-border", className)}>
      <SidebarHeader />
      <SidebarNav routes={routes} />
      <SidebarFooter
        username={username}
        role={role}
        version={version}
        buildDate={buildDate}
      />
    </aside>
  );
}
