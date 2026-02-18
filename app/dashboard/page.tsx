"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  ActivityIcon,
  ArrowLeftRightIcon,
  CalendarClockIcon,
  ChartPieIcon,
  ChartSplineIcon,
  ClipboardListIcon,
  Clock9Icon,
  CrownIcon,
  HashIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  Undo2Icon,
  UsersIcon,
} from "lucide-react"

const pages = [
  { label: "Content Performance", icon: ChartSplineIcon, active: true },
  { label: "Audience insight", icon: UsersIcon },
  { label: "Engagement Metrics", icon: ChartPieIcon },
  { label: "Hashtag performance", icon: HashIcon, badge: "New" },
  { label: "Competitor Analysis", icon: ArrowLeftRightIcon },
  { label: "Campaign Tracking", icon: Clock9Icon },
  { label: "Sentiment analysis", icon: ClipboardListIcon },
  { label: "Influencer", icon: CrownIcon },
]

const supportingFeatures = [
  { label: "Real time monitoring", icon: ActivityIcon },
  { label: "Schedule post & calendar", icon: CalendarClockIcon },
  { label: "Report & export", icon: Undo2Icon },
  { label: "Settings & Integrations", icon: SettingsIcon },
  { label: "User management", icon: UsersIcon },
]

function DashboardSidebar() {
  return (
    <Sidebar collapsible="none" className="w-64 shrink-0 border-r">
      <SidebarHeader className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="default">
              <LayoutDashboardIcon />
              <span className="font-normal">Dashboard</span>
            </SidebarMenuButton>
            <SidebarMenuBadge>
              <Badge variant="secondary" className="rounded-full px-1.5 text-xs">
                Badge
              </Badge>
            </SidebarMenuBadge>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton isActive={item.active}>
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>
                      <Badge variant="secondary" className="rounded-full px-1.5 text-xs">
                        {item.badge}
                      </Badge>
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="mx-2 my-1 w-auto" />

        <SidebarGroup>
          <SidebarGroupLabel>Supporting features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportingFeatures.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton>
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

function NavBar() {
  return (
    <div className="bg-card rounded-xl shadow-sm h-14 w-full" />
  )
}

function PlaceholderCard({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardContent className="h-full p-6">
        <div className="border-border h-full w-full rounded-md border border-dashed" />
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  return (
    <SidebarProvider defaultOpen>
      <div className="bg-background text-foreground flex min-h-screen w-full">
        <DashboardSidebar />

        <main className="flex flex-1 flex-col gap-6 p-3 pt-4 lg:p-6">
          <NavBar />

          {/* Top two cards row */}
          <div className="flex flex-1 gap-6">
            <PlaceholderCard className="flex-1" />
            <PlaceholderCard className="flex-1" />
          </div>

          {/* Full-width bottom card */}
          <div className="flex flex-1">
            <PlaceholderCard className="w-full" />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
