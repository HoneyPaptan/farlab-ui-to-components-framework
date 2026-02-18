"use client"

import { useState } from "react"
import { HeartIcon, BellIcon, TrendingUpIcon, UsersIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const TAB_ITEMS = [
  { value: "home",         label: "Home",         icon: HeartIcon },
  { value: "notification", label: "notification", icon: BellIcon },
  { value: "progress",     label: "progress",     icon: TrendingUpIcon },
  { value: "people",       label: "People",       icon: UsersIcon },
]

const TAB_CONTENT: Record<string, { heading: string; body: string }> = {
  home:         { heading: "Home",         body: "Welcome to the home tab. Explore your overview and recent activity." },
  notification: { heading: "Notifications", body: "You have no new notifications right now. Check back later." },
  progress:     { heading: "Progress",     body: "Track your progress here. Your stats and milestones will appear below." },
  people:       { heading: "People",       body: "Browse and manage people in your network from this tab." },
}

export default function TabsPage() {
  const [active, setActive] = useState("notification")

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center p-8">
      {/* Tab bar */}
      <div className="flex items-end">
        {TAB_ITEMS.map((tab) => {
          const isActive = tab.value === active
          const Icon = tab.icon
          return (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={cn(
                "relative flex h-7 items-center gap-1.5 px-2 py-1 text-sm font-medium transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? [
                      "bg-background text-foreground",
                      "border-border border-l border-r border-t rounded-tl-[10px] rounded-tr-[10px]",
                      // cover the bottom border that the inactive row draws
                      "after:absolute after:inset-x-0 after:bottom-[-1px] after:h-px after:bg-background",
                      "z-10",
                    ]
                  : [
                      "border-border border-b text-muted-foreground hover:text-foreground rounded-md",
                      "z-0",
                    ]
              )}
            >
              <Icon className="size-4 shrink-0" />
              {tab.label}
            </button>
          )
        })}
        {/* trailing border line to finish the tab bar on the right */}
        <div className="border-border h-7 flex-1 border-b min-w-4" />
      </div>

      {/* Tab panel */}
      <div className="border-border bg-background w-full max-w-lg rounded-b-lg rounded-tr-lg border p-6 shadow-sm">
        <h2 className="text-lg font-semibold">{TAB_CONTENT[active].heading}</h2>
        <p className="text-muted-foreground mt-2 text-sm">{TAB_CONTENT[active].body}</p>
      </div>
    </div>
  )
}
