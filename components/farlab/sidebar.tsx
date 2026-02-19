import { SidebarHeader } from "./sidebar-header";
import { SidebarNav, type SidebarNavRoute } from "./sidebar-nav";
import { SidebarFooter } from "./sidebar-footer";

export interface SidebarProps {
  routes?: SidebarNavRoute[];
  username?: string;
  role?: string;
  version?: string;
  buildDate?: string;
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
}: SidebarProps) {
  return (
    <aside className="flex flex-col h-full w-[224px] shrink-0 border-r border-sidebar-border">
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
