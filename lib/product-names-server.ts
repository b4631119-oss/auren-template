import en from "@/messages/en.json"
import ru from "@/messages/ru.json"

const RU_NAMES: Record<string, string> =
  (ru as { productNames?: Record<string, string> }).productNames ?? {}
const EN_NAMES: Record<string, string> =
  (en as { productNames?: Record<string, string> }).productNames ?? {}

// Server counterpart of useLocalizedProductName: resolves the display name
// for a product slug. English names come straight from the catalog.
export function getProductName(
  locale: string,
  slug: string,
  fallback: string
): string {
  if (locale === "ru" && RU_NAMES[slug]) {
    return RU_NAMES[slug]
  }
  return EN_NAMES[slug] ?? fallback
}
