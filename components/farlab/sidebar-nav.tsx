import { SidebarNavItem } from "./sidebar-nav-item";

export interface SidebarNavRoute {
  key: string;
  label: string;
  active?: boolean;
  destructive?: boolean;
  isSeparator?: boolean;
  onClick?: () => void;
}

export interface SidebarNavProps {
  routes?: SidebarNavRoute[];
}

/**
 * Default routes matching the Figma sidebar content design.
 * Callers can override via the `routes` prop.
 */
const DEFAULT_ROUTES: SidebarNavRoute[] = [
  { key: "overview", label: "Overview", active: true },
  { key: "gpus", label: "GPUs" },
  { key: "rewards", label: "Rewards" },
  { key: "sep-1", label: "", isSeparator: true },
  { key: "logs", label: "Logs" },
  { key: "support", label: "Support" },
  { key: "logout", label: "Log out", destructive: true },
];

export function SidebarNav({ routes = DEFAULT_ROUTES }: SidebarNavProps) {
  return (
    <nav className="flex flex-col flex-1 items-start w-full min-h-0">
      {/* Section wrapper — px-2 py-2.5 matching Figma */}
      <div className="flex flex-col items-start px-2 py-2.5 w-full">
        <div className="flex flex-col items-start gap-0.5 w-full">
          {routes.map((route) => (
            <SidebarNavItem
              key={route.key}
              label={route.label}
              active={route.active}
              destructive={route.destructive}
              isSeparator={route.isSeparator}
              onClick={route.onClick}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
