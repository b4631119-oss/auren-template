"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Mail,
  MessageSquare,
  Phone,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"
import { Instrument_Serif } from "next/font/google"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

const FAQ_CATEGORIES = [
  {
    id: "shipping",
    titleKey: "shippingAndDelivery",
    icon: Truck,
    questions: [
      {
        q: "q1",
        a: "a1",
      },
      {
        q: "q2",
        a: "a2",
      },
      {
        q: "q3",
        a: "a3",
      },
    ],
  },
  {
    id: "returns",
    titleKey: "returnsAndExchanges",
    icon: RotateCcw,
    questions: [
      {
        q: "q2",
        a: "a2",
      },
      {
        q: "q3",
        a: "a3",
      },
    ],
  },
  {
    id: "payments",
    titleKey: "paymentsAndSecurity",
    icon: ShieldCheck,
    questions: [
      {
        q: "q5",
        a: "a5",
      },
    ],
  },
]

export default function FAQPage() {
  const t = useTranslations("faq")

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-20 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
            {t("helpTitle")}{" "}
            <span className={cn("italic", instrumentSerif.className)}>
              help
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("helpSubtitle")}
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-muted p-2 text-primary">
                  <category.icon className="size-6" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {t(category.titleKey)}
                </h2>
              </div>

              <Accordion
                defaultValue={["item-1", "item-2"]}
                className="w-full space-y-4"
              >
                {category.questions.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${category.id}-${idx}`}
                    className="rounded-2xl border border-border/60 bg-card px-6 transition-all hover:border-primary/20 hover:shadow-sm"
                  >
                    <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                      <div className="group flex w-full items-center justify-between">
                        <span className="transition-colors group-hover:text-primary">
                          {t(item.q)}
                        </span>
                        <ChevronRight className="size-5 shrink-0 transition-transform duration-300 group-aria-expanded:rotate-90" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 leading-relaxed text-muted-foreground">
                      {t(item.a)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Support CTA Redesign */}
        <section className="group relative mt-32 overflow-hidden rounded-[3rem] border border-border/50 bg-muted/30 p-8 md:p-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -z-10 size-96 bg-primary/5 blur-[100px] transition-all duration-1000 group-hover:bg-primary/10" />

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl">
                  {t("stillQuestions")}
                </h2>
                <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
                  {t("stillQuestionsText")}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="size-10 overflow-hidden rounded-full border-2 border-background bg-muted"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Team member"
                        className="size-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  <span className="font-bold text-primary">24/7</span>{" "}
                  {t("expertSupport")}
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-1">
              <div className="group/card rounded-[2rem] border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                  <Mail className="size-6" />
                </div>
                <h4 className="mb-2 text-lg font-bold">{t("emailSupport")}</h4>
                <p className="mb-6 text-sm text-muted-foreground">
                  {t("emailSupportDesc")}
                </p>
                <a
                  href="mailto:support@auren.com"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-primary"
                >
                  {t("emailUs")} <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="group/card rounded-[2rem] border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                  <MessageSquare className="size-6" />
                </div>
                <h4 className="mb-2 text-lg font-bold">{t("liveChat")}</h4>
                <p className="mb-6 text-sm text-muted-foreground">
                  {t("liveChatDesc")}
                </p>
                <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold transition-colors hover:text-primary">
                  {t("startChat")} <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
