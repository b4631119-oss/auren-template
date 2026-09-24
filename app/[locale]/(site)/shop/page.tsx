"use client"

import { useState, useRef, useEffect } from "react"
import ProductCategory from "@/components/shadcn-space/blocks/product-category-04/product-category"
import ProductListing from "@/components/shadcn-space/blocks/product-listing-01/index"
import { PRODUCTS } from "@/lib/data"
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react"
import { Instrument_Serif } from "next/font/google"
import { cn } from "@/lib/utils"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Icon } from "@iconify/react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

export default function ShopPage() {
  const t = useTranslations("shop")
  const tListing = useTranslations("productListing")
  const [activeCategory, setActiveCategory] = useState("All")
  const listingRef = useRef<HTMLDivElement>(null)

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const categoryFromUrl = params.get("category")
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl)
    }
  }, [])

  useEffect(() => {
    if (activeCategory !== "All" && listingRef.current) {
      listingRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [activeCategory])

  return (
    <main className="bg-background">
      {/* Shop Hero */}
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/shop/hero.png"
            alt="Shop Hero"
            className="h-full w-full object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-2 text-4xl font-medium tracking-tight md:text-6xl">
            <span className={instrumentSerif.className}>{t("heroTitle")}</span>{" "}
            {t("heroTitleEnd")}
          </h1>
          <p className="text-lg opacity-90">{t("heroSubtitle")}</p>
        </div>
      </section>

      {/* Brand Benefits Bar */}
      <section className="border-y border-border/50 bg-muted/20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-3">
          <div className="flex items-center justify-center gap-4">
            <Truck className="size-5 text-primary" />
            <p className="text-sm font-medium">{t("freeShipping")}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <RotateCcw className="size-5 text-primary" />
            <p className="text-sm font-medium">{t("returns")}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <ShieldCheck className="size-5 text-primary" />
            <p className="text-sm font-medium">{t("secure")}</p>
          </div>
        </div>
      </section>

      <div className="pt-8">
        <ProductCategory
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <div ref={listingRef} className="scroll-mt-24">
        <ProductListing
          products={filteredProducts}
          title={
            activeCategory === "All"
              ? tListing("allCollections")
              : `${activeCategory} ${tListing("collection")}`
          }
          description={
            activeCategory === "All"
              ? tListing("browseAll")
              : tListing("exploring", { category: activeCategory.toLowerCase() })
          }
        />
      </div>
      {/* Bespoke Style Guide Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-16">
        <div className="grid items-center gap-16 overflow-hidden rounded-3xl bg-muted/30 lg:grid-cols-2">
          <div className="space-y-8 p-12 lg:p-20">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
                {t("styleGuideTitle")}{" "}
                <span className={instrumentSerif.className}>
                  {t("styleGuideAccent")}
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("styleGuideText")}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-8 items-center justify-center rounded-full bg-primary/10 p-2">
                  <span className="text-xs font-bold text-primary">01</span>
                </div>
                <div>
                  <h4 className="font-medium">{t("tip1Title")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("tip1Text")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-8 items-center justify-center rounded-full bg-primary/10 p-2">
                  <span className="text-xs font-bold text-primary">02</span>
                </div>
                <div>
                  <h4 className="font-medium">{t("tip2Title")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("tip2Text")}
                  </p>
                </div>
              </div>
            </div>
            <Button
              className={cn(
                "group relative h-12 w-fit overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
                "cursor-pointer"
              )}
            >
              <span className="relative z-10 transition-all duration-500">
                {t("viewLookbook")}
              </span>
              <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Button>
          </div>
          <div className="h-full min-h-[400px]">
            <img
              src="/assets/shop/style-guide.png"
              alt="Style Guide"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Custom Newsletter Section */}
      <section className="relative overflow-hidden bg-foreground px-4 py-32 text-background">
        {/* Abstract Background Element */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="animate-in text-4xl font-medium tracking-tight duration-1000 fade-in slide-in-from-bottom-8 md:text-6xl">
              <span className={instrumentSerif.className}>
                {t("newsletterTitle")}
              </span>
            </h2>
            <p className="mx-auto max-w-xl animate-in text-lg opacity-70 delay-200 duration-1000 fade-in slide-in-from-bottom-8">
              {t("newsletterText")}
            </p>
          </div>

          <div className="mx-auto w-full max-w-xl animate-in delay-300 duration-1000 fade-in slide-in-from-bottom-8">
            <InputGroup className="flex h-auto w-full items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-background! shadow-2xl">
              <InputGroupInput
                type="email"
                placeholder={t("emailPlaceholder")}
                className="h-14 border-none bg-transparent ps-8 text-foreground placeholder:font-bold placeholder:text-muted-foreground/50 focus-visible:ring-0"
              />
              <InputGroupAddon align="inline-end" className="py-2 pe-2">
                <Button
                  className={cn(
                    "group relative h-11 w-fit cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium tracking-wider uppercase transition-all duration-500 hover:bg-primary hover:ps-14 hover:pe-6"
                  )}
                >
                  <span className="relative z-10 transition-all duration-500">
                    {t("joinNow")}
                  </span>
                  <span className="absolute right-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <p className="mt-6 text-[10px] tracking-widest uppercase opacity-40">
              {t("agree")}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
