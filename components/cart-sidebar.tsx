"use client"

import { useCart, type CartItem } from "./cart-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { useLocalizedProductName } from "@/lib/product-names"

interface CartSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function CartItemRow({ item }: { item: CartItem }) {
  const { removeItem, updateQuantity } = useCart()
  const displayName = useLocalizedProductName(item.slug || "", item.name)

  return (
    <div className="flex gap-4">
      <div className="relative aspect-square size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
        <img
          src={item.image}
          alt={displayName}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between py-1">
        <div className="space-y-1">
          <h4 className="line-clamp-1 font-medium text-foreground">
            {displayName}
          </h4>
          <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded-full border border-border bg-muted/50 p-1">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-background"
            >
              <Minus className="size-3" />
            </button>
            <span className="w-8 text-center text-xs font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-background"
            >
              <Plus className="size-3" />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="text-muted-foreground transition-colors hover:text-destructive"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function CartSidebar({ open, onOpenChange }: CartSidebarProps) {
  const { items, total, itemCount } = useCart()
  const t = useTranslations("checkout")

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="p-6">
          <SheetTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <ShoppingBag className="size-6" />
            {t("yourCart")}
            {itemCount > 0 && (
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                ({t("cartItems", { count: itemCount })})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <Separator />

        <div className="flex flex-1 flex-col overflow-hidden">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-8 text-center">
              <div className="rounded-full bg-muted p-6">
                <ShoppingBag className="size-10 text-muted-foreground opacity-50" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-medium">{t("cartEmpty")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("cartEmptyDesc")}
                </p>
              </div>
              <Button
                onClick={() => onOpenChange(false)}
                variant="outline"
                className="mt-4 rounded-full px-8"
              >
                {t("continueShopping")}
              </Button>
            </div>
          ) : (
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-6">
                  {items.map((item) => (
                    <CartItemRow key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-t bg-muted/30 p-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("subtotal")}</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {t("estimatedShipping")}
                    </span>
                    <span className="font-medium">{t("calculatedAtCheckout")}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-bold tracking-tight">
                    <span>{t("total")}</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => onOpenChange(false)}
                  className="w-full"
                >
                  <Button className="group relative h-12 w-full cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6">
                    <span className="relative z-10 transition-all duration-500">
                      {t("checkoutNow")}
                    </span>
                    <span className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-41px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </Button>
                </Link>
                <p className="mt-2 text-center text-[10px] tracking-widest text-muted-foreground uppercase">
                  {t("poweredBy")}
                </p>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
