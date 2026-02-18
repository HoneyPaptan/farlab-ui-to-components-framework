import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const SIZES = [
  { key: "xs",   label: "XS",   detail: "12px / 16px" },
  { key: "sm",   label: "SM",   detail: "14px / 20px" },
  { key: "base", label: "Base", detail: "16px / 22px" },
  { key: "lg",   label: "LG",   detail: "18px / 24px" },
  { key: "xl",   label: "XL",   detail: "20px / 26px" },
  { key: "2xl",  label: "2XL",  detail: "24px / 32px / -0.02em" },
  { key: "3xl",  label: "3XL",  detail: "30px / 36px / -0.02em" },
  { key: "4xl",  label: "4XL",  detail: "36px / 40px / -0.02em" },
  { key: "5xl",  label: "5XL",  detail: "48px / 1 / -0.02em" },
  { key: "6xl",  label: "6XL",  detail: "60px / 1 / -0.02em" },
  { key: "7xl",  label: "7XL",  detail: "72px / 1 / -0.02em" },
  { key: "8xl",  label: "8XL",  detail: "96px / 1 / -0.02em" },
  { key: "9xl",  label: "9XL",  detail: "128px / 1 / -0.02em" },
] as const

const WEIGHTS = [
  { key: "light",    label: "Light",    weight: "300" },
  { key: "regular",  label: "Regular",  weight: "400" },
  { key: "medium",   label: "Medium",   weight: "500" },
  { key: "semibold", label: "Semi Bold",weight: "600" },
  { key: "bold",     label: "Bold",     weight: "700" },
] as const

export default function TypographyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="space-y-1">
          <h1 className="text-2xl-semibold">Typography</h1>
          <p className="text-sm-regular text-muted-foreground">
            We provide pre-made typography to get started on your next project instantly.
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/">← Back</Link>
        </Button>
      </div>

      {/* Scale table */}
      <div className="space-y-0">
        {/* Column headers */}
        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] gap-x-8 pb-3 border-b border-border">
          <span className="text-xs-medium text-muted-foreground uppercase tracking-wide">Size</span>
          {WEIGHTS.map((w) => (
            <span key={w.key} className="text-xs-medium text-muted-foreground uppercase tracking-wide">
              {w.label}
            </span>
          ))}
        </div>

        {SIZES.map((size, i) => (
          <div key={size.key}>
            <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] gap-x-8 items-baseline py-6">
              {/* Size label + detail */}
              <div className="space-y-0.5">
                <div className="text-sm-semibold">{size.label}</div>
                <div className="text-xs-regular text-muted-foreground whitespace-nowrap">{size.detail}</div>
              </div>

              {/* Weight columns */}
              {WEIGHTS.map((weight) => (
                <span
                  key={weight.key}
                  className={`text-${size.key}-${weight.key}`}
                >
                  Text {size.label}
                  <br />
                  <span className="text-muted-foreground">({weight.label})</span>
                </span>
              ))}
            </div>
            {i < SIZES.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </div>
  )
}
