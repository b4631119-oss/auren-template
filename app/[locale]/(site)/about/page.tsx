import { Sparkles, Leaf, ShieldCheck, Heart, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import { Instrument_Serif } from "next/font/google"
import { cn } from "@/lib/utils"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta" })

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("about")

  const VALUES = [
    {
      icon: Sparkles,
      title: t("value1Title"),
      description: t("value1Text"),
    },
    {
      icon: Leaf,
      title: t("value2Title"),
      description: t("value2Text"),
    },
    {
      icon: ShieldCheck,
      title: t("value3Title"),
      description: t("value3Text"),
    },
    {
      icon: Heart,
      title: t("value4Title"),
      description: t("value4Text"),
    },
  ]

  return (
    <main className="bg-background">
      {/* Hero Section - Brand Story */}
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/about/hero.png"
            alt="Auren Store Brand Story"
            className="h-full w-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-medium tracking-tight md:text-7xl">
            {t("heroTitle")}{" "}
            <span className={instrumentSerif.className}>{t("heroTitleAccent")}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-light opacity-90 md:text-2xl">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-16">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-medium tracking-tight text-foreground">
              {t("missionTitle")} <br />
              <span className="text-primary italic">{t("missionAccent")}</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("missionText1")}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("missionText2")}
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/assets/about/quality.png"
              alt="Our Mission"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 px-4 py-24 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium tracking-tight">
              {t("valuesTitle")}
            </h2>
            <p className="text-muted-foreground">{t("valuesSubtitle")}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/50 bg-background p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-medium">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 text-center">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-4xl font-medium">{t("ctaTitle")}</h2>
          <p className="text-lg text-muted-foreground">{t("ctaText")}</p>
          <div className="pt-4">
            <Link href="/shop">
              <Button
                className={cn(
                  "group relative h-12 w-fit overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
                  "cursor-pointer"
                )}
              >
                <span className="relative z-10 transition-all duration-500">
                  {t("ctaButton")}
                </span>
                <span className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
