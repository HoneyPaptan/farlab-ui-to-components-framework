import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeartIcon, PlusIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const variants = [
  { variant: "default",     label: "Primary" },
  { variant: "secondary",   label: "Secondary" },
  { variant: "destructive", label: "Destructive" },
  { variant: "outline",     label: "Outline" },
  { variant: "ghost",       label: "Ghost" },
  { variant: "link",        label: "Link" },
] as const

const sizes = [
  { size: "xs",  label: "XS" },
  { size: "sm",  label: "SM" },
  { size: "default", label: "Default" },
  { size: "lg",  label: "LG" },
] as const

export default function Page() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col gap-10 p-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Button Variants</h1>
          <p className="text-muted-foreground text-sm">All button styles from the design system.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tabs">Custom Tabs</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/typography">Typography</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          {variants.map(({ variant, label }) => (
            <Button key={variant} variant={variant}>{label}</Button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">With Icon (start)</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">
            <HeartIcon data-icon="inline-start" />
            Button
          </Button>
          <Button variant="secondary">
            <HeartIcon data-icon="inline-start" />
            Button
          </Button>
          <Button variant="destructive">
            <HeartIcon data-icon="inline-start" />
            Button
          </Button>
          <Button variant="outline">
            <HeartIcon data-icon="inline-start" />
            Button
          </Button>
          <Button variant="ghost">
            <HeartIcon data-icon="inline-start" />
            Button
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Sizes</h2>
        <div className="flex flex-wrap items-end gap-3">
          {sizes.map(({ size, label }) => (
            <Button key={size} size={size}>{label}</Button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Icon only</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-xs" variant="default"><PlusIcon /></Button>
          <Button size="icon-sm" variant="default"><PlusIcon /></Button>
          <Button size="icon"    variant="default"><PlusIcon /></Button>
          <Button size="icon-lg" variant="default"><PlusIcon /></Button>
          <Button size="icon" variant="outline"><PlusIcon /></Button>
          <Button size="icon" variant="ghost"><PlusIcon /></Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Disabled state</h2>
        <div className="flex flex-wrap items-center gap-3">
          {variants.map(({ variant, label }) => (
            <Button key={variant} variant={variant} disabled>{label}</Button>
          ))}
        </div>
      </section>
    </div>
  )
}
