import { useTranslations } from "next-intl"

// The catalog in lib/data.ts is shared across locales; only the display
// name is localized. English names come straight from the catalog.
export function useLocalizedProductName(slug: string, fallback: string) {
  const t = useTranslations("productNames")
  return t.has(slug) ? t(slug) : fallback
}
