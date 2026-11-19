import Image from "next/image";
import { ProductStatusBadge } from "@/components/ProductStatusBadge";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  statusLabel: string;
  visitLabel: string;
  newTabLabel: string;
}

export function ProductCard({
  product,
  statusLabel,
  visitLabel,
  newTabLabel,
}: ProductCardProps) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex h-full flex-col overflow-hidden transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-navy-deep">
        <Image
          src={product.cover}
          alt={product.coverAlt}
          fill
          unoptimized
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.025]"
        />
        <ProductStatusBadge
          status={product.status}
          label={statusLabel}
          className="absolute left-4 top-4"
        />
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy-deep/60 text-white backdrop-blur-sm transition-colors duration-200 group-hover:bg-navy-deep/85"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold text-heading">
          {product.name}
        </h3>

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
          {visitLabel}
          <span className="sr-only"> {newTabLabel}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  );
}
