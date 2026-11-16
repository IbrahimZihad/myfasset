import { content } from "@/data/content";
import { locales, type Locale } from "@/lib/types";

export { locales };
export type { Locale };

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getContent(locale: Locale) {
  return content[locale];
}

export function localePath(locale: Locale, path = ""): string {
  if (!path || path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Keeps the reader on the same page when switching language.
 * /en/products/product-one -> /sv/products/product-one
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  parts[0] = target;
  return `/${parts.join("/")}`;
}
