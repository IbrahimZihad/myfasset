import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getContent, type Locale } from "@/lib/i18n";
import { revealDelay } from "@/lib/utils";

export function Products({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="section-pad scroll-mt-24 bg-surface"
    >
      <div className="container-page">
        <div data-reveal>
          <SectionHeading
            id="products-title"
            kicker={t.productsSection.kicker}
            title={t.productsSection.title}
            intro={t.productsSection.intro}
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {t.products.map((product, index) => (
            <div
              key={product.slug}
              data-reveal
              style={revealDelay(index)}
              className="h-full"
            >
              <ProductCard
                locale={locale}
                product={product}
                statusLabel={t.productsSection.statusLabels[product.status]}
                placeholderLabel={t.productsSection.placeholderBadge}
                learnMore={t.productsSection.learnMore}
              />
            </div>
          ))}
        </div>

        <p
          className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-muted"
          data-reveal
        >
          <span
            aria-hidden="true"
            className="mt-1.5 block h-2 w-2 shrink-0 bg-gold"
          />
          <span>{t.productsSection.placeholderNote}</span>
        </p>
      </div>
    </section>
  );
}
