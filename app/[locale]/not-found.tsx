"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import Logo from "@/assets/logo/logo"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const t = useTranslations("notFound")

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-4 text-center">
      <Link href="/" className="transition-opacity hover:opacity-80">
        <Logo className="gap-3" />
      </Link>

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
          404
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {t("title")}
        </h1>
        <p className="max-w-md text-base text-muted-foreground">
          {t("description")}
        </p>
      </div>

      <Link href="/">
        <Button className="h-11 cursor-pointer rounded-full px-8 text-sm font-medium">
          {t("backHome")}
        </Button>
      </Link>

      <p className="text-xs text-muted-foreground">
        <a
          href="https://portfolio-devroot.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {t("credit")}
        </a>
      </p>
    </div>
  )
}
