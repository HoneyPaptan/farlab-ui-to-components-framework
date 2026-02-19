export interface PageHeaderProps {
  /** Page title — defaults to "Overview" */
  title?: string;
}

/**
 * Page-level heading bar.
 * Matches Figma node 36616:2835 — "Title" row.
 * Uses text-2xl-medium with display tracking from globals.css.
 */
export function PageHeader({ title = "Overview" }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-start pb-1.5 w-full shrink-0">
      <h1 className="text-2xl-medium text-card-foreground tracking-display">
        {title}
      </h1>
    </div>
  );
}
