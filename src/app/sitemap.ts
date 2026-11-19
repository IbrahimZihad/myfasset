import type { MetadataRoute } from "next";
import { site } from "@/data/content";
import { locales } from "@/lib/types";

const lastModified = new Date("2026-11-19T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
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
}
