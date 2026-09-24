import Header from "@/components/shadcn-space/blocks/hero-01/header"
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header"
import Footer from "@/components/shadcn-space/blocks/footer-01/footer"
import { CartProvider } from "@/components/cart-context"
import { AnnouncementBar } from "@/components/announcement-bar"
import { getTranslations, setRequestLocale } from "next-intl/server"

export default async function SiteLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("navigation")

  const navigationData: NavigationSection[] = [
    {
      title: t("home"),
      href: "/",
      isActive: true,
    },
    {
      title: t("shop"),
      href: "/shop",
    },
    {
      title: t("about"),
      href: "/about",
    },
    {
      title: t("contact"),
      href: "/contact",
    },
  ]

  return (
    <>
      <AnnouncementBar />
      <Header navigationData={navigationData} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
