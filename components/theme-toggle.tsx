"use client"

import { useTheme } from "next-themes"
import { useBrand } from "@/components/providers/brand-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Check } from "lucide-react"

type ThemeOption = {
  label: string
  mode: "light" | "dark"
  brand: "default" | "farlabs"
}

const THEMES: ThemeOption[] = [
  { label: "Default Light",  mode: "light", brand: "default"  },
  { label: "Default Dark",   mode: "dark",  brand: "default"  },
  { label: "FarLabs Light",  mode: "light", brand: "farlabs"  },
  { label: "FarLabs Dark",   mode: "dark",  brand: "farlabs"  },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { brand, setBrand } = useBrand()

  const isDark = theme === "dark"

  function applyTheme(option: ThemeOption) {
    setTheme(option.mode)
    setBrand(option.brand)
  }

  function isActive(option: ThemeOption) {
    return theme === option.mode && brand === option.brand
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel className="text-xs text-muted-foreground">Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {THEMES.map((option) => (
          <DropdownMenuItem
            key={`${option.brand}-${option.mode}`}
            onClick={() => applyTheme(option)}
            className="flex items-center justify-between"
          >
            <span>{option.label}</span>
            {isActive(option) && <Check className="h-3.5 w-3.5 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
