import type { MetadataRoute } from "next";
import { content, site } from "@/data/content";
import { locales } from "@/lib/types";

const lastModified = new Date("2026-11-16T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        en: `${site.url}/en`,
        sv: `${site.url}/sv`,
        "x-default": `${site.url}/en`,
      },
    },
  }));

  const productPages = locales.flatMap((locale) =>
    content[locale].products.map((product) => ({
      url: `${site.url}/${locale}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${site.url}/en/products/${product.slug}`,
          sv: `${site.url}/sv/products/${product.slug}`,
          "x-default": `${site.url}/en/products/${product.slug}`,
        },
      },
    })),
  );

  return [...homePages, ...productPages];
}
