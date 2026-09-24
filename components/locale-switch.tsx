"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"

export function LocaleSwitch() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const other = locale === "ru" ? "en" : "ru"

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: other })}
      className="inline-flex h-10 cursor-pointer items-center rounded-full border border-border/40 bg-background/60 px-3 text-xs font-semibold tracking-wide text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-muted"
      aria-label="Switch language"
    >
      <span className={locale === "ru" ? "text-foreground" : "text-muted-foreground"}>
        RU
      </span>
      <span className="mx-1 text-muted-foreground/50">/</span>
      <span className={locale === "en" ? "text-foreground" : "text-muted-foreground"}>
        EN
      </span>
    </button>
  )
}
