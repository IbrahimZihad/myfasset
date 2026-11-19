import { notFound, permanentRedirect } from "next/navigation";
import { content } from "@/data/content";
import { getContent, isLocale, locales, type Locale } from "@/lib/i18n";

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = Array.from(
    new Set(
      locales.flatMap((locale) =>
        content[locale].products.map((product) => product.slug),
      ),
    ),
  );
  return slugs.map((slug) => ({ slug }));
}

/**
 * Products link straight to their live sites. This route keeps old
 * `/[locale]/products/[slug]` links working by redirecting to the live product.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const product = getContent(rawLocale as Locale).products.find(
    (entry) => entry.slug === slug,
  );
  if (!product) notFound();

  permanentRedirect(product.url);
}
