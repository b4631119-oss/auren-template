"use client"

import { useCart } from "@/components/cart-context"
import { CheckoutForm } from "@/components/checkout-form"
import { Separator } from "@/components/ui/separator"
import {
  ShoppingBag,
  ChevronLeft,
  ShieldCheck,
  Truck,
  RefreshCcw,
  ArrowUpRight,
} from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { useCurrency } from "@/components/currency-context"
import { formatPrice } from "@/lib/currency"

export default function CheckoutPage() {
  const { items, total, itemCount } = useCart()
  const { currency } = useCurrency()
  const t = useTranslations("checkout")

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            {t("returnToStore")}
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
            {t("title")}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Main Checkout Area */}
          <div className="lg:col-span-7">
            <CheckoutForm />

            <div className="mt-20 grid grid-cols-1 gap-8 rounded-3xl border border-border/50 bg-muted/30 p-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Truck className="size-6 text-primary" />
                <h4 className="text-sm font-bold tracking-widest uppercase">
                  {t("freeShipping")}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t("freeShippingDesc")}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <RefreshCcw className="size-6 text-primary" />
                <h4 className="text-sm font-bold tracking-widest uppercase">
                  {t("easyReturns")}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t("easyReturnsDesc")}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <ShieldCheck className="size-6 text-primary" />
                <h4 className="text-sm font-bold tracking-widest uppercase">
                  {t("securePay")}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t("securePayDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight">
                {t("orderSummary")}
              </h3>

              <div className="custom-scrollbar max-h-[40vh] space-y-6 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-full object-cover"
                      />
                      <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <h4 className="line-clamp-2 text-sm leading-tight font-medium text-foreground">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm font-semibold">
                        {formatPrice(item.price * item.quantity, currency)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="bg-border/60" />

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t("subtotal")}</span>
                  <span className="font-medium">{formatPrice(total, currency)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t("estimatedShipping")}
                  </span>
                  <span className="font-medium">{t("free")}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-green-600">
                  <span>{t("discount")}</span>
                  <span>-{formatPrice(0, currency)}</span>
                </div>

                <Separator className="bg-border" />

                <div className="flex justify-between text-xl font-bold tracking-tight">
                  <span>{t("total")}</span>
                  <span>{formatPrice(total, currency)}</span>
                </div>
              </div>

              <div className="space-y-3 rounded-xl bg-muted/50 p-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={t("discountCode")}
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                  <Button
                    variant="outline"
                    className="h-9 rounded-lg px-4 text-xs font-semibold"
                  >
                    {t("apply")}
                  </Button>
                </div>
              </div>

              <p className="text-center text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {t("taxes")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
