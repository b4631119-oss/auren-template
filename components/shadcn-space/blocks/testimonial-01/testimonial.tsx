"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "motion/react"
import { useTranslations } from "next-intl"

const Testimonials = () => {
  const t = useTranslations("testimonials")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="py-10">
      <div className="mx-auto max-w-7xl px-4 xl:px-16">
        <div className="flex flex-col items-center gap-12 self-stretch">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-2 sm:gap-4"
          >
            <Badge
              variant={"outline"}
              className="h-7 px-3 py-1 text-sm font-normal"
            >
              {t("badge")}
            </Badge>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold text-foreground sm:max-w-3xl md:text-4xl">
              {t("title")}
            </h2>
          </motion.div>
          {/* Grid */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-8"
            >
              <Card className="h-full w-full rounded-2xl border border-border bg-[url('https://images.shadcnspace.com/assets/backgrounds/testimonials-userBg-01.webp')] bg-cover bg-center bg-no-repeat object-cover p-8 md:min-h-96 md:pe-16">
                <CardContent className="flex h-full flex-col items-start justify-between gap-24 p-0">
                  <p className="text-base font-normal text-white/70">
                    {t("stories")}
                  </p>
                  <div className="flex flex-col gap-6">
                    <p className="text-xl font-medium text-white lg:text-2xl">
                      {t("quote1")}
                    </p>
                    <div>
                      <p className="text-base font-medium text-white">
                        Anaya Shah
                      </p>
                      <p className="text-sm font-normal text-white/70">
                        {t("verifiedBuyer")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-4"
            >
              <Card className="h-full w-full rounded-2xl border border-border bg-primary/10 p-8 md:min-h-96 dark:bg-primary/20">
                <CardContent className="flex h-full flex-col items-start justify-between gap-24 p-0">
                  <p className="text-base font-normal text-muted-foreground">
                    {t("facts")}
                  </p>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-4xl font-medium text-foreground lg:text-5xl">
                      {t("stat")}
                    </p>
                    <p className="text-xl font-medium text-foreground lg:text-2xl">
                      {t("statText")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-4"
            >
              <Card className="h-full w-full rounded-2xl border border-border bg-muted/30 p-8 dark:bg-secondary/10">
                <CardContent className="flex h-full flex-col items-start justify-between gap-6 p-0">
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-base font-normal text-muted-foreground">
                      {t("stories")}
                    </p>
                    <p className="text-xl font-medium text-foreground lg:text-2xl">
                      {t("quote2")}
                    </p>
                  </div>
                  <img
                    src="/assets/avatars/user-1.png"
                    alt="background-img"
                    width={"100%"}
                    height={220}
                    className="rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-8"
            >
              <Card className="group relative h-full w-full overflow-hidden rounded-2xl border border-border md:min-h-96">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/assets/shop/category-apparel.png"
                    alt="Premium Lifestyle"
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-colors duration-500" />
                </div>
                <CardContent className="relative z-10 flex h-full flex-col items-start justify-between gap-24 p-8">
                  <p className="text-base font-normal text-white/80">
                    {t("stories")}
                  </p>
                  <div className="flex flex-col gap-6">
                    <p className="text-xl font-medium text-white lg:text-2xl">
                      {t("quote3")}
                    </p>
                    <div>
                      <p className="text-base font-medium text-white">
                        Sarah Mitchell
                      </p>
                      <p className="text-sm font-normal text-white/80">
                        {t("loyalCustomer")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
