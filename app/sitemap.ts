import type { MetadataRoute } from "next"
import { PRODUCTS } from "@/lib/data"

const BASE = "https://auren.example"

// Default locale (ru) is served without a prefix; en lives under /en.
const PATHS = [
  "",
  "/shop",
  "/about",
  "/contact",
  "/faq",
  "/login",
  "/register",
  "/wishlist",
  "/checkout",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = PATHS.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }))

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${BASE}/shop/${product.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...staticPages, ...productPages]
}
