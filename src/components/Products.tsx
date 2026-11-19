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

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          {t.products.map((product, index) => (
            <div
              key={product.slug}
              data-reveal
              style={revealDelay(index)}
              className="h-full"
            >
              <ProductCard
                product={product}
                statusLabel={t.productsSection.statusLabels[product.status]}
                visitLabel={t.productsSection.visitSite}
                newTabLabel={t.common.newTab}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
