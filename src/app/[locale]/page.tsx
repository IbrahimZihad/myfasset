import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { Principles } from "@/components/Principles";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Strengths } from "@/components/Strengths";
import { TechStack } from "@/components/TechStack";
import { WhyUs } from "@/components/WhyUs";
import { isLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Strengths locale={locale} />
      <Principles locale={locale} />
      <Products locale={locale} />
      <Process locale={locale} />
      <WhyUs locale={locale} />
      <TechStack locale={locale} />
      <Leadership locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
