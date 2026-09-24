import Contact from "@/components/shadcn-space/blocks/contact-01/index";
import FAQ from "@/components/shadcn-space/blocks/faq-01/faq";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta" })

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("contact")

  return (
    <main>
      {/* Contact Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/contact/hero.png"
            alt="Contact Auren Store"
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-2">
            {t("heroTitle")}
          </h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      <div className="pt-10">
        <Contact />
      </div>
      <div className="py-20 border-t">
        <FAQ />
      </div>
    </main>
  );
}
