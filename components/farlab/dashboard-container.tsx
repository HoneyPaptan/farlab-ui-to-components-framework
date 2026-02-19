import { Sidebar, type SidebarProps } from "./sidebar";
import { TopNavbar, type TopNavbarProps } from "./top-navbar";
import { PageHeader } from "./page-header";
import { StatCardsRow } from "./stat-cards-row";

export interface DashboardContainerProps {
  sidebarProps?: SidebarProps;
  navbarProps?: TopNavbarProps;
  /** Override the page title shown in PageHeader */
  pageTitle?: string;
  /** Slot for additional content below the stat cards row */
  children?: React.ReactNode;
}

/**
 * Root dashboard layout shell.
 * NOT assembled as a page — this is the structural container only.
 * Do not route or wire further until confirmation.
 *
 * Layout:
 *   ┌──────────┬──────────────────────────────────┐
 *   │ Sidebar  │ TopNavbar                        │
 *   │ 224px    │ ────────────────────────────────  │
 *   │          │ PageHeader                        │
 *   │          │ StatCardsRow                      │
 *   │          │ {children}                        │
 *   └──────────┴──────────────────────────────────┘
 *
 * Container: max-w-[1280px] mx-auto, fluid beyond that breakpoint.
 * The outer wrapper fills the full viewport height.
 */
export function DashboardContainer({
  sidebarProps,
  navbarProps,
  pageTitle,
  children,
}: DashboardContainerProps) {
  return (
    /* Full-viewport shell */
    <div className="flex min-h-screen w-full">
      {/* Centered, max-width constrained layout */}
      <div className="flex w-full max-w-[1280px] mx-auto overflow-hidden rounded-[14px]">
        {/* Sidebar */}
        <Sidebar {...sidebarProps} />

        {/* Main content column */}
        <main className="flex flex-col flex-1 min-w-0 min-h-screen">
          {/* Top navigation bar */}
          <TopNavbar {...navbarProps} />

          {/* Scrollable content area */}
          <div className="flex flex-col gap-3 items-start px-6 pt-4 pb-6 w-full">
            <PageHeader title={pageTitle} />
            <StatCardsRow />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
