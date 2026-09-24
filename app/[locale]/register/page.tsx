import RegisterForm from "@/components/shadcn-space/blocks/register-01/register";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta" })

  return {
    title: t("registerTitle"),
    description: t("registerDescription"),
  };
}

export default function RegisterPage() {
    return <RegisterForm />;
}
