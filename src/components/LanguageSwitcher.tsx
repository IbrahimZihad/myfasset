"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  toEn: string;
  toSv: string;
}

export function LanguageSwitcher({
  locale,
  label,
  toEn,
  toSv,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-lg border border-line bg-surface p-0.5"
    >
      {locales.map((target) => {
        const active = target === locale;
        return (
          <Link
            key={target}
            href={switchLocalePath(pathname, target)}
            hrefLang={target}
            aria-current={active ? "true" : undefined}
            className={cn(
              "inline-flex h-8 min-w-10 items-center justify-center rounded-md px-2 text-[0.6875rem] font-bold uppercase tracking-wider transition-colors",
              active
                ? "bg-navy text-white dark:bg-gold dark:text-navy-deep"
                : "text-muted hover:text-heading",
            )}
          >
            {target}
            <span className="sr-only">
              {" "}
              — {target === "en" ? toEn : toSv}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
