import type { CSSProperties } from "react";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Stagger delay for scroll reveals, passed as a CSS custom property. */
export function revealDelay(index: number, step = 80): CSSProperties {
  return { "--reveal-delay": `${index * step}ms` } as CSSProperties;
}
