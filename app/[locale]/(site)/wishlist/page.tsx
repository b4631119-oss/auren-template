"use client"

import { useWishlist } from "@/components/wishlist-context"
import { ProductCard } from "@/components/shadcn-space/blocks/product-listing-01/product-card"
import { ShoppingBag, Heart, ChevronLeft, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function WishlistPage() {
  const { wishlist } = useWishlist()
  const t = useTranslations("wishlist")
  const tCategories = useTranslations("productCategories")

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 px-4 text-center">
        <div className="size-20 bg-muted rounded-full flex items-center justify-center">
          <Heart className="size-10 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">{t("emptyTitle")}</h2>
          <p className="text-muted-foreground max-w-sm">
            {t("emptyDescription")}
          </p>
        </div>
        <Link href="/shop">
          <Button
            className={cn(
              "group relative h-12 w-fit overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
              "cursor-pointer"
            )}
          >
            <span className="relative z-10 transition-all duration-500">
              {t("explore")}
            </span>
            <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col gap-4">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            {t("backToShop")}
          </Link>
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {t("title")}
              </h1>
              <p className="text-muted-foreground">
                {t("itemsSaved", { count: wishlist.length })}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                slug={item.slug}
                category={tCategories.has(item.category) ? tCategories(item.category) : item.category}
                rating={4.5} // Mock rating
                reviews={12} // Mock reviews
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
