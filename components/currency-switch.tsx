"use client"

import { DropdownMenu } from "@/components/ui/dropdown-menu"
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { CURRENCIES, type Currency } from "@/lib/currency"
import { useCurrency } from "@/components/currency-context"
import { useTranslations } from "next-intl"

export function CurrencySwitch() {
  const { currency, setCurrency } = useCurrency()
  const t = useTranslations("currencySwitch")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("label")}
        className="inline-flex h-10 cursor-pointer items-center gap-1 rounded-full border border-border/40 bg-background/60 px-3 text-xs font-semibold tracking-wide text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-muted focus:outline-none"
      >
        {currency}
        <ChevronDown className="size-3 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-24 min-w-24">
        {CURRENCIES.map((option: Currency) => (
          <DropdownMenuItem
            key={option}
            className="cursor-pointer justify-center text-xs font-semibold"
            onClick={() => setCurrency(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
