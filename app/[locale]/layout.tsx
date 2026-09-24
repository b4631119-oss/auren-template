import { Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale, getTranslations } from "next-intl/server"

import { routing } from "@/i18n/routing"
import "../globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-context"
import { WishlistProvider } from "@/components/wishlist-context"
import { CurrencyProvider } from "@/components/currency-context"
import { ConsoleGreeting } from "@/components/console-greeting"

const siteUrl = "https://auren.example"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Auren",
  url: siteUrl,
  creator: {
    "@type": "Person",
    name: "Bilolidin",
    url: "https://portfolio-devroot.vercel.app",
  },
  author: {
    "@type": "Person",
    name: "Bilolidin",
    url: "https://portfolio-devroot.vercel.app",
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta" })

  return {
    metadataBase: new URL("https://auren.example"),
    title: {
      default: t("homeTitle"),
      template: "%s",
    },
    description: t("homeDescription"),
    keywords: [
      "Auren", "Auren Store", "AUREN", "auren", "Auren Store",
      "интернет-магазин", "одежда", "аксессуары", "электроника", "уход",
      "online store", "fashion", "lifestyle"
    ],
    openGraph: {
      type: "website",
      siteName: "Auren Store",
      title: t("homeTitle"),
      description: t("homeDescription"),
      url: "https://auren.example",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Auren Store" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: ["/opengraph-image"],
    },
  }
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider>
          <ThemeProvider>
            <CartProvider>
              <WishlistProvider>
                <CurrencyProvider>
                  {children}
                  <ConsoleGreeting />
                </CurrencyProvider>
              </WishlistProvider>
            </CartProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
