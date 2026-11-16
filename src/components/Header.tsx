"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Locale } from "@/lib/i18n";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  nav: NavItem[];
  cta: string;
  homeLabel: string;
  logoAlt: string;
  labels: {
    primaryNav: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    language: string;
    switchToEn: string;
    switchToSv: string;
  };
}

export function Header({
  locale,
  nav,
  cta,
  homeLabel,
  logoAlt,
  labels,
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const navLinks = nav.map((item) => (
    <Link
      key={item.href}
      href={`/${locale}${item.href}`}
      className="text-sm font-medium text-ink transition-colors hover:text-gold-ink"
    >
      {item.label}
    </Link>
  ));

  return (
    <header
      className="header-shell sticky top-0 z-50 border-b border-transparent transition-[background-color,box-shadow] duration-200"
      data-scrolled={scrolled}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <Link
            href={`/${locale}`}
            aria-label={homeLabel}
            className="shrink-0 rounded-lg"
          >
            <Logo alt={logoAlt} priority className="p-1.5" imageClassName="h-10 w-auto sm:h-12" />
          </Link>

          <nav
            aria-label={labels.primaryNav}
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher
                locale={locale}
                label={labels.language}
                toEn={labels.switchToEn}
                toSv={labels.switchToSv}
              />
            </div>
            <ThemeToggle label={labels.toggleTheme} />
            <Link
              href={`/${locale}#contact`}
              className="btn btn-primary hidden min-h-10 rounded-lg px-4 py-2 md:inline-flex"
            >
              {cta}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? labels.closeMenu : labels.openMenu}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-ink lg:hidden"
            >
              <span className="sr-only">
                {open ? labels.closeMenu : labels.openMenu}
              </span>
              {open ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          "mobile-menu border-t border-line bg-surface shadow-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label={labels.primaryNav}
          className="container-page flex flex-col py-4"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-3.5 text-base font-semibold text-heading"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5 flex items-center justify-between gap-4">
            <LanguageSwitcher
              locale={locale}
              label={labels.language}
              toEn={labels.switchToEn}
              toSv={labels.switchToSv}
            />
            <Link
              href={`/${locale}#contact`}
              onClick={() => setOpen(false)}
              className="btn btn-primary"
            >
              {cta}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
