import { notFound } from "next/navigation"

// Any unmatched URL under [locale] renders the localized 404 page.
export default function CatchAllPage() {
  notFound()
}
