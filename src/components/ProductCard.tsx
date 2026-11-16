import Image from "next/image";
import Link from "next/link";
import { ProductStatusBadge } from "@/components/ProductStatusBadge";
import type { Locale } from "@/lib/i18n";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  locale: Locale;
  product: Product;
  statusLabel: string;
  placeholderLabel: string;
  learnMore: string;
}

export function ProductCard({
  locale,
  product,
  statusLabel,
  placeholderLabel,
  learnMore,
}: ProductCardProps) {
  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className="card group flex h-full flex-col overflow-hidden transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-navy-deep">
        <Image
          src={product.cover}
          alt={product.coverAlt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.025]"
        />
        <ProductStatusBadge
          status={product.status}
          label={statusLabel}
          className="absolute left-4 top-4"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-heading">
            {product.name}
          </h3>
          {product.placeholder ? (
            <span className="inline-flex items-center rounded border border-gold/40 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-gold-ink">
              {placeholderLabel}
            </span>
          ) : null}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {product.tagline}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li key={tag}>
              <span className="chip">{tag}</span>
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-gold-ink">
          {learnMore}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
