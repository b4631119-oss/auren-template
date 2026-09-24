import { useTranslations } from "next-intl"

export interface LocalizedProductDetails {
  description: string
  accordion?: { title: string; content: string }[]
}

export function useLocalizedProductDetails(
  productId: string
): LocalizedProductDetails | null {
  const tRaw = useTranslations("productDetails")
  if (!tRaw.has(productId)) {
    return null
  }
  const entry = tRaw.raw(productId) as
    | { description?: string; accordion?: { title: string; content: string }[] }
    | undefined
  if (!entry) return null
  return {
    description: entry.description ?? "",
    accordion: entry.accordion,
  }
}
