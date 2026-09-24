"use client"

import { useMemo, useState } from "react"
import type { LucideIcon } from "lucide-react"
import { Heart, Home, LayoutGrid, Search, ShoppingBag, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { PRODUCTS } from "@/lib/data"
import { formatPrice } from "@/lib/currency"
import { useCart } from "@/components/cart-context"
import { useWishlist } from "@/components/wishlist-context"
import { useCurrency } from "@/components/currency-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"

interface NavItemProps {
  icon: LucideIcon
  label: string
  active?: boolean
  badge?: number
  href?: string
  onClick?: () => void
}

function NavItem({ icon: Icon, label, active, badge, href, onClick }: NavItemProps) {
  const content = (
    <>
      <span
        className={cn(
          "relative flex items-center justify-center rounded-full p-1.5 transition-colors",
          active && "bg-primary/10"
        )}
      >
        <Icon className={cn("size-5 transition-colors", active && "text-primary")} />
        {badge != null && badge > 0 && (
          <span className="absolute -right-2 -top-1 flex min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-4 text-primary-foreground">
            {badge}
          </span>
        )}
      </span>
      <span
        className={cn(
          "text-[10px] font-medium",
          active ? "text-primary" : "text-muted-foreground"
        )}
      >
        {label}
      </span>
    </>
  )

  const className =
    "flex min-h-11 flex-1 flex-col items-center justify-center gap-1 py-1.5"

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        aria-current={active ? "page" : undefined}
      >
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  )
}

function SearchSheet({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const t = useTranslations("bottomNav")
  const tNames = useTranslations("productNames")
  const { currency } = useCurrency()
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return PRODUCTS.filter((product) => {
      const localizedName = tNames.has(product.slug)
        ? tNames(product.slug)
        : product.name
      return (
        localizedName.toLowerCase().includes(q) ||
        product.name.toLowerCase().includes(q)
      )
    }).slice(0, 8)
  }, [query, tNames])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-0 p-0 sm:w-96"
      >
        <div className="flex items-center justify-between p-6">
          <SheetTitle className="text-2xl font-semibold tracking-tight">
            {t("searchTitle")}
          </SheetTitle>
          <SheetClose id="bottom-nav-search-close">
            <span className="flex size-11 items-center justify-center rounded-full border border-border">
              <X width={16} height={16} />
              <span className="sr-only">{t("close")}</span>
            </span>
          </SheetClose>
        </div>

        <div className="px-6 pb-6">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("searchPlaceholder")}
              className="h-12 rounded-full pl-10"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {!query.trim() ? (
            <p className="text-sm text-muted-foreground">{t("searchHint")}</p>
          ) : results.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t("searchEmpty")}</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {results.map((product) => {
                const name = tNames.has(product.slug)
                  ? tNames(product.slug)
                  : product.name
                return (
                  <li key={product.slug}>
                    <Link
                      href={`/shop/${product.slug}`}
                      onClick={() => onOpenChange(false)}
                      className="flex min-h-11 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-muted"
                    >
                      <img
                        src={product.image}
                        alt={name}
                        className="size-12 shrink-0 rounded-lg bg-muted object-cover"
                      />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium">{name}</span>
                        <span className="text-xs text-muted-foreground">
                          {formatPrice(product.price, currency)}
                        </span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function BottomNav() {
  const t = useTranslations("bottomNav")
  const pathname = usePathname()
  const { itemCount } = useCart()
  const { wishlistCount } = useWishlist()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const isHome = pathname === "/"
  const isShop = pathname.startsWith("/shop")
  const isWishlist = pathname.startsWith("/wishlist")

  return (
    <>
      <nav
        aria-label={t("label")}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-background/90 backdrop-blur-lg md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="mx-auto flex max-w-md items-stretch">
          <li className="flex flex-1">
            <NavItem href="/" icon={Home} label={t("home")} active={isHome} />
          </li>
          <li className="flex flex-1">
            <NavItem
              href="/shop"
              icon={LayoutGrid}
              label={t("catalog")}
              active={isShop}
            />
          </li>
          <li className="flex flex-1">
            <NavItem
              icon={Search}
              label={t("search")}
              active={isSearchOpen}
              onClick={() => setIsSearchOpen(true)}
            />
          </li>
          <li className="flex flex-1">
            <NavItem
              href="/wishlist"
              icon={Heart}
              label={t("wishlist")}
              active={isWishlist}
              badge={wishlistCount}
            />
          </li>
          <li className="flex flex-1">
            <NavItem
              icon={ShoppingBag}
              label={t("cart")}
              badge={itemCount}
              onClick={() => setIsCartOpen(true)}
            />
          </li>
        </ul>
      </nav>

      <SearchSheet open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <CartSidebar open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  )
}
