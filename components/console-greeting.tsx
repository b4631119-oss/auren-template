"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"

// Console easter egg: greets visitors in their current locale.
export function ConsoleGreeting() {
  const t = useTranslations("easterEgg")
  const message = t("message")

  useEffect(() => {
    console.log(
      `%c ${message} `,
      "background:#0a0a0a;color:#ffffff;padding:10px 14px;border-radius:10px;font-size:13px;font-weight:600;font-family:sans-serif;letter-spacing:0.02em"
    )
  }, [message])

  return null
}
