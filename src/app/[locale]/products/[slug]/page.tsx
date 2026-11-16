import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductStatusBadge } from "@/components/ProductStatusBadge";
import { content, site } from "@/data/content";
import {
  getContent,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

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

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const t = getContent(locale);
  const product = t.products.find((entry) => entry.slug === slug);
  if (!product) return {};

  const path = `/${locale}/products/${slug}`;
  const alternate = (target: Locale) => `/${target}/products/${slug}`;

  return {
    title: product.name,
    description: product.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        en: alternate("en"),
        sv: alternate("sv"),
        "x-default": alternate("en"),
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "myfasset",
      locale: locale === "sv" ? "sv_SE" : "en_US",
      title: `${product.name} · myfasset`,
      description: product.metaDescription,
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
      title: `${product.name} · myfasset`,
      description: product.metaDescription,
      images: [t.meta.ogImage],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = getContent(locale);
  const product = t.products.find((entry) => entry.slug === slug);
  if (!product) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.common.home,
        item: `${site.url}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.productsSection.kicker,
        item: `${site.url}/${locale}#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${site.url}/${locale}/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <div className="bg-surface">
        <div className="container-page py-8 sm:py-12">
          <Link
            href={`/${locale}#products`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-gold-ink"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            {t.productPage.back}
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
            <div>
              <p className="kicker">{t.productPage.eyebrow}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <ProductStatusBadge
                  status={product.status}
                  label={t.productsSection.statusLabels[product.status]}
                />
                {product.placeholder ? (
                  <span className="inline-flex items-center rounded border border-gold/40 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-gold-ink">
                    {t.productsSection.placeholderBadge}
                  </span>
                ) : null}
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-heading sm:text-5xl lg:text-[3.4rem]">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {product.tagline}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <li key={tag}>
                    <span className="chip bg-surface">{tag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-navy-deep p-2 shadow-xl shadow-navy/10">
              <Image
                src={product.cover}
                alt={product.coverAlt}
                width={1200}
                height={800}
                unoptimized
                priority
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-page section-pad">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div className="space-y-14">
            <section
              aria-labelledby="overview-title"
              data-reveal
            >
              <h2
                id="overview-title"
                className="font-display text-2xl font-extrabold text-heading sm:text-3xl"
              >
                {t.productPage.overview}
              </h2>
              <span
                aria-hidden="true"
                className="mt-4 block h-1.5 w-14 rounded-full bg-gold"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink sm:text-lg">
                {product.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="features-title" data-reveal>
              <h2
                id="features-title"
                className="font-display text-2xl font-extrabold text-heading sm:text-3xl"
              >
                {t.productPage.features}
              </h2>
              <span
                aria-hidden="true"
                className="mt-4 block h-1.5 w-14 rounded-full bg-gold"
              />
              <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="border-t border-line pt-5"
                  >
                    <span
                      aria-hidden="true"
                      className="block h-3 w-3 bg-gold"
                    />
                    <h3 className="mt-4 font-display text-lg font-bold text-heading">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="screenshots-title" data-reveal>
              <h2
                id="screenshots-title"
                className="font-display text-2xl font-extrabold text-heading sm:text-3xl"
              >
                {t.productPage.screenshots}
              </h2>
              <span
                aria-hidden="true"
                className="mt-4 block h-1.5 w-14 rounded-full bg-gold"
              />
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                {product.screenshots.map((screenshot) => (
                  <figure
                    key={screenshot.src}
                    className="card overflow-hidden"
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1600}
                      height={1000}
                      unoptimized
                      className="h-auto w-full border-b border-line"
                    />
                    <figcaption className="px-4 py-3 text-xs font-medium text-muted">
                      {screenshot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </div>

          <aside data-reveal>
            <div className="card p-6 lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-bold text-heading">
                {t.productPage.details}
              </h2>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {t.productPage.status}
                  </dt>
                  <dd className="mt-2">
                    <ProductStatusBadge
                      status={product.status}
                      label={t.productsSection.statusLabels[product.status]}
                    />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {t.productPage.tags}
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <Link
                href={`/${locale}#contact`}
                className="btn btn-primary mt-7 w-full"
              >
                {t.productPage.ctaButton}
              </Link>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                {t.productPage.placeholderNote}
              </p>
            </div>
          </aside>
        </div>
      </div>

      <section className="container-page pb-16 sm:pb-20 lg:pb-24">
        <div className="relative overflow-hidden rounded-xl bg-navy p-7 text-white sm:p-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-gold/25"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-16 h-64 w-64 rounded-full border border-gold/10"
          />
          <span
            aria-hidden="true"
            className="absolute right-10 top-10 h-3 w-3 bg-gold"
          />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {t.productPage.ctaTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                {t.productPage.ctaText}
              </p>
            </div>
            <Link
              href={`/${locale}#contact`}
              className="btn btn-primary w-full md:w-auto"
            >
              {t.productPage.ctaButton}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
