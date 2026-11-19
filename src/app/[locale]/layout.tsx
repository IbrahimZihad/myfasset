import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/data/content";
import {
  getContent,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";
import "../globals.css";

const inter = localFont({
  src: "../../fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 800",
  preload: true,
});

const manrope = localFont({
  src: "../../fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "500 800",
  preload: true,
});

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getContent(locale);
  const path = `/${locale}`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.meta.title,
      template: "%s · MYFASSET",
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    applicationName: "MYFASSET",
    authors: [{ name: "MYFASSET" }],
    creator: "MYFASSET",
    publisher: "MYFASSET",
    category: "technology",
    alternates: {
      canonical: path,
      languages: {
        en: "/en",
        sv: "/sv",
        "x-default": "/en",
      },
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      type: "website",
      url: path,
      siteName: "MYFASSET",
      locale: locale === "sv" ? "sv_SE" : "en_US",
      title: t.meta.title,
      description: t.meta.description,
      images: [
        {
          url: t.meta.ogImage,
          width: 1200,
          height: 630,
          alt: t.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [t.meta.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F5FA" },
    { media: "(prefers-color-scheme: dark)", color: "#061A44" },
  ],
};

const themeScript = `
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  try {
    var stored = window.localStorage.getItem("myfasset-theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) root.classList.add("dark");
    root.style.colorScheme = dark ? "dark" : "light";
  } catch (error) {}
})();
`;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getContent(locale as Locale);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: "myfasset",
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}${site.logo}`,
      width: 1100,
      height: 581,
    },
    foundingDate: site.founded,
    founder: {
      "@type": "Person",
      name: t.leadership.name,
      jobTitle: t.leadership.role,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    knowsAbout: [
      "SaaS",
      "Software development",
      "Cloud software",
      "Product design",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: "myfasset",
    inLanguage: ["en", "sv"],
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-page font-sans text-ink antialiased">
        <a href="#main" className="skip-link">
          {t.common.skipToContent}
        </a>

        <div className="top-rule" aria-hidden="true">
          <span />
        </div>

        <Header
          locale={locale}
          nav={t.nav}
          cta={t.header.cta}
          homeLabel={t.common.home}
          logoAlt={t.common.logoAlt}
          labels={{
            primaryNav: t.common.primaryNav,
            openMenu: t.common.openMenu,
            closeMenu: t.common.closeMenu,
            toggleTheme: t.common.toggleTheme,
            language: t.common.language,
            switchToEn: t.languageSwitch.toEn,
            switchToSv: t.languageSwitch.toSv,
          }}
        />

        <main id="main" tabIndex={-1}>
          {children}
        </main>

        <Footer locale={locale} />
        <ScrollReveal />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organization, website]),
          }}
        />
      </body>
    </html>
  );
}
